import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'

const heroImage = '/assets/logo.jpeg'

const highlights = [
  {
    icon: 'LM',
    title: 'Live Music',
    description: 'High-energy stage nights with immersive sound, lights, and crowd moments.'
  },
  {
    icon: 'CS',
    title: 'Celebrity Singers',
    description: 'A curated lineup of crowd-favorite artists for a premium festival experience.'
  },
  {
    icon: 'EN',
    title: 'Entertainment',
    description: 'Brand zones, creators, food streets, games, activations, and social experiences.'
  },
  {
    icon: 'LH',
    title: 'Luxury Hotels',
    description: 'Recommended Lahore stays for visitors, partners, performers, and teams.'
  },
  {
    icon: 'TB',
    title: 'Easy Ticket Booking',
    description: 'A simple ticket portal with user details, payment proof, QR tickets, and history.'
  },
  {
    icon: 'BP',
    title: 'Brand Partners',
    description: 'High-visibility sponsorship and collaboration opportunities for premium brands.'
  }
]

const stats = [
  { value: 5000, suffix: '+', label: 'Visitors' },
  { value: 50, suffix: '+', label: 'Artists' },
  { value: 100, suffix: '+', label: 'Partners' },
  { value: 2, suffix: '', label: 'Festival Days' }
]

const reasons = [
  'Amazing Performances',
  'International Stage Energy',
  'Food Festival Culture',
  'Safe Family Environment',
  'Premium Guest Experience',
  'Exclusive Partner Discounts'
]

const upcomingEvents = [
  {
    title: 'Ozilla Festival 2026',
    date: '2026',
    description: 'A premium Lahore festival experience built around music, food, creators, and partners.'
  },
  {
    title: 'Future Events',
    date: 'Coming Soon',
    description: 'Upcoming brand activations, entertainment nights, and community experiences.'
  },
  {
    title: 'Celebrity Night',
    date: 'Live Stage',
    description: 'A powerful stage experience featuring celebrity performers and crowd moments.'
  }
]

const celebrityPreview = [
  { name: 'Talwinder', image: '/assets/ozilla/talwinder.jpg' },
  { name: 'Bohemia', image: '/assets/ozilla/Bohemia.jpg' },
  { name: 'Hassan Raheem', image: '/assets/ozilla/hassan-raheem.jpg' },
  { name: 'Imran Khan', image: '/assets/ozilla/Imran-Khan.jpg' }
]

const partnerItems = [
  'Restaurants',
  'Hotels',
  'Creators',
  'Sponsors',
  'Media',
  'Brands',
  'Food Partners',
  'Venue Partners'
]

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let frameId = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 1200
        const start = performance.now()

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(value * eased))

          if (progress < 1) {
            frameId = requestAnimationFrame(animate)
          }
        }

        frameId = requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function DashboardPage() {
  return (
    <main className="home-premium">
      <section className="home-hero" aria-label="Ozilla Festival 2026">
        <img className="home-hero-media" src={heroImage} alt="Ozilla Festival stage" />
        <div className="home-hero-overlay" />
        <div className="home-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="home-hero-content">
          <p className="home-kicker">LAHORE PUNJAB</p>
          <h1>OZILLA FESTIVAL 2026</h1>
          <p className="home-hero-copy">
            Experience music, entertainment, culture and unforgettable moments.
          </p>
          <div className="home-hero-actions">
            <Link className="home-btn home-btn-primary" to="/events">
              Explore Events
            </Link>
            <Link className="home-btn home-btn-secondary" to="/tickets">
              Purchase Tickets
            </Link>
          </div>
          <div className="home-hero-badges" aria-label="Festival highlights">
            <span>2026 Lahore</span>
            <span>Live Music</span>
            <span>Family Experience</span>
          </div>
        </div>

        <div className="home-scroll-indicator" aria-hidden="true">
          <span />
          Scroll
        </div>
      </section>

      <div className="home-hero-divider" aria-hidden="true" />

      <section className="home-section home-intro-section">
        <div className="home-section-heading home-center-heading">
          <p className="home-eyebrow">Festival Details</p>
          <h2>Future of <span>Entertainment</span></h2>
          <p>
            {ozillaProfessionalContent.objective}
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Highlights</p>
          <h2>Everything visitors expect from a premium festival.</h2>
        </div>
        <div className="home-highlight-grid">
          {highlights.map((item) => (
            <article key={item.title} className="home-highlight-card">
              <div className="home-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-stats-section">
        <div className="home-stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="home-stat-card">
              <strong><CountUp value={item.value} suffix={item.suffix} /></strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-split-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Why Choose Ozilla</p>
          <h2>Designed for music lovers, families, creators and brands.</h2>
          <p>
            A safe, premium and highly shareable event experience with live performances,
            food culture, partner discounts and powerful brand moments.
          </p>
        </div>
        <div className="home-reason-grid">
          {reasons.map((reason) => (
            <div key={reason} className="home-reason-card">
              <span>Explore</span>
              {reason}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Upcoming Events</p>
          <h2>Festival moments coming next.</h2>
        </div>
        <div className="home-event-grid">
          {upcomingEvents.map((event) => (
            <article key={event.title} className="home-event-card">
              <div>
                <span>{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <Link to="/events">View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <p className="home-eyebrow">Celebrity Preview</p>
          <h2>Featured voices for the Ozilla stage.</h2>
        </div>
        <div className="home-celebrity-grid">
          {celebrityPreview.map((artist) => (
            <article key={artist.name} className="home-celebrity-card">
              <img src={artist.image} alt={artist.name} loading="lazy" />
              <div className="home-celebrity-overlay">
                <h3>{artist.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-partner-section">
        <div className="home-section-heading home-center-heading">
          <p className="home-eyebrow">Partners</p>
          <h2>Built for brands that want real audience attention.</h2>
        </div>
        <div className="home-partner-marquee">
          <div className="home-partner-track">
            {[...partnerItems, ...partnerItems].map((partner, index) => (
              <span key={`${partner}-${index}`}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .home-premium {
          --home-deep: #041719;
          --home-ink: #101819;
          --home-muted: #55706f;
          --home-card: rgba(255, 250, 242, 0.86);
          --home-gold: #ffb000;
          --home-wine: #39132f;
          color: var(--home-ink);
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 18%, rgba(255, 176, 0, 0.08), transparent 22rem),
            radial-gradient(circle at 90% 42%, rgba(7, 51, 50, 0.12), transparent 24rem),
            linear-gradient(180deg, #fffaf4 0%, #f7eee8 48%, #fffaf4 100%);
        }

        .home-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(13rem, 20vw, 16rem) 1.25rem 5rem;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 40%, rgba(255, 176, 0, 0.2), transparent 18rem),
            radial-gradient(circle at 18% 78%, rgba(255, 77, 46, 0.18), transparent 18rem),
            radial-gradient(circle at 82% 18%, rgba(11, 79, 76, 0.72), transparent 24rem),
            linear-gradient(135deg, #020b0d, #041719 48%, #39132f);
        }

        .home-hero::before,
        .home-hero::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .home-hero::before {
          inset: 9%;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255, 176, 0, 0.28), transparent 48%),
            radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 60%);
          filter: blur(46px);
          animation: homeAuraDrift 10s ease-in-out infinite;
        }

        .home-hero::after {
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.1) 42%, transparent 57%),
            radial-gradient(ellipse at center, transparent 34%, rgba(0, 0, 0, 0.78) 100%);
          mix-blend-mode: screen;
          opacity: 0.32;
          animation: homeLightSweep 9s ease-in-out infinite;
        }

        .home-hero-media {
          position: absolute;
          left: 50%;
          top: 48%;
          width: min(78vw, 860px);
          height: min(70vh, 680px);
          object-fit: contain;
          opacity: 0.54;
          filter: saturate(1.2) contrast(1.08) drop-shadow(0 0 42px rgba(255, 176, 0, 0.22));
          transform: translate(-50%, -50%) scale(1);
          animation: homeLogoKenBurns 16s ease-in-out infinite alternate;
          z-index: -3;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 38%, rgba(255, 176, 0, 0.08), transparent 20rem),
            linear-gradient(90deg, rgba(2, 12, 12, 0.94), rgba(2, 12, 12, 0.44), rgba(2, 12, 12, 0.88)),
            linear-gradient(180deg, rgba(2, 12, 12, 0.26), rgba(2, 12, 12, 0.9));
          z-index: -2;
        }

        .home-particles span {
          position: absolute;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.86);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.82);
          animation: homeFloat 8s ease-in-out infinite;
          z-index: -1;
        }

        .home-particles span:nth-child(1) { left: 12%; top: 24%; }
        .home-particles span:nth-child(2) { right: 18%; top: 20%; animation-delay: 1.5s; }
        .home-particles span:nth-child(3) { left: 24%; bottom: 22%; animation-delay: 3s; }
        .home-particles span:nth-child(4) { right: 14%; bottom: 18%; animation-delay: 4.5s; }

        .home-hero-content {
          width: min(1120px, 100%);
          color: #fff;
          position: relative;
          z-index: 2;
          animation: homeRise 900ms ease both;
        }

        .home-hero-content::before {
          content: '';
          position: absolute;
          left: -4%;
          top: 11%;
          width: min(54vw, 680px);
          height: 52%;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255, 176, 0, 0.18), transparent 62%),
            radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 55%);
          filter: blur(42px);
          pointer-events: none;
          z-index: -1;
        }

        .home-kicker,
        .home-eyebrow {
          color: var(--home-gold);
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .home-hero h1 {
          max-width: 920px;
          margin: 0.7rem 0 1rem;
          font-size: clamp(3.4rem, 10vw, 9rem);
          line-height: 0.88;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
          text-shadow:
            0 1px 0 rgba(255, 255, 255, 0.1),
            0 28px 80px rgba(0, 0, 0, 0.42);
        }

        .home-hero-copy {
          max-width: 620px;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1.08rem, 2vw, 1.45rem);
          line-height: 1.65;
        }

        .home-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .home-hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1.25rem;
        }

        .home-hero-badges span {
          display: inline-flex;
          align-items: center;
          min-height: 2.2rem;
          padding: 0 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(16px);
        }

        .home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          font-weight: 900;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .home-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.34) 45%, transparent 72%);
          transform: translateX(-120%);
          transition: transform 520ms ease;
          z-index: -1;
        }

        .home-btn:hover {
          transform: translateY(-3px);
        }

        .home-btn:hover::before {
          transform: translateX(120%);
        }

        .home-btn-primary {
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          color: #111;
          box-shadow: 0 18px 35px rgba(255, 126, 0, 0.25);
        }

        .home-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .home-scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 1.4rem;
          transform: translateX(-50%);
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .home-scroll-indicator span {
          width: 1px;
          height: 2.8rem;
          background: linear-gradient(180deg, transparent, #ffb000, transparent);
          animation: homePulse 1.7s ease-in-out infinite;
        }

        .home-hero-divider {
          width: min(1180px, calc(100% - 2rem));
          height: 1px;
          margin: -1px auto 0;
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.55), rgba(11, 79, 76, 0.32), transparent);
          position: relative;
          z-index: 3;
        }

        .home-hero-divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(62vw, 680px);
          height: 5.5rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 68%);
          filter: blur(22px);
          transform: translate(-50%, -50%);
        }

        .home-section,
        .home-stats-section,
        .home-partner-section,
        .home-cta-section {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) 0;
          position: relative;
          isolation: isolate;
        }

        .home-section::before,
        .home-partner-section::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: min(70vw, 820px);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(11, 79, 76, 0.18), rgba(255, 176, 0, 0.28), transparent);
        }

        .home-section::after {
          content: '';
          position: absolute;
          inset: 12% auto auto 50%;
          width: min(72vw, 860px);
          height: 18rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.055), transparent 68%);
          filter: blur(28px);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: -1;
        }

        .home-intro-section {
          padding-bottom: 2rem;
        }

        .home-section-heading {
          max-width: 760px;
          margin-bottom: 2rem;
        }

        .home-center-heading {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .home-section-heading h2,
        .home-cta-section h2 {
          margin-top: 0.45rem;
          color: var(--home-ink);
          font-size: clamp(2.2rem, 5.5vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .home-section-heading h2 span {
          color: #ff6b1a;
        }

        .home-section-heading p:not(.home-eyebrow) {
          margin-top: 1rem;
          color: var(--home-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .home-highlight-grid,
        .home-reason-grid,
        .home-event-grid,
        .home-celebrity-grid {
          display: grid;
          gap: 1rem;
        }

        .home-highlight-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .home-highlight-card {
          grid-column: span 1;
          min-height: 240px;
          padding: 1.25rem;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 250, 245, 0.92), rgba(246, 238, 232, 0.74));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .home-highlight-card::before,
        .home-event-card::before,
        .home-reason-card::before,
        .home-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 176, 0, 0.44), transparent 34%, rgba(11, 79, 76, 0.2));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          pointer-events: none;
          opacity: 0;
          transition: opacity 220ms ease;
          z-index: 2;
        }

        .home-highlight-card::after {
          content: '';
          position: absolute;
          inset: -40% -20% auto;
          height: 7rem;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.48), transparent);
          transform: translateX(-120%) rotate(8deg);
          transition: transform 620ms ease;
          pointer-events: none;
        }

        .home-highlight-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.55);
          box-shadow: 0 28px 65px rgba(18, 34, 34, 0.14);
        }

        .home-highlight-card:hover::before,
        .home-event-card:hover::before,
        .home-reason-card:hover::before,
        .home-stat-card:hover::before {
          opacity: 1;
        }

        .home-highlight-card:hover::after {
          transform: translateX(130%) rotate(8deg);
        }

        .home-card-icon {
          width: 3.25rem;
          height: 3.25rem;
          display: grid;
          place-items: center;
          margin-bottom: 1.6rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          color: #ffd36a;
          font-weight: 900;
        }

        .home-highlight-card h3,
        .home-event-card h3 {
          color: var(--home-ink);
          font-size: 1.35rem;
          margin-bottom: 0.65rem;
        }

        .home-highlight-card p,
        .home-event-card p {
          color: var(--home-muted);
          line-height: 1.65;
        }

        .home-stats-section {
          padding-top: 1rem;
          padding-bottom: 2rem;
        }

        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          padding: 1rem;
          border-radius: 30px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 24px 70px rgba(2, 11, 13, 0.22);
          position: relative;
          overflow: hidden;
        }

        .home-stats-grid::before {
          content: '';
          position: absolute;
          inset: -55% auto auto -12%;
          width: 45%;
          height: 140%;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.12), transparent);
          transform: rotate(16deg);
          animation: homeStatsShine 8s ease-in-out infinite;
        }

        .home-stat-card {
          min-height: 150px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, background 220ms ease;
        }

        .home-stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.12);
        }

        .home-stat-card strong {
          display: block;
          color: #ffd36a;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 1;
        }

        .home-stat-card span {
          color: rgba(255, 255, 255, 0.75);
          font-weight: 700;
        }

        .home-split-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
        }

        .home-reason-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .home-reason-card {
          min-height: 120px;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1.2rem;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 45px rgba(18, 34, 34, 0.08);
          font-weight: 900;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .home-reason-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 24px 58px rgba(18, 34, 34, 0.13);
        }

        .home-reason-card span {
          min-width: 5.7rem;
          height: 2.45rem;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb000, #ff6b1a);
          color: #111;
          font-size: 0.76rem;
          box-shadow: 0 12px 26px rgba(255, 176, 0, 0.22);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .home-reason-card:hover span {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(255, 176, 0, 0.34);
        }

        .home-event-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .home-event-card {
          overflow: hidden;
          border-radius: 28px;
          background: #fffaf5;
          box-shadow: 0 22px 58px rgba(18, 34, 34, 0.1);
          position: relative;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .home-event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 72px rgba(18, 34, 34, 0.16);
        }

        .home-event-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
          transition: transform 520ms ease, filter 520ms ease;
        }

        .home-event-card:hover img {
          transform: scale(1.06);
          filter: saturate(1.12) contrast(1.06);
        }

        .home-event-card div {
          padding: 1.25rem;
        }

        .home-event-card span {
          display: inline-flex;
          margin-bottom: 0.75rem;
          color: #9a3b0b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.76rem;
        }

        .home-event-card a {
          display: inline-flex;
          margin-top: 1.1rem;
          color: #39132f;
          font-weight: 900;
          position: relative;
        }

        .home-event-card a::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffb000, #ff6b1a);
          transform: scaleX(0.3);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .home-event-card a:hover::after {
          transform: scaleX(1);
        }

        .home-celebrity-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .home-celebrity-card {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          border-radius: 26px;
          background: #111;
          box-shadow: 0 25px 60px rgba(18, 34, 34, 0.16);
          isolation: isolate;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .home-celebrity-card::after,
        .home-gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 42%);
          opacity: 0;
          transition: opacity 260ms ease;
          pointer-events: none;
          z-index: 2;
        }

        .home-celebrity-card img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 420ms ease;
        }

        .home-celebrity-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.25rem;
          background: linear-gradient(180deg, transparent 36%, rgba(2, 10, 10, 0.92));
          opacity: 0;
          transition: opacity 260ms ease;
        }

        .home-celebrity-overlay h3 {
          color: #fff;
          font-size: 1.45rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .home-celebrity-card:hover img {
          transform: scale(1.08);
        }

        .home-celebrity-card:hover .home-celebrity-overlay {
          opacity: 1;
        }

        .home-celebrity-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 34px 78px rgba(18, 34, 34, 0.22);
        }

        .home-celebrity-card:hover::after,
        .home-gallery-item:hover::after {
          opacity: 1;
        }

        .home-gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 170px;
          gap: 1rem;
        }

        .home-gallery-item {
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.1);
          position: relative;
          isolation: isolate;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .home-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 420ms ease, filter 420ms ease;
        }

        .home-gallery-item:hover img {
          transform: scale(1.08);
          filter: saturate(1.12) contrast(1.08);
        }

        .home-gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 70px rgba(18, 34, 34, 0.16);
        }

        .home-gallery-item-1,
        .home-gallery-item-4 {
          grid-column: span 3;
          grid-row: span 2;
        }

        .home-gallery-item-2,
        .home-gallery-item-3,
        .home-gallery-item-5,
        .home-gallery-item-6 {
          grid-column: span 3;
        }

        .home-partner-section {
          overflow: hidden;
        }

        .home-partner-marquee {
          overflow: hidden;
          padding: 1rem;
          border-radius: 28px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 24px 65px rgba(2, 11, 13, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-partner-track {
          display: inline-flex;
          min-width: max-content;
          gap: 1rem;
          animation: homePartnerMove 24s linear infinite;
        }

        .home-partner-track span {
          min-width: 170px;
          padding: 1rem 1.25rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-align: center;
          font-weight: 900;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-cta-section {
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          min-height: 520px;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          border-radius: 36px;
          text-align: center;
          color: #fff;
          background: #051615;
          box-shadow: 0 30px 80px rgba(18, 34, 34, 0.18);
          isolation: isolate;
        }

        .home-cta-section img {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(82%, 760px);
          height: 82%;
          object-fit: contain;
          opacity: 0.34;
          filter: saturate(1.24) contrast(1.08) blur(0.2px) drop-shadow(0 0 48px rgba(255, 176, 0, 0.2));
          transform: translate(-50%, -50%);
          animation: homeCtaLogoFloat 14s ease-in-out infinite alternate;
          z-index: -2;
        }

        .home-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 44%, rgba(255, 176, 0, 0.18), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.92), rgba(7, 51, 50, 0.78), rgba(57, 19, 47, 0.84)),
            radial-gradient(ellipse at center, transparent 36%, rgba(0, 0, 0, 0.72));
          z-index: -1;
        }

        .home-cta-section::after {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(110deg, transparent 34%, rgba(255, 255, 255, 0.1) 48%, transparent 62%);
          transform: translateX(-24%);
          animation: homeLightSweep 11s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        .home-cta-section h2 {
          color: #fff;
          max-width: 860px;
        }

        .home-cta-section .home-btn-secondary {
          border-color: rgba(255, 255, 255, 0.5);
        }

        @keyframes homeRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-22px) scale(1.25);
            opacity: 1;
          }
        }

        @keyframes homePulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.75); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @keyframes homePartnerMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes homeLogoKenBurns {
          from {
            transform: translate(-50%, -50%) scale(0.98) rotate(-0.8deg);
          }
          to {
            transform: translate(-50%, -50%) scale(1.08) rotate(0.8deg);
          }
        }

        @keyframes homeAuraDrift {
          0%, 100% {
            transform: translate3d(-2%, 0, 0) scale(0.94);
            opacity: 0.76;
          }
          50% {
            transform: translate3d(3%, -2%, 0) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes homeLightSweep {
          0%, 100% {
            opacity: 0.18;
            transform: translateX(-18%) rotate(0.001deg);
          }
          50% {
            opacity: 0.44;
            transform: translateX(18%) rotate(0.001deg);
          }
        }

        @keyframes homeCtaLogoFloat {
          from {
            transform: translate(-50%, -50%) scale(0.98);
          }
          to {
            transform: translate(-50%, -52%) scale(1.05);
          }
        }

        @keyframes homeStatsShine {
          0%, 100% {
            transform: translateX(-55%) rotate(16deg);
            opacity: 0;
          }
          35%, 58% {
            opacity: 0.9;
          }
          70% {
            transform: translateX(290%) rotate(16deg);
            opacity: 0;
          }
        }

        @supports (animation-timeline: view()) {
          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            animation: homeViewRise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 4% cover 26%;
          }

          .home-highlight-card,
          .home-reason-card,
          .home-event-card,
          .home-celebrity-card,
          .home-gallery-item {
            animation: homeViewScale 640ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 22%;
          }
        }

        @keyframes homeViewRise {
          from {
            opacity: 0.55;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeViewScale {
          from {
            opacity: 0.5;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1024px) {
          .home-highlight-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-stats-grid,
          .home-split-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .home-hero {
            min-height: 92vh;
            justify-content: flex-start;
            padding-top: 12rem;
          }

          .home-hero-media {
            width: min(94vw, 520px);
            height: min(54vh, 460px);
            top: 34%;
            opacity: 0.46;
          }

          .home-hero-actions {
            flex-direction: column;
          }

          .home-btn {
            width: 100%;
          }

          .home-hero-badges {
            gap: 0.5rem;
          }

          .home-hero-badges span {
            min-height: 2rem;
            font-size: 0.7rem;
            padding: 0 0.75rem;
          }

          .home-highlight-grid,
          .home-stats-grid,
          .home-split-section,
          .home-reason-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: 1fr;
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(100% - 1rem, 1180px);
          }

          .home-celebrity-card {
            min-height: 340px;
          }

          .home-gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 230px;
          }

          .home-gallery-item-1,
          .home-gallery-item-2,
          .home-gallery-item-3,
          .home-gallery-item-4,
          .home-gallery-item-5,
          .home-gallery-item-6 {
            grid-column: span 1;
            grid-row: span 1;
          }

          .home-cta-section {
            border-radius: 26px;
            min-height: 430px;
            padding: 2rem 1rem;
          }

          .home-cta-section img {
            width: 94%;
            height: 72%;
            opacity: 0.28;
          }
        }

        @media (min-width: 1440px) {
          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(1280px, calc(100% - 4rem));
          }

          .home-hero-content {
            width: min(1240px, calc(100% - 4rem));
          }

          .home-highlight-card {
            min-height: 260px;
          }
        }

        @media (max-width: 1366px) {
          .home-hero h1 {
            font-size: clamp(3.2rem, 9vw, 7.8rem);
          }

          .home-hero-media {
            width: min(76vw, 780px);
          }
        }

        @media (max-width: 1024px) {
          .home-hero {
            min-height: 100svh;
            padding: clamp(11rem, 17vw, 13rem) 1.15rem 4.5rem;
          }

          .home-hero-content {
            width: min(920px, 100%);
          }

          .home-hero h1 {
            max-width: 760px;
            font-size: clamp(3rem, 10vw, 6.4rem);
          }

          .home-hero-copy {
            max-width: 560px;
            font-size: clamp(1rem, 2.4vw, 1.25rem);
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            padding: clamp(3.5rem, 7vw, 5.25rem) 0;
          }

          .home-section-heading {
            max-width: 680px;
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(2rem, 6vw, 4rem);
          }

          .home-highlight-card,
          .home-event-card,
          .home-reason-card {
            border-radius: 22px;
          }

          .home-event-card img {
            height: clamp(210px, 28vw, 260px);
          }

          .home-celebrity-card {
            min-height: clamp(320px, 46vw, 420px);
          }
        }

        @media (max-width: 767px) {
          .home-hero {
            min-height: 100svh;
            align-items: center;
            justify-content: center;
            padding: clamp(9rem, 30vw, 11.25rem) 1rem 3.75rem;
          }

          .home-hero-content {
            text-align: left;
          }

          .home-hero-content::before {
            left: 50%;
            top: 16%;
            width: 92vw;
            height: 46%;
            transform: translateX(-50%);
          }

          .home-hero h1 {
            max-width: 100%;
            font-size: clamp(3rem, 17vw, 5.4rem);
            line-height: 0.88;
            letter-spacing: -0.065em;
          }

          .home-hero-copy {
            max-width: 36rem;
            font-size: clamp(0.98rem, 4vw, 1.12rem);
            line-height: 1.58;
          }

          .home-hero-media {
            width: min(108vw, 560px);
            height: min(52vh, 430px);
            top: 38%;
          }

          .home-scroll-indicator {
            bottom: 0.9rem;
          }

          .home-section-heading {
            margin-bottom: 1.45rem;
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(2.15rem, 12vw, 3.6rem);
            line-height: 0.96;
          }

          .home-section-heading p:not(.home-eyebrow) {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .home-highlight-card {
            min-height: 210px;
            padding: 1.1rem;
          }

          .home-card-icon {
            width: 3rem;
            height: 3rem;
            margin-bottom: 1.25rem;
          }

          .home-stats-grid {
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 24px;
          }

          .home-stat-card {
            min-height: 132px;
            border-radius: 18px;
          }

          .home-reason-card {
            min-height: 104px;
            padding: 1rem;
          }

          .home-event-card img {
            height: clamp(210px, 58vw, 280px);
          }

          .home-celebrity-card {
            min-height: clamp(330px, 92vw, 430px);
            border-radius: 22px;
          }

          .home-gallery-grid {
            gap: 0.75rem;
          }

          .home-partner-marquee {
            border-radius: 22px;
            padding: 0.75rem;
          }

          .home-partner-track span {
            min-width: 145px;
            padding: 0.85rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .home-hero {
            padding-left: 0.85rem;
            padding-right: 0.85rem;
          }

          .home-hero h1 {
            font-size: clamp(2.7rem, 16.5vw, 4.5rem);
          }

          .home-hero-actions {
            gap: 0.7rem;
            margin-top: 1.5rem;
          }

          .home-btn {
            min-height: 3rem;
            padding: 0 1.05rem;
            font-size: 0.95rem;
          }

          .home-hero-badges {
            display: grid;
            grid-template-columns: 1fr;
            width: min(100%, 18rem);
          }

          .home-hero-badges span {
            justify-content: center;
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(100% - 0.75rem, 1180px);
            padding: 3rem 0;
          }

          .home-highlight-card h3,
          .home-event-card h3 {
            font-size: 1.2rem;
          }

          .home-highlight-card p,
          .home-event-card p {
            font-size: 0.94rem;
          }

          .home-stat-card strong {
            font-size: clamp(2.1rem, 14vw, 3.2rem);
          }

          .home-reason-card {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.75rem;
          }

          .home-reason-card span {
            min-width: 0;
            width: fit-content;
            padding: 0 0.95rem;
          }

          .home-cta-section {
            min-height: 390px;
          }
        }

        @media (max-width: 360px) {
          .home-hero {
            padding-top: 8.6rem;
          }

          .home-hero h1 {
            font-size: clamp(2.45rem, 16vw, 3.55rem);
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(1.9rem, 11.5vw, 2.8rem);
          }

          .home-stat-card {
            min-height: 118px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-particles span,
          .home-scroll-indicator span,
          .home-partner-track,
          .home-hero-media,
          .home-hero::before,
          .home-hero::after,
          .home-cta-section img,
          .home-cta-section::after {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default DashboardPage
