import React from 'react'
import { Link } from 'react-router-dom'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'

const offerCategories = [
  ['Hotels', 'Premium stays and partner accommodation benefits'],
  ['Restaurants', 'Dining deals, family platters, and festival combos'],
  ['Festival Merchandise', 'Exclusive Ozilla drops and limited collections'],
  ['Transport', 'Festival-friendly travel and access support'],
  ['Entertainment', 'Audience experiences and VIP-style benefits'],
  ['Shopping', 'Partner offers for lifestyle and creator audiences']
]

const partnerBenefits = [
  ['Verified Festival Partners', 'Every offer is connected to the Ozilla Festival partner experience.'],
  ['Exclusive Discounts', 'Promo codes and limited-time benefits built for attendees.'],
  ['Premium Experience', 'Hotels, dining, and lifestyle offers designed around comfort and value.'],
  ['Trusted Brands', 'Partner profiles are presented with clear offer details and claim flow.']
]

function buildRestaurantOffers() {
  return ozillaProfessionalContent.restaurants.map((restaurant, index) => ({
    partner: restaurant.name,
    category: 'Restaurants',
    discount: restaurant.discount,
    description: restaurant.offer,
    code: restaurant.code,
    validUntil: index === 0 ? 'Festival Weekend' : 'Limited Time',
    badge: index === 0 ? 'Best Offer' : 'Exclusive',
    featured: index === 0
  }))
}

function buildHotelOffers() {
  return ozillaProfessionalContent.hotels.slice(0, 3).map((hotel, index) => ({
    partner: hotel.name,
    category: 'Hotels',
    discount: index === 0 ? 'VIP Stay' : 'Partner Deal',
    description: hotel.offer,
    code: index === 0 ? 'OZILLA-STAY' : 'PARTNER',
    validUntil: 'Ozilla 2026',
    badge: index === 0 ? 'VIP Deal' : 'Premium',
    featured: false
  }))
}

