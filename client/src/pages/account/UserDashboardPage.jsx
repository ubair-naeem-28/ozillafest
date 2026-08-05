import React, { useEffect, useMemo } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useTicket } from '../../hooks/useTicket'
import PageHeader from '../../components/common/PageHeader'
import { formatDate } from '../../utils/formatDate.util'

function UserDashboardPage() {
  const { user } = useAuth()
  const { tickets, loading, fetchMyTickets } = useTicket()

  useEffect(() => {
    fetchMyTickets()
  }, [fetchMyTickets])

  const summary = useMemo(() => {
    const counts = {
      total: tickets.length,
      pending: 0,
      payment_submitted: 0,
      approved: 0,
      rejected: 0,
      cancelled: 0
    }
    for (const ticket of tickets) {
      if (counts[ticket.status] !== undefined) {
        counts[ticket.status] += 1
      }
    }
    return counts
  }, [tickets])

  const now = new Date()
  const upcoming = tickets.filter((ticket) => new Date(ticket.eventDate) >= now)
  const past = tickets.filter((ticket) => new Date(ticket.eventDate) < now)

  return (
    <div>
      <PageHeader title="My Account" subtitle="Profile, ticket status, and event timeline" />

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <p className="text-gray-700"><span className="font-semibold">Name:</span> {user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || '-'}</p>
          <p className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email || '-'}</p>
          <p className="text-gray-700"><span className="font-semibold">Phone:</span> {user?.phone || '-'}</p>
          <p className="text-gray-700"><span className="font-semibold">Role:</span> {user?.role || 'user'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Total</p><p className="text-2xl font-bold">{summary.total}</p></div>
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Pending</p><p className="text-2xl font-bold">{summary.pending}</p></div>
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Payment</p><p className="text-2xl font-bold">{summary.payment_submitted}</p></div>
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Approved</p><p className="text-2xl font-bold">{summary.approved}</p></div>
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Rejected</p><p className="text-2xl font-bold">{summary.rejected}</p></div>
        <div className="bg-white rounded-lg shadow-md p-4"><p className="text-sm text-gray-600">Cancelled</p><p className="text-2xl font-bold">{summary.cancelled}</p></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Upcoming Events</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : upcoming.length === 0 ? (
            <p className="text-gray-600">No upcoming events.</p>
          ) : (
            <div className="space-y-3">
              {upcoming.map((ticket) => (
                <div key={ticket.id} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-gray-800">{ticket.eventName}</p>
                  <p className="text-sm text-gray-600">{formatDate(ticket.eventDate)} - {ticket.eventTime}</p>
                  <p className="text-sm text-gray-600">Status: <span className="font-semibold">{ticket.status}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Past Events</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : past.length === 0 ? (
            <p className="text-gray-600">No past events.</p>
          ) : (
            <div className="space-y-3">
              {past.map((ticket) => (
                <div key={ticket.id} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-semibold text-gray-800">{ticket.eventName}</p>
                  <p className="text-sm text-gray-600">{formatDate(ticket.eventDate)} - {ticket.eventTime}</p>
                  <p className="text-sm text-gray-600">Status: <span className="font-semibold">{ticket.status}</span></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
