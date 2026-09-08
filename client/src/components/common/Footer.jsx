import React from 'react'
import { Link } from 'react-router-dom'

const menuLinks = [
  { label: 'Headline Artists', href: '/#celebrities' },
  { label: 'VIP & Ticket Passes', href: '/tickets' },
  { label: 'The Festival Vibe', href: '/#about' },
  { label: 'World-Class Facilities', href: '/#facilities' },
  { label: 'My Digital Passes', href: '/tickets/my-tickets' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/ozillafestival' },
]

const resourceLinks = [
  { label: 'Sponsorship Inquiries', href: '/#sponsorship' },
  { label: 'QR Ticket Verification', href: '/verification/OZ-2026-PREVIEW' },
  { label: 'Hotel & Travel Partners', href: '/hotels' },
  { label: 'Privacy & Terms', href: '/privacy' },
]

export default function Footer() {
  return (
    <>
      <footer className="kex-footer">
        {/* Background Atmospheric Lighting */}
        <div className="kex-bg-glow" aria-hidden="true" />
        <div className="kex-bg-overlay" aria-hidden="true" />

        <div className="kex-container">
          {/* Top 3-Column Navigation Grid */}
          <div className="kex-nav-grid">
            {/* Column 1: MENU */}
            <div className="kex-col">
              <h3 className="kex-col-title">MENU</h3>
              <div className="kex-col-line" />
              <ul className="kex-col-list">
                {menuLinks.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/#') ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link to={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: SOCIALS */}
            <div className="kex-col">
              <h3 className="kex-col-title">SOCIALS</h3>
              <div className="kex-col-line" />
              <ul className="kex-col-list">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="kex-col">
              <h3 className="kex-col-title">RESOURCES</h3>
              <div className="kex-col-line" />
              <ul className="kex-col-list">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/#') ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link to={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Send a message pill button */}
              <div className="kex-action-wrap">
                <a href="mailto:ozillafestival@gmail.com" className="kex-pill-btn">
                  Send a message
                </a>
              </div>
            </div>
          </div>

          {/* Huge Hero Brand Display Typography */}
          <div className="kex-hero-word-wrap" aria-hidden="true">
            <span className="kex-hero-word">OZILLA FEST</span>
          </div>

          {/* Clean Bottom Copyright Sub-Row */}
          <div className="kex-bottom-row">
            <div className="kex-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span>·</span>
              <Link to="/terms">Terms of Service</Link>
              <span>·</span>
              <Link to="/verification/OZ-2026-PREVIEW">QR Verification</Link>
            </div>
            <p className="kex-bottom-copy">
              © 2026 Ozilla Festival & Prism Entertainment. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{CSS}</style>
    </>
  )
}

const CSS = `
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap");

  .kex-footer {
    position: relative;
    width: 100%;
    background: #080504;
    background:
      radial-gradient(circle at 50% 0%, rgba(255, 90, 31, 0.12), transparent 45%),
      radial-gradient(circle at 85% 20%, rgba(236, 72, 153, 0.08), transparent 40%),
      linear-gradient(180deg, #140b07 0%, #0a0604 40%, #030202 100%);
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    padding-top: clamp(60px, 8vh, 90px);
    padding-bottom: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255, 189, 89, 0.12);
  }

  .kex-bg-glow {
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 180px;
    background: radial-gradient(ellipse at 50% 0%, rgba(255, 189, 89, 0.08), transparent 70%);
    pointer-events: none;
  }

  .kex-bg-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
    pointer-events: none;
  }

  .kex-container {
    position: relative;
    width: min(1280px, calc(100% - 64px));
    margin: 0 auto;
    z-index: 2;
  }

  /* 3-Column Navigation Grid */
  .kex-nav-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(30px, 6vw, 90px);
    padding-bottom: clamp(40px, 6vh, 70px);
  }

  .kex-col-title {
    margin: 0 0 10px;
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(14px, 1.2vw, 17px);
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #ffffff;
    text-transform: uppercase;
  }

  .kex-col-line {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.28);
    margin-bottom: 22px;
  }

  .kex-col-list {
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .kex-col-list a {
    color: rgba(255, 255, 255, 0.72);
    font-size: clamp(13.5px, 1.05vw, 15px);
    font-weight: 400;
    text-decoration: none;
    transition: color 200ms ease, transform 200ms ease;
    display: inline-block;
  }

  .kex-col-list a:hover {
    color: #ffffff;
    transform: translateX(3px);
  }

  /* Pill button in 3rd column */
  .kex-action-wrap {
    margin-top: 24px;
  }

  .kex-pill-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.04);
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 600;
    text-decoration: none;
    transition: all 250ms ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .kex-pill-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ffffff;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 189, 89, 0.2);
  }

  /* Massive Hero Brand Typography Display */
  .kex-hero-word-wrap {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(20px, 3vh, 40px) 0 10px;
    user-select: none;
    pointer-events: none;
  }

  .kex-hero-word {
    display: block;
    font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    font-size: clamp(52px, 15.5vw, 215px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 0.88;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.45) 35%,
      rgba(255, 255, 255, 0.85) 75%,
      #ffffff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.92;
    filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.7));
  }

  /* Bottom Copyright & Legal Links */
  .kex-bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 11.5px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .kex-bottom-links {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .kex-bottom-links a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 180ms ease;
  }

  .kex-bottom-links a:hover {
    color: #ffbd59;
  }

  .kex-bottom-copy {
    margin: 0;
  }

  /* Responsive Breakpoints */
  @media (max-width: 860px) {
    .kex-nav-grid {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 36px;
    }
    .kex-col:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 540px) {
    .kex-footer {
      padding-top: 45px;
    }
    .kex-container {
      width: calc(100% - 32px);
    }
    .kex-nav-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      padding-bottom: 30px;
    }
    .kex-bottom-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .kex-hero-word {
      font-size: 14vw;
      letter-spacing: -0.03em;
    }
  }
`

