import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate.util'
import QrCodeDisplay from './QrCodeDisplay'

function getStatusMeta(status = 'pending') {
  if (status === 'approved') return { label: 'Verified', className: 'is-approved' }
  if (status === 'payment_submitted') return { label: 'Payment Submitted', className: 'is-submitted' }
  if (status === 'rejected' || status === 'cancelled') return { label: status === 'cancelled' ? 'Cancelled' : 'Rejected', className: 'is-cancelled' }
  return { label: 'Pending Verification', className: 'is-pending' }
}

function roundRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2)
  ctx.beginPath()
  ctx.moveTo(x + safeRadius, y)
  ctx.lineTo(x + width - safeRadius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius)
  ctx.lineTo(x + width, y + height - safeRadius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height)
  ctx.lineTo(x + safeRadius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius)
  ctx.lineTo(x, y + safeRadius)
  ctx.quadraticCurveTo(x, y, x + safeRadius, y)
  ctx.closePath()
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, align = 'left') {
  const words = String(text || '').split(/\s+/)
  let line = ''
  let currentY = y
  const originalAlign = ctx.textAlign
  ctx.textAlign = align

  words.forEach((word, index) => {
    const testLine = line ? `${line} ${word}` : word
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, align === 'right' ? x + maxWidth : x, currentY)
      line = word
      currentY += lineHeight
    } else {
      line = testLine
    }

    if (index === words.length - 1 && line) {
      ctx.fillText(line, align === 'right' ? x + maxWidth : x, currentY)
    }
  })

  ctx.textAlign = originalAlign
}

