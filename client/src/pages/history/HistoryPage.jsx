import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const historyEvents = [
  {
    name: 'Ozilla Strategy Module',
    year: '2023',
    icon: 'M',
    description: 'Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.',
    highlights: ['Brand Positioning', 'Audience Research', 'Partner Onboarding'],
    venue: 'Lahore Expo Center',
    date: 'December 12, 2023'
  },
  {
    name: 'Ozilla Scale Module',
    year: '2024',
    icon: 'G',
    description: 'Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.',
    highlights: ['Creator Collaborations', 'Sponsor Visibility', 'Live Entertainment Blocks'],
    venue: 'DHA Sports Club, Lahore',
    date: 'November 9, 2024'
  },
  {
    name: 'Ozilla Festival Website Brief 2026 (Pre-Campaign)',
    year: '2025',
    icon: 'A',
    description: 'Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.',
    highlights: ['Ticketing Workflow', 'Experience Mapping', 'Marketing Readiness'],
    venue: 'Gulberg Event District, Lahore',
    date: 'October 18, 2025'
  },
  {
    name: 'Ozilla Basand Festival',
    year: '2026',
    icon: 'F',
    description: 'Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.',
    highlights: ['Cultural Performances', 'Live Music', 'Brand Activation Zones'],
    venue: 'Lahore, Punjab',
    date: 'March 07, 2026'
  },
  {
    name: 'Ozilla Festival 2027 Season 2',
    year: '2027',
    icon: 'C',
    description: 'Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.',
    highlights: ['Celebrity Performances', 'Expanded Audience Program', 'Premium Experience Zones'],
    venue: 'Lahore, Punjab',
    date: 'November 14, 2027'
  }
]

const historyStats = [
  { value: 3, suffix: '', label: 'Festival Editions', mark: 'ED' },
  { value: 20, suffix: '+', label: 'Artists Performed', mark: 'AR' },
  { value: 10000, suffix: '+', label: 'Visitors', mark: 'VI' },
  { value: 12, suffix: '+', label: 'Sponsors', mark: 'SP' },
  { value: 5, suffix: '+', label: 'Successful Events', mark: 'EV' }
]

const memoryWall = [
  'A growing community built around music, culture, and premium festival experiences.',
  'From strategy to full-scale event execution, Ozilla keeps building bigger moments.',
  'Every edition adds stronger audience energy, better partner value, and unforgettable memories.'
]

function AnimatedStat({ value, suffix, label, mark }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 900
    const startedAt = performance.now()
    let frameId

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [value])

  return (
    <div className={`history-stat-card history-reveal${value >= 1000 ? ' history-stat-wide' : ''}`}>
      <em>{mark}</em>
      <strong>{displayValue.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

function HistoryPage() {
  const latestYear = useMemo(() => historyEvents[historyEvents.length - 1]?.year, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.history-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('history-in-view')
            void entry.target.offsetWidth
            entry.target.classList.add('history-in-view')
          } else {
            entry.target.classList.remove('history-in-view')
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="history-page">
      <div className="history-atmosphere" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="history-hero history-reveal" aria-label="Ozilla Festival history">
        <img className="history-hero-logo" src={assetUrl('/assets/ozilla/logo.png')} alt="" loading="eager" />
        <div className="history-hero-rays" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="history-hero-content">
          <p className="history-eyebrow">Ozilla Festival Legacy</p>
          <h1>OUR JOURNEY</h1>
          <p>Relive the unforgettable moments that shaped the Ozilla Festival.</p>
        </div>
      </section>

      <section className="history-story history-reveal">
        <div className="history-section-heading">
          <p className="history-eyebrow">From idea to movement</p>
          <h2>A festival story written in moments.</h2>
          <p>
            Each chapter marks a new step in the Ozilla journey: sharper strategy, bigger
            experiences, stronger communities, and a growing culture of celebration in Lahore.
          </p>
        </div>
      </section>

      <section className="history-legacy history-reveal" aria-label="Ozilla Festival achievements">
        <div className="history-section-heading">
          <p className="history-eyebrow">Our Legacy</p>
          <h2>Built on energy, people, and unforgettable nights.</h2>
          <p>
            The Ozilla journey is measured in more than years. It is measured in artists,
            visitors, partners, successful events, and the memories created together.
          </p>
        </div>
        <div className="history-stats">
          {historyStats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="history-timeline" aria-label="Ozilla Festival timeline">
        <div className="history-timeline-line" aria-hidden="true" />
        {historyEvents.map((event, index) => (
          <article
            key={`${event.name}-${event.year}`}
            className="history-timeline-item history-reveal"
            style={{ '--history-delay': `${index * 110}ms` }}
          >
            <div className="history-year-node">
              <span>{event.icon}</span>
              <strong>{event.year}</strong>
            </div>

            <div className="history-card">
              <div className="history-card-top">
                <p className="history-card-kicker">Chapter {String(index + 1).padStart(2, '0')}</p>
                <span>{event.year}</span>
              </div>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <div className="history-detail-grid">
                <div>
                  <span>Venue</span>
                  <strong>{event.venue}</strong>
                </div>
                <div>
                  <span>Date</span>
                  <strong>{event.date}</strong>
                </div>
              </div>
              <div className="history-highlights">
                {event.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="history-memory-wall history-reveal">
        <div className="history-section-heading">
          <p className="history-eyebrow">Hall of memories</p>
          <h2>Milestones that stayed with us.</h2>
        </div>
        <div className="history-memory-grid">
          {memoryWall.map((memory, index) => (
            <blockquote key={memory} className="history-memory-card history-reveal" style={{ '--history-delay': `${index * 120}ms` }}>
              <span>{['M', 'L', 'G'][index]}</span>
              <p>{memory}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="history-quote history-reveal" aria-label="Ozilla Festival quote">
        <div className="history-quote-card">
          <span>OZILLA</span>
          <blockquote>
            “Every festival creates memories, but Ozilla Festival creates unforgettable stories.”
          </blockquote>
        </div>
      </section>

      <section className="history-cta history-reveal">
        <div className="history-cta-glow" aria-hidden="true" />
        <p className="history-eyebrow">Next chapter: {latestYear}</p>
        <h2>THE NEXT CHAPTER BEGINS WITH YOU</h2>
        <p>Join us in creating the next unforgettable memories.</p>
        <Link className="history-cta-button" to="/tickets">Join Ozilla Festival</Link>
      </section>

      <style>{`
        .history-page {
          --history-deep: #020b0d;
          --history-ink: #071819;
          --history-muted: #5f7774;
          --history-teal: #073f3b;
          --history-gold: #ffb000;
          --history-orange: #ff7a18;
          --history-wine: #641018;
          position: relative;
          overflow: hidden;
          overflow-x: clip;
          color: var(--history-ink);
          background:
            radial-gradient(circle at 10% 12%, rgba(255, 176, 0, 0.18), transparent 24rem),
            radial-gradient(circle at 88% 32%, rgba(100, 16, 24, 0.18), transparent 28rem),
            radial-gradient(circle at 45% 78%, rgba(7, 63, 59, 0.18), transparent 30rem),
            linear-gradient(180deg, #fffaf4 0%, #f4e9df 48%, #fff7ee 100%);
        }

        .history-page *,
        .history-page *::before,
        .history-page *::after {
          box-sizing: border-box;
        }

        .history-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent, rgba(255, 176, 0, 0.045) 46%, transparent 64%),
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.24), transparent 20rem);
          animation: historyAurora 14s ease-in-out infinite alternate;
          z-index: 0;
        }

        .history-atmosphere span {
          position: fixed;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.72);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.52);
          pointer-events: none;
          z-index: 1;
          animation: historyFloat 9s ease-in-out infinite;
        }

        .history-atmosphere span:nth-child(1) { left: 8%; top: 24%; }
        .history-atmosphere span:nth-child(2) { right: 12%; top: 20%; animation-delay: 1.7s; }
        .history-atmosphere span:nth-child(3) { left: 22%; bottom: 20%; animation-delay: 3.1s; }
        .history-atmosphere span:nth-child(4) { right: 22%; bottom: 15%; animation-delay: 4.5s; }

        .history-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.985);
          transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--history-delay, 0ms);
          will-change: opacity, transform;
        }

        .history-reveal.history-in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .history-hero,
        .history-story,
        .history-legacy,
        .history-stats,
        .history-timeline,
        .history-memory-wall,
        .history-quote,
        .history-cta {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - clamp(1rem, 4vw, 2rem)));
          margin: 0 auto;
        }

        .history-hero {
          min-height: clamp(520px, 74svh, 760px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(7rem, 13vw, 11rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          color: #fff;
          text-align: center;
          background:
            radial-gradient(circle at 48% 18%, rgba(255, 176, 0, 0.18), transparent 20rem),
            linear-gradient(135deg, #020b0d, #063f3b 48%, #641018);
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.28), 0 0 90px rgba(255, 176, 0, 0.12);
          isolation: isolate;
        }

        .history-hero-logo {
          position: absolute;
          inset: 50% auto auto 50%;
          width: min(760px, 82vw);
          height: min(420px, 58vh);
          object-fit: contain;
          opacity: 0.16;
          filter: saturate(1.22) contrast(1.1) drop-shadow(0 0 42px rgba(255, 145, 21, 0.46));
          transform: translate(-50%, -50%) scale(1.02);
          animation: historyHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .history-hero::before,
        .history-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .history-hero::before {
          background:
            radial-gradient(circle at 24% 18%, rgba(255, 176, 0, 0.24), transparent 18rem),
            radial-gradient(circle at 76% 22%, rgba(255, 122, 24, 0.18), transparent 18rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.94), rgba(2, 11, 13, 0.42), rgba(2, 11, 13, 0.88));
          z-index: -2;
        }

        .history-hero::after {
          background: radial-gradient(ellipse at center, transparent 32%, rgba(0, 0, 0, 0.76) 100%);
          z-index: -1;
        }

        .history-hero-rays span {
          position: absolute;
          top: -16%;
          width: clamp(90px, 12vw, 180px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.3), transparent 72%);
          filter: blur(20px);
          opacity: 0.5;
          transform-origin: top center;
          animation: historySpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .history-hero-rays span:nth-child(1) { left: 12%; transform: rotate(18deg); }
        .history-hero-rays span:nth-child(2) { left: 48%; animation-delay: 1.4s; transform: rotate(-6deg); }
        .history-hero-rays span:nth-child(3) { right: 12%; animation-delay: 2.8s; transform: rotate(-18deg); }

        .history-hero-content {
          width: min(980px, 100%);
          min-width: 0;
        }

        .history-eyebrow {
          margin: 0;
          color: var(--history-gold);
          font-size: clamp(0.68rem, 1vw, 0.82rem);
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .history-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3rem, 8.5vw, 8.2rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 28px 90px rgba(0, 0, 0, 0.66), 0 0 34px rgba(255, 176, 0, 0.13);
          text-wrap: balance;
        }

        .history-hero p:not(.history-eyebrow) {
          max-width: 760px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 1.8vw, 1.5rem);
          line-height: 1.65;
        }

        .history-story {
          padding: clamp(3.4rem, 7vw, 6rem) 0 clamp(2rem, 5vw, 3rem);
        }

        .history-legacy {
          padding-bottom: clamp(2rem, 5vw, 4rem);
        }

        .history-legacy .history-section-heading {
          margin-bottom: clamp(1.8rem, 5vw, 3rem);
        }

        .history-section-heading {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          min-width: 0;
        }

        .history-section-heading h2,
        .history-cta h2 {
          margin: 0.6rem 0 0;
          color: var(--history-ink);
          font-size: clamp(2.35rem, 6vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .history-section-heading p:not(.history-eyebrow) {
          max-width: 690px;
          margin: 1rem auto 0;
          color: var(--history-muted);
          font-size: clamp(0.98rem, 1.3vw, 1.08rem);
          line-height: 1.75;
        }

        .history-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
          gap: clamp(0.85rem, 2vw, 1.2rem);
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 34px;
          background:
            radial-gradient(circle at 14% 0%, rgba(255, 176, 0, 0.16), transparent 20rem),
            radial-gradient(circle at 86% 100%, rgba(255, 122, 24, 0.14), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.97), rgba(7, 63, 59, 0.93));
          box-shadow: 0 32px 85px rgba(2, 11, 13, 0.18), 0 0 70px rgba(255, 176, 0, 0.08);
        }

        .history-stat-card {
          position: relative;
          min-height: 164px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          text-align: center;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.13), transparent 66%),
            rgba(255, 255, 255, 0.07);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .history-stat-card::before {
          content: '';
          position: absolute;
          inset: -40% auto auto -25%;
          width: 70%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.14), transparent 70%);
          pointer-events: none;
        }

        .history-stat-card em {
          position: relative;
          width: 2.8rem;
          height: 2.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #ffd36a;
          background: rgba(255, 255, 255, 0.08);
          font-size: 0.74rem;
          font-style: normal;
          font-weight: 950;
          letter-spacing: 0.08em;
        }

        .history-stat-card strong {
          max-width: 100%;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(2.5rem, 4.25vw, 4.35rem);
          line-height: 0.86;
          letter-spacing: -0.07em;
          text-shadow: 0 0 24px rgba(255, 176, 0, 0.14);
          white-space: nowrap;
          transform: scale(var(--history-stat-scale, 1));
          transform-origin: center;
        }

        .history-stat-wide strong {
          --history-stat-scale: 0.82;
        }

        .history-stat-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: clamp(0.82rem, 1.1vw, 1rem);
          font-weight: 900;
          line-height: 1.2;
        }

        .history-timeline {
          padding: clamp(4rem, 8vw, 7rem) 0;
        }

        .history-timeline-line {
          position: absolute;
          left: 50%;
          top: clamp(5rem, 8vw, 7rem);
          bottom: clamp(4rem, 7vw, 5rem);
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(255, 176, 0, 0.78), rgba(255, 122, 24, 0.46), rgba(7, 63, 59, 0.42), transparent);
          box-shadow: 0 0 24px rgba(255, 176, 0, 0.24);
          transform: translateX(-50%);
        }

        .history-timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 112px minmax(0, 1fr);
          align-items: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          margin-bottom: clamp(1.8rem, 4vw, 3rem);
        }

        .history-timeline-item:nth-of-type(even) .history-card {
          grid-column: 3;
        }

        .history-timeline-item:nth-of-type(even) .history-year-node {
          grid-column: 2;
        }

        .history-year-node {
          grid-column: 2;
          width: 112px;
          height: 112px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 176, 0, 0.42);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.24), transparent 60%),
            linear-gradient(145deg, rgba(2, 11, 13, 0.96), rgba(7, 63, 59, 0.9));
          box-shadow: 0 18px 52px rgba(2, 11, 13, 0.22), 0 0 28px rgba(255, 176, 0, 0.14);
          z-index: 2;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .history-timeline-item:hover .history-year-node {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 24px 62px rgba(2, 11, 13, 0.28), 0 0 42px rgba(255, 176, 0, 0.22);
        }

        .history-year-node span {
          font-size: 1.45rem;
          animation: historyIconFloat 2.8s ease-in-out infinite;
        }

        .history-year-node strong {
          color: #ffd36a;
          font-size: 1.15rem;
          font-weight: 950;
        }

        .history-card {
          grid-column: 1;
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: clamp(1.3rem, 2.8vw, 2rem);
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 28px;
          background:
            radial-gradient(circle at 100% 0%, rgba(255, 176, 0, 0.12), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(255, 247, 235, 0.82));
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(18px);
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }

        .history-card::after {
          content: '';
          position: absolute;
          inset: -30% -40% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 760ms ease;
          pointer-events: none;
        }

        .history-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.62);
          box-shadow: 0 40px 100px rgba(2, 11, 13, 0.22), 0 0 45px rgba(255, 176, 0, 0.13);
        }

        .history-card:hover::after {
          transform: translateX(135%) rotate(10deg);
        }

        .history-card-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          margin-bottom: 1rem;
        }

        .history-card-kicker,
        .history-card-top span {
          margin: 0;
          color: #9a3b0b;
          font-size: 0.74rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .history-card-top span {
          min-height: 2rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.85rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff7a18);
          box-shadow: 0 12px 28px rgba(255, 176, 0, 0.26);
        }

        .history-card h3 {
          margin: 0 0 0.85rem;
          color: var(--history-ink);
          font-size: clamp(1.55rem, 2.8vw, 2.35rem);
          line-height: 1;
          letter-spacing: -0.045em;
          overflow-wrap: anywhere;
        }

        .history-card > p {
          color: var(--history-muted);
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .history-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.8rem;
          margin-top: 1.3rem;
        }

        .history-detail-grid div {
          min-width: 0;
          padding: 0.9rem;
          border: 1px solid rgba(7, 63, 59, 0.12);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.42);
        }

        .history-detail-grid span {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--history-muted);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .history-detail-grid strong {
          color: var(--history-teal);
          font-size: 0.92rem;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .history-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.2rem;
        }

        .history-highlights span {
          max-width: 100%;
          padding: 0.58rem 0.72rem;
          border-radius: 999px;
          color: var(--history-teal);
          background: rgba(7, 63, 59, 0.08);
          font-size: 0.78rem;
          font-weight: 850;
          overflow-wrap: anywhere;
        }

        .history-memory-wall {
          padding-bottom: clamp(3rem, 7vw, 5rem);
        }

        .history-memory-wall .history-section-heading {
          margin-bottom: clamp(1.8rem, 5vw, 3rem);
        }

        .history-memory-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .history-memory-card {
          min-height: 210px;
          min-width: 0;
          margin: 0;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.26);
          border-radius: 26px;
          background:
            radial-gradient(circle at 0% 0%, rgba(255, 176, 0, 0.14), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.9), rgba(246, 238, 232, 0.72));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
        }

        .history-memory-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.44);
          box-shadow: 0 34px 80px rgba(18, 34, 34, 0.15), 0 0 34px rgba(255, 176, 0, 0.12);
        }

        .history-memory-card span {
          display: inline-flex;
          width: 3rem;
          height: 3rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          font-size: 1.15rem;
        }

        .history-memory-card p {
          color: var(--history-ink);
          font-weight: 820;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .history-quote {
          padding-bottom: clamp(3rem, 7vw, 5rem);
        }

        .history-quote-card {
          position: relative;
          overflow: hidden;
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(1.6rem, 4vw, 3.2rem);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: clamp(26px, 4vw, 38px);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.16), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.94), rgba(7, 63, 59, 0.9) 55%, rgba(100, 16, 24, 0.9));
          box-shadow: 0 30px 90px rgba(2, 11, 13, 0.18);
        }

        .history-quote-card::before {
          content: '';
          position: absolute;
          inset: -45% -30% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(10deg);
        }

        .history-quote-card span {
          color: var(--history-gold);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.22em;
        }

        .history-quote-card blockquote {
          position: relative;
          max-width: 800px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1.55rem, 4vw, 3.15rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.045em;
          text-wrap: balance;
          overflow-wrap: anywhere;
        }

        .history-page .history-quote-card {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.18), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.96), rgba(7, 63, 59, 0.92) 55%, rgba(100, 16, 24, 0.92)) !important;
        }

        .history-page .history-quote-card span {
          color: #ffbd59 !important;
        }

        .history-page .history-quote-card blockquote {
          color: #ffffff !important;
          text-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
        }

        .history-cta {
          min-height: 430px;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2.2rem, 5vw, 4.5rem) 1rem;
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.2), transparent 18rem),
            radial-gradient(circle at 12% 82%, rgba(255, 122, 24, 0.14), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .history-cta-glow {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 66%);
          animation: historyOrbit 18s linear infinite;
          z-index: -1;
        }

        .history-cta h2 {
          max-width: 920px;
          color: #fff;
        }

        .history-cta p:not(.history-eyebrow) {
          max-width: 680px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        .history-page .history-cta {
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.22), transparent 18rem),
            radial-gradient(circle at 12% 82%, rgba(255, 122, 24, 0.16), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f) !important;
        }

        .history-page .history-cta .history-eyebrow {
          color: #ffbd59 !important;
        }

        .history-page .history-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .history-page .history-cta p:not(.history-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .history-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          margin-top: 2rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff7a18 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .history-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 44px rgba(255, 126, 0, 0.32);
        }

        @keyframes historyAurora {
          from { transform: translate3d(-1.5%, 0, 0) scale(1); opacity: 0.72; }
          to { transform: translate3d(1.5%, -1%, 0) scale(1.04); opacity: 1; }
        }

        @keyframes historyFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.45; }
          50% { transform: translateY(-24px) scale(1.22); opacity: 1; }
        }

        @keyframes historyHeroZoom {
          from { transform: translate(-50%, -50%) scale(1.02); }
          to { transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes historySpotlight {
          0%, 100% { opacity: 0.32; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes historyIconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes historyOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @media (min-width: 1600px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(1360px, calc(100% - 5rem));
          }
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(1240px, calc(100% - 4rem));
          }

          .history-stat-card strong {
            font-size: clamp(2.4rem, 3.8vw, 4rem);
          }
        }

        @media (max-width: 1180px) {
          .history-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 2rem, 980px);
          }

          .history-memory-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .history-stat-card strong {
            font-size: clamp(2.6rem, 8vw, 4.5rem);
          }

          .history-timeline-line {
            left: 54px;
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 108px minmax(0, 1fr);
          }

          .history-timeline-item .history-card,
          .history-timeline-item:nth-of-type(even) .history-card {
            grid-column: 2;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            grid-column: 1;
            width: 96px;
            height: 96px;
          }
        }

        @media (max-width: 820px) {
          .history-hero {
            min-height: clamp(500px, 72svh, 640px);
            padding: clamp(6.5rem, 14vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3.5rem, 7vw, 5rem);
          }

          .history-hero-logo {
            width: min(650px, 84vw);
            height: min(360px, 48svh);
          }

          .history-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .history-stat-card {
            min-height: 146px;
          }

          .history-memory-grid {
            gap: 1rem;
          }

          .history-card {
            padding: clamp(1.15rem, 3vw, 1.55rem);
          }
        }

        @media (max-width: 767px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 1rem, 1180px);
          }

          .history-hero {
            min-height: min(82svh, 620px);
            padding: clamp(6rem, 24vw, 8rem) 1rem 3.6rem;
            border-radius: clamp(24px, 8vw, 34px);
          }

          .history-hero h1 {
            font-size: clamp(2.8rem, 15vw, 5.2rem);
            letter-spacing: -0.055em;
          }

          .history-hero p:not(.history-eyebrow) {
            font-size: clamp(0.98rem, 4vw, 1.18rem);
            line-height: 1.55;
          }

          .history-hero-logo {
            width: 86vw;
            height: 34svh;
            opacity: 0.15;
          }

          .history-hero-rays span {
            width: clamp(70px, 22vw, 120px);
            filter: blur(18px);
          }

          .history-memory-grid {
            grid-template-columns: 1fr;
          }

          .history-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 0.75rem;
          }

          .history-stat-card {
            min-height: 128px;
          }

          .history-stat-card strong {
            font-size: clamp(3rem, 17vw, 4.4rem);
          }

          .history-timeline {
            padding-top: 3rem;
          }

          .history-timeline-line {
            left: 28px;
            top: 3rem;
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 58px minmax(0, 1fr);
            gap: 0.8rem;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            width: 58px;
            height: 58px;
          }

          .history-year-node span {
            font-size: 1rem;
          }

          .history-year-node strong {
            font-size: 0.78rem;
          }

          .history-detail-grid {
            grid-template-columns: 1fr;
          }

          .history-card-top {
            align-items: flex-start;
          }

          .history-card:hover,
          .history-memory-card:hover {
            transform: translateY(-5px);
          }

          .history-cta {
            min-height: 360px;
            padding: clamp(2rem, 9vw, 3rem) 1rem;
          }

          .history-cta-button {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .history-hero h1,
          .history-section-heading h2,
          .history-cta h2 {
            font-size: clamp(2.2rem, 14vw, 3.5rem);
          }

          .history-card,
          .history-memory-card {
            padding: 1rem;
          }

          .history-stat-card strong {
            font-size: clamp(2.8rem, 15vw, 3.9rem);
          }

          .history-stats {
            grid-template-columns: 1fr;
          }

          .history-quote-card blockquote {
            font-size: clamp(1.45rem, 10vw, 2.25rem);
          }
        }

        @media (max-width: 480px) {
          .history-atmosphere span {
            width: 8px;
            height: 8px;
          }

          .history-eyebrow {
            letter-spacing: 0.16em;
          }

          .history-card-top {
            gap: 0.55rem;
          }

          .history-card-kicker,
          .history-card-top span {
            font-size: 0.64rem;
            letter-spacing: 0.08em;
          }

          .history-card-top span {
            min-height: 1.85rem;
            padding: 0 0.72rem;
          }

          .history-highlights span {
            width: 100%;
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 0.65rem, 1180px);
          }

          .history-hero h1 {
            font-size: clamp(2.3rem, 15vw, 3.15rem);
          }

          .history-section-heading h2,
          .history-cta h2 {
            font-size: clamp(2rem, 13vw, 3rem);
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 50px minmax(0, 1fr);
            gap: 0.65rem;
          }

          .history-timeline-line {
            left: 25px;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            width: 50px;
            height: 50px;
          }

          .history-year-node span {
            font-size: 0.86rem;
          }

          .history-year-node strong {
            font-size: 0.68rem;
          }

          .history-card h3 {
            font-size: clamp(1.28rem, 10vw, 1.75rem);
          }

          .history-card,
          .history-memory-card,
          .history-quote-card {
            padding: 0.9rem;
          }
        }

        @media (hover: none) {
          .history-card:active,
          .history-memory-card:active,
          .history-cta-button:active {
            transform: translateY(-4px) scale(0.995);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .history-page::before,
          .history-atmosphere span,
          .history-hero-logo,
          .history-hero-rays span,
          .history-year-node span,
          .history-cta-glow {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default HistoryPage
