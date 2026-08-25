import React from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const exploreLinks = [
  ['Home', '/#home'],
  ['Artists', '/#celebrities'],
  ['Future Events', '/#future-events'],
  ['Hotels', '/#hotels'],
  ['Restaurants', '/#restaurants'],
  ['Discounts', '/#discounts'],
  ['Sponsors', '/#sponsorship']
]

const supportLinks = [
  ['Contact', '/#contact'],
  ['Facilities', '/#facilities'],
  ['Privacy Policy', '/privacy'],
  ['Terms & Conditions', '/terms'],
  ['Ticket Portal', '/tickets'],
  ['My Tickets', '/tickets/my-tickets']
]

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/ozillafestival', 'FB'],
  ['Instagram', 'https://www.instagram.com/ozillafestival', 'IG'],
  ['TikTok', 'https://www.tiktok.com', 'TT'],
  ['YouTube', 'https://www.youtube.com', 'YT'],
  ['LinkedIn', 'https://www.linkedin.com', 'IN']
]

function Footer() {
  return (
    <footer className="festival-footer">
      <div className="festival-footer-ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <section className="festival-footer-cta" aria-label="Festival call to action">
        <div>
          <p>Ozilla Festival 2026</p>
          <h2>Ready to experience Ozilla Festival 2026?</h2>
          <span>
            Join thousands of music lovers, creators, food enthusiasts, and artists for an unforgettable experience in Lahore.
          </span>
        </div>
        <div className="festival-footer-cta-actions">
          <Link to="/tickets" className="festival-footer-primary-action">Buy Tickets</Link>
          <Link to="/prismfest/future" className="festival-footer-secondary-action">Explore Events</Link>
        </div>
      </section>

      <div className="festival-footer-shell">
        <div className="festival-footer-grid">
          <section className="festival-footer-brand-panel">
            <Link to="/" className="festival-footer-logo" aria-label="Ozilla Festival home">
              <span>
                <img src={assetUrl('/assets/ozilla/logo.png')} alt="" loading="lazy" />
              </span>
              <strong>Ozilla Festival</strong>
            </Link>
            <p>
              Creating unforgettable experiences through music, art, culture and entertainment.
            </p>
            <div className="festival-footer-socials" aria-label="Social media links">
              {socialLinks.map(([label, href, short]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  {short}
                </a>
              ))}
            </div>
          </section>

          <nav className="festival-footer-links" aria-label="Explore links">
            <h3>Explore</h3>
            {exploreLinks.map(([label, to]) => (
              <Link key={label} to={to}>{label}</Link>
            ))}
          </nav>

          <nav className="festival-footer-links" aria-label="Support links">
            <h3>Support</h3>
            {supportLinks.map(([label, to]) => (
              <Link key={label} to={to}>{label}</Link>
            ))}
          </nav>

          <section className="festival-footer-contact">
            <h3>Contact</h3>
            <p><span>LOC</span>Lahore, Pakistan</p>
            <p><span>EM</span>ozillafestival@gmail.com</p>
            <p><span>PH</span>+92 322 6622221</p>
            <p><span>HR</span>Mon - Sat, 10:00 AM - 8:00 PM</p>
          </section>
        </div>

        <section className="festival-footer-newsletter" aria-label="Newsletter subscription">
          <div>
            <p>Stay Updated</p>
            <h3>Get exclusive event updates, artist announcements and special offers.</h3>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Enter your email address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <div className="festival-footer-bottom">
          <p>&copy; 2026 Ozilla Festival. All Rights Reserved.</p>
          <p>Designed with love for unforgettable festival experiences.</p>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
