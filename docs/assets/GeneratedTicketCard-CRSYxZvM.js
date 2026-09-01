import{j as t}from"./vendor-motion-DHTbcX3O.js";import{r as D,L as O}from"./vendor-react-6MXTWAEx.js";import{f as G}from"./formatDate.util-wEQv7dlP.js";import{Q as V}from"./vendor-utils-Bub7y9MC.js";function F({ticket:a,size:i=200,showCaption:s=!0}){const n=JSON.stringify({ticketId:a.uniqueTicketId||a.ticketId||a.id,fullName:a.fullName||a.name,email:a.email,phone:a.phone,eventName:a.eventName,eventDate:a.eventDate,eventTime:a.eventTime});return t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:t.jsx(V,{value:n,size:i,level:"H",includeMargin:!0,renderAs:"canvas"})}),s?t.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function W(a="pending"){return a==="approved"?{label:"Verified",className:"is-approved"}:a==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:a==="rejected"||a==="cancelled"?{label:a==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function I(a,i,s,n,l,p){const r=Math.min(p,n/2,l/2);a.beginPath(),a.moveTo(i+r,s),a.lineTo(i+n-r,s),a.quadraticCurveTo(i+n,s,i+n,s+r),a.lineTo(i+n,s+l-r),a.quadraticCurveTo(i+n,s+l,i+n-r,s+l),a.lineTo(i+r,s+l),a.quadraticCurveTo(i,s+l,i,s+l-r),a.lineTo(i,s+r),a.quadraticCurveTo(i,s,i+r,s),a.closePath()}function $(a,i,s,n,l,p,r="left"){const g=String(i).split(/\s+/);let o="",f=n;const u=a.textAlign;a.textAlign=r,g.forEach((m,S)=>{const x=o?`${o} ${m}`:m;a.measureText(x).width>l&&o?(a.fillText(o,r==="right"?s+l:s,f),o=m,f+=p):o=x,S===g.length-1&&o&&a.fillText(o,r==="right"?s+l:s,f)}),a.textAlign=u}function B({ticket:a,actionTo:i,actionLabel:s="View Ticket"}){const n=D.useRef(null),l=D.useRef(null),p=a.uniqueTicketId||a.ticketId||a.id,r=a.bookingId||a.requestId||a.id,g=W(a.status),o=a.status==="approved",f=`${(a.ticketType||"VIP").toUpperCase()} PASS`,u=a.eventDate?G(a.eventDate):"Nov 01, 2026",m=a.festivalDay==="day2"?"Day 2":"Day 1",S=v=>{const c=document.createElement("a");c.href=v.toDataURL("image/png"),c.download=`ozilla-pass-${p}.png`,c.click()},x=async()=>{const v=n.current?.querySelector("canvas"),c=1200,T=440,k=document.createElement("canvas");k.width=c,k.height=T;const e=k.getContext("2d");if(!e)return;const w=e.createLinearGradient(0,0,c,T);w.addColorStop(0,"#020d0f"),w.addColorStop(.46,"#062828"),w.addColorStop(1,"#23081e"),I(e,4,4,c-8,T-8,38),e.fillStyle=w,e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.16)",e.lineWidth=3,e.stroke();const N=e.createLinearGradient(80,0,c-80,0);N.addColorStop(0,"rgba(255, 189, 89, 0.7)"),N.addColorStop(.5,"rgba(14, 165, 233, 0.5)"),N.addColorStop(1,"rgba(236, 72, 153, 0.6)"),e.strokeStyle=N,e.lineWidth=3.5,e.beginPath(),e.moveTo(90,6),e.lineTo(c-90,6),e.stroke(),e.fillStyle="#ffffff",e.font='800 20px "Segoe UI", Arial, sans-serif',e.textAlign="left",e.fillText(f,54,66),e.fillStyle="#ff9f1c",e.font='800 13px "Segoe UI", Arial, sans-serif',e.fillText("OZILLA FESTIVAL 2026",54,94);const E=a.fullName||a.name||"Festival Guest";e.fillStyle="#ffffff",e.font='800 36px "Segoe UI", Arial, sans-serif',$(e,E,54,152,c-360,42);const P=a.email||"-";e.fillStyle="rgba(255, 255, 255, 0.78)",e.font='600 17px "Segoe UI", Arial, sans-serif',e.fillText(P,54,198);const L=[{label:"DATE",val:u},{label:"DAY",val:m},{label:"LOCATION",val:a.location||"Lahore, Pakistan"},{label:"BOOKING ID",val:String(r)}],A=246;let y=54;L.forEach(j=>{e.font='700 11px "Segoe UI", Arial, sans-serif';const R=e.measureText(j.label).width;e.font='800 14px "Segoe UI", Arial, sans-serif';const U=e.measureText(j.val).width,C=Math.max(R,U)+28;I(e,y,A,C,58,12),e.fillStyle="rgba(255, 255, 255, 0.07)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.12)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#ff9f1c",e.font='800 11px "Segoe UI", Arial, sans-serif',e.textAlign="left",e.fillText(j.label,y+14,A+22),e.fillStyle="#ffffff",e.font='800 14px "Segoe UI", Arial, sans-serif',e.fillText(j.val,y+14,A+44),y+=C+14}),e.fillStyle="rgba(255, 255, 255, 0.45)",e.font='600 13px "Segoe UI", Arial, sans-serif',e.textAlign="left",e.fillText(`Official Festival Entry Pass • ID: ${p} • Verify at entrance`,54,388),e.fillStyle="#ffbd59",e.font='800 16px "Segoe UI", Arial, sans-serif',e.textAlign="right",e.fillText("TICKET ID",c-54,66),e.fillStyle="#ffffff",e.font='800 20px "Segoe UI", Arial, monospace',e.fillText(String(p),c-54,96);const d=190,b=c-d-54,h=132;I(e,b,h,d,d,18),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="rgba(255, 189, 89, 0.4)",e.lineWidth=2,e.stroke(),v&&o?e.drawImage(v,b+12,h+12,d-24,d-24):(e.fillStyle="#102525",e.font='800 13px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.fillText("QR CODE",b+d/2,h+d/2-8),e.font='600 11px "Segoe UI", Arial, sans-serif',e.fillStyle="#6b7280",e.fillText(o?"GENERATING":"PENDING APPROVAL",b+d/2,h+d/2+12)),e.fillStyle="#ffbd59",e.font='800 11px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.fillText("SCAN AT ENTRANCE",b+d/2,h+d+28),S(k)},z=()=>{x()},q=async()=>{if(navigator.share)try{await navigator.share({title:a.eventName||"Ozilla Festival Ticket Pass",text:`Ozilla Festival Ticket: ${p} (${f})`})}catch{}};return t.jsxs("div",{className:"ticket-pass-wrapper",ref:l,children:[t.jsxs("div",{className:"ticket-pass-badge",children:[t.jsx("div",{className:"ticket-pass-glow","aria-hidden":"true"}),t.jsxs("div",{className:"ticket-pass-left",children:[t.jsxs("div",{className:"ticket-pass-top-row",children:[t.jsx("div",{className:"ticket-pass-type-badge",children:f}),t.jsx("div",{className:"ticket-pass-festival-tag",children:"OZILLA FESTIVAL 2026"})]}),t.jsxs("div",{className:"ticket-pass-identity",children:[t.jsx("h2",{className:"ticket-pass-name",children:a.fullName||a.name||"Festival Guest"}),t.jsx("p",{className:"ticket-pass-email",children:a.email||"-"})]}),t.jsxs("div",{className:"ticket-pass-meta-row",children:[t.jsxs("div",{className:"ticket-pass-chip",children:[t.jsx("span",{className:"ticket-pass-chip-label",children:"DATE"}),t.jsx("strong",{className:"ticket-pass-chip-value",children:u})]}),t.jsxs("div",{className:"ticket-pass-chip",children:[t.jsx("span",{className:"ticket-pass-chip-label",children:"DAY"}),t.jsx("strong",{className:"ticket-pass-chip-value",children:m})]}),t.jsxs("div",{className:"ticket-pass-chip",children:[t.jsx("span",{className:"ticket-pass-chip-label",children:"BOOKING ID"}),t.jsx("strong",{className:"ticket-pass-chip-value",children:r})]})]}),t.jsx("div",{className:"ticket-pass-footnote",children:t.jsx("span",{children:"Official Festival Entry Pass • Valid for 1 Person"})})]}),t.jsxs("div",{className:"ticket-pass-right",children:[t.jsxs("div",{className:"ticket-pass-id-block",children:[t.jsx("span",{className:"ticket-pass-id-label",children:"TICKET ID"}),t.jsx("strong",{className:"ticket-pass-id-value",children:p})]}),t.jsxs("div",{className:"ticket-pass-qr-box",ref:n,children:[o?t.jsx(F,{ticket:a,size:118,showCaption:!1}):t.jsxs("div",{className:"ticket-pass-qr-pending",children:[t.jsx("span",{children:"QR Pending"}),t.jsx("small",{children:"Approval Required"})]}),t.jsx("span",{className:"ticket-pass-scan-hint",children:"SCAN AT ENTRANCE"})]})]})]}),t.jsxs("div",{className:"ticket-pass-actions-bar",children:[t.jsxs("div",{className:"ticket-pass-status-pill",children:[t.jsx("span",{className:`status-dot ${g.className}`}),t.jsxs("span",{children:["Status: ",t.jsx("strong",{children:g.label})]})]}),t.jsxs("div",{className:"ticket-pass-button-group",children:[o?t.jsxs("button",{type:"button",className:"btn-pass-download",onClick:x,children:[t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"7 10 12 15 17 10"}),t.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Pass"]}):t.jsx("button",{type:"button",className:"btn-pass-download disabled",disabled:!0,title:"Available after verification",children:"Download Pass (Pending)"}),t.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:z,children:"Print"}),t.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:q,children:"Share"}),i&&t.jsx(O,{to:i,className:"btn-pass-link",children:s})]})]}),t.jsx("style",{children:`
        .ticket-pass-wrapper {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ticket-pass-badge {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-radius: 28px;
          padding: clamp(1.2rem, 3vw, 2rem);
          background: linear-gradient(135deg, #020d0f 0%, #062828 46%, #23081e 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: center;
          color: #ffffff;
          box-sizing: border-box;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .ticket-pass-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 30px 75px rgba(0, 0, 0, 0.55), 0 0 35px rgba(255, 189, 89, 0.12);
        }

        .ticket-pass-glow {
          position: absolute;
          top: -40%;
          right: 20%;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(255, 189, 89, 0.18), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .ticket-pass-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
          z-index: 1;
        }

        .ticket-pass-top-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .ticket-pass-type-badge {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
        }

        .ticket-pass-festival-tag {
          color: #ff9f1c;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ticket-pass-identity {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ticket-pass-name {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 3.2vw, 2.3rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          overflow-wrap: anywhere;
        }

        .ticket-pass-email {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .ticket-pass-meta-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .ticket-pass-chip {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 0.45rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .ticket-pass-chip-label {
          color: #ff9f1c;
          font-size: 0.62rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ticket-pass-chip-value {
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .ticket-pass-footnote {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .ticket-pass-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          z-index: 1;
          flex-shrink: 0;
        }

        .ticket-pass-id-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.15rem;
          text-align: right;
        }

        .ticket-pass-id-label {
          color: #ffbd59;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ticket-pass-id-value {
          color: #ffffff;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 900;
          font-family: 'Courier New', Courier, monospace, sans-serif;
          letter-spacing: 0.04em;
        }

        .ticket-pass-qr-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        }

        .ticket-pass-qr-box .bg-white {
          padding: 0 !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        .ticket-pass-qr-box canvas {
          display: block;
          max-width: 120px;
          height: auto;
          border-radius: 6px;
        }

        .ticket-pass-qr-pending {
          width: 118px;
          height: 118px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #92400e;
          background: #fef3c7;
          border-radius: 10px;
          padding: 0.5rem;
          gap: 0.2rem;
        }

        .ticket-pass-qr-pending span {
          font-weight: 800;
          font-size: 0.8rem;
        }

        .ticket-pass-qr-pending small {
          font-size: 0.68rem;
          line-height: 1.1;
        }

        .ticket-pass-scan-hint {
          color: #102525;
          font-size: 0.62rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .ticket-pass-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 0.4rem 0.2rem;
        }

        .ticket-pass-status-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #374151;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f59e0b;
        }

        .status-dot.is-approved { background: #10b981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.6); }
        .status-dot.is-submitted { background: #0ea5e9; }
        .status-dot.is-cancelled { background: #f43f5e; }

        .ticket-pass-button-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .btn-pass-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #059669, #047857);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.6rem 1.1rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 200ms ease;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }

        .btn-pass-download:hover:not(:disabled) {
          background: linear-gradient(135deg, #10b981, #059669);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
        }

        .btn-pass-download.disabled,
        .btn-pass-download:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-pass-secondary {
          background: #ffffff;
          border: 1px solid #d1d5db;
          color: #374151;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .btn-pass-secondary:hover {
          background: #f9fafb;
          border-color: #9ca3af;
        }

        .btn-pass-link {
          color: #2563eb;
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.6rem 0.8rem;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .btn-pass-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 680px) {
          .ticket-pass-badge {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .ticket-pass-left {
            align-items: center;
          }

          .ticket-pass-top-row,
          .ticket-pass-meta-row {
            justify-content: center;
          }

          .ticket-pass-right {
            align-items: center;
            width: 100%;
          }

          .ticket-pass-id-block {
            align-items: center;
            text-align: center;
          }

          .ticket-pass-actions-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .ticket-pass-button-group {
            justify-content: center;
          }
        }
      `})]})}export{B as G};
