import React, { useEffect, useMemo } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useTicket } from '../../hooks/useTicket'
import PageHeader from '../../components/common/PageHeader'
import { formatDate } from '../../utils/formatDate.util'
import { Link } from 'react-router-dom'

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

  const displayName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || user?.name || user?.email || 'Festival Guest'

  return (
    <div className="max-w-6xl mx-auto py-4">
      <PageHeader title="My Account & Passes" subtitle="Manage your festival passes, member profile, and event history" />

      {/* Profile Overview Card */}
      <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EC4899] to-[#cf5704] flex items-center justify-center font-black text-2xl text-white shadow-lg">
              {displayName.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">{displayName}</h2>
              <span className="text-sm text-[#ffbd59] font-semibold tracking-wide uppercase">Official Festival Member</span>
            </div>
          </div>
          <Link
            to="/tickets"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffbd59] to-[#ff8a00] text-black font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            + Book New Tickets
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-xs text-white/50 uppercase font-semibold">Email Address</p>
            <p className="text-sm font-bold text-white truncate mt-1">{user?.email || '-'}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-xs text-white/50 uppercase font-semibold">Phone Number</p>
            <p className="text-sm font-bold text-white truncate mt-1">{user?.phone || '-'}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-xs text-white/50 uppercase font-semibold">Account Role</p>
            <p className="text-sm font-bold text-white capitalize mt-1">{user?.role || 'Guest Member'}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-xs text-white/50 uppercase font-semibold">Festival Passes</p>
            <p className="text-sm font-bold text-[#EC4899] mt-1">{tickets.length} Active Pass(es)</p>
          </div>
        </div>
      </div>

      {/* Ticket Status Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Total Passes', val: summary.total, color: 'text-white' },
          { label: 'Pending', val: summary.pending, color: 'text-yellow-400' },
          { label: 'Payment Sent', val: summary.payment_submitted, color: 'text-blue-400' },
          { label: 'Approved QR', val: summary.approved, color: 'text-green-400' },
          { label: 'Rejected', val: summary.rejected, color: 'text-red-400' },
          { label: 'Cancelled', val: summary.cancelled, color: 'text-gray-400' }
        ].map((s) => (
          <div key={s.label} className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center shadow-lg">
            <p className="text-xs text-white/60 font-semibold mb-1 uppercase tracking-wider">{s.label}</p>
            <p className={`text-3xl font-black ${s.color}`}>{s.val}</p>
          </div>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming */}
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Upcoming Events
            </h3>
            <span className="text-xs font-bold text-white/50">{upcoming.length} Events</span>
          </div>

          {loading ? (
            <p className="text-white/60 text-sm py-4">Loading your upcoming passes...</p>
          ) : upcoming.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-white/60 text-sm mb-4">No upcoming festival passes found.</p>
              <Link to="/tickets" className="text-sm font-bold text-[#ffbd59] hover:underline">
                Explore & Purchase Tickets →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {upcoming.map((ticket) => (
                <div key={ticket.id} className="bg-white/5 border border-white/5 hover:border-white/20 transition-all rounded-xl p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-extrabold text-white text-base">{ticket.eventName}</p>
                    <p className="text-xs text-white/60 mt-0.5">{formatDate(ticket.eventDate)} · {ticket.eventTime}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-black uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#ffbd59]">
                      {ticket.status}
                    </span>
                    <div>
                      <Link to={`/tickets/view/${ticket.id}`} className="text-xs font-bold text-white/80 hover:text-white underline mt-1 inline-block">
                        View Pass →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past */}
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <h3 className="text-lg font-bold text-white">Past Events</h3>
            <span className="text-xs font-bold text-white/50">{past.length} Events</span>
          </div>

          {loading ? (
            <p className="text-white/60 text-sm py-4">Loading past history...</p>
          ) : past.length === 0 ? (
            <p className="text-white/60 text-sm py-8 text-center">No past events recorded yet.</p>
          ) : (
            <div className="space-y-3">
              {past.map((ticket) => (
                <div key={ticket.id} className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 opacity-75">
                  <div>
                    <p className="font-bold text-white text-base">{ticket.eventName}</p>
                    <p className="text-xs text-white/60 mt-0.5">{formatDate(ticket.eventDate)} · {ticket.eventTime}</p>
                  </div>
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                    {ticket.status}
                  </span>
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
