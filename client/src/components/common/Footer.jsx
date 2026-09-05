import React from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const festivalLinks = [
  { label: 'Headline Artists', href: '/#celebrities', isMain: true },
  { label: 'VIP & Ticket Passes', href: '/tickets', isMain: true },
  { label: 'The Festival Vibe', href: '/#about', isMain: true },
  { label: 'World-Class Facilities', href: '/#facilities', isMain: true },
  { label: 'Milestones & History', href: '/#history', isSecondary: true },
  { label: 'Hotel & Travel Partners', href: '/hotels', isSecondary: true }
]

const supportLinks = [
  { label: 'My Digital Passes', href: '/tickets/my-tickets', isMain: true },
  { label: 'QR Ticket Verification', href: '/verification/OZ-2026-PREVIEW', isMain: true },
  { label: 'Sponsorship Inquiries', href: '/#sponsorship', isMain: true },
  { label: 'Festival Dining Hub', href: '/#restaurants', isSecondary: true },
  { label: 'Privacy Policy', href: '/privacy', isSecondary: true },
  { label: 'Terms & Conditions', href: '/terms', isSecondary: true }
]

function Footer() {
  return (
    <footer className="oz-footer">
      <div className="oz-footer-glow-line" />

      <div className="oz-footer-container">
        {/* Main 4-Column Grid */}
        <div className="oz-footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="oz-footer-col oz-brand-col">
            <Link to="/" className="oz-brand-link">
              <img
                src={assetUrl('/assets/ozilla/logo.png')}
                alt="Ozilla Festival"
                className="oz-brand-logo"
                onError={(e) => { e.currentTarget.src = assetUrl('/assets/logo.jpeg') }}
              />
              <div>
                <strong>OZILLA FESTIVAL</strong>
                <span>PRISM ENTERTAINMENT · 2026</span>
              </div>
            </Link>

            <p className="oz-brand-text">
              Pakistan's premier live music and cultural festival in Lahore. 4 electrified stages, 20+ celebrity performers, night food street, and instant verified mobile passes.
            </p>

            {/* Official Instagram Handle Button */}
            <div className="oz-social-single">
              <a
                href="https://www.instagram.com/ozillafestival"
                target="_blank"
                rel="noopener noreferrer"
                className="oz-insta-badge"
              >
                <svg className="oz-insta-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @ozillafestival</span>
              </a>
            </div>
          </div>

          {/* Col 2: Festival Links */}
          <div className="oz-footer-col">
            <h4>Festival Guide</h4>
            <ul className="oz-footer-nav">
              {festivalLinks.map((item) => (
                <li key={item.label} className={item.isSecondary ? 'oz-footer-secondary' : ''}>
                  <Link to={item.href}>
                    <span className="oz-nav-arrow">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support & Information */}
          <div className="oz-footer-col">
            <h4>Passes & Support</h4>
            <ul className="oz-footer-nav">
              {supportLinks.map((item) => (
                <li key={item.label} className={item.isSecondary ? 'oz-footer-secondary' : ''}>
                  <Link to={item.href}>
                    <span className="oz-nav-arrow">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Event & Venue Info */}
          <div className="oz-footer-col oz-event-col">
            <h4>Festival Venue</h4>
            <div className="oz-event-info">
              <div className="oz-info-box">
                <span className="oz-info-label">FESTIVAL DATE</span>
                <strong>November 1, 2026</strong>
              </div>
              <div className="oz-info-box">
                <span className="oz-info-label">LOCATION</span>
                <strong>Lahore, Pakistan</strong>
              </div>
              <div className="oz-info-box">
                <span className="oz-info-label">OFFICIAL INQUIRIES</span>
                <strong>ozillafestival@gmail.com</strong>
              </div>
              <div className="oz-info-box">
                <span className="oz-info-label">TICKET PASSES</span>
                <strong className="oz-text-glow">Instant Dynamic QR Mobile Passes</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Live Festival Status Bar */}
        <div className="oz-footer-status-bar">
          <div className="oz-live-indicator">
            <span className="oz-live-dot" />
            <span>OZILLA 2026 ADMISSION PORTAL ACTIVE · LAHORE</span>
          </div>
          <Link to="/tickets" className="oz-footer-cta-link">
            Get Your Festival Passes →
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="oz-footer-bottom">
          <p>© 2026 Ozilla Festival & Prism Entertainment. All rights reserved.</p>
          <div className="oz-footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms of Service</Link>
            <span>·</span>
            <Link to="/verification/OZ-2026-PREVIEW">QR Verification</Link>
          </div>
        </div>
      </div>

      <style>{`
        .oz-footer {
          background: #080504 !important;
          color: #ffffff;
          padding: 4.5rem 0 2.2rem;
          position: relative;
          z-index: 10;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
        }

        .oz-footer-glow-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 90, 31, 0.4), #ffbd59, rgba(236, 72, 153, 0.4), transparent);
          box-shadow: 0 0 15px rgba(255, 189, 89, 0.5);
        }

        .oz-footer-container {
          width: min(1240px, calc(100% - 3rem));
          margin: 0 auto;
        }

        .oz-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.8rem;
          padding-bottom: 2.5rem;
        }

        .oz-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.1rem;
        }

        .oz-brand-logo {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255, 189, 89, 0.4);
          box-shadow: 0 0 15px rgba(255, 90, 31, 0.25);
        }

        .oz-brand-link strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-brand-link span {
          display: block;
          font-size: 0.7rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .oz-brand-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.65;
          margin-bottom: 1.4rem;
          max-width: 320px;
        }

        .oz-social-single {
          display: flex;
          align-items: center;
        }

        .oz-insta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 700;
          transition: all 250ms ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .oz-insta-svg {
          width: 18px;
          height: 18px;
          color: #ff5a1f;
          transition: transform 250ms ease, color 250ms ease;
        }

        .oz-insta-badge:hover {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(255, 90, 31, 0.2));
          border-color: rgba(255, 189, 89, 0.6);
          color: #ffbd59;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 90, 31, 0.25);
        }

        .oz-insta-badge:hover .oz-insta-svg {
          transform: scale(1.15) rotate(5deg);
          color: #ffbd59;
        }

        .oz-footer-col h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.2rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-footer-nav a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 180ms ease;
        }

        .oz-nav-arrow {
          font-size: 0.75rem;
          color: #ff5a1f;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 180ms ease;
        }

        .oz-footer-nav a:hover {
          color: #ffbd59;
          transform: translateX(4px);
        }

        .oz-footer-nav a:hover .oz-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .oz-event-info {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .oz-info-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.65rem 0.9rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
        }

        .oz-info-label {
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .oz-info-box strong {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
        }

        .oz-text-glow {
          color: #ff8a3d !important;
        }

        .oz-footer-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.4rem;
          margin: 1.5rem 0 2rem;
          background: rgba(255, 90, 31, 0.08);
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 16px;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-live-indicator {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.05em;
        }

        .oz-live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: livePulse 1.8s ease-in-out infinite;
        }

        @keyframes livePulse {
          0% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.6; transform: scale(0.9); }
        }

        .oz-footer-cta-link {
          font-size: 0.84rem;
          font-weight: 800;
          color: #ffbd59;
          text-decoration: none;
          transition: transform 180ms ease, color 180ms ease;
        }

        .oz-footer-cta-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .oz-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-footer-bottom-links a {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .oz-footer-bottom-links a:hover {
          color: #ffbd59;
        }

        @media (max-width: 992px) {
          .oz-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .oz-footer-nav li.oz-footer-secondary {
            display: none !important;
          }
          .oz-footer-grid {
            grid-template-columns: 1fr;
            gap: 1.6rem;
          }
          .oz-footer-nav {
            gap: 0.55rem;
          }
          .oz-footer-status-bar {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .oz-footer-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
