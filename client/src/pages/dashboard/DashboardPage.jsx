import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assetUrl } from '../../utils/assetUrl.util'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'
import PlexusNetBackground from '../../components/common/PlexusNetBackground'

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
  { name: 'Ozilla Strategy Module',                     year: '2023', description: 'Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.',                                                    highlights: ['Brand Positioning', 'Audience Research', 'Partner Onboarding'],            venue: 'Lahore Expo Center',            date: 'December 12, 2023' },
  { name: 'Ozilla Scale Module',                        year: '2024', description: 'Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.',                                                 highlights: ['Creator Collaborations', 'Sponsor Visibility', 'Live Entertainment Blocks'], venue: 'DHA Sports Club, Lahore',        date: 'November 9, 2024' },
  { name: 'Ozilla Festival Website Brief 2026',         year: '2025', description: 'Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.',                                          highlights: ['Ticketing Workflow', 'Experience Mapping', 'Marketing Readiness'],           venue: 'Gulberg Event District, Lahore', date: 'October 18, 2025' },
  { name: 'Ozilla Basand Festival',                     year: '2026', description: 'Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.',                                                    highlights: ['Cultural Performances', 'Live Music', 'Brand Activation Zones'],            venue: 'Lahore, Punjab',                date: 'March 07, 2026' },
  { name: 'Ozilla Festival 2027 Season 2',              year: '2027', description: 'Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.',                                               highlights: ['Celebrity Performances', 'Expanded Audience Program', 'Premium Experience Zones'], venue: 'Lahore, Punjab', date: 'November 14, 2027' }
]

const sponsorshipTiers = [
  { tier: 'Title Sponsor',    price: 'Premium',  perks: ['Exclusive brand naming rights', 'Stage backdrop placement', 'VIP zone branding', '30-second ad slot', 'Social media features'] },
  { tier: 'Gold Sponsor',     price: 'High',     perks: ['Brand activation zone', 'Banner placements', 'Digital features', 'Influencer mentions', 'On-ground presence'] },
  { tier: 'Silver Sponsor',   price: 'Mid',      perks: ['Logo on all materials', 'Social shoutout', 'Booth at festival', 'Feature in email campaigns'] },
  { tier: 'Media Partner',    price: 'Custom',   perks: ['Media coverage rights', 'Press passes', 'Collaborative content', 'Announcement placement'] }
]

const facilitiesList = [
  { title: 'Main Concert Stage', desc: 'World-class 100kW concert sound system, 360° laser array, and immersive sub-bass arrays.' },
  { title: 'Food & Beats Court', desc: 'Curated food street featuring artisan fusion eats, mocktails, coffee and desserts.' },
  { title: '24/7 Medical Hub',   desc: 'On-site first aid stations, paramedic support, and emergency rapid response teams.' },
  { title: 'Secure VIP Parking', desc: 'Valet and managed parking zones for general festival attendees and VIP ticket holders.' },
  { title: 'Neon Photo Booths',  desc: 'Interactive holographic backdrops, creator lighting rigs, and festival photo moments.' },
  { title: 'Full Accessibility', desc: 'Dedicated accessible viewing decks, pathways, and on-ground hospitality assistance.' },
  { title: 'Crowd Safety Squad', desc: 'Trained professional security and crowd flow management across all festival zones.' },
  { title: 'Ultra-Fast WiFi',    desc: 'High-speed gigabit Wi-Fi zones for seamless streaming, posting, and sharing moments.' }
]

const discountItems = [
  { brand: 'Street Grill Co.',  category: 'Restaurant', discount: '15% OFF', code: 'OZILLA15', desc: 'Festival combo meal with priority queue access.' },
  { brand: 'Spice District',    category: 'Restaurant', discount: '20% OFF', code: 'SPICE20',  desc: 'Family platter offer for OZilla audience.' },
  { brand: 'Urban Brew',        category: 'Cafe',       discount: 'Buy 1 Get 1', code: 'BREWBOGO', desc: 'Coffee and dessert pair for creators and attendees.' },
  { brand: 'Partner Hotels',    category: 'Hotel',      discount: '10% OFF', code: 'OZHOTEL10', desc: 'Exclusive discount on festival weekend stays.' }
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
      <section id="home" className="sp-hero" aria-label="Ozilla Festival">
        <PlexusNetBackground
          nodeColor="#EC4899"
          lineColor="236, 72, 153"
          secondaryColor="255, 90, 31"
          maxDistance={145}
          speed={0.6}
        />
        <div className="sp-hero-ambient-glow" />

        <div className="sp-hero-content">
          <div className="sp-hero-badge">
            <span>✨</span>
            <strong>OZILLA FESTIVAL 2026 · LAHORE</strong>
          </div>

          <h1 className="sp-hero-title">
            OZILLA FESTIVAL
          </h1>

          <p className="sp-hero-subtitle">
            Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound.
          </p>

          <div className="sp-hero-meta-strip">
            <span>📅 November 1, 2026</span>
            <span>📍 Lahore, Pakistan</span>
            <span>⚡ 4 Mega Stages</span>
            <span>🎟️ Official QR Passes</span>
          </div>

          <div className="sp-hero-actions">
            <a className="sp-btn-ember" href="#celebrities">
              Explore Lineup
            </a>
            <Link className="sp-btn-ghost" to="/tickets">
              Get VIP Passes
            </Link>
          </div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
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
            <p className="sp-eyebrow" style={{ marginBottom: '1.4rem' }}>Countdown to the First Beat Drop</p>
            <div className="sp-countdown-grid">
              {[['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]].map(([label, val]) => (
                <div key={label} className="sp-countdown-card">
                  <strong>{String(val).padStart(2, '0')}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 02: VIP & TICKET TIERS (CreatorOS Style) ══ */}
      <section id="vip-experience" className="sp-section sp-section-pricing" aria-label="Festival Passes">
        <div className="sp-container">
          <div className="sp-section-header" style={{ textAlign: 'center' }}>
            <span className="sp-eyebrow">CHOOSE YOUR ACCESS</span>
            <h2 className="sp-section-title">Festival Passes & VIP Tiers</h2>
            <p className="sp-section-subtitle" style={{ margin: '0 auto' }}>
              Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission.
            </p>
          </div>

          <div className="sp-pricing-grid">
            {ticketTiers.map((tier) => (
              <div
                key={tier.id}
                className={`sp-pricing-card ${tier.isFeatured ? 'sp-featured-pricing' : ''}`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 03: ABOUT US ══ */}
      <section id="about" className="sp-section sp-section-about" aria-label="About Ozilla">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">The Festival Experience</span>
            <h2 className="sp-section-title">Who We Are</h2>
          </div>

          <div className="sp-about-grid">
            <div className="sp-about-text">
              <p className="sp-lead">{ozillaProfessionalContent.about}</p>
              <p>The platform is designed around discovery, curated stage experiences, hospitality partnerships, exclusive discount access, and long-term brand collaborations.</p>
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
              <h3 style={{ marginTop: '2rem' }}>Partner Benefits</h3>
              <div className="sp-tag-cloud">
                {ozillaProfessionalContent.partnerBenefits.map(b => <span key={b} className="sp-tag sp-tag-accent">{b}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 04: PAST EVENTS ══ */}
      <section id="events" className="sp-section sp-section-events" aria-label="Past Events">
        <div className="sp-container">
          <div className="sp-section-header">
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
        </div>
      </section>

      {/* ══ SECTION 05: UPCOMING ROADMAP ══ */}
      <section id="future-events" className="sp-section sp-section-future" aria-label="Upcoming Events">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Upcoming Roadmap</span>
            <h2 className="sp-section-title">Upcoming Experiences</h2>
          </div>

          <div className="sp-future-grid">
            {futureEvents.map(ev => (
              <div key={ev.name} className="sp-glass-card sp-future-card">
                <span className="sp-pill-badge">{ev.status}</span>
                <h3 style={{ marginTop: '0.8rem' }}>{ev.name}</h3>
                <p className="sp-meta-text">📍 {ev.date} · {ev.location}</p>
                <p className="sp-card-desc" style={{ flex: 1 }}>{ev.description}</p>
                <Link to="/tickets" className="sp-accent-link">Get Tickets →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 06: HISTORY TIMELINE ══ */}
      <section id="history" className="sp-section sp-section-history" aria-label="Festival History">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Festival Journey</span>
            <h2 className="sp-section-title">Our Legacy & Timeline</h2>
          </div>

          <div className="sp-timeline">
            {historyEvents.map((ev, idx) => (
              <div key={ev.name} className="sp-timeline-item">
                <div className="sp-timeline-icon">{idx + 1}</div>
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
        </div>
      </section>

      {/* ══ SECTION 07: HOTELS ══ */}
      <section id="hotels" className="sp-section sp-section-hotels" aria-label="Partner Hotels">
        <div className="sp-container">
          <div className="sp-section-header">
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
        </div>
      </section>

      {/* ══ SECTION 08: RESTAURANTS ══ */}
      <section id="restaurants" className="sp-section sp-section-dining" aria-label="Dining Hub">
        <div className="sp-container">
          <div className="sp-section-header">
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
        </div>
      </section>

      {/* ══ SECTION 09: DISCOUNTS & VOUCHERS ══ */}
      <section id="discounts" className="sp-section sp-section-deals" aria-label="Promo Vouchers">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Exclusive Member Deals</span>
            <h2 className="sp-section-title">Festival Promo Vouchers</h2>
          </div>

          <div className="sp-discounts-grid">
            {discountItems.map(d => (
              <div key={d.brand} className="sp-glass-card sp-voucher-card">
                <span className="sp-eyebrow" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>{d.category}</span>
                <h3 style={{ marginTop: '0.2rem', fontSize: '1.3rem' }}>{d.brand}</h3>
                <p className="sp-card-desc" style={{ margin: '0.6rem 0 1.2rem' }}>{d.desc}</p>
                <div className="sp-discount-footer">
                  <span className="sp-big-discount">{d.discount}</span>
                  <code className="sp-code-pill">{d.code}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 10: VENUE FACILITIES ══ */}
      <section id="facilities" className="sp-section sp-section-facilities" aria-label="Facilities">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow">Festival Venue</span>
            <h2 className="sp-section-title">World-Class Facilities</h2>
          </div>

          <div className="sp-facilities-grid">
            {facilitiesList.map(f => (
              <div key={f.title} className="sp-glass-card sp-facility-card">
                <h3>{f.title}</h3>
                <p className="sp-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 11: SPONSORSHIPS ══ */}
      <section id="sponsorship" className="sp-section sp-section-sponsorship" aria-label="Sponsorships">
        <div className="sp-container">
          <div className="sp-section-header" style={{ textAlign: 'center' }}>
            <span className="sp-eyebrow">Brand Partnerships</span>
            <h2 className="sp-section-title">Sponsorship Packages</h2>
            <p className="sp-section-subtitle" style={{ margin: '0 auto' }}>
              Be part of Lahore's biggest music festival. Gain massive on-ground visibility and digital engagement.
            </p>
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
                <Link to="/tickets" className="sp-btn-ghost" style={{ textAlign: 'center', marginTop: '1.2rem' }}>Get Partner Pass</Link>
              </div>
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
          background: #0B0705 !important;
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
        }

        /* ── HERO SECTION ── */
        .sp-hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 15%, rgba(255, 90, 31, 0.28) 0%, rgba(85, 14, 14, 0.45) 45%, #0B0705 85%) !important;
          padding: clamp(7rem, 12vw, 10rem) 1.5rem clamp(5rem, 8vw, 7rem);
        }

        .sp-hero-ambient-glow {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 138, 61, 0.28) 0%, rgba(236, 72, 153, 0.16) 50%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
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
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.2rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.02;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 14px 45px rgba(0, 0, 0, 0.85);
          background: linear-gradient(180deg, #ffffff 45%, #ffd36a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sp-hero-subtitle {
          max-width: 740px;
          font-size: clamp(1.08rem, 2vw, 1.3rem);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.75;
          margin-bottom: 2.2rem;
          word-spacing: 0.03em;
        }

        .sp-hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.8rem;
        }

        .sp-hero-meta-strip span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1.15rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.01em;
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
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 3.5vw, 2.7rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.05;
          margin-bottom: 0.4rem;
          letter-spacing: -0.03em;
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
        }

        .sp-eyebrow {
          display: block;
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .sp-section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.3rem, 4.8vw, 3.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #ffffff !important;
          margin-bottom: 1rem;
        }

        .sp-section-subtitle {
          max-width: 720px;
          font-size: 1.1rem;
          color: var(--text-muted) !important;
          line-height: 1.75;
          word-spacing: 0.02em;
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
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.02em;
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
          font-family: 'Outfit', sans-serif;
          color: #fff !important;
          font-size: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .celeb-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.85) !important;
          margin-top: 0.5rem;
        }

        /* ── COUNTDOWN ── */
        .sp-countdown {
          text-align: center;
          padding: 2.5rem 0 0;
        }

        .sp-countdown-grid {
          display: inline-grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          max-width: 640px;
          width: 100%;
        }

        .sp-countdown-card {
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 20px;
          padding: 1.4rem 1.5rem;
          text-align: center;
          backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .sp-countdown-card strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3.8vw, 2.8rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .sp-countdown-card span {
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59 !important;
          text-transform: uppercase;
          letter-spacing: 0.14em;
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
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.9rem;
          letter-spacing: -0.02em;
        }

        .sp-pricing-cost strong {
          font-family: 'Outfit', sans-serif;
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
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

        /* ── ABOUT ── */
        .sp-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }
        .sp-lead { font-size: 1.2rem; line-height: 1.78; color: #ffffff !important; margin-bottom: 1.2rem; word-spacing: 0.02em; }
        .sp-about-text p { color: var(--text-muted) !important; line-height: 1.78; margin-bottom: 1.6rem; word-spacing: 0.02em; }
        .sp-journey-steps { display: flex; flex-direction: column; gap: 0.95rem; }
        .sp-journey-step { display: flex; align-items: center; gap: 1.1rem; padding: 0.95rem 1.3rem; background: rgba(27, 17, 11, 0.65) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 16px; }
        .sp-step-num { width: 30px; height: 30px; background: #ffbd59 !important; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 0.88rem; color: #101819 !important; flex-shrink: 0; }
        .sp-about-features h3 { font-family: 'Outfit', sans-serif; font-size: 1.15rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff !important; margin-bottom: 0.9rem; }
        .sp-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .sp-tag { display: inline-block; padding: 0.45rem 1rem; border-radius: 999px; background: rgba(255, 255, 255, 0.06) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; color: #ffffff !important; font-size: 0.85rem; font-weight: 600; }
        .sp-tag-accent { background: rgba(255, 90, 31, 0.15) !important; border: 1px solid rgba(255, 90, 31, 0.35) !important; color: #ff8a3d !important; }

        /* ── EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; }
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* ── TIMELINE ── */
        .sp-timeline { position: relative; display: flex; flex-direction: column; gap: 2rem; }
        .sp-timeline::before { content: ''; position: absolute; left: 2.2rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.25), transparent); }
        .sp-timeline-item { display: flex; gap: 1.8rem; align-items: flex-start; }
        .sp-timeline-icon { width: 46px; height: 46px; flex-shrink: 0; background: #ffbd59 !important; border-radius: 50%; display: grid; place-items: center; font-size: 1.05rem; font-weight: 900; color: #101819 !important; z-index: 1; box-shadow: 0 0 22px rgba(0, 0, 0, 0.4); }
        .sp-timeline-content { flex: 1; }
        .sp-year-highlight { font-size: 1.05rem; color: #ffbd59 !important; font-weight: 800; }
        .sp-venue-text { font-size: 0.86rem; color: #ffffff !important; opacity: 0.9; font-weight: 600; margin-top: 0.75rem; }

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
        .sp-big-discount { font-family: 'Outfit', sans-serif; font-size: 1.45rem; font-weight: 900; color: #ffbd59 !important; }
        .sp-code-pill { font-family: monospace; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; padding: 0.35rem 0.8rem; border-radius: 8px; color: #ffffff !important; font-weight: 800; font-size: 0.85rem; }

        /* ── FACILITIES ── */
        .sp-facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-facility-card { text-align: center; padding: 2.2rem 1.6rem !important; }

        /* ── SPONSORSHIP ── */
        .sp-sponsorship-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-sponsor-card { display: flex; flex-direction: column; gap: 1.1rem; }
        .sp-sponsor-perks { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; flex: 1; }
        .sp-sponsor-perks li { display: flex; align-items: flex-start; gap: 0.7rem; font-size: 0.92rem; color: var(--text-muted) !important; line-height: 1.5; }
        .sp-check { color: #ffbd59 !important; font-weight: 900; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-pricing-grid { grid-template-columns: 1fr; gap: 1.6rem; }
          .sp-featured-pricing { transform: none; }
          .sp-featured-pricing:hover { transform: translateY(-4px); }
          .sp-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .sp-section { padding: 4.5rem 0; }
          .sp-container { width: min(100%, calc(100% - 1.5rem)); }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
          .stat-card { padding: 1.2rem 0.9rem; }
          .stat-val { font-size: 1.8rem; }
          .sp-hero-title { font-size: 2.9rem; }
          .sp-hero-content { padding: 4.5rem 1rem 2.5rem; }
          .sp-hero-actions { flex-direction: column; width: 100%; max-width: 290px; gap: 0.85rem; }
          .sp-btn-ember, .sp-btn-ghost { width: 100%; text-align: center; padding: 0.9rem 1.8rem; }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .sp-countdown-card { padding: 1rem 0.85rem; }
          .sp-timeline::before { left: 1rem; }
          .sp-timeline-icon { width: 36px; height: 36px; font-size: 0.9rem; }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
