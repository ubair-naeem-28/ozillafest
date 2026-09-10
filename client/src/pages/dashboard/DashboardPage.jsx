import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assetUrl } from '../../utils/assetUrl.util'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'
import RoundCarousel from '../../components/common/RoundCarousel'
import SmoothScrollSlider from '../../components/common/SmoothScrollSlider'
import NeonBorder from '../../components/common/NeonBorder'
import VortexDustFall from '../../components/common/VortexDustFall'

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

// ── VIP / Ticket Tiers (CreatorOS Style) ────────────────────────────────
const ticketTiers = [
  {
    id: 'general',
    name: 'General Pass',
    badge: 'STANDARD ACCESS',
    price: 'PKR 4,500',
    sub: 'Full 1-day festival admission',
    isFeatured: false,
    perks: [
      'Access to All 4 Music Stages',
      'Food & Beats Street Access',
      'Festival Photo Booths & Activations',
      'Instant Digital QR Pass'
    ],
    ctaText: 'Get General Pass',
    ctaLink: '/tickets'
  },
  {
    id: 'vip',
    name: 'VIP Experience',
    badge: 'MOST POPULAR',
    price: 'PKR 12,500',
    sub: 'Elevated front-row & lounge access',
    isFeatured: true,
    perks: [
      'Priority Front Stage Viewing Deck',
      'Private VIP Artist Lounge Access',
      'Dedicated Fast-Track Entry Gate',
      'Complimentary Food & Drink Voucher',
      '20% Partner Hotel & Dining Discounts',
      'Holographic VIP Commemorative Pass'
    ],
    ctaText: 'Book VIP Pass →',
    ctaLink: '/tickets'
  },
  {
    id: 'platinum',
    name: 'All-Access Platinum',
    badge: 'EXCLUSIVE ALL-ACCESS',
    price: 'PKR 25,000',
    sub: 'Ultimate luxury hospitality package',
    isFeatured: false,
    perks: [
      'Backstage & Artist Lounge Access',
      'Valet Reserved Parking Spot',
      'Gourmet Catering & Open Mocktail Bar',
      'Exclusive Afterparty Invitation',
      'Dedicated Hospitality Concierge',
      'Full Merchandise Gift Bundle'
    ],
    ctaText: 'Reserve Platinum Pass',
    ctaLink: '/tickets'
  }
]

const festivalPillars = [
  {
    badge: '100kW SOUND SYSTEM',
    title: '4 Mega Sound Stages',
    desc: 'Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats.'
  },
  {
    badge: 'HEADLINE CELEBRITIES',
    title: 'Star-Studded Lineup',
    desc: 'Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists.'
  },
  {
    badge: 'CULINARY & NIGHT BAZAAR',
    title: 'Food & Beats Street',
    desc: '50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges.'
  },
  {
    badge: 'ALL-ACCESS HOSPITALITY',
    title: 'VIP Lounge & Deck Access',
    desc: 'Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates.'
  }
]

const futureEvents = [
  { name: 'OZILLA FEST 2026: The Flagship', date: 'November 1, 2026', location: 'Lahore, Pakistan', status: 'FEATURED FESTIVAL', description: 'Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd.' },
  { name: 'Celebrity Night Live Concert',        date: 'February 2027',    location: 'Lahore, Pakistan', status: 'UPCOMING CONCERT',  description: 'High-octane stadium night with headline Punjabi artists and 360° laser shows.' },
  { name: 'Ozilla Basant Beats Season 2',        date: 'March 2027',       location: 'Lahore, Pakistan', status: 'SEASONAL FESTIVAL', description: 'Cultural music fusion festival with live pop sets, color activations, and street eats.' }
]

const pastEvents = [
  { name: 'Ozilla Season 1: The Bass Awakening', status: 'Sold Out · 6,500+ Fans', detail: 'Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages.' },
  { name: 'Ozilla Season 2: Neon Nights',         status: 'Sold Out · 8,500+ Fans', detail: 'High-energy night festival with headline celebrity acts and artisan night food street.' }
]

const historyEvents = [
  {
    name: 'Ozilla Debut: The Sound Awakening',
    year: '2023',
    badge: 'SOLD OUT DEBUT',
    description: 'Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.',
    highlights: ['6,000+ Attendees', '2 Live Stages', 'Indie & Desi Fusion'],
    venue: 'Lahore Expo Center',
    date: 'December 12, 2023'
  },
  {
    name: 'Ozilla Season 2: Neon Nights',
    year: '2024',
    badge: 'RECORD 8,500+ CROWD',
    description: 'Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.',
    highlights: ['8,500+ Fans', '4 Live Stages', 'Celebrity Headliners'],
    venue: 'DHA Sports Complex, Lahore',
    date: 'November 9, 2024'
  },
  {
    name: 'Ozilla Basant Cultural Beats',
    year: '2025',
    badge: 'SPRING FESTIVAL',
    description: 'Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.',
    highlights: ['Cultural Sets', 'Live DJ Stages', 'Food Hub'],
    venue: 'Gulberg Cultural District, Lahore',
    date: 'March 15, 2025'
  },
  {
    name: 'OZILLA FEST 2026 (The Grand Edition)',
    year: '2026',
    badge: 'FLAGSHIP 10,000+ EDITION',
    description: 'Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.',
    highlights: ['10,000+ Crowd', '4 Mega Stages', 'Talwinder & Imran Khan'],
    venue: 'Lahore, Punjab',
    date: 'November 1, 2026'
  },
  {
    name: 'OZILLA FEST 2027: Arena Tour',
    year: '2027',
    badge: 'NATIONWIDE TOUR',
    description: 'Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.',
    highlights: ['Arena Tour', 'Multi-City Stages', 'Star Acts'],
    venue: 'Lahore, Karachi & Islamabad',
    date: 'November 14, 2027'
  }
]

const sponsorshipTiers = [
  {
    tier: 'Title Sponsor',
    price: 'PREMIUM',
    badge: 'FLAGSHIP PARTNER',
    accent: '#ffbd59',
    tagline: 'Maximum Brand Dominance',
    isFeatured: true,
    ctaText: 'Claim Title Partnership',
    perks: ['Exclusive brand naming rights', 'Main stage backdrop placement', 'VIP lounge & deck co-branding', '30-second main stage video slot', 'Dedicated social & press campaigns']
  },
  {
    tier: 'Gold Sponsor',
    price: 'HIGH IMPACT',
    badge: 'STAGE ACTIVATION',
    accent: '#ff8a3d',
    tagline: 'High-Energy Ground Presence',
    isFeatured: false,
    ctaText: 'Become Gold Sponsor',
    perks: ['Exclusive brand activation zone', 'Perimeter banner placements', 'Digital festival app features', 'Influencer co-branding & mentions', 'On-ground brand booth space']
  },
  {
    tier: 'Silver Sponsor',
    price: 'GROWTH',
    badge: 'BRAND PARTNER',
    accent: '#cbd5e1',
    tagline: 'Targeted Festival Engagement',
    isFeatured: false,
    ctaText: 'Join Silver Tier',
    perks: ['Official festival website branding', 'Social media shoutouts', 'Sampling booth at food street', 'Newsletter sponsor placement', '10 complimentary festival passes']
  },
  {
    tier: 'Media Partner',
    price: 'CUSTOM',
    badge: 'BROADCAST & PRESS',
    accent: '#ec4899',
    tagline: 'Official Media Rights',
    isFeatured: false,
    ctaText: 'Apply For Press Pass',
    perks: ['Official media coverage rights', 'All-access artist press passes', 'Exclusive backstage interview access', 'Press release announcement feature', 'Dedicated creator lounge access']
  }
]

const facilitiesList = [
  {
    badge: '100kW SOUND ARRAY',
    title: 'Main Concert Arena',
    desc: 'Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.',
    accent: '#ff5a1f'
  },
  {
    badge: '50+ FOOD SPOTS',
    title: 'Food & Beats Street',
    desc: '50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.',
    accent: '#ffbd59'
  },
  {
    badge: '24/7 RAPID CARE',
    title: 'Medical & First Aid Hub',
    desc: 'Fully equipped medical stations and certified paramedic response teams.',
    accent: '#ef4444'
  },
  {
    badge: 'VALET & VIP GATES',
    title: 'Managed VIP Parking',
    desc: 'Fast-track valet lanes and direct express entry for VIP pass holders.',
    accent: '#f59e0b'
  },
  {
    badge: 'CREATOR LIGHTING',
    title: 'Holographic Photo Booths',
    desc: 'Interactive neon backdrops and 360° video spinners for creator moments.',
    accent: '#ec4899'
  },
  {
    badge: 'INCLUSIVE VENUE',
    title: 'Full Venue Accessibility',
    desc: 'Elevated viewing decks, step-free ramps, and on-ground guest assistance.',
    accent: '#3b82f6'
  },
  {
    badge: 'PROFESSIONAL SQUAD',
    title: 'Crowd Safety & Security',
    desc: 'Trained festival security squad, CCTV monitoring, and RFID gate checks.',
    accent: '#10b981'
  },
  {
    badge: 'GIGABIT HIGH-SPEED',
    title: 'Ultra-Fast Festival Wi-Fi',
    desc: 'High-density wireless zones across all stages and food streets.',
    accent: '#06b6d4'
  }
]

