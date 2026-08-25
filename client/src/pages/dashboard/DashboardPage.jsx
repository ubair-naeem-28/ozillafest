import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assetUrl } from '../../utils/assetUrl.util'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'
import Lightfall from '../../components/common/Lightfall'
import MaskedHeading from '../../components/common/MaskedHeading'
import { contentService } from '../../services/contentService'

const heroImage = assetUrl('/assets/logo.jpeg')

// ── Data ──────────────────────────────────────────────────────────────
const performers = [
  { name: 'TALWINDER',    isHeadliner: true, genre: 'Indie Pop / Punjabi Fusion', image: assetUrl('/assets/ozilla/talwinder.jpg') },
  { name: 'IMRAN KHAN',   genre: 'Punjabi Pop / Urban',  image: assetUrl('/assets/ozilla/Imran-Khan.jpg') },
  { name: 'BOHEMIA',      genre: 'Punjabi Rap',          image: assetUrl('/assets/ozilla/Bohemia.jpg') },
  { name: 'HASSAN RAHEEM',genre: 'Pop / R&B',            image: assetUrl('/assets/ozilla/hassan-raheem.jpg') }
]

const futureEvents = [
  { name: 'Ozilla Festival 2026',  date: 'November 1, 2026', location: 'Lahore, Pakistan', status: 'FEATURED EVENT',  description: 'The flagship Ozilla experience with live music, food culture, partner activations, and premium crowd moments.' },
  { name: 'Celebrity Night',       date: 'Coming Soon',      location: 'Lahore, Pakistan', status: 'LIVE EVENT',      description: 'A high-energy night built around headline artists, stage lights, social moments, and unforgettable performances.' },
  { name: 'Brand Experience Zone', date: 'Coming Soon',      location: 'Lahore, Pakistan', status: 'LIMITED SEATS',   description: 'Immersive sponsor zones, creator content, giveaways, product trials, and interactive festival experiences.' }
]

const pastEvents = [
  { name: 'Ozilla Strategy Module', status: 'Completed', detail: 'Audience journey and activation playbook finalized.' },
  { name: 'Ozilla Scale Module',    status: 'Completed', detail: 'Multi-channel visibility model and sponsor packages benchmarked.' }
]

const historyEvents = [
  { name: 'Ozilla Strategy Module',                     year: '2023', icon: 'M', description: 'Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.',                                                    highlights: ['Brand Positioning', 'Audience Research', 'Partner Onboarding'],            venue: 'Lahore Expo Center',            date: 'December 12, 2023' },
  { name: 'Ozilla Scale Module',                        year: '2024', icon: 'G', description: 'Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.',                                                 highlights: ['Creator Collaborations', 'Sponsor Visibility', 'Live Entertainment Blocks'], venue: 'DHA Sports Club, Lahore',        date: 'November 9, 2024' },
  { name: 'Ozilla Festival Website Brief 2026',         year: '2025', icon: 'A', description: 'Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.',                                          highlights: ['Ticketing Workflow', 'Experience Mapping', 'Marketing Readiness'],           venue: 'Gulberg Event District, Lahore', date: 'October 18, 2025' },
  { name: 'Ozilla Basand Festival',                     year: '2026', icon: 'F', description: 'Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.',                                                    highlights: ['Cultural Performances', 'Live Music', 'Brand Activation Zones'],            venue: 'Lahore, Punjab',                date: 'March 07, 2026' },
  { name: 'Ozilla Festival 2027 Season 2',              year: '2027', icon: 'C', description: 'Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.',                                               highlights: ['Celebrity Performances', 'Expanded Audience Program', 'Premium Experience Zones'], venue: 'Lahore, Punjab', date: 'November 14, 2027' }
]

const contactCards = [
  { icon: 'EM', label: 'Email',        value: 'ozillafestival@gmail.com',     detail: 'For festival support, tickets, partners, and general inquiries.' },
  { icon: 'PH', label: 'Phone',        value: '+92 322 6622221',              detail: 'Speak with the Ozilla Festival coordination team.' },
  { icon: 'LC', label: 'Location',     value: 'Lahore, Punjab, Pakistan',     detail: 'Official visitor and event support location.' },
  { icon: 'HR', label: 'Office Hours', value: '10:00 AM - 7:00 PM',          detail: 'Support availability during planning and event season.' },
  { icon: 'IG', label: 'Instagram',    value: '@ozillafestival',             detail: 'Follow event updates, announcements, and festival moments.' },
  { icon: 'EV', label: 'Event',        value: 'OZILLA FESTIVAL 2026',        detail: 'Music, entertainment, food, brands, and family experiences.' }
]

const sponsorshipTiers = [
  { tier: 'Title Sponsor',    price: 'Premium',  perks: ['Exclusive brand naming rights', 'Stage backdrop placement', 'VIP zone branding', '30-second ad slot', 'Social media features'] },
  { tier: 'Gold Sponsor',     price: 'High',     perks: ['Brand activation zone', 'Banner placements', 'Digital features', 'Influencer mentions', 'On-ground presence'] },
  { tier: 'Silver Sponsor',   price: 'Mid',      perks: ['Logo on all materials', 'Social shoutout', 'Booth at festival', 'Feature in email campaigns'] },
  { tier: 'Media Partner',    price: 'Custom',   perks: ['Media coverage rights', 'Press passes', 'Collaborative content', 'Announcement placement'] }
]

const facilitiesList = [
  { icon: '🎤', title: 'Main Stage',        desc: 'World-class production stage with concert-grade lighting, sound, and crowd management.' },
  { icon: '🍔', title: 'Food Street',       desc: 'Curated food zones featuring local and fusion cuisine, beverages, and desserts.' },
  { icon: '🏥', title: 'Medical Support',   desc: 'On-site first aid, emergency response, and medical support for attendees.' },
  { icon: '🚗', title: 'Parking Zones',     desc: 'Secure and managed parking areas for festival attendees, VIPs, and partners.' },
  { icon: '📸', title: 'Photo Moments',     desc: 'Premium photo installation zones, creator-friendly setups, and branded backdrops.' },
  { icon: '♿', title: 'Accessibility',     desc: 'Accessible pathways, facilities, and support for all visitors.' },
  { icon: '🛡️', title: 'Security',          desc: 'Professional security deployment ensuring a safe event for all attendees.' },
  { icon: '📡', title: 'WiFi Zones',        desc: 'High-speed connectivity zones across the festival grounds.' }
]

const discountItems = [
  { brand: 'Street Grill Co.',  category: 'Restaurant', discount: '15% OFF', code: 'OZILLA15', desc: 'Festival combo meal with priority queue access.' },
  { brand: 'Spice District',    category: 'Restaurant', discount: '20% OFF', code: 'SPICE20',  desc: 'Family platter offer for OZilla audience.' },
  { brand: 'Urban Brew',        category: 'Cafe',       discount: 'Buy 1 Get 1', code: 'BREWBOGO', desc: 'Coffee and dessert pair for creators and attendees.' },
  { brand: 'Partner Hotels',    category: 'Hotel',      discount: '10% OFF', code: 'OZHOTEL10', desc: 'Exclusive discount on festival weekend stays.' }
]

// ── Section Wrapper ───────────────────────────────────────────────────
function Section({ id, title, eyebrow, children, centered = false }) {
  return (
    <motion.section
      id={id}
      className="sp-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`sp-section-inner ${centered ? 'sp-centered' : ''}`}>
        {eyebrow && <p className="sp-eyebrow">{eyebrow}</p>}
        {title && <h2 className="sp-section-title">{title}</h2>}
        {children}
      </div>
    </motion.section>
  )
}

// ── Countdown Hook ────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const [time, setTime] = useState(() => {
    const diff = Math.max(new Date(targetDate) - Date.now(), 0)
    return { days: Math.floor(diff/86400000), hours: Math.floor(diff/3600000%24), minutes: Math.floor(diff/60000%60), seconds: Math.floor(diff/1000%60) }
  })
  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(new Date(targetDate) - Date.now(), 0)
      setTime({ days: Math.floor(diff/86400000), hours: Math.floor(diff/3600000%24), minutes: Math.floor(diff/60000%60), seconds: Math.floor(diff/1000%60) })
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])
  return time
}

