import React from 'react'
import { Link } from 'react-router-dom'

const facilities = [
  {
    icon: 'P',
    name: 'Secure Parking',
    detail: 'Organized arrival support with safe parking guidance for festival guests.',
    availability: 'Event Hours',
    benefit: 'Convenient entry and exit flow',
    note: 'Follow venue staff guidance for parking access.'
  },
  {
    icon: 'Wi',
    name: 'High-Speed Wi-Fi',
    detail: 'Connectivity support for creators, guests, and digital festival moments.',
    availability: 'Selected Zones',
    benefit: 'Easy sharing and communication',
    note: 'Best coverage around creator and information zones.'
  },
  {
    icon: 'FC',
    name: 'Premium Food Court',
    detail: 'Curated food, cafe, and partner dining experiences across the venue.',
    availability: 'All Day',
    benefit: 'Family-friendly refreshment access',
    note: 'Peak timings may have managed queues.'
  },
  {
    icon: 'MD',
    name: 'Medical Assistance',
    detail: 'Dedicated support points for quick first-aid and guest care needs.',
    availability: 'On Site',
    benefit: 'Safety-first festival operations',
    note: 'Contact event staff immediately for assistance.'
  },
  {
    icon: 'SC',
    name: 'Security Services',
    detail: 'Trained security support across entrances, audience zones, and movement paths.',
    availability: 'Full Event',
    benefit: 'A safer festival environment',
    note: 'Security checks apply at entry points.'
  },
  {
    icon: 'WR',
    name: 'Clean Washrooms',
    detail: 'Clean, accessible, and regularly maintained guest convenience areas.',
    availability: 'All Zones',
    benefit: 'Comfort throughout the event',
    note: 'Maintenance teams rotate throughout event hours.'
  },
  {
    icon: 'AC',
    name: 'Accessibility Support',
    detail: 'Guest-focused support for inclusive and comfortable movement through the venue.',
    availability: 'Information Desk',
    benefit: 'Better access for every visitor',
    note: 'Ask the information desk for route support.'
  },
  {
    icon: 'CH',
    name: 'Charging Stations',
    detail: 'Power support points for phones, creators, and essential event connectivity.',
    availability: 'Selected Areas',
    benefit: 'Stay connected longer',
    note: 'Bring your own charging cable where possible.'
  }
]

const experienceValues = [
  ['Comfort', 'Thoughtful guest touchpoints for long festival hours.'],
  ['Safety', 'Operational support designed around crowd confidence.'],
  ['Convenience', 'Facilities positioned around the visitor journey.'],
  ['Accessibility', 'More inclusive access for families and guests.'],
  ['Hospitality', 'Premium experience standards across key zones.'],
  ['Family Friendly', 'Services that support a comfortable group visit.']
]

const stats = [
  ['20+', 'Festival Facilities'],
  ['10,000+', 'Visitors Served'],
  ['24/7', 'Medical Support'],
  ['100%', 'Safety Commitment']
]

