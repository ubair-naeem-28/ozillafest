import React from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const exploreLinks = [
  ['Headline Artists', '/#celebrities'],
  ['VIP Passes', '/tickets'],
  ['Schedule & Roadmap', '/#future-events'],
  ['Partner Hotels', '/#hotels'],
  ['Festival Dining', '/#restaurants'],
  ['Promo Vouchers', '/#discounts'],
  ['Brand Sponsorships', '/#sponsorship']
]

const supportLinks = [
  ['Contact Festival Team', '/#contact'],
  ['World-Class Facilities', '/#facilities'],
  ['Ticket Verification', '/verification/OZ-2026-PREVIEW'],
  ['Privacy Policy', '/privacy'],
  ['Terms & Conditions', '/terms'],
  ['My Digital Passes', '/tickets/my-tickets']
]

const socialIcons = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ozillafestival',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ozillafestival',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com',
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.28-1.53 3.28-3.36V.02z"/>
      </svg>
    )
  }
]

function Footer() {
  return (
    <footer className="oz-footer">
      <div className="oz-footer-container">
        {/* Top Call to Action Card */}
        <section className="oz-footer-cta-card">
          <div className="oz-footer-cta-text">
            <span className="oz-footer-tag">OZILLA FESTIVAL 2026</span>
            <h2>Ready to experience Pakistan's biggest live music festival?</h2>
            <p>
              Join thousands of festival goers, celebrity artists, food culture hubs, and creators for an unforgettable Lahore celebration.
            </p>
          </div>
          <div className="oz-footer-cta-buttons">
            <Link to="/tickets" className="oz-btn-primary">
              Book Your Pass →
            </Link>
            <a href="/#celebrities" className="oz-btn-outline">
              Explore Lineup
            </a>
          </div>
        </section>

        {/* Main Grid */}
        <div className="oz-footer-main-grid">
          {/* Brand Column */}
          <div className="oz-footer-col oz-footer-brand">
            <Link to="/" className="oz-footer-logo-wrap">
              <img src={assetUrl('/assets/ozilla/logo.png')} alt="Ozilla Festival Logo" className="oz-footer-logo-img" />
              <div>
                <strong>OZILLA FESTIVAL</strong>
                <span>PRISM ENTERTAINMENT</span>
              </div>
            </Link>
            <p className="oz-footer-brand-desc">
              Pakistan's premier live music, arts, food culture, and festival entertainment platform in Lahore.
            </p>
            <div className="oz-footer-social-row">
              {socialIcons.map((soc) => (
                <a key={soc.name} href={soc.href} target="_blank" rel="noopener noreferrer" aria-label={soc.name} className="oz-social-btn">
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="oz-footer-col">
            <h4>Explore Festival</h4>
            <ul className="oz-footer-list">
              {exploreLinks.map(([label, href]) => (
                <li key={label}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="oz-footer-col">
            <h4>Support & Info</h4>
            <ul className="oz-footer-list">
              {supportLinks.map(([label, href]) => (
                <li key={label}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Festival Headquarters & Contact */}
          <div className="oz-footer-col oz-footer-hq">
            <h4>Festival HQ</h4>
            <div className="oz-hq-item">
              <span className="oz-hq-badge">VENUE</span>
              <div>
                <p className="oz-hq-title">Lahore Event District</p>
                <p className="oz-hq-sub">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
            <div className="oz-hq-item">
              <span className="oz-hq-badge">EMAIL</span>
              <div>
                <p className="oz-hq-title">ozillafestival@gmail.com</p>
                <p className="oz-hq-sub">Direct booking & inquiries</p>
              </div>
            </div>
            <div className="oz-hq-item">
              <span className="oz-hq-badge">PHONE</span>
              <div>
                <p className="oz-hq-title">+92 322 6622221</p>
                <p className="oz-hq-sub">10:00 AM – 8:00 PM PKT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="oz-footer-newsletter-box">
          <div>
            <h3>Stay Updated on Drop Announcements</h3>
            <p>Get instant alerts on headline artist additions, VIP pass releases, and early-bird discounts.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="oz-newsletter-form">
            <input type="email" placeholder="Enter your email address..." required aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        {/* Bottom Copyright & Security */}
        <div className="oz-footer-bottom-bar">
          <p>© 2026 Ozilla Festival & Prism Events & Tours. All rights reserved.</p>
          <div className="oz-footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Service</Link>
            <span>•</span>
            <Link to="/verification/OZ-2026-PREVIEW">QR Ticket Validation</Link>
          </div>
        </div>
      </div>

      <style>{`
        .oz-footer {
          background: #080103 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 4.5rem 0 2rem;
          position: relative;
          z-index: 10;
        }

        .oz-footer-container {
          width: min(1280px, calc(100% - 3rem));
          margin: 0 auto;
        }

        /* ── TOP CTA CARD ── */
        .oz-footer-cta-card {
          background: linear-gradient(135deg, rgba(207, 87, 4, 0.3) 0%, rgba(85, 14, 14, 0.45) 50%, rgba(18, 2, 5, 0.9) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 24px;
          padding: 2.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          margin-bottom: 4.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
        }

        .oz-footer-cta-text {
          max-width: 680px;
        }

        .oz-footer-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffbd59;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .oz-footer-cta-text h2 {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.8rem;
          letter-spacing: -0.02em;
        }

        .oz-footer-cta-text p {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
        }

        .oz-footer-cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .oz-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00) !important;
          color: #101819 !important;
          font-size: 0.95rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
          box-shadow: 0 8px 24px rgba(255, 138, 0, 0.35);
          white-space: nowrap;
        }

        .oz-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 138, 0, 0.5);
        }

        .oz-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff !important;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 200ms ease, transform 200ms ease;
          white-space: nowrap;
        }

        .oz-btn-outline:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.16) !important;
        }

        /* ── MAIN GRID ── */
        .oz-footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .oz-footer-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.2rem;
        }

        .oz-footer-logo-img {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .oz-footer-logo-wrap strong {
          display: block;
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-footer-logo-wrap span {
          display: block;
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .oz-footer-brand-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .oz-footer-social-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: grid;
          place-items: center;
          color: #ffffff;
          transition: background 200ms ease, color 200ms ease, transform 200ms ease;
        }

        .oz-social-btn:hover {
          transform: translateY(-3px);
          background: #ffbd59;
          color: #101819;
        }

        .oz-footer-col h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.4rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-footer-list a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.92rem;
          text-decoration: none;
          transition: color 180ms ease, padding-left 180ms ease;
          display: inline-block;
        }

        .oz-footer-list a:hover {
          color: #ffbd59;
          padding-left: 4px;
        }

        /* ── HQ COLUMN ── */
        .oz-footer-hq {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .oz-hq-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.85rem 1rem;
          border-radius: 14px;
        }

        .oz-hq-badge {
          font-size: 0.65rem;
          font-weight: 900;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          letter-spacing: 0.08em;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .oz-hq-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .oz-hq-sub {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 2px;
        }

        /* ── NEWSLETTER ── */
        .oz-footer-newsletter-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.8rem 2.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .oz-footer-newsletter-box h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        .oz-footer-newsletter-box p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .oz-newsletter-form {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          max-width: 440px;
          width: 100%;
          flex-shrink: 0;
        }

        .oz-newsletter-form input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
        }

        .oz-newsletter-form input:focus {
          border-color: #ffbd59;
        }

        .oz-newsletter-form button {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          background: #ffffff;
          color: #101819;
          font-size: 0.9rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: background 180ms ease, transform 180ms ease;
          white-space: nowrap;
        }

        .oz-newsletter-form button:hover {
          background: #ffbd59;
          transform: translateY(-2px);
        }

        /* ── BOTTOM BAR ── */
        .oz-footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-footer-legal-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .oz-footer-legal-links a:hover {
          color: #ffbd59;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .oz-footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
          .oz-footer-cta-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .oz-footer-cta-buttons {
            width: 100%;
            justify-content: center;
          }
          .oz-footer-newsletter-box {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
          .oz-newsletter-form {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .oz-footer {
            padding: 3rem 0 1.5rem;
          }
          .oz-footer-container {
            width: min(100%, calc(100% - 1.5rem));
          }
          .oz-footer-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .oz-footer-cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          .oz-btn-primary, .oz-btn-outline {
            width: 100%;
          }
          .oz-newsletter-form {
            flex-direction: column;
            width: 100%;
          }
          .oz-newsletter-form button {
            width: 100%;
          }
          .oz-footer-bottom-bar {
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
