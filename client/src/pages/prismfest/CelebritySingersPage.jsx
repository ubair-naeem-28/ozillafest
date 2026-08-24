import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const performers = [
  {
    name: 'TALWINDER',
    isHeadliner: true,
    genre: 'Indie Pop / Punjabi Fusion',
    image: assetUrl('/assets/ozilla/talwinder.jpg')
  },
  {
    name: 'IMRAN KHAN',
    genre: 'Punjabi Pop / Urban',
    image: assetUrl('/assets/ozilla/Imran-Khan.jpg')
  },
  {
    name: 'BOHEMIA',
    genre: 'Punjabi Rap',
    image: assetUrl('/assets/ozilla/Bohemia.jpg')
  },
  {
    name: 'HASSAN RAHEEM',
    genre: 'Pop / R&B',
    image: assetUrl('/assets/ozilla/hassan-raheem.jpg')
  }
]

function getCountdown() {
  const target = new Date('2026-11-01T18:00:00+05:00').getTime()
  const now = Date.now()
  const diff = Math.max(target - now, 0)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  }
}

function CelebritySingersPage() {
  const pageRef = useRef(null)
  const [countdown, setCountdown] = useState(getCountdown)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const handlePagePointerMove = (event) => {
    if (!pageRef.current || !window.matchMedia('(pointer: fine)').matches) return

    pageRef.current.style.setProperty('--cursor-x', `${event.clientX}px`)
    pageRef.current.style.setProperty('--cursor-y', `${event.clientY}px`)
  }

  const handleCardPointerMove = (event) => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
    card.style.setProperty('--rx', `${((centerY - y) / centerY) * 5}deg`)
    card.style.setProperty('--ry', `${((x - centerX) / centerX) * 5}deg`)
  }

  const resetCardPointer = (event) => {
    const card = event.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <main ref={pageRef} className="celebrity-page" onMouseMove={handlePagePointerMove}>
      <div className="celebrity-cursor-glow" aria-hidden="true" />
      <div className="celebrity-ambient-notes" aria-hidden="true">
        <span>♪</span>
        <span>♫</span>
        <span>♬</span>
        <span>♪</span>
      </div>
      <section className="celebrity-hero" aria-label="Celebrity Singers">
        <div className="celebrity-crowd" aria-hidden="true" />
        <div className="celebrity-hero-lights" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="celebrity-lasers" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="celebrity-soundwave" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="celebrity-hero-content">
          <p className="celebrity-eyebrow">Ozilla Festival 2026</p>
          <h1>CELEBRITY SINGERS</h1>
          <p className="celebrity-hero-copy">
            Experience the Biggest Music Icons Live at Ozilla Festival 2026
          </p>
        </div>

        <div className="celebrity-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      <div className="celebrity-glass-divider" aria-hidden="true" />

      <section className="celebrity-artists-section" aria-label="Featured Artists">
        <div className="celebrity-section-heading">
          <div className="celebrity-stars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="celebrity-eyebrow">Featured Artists</p>
          <h2>LIVE ON THE OZILLA STAGE</h2>
          <p>
            Four high-impact performers, one premium Lahore festival atmosphere, and a stage built for unforgettable crowd moments.
          </p>
        </div>

        <div className="celebrity-grid">
          {performers.map((performer, index) => (
            <article
              key={performer.name}
              className={`celebrity-card ${performer.isHeadliner ? 'celebrity-card-headliner' : ''}`}
              tabIndex={0}
              style={{ '--artist-delay': `${index * 90}ms` }}
              onMouseMove={handleCardPointerMove}
              onMouseLeave={resetCardPointer}
              onBlur={resetCardPointer}
            >
              <div className="celebrity-card-frame">
                <img
                  src={performer.image}
                  alt={performer.name}
                  className="celebrity-card-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = assetUrl('/assets/prism-auth-visual.jpg')
                  }}
                />
                <div className="celebrity-card-overlay">
                  {performer.isHeadliner && (
                    <span className="celebrity-badge">MAIN ARTIST</span>
                  )}
                  <div className="celebrity-live-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="celebrity-card-name">{performer.name}</p>
                  <p className="celebrity-card-genre">{performer.genre}</p>
                </div>
              </div>
              <div className="celebrity-card-caption">
                <p className="celebrity-card-name">{performer.name}</p>
                <p className="celebrity-card-genre">{performer.genre}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="celebrity-wave-divider" aria-hidden="true" />

      <section className="celebrity-stage-section">
        <div className="celebrity-stage-copy">
          <p className="celebrity-eyebrow">Live Stage</p>
          <h2>THE STAGE IS READY</h2>
          <p>
            Concert lights, pulsing sound, premium crowd energy, and a two-day lineup built for Lahore.
          </p>
        </div>
        <div className="celebrity-countdown" aria-label="Countdown to Ozilla Festival 2026">
          {[
            ['Days', countdown.days],
            ['Hours', countdown.hours],
            ['Minutes', countdown.minutes],
            ['Seconds', countdown.seconds]
          ].map(([label, value]) => (
            <div key={label} className="celebrity-countdown-card">
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="celebrity-stage-equalizer" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="celebrity-cta-section">
        <div className="celebrity-cta-orbit" aria-hidden="true" />
        <p className="celebrity-eyebrow">Ozilla Festival 2026</p>
        <h2>DON'T MISS THE BIGGEST MUSIC FESTIVAL OF 2026</h2>
        <div className="celebrity-cta-actions">
          <Link className="celebrity-btn celebrity-btn-primary" to="/tickets">
            Purchase Ticket
          </Link>
          <Link className="celebrity-btn celebrity-btn-secondary" to="/events">
            View Events
          </Link>
        </div>
      </section>

      <style>{`
        .celebrity-page {
          --celebrity-deep: #020b0d;
          --celebrity-ink: #081b1c;
          --celebrity-teal: #0b4f4c;
          --celebrity-gold: #ffb000;
          --celebrity-orange: #ff6b1a;
          --celebrity-wine: #39132f;
          --celebrity-muted: #55706f;
          position: relative;
          overflow: hidden;
          color: var(--celebrity-ink);
          background:
            radial-gradient(circle at 14% 18%, rgba(255, 176, 0, 0.13), transparent 21rem),
            radial-gradient(circle at 86% 28%, rgba(11, 79, 76, 0.18), transparent 23rem),
            radial-gradient(circle at 52% 82%, rgba(57, 19, 47, 0.12), transparent 24rem),
            linear-gradient(180deg, #fffaf4 0%, #f6eee8 52%, #fffaf4 100%);
          --cursor-x: 50vw;
          --cursor-y: 40vh;
        }

        .celebrity-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.28), transparent 18rem),
            linear-gradient(115deg, transparent 0%, rgba(255, 176, 0, 0.035) 45%, transparent 62%);
          z-index: 0;
          animation: celebrityAurora 14s ease-in-out infinite alternate;
        }

        .celebrity-page::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle, rgba(255, 176, 0, 0.18) 0 1px, transparent 1.4px),
            radial-gradient(circle, rgba(11, 79, 76, 0.12) 0 1px, transparent 1.4px);
          background-size: 110px 110px, 160px 160px;
          background-position: 0 0, 42px 34px;
          opacity: 0.32;
          z-index: 0;
        }

        .celebrity-cursor-glow {
          position: fixed;
          left: var(--cursor-x);
          top: var(--cursor-y);
          width: 24rem;
          height: 24rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.13), rgba(255, 107, 26, 0.06) 36%, transparent 68%);
          filter: blur(12px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: multiply;
          transition: left 80ms linear, top 80ms linear;
        }

        .celebrity-ambient-notes {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .celebrity-ambient-notes span {
          position: absolute;
          color: rgba(255, 176, 0, 0.2);
          font-size: clamp(1.6rem, 3vw, 3.8rem);
          filter: blur(0.2px);
          animation: celebrityNoteFloat 16s ease-in-out infinite;
        }

        .celebrity-ambient-notes span:nth-child(1) { left: 8%; top: 28%; }
        .celebrity-ambient-notes span:nth-child(2) { right: 12%; top: 34%; animation-delay: 3s; }
        .celebrity-ambient-notes span:nth-child(3) { left: 18%; bottom: 18%; animation-delay: 6s; }
        .celebrity-ambient-notes span:nth-child(4) { right: 18%; bottom: 12%; animation-delay: 9s; }

        .celebrity-hero,
        .celebrity-artists-section,
        .celebrity-stage-section,
        .celebrity-cta-section {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .celebrity-hero {
          min-height: clamp(520px, 74vh, 760px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(8rem, 15vw, 12rem) clamp(1.1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          isolation: isolate;
          background:
            radial-gradient(circle at 25% 18%, rgba(255, 176, 0, 0.22), transparent 18rem),
            radial-gradient(circle at 76% 28%, rgba(255, 107, 26, 0.18), transparent 20rem),
            linear-gradient(180deg, transparent 62%, rgba(0, 0, 0, 0.78) 100%),
            linear-gradient(130deg, rgba(2, 11, 13, 0.98), rgba(4, 23, 25, 0.94) 48%, rgba(57, 19, 47, 0.94));
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.24);
        }

        .celebrity-glass-divider,
        .celebrity-wave-divider {
          width: min(1180px, calc(100% - 2rem));
          height: 1px;
          margin: clamp(1rem, 3vw, 2rem) auto 0;
          position: relative;
          z-index: 2;
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.5), rgba(19, 160, 151, 0.28), transparent);
        }

        .celebrity-glass-divider::before,
        .celebrity-wave-divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(64vw, 720px);
          height: 6rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.15), transparent 70%);
          filter: blur(24px);
          transform: translate(-50%, -50%);
        }

        .celebrity-wave-divider {
          margin-top: 0;
          margin-bottom: clamp(2rem, 5vw, 3rem);
        }

        .celebrity-hero::before,
        .celebrity-hero::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .celebrity-hero::before {
          inset: -18% -8% auto;
          height: 58%;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 176, 0, 0.44), transparent 22rem),
            radial-gradient(circle at 78% 12%, rgba(255, 255, 255, 0.16), transparent 18rem);
          filter: blur(34px);
          animation: celebritySmoke 10s ease-in-out infinite alternate;
        }

        .celebrity-hero::after {
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.62), transparent 48%, rgba(0, 0, 0, 0.66)),
            radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.74) 100%);
        }

        .celebrity-crowd {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 26%;
          background:
            radial-gradient(circle at 8% 86%, #020b0d 0 0.8rem, transparent 0.85rem),
            radial-gradient(circle at 16% 78%, #020b0d 0 1rem, transparent 1.05rem),
            radial-gradient(circle at 25% 84%, #020b0d 0 0.7rem, transparent 0.75rem),
            radial-gradient(circle at 37% 76%, #020b0d 0 1.05rem, transparent 1.1rem),
            radial-gradient(circle at 49% 82%, #020b0d 0 0.85rem, transparent 0.9rem),
            radial-gradient(circle at 61% 78%, #020b0d 0 1.1rem, transparent 1.15rem),
            radial-gradient(circle at 74% 85%, #020b0d 0 0.75rem, transparent 0.8rem),
            radial-gradient(circle at 86% 78%, #020b0d 0 1rem, transparent 1.05rem),
            linear-gradient(180deg, transparent, rgba(2, 11, 13, 0.96) 42%, #020b0d 100%);
          opacity: 0.78;
          z-index: 2;
          pointer-events: none;
        }

        .celebrity-hero-lights span {
          position: absolute;
          top: -16%;
          width: clamp(80px, 10vw, 160px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.34), transparent 72%);
          filter: blur(18px);
          opacity: 0.58;
          transform-origin: top center;
          animation: celebritySpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .celebrity-hero-lights span:nth-child(1) { left: 8%; transform: rotate(17deg); }
        .celebrity-hero-lights span:nth-child(2) { left: 32%; animation-delay: 1.2s; transform: rotate(-8deg); }
        .celebrity-hero-lights span:nth-child(3) { right: 26%; animation-delay: 2.1s; transform: rotate(10deg); }
        .celebrity-hero-lights span:nth-child(4) { right: 6%; animation-delay: 3.2s; transform: rotate(-18deg); }

        .celebrity-lasers span {
          position: absolute;
          left: 50%;
          top: 14%;
          width: 1px;
          height: 78%;
          transform-origin: top center;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.65), transparent 72%);
          box-shadow: 0 0 26px rgba(255, 176, 0, 0.46);
          opacity: 0.52;
          animation: celebrityLaserSweep 7.5s ease-in-out infinite;
          z-index: 1;
        }

        .celebrity-lasers span:nth-child(1) { transform: rotate(-52deg); }
        .celebrity-lasers span:nth-child(2) {
          animation-delay: 1.4s;
          transform: rotate(0deg);
          background: linear-gradient(180deg, rgba(19, 160, 151, 0.58), transparent 74%);
        }
        .celebrity-lasers span:nth-child(3) { animation-delay: 2.6s; transform: rotate(52deg); }

        .celebrity-soundwave {
          position: absolute;
          left: 50%;
          bottom: clamp(1.2rem, 3vw, 2rem);
          transform: translateX(-50%);
          display: flex;
          align-items: end;
          gap: 0.42rem;
          height: 3.8rem;
          opacity: 0.62;
          z-index: 2;
        }

        .celebrity-soundwave span {
          width: 0.32rem;
          height: 1rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 20px rgba(255, 176, 0, 0.42);
          animation: celebrityEqualizer 1.2s ease-in-out infinite;
        }

        .celebrity-soundwave span:nth-child(2n) { animation-delay: 140ms; }
        .celebrity-soundwave span:nth-child(3n) { animation-delay: 280ms; }

        .celebrity-hero-content {
          position: relative;
          z-index: 3;
          max-width: 980px;
          text-align: center;
          color: #fff;
          animation: celebrityHeroRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .celebrity-eyebrow {
          margin: 0;
          color: var(--celebrity-gold);
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .celebrity-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3.1rem, 9vw, 8.4rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 34px 90px rgba(0, 0, 0, 0.52);
          text-wrap: balance;
        }

        .celebrity-hero-copy {
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1.05rem, 2vw, 1.5rem);
          line-height: 1.65;
        }

        .celebrity-scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 1rem;
          width: 2.8rem;
          height: 2.8rem;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          transform: translateX(-50%);
          z-index: 4;
          animation: celebrityScrollBounce 1.7s ease-in-out infinite;
        }

        .celebrity-scroll-cue span {
          width: 0.65rem;
          height: 0.65rem;
          border-right: 2px solid #ffb000;
          border-bottom: 2px solid #ffb000;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .celebrity-artists-section {
          padding: clamp(4rem, 8vw, 7rem) 0;
        }

        .celebrity-section-heading {
          max-width: 780px;
          margin: 0 auto clamp(2rem, 5vw, 3.5rem);
          text-align: center;
        }

        .celebrity-stars {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.9rem;
        }

        .celebrity-stars span {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 22px rgba(255, 176, 0, 0.44);
          animation: celebrityStarPulse 1.8s ease-in-out infinite;
        }

        .celebrity-stars span:nth-child(2) { animation-delay: 120ms; }
        .celebrity-stars span:nth-child(3) { animation-delay: 240ms; }
        .celebrity-stars span:nth-child(4) { animation-delay: 360ms; }
        .celebrity-stars span:nth-child(5) { animation-delay: 480ms; }

        .celebrity-section-heading h2,
        .celebrity-cta-section h2 {
          margin: 0.6rem 0 0;
          color: var(--celebrity-ink);
          font-size: clamp(2.35rem, 6vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .celebrity-section-heading p:not(.celebrity-eyebrow) {
          margin: 1rem auto 0;
          max-width: 660px;
          color: var(--celebrity-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.9rem, 2vw, 1.25rem);
          align-items: stretch;
        }

        .celebrity-card {
          position: relative;
          min-width: 0;
          border-radius: 26px;
          padding: 1px;
          background:
            linear-gradient(145deg, rgba(255, 176, 0, 0.66), rgba(255, 255, 255, 0.16) 34%, rgba(11, 79, 76, 0.42)),
            rgba(255, 255, 255, 0.12);
          box-shadow: 0 26px 70px rgba(2, 11, 13, 0.16);
          outline: none;
          isolation: isolate;
          animation: celebrityCardIn 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--artist-delay);
          transition: transform 300ms ease, box-shadow 300ms ease, filter 300ms ease;
          transform-style: preserve-3d;
        }

        .celebrity-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.32), transparent 58%);
          opacity: 0;
          filter: blur(10px);
          transition: opacity 300ms ease;
          z-index: -1;
        }

        .celebrity-card::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 25px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.16), transparent 42%),
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.13), transparent 48%);
          opacity: 0.75;
          pointer-events: none;
          z-index: 1;
        }

        .celebrity-card-headliner {
          grid-column: span 1;
          background:
            linear-gradient(145deg, rgba(255, 211, 106, 0.98), rgba(255, 107, 26, 0.52) 42%, rgba(11, 79, 76, 0.4)),
            rgba(255, 176, 0, 0.22);
          box-shadow:
            0 34px 95px rgba(2, 11, 13, 0.22),
            0 0 54px rgba(255, 176, 0, 0.2);
        }

        .celebrity-card-headliner .celebrity-card-frame {
          aspect-ratio: 4 / 5;
        }

        .celebrity-card-frame {
          position: relative;
          overflow: hidden;
          height: auto;
          aspect-ratio: 4 / 5;
          min-height: 0;
          border-radius: 25px;
          background: #071313;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.12),
            inset 0 0 34px rgba(255, 176, 0, 0.08),
            0 22px 52px rgba(2, 11, 13, 0.18);
          transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 260ms ease;
        }

        .celebrity-card-frame::before {
          content: '';
          position: absolute;
          left: var(--mx, 50%);
          top: var(--my, 40%);
          width: 13rem;
          height: 13rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.28), transparent 68%);
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 260ms ease;
          pointer-events: none;
          z-index: 3;
        }

        .celebrity-card-frame::after {
          content: '';
          position: absolute;
          inset: -45% -30% auto;
          height: 42%;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.24), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 780ms ease;
          pointer-events: none;
          z-index: 5;
        }

        .celebrity-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(1.04) contrast(1.04);
          transition: transform 520ms ease, filter 520ms ease;
        }

        .celebrity-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.25rem;
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.16), transparent 12rem),
            linear-gradient(180deg, transparent 24%, rgba(2, 11, 13, 0.48) 54%, rgba(2, 11, 13, 0.96));
          opacity: 0;
          transition: opacity 320ms ease;
          z-index: 4;
        }

        .celebrity-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: inline-flex;
          align-items: center;
          min-height: 2rem;
          padding: 0 0.8rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff6b1a);
          box-shadow:
            0 12px 28px rgba(255, 176, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.36);
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .celebrity-live-icon {
          display: inline-flex;
          align-items: end;
          gap: 0.18rem;
          width: fit-content;
          height: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .celebrity-live-icon span {
          width: 0.22rem;
          height: 0.5rem;
          border-radius: 999px;
          background: #ffb000;
          animation: celebrityEqualizer 820ms ease-in-out infinite;
        }

        .celebrity-live-icon span:nth-child(2) { animation-delay: 110ms; }
        .celebrity-live-icon span:nth-child(3) { animation-delay: 220ms; }

        .celebrity-card-name {
          margin: 0;
          color: #fff;
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }

        .celebrity-card-genre {
          margin: 0.42rem 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .celebrity-card-caption {
          display: none;
          padding: 0.95rem 0.85rem 0.2rem;
        }

        .celebrity-card-caption .celebrity-card-name {
          color: var(--celebrity-ink);
        }

        .celebrity-card-caption .celebrity-card-genre {
          color: var(--celebrity-muted);
        }

        .celebrity-card:hover,
        .celebrity-card:focus-visible {
          transform: translateY(-10px) scale(1.01);
          box-shadow:
            0 42px 105px rgba(2, 11, 13, 0.26),
            0 0 46px rgba(255, 176, 0, 0.17);
        }

        .celebrity-card:hover::before,
        .celebrity-card:focus-visible::before {
          opacity: 1;
        }

        .celebrity-card:hover .celebrity-card-frame,
        .celebrity-card:focus-visible .celebrity-card-frame {
          transition-duration: 120ms;
        }

        .celebrity-card:hover .celebrity-card-frame::before,
        .celebrity-card:focus-visible .celebrity-card-frame::before {
          opacity: 1;
        }

        .celebrity-card:hover .celebrity-card-frame::after,
        .celebrity-card:focus-visible .celebrity-card-frame::after {
          transform: translateX(135%) rotate(10deg);
        }

        .celebrity-card:hover .celebrity-card-image,
        .celebrity-card:focus-visible .celebrity-card-image {
          transform: scale(1.08);
          filter: saturate(1.18) contrast(1.1) brightness(0.86);
        }

        .celebrity-card:hover .celebrity-card-overlay,
        .celebrity-card:focus-visible .celebrity-card-overlay {
          opacity: 1;
        }

        .celebrity-stage-section {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
          overflow: hidden;
          min-height: 360px;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2rem, 5vw, 4rem);
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 176, 0, 0.18), transparent 18rem),
            radial-gradient(circle at 82% 60%, rgba(19, 160, 151, 0.16), transparent 20rem),
            linear-gradient(135deg, #020b0d, #073332 54%, #39132f);
          box-shadow: 0 30px 80px rgba(2, 11, 13, 0.18);
          isolation: isolate;
        }

        .celebrity-stage-section::before {
          content: '';
          position: absolute;
          inset: -20% auto auto 48%;
          width: 48rem;
          height: 48rem;
          border-radius: 999px;
          background:
            repeating-radial-gradient(circle, rgba(255, 176, 0, 0.16) 0 1px, transparent 1px 24px),
            radial-gradient(circle, rgba(255, 176, 0, 0.12), transparent 68%);
          transform: translateX(-50%);
          opacity: 0.52;
          animation: celebrityOrbit 22s linear infinite;
          z-index: -1;
        }

        .celebrity-stage-copy h2 {
          margin: 0.65rem 0 1rem;
          color: #fff;
          font-size: clamp(2.4rem, 5.8vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .celebrity-stage-copy p:not(.celebrity-eyebrow) {
          max-width: 34rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
        }

        .celebrity-countdown {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .celebrity-countdown-card {
          min-height: 9rem;
          display: grid;
          place-items: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .celebrity-countdown-card strong {
          color: #ffd36a;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 1;
        }

        .celebrity-countdown-card span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .celebrity-stage-equalizer {
          grid-column: 1 / -1;
          height: 4.4rem;
          display: flex;
          align-items: end;
          justify-content: center;
          gap: 0.42rem;
          margin-top: 1.5rem;
        }

        .celebrity-stage-equalizer span {
          width: min(4vw, 1.15rem);
          height: 1rem;
          border-radius: 999px 999px 0 0;
          background: linear-gradient(180deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 24px rgba(255, 176, 0, 0.34);
          animation: celebrityEqualizerTall 1.35s ease-in-out infinite;
        }

        .celebrity-stage-equalizer span:nth-child(2n) { animation-delay: 120ms; }
        .celebrity-stage-equalizer span:nth-child(3n) { animation-delay: 240ms; }
        .celebrity-stage-equalizer span:nth-child(4n) { animation-delay: 360ms; }

        .celebrity-cta-section {
          min-height: 420px;
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
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .celebrity-cta-section .celebrity-eyebrow,
        .celebrity-cta-section h2,
        .celebrity-cta-actions {
          position: relative;
          z-index: 2;
        }

        .celebrity-cta-section h2 {
          max-width: 920px;
          color: #fff;
        }

        .celebrity-cta-orbit {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          box-shadow:
            inset 0 0 60px rgba(255, 176, 0, 0.1),
            0 0 80px rgba(255, 176, 0, 0.08);
          animation: celebrityOrbit 18s linear infinite;
          z-index: 1;
        }

        .celebrity-cta-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .celebrity-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          font-weight: 950;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .celebrity-btn:hover {
          transform: translateY(-3px);
        }

        .celebrity-btn-primary {
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
        }

        .celebrity-btn-secondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        @keyframes celebrityHeroRise {
          from { opacity: 0; transform: translateY(34px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes celebrityAurora {
          from {
            transform: translate3d(-1.5%, 0, 0) scale(1);
            opacity: 0.72;
          }
          to {
            transform: translate3d(1.5%, -1%, 0) scale(1.04);
            opacity: 1;
          }
        }

        @keyframes celebrityNoteFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-8deg);
            opacity: 0.08;
          }
          45% {
            transform: translate3d(0.8rem, -2.4rem, 0) rotate(10deg);
            opacity: 0.28;
          }
        }

        @keyframes celebritySmoke {
          from { transform: translate3d(-2%, 0, 0) scale(0.98); opacity: 0.68; }
          to { transform: translate3d(3%, -2%, 0) scale(1.08); opacity: 1; }
        }

        @keyframes celebritySpotlight {
          0%, 100% { opacity: 0.34; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes celebrityLaserSweep {
          0%, 100% { opacity: 0.2; height: 66%; }
          50% { opacity: 0.72; height: 86%; }
        }

        @keyframes celebrityScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }

        @keyframes celebrityEqualizer {
          0%, 100% { height: 0.55rem; }
          50% { height: 2.8rem; }
        }

        @keyframes celebrityEqualizerTall {
          0%, 100% { height: 0.9rem; opacity: 0.58; }
          50% { height: 4.2rem; opacity: 1; }
        }

        @keyframes celebrityStarPulse {
          0%, 100% { transform: scale(0.8); opacity: 0.58; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes celebrityCardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes celebrityOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @supports (animation-timeline: view()) {
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section {
            animation: celebrityViewRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 5% cover 26%;
          }

          .celebrity-card {
            animation: celebrityViewScale 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 24%;
          }
        }

        @keyframes celebrityViewRise {
          from { opacity: 0.5; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes celebrityViewScale {
          from { opacity: 0.5; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (min-width: 1440px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section,
          .celebrity-glass-divider,
          .celebrity-wave-divider {
            width: min(1280px, calc(100% - 4rem));
          }
        }

        @media (min-width: 1920px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section,
          .celebrity-glass-divider,
          .celebrity-wave-divider {
            width: min(1440px, calc(100% - 6rem));
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5.15;
          }
        }

        @media (max-width: 1366px) {
          .celebrity-hero {
            min-height: clamp(500px, 72vh, 700px);
            padding-top: clamp(7rem, 13vw, 10rem);
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 8.4vw, 7.2rem);
          }

          .celebrity-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 1180px) {
          .celebrity-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }
        }

        @media (max-width: 1024px) {
          .celebrity-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }

          .celebrity-hero {
            min-height: clamp(500px, 78svh, 680px);
            padding: clamp(7rem, 15vw, 10rem) clamp(1rem, 3vw, 2rem) clamp(4rem, 7vw, 5rem);
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 10vw, 6.2rem);
          }

          .celebrity-hero-copy {
            font-size: clamp(1rem, 2.4vw, 1.25rem);
          }

          .celebrity-section-heading h2,
          .celebrity-cta-section h2 {
            font-size: clamp(2.2rem, 7vw, 4.4rem);
          }

          .celebrity-stage-section {
            grid-template-columns: 1fr;
          }

          .celebrity-countdown {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section {
            width: min(100% - 1rem, 1180px);
          }

          .celebrity-hero {
            min-height: 86svh;
            padding: clamp(7rem, 27vw, 10rem) 1rem 4rem;
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 17vw, 5.4rem);
          }

          .celebrity-grid {
            grid-template-columns: 1fr;
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card {
            border-radius: 22px;
          }

          .celebrity-card-frame {
            border-radius: 21px;
          }

          .celebrity-card-name {
            font-size: clamp(1.25rem, 6vw, 1.65rem);
          }

          .celebrity-card-genre {
            font-size: 0.72rem;
            letter-spacing: 0.08em;
          }

          .celebrity-badge {
            top: 0.85rem;
            left: 0.85rem;
            min-height: 1.85rem;
            padding: 0 0.7rem;
            font-size: 0.62rem;
          }

          .celebrity-live-icon {
            display: none;
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }

          .celebrity-card-headliner .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card-overlay {
            opacity: 1;
          }

          .celebrity-stage-section {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }

          .celebrity-countdown {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .celebrity-countdown-card {
            min-height: 7.5rem;
          }

          .celebrity-card-caption {
            display: none;
          }

          .celebrity-cta-actions {
            flex-direction: column;
          }

          .celebrity-btn {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .celebrity-hero h1 {
            font-size: clamp(2.6rem, 16vw, 4rem);
          }

          .celebrity-section-heading h2,
          .celebrity-cta-section h2 {
            font-size: clamp(2rem, 12vw, 3.2rem);
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-hero {
            border-radius: 24px;
          }

          .celebrity-card-overlay {
            padding: 1rem;
          }

          .celebrity-countdown {
            gap: 0.55rem;
          }

          .celebrity-countdown-card {
            border-radius: 18px;
          }

          .celebrity-ambient-notes span {
            opacity: 0.18;
          }
        }

        @media (max-width: 360px) {
          .celebrity-hero {
            min-height: 78svh;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          .celebrity-hero h1 {
            font-size: clamp(2.35rem, 15vw, 3.45rem);
          }

          .celebrity-hero-copy {
            font-size: 0.94rem;
            line-height: 1.55;
          }

          .celebrity-section-heading h2,
          .celebrity-stage-copy h2,
          .celebrity-cta-section h2 {
            font-size: clamp(1.85rem, 11vw, 2.65rem);
          }

          .celebrity-card-overlay {
            padding: 0.9rem;
          }

          .celebrity-card-name {
            font-size: 1.12rem;
          }

          .celebrity-card-genre {
            font-size: 0.66rem;
          }
        }

        @media (hover: none) {
          .celebrity-card-overlay {
            opacity: 1;
          }

          .celebrity-card-frame {
            transform: none;
          }

          .celebrity-card:hover,
          .celebrity-card:focus-visible {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .celebrity-page::before,
          .celebrity-ambient-notes span,
          .celebrity-hero::before,
          .celebrity-hero-lights span,
          .celebrity-lasers span,
          .celebrity-soundwave span,
          .celebrity-scroll-cue,
          .celebrity-stars span,
          .celebrity-live-icon span,
          .celebrity-card,
          .celebrity-stage-equalizer span,
          .celebrity-cta-orbit {
            animation: none;
          }

          .celebrity-card-frame {
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}

export default CelebritySingersPage
