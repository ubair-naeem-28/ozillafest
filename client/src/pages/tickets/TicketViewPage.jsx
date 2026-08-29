import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTicket } from '../../hooks/useTicket'
import LoadingSpinner from '../../components/common/LoadingSpinner'
import GeneratedTicketCard from '../../components/tickets/GeneratedTicketCard'
import AlertMessage from '../../components/common/AlertMessage'
import { ticketService } from '../../services/ticketService'

function TicketViewPage() {
  const { ticketId } = useParams()
  const { getTicketById } = useTicket()
  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cancelLoading, setCancelLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const isGenerated = ticket?.status === 'approved'
  const canCancel = ['pending', 'payment_submitted'].includes(ticket?.status)

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await getTicketById(ticketId)
        setTicket(data)
      } catch (_error) {
        setTicket(null)
      } finally {
        setLoading(false)
      }
    }

    fetchTicket()
  }, [ticketId, getTicketById])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!ticket) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto my-12">
        <p className="text-gray-600 font-semibold text-lg">Ticket not found.</p>
      </div>
    )
  }

  const handleCancelTicket = async () => {
    setCancelLoading(true)
    setAlert(null)
    try {
      const response = await ticketService.cancelTicket(ticket.id)
      setTicket(response.ticket)
      setAlert({ type: 'success', message: response.message || 'Ticket cancelled successfully.' })
    } catch (error) {
      setAlert({ type: 'error', message: error.response?.data?.message || 'Failed to cancel ticket.' })
    } finally {
      setCancelLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Your Festival Pass</h1>
          <p className="text-sm text-gray-500 mt-1">Official digital entry pass with scannable QR badge</p>
        </div>
      </div>

      {alert && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="grid grid-cols-1 gap-8">
        <GeneratedTicketCard ticket={ticket} actionTo="/tickets/my-tickets" actionLabel="My Tickets Wallet" />

        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
          {canCancel && (
            <button
              type="button"
              className="mb-4 bg-rose-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-rose-700 transition-colors"
              onClick={handleCancelTicket}
              disabled={cancelLoading}
            >
              {cancelLoading ? 'Cancelling...' : 'Cancel Ticket Request'}
            </button>
          )}

          {isGenerated ? (
            <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-xl">
              <h2 className="text-lg font-bold text-emerald-900 mb-1">Official Pass Ready</h2>
              <p className="text-emerald-700 text-sm">
                Your ticket pass has been verified and the scannable QR badge is active. Click <strong>Download Pass</strong> above to save the pass image to your device.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Verification In Progress</h2>
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-5">
                <p className="text-amber-900 font-semibold mb-1">Pass verification pending admin approval.</p>
                <p className="text-amber-700 text-sm">
                  Your scannable QR code and downloadable pass image will be unlocked once payment proof is verified by the admin team.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketViewPage
