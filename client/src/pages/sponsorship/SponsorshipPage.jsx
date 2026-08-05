import React from 'react'
import { Link } from 'react-router-dom'

const packages = [
  {
    tier: 'Title Sponsor',
    amount: 'PKR 40 Million',
    badge: 'Executive Rights',
    recommended: false,
    details:
      'Naming rights, main stage/SMD dominance, media wall title branding, host mentions, promo code rights, and 20% screen time.',
    benefits: ['Naming Rights', 'Main Stage Branding', 'Media Wall Dominance', 'VIP Access', 'Host Mentions']
  },
  {
    tier: 'Platinum Sponsor',
    amount: 'PKR 4.5 Million',
    badge: 'Recommended',
    recommended: true,
    details:
      'Premium multi-channel reach with entrance and stage branding, VIP access, digital ads, and featured engagement reporting.',
    benefits: ['Stage Visibility', 'VIP Networking', 'Digital Ads', 'Featured Reporting', 'Premium Booth']
  },
  {
    tier: 'Gold Sponsor',
    amount: 'PKR 3.5 Million',
    badge: 'High Impact',
    recommended: false,
    details:
      'Balanced visibility package with on-site sampling, live social shout-outs, influencer integrations, and free stall access.',
    benefits: ['Sampling Access', 'Influencer Mentions', 'Social Shout-outs', 'Stall Access', 'Brand Placement']
  },
  {
    tier: 'Silver Sponsor',
    amount: 'PKR 2.5 Million',
    badge: 'Smart Entry',
    recommended: false,
    details:
      'Focused reach package with app placement, music-zone branding, sponsored posts, promo video slot, and post-event shout-outs.',
    benefits: ['Music Zone Branding', 'Sponsored Posts', 'Promo Video Slot', 'App Placement', 'Post-Event Shout-outs']
  }
]

const sponsorBenefits = [
  ['Brand Visibility', 'Premium on-ground and digital visibility throughout Ozilla Festival.'],
  ['Social Media Exposure', 'Audience-first promotion across festival content and partner campaigns.'],
  ['VIP Networking', 'Access to guests, creators, businesses, and premium festival audiences.'],
  ['Media Coverage', 'High-value content moments designed for campaign amplification.'],
  ['Event Branding', 'Logo placement, activation zones, and memorable physical touchpoints.'],
  ['Thousands of Visitors', 'A festival audience built around youth, families, creators, and brands.']
]

const stats = [
  ['10,000+', 'Visitors'],
  ['20+', 'Celebrity Artists'],
  ['50+', 'Business Partners'],
  ['100%', 'Brand Exposure']
]

const partnerLogos = ['TECH', 'FOOD', 'HOTEL', 'MEDIA', 'STYLE', 'TRAVEL']

const successStories = [
  ['Partner Success', 'Brands become part of visible festival experiences instead of one-time ad placements.'],
  ['Brand Growth', 'On-ground activations convert attention into memorable audience recall.'],
  ['Event Reach', 'Digital content and creator moments extend campaign impact beyond the venue.']
]

const sponsorProcess = [
  ['Submit Inquiry', 'Share your brand goals and preferred sponsorship direction.'],
  ['Consultation', 'Align audience, activation ideas, and business objectives.'],
  ['Select Package', 'Choose the visibility level that fits your growth plan.'],
  ['Partnership Agreement', 'Finalize deliverables, placements, and promotional rights.'],
  ['Brand Promotion', 'Launch your on-ground, digital, and content campaign.']
]

const testimonials = [
  [
    'Partnership Impact',
    'Ozilla Festival gives brands a strong experiential platform where visibility turns into audience memory.'
  ],
  [
    'Marketing Value',
    'The blend of live audience, creators, content moments, and hospitality makes sponsorship feel measurable.'
  ]
]