function FacilitiesPage() {
  return (
    <main className="facilities-premium">
      <section className="facilities-hero" aria-label="World-class festival facilities">
        <div className="facilities-hero-bg" />
        <div className="facilities-orb facilities-orb-one" />
        <div className="facilities-orb facilities-orb-two" />
        <div className="facilities-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="facilities-hero-content">
          <p className="facilities-eyebrow">Ozilla Festival 2026</p>
          <h1>Everything You Need For An Unforgettable Festival Experience</h1>
          <p>Premium comfort, safety, hospitality, and world-class visitor services at Ozilla Festival 2026.</p>
        </div>
      </section>

      <section className="facility-featured" aria-label="Featured facility">
        <div>
          <p className="facilities-eyebrow">Featured Facility</p>
          <h2>Premium Food Court</h2>
          <p>
            A curated hospitality zone with partner food experiences, family-friendly
            seating, refreshment access, and festival-ready service flow.
          </p>
        </div>
        <div className="facility-featured-card">
          <span>VIP Experience</span>
          <strong>Food, comfort, and social energy in one premium zone.</strong>
        </div>
      </section>

      <section className="facility-stats" aria-label="Facility statistics">
        {stats.map(([value, label], index) => (
          <article key={label} style={{ '--delay': `${index * 80}ms` }}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="facility-showcase" aria-label="Facility showcase">
        <div className="facilities-section-heading">
          <p className="facilities-eyebrow">Premium Facility Showcase</p>
          <h2>Every service designed around comfort, safety, and convenience.</h2>
        </div>
        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <article key={facility.name} className="facility-card" style={{ '--delay': `${index * 70}ms` }}>
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.name}</h3>
              <p>{facility.detail}</p>
              <div className="facility-meta">
                <div>
                  <span>Availability</span>
                  <strong>{facility.availability}</strong>
                </div>
                <div>
                  <span>Benefit</span>
                  <strong>{facility.benefit}</strong>
                </div>
              </div>
              <div className="facility-note">
                <span>Important Note</span>
                <strong>{facility.note}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="facility-experience" aria-label="Why our facilities are different">
        <div className="facilities-section-heading">
          <p className="facilities-eyebrow">Why Our Facilities Are Different</p>
          <h2>A premium guest journey built for every visitor.</h2>
        </div>
        <div className="facility-experience-grid">
          {experienceValues.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <div>{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="facility-cta">
        <p className="facilities-eyebrow">Ozilla Experience</p>
        <h2>Ready to experience world-class facilities?</h2>
        <p>
          Discover every premium service designed to make your Ozilla Festival experience unforgettable.
        </p>
        <Link to="/events/future" className="facility-action-button">
          Explore Festival
        </Link>
      </section>

      <style>{`
        .facilities-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .facilities-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .facilities-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 189, 89, 0.22), transparent 24rem),
            radial-gradient(circle at 86% 14%, rgba(20, 142, 126, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 84%, rgba(255, 77, 46, 0.11), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(232, 236, 224, 0.9));
        }

        .facilities-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.36;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .facilities-hero {
          position: relative;
          min-height: clamp(430px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.28), transparent 20rem),
            linear-gradient(135deg, #041719, #073332 48%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .facilities-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 25% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(20, 142, 126, 0.22), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(7, 51, 50, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: facilityHeroGlow 16s ease-in-out infinite alternate;
        }

        .facilities-hero::before,
        .facilities-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .facilities-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .facilities-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .facilities-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: facilityFloat 9s ease-in-out infinite;
        }

        .facilities-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.56);
        }

        .facilities-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.42);
          animation-delay: 1.2s;
        }

        .facilities-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: facilityParticle 6s ease-in-out infinite;
        }

        .facilities-particles span:nth-child(1) { left: 14%; top: 24%; }
        .facilities-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .facilities-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .facilities-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .facilities-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .facilities-hero-content {
          width: min(100%, 1030px);
          position: relative;
          z-index: 2;
          padding: clamp(1.8rem, 5.6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: facilityRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .facilities-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .facilities-hero h1 {
          font-size: clamp(2.8rem, 7.2vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.068em;
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: normal;
          max-width: 11.5ch;
          margin-inline: auto;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .facilities-hero p:not(.facilities-eyebrow) {
          max-width: 760px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .facility-featured,
        .facility-stats,
        .facility-showcase,
        .facility-experience,
        .facility-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .facility-featured,
        .facility-showcase,
        .facility-experience {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .facility-featured {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
          gap: clamp(1rem, 4vw, 2.5rem);
          align-items: center;
          overflow: hidden;
        }

        .facility-featured::before {
          content: '';
          position: absolute;
          inset: -30% -15%;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 20%, rgba(255, 189, 89, 0.2), transparent 14rem),
            linear-gradient(115deg, transparent 36%, rgba(255, 255, 255, 0.34), transparent 48%);
          opacity: 0.55;
          animation: facilityGlowSweep 9s ease-in-out infinite;
        }

        .facility-featured > * {
          position: relative;
          z-index: 1;
        }

        .facility-featured h2,
        .facilities-section-heading h2,
        .facility-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .facility-featured p:not(.facilities-eyebrow),
        .facility-cta > p:not(.facilities-eyebrow) {
          color: #55706f;
          font-size: clamp(0.98rem, 1.7vw, 1.14rem);
          line-height: 1.7;
        }

        .facility-featured-card {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 0.8rem;
          padding: clamp(1.1rem, 3vw, 1.6rem);
          border-radius: 28px;
          border: 1px solid rgba(255, 189, 89, 0.34);
          background:
            linear-gradient(145deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          color: #fff;
          box-shadow: 0 28px 86px rgba(0, 0, 0, 0.24), 0 0 44px rgba(255, 176, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .facility-featured-card::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent 32%, transparent 72%, rgba(255, 189, 89, 0.18));
        }

        .facility-featured-card span {
          position: relative;
          z-index: 1;
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .facility-featured-card strong {
          position: relative;
          z-index: 1;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .facility-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          padding: clamp(0.9rem, 2vw, 1.25rem);
          background: linear-gradient(135deg, #041719, #073332);
        }

        .facility-stats article {
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 0.35rem;
          min-height: clamp(132px, 12vw, 188px);
          padding: clamp(1rem, 2.2vw, 1.4rem);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          animation: facilityRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .facility-stats strong {
          color: #f7f5ef;
          font-size: clamp(2rem, 5.6vw, 4.8rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .facility-stats span {
          color: rgba(255, 255, 255, 0.72);
          font-weight: 850;
          text-align: center;
          line-height: 1.2;
        }

        .facilities-section-heading {
          max-width: 860px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.25rem);
          align-items: stretch;
        }

        .facility-card {
          position: relative;
          display: grid;
          grid-template-rows: auto auto minmax(0, 1fr) auto auto;
          gap: 0.9rem;
          overflow: hidden;
          padding: clamp(1rem, 2.3vw, 1.35rem);
          border-radius: 32px;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(20, 142, 126, 0.1), transparent 18rem);
          box-shadow: 0 28px 86px rgba(2, 11, 13, 0.12), 0 1px 0 rgba(255, 255, 255, 0.7) inset;
          backdrop-filter: blur(18px);
          animation: facilityRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .facility-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.22));
        }

        .facility-card::after {
          content: '';
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: -18px;
          height: 30px;
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.2);
          filter: blur(18px);
          opacity: 0;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .facility-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 38px 116px rgba(2, 11, 13, 0.18), 0 0 40px rgba(255, 176, 0, 0.1);
        }

        .facility-card:hover::after {
          opacity: 1;
          transform: translateY(-5px);
        }

        .facility-card > * {
          position: relative;
          z-index: 1;
        }

        .facility-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          letter-spacing: 0.04em;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2), 0 0 26px rgba(255, 189, 89, 0.18);
          animation: facilityFloat 5.5s ease-in-out infinite;
        }

        .facility-card h3 {
          color: #101819;
          font-size: clamp(1.35rem, 2.5vw, 2.1rem);
          line-height: 1;
          letter-spacing: -0.05em;
          overflow-wrap: anywhere;
        }

        .facility-card p {
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
          font-size: clamp(0.92rem, 1.2vw, 1rem);
        }

        .facility-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
          margin-top: auto;
        }

        .facility-meta div {
          padding: 0.75rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
        }

        .facility-meta span {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .facility-meta strong {
          color: #101819;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .facility-note {
          padding: 0.82rem;
          border-radius: 18px;
          background:
            linear-gradient(145deg, rgba(255, 245, 224, 0.72), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.22), transparent 10rem);
          border: 1px solid rgba(255, 176, 0, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.62);
        }

        .facility-note span {
          display: block;
          margin-bottom: 0.24rem;
          color: #a86400;
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .facility-note strong {
          display: block;
          color: #0b4f4c;
          font-size: 0.9rem;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .facility-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
          align-items: stretch;
        }

        .facility-experience-grid article {
          display: grid;
          align-content: start;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: facilityRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .facility-experience-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .facility-experience-grid div {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .facility-experience-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .facility-experience-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .facility-cta {
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

        .facility-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: facilityGlowSweep 8s ease-in-out infinite;
        }

        .facility-cta > * {
          position: relative;
          z-index: 1;
        }

        .facility-cta h2 {
          color: #fff;
        }

        .facility-cta > p:not(.facilities-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        .facility-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          max-width: 100%;
          margin-top: 1.5rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .facility-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .facility-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .facility-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        @keyframes facilityRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes facilityHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes facilityFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes facilityParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes facilityGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (min-width: 1600px) {
          .facilities-premium {
            gap: 3.2rem;
          }

          .facility-grid {
            gap: 1.45rem;
          }
        }

        @media (max-width: 1279px) {
          .facility-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1200px) {
          .facility-experience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .facility-featured {
            grid-template-columns: 1fr;
          }

          .facility-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .facilities-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .facility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .facilities-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .facilities-hero {
            min-height: clamp(430px, 108vw, 560px);
            border-radius: 26px;
          }

          .facilities-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .facilities-hero h1 {
            font-size: clamp(2rem, 11.5vw, 4.2rem);
            line-height: 0.96;
            letter-spacing: -0.06em;
            max-width: 9.4ch;
          }

          .facilities-hero p:not(.facilities-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .facility-featured,
          .facility-stats,
          .facility-showcase,
          .facility-experience,
          .facility-cta {
            border-radius: 24px;
          }

          .facility-featured,
          .facility-showcase,
          .facility-experience {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .facility-grid,
          .facility-experience-grid {
            grid-template-columns: 1fr;
          }

          .facility-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.65rem;
          }

          .facility-stats article {
            min-height: 116px;
          }

          .facility-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
            gap: 0.82rem;
          }

          .facility-meta {
            grid-template-columns: 1fr;
          }

          .facility-note {
            padding: 0.75rem;
          }

          .facility-featured-card span {
            width: 100%;
            text-align: center;
          }

          .facility-featured-card {
            order: -1;
          }

          .facility-action-button {
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .facilities-hero {
            min-height: clamp(410px, 112vw, 520px);
          }

          .facility-stats {
            grid-template-columns: 1fr;
          }

          .facility-stats article {
            min-height: 104px;
          }

          .facility-stats strong {
            font-size: clamp(2.2rem, 16vw, 4rem);
          }
        }

        @media (max-width: 420px) {
          .facilities-hero {
            min-height: 420px;
          }

          .facilities-hero h1 {
            font-size: clamp(1.82rem, 11.4vw, 3.15rem);
            letter-spacing: -0.046em;
            max-width: 9.2ch;
          }

          .facilities-eyebrow {
            letter-spacing: 0.14em;
            font-size: 0.68rem;
          }

          .facility-featured h2,
          .facilities-section-heading h2,
          .facility-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .facility-icon {
            width: 52px;
            height: 52px;
            border-radius: 16px;
          }

          .facility-featured,
          .facility-showcase,
          .facility-experience,
          .facility-cta {
            padding-inline: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .facilities-hero-content {
            padding-inline: 0.95rem;
          }

          .facilities-hero h1 {
            font-size: clamp(1.68rem, 11vw, 2.7rem);
            max-width: 9ch;
          }

          .facility-featured h2,
          .facilities-section-heading h2,
          .facility-cta h2 {
            font-size: clamp(1.6rem, 9.5vw, 2.3rem);
          }

          .facility-card,
          .facility-experience-grid article {
            padding: 0.82rem;
          }

          .facility-meta div,
          .facility-note {
            padding: 0.68rem;
          }
        }

        @media (hover: none) {
          .facility-card:hover,
          .facility-experience-grid article:hover,
          .facility-action-button:hover {
            transform: none;
          }

          .facility-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .facilities-hero-bg,
          .facilities-orb,
          .facilities-particles span,
          .facilities-hero-content,
          .facility-stats article,
          .facility-card,
          .facility-icon,
          .facility-experience-grid article,
          .facility-cta::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default FacilitiesPage
