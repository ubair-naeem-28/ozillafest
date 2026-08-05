import React from 'react'
import QRCode from 'qrcode.react'

function QrCodeDisplay({ ticket, size = 200, showCaption = true }) {
  const qrData = JSON.stringify({
    ticketId: ticket.uniqueTicketId || ticket.ticketId || ticket.id,
    fullName: ticket.fullName || ticket.name,
    email: ticket.email,
    phone: ticket.phone,
    eventName: ticket.eventName,
    eventDate: ticket.eventDate,
    eventTime: ticket.eventTime
  })

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300">
        <QRCode value={qrData} size={size} level="H" includeMargin renderAs="canvas" />
      </div>
      {showCaption ? (
        <p className="text-sm text-gray-600 mt-4 text-center">
          Scan this QR code at the event entrance
        </p>
      ) : null}
    </div>
  )
}

export default QrCodeDisplay