function DiscountsPage() {
  const offers = [...buildRestaurantOffers(), ...buildHotelOffers()]

  return (
    <main id="top" className="discounts-premium">
      <section className="discounts-hero" aria-label="Exclusive Festival Discounts">
        <div className="discounts-hero-bg" />
        <div className="discounts-orb discounts-orb-one" />
        <div className="discounts-orb discounts-orb-two" />
        <div className="discounts-floating-badges" aria-hidden="true">
          <span>50% OFF</span>
          <span>VIP</span>
          <span>DEALS</span>
          <span>2026</span>
        </div>
        <div className="discounts-hero-content">
          <p className="discounts-eyebrow">Ozilla Festival Rewards</p>
          <h1>Exclusive Member Benefits</h1>
          <p>
            Unlock premium deals, exclusive partner offers, and unforgettable savings
            during Ozilla Festival 2026.
          </p>
        </div>
      </section>

      <section className="discount-featured-offer" aria-label="Offer of the month">
        <div className="discount-featured-copy">
          <p className="discounts-eyebrow">Offer Of The Month</p>
          <h2>VIP festival savings made for premium guests.</h2>
          <p>
            Get priority access to the best partner benefits, curated dining offers,
            and luxury stay deals during Ozilla Festival 2026.
          </p>
        </div>
        <div className="discount-featured-voucher">
          <span>VIP OFFER</span>
          <strong>UP TO 20% OFF</strong>
          <p>Selected partner restaurants and festival experiences.</p>
        </div>
      </section>

      <section className="discounts-categories" aria-label="Offer categories">
        <div className="discounts-section-heading">
          <p className="discounts-eyebrow">VIP Benefit Categories</p>
          <h2>Premium value across your complete festival journey.</h2>
        </div>
        <div className="discount-chip-row" aria-label="Category chips">
          {offerCategories.map(([title]) => (
            <span key={title}>{title}</span>
          ))}
        </div>
        <div className="discount-category-grid">
          {offerCategories.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="discount-offers-section" aria-label="Exclusive offers">
        <div className="discounts-section-heading">
          <p className="discounts-eyebrow">Exclusive Partner Offers</p>
          <h2>Luxury vouchers designed for Ozilla guests.</h2>
        </div>

        <div className="discount-offer-grid">
          {offers.map((offer, index) => (
            <article
              key={`${offer.partner}-${offer.code}`}
              className={`discount-offer-card ${offer.featured ? 'featured' : ''}`}
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="discount-card-top">
                <div className="discount-logo-mark" aria-hidden="true">
                  {offer.partner
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="discount-rating">
                  <span>Exclusive</span>
                  <strong>{offer.badge}</strong>
                </div>
              </div>

              <div className="discount-badge">{offer.discount}</div>

              <div className="discount-card-content">
                <p className="discount-category">{offer.category}</p>
                <h3>{offer.partner}</h3>
                <p>{offer.description}</p>
              </div>

              <div className="discount-detail-grid">
                <div>
                  <span>Valid Until</span>
                  <strong>{offer.validUntil}</strong>
                </div>
                <div>
                  <span>Promo Code</span>
                  <strong>{offer.code}</strong>
                </div>
              </div>

              <div className="discount-card-actions">
                <Link to="/contact" className="discount-action-button">
                  Claim Offer
                </Link>
                <small>Terms apply through festival partner desk.</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="discount-journey">
        <div className="discounts-section-heading">
          <p className="discounts-eyebrow">How It Works</p>
          <h2>A simple claim flow for premium rewards.</h2>
        </div>
        <div className="discount-journey-grid">
          {ozillaProfessionalContent.journey.map((step, index) => (
            <article key={step} style={{ '--delay': `${index * 70}ms` }}>
              <span>Step {index + 1}</span>
              <strong>{step}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="discount-benefits">
        <div className="discounts-section-heading">
          <p className="discounts-eyebrow">Why Choose Our Partners</p>
          <h2>Trusted offers with premium festival value.</h2>
        </div>
        <div className="discount-benefit-grid">
          {partnerBenefits.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 75}ms` }}>
              <div>{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="discounts-cta">
        <p className="discounts-eyebrow">Ozilla VIP Offers</p>
        <h2>Don't miss these exclusive offers.</h2>
        <p>
          Take advantage of premium discounts available only during Ozilla Festival 2026.
        </p>
        <a href="#top" className="discount-action-button">
          Explore All Offers
        </a>
      </section>

      <style>{`
        .discounts-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .discounts-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .discounts-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 189, 89, 0.24), transparent 24rem),
            radial-gradient(circle at 88% 14%, rgba(255, 77, 46, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 84%, rgba(11, 79, 76, 0.14), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(235, 228, 216, 0.92));
        }

        .discounts-hero {
          position: relative;
          min-height: clamp(420px, 56vw, 660px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.32), transparent 20rem),
            linear-gradient(135deg, #041719, #2f1025 58%, #0b4f4c);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .discounts-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 26% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(255, 77, 46, 0.18), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(47, 16, 37, 0.9) 58%, rgba(4, 23, 25, 0.98));
          animation: discountHeroGlow 16s ease-in-out infinite alternate;
        }

        .discounts-hero::before,
        .discounts-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .discounts-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .discounts-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .discounts-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: discountFloat 9s ease-in-out infinite;
        }

        .discounts-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.58);
        }

        .discounts-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(255, 77, 46, 0.4);
          animation-delay: 1.2s;
        }

        .discounts-floating-badges span {
          position: absolute;
          z-index: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 68px;
          min-height: 34px;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.28);
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.18);
          animation: discountBadgeFloat 7s ease-in-out infinite;
        }

        .discounts-floating-badges span:nth-child(1) { left: 10%; top: 22%; }
        .discounts-floating-badges span:nth-child(2) { right: 13%; top: 21%; animation-delay: 1s; }
        .discounts-floating-badges span:nth-child(3) { left: 16%; bottom: 20%; animation-delay: 1.8s; }
        .discounts-floating-badges span:nth-child(4) { right: 18%; bottom: 18%; animation-delay: 2.4s; }

        .discounts-hero-content {
          width: min(100%, 1000px);
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: discountRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .discounts-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .discounts-hero h1 {
          font-size: clamp(3rem, 8.2vw, 7.2rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
          overflow-wrap: normal;
          word-break: normal;
          text-wrap: balance;
        }

        .discounts-hero p:not(.discounts-eyebrow) {
          max-width: 760px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .discounts-categories,
        .discount-featured-offer,
        .discount-offers-section,
        .discount-journey,
        .discount-benefits,
        .discounts-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .discounts-categories,
        .discount-featured-offer,
        .discount-offers-section,
        .discount-journey,
        .discount-benefits {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .discount-featured-offer {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
          gap: clamp(1rem, 4vw, 2.5rem);
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 18%, rgba(255, 189, 89, 0.32), transparent 18rem),
            radial-gradient(circle at 8% 80%, rgba(255, 77, 46, 0.16), transparent 18rem),
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(47, 16, 37, 0.9));
          color: #fff;
        }

        .discount-featured-offer::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, 0.1), transparent 58%);
          animation: discountGlowSweep 8s ease-in-out infinite;
        }

        .discount-featured-copy,
        .discount-featured-voucher {
          position: relative;
          z-index: 1;
        }

        .discount-featured-copy h2 {
          max-width: 820px;
          color: #fff;
          font-size: clamp(2.1rem, 5.6vw, 4.8rem);
          line-height: 0.95;
          letter-spacing: -0.065em;
          text-wrap: balance;
        }

        .discount-featured-copy p:not(.discounts-eyebrow) {
          max-width: 640px;
          margin-top: 0.9rem;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(0.98rem, 1.7vw, 1.15rem);
          line-height: 1.7;
        }

        .discount-featured-voucher {
          display: grid;
          gap: 0.85rem;
          padding: clamp(1.1rem, 3vw, 1.6rem);
          border-radius: 28px;
          border: 1px solid rgba(255, 189, 89, 0.34);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.07)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .discount-featured-voucher span {
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 12px 32px rgba(255, 138, 0, 0.32);
        }

        .discount-featured-voucher strong {
          color: #fff;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          overflow-wrap: anywhere;
        }

        .discount-featured-voucher p {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.55;
        }

        .discounts-section-heading {
          max-width: 820px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .discount-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: clamp(1rem, 2.4vw, 1.45rem);
        }

        .discount-chip-row span {
          display: inline-flex;
          align-items: center;
          min-height: 36px;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.84rem;
          font-weight: 850;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }

        .discount-chip-row span:hover {
          transform: translateY(-2px);
          background: rgba(255, 176, 0, 0.18);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 12px 26px rgba(255, 138, 0, 0.14);
        }

        .discounts-section-heading h2,
        .discounts-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .discount-category-grid,
        .discount-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
        }

        .discount-category-grid article,
        .discount-benefit-grid article,
        .discount-journey-grid article {
          position: relative;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: discountRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .discount-category-grid article:hover,
        .discount-benefit-grid article:hover,
        .discount-journey-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .discount-category-grid span,
        .discount-benefit-grid div {
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

        .discount-category-grid h3,
        .discount-benefit-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .discount-category-grid p,
        .discount-benefit-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .discount-offer-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(250px, 1fr));
          gap: clamp(1rem, 2.4vw, 1.5rem);
        }

        .discount-offer-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
          overflow: hidden;
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border-radius: 32px;
          border: 1px solid rgba(11, 79, 76, 0.14);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(11, 79, 76, 0.1), transparent 18rem);
          box-shadow: 0 26px 82px rgba(2, 11, 13, 0.13);
          backdrop-filter: blur(18px);
          animation: discountRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .discount-category-grid article,
        .discount-benefit-grid article,
        .discount-journey-grid article,
        .discount-offer-card {
          min-width: 0;
        }

        .discount-offer-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.24));
        }

        .discount-offer-card .discount-badge {
          animation: discountBadgePulse 3.4s ease-in-out infinite;
        }

        .discount-offer-card::after {
          content: '';
          position: absolute;
          inset: auto 10% -34px 10%;
          height: 58px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.2);
          filter: blur(24px);
          opacity: 0.55;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .discount-offer-card.featured {
          border-color: rgba(255, 176, 0, 0.5);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        .discount-offer-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .discount-offer-card:hover::after {
          opacity: 0.9;
          transform: scaleX(1.05);
        }

        .discount-card-top,
        .discount-card-content,
        .discount-detail-grid,
        .discount-card-actions,
        .discount-badge {
          position: relative;
          z-index: 1;
        }

        .discount-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .discount-logo-mark {
          width: clamp(50px, 5vw, 58px);
          height: clamp(50px, 5vw, 58px);
          display: grid;
          place-items: center;
          border-radius: 18px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          letter-spacing: 0.04em;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2);
        }

        .discount-rating {
          display: grid;
          justify-items: end;
          gap: 0.12rem;
          color: #55706f;
          font-size: 0.72rem;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .discount-rating strong {
          color: #9a4f00;
          font-size: 0.9rem;
          letter-spacing: 0;
        }

        .discount-badge {
          width: fit-content;
          padding: 0.65rem 0.95rem;
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent 34%),
            linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          max-width: 100%;
          text-align: center;
          box-shadow: 0 14px 36px rgba(255, 138, 0, 0.3), 0 0 32px rgba(255, 189, 89, 0.2);
        }

        .discount-category {
          color: #9a4f00;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .discount-card-content h3 {
          margin-top: 0.22rem;
          color: #101819;
          font-size: clamp(1.55rem, 3vw, 2.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
          overflow-wrap: anywhere;
        }

        .discount-card-content p {
          margin-top: 0.65rem;
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
        }

        .discount-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: auto;
        }

        .discount-detail-grid div {
          padding: 0.78rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
        }

        .discount-detail-grid span {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .discount-detail-grid strong {
          color: #101819;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .discount-card-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        .discount-card-actions small {
          color: #55706f;
          font-weight: 700;
          line-height: 1.45;
        }

        .discount-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0.8rem 1.15rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .discount-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .discount-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .discount-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .discount-journey-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .discount-journey-grid span {
          display: block;
          margin-bottom: 0.3rem;
          color: #9a4f00;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .discount-journey-grid strong {
          color: #101819;
          font-size: 1rem;
        }

        .discounts-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f);
          color: #fff;
        }

        .discounts-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: discountGlowSweep 8s ease-in-out infinite;
        }

        .discounts-cta > * {
          position: relative;
          z-index: 1;
        }

        .discounts-cta h2 {
          color: #fff;
        }

        .discounts-cta > p:not(.discounts-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        .discounts-premium .discounts-cta {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f) !important;
        }

        .discounts-premium .discounts-cta .discounts-eyebrow {
          color: #ffbd59 !important;
        }

        .discounts-premium .discounts-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .discounts-premium .discounts-cta > p:not(.discounts-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .discounts-premium .discounts-cta .discount-action-button {
          color: #101819 !important;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e) !important;
        }

        @keyframes discountRise {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes discountHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes discountFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes discountBadgeFloat {
          0%, 100% { opacity: 0.42; transform: translateY(0) rotate(-2deg); }
          50% { opacity: 1; transform: translateY(-16px) rotate(2deg); }
        }

        @keyframes discountGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @keyframes discountBadgePulse {
          0%, 100% { box-shadow: 0 14px 36px rgba(255, 138, 0, 0.3), 0 0 32px rgba(255, 189, 89, 0.2); }
          50% { box-shadow: 0 18px 46px rgba(255, 138, 0, 0.42), 0 0 44px rgba(255, 189, 89, 0.32); }
        }

        @media (min-width: 1500px) {
          .discount-offer-grid {
            grid-template-columns: repeat(4, minmax(250px, 1fr));
          }

          .discount-category-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }

          .discount-benefit-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .discounts-premium {
            gap: 3rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1499px) {
          .discount-offer-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1200px) {
          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .discount-journey-grid {
            grid-template-columns: repeat(3, minmax(160px, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .discount-featured-offer {
            grid-template-columns: 1fr;
          }

          .discounts-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .discounts-floating-badges span {
            opacity: 0.7;
            transform: scale(0.92);
          }

          .discounts-floating-badges span:nth-child(1) { left: 7%; top: 16%; }
          .discounts-floating-badges span:nth-child(2) { right: 8%; top: 16%; }
          .discounts-floating-badges span:nth-child(3) { left: 8%; bottom: 13%; }
          .discounts-floating-badges span:nth-child(4) { right: 10%; bottom: 13%; }
        }

        @media (min-width: 768px) and (max-width: 920px) {
          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid {
            gap: 0.85rem;
          }

          .discount-offer-card {
            padding: 1rem;
            border-radius: 26px;
          }

          .discount-card-top {
            gap: 0.75rem;
          }
        }

        @media (max-width: 767px) {
          .discounts-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .discounts-hero {
            min-height: clamp(430px, 105vw, 540px);
            border-radius: 26px;
          }

          .discounts-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .discounts-hero h1 {
            font-size: clamp(2.35rem, 13.6vw, 4.5rem);
            line-height: 0.93;
            letter-spacing: -0.06em;
          }

          .discounts-hero p:not(.discounts-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .discounts-categories,
          .discount-featured-offer,
          .discount-offers-section,
          .discount-journey,
          .discount-benefits,
          .discounts-cta {
            border-radius: 24px;
          }

          .discounts-categories,
          .discount-featured-offer,
          .discount-offers-section,
          .discount-journey,
          .discount-benefits {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .discount-featured-copy h2 {
            font-size: clamp(2rem, 10vw, 3.25rem);
            line-height: 0.98;
          }

          .discount-featured-voucher {
            border-radius: 22px;
          }

          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid,
          .discount-journey-grid {
            grid-template-columns: 1fr;
          }

          .discount-offer-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
          }

          .discount-card-top {
            align-items: flex-start;
          }

          .discount-card-content h3 {
            font-size: clamp(1.45rem, 8vw, 2.25rem);
          }

          .discount-detail-grid {
            grid-template-columns: 1fr;
          }

          .discount-action-button {
            width: 100%;
          }

          .discount-chip-row span {
            flex: 1 1 calc(50% - 0.55rem);
            justify-content: center;
          }

          .discounts-floating-badges span {
            min-width: 54px;
            min-height: 30px;
            padding: 0.34rem 0.55rem;
            font-size: 0.64rem;
          }

          .discount-card-actions small {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .discounts-hero {
            min-height: 430px;
          }

          .discounts-hero h1 {
            font-size: clamp(2.08rem, 12.8vw, 3.45rem);
            letter-spacing: -0.05em;
          }

          .discounts-hero p:not(.discounts-eyebrow) {
            max-width: 30ch;
          }

          .discounts-eyebrow {
            letter-spacing: 0.14em;
          }

          .discounts-section-heading h2,
          .discounts-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .discount-card-top {
            gap: 0.65rem;
          }

          .discount-rating {
            font-size: 0.66rem;
          }
        }

        @media (max-width: 360px) {
          .discounts-hero {
            min-height: 410px;
          }

          .discount-offer-card {
            padding: 0.78rem;
          }

          .discount-card-top {
            display: grid;
          }

          .discount-rating {
            justify-items: start;
          }

          .discount-chip-row span {
            flex-basis: 100%;
          }

          .discount-badge,
          .discount-featured-voucher span {
            width: 100%;
            justify-content: center;
          }
        }

        @media (hover: none) {
          .discount-offer-card:hover,
          .discount-category-grid article:hover,
          .discount-benefit-grid article:hover,
          .discount-journey-grid article:hover,
          .discount-action-button:hover {
            transform: none;
          }

          .discount-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .discounts-hero-bg,
          .discounts-orb,
          .discounts-floating-badges span,
          .discounts-hero-content,
          .discount-offer-card,
          .discount-category-grid article,
          .discount-benefit-grid article,
          .discount-journey-grid article,
          .discounts-cta::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default DiscountsPage
