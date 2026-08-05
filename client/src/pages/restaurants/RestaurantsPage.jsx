import React from 'react'
import { Link } from 'react-router-dom'
import { ozillaProfessionalContent } from '../../data/ozillaProfessionalContent'

const cuisineChips = {
  'Street Grill Co.': ['BBQ Dining', 'Fast Casual', 'Family Dining', 'Festival Combos'],
  'Spice District': ['Pakistani Fusion', 'Signature Platters', 'Traditional Taste', 'Group Dining'],
  'Urban Brew': ['Cafe Lounge', 'Desserts', 'Coffee Bar', 'Creator Hangout']
}

const facilityChips = {
  'Street Grill Co.': ['Free Wi-Fi', 'Valet Parking', 'Air Conditioning', 'Family Friendly'],
  'Spice District': ['Family Seating', 'VIP Tables', 'Air Conditioning', 'Group Service'],
  'Urban Brew': ['Free Wi-Fi', 'Cafe Lounge', 'Dessert Bar', 'Creator Friendly']
}

const openingHours = {
  'Street Grill Co.': '12:00 PM - 1:00 AM',
  'Spice District': '1:00 PM - 12:00 AM',
  'Urban Brew': '10:00 AM - 11:30 PM'
}

const ratings = {
  'Street Grill Co.': { score: '4.8', label: 'Excellent' },
  'Spice District': { score: '4.9', label: 'Exceptional' },
  'Urban Brew': { score: '4.7', label: 'Loved by Creators' }
}

const benefits = [
  ['Festival Partner Restaurants', 'Curated dining partners selected for Ozilla visitors and families.'],
  ['Exclusive Festival Discounts', 'Special promo codes and limited-time restaurant offers.'],
  ['Premium Dining', 'Comfortable spaces, polished service, and crowd-friendly menus.'],
  ['VIP Hospitality', 'Dining experiences designed around Lahore festival energy.']
]

