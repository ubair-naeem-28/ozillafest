import path from 'path'
import { nanoid } from 'nanoid'
import { Ticket } from '../models/Ticket.js'
import { User } from '../models/User.js'
import { contentData } from '../data/contentData.js'
import { env } from '../config/env.js'

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
  const tickets = await Ticket.find({ userId: req.user._id }).sort({ createdAt: -1 })
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

export async function payWithCard(req, res) {
  const ticket = await Ticket.findOne({
    _id: req.params.id,
    userId: req.user._id
  })
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  const { cardNumber, cardholderName, cardType, cardLast4 } = req.body || {}
  const rawNumber = String(cardNumber || '').replace(/\s/g, '')
  const last4 = cardLast4 || rawNumber.slice(-4) || '4242'
  const resolvedCardholder = String(cardholderName || ticket.fullName).trim()

  ticket.status = 'approved'
  ticket.paymentMethod = 'card'
  ticket.cardType = cardType || 'card'
  ticket.cardLast4 = last4
  ticket.cardholderName = resolvedCardholder
  ticket.transactionId = `TXN-${Date.now()}-${nanoid(6).toUpperCase()}`
  ticket.paidAt = new Date()
  ticket.generatedAt = new Date()
  ticket.verifiedAt = null
  await ticket.save()

  return res.json({
    message: 'Card payment deducted and ticket pass generated successfully',
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
