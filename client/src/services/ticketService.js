import apiClient from './apiClient'
import { tokenStorage } from '../utils/tokenStorage.util'

const LOCAL_TICKETS_KEY = 'ozilla_local_tickets'
let forceLocalMode = false

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

function getLocalAvailability() {
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

  for (const ticket of readLocalTickets()) {
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
    byType,
    mode: 'local-fallback'
  }
}

function isBackendUnreachable(error) {
  return !error?.response && (
    error?.code === 'ERR_NETWORK' ||
    error?.message?.includes('Network Error') ||
    error?.message?.includes('ECONNREFUSED')
  )
}

function markLocalMode(error) {
  if (isBackendUnreachable(error)) {
    forceLocalMode = true
    return true
  }
  return false
}

function readLocalTickets() {
  try {
    const raw = localStorage.getItem(LOCAL_TICKETS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    if (!Array.isArray(parsed)) return []
    return parsed.map((ticket) => {
      if (ticket?.status === 'payment_submitted') {
        return {
          ...ticket,
          status: 'approved',
          generatedAt: ticket.generatedAt || ticket.updatedAt || new Date().toISOString(),
          verifiedAt: ticket.verifiedAt || null
        }
      }
      return ticket
    })
  } catch (_error) {
    return []
  }
}

function writeLocalTickets(tickets) {
  localStorage.setItem(LOCAL_TICKETS_KEY, JSON.stringify(tickets))
}

function parseLocalToken(token) {
  const raw = String(token || '')
  const base64 = raw.startsWith('local.') ? raw.slice(6) : raw
  try {
    return JSON.parse(atob(base64))
  } catch (_error) {
    return null
  }
}

function getCurrentIdentity() {
  const payload = parseLocalToken(tokenStorage.getToken())
  return {
    userId: String(payload?.sub || '').trim(),
    email: String(payload?.email || '').toLowerCase().trim()
  }
}

function isOwnedByCurrentUser(ticket, identity) {
  if (!identity?.email && !identity?.userId) return false
  const ownerEmail = String(ticket?.ownerEmail || '').toLowerCase().trim()
  const ownerId = String(ticket?.ownerId || '').trim()
  const ticketEmail = String(ticket?.email || '').toLowerCase().trim()

  if (ownerEmail && identity.email) return ownerEmail === identity.email
  if (ownerId && identity.userId) return ownerId === identity.userId
  if (identity.email) return ticketEmail === identity.email
  return false
}

function createLocalTicket(ticketData = {}) {
  const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const fullName = (
    ticketData?.name ||
    `${ticketData?.firstName || ''} ${ticketData?.lastName || ''}`
  ).trim() || 'Demo User'

  const selectedEvent = { id: 'oz2026', name: 'Ozilla Festival 2026', date: '2026-11-01', time: '08:00 PM', location: 'Lahore' }
  const now = new Date().toISOString()
  const identity = getCurrentIdentity()
  const resolvedEmail = String(ticketData?.email || identity?.email || 'local@ozillafestival.com').toLowerCase().trim()

  return {
    id,
    ticketId: `OZILLA-${id.slice(-8).toUpperCase()}`,
    uniqueTicketId: `OZILLA-${id.slice(-8).toUpperCase()}`,
    ownerId: identity?.userId || '',
    ownerEmail: resolvedEmail,
    fullName,
    name: fullName,
    email: resolvedEmail,
    phone: String(ticketData?.phone || '+923000000000').trim(),
    idCardNumber: String(ticketData?.idCardNumber || '').trim(),
    festivalDay: ticketData?.festivalDay === 'day2' ? 'day2' : 'day1',
    eventId: selectedEvent.id,
    eventName: selectedEvent.name,
    eventDate: selectedEvent.date,
    eventTime: selectedEvent.time,
    location: selectedEvent.location,
    ticketType: normalizeTicketType(ticketData?.ticketType),
    quantity: Number(ticketData?.quantity) || 1,
    status: 'pending',
    createdAt: now,
    updatedAt: now
  }
}

export const ticketService = {
  async getAvailability() {
    if (forceLocalMode) return getLocalAvailability()
    try {
      const response = await apiClient.get('/tickets/availability')
      return response.data
    } catch (error) {
      if (markLocalMode(error)) return getLocalAvailability()
      throw error
    }
  },

  async getMyTickets() {
    if (forceLocalMode) {
      const identity = getCurrentIdentity()
      return readLocalTickets().filter((ticket) => isOwnedByCurrentUser(ticket, identity))
    }
    try {
      const response = await apiClient.get('/tickets/my-tickets')
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const identity = getCurrentIdentity()
        return readLocalTickets().filter((ticket) => isOwnedByCurrentUser(ticket, identity))
      }
      throw error
    }
  },

  async requestTicket(ticketData) {
    if (forceLocalMode) {
      const availability = getLocalAvailability()
      const ticketType = normalizeTicketType(ticketData?.ticketType)
      const requestedQuantity = Math.max(1, Math.min(10, Number(ticketData?.quantity) || 1))
      const selectedAvailability = availability.byType[ticketType]
      if (availability.soldOut || !selectedAvailability || selectedAvailability.remaining <= 0) {
        const soldOutError = new Error('Tickets are sold out. The ticket portal is currently locked.')
        soldOutError.response = { status: 409, data: { message: soldOutError.message, soldOut: true, availability } }
        throw soldOutError
      }
      if (requestedQuantity > selectedAvailability.remaining) {
        const remainingError = new Error(`Only ${selectedAvailability.remaining} ${selectedAvailability.label} ticket${selectedAvailability.remaining === 1 ? '' : 's'} remaining.`)
        remainingError.response = { status: 409, data: { message: remainingError.message, soldOut: false, availability } }
        throw remainingError
      }
      const tickets = readLocalTickets()
      const ticket = createLocalTicket(ticketData)
      writeLocalTickets([ticket, ...tickets])
      return {
        ...ticket,
        ibanNumber: 'PK00-OZIL-1234567890',
        mode: 'local-fallback'
      }
    }
    try {
      const response = await apiClient.post('/tickets/request', ticketData)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const availability = getLocalAvailability()
        const ticketType = normalizeTicketType(ticketData?.ticketType)
        const requestedQuantity = Math.max(1, Math.min(10, Number(ticketData?.quantity) || 1))
        const selectedAvailability = availability.byType[ticketType]
        if (availability.soldOut || !selectedAvailability || selectedAvailability.remaining <= 0) {
          const soldOutError = new Error('Tickets are sold out. The ticket portal is currently locked.')
          soldOutError.response = { status: 409, data: { message: soldOutError.message, soldOut: true, availability } }
          throw soldOutError
        }
        if (requestedQuantity > selectedAvailability.remaining) {
          const remainingError = new Error(`Only ${selectedAvailability.remaining} ${selectedAvailability.label} ticket${selectedAvailability.remaining === 1 ? '' : 's'} remaining.`)
          remainingError.response = { status: 409, data: { message: remainingError.message, soldOut: false, availability } }
          throw remainingError
        }
        const tickets = readLocalTickets()
        const ticket = createLocalTicket(ticketData)
        writeLocalTickets([ticket, ...tickets])
        return {
          ...ticket,
          ibanNumber: 'PK00-OZIL-1234567890',
          mode: 'local-fallback'
        }
      }
      throw error
    }
  },

  async getTicketById(ticketId) {
    if (forceLocalMode) {
      const identity = getCurrentIdentity()
      const ticket = readLocalTickets().find((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
      if (!ticket) {
        const notFoundError = new Error('Ticket not found')
        notFoundError.response = { data: { message: 'Ticket not found' } }
        throw notFoundError
      }
      return ticket
    }
    try {
      const response = await apiClient.get(`/tickets/view/${ticketId}`)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const identity = getCurrentIdentity()
        const ticket = readLocalTickets().find((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
        if (!ticket) {
          const notFoundError = new Error('Ticket not found')
          notFoundError.response = { data: { message: 'Ticket not found' } }
          throw notFoundError
        }
        return ticket
      }
      throw error
    }
  },

  async payWithCard(ticketId, cardData) {
    if (forceLocalMode) {
      const tickets = readLocalTickets()
      const identity = getCurrentIdentity()
      const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
      if (index === -1) {
        const notFoundError = new Error('Ticket not found')
        notFoundError.response = { data: { message: 'Ticket not found' } }
        throw notFoundError
      }

      const now = new Date().toISOString()
      const updatedTicket = {
        ...tickets[index],
        status: 'approved',
        paymentMethod: 'card',
        cardType: cardData?.cardType || 'card',
        cardLast4: cardData?.cardLast4 || '4242',
        cardholderName: cardData?.cardholderName || '',
        transactionId: `TXN-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
        paidAt: now,
        generatedAt: now,
        verifiedAt: null,
        updatedAt: now
      }
      tickets[index] = updatedTicket
      writeLocalTickets(tickets)

      return {
        message: 'Payment processed and ticket generated successfully',
        ticket: updatedTicket,
        mode: 'local-fallback'
      }
    }
    try {
      const response = await apiClient.post(`/tickets/${ticketId}/pay-card`, cardData)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const tickets = readLocalTickets()
        const identity = getCurrentIdentity()
        const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
        if (index === -1) {
          const notFoundError = new Error('Ticket not found')
          notFoundError.response = { data: { message: 'Ticket not found' } }
          throw notFoundError
        }

        const now = new Date().toISOString()
        const updatedTicket = {
          ...tickets[index],
          status: 'approved',
          paymentMethod: 'card',
          cardType: cardData?.cardType || 'card',
          cardLast4: cardData?.cardLast4 || '4242',
          cardholderName: cardData?.cardholderName || '',
          transactionId: `TXN-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
          paidAt: now,
          generatedAt: now,
          verifiedAt: null,
          updatedAt: now
        }
        tickets[index] = updatedTicket
        writeLocalTickets(tickets)

        return {
          message: 'Payment processed and ticket generated successfully',
          ticket: updatedTicket,
          mode: 'local-fallback'
        }
      }
      throw error
    }
  },

  async uploadPaymentProof(ticketId, formData) {
    if (forceLocalMode) {
      const tickets = readLocalTickets()
      const identity = getCurrentIdentity()
      const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
      if (index === -1) {
        const notFoundError = new Error('Ticket not found')
        notFoundError.response = { data: { message: 'Ticket not found' } }
        throw notFoundError
      }

      const updatedTicket = {
        ...tickets[index],
        status: 'approved',
        generatedAt: new Date().toISOString(),
        verifiedAt: null,
        updatedAt: new Date().toISOString(),
        paymentProofPath: 'local-fallback-proof'
      }
      tickets[index] = updatedTicket
      writeLocalTickets(tickets)

      return {
        message: 'Payment proof uploaded and ticket generated successfully',
        ticket: updatedTicket,
        mode: 'local-fallback'
      }
    }
    try {
      const response = await apiClient.post(`/tickets/${ticketId}/payment-proof`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const tickets = readLocalTickets()
        const identity = getCurrentIdentity()
        const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
        if (index === -1) {
          const notFoundError = new Error('Ticket not found')
          notFoundError.response = { data: { message: 'Ticket not found' } }
          throw notFoundError
        }

        const updatedTicket = {
          ...tickets[index],
          status: 'approved',
          generatedAt: new Date().toISOString(),
          verifiedAt: null,
          updatedAt: new Date().toISOString(),
          paymentProofPath: 'local-fallback-proof'
        }
        tickets[index] = updatedTicket
        writeLocalTickets(tickets)

        return {
          message: 'Payment proof uploaded and ticket generated successfully',
          ticket: updatedTicket,
          mode: 'local-fallback'
        }
      }
      throw error
    }
  },

  async verifyTicket(ticketId, qrData) {
    const response = await apiClient.post(`/tickets/${ticketId}/verify`, { qrData })
    return response.data
  },

  async verifyTicketByQr(qrData) {
    const response = await apiClient.post('/tickets/verify-qr', { qrData })
    return response.data
  },

  async getPendingTicketsAdmin() {
    const response = await apiClient.get('/tickets/admin/pending')
    return response.data
  },

  async decideTicketAdmin(ticketId, decision) {
    const response = await apiClient.post(`/tickets/admin/${ticketId}/decision`, { decision })
    return response.data
  },

  async cancelTicket(ticketId) {
    if (forceLocalMode) {
      const tickets = readLocalTickets()
      const identity = getCurrentIdentity()
      const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
      if (index === -1) {
        const notFoundError = new Error('Ticket not found')
        notFoundError.response = { data: { message: 'Ticket not found' } }
        throw notFoundError
      }

      const current = tickets[index]
      if (!['pending', 'payment_submitted'].includes(current.status)) {
        const invalidStatusError = new Error(`Ticket cannot be cancelled from status ${current.status}`)
        invalidStatusError.response = { data: { message: `Ticket cannot be cancelled from status ${current.status}` } }
        throw invalidStatusError
      }

      const updatedTicket = {
        ...current,
        status: 'cancelled',
        updatedAt: new Date().toISOString()
      }
      tickets[index] = updatedTicket
      writeLocalTickets(tickets)
      return { message: 'Ticket cancelled successfully', ticket: updatedTicket, mode: 'local-fallback' }
    }
    try {
      const response = await apiClient.post(`/tickets/${ticketId}/cancel`)
      return response.data
    } catch (error) {
      if (markLocalMode(error)) {
        const tickets = readLocalTickets()
        const identity = getCurrentIdentity()
        const index = tickets.findIndex((item) => item.id === ticketId && isOwnedByCurrentUser(item, identity))
        if (index === -1) {
          const notFoundError = new Error('Ticket not found')
          notFoundError.response = { data: { message: 'Ticket not found' } }
          throw notFoundError
        }

        const current = tickets[index]
        if (!['pending', 'payment_submitted'].includes(current.status)) {
          const invalidStatusError = new Error(`Ticket cannot be cancelled from status ${current.status}`)
          invalidStatusError.response = { data: { message: `Ticket cannot be cancelled from status ${current.status}` } }
          throw invalidStatusError
        }

        const updatedTicket = {
          ...current,
          status: 'cancelled',
          updatedAt: new Date().toISOString()
        }
        tickets[index] = updatedTicket
        writeLocalTickets(tickets)
        return { message: 'Ticket cancelled successfully', ticket: updatedTicket, mode: 'local-fallback' }
      }
      throw error
    }
  }
}