function GeneratedTicketCard({ ticket, actionTo, actionLabel = 'View Ticket' }) {
  const qrWrapRef = useRef(null)
  const ticketCardRef = useRef(null)
  const ticketNumber = ticket.uniqueTicketId || ticket.ticketId || ticket.id
  const bookingId = ticket.bookingId || ticket.requestId || ticket.id
  const statusMeta = getStatusMeta(ticket.status)
  const isApproved = ticket.status === 'approved'

  const downloadCanvas = (canvas) => {
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `ozilla-ticket-${ticketNumber}.png`
    link.click()
  }

  const handleDownloadTicket = async () => {
    const ticketNode = ticketCardRef.current
    const qrCanvas = qrWrapRef.current?.querySelector('canvas')
    if (!ticketNode || !qrCanvas) return

    const rect = ticketNode.getBoundingClientRect()
    const scale = Math.min(2, window.devicePixelRatio || 1.5)
    const canvas = document.createElement('canvas')
    const width = Math.ceil(rect.width)
    const height = Math.ceil(rect.height)
    canvas.width = Math.ceil(width * scale)
    canvas.height = Math.ceil(height * scale)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.scale(scale, scale)
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#fffaf2')
    gradient.addColorStop(0.52, '#edf5f0')
    gradient.addColorStop(1, '#f5e6dc')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    const cardGradient = ctx.createLinearGradient(18, 18, width - 18, height - 18)
    cardGradient.addColorStop(0, '#ffffff')
    cardGradient.addColorStop(1, '#f6efe4')
    roundRect(ctx, 14, 14, width - 28, height - 28, 28)
    ctx.fillStyle = cardGradient
    ctx.fill()
    ctx.strokeStyle = '#e8c879'
    ctx.lineWidth = 2
    ctx.stroke()

    const passGradient = ctx.createLinearGradient(28, 90, width - 28, 190)
    passGradient.addColorStop(0, '#041719')
    passGradient.addColorStop(0.6, '#073332')
    passGradient.addColorStop(1, '#39132f')
    roundRect(ctx, 28, 86, width - 56, 112, 20)
    ctx.fillStyle = passGradient
    ctx.fill()

    ctx.fillStyle = '#ff8a00'
    ctx.font = '700 11px Arial'
    ctx.fillText('OZILLA FESTIVAL 2026', 28, 40)

    ctx.fillStyle = '#102525'
    ctx.font = '800 22px Arial'
    ctx.fillText(ticket.eventName || 'Ozilla Festival', 28, 68)

    ctx.fillStyle = '#ffffff'
    ctx.font = '700 12px Arial'
    ctx.fillText(`${ticket.ticketType || 'Festival'} Pass`.toUpperCase(), 44, 118)

    ctx.font = '800 24px Arial'
    drawWrappedText(ctx, ticket.fullName || ticket.name || 'Festival Guest', 44, 146, width - 150, 26)

    ctx.fillStyle = 'rgba(255,255,255,0.75)'
    ctx.font = '700 11px Arial'
    drawWrappedText(ctx, ticket.email || '-', 44, 180, width - 150, 16)

    ctx.fillStyle = '#ffbd59'
    ctx.font = '800 10px Arial'
    ctx.textAlign = 'right'
    ctx.fillText('TICKET ID', width - 42, 126)
    ctx.fillStyle = '#ffffff'
    ctx.font = '800 11px Arial'
    drawWrappedText(ctx, String(ticketNumber), width - 120, 148, 82, 14, 'right')
    ctx.textAlign = 'left'

    const metaRows = [
      ['Booking ID', bookingId],
      ['Date', ticket.eventDate ? formatDate(ticket.eventDate) : '-'],
      ['Time', ticket.eventTime || '-'],
      ['Day', ticket.festivalDay === 'day2' ? 'Day 2' : 'Day 1'],
      ['Location', ticket.location || 'Lahore, Pakistan'],
      ['Quantity', ticket.quantity || 1]
    ]
    let y = 222
    metaRows.forEach(([label, value], index) => {
      const col = index % 2
      const row = Math.floor(index / 2)
      const boxW = (width - 68) / 2
      const x = 28 + col * (boxW + 12)
      const boxY = y + row * 58
      roundRect(ctx, x, boxY, boxW, 46, 10)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
      ctx.strokeStyle = '#dce9e4'
      ctx.stroke()
      ctx.fillStyle = '#ff8a00'
      ctx.font = '800 9px Arial'
      ctx.fillText(String(label).toUpperCase(), x + 10, boxY + 16)
      ctx.fillStyle = '#102525'
      ctx.font = '800 11px Arial'
      drawWrappedText(ctx, String(value), x + 10, boxY + 33, boxW - 20, 12)
    })

    const qrSize = Math.min(150, Math.max(112, width * 0.34))
    const qrX = (width - qrSize) / 2
    const qrY = Math.min(height - qrSize - 76, 410)
    roundRect(ctx, qrX - 12, qrY - 12, qrSize + 24, qrSize + 24, 18)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = '#ffbd59'
    ctx.stroke()
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize)

    ctx.fillStyle = '#55706f'
    ctx.font = '700 11px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Scan this QR code at the event entrance.', width / 2, qrY + qrSize + 34)
    ctx.textAlign = 'left'

    downloadCanvas(canvas)
  }

  const handlePrint = () => {
    handleDownloadTicket()
  }

  const handleShare = async () => {
    if (!navigator.share) return
    try {
      await navigator.share({
        title: ticket.eventName || 'Ozilla Festival Ticket',
        text: `Ozilla Festival ticket ${ticketNumber}`
      })
    } catch {
      // Sharing was cancelled or unavailable.
    }
  }

  return (
    <article className="premium-ticket-card" ref={ticketCardRef}>
      <div className="premium-ticket-glow" aria-hidden="true" />
      <div className="premium-ticket-header">
        <div>
          <p>Ozilla Festival VIP Pass</p>
          <h3>{ticket.eventName || 'Ozilla Festival'}</h3>
        </div>
        <span className={`premium-ticket-status ${statusMeta.className}`}>{statusMeta.label}</span>
      </div>

      <div className="premium-ticket-pass">
        <div className="premium-ticket-pass-main">
          <span className="premium-ticket-type">{ticket.ticketType || 'festival'} pass</span>
          <strong>{ticket.fullName || ticket.name || 'Festival Guest'}</strong>
          <small>{ticket.email || '-'}</small>
        </div>
        <div className="premium-ticket-stub">
          <span>Ticket ID</span>
          <strong>{ticketNumber}</strong>
        </div>
      </div>

      <div className="premium-ticket-meta">
        <div><span>Booking ID</span><strong>{bookingId}</strong></div>
        <div><span>Date</span><strong>{ticket.eventDate ? formatDate(ticket.eventDate) : '-'}</strong></div>
        <div><span>Time</span><strong>{ticket.eventTime || '-'}</strong></div>
        <div><span>Day</span><strong>{ticket.festivalDay === 'day2' ? 'Day 2' : 'Day 1'}</strong></div>
        <div><span>Location</span><strong>{ticket.location || 'Lahore, Pakistan'}</strong></div>
        <div><span>Quantity</span><strong>{ticket.quantity || 1}</strong></div>
      </div>

      <div className="premium-ticket-details">
        <span>Entry Gate: Main Festival Gate</span>
        <span>Parking: Partner parking zones</span>
        <span>Organizer: Ozilla Festival</span>
      </div>

      {isApproved ? (
        <div className="premium-ticket-qr" ref={qrWrapRef}>
          <QrCodeDisplay ticket={ticket} size={132} showCaption={false} />
          <p>Scan this QR code at the event entrance.</p>
          <div className="premium-ticket-qr-actions">
            <button type="button" onClick={handleDownloadTicket}>Download</button>
            <button type="button" onClick={handlePrint}>Print</button>
            <button type="button" onClick={handleShare}>Share</button>
          </div>
        </div>
      ) : (
        <div className="premium-ticket-qr premium-ticket-qr-pending">
          <strong>QR Pending</strong>
          <p>Your QR ticket will appear after admin approval.</p>
        </div>
      )}

      <div className="premium-ticket-actions">
        <Link to={actionTo || `/tickets/view/${ticket.id}`}>{actionLabel}</Link>
        <button type="button">Save to Wallet</button>
        <Link to="/contact">Contact Support</Link>
      </div>

      <style>{`
        .premium-ticket-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.2rem);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .premium-ticket-card,
        .premium-ticket-card * {
          box-sizing: border-box;
          min-width: 0;
        }

        .premium-ticket-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 34px 90px rgba(2, 11, 13, 0.15), 0 0 34px rgba(255, 176, 0, 0.08);
        }

        .premium-ticket-glow {
          position: absolute;
          inset: -30% -20% auto auto;
          width: 42%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(34px);
          pointer-events: none;
        }

        .premium-ticket-header,
        .premium-ticket-pass,
        .premium-ticket-actions,
        .premium-ticket-qr-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
        }

        .premium-ticket-header {
          position: relative;
          z-index: 1;
        }

        .premium-ticket-header p,
        .premium-ticket-type,
        .premium-ticket-stub span,
        .premium-ticket-meta span {
          margin: 0;
          color: #ff8a00;
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .premium-ticket-header h3 {
          margin: 0.25rem 0 0;
          color: #102525;
          font-size: clamp(1.25rem, 2.5vw, 1.85rem);
          line-height: 1.04;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .premium-ticket-status {
          flex: 0 0 auto;
          border-radius: 999px;
          padding: 0.55rem 0.75rem;
          font-size: 0.74rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .premium-ticket-status.is-approved { color: #065f46; background: rgba(34, 197, 94, 0.14); box-shadow: 0 0 24px rgba(34, 197, 94, 0.14); }
        .premium-ticket-status.is-submitted { color: #075985; background: rgba(14, 165, 233, 0.14); box-shadow: 0 0 24px rgba(14, 165, 233, 0.14); }
        .premium-ticket-status.is-cancelled { color: #9f1239; background: rgba(244, 63, 94, 0.14); box-shadow: 0 0 24px rgba(244, 63, 94, 0.14); }
        .premium-ticket-status.is-pending { color: #92400e; background: rgba(255, 189, 89, 0.2); box-shadow: 0 0 24px rgba(255, 176, 0, 0.12); }

        .premium-ticket-pass {
          position: relative;
          overflow: hidden;
          margin: 1rem 0;
          border-radius: 24px;
          padding: 1rem;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(7, 51, 50, 0.88), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 18% 18%, rgba(255, 189, 89, 0.28), transparent 12rem);
        }

        .premium-ticket-pass::after {
          content: '';
          position: absolute;
          inset: 0 auto 0 68%;
          width: 1px;
          border-left: 1px dashed rgba(255, 255, 255, 0.28);
        }

        .premium-ticket-pass::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 -40%;
          width: 36%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
          transform: skewX(-18deg);
          animation: ticketPassShine 4s ease-in-out infinite;
        }

        .premium-ticket-pass-main,
        .premium-ticket-stub {
          position: relative;
          z-index: 1;
        }

        .premium-ticket-pass-main strong {
          display: block;
          margin: 0.35rem 0;
          color: #fff;
          font-size: clamp(1.25rem, 3vw, 2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .premium-ticket-pass-main small,
        .premium-ticket-stub strong {
          color: rgba(255, 255, 255, 0.76);
          overflow-wrap: anywhere;
        }

        .premium-ticket-stub {
          width: 30%;
          display: grid;
          gap: 0.35rem;
          text-align: right;
        }

        .premium-ticket-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .premium-ticket-meta div,
        .premium-ticket-details span {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.54);
          min-width: 0;
        }

        .premium-ticket-meta strong {
          display: block;
          margin-top: 0.25rem;
          color: #102525;
          overflow-wrap: anywhere;
        }

        .premium-ticket-details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.65rem;
          margin-top: 0.75rem;
          color: #315b59;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .premium-ticket-details span {
          overflow-wrap: anywhere;
        }

        .premium-ticket-qr {
          display: grid;
          justify-items: center;
          gap: 0.65rem;
          margin: 1rem 0;
          border: 1px solid rgba(255, 189, 89, 0.24);
          border-radius: 22px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
        }

        .premium-ticket-qr > div > div {
          max-width: 100%;
          border-color: rgba(255, 189, 89, 0.5) !important;
          box-shadow: 0 0 0 8px rgba(255, 189, 89, 0.08), 0 18px 42px rgba(255, 138, 0, 0.16) !important;
          animation: ticketQrPulse 2.6s ease-in-out infinite;
        }

        .premium-ticket-qr canvas {
          max-width: 100% !important;
          height: auto !important;
        }

        .premium-ticket-qr p {
          margin: 0;
          color: #55706f;
          text-align: center;
          line-height: 1.5;
        }

        .premium-ticket-qr-pending strong {
          display: grid;
          place-items: center;
          width: 120px;
          height: 120px;
          border-radius: 22px;
          color: #92400e;
          background: rgba(255, 189, 89, 0.18);
        }

        .premium-ticket-actions a,
        .premium-ticket-actions button,
        .premium-ticket-qr-actions button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 999px;
          padding: 0 0.9rem;
          font-weight: 950;
          cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease;
          text-align: center;
          white-space: normal;
        }

        .premium-ticket-actions a:focus-visible,
        .premium-ticket-actions button:focus-visible,
        .premium-ticket-qr-actions button:focus-visible {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 4px;
          box-shadow: 0 0 0 7px rgba(255, 189, 89, 0.16);
        }

        .premium-ticket-actions a:first-child {
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.24);
        }

        .premium-ticket-actions a:last-child,
        .premium-ticket-actions button,
        .premium-ticket-qr-actions button {
          color: #0b4f4c;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: inset 0 0 0 1px rgba(11, 79, 76, 0.13);
        }

        .premium-ticket-actions a:hover,
        .premium-ticket-actions button:hover,
        .premium-ticket-qr-actions button:hover {
          transform: translateY(-2px);
        }

        @keyframes ticketPassShine {
          0%, 55% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          68% { opacity: 1; }
          100% { transform: translateX(420%) skewX(-18deg); opacity: 0; }
        }

        @keyframes ticketQrPulse {
          0%, 100% { box-shadow: 0 0 0 8px rgba(255, 189, 89, 0.08), 0 18px 42px rgba(255, 138, 0, 0.16) !important; }
          50% { box-shadow: 0 0 0 13px rgba(255, 189, 89, 0.13), 0 24px 58px rgba(255, 138, 0, 0.22) !important; }
        }

        @media (max-width: 720px) {
          .premium-ticket-header,
          .premium-ticket-actions,
          .premium-ticket-pass {
            display: grid;
          }

          .premium-ticket-stub {
            width: 100%;
            text-align: left;
          }

          .premium-ticket-pass::after {
            display: none;
          }

          .premium-ticket-details,
          .premium-ticket-meta {
            grid-template-columns: 1fr;
          }

          .premium-ticket-actions a,
          .premium-ticket-actions button {
            width: 100%;
          }
        }

        @media (max-width: 540px) {
          .premium-ticket-card {
            border-radius: 24px;
            padding: 0.95rem;
          }

          .premium-ticket-header {
            align-items: start;
          }

          .premium-ticket-status {
            width: fit-content;
            max-width: 100%;
          }

          .premium-ticket-pass {
            border-radius: 20px;
            padding: 0.9rem;
          }

          .premium-ticket-meta div,
          .premium-ticket-details span,
          .premium-ticket-qr {
            padding: 0.72rem;
          }
        }

        @media (max-width: 420px) {
          .premium-ticket-card {
            border-radius: 22px;
            padding: 0.85rem;
          }

          .premium-ticket-qr-actions {
            display: grid;
            width: 100%;
          }

          .premium-ticket-qr-actions button {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .premium-ticket-card {
            border-radius: 18px;
            padding: 0.72rem;
          }

          .premium-ticket-header h3 {
            font-size: 1.12rem;
          }

          .premium-ticket-header p,
          .premium-ticket-type,
          .premium-ticket-stub span,
          .premium-ticket-meta span {
            font-size: 0.62rem;
            letter-spacing: 0.09em;
          }

          .premium-ticket-pass-main strong {
            font-size: 1.15rem;
          }

          .premium-ticket-actions a,
          .premium-ticket-actions button,
          .premium-ticket-qr-actions button {
            min-height: 42px;
            padding-inline: 0.72rem;
            font-size: 0.86rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-ticket-pass::before,
          .premium-ticket-qr > div > div {
            animation: none;
          }
        }
      `}</style>
    </article>
  )
}

export default GeneratedTicketCard
