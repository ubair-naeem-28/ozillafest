import{j as e}from"./vendor-motion-DHTbcX3O.js";import{r as l,L as g}from"./vendor-react-6MXTWAEx.js";import{u as h}from"./useTicket-Yrny7qzK.js";import{u as x,P as w}from"./index-CXEPEfDH.js";import{G as k}from"./GeneratedTicketCard-CRSYxZvM.js";import"./ticketService-B3RTuEVe.js";import"./vendor-utils-Bub7y9MC.js";import"./formatDate.util-wEQv7dlP.js";const u=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],b=["🔒 256-Bit SSL Secured","🎟️ Verified QR Pass","⭐ Official Festival Entry","⚡ Instant Scan Ready"],y=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"];function m(){const i=new Date("2026-11-01T18:00:00+05:00").getTime(),r=Math.max(0,i-Date.now());return{days:Math.floor(r/(1e3*60*60*24)),hours:Math.floor(r/(1e3*60*60)%24),minutes:Math.floor(r/(1e3*60)%60)}}function E(){const{tickets:i,loading:r,fetchMyTickets:c}=h(),{user:s}=x(),[n,f]=l.useState(m);l.useEffect(()=>{c()},[c]),l.useEffect(()=>{const t=window.setInterval(()=>f(m()),6e4);return()=>window.clearInterval(t)},[]);const d=`${s?.firstName||""} ${s?.lastName||""}`.trim()||s?.name||s?.email||"Festival Member",p=l.useMemo(()=>{const t=i.filter(o=>o.status==="approved").length,a=i.filter(o=>o.status!=="approved").length;return[[i.length,"Total Tickets"],[t,"QR Ready"],[a,"In Review"],[t*250+i.length*100,"Reward Points"],[t>1?"VIP":t===1?"Gold":"Member","Festival Level"]]},[i]);return e.jsxs("main",{className:"my-tickets-premium",children:[e.jsxs("section",{className:"my-tickets-hero",children:[e.jsx(w,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.55}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),e.jsxs("div",{className:"my-tickets-hero-content",children:[e.jsx("p",{className:"my-tickets-eyebrow",children:"DIGITAL FESTIVAL WALLET"}),e.jsx("h1",{className:"my-tickets-title",children:"Your Festival Passes"}),e.jsx("span",{className:"my-tickets-subtitle",children:"Access your verified QR tickets, download pass images, and track your VIP festival benefits for Ozilla Festival 2026."})]})]}),e.jsxs("section",{className:"my-tickets-shell",children:[e.jsxs("div",{className:"ticket-wallet-dashboard",children:[e.jsxs("article",{className:"ticket-wallet-profile",children:[e.jsx("div",{className:"ticket-wallet-avatar",children:String(d).slice(0,1).toUpperCase()}),e.jsxs("div",{children:[e.jsx("p",{children:"Welcome Back,"}),e.jsx("h2",{children:d}),e.jsxs("div",{className:"ticket-wallet-tags",children:[e.jsx("span",{children:"Verified Holder"}),e.jsx("span",{children:"Official Pass Holder"}),e.jsx("span",{children:i.length>2?"VIP Loyalty":i.length>0?"Gold Member":"Festival Member"})]})]})]}),e.jsxs("article",{className:"ticket-wallet-countdown",children:[e.jsx("p",{children:"Festival Starts In"}),e.jsxs("div",{className:"wallet-countdown-row",children:[e.jsxs("div",{children:[e.jsx("strong",{children:n.days}),e.jsx("span",{children:"Days"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:n.hours}),e.jsx("span",{children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:n.minutes}),e.jsx("span",{children:"Minutes"})]})]})]})]}),e.jsx("div",{className:"ticket-wallet-stats",children:p.map(([t,a])=>e.jsxs("article",{children:[e.jsx("strong",{children:t}),e.jsx("span",{children:a})]},a))}),r?e.jsxs("div",{className:"ticket-wallet-loading",children:[e.jsx("div",{className:"ticket-wallet-spinner"}),e.jsx("h2",{children:"Loading Your Passes..."}),e.jsx("p",{children:"Fetching your verified QR tickets from the blockchain vault."})]}):i.length===0?e.jsxs("div",{className:"ticket-wallet-empty",children:[e.jsx("div",{className:"ticket-empty-mark",children:"🎟️"}),e.jsx("h2",{children:"No Tickets Booked Yet"}),e.jsx("p",{children:"Reserve your Ozilla Festival pass and unlock your personal digital ticket wallet with dynamic QR entry."}),e.jsx(g,{to:"/tickets",className:"ticket-empty-btn",children:"Purchase Ticket →"})]}):e.jsxs("div",{className:"ticket-wallet-passes-section",children:[e.jsxs("div",{className:"ticket-wallet-section-heading",children:[e.jsx("p",{children:"OFFICIAL DIGITAL PASSES"}),e.jsx("h2",{children:"Active Festival Tickets"})]}),e.jsx("div",{className:"ticket-wallet-grid",children:i.map(t=>e.jsx(k,{ticket:t,actionLabel:"Open Details"},t.id))})]}),e.jsxs("div",{className:"ticket-wallet-extras",children:[e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Pass Privileges"}),e.jsx("div",{className:"ticket-wallet-benefits",children:u.map(t=>e.jsx("span",{children:t},t))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Verification Journey"}),e.jsx("div",{className:"ticket-wallet-timeline",children:y.map((t,a)=>e.jsx("span",{className:a<4?"is-active":"",children:t},t))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Trust & Security"}),e.jsx("div",{className:"ticket-wallet-trust",children:b.map(t=>e.jsx("span",{children:t},t))})]})]})]}),e.jsx("style",{children:`
        .my-tickets-premium {
          position: relative;
          min-height: 100vh;
          padding: 0 0 4rem;
          color: #ffffff;
          background: #0B0705 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          letter-spacing: -0.01em;
        }

        .my-tickets-premium * { box-sizing: border-box; }

        .my-tickets-hero,
        .my-tickets-shell {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ── HERO ── */
        .my-tickets-hero {
          position: relative;
          min-height: clamp(320px, 44vh, 460px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 30px;
          margin-bottom: 2rem;
          background:
            radial-gradient(ellipse at 50% 20%, rgba(255, 90, 31, 0.28) 0%, rgba(85, 14, 14, 0.45) 45%, #0B0705 90%) !important;
          box-shadow: 0 24px 65px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: clamp(3rem, 6vw, 4.5rem) 1.5rem;
        }

        .my-tickets-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.55;
          pointer-events: none;
        }

        .my-tickets-orb-one {
          width: 320px;
          height: 320px;
          left: 10%;
          top: 20%;
          background: rgba(255, 138, 61, 0.25);
        }

        .my-tickets-orb-two {
          width: 350px;
          height: 350px;
          right: 10%;
          bottom: 15%;
          background: rgba(236, 72, 153, 0.2);
        }

        .my-tickets-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          text-align: center;
          color: #ffffff;
        }

        .my-tickets-eyebrow {
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .my-tickets-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin-bottom: 1.1rem;
          background: linear-gradient(180deg, #ffffff 40%, #ffd36a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .my-tickets-subtitle {
          display: block;
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(0.98rem, 1.6vw, 1.15rem);
          line-height: 1.7;
        }

        /* ── WALLET TOP DASHBOARD ── */
        .ticket-wallet-dashboard {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .ticket-wallet-profile,
        .ticket-wallet-countdown,
        .ticket-wallet-stats article,
        .ticket-wallet-empty,
        .ticket-wallet-loading,
        .ticket-wallet-card {
          background: rgba(27, 17, 11, 0.72) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 1.8rem;
          backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 14px 40px rgba(0, 0, 0, 0.5);
        }

        .ticket-wallet-profile {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .ticket-wallet-avatar {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          background: linear-gradient(135deg, #EC4899, #cf5704);
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: 900;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .ticket-wallet-profile p {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.2rem;
        }

        .ticket-wallet-profile h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-wallet-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.5rem;
        }

        .ticket-wallet-tags span {
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        .ticket-wallet-countdown {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .ticket-wallet-countdown p {
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .wallet-countdown-row {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
        }

        .wallet-countdown-row strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }

        .wallet-countdown-row span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 700;
          text-transform: uppercase;
        }

        /* ── STATS BAR ── */
        .ticket-wallet-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .ticket-wallet-stats article {
          text-align: center;
          padding: 1.3rem 1rem;
        }

        .ticket-wallet-stats strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .ticket-wallet-stats span {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ff8a3d;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── SECTION HEADING ── */
        .ticket-wallet-section-heading {
          margin-bottom: 1.5rem;
        }

        .ticket-wallet-section-heading p {
          color: #ffbd59;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .ticket-wallet-section-heading h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticket-wallet-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        /* ── EMPTY / LOADING ── */
        .ticket-wallet-empty,
        .ticket-wallet-loading {
          text-align: center;
          padding: 4rem 2rem;
          margin-bottom: 2.5rem;
        }

        .ticket-empty-mark {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .ticket-wallet-empty h2,
        .ticket-wallet-loading h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.6rem;
        }

        .ticket-wallet-empty p,
        .ticket-wallet-loading p {
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
          margin: 0 auto 1.8rem;
          line-height: 1.65;
        }

        .ticket-empty-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.9rem 2.2rem;
          border-radius: 16px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(255, 90, 31, 0.5);
          transition: transform 200ms ease;
        }

        .ticket-empty-btn:hover {
          transform: translateY(-2px);
        }

        .ticket-wallet-spinner {
          width: 44px;
          height: 44px;
          border: 3px solid rgba(255, 138, 61, 0.3);
          border-top-color: #ff8a3d;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1.2rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── EXTRAS ── */
        .ticket-wallet-extras {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .ticket-wallet-card p {
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.9rem;
        }

        .ticket-wallet-benefits,
        .ticket-wallet-timeline,
        .ticket-wallet-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ticket-wallet-benefits span,
        .ticket-wallet-timeline span,
        .ticket-wallet-trust span {
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .ticket-wallet-timeline span.is-active {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.35);
          color: #86efac;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .ticket-wallet-dashboard {
            grid-template-columns: 1fr;
          }
          .ticket-wallet-stats {
            grid-template-columns: repeat(3, 1fr);
          }
          .ticket-wallet-extras {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ticket-wallet-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}export{E as default};
