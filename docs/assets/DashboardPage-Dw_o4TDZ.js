import{j as e,m as f}from"./vendor-motion-DHTbcX3O.js";import{r as h,u as st,L as pe}from"./vendor-react-6MXTWAEx.js";import{b as N}from"./index-BTNfKGzn.js";import{o as Ie}from"./ozillaProfessionalContent-B6OcJD4V.js";import"./vendor-utils-Bub7y9MC.js";N("/assets/ozilla/talwinder.jpg"),N("/assets/ozilla/talwinder.jpg"),N("/assets/ozilla/Imran-Khan.jpg"),N("/assets/ozilla/Imran-Khan.jpg"),N("/assets/ozilla/Bohemia.jpg"),N("/assets/ozilla/Bohemia.jpg"),N("/assets/ozilla/hassan-raheem.jpg"),N("/assets/ozilla/hassan-raheem.jpg");const Ee=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:N("/assets/ozilla/talwinder.jpg"),image:N("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:N("/assets/ozilla/Imran-Khan.jpg"),image:N("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:N("/assets/ozilla/Bohemia.jpg"),image:N("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:N("/assets/ozilla/hassan-raheem.jpg"),image:N("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],Pe=1.28,Re=.78;function ne(r,n,t){return Math.min(t,Math.max(n,r))}function ke(r){if(!r)return null;if(typeof r=="string")return r||null;const n=r.src||r.image;return typeof n=="string"&&n?n:null}function nt(r){return ke(r&&typeof r=="object"&&(r.image||r.src)||r)}function ot(r){if(r&&typeof r=="object"&&"offsetY"in r){const n=r.offsetY;return typeof n=="number"&&isFinite(n)?n:0}return 0}function lt({items:r=Ee,images:n,slideWidth:t=320,slideHeight:i=440,spacing:l=2.4,direction:y="right",smoothness:w=8.5,radius:S=24,dim:v=5,background:k="transparent",sensitivity:L=5,autoPlay:B=!1,autoPlayInterval:O=3500,style:G,onItemClick:W}){const H=h.useRef(null),$=h.useRef([]),I=h.useRef(0),U=h.useRef(0),[z,F]=h.useState(0),[re,oe]=h.useState(!1),[g,d]=h.useState(0),a=r&&r.length>0?r:n&&n.length>0?n:Ee,o=h.useMemo(()=>a.map((s,c)=>({...s,src:nt(s),offsetY:ot(s),name:s.name||`Artist ${c+1}`,genre:s.genre||"Live Performer",stage:s.stage||"Ozilla Arena",bpm:s.bpm||"128 BPM",vibe:s.vibe||"Festival Energy",isHeadliner:!!s.isHeadliner})),[a]),x=z>0&&z<640?Math.min(t,250):z<1024?Math.min(t,290):t,u=z>0&&z<640?Math.round(x*1.36):i,C=x+ne(l,0,10)*18,j=.15-ne(w,0,10)/10*.11,Z=ne(v,0,10)/10*.75,M=.4+ne(L,0,10)/10*1.1,_=.6+ne(L,0,10)/10*1.6,J=y==="left",Y=h.useRef({count:o.length,step:C,slideWidth:x,width:z,ease:j,maxScale:Pe,minScale:Re,dim:Z,loop:!1,flip:J});Y.current={count:o.length,step:C,slideWidth:x,width:z,ease:j,maxScale:Pe,minScale:Re,dim:Z,loop:!1,flip:J};const D=h.useRef({wheelMultiplier:M,dragMultiplier:_,flip:J});D.current={wheelMultiplier:M,dragMultiplier:_,flip:J},h.useEffect(()=>{const s=H.current;if(!s)return;const c=new ResizeObserver(m=>{m[0]&&F(m[0].contentRect.width)});return c.observe(s),F(s.getBoundingClientRect().width),()=>c.disconnect()},[]),h.useEffect(()=>{$.current.length=o.length},[o.length]),h.useEffect(()=>{if(!B||re||o.length<=1)return;const s=setInterval(()=>{d(c=>{const m=(c+1)%o.length;return I.current=m*C,m})},O);return()=>clearInterval(s)},[B,re,o.length,C,O]),h.useEffect(()=>{let s=0,c=0;const m=E=>{s=requestAnimationFrame(m);const p=Y.current,q=c?Math.min((E-c)/1e3,.1):1/60;if(c=E,!p.count||p.step<=0||p.width<=0)return;const P=(p.count-1)*p.step;I.current=ne(I.current,0,P);const Q=1-Math.pow(1-p.ease,q*60);U.current+=(I.current-U.current)*Q;const te=Math.round(U.current/p.step);te>=0&&te<p.count&&d(te);const me=(p.width-p.slideWidth)/2,de=p.width/2;for(let ae=0;ae<p.count;ae+=1){const le=$.current[ae];if(!le)continue;const R=ae*p.step-U.current+me,b=R+p.slideWidth/2-de;let T,K;b>0?(T=Math.min(p.maxScale,1+b/p.width*.45),K=(T-1)*p.slideWidth*.35):(T=Math.max(p.minScale,1+b/p.width*.5),K=0);const X=p.flip?p.width-p.slideWidth-(R+K):R+K;if(le.style.transform=`translate3d(${X}px, -50%, 0) scale(${T})`,p.dim>0&&T<1){const V=(1-T)/Math.max(.001,1-p.minScale);le.style.filter=`brightness(${Math.max(.35,1-V*p.dim)})`}else le.style.filter="none"}};return s=requestAnimationFrame(m),()=>cancelAnimationFrame(s)},[]),h.useEffect(()=>{const s=H.current;if(!s)return;const c=m=>{m.preventDefault();const E=Math.abs(m.deltaX)>Math.abs(m.deltaY)?m.deltaX:m.deltaY;I.current+=E*D.current.wheelMultiplier};return s.addEventListener("wheel",c,{passive:!1}),()=>s.removeEventListener("wheel",c)},[]),h.useEffect(()=>{const s=H.current;if(!s)return;let c=null,m=0;const E=P=>{if(c===null){c=P.pointerId,m=P.clientX;try{s.setPointerCapture(P.pointerId)}catch{}}},p=P=>{if(c!==P.pointerId)return;const Q=P.clientX-m;m=P.clientX,I.current+=(D.current.flip?Q:-Q)*D.current.dragMultiplier},q=P=>{if(c===P.pointerId){c=null;try{s.hasPointerCapture(P.pointerId)&&s.releasePointerCapture(P.pointerId)}catch{}}};return s.addEventListener("pointerdown",E),s.addEventListener("pointermove",p),s.addEventListener("pointerup",q),s.addEventListener("pointercancel",q),()=>{s.removeEventListener("pointerdown",E),s.removeEventListener("pointermove",p),s.removeEventListener("pointerup",q),s.removeEventListener("pointercancel",q)}},[]);const ee=h.useCallback(s=>{const c=ne(s,0,o.length-1);I.current=c*C,d(c)},[o.length,C]),se=h.useCallback(s=>{const c=ne(g+(s==="left"?-1:1),0,o.length-1);ee(c)},[g,ee,o.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>oe(!0),onMouseLeave:()=>oe(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:o.map((s,c)=>{const m=c===g;return e.jsx("button",{type:"button",onClick:()=>ee(c),style:{padding:"6px 14px",borderRadius:"999px",border:m?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:m?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:m?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:m?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:m?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:s.name},s.name)})}),e.jsx("div",{ref:H,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${u+50}px`,overflow:"hidden",background:k,cursor:"grab",touchAction:"pan-y",opacity:z>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...G},children:o.map((s,c)=>{const m=s.isHeadliner,E=c===g;return e.jsxs("div",{ref:p=>{$.current[c]=p},onClick:()=>{ee(c),W&&W(s,c)},style:{position:"absolute",top:"50%",left:0,width:`${x}px`,height:`${u}px`,borderRadius:`${S}px`,overflow:"hidden",background:"#130c0a",border:E?"1.5px solid rgba(255, 138, 61, 0.85)":m?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:E?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[s.src?e.jsx("img",{src:s.src,alt:s.name,draggable:!1,onError:p=>{p.currentTarget.src=N("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${s.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[m?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:s.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:s.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:s.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",s.bpm]}),e.jsxs("span",{children:["♫ ",s.vibe]})]})]})]},s.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>se("left"),disabled:g===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:g===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:g===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:g===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:g===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:s=>{g>0&&(s.currentTarget.style.transform="scale(1.1)",s.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:s=>{s.currentTarget.style.transform="scale(1)",s.currentTarget.style.borderColor=g===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:o.map((s,c)=>e.jsx("span",{onClick:()=>ee(c),style:{width:c===g?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:c===g?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},c))}),e.jsx("button",{type:"button",onClick:()=>se("right"),disabled:g===o.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:g===o.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:g===o.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:g===o.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:g===o.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:s=>{g<o.length-1&&(s.currentTarget.style.transform="scale(1.1)",s.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:s=>{s.currentTarget.style.transform="scale(1)",s.currentTarget.style.borderColor=g===o.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const ce={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},ct=2,He=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],dt=Math.max(...He.map(r=>r.blur)),Te=36;function xe(r,n){const t=Math.max(0,Math.min(1,n));if(typeof r!="string")return`rgba(0,0,0,${t})`;const i=r.trim(),l=i.match(/^#([0-9a-f]{3,8})$/i);if(l){let w=l[1];(w.length===3||w.length===4)&&(w=w.split("").map(v=>v+v).join(""));const S=parseInt(w.slice(0,6),16);return Number.isFinite(S)?`rgba(${S>>16&255},${S>>8&255},${S&255},${t})`:`rgba(0,0,0,${t})`}const y=i.match(/^rgba?\(([^)]+)\)/i);if(y){const w=y[1].split(",").map(S=>parseFloat(S));if(w.length>=3&&w.slice(0,3).every(Number.isFinite))return`rgba(${w[0]},${w[1]},${w[2]},${t})`}return`rgba(0,0,0,${t})`}function pt(r,n,t){const i=(r%1+1)%1*2*(n+t);return i<n?[i,0]:i<n+t?[n,i-n]:i<n*2+t?[n-(i-n-t),t]:[0,t-(i-n*2-t)]}function ze(r,n,t){const i=2*(n+t),l=[0,n/i,(n+t)/i,(n*2+t)/i];return Math.floor(r/4)+l[(r%4+4)%4]}function mt(r,n,t){const[i,l]=pt(r,n,t);return Math.atan2(i-n/2,t/2-l)*180/Math.PI}const Fe=24,ft=.015;function ye(r,n,t,i,l){const y=t>0?t:100,w=i>0?i:100,S=Math.max(0,Math.min(100,n)),v=Math.max(ft,S/100*.5),k=S/100,L=[];let B=0,O=0,G=0;for(let H=0;H<=Fe;H++){const $=H/Fe,I=mt(r+($-.5)*v,y,w);if(H===0)B=I;else{let F=I-O;for(;F>180;)F-=360;for(;F<-180;)F+=360;G+=F}O=I;const U=Math.abs($-.5)*2,z=k>=1||U<=k?1:1-(U-k)/(1-k);L.push(`${xe(l,z*z*(3-2*z))} ${G.toFixed(2)}deg`)}const W=G.toFixed(2);return L.push(`${xe(l,0)} ${W}deg`),L.push(`${xe(l,0)} 360deg`),`conic-gradient(from ${B.toFixed(2)}deg at 50% 50%, ${L.join(", ")})`}const Me=30,gt=4,Ce=3,ht=.35,ut=[.72,.16,.18,1.05],bt=[.65,0,.35,1];function Ve(r){const[n,t,i,l]=r;if(n===t&&i===l)return w=>w;const y=(w,S,v)=>{const k=1-v;return 3*k*k*v*w+3*k*v*v*S+v*v*v};return w=>{const S=Math.max(0,Math.min(1,w));let v=S;for(let k=0;k<8;k++){const L=y(n,i,v)-S,B=1-v,O=3*B*B*n+6*B*v*(i-n)+3*v*v*(1-i);if(Math.abs(O)<1e-6)break;v-=L/O,v=Math.max(0,Math.min(1,v))}return y(t,l,v)}}const xt=Ve(ut),yt=Ve(bt),De={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function ie({color:r=ce.color,rounded:n=ce.rounded,thickness:t=ce.thickness,borderSize:i=ce.borderSize,glow:l=ce.glow,movement:y=ce.movement,speed:w=ce.speed,style:S,className:v=""}){const k=h.useRef(null),L=h.useRef(null),B=h.useRef({speed:w,movement:y,borderSize:i,color:r});B.current={speed:w,movement:y,borderSize:i,color:r};const O=h.useRef(null),G=h.useRef({w:0,h:0}),[W,H]=h.useState({w:0,h:0});h.useEffect(()=>{const d=O.current;if(!d||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>{const o=d.getBoundingClientRect();o.width===G.current.w&&o.height===G.current.h||(G.current={w:o.width,h:o.height},H(G.current))});return a.observe(d),()=>a.disconnect()},[]),h.useEffect(()=>{const d=O.current;let a=!0,o=null;typeof IntersectionObserver<"u"&&d&&(o=new IntersectionObserver(_=>{_[0]&&(a=_[0].isIntersecting)},{rootMargin:"100px"}),o.observe(d));let x=0,u=performance.now(),C=0,j=0,Z=0;const M=_=>{if(x=requestAnimationFrame(M),!a||typeof document<"u"&&document.hidden){u=_;return}const J=Math.min(.05,Math.max(0,(_-u)/1e3));u=_;const Y=B.current,D=Math.max(0,Math.min(20,Y.speed));if(D>0){const ee=Y.movement==="step",se=ee?Ce+(ht-Ce)*(D-1)/19:(Me+(gt-Me)*(D-1)/19)/4;for(Z+=J/se;Z>=1;)Z-=1,j+=1;const s=ee?xt(Math.min(1,Z*2)):yt(Z),{w:c,h:m}=G.current,E=c>0?c:100,p=m>0?m:100,q=ze(j,E,p),P=ze(j+1,E,p);C=q+(P-q)*s;const Q=k.current;Q&&Q.style.setProperty("--arc",ye(C,Y.borderSize,c,m,Y.color));const te=L.current;te&&te.style.setProperty("--arc",ye(C+.5,Y.borderSize,c,m,Y.color))}};return x=requestAnimationFrame(M),()=>{cancelAnimationFrame(x),o&&o.disconnect()}},[]);const $=Math.max(1,Math.min(10,t)),I=Math.max(0,Math.min(100,n))/100*(Math.min(W.w||200,W.h||200)/2),U=Math.max(0,Math.min(100,l))/100,z=d=>$+U*Te*d,F=10+Te+dt*2,re=(d,a=0)=>e.jsx("div",{style:{position:"absolute",inset:a-d,boxSizing:"border-box",padding:d,borderRadius:I>0?I+d:0,background:"var(--arc)",...De}}),oe=(d,a,o,x)=>e.jsx("div",{style:{position:"absolute",inset:-F,boxSizing:"border-box",padding:F,borderRadius:I>0?I+F:0,opacity:x,mixBlendMode:"plus-lighter",filter:o?`blur(${o.toFixed(1)}px)`:"none",WebkitFilter:o?`blur(${o.toFixed(1)}px)`:"none",...De},children:re(a,F)},d),g=(d,a)=>e.jsxs("div",{ref:a,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":ye(d,i,W.w,W.h,r)},children:[U>0&&He.map((o,x)=>oe(`glow-${x}`,z(o.reach),o.blur,o.opacity)),Array.from({length:ct}).map((o,x)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:re($)},`edge-${x}`))]});return e.jsxs("div",{ref:O,className:`neon-border-overlay ${v}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:I,pointerEvents:"none",zIndex:1,...S},children:[g(0,k),g(.5,L)]})}const vt=1.5,wt=42,jt=Math.PI*2,Nt=300,St=300,At=2,It=5e3,Et=3.2,Pt=.05,Rt=3,kt=1.35,Tt=.08,zt=.5,Ft=.24,Mt=.35,Ct=jt*.75,Dt=2,Ge=3,ue=720,Lt=`
precision highp float;

attribute vec4 aA;
attribute vec2 aB;

uniform vec2  uRes;
uniform float uFocal;
uniform float uPhase;
uniform float uRadius;
uniform float uRise;
uniform float uFall;
uniform float uSpinTurns;
uniform float uScatter;
uniform float uDotWorld;
uniform float uBlurK;
uniform float uCamDist;
uniform float uTilt;
uniform float uYPx;
uniform float uAlpha;

varying float vAlpha;

const float TAU = 6.2831853;

void main() {
    float tau = fract(aA.y + uPhase);
    float ang = aA.x * ${Ct.toFixed(6)} + aA.y * TAU * ${Dt.toFixed(1)};
    float rN = mix(${Mt.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${Pt.toFixed(3)} * tau);

    float tp   = ${Tt.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${zt.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${kt.toFixed(2)});

    float L  = ${Rt.toFixed(1)};
    float sp = (1.0 - exp(-L * tau)) / (1.0 - exp(-L));
    float th = ang + uSpinTurns * TAU * sp;

    vec3 p = vec3(r * cos(th), y, r * sin(th));

    float n = aA.w * TAU;
    p.x += uScatter * tau * sin(n * 3.1 + tau * 5.3);
    p.z += uScatter * tau * sin(n * 4.7 + tau * 4.1 + 1.7);
    p.y += uScatter * tau * 0.6 * sin(n * 2.3 + tau * 6.7 + 3.3);

    float ct = cos(uTilt), st = sin(uTilt);
    float y2 =  p.y * ct - p.z * st;
    float z2 =  p.y * st + p.z * ct;
    float rz = uCamDist - z2;

    float live = step(1.0, rz);
    rz = max(rz, 1.0);

    vec2 s = vec2(p.x, y2) * uFocal / rz;
    s.y += uYPx;
    gl_Position = vec4(s / (uRes * 0.5), 0.0, 1.0);

    float sizePx = uDotWorld * (0.6 + 0.8 * aB.x) * uFocal / rz;
    float coc    = uBlurK * uFocal / (rz * rz);
    float tot    = sizePx + coc;
    float ratio  = max(tot / max(sizePx, 0.0001), 1.0);

    gl_PointSize = clamp(tot, 1.0, 64.0);

    float fadeIn  = smoothstep(0.0, 0.02, tau);
    float fadeOut = pow(1.0 - tau, 0.7);
    vAlpha = uAlpha * live * fadeIn * fadeOut
           * (0.55 + 0.65 * aB.y) * pow(ratio, -1.0);
}
`,Bt=`
precision highp float;
uniform vec3 uColor;
varying float vAlpha;
void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r2 = dot(d, d) * 4.0;
    if (r2 > 1.0) discard;
    float a = vAlpha * exp(-r2 * 2.5);
    gl_FragColor = vec4(uColor * a, a);
}
`,Ot=`
precision highp float;

attribute vec2 aRing;

uniform vec2  uRes;
uniform float uFocal;
uniform float uRadius;
uniform float uCamDist;
uniform float uTilt;
uniform float uYPx;
uniform float uThick;
uniform float uSeg;

varying float vSide;
varying float vNear;

const float TAU = 6.2831853;

vec2 projPx(float a, out float rz) {
    vec3 p = vec3(uRadius * cos(a), 0.0, uRadius * sin(a));
    float ct = cos(uTilt), st = sin(uTilt);
    float y2 = p.y * ct - p.z * st;
    float z2 = p.y * st + p.z * ct;
    rz = max(uCamDist - z2, 1.0);
    return vec2(p.x, y2) * uFocal / rz + vec2(0.0, uYPx);
}

void main() {
    float a0 = aRing.x * TAU;
    float a1 = a0 + TAU / uSeg;
    float rz0, rz1;
    vec2 s0 = projPx(a0, rz0);
    vec2 s1 = projPx(a1, rz1);

    vec2 d  = s1 - s0;
    float dl = max(length(d), 0.0001);
    vec2 nrm = vec2(-d.y, d.x) / dl;

    float near   = uCamDist / rz0;
    float halfW  = uThick * 0.5 * ${Ge.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,Ht=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${Ge.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function Le(r){if(!r)return[1,1,1,1];let n=String(r).trim();const t=n.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);t&&(n=t[1].trim());const i=n.match(/^rgba?\(([^)]+)\)$/i);if(i){const y=i[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(y[0]||0)/255,(y[1]||0)/255,(y[2]||0)/255,y.length>3&&isFinite(y[3])?y[3]:1]}let l=n.replace("#","");return(l.length===3||l.length===4)&&(l=l.split("").map(y=>y+y).join("")),l.length<6?[1,1,1,1]:[parseInt(l.slice(0,2),16)/255,parseInt(l.slice(2,4),16)/255,parseInt(l.slice(4,6),16)/255,l.length>=8?parseInt(l.slice(6,8),16)/255:1]}function Vt(r){return()=>{r|=0,r=r+1831565813|0;let n=Math.imul(r^r>>>15,1|r);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Be(r,n,t){const i=r.createShader(n);return i?(r.shaderSource(i,t),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)||console.warn("VortexDustFall shader:",r.getShaderInfoLog(i)),i):null}function Oe(r,n,t){const i=r.createProgram();if(!i)return null;const l=Be(r,r.VERTEX_SHADER,n),y=Be(r,r.FRAGMENT_SHADER,t);return!l||!y?null:(r.attachShader(i,l),r.attachShader(i,y),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||console.warn("VortexDustFall link:",r.getProgramInfoLog(i)),i)}const Gt={radius:195,thickness:16},Ut={height:165,spin:38,spray:0},_t={scatter:280,blur:0},Wt={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function $t({background:r="transparent",baseColor:n="#FFA733",accentColor:t="#FFE082",density:i=145,dotSize:l=130,speed:y=48,distance:w=1450,tilt:S=7,ring:v={},fall:k={},field:L={},hover:B={},style:O={},className:G="",children:W}){const H={...Gt,...v},$={...Ut,...k},I={..._t,...L},U={...Wt,...B},z=h.useRef(null),F=h.useRef(null),re=h.useRef({x:0,y:0,active:0}),oe=h.useRef({baseColor:n,accentColor:t,density:i,dotSize:l,speed:y,distance:w,tilt:S,ring:H,fall:$,field:I,hover:U});return oe.current={baseColor:n,accentColor:t,density:i,dotSize:l,speed:y,distance:w,tilt:S,ring:H,fall:$,field:I,hover:U},h.useEffect(()=>{const g=z.current,d=F.current;if(!g||!d)return;const a=d.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!a)return;const o=Oe(a,Lt,Bt),x=Oe(a,Ot,Ht);if(!o||!x)return;const u=(A,R)=>a.getUniformLocation(A,R),C={a:a.getAttribLocation(o,"aA"),b:a.getAttribLocation(o,"aB")},j={res:u(o,"uRes"),focal:u(o,"uFocal"),phase:u(o,"uPhase"),radius:u(o,"uRadius"),rise:u(o,"uRise"),fallD:u(o,"uFall"),spinTurns:u(o,"uSpinTurns"),scatter:u(o,"uScatter"),dotWorld:u(o,"uDotWorld"),blurK:u(o,"uBlurK"),camDist:u(o,"uCamDist"),tilt:u(o,"uTilt"),yPx:u(o,"uYPx"),alpha:u(o,"uAlpha"),color:u(o,"uColor")},Z={ring:a.getAttribLocation(x,"aRing")},M={res:u(x,"uRes"),focal:u(x,"uFocal"),radius:u(x,"uRadius"),camDist:u(x,"uCamDist"),tilt:u(x,"uTilt"),yPx:u(x,"uYPx"),thick:u(x,"uThick"),seg:u(x,"uSeg"),color:u(x,"uColor"),alpha:u(x,"uAlpha")},_=a.createBuffer(),J=a.createBuffer();let Y=-1,D=0;const ee=A=>{const b=(d.clientWidth||window.innerWidth)<768?Math.min(A*.45,55):A;D=Math.max(800,Math.round(b*Nt));const T=new Float32Array(D*4),K=new Float32Array(D*2),X=Vt(85840071);for(let V=0;V<D;V++)T[V*4]=X(),T[V*4+1]=X(),T[V*4+2]=X(),T[V*4+3]=X(),K[V*2]=X(),K[V*2+1]=X();a.bindBuffer(a.ARRAY_BUFFER,_),a.bufferData(a.ARRAY_BUFFER,T,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,J),a.bufferData(a.ARRAY_BUFFER,K,a.STATIC_DRAW),Y=A},se=a.createBuffer(),s=(ue+1)*2;{const A=new Float32Array(s*2);for(let R=0;R<=ue;R++){const b=R/ue;A[R*4]=b,A[R*4+1]=-1,A[R*4+2]=b,A[R*4+3]=1}a.bindBuffer(a.ARRAY_BUFFER,se),a.bufferData(a.ARRAY_BUFFER,A,a.STATIC_DRAW)}a.disable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE);let c=!0,m=null;typeof IntersectionObserver<"u"&&g&&(m=new IntersectionObserver(A=>{A[0]&&(c=A[0].isIntersecting)},{rootMargin:"120px"}),m.observe(g));let E=1;const p=()=>{E=Math.min(window.devicePixelRatio||1,vt);const A=d.clientWidth||g.clientWidth||1,R=d.clientHeight||g.clientHeight||1,b=Math.max(1,Math.round(A*E)),T=Math.max(1,Math.round(R*E));(d.width!==b||d.height!==T)&&(d.width=b,d.height=T),a.viewport(0,0,b,T)};p();const q=new ResizeObserver(p);q.observe(d);let P=0,Q=performance.now(),te=0,me=0,de=0,ae=0;const le=A=>{if(te=requestAnimationFrame(le),!c||typeof document<"u"&&document.hidden){Q=A;return}const R=Math.min((A-Q)/1e3,.05);Q=A;const b=oe.current;if(b.density!==Y&&ee(b.density),D===0)return;const T=Math.max(.05,b.hover.transition?.duration??.6),K=1-Math.exp(-R/T),X=re.current;me+=(X.x-me)*K,de+=(X.y-de)*K,ae+=(X.active-ae)*K;const V=(b.hover.amount||100)/100,Ue=1+ae*V*.6;P=(P+R*(b.speed/50*Ue)/Et)%1;const ve=d.width,fe=d.height,be=d.clientWidth||g.clientWidth||1200,ge=be<768,_e=be>=768&&be<1024,we=fe/(2*Math.tan(wt/2*Math.PI/180)),We=ge?.72:_e?.88:1,he=St*(b.ring.radius/100)*We,je=he*(b.fall.height/100),$e=je*(b.fall.spray/400),Ne=fe*(ge?.28:Ft),Ye=b.fall.spin/100*1.5,qe=he*(b.field.scatter/100)*.15,Ke=At*(b.dotSize/100)*(ge?.75:1),Xe=It*(b.field.blur/100),Se=b.tilt*Math.PI/180+de*V*ae*(10*Math.PI/180),Ae=(ge?b.distance*1.08:b.distance)-ae*V*150,[Ze,Qe,Je,et]=Le(b.baseColor),[tt,at,it,rt]=Le(b.accentColor);a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(o),a.uniform2f(j.res,ve,fe),a.uniform1f(j.focal,we),a.uniform1f(j.phase,P),a.uniform1f(j.radius,he),a.uniform1f(j.rise,$e),a.uniform1f(j.fallD,je),a.uniform1f(j.spinTurns,Ye),a.uniform1f(j.scatter,qe),a.uniform1f(j.dotWorld,Ke*E),a.uniform1f(j.blurK,Xe*E),a.uniform1f(j.camDist,Ae),a.uniform1f(j.tilt,Se),a.uniform1f(j.yPx,Ne),a.uniform1f(j.alpha,et),a.uniform3f(j.color,Ze,Qe,Je),a.bindBuffer(a.ARRAY_BUFFER,_),a.enableVertexAttribArray(C.a),a.vertexAttribPointer(C.a,4,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,J),a.enableVertexAttribArray(C.b),a.vertexAttribPointer(C.b,2,a.FLOAT,!1,0,0),a.drawArrays(a.POINTS,0,D),a.useProgram(x),a.uniform2f(M.res,ve,fe),a.uniform1f(M.focal,we),a.uniform1f(M.radius,he),a.uniform1f(M.camDist,Ae),a.uniform1f(M.tilt,Se),a.uniform1f(M.yPx,Ne),a.uniform1f(M.thick,b.ring.thickness*E),a.uniform1f(M.seg,ue),a.uniform3f(M.color,tt,at,it),a.uniform1f(M.alpha,rt),a.bindBuffer(a.ARRAY_BUFFER,se),a.enableVertexAttribArray(Z.ring),a.vertexAttribPointer(Z.ring,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,s)};return te=requestAnimationFrame(le),()=>{cancelAnimationFrame(te),q.disconnect(),m&&m.disconnect(),a.deleteBuffer(_),a.deleteBuffer(J),a.deleteBuffer(se),a.deleteProgram(o),a.deleteProgram(x)}},[]),e.jsxs("div",{ref:z,className:`vortex-dust-container ${G}`,onPointerMove:g=>{const d=g.currentTarget.getBoundingClientRect();d.width<=0||d.height<=0||(re.current={x:(g.clientX-d.left)/d.width*2-1,y:-((g.clientY-d.top)/d.height*2-1),active:1})},onPointerLeave:()=>{re.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:r,...O},children:[e.jsx("canvas",{ref:F,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),W&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:W})]})}const Yt=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:N("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:N("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:N("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:N("/assets/ozilla/hassan-raheem.jpg")}],qt=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],Kt=[{badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats."},{badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists."},{badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges."},{badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates."}],Xt=[{name:"Ozilla Festival 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],Zt=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],Qt=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"Ozilla Festival 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"Ozilla Festival 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],Jt=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],ea=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],ta=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],aa=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function ia(r){const[n,t]=h.useState(()=>{const i=Math.max(new Date(r)-Date.now(),0);return{days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)}});return h.useEffect(()=>{const i=setInterval(()=>{const l=Math.max(new Date(r)-Date.now(),0);t({days:Math.floor(l/864e5),hours:Math.floor(l/36e5%24),minutes:Math.floor(l/6e4%60),seconds:Math.floor(l/1e3%60)})},1e3);return()=>clearInterval(i)},[r]),n}function ca(){const r=st(),n=ia("2026-11-01T18:00:00+05:00");return h.useEffect(()=>{const t=r.hash?.replace("#","");t?setTimeout(()=>{const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[r.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx($t,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(f.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(f.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsx(f.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:"Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound."}),e.jsxs(f.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsx("span",{children:"📅 November 1, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⚡ 4 Mega Stages"}),e.jsx("span",{children:"🎟️ Official QR Passes"})]}),e.jsxs(f.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(f.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(f.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(pe,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:aa.map((t,i)=>e.jsxs(f.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:i*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:t.value}),e.jsx("span",{className:"stat-label",children:t.label}),e.jsx("small",{className:"stat-sub",children:t.sub})]},t.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(f.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(lt,{items:Yt,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(f.div,{className:"sp-countdown",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",n.days],["Hours",n.hours],["Minutes",n.minutes],["Seconds",n.seconds]].map(([t,i])=>e.jsxs(f.div,{className:"sp-countdown-card",whileHover:{scale:1.06,y:-3},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(i).padStart(2,"0")}),e.jsx("span",{children:t})]},t))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:qt.map((t,i)=>e.jsxs(f.div,{className:`sp-pricing-card ${t.isFeatured?"sp-featured-pricing":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-8},children:[t.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:t.badge}),e.jsx("h3",{children:t.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:t.price})}),e.jsx("p",{className:"sp-pricing-sub",children:t.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(pe,{to:t.ctaLink,className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:t.ctaText})]},t.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:Kt.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-pillar-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-6,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-top",children:e.jsx("span",{className:"sp-pillar-badge",children:t.badge})}),e.jsx("h3",{className:"sp-pillar-title",children:t.title}),e.jsx("p",{className:"sp-pillar-desc",children:t.desc}),e.jsx("div",{className:"sp-pillar-glow-line"})]},t.title))}),e.jsxs(f.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(ie,{color:"#ff7a29",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-vibe-eyebrow",children:"FESTIVAL HIGHLIGHTS"}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(f.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(f.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(pe,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0},{text:"100kW Laser & Sound",isMain:!0},{text:"20+ Star Performers",isMain:!0},{text:"Verified QR Instant Passes",isMain:!0},{text:"10,000+ Music Lovers",isMain:!1},{text:"50+ Food & Beats Stalls",isMain:!1},{text:"VIP Artist Lounge & Deck",isMain:!1},{text:"Exclusive Partner Discounts",isMain:!1}].map((t,i)=>e.jsx(f.div,{className:`sp-vibe-tag ${t.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:i*.05},whileHover:{scale:1.04,x:4},whileTap:{scale:.98},children:t.text},t.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:Zt.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(ie,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-pill-badge",children:t.status})]}),e.jsx("p",{className:"sp-card-desc",children:t.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:Xt.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(ie,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:t.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:t.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.date," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:t.description}),e.jsx(pe,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},t.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:Qt.map((t,i)=>e.jsxs(f.div,{className:"sp-timeline-item",initial:{opacity:0,x:-28,y:20},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.45,delay:i*.08},children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:t.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:t.date})}),e.jsx("span",{className:"sp-timeline-badge",children:t.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:t.name}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.highlights.map(l=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:l},l))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:t.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"hotels",className:"sp-section sp-section-hotels","aria-label":"Partner Hotels",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Hospitality Partners"}),e.jsx("h2",{className:"sp-section-title",children:"Partner Hotels in Lahore"})]}),e.jsx("div",{className:"sp-hotels-grid",children:Ie.hotels.map((t,i)=>e.jsxs(f.div,{className:`sp-glass-card sp-hotel-card ${i===0?"sp-featured-border":""}`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-6},children:[t.showImage&&e.jsx("div",{className:"sp-hotel-img-wrap",children:e.jsx("img",{src:t.image,alt:t.name,loading:"lazy",decoding:"async",onError:l=>{l.currentTarget.src=N("/assets/prism-auth-visual.jpg")}})}),e.jsxs("div",{className:"sp-hotel-body",children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),t.rating&&e.jsxs("span",{className:"sp-rating-tag",children:["⭐ ",t.rating]})]}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.facilities?.map(l=>e.jsx("span",{className:"sp-tag",children:l},l))}),e.jsx("p",{className:"sp-contact-text",children:t.contact}),t.website&&e.jsx("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",className:"sp-accent-link",children:"Book Room →"})]})]},t.name))})]})}),e.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),e.jsx("div",{className:"sp-restaurants-grid",children:Ie.restaurants.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-restaurant-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-5,scale:1.01},children:[e.jsx(ie,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-discount-pill",children:t.discount})]}),e.jsxs("p",{className:"sp-meta-text",children:[t.cuisine," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.offer}),e.jsxs("div",{className:"sp-code-box",children:[e.jsx("span",{children:"Promo Code:"}),e.jsx("code",{children:t.code})]})]})]},t.name))})]})}),e.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header sp-voucher-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]})]}),e.jsx("div",{className:"sp-discounts-grid",children:ta.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-voucher-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,scale:.92,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.08},whileHover:{y:-6,scale:1.02},children:[e.jsx(ie,{color:"#ff9e42",rounded:22,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:t.category}),e.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:t.brand}),e.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:t.desc}),e.jsxs("div",{className:"sp-discount-footer",children:[e.jsx("span",{className:"sp-big-discount",children:t.discount}),e.jsx("code",{className:"sp-code-pill",children:t.code})]})]})]},t.brand))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:ea.map((t,i)=>e.jsxs(f.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(ie,{color:t.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsx("h3",{className:"sp-facility-title",children:t.title}),e.jsx("p",{className:"sp-card-desc",children:t.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(f.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:Jt.map((t,i)=>e.jsxs(f.div,{className:`sp-glass-card sp-sponsor-card ${t.isFeatured?"sp-sponsor-featured":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-10,scale:1.02},children:[t.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:t.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:t.accent},children:t.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:t.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:t.accent},children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(f.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(pe,{to:"/tickets",className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:t.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.tier))})]})}),e.jsx("style",{children:`
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
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0B0705 !important;
          padding: clamp(7rem, 12vw, 10rem) 1.5rem clamp(5rem, 8vw, 7rem);
          z-index: 2;
        }

        .sp-hero-ambient-glow {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 138, 61, 0.22) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 1;
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
      `})]})}export{ca as default};
