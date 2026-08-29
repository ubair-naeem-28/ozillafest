import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { assetUrl } from '../../utils/assetUrl.util'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'
import Lightfall from '../../components/common/Lightfall'
import MaskedHeading from '../../components/common/MaskedHeading'
import SplashCursor from '../../components/common/SplashCursor'
import ScrollStack, { ScrollStackItem } from '../../components/common/ScrollStack'

const heroImage = assetUrl('/assets/logo.jpeg')

// ── Performer Data with Stage & BPM ────────────────────────────────────
const performers = [
  {
    name: 'TALWINDER',
    isHeadliner: true,
    genre: 'Indie Pop / Punjabi Fusion',
    stage: 'Main Prism Stage',
    bpm: '128 BPM',
    vibe: 'Euphoric Night',
    image: assetUrl('/assets/ozilla/talwinder.jpg')
  },
  {
    name: 'IMRAN KHAN',
    genre: 'Punjabi Pop / Urban',
    stage: 'Neon Bass Arena',
    bpm: '132 BPM',
    vibe: 'High Energy',
    image: assetUrl('/assets/ozilla/Imran-Khan.jpg')
  },
  {
    name: 'BOHEMIA',
    genre: 'Punjabi Rap / Desi Hip Hop',
    stage: 'Underground Stage',
    bpm: '95 BPM',
    vibe: 'Heavy Bass',
    image: assetUrl('/assets/ozilla/Bohemia.jpg')
  },
  {
    name: 'HASSAN RAHEEM',
    genre: 'Pop / Indie R&B',
    stage: 'Sunset Stage',
    bpm: '115 BPM',
    vibe: 'Golden Hour Chill',
    image: assetUrl('/assets/ozilla/hassan-raheem.jpg')
  }
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

const sponsorshipTiers = [
  { tier: 'Title Sponsor',    price: 'Premium',  perks: ['Exclusive brand naming rights', 'Stage backdrop placement', 'VIP zone branding', '30-second ad slot', 'Social media features'] },
  { tier: 'Gold Sponsor',     price: 'High',     perks: ['Brand activation zone', 'Banner placements', 'Digital features', 'Influencer mentions', 'On-ground presence'] },
  { tier: 'Silver Sponsor',   price: 'Mid',      perks: ['Logo on all materials', 'Social shoutout', 'Booth at festival', 'Feature in email campaigns'] },
  { tier: 'Media Partner',    price: 'Custom',   perks: ['Media coverage rights', 'Press passes', 'Collaborative content', 'Announcement placement'] }
]

const facilitiesList = [
  { icon: '🎤', title: 'Main Concert Stage', desc: 'World-class 100kW concert sound system, 360° laser array, and immersive sub-bass arrays.' },
  { icon: '🍔', title: 'Food & Beats Court', desc: 'Curated food street featuring artisan fusion eats, mocktails, coffee and desserts.' },
  { icon: '🏥', title: '24/7 Medical Hub',   desc: 'On-site first aid stations, paramedic support, and emergency rapid response teams.' },
  { icon: '🚗', title: 'Secure VIP Parking', desc: 'Valet and managed parking zones for general festival attendees and VIP ticket holders.' },
  { icon: '📸', title: 'Neon Photo Booths',  desc: 'Interactive holographic backdrops, creator lighting rigs, and festival photo moments.' },
  { icon: '♿', title: 'Full Accessibility', desc: 'Dedicated accessible viewing decks, pathways, and on-ground hospitality assistance.' },
  { icon: '🛡️', title: 'Crowd Safety Squad', desc: 'Trained professional security and crowd flow management across all festival zones.' },
  { icon: '📡', title: 'Ultra-Fast WiFi',    desc: 'High-speed gigabit Wi-Fi zones for seamless streaming, posting, and sharing moments.' }
]

const discountItems = [
  { brand: 'Street Grill Co.',  category: 'Restaurant', discount: '15% OFF', code: 'OZILLA15', desc: 'Festival combo meal with priority queue access.' },
  { brand: 'Spice District',    category: 'Restaurant', discount: '20% OFF', code: 'SPICE20',  desc: 'Family platter offer for OZilla audience.' },
  { brand: 'Urban Brew',        category: 'Cafe',       discount: 'Buy 1 Get 1', code: 'BREWBOGO', desc: 'Coffee and dessert pair for creators and attendees.' },
  { brand: 'Partner Hotels',    category: 'Hotel',      discount: '10% OFF', code: 'OZHOTEL10', desc: 'Exclusive discount on festival weekend stays.' }
]

const festivalStats = [
  { icon: '🔊', value: '10,000+', label: 'Music Lovers', sub: 'Packed Live Crowd' },
  { icon: '🎤', value: '20+',     label: 'Star Performers', sub: 'Celebrity & Indie Acts' },
  { icon: '🎪', value: '4',       label: 'Mega Stages', sub: 'Non-stop Beats' },
  { icon: '🍔', value: '50+',     label: 'Food & Stalls', sub: 'Culinary & Brand Hub' }
]

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

// ── Main Dashboard Page with Stack Animation as in 2.mp4 ───────────────
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
      {/* Interactive WebGL Fluid Splash Cursor Animation */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

      {/* ══ HERO SECTION (React Bits Lightfall animation) ══ */}
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

          {/* Action Buttons */}
          <div className="sp-hero-actions">
            <a className="sp-btn-white" href="#celebrities">
              Explore Lineup
            </a>
            <Link className="sp-btn-glass" to="/tickets">
              Get VIP Passes
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FESTIVAL STATS ENERGY BAR ═════════════════════════════════ */}
      <section className="festival-stats-strip" aria-label="Festival Highlights">
        <div className="stats-inner-grid">
          {festivalStats.map((st, i) => (
            <motion.div
              key={st.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="stat-icon">{st.icon}</span>
              <div className="stat-info">
                <strong className="stat-val">{st.value}</strong>
                <span className="stat-label">{st.label}</span>
                <small className="stat-sub">{st.sub}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ SCROLL STACK (Each page card stacks smoothly on top as in 2.mp4) ══ */}
      <ScrollStack stackOffset={26}>
        {/* ── CARD 01: CELEBRITIES & LINEUP ── */}
        <ScrollStackItem
          id="celebrities"
          badge="01 · LINEUP"
          title="Headline Artists & Singers"
          bgColor="linear-gradient(145deg, #550e0e 0%, #200407 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Live on the Ozilla Stage</span>
            <h2 className="sp-section-title">Celebrity Singers & Performers</h2>
            <p className="sp-section-subtitle">
              Four high-impact performers, one premium Lahore festival atmosphere, and a stage built for unforgettable crowd moments.
            </p>
          </div>

          <div className="sp-celebrity-grid">
            {performers.map(p => (
              <article key={p.name} className={`sp-celeb-card ${p.isHeadliner ? 'sp-celeb-headliner' : ''}`}>
                <div className="sp-celeb-frame">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    onError={e => { e.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg') }}
                  />
                  <div className="celeb-holo-sheen" />
                  <div className="celeb-top-badges">
                    {p.isHeadliner ? (
                      <span className="sp-headliner-badge">★ MAIN HEADLINER</span>
                    ) : (
                      <span className="celeb-stage-tag">{p.stage}</span>
                    )}
                    <div className="celeb-mini-eq">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="sp-celeb-overlay">
                    <div className="celeb-genre-pill">{p.genre}</div>
                    <h3>{p.name}</h3>
                    <div className="celeb-meta-row">
                      <span>⚡ {p.bpm}</span>
                      <span>♫ {p.vibe}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Countdown to Festival */}
          <div className="sp-countdown">
            <p className="sp-eyebrow" style={{ marginBottom: '1.2rem' }}>Countdown to the First Beat Drop</p>
            <div className="sp-countdown-grid">
              {[['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]].map(([label, val]) => (
                <div key={label} className="sp-countdown-card">
                  <strong>{String(val).padStart(2, '0')}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollStackItem>

        {/* ── CARD 02: ABOUT US ── */}
        <ScrollStackItem
          id="about"
          badge="02 · ABOUT"
          title="The Festival Experience"
          bgColor="linear-gradient(145deg, #ba5916 0%, #4a1d03 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">The Festival Experience</span>
            <h2 className="sp-section-title">Who We Are</h2>
          </div>

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
              <h3>Festival Highlights</h3>
              <div className="sp-tag-cloud">
                {ozillaProfessionalContent.festivalExperience.map(f => <span key={f} className="sp-tag">{f}</span>)}
              </div>
              <h3 style={{ marginTop: '1.8rem' }}>Partner Benefits</h3>
              <div className="sp-tag-cloud">
                {ozillaProfessionalContent.partnerBenefits.map(b => <span key={b} className="sp-tag sp-tag-accent">{b}</span>)}
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* ── CARD 03: VIP PASS EXPERIENCE ── */}
        <ScrollStackItem
          id="vip-experience"
          badge="03 · VIP ACCESS"
          title="Holographic Festival Pass"
          bgColor="linear-gradient(145deg, #EC4899 0%, #540e32 100%)"
        >
          <div className="vip-inner">
            <div className="vip-content">
              <span className="sp-eyebrow">EXCLUSIVE ACCESS</span>
              <h2 className="sp-section-title">Upgrade to the VIP Festival Experience</h2>
              <p className="sp-section-subtitle" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                Front-row soundstage view, private artist lounge access, dedicated fast-track entry, gourmet catering, and commemorative holographic merchandise.
              </p>
              <ul className="vip-perks-list">
                <li><span>✓</span> Priority Front Stage Viewing Deck</li>
                <li><span>✓</span> Backstage & VIP Lounge Access</li>
                <li><span>✓</span> Free Parking & Express Check-In</li>
                <li><span>✓</span> 20% Partner Restaurant & Hotel Discounts</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/tickets" className="sp-btn-white">
                  Book Your VIP Pass →
                </Link>
              </div>
            </div>

            <div className="vip-pass-card-3d">
              <div className="pass-holo-badge">
                <div className="pass-lanyard-hole" />
                <div className="pass-header">
                  <strong>OZILLA FEST 2026</strong>
                  <span className="pass-tier-badge">ALL ACCESS VIP</span>
                </div>
                <div className="pass-center-visual">
                  <span className="pass-big-year">2026</span>
                  <span className="pass-barcode-lines">||||| | |||| ||| |||||| | |||||</span>
                </div>
                <div className="pass-footer">
                  <div>
                    <small>LOCATION</small>
                    <strong>LAHORE, PK</strong>
                  </div>
                  <div>
                    <small>GATE</small>
                    <strong>VIP GOLD 01</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* ── CARD 04: PAST EVENTS ── */}
        <ScrollStackItem
          id="events"
          badge="04 · EVENTS"
          title="Completed Milestones"
          bgColor="linear-gradient(145deg, #cf5704 0%, #4d1d00 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Completed Milestones</span>
            <h2 className="sp-section-title">Past Event Modules</h2>
          </div>

          <div className="sp-events-grid">
            {pastEvents.map(event => (
              <div key={event.name} className="sp-glass-card">
                <div className="sp-card-header">
                  <h3>{event.name}</h3>
                  <span className="sp-pill-badge">{event.status}</span>
                </div>
                <p className="sp-card-desc">{event.detail}</p>
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 05: UPCOMING ROADMAP ── */}
        <ScrollStackItem
          id="future-events"
          badge="05 · UPCOMING"
          title="Future Experiences"
          bgColor="linear-gradient(145deg, #550e0e 0%, #200407 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Upcoming Roadmap</span>
            <h2 className="sp-section-title">Upcoming Experiences</h2>
          </div>

          <div className="sp-future-grid">
            {futureEvents.map(ev => (
              <div key={ev.name} className="sp-glass-card sp-future-card">
                <span className="sp-pill-badge">{ev.status}</span>
                <h3 style={{ marginTop: '0.6rem' }}>{ev.name}</h3>
                <p className="sp-meta-text">📍 {ev.date} · {ev.location}</p>
                <p className="sp-card-desc" style={{ flex: 1 }}>{ev.description}</p>
                <Link to="/tickets" className="sp-accent-link">Get Tickets →</Link>
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 06: HISTORY TIMELINE ── */}
        <ScrollStackItem
          id="history"
          badge="06 · TIMELINE"
          title="Festival Legacy"
          bgColor="linear-gradient(145deg, #ba5916 0%, #4a1d03 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Festival Journey</span>
            <h2 className="sp-section-title">Our Legacy & Timeline</h2>
          </div>

          <div className="sp-timeline">
            {historyEvents.map((ev, idx) => (
              <div key={ev.name} className="sp-timeline-item">
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
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 07: HOTELS ── */}
        <ScrollStackItem
          id="hotels"
          badge="07 · STAY"
          title="Hospitality Partners"
          bgColor="linear-gradient(145deg, #EC4899 0%, #540e32 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Hospitality Partners</span>
            <h2 className="sp-section-title">Partner Hotels in Lahore</h2>
          </div>

          <div className="sp-hotels-grid">
            {ozillaProfessionalContent.hotels.map((hotel, idx) => (
              <div key={hotel.name} className={`sp-glass-card sp-hotel-card ${idx === 0 ? 'sp-featured-border' : ''}`}>
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
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="sp-accent-link">Book Room →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 08: RESTAURANTS ── */}
        <ScrollStackItem
          id="restaurants"
          badge="08 · DINING"
          title="Food Culture Hub"
          bgColor="linear-gradient(145deg, #cf5704 0%, #4d1d00 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Food & Drinks</span>
            <h2 className="sp-section-title">Festival Dining Hub</h2>
          </div>

          <div className="sp-restaurants-grid">
            {ozillaProfessionalContent.restaurants.map(r => (
              <div key={r.name} className="sp-glass-card">
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
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 09: DISCOUNTS & VOUCHERS ── */}
        <ScrollStackItem
          id="discounts"
          badge="09 · DEALS"
          title="Promo Vouchers"
          bgColor="linear-gradient(145deg, #550e0e 0%, #200407 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Exclusive Member Deals</span>
            <h2 className="sp-section-title">Festival Promo Vouchers</h2>
          </div>

          <div className="sp-discounts-grid">
            {discountItems.map(d => (
              <div key={d.brand} className="sp-glass-card sp-voucher-card">
                <span className="sp-eyebrow" style={{ fontSize: '0.7rem' }}>{d.category}</span>
                <h3 style={{ marginTop: '0.2rem' }}>{d.brand}</h3>
                <p className="sp-card-desc" style={{ margin: '0.5rem 0 1rem' }}>{d.desc}</p>
                <div className="sp-discount-footer">
                  <span className="sp-big-discount">{d.discount}</span>
                  <code className="sp-code-pill">{d.code}</code>
                </div>
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 10: VENUE FACILITIES ── */}
        <ScrollStackItem
          id="facilities"
          badge="10 · VENUE"
          title="World-Class Facilities"
          bgColor="linear-gradient(145deg, #ba5916 0%, #4a1d03 100%)"
        >
          <div className="sp-stack-header">
            <span className="sp-eyebrow">Festival Venue</span>
            <h2 className="sp-section-title">World-Class Facilities</h2>
          </div>

          <div className="sp-facilities-grid">
            {facilitiesList.map(f => (
              <div key={f.title} className="sp-glass-card sp-facility-card">
                <span className="sp-facility-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p className="sp-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </ScrollStackItem>

        {/* ── CARD 11: SPONSORSHIPS ── */}
        <ScrollStackItem
          id="sponsorship"
          badge="11 · PARTNERS"
          title="Brand Sponsorships"
          bgColor="linear-gradient(145deg, #EC4899 0%, #540e32 100%)"
        >
          <div className="sp-stack-header" style={{ textAlign: 'center' }}>
            <span className="sp-eyebrow">Brand Partnerships</span>
            <h2 className="sp-section-title">Sponsorship Packages</h2>
            <p className="sp-section-subtitle">Be part of Lahore's biggest music festival. Gain massive on-ground visibility and digital engagement.</p>
          </div>

          <div className="sp-sponsorship-grid">
            {sponsorshipTiers.map((tier, idx) => (
              <div key={tier.tier} className={`sp-glass-card sp-sponsor-card ${idx === 0 ? 'sp-featured-border' : ''}`}>
                <div className="sp-card-header">
                  <h3>{tier.tier}</h3>
                  <span className="sp-pill-badge">{tier.price}</span>
                </div>
                <ul className="sp-sponsor-perks">
                  {tier.perks.map(perk => <li key={perk}><span className="sp-check">✓</span>{perk}</li>)}
                </ul>
                <Link to="/tickets" className="sp-btn-glass" style={{ textAlign: 'center', marginTop: '1rem' }}>Get Partner Pass</Link>
              </div>
            ))}
          </div>
        </ScrollStackItem>
      </ScrollStack>

      {/* ══ MASTER FESTIVAL MUSIC STYLES ══════════════════════════════ */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-main {
          --bg-dark:       #550e0e;
          --bg-card:       rgba(0, 0, 0, 0.25);
          --border-pink:   rgba(255, 255, 255, 0.18);
          --pink-accent:   #EC4899;
          --orange-accent: #ba5916;
          --crimson-dark:  #550e0e;
          --bg-orange:     #cf5704;
          --text-white:    #ffffff;
          --text-muted:    rgba(255, 255, 255, 0.88);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: var(--text-white);
          background: linear-gradient(180deg, #cf5704 0%, #ba5916 20%, #550e0e 50%, #2a0407 85%, #150204 100%);
          scroll-behavior: smooth;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
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
          max-width: 960px;
          width: 100%;
          background: transparent !important;
        }

        .sp-hero-masked {
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 0.9em;
          margin-bottom: 2rem;
          line-height: 1 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .sp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .sp-btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 2.2rem;
          border-radius: 999px;
          background: #ffffff;
          color: #550e0e;
          font-size: 0.98rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.35);
          border: none;
          cursor: pointer;
        }

        .sp-btn-white:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 40px rgba(255, 255, 255, 0.5);
        }

        .sp-btn-glass {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 2.2rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.4);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 800;
          text-decoration: none;
          backdrop-filter: blur(14px);
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }

        .sp-btn-glass:hover {
          transform: translateY(-3px);
          background: rgba(236, 72, 153, 0.25);
          border-color: #EC4899;
        }

        /* ── STATS STRIP ── */
        .festival-stats-strip {
          padding: 2.5rem 0;
          background: rgba(85, 14, 14, 0.4);
          border: none !important;
          backdrop-filter: blur(12px);
        }

        .stats-inner-grid {
          width: min(1200px, calc(100% - 2.5rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.25);
          border: none !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transition: transform 200ms ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-val {
          display: block;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pink-accent);
          text-transform: uppercase;
        }

        .stat-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* ── STACK HEADERS & TYPOGRAPHY ── */
        .sp-stack-header {
          margin-bottom: 2rem;
        }

        .sp-eyebrow {
          display: block;
          color: var(--pink-accent);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .sp-section-title {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .sp-section-subtitle {
          max-width: 680px;
          font-size: 1.02rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* ── GLASS CARD ── */
        .sp-glass-card {
          background: rgba(0, 0, 0, 0.28);
          border: none !important;
          border-radius: 20px;
          padding: 1.5rem;
          backdrop-filter: blur(14px);
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .sp-glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
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
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          border: none !important;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .sp-meta-text {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .sp-accent-link {
          color: #ffffff;
          font-weight: 800;
          text-decoration: underline;
          font-size: 0.92rem;
          transition: color 200ms ease;
          display: inline-block;
        }

        .sp-accent-link:hover {
          color: var(--pink-accent);
        }

        /* ── CELEBRITY LINEUP GRID ── */
        .sp-celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          margin-bottom: 2.5rem;
        }

        .sp-celeb-card {
          border-radius: 22px;
          overflow: hidden;
          border: none !important;
          background: rgba(0, 0, 0, 0.35);
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .sp-celeb-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 0 35px rgba(236, 72, 153, 0.45);
        }

        .sp-celeb-frame {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .sp-celeb-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 500ms ease;
        }

        .sp-celeb-card:hover .sp-celeb-frame img {
          transform: scale(1.08);
        }

        .celeb-holo-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(207, 87, 4, 0.2) 100%);
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .sp-celeb-card:hover .celeb-holo-sheen {
          opacity: 1;
        }

        .celeb-top-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .sp-headliner-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #EC4899, #cf5704);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 900;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .celeb-stage-tag {
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .celeb-mini-eq {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
        }

        .celeb-mini-eq span {
          width: 3px;
          background: #ffffff;
          border-radius: 1px;
          animation: eqMini 0.8s ease-in-out infinite alternate;
        }

        .celeb-mini-eq span:nth-child(1) { height: 6px; }
        .celeb-mini-eq span:nth-child(2) { height: 14px; animation-delay: 0.2s; }
        .celeb-mini-eq span:nth-child(3) { height: 9px; animation-delay: 0.4s; }

        @keyframes eqMini {
          0% { height: 4px; }
          100% { height: 14px; }
        }

        .sp-celeb-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.4rem;
          background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.95));
          z-index: 2;
        }

        .celeb-genre-pill {
          font-size: 0.72rem;
          color: #ffffff;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.3rem;
        }

        .sp-celeb-overlay h3 {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .celeb-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 0.3rem;
        }

        /* ── VIP PASS CARD SECTION ── */
        .vip-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .vip-perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .vip-perks-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.98rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
        }

        .vip-perks-list li span {
          width: 24px;
          height: 24px;
          background: #ffffff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 0.75rem;
          color: #550e0e;
          font-weight: 900;
        }

        .vip-pass-card-3d {
          display: flex;
          justify-content: center;
        }

        .pass-holo-badge {
          width: 300px;
          height: 420px;
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(30, 4, 8, 0.95), rgba(10, 1, 3, 0.95));
          border: none !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
          position: relative;
          padding: 2rem 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .pass-holo-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.2) 40%, rgba(236, 72, 153, 0.3) 50%, transparent 70%);
          pointer-events: none;
        }

        .pass-lanyard-hole {
          width: 45px;
          height: 10px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 999px;
          margin: 0 auto 1.5rem;
          border: none !important;
        }

        .pass-header strong {
          display: block;
          font-size: 1.3rem;
          font-weight: 900;
          color: #ffffff;
        }

        .pass-tier-badge {
          display: inline-block;
          margin-top: 0.4rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #EC4899, #cf5704);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .pass-center-visual {
          text-align: center;
          margin: 1.5rem 0;
        }

        .pass-big-year {
          display: block;
          font-size: 3.8rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.2);
          line-height: 1;
          letter-spacing: 0.1em;
        }

        .pass-barcode-lines {
          display: block;
          font-family: monospace;
          letter-spacing: 4px;
          color: #ffffff;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .pass-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
        }

        .pass-footer small {
          display: block;
          font-size: 0.68rem;
          color: #ffffff;
          opacity: 0.75;
          font-weight: 800;
        }

        .pass-footer strong {
          font-size: 0.95rem;
          color: #ffffff;
        }

        /* ── COUNTDOWN ── */
        .sp-countdown {
          text-align: center;
          padding: 1.5rem 0 0;
        }

        .sp-countdown-grid {
          display: inline-grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .sp-countdown-card {
          background: rgba(0, 0, 0, 0.3);
          border: none !important;
          border-radius: 18px;
          padding: 1.2rem 1.6rem;
          text-align: center;
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .sp-countdown-card strong {
          display: block;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }

        .sp-countdown-card span {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── ABOUT ── */
        .sp-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; }
        .sp-lead { font-size: 1.12rem; line-height: 1.7; color: #ffffff; margin-bottom: 1rem; }
        .sp-about-text p { color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem; }
        .sp-journey-steps { display: flex; flex-direction: column; gap: 0.75rem; }
        .sp-journey-step { display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1.1rem; background: rgba(0, 0, 0, 0.25); border-radius: 14px; }
        .sp-step-num { width: 28px; height: 28px; background: #ffffff; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 0.8rem; color: #ba5916; flex-shrink: 0; }
        .sp-about-features h3 { font-size: 1.02rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; margin-bottom: 0.8rem; }
        .sp-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .sp-tag { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; background: rgba(0, 0, 0, 0.3); border: none !important; color: #ffffff; font-size: 0.82rem; font-weight: 600; }
        .sp-tag-accent { background: rgba(255, 255, 255, 0.18); color: #ffffff; }

        /* ── EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

        /* ── TIMELINE ── */
        .sp-timeline { position: relative; display: flex; flex-direction: column; gap: 1.6rem; }
        .sp-timeline::before { content: ''; position: absolute; left: 2.1rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.4), transparent); }
        .sp-timeline-item { display: flex; gap: 1.5rem; align-items: flex-start; }
        .sp-timeline-icon { width: 44px; height: 44px; flex-shrink: 0; background: #ffffff; border-radius: 50%; display: grid; place-items: center; font-size: 1.1rem; font-weight: 900; color: #ba5916; z-index: 1; box-shadow: 0 0 20px rgba(0, 0, 0, 0.35); }
        .sp-timeline-content { flex: 1; }
        .sp-year-highlight { font-size: 1rem; color: #ffffff; font-weight: 800; }
        .sp-venue-text { font-size: 0.82rem; color: #ffffff; opacity: 0.9; font-weight: 600; margin-top: 0.6rem; }

        /* ── HOTELS ── */
        .sp-hotels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .sp-hotel-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; }
        .sp-hotel-img-wrap { height: 180px; overflow: hidden; }
        .sp-hotel-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
        .sp-hotel-card:hover .sp-hotel-img-wrap img { transform: scale(1.06); }
        .sp-hotel-body { padding: 1.3rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
        .sp-rating-tag { font-size: 0.78rem; font-weight: 700; color: #ffb000; white-space: nowrap; }
        .sp-contact-text { font-size: 0.8rem; color: rgba(255, 255, 255, 0.75); }

        /* ── RESTAURANTS & DISCOUNTS ── */
        .sp-restaurants-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .sp-discount-pill { padding: 0.3rem 0.85rem; border-radius: 999px; background: #ffffff; color: #cf5704; font-size: 0.72rem; font-weight: 800; }
        .sp-code-box { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 1rem; background: rgba(0, 0, 0, 0.25); border-radius: 10px; margin-top: 0.4rem; }
        .sp-code-box span { font-size: 0.82rem; color: var(--text-muted); }
        .sp-code-box code { font-family: monospace; background: rgba(255, 255, 255, 0.2); padding: 0.25rem 0.65rem; border-radius: 6px; color: #ffffff; font-weight: 800; }

        .sp-discounts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .sp-discount-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; }
        .sp-big-discount { font-size: 1.3rem; font-weight: 900; color: #ffffff; }
        .sp-code-pill { font-family: monospace; background: rgba(255, 255, 255, 0.2); padding: 0.3rem 0.7rem; border-radius: 8px; color: #ffffff; font-weight: 800; font-size: 0.82rem; }

        /* ── FACILITIES ── */
        .sp-facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .sp-facility-card { text-align: center; }
        .sp-facility-icon { font-size: 2.2rem; display: block; margin-bottom: 0.75rem; }

        /* ── SPONSORSHIP ── */
        .sp-sponsorship-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .sp-sponsor-card { display: flex; flex-direction: column; gap: 1rem; }
        .sp-sponsor-perks { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .sp-sponsor-perks li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--text-muted); }
        .sp-check { color: #ffffff; font-weight: 900; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .sp-about-grid, .vip-inner { grid-template-columns: 1fr; gap: 2rem; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .stat-card { padding: 0.9rem 1rem; }
          .stat-val { font-size: 1.4rem; }
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-events-grid { grid-template-columns: 1fr; gap: 1rem; }
          .sp-hero-masked { margin-bottom: 1.5rem; }
          .sp-hero-content { padding: 4.5rem 1rem 2.5rem; }
          .sp-hero-actions { flex-direction: column; width: 100%; max-width: 280px; gap: 0.75rem; }
          .sp-btn-white, .sp-btn-glass { width: 100%; text-align: center; padding: 0.8rem 1.6rem; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); gap: 0.65rem; }
          .sp-countdown-card { padding: 0.9rem 0.75rem; }
          .sp-timeline::before { left: 1rem; }
          .sp-timeline-icon { width: 34px; height: 34px; font-size: 0.85rem; }
          .pass-holo-badge { width: 100%; height: auto; min-height: 400px; padding: 1.5rem; }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
