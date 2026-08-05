import { Router } from 'express'
import multer from 'multer'
import { verifyAuthToken } from '../utils/jwt.js'
import { env } from '../config/env.js'

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })
const tickets = new Map()

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

function getAvailabilitySnapshot() {
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

  for (const ticket of tickets.values()) {
    if (!SOLD_STATUSES.includes(ticket.status)) continue
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

function getIdentity(req) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  try {
    const payload = verifyAuthToken(token)
    return { userId: payload.userId || '', email: '' }
  } catch (_error) {
    return { userId: '', email: '' }
  }
}

function createTicket(req) {
  const identity = getIdentity(req)
  const id = `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const firstName = String(req.body?.firstName || 'Local').trim()
  const lastName = String(req.body?.lastName || 'User').trim()
  const fullName = `${firstName} ${lastName}`.trim() || 'Local User'
  const email = String(req.body?.email || 'local@ozillafestival.com').trim().toLowerCase()
  const now = new Date().toISOString()

  return {
    id,
    ticketId: `OZILLA-${id.slice(-8).toUpperCase()}`,
    uniqueTicketId: `OZILLA-${id.slice(-8).toUpperCase()}`,
    ownerId: identity.userId,
    ownerEmail: email,
    fullName,
    name: fullName,
    email,
    phone: String(req.body?.phone || '+923000000000').trim(),
    idCardNumber: String(req.body?.idCardNumber || '').trim(),
    festivalDay: req.body?.festivalDay === 'day2' ? 'day2' : 'day1',
    eventName: 'Ozilla Festival 2026',
    eventDate: '2026-11-01',
    eventTime: '08:00 PM',
    location: 'Lahore, Pakistan',
    ticketType: normalizeTicketType(req.body?.ticketType),
    quantity: Number(req.body?.quantity) || 1,
    status: 'approved',
    generatedAt: now,
    verifiedAt: null,
    createdAt: now,
    updatedAt: now
  }
}

function isOwnedBy(ticket, identity) {
  if (!identity.userId) return true
  return !ticket.ownerId || ticket.ownerId === identity.userId
}

router.post('/verify-qr', (req, res) => {
  res.json({ valid: true, ticket: req.body?.qrData || null, mode: 'no-db' })
})

router.get('/availability', (_req, res) => {
  res.json({ ...getAvailabilitySnapshot(), mode: 'no-db' })
})

router.get('/view/:id', (req, res) => {
  const ticket = tickets.get(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }
  res.json(ticket)
})

router.post('/request', (req, res) => {
  const availability = getAvailabilitySnapshot()
  const ticketType = normalizeTicketType(req.body?.ticketType)
  const requestedQuantity = Math.max(1, Math.min(10, Number(req.body?.quantity) || 1))
  const selectedAvailability = availability.byType[ticketType]
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

  const ticket = createTicket(req)
  tickets.set(ticket.id, ticket)
  res.status(201).json({ ...ticket, ibanNumber: env.ibanAccount, mode: 'no-db' })
})

router.get('/my-tickets', (req, res) => {
  const identity = getIdentity(req)
  res.json([...tickets.values()].filter((ticket) => isOwnedBy(ticket, identity)))
})

router.get('/admin/pending', (_req, res) => {
  res.json([...tickets.values()].filter((ticket) => ticket.status === 'pending'))
})

router.post('/admin/:id/decision', (req, res) => {
  const ticket = tickets.get(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  ticket.status = req.body?.decision === 'reject' ? 'rejected' : 'approved'
  ticket.updatedAt = new Date().toISOString()
  tickets.set(ticket.id, ticket)
  res.json({ message: 'Ticket updated successfully', ticket, mode: 'no-db' })
})

router.post('/:id/cancel', (req, res) => {
  const ticket = tickets.get(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  ticket.status = 'cancelled'
  ticket.updatedAt = new Date().toISOString()
  tickets.set(ticket.id, ticket)
  res.json({ message: 'Ticket cancelled successfully', ticket, mode: 'no-db' })
})

router.post('/:id/payment-proof', upload.single('paymentProof'), (req, res) => {
  const ticket = tickets.get(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }

  ticket.status = 'approved'
  ticket.paymentProofPath = req.file?.originalname || 'demo-payment-proof'
  ticket.generatedAt = ticket.generatedAt || new Date().toISOString()
  ticket.updatedAt = new Date().toISOString()
  tickets.set(ticket.id, ticket)
  res.json({ message: 'Payment proof uploaded and ticket generated successfully', ticket, mode: 'no-db' })
})

router.post('/:id/verify', (req, res) => {
  const ticket = tickets.get(req.params.id)
  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' })
  }
  res.json({ valid: true, ticket, qrData: req.body?.qrData || null, mode: 'no-db' })
})

export default router
