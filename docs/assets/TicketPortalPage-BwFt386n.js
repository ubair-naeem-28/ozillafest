import{j as e}from"./vendor-motion-DHTbcX3O.js";import{r as m,b as q}from"./vendor-react-6MXTWAEx.js";import{u as K}from"./useTicket-CEBrkWsj.js";import{u as V,P as X}from"./index-C4_Z6NAx.js";import{A as J}from"./AlertMessage-BVQu3q6F.js";import{t as B}from"./ticketService-Bol5Tl1o.js";import"./vendor-utils-Bub7y9MC.js";const $={regular:{label:"General",value:"regular",price:1,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function Y(c=""){const s=String(c).trim().split(/\s+/).filter(Boolean);return s.length===0?{firstName:"",lastName:""}:{firstName:s[0],lastName:s.slice(1).join(" ")}}function W({onSubmit:c,loading:s,profileDefaults:r,onBookingChange:b,availability:i,availabilityLoading:g}){const t=m.useMemo(()=>{const o=Y(r?.name);return{firstName:r?.firstName||o.firstName||"",lastName:r?.lastName||o.lastName||"",email:r?.email||"",phone:r?.phone||""}},[r]),[f,y]=m.useState(1),[x,p]=m.useState(""),[d,j]=m.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});m.useEffect(()=>{j(o=>({...o,firstName:t.firstName||o.firstName,lastName:t.lastName||o.lastName,email:t.email||o.email,phone:t.phone||o.phone}))},[t]);const z=o=>i?.byType?.[o],u=o=>!!z(o)?.soldOut,a=$[d.ticketType],w=z(d.ticketType),E=Number.isFinite(w?.remaining)?w.remaining:null,S=u(d.ticketType),l=Math.max(1,Math.min(10,E||10)),h=Number(d.quantity)||1,n=a.price*h,P=d.ticketType==="premium"?2500:0,D=Math.max(1,n-P),A=`${t.firstName} ${t.lastName}`.trim()||r?.email;m.useEffect(()=>{b?.({ticketType:a.label,day:d.festivalDay==="day1"?"Day 1":"Day 2",quantity:h,subtotal:n,serviceFee:0,discount:P,total:D,benefits:a.benefits})},[P,d.festivalDay,b,h,a,n,D]),m.useEffect(()=>{if(!i?.byType||!S)return;const o=Object.values($).find(k=>!u(k.value));o&&j(k=>({...k,ticketType:o.value,quantity:1}))},[i,S]),m.useEffect(()=>{h>l&&j(o=>({...o,quantity:l}))},[l,h]);const T=o=>{j(k=>({...k,[o.target.name]:o.target.value})),o.target.name==="idCardNumber"&&p("")},R=()=>!!(d.firstName&&d.lastName&&d.email&&d.phone),M=()=>{const o=String(d.idCardNumber||"").trim(),k=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(o);return p(k?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),k},L=()=>{f===1&&!R()||f===2&&(S||!M())||y(o=>Math.min(3,o+1))},I=o=>{if(o.preventDefault(),S||!R()||!M()){y(R()?2:1);return}c({...d,quantity:h,name:`${d.firstName} ${d.lastName}`.trim()})},O=()=>{y(1),p(""),j({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:t.firstName||"",lastName:t.lastName||"",email:t.email||"",phone:t.phone||""})};return e.jsxs("form",{onSubmit:I,className:"ticket-wizard-form",children:[e.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((o,k)=>e.jsxs("button",{type:"button",className:f===k+1?"is-active":f>k+1?"is-complete":"",onClick:()=>y(k+1),children:[e.jsx("span",{children:k+1}),o]},o))}),A&&e.jsxs("div",{className:"ticket-login-chip",children:[e.jsx("span",{children:"OK"}),"Logged in as ",A]}),f===1&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 1"}),e.jsx("h3",{children:"Personal Information"})]}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"First Name"}),e.jsx("input",{type:"text",name:"firstName",value:d.firstName,onChange:T,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Last Name"}),e.jsx("input",{type:"text",name:"lastName",value:d.lastName,onChange:T,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Email Address"}),e.jsx("input",{type:"email",name:"email",value:d.email,onChange:T,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Phone Number"}),e.jsx("input",{type:"tel",name:"phone",value:d.phone,onChange:T,required:!0})]})]})]}),f===2&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 2"}),e.jsx("h3",{children:"Ticket Information"})]}),e.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values($).map(o=>{const k=z(o.value),F=!!k?.soldOut,v=g?"Checking availability...":k?F?"Sold out":`${k.remaining.toLocaleString()} seats available`:`${o.seats} seats available`;return e.jsxs("button",{type:"button",disabled:F,"aria-disabled":F,className:`ticket-option-card ${d.ticketType===o.value?"is-selected":""} ${F?"is-sold-out":""}`,onClick:()=>{F||j(N=>({...N,ticketType:o.value,quantity:1}))},children:[e.jsx("span",{children:o.label}),e.jsxs("strong",{children:["PKR ",o.price.toLocaleString()]}),e.jsx("small",{children:v})]},o.value)})}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Festival Day"}),e.jsxs("select",{name:"festivalDay",value:d.festivalDay,onChange:T,required:!0,children:[e.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),e.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Quantity"}),e.jsx("input",{type:"number",name:"quantity",value:d.quantity,onChange:T,min:"1",max:l,disabled:S,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[e.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),e.jsx("input",{type:"text",name:"idCardNumber",value:d.idCardNumber,onChange:T,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),x&&e.jsx("em",{children:x})]})]})]}),f===3&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 3"}),e.jsx("h3",{children:"Review & Confirm"})]}),e.jsxs("div",{className:"ticket-review-layout",children:[e.jsx("div",{className:"ticket-benefit-list",children:a.benefits.map(o=>e.jsx("span",{children:o},o))}),e.jsxs("aside",{className:"ticket-summary-card",children:[e.jsx("h4",{children:"Booking Summary"}),e.jsxs("div",{children:[e.jsx("span",{children:"Ticket Type"}),e.jsx("strong",{children:a.label})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:h})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",n.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Processing Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["PKR ",P.toLocaleString()]})]}),e.jsxs("div",{className:"ticket-total",children:[e.jsx("span",{children:"Total"}),e.jsxs("strong",{children:["PKR ",D.toLocaleString()]})]})]})]})]}),e.jsxs("div",{className:"ticket-form-actions",children:[e.jsx("button",{type:"button",onClick:f===1?O:()=>y(o=>o-1),className:"ticket-secondary-button",children:f===1?"Reset":"Back"}),f<3?e.jsx("button",{type:"button",onClick:L,className:"ticket-primary-button",children:"Continue"}):e.jsx("button",{type:"submit",disabled:s,className:"ticket-primary-button ticket-shimmer-button",children:s?"Verifying Details...":"Complete Your Booking"})]})]})}function G(c){const s=c.replace(/\D/g,"").slice(0,16),r=s.match(/.{1,4}/g);return r?r.join(" "):s}function Q(c){const s=c.replace(/\D/g,"").slice(0,4);return s.length>=3?`${s.slice(0,2)}/${s.slice(2)}`:s}function U(c){const s=c.replace(/\D/g,"");return/^4/.test(s)?"visa":/^(5[1-5]|2[2-7])/.test(s)?"mastercard":/^(62|81)/.test(s)?"unionpay":null}function H(c){const s=c.replace(/\D/g,""),r=s.slice(0,4);return["5893","4012","5399","4519","4507"].includes(r)?"Meezan Bank":["4116","5241","4214","5488","4027"].includes(r)?"HBL":["4848","5189","4589","5294","4282"].includes(r)?"Bank Alfalah":["4351","5236","4271","5521","4046"].includes(r)?"MCB Bank":["4021","5123","4921","5424"].includes(r)?"Standard Chartered":["4203","5250","4894","5320"].includes(r)?"UBL":["4008","5456","4692","5378"].includes(r)?"Allied Bank":s.length>=6?"Verified Bank":""}function Z({amount:c,onSubmit:s,loading:r,onBack:b}){const[i,g]=m.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvv:"",saveCard:!0}),[t,f]=m.useState({}),[y,x]=m.useState(!1),[p,d]=m.useState(""),j=U(i.cardNumber);H(i.cardNumber);const z=l=>{const h=G(l.target.value);g(n=>({...n,cardNumber:h})),t.cardNumber&&f(n=>({...n,cardNumber:""}))},u=l=>{const h=Q(l.target.value);g(n=>({...n,expiryDate:h})),t.expiryDate&&f(n=>({...n,expiryDate:""}))},a=l=>{const h=l.target.value.replace(/\D/g,"").slice(0,4);g(n=>({...n,cvv:h})),t.cvv&&f(n=>({...n,cvv:""}))},w=l=>{g(h=>({...h,cardholderName:l.target.value})),t.cardholderName&&f(h=>({...h,cardholderName:""}))},E=()=>{const l={},h=i.cardNumber.replace(/\s/g,"");if((!h||h.length<15)&&(l.cardNumber="Please enter a valid 16-digit card number"),i.cardholderName.trim()||(l.cardholderName="Please enter name as shown on card"),!i.expiryDate||i.expiryDate.length<5)l.expiryDate="Enter MM/YY";else{const[n,P]=i.expiryDate.split("/").map(Number);if(n<1||n>12)l.expiryDate="Invalid month (01-12)";else{const D=new Date,A=Number(String(D.getFullYear()).slice(-2)),T=D.getMonth()+1;(P<A||P===A&&n<T)&&(l.expiryDate="Card has expired")}}return(!i.cvv||i.cvv.length<3)&&(l.cvv="Enter 3 or 4 digits"),f(l),Object.keys(l).length===0},S=async l=>{if(l.preventDefault(),!!E()){d("Validating card credentials with bank..."),await new Promise(h=>setTimeout(h,450)),d("Authorizing payment deduction...");try{await s({cardNumber:i.cardNumber.replace(/\s/g,""),cardLast4:i.cardNumber.replace(/\s/g,"").slice(-4),cardholderName:i.cardholderName.trim(),expiryDate:i.expiryDate,cvv:i.cvv,saveCard:i.saveCard,cardType:j||"card"})}finally{d("")}}};return e.jsxs("div",{className:"card-payment-container",children:[e.jsxs("div",{className:"card-brands-row",children:[e.jsx("div",{className:`card-brand-logo mastercard ${j==="mastercard"?"is-active":""}`,title:"Mastercard",children:e.jsxs("svg",{viewBox:"0 0 38 24",width:"44",height:"28","aria-label":"Mastercard",children:[e.jsx("circle",{cx:"14",cy:"12",r:"10",fill:"#EB001B"}),e.jsx("circle",{cx:"24",cy:"12",r:"10",fill:"#F79E1B",fillOpacity:"0.88"})]})}),e.jsx("div",{className:`card-brand-logo visa ${j==="visa"?"is-active":""}`,title:"VISA",children:e.jsx("svg",{viewBox:"0 0 50 20",width:"54",height:"22","aria-label":"VISA",children:e.jsx("text",{x:"2",y:"16",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"900",fontStyle:"italic",fontSize:"18",fill:"#ffffff",letterSpacing:"1",children:"VISA"})})}),e.jsx("div",{className:`card-brand-logo unionpay ${j==="unionpay"?"is-active":""}`,title:"UnionPay",children:e.jsxs("div",{className:"unionpay-badge",children:[e.jsx("span",{className:"up-red"}),e.jsx("span",{className:"up-blue"}),e.jsx("span",{className:"up-green"}),e.jsx("span",{className:"up-text",children:"UnionPay"})]})})]}),e.jsxs("form",{onSubmit:S,className:"card-payment-form",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Card number"]}),e.jsxs("div",{className:"card-input-wrapper",children:[e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-number",placeholder:"4000 1234 5678 9010",value:i.cardNumber,onChange:z,className:`card-input ${t.cardNumber?"has-error":""}`,maxLength:19,disabled:r}),j&&e.jsx("span",{className:"card-detected-badge",children:j.toUpperCase()})]}),t.cardNumber&&e.jsx("span",{className:"card-field-error",children:t.cardNumber})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Name on card"]}),e.jsx("input",{type:"text",autoComplete:"cc-name",placeholder:"e.g. HAMZA ALI",value:i.cardholderName,onChange:w,className:`card-input ${t.cardholderName?"has-error":""}`,disabled:r}),t.cardholderName&&e.jsx("span",{className:"card-field-error",children:t.cardholderName})]}),e.jsxs("div",{className:"card-row-two-col",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Expiry date"]}),e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",value:i.expiryDate,onChange:u,className:`card-input ${t.expiryDate?"has-error":""}`,maxLength:5,disabled:r}),t.expiryDate&&e.jsx("span",{className:"card-field-error",children:t.expiryDate})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," CVV",e.jsx("button",{type:"button",className:"cvv-info-btn",onClick:()=>x(!y),onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),"aria-label":"CVV information",children:"ⓘ"}),y&&e.jsx("div",{className:"cvv-tooltip",children:"3 or 4 digit security code located on the back of your card."})]}),e.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"•••",value:i.cvv,onChange:a,className:`card-input ${t.cvv?"has-error":""}`,maxLength:4,disabled:r}),t.cvv&&e.jsx("span",{className:"card-field-error",children:t.cvv})]})]}),e.jsxs("div",{className:"save-card-wrapper",children:[e.jsxs("label",{className:"save-card-checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:i.saveCard,onChange:l=>g(h=>({...h,saveCard:l.target.checked})),className:"save-card-checkbox",disabled:r}),e.jsx("span",{className:"save-card-title",children:"Save Card for Express Rebooking"})]}),e.jsx("p",{className:"save-card-subtext",children:"Card details are encrypted with bank-grade 256-bit tokenization for your security."})]}),p&&e.jsxs("div",{className:"card-processing-status",children:[e.jsx("span",{className:"card-spinner"}),e.jsx("span",{children:p})]}),e.jsxs("div",{className:"card-actions-row",children:[b&&e.jsx("button",{type:"button",onClick:b,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Payment..."]}):c?`Pay Now • PKR ${c.toLocaleString()}`:"Pay Now"})]}),e.jsxs("div",{className:"card-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted & PCI-DSS Compliant"}),e.jsx("span",{children:"⚡ Instant Verified QR Pass Delivery"})]})]}),e.jsx("style",{children:`
        .card-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }

        .card-brands-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.75rem;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.2s ease;
        }

        .card-brand-logo.is-active {
          border-color: #ff5a1f;
          background: rgba(255, 90, 31, 0.15);
          box-shadow: 0 0 0 2px rgba(255, 90, 31, 0.3);
        }

        .unionpay-badge {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 22px;
          padding: 0 4px;
          background: #005a9c;
          border-radius: 4px;
          color: #fff;
          font-family: sans-serif;
        }

        .unionpay-badge span.up-red {
          width: 5px;
          height: 16px;
          background: #e21c24;
          border-radius: 2px;
        }
        .unionpay-badge span.up-blue {
          width: 5px;
          height: 16px;
          background: #004586;
          border-radius: 2px;
        }
        .unionpay-badge span.up-green {
          width: 5px;
          height: 16px;
          background: #008146;
          border-radius: 2px;
        }
        .unionpay-badge span.up-text {
          font-size: 8px;
          line-height: 1;
          font-weight: bold;
          margin-left: 2px;
        }

        .card-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }

        .card-field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .required-star {
          color: #ff5a1f;
          font-weight: 700;
        }

        .card-input-wrapper {
          position: relative;
          width: 100%;
        }

        .card-input {
          width: 100%;
          min-height: 52px;
          padding: 0 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          font-size: 0.96rem;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .card-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .card-input:focus {
          border-color: #ff5a1f;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.25);
        }

        .card-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .card-detected-badge {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.72rem;
          font-weight: 900;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          background: rgba(255, 189, 89, 0.2);
          color: #ffbd59;
          border: 1px solid rgba(255, 189, 89, 0.35);
          letter-spacing: 0.08em;
        }

        .card-field-error {
          font-size: 0.8rem;
          color: #fca5a5;
          font-weight: 600;
        }

        .card-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
        }

        .cvv-info-btn {
          border: none;
          background: none;
          color: #ffbd59;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 0 0.2rem;
          display: inline-flex;
          align-items: center;
        }

        .cvv-tooltip {
          position: absolute;
          right: 0;
          bottom: 100%;
          background: #1e0d06;
          border: 1px solid rgba(255, 189, 89, 0.3);
          color: #fff;
          font-size: 0.75rem;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          width: max-content;
          max-width: 240px;
          z-index: 10;
          margin-bottom: 6px;
        }

        .save-card-wrapper {
          margin-top: 0.3rem;
        }

        .save-card-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
        }

        .save-card-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #ff5a1f;
          cursor: pointer;
        }

        .save-card-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .save-card-subtext {
          margin: 0.35rem 0 0 1.8rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(255, 90, 31, 0.15);
          border: 1px solid rgba(255, 90, 31, 0.35);
          color: #ff8a3d;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }

        .card-spinner,
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 138, 61, 0.3);
          border-top-color: #ff8a3d;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .btn-spinner {
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: #ffffff;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.75; }
        }

        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.8rem;
        }

        .pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px -8px rgba(255, 90, 31, 0.55);
        }

        .pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(255, 90, 31, 0.75);
        }

        .pay-now-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .btn-loading-content {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .card-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.6rem;
          margin-top: 0.8rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .card-row-two-col {
            grid-template-columns: 1fr;
          }
          .card-security-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function _(c){const s=c.replace(/\D/g,"").slice(0,11);return s.length>4?`${s.slice(0,4)}-${s.slice(4)}`:s}function ee({amount:c,onSubmit:s,loading:r,onBack:b}){const[i,g]=m.useState({mobileNumber:"",accountTitle:""}),[t,f]=m.useState({}),[y,x]=m.useState(""),p=u=>{const a=_(u.target.value);g(w=>({...w,mobileNumber:a})),t.mobileNumber&&f(w=>({...w,mobileNumber:""}))},d=u=>{g(a=>({...a,accountTitle:u.target.value})),t.accountTitle&&f(a=>({...a,accountTitle:""}))},j=()=>{const u={},a=i.mobileNumber.replace(/\D/g,"");return(!a||a.length<11||!a.startsWith("03"))&&(u.mobileNumber="Please enter a valid 11-digit JazzCash number (e.g., 0300-1234567)"),i.accountTitle.trim()||(u.accountTitle="Please enter the title/name registered with this JazzCash account"),f(u),Object.keys(u).length===0},z=async u=>{if(u.preventDefault(),!!j()){x("Connecting to JazzCash Secure Gateway..."),await new Promise(a=>setTimeout(a,450)),x("Validating JazzCash wallet balance & credentials..."),await new Promise(a=>setTimeout(a,450)),x(`Authorizing deduction of PKR ${c.toLocaleString()}...`);try{await s({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{x("")}}};return e.jsxs("div",{className:"jazzcash-payment-container",children:[e.jsxs("div",{className:"jazzcash-header-badge",children:[e.jsx("div",{className:"jc-logo-circle",children:"JC"}),e.jsxs("div",{children:[e.jsx("h4",{children:"JazzCash Direct Wallet"}),e.jsx("span",{children:"Automatic instant deduction from your mobile wallet"})]})]}),e.jsxs("form",{onSubmit:z,className:"jazzcash-payment-form",children:[e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," JazzCash Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0300-1234567",value:i.mobileNumber,onChange:p,className:`jc-input ${t.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),t.mobileNumber&&e.jsx("span",{className:"jc-field-error",children:t.mobileNumber})]}),e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:d,className:`jc-input ${t.accountTitle?"has-error":""}`,disabled:r}),t.accountTitle&&e.jsx("span",{className:"jc-field-error",children:t.accountTitle})]}),y&&e.jsxs("div",{className:"jc-processing-status",children:[e.jsx("span",{className:"jc-spinner"}),e.jsx("span",{children:y})]}),e.jsxs("div",{className:"jc-actions-row",children:[b&&e.jsx("button",{type:"button",onClick:b,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"jc-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing JazzCash Payment..."]}):c?`Pay with JazzCash • PKR ${c.toLocaleString()}`:"Pay with JazzCash"})]}),e.jsxs("div",{className:"jc-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted JazzCash API Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
        .jazzcash-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }
        .jazzcash-header-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .jc-logo-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #E30613;
          color: #fff;
          font-weight: 900;
          font-size: 1.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(227, 6, 19, 0.4);
        }
        .jazzcash-header-badge h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .jazzcash-header-badge span {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.65);
        }
        .jazzcash-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .jc-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .jc-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .required-star { color: #E30613; font-weight: 700; }
        .jc-input {
          width: 100%;
          min-height: 52px;
          padding: 0 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          font-size: 0.96rem;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .jc-input:focus {
          border-color: #E30613;
          box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.25);
        }
        .jc-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
        .jc-field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 600; }
        .jc-field-hint { font-size: 0.78rem; color: rgba(255, 255, 255, 0.5); }
        .jc-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(227, 6, 19, 0.15);
          border: 1px solid rgba(227, 6, 19, 0.35);
          color: #ff6b6b;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }
        .jc-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(227, 6, 19, 0.3);
          border-top-color: #E30613;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        .jc-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.8rem;
        }
        .jc-pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #E30613, #b8000b);
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px -8px rgba(227, 6, 19, 0.55);
        }
        .jc-pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(227, 6, 19, 0.75);
        }
        .jc-pay-now-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .jc-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.6rem;
          margin-top: 0.8rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }
      `})]})}function ae(c){const s=c.replace(/\D/g,"").slice(0,11);return s.length>4?`${s.slice(0,4)}-${s.slice(4)}`:s}function te({amount:c,onSubmit:s,loading:r,onBack:b}){const[i,g]=m.useState({mobileNumber:"",accountTitle:""}),[t,f]=m.useState({}),[y,x]=m.useState(""),p=u=>{const a=ae(u.target.value);g(w=>({...w,mobileNumber:a})),t.mobileNumber&&f(w=>({...w,mobileNumber:""}))},d=u=>{g(a=>({...a,accountTitle:u.target.value})),t.accountTitle&&f(a=>({...a,accountTitle:""}))},j=()=>{const u={},a=i.mobileNumber.replace(/\D/g,"");return(!a||a.length<11||!a.startsWith("03"))&&(u.mobileNumber="Please enter a valid 11-digit Easypaisa number (e.g., 0333-1234567)"),i.accountTitle.trim()||(u.accountTitle="Please enter the name registered on your Easypaisa account"),f(u),Object.keys(u).length===0},z=async u=>{if(u.preventDefault(),!!j()){x("Connecting to Easypaisa Open API..."),await new Promise(a=>setTimeout(a,450)),x("Verifying account status and authorization..."),await new Promise(a=>setTimeout(a,450)),x(`Authorizing deduction of PKR ${c.toLocaleString()}...`);try{await s({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{x("")}}};return e.jsxs("div",{className:"easypaisa-payment-container",children:[e.jsxs("div",{className:"easypaisa-header-badge",children:[e.jsx("div",{className:"ep-logo-circle",children:"EP"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Easypaisa Mobile Account"}),e.jsx("span",{children:"Automatic instant deduction from your mobile account"})]})]}),e.jsxs("form",{onSubmit:z,className:"easypaisa-payment-form",children:[e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Easypaisa Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0333-1234567",value:i.mobileNumber,onChange:p,className:`ep-input ${t.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),t.mobileNumber&&e.jsx("span",{className:"ep-field-error",children:t.mobileNumber})]}),e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:d,className:`ep-input ${t.accountTitle?"has-error":""}`,disabled:r}),t.accountTitle&&e.jsx("span",{className:"ep-field-error",children:t.accountTitle})]}),y&&e.jsxs("div",{className:"ep-processing-status",children:[e.jsx("span",{className:"ep-spinner"}),e.jsx("span",{children:y})]}),e.jsxs("div",{className:"ep-actions-row",children:[b&&e.jsx("button",{type:"button",onClick:b,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"ep-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Easypaisa Payment..."]}):c?`Pay with Easypaisa • PKR ${c.toLocaleString()}`:"Pay with Easypaisa"})]}),e.jsxs("div",{className:"ep-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted Easypaisa Gateway Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
        .easypaisa-payment-container {
          background: rgba(27, 17, 11, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: clamp(1.4rem, 3vw, 2.2rem);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 45px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          width: 100%;
          color: #ffffff;
        }
        .easypaisa-header-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ep-logo-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #00A651;
          color: #fff;
          font-weight: 900;
          font-size: 1.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 166, 81, 0.4);
        }
        .easypaisa-header-badge h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }
        .easypaisa-header-badge span {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.65);
        }
        .easypaisa-payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .ep-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .ep-field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .required-star { color: #00A651; font-weight: 700; }
        .ep-input {
          width: 100%;
          min-height: 52px;
          padding: 0 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          font-size: 0.96rem;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ep-input:focus {
          border-color: #00A651;
          box-shadow: 0 0 0 3px rgba(0, 166, 81, 0.25);
        }
        .ep-input.has-error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }
        .ep-field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 600; }
        .ep-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 12px;
          background: rgba(0, 166, 81, 0.15);
          border: 1px solid rgba(0, 166, 81, 0.35);
          color: #6ee7b7;
          font-weight: 700;
          font-size: 0.9rem;
          animation: pulse 1.5s infinite;
        }
        .ep-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 166, 81, 0.3);
          border-top-color: #00A651;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        .ep-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.8rem;
        }
        .ep-pay-now-btn {
          flex: 1;
          min-height: 54px;
          background: linear-gradient(120deg, #00A651, #007338);
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px -8px rgba(0, 166, 81, 0.55);
        }
        .ep-pay-now-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 45px -6px rgba(0, 166, 81, 0.75);
        }
        .ep-pay-now-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .ep-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.6rem;
          margin-top: 0.8rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }
      `})]})}function re({amount:c,onProceed:s,loading:r,onBack:b}){const[i,g]=m.useState(!1),t=async()=>{g(!0);try{await s()}finally{g(!1)}};return e.jsxs("div",{className:"payfast-gateway-card",children:[e.jsxs("div",{className:"payfast-header-banner",children:[e.jsxs("div",{className:"payfast-logo-group",children:[e.jsx("span",{className:"pf-brand-name",children:"PayFast"}),e.jsx("span",{className:"pf-badge-tag",children:"Official Payment Gateway"})]}),e.jsx("span",{className:"pf-security-seal",children:"🔒 SBP Regulated · 256-Bit SSL"})]}),e.jsxs("div",{className:"payfast-body",children:[e.jsxs("p",{className:"payfast-instruction",children:["You will be redirected to the secure ",e.jsx("strong",{children:"PayFast Payment Portal"})," to complete your payment."]}),e.jsxs("div",{className:"payfast-channels-grid",children:[e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"💳"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Cards"}),e.jsx("small",{children:"Visa, Master, PayPak, UnionPay"})]})]}),e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"📱"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Wallets"}),e.jsx("small",{children:"JazzCash & Easypaisa"})]})]}),e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"🏦"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bank Accounts"}),e.jsx("small",{children:"1LINK & Direct Internet Banking"})]})]})]}),e.jsxs("div",{className:"payfast-summary-box",children:[e.jsxs("div",{className:"pf-summary-row",children:[e.jsx("span",{children:"Total Payable Amount:"}),e.jsxs("strong",{children:["PKR ",Number(c||0).toLocaleString()]})]}),e.jsxs("div",{className:"pf-summary-row pf-small-row",children:[e.jsx("span",{children:"Processing / Gateway Fee:"}),e.jsx("span",{className:"pf-free-tag",children:"Free (PKR 0)"})]})]}),e.jsxs("div",{className:"payfast-flow-steps",children:[e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"1"}),e.jsx("span",{children:"Redirect to PayFast"})]}),e.jsx("span",{className:"pf-arrow",children:"→"}),e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"2"}),e.jsx("span",{children:"Enter Card / OTP / Wallet"})]}),e.jsx("span",{className:"pf-arrow",children:"→"}),e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"3"}),e.jsx("span",{children:"Instant Return & QR Pass"})]})]}),e.jsxs("div",{className:"payfast-actions",children:[b&&e.jsx("button",{type:"button",className:"pf-back-btn",onClick:b,disabled:r||i,children:"← Back"}),e.jsx("button",{type:"button",className:"pf-proceed-btn",onClick:t,disabled:r||i,children:i||r?e.jsxs("span",{className:"pf-btn-loading",children:[e.jsx("span",{className:"pf-spinner"})," Connecting to PayFast Gateway..."]}):`Proceed to PayFast (PKR ${Number(c||0).toLocaleString()}) →`})]})]}),e.jsx("style",{children:`
        .payfast-gateway-card {
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.85));
          border: 1px solid rgba(235, 77, 75, 0.3);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .payfast-header-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(235, 77, 75, 0.15), rgba(249, 115, 22, 0.1));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .payfast-logo-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pf-brand-name {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ff6b6b, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-badge-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(235, 77, 75, 0.2);
          color: #ff8b8b;
          border: 1px solid rgba(235, 77, 75, 0.4);
        }
        .pf-security-seal {
          font-size: 12px;
          color: #cbd5e1;
          font-weight: 500;
        }
        .payfast-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .payfast-instruction {
          margin: 0;
          font-size: 14px;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .payfast-instruction strong {
          color: #ff8b8b;
        }
        .payfast-channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 640px) {
          .payfast-channels-grid {
            grid-template-columns: 1fr;
          }
        }
        .pf-channel-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .pf-icon {
          font-size: 20px;
        }
        .pf-channel-item strong {
          display: block;
          font-size: 13px;
          color: #ffffff;
        }
        .pf-channel-item small {
          display: block;
          font-size: 11px;
          color: #94a3b8;
        }
        .payfast-summary-box {
          padding: 14px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pf-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #cbd5e1;
        }
        .pf-summary-row strong {
          font-size: 18px;
          color: #fbbf24;
        }
        .pf-small-row {
          font-size: 12px;
          color: #94a3b8;
        }
        .pf-free-tag {
          color: #10b981;
          font-weight: 600;
        }
        .payfast-flow-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(235, 77, 75, 0.05);
          border: 1px dashed rgba(235, 77, 75, 0.25);
          font-size: 12px;
          color: #cbd5e1;
        }
        .pf-step {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pf-step-num {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #eb4d4b;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-arrow {
          color: #94a3b8;
          font-weight: bold;
        }
        .payfast-actions {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }
        .pf-back-btn {
          padding: 12px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .pf-proceed-btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eb4d4b, #f97316);
          border: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(235, 77, 75, 0.4);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pf-proceed-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(235, 77, 75, 0.5);
        }
        .pf-btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .pf-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})}function se({isOpen:c,onClose:s,ticket:r,amount:b,onComplete:i}){const[g,t]=m.useState("card"),[f,y]=m.useState(!1),[x,p]=m.useState(""),[d,j]=m.useState(!1),[z,u]=m.useState("849201"),[a,w]=m.useState({cardNumber:"5893 4100 8821 9402",expiry:"08/28",cvv:"921",holderName:r?.fullName||"Customer"}),[E,S]=m.useState(r?.phone||"03001234567");if(!c)return null;const l=async n=>{n.preventDefault(),y(!0),p("Connecting to SBP 1LINK switch..."),await new Promise(P=>setTimeout(P,600)),p("Sending 3D Secure OTP verification request to issuing bank..."),await new Promise(P=>setTimeout(P,600)),y(!1),j(!0)},h=async()=>{y(!0),p("Verifying OTP with issuing bank..."),await new Promise(n=>setTimeout(n,700)),p(`Deducting PKR ${Number(b||0).toLocaleString()} and settling to Organizer Bank Account...`),await new Promise(n=>setTimeout(n,800)),p("Payment Successful! Sending IPN webhook to Ozilla Festival..."),await new Promise(n=>setTimeout(n,600));try{await i({basket_id:`OZILLA-${r?.id||r?.ticketId}`,bankName:g==="card"?"Meezan Bank 1LINK":g==="jazzcash"?"JazzCash MWallet":"Easypaisa MAccount",customerName:r?.fullName||a.holderName})}finally{y(!1)}};return e.jsxs("div",{className:"pf-modal-overlay",children:[e.jsxs("div",{className:"pf-modal-container",children:[e.jsxs("div",{className:"pf-modal-header",children:[e.jsxs("div",{className:"pf-modal-brand",children:[e.jsx("span",{className:"pf-logo",children:"PayFast"}),e.jsx("span",{className:"pf-tagline",children:"Secure Multi-Channel IPG"})]}),e.jsx("button",{type:"button",className:"pf-close-btn",onClick:s,disabled:f,children:"✕"})]}),e.jsxs("div",{className:"pf-merchant-banner",children:[e.jsxs("div",{children:[e.jsx("small",{children:"Merchant"}),e.jsx("strong",{children:"Prism Events & Tours (Ozilla Festival 2026)"})]}),e.jsxs("div",{className:"pf-amount-pill",children:[e.jsx("small",{children:"Total Due"}),e.jsxs("strong",{children:["PKR ",Number(b||0).toLocaleString()]})]})]}),e.jsx("div",{className:"pf-modal-body",children:d?e.jsxs("div",{className:"pf-otp-screen",children:[e.jsx("div",{className:"pf-otp-icon",children:"🔐"}),e.jsx("h3",{children:"3D Secure Bank OTP Verification"}),e.jsxs("p",{children:["A one-time verification code has been sent to your bank-registered mobile number ending in ",e.jsx("strong",{children:"•••• 402"}),"."]}),e.jsx("div",{className:"pf-fg",style:{maxWidth:"240px",margin:"16px auto"},children:e.jsx("input",{type:"text",maxLength:6,value:z,onChange:n=>u(n.target.value),className:"pf-otp-input",style:{textAlign:"center",fontSize:"22px",letterSpacing:"4px",fontWeight:"bold"}})}),x&&e.jsx("div",{className:"pf-phase-msg",children:x}),e.jsx("button",{type:"button",className:"pf-modal-submit",onClick:h,disabled:f,children:f?x:"Confirm & Authorize Payment"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pf-modal-tabs",children:[e.jsx("button",{type:"button",className:`pf-tab ${g==="card"?"is-active":""}`,onClick:()=>t("card"),children:"💳 Debit / Credit Card"}),e.jsx("button",{type:"button",className:`pf-tab ${g==="jazzcash"?"is-active":""}`,onClick:()=>t("jazzcash"),children:"🟠 JazzCash"}),e.jsx("button",{type:"button",className:`pf-tab ${g==="easypaisa"?"is-active":""}`,onClick:()=>t("easypaisa"),children:"🟢 Easypaisa"})]}),g==="card"&&e.jsxs("form",{onSubmit:l,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Card Number"}),e.jsx("input",{type:"text",value:a.cardNumber,onChange:n=>w({...a,cardNumber:n.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-grid-2",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Expiry (MM/YY)"}),e.jsx("input",{type:"text",value:a.expiry,onChange:n=>w({...a,expiry:n.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"CVV / CVC"}),e.jsx("input",{type:"password",maxLength:4,value:a.cvv,onChange:n=>w({...a,cvv:n.target.value}),required:!0})]})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Cardholder Name"}),e.jsx("input",{type:"text",value:a.holderName,onChange:n=>w({...a,holderName:n.target.value}),required:!0})]}),x&&e.jsx("div",{className:"pf-phase-msg",children:x}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:f,children:f?"Connecting...":`Pay PKR ${Number(b||0).toLocaleString()} via PayFast`})]}),(g==="jazzcash"||g==="easypaisa")&&e.jsxs("form",{onSubmit:l,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:g==="jazzcash"?"JazzCash Mobile Number":"Easypaisa Mobile Number"}),e.jsx("input",{type:"text",value:E,onChange:n=>S(n.target.value),placeholder:"0300-1234567",required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Account Title"}),e.jsx("input",{type:"text",value:a.holderName,onChange:n=>w({...a,holderName:n.target.value}),required:!0})]}),x&&e.jsx("div",{className:"pf-phase-msg",children:x}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:f,children:f?"Connecting...":`Authenticate & Pay PKR ${Number(b||0).toLocaleString()}`})]})]})}),e.jsx("div",{className:"pf-modal-footer",children:e.jsx("span",{children:"🔒 256-Bit Encrypted Secure Connection · PCI-DSS Compliant"})})]}),e.jsx("style",{children:`
        .pf-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
        }
        .pf-modal-container {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          background: #0f172a;
          border: 1px solid rgba(235, 77, 75, 0.4);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          color: #fff;
          font-family: inherit;
        }
        .pf-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background: #1e293b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .pf-modal-brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .pf-logo {
          font-size: 20px;
          font-weight: 900;
          color: #eb4d4b;
        }
        .pf-tagline {
          font-size: 11px;
          color: #94a3b8;
        }
        .pf-close-btn {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 16px;
          cursor: pointer;
        }
        .pf-merchant-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .pf-merchant-banner small {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .pf-merchant-banner strong {
          font-size: 13px;
          color: #f1f5f9;
        }
        .pf-amount-pill {
          text-align: right;
        }
        .pf-amount-pill strong {
          color: #fbbf24;
          font-size: 16px;
        }
        .pf-modal-body {
          padding: 20px;
        }
        .pf-modal-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 16px;
        }
        .pf-tab {
          padding: 8px 6px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pf-tab.is-active {
          background: rgba(235, 77, 75, 0.2);
          border-color: #eb4d4b;
          color: #ff8b8b;
        }
        .pf-modal-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pf-fg {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pf-fg label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }
        .pf-fg input {
          padding: 10px 12px;
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 13px;
        }
        .pf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .pf-phase-msg {
          padding: 10px 12px;
          border-radius: 8px;
          background: rgba(235, 77, 75, 0.15);
          border: 1px solid rgba(235, 77, 75, 0.3);
          color: #ff8b8b;
          font-size: 12px;
          text-align: center;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .pf-modal-submit {
          padding: 12px;
          border-radius: 8px;
          background: linear-gradient(135deg, #eb4d4b, #f97316);
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 6px;
        }
        .pf-modal-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .pf-otp-screen {
          text-align: center;
          padding: 10px 0;
        }
        .pf-otp-icon {
          font-size: 36px;
          margin-bottom: 8px;
        }
        .pf-otp-screen h3 {
          margin: 0 0 6px;
          font-size: 16px;
          color: #f1f5f9;
        }
        .pf-otp-screen p {
          margin: 0;
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.4;
        }
        .pf-modal-footer {
          padding: 10px 20px;
          background: #090d16;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 10px;
          color: #64748b;
          text-align: center;
        }
      `})]})}function ie({activeMethod:c,onSelectMethod:s}){const r=[{id:"payfast",title:"PayFast Hosted Gateway",subtitle:"Cards, Wallets, 1LINK Bank Accounts",badge:"Recommended",icon:e.jsx("div",{style:{width:24,height:24,borderRadius:"6px",background:"linear-gradient(135deg, #eb4d4b, #f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff"},children:"PF"}),color:"#eb4d4b"},{id:"card",title:"Debit / Credit Card",subtitle:"Visa, Mastercard, UnionPay, PayPak",badge:"Auto-Deduct",icon:e.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),color:"#ff5a1f"},{id:"jazzcash",title:"JazzCash",subtitle:"Mobile Wallet / Direct Pay",badge:"Zero Fee",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#E30613",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"JC"}),color:"#E30613"},{id:"easypaisa",title:"Easypaisa",subtitle:"Mobile Account / Push Approval",badge:"Instant Pass",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#00A651",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"EP"}),color:"#00A651"}];return e.jsxs("div",{className:"payment-method-selector-container",children:[e.jsx("div",{className:"payment-method-tabs",children:r.map(b=>{const i=c===b.id;return e.jsxs("button",{type:"button",className:`payment-method-tab ${i?"is-active":""}`,onClick:()=>s(b.id),children:[e.jsxs("div",{className:"payment-tab-top",children:[e.jsx("div",{className:"payment-tab-icon",children:b.icon}),e.jsx("span",{className:"payment-tab-badge",children:b.badge})]}),e.jsxs("div",{className:"payment-tab-text",children:[e.jsxs("div",{className:"payment-tab-title",children:[e.jsx("strong",{children:b.title}),i&&e.jsx("span",{className:"active-dot"})]}),e.jsx("small",{children:b.subtitle})]})]},b.id)})}),e.jsx("style",{children:`
        .payment-method-selector-container {
          margin-bottom: 20px;
        }
        .payment-method-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 768px) {
          .payment-method-tabs {
            grid-template-columns: 1fr;
          }
        }
        .payment-method-tab {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.45);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          position: relative;
          backdrop-filter: blur(10px);
        }
        .payment-method-tab:hover {
          border-color: rgba(255, 189, 89, 0.35);
          transform: translateY(-2px);
        }
        .payment-method-tab.is-active {
          border-color: #ff5a1f !important;
          background: rgba(255, 90, 31, 0.15) !important;
          box-shadow: 0 0 25px rgba(255, 90, 31, 0.2);
        }
        .payment-tab-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .payment-tab-icon {
          color: #ffbd59;
          display: flex;
          align-items: center;
        }
        .payment-tab-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid rgba(255, 189, 89, 0.3);
        }
        .payment-tab-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .payment-tab-title {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .payment-tab-title strong {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
        }
        .active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 8px #ff5a1f;
        }
        .payment-tab-text small {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
        }
      `})]})}const ne=["Personal Info","Ticket Details","Payment Checkout","QR Pass"],oe={ticketType:"General",day:"Day 1",quantity:1,subtotal:1,serviceFee:0,discount:0,total:1,benefits:["Festival entry","Food court access","Partner discount offers"]};function be(){const c=q(),{user:s}=V(),{requestTicket:r,payWithCard:b,payWithJazzCash:i,payWithEasypaisa:g,initiatePayFastCheckout:t,completePayFastGateway:f,loading:y}=K(),[x,p]=m.useState(null),[d,j]=m.useState(!1),[z,u]=m.useState("payfast"),[a,w]=m.useState(null),[E,S]=m.useState(!1),[l,h]=m.useState(oe),[n,P]=m.useState(null),[D,A]=m.useState(!0),T=d?3:2;`${s?.firstName||""} ${s?.lastName||""}`.trim()||s?.name||s?.email;const R=!!n?.soldOut;m.useEffect(()=>{let v=!0;return(async()=>{A(!0);try{const C=await B.getAvailability();if(!v)return;P(C),C?.soldOut&&p({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{v&&P(null)}finally{v&&A(!1)}})(),()=>{v=!1}},[]);const M=()=>{if(R){p({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}c(`/login?returnTo=${encodeURIComponent("/tickets")}`)},L=async v=>{if(R){p({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const N=await r(v);w(N),j(!0),p({type:"success",message:"Ticket reserved! Please complete payment below."});const C=await B.getAvailability().catch(()=>null);C&&P(C)}catch(N){const C=N?.response?.data?.message||N?.message||"Failed to request ticket. Please try again.";N?.response?.data?.availability&&P(N.response.data.availability),p({type:"error",message:C})}},I=async v=>{if(!a?.id){p({type:"error",message:"Ticket session expired. Please retry."});return}try{await b(a.id,v),p({type:"success",message:`Payment of PKR ${l.total.toLocaleString()} successful! Your QR pass is ready.`}),c(`/tickets/view/${a.id}`)}catch(N){const C=N?.response?.data?.message||N?.message||"Failed to process card payment.";p({type:"error",message:C})}},O=async v=>{if(!a?.id){p({type:"error",message:"Ticket session expired. Please retry."});return}try{await i(a.id,v),p({type:"success",message:"JazzCash payment successful! Your QR pass is ready."}),c(`/tickets/view/${a.id}`)}catch(N){const C=N?.response?.data?.message||N?.message||"Failed to process JazzCash payment.";p({type:"error",message:C})}},o=async v=>{if(!a?.id){p({type:"error",message:"Ticket session expired. Please retry."});return}try{await g(a.id,v),p({type:"success",message:"Easypaisa payment successful! Your QR pass is ready."}),c(`/tickets/view/${a.id}`)}catch(N){const C=N?.response?.data?.message||N?.message||"Failed to process Easypaisa payment.";p({type:"error",message:C})}},k=async()=>{if(!a?.id){p({type:"error",message:"Ticket session expired. Please retry."});return}try{await t(a.id),S(!0)}catch(v){p({type:"error",message:v?.response?.data?.message||v?.message||"Failed to initiate PayFast session."})}},F=async v=>{if(a?.id)try{await f(a.id,v),S(!1),p({type:"success",message:`PayFast payment of PKR ${l.total.toLocaleString()} confirmed! Official QR pass generated.`}),c(`/tickets/view/${a.id}?payment=success`)}catch(N){p({type:"error",message:N?.response?.data?.message||N?.message||"Failed to verify PayFast transaction."})}};return e.jsxs("main",{className:"ticket-portal-clean",children:[e.jsxs("section",{className:"ticket-clean-hero",children:[e.jsx(X,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.5}),e.jsx("div",{className:"hero-glow-blob"}),e.jsxs("div",{className:"ticket-clean-hero-content",children:[e.jsx("span",{className:"hero-eyebrow",children:"OZILLA FESTIVAL 2026"}),e.jsx("h1",{className:"hero-title",children:"Book Your Festival Passes"}),e.jsx("p",{className:"hero-subtitle",children:"Instant digital QR pass with access to 4 live stages, headline artists, and VIP amenities in Lahore."}),e.jsxs("div",{className:"hero-tags",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore"}),e.jsx("span",{children:"⚡ Instant QR Pass"})]})]})]}),e.jsxs("section",{className:"ticket-clean-shell",children:[x&&e.jsx(J,{type:x.type,message:x.message,onClose:()=>p(null)}),e.jsx("div",{className:"ticket-clean-stepper",children:ne.map((v,N)=>e.jsxs("div",{className:`step-item ${N+1<=T?"is-active":""}`,children:[e.jsx("span",{className:"step-num",children:N+1}),e.jsx("span",{className:"step-text",children:v})]},v))}),R?e.jsxs("div",{className:"ticket-sold-out-box",children:[e.jsx("h2",{children:"Tickets Sold Out"}),e.jsx("p",{children:"All available Ozilla Festival passes have been reserved."})]}):s?e.jsxs("div",{className:"ticket-main-grid",children:[e.jsxs("div",{className:"ticket-form-card",children:[e.jsxs("div",{className:"ticket-form-header",children:[e.jsx("h2",{children:d?"Payment Checkout":"Pass Reservation"}),e.jsx("span",{className:"ticket-badge-pill",children:"Official Portal"})]}),d?e.jsxs("div",{className:"ticket-payment-wrapper",children:[e.jsx(ie,{activeMethod:z,onSelectMethod:u}),z==="payfast"&&e.jsx(re,{amount:l.total,onProceed:k,loading:y,onBack:()=>j(!1)}),z==="card"&&e.jsx(Z,{amount:l.total,onSubmit:I,loading:y,onBack:()=>j(!1)}),z==="jazzcash"&&e.jsx(ee,{amount:l.total,onSubmit:O,loading:y,onBack:()=>j(!1)}),z==="easypaisa"&&e.jsx(te,{amount:l.total,onSubmit:o,loading:y,onBack:()=>j(!1)})]}):e.jsx(W,{onSubmit:L,loading:y,profileDefaults:s,onBookingChange:h,availability:n,availabilityLoading:D})]}),e.jsx(se,{isOpen:E,onClose:()=>S(!1),ticket:a,amount:l.total,onComplete:F}),e.jsx("aside",{className:"ticket-sidebar",children:e.jsxs("div",{className:"ticket-sidebar-summary",children:[e.jsx("h3",{children:"Order Summary"}),e.jsxs("div",{className:"summary-pass-type",children:[e.jsxs("strong",{children:[l.ticketType," Pass"]}),e.jsx("span",{children:l.day})]}),e.jsxs("div",{className:"summary-rows",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:l.quantity})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",l.subtotal.toLocaleString()]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),l.discount>0&&e.jsxs("div",{className:"summary-row summary-discount",children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["- PKR ",l.discount.toLocaleString()]})]})]}),e.jsxs("div",{className:"summary-total-row",children:[e.jsx("span",{children:"Grand Total"}),e.jsxs("strong",{children:["PKR ",l.total.toLocaleString()]})]}),e.jsx("div",{className:"summary-pass-badge",children:e.jsx("span",{children:"🎟️ Verified Digital QR Pass"})})]})})]}):e.jsxs("div",{className:"ticket-auth-prompt",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Sign in to Book Passes"}),e.jsx("p",{children:"Secure ticket purchasing requires an account for verified QR pass generation."})]}),e.jsx("button",{type:"button",onClick:M,className:"ticket-primary-button",children:"Sign In to Continue →"})]})]}),e.jsx("style",{children:`
        .ticket-portal-clean {
          position: relative;
          min-height: 100vh;
          padding: 0 0 3rem;
          color: #ffffff;
          background: #0B0705 !important;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .ticket-portal-clean * { box-sizing: border-box; }

        /* ── CLEAN HERO ── */
        .ticket-clean-hero {
          position: relative;
          min-height: clamp(240px, 32vh, 320px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 24px;
          margin-bottom: 2rem;
          background: radial-gradient(ellipse at 50% 20%, rgba(255, 90, 31, 0.22) 0%, rgba(55, 10, 10, 0.35) 50%, #0B0705 90%) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem 1.5rem;
          text-align: center;
        }

        .hero-glow-blob {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 90, 31, 0.2);
          filter: blur(80px);
          pointer-events: none;
        }

        .ticket-clean-hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #ffbd59;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .hero-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .hero-tags {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .hero-tags span {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        /* ── STEPPER ── */
        .ticket-clean-stepper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          background: rgba(27, 17, 11, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 0.6rem;
          margin-bottom: 1.8rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .step-item.is-active {
          background: rgba(255, 90, 31, 0.15);
          border: 1px solid rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          font-size: 0.75rem;
          font-weight: 900;
        }

        .step-item.is-active .step-num {
          background: #ff5a1f;
          color: #ffffff;
        }

        /* ── MAIN GRID ── */
        .ticket-main-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 1.5rem;
          align-items: start;
        }

        .ticket-form-card,
        .ticket-sidebar-summary,
        .ticket-auth-prompt,
        .ticket-sold-out-box {
          background: rgba(27, 17, 11, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: clamp(1.4rem, 2.5vw, 2rem);
          backdrop-filter: blur(16px);
        }

        .ticket-form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 1.5rem;
        }

        .ticket-form-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-badge-pill {
          font-size: 0.72rem;
          font-weight: 800;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }

        /* ── SIDEBAR SUMMARY ── */
        .ticket-sidebar-summary h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .summary-pass-type {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          margin-bottom: 1.2rem;
        }

        .summary-pass-type strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          color: #ffffff;
        }

        .summary-pass-type span {
          font-size: 0.78rem;
          font-weight: 800;
          color: #ffbd59;
        }

        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .summary-row strong {
          color: #ffffff;
        }

        .summary-discount {
          color: #86efac;
        }

        .summary-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1.2rem;
        }

        .summary-total-row span {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 700;
        }

        .summary-total-row strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          color: #ffbd59;
          font-weight: 900;
        }

        .summary-pass-badge {
          text-align: center;
          padding: 0.65rem;
          background: rgba(255, 189, 89, 0.08);
          border: 1px dashed rgba(255, 189, 89, 0.3);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffbd59;
        }

        /* ── AUTH PROMPT ── */
        .ticket-auth-prompt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .ticket-auth-prompt h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .ticket-auth-prompt p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .ticket-primary-button {
          padding: 0.85rem 1.6rem;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          border: none;
          border-radius: 14px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 180ms ease;
        }

        .ticket-primary-button:hover {
          transform: translateY(-2px);
        }

        /* Form & Stepper Inner Styling */
        .ticket-form-stepper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .ticket-form-stepper button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .ticket-form-stepper button.is-active,
        .ticket-form-stepper button.is-complete {
          background: rgba(255, 90, 31, 0.15);
          border-color: rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .ticket-form-stepper span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: grid;
          place-items: center;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .ticket-form-stepper button.is-active span {
          background: #ff5a1f;
        }

        .ticket-login-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }

        .ticket-login-chip span {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          color: #0B0705;
          font-weight: 900;
          font-size: 0.65rem;
          display: grid;
          place-items: center;
        }

        .ticket-panel-heading {
          margin-bottom: 1.2rem;
        }

        .ticket-panel-heading p {
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .ticket-panel-heading h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-input-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .ticket-input-wide { grid-column: 1 / -1; }

        .ticket-input-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .ticket-input-wrap span {
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
        }

        .ticket-input-wrap input,
        .ticket-input-wrap select {
          width: 100%;
          min-height: 48px;
          background: rgba(0, 0, 0, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 12px;
          padding: 0 1rem;
          color: #ffffff !important;
          font-size: 0.92rem;
          outline: none;
          font-family: inherit;
        }

        .ticket-input-wrap input:focus,
        .ticket-input-wrap select:focus {
          border-color: #ff5a1f !important;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.2) !important;
        }

        .ticket-input-wrap em {
          color: #fca5a5;
          font-size: 0.78rem;
          font-style: normal;
        }

        .ticket-option-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .ticket-option-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 180ms ease;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .ticket-option-card:hover {
          border-color: rgba(255, 189, 89, 0.35);
        }

        .ticket-option-card.is-selected {
          border-color: #ff5a1f !important;
          background: rgba(255, 90, 31, 0.15) !important;
        }

        .ticket-option-card span {
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ticket-option-card strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticket-option-card small {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .ticket-review-layout {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ticket-benefit-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .ticket-benefit-list span {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.25);
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .ticket-summary-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .ticket-summary-card h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .ticket-summary-card > div {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .ticket-summary-card > div strong {
          color: #ffffff;
        }

        .ticket-summary-card .ticket-total {
          padding-top: 0.65rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 1rem;
        }

        .ticket-summary-card .ticket-total strong {
          color: #ffbd59;
          font-weight: 900;
        }

        .ticket-form-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }

        .ticket-secondary-button {
          padding: 0.85rem 1.4rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ticket-main-grid {
            grid-template-columns: 1fr;
          }
          .ticket-clean-stepper {
            grid-template-columns: repeat(2, 1fr);
          }
          .ticket-auth-prompt {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .ticket-input-grid,
          .ticket-option-grid,
          .ticket-form-stepper {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{be as default};