const proposalDeckSlides = [
  ['Proposal Cover', 'Main Ozilla Festival partnership proposal identity.', '/assets/new-proposal/proposal-cover.jpg'],
  ['About Ozilla', 'Festival background, vision, and corporate positioning.', '/assets/new-proposal/about-us.jpg'],
  ['Festival 2026', 'Flagship Lahore festival story and premium audience promise.', '/assets/new-proposal/festival-2026.jpg'],
  ['Partnership Value', 'Why sponsorship matters for relevant audience access.', '/assets/new-proposal/partnership-matters.jpg'],
  ['Opportunity Scale', 'Audience scale, platform reach, and growth potential.', '/assets/new-proposal/opportunity-scale.jpg'],
  ['Attendee Experience', 'Live concerts, food, DJ nights, activities, and safety.', '/assets/new-proposal/attendee-experience.jpg'],
  ['Audience Journey', 'Discovery to remembrance touchpoints across the festival.', '/assets/new-proposal/audience-journey.jpg'],
  ['Beyond Logo Placement', 'Activation ideas that move sponsorship beyond static branding.', '/assets/new-proposal/beyond-logo-placement.jpg'],
  ['Audience Fit', 'How festival audience behavior connects to sponsor opportunities.', '/assets/new-proposal/audience-sponsor-fit.jpg'],
  ['Brand Visibility', 'Where sponsor brands can appear across the venue.', '/assets/new-proposal/brand-visibility.jpg'],
  ['Venue Branding', 'Stage screens, media walls, entrance branding, and zones.', '/assets/new-proposal/venue-branding.jpg'],
  ['Package Overview', 'Premium sponsorship package structure and tiers.', '/assets/new-proposal/sponsorship-packages-intro.jpg'],
  ['Package Matrix', 'Side-by-side package comparison for executive decisions.', '/assets/new-proposal/package-matrix.jpg'],
  ['Package Comparison', 'Extended comparison of title, gold, silver, and platinum.', '/assets/new-proposal/package-comparison.jpg'],
  ['Title Package', 'Top-tier sponsor rights, pricing, and brand dominance.', '/assets/new-proposal/title-package.jpg'],
  ['Title Deliverables I', 'Naming rights, main branding, panel dominance, and media wall.', '/assets/new-proposal/title-deliverables-one.jpg'],
  ['Title Deliverables II', 'On-stage visibility, host mentions, social story, and red carpet.', '/assets/new-proposal/title-deliverables-two.jpg'],
  ['Title Deliverables III', 'Screen time, contest-led engagement, video recap, and merchandise.', '/assets/new-proposal/title-deliverables-three.jpg'],
  ['Platinum Package', 'Premium sponsorship tier benefits and visibility rights.', '/assets/new-proposal/platinum-package.jpg'],
  ['Platinum Visual', 'Platinum package visual asset area for sponsor presentation.', '/assets/new-proposal/platinum-visual.jpg'],
  ['Platinum Media Layout', 'Reserved media placement layout for premium sponsor visuals.', '/assets/new-proposal/platinum-media-layout.jpg'],
  ['Gold Package', 'Gold sponsorship tier structure and marketing benefits.', '/assets/new-proposal/gold-package.jpg'],
  ['Gold Deliverables', 'Targeted ads, stall space, social posts, and audience engagement.', '/assets/new-proposal/gold-deliverables.jpg'],
  ['Gold Activation Gallery', 'Creative examples for gold-package sponsor activations.', '/assets/new-proposal/gold-activation-gallery.jpg'],
  ['Silver Package', 'Accessible sponsor tier with focused brand exposure.', '/assets/new-proposal/silver-package.jpg'],
  ['Stalls & Benefits', 'Corporate and food stall dimensions, rates, and package benefits.', '/assets/new-proposal/stalls-benefits.jpg'],
  ['Brand Objective', 'Sponsor objective mapping for awareness, lead generation, and sales.', '/assets/new-proposal/brand-objective.jpg'],
  ['Partnership Steps', 'How sponsorship moves from confirmation to campaign reporting.', '/assets/new-proposal/partnership-steps.jpg'],
  ['Sponsor Receives', 'Attendance figures, digital reach, content links, and deliverables.', '/assets/new-proposal/sponsors-receive.jpg'],
  ['Contact & Thanks', 'Official contact details and festival closing proposal page.', '/assets/new-proposal/thank-you-contact.jpg']
]

