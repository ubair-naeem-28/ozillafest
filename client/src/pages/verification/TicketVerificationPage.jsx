import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ticketService } from '../../services/ticketService'
import AlertMessage from '../../components/common/AlertMessage'

function TicketVerificationPage() {
  const { ticketId } = useParams()
  const [ticket, setTicket] = useState(null)
  const [qrDataInput, setQrDataInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [verifying, setVerifying] = useState(false)
  const [alert, setAlert] = useState(null)
  const [qrValidationError, setQrValidationError] = useState('')

  const getStatusClass = (status) => {
    if (status === 'approved') return 'bg-green-100 text-green-800'
    if (status === 'payment_submitted') return 'bg-blue-100 text-blue-700'
    if (status === 'rejected' || status === 'cancelled') return 'bg-red-100 text-red-700'
    return 'bg-yellow-100 text-yellow-800'
  }

  const validateQrPayload = (raw) => {
    try {
      const parsed = JSON.parse(raw)
      const requiredFields = ['ticketId', 'fullName', 'email', 'phone', 'eventName', 'eventDate', 'eventTime']
      const missing = requiredFields.filter((field) => !parsed[field])
      if (missing.length > 0) {
        return { ok: false, message: `Missing fields: ${missing.join(', ')}` }
      }
      return { ok: true, parsed }
    } catch (_error) {
      return { ok: false, message: 'QR payload is not valid JSON.' }
    }
  }

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await ticketService.getTicketById(ticketId)
        setTicket(data)
        setQrDataInput(
          JSON.stringify(
            {
              ticketId: data.uniqueTicketId || data.ticketId || data.id,
              fullName: data.fullName || data.name,
              email: data.email,
              phone: data.phone,
              eventName: data.eventName,
              eventDate: data.eventDate,
              eventTime: data.eventTime
            },
            null,
            2
          )
        )
      } catch (error) {
        setAlert({ type: 'error', message: 'Ticket not found' })
      } finally {
        setLoading(false)
      }
    }

    fetchTicket()
  }, [ticketId])

  const handleVerify = async () => {
    setAlert(null)
    setQrValidationError('')
    const localValidation = validateQrPayload(qrDataInput)
    if (!localValidation.ok) {
      setQrValidationError(localValidation.message)
      return
    }

    setVerifying(true)
    try {
      const result = await ticketService.verifyTicketByQr(qrDataInput)
      setTicket(result.ticket || ticket)
      setAlert({ type: 'success', message: result.message || `Ticket verified: ${result.status}` })
    } catch (error) {
      const apiMessage = error.response?.data?.message || 'Verification failed'
      const mismatchInfo = error.response?.data?.mismatchedFields?.length
        ? ` Mismatched fields: ${error.response.data.mismatchedFields.join(', ')}.`
        : ''
      setAlert({ type: 'error', message: `${apiMessage}${mismatchInfo}` })
    } finally {
      setVerifying(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Ticket Verification</h1>
        
        {alert && (
          <AlertMessage 
            type={alert.type} 
            message={alert.message} 
            onClose={() => setAlert(null)} 
          />
        )}
        
        {ticket ? (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{ticket.eventName}</h2>
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-semibold">Date:</span> {ticket.eventDate}</p>
                <p className="text-gray-600"><span className="font-semibold">Location:</span> {ticket.location}</p>
                <p className="text-gray-600"><span className="font-semibold">Ticket Type:</span> {ticket.ticketType}</p>
                <p className="text-gray-600"><span className="font-semibold">Status:</span> 
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm ${getStatusClass(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block">
                <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Scan / Paste QR Data</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">QR Payload</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg"
                rows={6}
                value={qrDataInput}
                onChange={(e) => setQrDataInput(e.target.value)}
              />
              {qrValidationError && (
                <p className="text-sm text-red-600 mt-2">{qrValidationError}</p>
              )}
            </div>
            
            <button
              onClick={handleVerify}
              disabled={verifying}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold"
            >
              {verifying ? 'Verifying...' : 'Verify Ticket'}
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>Ticket not found or invalid.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TicketVerificationPage