// ── Contact Form ──────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await contentService.submitContactForm(form)
      setStatus('sent')
      setForm({ fullName: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sp-contact-form">
      <div className="sp-form-row">
        <div className="sp-field"><label>Full Name</label><input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" required /></div>
        <div className="sp-field"><label>Email</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required /></div>
      </div>
      <div className="sp-form-row">
        <div className="sp-field"><label>Phone</label><input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 xxx xxxxxxx" /></div>
        <div className="sp-field"><label>Subject</label><input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required /></div>
      </div>
      <div className="sp-field"><label>Message</label><textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Your message..." required /></div>
      {status === 'sent'   && <p className="sp-form-success">✓ Message sent! We will get back to you soon.</p>}
      {status === 'error'  && <p className="sp-form-error">Something went wrong. Please try again.</p>}
      <button type="submit" className="sp-btn-white" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

// ── Main Dashboard Page ───────────────────────────────────────────────
function DashboardPage() {
  const location = useLocation()
  const countdown = useCountdown('2026-11-01T18:00:00+05:00')

  // Smooth scroll handler when hash changes or page loads with hash
  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <main className="sp-main">
      {/* ══ HERO SECTION (React Bits Lightfall animation as in 1.mp4) ══ */}
      <section id="home" className="sp-hero" aria-label="Ozilla Festival">
        {/* Lightfall Canvas Shader */}
        <div className="sp-lightfall-wrap">
          <Lightfall
            colors={['#550e0e', '#ba5916', '#EC4899', '#cf5704']}
            backgroundColor="#cf5704"
            speed={0.8}
            streakCount={5}
            streakWidth={1.1}
            streakLength={1}
            density={0.7}
            twinkle={1}
            glow={1}
            backgroundGlow={0.5}
            zoom={1}
            opacity={1}
            mouseInteraction={true}
            mouseStrength={0.6}
            mouseRadius={0.5}
          />
        </div>

        {/* Hero Central Content */}
        <div className="sp-hero-content">
          {/* Main Title — MaskedHeading media-clip animation */}
          <MaskedHeading
            tag="h1"
            text="OZILLA FEST"
            mediaType="image"
            src="/assets/ozilla/cover.png"
            fillScale={1.3}
            parallax={28}
            drift={16}
            brightness={1.05}
            saturation={1.2}
            grayscale={false}
            reveal="rise"
            trigger="view"
            duration={1.2}
            stagger={0.1}
            align="center"
            weight={900}
            tracking={-0.03}
            lineHeight={1.0}
            textScale={0.13}
            className="sp-hero-masked"
          />

          {/* Action Buttons matching video */}
          <div className="sp-hero-actions">
            <a className="sp-btn-white" href="#events">
              Get started
            </a>
            <Link className="sp-btn-glass" to="/tickets">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════════════ */}
      <Section id="about" eyebrow="About Us" title="Who We Are">
        <div className="sp-about-grid">
          <div className="sp-about-text">
            <p className="sp-lead">{ozillaProfessionalContent.about}</p>
            <p>The platform is designed around discovery, experiences, hospitality partnerships, discount access, and long-term brand collaborations.</p>
            <div className="sp-journey-steps">
              {ozillaProfessionalContent.journey.map((step, idx) => (
                <div key={step} className="sp-journey-step">
                  <span className="sp-step-num">{idx + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sp-about-features">
            <h3>Festival Experience</h3>
            <div className="sp-tag-cloud">
              {ozillaProfessionalContent.festivalExperience.map(f => <span key={f} className="sp-tag">{f}</span>)}
            </div>
            <h3 style={{ marginTop: '1.8rem' }}>Partner Benefits</h3>
            <div className="sp-tag-cloud">
              {ozillaProfessionalContent.partnerBenefits.map(b => <span key={b} className="sp-tag sp-tag-accent">{b}</span>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ══ EVENTS ════════════════════════════════════════════════════ */}
      <Section id="events" eyebrow="Past Events" title="Completed Modules">
        <div className="sp-events-grid">
          {pastEvents.map(event => (
            <motion.div key={event.name} className="sp-glass-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="sp-card-header">
                <h3>{event.name}</h3>
                <span className="sp-pill-badge">{event.status}</span>
              </div>
              <p className="sp-card-desc">{event.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ CELEBRITIES ═══════════════════════════════════════════════ */}
      <Section id="celebrities" eyebrow="Celebrity Singers" title="Live on the Ozilla Stage" centered>
        <p className="sp-section-subtitle">Four high-impact performers, one premium Lahore festival atmosphere, and a stage built for unforgettable crowd moments.</p>
        <div className="sp-celebrity-grid">
          {performers.map((p, idx) => (
            <motion.article key={p.name} className={`sp-celeb-card ${p.isHeadliner ? 'sp-celeb-headliner' : ''}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}>
              <div className="sp-celeb-frame">
                <img src={p.image} alt={p.name} loading="lazy" onError={e => { e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg') }} />
                <div className="sp-celeb-overlay">
                  {p.isHeadliner && <span className="sp-headliner-badge">MAIN ARTIST</span>}
                  <h3>{p.name}</h3>
                  <p>{p.genre}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Countdown */}
        <div className="sp-countdown">
          <p className="sp-eyebrow" style={{ marginBottom: '1.2rem' }}>Festival Starts In</p>
          <div className="sp-countdown-grid">
            {[['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]].map(([label, val]) => (
              <div key={label} className="sp-countdown-card">
                <strong>{String(val).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══ FUTURE EVENTS ═════════════════════════════════════════════ */}
      <Section id="future-events" eyebrow="What's Coming" title="Upcoming Experiences">
        <div className="sp-future-grid">
          {futureEvents.map((ev, idx) => (
            <motion.div key={ev.name} className="sp-glass-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <span className="sp-pill-badge">{ev.status}</span>
              <h3 style={{ marginTop: '0.6rem' }}>{ev.name}</h3>
              <p className="sp-meta-text">{ev.date} · {ev.location}</p>
              <p className="sp-card-desc" style={{ flex: 1 }}>{ev.description}</p>
              <Link to="/tickets" className="sp-accent-link">Get Tickets →</Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ HISTORY ═══════════════════════════════════════════════════ */}
      <Section id="history" eyebrow="Our Journey" title="Festival History">
        <div className="sp-timeline">
          {historyEvents.map((ev, idx) => (
            <motion.div key={ev.name} className="sp-timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }}>
              <div className="sp-timeline-icon">{ev.icon}</div>
              <div className="sp-glass-card sp-timeline-content">
                <div className="sp-meta-text"><span className="sp-year-highlight">{ev.year}</span> · {ev.date}</div>
                <h3>{ev.name}</h3>
                <p className="sp-card-desc">{ev.description}</p>
                <div className="sp-tag-cloud">
                  {ev.highlights.map(h => <span key={h} className="sp-tag">{h}</span>)}
                </div>
                <p className="sp-venue-text">📍 {ev.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ HOTELS ════════════════════════════════════════════════════ */}
      <Section id="hotels" eyebrow="Partner Hotels" title="Where to Stay in Lahore">
        <div className="sp-hotels-grid">
          {ozillaProfessionalContent.hotels.map((hotel, idx) => (
            <motion.div key={hotel.name} className={`sp-glass-card sp-hotel-card ${idx === 0 ? 'sp-featured-border' : ''}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}>
              {hotel.showImage && (
                <div className="sp-hotel-img-wrap">
                  <img src={hotel.image} alt={hotel.name} loading="lazy"
                    onError={e => { e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg') }} />
                </div>
              )}
              <div className="sp-hotel-body">
                <div className="sp-card-header">
                  <h3>{hotel.name}</h3>
                  {hotel.rating && <span className="sp-rating-tag">⭐ {hotel.rating}</span>}
                </div>
                <p className="sp-meta-text">📍 {hotel.location}</p>
                <p className="sp-card-desc">{hotel.description}</p>
                <div className="sp-tag-cloud">
                  {hotel.facilities?.map(f => <span key={f} className="sp-tag">{f}</span>)}
                </div>
                <p className="sp-contact-text">{hotel.contact}</p>
                {hotel.website && (
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="sp-accent-link">Book Now →</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ RESTAURANTS ═══════════════════════════════════════════════ */}
      <Section id="restaurants" eyebrow="Partner Restaurants" title="Food Culture at Ozilla">
        <div className="sp-restaurants-grid">
          {ozillaProfessionalContent.restaurants.map((r, idx) => (
            <motion.div key={r.name} className="sp-glass-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <div className="sp-card-header">
                <h3>{r.name}</h3>
                <span className="sp-discount-pill">{r.discount}</span>
              </div>
              <p className="sp-meta-text">{r.cuisine} · {r.location}</p>
              <p className="sp-card-desc">{r.offer}</p>
              <div className="sp-code-box">
                <span>Promo Code:</span>
                <code>{r.code}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ DISCOUNTS ═════════════════════════════════════════════════ */}
      <Section id="discounts" eyebrow="Exclusive Offers" title="Festival Discounts">
        <div className="sp-discounts-grid">
          {discountItems.map((d, idx) => (
            <motion.div key={d.brand} className="sp-glass-card"
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}>
              <span className="sp-eyebrow" style={{ fontSize: '0.7rem' }}>{d.category}</span>
              <h3 style={{ marginTop: '0.2rem' }}>{d.brand}</h3>
              <p className="sp-card-desc" style={{ margin: '0.5rem 0 1rem' }}>{d.desc}</p>
              <div className="sp-discount-footer">
                <span className="sp-big-discount">{d.discount}</span>
                <code className="sp-code-pill">{d.code}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ FACILITIES ════════════════════════════════════════════════ */}
      <Section id="facilities" eyebrow="At the Festival" title="World-Class Facilities">
        <div className="sp-facilities-grid">
          {facilitiesList.map((f, idx) => (
            <motion.div key={f.title} className="sp-glass-card sp-facility-card"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}>
              <span className="sp-facility-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p className="sp-card-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ SPONSORSHIP ═══════════════════════════════════════════════ */}
      <Section id="sponsorship" eyebrow="Partner With Us" title="Sponsorship Packages" centered>
        <p className="sp-section-subtitle">Be part of Lahore's biggest festival. Get brand exposure, audience access, and premium activation opportunities.</p>
        <div className="sp-sponsorship-grid">
          {sponsorshipTiers.map((tier, idx) => (
            <motion.div key={tier.tier} className={`sp-glass-card sp-sponsor-card ${idx === 0 ? 'sp-featured-border' : ''}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <div className="sp-card-header">
                <h3>{tier.tier}</h3>
                <span className="sp-pill-badge">{tier.price}</span>
              </div>
              <ul className="sp-sponsor-perks">
                {tier.perks.map(perk => <li key={perk}><span className="sp-check">✓</span>{perk}</li>)}
              </ul>
              <a href="#contact" className="sp-btn-glass" style={{ textAlign: 'center', marginTop: '1rem' }}>Enquire Now</a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══ CONTACT ═══════════════════════════════════════════════════ */}
      <Section id="contact" eyebrow="Get In Touch" title="Contact Us">
        <div className="sp-contact-layout">
          <div className="sp-contact-cards">
            {contactCards.map(card => (
              <div key={card.label} className="sp-glass-card sp-contact-card">
                <span className="sp-contact-icon">{card.icon}</span>
                <div>
                  <strong className="sp-contact-label">{card.label}</strong>
                  <p className="sp-contact-val">{card.value}</p>
                  <small className="sp-contact-detail">{card.detail}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-glass-card sp-contact-form-wrap">
            <h3 style={{ marginBottom: '1.2rem', fontSize: '1.4rem' }}>Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* ══ STYLES - Theme matching video 1.mp4 ═══════════════════════ */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-main {
          --bg-dark:       #550e0e;
          --bg-card:       rgba(85, 14, 14, 0.4);
          --border-pink:   rgba(236, 72, 153, 0.35);
          --pink-accent:   #EC4899;
          --orange-accent: #ba5916;
          --crimson-dark:  #550e0e;
          --bg-orange:     #cf5704;
          --text-white:    #ffffff;
          --text-muted:    rgba(255, 255, 255, 0.85);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: var(--text-white);
          background: linear-gradient(180deg, #cf5704 0%, #ba5916 25%, #550e0e 65%, #2a0407 100%);
          scroll-behavior: smooth;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO SECTION ── */
        .sp-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
          background: #cf5704;
        }

        .sp-lightfall-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .sp-hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
          max-width: 900px;
          width: 100%;
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          outline: none !important;
          backdrop-filter: none !important;
          filter: none !important;
        }

        .sp-hero-title {
          font-size: clamp(3.5rem, 9.5vw, 7.5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 2.2rem;
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          outline: none !important;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          filter: none !important;
        }

        /* MaskedHeading hero title */
        .sp-hero-masked {
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 0.9em;
          margin-bottom: 2.2rem;
          line-height: 1 !important;
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          outline: none !important;
          filter: none !important;
        }


        .sp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Video Action Buttons */
        .sp-btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          background: #ffffff;
          color: #080111;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.25);
          border: none;
          cursor: pointer;
        }

        .sp-btn-white:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 40px rgba(255, 255, 255, 0.4);
        }

        .sp-btn-glass {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(14px);
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }

        .sp-btn-glass:hover {
          transform: translateY(-3px);
          background: rgba(236, 72, 153, 0.2);
          border-color: rgba(236, 72, 153, 0.5);
        }

        /* ── SECTIONS ── */
        .sp-section {
          padding: clamp(4rem, 8vw, 7rem) 0;
          scroll-margin-top: 75px;
        }

        .sp-section-inner {
          width: min(1200px, calc(100% - 2.5rem));
          margin: 0 auto;
        }

        .sp-centered { text-align: center; }

        .sp-eyebrow {
          display: block;
          color: var(--pink-accent);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .sp-section-title {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 2rem;
        }

        .sp-section-subtitle {
          max-width: 680px;
          margin: 0 auto 2.5rem;
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* ── DARK GLASS CARD ── */
        .sp-glass-card {
          background: var(--bg-card);
          border: 1px solid var(--border-pink);
          border-radius: 20px;
          padding: 1.6rem;
          backdrop-filter: blur(14px);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }

        .sp-glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(236, 72, 153, 0.45);
          box-shadow: 0 14px 40px rgba(236, 72, 153, 0.18);
        }

        .sp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.6rem;
        }

        .sp-card-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }

        .sp-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .sp-pill-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: rgba(236, 72, 153, 0.15);
          border: 1px solid rgba(236, 72, 153, 0.3);
          color: var(--pink-accent);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .sp-meta-text {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .sp-accent-link {
          color: var(--pink-accent);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 200ms ease;
          display: inline-block;
        }

        .sp-accent-link:hover {
          color: #ff7b00;
        }

        /* ── ABOUT ── */
        .sp-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .sp-lead { font-size: 1.15rem; line-height: 1.7; color: #ffffff; margin-bottom: 1rem; }
        .sp-about-text p { color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem; }
        .sp-journey-steps { display: flex; flex-direction: column; gap: 0.75rem; }
        .sp-journey-step { display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1.1rem; background: rgba(236, 72, 153, 0.08); border-radius: 14px; border-left: 3px solid var(--pink-accent); }
        .sp-step-num { width: 28px; height: 28px; background: linear-gradient(135deg, var(--pink-accent), var(--amber-accent)); border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 0.8rem; color: #fff; flex-shrink: 0; }
        .sp-about-features h3 { font-size: 1.05rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pink-accent); margin-bottom: 0.8rem; }
        .sp-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .sp-tag { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.85); font-size: 0.82rem; font-weight: 600; }
        .sp-tag-accent { background: rgba(236, 72, 153, 0.12); border-color: rgba(236, 72, 153, 0.3); color: var(--pink-accent); }

        /* ── EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }

        /* ── CELEBRITIES ── */
        .sp-celebrity-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; margin-bottom: 4rem; }
        .sp-celeb-card { border-radius: 22px; overflow: hidden; cursor: default; }
        .sp-celeb-frame { position: relative; aspect-ratio: 4/5; }
        .sp-celeb-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 400ms ease; }
        .sp-celeb-card:hover .sp-celeb-frame img { transform: scale(1.06); }
        .sp-celeb-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.25rem; background: linear-gradient(180deg, transparent 30%, rgba(8, 1, 17, 0.95)); }
        .sp-celeb-overlay h3 { color: #fff; font-size: 1.3rem; font-weight: 800; text-transform: uppercase; }
        .sp-celeb-overlay p { color: rgba(255, 255, 255, 0.7); font-size: 0.8rem; margin-top: 0.2rem; }
        .sp-headliner-badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 999px; background: linear-gradient(135deg, var(--pink-accent), var(--amber-accent)); color: #fff; font-size: 0.68rem; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 0.5rem; width: fit-content; }
        .sp-celeb-headliner { box-shadow: 0 0 35px rgba(236, 72, 153, 0.3); border: 1px solid rgba(236, 72, 153, 0.4); }

        /* ── COUNTDOWN ── */
        .sp-countdown { text-align: center; padding: 2rem 0; }
        .sp-countdown-grid { display: inline-grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .sp-countdown-card { background: var(--bg-card); border: 1px solid var(--border-pink); border-radius: 18px; padding: 1.4rem 2rem; text-align: center; backdrop-filter: blur(12px); }
        .sp-countdown-card strong { display: block; font-size: clamp(2.2rem, 4.5vw, 3.8rem); font-weight: 900; color: var(--pink-accent); line-height: 1; }
        .sp-countdown-card span { font-size: 0.76rem; font-weight: 700; color: rgba(255, 255, 255, 0.55); text-transform: uppercase; letter-spacing: 0.12em; }

        /* ── FUTURE EVENTS ── */
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

        /* ── HISTORY / TIMELINE ── */
        .sp-timeline { position: relative; display: flex; flex-direction: column; gap: 1.8rem; }
        .sp-timeline::before { content: ''; position: absolute; left: 2.1rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, transparent, var(--pink-accent), transparent); }
        .sp-timeline-item { display: flex; gap: 1.5rem; align-items: flex-start; }
        .sp-timeline-icon { width: 44px; height: 44px; flex-shrink: 0; background: linear-gradient(135deg, var(--pink-accent), var(--purple-glow)); border-radius: 50%; display: grid; place-items: center; font-size: 1.1rem; font-weight: 900; color: #fff; z-index: 1; box-shadow: 0 0 20px rgba(236, 72, 153, 0.4); }
        .sp-timeline-content { flex: 1; }
        .sp-year-highlight { font-size: 1rem; color: var(--pink-accent); font-weight: 800; }
        .sp-venue-text { font-size: 0.82rem; color: var(--pink-accent); font-weight: 600; margin-top: 0.6rem; }

        /* ── HOTELS ── */
        .sp-hotels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
        .sp-hotel-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; }
        .sp-featured-border { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 30px rgba(236, 72, 153, 0.2); }
        .sp-hotel-img-wrap { height: 180px; overflow: hidden; }
        .sp-hotel-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
        .sp-hotel-card:hover .sp-hotel-img-wrap img { transform: scale(1.05); }
        .sp-hotel-body { padding: 1.4rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
        .sp-rating-tag { font-size: 0.78rem; font-weight: 700; color: var(--amber-accent); white-space: nowrap; }
        .sp-contact-text { font-size: 0.8rem; color: rgba(255, 255, 255, 0.5); }

        /* ── RESTAURANTS ── */
        .sp-restaurants-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .sp-discount-pill { padding: 0.3rem 0.85rem; border-radius: 999px; background: linear-gradient(135deg, var(--pink-accent), var(--amber-accent)); color: #fff; font-size: 0.72rem; font-weight: 800; }
        .sp-code-box { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 10px; margin-top: 0.4rem; }
        .sp-code-box span { font-size: 0.82rem; color: var(--text-muted); }
        .sp-code-box code { font-family: monospace; background: rgba(236, 72, 153, 0.18); padding: 0.25rem 0.65rem; border-radius: 6px; color: var(--pink-accent); font-weight: 800; }

        /* ── DISCOUNTS ── */
        .sp-discounts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .sp-discount-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; }
        .sp-big-discount { font-size: 1.3rem; font-weight: 900; color: var(--pink-accent); }
        .sp-code-pill { font-family: monospace; background: rgba(236, 72, 153, 0.18); padding: 0.3rem 0.7rem; border-radius: 8px; color: var(--pink-accent); font-weight: 800; font-size: 0.82rem; }

        /* ── FACILITIES ── */
        .sp-facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .sp-facility-card { text-align: center; }
        .sp-facility-icon { font-size: 2.2rem; display: block; margin-bottom: 0.75rem; }

        /* ── SPONSORSHIP ── */
        .sp-sponsorship-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .sp-sponsor-card { display: flex; flex-direction: column; gap: 1rem; }
        .sp-sponsor-perks { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .sp-sponsor-perks li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--text-muted); }
        .sp-check { color: var(--pink-accent); font-weight: 900; }

        /* ── CONTACT ── */
        .sp-contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        .sp-contact-cards { display: flex; flex-direction: column; gap: 0.9rem; }
        .sp-contact-card { display: flex; gap: 1rem; align-items: flex-start; }
        .sp-contact-icon { width: 42px; height: 42px; background: linear-gradient(135deg, var(--pink-accent), var(--purple-glow)); border-radius: 10px; display: grid; place-items: center; font-size: 0.72rem; font-weight: 800; color: #fff; flex-shrink: 0; }
        .sp-contact-label { font-size: 0.85rem; font-weight: 800; color: var(--pink-accent); display: block; margin-bottom: 0.15rem; }
        .sp-contact-val { font-size: 0.95rem; font-weight: 700; color: #ffffff; margin-bottom: 0.15rem; }
        .sp-contact-detail { font-size: 0.8rem; color: var(--text-muted); }

        /* ── CONTACT FORM ── */
        .sp-contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .sp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .sp-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .sp-field label { font-size: 0.8rem; font-weight: 700; color: var(--pink-accent); text-transform: uppercase; letter-spacing: 0.06em; }
        .sp-field input, .sp-field textarea { padding: 0.85rem 1rem; border-radius: 12px; border: 1px solid rgba(236, 72, 153, 0.25); background: rgba(255, 255, 255, 0.05); color: #ffffff; font-size: 0.95rem; outline: none; transition: border-color 200ms; font-family: inherit; resize: vertical; }
        .sp-field input:focus, .sp-field textarea:focus { border-color: var(--pink-accent); background: rgba(236, 72, 153, 0.1); }
        .sp-form-success { color: #4ade80; font-size: 0.9rem; font-weight: 700; }
        .sp-form-error   { color: #f87171; font-size: 0.9rem; font-weight: 700; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid { grid-template-columns: repeat(2, 1fr); }
          .sp-about-grid, .sp-contact-layout { grid-template-columns: 1fr; gap: 2rem; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .sp-section { padding: 3.5rem 0; }
          .sp-section-inner { width: min(100%, calc(100% - 1.5rem)); }
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-events-grid { grid-template-columns: 1fr; }
          .sp-form-row { grid-template-columns: 1fr; }
          .sp-hero-title { font-size: clamp(2.4rem, 12vw, 4.2rem); margin-bottom: 1.5rem; }
          .sp-hero-masked { margin-bottom: 1.5rem; }
          .sp-hero-content { padding: 5rem 1rem 3rem; }
          .sp-hero-actions { flex-direction: column; width: 100%; max-width: 280px; }
          .sp-btn-white, .sp-btn-glass { width: 100%; text-align: center; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); gap: 0.65rem; }
          .sp-countdown-card { padding: 1rem 0.8rem; }
          .sp-timeline::before { left: 1rem; }
          .sp-timeline-icon { width: 34px; height: 34px; font-size: 0.85rem; }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
