import path from 'path'
import { nanoid } from 'nanoid'
import { Ticket } from '../models/Ticket.js'
import { User } from '../models/User.js'
import { contentData } from '../data/contentData.js'
import { env } from '../config/env.js'
import { payfastService } from '../services/payfastService.js'

function resolveEvent(eventId) {
  const event = contentData.events.find((item) => item.id === eventId)
  if (event) {
    return {
      id: event.id,
      eventName: event.name,
      eventDate: event.date,
      eventTime: event.time,
      location: event.location
    }
  }

  return {
    id: 'oz2026',
    eventName: 'Ozilla Festival 2026',
    eventDate: '2026-11-01',
    eventTime: '08:00 PM',
    location: 'Lahore'
  }
}

function parseQrPayload(qrData) {
  if (!qrData) return null
  try {
    const parsed = typeof qrData === 'string' ? JSON.parse(qrData) : qrData
    if (!parsed || typeof parsed !== 'object') return null
    return parsed
  } catch (_error) {
    return null
  }
}

function normalizeText(value) {
  return String(value || '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function validateQrPayloadShape(payload) {
  const requiredFields = [
    'ticketId',
    'fullName',
    'email',
    'phone',
    'eventName',
    'eventDate',
    'eventTime'
  ]

  const missing = requiredFields.filter((field) => !payload[field])
  return {
    valid: missing.length === 0,
    missing
  }
}

async function normalizeLegacyStatus(ticket) {
  if (!ticket) return ticket
  if (ticket.status === 'confirmed' || ticket.status === 'payment_submitted') {
    ticket.status = 'approved'
    if (!ticket.generatedAt) {
      ticket.generatedAt = ticket.updatedAt || new Date()
    }
    ticket.verifiedAt = ticket.verifiedAt || null
    await ticket.save()
  }
  return ticket
}

function canUserCancel(status) {
  return ['pending', 'payment_submitted'].includes(status)
}

const TICKET_CAPACITY = {
  regular: 1200,
  vip: 1,
  premium: 120
}

const SOLD_STATUSES = ['pending', 'payment_submitted', 'approved', 'confirmed']

function normalizeTicketType(value) {
  const candidate = String(value || 'regular').toLowerCase().trim()
  if (candidate === 'general') return 'regular'
  return TICKET_CAPACITY[candidate] ? candidate : 'regular'
}

async function getTicketAvailabilitySnapshot() {
  const tickets = await Ticket.find({ status: { $in: SOLD_STATUSES } }).select('ticketType quantity status')
  const byType = Object.entries(TICKET_CAPACITY).reduce((acc, [type, capacity]) => {
    acc[type] = {
      type,
      label: type === 'regular' ? 'General' : type === 'vip' ? 'VIP' : 'Premium',
      capacity,
      sold: 0,
      remaining: capacity,
      soldOut: false
    }
    return acc
  }, {})

  for (const ticket of tickets) {
    const type = normalizeTicketType(ticket.ticketType)
    byType[type].sold += Number(ticket.quantity) || 1
  }

  let totalCapacity = 0
  let totalSold = 0
  for (const item of Object.values(byType)) {
    item.sold = Math.min(item.sold, item.capacity)
    item.remaining = Math.max(0, item.capacity - item.sold)
    item.soldOut = item.remaining <= 0
    totalCapacity += item.capacity
    totalSold += item.sold
  }

  return {
    capacity: totalCapacity,
    sold: totalSold,
    remaining: Math.max(0, totalCapacity - totalSold),
    soldOut: Object.values(byType).every((item) => item.soldOut),
    byType
  }
}

export async function getTicketAvailability(_req, res) {
  const availability = await getTicketAvailabilitySnapshot()
  return res.json(availability)
}

export async function getMyTickets(req, res) {
  const userEmail = String(req.user.email || '').toLowerCase().trim()
  const tickets = await Ticket.find({
    $or: [
      { userId: req.user._id },
      { email: userEmail }
    ]
  }).sort({ createdAt: -1 })
  for (const ticket of tickets) {
    await normalizeLegacyStatus(ticket)
  }
  return res.json(tickets.map((ticket) => ticket.toJSON()))
}

export async function requestTicket(req, res) {
  const {
    firstName,
    lastName,
    name,
    email,
    phone,
    idCardNumber,
    festivalDay,
    password,
    confirmPassword,
    ticketType = 'regular',
    quantity = 1
  } = req.body

  const fullName = (name || `${firstName || ''} ${lastName || ''}`).trim()
  if (!fullName || !email || !phone || !idCardNumber) {
    return res.status(400).json({ message: 'Missing required fields for ticket request' })
  }

  if (password && confirmPassword && password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const eventInfo = resolveEvent('oz2026')
  const normalizedEmail = String(email).toLowerCase().trim()
  const normalizedPhone = String(phone).trim()
  const normalizedIdCard = String(idCardNumber).trim()
  const normalizedFestivalDay = String(festivalDay || 'day1').toLowerCase()
  if (!/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(normalizedIdCard)) {
    return res.status(400).json({ message: 'Invalid ID card number format' })
  }
  if (!['day1', 'day2'].includes(normalizedFestivalDay)) {
    return res.status(400).json({ message: 'Invalid day selection' })
  }

  const normalizedTicketType = normalizeTicketType(ticketType)
  const requestedQuantity = Math.max(1, Math.min(10, Number(quantity) || 1))
  const availability = await getTicketAvailabilitySnapshot()
  const selectedAvailability = availability.byType[normalizedTicketType]
  if (availability.soldOut || !selectedAvailability || selectedAvailability.remaining <= 0) {
    return res.status(409).json({
      message: 'Tickets are sold out. The ticket portal is currently locked.',
      soldOut: true,
      availability
    })
  }

  if (requestedQuantity > selectedAvailability.remaining) {
    return res.status(409).json({
      message: `Only ${selectedAvailability.remaining} ${selectedAvailability.label} ticket${selectedAvailability.remaining === 1 ? '' : 's'} remaining.`,
      soldOut: false,
      availability
    })
  }

  let ownerId = req.user?._id
  if (!ownerId) {
    let owner = await User.findOne({ email: normalizedEmail })
    if (!owner) {
      owner = await User.create({
        firstName: firstName || fullName.split(' ')[0] || 'Guest',
        lastName: lastName || fullName.split(' ').slice(1).join(' ') || 'User',
        name: fullName,
        email: normalizedEmail,
        phone: normalizedPhone,
        emailVerified: true
      })
    } else {
      if (!owner.phone) owner.phone = normalizedPhone
      if (!owner.name) owner.name = fullName
      if (!owner.firstName && firstName) owner.firstName = firstName
      if (!owner.lastName && lastName) owner.lastName = lastName
      owner.emailVerified = true
      await owner.save()
    }
    ownerId = owner._id
  }

  const ticket = await Ticket.create({
    userId: ownerId,
    ticketId: `OZILLA-${nanoid(10).toUpperCase()}`,
    fullName,
    email: normalizedEmail,
    phone: normalizedPhone,
    idCardNumber: normalizedIdCard,
    festivalDay: normalizedFestivalDay,
    eventId: eventInfo.id || 'oz2026',
    eventName: eventInfo.eventName,
    eventDate: String(eventInfo.eventDate).trim(),
    eventTime: String(eventInfo.eventTime).trim(),
    location: String(eventInfo.location).trim(),
    ticketType: normalizedTicketType,
    quantity: requestedQuantity,
    passwordSnapshot: password || null,
    status: 'pending'
  })

  return res.status(201).json({
    ...ticket.toJSON(),
    ibanNumber: env.ibanAccount
  })
}

export async function getTicketById(req, res) {
  let filter = { _id: req.params.id }
  if (req.user) {
    filter = req.user.role === 'admin'
      ? { _id: req.params.id }
      : { _id: req.params.id, userId: req.user._id }
  }

  const ticket = await Ticket.findOne(filter)

  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  await normalizeLegacyStatus(ticket)

  return res.json(ticket.toJSON())
}

function isValidLuhn(cardNumber) {
  const digits = String(cardNumber || '').replace(/\D/g, '')
  if (digits.length < 13 || digits.length > 19) return false
  let sum = 0
  let shouldDouble = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10)
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  return sum % 10 === 0
}

function detectBankAndCardBrand(cardNumber) {
  const clean = String(cardNumber || '').replace(/\D/g, '')
  let brand = 'Card'
  if (/^4/.test(clean)) brand = 'Visa'
  else if (/^(5[1-5]|2[2-7])/.test(clean)) brand = 'Mastercard'
  else if (/^(62|81)/.test(clean)) brand = 'UnionPay'
  else if (/^9/.test(clean)) brand = 'PayPak'

  let bank = 'Commercial Bank'
  const prefix4 = clean.slice(0, 4)
  const prefix2 = clean.slice(0, 2)

  if (['5893', '4012', '5399', '4519', '4507'].includes(prefix4)) {
    bank = 'Meezan Bank Ltd'
  } else if (['4116', '5241', '4214', '5488', '4027'].includes(prefix4)) {
    bank = 'Habib Bank Limited (HBL)'
  } else if (['4848', '5189', '4589', '5294', '4282'].includes(prefix4)) {
    bank = 'Bank Alfalah'
  } else if (['4351', '5236', '4271', '5521', '4046'].includes(prefix4)) {
    bank = 'MCB Bank'
  } else if (['4021', '5123', '4921', '5424'].includes(prefix4)) {
    bank = 'Standard Chartered'
  } else if (['4203', '5250', '4894', '5320'].includes(prefix4)) {
    bank = 'United Bank Limited (UBL)'
  } else if (['4008', '5456', '4692', '5378'].includes(prefix4)) {
    bank = 'Allied Bank Limited (ABL)'
  } else if (['4052', '5324', '4258'].includes(prefix4)) {
    bank = 'Askari Bank'
  } else if (['4092', '5472', '4128'].includes(prefix4)) {
    bank = 'Faysal Bank'
  } else if (prefix2 === '62' || prefix2 === '81') {
    bank = 'UnionPay International Bank'
  } else {
    bank = `${brand} Verified Bank`
  }

  return { brand, bank }
}

function getTicketPrice(ticketType) {
  const norm = String(ticketType || '').toLowerCase()
  if (norm === 'premium') return 25000
  if (norm === 'vip') return 15000
  return 1 // General is 1 PKR
}

async function findUserTicket(paramId, user) {
  const idStr = String(paramId || '').trim()
  const isObjId = mongoose.Types.ObjectId.isValid(idStr)
  const idQueries = [
    ...(isObjId ? [{ _id: idStr }] : []),
    { ticketId: idStr },
    { uniqueTicketId: idStr }
  ]

  const userQueries = []
  if (user?._id) userQueries.push({ userId: user._id })
  if (user?.id) userQueries.push({ userId: user.id })
  if (user?.email) userQueries.push({ email: user.email.toLowerCase().trim() })

  if (userQueries.length > 0) {
    const ticket = await Ticket.findOne({
      $and: [
        { $or: idQueries },
        { $or: userQueries }
      ]
    })
    if (ticket) return ticket
  }

  return await Ticket.findOne({ $or: idQueries })
}

export async function payWithCard(req, res) {
  const ticket = await findUserTicket(req.params.id, req.user)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  const { cardNumber, cardholderName, cardType, cardLast4, expiryDate, cvv } = req.body || {}
  const rawNumber = String(cardNumber || '').replace(/\s/g, '')

  if (!rawNumber || rawNumber.length < 15) {
    return res.status(400).json({ message: 'Please provide a valid card number.' })
  }

  const { brand, bank } = detectBankAndCardBrand(rawNumber)
  const last4 = cardLast4 || rawNumber.slice(-4) || '4242'
  const resolvedCardholder = String(cardholderName || ticket.fullName).trim()
  const totalAmount = getTicketPrice(ticket.ticketType) * (ticket.quantity || 1)

  ticket.status = 'approved'
  ticket.paymentMethod = 'card'
  ticket.cardType = cardType || brand.toLowerCase()
  ticket.cardLast4 = last4
  ticket.cardholderName = resolvedCardholder
  ticket.accountTitle = resolvedCardholder
  ticket.issuingBank = bank
  ticket.payoutAccount = `${env.payoutAccountTitle} | ${env.payoutBankName} (${env.ibanAccount})`
  ticket.transactionId = `TXN-CRD-${Date.now()}-${nanoid(6).toUpperCase()}`
  ticket.paidAt = new Date()
  ticket.generatedAt = new Date()
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({
    message: `Payment of PKR ${totalAmount.toLocaleString()} deducted from ${bank} ${brand} card and credited to organizer account successfully.`,
    ticket: ticket.toJSON()
  })
}

export async function payWithJazzCash(req, res) {
  const ticket = await findUserTicket(req.params.id, req.user)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  const { mobileNumber, accountTitle } = req.body || {}
  const rawMobile = String(mobileNumber || '').replace(/\D/g, '')

  if (!rawMobile || rawMobile.length < 10) {
    return res.status(400).json({ message: 'Please provide a valid 11-digit JazzCash mobile number (e.g. 03001234567).' })
  }

  const resolvedTitle = String(accountTitle || ticket.fullName).trim()
  const totalAmount = getTicketPrice(ticket.ticketType) * (ticket.quantity || 1)

  ticket.status = 'approved'
  ticket.paymentMethod = 'jazzcash'
  ticket.senderPhone = rawMobile.startsWith('92') ? `0${rawMobile.slice(2)}` : rawMobile
  ticket.accountTitle = resolvedTitle
  ticket.cardholderName = resolvedTitle
  ticket.issuingBank = 'JazzCash Mobile Wallet'
  ticket.payoutAccount = `${env.jazzcashTitle} (JazzCash: ${env.jazzcashAccount})`
  ticket.transactionId = `TXN-JC-${Date.now()}-${nanoid(6).toUpperCase()}`
  ticket.paidAt = new Date()
  ticket.generatedAt = new Date()
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({
    message: `JazzCash payment of PKR ${totalAmount.toLocaleString()} deducted successfully! Your QR ticket is ready.`,
    ticket: ticket.toJSON()
  })
}

export async function payWithEasypaisa(req, res) {
  const ticket = await findUserTicket(req.params.id, req.user)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  const { mobileNumber, accountTitle } = req.body || {}
  const rawMobile = String(mobileNumber || '').replace(/\D/g, '')

  if (!rawMobile || rawMobile.length < 10) {
    return res.status(400).json({ message: 'Please provide a valid 11-digit Easypaisa mobile number (e.g. 03331234567).' })
  }

  const resolvedTitle = String(accountTitle || ticket.fullName).trim()
  const totalAmount = getTicketPrice(ticket.ticketType) * (ticket.quantity || 1)

  ticket.status = 'approved'
  ticket.paymentMethod = 'easypaisa'
  ticket.senderPhone = rawMobile.startsWith('92') ? `0${rawMobile.slice(2)}` : rawMobile
  ticket.accountTitle = resolvedTitle
  ticket.cardholderName = resolvedTitle
  ticket.issuingBank = 'Easypaisa Mobile Wallet'
  ticket.payoutAccount = `${env.easypaisaTitle} (Easypaisa: ${env.easypaisaAccount})`
  ticket.transactionId = `TXN-EP-${Date.now()}-${nanoid(6).toUpperCase()}`
  ticket.paidAt = new Date()
  ticket.generatedAt = new Date()
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({
    message: `Easypaisa payment of PKR ${totalAmount.toLocaleString()} deducted successfully! Your QR ticket is ready.`,
    ticket: ticket.toJSON()
  })
}
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({
    message: 'Easypaisa wallet payment deducted successfully! Your QR ticket is ready.',
    ticket: ticket.toJSON()
  })
}