const festivalStats = [
  { value: '10,000+', label: 'Music Lovers', sub: 'Packed Live Crowd' },
  { value: '20+',     label: 'Star Performers', sub: 'Celebrity & Indie Acts' },
  { value: '4',       label: 'Mega Stages', sub: 'Non-stop Beats' },
  { value: '50+',     label: 'Food & Stalls', sub: 'Culinary & Brand Hub' }
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
      {/* ══ HERO SECTION ══ */}
      <section id="home" className="sp-hero" aria-label="Ozilla Fest">
        <VortexDustFall
          baseColor="#ff8a3d"
          accentColor="#ffbd59"
          density={125}
          speed={46}
          tilt={7}
        />
        <div className="sp-hero-ambient-glow" />

        <div className="sp-hero-content">
          <motion.div
            className="sp-hero-badge"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span>✨</span>
            <strong>OZILLA FEST 2026 · LAHORE</strong>
          </motion.div>

          <motion.h1
            className="sp-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            OZILLA FEST
          </motion.h1>

          <motion.p
            className="sp-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <strong className="sp-hero-sub-highlight">Pakistan's Flagship Music & Cultural Phenomenon.</strong>
            <span className="sp-hero-sub-detail">4 Electrified Mega Stages · Headline Celebrities · High-Octane Sound Under the Lahore Night Sky.</span>
          </motion.p>

          <motion.div
            className="sp-hero-meta-strip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sp-hero-meta-pill">
              <span className="sp-meta-header">
                <span className="sp-meta-dot" />
                <span className="sp-meta-label">DATE</span>
              </span>
              <strong>NOV 01, 2026</strong>
            </div>
            <div className="sp-hero-meta-pill">
              <span className="sp-meta-header">
                <span className="sp-meta-dot" />
                <span className="sp-meta-label">CITY</span>
              </span>
              <strong>LAHORE, PK</strong>
            </div>
            <div className="sp-hero-meta-pill">
              <span className="sp-meta-header">
                <span className="sp-meta-dot" />
                <span className="sp-meta-label">PRODUCTION</span>
              </span>
              <strong>4 MEGA STAGES</strong>
            </div>
            <div className="sp-hero-meta-pill sp-meta-featured">
              <span className="sp-meta-header">
                <span className="sp-meta-dot sp-dot-gold" />
                <span className="sp-meta-label">PASSES</span>
              </span>
              <strong>INSTANT QR PASS</strong>
            </div>
          </motion.div>

          <motion.div
            className="sp-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.a
              className="sp-btn-ember"
              href="#celebrities"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Lineup ⚡
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link className="sp-btn-ghost" to="/tickets">
                Get VIP Passes 🎟️
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ FESTIVAL STATS ENERGY BAR ══ */}
      <section className="festival-stats-strip" aria-label="Festival Highlights">
        <div className="sp-container">
          <div className="stats-inner-grid">
            {festivalStats.map((st, i) => (
              <motion.div
                key={st.label}
                className="stat-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <strong className="stat-val">{st.value}</strong>
                <span className="stat-label">{st.label}</span>
                <small className="stat-sub">{st.sub}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 01: CELEBRITIES & LINEUP ══ */}
      <section id="celebrities" className="sp-section sp-section-celebrities" aria-label="Celebrities Lineup">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Live on the Ozilla Stage</span>
            <h2 className="sp-section-title">Celebrity Singers & Performers</h2>
            <p className="sp-section-subtitle">
              Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments.
            </p>
          </div>

          <div
            className="sp-celebrity-slider-wrap"
            style={{ margin: '1rem 0 3.5rem 0' }}
          >
            <SmoothScrollSlider
              items={performers}
              slideWidth={320}
              slideHeight={440}
              spacing={2.6}
              smoothness={8.5}
              dim={6}
              sensitivity={5}
              autoPlay={true}
              autoPlaySpeed={1.2}
            />
          </div>

          {/* Countdown to Festival */}
          <div className="sp-countdown-banner">
            <div className="sp-countdown-header">
              <span className="sp-countdown-eyebrow">
                <span className="sp-countdown-pulse" />
                COUNTDOWN TO THE FIRST BEAT DROP
              </span>
            </div>
            <div className="sp-countdown-grid">
              {[['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]].map(([label, val]) => (
                <motion.div
                  key={label}
                  className="sp-countdown-card"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 350 }}
                >
                  <strong>{String(val).padStart(2, '0')}</strong>
                  <span>{label}</span>
                  <div className="sp-countdown-glow-line" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 02: VIP & TICKET TIERS (CreatorOS Style) ══ */}
      <section id="vip-experience" className="sp-section sp-section-pricing" aria-label="Festival Passes">
        <div className="sp-container">
          <div
            className="sp-section-header"
            style={{ textAlign: 'center' }}
          >
            <span className="sp-eyebrow">CHOOSE YOUR ACCESS</span>
            <h2 className="sp-section-title">Festival Passes & VIP Tiers</h2>
            <p className="sp-section-subtitle" style={{ margin: '0 auto' }}>
              Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission.
            </p>
          </div>

          <div className="sp-pricing-grid">
            {ticketTiers.map((tier) => (
              <motion.div
                key={tier.id}
                className={`sp-pricing-card ${tier.isFeatured ? 'sp-featured-pricing' : ''}`}
                whileHover={{ y: -8 }}
              >
                {tier.isFeatured && (
                  <div className="sp-pricing-popular-tag">MOST POPULAR ACCESS</div>
                )}
                <div className="sp-pricing-header">
                  <span className="sp-tier-badge">{tier.badge}</span>
                  <h3>{tier.name}</h3>
                  <div className="sp-pricing-cost">
                    <strong>{tier.price}</strong>
                  </div>
                  <p className="sp-pricing-sub">{tier.sub}</p>
                </div>

                <div className="sp-pricing-divider" />

                <ul className="sp-pricing-features">
                  {tier.perks.map((perk) => (
                    <li key={perk}>
                      <span className="sp-perk-check">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.ctaLink}
                  className={tier.isFeatured ? 'sp-btn-ember w-full' : 'sp-btn-ghost w-full'}
                  style={{ textAlign: 'center', marginTop: 'auto' }}
                >
                  {tier.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 03: FESTIVAL EXPERIENCE & ATMOSPHERE ══ */}
      <section id="about" className="sp-section sp-section-about" aria-label="About Ozilla">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">⚡ THE ULTIMATE LIVE EXPERIENCE</span>
            <h2 className="sp-section-title">The Ozilla Fest Atmosphere</h2>
            <p className="sp-section-subtitle">
              Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky.
            </p>
          </div>

          {/* 4 Concert Pillars Grid */}
          <div className="sp-pillars-grid">
            {festivalPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="sp-pillar-card"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="sp-pillar-glow-accent" />

                <div className="sp-pillar-top">
                  <span className="sp-pillar-badge">{pillar.badge}</span>
                </div>

                <h3 className="sp-pillar-title">{pillar.title}</h3>
                <p className="sp-pillar-desc">{pillar.desc}</p>

                <div className="sp-pillar-glow-line" />
              </motion.div>
            ))}
          </div>

          {/* Festival Vibe & Highlights Showcase */}
          <div
            className="sp-festival-vibe-banner"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <NeonBorder color="#ff7a29" rounded={32} thickness={2.8} borderSize={50} glow={85} />
            <div className="sp-vibe-left" style={{ position: 'relative', zIndex: 2 }}>
              <span className="sp-vibe-eyebrow">
                <span className="sp-countdown-pulse" />
                FESTIVAL HIGHLIGHTS
              </span>
              <h3>What Makes Ozilla Legendary</h3>
              <p>Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture.</p>
              <div className="sp-vibe-actions">
                <motion.a
                  href="#celebrities"
                  className="sp-btn-ember"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Lineup →
                </motion.a>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/tickets" className="sp-btn-ghost">
                    Book Festival Passes
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="sp-vibe-tags-grid" style={{ position: 'relative', zIndex: 2 }}>
              {[
                { text: '4 Mega Music Stages', isMain: true, icon: '⚡' },
                { text: '100kW Laser & Sound', isMain: true, icon: '🔊' },
                { text: '20+ Star Performers', isMain: true, icon: '👑' },
                { text: 'Verified QR Instant Passes', isMain: true, icon: '🎟️' },
                { text: '10,000+ Music Lovers', isMain: false, icon: '👥' },
                { text: '50+ Food & Beats Stalls', isMain: false, icon: '🍔' },
                { text: 'VIP Artist Lounge & Deck', isMain: false, icon: '✨' },
                { text: 'Exclusive Partner Discounts', isMain: false, icon: '🏷️' }
              ].map((tag) => (
                <motion.div
                  key={tag.text}
                  className={`sp-vibe-tag ${tag.isMain ? 'sp-vibe-main' : 'sp-vibe-secondary'}`}
                  whileHover={{ scale: 1.03, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="sp-vibe-tag-icon">{tag.icon}</span>
                  <span className="sp-vibe-tag-text">{tag.text}</span>
                  {tag.isMain && <span className="sp-vibe-tag-dot" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 04: PAST FESTIVAL EDITIONS ══ */}
      <section id="events" className="sp-section sp-section-events" aria-label="Past Events">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Previous Editions</span>
            <h2 className="sp-section-title">Past Festival Milestones</h2>
            <p className="sp-section-subtitle">
              A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights.
            </p>
          </div>

          <div className="sp-events-grid">
            {pastEvents.map((event) => (
              <motion.div
                key={event.name}
                className="sp-glass-card sp-past-event-card"
                style={{ position: 'relative', overflow: 'hidden' }}
                whileHover={{ y: -6 }}
              >
                <NeonBorder color="#ff8a3d" rounded={22} thickness={2.5} borderSize={40} glow={80} />
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="sp-card-header">
                    <h3>{event.name}</h3>
                    <span className="sp-pill-badge">{event.status}</span>
                  </div>
                  <p className="sp-card-desc">{event.detail}</p>
                  <div className="sp-card-footer-eq">
                    <span>LIVE ARCHIVE</span>
                    <div className="celeb-mini-eq">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 05: UPCOMING FESTIVAL ROADMAP ══ */}
      <section id="future-events" className="sp-section sp-section-future" aria-label="Upcoming Events">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Upcoming Concert Tour</span>
            <h2 className="sp-section-title">Future Festival Editions</h2>
            <p className="sp-section-subtitle">
              Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates.
            </p>
          </div>

          <div className="sp-future-grid">
            {futureEvents.map((ev) => (
              <motion.div
                key={ev.name}
                className="sp-glass-card sp-future-card"
                style={{ position: 'relative', overflow: 'hidden' }}
                whileHover={{ y: -6 }}
              >
                <NeonBorder color="#ff9e42" rounded={22} thickness={2.5} borderSize={40} glow={80} />
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <span className="sp-pill-badge">{ev.status}</span>
                  <h3 style={{ marginTop: '0.8rem' }}>{ev.name}</h3>
                  <p className="sp-meta-text">📍 {ev.date} · {ev.location}</p>
                  <p className="sp-card-desc" style={{ flex: 1 }}>{ev.description}</p>
                  <Link to="/tickets" className="sp-accent-link">Get Tickets →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 06: HISTORY & EDITIONS TIMELINE ══ */}
      <section id="history" className="sp-section sp-section-history" aria-label="Festival History">
        <div className="sp-container">
          <div className="sp-section-header sp-timeline-banner-header" style={{ position: 'relative', overflow: 'hidden' }}>
            <NeonBorder color="#ff8a3d" rounded={24} thickness={2.8} borderSize={45} glow={85} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="sp-eyebrow">Festival Legacy</span>
              <h2 className="sp-section-title">Our Editions & Timeline</h2>
              <p className="sp-section-subtitle">
                From our underground debut to Pakistan's biggest stadium concert experience.
              </p>
            </div>
          </div>

          <div className="sp-timeline">
            {historyEvents.map((ev) => (
              <div
                key={ev.name}
                className="sp-timeline-item"
              >
                <div className="sp-timeline-node-wrap">
                  <div className="sp-timeline-icon">
                    <span className="sp-timeline-year-pill">{ev.year}</span>
                  </div>
                  <div className="sp-timeline-pulse-ring" />
                </div>

                <div className="sp-glass-card sp-timeline-content">
                  <div className="sp-timeline-top-row">
                    <div className="sp-meta-text">
                      <span className="sp-year-highlight">{ev.date}</span>
                    </div>
                    <span className="sp-timeline-badge">{ev.badge}</span>
                  </div>

                  <h3 className="sp-timeline-heading">{ev.name}</h3>
                  <p className="sp-card-desc">{ev.description}</p>

                  <div className="sp-tag-cloud">
                    {ev.highlights.map(h => (
                      <span key={h} className="sp-tag sp-timeline-tag">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="sp-timeline-footer">
                    <p className="sp-venue-text">{ev.venue}</p>
                    <div className="celeb-mini-eq">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ══ SECTION 10: VENUE FACILITIES ══ */}
      <section id="facilities" className="sp-section sp-section-facilities" aria-label="Facilities">
        <div className="sp-container">
          <div
            className="sp-section-header sp-facilities-header-banner"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <NeonBorder color="#ff8a3d" rounded={24} thickness={2.8} borderSize={45} glow={85} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="sp-eyebrow">⚡ FESTIVAL VENUE & PRODUCTION</span>
              <h2 className="sp-section-title">World-Class Festival Facilities</h2>
              <p className="sp-section-subtitle">
                Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities.
              </p>
            </div>
          </div>

          <div className="sp-facilities-grid">
            {facilitiesList.map((f) => (
              <motion.div
                key={f.title}
                className="sp-glass-card sp-facility-card"
                style={{ position: 'relative', overflow: 'hidden' }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <NeonBorder color={f.accent || '#ff8a3d'} rounded={20} thickness={2.2} borderSize={40} glow={80} />
                <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                  <div className="sp-facility-top">
                    <span className="sp-facility-badge" style={{ color: f.accent, borderColor: `${f.accent}44`, background: `${f.accent}14` }}>
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="sp-facility-title">{f.title}</h3>
                  <p className="sp-card-desc">{f.desc}</p>
                </div>
                <div className="sp-facility-glow-bar" style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 11: SPONSORSHIPS ══ */}
      <section id="sponsorship" className="sp-section sp-section-sponsorship" aria-label="Sponsorships">
        <div className="sp-container">
          <div
            className="sp-section-header sp-sponsorship-header-banner"
            style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}
          >
            <NeonBorder color="#ff8a3d" rounded={24} thickness={2.8} borderSize={45} glow={85} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span className="sp-eyebrow">BRAND COLLABORATIONS</span>
              <h2 className="sp-section-title">Sponsorship & Brand Packages</h2>
              <p className="sp-section-subtitle" style={{ margin: '0 auto' }}>
                Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality.
              </p>
            </div>
          </div>

          <div className="sp-sponsorship-grid">
            {sponsorshipTiers.map((tier) => (
              <motion.div
                key={tier.tier}
                className={`sp-glass-card sp-sponsor-card ${tier.isFeatured ? 'sp-sponsor-featured' : ''}`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {tier.isFeatured && (
                  <div className="sp-sponsor-popular-tag">MOST PRESTIGIOUS TIER</div>
                )}

                <div className="sp-sponsor-top">
                  <span className="sp-sponsor-badge" style={{ color: tier.accent, borderColor: `${tier.accent}44`, background: `${tier.accent}14` }}>
                    {tier.badge}
                  </span>
                </div>

                <div className="sp-sponsor-header">
                  <h3>{tier.tier}</h3>
                  <div className="sp-sponsor-price-tag" style={{ color: tier.accent }}>
                    {tier.price}
                  </div>
                  <p className="sp-sponsor-tagline">{tier.tagline}</p>
                </div>

                <div className="sp-sponsor-divider" />

                <ul className="sp-sponsor-perks">
                  {tier.perks.map((perk) => (
                    <li key={perk}>
                      <span className="sp-check" style={{ color: tier.accent }}>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ marginTop: 'auto', paddingTop: '1.2rem' }}
                >
                  <Link
                    to="/tickets"
                    className={tier.isFeatured ? 'sp-btn-ember w-full' : 'sp-btn-ghost w-full'}
                    style={{ textAlign: 'center' }}
                  >
                    {tier.ctaText}
                  </Link>
                </motion.div>

                <div className="sp-sponsor-glow-bottom" style={{ background: `linear-gradient(90deg, ${tier.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MASTER FESTIVAL MUSIC STYLES ══════════════════════════════ */}
      <style>{`
        .sp-main {
          --pink-accent:   #EC4899;
          --ember-accent:  #ff5a1f;
          --ember-glow:    #ff8a3d;
          --gold-accent:   #ffbd59;
          --obsidian-dark: #0B0705;
          --obsidian-card: rgba(27, 17, 11, 0.72);
          --text-white:    #ffffff;
          --text-muted:    rgba(255, 255, 255, 0.78);
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #ffffff !important;
          background: transparent !important;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
          letter-spacing: -0.01em;
          word-spacing: 0.02em;
        }

        .sp-container {
          width: min(1260px, calc(100% - 3.5rem));
          margin: 0 auto;
          position: relative;
        }

        .sp-section {
          position: relative;
          padding: clamp(5.5rem, 8.5vw, 8.5rem) 0;
          border: none !important;
          background: transparent !important;
        }

        /* ── HERO SECTION ── */
        .sp-hero {
          position: relative;
          width: 100%;
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0B0705 !important;
          padding: clamp(7rem, 12vw, 10rem) 1.5rem clamp(5rem, 8vw, 7rem);
          z-index: 2;
        }

        .sp-hero-ambient-glow {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 138, 61, 0.22) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 1;
        }

        .sp-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 940px;
          width: 100%;
          background: transparent !important;
        }

        .sp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 1.35rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 189, 89, 0.35);
          backdrop-filter: blur(14px);
          color: #ffbd59;
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin-bottom: 1.8rem;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
        }

        .sp-hero-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(3.6rem, 9.5vw, 6.8rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          line-height: 1.0;
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
          background: none !important;
          margin-bottom: 1.6rem;
          text-transform: uppercase;
          text-shadow:
            0 0 35px rgba(255, 189, 89, 0.8),
            0 0 70px rgba(255, 90, 31, 0.55),
            0 4px 20px rgba(0, 0, 0, 1),
            0 8px 45px rgba(0, 0, 0, 0.95);
        }

        .sp-hero-subtitle {
          max-width: 820px;
          font-size: clamp(1.06rem, 1.85vw, 1.28rem);
          color: rgba(255, 255, 255, 0.92) !important;
          line-height: 1.68;
          margin-bottom: 2.2rem;
          font-weight: 400;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 1), 0 1px 6px rgba(0, 0, 0, 0.95);
        }

        .sp-hero-sub-highlight {
          font-size: clamp(1.15rem, 2.1vw, 1.45rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          background: linear-gradient(120deg, #ffffff 0%, #ffd36a 60%, #ff8a3d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sp-hero-sub-detail {
          font-size: clamp(0.92rem, 1.5vw, 1.06rem);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          max-width: 720px;
        }

        .sp-hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin: 0 auto 2.8rem;
          max-width: 880px;
        }

        .sp-hero-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          background: rgba(18, 10, 6, 0.75) !important;
          border: 1px solid rgba(255, 189, 89, 0.3) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .sp-meta-header {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .sp-hero-meta-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 189, 89, 0.65) !important;
          box-shadow: 0 12px 35px rgba(255, 90, 31, 0.35);
        }

        .sp-meta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 10px #ff5a1f, 0 0 4px #ffbd59;
          flex-shrink: 0;
        }

        .sp-dot-gold {
          background: #ffbd59;
          box-shadow: 0 0 10px #ffbd59;
        }

        .sp-meta-label {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255, 189, 89, 0.9);
          text-transform: uppercase;
        }

        .sp-hero-meta-pill strong {
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .sp-meta-featured {
          border-color: rgba(255, 189, 89, 0.55) !important;
          background: rgba(35, 18, 10, 0.82) !important;
          box-shadow: 0 8px 30px rgba(255, 90, 31, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .sp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          flex-wrap: wrap;
        }

        /* ── BUTTON SYSTEM (CreatorOS Inspired) ── */
        .sp-btn-ember {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.4rem;
          border-radius: 18px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c) !important;
          color: #ffffff !important;
          font-size: 1rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: transform 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 12px 40px -8px rgba(255, 90, 31, 0.55);
          border: none !important;
          cursor: pointer;
        }

        .sp-btn-ember:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 55px -6px rgba(255, 90, 31, 0.75);
        }

        .sp-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.4rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(14px);
          transition: transform 220ms ease, background 220ms ease, border-color 220ms ease;
        }

        .sp-btn-ghost:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 189, 89, 0.45) !important;
        }

        /* ── STATS STRIP ── */
        .festival-stats-strip {
          padding: 2.5rem 0;
          background: rgba(14, 8, 5, 0.65) !important;
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stats-inner-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.6rem 1.3rem;
          border-radius: 22px;
          background: rgba(27, 17, 11, 0.65) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 12px 35px rgba(0, 0, 0, 0.45);
          transition: transform 200ms ease, border-color 200ms ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 90, 31, 0.45) !important;
        }

        .stat-val {
          display: block;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.2rem, 3.5vw, 2.7rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.05;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          color: #ff8a3d !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .stat-sub {
          font-size: 0.78rem;
          color: var(--text-muted) !important;
          line-height: 1.4;
        }

        /* ── SECTION HEADERS & TYPOGRAPHY ── */
        .sp-section-header {
          margin-bottom: 3.5rem;
          background: radial-gradient(ellipse at 50% 50%, rgba(14, 8, 5, 0.88) 0%, rgba(14, 8, 5, 0.5) 70%, transparent 100%);
          padding: 1.8rem 1.6rem;
          border-radius: 28px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .sp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          background: rgba(14, 8, 5, 0.9) !important;
          border: 1px solid rgba(255, 189, 89, 0.45) !important;
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.65);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .sp-section-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.3rem, 4.8vw, 3.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin-bottom: 1rem;
          text-shadow: 0 0 25px rgba(255, 189, 89, 0.4), 0 4px 30px rgba(0, 0, 0, 1), 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .sp-section-subtitle {
          max-width: 780px;
          font-size: clamp(1.05rem, 1.8vw, 1.22rem);
          color: rgba(255, 240, 228, 0.88) !important;
          line-height: 1.78;
          word-spacing: 0.02em;
          font-weight: 400;
          letter-spacing: 0.012em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.9);
        }

        /* ── OBSIDIAN GLASS CARD ── */
        .sp-glass-card {
          background: rgba(27, 17, 11, 0.68) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 22px;
          padding: clamp(1.8rem, 3vw, 2.3rem);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 16px 45px rgba(0, 0, 0, 0.55);
          color: #ffffff !important;
        }

        .sp-glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 189, 89, 0.35) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 22px 55px rgba(0, 0, 0, 0.7);
        }

        .sp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.8rem;
        }

        .sp-card-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.01em;
        }

        .sp-card-desc {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82) !important;
          line-height: 1.72;
          word-spacing: 0.02em;
        }

        .sp-pill-badge {
          padding: 0.38rem 0.95rem;
          border-radius: 999px;
          background: rgba(255, 90, 31, 0.15) !important;
          border: 1px solid rgba(255, 90, 31, 0.35) !important;
          color: #ff8a3d !important;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .sp-meta-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82) !important;
          font-weight: 600;
          margin-bottom: 0.6rem;
          line-height: 1.5;
        }

        .sp-accent-link {
          color: #ffbd59 !important;
          font-weight: 800;
          font-size: 0.96rem;
          transition: color 200ms ease;
          display: inline-block;
          margin-top: 1rem;
        }

        .sp-accent-link:hover {
          color: #ffffff !important;
          text-decoration: underline;
        }

        /* ── CELEBRITY LINEUP GRID ── */
        .sp-celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
          margin-bottom: 3.8rem;
        }

        .sp-celeb-card {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          background: rgba(27, 17, 11, 0.65) !important;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }

        .sp-celeb-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255, 90, 31, 0.5) !important;
          box-shadow: 0 22px 55px rgba(255, 90, 31, 0.35);
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
          top: 1.1rem;
          left: 1.1rem;
          right: 1.1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .sp-headliner-badge {
          padding: 0.38rem 0.95rem;
          border-radius: 999px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important;
          color: #fff !important;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .celeb-stage-tag {
          padding: 0.32rem 0.85rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.75) !important;
          backdrop-filter: blur(8px);
          color: #fff !important;
          font-size: 0.72rem;
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
          background: #ffffff !important;
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
          padding: 1.6rem;
          background: linear-gradient(180deg, transparent 35%, rgba(11, 7, 5, 0.95));
          z-index: 2;
        }

        .celeb-genre-pill {
          font-size: 0.75rem;
          color: #ffbd59 !important;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.35rem;
        }

        .sp-celeb-overlay h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          color: #fff !important;
          font-size: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        .celeb-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.85) !important;
          margin-top: 0.5rem;
        }

        /* ── COUNTDOWN BANNER ── */
        .sp-countdown-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 3.5rem auto 0;
          max-width: 860px;
          width: 100%;
          padding: 2.4rem clamp(1.5rem, 4vw, 3rem);
          background: rgba(18, 10, 6, 0.72);
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 28px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 16px 45px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 0 30px rgba(255, 90, 31, 0.12);
        }

        .sp-countdown-header {
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-countdown-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #ffbd59;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.5rem 1.35rem;
          border-radius: 999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .sp-countdown-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 10px #ff5a1f, 0 0 4px #ffbd59;
        }

        .sp-countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.9rem, 2vw, 1.6rem);
          width: 100%;
          max-width: 720px;
        }

        .sp-countdown-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(35, 20, 14, 0.85) 0%, rgba(20, 11, 7, 0.92) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.22) !important;
          border-radius: 20px;
          padding: 1.6rem 1rem 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(14px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 10px 25px rgba(0, 0, 0, 0.5);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .sp-countdown-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 14px 35px rgba(255, 90, 31, 0.35);
        }

        .sp-countdown-card strong {
          display: block;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 189, 89, 0.3);
        }

        .sp-countdown-card span {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59 !important;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .sp-countdown-glow-line {
          position: absolute;
          bottom: 0;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffbd59, transparent);
          opacity: 0.7;
        }

        /* ── PRICING / TICKET TIERS GRID (CreatorOS Style) ── */
        .sp-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .sp-pricing-card {
          background: rgba(27, 17, 11, 0.68) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: clamp(2rem, 3.5vw, 2.6rem);
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 18px 50px rgba(0, 0, 0, 0.55);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }

        .sp-pricing-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 189, 89, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 26px 65px rgba(0, 0, 0, 0.7);
        }

        .sp-featured-pricing {
          background: linear-gradient(160deg, rgba(45, 22, 12, 0.9) 0%, rgba(20, 10, 6, 0.98) 100%) !important;
          border: 1.5px solid rgba(255, 90, 31, 0.55) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 22px 65px rgba(255, 90, 31, 0.28);
          transform: scale(1.03);
        }

        .sp-featured-pricing:hover {
          transform: scale(1.03) translateY(-5px);
          border-color: #ff5a1f !important;
          box-shadow: 0 28px 75px rgba(255, 90, 31, 0.4);
        }

        .sp-pricing-popular-tag {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          box-shadow: 0 4px 18px rgba(255, 90, 31, 0.45);
          white-space: nowrap;
        }

        .sp-pricing-header {
          margin-bottom: 1.6rem;
        }

        .sp-tier-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.7rem;
        }

        .sp-pricing-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.6rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.9rem;
          letter-spacing: -0.01em;
        }

        .sp-pricing-cost strong {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .sp-pricing-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
          line-height: 1.5;
        }

        .sp-pricing-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 1.6rem;
        }

        .sp-pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          margin-bottom: 2.2rem;
        }

        .sp-pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.55;
        }

        .sp-perk-check {
          color: #ffbd59;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── CONCERT FESTIVAL PILLARS & EXPERIENCE ── */
        .sp-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .sp-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.4rem 2.2rem !important;
          border-radius: 28px !important;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(35, 19, 12, 0.84) 0%, rgba(18, 9, 6, 0.95) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.22) !important;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 18px 50px rgba(0, 0, 0, 0.65);
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-pillar-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 24px 60px rgba(255, 90, 31, 0.35);
        }

        .sp-pillar-glow-accent {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 90, 31, 0.22) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-glow-accent {
          background: radial-gradient(circle, rgba(255, 189, 89, 0.35) 0%, transparent 70%);
        }

        .sp-pillar-top {
          display: flex;
          align-items: center;
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.42rem 1.1rem;
          border-radius: 999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .sp-pillar-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(1.45rem, 2.2vw, 1.85rem);
          font-weight: 900;
          color: #ffffff !important;
          margin-bottom: 0.85rem;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.8);
          transition: color 250ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-title {
          color: #ffd36a !important;
        }

        .sp-pillar-desc {
          font-size: 0.98rem;
          color: rgba(255, 240, 225, 0.84) !important;
          line-height: 1.75;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-glow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff5a1f, #ffbd59, transparent);
          opacity: 0.4;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-glow-line {
          opacity: 1;
          height: 4px;
        }

        /* ── FESTIVAL VIBE SHOWCASE BANNER ── */
        .sp-festival-vibe-banner {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3rem;
          align-items: center;
          background: linear-gradient(135deg, rgba(42, 19, 12, 0.88) 0%, rgba(18, 9, 6, 0.96) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.3) !important;
          border-radius: 32px;
          padding: clamp(2.4rem, 4vw, 3.4rem);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 24px 70px rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .sp-vibe-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sp-vibe-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.8rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          width: fit-content;
        }

        .sp-vibe-left h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(1.8rem, 2.8vw, 2.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .sp-vibe-left p {
          font-size: 1.05rem;
          color: rgba(255, 240, 225, 0.86);
          line-height: 1.7;
          margin-bottom: 0.6rem;
        }

        .sp-vibe-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 0.4rem;
        }

        .sp-vibe-tags-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
        }

        .sp-vibe-tag {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 18px;
          font-size: 0.9rem;
          font-weight: 700;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
          cursor: default;
          backdrop-filter: blur(12px);
        }

        .sp-vibe-main {
          background: linear-gradient(135deg, rgba(48, 22, 12, 0.9) 0%, rgba(26, 12, 7, 0.95) 100%);
          border: 1px solid rgba(255, 189, 89, 0.45);
          color: #ffd36a;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .sp-vibe-secondary {
          background: rgba(20, 11, 8, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .sp-vibe-tag:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: #ffbd59 !important;
          background: linear-gradient(135deg, rgba(65, 28, 15, 0.95) 0%, rgba(35, 15, 8, 0.98) 100%) !important;
          box-shadow: 0 10px 30px rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .sp-vibe-tag-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 8px rgba(255, 189, 89, 0.4));
        }

        .sp-vibe-tag-text {
          flex: 1;
          letter-spacing: -0.01em;
        }

        .sp-vibe-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 8px #ff5a1f, 0 0 3px #ffbd59;
          flex-shrink: 0;
        }

        /* ── PAST EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; }
        .sp-past-event-card { display: flex; flex-direction: column; }
        .sp-card-footer-eq {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.4rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #ffbd59;
        }
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* ── GLOWING CONCERT TIMELINE ── */
        .sp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
          margin-top: 1rem;
        }

        .sp-timeline::before {
          content: '';
          position: absolute;
          left: 2.35rem;
          top: 1.5rem;
          bottom: 2rem;
          width: 3px;
          background: linear-gradient(180deg, #ff5a1f, #ffbd59 40%, #ec4899 80%, transparent);
          box-shadow: 0 0 14px rgba(255, 90, 31, 0.6);
          border-radius: 999px;
        }

        .sp-timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          position: relative;
        }

        .sp-timeline-node-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          z-index: 2;
        }

        .sp-timeline-icon {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #2b140d 0%, #170d09 100%) !important;
          border: 2px solid #ffbd59 !important;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px;
          box-shadow: 0 0 20px rgba(255, 189, 89, 0.4), inset 0 0 10px rgba(255, 90, 31, 0.3);
          z-index: 2;
        }

        .sp-timeline-icon-emoji {
          font-size: 1.15rem;
          line-height: 1;
        }

        .sp-timeline-year-pill {
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          font-weight: 900;
          color: #ffbd59;
          letter-spacing: 0.05em;
        }

        .sp-timeline-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(255, 189, 89, 0.6);
          animation: pulseNodeRing 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          pointer-events: none;
        }

        @keyframes pulseNodeRing {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        .sp-timeline-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 1.8rem 2.2rem !important;
        }

        .sp-timeline-item:hover .sp-timeline-content {
          border-color: rgba(255, 90, 31, 0.55) !important;
          box-shadow: 0 18px 45px rgba(255, 90, 31, 0.2);
        }

        .sp-timeline-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .sp-timeline-badge {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.28rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 90, 31, 0.18) !important;
          border: 1px solid rgba(255, 90, 31, 0.4) !important;
          color: #ff8a3d !important;
        }

        .sp-timeline-heading {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.01em;
        }

        .sp-timeline-tag {
          display: inline-flex !important;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.9rem !important;
          border-radius: 999px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          color: #ffd36a !important;
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          margin-right: 0.45rem;
          margin-bottom: 0.45rem;
        }

        .sp-timeline-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          margin-top: 0.35rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sp-timeline-footer .sp-venue-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 700;
          margin: 0;
        }

        /* ── HOTELS ── */
        .sp-hotels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        .sp-hotel-card { display: flex; flex-direction: column; overflow: hidden; padding: 0 !important; }
        .sp-hotel-img-wrap { height: 200px; overflow: hidden; }
        .sp-hotel-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
        .sp-hotel-card:hover .sp-hotel-img-wrap img { transform: scale(1.06); }
        .sp-hotel-body { padding: 1.6rem; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; }
        .sp-rating-tag { font-size: 0.8rem; font-weight: 700; color: #ffb000 !important; white-space: nowrap; background: rgba(255, 176, 0, 0.15) !important; padding: 0.25rem 0.7rem; border-radius: 999px; border: 1px solid rgba(255, 176, 0, 0.3) !important; }
        .sp-contact-text { font-size: 0.84rem; color: rgba(255, 255, 255, 0.75) !important; line-height: 1.5; }

        /* ── RESTAURANTS & DISCOUNTS ── */
        .sp-restaurants-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        .sp-discount-pill { padding: 0.35rem 0.95rem; border-radius: 999px; background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important; color: #ffffff !important; font-size: 0.74rem; font-weight: 900; letter-spacing: 0.02em; }
        .sp-code-box { display: flex; align-items: center; gap: 0.85rem; padding: 0.7rem 1.1rem; background: rgba(0, 0, 0, 0.55) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 12px; margin-top: 0.5rem; }
        .sp-code-box span { font-size: 0.85rem; color: var(--text-muted) !important; }
        .sp-code-box code { font-family: monospace; background: rgba(255, 189, 89, 0.18) !important; border: 1px solid rgba(255, 189, 89, 0.35) !important; padding: 0.3rem 0.75rem; border-radius: 7px; color: #ffbd59 !important; font-weight: 800; }

        .sp-discounts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-discount-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; }
        .sp-big-discount { font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif); font-size: 1.45rem; font-weight: 900; color: #ffbd59 !important; letter-spacing: -0.01em; }
        .sp-code-pill { font-family: monospace; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; padding: 0.35rem 0.8rem; border-radius: 8px; color: #ffffff !important; font-weight: 800; font-size: 0.85rem; }

        /* ── WORLD-CLASS FESTIVAL FACILITIES ── */
        .sp-facilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .sp-facility-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 2rem 1.7rem !important;
          position: relative;
          overflow: hidden;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 20px;
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-facility-card:hover {
          border-color: rgba(255, 189, 89, 0.45) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 90, 31, 0.15);
        }

        .sp-facility-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sp-facility-icon-orb {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 300ms ease;
        }

        .sp-facility-card:hover .sp-facility-icon-orb {
          transform: scale(1.1) rotate(5deg);
        }

        .sp-facility-icon {
          font-size: 1.45rem;
          line-height: 1;
        }

        .sp-facility-badge {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid;
        }

        .sp-facility-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .sp-facility-glow-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-facility-card:hover .sp-facility-glow-bar {
          opacity: 1;
          height: 4px;
        }

        /* ── BRAND SPONSORSHIP PACKAGES ── */
        .sp-sponsorship-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .sp-sponsor-card {
          display: flex;
          flex-direction: column;
          padding: 2.2rem 1.8rem !important;
          position: relative;
          overflow: hidden;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 22px;
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-sponsor-featured {
          border-color: rgba(255, 189, 89, 0.5) !important;
          background: linear-gradient(180deg, rgba(45, 24, 15, 0.9) 0%, rgba(20, 12, 8, 0.85) 100%) !important;
          box-shadow: 0 0 35px rgba(255, 90, 31, 0.25);
          transform: translateY(-4px);
        }

        .sp-sponsor-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 90, 31, 0.25);
        }

        .sp-sponsor-popular-tag {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #ff5a1f, #ffbd59);
          color: #0B0705;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          padding: 0.28rem 1rem;
          border-radius: 0 0 10px 10px;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(255, 90, 31, 0.5);
        }

        .sp-sponsor-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sp-sponsor-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 300ms ease;
        }

        .sp-sponsor-card:hover .sp-sponsor-icon-wrap {
          transform: scale(1.1) rotate(-6deg);
        }

        .sp-sponsor-icon {
          font-size: 1.45rem;
          line-height: 1;
        }

        .sp-sponsor-badge {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid;
        }

        .sp-sponsor-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
        }

        .sp-sponsor-price-tag {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.02em;
        }

        .sp-sponsor-tagline {
          font-size: 0.82rem;
          color: var(--text-muted) !important;
          margin-top: 0.25rem;
        }

        .sp-sponsor-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 1.2rem 0;
        }

        .sp-sponsor-perks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          margin-bottom: 1rem;
        }

        .sp-sponsor-perks li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-muted) !important;
          line-height: 1.45;
        }

        .sp-sponsor-glow-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-sponsor-card:hover .sp-sponsor-glow-bottom {
          opacity: 1;
          height: 4px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-pricing-grid,
          .sp-pillars-grid, .sp-events-grid { grid-template-columns: 1fr; gap: 1.6rem; }
          .sp-festival-vibe-banner { grid-template-columns: 1fr; gap: 2rem; }
          .sp-featured-pricing { transform: none; }
          .sp-featured-pricing:hover { transform: translateY(-4px); }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .sp-section { padding: 4rem 0; }
          .sp-container { width: min(100%, calc(100% - 1.2rem)); }
          
          /* Hero Mobile Alignment & Safe Padding (Clears Fixed Navbar) */
          .sp-hero {
            padding: calc(75px + 1.2rem) 1rem 2.8rem !important;
            min-height: auto !important;
            display: flex !important;
            align-items: flex-start !important;
          }
          .sp-hero-content {
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .sp-hero-badge {
            font-size: 0.72rem !important;
            padding: 0.35rem 0.85rem !important;
            margin-bottom: 0.9rem !important;
            letter-spacing: 0.08em !important;
            max-width: 95% !important;
          }
          .sp-hero-title {
            font-size: clamp(2.2rem, 10vw, 3.1rem) !important;
            line-height: 1.05 !important;
            margin-bottom: 1rem !important;
            letter-spacing: 0.02em !important;
            word-break: break-word !important;
          }
          .sp-hero-subtitle {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.4rem !important;
            max-width: 100% !important;
            padding: 0 0.25rem !important;
          }
          .sp-hero-sub-highlight {
            font-size: 1.0rem !important;
            line-height: 1.35 !important;
          }
          .sp-hero-sub-detail {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
          }
          .sp-hero-meta-strip {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto 1.8rem !important;
          }
          .sp-hero-meta-pill {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem 0.4rem !important;
            border-radius: 12px !important;
            width: 100% !important;
            min-width: 0 !important;
            gap: 0.2rem !important;
            box-sizing: border-box !important;
          }
          .sp-meta-header {
            display: flex !important;
            align-items: center !important;
            gap: 0.35rem !important;
          }
          .sp-hero-meta-pill strong {
            font-size: 0.74rem !important;
            letter-spacing: 0.01em !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          .sp-meta-label {
            font-size: 0.58rem !important;
            letter-spacing: 0.08em !important;
          }
          .sp-hero-actions {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 290px !important;
            gap: 0.75rem !important;
            margin: 0 auto !important;
          }
          .sp-hero-actions > * {
            width: 100% !important;
          }
          .sp-btn-ember, .sp-btn-ghost {
            width: 100% !important;
            text-align: center !important;
            padding: 0.85rem 1.4rem !important;
            font-size: 0.94rem !important;
            justify-content: center !important;
          }

          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
          .stat-card { padding: 1.2rem 0.9rem; }
          .stat-val { font-size: 1.8rem; }
          .sp-vibe-tag.sp-vibe-secondary { display: flex !important; }
          .sp-vibe-tags-grid { grid-template-columns: 1fr !important; gap: 0.65rem !important; }
          .sp-vibe-tag { font-size: 0.82rem !important; padding: 0.75rem 0.9rem !important; text-align: left; justify-content: flex-start; }
          .sp-section-title { font-size: 1.85rem !important; }
          .sp-section-subtitle { font-size: 0.94rem !important; line-height: 1.6 !important; margin-bottom: 1.4rem !important; }
          .sp-card-desc, .sp-pillar-desc { font-size: 0.88rem !important; line-height: 1.55 !important; }
          .sp-pillar-card { padding: 1.6rem 1.3rem !important; }
          .sp-facility-card { padding: 1.1rem 0.95rem !important; }
          .sp-future-card { padding: 1.2rem 1rem !important; }
          .sp-timeline-content { padding: 1.1rem 1rem !important; }
          .sp-timeline-content p.sp-card-desc { font-size: 0.8rem !important; line-height: 1.4 !important; margin-bottom: 0.6rem !important; }
          .sp-timeline-tag:nth-child(n+3) { display: none !important; }
          .sp-timeline-heading { font-size: 1.05rem !important; }
          .sp-pillar-title, .sp-facility-title { font-size: 1.05rem !important; }
          .sp-timeline::before { left: 1.3rem; }
          .sp-timeline-item { gap: 1rem; }
          .sp-timeline-node-wrap { width: 42px; height: 42px; }
          .sp-timeline-icon { width: 42px; height: 42px; }
          .sp-timeline-year-pill { font-size: 0.75rem; }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
