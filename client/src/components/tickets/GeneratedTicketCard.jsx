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
  const passTypeLabel = `${(ticket.ticketType || 'VIP').toUpperCase()} PASS`
  const formattedEventDate = ticket.eventDate ? formatDate(ticket.eventDate) : 'Nov 01, 2026'
  const festivalDayLabel = ticket.festivalDay === 'day2' ? 'Day 2' : 'Day 1'

  const downloadCanvas = (canvas) => {
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `ozilla-pass-${ticketNumber}.png`
    link.click()
  }

  const handleDownloadTicket = async () => {
    const qrCanvas = qrWrapRef.current?.querySelector('canvas')

    // High-resolution canvas render for crisp ticket badge image
    const width = 1200
    const height = 440
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Outer dark gradient matching user pass design
    const cardGradient = ctx.createLinearGradient(0, 0, width, height)
    cardGradient.addColorStop(0, '#020d0f')
    cardGradient.addColorStop(0.46, '#062828')
    cardGradient.addColorStop(1, '#23081e')

    roundRect(ctx, 4, 4, width - 8, height - 8, 38)
    ctx.fillStyle = cardGradient
    ctx.fill()

    // Pass glowing border stroke
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)'
    ctx.lineWidth = 3
    ctx.stroke()

    // Inner subtle glow accent at the top edge
    const accentGrad = ctx.createLinearGradient(80, 0, width - 80, 0)
    accentGrad.addColorStop(0, 'rgba(255, 189, 89, 0.7)')
    accentGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.5)')
    accentGrad.addColorStop(1, 'rgba(236, 72, 153, 0.6)')
    ctx.strokeStyle = accentGrad
    ctx.lineWidth = 3.5
    ctx.beginPath()
    ctx.moveTo(90, 6)
    ctx.lineTo(width - 90, 6)
    ctx.stroke()

    // Top-Left: Pass Type & Festival Title
    ctx.fillStyle = '#ffffff'
    ctx.font = '800 20px "Segoe UI", Arial, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(passTypeLabel, 54, 66)

    ctx.fillStyle = '#ff9f1c'
    ctx.font = '800 13px "Segoe UI", Arial, sans-serif'
    ctx.fillText('OZILLA FESTIVAL 2026', 54, 94)

    // Middle-Left: Attendee Name
    const fullName = ticket.fullName || ticket.name || 'Festival Guest'
    ctx.fillStyle = '#ffffff'
    ctx.font = '800 36px "Segoe UI", Arial, sans-serif'
    drawWrappedText(ctx, fullName, 54, 152, width - 360, 42)

    // Attendee Email
    const email = ticket.email || '-'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.78)'
    ctx.font = '600 17px "Segoe UI", Arial, sans-serif'
    ctx.fillText(email, 54, 198)

    // Bottom Meta Chips / Row (Date, Day, Location, Booking ID)
    const metaChips = [
      { label: 'DATE', val: formattedEventDate },
      { label: 'DAY', val: festivalDayLabel },
      { label: 'LOCATION', val: ticket.location || 'Lahore, Pakistan' },
      { label: 'BOOKING ID', val: String(bookingId) }
    ]

    const chipY = 246
    let chipX = 54
    metaChips.forEach((chip) => {
      ctx.font = '700 11px "Segoe UI", Arial, sans-serif'
      const labelW = ctx.measureText(chip.label).width
      ctx.font = '800 14px "Segoe UI", Arial, sans-serif'
      const valW = ctx.measureText(chip.val).width
      const chipW = Math.max(labelW, valW) + 28
      const chipH = 58

      roundRect(ctx, chipX, chipY, chipW, chipH, 12)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.07)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.fillStyle = '#ff9f1c'
      ctx.font = '800 11px "Segoe UI", Arial, sans-serif'
      ctx.textAlign = 'left'
      ctx.fillText(chip.label, chipX + 14, chipY + 22)

      ctx.fillStyle = '#ffffff'
      ctx.font = '800 14px "Segoe UI", Arial, sans-serif'
      ctx.fillText(chip.val, chipX + 14, chipY + 44)

      chipX += chipW + 14
    })

    // Footer note
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)'
    ctx.font = '600 13px "Segoe UI", Arial, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(`Official Festival Entry Pass • ID: ${ticketNumber} • Verify at entrance`, 54, 388)

    // Top-Right: Ticket ID block
    ctx.fillStyle = '#ffbd59'
    ctx.font = '800 16px "Segoe UI", Arial, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText('TICKET ID', width - 54, 66)

    ctx.fillStyle = '#ffffff'
    ctx.font = '800 20px "Segoe UI", Arial, monospace'
    ctx.fillText(String(ticketNumber), width - 54, 96)

    // Right: QR Code Box
    const qrSize = 190
    const qrX = width - qrSize - 54
    const qrY = 132

    roundRect(ctx, qrX, qrY, qrSize, qrSize, 18)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = 'rgba(255, 189, 89, 0.4)'
    ctx.lineWidth = 2
    ctx.stroke()

    if (qrCanvas && isApproved) {
      ctx.drawImage(qrCanvas, qrX + 12, qrY + 12, qrSize - 24, qrSize - 24)
    } else {
      ctx.fillStyle = '#102525'
      ctx.font = '800 13px "Segoe UI", Arial, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('QR CODE', qrX + qrSize / 2, qrY + qrSize / 2 - 8)
      ctx.font = '600 11px "Segoe UI", Arial, sans-serif'
      ctx.fillStyle = '#6b7280'
      ctx.fillText(isApproved ? 'GENERATING' : 'PENDING APPROVAL', qrX + qrSize / 2, qrY + qrSize / 2 + 12)
    }

    // Text under QR code
    ctx.fillStyle = '#ffbd59'
    ctx.font = '800 11px "Segoe UI", Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('SCAN AT ENTRANCE', qrX + qrSize / 2, qrY + qrSize + 28)

    downloadCanvas(canvas)
  }

  const handlePrint = () => {
    handleDownloadTicket()
  }

  const handleShare = async () => {
    if (!navigator.share) return
    try {
      await navigator.share({
        title: ticket.eventName || 'Ozilla Festival Ticket Pass',
        text: `Ozilla Festival Ticket: ${ticketNumber} (${passTypeLabel})`
      })
    } catch {
      // Sharing was cancelled or unavailable.
    }
  }

  return (
    <div className="ticket-pass-wrapper" ref={ticketCardRef}>
      {/* Sleek Dark Horizontal Pass Badge matching the exact provided design */}
      <div className="ticket-pass-badge">
        <div className="ticket-pass-glow" aria-hidden="true" />

        {/* Left Side: Pass Info, Attendee Details, Date, Day, Meta */}
        <div className="ticket-pass-left">
          <div className="ticket-pass-top-row">
            <div className="ticket-pass-type-badge">{passTypeLabel}</div>
            <div className="ticket-pass-festival-tag">OZILLA FESTIVAL 2026</div>
          </div>

          <div className="ticket-pass-identity">
            <h2 className="ticket-pass-name">{ticket.fullName || ticket.name || 'Festival Guest'}</h2>
            <p className="ticket-pass-email">{ticket.email || '-'}</p>
          </div>

          <div className="ticket-pass-meta-row">
            <div className="ticket-pass-chip">
              <span className="ticket-pass-chip-label">DATE</span>
              <strong className="ticket-pass-chip-value">{formattedEventDate}</strong>
            </div>
            <div className="ticket-pass-chip">
              <span className="ticket-pass-chip-label">DAY</span>
              <strong className="ticket-pass-chip-value">{festivalDayLabel}</strong>
            </div>
            <div className="ticket-pass-chip">
              <span className="ticket-pass-chip-label">BOOKING ID</span>
              <strong className="ticket-pass-chip-value">{bookingId}</strong>
            </div>
          </div>

          <div className="ticket-pass-footnote">
            <span>Official Festival Entry Pass • Valid for 1 Person</span>
          </div>
        </div>

        {/* Right Side: Ticket ID, QR Code */}
        <div className="ticket-pass-right">
          <div className="ticket-pass-id-block">
            <span className="ticket-pass-id-label">TICKET ID</span>
            <strong className="ticket-pass-id-value">{ticketNumber}</strong>
          </div>

          <div className="ticket-pass-qr-box" ref={qrWrapRef}>
            {isApproved ? (
              <QrCodeDisplay ticket={ticket} size={118} showCaption={false} />
            ) : (
              <div className="ticket-pass-qr-pending">
                <span>QR Pending</span>
                <small>Approval Required</small>
              </div>
            )}
            <span className="ticket-pass-scan-hint">SCAN AT ENTRANCE</span>
          </div>
        </div>
      </div>

      {/* Action Toolbar Below The Pass */}
      <div className="ticket-pass-actions-bar">
        <div className="ticket-pass-status-pill">
          <span className={`status-dot ${statusMeta.className}`} />
          <span>Status: <strong>{statusMeta.label}</strong></span>
        </div>

        <div className="ticket-pass-button-group">
          {isApproved ? (
            <button type="button" className="btn-pass-download" onClick={handleDownloadTicket}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Pass
            </button>
          ) : (
            <button type="button" className="btn-pass-download disabled" disabled title="Available after verification">
              Download Pass (Pending)
            </button>
          )}

          <button type="button" className="btn-pass-secondary" onClick={handlePrint}>
            Print
          </button>
          <button type="button" className="btn-pass-secondary" onClick={handleShare}>
            Share
          </button>

          {actionTo && (
            <Link to={actionTo} className="btn-pass-link">
              {actionLabel}
            </Link>
          )}
        </div>
      </div>

      <style>{`
        .ticket-pass-wrapper {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ticket-pass-badge {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-radius: 28px;
          padding: clamp(1.2rem, 3vw, 2rem);
          background: linear-gradient(135deg, #020d0f 0%, #062828 46%, #23081e 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: center;
          color: #ffffff;
          box-sizing: border-box;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .ticket-pass-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 30px 75px rgba(0, 0, 0, 0.55), 0 0 35px rgba(255, 189, 89, 0.12);
        }

        .ticket-pass-glow {
          position: absolute;
          top: -40%;
          right: 20%;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(255, 189, 89, 0.18), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .ticket-pass-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
          z-index: 1;
        }

        .ticket-pass-top-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .ticket-pass-type-badge {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
        }

        .ticket-pass-festival-tag {
          color: #ff9f1c;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ticket-pass-identity {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ticket-pass-name {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 3.2vw, 2.3rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          overflow-wrap: anywhere;
        }

        .ticket-pass-email {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .ticket-pass-meta-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .ticket-pass-chip {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 0.45rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .ticket-pass-chip-label {
          color: #ff9f1c;
          font-size: 0.62rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ticket-pass-chip-value {
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .ticket-pass-footnote {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .ticket-pass-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          z-index: 1;
          flex-shrink: 0;
        }

        .ticket-pass-id-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.15rem;
          text-align: right;
        }

        .ticket-pass-id-label {
          color: #ffbd59;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ticket-pass-id-value {
          color: #ffffff;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 900;
          font-family: 'Courier New', Courier, monospace, sans-serif;
          letter-spacing: 0.04em;
        }

        .ticket-pass-qr-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        }

        .ticket-pass-qr-box .bg-white {
          padding: 0 !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        .ticket-pass-qr-box canvas {
          display: block;
          max-width: 120px;
          height: auto;
          border-radius: 6px;
        }

        .ticket-pass-qr-pending {
          width: 118px;
          height: 118px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #92400e;
          background: #fef3c7;
          border-radius: 10px;
          padding: 0.5rem;
          gap: 0.2rem;
        }

        .ticket-pass-qr-pending span {
          font-weight: 800;
          font-size: 0.8rem;
        }

        .ticket-pass-qr-pending small {
          font-size: 0.68rem;
          line-height: 1.1;
        }

        .ticket-pass-scan-hint {
          color: #102525;
          font-size: 0.62rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .ticket-pass-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 0.4rem 0.2rem;
        }

        .ticket-pass-status-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #374151;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f59e0b;
        }

        .status-dot.is-approved { background: #10b981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.6); }
        .status-dot.is-submitted { background: #0ea5e9; }
        .status-dot.is-cancelled { background: #f43f5e; }

        .ticket-pass-button-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .btn-pass-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #059669, #047857);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.6rem 1.1rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 200ms ease;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }

        .btn-pass-download:hover:not(:disabled) {
          background: linear-gradient(135deg, #10b981, #059669);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
        }

        .btn-pass-download.disabled,
        .btn-pass-download:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-pass-secondary {
          background: #ffffff;
          border: 1px solid #d1d5db;
          color: #374151;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .btn-pass-secondary:hover {
          background: #f9fafb;
          border-color: #9ca3af;
        }

        .btn-pass-link {
          color: #2563eb;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.6rem 0.8rem;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .btn-pass-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 680px) {
          .ticket-pass-badge {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .ticket-pass-left {
            align-items: center;
          }

          .ticket-pass-top-row,
          .ticket-pass-meta-row {
            justify-content: center;
          }

          .ticket-pass-right {
            align-items: center;
            width: 100%;
          }

          .ticket-pass-id-block {
            align-items: center;
            text-align: center;
          }

          .ticket-pass-actions-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .ticket-pass-button-group {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default GeneratedTicketCard
