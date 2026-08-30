import React from 'react'
import { useEffect, useState } from 'react'
import { ticketService } from '../../services/ticketService'
import { useAuth } from '../../hooks/useAuth'
import AlertMessage from '../../components/common/AlertMessage'
import PageHeader from '../../components/common/PageHeader'
import { Link } from 'react-router-dom'

function AdminTicketReviewPage() {
  const { isAdmin } = useAuth()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState(null)
  const [alert, setAlert] = useState(null)

  const fetchPending = async () => {
    setLoading(true)
    try {
      const data = await ticketService.getPendingTicketsAdmin()
      setTickets(data)
    } catch (error) {
      setAlert({ type: 'error', message: error.response?.data?.message || 'Failed to load pending tickets.' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAdmin) {
      fetchPending()
    } else {
      setLoading(false)
    }
  }, [isAdmin])

  const handleDecision = async (ticketId, decision) => {
    setProcessingId(ticketId)
    try {
      await ticketService.decideTicketAdmin(ticketId, decision)
      setAlert({ type: 'success', message: `Ticket ${decision} successfully.` })
      await fetchPending()
    } catch (error) {
      setAlert({ type: 'error', message: error.response?.data?.message || 'Failed to update ticket.' })
    } finally {
      setProcessingId(null)
    }
  }

  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-black text-red-400 mb-2">Admin Access Required</h1>
          <p className="text-white/70">Only authenticated admins can review ticket payment submissions.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="flex items-center justify-between gap-4 mb-2">
        <Link to="/admin/dashboard" className="text-sm font-bold text-[#ffbd59] hover:underline">
          ← Back to Admin Dashboard
        </Link>
      </div>

      <PageHeader title="Ticket Payment Approvals" subtitle="Review manual and card payment submissions for official festival pass issuance" />

      {alert && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {loading ? (
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
          <p className="text-white/70">Loading pending payment verification queues...</p>
        </div>
      ) : tickets.length === 0 ? (
        <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
          <p className="text-2xl mb-2">🎉</p>
          <p className="text-lg font-bold text-white mb-1">Queue is Clear!</p>
          <p className="text-sm text-white/60">No pending ticket payment proofs requiring admin review right now.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#ffbd59] bg-[#ffbd59]/10 px-2.5 py-1 rounded-full">
                    {ticket.status}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-2">{ticket.eventName}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/50 block">Ticket Reference</span>
                  <code className="text-sm font-bold text-[#EC4899]">{ticket.uniqueTicketId || ticket.ticketId || ticket.id}</code>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <p className="text-xs text-white/50 uppercase font-semibold">Attendee Name</p>
                  <p className="text-sm font-bold text-white mt-1">{ticket.fullName || '-'}</p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <p className="text-xs text-white/50 uppercase font-semibold">Email</p>
                  <p className="text-sm font-bold text-white truncate mt-1">{ticket.email || '-'}</p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <p className="text-xs text-white/50 uppercase font-semibold">Phone</p>
                  <p className="text-sm font-bold text-white mt-1">{ticket.phone || '-'}</p>
                </div>
              </div>

              {ticket.paymentProofPath && (
                <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Attached Payment Proof</p>
                  <a
                    href={`${import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000'}/${ticket.paymentProofPath}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#ffbd59] hover:underline"
                  >
                    🔍 View Full Resolution Proof Document →
                  </a>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  disabled={processingId === ticket.id}
                  onClick={() => handleDecision(ticket.id, 'reject')}
                  className="px-6 py-2.5 rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/20 font-bold text-sm transition-all"
                >
                  Reject
                </button>
                <button
                  type="button"
                  disabled={processingId === ticket.id}
                  onClick={() => handleDecision(ticket.id, 'approve')}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                >
                  {processingId === ticket.id ? 'Approving...' : 'Approve & Issue QR Pass'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminTicketReviewPage
