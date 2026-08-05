import React from 'react'
import { useEffect, useState } from 'react'
import { ticketService } from '../../services/ticketService'
import { useAuth } from '../../hooks/useAuth'
import AlertMessage from '../../components/common/AlertMessage'

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
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access Required</h1>
        <p className="text-gray-600">Only admin accounts can review payment proofs.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Ticket Verification</h1>

      {alert && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {loading ? (
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600">Loading pending tickets...</p>
        </div>
      ) : tickets.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600">No pending payment submissions found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <p className="text-gray-700"><span className="font-semibold">Name:</span> {ticket.fullName}</p>
                <p className="text-gray-700"><span className="font-semibold">Email:</span> {ticket.email}</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> {ticket.phone}</p>
                <p className="text-gray-700"><span className="font-semibold">Ticket ID:</span> {ticket.uniqueTicketId || ticket.ticketId || ticket.id}</p>
                <p className="text-gray-700"><span className="font-semibold">Event:</span> {ticket.eventName}</p>
                <p className="text-gray-700"><span className="font-semibold">Status:</span> {ticket.status}</p>
              </div>

              {ticket.paymentProofPath ? (
                <a
                  href={`${import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000'}/${ticket.paymentProofPath}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-purple-700 font-semibold mb-4"
                >
                  View Payment Proof
                </a>
              ) : (
                <p className="text-sm text-gray-500 mb-4">No payment proof URL available.</p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleDecision(ticket.id, 'approved')}
                  disabled={processingId === ticket.id}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleDecision(ticket.id, 'rejected')}
                  disabled={processingId === ticket.id}
                >
                  Reject
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
