import{j as e,m as c}from"./vendor-motion-DHTbcX3O.js";import{r as m,u as Ee,L as Z}from"./vendor-react-6MXTWAEx.js";import{b}from"./index-BlrgNW1Y.js";import{o as pe}from"./ozillaProfessionalContent-B5Q6bA10.js";import"./vendor-utils-Bub7y9MC.js";b("/assets/ozilla/talwinder.jpg"),b("/assets/ozilla/talwinder.jpg"),b("/assets/ozilla/Imran-Khan.jpg"),b("/assets/ozilla/Imran-Khan.jpg"),b("/assets/ozilla/Bohemia.jpg"),b("/assets/ozilla/Bohemia.jpg"),b("/assets/ozilla/hassan-raheem.jpg"),b("/assets/ozilla/hassan-raheem.jpg");const de=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:b("/assets/ozilla/talwinder.jpg"),image:b("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:b("/assets/ozilla/Imran-Khan.jpg"),image:b("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:b("/assets/ozilla/Bohemia.jpg"),image:b("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:b("/assets/ozilla/hassan-raheem.jpg"),image:b("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],me=1.28,ge=.78;function V(s,r,t){return Math.min(t,Math.max(r,s))}function fe(s){if(!s)return null;if(typeof s=="string")return s||null;const r=s.src||s.image;return typeof r=="string"&&r?r:null}function ze(s){return fe(s&&typeof s=="object"&&(s.image||s.src)||s)}function Pe(s){if(s&&typeof s=="object"&&"offsetY"in s){const r=s.offsetY;return typeof r=="number"&&isFinite(r)?r:0}return 0}function Ae({items:s=de,images:r,slideWidth:t=320,slideHeight:i=440,spacing:l=2.4,direction:k="right",smoothness:f=8.5,radius:x=24,dim:g=5,background:v="transparent",sensitivity:E=5,autoPlay:z=!1,autoPlayInterval:A=3500,style:M,onItemClick:L}){const T=m.useRef(null),H=m.useRef([]),y=m.useRef(0),C=m.useRef(0),[j,S]=m.useState(0),[K,Q]=m.useState(!1),[h,u]=m.useState(0),N=s&&s.length>0?s:r&&r.length>0?r:de,n=m.useMemo(()=>N.map((a,o)=>({...a,src:ze(a),offsetY:Pe(a),name:a.name||`Artist ${o+1}`,genre:a.genre||"Live Performer",stage:a.stage||"Ozilla Arena",bpm:a.bpm||"128 BPM",vibe:a.vibe||"Festival Energy",isHeadliner:!!a.isHeadliner})),[N]),w=j>0&&j<640?Math.min(t,250):j<1024?Math.min(t,290):t,G=j>0&&j<640?Math.round(w*1.36):i,D=w+V(l,0,10)*18,X=.15-V(f,0,10)/10*.11,J=V(g,0,10)/10*.75,O=.4+V(E,0,10)/10*1.1,Y=.6+V(E,0,10)/10*1.6,W=k==="left",ee=m.useRef({count:n.length,step:D,slideWidth:w,width:j,ease:X,maxScale:me,minScale:ge,dim:J,loop:!1,flip:W});ee.current={count:n.length,step:D,slideWidth:w,width:j,ease:X,maxScale:me,minScale:ge,dim:J,loop:!1,flip:W};const q=m.useRef({wheelMultiplier:O,dragMultiplier:Y,flip:W});q.current={wheelMultiplier:O,dragMultiplier:Y,flip:W},m.useEffect(()=>{const a=T.current;if(!a)return;const o=new ResizeObserver(d=>{d[0]&&S(d[0].contentRect.width)});return o.observe(a),S(a.getBoundingClientRect().width),()=>o.disconnect()},[]),m.useEffect(()=>{H.current.length=n.length},[n.length]),m.useEffect(()=>{if(!z||K||n.length<=1)return;const a=setInterval(()=>{u(o=>{const d=(o+1)%n.length;return y.current=d*D,d})},A);return()=>clearInterval(a)},[z,K,n.length,D,A]),m.useEffect(()=>{let a=0,o=0;const d=P=>{a=requestAnimationFrame(d);const p=ee.current,B=o?Math.min((P-o)/1e3,.1):1/60;if(o=P,!p.count||p.step<=0||p.width<=0)return;const I=(p.count-1)*p.step;y.current=V(y.current,0,I);const te=1-Math.pow(1-p.ease,B*60);C.current+=(y.current-C.current)*te;const re=Math.round(C.current/p.step);re>=0&&re<p.count&&u(re);const Ne=(p.width-p.slideWidth)/2,Se=p.width/2;for(let ae=0;ae<p.count;ae+=1){const ie=H.current[ae];if(!ie)continue;const ne=ae*p.step-C.current+Ne,oe=ne+p.slideWidth/2-Se;let _,se;oe>0?(_=Math.min(p.maxScale,1+oe/p.width*.45),se=(_-1)*p.slideWidth*.35):(_=Math.max(p.minScale,1+oe/p.width*.5),se=0);const Ie=p.flip?p.width-p.slideWidth-(ne+se):ne+se;if(ie.style.transform=`translate3d(${Ie}px, -50%, 0) scale(${_})`,p.dim>0&&_<1){const ke=(1-_)/Math.max(.001,1-p.minScale);ie.style.filter=`brightness(${Math.max(.35,1-ke*p.dim)})`}else ie.style.filter="none"}};return a=requestAnimationFrame(d),()=>cancelAnimationFrame(a)},[]),m.useEffect(()=>{const a=T.current;if(!a)return;const o=d=>{d.preventDefault();const P=Math.abs(d.deltaX)>Math.abs(d.deltaY)?d.deltaX:d.deltaY;y.current+=P*q.current.wheelMultiplier};return a.addEventListener("wheel",o,{passive:!1}),()=>a.removeEventListener("wheel",o)},[]),m.useEffect(()=>{const a=T.current;if(!a)return;let o=null,d=0;const P=I=>{if(o===null){o=I.pointerId,d=I.clientX;try{a.setPointerCapture(I.pointerId)}catch{}}},p=I=>{if(o!==I.pointerId)return;const te=I.clientX-d;d=I.clientX,y.current+=(q.current.flip?te:-te)*q.current.dragMultiplier},B=I=>{if(o===I.pointerId){o=null;try{a.hasPointerCapture(I.pointerId)&&a.releasePointerCapture(I.pointerId)}catch{}}};return a.addEventListener("pointerdown",P),a.addEventListener("pointermove",p),a.addEventListener("pointerup",B),a.addEventListener("pointercancel",B),()=>{a.removeEventListener("pointerdown",P),a.removeEventListener("pointermove",p),a.removeEventListener("pointerup",B),a.removeEventListener("pointercancel",B)}},[]);const R=m.useCallback(a=>{const o=V(a,0,n.length-1);y.current=o*D,u(o)},[n.length,D]),U=m.useCallback(a=>{const o=V(h+(a==="left"?-1:1),0,n.length-1);R(o)},[h,R,n.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>Q(!0),onMouseLeave:()=>Q(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:n.map((a,o)=>{const d=o===h;return e.jsx("button",{type:"button",onClick:()=>R(o),style:{padding:"6px 14px",borderRadius:"999px",border:d?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:d?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:d?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:d?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:d?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:a.name},a.name)})}),e.jsx("div",{ref:T,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${G+50}px`,overflow:"hidden",background:v,cursor:"grab",touchAction:"pan-y",opacity:j>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...M},children:n.map((a,o)=>{const d=a.isHeadliner,P=o===h;return e.jsxs("div",{ref:p=>{H.current[o]=p},onClick:()=>{R(o),L&&L(a,o)},style:{position:"absolute",top:"50%",left:0,width:`${w}px`,height:`${G}px`,borderRadius:`${x}px`,overflow:"hidden",background:"#130c0a",border:P?"1.5px solid rgba(255, 138, 61, 0.85)":d?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:P?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[a.src?e.jsx("img",{src:a.src,alt:a.name,draggable:!1,onError:p=>{p.currentTarget.src=b("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${a.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[d?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:a.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:a.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:a.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",a.bpm]}),e.jsxs("span",{children:["♫ ",a.vibe]})]})]})]},a.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>U("left"),disabled:h===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:h===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:h===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:h===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:h===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:a=>{h>0&&(a.currentTarget.style.transform="scale(1.1)",a.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.borderColor=h===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:n.map((a,o)=>e.jsx("span",{onClick:()=>R(o),style:{width:o===h?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:o===h?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},o))}),e.jsx("button",{type:"button",onClick:()=>U("right"),disabled:h===n.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:h===n.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:h===n.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:h===n.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:h===n.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:a=>{h<n.length-1&&(a.currentTarget.style.transform="scale(1.1)",a.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:a=>{a.currentTarget.style.transform="scale(1)",a.currentTarget.style.borderColor=h===n.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
        .sss-eq-bar {
          width: 2px;
          border-radius: 999px;
          background: #ff8a3d;
          animation: sssEqPulse 850ms ease-in-out infinite alternate;
        }
        .sss-eq-1 { height: 6px; animation-delay: 0ms; }
        .sss-eq-2 { height: 12px; animation-delay: 220ms; }
        .sss-eq-3 { height: 8px; animation-delay: 440ms; }
        @keyframes sssEqPulse {
          0% { height: 3px; }
          100% { height: 13px; }
        }
        .smooth-scroll-slider-viewport:active {
          cursor: grabbing !important;
        }
      `})]})}const $={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},Me=2,we=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],Te=Math.max(...we.map(s=>s.blur)),he=36;function le(s,r){const t=Math.max(0,Math.min(1,r));if(typeof s!="string")return`rgba(0,0,0,${t})`;const i=s.trim(),l=i.match(/^#([0-9a-f]{3,8})$/i);if(l){let f=l[1];(f.length===3||f.length===4)&&(f=f.split("").map(g=>g+g).join(""));const x=parseInt(f.slice(0,6),16);return Number.isFinite(x)?`rgba(${x>>16&255},${x>>8&255},${x&255},${t})`:`rgba(0,0,0,${t})`}const k=i.match(/^rgba?\(([^)]+)\)/i);if(k){const f=k[1].split(",").map(x=>parseFloat(x));if(f.length>=3&&f.slice(0,3).every(Number.isFinite))return`rgba(${f[0]},${f[1]},${f[2]},${t})`}return`rgba(0,0,0,${t})`}function Ce(s,r,t){const i=(s%1+1)%1*2*(r+t);return i<r?[i,0]:i<r+t?[r,i-r]:i<r*2+t?[r-(i-r-t),t]:[0,t-(i-r*2-t)]}function be(s,r,t){const i=2*(r+t),l=[0,r/i,(r+t)/i,(r*2+t)/i];return Math.floor(s/4)+l[(s%4+4)%4]}function Re(s,r,t){const[i,l]=Ce(s,r,t);return Math.atan2(i-r/2,t/2-l)*180/Math.PI}const ue=24,Fe=.015;function ce(s,r,t,i,l){const k=t>0?t:100,f=i>0?i:100,x=Math.max(0,Math.min(100,r)),g=Math.max(Fe,x/100*.5),v=x/100,E=[];let z=0,A=0,M=0;for(let T=0;T<=ue;T++){const H=T/ue,y=Re(s+(H-.5)*g,k,f);if(T===0)z=y;else{let S=y-A;for(;S>180;)S-=360;for(;S<-180;)S+=360;M+=S}A=y;const C=Math.abs(H-.5)*2,j=v>=1||C<=v?1:1-(C-v)/(1-v);E.push(`${le(l,j*j*(3-2*j))} ${M.toFixed(2)}deg`)}const L=M.toFixed(2);return E.push(`${le(l,0)} ${L}deg`),E.push(`${le(l,0)} 360deg`),`conic-gradient(from ${z.toFixed(2)}deg at 50% 50%, ${E.join(", ")})`}const xe=30,Le=4,ye=3,He=.35,De=[.72,.16,.18,1.05],Oe=[.65,0,.35,1];function je(s){const[r,t,i,l]=s;if(r===t&&i===l)return f=>f;const k=(f,x,g)=>{const v=1-g;return 3*v*v*g*f+3*v*g*g*x+g*g*g};return f=>{const x=Math.max(0,Math.min(1,f));let g=x;for(let v=0;v<8;v++){const E=k(r,i,g)-x,z=1-g,A=3*z*z*r+6*z*g*(i-r)+3*g*g*(1-i);if(Math.abs(A)<1e-6)break;g-=E/A,g=Math.max(0,Math.min(1,g))}return k(t,l,g)}}const Be=je(De),Ge=je(Oe),ve={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function F({color:s=$.color,rounded:r=$.rounded,thickness:t=$.thickness,borderSize:i=$.borderSize,glow:l=$.glow,movement:k=$.movement,speed:f=$.speed,style:x,className:g=""}){const v=m.useRef(null),E=m.useRef(null),z=m.useRef({speed:f,movement:k,borderSize:i,color:s});z.current={speed:f,movement:k,borderSize:i,color:s};const A=m.useRef(null),M=m.useRef({w:0,h:0}),[L,T]=m.useState({w:0,h:0});m.useEffect(()=>{const u=A.current;if(!u||typeof ResizeObserver>"u")return;const N=new ResizeObserver(()=>{const n=u.getBoundingClientRect();n.width===M.current.w&&n.height===M.current.h||(M.current={w:n.width,h:n.height},T(M.current))});return N.observe(u),()=>N.disconnect()},[]),m.useEffect(()=>{let u=0,N=performance.now(),n=0,w=0,G=0;const D=X=>{const J=Math.min(.05,Math.max(0,(X-N)/1e3));N=X;const O=z.current,Y=Math.max(0,Math.min(20,O.speed));if(Y>0){const W=O.movement==="step",ee=W?ye+(He-ye)*(Y-1)/19:(xe+(Le-xe)*(Y-1)/19)/4;for(G+=J/ee;G>=1;)G-=1,w+=1;const q=W?Be(Math.min(1,G*2)):Ge(G),{w:R,h:U}=M.current,a=R>0?R:100,o=U>0?U:100,d=be(w,a,o),P=be(w+1,a,o);n=d+(P-d)*q;const p=v.current;p&&p.style.setProperty("--arc",ce(n,O.borderSize,R,U,O.color));const B=E.current;B&&B.style.setProperty("--arc",ce(n+.5,O.borderSize,R,U,O.color))}u=requestAnimationFrame(D)};return u=requestAnimationFrame(D),()=>cancelAnimationFrame(u)},[]);const H=Math.max(1,Math.min(10,t)),y=Math.max(0,Math.min(100,r))/100*(Math.min(L.w||200,L.h||200)/2),C=Math.max(0,Math.min(100,l))/100,j=u=>H+C*he*u,S=10+he+Te*2,K=(u,N=0)=>e.jsx("div",{style:{position:"absolute",inset:N-u,boxSizing:"border-box",padding:u,borderRadius:y>0?y+u:0,background:"var(--arc)",...ve}}),Q=(u,N,n,w)=>e.jsx("div",{style:{position:"absolute",inset:-S,boxSizing:"border-box",padding:S,borderRadius:y>0?y+S:0,opacity:w,mixBlendMode:"plus-lighter",filter:n?`blur(${n.toFixed(1)}px)`:"none",WebkitFilter:n?`blur(${n.toFixed(1)}px)`:"none",...ve},children:K(N,S)},u),h=(u,N)=>e.jsxs("div",{ref:N,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":ce(u,i,L.w,L.h,s)},children:[C>0&&we.map((n,w)=>Q(`glow-${w}`,j(n.reach),n.blur,n.opacity)),Array.from({length:Me}).map((n,w)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:K(H)},`edge-${w}`))]});return e.jsxs("div",{ref:A,className:`neon-border-overlay ${g}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:y,pointerEvents:"none",zIndex:1,...x},children:[h(0,v),h(.5,E)]})}const Ve=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:b("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:b("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:b("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:b("/assets/ozilla/hassan-raheem.jpg")}],We=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],Ue=[{badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats."},{badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists."},{badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges."},{badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates."}],$e=[{name:"Ozilla Festival 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],Ye=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],qe=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"Ozilla Festival 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"Ozilla Festival 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],_e=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],Ke=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],Xe=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],Ze=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function Qe(s){const[r,t]=m.useState(()=>{const i=Math.max(new Date(s)-Date.now(),0);return{days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)}});return m.useEffect(()=>{const i=setInterval(()=>{const l=Math.max(new Date(s)-Date.now(),0);t({days:Math.floor(l/864e5),hours:Math.floor(l/36e5%24),minutes:Math.floor(l/6e4%60),seconds:Math.floor(l/1e3%60)})},1e3);return()=>clearInterval(i)},[s]),r}function rt(){const s=Ee(),r=Qe("2026-11-01T18:00:00+05:00");return m.useEffect(()=>{const t=s.hash?.replace("#","");t?setTimeout(()=>{const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[s.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(c.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(c.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsx(c.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:"Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound."}),e.jsxs(c.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsx("span",{children:"📅 November 1, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⚡ 4 Mega Stages"}),e.jsx("span",{children:"🎟️ Official QR Passes"})]}),e.jsxs(c.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(c.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(c.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:Ze.map((t,i)=>e.jsxs(c.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:i*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:t.value}),e.jsx("span",{className:"stat-label",children:t.label}),e.jsx("small",{className:"stat-sub",children:t.sub})]},t.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(c.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(Ae,{items:Ve,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(c.div,{className:"sp-countdown",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",r.days],["Hours",r.hours],["Minutes",r.minutes],["Seconds",r.seconds]].map(([t,i])=>e.jsxs(c.div,{className:"sp-countdown-card",whileHover:{scale:1.06,y:-3},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(i).padStart(2,"0")}),e.jsx("span",{children:t})]},t))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:We.map((t,i)=>e.jsxs(c.div,{className:`sp-pricing-card ${t.isFeatured?"sp-featured-pricing":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-8},children:[t.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:t.badge}),e.jsx("h3",{children:t.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:t.price})}),e.jsx("p",{className:"sp-pricing-sub",children:t.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(Z,{to:t.ctaLink,className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:t.ctaText})]},t.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:Ue.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-pillar-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-6,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-top",children:e.jsx("span",{className:"sp-pillar-badge",children:t.badge})}),e.jsx("h3",{className:"sp-pillar-title",children:t.title}),e.jsx("p",{className:"sp-pillar-desc",children:t.desc}),e.jsx("div",{className:"sp-pillar-glow-line"})]},t.title))}),e.jsxs(c.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(F,{color:"#ff7a29",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-vibe-eyebrow",children:"FESTIVAL HIGHLIGHTS"}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(c.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(c.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0},{text:"100kW Laser & Sound",isMain:!0},{text:"20+ Star Performers",isMain:!0},{text:"Verified QR Instant Passes",isMain:!0},{text:"10,000+ Music Lovers",isMain:!1},{text:"50+ Food & Beats Stalls",isMain:!1},{text:"VIP Artist Lounge & Deck",isMain:!1},{text:"Exclusive Partner Discounts",isMain:!1}].map((t,i)=>e.jsx(c.div,{className:`sp-vibe-tag ${t.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:i*.05},whileHover:{scale:1.04,x:4},whileTap:{scale:.98},children:t.text},t.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:Ye.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(F,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-pill-badge",children:t.status})]}),e.jsx("p",{className:"sp-card-desc",children:t.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:$e.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(F,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:t.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:t.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.date," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:t.description}),e.jsx(Z,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},t.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(F,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:qe.map((t,i)=>e.jsxs(c.div,{className:"sp-timeline-item",initial:{opacity:0,x:-28,y:20},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.45,delay:i*.08},children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:t.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:t.date})}),e.jsx("span",{className:"sp-timeline-badge",children:t.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:t.name}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.highlights.map(l=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:l},l))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:t.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"hotels",className:"sp-section sp-section-hotels","aria-label":"Partner Hotels",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Hospitality Partners"}),e.jsx("h2",{className:"sp-section-title",children:"Partner Hotels in Lahore"})]}),e.jsx("div",{className:"sp-hotels-grid",children:pe.hotels.map((t,i)=>e.jsxs(c.div,{className:`sp-glass-card sp-hotel-card ${i===0?"sp-featured-border":""}`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-6},children:[t.showImage&&e.jsx("div",{className:"sp-hotel-img-wrap",children:e.jsx("img",{src:t.image,alt:t.name,loading:"lazy",decoding:"async",onError:l=>{l.currentTarget.src=b("/assets/prism-auth-visual.jpg")}})}),e.jsxs("div",{className:"sp-hotel-body",children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),t.rating&&e.jsxs("span",{className:"sp-rating-tag",children:["⭐ ",t.rating]})]}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.facilities?.map(l=>e.jsx("span",{className:"sp-tag",children:l},l))}),e.jsx("p",{className:"sp-contact-text",children:t.contact}),t.website&&e.jsx("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",className:"sp-accent-link",children:"Book Room →"})]})]},t.name))})]})}),e.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),e.jsx("div",{className:"sp-restaurants-grid",children:pe.restaurants.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-restaurant-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-5,scale:1.01},children:[e.jsx(F,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-discount-pill",children:t.discount})]}),e.jsxs("p",{className:"sp-meta-text",children:[t.cuisine," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.offer}),e.jsxs("div",{className:"sp-code-box",children:[e.jsx("span",{children:"Promo Code:"}),e.jsx("code",{children:t.code})]})]})]},t.name))})]})}),e.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header sp-voucher-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(F,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]})]}),e.jsx("div",{className:"sp-discounts-grid",children:Xe.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-voucher-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,scale:.92,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.08},whileHover:{y:-6,scale:1.02},children:[e.jsx(F,{color:"#ff9e42",rounded:22,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:t.category}),e.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:t.brand}),e.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:t.desc}),e.jsxs("div",{className:"sp-discount-footer",children:[e.jsx("span",{className:"sp-big-discount",children:t.discount}),e.jsx("code",{className:"sp-code-pill",children:t.code})]})]})]},t.brand))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(F,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:Ke.map((t,i)=>e.jsxs(c.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(F,{color:t.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsx("h3",{className:"sp-facility-title",children:t.title}),e.jsx("p",{className:"sp-card-desc",children:t.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(c.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(F,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:_e.map((t,i)=>e.jsxs(c.div,{className:`sp-glass-card sp-sponsor-card ${t.isFeatured?"sp-sponsor-featured":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-10,scale:1.02},children:[t.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:t.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:t.accent},children:t.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:t.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:t.accent},children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(c.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(Z,{to:"/tickets",className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:t.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.tier))})]})}),e.jsx("style",{children:`
        .sp-main {
          --pink-accent:   #EC4899;
          --ember-accent:  #ff5a1f;
          --ember-glow:    #ff8a3d;
          --gold-accent:   #ffbd59;
          --obsidian-dark: #0B0705;
          --obsidian-card: rgba(27, 17, 11, 0.72);
          --text-white:    #ffffff;
          --text-muted:    rgba(255, 255, 255, 0.78);
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #ffffff !important;
          background: transparent !important;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
          letter-spacing: -0.01em;
          word-spacing: 0.02em;
        }

        .sp-container {
          width: min(1260px, calc(100% - 3.5rem));
          margin: 0 auto;
          position: relative;
        }

        .sp-section {
          position: relative;
          padding: clamp(5.5rem, 8.5vw, 8.5rem) 0;
          border: none !important;
          background: transparent !important;
        }

        /* ── HERO SECTION ── */
        .sp-hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 25%, rgba(255, 90, 31, 0.18) 0%, rgba(85, 14, 14, 0.15) 50%, transparent 85%) !important;
          padding: clamp(7rem, 12vw, 10rem) 1.5rem clamp(5rem, 8vw, 7rem);
        }

        .sp-hero-ambient-glow {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 138, 61, 0.28) 0%, rgba(236, 72, 153, 0.16) 50%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
        }

        .sp-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 940px;
          width: 100%;
          background: transparent !important;
        }

        .sp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 1.35rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 189, 89, 0.35);
          backdrop-filter: blur(14px);
          color: #ffbd59;
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin-bottom: 1.8rem;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
        }

        .sp-hero-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(3.6rem, 9.5vw, 6.8rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          line-height: 1.0;
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
          background: none !important;
          margin-bottom: 1.6rem;
          text-transform: uppercase;
          text-shadow:
            0 0 35px rgba(255, 189, 89, 0.8),
            0 0 70px rgba(255, 90, 31, 0.55),
            0 4px 20px rgba(0, 0, 0, 1),
            0 8px 45px rgba(0, 0, 0, 0.95);
        }

        .sp-hero-subtitle {
          max-width: 740px;
          font-size: clamp(1.08rem, 2vw, 1.3rem);
          color: #ffffff !important;
          line-height: 1.75;
          margin-bottom: 2.2rem;
          word-spacing: 0.03em;
          font-weight: 500;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 1), 0 1px 6px rgba(0, 0, 0, 0.95);
        }

        .sp-hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 0 auto 2.8rem;
          max-width: 720px;
        }

        .sp-hero-meta-strip span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.45rem 1.15rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .sp-hero-meta-strip {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.55rem;
            width: 100%;
            max-width: 360px;
            margin: 0 auto 2.2rem;
          }
          .sp-hero-meta-strip span {
            font-size: 0.76rem;
            padding: 0.45rem 0.4rem;
            width: 100%;
            text-align: center;
            white-space: nowrap;
          }
        }

        .sp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;
          flex-wrap: wrap;
        }

        /* ── BUTTON SYSTEM (CreatorOS Inspired) ── */
        .sp-btn-ember {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.4rem;
          border-radius: 18px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c) !important;
          color: #ffffff !important;
          font-size: 1rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: transform 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 12px 40px -8px rgba(255, 90, 31, 0.55);
          border: none !important;
          cursor: pointer;
        }

        .sp-btn-ember:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 55px -6px rgba(255, 90, 31, 0.75);
        }

        .sp-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.4rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(14px);
          transition: transform 220ms ease, background 220ms ease, border-color 220ms ease;
        }

        .sp-btn-ghost:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 189, 89, 0.45) !important;
        }

        /* ── STATS STRIP ── */
        .festival-stats-strip {
          padding: 2.5rem 0;
          background: rgba(14, 8, 5, 0.65) !important;
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stats-inner-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.6rem 1.3rem;
          border-radius: 22px;
          background: rgba(27, 17, 11, 0.65) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 12px 35px rgba(0, 0, 0, 0.45);
          transition: transform 200ms ease, border-color 200ms ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 90, 31, 0.45) !important;
        }

        .stat-val {
          display: block;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.2rem, 3.5vw, 2.7rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.05;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          color: #ff8a3d !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .stat-sub {
          font-size: 0.78rem;
          color: var(--text-muted) !important;
          line-height: 1.4;
        }

        /* ── SECTION HEADERS & TYPOGRAPHY ── */
        .sp-section-header {
          margin-bottom: 3.5rem;
          background: radial-gradient(ellipse at 50% 50%, rgba(14, 8, 5, 0.88) 0%, rgba(14, 8, 5, 0.5) 70%, transparent 100%);
          padding: 1.8rem 1.6rem;
          border-radius: 28px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .sp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          background: rgba(14, 8, 5, 0.9) !important;
          border: 1px solid rgba(255, 189, 89, 0.45) !important;
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.65);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .sp-section-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.3rem, 4.8vw, 3.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin-bottom: 1rem;
          text-shadow: 0 0 25px rgba(255, 189, 89, 0.4), 0 4px 30px rgba(0, 0, 0, 1), 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .sp-section-subtitle {
          max-width: 720px;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.92) !important;
          line-height: 1.75;
          word-spacing: 0.02em;
          font-weight: 500;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 1), 0 1px 6px rgba(0, 0, 0, 0.95);
        }

        /* ── OBSIDIAN GLASS CARD ── */
        .sp-glass-card {
          background: rgba(27, 17, 11, 0.68) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 22px;
          padding: clamp(1.8rem, 3vw, 2.3rem);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 16px 45px rgba(0, 0, 0, 0.55);
          color: #ffffff !important;
        }

        .sp-glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 189, 89, 0.35) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 22px 55px rgba(0, 0, 0, 0.7);
        }

        .sp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.8rem;
        }

        .sp-card-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.01em;
        }

        .sp-card-desc {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82) !important;
          line-height: 1.72;
          word-spacing: 0.02em;
        }

        .sp-pill-badge {
          padding: 0.38rem 0.95rem;
          border-radius: 999px;
          background: rgba(255, 90, 31, 0.15) !important;
          border: 1px solid rgba(255, 90, 31, 0.35) !important;
          color: #ff8a3d !important;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .sp-meta-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82) !important;
          font-weight: 600;
          margin-bottom: 0.6rem;
          line-height: 1.5;
        }

        .sp-accent-link {
          color: #ffbd59 !important;
          font-weight: 800;
          font-size: 0.96rem;
          transition: color 200ms ease;
          display: inline-block;
          margin-top: 1rem;
        }

        .sp-accent-link:hover {
          color: #ffffff !important;
          text-decoration: underline;
        }

        /* ── CELEBRITY LINEUP GRID ── */
        .sp-celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
          margin-bottom: 3.8rem;
        }

        .sp-celeb-card {
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          background: rgba(27, 17, 11, 0.65) !important;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }

        .sp-celeb-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255, 90, 31, 0.5) !important;
          box-shadow: 0 22px 55px rgba(255, 90, 31, 0.35);
        }

        .sp-celeb-frame {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .sp-celeb-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 500ms ease;
        }

        .sp-celeb-card:hover .sp-celeb-frame img {
          transform: scale(1.08);
        }

        .celeb-holo-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(207, 87, 4, 0.2) 100%);
          opacity: 0;
          transition: opacity 300ms ease;
          pointer-events: none;
        }

        .sp-celeb-card:hover .celeb-holo-sheen {
          opacity: 1;
        }

        .celeb-top-badges {
          position: absolute;
          top: 1.1rem;
          left: 1.1rem;
          right: 1.1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .sp-headliner-badge {
          padding: 0.38rem 0.95rem;
          border-radius: 999px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important;
          color: #fff !important;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .celeb-stage-tag {
          padding: 0.32rem 0.85rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.75) !important;
          backdrop-filter: blur(8px);
          color: #fff !important;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .celeb-mini-eq {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
        }

        .celeb-mini-eq span {
          width: 3px;
          background: #ffffff !important;
          border-radius: 1px;
          animation: eqMini 0.8s ease-in-out infinite alternate;
        }

        .celeb-mini-eq span:nth-child(1) { height: 6px; }
        .celeb-mini-eq span:nth-child(2) { height: 14px; animation-delay: 0.2s; }
        .celeb-mini-eq span:nth-child(3) { height: 9px; animation-delay: 0.4s; }

        @keyframes eqMini {
          0% { height: 4px; }
          100% { height: 14px; }
        }

        .sp-celeb-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.6rem;
          background: linear-gradient(180deg, transparent 35%, rgba(11, 7, 5, 0.95));
          z-index: 2;
        }

        .celeb-genre-pill {
          font-size: 0.75rem;
          color: #ffbd59 !important;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.35rem;
        }

        .sp-celeb-overlay h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          color: #fff !important;
          font-size: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        .celeb-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.85) !important;
          margin-top: 0.5rem;
        }

        /* ── COUNTDOWN ── */
        .sp-countdown {
          text-align: center;
          padding: 2.5rem 0 0;
        }

        .sp-countdown-grid {
          display: inline-grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.4rem;
          max-width: 640px;
          width: 100%;
        }

        .sp-countdown-card {
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 20px;
          padding: 1.4rem 1.5rem;
          text-align: center;
          backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .sp-countdown-card strong {
          display: block;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2rem, 3.8vw, 2.8rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }

        .sp-countdown-card span {
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59 !important;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        /* ── PRICING / TICKET TIERS GRID (CreatorOS Style) ── */
        .sp-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .sp-pricing-card {
          background: rgba(27, 17, 11, 0.68) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          padding: clamp(2rem, 3.5vw, 2.6rem);
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 18px 50px rgba(0, 0, 0, 0.55);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }

        .sp-pricing-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 189, 89, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 26px 65px rgba(0, 0, 0, 0.7);
        }

        .sp-featured-pricing {
          background: linear-gradient(160deg, rgba(45, 22, 12, 0.9) 0%, rgba(20, 10, 6, 0.98) 100%) !important;
          border: 1.5px solid rgba(255, 90, 31, 0.55) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 22px 65px rgba(255, 90, 31, 0.28);
          transform: scale(1.03);
        }

        .sp-featured-pricing:hover {
          transform: scale(1.03) translateY(-5px);
          border-color: #ff5a1f !important;
          box-shadow: 0 28px 75px rgba(255, 90, 31, 0.4);
        }

        .sp-pricing-popular-tag {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          box-shadow: 0 4px 18px rgba(255, 90, 31, 0.45);
          white-space: nowrap;
        }

        .sp-pricing-header {
          margin-bottom: 1.6rem;
        }

        .sp-tier-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.7rem;
        }

        .sp-pricing-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.6rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.9rem;
          letter-spacing: -0.01em;
        }

        .sp-pricing-cost strong {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .sp-pricing-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
          line-height: 1.5;
        }

        .sp-pricing-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 1.6rem;
        }

        .sp-pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          margin-bottom: 2.2rem;
        }

        .sp-pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.55;
        }

        .sp-perk-check {
          color: #ffbd59;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── CONCERT FESTIVAL PILLARS & EXPERIENCE ── */
        .sp-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.8rem;
          margin-bottom: 3.5rem;
        }

        .sp-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.2rem 2rem !important;
          border-radius: 24px !important;
          overflow: hidden;
          background: rgba(27, 17, 11, 0.75) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .sp-pillar-card:hover {
          border-color: rgba(255, 90, 31, 0.55) !important;
          box-shadow: 0 16px 45px rgba(255, 90, 31, 0.25);
        }

        .sp-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .sp-pillar-icon {
          font-size: 2rem;
          filter: drop-shadow(0 4px 12px rgba(255, 90, 31, 0.4));
        }

        .sp-pillar-badge {
          font-size: 0.72rem;
          font-weight: 900;
          color: #ffbd59;
          letter-spacing: 0.12em;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.3);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        .sp-pillar-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .sp-pillar-desc {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82) !important;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        .sp-pillar-glow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff5a1f, #ffbd59, transparent);
          opacity: 0;
          transition: opacity 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-glow-line {
          opacity: 1;
        }

        /* ── FESTIVAL VIBE SHOWCASE BANNER ── */
        .sp-festival-vibe-banner {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
          align-items: center;
          background: linear-gradient(135deg, rgba(45, 18, 12, 0.75) 0%, rgba(18, 10, 7, 0.85) 100%) !important;
          border: 1px solid rgba(255, 90, 31, 0.3) !important;
          border-radius: 28px;
          padding: clamp(2rem, 3.5vw, 3rem);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
        }

        .sp-vibe-left {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .sp-vibe-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.16em;
        }

        .sp-vibe-left h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .sp-vibe-left p {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.65;
          margin-bottom: 0.6rem;
        }

        .sp-vibe-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .sp-vibe-tags-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .sp-vibe-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.1rem;
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 0.86rem;
          font-weight: 700;
          transition: transform 200ms ease, border-color 200ms ease, background 200ms ease;
        }

        .sp-vibe-tag:hover {
          transform: translateX(3px);
          border-color: rgba(255, 189, 89, 0.45);
          background: rgba(255, 90, 31, 0.15);
        }

        /* ── PAST EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; }
        .sp-past-event-card { display: flex; flex-direction: column; }
        .sp-card-footer-eq {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.4rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #ffbd59;
        }
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* ── GLOWING CONCERT TIMELINE ── */
        .sp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
          margin-top: 1rem;
        }

        .sp-timeline::before {
          content: '';
          position: absolute;
          left: 2.35rem;
          top: 1.5rem;
          bottom: 2rem;
          width: 3px;
          background: linear-gradient(180deg, #ff5a1f, #ffbd59 40%, #ec4899 80%, transparent);
          box-shadow: 0 0 14px rgba(255, 90, 31, 0.6);
          border-radius: 999px;
        }

        .sp-timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          position: relative;
        }

        .sp-timeline-node-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          z-index: 2;
        }

        .sp-timeline-icon {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #2b140d 0%, #170d09 100%) !important;
          border: 2px solid #ffbd59 !important;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px;
          box-shadow: 0 0 20px rgba(255, 189, 89, 0.4), inset 0 0 10px rgba(255, 90, 31, 0.3);
          z-index: 2;
        }

        .sp-timeline-icon-emoji {
          font-size: 1.15rem;
          line-height: 1;
        }

        .sp-timeline-year-pill {
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          font-weight: 900;
          color: #ffbd59;
          letter-spacing: 0.05em;
        }

        .sp-timeline-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(255, 189, 89, 0.6);
          animation: pulseNodeRing 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          pointer-events: none;
        }

        @keyframes pulseNodeRing {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        .sp-timeline-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 1.8rem 2.2rem !important;
        }

        .sp-timeline-item:hover .sp-timeline-content {
          border-color: rgba(255, 90, 31, 0.55) !important;
          box-shadow: 0 18px 45px rgba(255, 90, 31, 0.2);
        }

        .sp-timeline-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .sp-timeline-badge {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.28rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 90, 31, 0.18) !important;
          border: 1px solid rgba(255, 90, 31, 0.4) !important;
          color: #ff8a3d !important;
        }

        .sp-timeline-heading {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.01em;
        }

        .sp-timeline-tag {
          display: inline-flex !important;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.9rem !important;
          border-radius: 999px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          color: #ffd36a !important;
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          margin-right: 0.45rem;
          margin-bottom: 0.45rem;
        }

        .sp-timeline-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          margin-top: 0.35rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sp-timeline-footer .sp-venue-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 700;
          margin: 0;
        }

        /* ── HOTELS ── */
        .sp-hotels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        .sp-hotel-card { display: flex; flex-direction: column; overflow: hidden; padding: 0 !important; }
        .sp-hotel-img-wrap { height: 200px; overflow: hidden; }
        .sp-hotel-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
        .sp-hotel-card:hover .sp-hotel-img-wrap img { transform: scale(1.06); }
        .sp-hotel-body { padding: 1.6rem; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; }
        .sp-rating-tag { font-size: 0.8rem; font-weight: 700; color: #ffb000 !important; white-space: nowrap; background: rgba(255, 176, 0, 0.15) !important; padding: 0.25rem 0.7rem; border-radius: 999px; border: 1px solid rgba(255, 176, 0, 0.3) !important; }
        .sp-contact-text { font-size: 0.84rem; color: rgba(255, 255, 255, 0.75) !important; line-height: 1.5; }

        /* ── RESTAURANTS & DISCOUNTS ── */
        .sp-restaurants-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        .sp-discount-pill { padding: 0.35rem 0.95rem; border-radius: 999px; background: linear-gradient(120deg, #ff8a3d, #ff5a1f) !important; color: #ffffff !important; font-size: 0.74rem; font-weight: 900; letter-spacing: 0.02em; }
        .sp-code-box { display: flex; align-items: center; gap: 0.85rem; padding: 0.7rem 1.1rem; background: rgba(0, 0, 0, 0.55) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 12px; margin-top: 0.5rem; }
        .sp-code-box span { font-size: 0.85rem; color: var(--text-muted) !important; }
        .sp-code-box code { font-family: monospace; background: rgba(255, 189, 89, 0.18) !important; border: 1px solid rgba(255, 189, 89, 0.35) !important; padding: 0.3rem 0.75rem; border-radius: 7px; color: #ffbd59 !important; font-weight: 800; }

        .sp-discounts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-discount-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; }
        .sp-big-discount { font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif); font-size: 1.45rem; font-weight: 900; color: #ffbd59 !important; letter-spacing: -0.01em; }
        .sp-code-pill { font-family: monospace; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; padding: 0.35rem 0.8rem; border-radius: 8px; color: #ffffff !important; font-weight: 800; font-size: 0.85rem; }

        /* ── WORLD-CLASS FESTIVAL FACILITIES ── */
        .sp-facilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .sp-facility-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 2rem 1.7rem !important;
          position: relative;
          overflow: hidden;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 20px;
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-facility-card:hover {
          border-color: rgba(255, 189, 89, 0.45) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 90, 31, 0.15);
        }

        .sp-facility-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sp-facility-icon-orb {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 300ms ease;
        }

        .sp-facility-card:hover .sp-facility-icon-orb {
          transform: scale(1.1) rotate(5deg);
        }

        .sp-facility-icon {
          font-size: 1.45rem;
          line-height: 1;
        }

        .sp-facility-badge {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid;
        }

        .sp-facility-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .sp-facility-glow-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-facility-card:hover .sp-facility-glow-bar {
          opacity: 1;
          height: 4px;
        }

        /* ── BRAND SPONSORSHIP PACKAGES ── */
        .sp-sponsorship-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .sp-sponsor-card {
          display: flex;
          flex-direction: column;
          padding: 2.2rem 1.8rem !important;
          position: relative;
          overflow: hidden;
          background: rgba(27, 17, 11, 0.78) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 22px;
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-sponsor-featured {
          border-color: rgba(255, 189, 89, 0.5) !important;
          background: linear-gradient(180deg, rgba(45, 24, 15, 0.9) 0%, rgba(20, 12, 8, 0.85) 100%) !important;
          box-shadow: 0 0 35px rgba(255, 90, 31, 0.25);
          transform: translateY(-4px);
        }

        .sp-sponsor-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 90, 31, 0.25);
        }

        .sp-sponsor-popular-tag {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #ff5a1f, #ffbd59);
          color: #0B0705;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          padding: 0.28rem 1rem;
          border-radius: 0 0 10px 10px;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(255, 90, 31, 0.5);
        }

        .sp-sponsor-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sp-sponsor-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 300ms ease;
        }

        .sp-sponsor-card:hover .sp-sponsor-icon-wrap {
          transform: scale(1.1) rotate(-6deg);
        }

        .sp-sponsor-icon {
          font-size: 1.45rem;
          line-height: 1;
        }

        .sp-sponsor-badge {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid;
        }

        .sp-sponsor-header h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
        }

        .sp-sponsor-price-tag {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.02em;
        }

        .sp-sponsor-tagline {
          font-size: 0.82rem;
          color: var(--text-muted) !important;
          margin-top: 0.25rem;
        }

        .sp-sponsor-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 1.2rem 0;
        }

        .sp-sponsor-perks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          margin-bottom: 1rem;
        }

        .sp-sponsor-perks li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-muted) !important;
          line-height: 1.45;
        }

        .sp-sponsor-glow-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-sponsor-card:hover .sp-sponsor-glow-bottom {
          opacity: 1;
          height: 4px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-pricing-grid,
          .sp-pillars-grid, .sp-events-grid { grid-template-columns: 1fr; gap: 1.6rem; }
          .sp-festival-vibe-banner { grid-template-columns: 1fr; gap: 2rem; }
          .sp-featured-pricing { transform: none; }
          .sp-featured-pricing:hover { transform: translateY(-4px); }
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          #hotels.sp-section-hotels { display: none !important; }
          .sp-section { padding: 4.5rem 0; }
          .sp-container { width: min(100%, calc(100% - 1.5rem)); }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
          .stat-card { padding: 1.2rem 0.9rem; }
          .stat-val { font-size: 1.8rem; }
          .sp-hero-title { font-size: 2.9rem; }
          .sp-hero-content { padding: 4.5rem 1rem 2.5rem; }
          .sp-hero-actions { flex-direction: column; width: 100%; max-width: 290px; gap: 0.85rem; }
          .sp-btn-ember, .sp-btn-ghost { width: 100%; text-align: center; padding: 0.9rem 1.8rem; }
          .sp-vibe-tag.sp-vibe-secondary { display: none !important; }
          .sp-vibe-tags-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.6rem !important; }
          .sp-vibe-tag { font-size: 0.76rem !important; padding: 0.6rem 0.4rem !important; text-align: center; justify-content: center; }
          .sp-section-title { font-size: 1.75rem !important; }
          .sp-section-subtitle { font-size: 0.84rem !important; line-height: 1.45 !important; margin-bottom: 1.4rem !important; }
          .sp-card-desc, .sp-pillar-desc { font-size: 0.8rem !important; line-height: 1.4 !important; }
          .sp-pillar-card { padding: 1.2rem 1rem !important; }
          .sp-facility-card { padding: 1.1rem 0.95rem !important; }
          .sp-future-card { padding: 1.2rem 1rem !important; }
          .sp-timeline-content { padding: 1.1rem 1rem !important; }
          .sp-timeline-content p.sp-card-desc { font-size: 0.8rem !important; line-height: 1.4 !important; margin-bottom: 0.6rem !important; }
          .sp-timeline-tag:nth-child(n+3) { display: none !important; }
          .sp-timeline-heading { font-size: 1.05rem !important; }
          .sp-pillar-title, .sp-facility-title { font-size: 1.05rem !important; }
          .sp-timeline::before { left: 1.3rem; }
          .sp-timeline-item { gap: 1rem; }
          .sp-timeline-node-wrap { width: 42px; height: 42px; }
          .sp-timeline-icon { width: 42px; height: 42px; }
          .sp-timeline-year-pill { font-size: 0.75rem; }
        }
      `})]})}export{rt as default};