function RestaurantsPage() {
  const restaurants = ozillaProfessionalContent.restaurants.map((restaurant, index) => ({
    ...restaurant,
    rating: ratings[restaurant.name] || { score: '4.8', label: 'Excellent' },
    cuisines: cuisineChips[restaurant.name] || [restaurant.cuisine],
    facilities: facilityChips[restaurant.name] || ['Free Wi-Fi', 'Family Friendly', 'Air Conditioned'],
    hours: openingHours[restaurant.name] || '12:00 PM - 12:00 AM',
    featured: index === 0
  }))

  return (
    <main className="restaurants-premium">
      <section className="restaurants-hero" aria-label="Premium Dining Experience">
        <div className="restaurants-hero-bg" />
        <div className="restaurants-orb restaurants-orb-one" />
        <div className="restaurants-orb restaurants-orb-two" />
        <div className="restaurants-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="restaurants-hero-content">
          <p className="restaurants-eyebrow">Ozilla Festival 2026</p>
          <h1>Discover the Finest Dining Experience</h1>
          <p>
            Discover the finest restaurants and unforgettable culinary experiences during
            Ozilla Festival 2026.
          </p>
        </div>
      </section>

      <section className="restaurants-intro">
        <div>
          <p className="restaurants-eyebrow">Partner Restaurant Collection</p>
          <h2>Curated dining for music, families, creators, and festival guests.</h2>
        </div>
        <p>
          Restaurants onboarded with Ozilla include dedicated partner profiles, cuisine
          details, festival discounts, promo codes, and dining offers shaped for a premium
          event audience.
        </p>
      </section>

      <section id="restaurant-listings" className="restaurant-listings" aria-label="Restaurant listings">
        {restaurants.map((restaurant, index) => (
          <article
            key={restaurant.name}
            className={`restaurant-listing ${restaurant.featured ? 'featured' : ''}`}
            style={{ '--delay': `${index * 90}ms` }}
          >
            <div className="restaurant-info-panel">
              {restaurant.featured && <span className="restaurant-featured-badge restaurant-featured-inline">Chef's Recommendation</span>}
              <div className="restaurant-title-row">
                <div>
                  <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                  <h3>{restaurant.name}</h3>
                  <p className="restaurant-location">Lahore, Pakistan</p>
                </div>
                <div className="restaurant-rating-box" aria-label={`${restaurant.rating.score} rating ${restaurant.rating.label}`}>
                  <span>★★★★★</span>
                  <strong>{restaurant.rating.score}</strong>
                  <small>{restaurant.rating.label}</small>
                  <em>Premium Partner</em>
                </div>
              </div>

              <p className="restaurant-description">
                {restaurant.offer} A refined festival dining stop with warm hospitality,
                polished service, and a menu experience crafted for Ozilla guests.
              </p>

              <div className="restaurant-meta-grid">
                <div>
                  <span>Discount</span>
                  <strong>{restaurant.discount}</strong>
                </div>
                <div>
                  <span>Opening Hours</span>
                  <strong>{restaurant.hours}</strong>
                </div>
                <div>
                  <span>Promo Code</span>
                  <strong>{restaurant.code}</strong>
                </div>
              </div>

              <div className="restaurant-chip-section">
                <p>Specialties</p>
                <div className="restaurant-chip-row">
                  {restaurant.cuisines.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>

              <div className="restaurant-chip-section">
                <p>Facilities</p>
                <div className="restaurant-chip-row">
                  {restaurant.facilities.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>

              <div className="restaurant-actions">
                <Link to="/discounts" className="restaurant-action-button">
                  Claim Offer
                </Link>
                <span>Contact: Partner desk available during festival hours</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="restaurants-benefits">
        <div className="restaurants-section-heading">
          <p className="restaurants-eyebrow">Why Dine With Our Partners</p>
          <h2>Food experiences designed for the festival lifestyle.</h2>
        </div>
        <div className="restaurants-benefit-grid">
          {benefits.map(([title, description], index) => (
            <article key={title} style={{ '--delay': `${index * 80}ms` }}>
              <div className="restaurants-benefit-icon">{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="restaurants-cta">
        <p className="restaurants-eyebrow">Ozilla Dining</p>
        <h2>Your perfect dining experience awaits.</h2>
        <p>Discover Lahore's finest restaurants during Ozilla Festival 2026.</p>
        <Link to="/discounts" className="restaurants-hero-button">
          Explore Restaurants
        </Link>
      </section>

      <style>{`
        .restaurants-premium {
          position: relative;
          width: min(100%, 1680px);
          margin-inline: auto;
          display: grid;
          gap: clamp(1.6rem, 3.4vw, 3rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .restaurants-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background:
            radial-gradient(circle at 10% 4%, rgba(255, 189, 89, 0.25), transparent 25rem),
            radial-gradient(circle at 86% 12%, rgba(255, 77, 46, 0.16), transparent 28rem),
            radial-gradient(circle at 48% 82%, rgba(11, 79, 76, 0.12), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(238, 230, 215, 0.9));
        }

        .restaurants-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          opacity: 0.42;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.2) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 88px 88px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .restaurants-hero {
          position: relative;
          min-height: clamp(420px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(57, 19, 47, 0.88)),
            radial-gradient(circle at 50% 45%, rgba(255, 176, 0, 0.3), transparent 25rem);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .restaurants-hero-bg {
          position: absolute;
          inset: -8%;
          background:
            radial-gradient(circle at 26% 28%, rgba(255, 189, 89, 0.24), transparent 18rem),
            radial-gradient(circle at 72% 34%, rgba(255, 77, 46, 0.16), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(47, 16, 37, 0.9) 58%, rgba(4, 23, 25, 0.98));
          opacity: 1;
          filter: saturate(1.16) contrast(1.08);
          animation: restaurantHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .restaurants-hero::before,
        .restaurants-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .restaurants-hero::before {
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.34), transparent 18rem),
            radial-gradient(circle at 25% 82%, rgba(255, 138, 0, 0.18), transparent 16rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.88), rgba(57, 19, 47, 0.18), rgba(2, 11, 13, 0.82));
          z-index: -2;
        }

        .restaurants-hero::after {
          background:
            linear-gradient(115deg, transparent 0 44%, rgba(255, 255, 255, 0.08) 47%, transparent 52%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.56) 100%);
          z-index: -1;
        }

        .restaurants-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(28px);
          opacity: 0.35;
          animation: restaurantFloat 9s ease-in-out infinite;
        }

        .restaurants-orb-one {
          left: 7%;
          top: 12%;
          background: rgba(255, 176, 0, 0.5);
        }

        .restaurants-orb-two {
          right: 8%;
          bottom: 6%;
          background: rgba(255, 77, 46, 0.42);
          animation-delay: 1.4s;
        }

        .restaurants-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: restaurantParticle 6s ease-in-out infinite;
        }

        .restaurants-particles span:nth-child(1) { left: 16%; top: 24%; }
        .restaurants-particles span:nth-child(2) { left: 34%; bottom: 18%; animation-delay: 1s; }
        .restaurants-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .restaurants-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .restaurants-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .restaurants-hero-content {
          position: relative;
          width: min(100%, 980px);
          padding: clamp(2rem, 6vw, 4.5rem);
          text-align: center;
          color: #fff;
          animation: restaurantRise 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .restaurants-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .restaurants-hero h1 {
          font-size: clamp(3rem, 8.6vw, 7.1rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-shadow: 0 22px 60px rgba(0, 0, 0, 0.38), 0 0 42px rgba(255, 189, 89, 0.12);
          overflow-wrap: anywhere;
        }

        .restaurants-hero p:not(.restaurants-eyebrow) {
          max-width: 720px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.4vw, 1.45rem);
          line-height: 1.55;
        }

        .restaurants-hero-button,
        .restaurant-action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          margin-top: 1.5rem;
          padding: 0.85rem 1.35rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 900;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.34);
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .restaurants-hero-button::before,
        .restaurant-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .restaurants-hero-button:hover,
        .restaurant-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.42);
        }

        .restaurants-hero-button:hover::before,
        .restaurant-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .restaurants-intro,
        .restaurants-benefits,
        .restaurants-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.8), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .restaurants-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.85fr);
          gap: clamp(1rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.2rem, 4vw, 2.4rem);
        }

        .restaurants-intro h2,
        .restaurants-section-heading h2,
        .restaurants-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .restaurants-intro > p,
        .restaurants-cta > p {
          color: #55706f;
          font-size: clamp(0.98rem, 1.8vw, 1.14rem);
          line-height: 1.75;
        }

        .restaurant-listings {
          display: grid;
          gap: clamp(1.45rem, 3vw, 2.35rem);
        }

        .restaurant-listing {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(1rem, 3vw, 2rem);
          align-items: stretch;
          overflow: hidden;
          padding: clamp(0.9rem, 2.2vw, 1.45rem);
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 36px;
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.7)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 20rem),
            radial-gradient(circle at 100% 100%, rgba(11, 79, 76, 0.1), transparent 20rem);
          box-shadow: 0 26px 80px rgba(2, 11, 13, 0.12);
          backdrop-filter: blur(18px);
          animation: restaurantRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .restaurant-listing::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background:
            linear-gradient(120deg, rgba(255, 255, 255, 0.5), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.22));
          opacity: 0.72;
        }

        .restaurant-listing::after {
          content: '';
          position: absolute;
          inset: auto 8% -34px 8%;
          height: 58px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.2);
          filter: blur(24px);
          opacity: 0.55;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .restaurant-listing.featured {
          border-color: rgba(255, 176, 0, 0.48);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        .restaurant-listing:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.38);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .restaurant-listing:hover::after {
          opacity: 0.85;
          transform: scaleX(1.04);
        }

        .restaurant-stars {
          color: #ffbd59;
          letter-spacing: 0.04em;
          font-size: 0.86rem;
        }

        .restaurant-featured-badge {
          display: inline-flex;
          width: fit-content;
          padding: 0.55rem 0.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 14px 32px rgba(255, 138, 0, 0.34), 0 0 28px rgba(255, 189, 89, 0.22);
        }

        .restaurant-featured-inline {
          margin-bottom: 0.2rem;
        }

        .restaurant-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(0.85rem, 1.7vw, 1.25rem);
          padding: clamp(0.45rem, 1.6vw, 1rem);
          position: relative;
          z-index: 1;
        }

        .restaurant-title-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(96px, auto);
          gap: clamp(0.9rem, 2vw, 1.35rem);
          align-items: start;
        }

        .restaurant-cuisine {
          color: #9a4f00;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .restaurant-title-row h3 {
          margin-top: 0.2rem;
          color: #101819;
          font-size: clamp(1.65rem, 3.2vw, 3.15rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .restaurant-location {
          margin-top: 0.5rem;
          color: #0b4f4c;
          font-weight: 850;
        }

        .restaurant-rating-box {
          min-width: 92px;
          display: grid;
          justify-items: center;
          gap: 0.1rem;
          padding: 0.7rem;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(4, 23, 25, 0.95), rgba(7, 51, 50, 0.9));
          color: #fff;
          border: 1px solid rgba(255, 189, 89, 0.18);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .restaurant-rating-box span {
          color: #ffbd59;
          font-size: 0.62rem;
          letter-spacing: -0.02em;
        }

        .restaurant-rating-box strong {
          font-size: 1.45rem;
          line-height: 1;
        }

        .restaurant-rating-box small {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.68rem;
          text-align: center;
        }

        .restaurant-rating-box em {
          color: #ffbd59;
          font-size: 0.58rem;
          font-style: normal;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
        }

        .restaurant-description {
          max-width: 720px;
          color: #55706f;
          font-size: clamp(0.98rem, 1.5vw, 1.08rem);
          line-height: 1.72;
          text-wrap: pretty;
        }

        .restaurant-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(150px, 1fr));
          gap: 0.75rem;
        }

        .restaurant-meta-grid div {
          padding: 0.85rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .restaurant-meta-grid span,
        .restaurant-chip-section p {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .restaurant-meta-grid strong {
          color: #101819;
          font-size: 0.95rem;
        }

        .restaurant-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .restaurant-chip-row span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.48rem 0.72rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.83rem;
          font-weight: 800;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .restaurant-chip-row span:hover {
          transform: translateY(-2px);
          background: rgba(255, 176, 0, 0.18);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 12px 26px rgba(255, 138, 0, 0.14);
        }

        .restaurant-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.9rem;
        }

        .restaurant-actions span {
          color: #55706f;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .restaurants-benefits {
          padding: clamp(1.2rem, 4vw, 2.4rem);
        }

        .restaurants-section-heading {
          max-width: 760px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .restaurants-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(190px, 1fr));
          gap: 0.9rem;
        }

        .restaurants-benefit-grid article {
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: restaurantRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .restaurants-benefit-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.26);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .restaurants-benefit-icon {
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

        .restaurants-benefit-grid h3 {
          color: #101819;
          font-size: 1.08rem;
          margin-bottom: 0.35rem;
        }

        .restaurants-benefit-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.92rem;
        }

        .restaurants-cta {
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

        .restaurants-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: restaurantGlowSweep 8s ease-in-out infinite;
        }

        .restaurants-cta > * {
          position: relative;
          z-index: 1;
        }

        .restaurants-cta h2 {
          color: #fff;
        }

        .restaurants-cta > p:not(.restaurants-eyebrow) {
          max-width: 580px;
          margin: 0.8rem auto 0;
          color: rgba(255, 255, 255, 0.78);
        }

        .restaurants-premium .restaurants-cta {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f) !important;
        }

        .restaurants-premium .restaurants-cta .restaurants-eyebrow {
          color: #ffbd59 !important;
        }

        .restaurants-premium .restaurants-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .restaurants-premium .restaurants-cta > p:not(.restaurants-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .restaurants-premium .restaurants-cta .restaurants-hero-button {
          color: #101819 !important;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e) !important;
        }

        @keyframes restaurantRise {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes restaurantHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); }
        }

        @keyframes restaurantFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes restaurantParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes restaurantGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (min-width: 1440px) {
          .restaurant-listings {
            gap: 2.5rem;
          }

          .restaurant-listing {
            padding: 1.65rem;
          }

          .restaurant-info-panel {
            padding: 1.2rem;
          }
        }

        @media (max-width: 1200px) {
          .restaurants-premium {
            gap: clamp(1.35rem, 3vw, 2.4rem);
          }

          .restaurant-meta-grid {
            grid-template-columns: repeat(3, minmax(120px, 1fr));
          }

          .restaurants-benefit-grid {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .restaurants-intro {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .restaurants-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .restaurant-listing {
            border-radius: 30px;
          }

          .restaurant-title-row {
            grid-template-columns: minmax(0, 1fr) auto;
          }

          .restaurants-benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .restaurants-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .restaurants-hero {
            min-height: clamp(430px, 105vw, 540px);
            border-radius: 26px;
          }

          .restaurants-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .restaurants-hero h1 {
            font-size: clamp(2.45rem, 14.2vw, 4.55rem);
            line-height: 0.93;
            letter-spacing: -0.06em;
          }

          .restaurants-hero p:not(.restaurants-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .restaurants-intro,
          .restaurants-benefits,
          .restaurants-cta {
            border-radius: 24px;
          }

          .restaurants-intro,
          .restaurants-benefits {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .restaurant-listing {
            padding: 0.7rem;
            border-radius: 24px;
          }

          .restaurant-info-panel {
            gap: 0.9rem;
            padding: 0.45rem;
          }

          .restaurant-title-row {
            grid-template-columns: 1fr;
          }

          .restaurant-rating-box {
            width: 100%;
            grid-template-columns: auto auto 1fr;
            justify-items: start;
            align-items: center;
            gap: 0.45rem;
            padding: 0.75rem 0.85rem;
          }

          .restaurant-rating-box em {
            grid-column: 1 / -1;
          }

          .restaurant-meta-grid {
            grid-template-columns: 1fr;
          }

          .restaurants-benefit-grid {
            grid-template-columns: 1fr;
          }

          .restaurant-chip-row {
            gap: 0.45rem;
          }

          .restaurant-chip-row span {
            min-height: 36px;
            padding: 0.5rem 0.68rem;
          }

          .restaurant-action-button,
          .restaurants-hero-button {
            width: 100%;
          }

          .restaurant-actions span {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .restaurants-hero {
            min-height: 430px;
          }

          .restaurants-hero h1 {
            font-size: clamp(2.15rem, 13.4vw, 3.45rem);
            letter-spacing: -0.05em;
          }

          .restaurants-eyebrow {
            letter-spacing: 0.14em;
          }

          .restaurants-intro h2,
          .restaurants-section-heading h2,
          .restaurants-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .restaurant-title-row h3 {
            font-size: clamp(1.55rem, 9vw, 2.35rem);
          }

          .restaurant-meta-grid div {
            padding: 0.78rem;
          }
        }

        @media (max-width: 360px) {
          .restaurants-hero {
            min-height: 410px;
          }

          .restaurant-listing {
            padding: 0.55rem;
          }

          .restaurant-info-panel {
            padding: 0.35rem;
          }

          .restaurant-chip-row span {
            width: 100%;
            justify-content: center;
          }
        }

        @media (hover: none) {
          .restaurant-listing:hover,
          .restaurants-benefit-grid article:hover,
          .restaurants-hero-button:hover,
          .restaurant-action-button:hover,
          .restaurant-chip-row span:hover {
            transform: none;
          }

          .restaurant-action-button:active,
          .restaurants-hero-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .restaurants-hero-bg,
          .restaurants-orb,
          .restaurants-particles span,
          .restaurant-listing,
          .restaurants-benefit-grid article,
          .restaurants-hero-content {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

export default RestaurantsPage
