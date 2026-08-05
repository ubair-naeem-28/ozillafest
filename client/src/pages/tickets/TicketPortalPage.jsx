import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTicket } from '../../hooks/useTicket'
import { useAuth } from '../../hooks/useAuth'
import TicketRequestForm from '../../components/tickets/TicketRequestForm'
import IbanDisplayCard from '../../components/tickets/IbanDisplayCard'
import AlertMessage from '../../components/common/AlertMessage'
import { ticketService } from '../../services/ticketService'

const portalSteps = ['Personal Info', 'Ticket Details', 'Payment', 'Proof Upload', 'Confirmation']
const trustBadges = ['Secure Payments', 'Protected Booking', 'QR Ticket', 'Official Festival Ticket']
const whyBook = [
  ['Secure Booking', 'Protected ticket request and account-based access.'],
  ['Fast Confirmation', 'Admin verification workflow after payment proof upload.'],
  ['QR Ticket', 'Verified bookings generate scannable festival tickets.'],
  ['Premium Support', 'Support team available for booking and payment guidance.']
]
const benefits = ['VIP Access', 'Celebrity Performances', 'Food Court Access', 'Discount Offers', 'Festival Merchandise', 'Premium Seating']
const bookingTimeline = ['Booking', 'Verification', 'Approval', 'QR Ticket Generation', 'Ready To Attend']

const defaultSummary = {
  ticketType: 'General',
  day: 'Day 1',
  quantity: 1,
  subtotal: 5000,
  serviceFee: 150,
  discount: 0,
  total: 5150,
  benefits: ['Festival entry', 'Food court access', 'Partner discount offers']
}

function TicketPortalPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { requestTicket, uploadPaymentProof, loading } = useTicket()
  const [alert, setAlert] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const [ticketRequest, setTicketRequest] = useState(null)
  const [paymentFile, setPaymentFile] = useState(null)
  const [paymentPreview, setPaymentPreview] = useState('')
  const [bookingSummary, setBookingSummary] = useState(defaultSummary)
  const [availability, setAvailability] = useState(null)
  const [availabilityLoading, setAvailabilityLoading] = useState(true)

  const activeStep = showPayment ? 4 : 2
  const reserveMinutes = useMemo(() => 14, [])
  const displayName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || user?.name || user?.email || 'Festival Guest'
  const soldOut = Boolean(availability?.soldOut)

  useEffect(() => {
    let active = true
    const loadAvailability = async () => {
      setAvailabilityLoading(true)
      try {
        const data = await ticketService.getAvailability()
        if (!active) return
        setAvailability(data)
        if (data?.soldOut) {
          setAlert({ type: 'error', message: 'Tickets are sold out. The ticket portal is currently locked.' })
        }
      } catch (_error) {
        if (active) {
          setAvailability(null)
        }
      } finally {
        if (active) setAvailabilityLoading(false)
      }
    }

    loadAvailability()
    return () => {
      active = false
    }
  }, [])

  const handleStartPurchase = () => {
    if (soldOut) {
      setAlert({ type: 'error', message: 'Tickets are sold out. The ticket portal is currently locked.' })
      return
    }
    const returnTo = '/tickets'
    navigate(`/login?returnTo=${encodeURIComponent(returnTo)}`)
  }

  const handleTicketRequest = async (ticketData) => {
    if (soldOut) {
      setAlert({ type: 'error', message: 'Tickets are sold out. The ticket portal is currently locked.' })
      return
    }

    try {
      const response = await requestTicket(ticketData)
      setTicketRequest(response)
      setShowPayment(true)
      setAlert({ type: 'success', message: 'Ticket request submitted. Please upload your payment proof.' })
      const updatedAvailability = await ticketService.getAvailability().catch(() => null)
      if (updatedAvailability) setAvailability(updatedAvailability)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to request ticket. Please try again.'
      if (error?.response?.data?.availability) {
        setAvailability(error.response.data.availability)
      }
      setAlert({ type: 'error', message })
    }
  }

  const handleFileSelect = (file) => {
    setPaymentFile(file || null)
    setPaymentPreview('')
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => setPaymentPreview(String(reader.result || ''))
    reader.readAsDataURL(file)
  }

  const handleUploadProof = async () => {
    if (!ticketRequest?.id) {
      setAlert({ type: 'error', message: 'Ticket request not found.' })
      return
    }

    if (!paymentFile) {
      setAlert({ type: 'error', message: 'Please select a payment screenshot/image.' })
      return
    }

    try {
      await uploadPaymentProof(ticketRequest.id, paymentFile)
      setAlert({ type: 'success', message: 'Payment proof uploaded successfully. Generating your ticket...' })
      setPaymentFile(null)
      setPaymentPreview('')
      navigate(`/tickets/view/${ticketRequest.id}`)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to upload payment proof.'
      setAlert({ type: 'error', message })
    }
  }

  return (
    <main className="ticket-portal-premium">
      <section className="ticket-portal-hero">
        <div className="ticket-portal-orb ticket-portal-orb-one" />
        <div className="ticket-portal-orb ticket-portal-orb-two" />
        <div className="ticket-portal-particles" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="ticket-portal-hero-content">
          <p>Ozilla Festival 2026</p>
          <h1>Book Your Ozilla Festival Experience</h1>
          <span>Reserve your place for one of Pakistan's biggest entertainment festivals and become part of an unforgettable celebration.</span>
          <div className="ticket-trust-row">
            {trustBadges.map((badge) => <strong key={badge}>{badge}</strong>)}
          </div>
        </div>
      </section>

      <section className="ticket-portal-shell">
        {alert && (
          <AlertMessage
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <div className="ticket-progress-card">
          {portalSteps.map((step, index) => (
            <article key={step} className={index + 1 <= activeStep ? 'is-active' : ''}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </article>
          ))}
        </div>

        {soldOut ? (
          <div className="ticket-sold-out-lock" role="alert">
            <div className="ticket-sold-out-mark">Sold Out</div>
            <div>
              <p>Ticket Portal Locked</p>
              <h2>Tickets are sold out.</h2>
              <span>
                All available Ozilla Festival tickets have been reserved. Ticket purchases are currently closed.
              </span>
            </div>
          </div>
        ) : !user ? (
          <div className="ticket-auth-card">
            <div>
              <p>Premium Ticket Access</p>
              <h2>Sign in to purchase your festival ticket.</h2>
              <span>You can browse the website as a guest, but ticket purchases require secure account access.</span>
            </div>
            <button type="button" onClick={handleStartPurchase} className="ticket-primary-button">
              Purchase Ticket
            </button>
          </div>
        ) : (
          <div className="ticket-booking-layout">
            <section className="ticket-booking-card">
              <div className="ticket-card-top">
                <div>
                  <p>{showPayment ? 'Payment Step' : 'Premium Booking Portal'}</p>
                  <h2>{showPayment ? 'Complete Your Payment' : 'Reserve Your Festival Ticket'}</h2>
                </div>
                <span>{showPayment ? `Reserved for ${reserveMinutes} minutes` : 'Official festival ticket'}</span>
              </div>

              {!showPayment ? (
                <TicketRequestForm
                  onSubmit={handleTicketRequest}
                  loading={loading}
                  profileDefaults={user}
                  onBookingChange={setBookingSummary}
                  availability={availability}
                  availabilityLoading={availabilityLoading}
                />
              ) : (
                <div className="ticket-payment-flow">
                  <IbanDisplayCard />

                  <section className="ticket-upload-card">
                    <div className="ticket-panel-heading">
                      <p>Step 4</p>
                      <h3>Upload Payment Proof</h3>
                    </div>
                    <label
                      className="ticket-dropzone"
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => {
                        event.preventDefault()
                        handleFileSelect(event.dataTransfer.files?.[0])
                      }}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileSelect(e.target.files?.[0])}
                      />
                      <strong>{paymentFile ? paymentFile.name : 'Drag & drop payment screenshot here'}</strong>
                      <span>or browse file from your device</span>
                    </label>

                    {paymentPreview && (
                      <div className="ticket-proof-preview">
                        <img src={paymentPreview} alt="Payment proof preview" />
                      </div>
                    )}

                    <button
                      className="ticket-primary-button"
                      onClick={handleUploadProof}
                      disabled={loading}
                    >
                      {loading ? 'Generating QR Ticket...' : 'Submit Payment Proof'}
                    </button>
                  </section>
                </div>
              )}
            </section>

            <aside className="ticket-side-panel">
              <div className="ticket-profile-card">
                <div className="ticket-profile-avatar">{String(displayName).slice(0, 1).toUpperCase()}</div>
                <div>
                  <p>Welcome Back</p>
                  <h3>{displayName}</h3>
                  <span>Verified Account</span>
                  <span>Secure Booking</span>
                  <span>Returning Visitor</span>
                </div>
              </div>

              <div className="ticket-live-summary">
                <p>Live Booking Summary</p>
                <h3>{bookingSummary.ticketType} Pass</h3>
                <div><span>Festival Day</span><strong>{bookingSummary.day}</strong></div>
                <div><span>Quantity</span><strong>{bookingSummary.quantity}</strong></div>
                <div><span>Ticket Price</span><strong>PKR {bookingSummary.subtotal.toLocaleString()}</strong></div>
                <div><span>Festival Fee</span><strong>PKR {bookingSummary.serviceFee.toLocaleString()}</strong></div>
                <div><span>Discount</span><strong>PKR {bookingSummary.discount.toLocaleString()}</strong></div>
                <div className="ticket-live-total"><span>Grand Total</span><strong>PKR {bookingSummary.total.toLocaleString()}</strong></div>
                <small>Estimated confirmation: 24 hours</small>
              </div>

              <div className="ticket-pass-preview">
                <p>Festival Pass Preview</p>
                <h3>{bookingSummary.ticketType} Pass</h3>
                <span>Ozilla Festival 2026</span>
                <div className="ticket-qr-placeholder">QR</div>
                <strong>{bookingSummary.day} / Lahore, Pakistan</strong>
              </div>

              <div className="ticket-mini-card">
                <p>Ticket Benefits</p>
                <div>
                  {benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
                </div>
              </div>
              <div className="ticket-mini-card">
                <p>Why Book With Us</p>
                {whyBook.map(([title, detail]) => (
                  <article key={title}>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </article>
                ))}
              </div>

              <div className="ticket-mini-card ticket-timeline-card">
                <p>Booking Timeline</p>
                {bookingTimeline.map((item, index) => (
                  <article key={item} className={index < activeStep ? 'is-active' : ''}>
                    <strong>{item}</strong>
                    <span>{index < activeStep ? 'In progress' : 'Upcoming'}</span>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        )}
      </section>

      <style>{`
        .ticket-portal-premium {
          position: relative;
          min-height: 100vh;
          padding: clamp(1rem, 3vw, 2.2rem);
          overflow: hidden;
          color: #102525;
          background:
            radial-gradient(circle at 8% 10%, rgba(255, 176, 0, 0.2), transparent 24rem),
            radial-gradient(circle at 88% 12%, rgba(20, 142, 126, 0.2), transparent 26rem),
            radial-gradient(circle at 55% 95%, rgba(255, 77, 46, 0.12), transparent 25rem),
            linear-gradient(135deg, #fffaf2 0%, #eef5f0 48%, #f5e6dc 100%);
        }

        .ticket-portal-premium * { box-sizing: border-box; }

        .ticket-portal-premium button:focus-visible,
        .ticket-portal-premium input:focus-visible,
        .ticket-portal-premium select:focus-visible,
        .ticket-dropzone:focus-within {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 3px;
        }

        .ticket-booking-card,
        .ticket-auth-card,
        .ticket-sold-out-lock,
        .ticket-form-panel,
        .ticket-upload-card,
        .ticket-bank-card,
        .ticket-side-panel > *,
        .ticket-progress-card,
        .ticket-option-card {
          min-width: 0;
        }

        .ticket-portal-hero,
        .ticket-portal-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1260px);
          margin-inline: auto;
        }

        .ticket-portal-hero {
          min-height: clamp(380px, 54vh, 620px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 20% 20%, rgba(255, 189, 89, 0.32), transparent 18rem);
          box-shadow: 0 38px 110px rgba(2, 11, 13, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .ticket-portal-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(255, 255, 255, 0.11) 46%, transparent 56%),
            radial-gradient(circle at 54% 18%, rgba(255, 189, 89, 0.2), transparent 18rem);
          animation: ticketLightSweep 10s ease-in-out infinite alternate;
        }

        .ticket-portal-hero-content {
          position: relative;
          z-index: 1;
          width: min(92%, 970px);
          text-align: center;
          color: #fff;
          animation: ticketRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .ticket-portal-hero-content p,
        .ticket-card-top p,
        .ticket-panel-heading p,
        .ticket-bank-header p,
        .ticket-mini-card p {
          margin: 0 0 0.7rem;
          color: #ffbd59;
          font-size: clamp(0.7rem, 1.2vw, 0.84rem);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ticket-portal-hero-content h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.75rem, 7.4vw, 7rem);
          line-height: 0.91;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .ticket-portal-hero-content > span {
          display: block;
          width: min(100%, 790px);
          margin: 1.15rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.22rem);
          line-height: 1.6;
        }

        .ticket-trust-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }

        .ticket-trust-row strong {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          padding: 0 0.85rem;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.76rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
        }

        .ticket-portal-orb,
        .ticket-portal-particles span {
          position: absolute;
          pointer-events: none;
        }

        .ticket-portal-orb {
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.66;
          animation: ticketFloat 8s ease-in-out infinite;
        }

        .ticket-portal-orb-one {
          width: clamp(140px, 22vw, 290px);
          aspect-ratio: 1;
          left: 8%;
          top: 15%;
          background: rgba(255, 189, 89, 0.42);
        }

        .ticket-portal-orb-two {
          width: clamp(160px, 24vw, 330px);
          aspect-ratio: 1;
          right: 6%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.38);
          animation-direction: reverse;
        }

        .ticket-portal-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .ticket-portal-particles span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd36a, #ff7a1a);
          box-shadow: 0 0 22px rgba(255, 189, 89, 0.65);
          animation: ticketParticle 7s ease-in-out infinite;
        }
        .ticket-portal-particles span:nth-child(1) { left: 12%; top: 22%; }
        .ticket-portal-particles span:nth-child(2) { left: 28%; bottom: 18%; animation-delay: 1s; }
        .ticket-portal-particles span:nth-child(3) { right: 18%; top: 20%; animation-delay: 1.8s; }
        .ticket-portal-particles span:nth-child(4) { right: 28%; bottom: 22%; animation-delay: 2.6s; }
        .ticket-portal-particles span:nth-child(5) { left: 52%; top: 12%; animation-delay: 3.4s; }

        .ticket-portal-shell {
          margin-top: clamp(1rem, 2.4vw, 1.8rem);
        }

        .ticket-progress-card,
        .ticket-auth-card,
        .ticket-sold-out-lock,
        .ticket-booking-card,
        .ticket-side-panel > *,
        .ticket-bank-card,
        .ticket-upload-card {
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-progress-card {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.75rem;
          border-radius: 24px;
          padding: 0.85rem;
          margin-bottom: 1rem;
        }

        .ticket-progress-card article {
          min-height: 72px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border-radius: 18px;
          padding: 0.7rem;
          color: #55706f;
          background: rgba(255, 255, 255, 0.45);
        }

        .ticket-progress-card article.is-active {
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.35), rgba(255, 255, 255, 0.72));
          box-shadow: 0 16px 34px rgba(255, 176, 0, 0.13);
        }

        .ticket-progress-card span,
        .ticket-form-stepper span {
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #102525;
          font-weight: 950;
        }

        .ticket-booking-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
          gap: clamp(1rem, 2.4vw, 1.35rem);
          align-items: start;
        }

        .ticket-booking-card,
        .ticket-auth-card,
        .ticket-sold-out-lock {
          border-radius: 30px;
          padding: clamp(1rem, 2.4vw, 1.55rem);
        }

        .ticket-auth-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .ticket-sold-out-lock {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: clamp(0.85rem, 2.2vw, 1.3rem);
          border-color: rgba(190, 18, 60, 0.24);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 242, 0.58)),
            radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.18), transparent 16rem),
            radial-gradient(circle at 100% 0%, rgba(255, 189, 89, 0.2), transparent 14rem);
        }

        .ticket-sold-out-mark {
          width: clamp(84px, 11vw, 116px);
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          border-radius: 28px;
          color: #fff;
          font-size: clamp(0.72rem, 1.4vw, 0.92rem);
          font-weight: 950;
          letter-spacing: 0.13em;
          text-align: center;
          text-transform: uppercase;
          background: linear-gradient(135deg, #be123c, #ff4d2e 48%, #ffbd59);
          box-shadow: 0 20px 45px rgba(190, 18, 60, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.34);
        }

        .ticket-sold-out-lock p {
          margin: 0 0 0.45rem;
          color: #be123c;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ticket-sold-out-lock h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .ticket-sold-out-lock span {
          display: block;
          margin-top: 0.65rem;
          color: #55706f;
          line-height: 1.65;
        }

        .ticket-auth-card h2,
        .ticket-card-top h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.8rem, 3.4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-auth-card span,
        .ticket-card-top > span {
          color: #55706f;
          line-height: 1.65;
        }

        .ticket-card-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(11, 79, 76, 0.12);
          margin-bottom: 1rem;
        }

        .ticket-card-top > span {
          flex: 0 0 auto;
          height: fit-content;
          border-radius: 999px;
          padding: 0.55rem 0.8rem;
          background: rgba(255, 189, 89, 0.22);
          color: #0b4f4c;
          font-weight: 900;
        }

        .ticket-form-stepper {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .ticket-form-stepper button,
        .ticket-option-card,
        .ticket-secondary-button,
        .ticket-primary-button {
          border: 0;
          cursor: pointer;
          font: inherit;
        }

        .ticket-form-stepper button {
          min-height: 58px;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 999px;
          padding: 0.55rem 0.75rem;
          color: #55706f;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.52);
        }

        .ticket-form-stepper button.is-active,
        .ticket-form-stepper button.is-complete {
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.3), rgba(255, 255, 255, 0.72));
        }

        .ticket-login-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          min-height: 42px;
          border-radius: 999px;
          padding: 0 0.85rem;
          margin-bottom: 1rem;
          color: #0b4f4c;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-login-chip span {
          width: 28px;
          height: 28px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, #22c55e, #0b4f4c);
        }

        .ticket-form-panel,
        .ticket-upload-card {
          border-radius: 24px;
          padding: clamp(1rem, 2.2vw, 1.25rem);
          background: rgba(255, 255, 255, 0.42);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
        }

        .ticket-panel-heading h3,
        .ticket-bank-header h3 {
          margin: 0 0 0.8rem;
          color: #102525;
          font-size: clamp(1.35rem, 2.4vw, 2rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .ticket-input-grid,
        .ticket-option-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .ticket-input-wide { grid-column: 1 / -1; }

        .ticket-input-wrap {
          display: grid;
          gap: 0.45rem;
          color: #0b4f4c;
          font-weight: 900;
        }

        .ticket-input-wrap input,
        .ticket-input-wrap select {
          min-height: 54px;
          width: 100%;
          border: 1px solid rgba(11, 79, 76, 0.16);
          border-radius: 16px;
          padding: 0 0.9rem;
          color: #102525;
          background: rgba(255, 255, 255, 0.72);
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .ticket-input-wrap input:focus,
        .ticket-input-wrap select:focus {
          border-color: rgba(255, 138, 0, 0.56);
          box-shadow: 0 0 0 4px rgba(255, 189, 89, 0.18), 0 16px 34px rgba(255, 176, 0, 0.12);
          transform: translateY(-1px);
        }

        .ticket-input-wrap em {
          color: #be123c;
          font-size: 0.84rem;
          font-style: normal;
        }

        .ticket-option-card {
          min-height: 132px;
          display: grid;
          gap: 0.45rem;
          text-align: left;
          border: 1px solid rgba(11, 79, 76, 0.12);
          border-radius: 22px;
          padding: 1rem;
          color: #102525;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .ticket-option-card:hover,
        .ticket-option-card.is-selected,
        .ticket-mini-card article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.32);
          box-shadow: 0 28px 70px rgba(2, 11, 13, 0.12), 0 0 30px rgba(255, 176, 0, 0.08);
        }

        .ticket-option-card span {
          color: #ff8a00;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ticket-option-card strong {
          font-size: 1.45rem;
          letter-spacing: -0.04em;
        }

        .ticket-option-card.is-sold-out {
          cursor: not-allowed;
          opacity: 0.58;
          filter: grayscale(0.34);
        }

        .ticket-option-card.is-sold-out:hover {
          transform: none;
          border-color: rgba(11, 79, 76, 0.12);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.08);
        }

        .ticket-option-card.is-sold-out small {
          color: #be123c;
          font-weight: 950;
        }

        .ticket-review-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(250px, 320px);
          gap: 1rem;
        }

        .ticket-benefit-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .ticket-benefit-list span,
        .ticket-mini-card div span {
          min-height: 48px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.7rem 0.8rem;
          color: #315b59;
          font-weight: 850;
          background: rgba(255, 255, 255, 0.54);
        }

        .ticket-summary-card {
          border-radius: 22px;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86));
          color: #fff;
        }

        .ticket-summary-card h4 {
          margin: 0 0 0.85rem;
          color: #ffbd59;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ticket-summary-card div {
          display: flex;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.65rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .ticket-summary-card .ticket-total {
          border: 0;
          color: #ffbd59;
          font-size: 1.16rem;
        }

        .ticket-form-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-top: 1rem;
        }

        .ticket-primary-button,
        .ticket-secondary-button {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 1.2rem;
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease, opacity 220ms ease;
        }

        .ticket-primary-button {
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.28);
        }

        .ticket-secondary-button {
          color: #0b4f4c;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: inset 0 0 0 1px rgba(11, 79, 76, 0.14);
        }

        .ticket-primary-button:hover,
        .ticket-secondary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.28);
        }

        .ticket-shimmer-button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .ticket-shimmer-button::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 -45%;
          width: 42%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.48), transparent);
          transform: skewX(-18deg);
          animation: ticketButtonShine 3.4s ease-in-out infinite;
          z-index: -1;
        }

        .ticket-primary-button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .ticket-side-panel {
          display: grid;
          gap: 1rem;
          position: sticky;
          top: 110px;
        }

        .ticket-profile-card,
        .ticket-live-summary,
        .ticket-pass-preview,
        .ticket-mini-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-profile-card,
        .ticket-live-summary,
        .ticket-pass-preview {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-profile-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.85rem;
          align-items: center;
        }

        .ticket-profile-avatar {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          color: #102525;
          font-weight: 950;
          font-size: 1.35rem;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 18px 34px rgba(255, 138, 0, 0.24);
        }

        .ticket-profile-card p,
        .ticket-live-summary p,
        .ticket-pass-preview p {
          margin: 0 0 0.35rem;
          color: #ff8a00;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ticket-profile-card h3,
        .ticket-live-summary h3,
        .ticket-pass-preview h3 {
          margin: 0 0 0.65rem;
          color: #102525;
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .ticket-profile-card span {
          display: inline-flex;
          width: fit-content;
          margin: 0.25rem 0.25rem 0 0;
          border-radius: 999px;
          padding: 0.35rem 0.55rem;
          color: #0b4f4c;
          font-size: 0.72rem;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-live-summary::after,
        .ticket-pass-preview::after {
          content: '';
          position: absolute;
          inset: -42% -25% auto auto;
          width: 45%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(30px);
          pointer-events: none;
        }

        .ticket-live-summary div {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.55rem 0;
          border-bottom: 1px solid rgba(11, 79, 76, 0.09);
          color: #55706f;
        }

        .ticket-live-summary div strong {
          color: #102525;
          text-align: right;
        }

        .ticket-live-summary .ticket-live-total {
          border: 0;
          color: #0b4f4c;
          font-size: 1.08rem;
        }

        .ticket-live-summary .ticket-live-total strong {
          color: #ff8a00;
          font-size: 1.18rem;
        }

        .ticket-live-summary small {
          display: block;
          margin-top: 0.7rem;
          color: #55706f;
          font-weight: 800;
        }

        .ticket-pass-preview {
          min-height: 255px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(7, 51, 50, 0.88), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 18% 18%, rgba(255, 189, 89, 0.28), transparent 12rem);
        }

        .ticket-pass-preview p,
        .ticket-pass-preview h3,
        .ticket-pass-preview span,
        .ticket-pass-preview strong,
        .ticket-qr-placeholder {
          position: relative;
          z-index: 1;
        }

        .ticket-pass-preview h3 {
          color: #fff;
          text-transform: uppercase;
        }

        .ticket-pass-preview > span {
          display: block;
          color: rgba(255, 255, 255, 0.74);
          font-weight: 800;
        }

        .ticket-qr-placeholder {
          width: 92px;
          height: 92px;
          display: grid;
          place-items: center;
          margin: 1rem 0;
          border-radius: 18px;
          color: #102525;
          font-weight: 950;
          background:
            linear-gradient(90deg, rgba(16, 37, 37, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(16, 37, 37, 0.1) 1px, transparent 1px),
            #fffaf2;
          background-size: 14px 14px;
          box-shadow: 0 18px 38px rgba(255, 189, 89, 0.18);
        }

        .ticket-mini-card div,
        .ticket-mini-card {
          display: grid;
          gap: 0.75rem;
        }

        .ticket-mini-card article {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 18px;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.5);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .ticket-mini-card article strong {
          display: block;
          color: #102525;
          margin-bottom: 0.25rem;
        }

        .ticket-timeline-card article {
          position: relative;
          padding-left: 1.1rem;
        }

        .ticket-timeline-card article::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1rem;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.22);
          box-shadow: 0 0 0 4px rgba(11, 79, 76, 0.06);
        }

        .ticket-timeline-card article.is-active::before {
          background: #ff8a00;
          box-shadow: 0 0 0 4px rgba(255, 138, 0, 0.12), 0 0 18px rgba(255, 138, 0, 0.42);
        }

        .ticket-mini-card article span,
        .ticket-bank-note p,
        .ticket-bank-grid span {
          color: #55706f;
          line-height: 1.6;
        }

        .ticket-payment-flow {
          display: grid;
          gap: 1rem;
        }

        .ticket-bank-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-bank-header span {
          display: inline-flex;
          border-radius: 999px;
          padding: 0.45rem 0.7rem;
          color: #0b4f4c;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-bank-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .ticket-bank-grid article,
        .ticket-bank-note {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 18px;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.54);
        }

        .ticket-bank-grid strong {
          display: block;
          margin-top: 0.25rem;
          color: #102525;
          overflow-wrap: anywhere;
        }

        .ticket-bank-grid button {
          margin-top: 0.55rem;
          border: 0;
          border-radius: 999px;
          padding: 0.45rem 0.75rem;
          color: #101819;
          font-weight: 900;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
        }

        .ticket-bank-note {
          margin-top: 0.75rem;
        }

        .ticket-bank-note strong {
          color: #0b4f4c;
        }

        .ticket-dropzone {
          min-height: 170px;
          display: grid;
          place-items: center;
          gap: 0.4rem;
          text-align: center;
          border: 1px dashed rgba(255, 138, 0, 0.54);
          border-radius: 22px;
          padding: 1rem;
          color: #0b4f4c;
          background: rgba(255, 189, 89, 0.1);
          cursor: pointer;
        }

        .ticket-dropzone input {
          display: none;
        }

        .ticket-proof-preview {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(11, 79, 76, 0.12);
          margin: 1rem 0;
          max-height: 320px;
        }

        .ticket-proof-preview img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes ticketRise {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes ticketLightSweep {
          from { transform: translateX(-4%) scale(1); }
          to { transform: translateX(4%) scale(1.04); }
        }

        @keyframes ticketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes ticketParticle {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate3d(10px, -18px, 0) scale(1.35); opacity: 1; }
        }

        @keyframes ticketButtonShine {
          0%, 58% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          68% { opacity: 1; }
          100% { transform: translateX(360%) skewX(-18deg); opacity: 0; }
        }

        @media (min-width: 1600px) {
          .ticket-portal-hero,
          .ticket-portal-shell {
            width: min(100%, 1380px);
          }

          .ticket-booking-layout {
            grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
          }
        }

        @media (max-width: 1280px) {
          .ticket-booking-layout {
            grid-template-columns: minmax(0, 1fr) minmax(270px, 330px);
          }

          .ticket-progress-card strong {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 1024px) {
          .ticket-booking-layout {
            grid-template-columns: 1fr;
          }

          .ticket-side-panel {
            position: static;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ticket-live-summary,
          .ticket-pass-preview {
            align-self: stretch;
          }

          .ticket-progress-card {
            overflow-x: auto;
            grid-template-columns: repeat(5, minmax(190px, 1fr));
            scroll-snap-type: x proximity;
            scrollbar-width: thin;
          }

          .ticket-progress-card article {
            scroll-snap-align: start;
          }
        }

        @media (max-width: 912px) {
          .ticket-portal-hero {
            min-height: clamp(360px, 50vh, 520px);
          }

          .ticket-booking-card {
            width: min(100%, 900px);
            margin-inline: auto;
          }

          .ticket-side-panel {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .ticket-portal-premium {
            padding: 0.85rem;
            overflow-x: hidden;
          }

          .ticket-portal-hero,
          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock {
            border-radius: 24px;
          }

          .ticket-card-top,
          .ticket-auth-card,
          .ticket-sold-out-lock {
            display: grid;
          }

          .ticket-sold-out-lock {
            grid-template-columns: 1fr;
          }

          .ticket-input-grid,
          .ticket-option-grid,
          .ticket-review-layout,
          .ticket-bank-grid,
          .ticket-side-panel {
            grid-template-columns: 1fr;
          }

          .ticket-side-panel {
            order: 2;
          }

          .ticket-booking-card {
            order: 1;
          }

          .ticket-form-stepper {
            display: flex;
            overflow-x: auto;
            padding-bottom: 0.25rem;
            scroll-snap-type: x proximity;
            scrollbar-width: thin;
          }

          .ticket-form-stepper button {
            flex: 0 0 auto;
            min-width: 210px;
            scroll-snap-align: start;
          }
        }

        @media (max-width: 540px) {
          .ticket-portal-premium {
            padding: 0.65rem;
          }

          .ticket-portal-hero {
            min-height: 360px;
            border-radius: 20px;
            padding: 1rem 0.75rem;
          }

          .ticket-portal-hero-content h1 {
            font-size: clamp(2.05rem, 12vw, 3.35rem);
            letter-spacing: -0.04em;
          }

          .ticket-trust-row {
            display: grid;
            grid-template-columns: 1fr;
            width: min(100%, 310px);
          }

          .ticket-trust-row strong {
            justify-content: center;
          }

          .ticket-progress-card {
            border-radius: 18px;
            padding: 0.65rem;
            gap: 0.55rem;
            grid-template-columns: repeat(5, minmax(170px, 1fr));
          }

          .ticket-progress-card article {
            min-height: 62px;
          }

          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock,
          .ticket-form-panel,
          .ticket-upload-card,
          .ticket-bank-card,
          .ticket-profile-card,
          .ticket-live-summary,
          .ticket-pass-preview,
          .ticket-mini-card {
            border-radius: 18px;
            padding: 0.85rem;
          }

          .ticket-profile-card {
            grid-template-columns: 1fr;
          }

          .ticket-form-actions {
            grid-template-columns: 1fr;
          }

          .ticket-primary-button,
          .ticket-secondary-button {
            width: 100%;
          }

          .ticket-booking-layout {
            display: flex;
            flex-direction: column;
          }

          .ticket-booking-card { order: 1; }
          .ticket-profile-card { order: 2; }
          .ticket-pass-preview { order: 3; }
          .ticket-mini-card:first-of-type { order: 4; }
          .ticket-mini-card:nth-of-type(2) { order: 5; }
          .ticket-timeline-card { order: 6; }
          .ticket-live-summary { order: 7; }

          .ticket-side-panel {
            display: contents;
          }

          .ticket-input-wrap input,
          .ticket-input-wrap select {
            min-height: 52px;
          }

          .ticket-option-card {
            min-height: 118px;
          }

          .ticket-dropzone {
            min-height: 150px;
          }
        }

        @media (max-width: 430px) {
          .ticket-portal-hero-content h1 {
            font-size: clamp(1.9rem, 11vw, 2.9rem);
          }

          .ticket-portal-hero-content > span {
            font-size: 0.95rem;
          }

          .ticket-progress-card {
            grid-template-columns: repeat(5, minmax(155px, 1fr));
          }

          .ticket-form-stepper button {
            min-width: 180px;
          }

          .ticket-card-top > span {
            width: fit-content;
          }
        }

        @media (max-width: 360px) {
          .ticket-portal-premium {
            padding: 0.5rem;
          }

          .ticket-portal-hero {
            min-height: 330px;
            border-radius: 18px;
          }

          .ticket-portal-hero-content h1 {
            font-size: 1.85rem;
          }

          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock,
          .ticket-form-panel,
          .ticket-upload-card,
          .ticket-bank-card,
          .ticket-profile-card,
          .ticket-live-summary,
          .ticket-pass-preview,
          .ticket-mini-card {
            padding: 0.72rem;
          }

          .ticket-panel-heading h3,
          .ticket-bank-header h3,
          .ticket-card-top h2 {
            font-size: 1.35rem;
          }

          .ticket-progress-card {
            grid-template-columns: repeat(5, minmax(145px, 1fr));
          }

          .ticket-progress-card article {
            min-height: 58px;
            padding: 0.55rem;
          }

          .ticket-progress-card span,
          .ticket-form-stepper span {
            width: 30px;
            height: 30px;
          }
        }

        @media (hover: none) {
          .ticket-option-card:hover,
          .ticket-primary-button:hover,
          .ticket-secondary-button:hover,
          .ticket-live-summary:hover,
          .ticket-pass-preview:hover,
          .ticket-mini-card article:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticket-portal-hero::before,
          .ticket-portal-orb,
          .ticket-portal-particles span,
          .ticket-portal-hero-content,
          .ticket-shimmer-button::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default TicketPortalPage
