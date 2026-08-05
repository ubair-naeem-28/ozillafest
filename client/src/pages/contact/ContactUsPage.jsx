import React, { useState } from 'react'
import { contentService } from '../../services/contentService'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

const contactCards = [
  {
    icon: 'EM',
    label: 'Email',
    value: 'ozillafestival@gmail.com',
    detail: 'For festival support, tickets, partners, and general inquiries.'
  },
  {
    icon: 'PH',
    label: 'Phone',
    value: '+92 322 6622221',
    detail: 'Speak with the Ozilla Festival coordination team.'
  },
  {
    icon: 'LC',
    label: 'Location',
    value: 'Lahore, Punjab, Pakistan',
    detail: 'Official visitor and event support location.'
  },
  {
    icon: 'HR',
    label: 'Office Hours',
    value: '10:00 AM - 7:00 PM',
    detail: 'Support availability during planning and event season.'
  },
  {
    icon: 'IG',
    label: 'Instagram',
    value: '@ozillafestival',
    detail: 'Follow event updates, announcements, and festival moments.'
  },
  {
    icon: 'WB',
    label: 'Website',
    value: 'Ozilla Festival Official',
    detail: 'Explore events, hotels, tickets, restaurants, and partner offers.'
  },
  {
    icon: 'EV',
    label: 'Event',
    value: 'OZILLA FESTIVAL 2026',
    detail: 'Music, entertainment, food, brands, and family experiences.'
  }
]

const supportCards = [
  ['Ticket Support', 'Questions about ticket requests, QR codes, payments, and entry support.'],
  ['Sponsorship Inquiry', 'For brands interested in premium Ozilla Festival partnership packages.'],
  ['Media Inquiry', 'Press, creator coverage, announcements, and festival communication requests.'],
  ['Business Partnership', 'Hotels, restaurants, media teams, creators, and experience partners.'],
  ['General Support', 'Event timings, location guidance, facilities, and guest information.']
]

const trustFeatures = [
  ['Fast Response', 'Clear support channels for visitors, partners, and guests.'],
  ['Professional Team', 'A polished team built around trust, hospitality, and clear communication.'],
  ['Festival Experts', 'A team that understands event operations and visitor needs.'],
  ['Secure Communication', 'Your inquiry is handled through official Ozilla Festival channels.'],
  ['Trusted Organization', 'A premium festival experience managed with care and consistency.'],
  ['Friendly Team', 'Helpful support designed around a premium guest experience.']
]

const socialLinks = [
  ['Facebook', 'FB'],
  ['Instagram', 'IG'],
  ['TikTok', 'TT'],
  ['YouTube', 'YT'],
  ['LinkedIn', 'IN']
]

