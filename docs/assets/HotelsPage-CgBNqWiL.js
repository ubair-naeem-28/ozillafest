import{j as e}from"./vendor-motion-DHTbcX3O.js";import{r as g}from"./vendor-react-6MXTWAEx.js";import{o as h}from"./ozillaProfessionalContent-beczpo5R.js";import{b as i}from"./index-DrEYaz_d.js";import"./vendor-utils-Bub7y9MC.js";const l={"Pearl Continental Hotel (PC)":i("/assets/hotels/Pearl-Continental-Lahore.jpg"),"Ramada by Wyndham Lahore":i("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),"Hotel Indigo Lahore":i("/assets/hotels/Hotel-Indigo.jpg"),"Hotel One Gulberg Lahore":i("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),"Luxus Grand Hotel (LC)":i("/assets/hotels/Luxus-Grand-Hotel.jpg"),"Nishat Hotel Lahore":i("/assets/hotels/Nishat.jpg")},s=i("/assets/hotels/Nishat.jpg"),p={"Pearl Continental Hotel (PC)":"Iconic five-star city hospitality","Ramada by Wyndham Lahore":"International comfort in Gulberg","Hotel Indigo Lahore":"Boutique lifestyle stay experience","Hotel One Gulberg Lahore":"Smart central festival access","Luxus Grand Hotel (LC)":"Executive luxury with city energy","Nishat Hotel Lahore":"Refined premium Lahore living"},m=["Pool","Dining","Gym","WiFi","Parking","Service"],d=[["Festival Partner Hotels","Curated stays selected for Ozilla guests, brand partners, and VIP visitors."],["Premium Hospitality","Polished service, comfortable rooms, and refined Lahore hospitality."],["Exclusive Discounts","Partner booking options connected to the festival experience."],["Best Location","Convenient Lahore access for concerts, food experiences, and festival moments."]];function c(n){return m[n%m.length]}function v(){const n=h.hotels.map((t,a)=>({...t,description:t.description||"Hotel partners showcase rooms, location, facilities and Ozilla special rates.",contact:t.contact||"Contact via Ozilla partner desk",facilities:t.facilities||["Rooms and Suites","On-site Facilities","Event Access Support","Partner Booking Assistance"],booking:t.offer,image:i(t.image)||l[t.name]||i("/assets/prism-auth-visual.jpg"),fallbackImage:l[t.name]||i("/assets/prism-auth-visual.jpg"),tagline:p[t.name]||"Premium Ozilla partner hospitality",featured:a===0}));return g.useEffect(()=>{const t=document.querySelectorAll(".hotel-reveal"),a=new IntersectionObserver(r=>{r.forEach(o=>{o.target.classList.toggle("is-visible",o.isIntersecting)})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});return t.forEach(r=>a.observe(r)),()=>a.disconnect()},[]),e.jsxs("main",{className:"hotel-booking-page",style:{"--hotel-hero-image":`url("${s}")`},children:[e.jsxs("section",{className:"hotel-booking-hero hotel-reveal",children:[e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-a"}),e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-b"}),e.jsx("div",{className:"hotel-hero-sweep"}),e.jsxs("div",{className:"hotel-hero-content",children:[e.jsx("p",{className:"hotel-eyebrow",children:"OZILLA FESTIVAL 2026"}),e.jsx("h1",{children:"LUXURY HOTELS"}),e.jsx("p",{children:"Stay in the finest hotels and experience premium hospitality during Ozilla Festival 2026."}),e.jsxs("div",{className:"hotel-search-bar","aria-label":"Hotel page highlights",children:[e.jsx("span",{children:"Lahore, Pakistan"}),e.jsx("span",{children:"Festival Partner Hotels"}),e.jsx("span",{children:"Premium Stay Options"})]})]})]}),e.jsxs("section",{className:"hotel-booking-intro hotel-reveal",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Stay Collection"}),e.jsx("h2",{children:"Browse Ozilla Festival Partner Hotels"})]}),e.jsx("p",{children:"A curated hotel listing experience for guests who want comfort, convenient access, trusted booking links, and premium Lahore hospitality."})]}),e.jsx("section",{className:"hotel-benefit-strip hotel-reveal",children:d.map(([t,a],r)=>e.jsxs("article",{className:"hotel-benefit-pill",children:[e.jsx("span",{children:String(r+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:t}),e.jsx("p",{children:a})]})]},t))}),e.jsx("section",{className:"hotel-listings","aria-label":"Luxury hotel listings",children:n.map((t,a)=>e.jsxs("article",{className:`hotel-listing-card hotel-reveal ${t.featured?"hotel-listing-featured":""}`,style:{transitionDelay:`${Math.min(a*70,280)}ms`},children:[t.featured?e.jsx("span",{className:"hotel-featured-ribbon",children:"Featured Partner Hotel"}):null,e.jsx("a",{href:t.website||"#",target:t.website?"_blank":void 0,rel:t.website?"noreferrer":void 0,className:"hotel-listing-image-link","aria-label":`Open ${t.name} details`,children:e.jsxs("div",{className:"hotel-listing-image-wrap",children:[t.showImage?e.jsx("img",{src:t.image,alt:t.name,className:"hotel-listing-image",loading:"lazy",referrerPolicy:"no-referrer",onError:r=>{r.currentTarget.onerror=null,r.currentTarget.src=t.fallbackImage}}):e.jsx("div",{className:"hotel-image-placeholder",children:"Premium Hotel Preview"}),e.jsxs("div",{className:"hotel-image-overlay",children:[e.jsx("span",{children:"*****"}),e.jsx("b",{children:"Luxury Stay"}),e.jsx("em",{children:"Premium Partner"})]})]})}),e.jsxs("div",{className:"hotel-listing-info",children:[e.jsxs("div",{className:"hotel-listing-top",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"hotel-rating-line",children:["***** ",e.jsxs("span",{children:[t.rating||"4.8/5"," Exceptional"]})]}),t.website?e.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"hotel-listing-title",children:t.name}):e.jsx("h2",{className:"hotel-listing-title",children:t.name}),e.jsx("p",{className:"hotel-tagline",children:t.tagline})]}),e.jsxs("div",{className:"hotel-score-box","aria-label":`${t.name} rating`,children:[e.jsx("strong",{children:t.rating?t.rating.replace("/5",""):"4.8"}),e.jsx("span",{children:"Exceptional"})]})]}),e.jsx("p",{className:"hotel-location",children:"Lahore, Pakistan"}),e.jsx("p",{className:"hotel-description",children:t.description}),e.jsx("div",{className:"hotel-amenity-row","aria-label":`${t.name} amenities`,children:t.facilities.slice(0,6).map((r,o)=>e.jsxs("span",{className:"hotel-amenity-chip",children:[e.jsx("b",{children:c(o)}),r]},r))}),e.jsxs("div",{className:"hotel-listing-footer",children:[e.jsxs("div",{className:"hotel-detail-stack",children:[e.jsx("span",{children:"Festival Partner Badge"}),e.jsx("strong",{children:t.booking}),e.jsx("small",{children:t.contact})]}),t.website?e.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"hotel-action-button",children:"View Details"}):null]})]})]},t.name))}),e.jsxs("section",{className:"hotel-booking-cta hotel-reveal",children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Hospitality"}),e.jsx("h2",{children:"Your Perfect Stay Awaits"}),e.jsx("p",{children:"Stay in the finest hotels during Ozilla Festival 2026."}),e.jsx("a",{href:"#top",onClick:t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Explore Partner Hotels"})]}),e.jsx("style",{children:`
        .hotel-booking-page {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          max-width: 100%;
          padding: clamp(1rem, 2.4vw, 1.65rem) 0 clamp(1.8rem, 4.5vw, 3.4rem);
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 184, 62, 0.2), transparent 30%),
            radial-gradient(circle at 92% 22%, rgba(7, 54, 51, 0.16), transparent 34%),
            linear-gradient(180deg, rgba(255, 250, 242, 0.58), rgba(255, 242, 224, 0.22));
        }

        .hotel-booking-page::before,
        .hotel-booking-page::after {
          content: '';
          position: fixed;
          z-index: -2;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(20px);
          opacity: 0.58;
          animation: hotelAmbient 14s ease-in-out infinite alternate;
        }

        .hotel-booking-page::before {
          width: min(54vw, 650px);
          height: min(54vw, 650px);
          top: 6vh;
          left: -20vw;
          background: radial-gradient(circle, rgba(255, 171, 42, 0.34), rgba(255, 171, 42, 0));
        }

        .hotel-booking-page::after {
          width: min(44vw, 560px);
          height: min(44vw, 560px);
          right: -15vw;
          bottom: 10vh;
          background: radial-gradient(circle, rgba(7, 54, 51, 0.28), rgba(7, 54, 51, 0));
          animation-delay: -5s;
        }

        .hotel-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 680ms cubic-bezier(0.22, 1, 0.36, 1), transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hotel-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hotel-booking-hero {
          position: relative;
          min-height: clamp(380px, 48vw, 570px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(26px, 4vw, 48px);
          margin-bottom: clamp(1.15rem, 2.8vw, 1.85rem);
          padding: clamp(1.9rem, 4.4vw, 3.65rem);
          color: #fff;
            background:
            linear-gradient(135deg, rgba(3, 38, 36, 0.9), rgba(54, 18, 21, 0.86)),
            var(--hotel-hero-image, url('${s}')) center / cover;
          box-shadow: 0 34px 90px rgba(8, 47, 47, 0.28), inset 0 0 0 1px rgba(255, 221, 152, 0.18);
        }

        .hotel-booking-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 24%, rgba(255, 183, 60, 0.34), transparent 30%),
            linear-gradient(to top, rgba(0, 0, 0, 0.68), transparent 54%),
            linear-gradient(120deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.52));
          animation: hotelHeroBreath 8s ease-in-out infinite alternate;
        }

        .hotel-booking-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(255, 190, 72, 0.82) 0 2px, transparent 3px),
            radial-gradient(circle, rgba(255, 255, 255, 0.45) 0 1px, transparent 2px);
          background-size: 170px 170px, 260px 260px;
          background-position: 12% 34%, 78% 45%;
          opacity: 0.34;
          animation: hotelParticleDrift 17s linear infinite;
        }

        .hotel-hero-glow,
        .hotel-hero-sweep {
          position: absolute;
          pointer-events: none;
        }

        .hotel-hero-glow {
          border-radius: 999px;
          filter: blur(5px);
          animation: hotelFloat 8s ease-in-out infinite;
        }

        .hotel-hero-glow-a {
          width: 120px;
          height: 120px;
          left: 10%;
          bottom: 14%;
          background: radial-gradient(circle, rgba(255, 165, 31, 0.44), transparent 70%);
        }

        .hotel-hero-glow-b {
          width: 170px;
          height: 170px;
          right: 9%;
          top: 16%;
          background: radial-gradient(circle, rgba(255, 230, 170, 0.3), transparent 72%);
          animation-delay: -3s;
        }

        .hotel-hero-sweep {
          inset: -20%;
          background: linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.12), transparent 50%);
          animation: hotelLightSweep 7s ease-in-out infinite;
        }

        .hotel-hero-content {
          position: relative;
          z-index: 2;
          width: min(900px, 100%);
          text-align: center;
          min-width: 0;
        }

        .hotel-eyebrow {
          margin: 0 0 0.75rem;
          color: #ffad24;
          font-size: clamp(0.72rem, 1.4vw, 0.9rem);
          font-weight: 950;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .hotel-booking-hero h1 {
          margin: 0;
          font-size: clamp(3.2rem, 10vw, 8rem);
          line-height: 0.88;
          letter-spacing: -0.065em;
          text-transform: uppercase;
          text-shadow: 0 24px 64px rgba(0, 0, 0, 0.56), 0 0 42px rgba(255, 173, 36, 0.18);
        }

        .hotel-booking-hero p:not(.hotel-eyebrow) {
          max-width: 700px;
          margin: clamp(1rem, 2vw, 1.3rem) auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.2vw, 1.22rem);
          line-height: 1.65;
        }

        .hotel-search-bar {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.7rem;
          max-width: 840px;
          margin: clamp(1.15rem, 2.7vw, 1.8rem) auto 0;
          padding: 0.62rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);
          min-width: 0;
        }

        .hotel-search-bar span {
          border-radius: 999px;
          padding: 0.74rem 0.92rem;
          color: #fff;
          background: rgba(0, 0, 0, 0.16);
          font-weight: 850;
          font-size: 0.9rem;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .hotel-booking-intro,
        .hotel-benefit-strip,
        .hotel-booking-cta {
          border: 1px solid rgba(255, 180, 56, 0.22);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(255, 248, 236, 0.56));
          box-shadow: 0 20px 50px rgba(8, 47, 47, 0.1);
          backdrop-filter: blur(16px);
        }

        .hotel-booking-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
          gap: clamp(1.1rem, 3.1vw, 2.15rem);
          align-items: end;
          border-radius: 28px;
          padding: clamp(1.15rem, 2.7vw, 1.8rem);
          margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
          min-width: 0;
        }

        .hotel-booking-intro h2 {
          margin: 0;
          color: #082f2f;
          font-size: clamp(1.7rem, 4vw, 3.1rem);
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 950;
        }

        .hotel-booking-intro p:not(.hotel-eyebrow) {
          margin: 0;
          color: #496567;
          line-height: 1.7;
          font-size: clamp(0.98rem, 1.8vw, 1.08rem);
        }

        .hotel-benefit-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.7rem, 1.5vw, 0.95rem);
          border-radius: 28px;
          padding: clamp(0.65rem, 1.4vw, 0.85rem);
          margin-bottom: clamp(1.25rem, 3vw, 2rem);
          min-width: 0;
        }

        .hotel-benefit-pill {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.82rem;
          align-items: start;
          min-height: 118px;
          border-radius: 22px;
          padding: clamp(0.9rem, 1.7vw, 1.05rem);
          border: 1px solid rgba(8, 47, 47, 0.08);
          background: rgba(255, 255, 255, 0.46);
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
          min-width: 0;
        }

        .hotel-benefit-pill:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 159, 28, 0.34);
          box-shadow: 0 16px 34px rgba(8, 47, 47, 0.11);
        }

        .hotel-benefit-pill > span {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #211200;
          background: linear-gradient(135deg, #ffe2a0, #ff9518);
          font-size: 0.72rem;
          font-weight: 950;
          box-shadow: 0 12px 24px rgba(255, 149, 24, 0.18);
        }

        .hotel-benefit-pill h3 {
          margin: 0 0 0.35rem;
          color: #082f2f;
          font-size: 1rem;
          line-height: 1.15;
        }

        .hotel-benefit-pill p {
          margin: 0;
          color: #5b7072;
          font-size: 0.88rem;
          line-height: 1.48;
        }

        .hotel-listings {
          display: grid;
          gap: clamp(1.1rem, 2.5vw, 1.6rem);
          min-width: 0;
        }

        .hotel-listing-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(300px, 43%) minmax(0, 1fr);
          gap: clamp(1rem, 2.3vw, 1.55rem);
          overflow: hidden;
          border-radius: 30px;
          padding: clamp(0.68rem, 1.45vw, 0.95rem);
          border: 1px solid rgba(255, 183, 60, 0.3);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 248, 237, 0.66)),
            radial-gradient(circle at 0 0, rgba(255, 183, 60, 0.2), transparent 30%);
          box-shadow: 0 24px 62px rgba(8, 47, 47, 0.13), inset 0 1px 0 rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(18px);
          transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms ease, border-color 360ms ease;
          min-width: 0;
        }

        .hotel-listing-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 29px;
          border: 1px solid rgba(255, 255, 255, 0.52);
          pointer-events: none;
        }

        .hotel-listing-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 159, 28, 0.64);
          box-shadow: 0 36px 84px rgba(8, 47, 47, 0.18), 0 0 48px rgba(255, 183, 60, 0.12);
        }

        .hotel-listing-featured {
          border-color: rgba(255, 159, 28, 0.72);
          box-shadow: 0 30px 82px rgba(255, 159, 28, 0.16), 0 24px 64px rgba(8, 47, 47, 0.14);
        }

        .hotel-featured-ribbon {
          position: absolute;
          top: 1.15rem;
          left: 1.15rem;
          z-index: 5;
          border-radius: 999px;
          padding: 0.55rem 0.9rem;
          color: #221300;
          background: linear-gradient(90deg, #ffe3a0, #ff9418);
          box-shadow: 0 14px 30px rgba(255, 149, 24, 0.26);
          font-size: 0.75rem;
          font-weight: 950;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .hotel-listing-image-link {
          display: block;
          min-width: 0;
          text-decoration: none;
        }

        .hotel-listing-image-wrap {
          position: relative;
          height: 100%;
          min-height: 310px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255, 197, 91, 0.46);
          background: #102627;
          box-shadow: 0 18px 45px rgba(8, 47, 47, 0.18), 0 0 0 7px rgba(255, 255, 255, 0.28);
        }

        .hotel-listing-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 12%, rgba(255, 255, 255, 0.18), transparent 40%);
          opacity: 0;
          transform: translateX(-70%);
          transition: opacity 260ms ease, transform 740ms ease;
          pointer-events: none;
        }

        .hotel-listing-card:hover .hotel-listing-image-wrap::after {
          opacity: 1;
          transform: translateX(65%);
        }

        .hotel-listing-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease;
        }

        .hotel-listing-card:hover .hotel-listing-image {
          transform: scale(1.075);
          filter: saturate(1.12) contrast(1.04) brightness(1.04);
        }

        .hotel-image-placeholder {
          height: 100%;
          min-height: 330px;
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.74);
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #073633, #52181f);
        }

        .hotel-image-overlay {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.55rem;
          flex-wrap: wrap;
          border-radius: 18px;
          padding: 0.72rem;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(4, 24, 24, 0.56);
          backdrop-filter: blur(16px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
          font-size: 0.78rem;
          font-style: normal;
          font-weight: 900;
        }

        .hotel-image-overlay span {
          color: #ffd267;
          letter-spacing: 0.16em;
          text-shadow: 0 0 18px rgba(255, 210, 103, 0.42);
        }

        .hotel-image-overlay em {
          font-style: normal;
          color: rgba(255, 255, 255, 0.8);
        }

        .hotel-listing-info {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(0.78rem, 1.5vw, 0.98rem);
          padding: clamp(0.85rem, 2vw, 1.25rem) clamp(0.5rem, 1.5vw, 0.95rem) clamp(0.75rem, 1.5vw, 0.95rem) 0;
          min-width: 0;
        }

        .hotel-listing-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(0.9rem, 2vw, 1.2rem);
          min-width: 0;
        }

        .hotel-rating-line {
          margin: 0 0 0.32rem;
          color: #c77708;
          font-size: 0.82rem;
          font-weight: 950;
          letter-spacing: 0.12em;
        }

        .hotel-rating-line span {
          color: #536a6c;
          letter-spacing: 0;
          margin-left: 0.4rem;
        }

        .hotel-listing-title {
          display: inline-block;
          margin: 0;
          color: #082f2f;
          font-size: clamp(1.55rem, 3.6vw, 2.55rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 950;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .hotel-listing-title:hover {
          color: #8f4d05;
        }

        .hotel-tagline {
          margin: 0.42rem 0 0;
          color: #9a5a09;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hotel-score-box {
          flex: 0 0 auto;
          min-width: 88px;
          border-radius: 18px;
          padding: 0.7rem 0.75rem;
          text-align: center;
          color: #fff;
          background: linear-gradient(145deg, #073633, #0f4d49);
          box-shadow: 0 14px 28px rgba(8, 47, 47, 0.18);
        }

        .hotel-score-box strong {
          display: block;
          font-size: 1.65rem;
          line-height: 1;
        }

        .hotel-score-box span {
          display: block;
          margin-top: 0.2rem;
          color: #ffcf76;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .hotel-location {
          margin: 0;
          color: #0b5550;
          font-size: 0.96rem;
          font-weight: 950;
        }

        .hotel-description {
          margin: 0;
          max-width: 760px;
          color: #4f696b;
          font-size: 1rem;
          line-height: 1.68;
          overflow-wrap: anywhere;
        }

        .hotel-amenity-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .hotel-amenity-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.42rem 0.62rem;
          color: #173f40;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 183, 60, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.44);
          backdrop-filter: blur(12px);
          font-size: 0.82rem;
          font-weight: 850;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
          max-width: 100%;
        }

        .hotel-amenity-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 159, 28, 0.42);
          background: rgba(255, 183, 60, 0.12);
          box-shadow: 0 12px 24px rgba(255, 159, 28, 0.12);
        }

        .hotel-amenity-chip b {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          height: 26px;
          border-radius: 999px;
          color: #211200;
          background: linear-gradient(135deg, #ffe3a0, #ff9818);
          font-size: 0.65rem;
          font-weight: 950;
        }

        .hotel-listing-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          margin-top: auto;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(8, 47, 47, 0.08);
        }

        .hotel-detail-stack {
          display: grid;
          gap: 0.18rem;
          min-width: 0;
        }

        .hotel-detail-stack span {
          color: #9a5a09;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hotel-detail-stack strong {
          color: #173f40;
          font-size: 0.92rem;
          overflow-wrap: anywhere;
        }

        .hotel-detail-stack small {
          color: #637779;
          font-size: 0.82rem;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .hotel-action-button,
        .hotel-booking-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          border-radius: 999px;
          padding: 0.9rem 1.2rem;
          color: #102627;
          background: linear-gradient(90deg, #ffd267, #ff8f13);
          border: 1px solid rgba(255, 159, 28, 0.45);
          box-shadow: 0 16px 34px rgba(255, 143, 19, 0.2);
          font-weight: 950;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .hotel-action-button:hover,
        .hotel-booking-cta a:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow: 0 22px 42px rgba(255, 143, 19, 0.27);
        }

        .hotel-booking-cta {
          position: relative;
          overflow: hidden;
          margin-top: clamp(1.65rem, 3.8vw, 2.8rem);
          border-radius: 32px;
          text-align: center;
          color: #fff;
          padding: clamp(1.7rem, 4vw, 3rem);
          background:
            linear-gradient(135deg, rgba(7, 43, 43, 0.97), rgba(68, 21, 25, 0.95)),
            radial-gradient(circle at 18% 22%, rgba(255, 183, 60, 0.3), transparent 34%);
        }

        .hotel-booking-cta::before {
          content: '';
          position: absolute;
          inset: -20%;
          background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.12), transparent 44%);
          animation: hotelLightSweep 8s ease-in-out infinite;
        }

        .hotel-booking-cta > * {
          position: relative;
          z-index: 1;
        }

        .hotel-booking-cta h2 {
          margin: 0;
          font-size: clamp(2.2rem, 6vw, 4.8rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .hotel-booking-cta p:not(.hotel-eyebrow) {
          max-width: 560px;
          margin: 1rem auto 1.35rem;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.65;
        }

        @media (min-width: 1600px) {
          .hotel-booking-hero {
            min-height: 600px;
          }

          .hotel-listing-card {
            grid-template-columns: minmax(430px, 42%) minmax(0, 1fr);
          }

          .hotel-listing-image-wrap {
            min-height: 360px;
          }

          .hotel-description {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 1100px) {
          .hotel-benefit-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hotel-listing-card {
            grid-template-columns: minmax(280px, 42%) minmax(0, 1fr);
          }

          .hotel-listing-image-wrap {
            min-height: 285px;
          }

          .hotel-listing-title {
            font-size: clamp(1.35rem, 3.1vw, 2rem);
          }

          .hotel-listing-footer {
            align-items: flex-start;
          }
        }

        @media (max-width: 860px) {
          .hotel-booking-intro {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 0.85rem;
          }

          .hotel-listing-card {
            grid-template-columns: 1fr;
            gap: 0.95rem;
          }

          .hotel-listing-image-wrap {
            min-height: 285px;
          }

          .hotel-listing-info {
            padding: 0.28rem 0.3rem 0.72rem;
          }

          .hotel-listing-top {
            align-items: flex-start;
          }

          .hotel-score-box {
            min-width: 104px;
          }
        }

        @media (max-width: 640px) {
          .hotel-booking-hero {
            min-height: 400px;
            border-radius: 26px;
            padding: 1.25rem;
            background-position: center;
          }

          .hotel-booking-hero h1 {
            font-size: clamp(2.75rem, 16vw, 4.3rem);
            letter-spacing: -0.07em;
          }

          .hotel-booking-hero p:not(.hotel-eyebrow) {
            font-size: 0.98rem;
            line-height: 1.55;
          }

          .hotel-search-bar {
            grid-template-columns: 1fr;
            border-radius: 24px;
            padding: 0.5rem;
            gap: 0.5rem;
          }

          .hotel-search-bar span {
            padding: 0.58rem 0.7rem;
          }

          .hotel-benefit-strip {
            grid-template-columns: 1fr;
          }

          .hotel-listing-card,
          .hotel-booking-intro,
          .hotel-benefit-strip,
          .hotel-booking-cta {
            border-radius: 24px;
          }

          .hotel-listing-image-wrap {
            min-height: 225px;
            border-radius: 20px;
          }

          .hotel-listing-card {
            padding: 0.55rem;
          }

          .hotel-booking-intro,
          .hotel-benefit-strip {
            padding: 0.88rem;
          }

          .hotel-benefit-pill {
            min-height: auto;
            padding: 0.86rem;
          }

          .hotel-listing-top,
          .hotel-listing-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }

          .hotel-score-box {
            width: 100%;
          }

          .hotel-action-button {
            width: 100%;
          }

          .hotel-image-overlay {
            left: 0.7rem;
            right: 0.7rem;
            bottom: 0.7rem;
            padding: 0.58rem;
            gap: 0.38rem;
            font-size: 0.72rem;
          }

          .hotel-amenity-row {
            gap: 0.4rem;
          }

          .hotel-amenity-chip {
            padding: 0.38rem 0.52rem;
            font-size: 0.78rem;
          }
        }

        @media (max-width: 480px) {
          .hotel-booking-page {
            padding-top: 0.62rem;
          }

          .hotel-booking-hero {
            min-height: 370px;
            border-radius: 22px;
          }

          .hotel-booking-intro h2,
          .hotel-booking-cta h2 {
            letter-spacing: -0.05em;
          }

          .hotel-benefit-pill {
            grid-template-columns: 1fr;
          }

          .hotel-benefit-pill > span {
            width: 38px;
            height: 38px;
          }

          .hotel-listing-title {
            font-size: clamp(1.45rem, 9vw, 2.05rem);
          }

          .hotel-rating-line {
            display: grid;
            gap: 0.15rem;
          }

          .hotel-rating-line span {
            margin-left: 0;
          }

          .hotel-tagline {
            letter-spacing: 0.08em;
          }

          .hotel-listing-image-wrap {
            min-height: 210px;
          }

          .hotel-featured-ribbon {
            top: 0.85rem;
            left: 0.85rem;
            max-width: calc(100% - 1.7rem);
            white-space: normal;
          }
        }

        @media (max-width: 390px) {
          .hotel-booking-hero {
            min-height: 345px;
            padding: 1.05rem;
          }

          .hotel-search-bar span {
            font-size: 0.82rem;
          }

          .hotel-listing-card {
            border-radius: 20px;
            padding: 0.38rem;
          }

          .hotel-listing-card::before {
            border-radius: 19px;
          }

          .hotel-listing-image-wrap {
            min-height: 195px;
            border-radius: 17px;
          }

          .hotel-image-overlay {
            position: static;
            margin: -3.15rem 0.55rem 0.55rem;
            transform: translateZ(0);
          }

          .hotel-amenity-chip {
            width: 100%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 340px) {
          .hotel-booking-hero h1 {
            font-size: 2.45rem;
          }

          .hotel-booking-intro,
          .hotel-benefit-strip,
          .hotel-booking-cta {
            padding: 0.62rem;
          }

          .hotel-listing-image-wrap {
            min-height: 180px;
          }

          .hotel-action-button,
          .hotel-booking-cta a {
            min-width: 0;
            padding: 0.78rem 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hotel-reveal,
          .hotel-booking-page::before,
          .hotel-booking-page::after,
          .hotel-booking-hero::before,
          .hotel-booking-hero::after,
          .hotel-hero-glow,
          .hotel-hero-sweep,
          .hotel-listing-card,
          .hotel-listing-image,
          .hotel-listing-image-wrap::after,
          .hotel-booking-cta::before {
            animation: none !important;
            transition: none !important;
          }
        }

        @keyframes hotelAmbient {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(24px, -18px, 0) scale(1.08); }
        }

        @keyframes hotelHeroBreath {
          0% { opacity: 0.82; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.035); }
        }

        @keyframes hotelParticleDrift {
          0% { background-position: 12% 34%, 78% 45%; }
          100% { background-position: 17% 28%, 72% 54%; }
        }

        @keyframes hotelFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(12px, -16px, 0); }
        }

        @keyframes hotelLightSweep {
          0%, 35% { transform: translateX(-36%) rotate(0.001deg); opacity: 0; }
          55% { opacity: 1; }
          100% { transform: translateX(36%) rotate(0.001deg); opacity: 0; }
        }
      `})]})}export{v as default};
