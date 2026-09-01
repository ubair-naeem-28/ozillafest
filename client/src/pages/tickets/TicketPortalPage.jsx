import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTicket } from '../../hooks/useTicket'
import { useAuth } from '../../hooks/useAuth'
import TicketRequestForm from '../../components/tickets/TicketRequestForm'
import CardPaymentForm from '../../components/tickets/CardPaymentForm'
import JazzCashPaymentForm from '../../components/tickets/JazzCashPaymentForm'
import EasypaisaPaymentForm from '../../components/tickets/EasypaisaPaymentForm'
import PayFastGatewayCard from '../../components/tickets/PayFastGatewayCard'
import PayFastGatewayModal from '../../components/tickets/PayFastGatewayModal'
import PaymentMethodSelector from '../../components/tickets/PaymentMethodSelector'
import AlertMessage from '../../components/common/AlertMessage'
import PlexusNetBackground from '../../components/common/PlexusNetBackground'
import { ticketService } from '../../services/ticketService'

const portalSteps = ['Personal Info', 'Ticket Details', 'Payment Checkout', 'QR Pass']

const defaultSummary = {
  ticketType: 'General',
  day: 'Day 1',
  quantity: 1,
  subtotal: 1,
  serviceFee: 0,
  discount: 0,
  total: 1,
  benefits: ['Festival entry', 'Food court access', 'Partner discount offers']
}

function TicketPortalPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { requestTicket, payWithCard, payWithJazzCash, payWithEasypaisa, initiatePayFastCheckout, completePayFastGateway, loading } = useTicket()
  const [alert, setAlert] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('payfast')
  const [ticketRequest, setTicketRequest] = useState(null)
  const [showPayFastModal, setShowPayFastModal] = useState(false)
  const [bookingSummary, setBookingSummary] = useState(defaultSummary)
  const [availability, setAvailability] = useState(null)
  const [availabilityLoading, setAvailabilityLoading] = useState(true)

  const activeStep = showPayment ? 3 : 2
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
      setAlert({ type: 'success', message: 'Ticket reserved! Please complete payment below.' })
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

  const handleCardPayment = async (cardData) => {
    if (!ticketRequest?.id) {
      setAlert({ type: 'error', message: 'Ticket session expired. Please retry.' })
      return
    }

    try {
      await payWithCard(ticketRequest.id, cardData)
      setAlert({
        type: 'success',
        message: `Payment of PKR ${bookingSummary.total.toLocaleString()} successful! Your QR pass is ready.`
      })
      navigate(`/tickets/view/${ticketRequest.id}`)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to process card payment.'
      setAlert({ type: 'error', message })
    }
  }

  const handleJazzCashPayment = async (jazzCashData) => {
    if (!ticketRequest?.id) {
      setAlert({ type: 'error', message: 'Ticket session expired. Please retry.' })
      return
    }

    try {
      await payWithJazzCash(ticketRequest.id, jazzCashData)
      setAlert({
        type: 'success',
        message: `JazzCash payment successful! Your QR pass is ready.`
      })
      navigate(`/tickets/view/${ticketRequest.id}`)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to process JazzCash payment.'
      setAlert({ type: 'error', message })
    }
  }

  const handleEasypaisaPayment = async (easypaisaData) => {
    if (!ticketRequest?.id) {
      setAlert({ type: 'error', message: 'Ticket session expired. Please retry.' })
      return
    }

    try {
      await payWithEasypaisa(ticketRequest.id, easypaisaData)
      setAlert({
        type: 'success',
        message: `Easypaisa payment successful! Your QR pass is ready.`
      })
      navigate(`/tickets/view/${ticketRequest.id}`)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to process Easypaisa payment.'
      setAlert({ type: 'error', message })
    }
  }

  const handlePayFastProceed = async () => {
    if (!ticketRequest?.id) {
      setAlert({ type: 'error', message: 'Ticket session expired. Please retry.' })
      return
    }

    try {
      await initiatePayFastCheckout(ticketRequest.id)
      setShowPayFastModal(true)
    } catch (error) {
      setAlert({
        type: 'error',
        message: error?.response?.data?.message || error?.message || 'Failed to initiate PayFast session.'
      })
    }
  }

  const handlePayFastComplete = async (gatewayData) => {
    if (!ticketRequest?.id) return
    try {
      await completePayFastGateway(ticketRequest.id, gatewayData)
      setShowPayFastModal(false)
      setAlert({
        type: 'success',
        message: `PayFast payment of PKR ${bookingSummary.total.toLocaleString()} confirmed! Official QR pass generated.`
      })
      navigate(`/tickets/view/${ticketRequest.id}?payment=success`)
    } catch (error) {
      setAlert({
        type: 'error',
        message: error?.response?.data?.message || error?.message || 'Failed to verify PayFast transaction.'
      })
    }
  }

  return (
    <main className="ticket-portal-clean">
      {/* ══ CLEAN HERO ══ */}
      <section className="ticket-clean-hero">
        <PlexusNetBackground
          nodeColor="#EC4899"
          lineColor="236, 72, 153"
          secondaryColor="255, 90, 31"
          maxDistance={140}
          speed={0.5}
        />
        <div className="hero-glow-blob" />

        <div className="ticket-clean-hero-content">
          <span className="hero-eyebrow">OZILLA FESTIVAL 2026</span>
          <h1 className="hero-title">Book Your Festival Passes</h1>
          <p className="hero-subtitle">
            Instant digital QR pass with access to 4 live stages, headline artists, and VIP amenities in Lahore.
          </p>
          <div className="hero-tags">
            <span>📅 Nov 01, 2026</span>
            <span>📍 Lahore</span>
            <span>⚡ Instant QR Pass</span>
          </div>
        </div>
      </section>

      <section className="ticket-clean-shell">
        {alert && (
          <AlertMessage
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        {/* ── STEPPER ── */}
        <div className="ticket-clean-stepper">
          {portalSteps.map((step, index) => (
            <div key={step} className={`step-item ${index + 1 <= activeStep ? 'is-active' : ''}`}>
              <span className="step-num">{index + 1}</span>
              <span className="step-text">{step}</span>
            </div>
          ))}
        </div>

        {soldOut ? (
          <div className="ticket-sold-out-box">
            <h2>Tickets Sold Out</h2>
            <p>All available Ozilla Festival passes have been reserved.</p>
          </div>
        ) : !user ? (
          <div className="ticket-auth-prompt">
            <div>
              <h2>Sign in to Book Passes</h2>
              <p>Secure ticket purchasing requires an account for verified QR pass generation.</p>
            </div>
            <button type="button" onClick={handleStartPurchase} className="ticket-primary-button">
              Sign In to Continue →
            </button>
          </div>
        ) : (
          <div className="ticket-main-grid">
            {/* Left: Form / Payment */}
            <div className="ticket-form-card">
              <div className="ticket-form-header">
                <h2>{showPayment ? 'Payment Checkout' : 'Pass Reservation'}</h2>
                <span className="ticket-badge-pill">Official Portal</span>
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
                <div className="ticket-payment-wrapper">
                  <PaymentMethodSelector
                    activeMethod={paymentMethod}
                    onSelectMethod={setPaymentMethod}
                  />

                  {paymentMethod === 'payfast' && (
                    <PayFastGatewayCard
                      amount={bookingSummary.total}
                      onProceed={handlePayFastProceed}
                      loading={loading}
                      onBack={() => setShowPayment(false)}
                    />
                  )}

                  {paymentMethod === 'card' && (
                    <CardPaymentForm
                      amount={bookingSummary.total}
                      onSubmit={handleCardPayment}
                      loading={loading}
                      onBack={() => setShowPayment(false)}
                    />
                  )}

                  {paymentMethod === 'jazzcash' && (
                    <JazzCashPaymentForm
                      amount={bookingSummary.total}
                      onSubmit={handleJazzCashPayment}
                      loading={loading}
                      onBack={() => setShowPayment(false)}
                    />
                  )}

                  {paymentMethod === 'easypaisa' && (
                    <EasypaisaPaymentForm
                      amount={bookingSummary.total}
                      onSubmit={handleEasypaisaPayment}
                      loading={loading}
                      onBack={() => setShowPayment(false)}
                    />
                  )}
                </div>
              )}
            </div>

            {/* PayFast Interactive Simulator Modal */}
            <PayFastGatewayModal
              isOpen={showPayFastModal}
              onClose={() => setShowPayFastModal(false)}
              ticket={ticketRequest}
              amount={bookingSummary.total}
              onComplete={handlePayFastComplete}
            />

            {/* Right: Clean Live Summary */}
            <aside className="ticket-sidebar">
              <div className="ticket-sidebar-summary">
                <h3>Order Summary</h3>
                
                <div className="summary-pass-type">
                  <strong>{bookingSummary.ticketType} Pass</strong>
                  <span>{bookingSummary.day}</span>
                </div>

                <div className="summary-rows">
                  <div className="summary-row">
                    <span>Quantity</span>
                    <strong>{bookingSummary.quantity}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Price</span>
                    <strong>PKR {bookingSummary.subtotal.toLocaleString()}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Fee</span>
                    <strong style={{ color: '#10b981' }}>Free (PKR 0)</strong>
                  </div>
                  {bookingSummary.discount > 0 && (
                    <div className="summary-row summary-discount">
                      <span>Discount</span>
                      <strong>- PKR {bookingSummary.discount.toLocaleString()}</strong>
                    </div>
                  )}
                </div>

                <div className="summary-total-row">
                  <span>Grand Total</span>
                  <strong>PKR {bookingSummary.total.toLocaleString()}</strong>
                </div>

                <div className="summary-pass-badge">
                  <span>🎟️ Verified Digital QR Pass</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>

      <style>{`
        .ticket-portal-clean {
          position: relative;
          min-height: 100vh;
          padding: 0 0 3rem;
          color: #ffffff;
          background: #0B0705 !important;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .ticket-portal-clean * { box-sizing: border-box; }

        /* ── CLEAN HERO ── */
        .ticket-clean-hero {
          position: relative;
          min-height: clamp(240px, 32vh, 320px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 24px;
          margin-bottom: 2rem;
          background: radial-gradient(ellipse at 50% 20%, rgba(255, 90, 31, 0.22) 0%, rgba(55, 10, 10, 0.35) 50%, #0B0705 90%) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem 1.5rem;
          text-align: center;
        }

        .hero-glow-blob {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 90, 31, 0.2);
          filter: blur(80px);
          pointer-events: none;
        }

        .ticket-clean-hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #ffbd59;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .hero-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .hero-tags {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .hero-tags span {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        /* ── STEPPER ── */
        .ticket-clean-stepper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          background: rgba(27, 17, 11, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0.6rem;
          margin-bottom: 1.8rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .step-item.is-active {
          background: rgba(255, 90, 31, 0.15);
          border: 1px solid rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          font-size: 0.75rem;
          font-weight: 900;
        }

        .step-item.is-active .step-num {
          background: #ff5a1f;
          color: #ffffff;
        }

        /* ── MAIN GRID ── */
        .ticket-main-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 1.5rem;
          align-items: start;
        }

        .ticket-form-card,
        .ticket-sidebar-summary,
        .ticket-auth-prompt,
        .ticket-sold-out-box {
          background: rgba(27, 17, 11, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: clamp(1.4rem, 2.5vw, 2rem);
          backdrop-filter: blur(16px);
        }

        .ticket-form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 1.5rem;
        }

        .ticket-form-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-badge-pill {
          font-size: 0.72rem;
          font-weight: 800;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }

        /* ── SIDEBAR SUMMARY ── */
        .ticket-sidebar-summary h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .summary-pass-type {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          margin-bottom: 1.2rem;
        }

        .summary-pass-type strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          color: #ffffff;
        }

        .summary-pass-type span {
          font-size: 0.78rem;
          font-weight: 800;
          color: #ffbd59;
        }

        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .summary-row strong {
          color: #ffffff;
        }

        .summary-discount {
          color: #86efac;
        }

        .summary-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1.2rem;
        }

        .summary-total-row span {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 700;
        }

        .summary-total-row strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          color: #ffbd59;
          font-weight: 900;
        }

        .summary-pass-badge {
          text-align: center;
          padding: 0.65rem;
          background: rgba(255, 189, 89, 0.08);
          border: 1px dashed rgba(255, 189, 89, 0.3);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffbd59;
        }

        /* ── AUTH PROMPT ── */
        .ticket-auth-prompt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .ticket-auth-prompt h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .ticket-auth-prompt p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .ticket-primary-button {
          padding: 0.85rem 1.6rem;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          border: none;
          border-radius: 14px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 180ms ease;
        }

        .ticket-primary-button:hover {
          transform: translateY(-2px);
        }

        /* Form & Stepper Inner Styling */
        .ticket-form-stepper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .ticket-form-stepper button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .ticket-form-stepper button.is-active,
        .ticket-form-stepper button.is-complete {
          background: rgba(255, 90, 31, 0.15);
          border-color: rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .ticket-form-stepper span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: grid;
          place-items: center;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .ticket-form-stepper button.is-active span {
          background: #ff5a1f;
        }

        .ticket-login-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }

        .ticket-login-chip span {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          color: #0B0705;
          font-weight: 900;
          font-size: 0.65rem;
          display: grid;
          place-items: center;
        }

        .ticket-panel-heading {
          margin-bottom: 1.2rem;
        }

        .ticket-panel-heading p {
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .ticket-panel-heading h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-input-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .ticket-input-wide { grid-column: 1 / -1; }

        .ticket-input-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .ticket-input-wrap span {
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
        }

        .ticket-input-wrap input,
        .ticket-input-wrap select {
          width: 100%;
          min-height: 48px;
          background: rgba(0, 0, 0, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 12px;
          padding: 0 1rem;
          color: #ffffff !important;
          font-size: 0.92rem;
          outline: none;
          font-family: inherit;
        }

        .ticket-input-wrap input:focus,
        .ticket-input-wrap select:focus {
          border-color: #ff5a1f !important;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.2) !important;
        }

        .ticket-input-wrap em {
          color: #fca5a5;
          font-size: 0.78rem;
          font-style: normal;
        }

        .ticket-option-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .ticket-option-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 180ms ease;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .ticket-option-card:hover {
          border-color: rgba(255, 189, 89, 0.35);
        }

        .ticket-option-card.is-selected {
          border-color: #ff5a1f !important;
          background: rgba(255, 90, 31, 0.15) !important;
        }

        .ticket-option-card span {
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ticket-option-card strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticket-option-card small {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .ticket-review-layout {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ticket-benefit-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .ticket-benefit-list span {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.25);
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .ticket-summary-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .ticket-summary-card h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .ticket-summary-card > div {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .ticket-summary-card > div strong {
          color: #ffffff;
        }

        .ticket-summary-card .ticket-total {
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 1rem;
        }

        .ticket-summary-card .ticket-total strong {
          color: #ffbd59;
          font-weight: 900;
        }

        .ticket-form-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }

        .ticket-secondary-button {
          padding: 0.85rem 1.4rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ticket-main-grid {
            grid-template-columns: 1fr;
          }
          .ticket-clean-stepper {
            grid-template-columns: repeat(2, 1fr);
          }
          .ticket-auth-prompt {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .ticket-input-grid,
          .ticket-option-grid,
          .ticket-form-stepper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}

export default TicketPortalPage
