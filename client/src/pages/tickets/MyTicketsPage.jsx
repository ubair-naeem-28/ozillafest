import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTicket } from '../../hooks/useTicket'
import { useAuth } from '../../hooks/useAuth'
import GeneratedTicketCard from '../../components/tickets/GeneratedTicketCard'

const walletBenefits = ['VIP Entry', 'Celebrity Concert', 'Partner Discounts', 'Food Court Access', 'Festival Merchandise', 'Priority Entry']
const trustBadges = ['Secure Ticket', 'Official Entry Pass', 'QR Verified', 'Instant Validation', 'Protected Account']
const timelineSteps = ['Booking Created', 'Payment Verified', 'Ticket Approved', 'QR Generated', 'Ready To Attend']
const journeyMilestones = ['Festival Member', 'Digital Pass Ready', 'Partner Offers Unlocked', 'VIP Wallet Active']

function getCountdown() {
  const target = new Date('2026-11-01T18:00:00+05:00').getTime()
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60)
  }
}

function MyTicketsPage() {
  const { tickets, loading, fetchMyTickets } = useTicket()
  const { user } = useAuth()
  const [countdown, setCountdown] = useState(getCountdown)

  useEffect(() => {
    fetchMyTickets()
  }, [fetchMyTickets])

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  const displayName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || user?.name || user?.email || 'Festival Member'
  const stats = useMemo(() => {
    const approved = tickets.filter((ticket) => ticket.status === 'approved').length
    const pending = tickets.filter((ticket) => ticket.status !== 'approved').length
    return [
      [tickets.length, 'Total Tickets'],
      [approved, 'QR Ready'],
      [pending, 'In Review'],
      [approved * 250 + tickets.length * 100, 'Reward Points'],
      [approved > 1 ? 'VIP' : approved === 1 ? 'Gold' : 'Member', 'Festival Level']
    ]
  }, [tickets])

  return (
    <main className="my-tickets-premium">
      <section className="my-tickets-hero">
        <div className="my-tickets-orb my-tickets-orb-one" />
        <div className="my-tickets-orb my-tickets-orb-two" />
        <div className="my-tickets-particles" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="my-tickets-hero-content">
          <p>Digital Festival Wallet</p>
          <h1>Your Ozilla Festival Passes</h1>
          <span>Access your tickets, download your QR codes, and get ready for the biggest entertainment festival.</span>
        </div>
      </section>

      <section className="my-tickets-shell">
        <div className="ticket-wallet-dashboard">
          <article className="ticket-wallet-profile">
            <div className="ticket-wallet-avatar">{String(displayName).slice(0, 1).toUpperCase()}</div>
            <div>
              <p>Welcome Back,</p>
              <h2>{displayName}</h2>
              <span>Verified User</span>
              <span>Official Ticket Holder</span>
              <span>Festival Member</span>
              <span>{tickets.length > 2 ? 'VIP Loyalty' : tickets.length > 0 ? 'Gold Loyalty' : 'Member Since 2026'}</span>
            </div>
          </article>

          <article className="ticket-wallet-countdown">
            <p>Festival Starts In</p>
            <div>
              <strong>{countdown.days}</strong><span>Days</span>
              <strong>{countdown.hours}</strong><span>Hours</span>
              <strong>{countdown.minutes}</strong><span>Minutes</span>
            </div>
          </article>
        </div>

        <div className="ticket-wallet-stats">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>

        {loading ? (
          <div className="ticket-wallet-loading">
            <div className="ticket-wallet-spinner" />
            <h2>Loading Your Tickets...</h2>
            <p>Preparing your premium digital festival wallet.</p>
            <div className="ticket-skeleton-grid">
              <span /><span /><span />
            </div>
          </div>
        ) : tickets.length === 0 ? (
          <div className="ticket-wallet-empty">
            <div className="ticket-empty-mark">QR</div>
            <h2>You haven't booked any tickets yet.</h2>
            <p>Reserve your Ozilla Festival pass and unlock your personal digital ticket wallet.</p>
            <Link to="/tickets">Purchase Ticket</Link>
          </div>
        ) : (
          <>
            <div className="ticket-wallet-section-heading">
              <p>Your Official Passes</p>
              <h2>Premium Festival Tickets</h2>
            </div>

            <div className="ticket-wallet-grid">
              {tickets.map((ticket) => (
                <GeneratedTicketCard key={ticket.id} ticket={ticket} actionLabel="Open Details" />
              ))}
            </div>
          </>
        )}

        <div className="ticket-wallet-extras">
          <article className="ticket-wallet-card">
            <p>Ticket Benefits</p>
            <div className="ticket-wallet-benefits">
              {walletBenefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
            </div>
          </article>

          <article className="ticket-wallet-card">
            <p>Booking History</p>
            <div className="ticket-wallet-timeline">
              {timelineSteps.map((step, index) => (
                <span key={step} className={index < 3 ? 'is-active' : ''}>{step}</span>
              ))}
            </div>
          </article>

          <article className="ticket-wallet-card">
            <p>Festival Journey</p>
            <div className="ticket-wallet-journey">
              {journeyMilestones.map((milestone, index) => (
                <span key={milestone} className={index <= Math.min(3, tickets.length) ? 'is-active' : ''}>{milestone}</span>
              ))}
            </div>
          </article>

          <article className="ticket-wallet-card ticket-save-wallet-card">
            <p>Wallet Access</p>
            <h3>Save your pass to your digital wallet.</h3>
            <span>Apple Wallet / Google Wallet style access is prepared as a premium interface.</span>
            <button type="button">Save to Wallet</button>
          </article>

          <article className="ticket-wallet-card">
            <p>Trust & Security</p>
            <div className="ticket-wallet-trust">
              {trustBadges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .my-tickets-premium {
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

        .my-tickets-premium * {
          box-sizing: border-box;
          min-width: 0;
        }

        .my-tickets-premium {
          overflow-x: hidden;
        }

        .my-tickets-premium a:focus-visible,
        .my-tickets-premium button:focus-visible {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 4px;
          box-shadow: 0 0 0 7px rgba(255, 189, 89, 0.16);
        }

        .my-tickets-hero,
        .my-tickets-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1260px);
          margin-inline: auto;
        }

        .my-tickets-hero {
          min-height: clamp(360px, 50vh, 590px);
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

        .my-tickets-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(255, 255, 255, 0.11) 46%, transparent 56%),
            radial-gradient(circle at 54% 18%, rgba(255, 189, 89, 0.2), transparent 18rem);
          animation: walletLightSweep 10s ease-in-out infinite alternate;
        }

        .my-tickets-hero-content {
          position: relative;
          z-index: 1;
          width: min(92%, 920px);
          text-align: center;
          color: #fff;
          animation: walletRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .my-tickets-hero-content p,
        .ticket-wallet-profile p,
        .ticket-wallet-countdown p,
        .ticket-wallet-section-heading p,
        .ticket-wallet-card p {
          margin: 0 0 0.7rem;
          color: #ffbd59;
          font-size: clamp(0.7rem, 1.2vw, 0.84rem);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .my-tickets-hero-content h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.75rem, 7.4vw, 7rem);
          line-height: 0.91;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .my-tickets-hero-content > span {
          display: block;
          width: min(100%, 790px);
          margin: 1.15rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.22rem);
          line-height: 1.6;
        }

        .my-tickets-orb,
        .my-tickets-particles span {
          position: absolute;
          pointer-events: none;
        }

        .my-tickets-orb {
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.66;
          animation: walletFloat 8s ease-in-out infinite;
        }

        .my-tickets-orb-one {
          width: clamp(140px, 22vw, 290px);
          aspect-ratio: 1;
          left: 8%;
          top: 15%;
          background: rgba(255, 189, 89, 0.42);
        }

        .my-tickets-orb-two {
          width: clamp(160px, 24vw, 330px);
          aspect-ratio: 1;
          right: 6%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.38);
          animation-direction: reverse;
        }

        .my-tickets-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .my-tickets-particles span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd36a, #ff7a1a);
          box-shadow: 0 0 22px rgba(255, 189, 89, 0.65);
          animation: walletParticle 7s ease-in-out infinite;
        }
        .my-tickets-particles span:nth-child(1) { left: 12%; top: 22%; }
        .my-tickets-particles span:nth-child(2) { left: 28%; bottom: 18%; animation-delay: 1s; }
        .my-tickets-particles span:nth-child(3) { right: 18%; top: 20%; animation-delay: 1.8s; }
        .my-tickets-particles span:nth-child(4) { right: 28%; bottom: 22%; animation-delay: 2.6s; }
        .my-tickets-particles span:nth-child(5) { left: 52%; top: 12%; animation-delay: 3.4s; }

        .my-tickets-shell {
          display: grid;
          gap: clamp(1rem, 2.4vw, 1.35rem);
          margin-top: clamp(1rem, 2.4vw, 1.8rem);
        }

        .ticket-wallet-dashboard,
        .ticket-wallet-stats,
        .ticket-wallet-extras {
          display: grid;
          gap: 1rem;
        }

        .ticket-wallet-dashboard {
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
        }

        .ticket-wallet-profile,
        .ticket-wallet-countdown,
        .ticket-wallet-stats article,
        .ticket-wallet-card,
        .ticket-wallet-empty,
        .ticket-wallet-loading {
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-wallet-profile {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.4rem);
        }

        .ticket-wallet-avatar {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          border-radius: 24px;
          color: #102525;
          font-size: 1.65rem;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 18px 34px rgba(255, 138, 0, 0.24);
          animation: walletFloat 5.8s ease-in-out infinite;
        }

        .ticket-wallet-profile h2 {
          margin: 0 0 0.7rem;
          color: #102525;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-profile span {
          display: inline-flex;
          width: fit-content;
          margin: 0.25rem 0.25rem 0 0;
          border-radius: 999px;
          padding: 0.4rem 0.6rem;
          color: #0b4f4c;
          font-size: 0.76rem;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
          overflow-wrap: anywhere;
        }

        .ticket-wallet-countdown {
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.4rem);
        }

        .ticket-wallet-countdown div {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
          text-align: center;
        }

        .ticket-wallet-countdown strong {
          display: block;
          color: #102525;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-countdown span {
          color: #55706f;
          font-size: 0.76rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          overflow-wrap: anywhere;
        }

        .ticket-wallet-stats {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .ticket-wallet-stats article {
          border-radius: 22px;
          padding: 1rem;
          min-height: 120px;
          display: grid;
          align-content: center;
          text-align: center;
        }

        .ticket-wallet-stats strong {
          color: #0b4f4c;
          font-size: clamp(1.55rem, 3vw, 2.3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-stats span {
          margin-top: 0.45rem;
          color: #55706f;
          font-size: 0.78rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          overflow-wrap: anywhere;
        }

        .ticket-wallet-section-heading h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.8rem, 3.6vw, 3.1rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.2vw, 1.25rem);
        }

        .ticket-wallet-extras {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ticket-wallet-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-wallet-benefits,
        .ticket-wallet-timeline,
        .ticket-wallet-trust,
        .ticket-wallet-journey {
          display: grid;
          gap: 0.7rem;
        }

        .ticket-wallet-benefits {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ticket-wallet-benefits span,
        .ticket-wallet-trust span,
        .ticket-wallet-timeline span,
        .ticket-wallet-journey span {
          min-height: 48px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.7rem 0.8rem;
          color: #315b59;
          font-weight: 850;
          background: rgba(255, 255, 255, 0.54);
          overflow-wrap: anywhere;
        }

        .ticket-wallet-timeline span {
          position: relative;
          padding-left: 1.5rem;
        }

        .ticket-wallet-timeline span::before {
          content: '';
          position: absolute;
          left: 0.7rem;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.22);
        }

        .ticket-wallet-timeline span.is-active::before {
          background: #ff8a00;
          box-shadow: 0 0 18px rgba(255, 138, 0, 0.42);
        }

        .ticket-wallet-journey span.is-active {
          border-color: rgba(255, 176, 0, 0.32);
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.22), rgba(255, 255, 255, 0.62));
        }

        .ticket-save-wallet-card {
          position: relative;
          overflow: hidden;
        }

        .ticket-save-wallet-card::after {
          content: '';
          position: absolute;
          inset: -45% -20% auto auto;
          width: 48%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(30px);
          pointer-events: none;
        }

        .ticket-save-wallet-card h3,
        .ticket-save-wallet-card span,
        .ticket-save-wallet-card button {
          position: relative;
          z-index: 1;
        }

        .ticket-save-wallet-card h3 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.25rem, 2.4vw, 1.75rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .ticket-save-wallet-card > span {
          display: block;
          margin-top: 0.6rem;
          color: #55706f;
          line-height: 1.6;
        }

        .ticket-save-wallet-card button {
          min-height: 48px;
          border: 0;
          border-radius: 999px;
          margin-top: 1rem;
          padding: 0 1rem;
          color: #101819;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.24);
          cursor: pointer;
        }

        .ticket-wallet-empty,
        .ticket-wallet-loading {
          display: grid;
          justify-items: center;
          text-align: center;
          gap: 0.85rem;
          border-radius: 28px;
          padding: clamp(1.4rem, 4vw, 2.4rem);
        }

        .ticket-empty-mark,
        .ticket-wallet-spinner {
          width: 96px;
          height: 96px;
          display: grid;
          place-items: center;
          border-radius: 28px;
          color: #102525;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 20px 44px rgba(255, 138, 0, 0.24);
        }

        .ticket-wallet-spinner {
          border-radius: 999px;
          background: conic-gradient(from 0deg, #ffbd59, #ff8a00, #0b4f4c, #ffbd59);
          animation: walletSpin 1.1s linear infinite;
        }

        .ticket-wallet-spinner::after {
          content: '';
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: #fffaf2;
        }

        .ticket-wallet-empty h2,
        .ticket-wallet-loading h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.6rem, 3.5vw, 2.5rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-empty p,
        .ticket-wallet-loading p {
          margin: 0;
          color: #55706f;
          max-width: 620px;
          line-height: 1.65;
        }

        .ticket-wallet-empty a {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 1.2rem;
          color: #101819;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.28);
        }

        .ticket-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
          width: min(100%, 760px);
        }

        .ticket-skeleton-grid span {
          min-height: 150px;
          border-radius: 22px;
          background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,189,89,0.18), rgba(255,255,255,0.4));
          background-size: 240% 100%;
          animation: walletSkeleton 1.3s ease-in-out infinite;
        }

        @keyframes walletRise {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes walletLightSweep {
          from { transform: translateX(-4%) scale(1); }
          to { transform: translateX(4%) scale(1.04); }
        }

        @keyframes walletFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes walletParticle {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate3d(10px, -18px, 0) scale(1.35); opacity: 1; }
        }

        @keyframes walletSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes walletSkeleton {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @media (min-width: 1600px) {
          .my-tickets-hero,
          .my-tickets-shell {
            width: min(100%, 1380px);
          }
        }

        @media (max-width: 1280px) {
          .ticket-wallet-grid {
            gap: 1rem;
          }

          .ticket-wallet-extras {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .ticket-wallet-dashboard,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 912px) {
          .my-tickets-hero {
            min-height: clamp(380px, 48vh, 500px);
          }

          .ticket-wallet-dashboard,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-extras {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .my-tickets-premium {
            padding: 0.85rem;
          }

          .my-tickets-hero {
            border-radius: 24px;
          }

          .ticket-wallet-profile {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .ticket-skeleton-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ticket-wallet-extras,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ticket-wallet-benefits {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .my-tickets-premium {
            padding: 0.65rem;
          }

          .my-tickets-hero {
            min-height: 340px;
            border-radius: 20px;
            padding: 1rem 0.75rem;
          }

          .my-tickets-hero-content h1 {
            font-size: clamp(2rem, 12vw, 3.25rem);
            letter-spacing: -0.04em;
          }

          .my-tickets-hero-content > span {
            font-size: 0.98rem;
          }

          .ticket-wallet-stats,
          .ticket-wallet-benefits {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-profile,
          .ticket-wallet-countdown,
          .ticket-wallet-stats article,
          .ticket-wallet-card,
          .ticket-wallet-empty,
          .ticket-wallet-loading {
            border-radius: 18px;
            padding: 0.85rem;
          }

          .ticket-wallet-countdown div {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .ticket-wallet-avatar {
            width: 64px;
            height: 64px;
            border-radius: 20px;
          }

          .ticket-save-wallet-card button,
          .ticket-wallet-empty a {
            width: 100%;
          }
        }

        @media (max-width: 430px) {
          .my-tickets-premium {
            padding: 0.55rem;
          }

          .my-tickets-hero {
            min-height: 330px;
            border-radius: 18px;
          }

          .my-tickets-hero-content {
            width: 94%;
          }

          .my-tickets-hero-content p,
          .ticket-wallet-profile p,
          .ticket-wallet-countdown p,
          .ticket-wallet-section-heading p,
          .ticket-wallet-card p {
            letter-spacing: 0.11em;
          }

          .ticket-wallet-countdown div {
            gap: 0.35rem;
          }

          .ticket-wallet-countdown strong {
            font-size: clamp(1.5rem, 10vw, 2.1rem);
          }
        }

        @media (max-width: 360px) {
          .my-tickets-premium {
            padding: 0.45rem;
          }

          .my-tickets-shell {
            gap: 0.75rem;
          }

          .my-tickets-hero {
            min-height: 310px;
            border-radius: 16px;
            padding: 0.9rem 0.5rem;
          }

          .my-tickets-hero-content h1 {
            font-size: clamp(1.8rem, 11.5vw, 2.65rem);
          }

          .ticket-wallet-profile,
          .ticket-wallet-countdown,
          .ticket-wallet-stats article,
          .ticket-wallet-card,
          .ticket-wallet-empty,
          .ticket-wallet-loading {
            padding: 0.75rem;
          }

          .ticket-wallet-benefits span,
          .ticket-wallet-trust span,
          .ticket-wallet-timeline span,
          .ticket-wallet-journey span {
            min-height: 44px;
            padding: 0.65rem;
            font-size: 0.9rem;
          }
        }

        @media (hover: none) {
          .premium-ticket-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .my-tickets-hero::before,
          .my-tickets-orb,
          .my-tickets-particles span,
          .my-tickets-hero-content,
          .ticket-wallet-avatar,
          .ticket-wallet-spinner,
          .ticket-skeleton-grid span {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default MyTicketsPage
