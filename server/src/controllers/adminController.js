import { Ticket } from '../models/Ticket.js'
import { User } from '../models/User.js'
import { contentData } from '../data/contentData.js'

function summarizeTicketsByStatus(tickets) {
  const counts = {
    pending: 0,
    payment_submitted: 0,
    approved: 0,
    rejected: 0,
    cancelled: 0
  }

  for (const ticket of tickets) {
    const status = ticket.status === 'confirmed' ? 'approved' : ticket.status
    if (counts[status] !== undefined) {
      counts[status] += 1
    }
  }
  return counts
}

export async function getAdminDashboard(req, res) {
  const [users, tickets] = await Promise.all([
    User.find({}).sort({ createdAt: -1 }),
    Ticket.find({}).sort({ createdAt: -1 })
  ])

  const ticketCounts = summarizeTicketsByStatus(tickets)
  const totalRevenueEstimate = tickets
    .filter((ticket) => ['approved', 'confirmed'].includes(ticket.status))
    .reduce((acc, ticket) => {
      const base = ticket.ticketType === 'premium' ? 25000 : ticket.ticketType === 'vip' ? 15000 : 5000
      return acc + base * (ticket.quantity || 1)
    }, 0)

  return res.json({
    admin: {
      id: req.user.id,
      name: req.user.name || req.user.email,
      email: req.user.email
    },
    stats: {
      totalUsers: users.length,
      totalTickets: tickets.length,
      totalEvents: (contentData.events || []).length,
      totalRevenueEstimate
    },
    ticketStatus: ticketCounts,
    recentUsers: users.slice(0, 8).map((user) => user.toJSON()),
    recentTickets: tickets.slice(0, 8).map((ticket) => ticket.toJSON())
  })
}

export async function getAdminUsers(_req, res) {
  const users = await User.find({}).sort({ createdAt: -1 })
  return res.json(users.map((user) => user.toJSON()))
}

export async function getAdminPayments(_req, res) {
  const tickets = await Ticket.find({ status: { $in: ['payment_submitted', 'approved', 'confirmed', 'rejected'] } }).sort({ updatedAt: -1 })
  return res.json(
    tickets.map((ticket) => ({
      ...ticket.toJSON(),
      paymentStatus: ticket.status === 'payment_submitted' ? 'pending_review' : ticket.status
    }))
  )
}

export async function getAdminReports(_req, res) {
  const tickets = await Ticket.find({})
  const users = await User.find({})

  const ticketStatus = summarizeTicketsByStatus(tickets)
  const ticketsByType = {
    regular: 0,
    vip: 0,
    premium: 0
  }

  for (const ticket of tickets) {
    if (ticketsByType[ticket.ticketType] !== undefined) {
      ticketsByType[ticket.ticketType] += ticket.quantity || 1
    }
  }

  return res.json({
    generatedAt: new Date().toISOString(),
    overview: {
      users: users.length,
      tickets: tickets.length
    },
    ticketStatus,
    ticketsByType
  })
}