export async function uploadPaymentProof(req, res) {
  const ticket = await Ticket.findOne({
    _id: req.params.id,
    userId: req.user._id
  })
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  if (!req.file) {
    return res.status(400).json({ message: 'Payment proof image is required' })
  }

  ticket.paymentProofPath = path.join('uploads', 'payment-proofs', req.file.filename)
  ticket.paymentProofPath = ticket.paymentProofPath.replaceAll('\\', '/')
  ticket.paymentProofUploadedAt = new Date()
  ticket.status = 'approved'
  ticket.generatedAt = new Date()
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({ message: 'Payment proof uploaded and ticket generated successfully', ticket: ticket.toJSON() })
}

export async function verifyTicket(req, res) {
  const ticket = await Ticket.findById(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  await normalizeLegacyStatus(ticket)
  if (ticket.status !== 'approved') {
    return res.status(400).json({ message: 'Ticket is not approved yet' })
  }

  ticket.verifiedAt = new Date()
  await ticket.save()

  return res.json({
    status: ticket.status,
    ticket: ticket.toJSON()
  })
}

export async function verifyTicketByQr(req, res) {
  const payload = parseQrPayload(req.body?.qrData)
  if (!payload) {
    return res.status(400).json({ message: 'Invalid QR payload format' })
  }

  const shapeCheck = validateQrPayloadShape(payload)
  if (!shapeCheck.valid) {
    return res.status(400).json({
      message: 'QR payload is missing required fields',
      missingFields: shapeCheck.missing
    })
  }

  const ticket = await Ticket.findOne({ ticketId: String(payload.ticketId).trim() })
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }
  await normalizeLegacyStatus(ticket)

  const mismatches = []
  if (normalizeText(payload.fullName) !== normalizeText(ticket.fullName)) mismatches.push('fullName')
  if (normalizeText(payload.email) !== normalizeText(ticket.email)) mismatches.push('email')
  if (normalizeText(payload.phone) !== normalizeText(ticket.phone)) mismatches.push('phone')
  if (normalizeText(payload.eventName) !== normalizeText(ticket.eventName)) mismatches.push('eventName')
  if (normalizeText(payload.eventDate) !== normalizeText(ticket.eventDate)) mismatches.push('eventDate')
  if (normalizeText(payload.eventTime) !== normalizeText(ticket.eventTime)) mismatches.push('eventTime')

  if (mismatches.length > 0) {
    return res.status(400).json({
      message: 'QR payload validation failed',
      mismatchedFields: mismatches
    })
  }

  if (ticket.status !== 'approved') {
    return res.status(400).json({
      message: 'Ticket is not approved yet',
      status: ticket.status,
      ticket: ticket.toJSON()
    })
  }

  ticket.verifiedAt = new Date()
  await ticket.save()

  return res.json({
    message: 'Ticket verified successfully',
    status: ticket.status,
    ticket: ticket.toJSON()
  })
}