function ContactUsPage() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete your name, email, subject, and message.' })
      return
    }

    try {
      setSubmitting(true)
      await contentService.submitContactForm({
        ...formData,
        name: formData.fullName
      })
      setFormData(initialForm)
      setStatus({ type: 'success', message: 'Your message has been sent. Our team will contact you soon.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message could not be sent right now. Please contact us at ozillafestival@gmail.com.'
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="contact-premium">
      <section className="contact-hero" aria-label="Contact Ozilla Festival">
        <div className="contact-hero-bg" />
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />
        <div className="contact-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="contact-hero-content">
          <p className="contact-eyebrow">Official Customer Experience Center</p>
          <h1>Let's Connect And Create Something Extraordinary</h1>
          <p>We're here to help you create an unforgettable Ozilla Festival experience.</p>
          <div className="contact-response-badge" aria-label="Average response time">
            <span>Average Response Time</span>
            <strong>Less Than 24 Hours</strong>
          </div>
        </div>
      </section>

      <section className="contact-experience" aria-label="Contact experience">
        <div className="contact-section-heading">
          <p className="contact-eyebrow">Premium Support</p>
          <h2>Reach the right Ozilla Festival team with confidence.</h2>
          <p>
            Whether you need ticket support, partnership guidance, sponsorship information,
            or visitor assistance, our official support channels are ready to help.
          </p>
        </div>

        <div className="contact-main-grid">
          <form id="contact-form" className="contact-form-card" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <p className="contact-eyebrow">Send A Message</p>
              <h3>Tell us how we can help.</h3>
            </div>

            <div className="contact-field-grid">
              <label className="contact-field-shell contact-field-name">
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="contact-field-shell contact-field-email">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </label>
              <label className="contact-field-shell contact-field-phone">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                />
              </label>
              <label className="contact-field-shell contact-field-subject">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ticket, sponsor, partner, or support"
                  required
                />
              </label>
            </div>

            <label className="contact-message-field contact-field-shell">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </label>

            {status.message && (
              <p className={`contact-status contact-status-${status.type}`}>{status.message}</p>
            )}

            <button type="submit" className="contact-action-button" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Your Message'}
            </button>
          </form>

          <aside className="contact-info-panel" aria-label="Contact information">
            {contactCards.map((item, index) => (
              <article key={item.label} className="contact-info-card" style={{ '--delay': `${index * 65}ms` }}>
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="contact-location" aria-label="Ozilla Festival location">
        <div className="contact-section-heading">
          <p className="contact-eyebrow">Festival Location</p>
          <h2>Lahore, Punjab, Pakistan</h2>
          <p>Official Ozilla Festival visitor support and event coordination location.</p>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="Ozilla Festival Lahore Map"
            src="https://www.google.com/maps?q=Lahore%2C%20Punjab%2C%20Pakistan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="contact-support" aria-label="Quick support">
        <div className="contact-section-heading">
          <p className="contact-eyebrow">Quick Support</p>
          <h2>Choose the support path that fits your question.</h2>
        </div>
        <div className="contact-support-grid">
          {supportCards.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <div>{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-trust" aria-label="Why contact Ozilla Festival">
        <div className="contact-section-heading">
          <p className="contact-eyebrow">Why Contact Us</p>
          <h2>Professional support for a premium festival experience.</h2>
        </div>
        <div className="contact-trust-grid">
          {trustFeatures.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-social" aria-label="Social media">
        <div>
          <p className="contact-eyebrow">Follow The Festival</p>
          <h2>Stay close to every announcement, artist update, and festival moment.</h2>
        </div>
        <div className="contact-social-grid">
          {socialLinks.map(([name, icon], index) => (
            <a key={name} href="#top" style={{ '--delay': `${index * 55}ms` }} aria-label={name}>
              <span>{icon}</span>
              {name}
            </a>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <p className="contact-eyebrow">Ozilla Festival Support</p>
        <h2>We'd love to hear from you.</h2>
        <p>
          Whether you have a question, partnership inquiry, sponsorship proposal,
          or simply want to say hello, our team is always here to help.
        </p>
        <a href="#contact-form" className="contact-action-button">Send Your Message</a>
      </section>

      <style>{`
        .contact-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.1vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .contact-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .contact-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 8%, rgba(255, 189, 89, 0.24), transparent 24rem),
            radial-gradient(circle at 88% 12%, rgba(20, 142, 126, 0.18), transparent 28rem),
            radial-gradient(circle at 52% 86%, rgba(255, 77, 46, 0.1), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(232, 236, 224, 0.92));
        }

        .contact-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.34;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .contact-hero {
          position: relative;
          min-height: clamp(410px, 54vw, 650px);
          display: grid;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 48% 35%, rgba(255, 189, 89, 0.3), transparent 19rem),
            linear-gradient(135deg, #041719, #073332 52%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
        }

        .contact-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 24% 28%, rgba(255, 189, 89, 0.28), transparent 17rem),
            radial-gradient(circle at 74% 28%, rgba(20, 142, 126, 0.24), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(7, 51, 50, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: contactHeroGlow 16s ease-in-out infinite alternate;
        }

        .contact-hero::before,
        .contact-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .contact-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 26%, rgba(0, 0, 0, 0.58) 100%);
        }

        .contact-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .contact-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: contactFloat 9s ease-in-out infinite;
        }

        .contact-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.56);
        }

        .contact-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.42);
          animation-delay: 1.2s;
        }

        .contact-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: contactParticle 6s ease-in-out infinite;
        }

        .contact-particles span:nth-child(1) { left: 14%; top: 24%; }
        .contact-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .contact-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .contact-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .contact-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .contact-hero-content {
          width: min(100%, 980px);
          position: relative;
          z-index: 2;
          padding: clamp(1.8rem, 5.6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: contactRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .contact-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          max-width: 13.5ch;
          margin-inline: auto;
          font-size: clamp(2.9rem, 7.6vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.068em;
          text-transform: uppercase;
          text-wrap: balance;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .contact-hero p:not(.contact-eyebrow) {
          max-width: 720px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .contact-response-badge {
          width: min(100%, 340px);
          margin: clamp(1.15rem, 3vw, 1.7rem) auto 0;
          padding: 0.82rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 189, 89, 0.38);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.26), transparent 8rem);
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24), 0 0 34px rgba(255, 189, 89, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(18px);
          animation: contactBadgePulse 4.8s ease-in-out infinite;
        }

        .contact-response-badge span,
        .contact-response-badge strong {
          display: block;
        }

        .contact-response-badge span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-response-badge strong {
          margin-top: 0.14rem;
          color: #ffbd59;
          font-size: clamp(0.98rem, 2vw, 1.16rem);
          line-height: 1.1;
        }

        .contact-experience,
        .contact-location,
        .contact-support,
        .contact-trust,
        .contact-social,
        .contact-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .contact-experience,
        .contact-location,
        .contact-support,
        .contact-trust,
        .contact-social {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .contact-section-heading {
          max-width: 900px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .contact-section-heading h2,
        .contact-social h2,
        .contact-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .contact-section-heading p:not(.contact-eyebrow),
        .contact-cta > p:not(.contact-eyebrow) {
          color: #55706f;
          font-size: clamp(0.98rem, 1.7vw, 1.14rem);
          line-height: 1.7;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(1rem, 3vw, 1.65rem);
          align-items: start;
        }

        .contact-form-card,
        .contact-info-card,
        .contact-support-grid article,
        .contact-trust-grid article,
        .contact-social-grid a {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 15rem),
            radial-gradient(circle at 100% 100%, rgba(20, 142, 126, 0.08), transparent 16rem);
          box-shadow: 0 26px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(18px);
        }

        .contact-form-card::before,
        .contact-info-card::before,
        .contact-support-grid article::before,
        .contact-trust-grid article::before,
        .contact-social-grid a::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.52), transparent 28%, transparent 72%, rgba(255, 189, 89, 0.2));
        }

        .contact-form-card {
          order: 2;
          display: grid;
          gap: clamp(0.95rem, 2vw, 1.15rem);
          padding: clamp(1rem, 3vw, 1.65rem);
          border-radius: 32px;
          border-color: rgba(255, 176, 0, 0.2);
          box-shadow: 0 32px 96px rgba(2, 11, 13, 0.15), 0 0 38px rgba(255, 176, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .contact-form-card > *,
        .contact-info-card > *,
        .contact-support-grid article > *,
        .contact-trust-grid article > *,
        .contact-social-grid a > * {
          position: relative;
          z-index: 1;
        }

        .contact-form-heading h3 {
          color: #101819;
          font-size: clamp(1.7rem, 4vw, 3.2rem);
          line-height: 1;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .contact-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .contact-form-card label {
          display: grid;
          gap: 0.42rem;
        }

        .contact-field-shell {
          position: relative;
        }

        .contact-field-shell::before {
          content: '';
          position: absolute;
          right: 0.9rem;
          top: 2.4rem;
          z-index: 2;
          width: 0.52rem;
          height: 0.52rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff4d2e);
          box-shadow: 0 0 18px rgba(255, 176, 0, 0.55);
          opacity: 0.78;
          transition: transform 200ms ease, opacity 200ms ease;
        }

        .contact-form-card label span {
          width: fit-content;
          position: relative;
          z-index: 2;
          margin-left: 0.6rem;
          margin-bottom: -0.78rem;
          padding: 0.22rem 0.55rem;
          border-radius: 999px;
          background: rgba(255, 250, 242, 0.86);
          color: #0b4f4c;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 6px 18px rgba(2, 11, 13, 0.06);
        }

        .contact-form-card input,
        .contact-form-card textarea {
          width: 100%;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 20px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 250, 242, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 12rem);
          color: #101819;
          outline: none;
          padding: 1.08rem 2rem 0.98rem 1rem;
          font: inherit;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 14px 34px rgba(2, 11, 13, 0.06);
          transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease, background 200ms ease;
        }

        .contact-form-card textarea {
          min-height: 150px;
          resize: vertical;
        }

        .contact-form-card input::placeholder,
        .contact-form-card textarea::placeholder {
          color: rgba(85, 112, 111, 0.76);
        }

        .contact-form-card input:focus,
        .contact-form-card textarea:focus {
          border-color: rgba(255, 176, 0, 0.62);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 0 4px rgba(255, 189, 89, 0.15), 0 18px 44px rgba(255, 176, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.75);
          transform: translateY(-1px);
        }

        .contact-field-shell:focus-within::before {
          opacity: 1;
          transform: scale(1.35);
        }

        .contact-field-shell:focus-within span {
          color: #a86400;
        }

        .contact-status {
          margin: 0;
          padding: 0.82rem 0.95rem;
          border-radius: 16px;
          font-weight: 800;
          line-height: 1.45;
        }

        .contact-status-success {
          color: #0b4f4c;
          background: rgba(20, 142, 126, 0.12);
          border: 1px solid rgba(20, 142, 126, 0.22);
        }

        .contact-status-error {
          color: #8d2b17;
          background: rgba(255, 77, 46, 0.1);
          border: 1px solid rgba(255, 77, 46, 0.18);
        }

        .contact-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          max-width: 100%;
          border: 0;
          cursor: pointer;
          margin-top: 0.25rem;
          padding: 0.88rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .contact-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .contact-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .contact-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .contact-action-button:disabled {
          cursor: not-allowed;
          opacity: 0.75;
          transform: none;
        }

        .contact-info-panel {
          order: 1;
          display: grid;
          gap: 0.82rem;
          align-items: stretch;
        }

        .contact-info-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.85rem;
          align-items: start;
          min-height: 138px;
          padding: clamp(0.85rem, 2vw, 1rem);
          border-radius: 24px;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.32);
          box-shadow: 0 32px 92px rgba(2, 11, 13, 0.16), 0 0 42px rgba(255, 176, 0, 0.13);
        }

        .contact-info-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2), 0 0 24px rgba(255, 189, 89, 0.16);
          animation: contactFloat 5.5s ease-in-out infinite;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .contact-info-card:hover .contact-info-icon {
          transform: translateY(-3px) rotate(-3deg);
          box-shadow: 0 20px 48px rgba(2, 11, 13, 0.25), 0 0 30px rgba(255, 189, 89, 0.28);
        }

        .contact-info-card span {
          display: block;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .contact-info-card strong {
          display: block;
          margin: 0.16rem 0 0.28rem;
          color: #101819;
          font-size: clamp(1rem, 1.5vw, 1.12rem);
          overflow-wrap: anywhere;
          line-height: 1.18;
        }

        .contact-info-card p {
          color: #55706f;
          line-height: 1.5;
          font-size: 0.92rem;
        }

        .contact-map-frame {
          overflow: hidden;
          aspect-ratio: 16 / 7;
          min-height: clamp(320px, 44vw, 520px);
          border-radius: 30px;
          border: 1px solid rgba(255, 176, 0, 0.22);
          background:
            linear-gradient(145deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.82)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          box-shadow: 0 34px 96px rgba(2, 11, 13, 0.18), 0 0 42px rgba(255, 176, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          padding: clamp(0.55rem, 1.2vw, 0.8rem);
          animation: contactRise 680ms ease both;
        }

        .contact-map-frame iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
          border-radius: 24px;
          filter: saturate(0.95) contrast(1.02);
        }

        .contact-support-grid,
        .contact-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.82rem, 1.8vw, 1.1rem);
          align-items: stretch;
        }

        .contact-trust-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .contact-support-grid article,
        .contact-trust-grid article {
          display: grid;
          align-content: start;
          gap: 0.55rem;
          min-height: 178px;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-support-grid article:hover,
        .contact-trust-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 26px 68px rgba(2, 11, 13, 0.14), 0 0 34px rgba(255, 176, 0, 0.1);
        }

        .contact-support-grid div,
        .contact-trust-grid span {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
          box-shadow: 0 14px 32px rgba(2, 11, 13, 0.16), 0 0 22px rgba(255, 189, 89, 0.15);
        }

        .contact-support-grid h3,
        .contact-trust-grid h3 {
          color: #101819;
          font-size: clamp(1.05rem, 1.7vw, 1.28rem);
          line-height: 1.1;
          overflow-wrap: anywhere;
        }

        .contact-support-grid p,
        .contact-trust-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .contact-social {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
          gap: clamp(1rem, 3vw, 1.5rem);
          align-items: center;
        }

        .contact-social-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .contact-social-grid a {
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          min-height: 112px;
          padding: 0.95rem 0.7rem;
          border-radius: 22px;
          color: #101819;
          font-weight: 900;
          text-align: center;
          overflow-wrap: anywhere;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-social-grid a:hover {
          transform: translateY(-5px) rotate(-1deg);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 24px 62px rgba(2, 11, 13, 0.14), 0 0 30px rgba(255, 176, 0, 0.12);
        }

        .contact-social-grid span {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          box-shadow: 0 14px 32px rgba(2, 11, 13, 0.18);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .contact-social-grid a:hover span {
          transform: translateY(-2px) rotate(8deg) scale(1.06);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.22), 0 0 28px rgba(255, 189, 89, 0.24);
        }

        .contact-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(20, 142, 126, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #2f1025);
          color: #fff;
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: contactGlowSweep 8s ease-in-out infinite;
        }

        .contact-cta > * {
          position: relative;
          z-index: 1;
        }

        .contact-cta h2 {
          color: #fff;
        }

        .contact-cta > p:not(.contact-eyebrow) {
          max-width: 690px;
          margin: 0.85rem auto 1.2rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        @keyframes contactRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes contactHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes contactFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes contactParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes contactGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @keyframes contactBadgePulse {
          0%, 100% { transform: translateY(0); box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24), 0 0 34px rgba(255, 189, 89, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.18); }
          50% { transform: translateY(-4px); box-shadow: 0 24px 68px rgba(0, 0, 0, 0.28), 0 0 48px rgba(255, 189, 89, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.22); }
        }

        @media (max-width: 1279px) {
          .contact-support-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .contact-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .contact-social {
            grid-template-columns: 1fr;
          }

          .contact-main-grid {
            grid-template-columns: minmax(240px, 0.85fr) minmax(0, 1.15fr);
            align-items: stretch;
          }

          .contact-field-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-panel {
            grid-template-columns: 1fr;
          }

          .contact-info-card {
            min-height: auto;
          }

          .contact-support-grid,
          .contact-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .contact-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .contact-hero {
            min-height: clamp(400px, 104vw, 540px);
            border-radius: 26px;
          }

          .contact-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .contact-hero h1 {
            max-width: 11.5ch;
            font-size: clamp(2.15rem, 11.5vw, 4.25rem);
            line-height: 0.94;
            letter-spacing: -0.055em;
          }

          .contact-hero p:not(.contact-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .contact-experience,
          .contact-location,
          .contact-support,
          .contact-trust,
          .contact-social,
          .contact-cta {
            border-radius: 24px;
          }

          .contact-experience,
          .contact-location,
          .contact-support,
          .contact-trust,
          .contact-social {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .contact-field-grid,
          .contact-info-panel,
          .contact-main-grid,
          .contact-support-grid,
          .contact-trust-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-card,
          .contact-info-panel {
            order: initial;
          }

          .contact-info-panel {
            order: 1;
          }

          .contact-form-card {
            order: 2;
          }

          .contact-social-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-action-button {
            width: 100%;
          }

          .contact-map-frame {
            aspect-ratio: 4 / 3;
            min-height: 300px;
          }
        }

        @media (max-width: 420px) {
          .contact-hero {
            min-height: 390px;
          }

          .contact-hero h1 {
            font-size: clamp(1.82rem, 10.5vw, 3.2rem);
            letter-spacing: -0.046em;
          }

          .contact-eyebrow {
            font-size: 0.68rem;
            letter-spacing: 0.14em;
          }

          .contact-section-heading h2,
          .contact-social h2,
          .contact-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .contact-info-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .contact-info-icon {
            width: 50px;
            height: 50px;
          }

          .contact-response-badge {
            border-radius: 22px;
          }

          .contact-social-grid {
            gap: 0.62rem;
          }

          .contact-social-grid a {
            min-height: 104px;
            padding: 0.82rem 0.55rem;
          }
        }

        @media (max-width: 360px) {
          .contact-hero-content {
            padding-inline: 0.95rem;
          }

          .contact-hero h1 {
            font-size: clamp(1.62rem, 10vw, 2.75rem);
          }

          .contact-form-card,
          .contact-support-grid article,
          .contact-trust-grid article {
            padding: 0.85rem;
          }

          .contact-form-card input,
          .contact-form-card textarea {
            padding-right: 1.75rem;
          }

          .contact-map-frame {
            min-height: 280px;
            border-radius: 22px;
          }

          .contact-social-grid {
            grid-template-columns: 1fr;
          }

          .contact-map-frame iframe {
            border-radius: 18px;
          }
        }

        @media (hover: none) {
          .contact-info-card:hover,
          .contact-support-grid article:hover,
          .contact-trust-grid article:hover,
          .contact-social-grid a:hover,
          .contact-action-button:hover {
            transform: none;
          }

          .contact-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-hero-bg,
          .contact-orb,
          .contact-particles span,
          .contact-hero-content,
          .contact-response-badge,
          .contact-info-card,
          .contact-info-icon,
          .contact-support-grid article,
          .contact-trust-grid article,
          .contact-social-grid a,
          .contact-cta::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default ContactUsPage