function SponsorshipPage() {
  return (
    <main className="sponsor-premium">
      <section className="sponsor-hero" aria-label="Become an Ozilla Festival partner">
        <div className="sponsor-hero-bg" />
        <div className="sponsor-orb sponsor-orb-one" />
        <div className="sponsor-orb sponsor-orb-two" />
        <div className="sponsor-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="sponsor-hero-content">
          <p className="sponsor-eyebrow">Corporate Partnership Portal</p>
          <h1>Grow Your Brand With Ozilla Festival</h1>
          <p>
            Partner with one of Pakistan's most exciting festivals and showcase your
            brand to thousands of visitors.
          </p>
        </div>
      </section>

      <section className="sponsor-stats" aria-label="Why sponsor Ozilla Festival">
        {stats.map(([value, label], index) => (
          <article key={label} style={{ '--delay': `${index * 80}ms` }}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="sponsor-proposal-gallery" aria-label="Official Ozilla Festival sponsorship proposal visuals">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Official Proposal Deck</p>
          <h2>Every sponsorship asset organized into a premium visual partnership story.</h2>
        </div>
        <div className="sponsor-proposal-grid">
          {proposalDeckSlides.map(([title, description, image], index) => (
            <article
              key={title}
              className={index === 0 ? 'sponsor-proposal-card featured' : 'sponsor-proposal-card'}
              style={{ '--delay': `${index * 45}ms` }}
            >
              <div className="sponsor-proposal-image">
                <img
                  src={image}
                  alt={`${title} sponsorship visual`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="sponsor-proposal-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-metrics" aria-label="Success metrics">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Success Metrics</p>
          <h2>Built for reach, recall, and measurable brand value.</h2>
        </div>
        <div className="sponsor-metric-grid">
          {[
            ['5M+', 'Social Media Reach'],
            ['50+', 'Corporate Partners'],
            ['20+', 'Celebrity Artists'],
            ['10,000+', 'Festival Visitors']
          ].map(([value, label], index) => (
            <article key={label} style={{ '--delay': `${index * 80}ms` }}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-packages" aria-label="Sponsorship packages">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Premium Sponsorship Packages</p>
          <h2>Partnership levels designed like executive brand proposals.</h2>
        </div>
        <div className="sponsor-package-grid">
          {packages.map((pkg, index) => (
            <article
              key={pkg.tier}
              className={`sponsor-package-card ${pkg.recommended ? 'recommended' : ''}`}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <div className="sponsor-package-top">
                <span>{pkg.badge}</span>
                <strong>{pkg.amount}</strong>
              </div>
              <h3>{pkg.tier}</h3>
              <p>{pkg.details}</p>
              <div className="sponsor-benefit-chips">
                {pkg.benefits.map((benefit) => (
                  <span key={benefit}>{benefit}</span>
                ))}
              </div>
              <Link to="/contact" className="sponsor-card-button">
                Discuss Package
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-benefits" aria-label="Sponsor benefits">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Sponsor Benefits</p>
          <h2>Business value built around visibility, engagement, and trust.</h2>
        </div>
        <div className="sponsor-benefit-grid">
          {sponsorBenefits.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <div>{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-logos" aria-label="Partner logo presentation">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Partner Ecosystem</p>
          <h2>Presented with the polish expected from premium brands.</h2>
        </div>
        <div className="sponsor-logo-grid">
          {partnerLogos.map((logo, index) => (
            <div key={logo} style={{ '--delay': `${index * 70}ms` }}>{logo}</div>
          ))}
        </div>
      </section>

      <section className="sponsor-success" aria-label="Sponsor success stories">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Success Stories</p>
          <h2>Marketing impact beyond a logo placement.</h2>
        </div>
        <div className="sponsor-success-grid">
          {successStories.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 85}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-process" aria-label="Sponsorship process">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Sponsorship Process</p>
          <h2>A clear executive path from inquiry to brand promotion.</h2>
        </div>
        <div className="sponsor-process-grid">
          {sponsorProcess.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-testimonials" aria-label="Partner testimonials">
        <div className="sponsor-section-heading">
          <p className="sponsor-eyebrow">Partner Feedback</p>
          <h2>What premium partners expect from a festival platform.</h2>
        </div>
        <div className="sponsor-testimonial-grid">
          {testimonials.map(([title, quote], index) => (
            <article key={title} style={{ '--delay': `${index * 85}ms` }}>
              <span>"</span>
              <h3>{title}</h3>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-cta">
        <p className="sponsor-eyebrow">Ozilla Festival Partnerships</p>
        <h2>Let's build something extraordinary together.</h2>
        <p>
          Become an official Ozilla Festival partner and grow your brand with one of
          Pakistan's biggest festivals.
        </p>
        <Link to="/contact" className="sponsor-action-button">
          Become A Sponsor
        </Link>
      </section>

      <style>{`
        .sponsor-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .sponsor-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .sponsor-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 6%, rgba(255, 189, 89, 0.2), transparent 24rem),
            radial-gradient(circle at 86% 14%, rgba(42, 126, 255, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 86%, rgba(11, 79, 76, 0.13), transparent 30rem),
            linear-gradient(180deg, rgba(247, 252, 249, 0.96), rgba(232, 236, 224, 0.9));
        }

        .sponsor-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.36;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(8, 42, 78, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .sponsor-hero {
          position: relative;
          min-height: clamp(430px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.26), transparent 20rem),
            linear-gradient(135deg, #041719, #082a4e 48%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .sponsor-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 25% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(42, 126, 255, 0.2), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(8, 42, 78, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: sponsorHeroGlow 16s ease-in-out infinite alternate;
        }

        .sponsor-hero::before,
        .sponsor-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .sponsor-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .sponsor-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .sponsor-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: sponsorFloat 9s ease-in-out infinite;
        }

        .sponsor-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.54);
        }

        .sponsor-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(42, 126, 255, 0.42);
          animation-delay: 1.2s;
        }

        .sponsor-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: sponsorParticle 6s ease-in-out infinite;
        }

        .sponsor-particles span:nth-child(1) { left: 14%; top: 24%; }
        .sponsor-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .sponsor-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .sponsor-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .sponsor-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .sponsor-hero-content {
          width: min(100%, 1030px);
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: sponsorRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .sponsor-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .sponsor-hero h1 {
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: normal;
          word-break: normal;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .sponsor-hero p:not(.sponsor-eyebrow) {
          max-width: 800px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .sponsor-action-button,
        .sponsor-card-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          margin-top: 1.5rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .sponsor-card-button {
          width: fit-content;
          margin-top: auto;
        }

        .sponsor-action-button::before,
        .sponsor-card-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .sponsor-action-button:hover,
        .sponsor-card-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .sponsor-action-button:hover::before,
        .sponsor-card-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .sponsor-stats,
        .sponsor-proposal-gallery,
        .sponsor-metrics,
        .sponsor-packages,
        .sponsor-benefits,
        .sponsor-logos,
        .sponsor-success,
        .sponsor-process,
        .sponsor-testimonials,
        .sponsor-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .sponsor-packages,
        .sponsor-proposal-gallery,
        .sponsor-metrics,
        .sponsor-benefits,
        .sponsor-logos,
        .sponsor-success,
        .sponsor-process,
        .sponsor-testimonials {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .sponsor-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          padding: clamp(0.9rem, 2vw, 1.25rem);
          background: linear-gradient(135deg, #041719, #073332);
        }

        .sponsor-stats article {
          display: grid;
          justify-items: center;
          gap: 0.35rem;
          padding: clamp(1rem, 2.2vw, 1.4rem);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .sponsor-stats strong {
          color: #f7f5ef;
          font-size: clamp(2rem, 5.6vw, 4.8rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .sponsor-stats span {
          color: rgba(255, 255, 255, 0.72);
          font-weight: 850;
        }

        .sponsor-proposal-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.85rem, 1.7vw, 1.2rem);
          align-items: stretch;
        }

        .sponsor-proposal-card {
          position: relative;
          display: grid;
          grid-template-rows: auto 1fr;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 242, 0.54)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 12rem);
          box-shadow: 0 22px 64px rgba(2, 11, 13, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.54);
          backdrop-filter: blur(18px);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .sponsor-proposal-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          z-index: 2;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.48), transparent 34%, rgba(255, 189, 89, 0.2));
          opacity: 0.75;
        }

        .sponsor-proposal-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.16), 0 0 34px rgba(255, 176, 0, 0.1);
        }

        .sponsor-proposal-card.featured {
          grid-column: span 2;
          grid-row: span 2;
          background:
            radial-gradient(circle at 18% 12%, rgba(255, 189, 89, 0.22), transparent 16rem),
            linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 242, 0.56));
        }

        .sponsor-proposal-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1415 / 2000;
          margin: clamp(0.55rem, 1.2vw, 0.75rem);
          border-radius: 20px;
          background: #8b0000;
          box-shadow: 0 18px 44px rgba(2, 11, 13, 0.16);
        }

        .sponsor-proposal-image::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, transparent 58%, rgba(2, 11, 13, 0.18)),
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.13) 50%, transparent 58%);
          opacity: 0.85;
          transition: opacity 260ms ease;
        }

        .sponsor-proposal-card:hover .sponsor-proposal-image::after {
          opacity: 1;
        }

        .sponsor-proposal-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.001);
          transition: transform 520ms ease, filter 520ms ease;
        }

        .sponsor-proposal-card:hover .sponsor-proposal-image img {
          transform: scale(1.045);
          filter: saturate(1.08) contrast(1.03);
        }

        .sponsor-proposal-copy {
          position: relative;
          z-index: 3;
          display: grid;
          align-content: start;
          gap: 0.45rem;
          padding: 0 clamp(0.75rem, 1.8vw, 1rem) clamp(0.85rem, 1.8vw, 1.1rem);
        }

        .sponsor-proposal-copy span {
          width: fit-content;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.6rem;
          border-radius: 999px;
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          font-size: 0.72rem;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(255, 138, 0, 0.18);
        }

        .sponsor-proposal-copy h3 {
          margin: 0;
          color: #101819;
          font-size: clamp(1.05rem, 2.1vw, 1.45rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          overflow-wrap: anywhere;
        }

        .sponsor-proposal-card.featured .sponsor-proposal-copy h3 {
          font-size: clamp(1.45rem, 3vw, 2.35rem);
        }

        .sponsor-proposal-copy p {
          margin: 0;
          color: #55706f;
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .sponsor-metric-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .sponsor-metric-grid article {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 0.55rem;
          justify-items: center;
          padding: clamp(1rem, 2.5vw, 1.45rem);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52)),
            radial-gradient(circle at 50% 0%, rgba(255, 189, 89, 0.18), transparent 12rem);
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .sponsor-metric-grid article::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 34%, rgba(255, 189, 89, 0.18));
        }

        .sponsor-metric-grid strong,
        .sponsor-metric-grid span {
          position: relative;
          z-index: 1;
        }

        .sponsor-metric-grid strong {
          color: #041719;
          font-size: clamp(2.1rem, 5vw, 4.2rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
        }

        .sponsor-metric-grid span {
          color: #55706f;
          font-weight: 850;
          text-align: center;
        }

        .sponsor-section-heading {
          max-width: 860px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .sponsor-section-heading h2,
        .sponsor-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .sponsor-package-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.35rem);
          align-items: stretch;
        }

        .sponsor-package-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
          overflow: hidden;
          padding: clamp(1rem, 2.2vw, 1.35rem);
          border-radius: 30px;
          border: 1px solid rgba(11, 79, 76, 0.14);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(42, 126, 255, 0.1), transparent 18rem);
          box-shadow: 0 26px 82px rgba(2, 11, 13, 0.13);
          backdrop-filter: blur(18px);
          animation: sponsorRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .sponsor-package-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.24));
        }

        .sponsor-package-card.recommended {
          border-color: rgba(255, 176, 0, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        @media (min-width: 1281px) {
          .sponsor-package-card.recommended {
            grid-column: span 2;
          }

          .sponsor-package-card.recommended h3 {
            font-size: clamp(2.1rem, 3.7vw, 3.3rem);
          }

          .sponsor-package-card.recommended .sponsor-benefit-chips span {
            min-height: 38px;
          }
        }

        .sponsor-package-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .sponsor-package-card.recommended:hover {
          transform: translateY(-10px);
        }

        .sponsor-package-card > * {
          position: relative;
          z-index: 1;
        }

        .sponsor-package-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .sponsor-package-top span {
          padding: 0.48rem 0.7rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sponsor-package-top strong {
          color: #9a4f00;
          font-size: 0.92rem;
          text-align: right;
        }

        .sponsor-package-card h3 {
          color: #101819;
          font-size: clamp(1.55rem, 3vw, 2.45rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .sponsor-package-card p {
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
        }

        .sponsor-benefit-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .sponsor-benefit-chips span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.48rem 0.68rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.82rem;
          font-weight: 820;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
          text-align: center;
        }

        .sponsor-benefit-grid,
        .sponsor-success-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
        }

        .sponsor-benefit-grid article,
        .sponsor-success-grid article {
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-benefit-grid article:hover,
        .sponsor-success-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .sponsor-benefit-grid div,
        .sponsor-success-grid span {
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

        .sponsor-benefit-grid h3,
        .sponsor-success-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .sponsor-benefit-grid p,
        .sponsor-success-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .sponsor-logo-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(120px, 1fr));
          gap: 0.85rem;
        }

        .sponsor-logo-grid div {
          min-height: 86px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          border: 1px solid rgba(11, 79, 76, 0.12);
          background: rgba(255, 255, 255, 0.62);
          color: #0b4f4c;
          font-weight: 950;
          letter-spacing: 0.12em;
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-logo-grid div:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.3);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12), 0 0 28px rgba(255, 189, 89, 0.12);
        }

        .sponsor-process-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(150px, 1fr));
          gap: 0.85rem;
        }

        .sponsor-process-grid::before {
          content: '';
          position: absolute;
          left: 6%;
          right: 6%;
          top: 36px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 189, 89, 0.72), transparent);
          opacity: 0.75;
        }

        .sponsor-process-grid article,
        .sponsor-testimonial-grid article {
          position: relative;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-process-grid article:hover,
        .sponsor-testimonial-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .sponsor-process-grid span,
        .sponsor-testimonial-grid span {
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

        .sponsor-process-grid h3,
        .sponsor-testimonial-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .sponsor-process-grid p,
        .sponsor-testimonial-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .sponsor-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(0.9rem, 2vw, 1.2rem);
        }

        .sponsor-testimonial-grid article {
          min-height: 190px;
          background:
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 14rem),
            linear-gradient(145deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 242, 0.54));
        }

        .sponsor-testimonial-grid span {
          font-size: 2rem;
          line-height: 1;
        }

        .sponsor-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(42, 126, 255, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #2f1025);
          color: #fff;
        }

        .sponsor-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: sponsorGlowSweep 8s ease-in-out infinite;
        }

        .sponsor-cta > * {
          position: relative;
          z-index: 1;
        }

        .sponsor-cta h2 {
          color: #fff;
        }

        .sponsor-cta > p:not(.sponsor-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        @keyframes sponsorRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes sponsorHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes sponsorFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes sponsorParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes sponsorGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (max-width: 1280px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-proposal-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-proposal-card.featured {
            grid-column: span 2;
          }

          .sponsor-process-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-process-grid::before {
            display: none;
          }
        }

        @media (min-width: 1500px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }

          .sponsor-premium {
            gap: 3rem;
          }
        }

        @media (min-width: 1281px) and (max-width: 1499px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-package-card.recommended {
            grid-column: span 1;
          }
        }

        @media (max-width: 1023px) {
          .sponsor-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-metric-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-benefit-grid,
          .sponsor-success-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-proposal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .sponsor-particles span {
            opacity: 0.72;
            transform: scale(0.92);
          }

          .sponsor-package-card.recommended {
            grid-column: auto;
          }
        }

        @media (min-width: 768px) and (max-width: 920px) {
          .sponsor-package-grid,
          .sponsor-benefit-grid,
          .sponsor-success-grid,
          .sponsor-process-grid,
          .sponsor-testimonial-grid {
            gap: 0.85rem;
          }

          .sponsor-package-card {
            padding: 1rem;
            border-radius: 26px;
          }

          .sponsor-benefit-chips span {
            flex: 1 1 auto;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .sponsor-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .sponsor-hero {
            min-height: clamp(440px, 108vw, 560px);
            border-radius: 26px;
          }

          .sponsor-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .sponsor-hero h1 {
            font-size: clamp(2.3rem, 13vw, 4.5rem);
            line-height: 0.94;
            letter-spacing: -0.06em;
          }

          .sponsor-hero p:not(.sponsor-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .sponsor-stats,
          .sponsor-proposal-gallery,
          .sponsor-metrics,
          .sponsor-packages,
          .sponsor-benefits,
          .sponsor-logos,
          .sponsor-success,
          .sponsor-process,
          .sponsor-testimonials,
          .sponsor-cta {
            border-radius: 24px;
          }

          .sponsor-packages,
          .sponsor-proposal-gallery,
          .sponsor-metrics,
          .sponsor-benefits,
          .sponsor-logos,
          .sponsor-success,
          .sponsor-process,
          .sponsor-testimonials {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .sponsor-stats,
          .sponsor-proposal-grid,
          .sponsor-metric-grid,
          .sponsor-package-grid,
          .sponsor-benefit-grid,
          .sponsor-success-grid,
          .sponsor-logo-grid,
          .sponsor-process-grid,
          .sponsor-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .sponsor-proposal-card.featured {
            grid-column: auto;
            grid-row: auto;
          }

          .sponsor-proposal-image {
            aspect-ratio: 4 / 3;
          }

          .sponsor-package-card.recommended {
            transform: none;
          }

          .sponsor-package-top {
            display: grid;
          }

          .sponsor-package-top strong {
            text-align: left;
          }

          .sponsor-card-button,
          .sponsor-action-button {
            width: 100%;
          }

          .sponsor-package-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
          }

          .sponsor-package-card h3 {
            font-size: clamp(1.45rem, 8vw, 2.25rem);
          }

          .sponsor-benefit-chips span {
            flex: 1 1 calc(50% - 0.5rem);
            justify-content: center;
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-logo-grid div {
            min-height: 72px;
          }

          .sponsor-particles span {
            width: 0.36rem;
            height: 0.36rem;
          }
        }

        @media (max-width: 420px) {
          .sponsor-hero {
            min-height: 430px;
          }

          .sponsor-hero h1 {
            font-size: clamp(2.05rem, 12vw, 3.35rem);
            letter-spacing: -0.05em;
          }

          .sponsor-hero p:not(.sponsor-eyebrow) {
            max-width: 31ch;
          }

          .sponsor-eyebrow {
            letter-spacing: 0.14em;
          }

          .sponsor-section-heading h2,
          .sponsor-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .sponsor-package-top {
            gap: 0.65rem;
          }

          .sponsor-stats strong,
          .sponsor-metric-grid strong {
            font-size: clamp(2rem, 15vw, 3.3rem);
          }
        }

        @media (max-width: 360px) {
          .sponsor-hero {
            min-height: 410px;
          }

          .sponsor-package-card {
            padding: 0.78rem;
          }

          .sponsor-benefit-chips span {
            flex-basis: 100%;
          }

          .sponsor-logo-grid {
            grid-template-columns: 1fr;
          }

          .sponsor-proposal-image {
            aspect-ratio: 1 / 1.08;
            margin: 0.5rem;
            border-radius: 16px;
          }
        }

        @media (hover: none) {
          .sponsor-package-card:hover,
          .sponsor-package-card.recommended:hover,
          .sponsor-proposal-card:hover,
          .sponsor-benefit-grid article:hover,
          .sponsor-success-grid article:hover,
          .sponsor-logo-grid div:hover,
          .sponsor-action-button:hover,
          .sponsor-card-button:hover {
            transform: none;
          }

          .sponsor-action-button:active,
          .sponsor-card-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-hero-bg,
          .sponsor-orb,
          .sponsor-particles span,
          .sponsor-hero-content,
          .sponsor-stats article,
          .sponsor-proposal-card,
          .sponsor-package-card,
          .sponsor-benefit-grid article,
          .sponsor-success-grid article,
          .sponsor-logo-grid div,
          .sponsor-cta::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default SponsorshipPage
