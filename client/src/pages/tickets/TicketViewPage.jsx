import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600">Ticket not found.</p>
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

  const handleDownloadPdf = () => {
    const qrCanvas = document.querySelector('canvas')
    const qrDataUrl = qrCanvas ? qrCanvas.toDataURL('image/png') : ''
    const ticketNumber = ticket.uniqueTicketId || ticket.ticketId || ticket.id
    const title = `${ticket.eventName || 'Ozilla Festival Ticket'} - ${ticketNumber}`
    const printable = window.open('', '_blank', 'noopener,noreferrer,width=900,height=700')
    if (!printable) return

    printable.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 24px; color: #111827; }
            .ticket { border: 2px solid #7b1118; border-radius: 10px; overflow: hidden; }
            .head { background: #7b1118; color: white; padding: 14px 18px; font-size: 24px; font-weight: 700; }
            .body { padding: 16px 18px; }
            .row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e5e7eb; }
            .row:last-child { border-bottom: none; }
            .label { color: #4b5563; }
            .value { font-weight: 700; }
            .qr-wrap { margin-top: 16px; display: flex; justify-content: center; }
            .qr-wrap img { width: 160px; height: 160px; border: 1px dashed #d1d5db; padding: 8px; border-radius: 8px; }
            .note { margin-top: 12px; color: #6b7280; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="ticket">
            <div class="head">${ticket.eventName || 'Ozilla Festival'}</div>
            <div class="body">
              <div class="row"><span class="label">Ticket ID</span><span class="value">${ticketNumber}</span></div>
              <div class="row"><span class="label">Name</span><span class="value">${ticket.fullName || ticket.name || '-'}</span></div>
              <div class="row"><span class="label">Email</span><span class="value">${ticket.email || '-'}</span></div>
              <div class="row"><span class="label">Phone</span><span class="value">${ticket.phone || '-'}</span></div>
              <div class="row"><span class="label">Date</span><span class="value">${ticket.eventDate || '-'}</span></div>
              <div class="row"><span class="label">Time</span><span class="value">${ticket.eventTime || '-'}</span></div>
              <div class="row"><span class="label">Day</span><span class="value">${ticket.festivalDay === 'day2' ? 'Day 2' : 'Day 1'}</span></div>
              <div class="row"><span class="label">Location</span><span class="value">${ticket.location || '-'}</span></div>
              <div class="qr-wrap">${qrDataUrl ? `<img src="${qrDataUrl}" alt="QR Code" />` : ''}</div>
              <div class="note">Use Print dialog and choose "Save as PDF".</div>
            </div>
          </div>
          <script>window.onload = () => window.print();</script>
        </body>
      </html>
    `)
    printable.document.close()
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Ticket Details</h1>
        {isGenerated ? (
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Download PDF
          </button>
        ) : null}
      </div>
      {alert && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="grid grid-cols-1 gap-8">
        <GeneratedTicketCard ticket={ticket} actionTo="/tickets/my-tickets" actionLabel="View My Tickets" />

        <div className="bg-white rounded-lg shadow-md p-8">
          {canCancel && (
            <button
              type="button"
              className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={handleCancelTicket}
              disabled={cancelLoading}
            >
              {cancelLoading ? 'Cancelling...' : 'Cancel Ticket'}
            </button>
          )}
          {isGenerated ? (
            <div className="mt-2 p-4 bg-green-50 rounded-lg">
              <h2 className="text-xl font-bold text-green-800 mb-2">Ticket Generated</h2>
              <p className="text-green-700 text-sm">
                QR code is shown above View Ticket button on your ticket card.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ticket Generation</h2>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold mb-1">Ticket is not generated yet.</p>
                <p className="text-yellow-700 text-sm">
                  Your ticket and QR code will be generated automatically after admin approval.
                  Current status: <span className="font-semibold">{ticket.status}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketViewPage
