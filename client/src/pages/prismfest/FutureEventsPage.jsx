import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl.util'

const futureEvents = [
  {
    name: 'Ozilla Festival 2026',
    date: 'November 1, 2026',
    location: 'Lahore, Pakistan',
    status: 'FEATURED EVENT',
    description: 'The flagship Ozilla experience with live music, food culture, partner activations, and premium crowd moments.'
  },
  {
    name: 'Celebrity Night',
    date: 'Coming Soon',
    location: 'Lahore, Pakistan',
    status: 'LIVE EVENT',
    description: 'A high-energy night built around headline artists, stage lights, social moments, and unforgettable performances.'
  },
  {
    name: 'Brand Experience Zone',
    date: 'Coming Soon',
    location: 'Lahore, Pakistan',
    status: 'LIMITED SEATS',
    description: 'Immersive sponsor zones, creator content, giveaways, product trials, and interactive festival experiences.'
  }
]

const roadmap = [
  'Ozilla Festival 2026 execution and sponsor delivery',
  'Audience journey execution from discovery to post-event recall',
  'Expanded creator content and multi-platform amplification'
]

function FutureEventsPage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.future-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('future-in-view')
            void entry.target.offsetWidth
            entry.target.classList.add('future-in-view')
          } else {
            entry.target.classList.remove('future-in-view')
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="future-events-page">
      <div className="future-ambient" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="future-hero future-reveal" aria-label="Upcoming Events">
        <img className="future-hero-image" src={assetUrl('/assets/ozilla/logo.png')} alt="" loading="eager" />
        <div className="future-hero-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="future-hero-content">
          <p className="future-eyebrow">Ozilla Festival 2026</p>
          <h1>UPCOMING EVENTS</h1>
          <p>
            Discover the unforgettable experiences waiting for you at Ozilla Festival 2026.
          </p>
        </div>
        <div className="future-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      <div className="future-divider" aria-hidden="true" />

      <section className="future-section future-reveal">
        <div className="future-section-heading">
          <p className="future-eyebrow">Event Invitations</p>
          <h2>Moments worth waiting for.</h2>
          <p>
            A premium roadmap of upcoming music, culture, creator, and brand experiences designed for Lahore.
          </p>
        </div>

        <div className="future-event-grid">
          {futureEvents.map((event, index) => (
            <article
              key={event.name}
              className="future-event-card future-reveal"
              style={{ '--future-delay': `${index * 100}ms` }}
            >
              <div className="future-event-content">
                <div className="future-event-meta">
                  <span className="future-event-badge">{event.status}</span>
                  <p className="future-event-date">{event.date}</p>
                </div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <div className="future-event-location">{event.location}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="future-roadmap-section future-reveal">
        <div className="future-section-heading">
          <p className="future-eyebrow">Forward Plan</p>
          <h2>Built for deeper impact.</h2>
          <p>
            The future roadmap centers on deeper on-ground interaction, higher digital impact,
            and custom sponsorship outcomes aligned with brand objectives.
          </p>
        </div>
        <div className="future-roadmap-grid">
          {roadmap.map((item, index) => (
            <div key={item} className="future-roadmap-card future-reveal" style={{ '--future-delay': `${index * 120}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="future-cta-section future-reveal">
        <div className="future-cta-glow" aria-hidden="true" />
        <p className="future-eyebrow">Join the experience</p>
        <h2>READY TO EXPERIENCE OZILLA FESTIVAL 2026?</h2>
        <p>
          Secure your place for the upcoming celebration of music, entertainment, creators, food, and premium festival culture.
        </p>
        <Link className="future-btn" to="/tickets">Purchase Ticket</Link>
      </section>

      <style>{`
        .future-events-page {
          --future-deep: #020b0d;
          --future-ink: #091819;
          --future-muted: #55706f;
          --future-gold: #ffb000;
          --future-orange: #ff6b1a;
          --future-teal: #0b4f4c;
          --future-wine: #631017;
          position: relative;
          overflow: hidden;
          overflow-x: clip;
          color: var(--future-ink);
          background:
            radial-gradient(circle at 10% 14%, rgba(255, 176, 0, 0.2), transparent 24rem),
            radial-gradient(circle at 88% 32%, rgba(99, 16, 23, 0.18), transparent 28rem),
            radial-gradient(circle at 40% 80%, rgba(11, 79, 76, 0.16), transparent 30rem),
            linear-gradient(180deg, #fffaf4 0%, #f3e8df 48%, #fff7ef 100%);
        }

        .future-events-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent, rgba(255, 176, 0, 0.04) 45%, transparent 62%),
            radial-gradient(circle at 50% 8%, rgba(255, 255, 255, 0.22), transparent 18rem);
          animation: futureAurora 14s ease-in-out infinite alternate;
          z-index: 0;
        }

        .future-ambient span {
          position: fixed;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.75);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.54);
          pointer-events: none;
          z-index: 1;
          animation: futureFloat 9s ease-in-out infinite;
        }

        .future-ambient span:nth-child(1) { left: 9%; top: 28%; }
        .future-ambient span:nth-child(2) { right: 13%; top: 24%; animation-delay: 1.6s; }
        .future-ambient span:nth-child(3) { left: 22%; bottom: 20%; animation-delay: 3.2s; }
        .future-ambient span:nth-child(4) { right: 20%; bottom: 16%; animation-delay: 4.8s; }

        .future-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.985);
          transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .future-reveal.future-in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .future-hero,
        .future-section,
        .future-roadmap-section,
        .future-cta-section,
        .future-divider {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - clamp(1rem, 4vw, 2rem)));
          margin: 0 auto;
        }

        .future-hero {
          min-height: clamp(520px, 76svh, 780px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(7.5rem, 13vw, 12rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          color: #fff;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.16), transparent 20rem),
            linear-gradient(135deg, #020b0d, #063e3b 45%, #631017);
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.28), 0 0 90px rgba(255, 176, 0, 0.12);
          isolation: isolate;
        }

        .future-hero-image {
          position: absolute;
          inset: 50% auto auto 50%;
          width: 100%;
          height: 100%;
          max-width: min(760px, 82vw);
          max-height: min(420px, 58vh);
          object-fit: contain;
          opacity: 0.2;
          filter: saturate(1.22) contrast(1.1) drop-shadow(0 0 42px rgba(255, 145, 21, 0.5));
          transform: translate(-50%, -50%) scale(1.02);
          animation: futureHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .future-hero::before,
        .future-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .future-hero::before {
          background:
            radial-gradient(circle at 28% 18%, rgba(255, 176, 0, 0.26), transparent 18rem),
            radial-gradient(circle at 72% 22%, rgba(255, 107, 26, 0.18), transparent 18rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.94), rgba(2, 11, 13, 0.42), rgba(2, 11, 13, 0.9));
          z-index: -2;
        }

        .future-hero::after {
          background: radial-gradient(ellipse at center, transparent 32%, rgba(0, 0, 0, 0.76) 100%);
          z-index: -1;
        }

        .future-hero-lights span {
          position: absolute;
          top: -16%;
          width: clamp(90px, 12vw, 180px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.34), transparent 72%);
          filter: blur(20px);
          opacity: 0.5;
          transform-origin: top center;
          animation: futureSpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .future-hero-lights span:nth-child(1) { left: 12%; transform: rotate(18deg); }
        .future-hero-lights span:nth-child(2) { left: 48%; animation-delay: 1.4s; transform: rotate(-6deg); }
        .future-hero-lights span:nth-child(3) { right: 12%; animation-delay: 2.8s; transform: rotate(-18deg); }

        .future-hero-content {
          width: min(980px, 100%);
          animation: futureRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .future-eyebrow {
          margin: 0;
          color: var(--future-gold);
          font-size: clamp(0.68rem, 1vw, 0.82rem);
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .future-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3rem, 8.5vw, 8.4rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 28px 90px rgba(0, 0, 0, 0.66), 0 0 34px rgba(255, 176, 0, 0.13);
          text-wrap: balance;
        }

        .future-hero p:not(.future-eyebrow) {
          max-width: 760px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 1.8vw, 1.5rem);
          line-height: 1.65;
        }

        .future-scroll-cue {
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
          animation: futureScrollBounce 1.7s ease-in-out infinite;
        }

        .future-scroll-cue span {
          width: 0.65rem;
          height: 0.65rem;
          border-right: 2px solid #ffb000;
          border-bottom: 2px solid #ffb000;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .future-divider {
          height: 1px;
          margin-top: clamp(1rem, 3vw, 2rem);
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.52), rgba(19, 160, 151, 0.28), transparent);
        }

        .future-divider::before {
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

        .future-section,
        .future-roadmap-section {
          padding: clamp(3.2rem, 7vw, 7rem) 0;
        }

        .future-section-heading {
          max-width: 780px;
          margin: 0 auto clamp(2rem, 5vw, 3.5rem);
          text-align: center;
        }

        .future-section-heading h2,
        .future-cta-section h2 {
          margin: 0.6rem 0 0;
          color: var(--future-ink);
          font-size: clamp(2.35rem, 6vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .future-section-heading p:not(.future-eyebrow) {
          margin: 1rem auto 0;
          max-width: 660px;
          color: var(--future-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .future-event-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: clamp(1rem, 2vw, 1.35rem);
          align-items: stretch;
        }

        .future-event-card {
          position: relative;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          border-radius: 30px;
          padding: 1px;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background:
            linear-gradient(145deg, rgba(255, 176, 0, 0.66), rgba(255, 255, 255, 0.2) 38%, rgba(11, 79, 76, 0.55)),
            rgba(255, 250, 242, 0.62);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          animation-delay: var(--future-delay);
          transition: transform 320ms ease, box-shadow 320ms ease, border-color 320ms ease;
        }

        .future-event-card::after {
          content: '';
          position: absolute;
          inset: -30% -40% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.44), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 760ms ease;
          pointer-events: none;
        }

        .future-event-card:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: rgba(255, 176, 0, 0.68);
          box-shadow: 0 44px 112px rgba(2, 11, 13, 0.24), 0 0 52px rgba(255, 176, 0, 0.2);
        }

        .future-event-card:hover::after {
          transform: translateX(135%) rotate(10deg);
        }

        .future-event-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.2rem;
        }

        .future-event-badge {
          min-height: 2rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.85rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff6b1a);
          box-shadow: 0 12px 28px rgba(255, 176, 0, 0.3);
          font-size: 0.66rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .future-event-content {
          min-height: clamp(310px, 26vw, 350px);
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: clamp(1.35rem, 2.6vw, 2rem);
          border-radius: 27px;
          background:
            radial-gradient(circle at 100% 0%, rgba(255, 176, 0, 0.12), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(255, 247, 235, 0.82)),
            rgba(255, 255, 255, 0.42);
          backdrop-filter: blur(16px);
        }

        .future-event-date {
          margin: 0;
          color: #9a3b0b;
          font-size: clamp(0.66rem, 0.9vw, 0.76rem);
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .future-event-content h3 {
          margin: 0 0 0.85rem;
          color: var(--future-ink);
          font-size: clamp(1.55rem, 2.6vw, 2.45rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
        }

        .future-event-content p:not(.future-event-date) {
          color: var(--future-muted);
          font-size: clamp(0.94rem, 1.2vw, 1rem);
          line-height: 1.7;
        }

        .future-event-location {
          margin-top: auto;
          padding-top: 1.4rem;
          color: var(--future-teal);
          font-weight: 950;
        }

        .future-roadmap-section {
          padding-top: 0;
        }

        .future-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .future-roadmap-card {
          min-height: 180px;
          padding: 1.25rem;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 250, 245, 0.9), rgba(246, 238, 232, 0.72));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          animation: futureCardIn 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--future-delay);
        }

        .future-roadmap-card span {
          display: inline-flex;
          width: 3rem;
          height: 3rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          color: #ffd36a;
          font-weight: 950;
        }

        .future-roadmap-card p {
          color: var(--future-ink);
          font-weight: 850;
          line-height: 1.55;
        }

        .future-cta-section {
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
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .future-cta-glow {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 66%);
          animation: futureOrbit 18s linear infinite;
          z-index: -1;
        }

        .future-cta-section h2 {
          max-width: 920px;
          color: #fff;
        }

        .future-cta-section p:not(.future-eyebrow) {
          max-width: 680px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        .future-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          margin-top: 2rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .future-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 44px rgba(255, 126, 0, 0.32);
        }

        @supports (animation-timeline: view()) {
          .future-section,
          .future-roadmap-section,
          .future-cta-section {
            animation: futureViewRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 5% cover 26%;
          }

          .future-event-card,
          .future-roadmap-card {
            animation: futureViewScale 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 24%;
          }
        }

        @keyframes futureRise {
          from { opacity: 0; transform: translateY(34px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes futureCardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes futureAurora {
          from { transform: translate3d(-1.5%, 0, 0) scale(1); opacity: 0.72; }
          to { transform: translate3d(1.5%, -1%, 0) scale(1.04); opacity: 1; }
        }

        @keyframes futureFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.45; }
          50% { transform: translateY(-24px) scale(1.22); opacity: 1; }
        }

        @keyframes futureHeroZoom {
          from { transform: translate(-50%, -50%) scale(1.02); }
          to { transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes futureSpotlight {
          0%, 100% { opacity: 0.32; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes futureScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }

        @keyframes futureOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @keyframes futureViewRise {
          from { opacity: 0.5; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes futureViewScale {
          from { opacity: 0.5; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (min-width: 1600px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1360px, calc(100% - 5rem));
          }

          .future-hero {
            min-height: clamp(660px, 72svh, 860px);
          }

          .future-event-content {
            min-height: 360px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1280px, calc(100% - 4rem));
          }
        }

        @media (max-width: 1279px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1120px, calc(100% - 2rem));
          }

          .future-event-content {
            min-height: 330px;
          }
        }

        @media (max-width: 1024px) {
          .future-roadmap-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .future-hero {
            min-height: clamp(500px, 78svh, 680px);
          }

          .future-hero h1 {
            font-size: clamp(3rem, 10vw, 6.2rem);
          }

          .future-hero-image {
            max-width: min(660px, 82vw);
            max-height: min(360px, 52svh);
          }
        }

        @media (max-width: 820px) {
          .future-hero {
            min-height: clamp(500px, 72svh, 640px);
            padding: clamp(6.5rem, 14vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3.5rem, 7vw, 5rem);
          }

          .future-event-grid,
          .future-roadmap-grid {
            gap: 1rem;
          }

          .future-event-content {
            min-height: 320px;
            padding: clamp(1.15rem, 3vw, 1.55rem);
          }

          .future-section-heading {
            margin-bottom: clamp(1.8rem, 5vw, 2.5rem);
          }
        }

        @media (max-width: 900px) {
          .future-event-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(100% - 1rem, 1180px);
          }

          .future-hero {
            min-height: min(82svh, 620px);
            padding: clamp(6rem, 24vw, 8rem) clamp(0.9rem, 4vw, 1.2rem) 3.6rem;
            border-radius: clamp(24px, 8vw, 34px);
          }

          .future-hero h1 {
            font-size: clamp(2.8rem, 15vw, 5.2rem);
            letter-spacing: -0.055em;
          }

          .future-hero p:not(.future-eyebrow) {
            max-width: 34rem;
            font-size: clamp(0.98rem, 4vw, 1.18rem);
            line-height: 1.55;
          }

          .future-hero-image {
            max-width: 86vw;
            max-height: 34svh;
            opacity: 0.18;
          }

          .future-hero-lights span {
            width: clamp(70px, 22vw, 120px);
            filter: blur(18px);
          }

          .future-roadmap-grid {
            grid-template-columns: 1fr;
          }

          .future-event-grid {
            grid-template-columns: 1fr;
          }

          .future-event-content {
            min-height: 0;
            border-radius: 24px;
          }

          .future-event-card {
            border-radius: 26px;
          }

          .future-event-card:hover {
            transform: translateY(-6px) scale(1.005);
          }

          .future-btn {
            width: 100%;
          }

          .future-cta-section {
            min-height: 360px;
            padding: clamp(2rem, 9vw, 3rem) 1rem;
          }
        }

        @media (max-width: 480px) {
          .future-ambient span {
            width: 8px;
            height: 8px;
          }

          .future-event-meta {
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .future-event-badge {
            min-height: 1.8rem;
            padding: 0 0.72rem;
            font-size: 0.58rem;
            letter-spacing: 0.08em;
          }

          .future-event-date {
            font-size: 0.62rem;
            letter-spacing: 0.08em;
          }

          .future-event-location {
            padding-top: 1rem;
          }
        }

        @media (max-width: 420px) {
          .future-hero {
            border-radius: 24px;
          }

          .future-hero h1,
          .future-section-heading h2,
          .future-cta-section h2 {
            font-size: clamp(2.25rem, 14vw, 3.6rem);
          }

          .future-event-content,
          .future-roadmap-card {
            padding: 1rem;
          }
        }

        @media (max-width: 360px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(100% - 0.65rem, 1180px);
          }

          .future-hero h1 {
            font-size: clamp(2.35rem, 15vw, 3.1rem);
          }

          .future-section-heading h2,
          .future-cta-section h2 {
            font-size: clamp(2rem, 13vw, 3rem);
          }

          .future-event-content h3 {
            font-size: clamp(1.35rem, 10vw, 1.8rem);
          }

          .future-event-meta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (hover: none) {
          .future-event-card:active,
          .future-btn:active {
            transform: translateY(-4px) scale(0.995);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .future-events-page::before,
          .future-ambient span,
          .future-hero-image,
          .future-hero-lights span,
          .future-scroll-cue,
          .future-event-card,
          .future-roadmap-card,
          .future-cta-glow {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default FutureEventsPage
