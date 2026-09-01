import React from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const festivalLinks = [
  { label: 'Headline Artists', href: '/#celebrities' },
  { label: 'VIP Passes', href: '/tickets' },
  { label: 'Live Stages', href: '/#facilities' },
  { label: 'Hotel Partners', href: '/#hotels' },
  { label: 'Festival Dining', href: '/#restaurants' }
]

const supportLinks = [
  { label: 'My Digital Passes', href: '/tickets/my-tickets' },
  { label: 'Contact Team', href: '/#contact' },
  { label: 'QR Ticket Verification', href: '/verification/OZ-2026-PREVIEW' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
]

const socialIcons = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ozillafestival',
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ozillafestival',
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com',
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
]

function Footer() {
  return (
    <footer className="oz-footer">
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
              Pakistan's premier live music and cultural festival in Lahore. Experience 4 mega stages, headline artists, gourmet food, and official QR passes.
            </p>
            <div className="oz-social-row">
              {socialIcons.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="oz-social-btn"
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Festival Links */}
          <div className="oz-footer-col">
            <h4>Festival</h4>
            <ul className="oz-footer-nav">
              {festivalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support & Information */}
          <div className="oz-footer-col">
            <h4>Support & Info</h4>
            <ul className="oz-footer-nav">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Event & Venue Info */}
          <div className="oz-footer-col oz-event-col">
            <h4>Event Details</h4>
            <div className="oz-event-info">
              <div>
                <span>Date</span>
                <strong>November 1, 2026</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Lahore, Pakistan</strong>
              </div>
              <div>
                <span>Inquiries</span>
                <strong>ozillafestival@gmail.com</strong>
              </div>
              <div>
                <span>Pass Access</span>
                <strong>Instant Verified QR Pass</strong>
              </div>
            </div>
          </div>
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
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 4rem 0 2rem;
          position: relative;
          z-index: 10;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .oz-footer-container {
          width: min(1200px, calc(100% - 2.5rem));
          margin: 0 auto;
        }

        .oz-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .oz-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .oz-brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .oz-brand-link strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-brand-link span {
          display: block;
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .oz-brand-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin-bottom: 1.2rem;
          max-width: 320px;
        }

        .oz-social-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .oz-social-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 180ms ease;
        }

        .oz-social-btn:hover {
          background: #ff5a1f;
          border-color: #ff5a1f;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .oz-footer-col h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.1rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .oz-footer-nav a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 150ms ease;
        }

        .oz-footer-nav a:hover {
          color: #ffbd59;
        }

        .oz-event-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-event-info > div {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .oz-event-info span {
          font-size: 0.72rem;
          color: #ffbd59;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .oz-event-info strong {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }

        .oz-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.8rem;
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
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .oz-footer-bottom-links a:hover {
          color: #ffbd59;
        }

        @media (max-width: 900px) {
          .oz-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 560px) {
          .oz-footer-grid {
            grid-template-columns: 1fr;
            gap: 1.8rem;
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