export async function getPendingTicketsAdmin(_req, res) {
  const tickets = await Ticket.find({ status: 'payment_submitted' }).sort({ updatedAt: -1 })
  for (const ticket of tickets) {
    await normalizeLegacyStatus(ticket)
  }
  return res.json(tickets.map((ticket) => ticket.toJSON()))
}

export async function decideTicketAdmin(req, res) {
  const { decision } = req.body
  if (!['approved', 'rejected'].includes(String(decision).toLowerCase())) {
    return res.status(400).json({ message: 'decision must be approved or rejected' })
  }

  const ticket = await Ticket.findById(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  await normalizeLegacyStatus(ticket)
  if (ticket.status !== 'payment_submitted') {
    return res.status(400).json({ message: `Ticket cannot be ${decision} from status ${ticket.status}` })
  }

  ticket.status = String(decision).toLowerCase() === 'approved' ? 'approved' : 'rejected'
  if (ticket.status === 'approved') {
    ticket.generatedAt = new Date()
    ticket.verifiedAt = null
  }
  await ticket.save()

  return res.json({ message: `Ticket ${ticket.status}`, ticket: ticket.toJSON() })
}

export async function cancelTicket(req, res) {
  const ticket = await Ticket.findOne({
    _id: req.params.id,
    userId: req.user._id
  })
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  await normalizeLegacyStatus(ticket)
  if (!canUserCancel(ticket.status)) {
    return res.status(400).json({ message: `Ticket cannot be cancelled from status ${ticket.status}` })
  }

  ticket.status = 'cancelled'
  await ticket.save()
  return res.json({ message: 'Ticket cancelled successfully', ticket: ticket.toJSON() })
}

export async function initiatePayFastCheckout(req, res) {
  const ticket = await Ticket.findOne({
    _id: req.params.id,
    userId: req.user._id
  })
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  const { returnUrl, cancelUrl } = req.body || {}
  const checkoutPayload = payfastService.createCheckoutPayload(ticket, returnUrl, cancelUrl)

  return res.json({
    message: 'PayFast gateway checkout session initiated successfully',
    ticketId: ticket.id,
    amount: (ticket.quantity || 1) * getTicketPrice(ticket.ticketType),
    checkout: checkoutPayload,
    checkoutUrl: `${env.frontendUrl}/tickets/gateway-simulator?basket_id=${checkoutPayload.basket_id}&ticket_id=${ticket.id}&amount=${checkoutPayload.txnamt}`
  })
}

export async function handlePayFastIpn(req, res) {
  const ipnData = req.body || {}
  const basketId = String(ipnData.basket_id || '')
  const ticketId = ipnData.ticket_id || (basketId.startsWith('OZILLA-') ? basketId.split('-')[1] : null)

  let ticket = null
  if (ticketId) {
    ticket = await Ticket.findOne({ $or: [{ _id: ticketId }, { ticketId: ticketId }] })
  }

  if (ticket) {
    ticket.status = 'approved'
    ticket.paymentMethod = 'payfast_gateway'
    ticket.transactionId = ipnData.transaction_id || `TXN-PF-${Date.now()}-${nanoid(6).toUpperCase()}`
    ticket.paidAt = new Date()
    ticket.generatedAt = new Date()
    ticket.verifiedAt = null
    ticket.issuingBank = ipnData.bank_name || 'PayFast Multi-Channel Gateway'
    ticket.payoutAccount = `${env.payoutAccountTitle} | ${env.payoutBankName} (${env.ibanAccount})`
    await ticket.save()
  }

  return res.status(200).json({
    status: 'success',
    message: 'PayFast IPN received and processed successfully',
    ticketId: ticket?.id
  })
}

export async function handlePayFastReturn(req, res) {
  const { basket_id, err_code, transaction_id } = req.query || {}
  const ticketId = basket_id?.startsWith('OZILLA-') ? basket_id.split('-')[1] : null

  if (ticketId) {
    const ticket = await Ticket.findById(ticketId)
    if (ticket && (!err_code || err_code === '000')) {
      ticket.status = 'approved'
      ticket.paymentMethod = 'payfast_gateway'
      ticket.transactionId = transaction_id || `TXN-PF-${Date.now()}-${nanoid(6).toUpperCase()}`
      ticket.paidAt = new Date()
      ticket.generatedAt = new Date()
      await ticket.save()
    }
  }

  const destination = ticketId
    ? `${env.frontendUrl}/tickets/view/${ticketId}?payment=success`
    : `${env.frontendUrl}/tickets`

  return res.redirect(destination)
}
