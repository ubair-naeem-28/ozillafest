import{j as e,m as w}from"./vendor-motion-DHTbcX3O.js";import{r as h,L as ye,u as ct}from"./vendor-react-6MXTWAEx.js";import{b as f}from"./index-DAEF9IaO.js";import{o as Re}from"./ozillaProfessionalContent-9w2IOFdf.js";import"./vendor-utils-Bub7y9MC.js";f("/assets/ozilla/talwinder.jpg"),f("/assets/ozilla/talwinder.jpg"),f("/assets/ozilla/Imran-Khan.jpg"),f("/assets/ozilla/Imran-Khan.jpg"),f("/assets/ozilla/Bohemia.jpg"),f("/assets/ozilla/Bohemia.jpg"),f("/assets/ozilla/hassan-raheem.jpg"),f("/assets/ozilla/hassan-raheem.jpg");const ze=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:f("/assets/ozilla/talwinder.jpg"),image:f("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:f("/assets/ozilla/Imran-Khan.jpg"),image:f("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:f("/assets/ozilla/Bohemia.jpg"),image:f("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:f("/assets/ozilla/hassan-raheem.jpg"),image:f("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],Te=1.28,Fe=.78;function le(i,s,t){return Math.min(t,Math.max(s,i))}function Me(i){if(!i)return null;if(typeof i=="string")return i||null;const s=i.src||i.image;return typeof s=="string"&&s?s:null}function dt(i){return Me(i&&typeof i=="object"&&(i.image||i.src)||i)}function pt(i){if(i&&typeof i=="object"&&"offsetY"in i){const s=i.offsetY;return typeof s=="number"&&isFinite(s)?s:0}return 0}function mt({items:i=ze,images:s,slideWidth:t=320,slideHeight:r=440,spacing:l=2.4,direction:b="right",smoothness:y=8.5,radius:k=24,dim:v=5,background:A="transparent",sensitivity:L=5,autoPlay:B=!1,autoPlayInterval:N=3500,style:T,onItemClick:M}){const D=h.useRef(null),U=h.useRef([]),I=h.useRef(0),O=h.useRef(0),[F,E]=h.useState(0),[_,re]=h.useState(!1),[g,d]=h.useState(0),a=i&&i.length>0?i:s&&s.length>0?s:ze,o=h.useMemo(()=>a.map((n,c)=>({...n,src:dt(n),offsetY:pt(n),name:n.name||`Artist ${c+1}`,genre:n.genre||"Live Performer",stage:n.stage||"Ozilla Arena",bpm:n.bpm||"128 BPM",vibe:n.vibe||"Festival Energy",isHeadliner:!!n.isHeadliner})),[a]),j=F>0&&F<640?Math.min(t,250):F<1024?Math.min(t,290):t,x=F>0&&F<640?Math.round(j*1.36):r,V=j+le(l,0,10)*18,P=.15-le(y,0,10)/10*.11,X=le(v,0,10)/10*.75,H=.4+le(L,0,10)/10*1.1,W=.6+le(L,0,10)/10*1.6,ee=b==="left",$=h.useRef({count:o.length,step:V,slideWidth:j,width:F,ease:P,maxScale:Te,minScale:Fe,dim:X,loop:!1,flip:ee});$.current={count:o.length,step:V,slideWidth:j,width:F,ease:P,maxScale:Te,minScale:Fe,dim:X,loop:!1,flip:ee};const G=h.useRef({wheelMultiplier:H,dragMultiplier:W,flip:ee});G.current={wheelMultiplier:H,dragMultiplier:W,flip:ee},h.useEffect(()=>{const n=D.current;if(!n)return;const c=new ResizeObserver(m=>{m[0]&&E(m[0].contentRect.width)});return c.observe(n),E(n.getBoundingClientRect().width),()=>c.disconnect()},[]),h.useEffect(()=>{U.current.length=o.length},[o.length]),h.useEffect(()=>{if(!B||_||o.length<=1)return;const n=setInterval(()=>{d(c=>{const m=(c+1)%o.length;return I.current=m*V,m})},N);return()=>clearInterval(n)},[B,_,o.length,V,N]),h.useEffect(()=>{let n=0,c=0;const m=R=>{n=requestAnimationFrame(m);const p=$.current,Y=c?Math.min((R-c)/1e3,.1):1/60;if(c=R,!p.count||p.step<=0||p.width<=0)return;const C=(p.count-1)*p.step;I.current=le(I.current,0,C);const Z=1-Math.pow(1-p.ease,Y*60);O.current+=(I.current-O.current)*Z;const te=Math.round(O.current/p.step);te>=0&&te<p.count&&d(te);const fe=(p.width-p.slideWidth)/2,ue=p.width/2;for(let ne=0;ne<p.count;ne+=1){const ae=U.current[ne];if(!ae)continue;const S=ne*p.step-O.current+fe,z=S+p.slideWidth/2-ue;let u,q;z>0?(u=Math.min(p.maxScale,1+z/p.width*.45),q=(u-1)*p.slideWidth*.35):(u=Math.max(p.minScale,1+z/p.width*.5),q=0);const ce=p.flip?p.width-p.slideWidth-(S+q):S+q;if(ae.style.transform=`translate3d(${ce}px, -50%, 0) scale(${u})`,p.dim>0&&u<1){const J=(1-u)/Math.max(.001,1-p.minScale);ae.style.filter=`brightness(${Math.max(.35,1-J*p.dim)})`}else ae.style.filter="none"}};return n=requestAnimationFrame(m),()=>cancelAnimationFrame(n)},[]),h.useEffect(()=>{const n=D.current;if(!n)return;const c=m=>{m.preventDefault();const R=Math.abs(m.deltaX)>Math.abs(m.deltaY)?m.deltaX:m.deltaY;I.current+=R*G.current.wheelMultiplier};return n.addEventListener("wheel",c,{passive:!1}),()=>n.removeEventListener("wheel",c)},[]),h.useEffect(()=>{const n=D.current;if(!n)return;let c=null,m=0;const R=C=>{if(c===null){c=C.pointerId,m=C.clientX;try{n.setPointerCapture(C.pointerId)}catch{}}},p=C=>{if(c!==C.pointerId)return;const Z=C.clientX-m;m=C.clientX,I.current+=(G.current.flip?Z:-Z)*G.current.dragMultiplier},Y=C=>{if(c===C.pointerId){c=null;try{n.hasPointerCapture(C.pointerId)&&n.releasePointerCapture(C.pointerId)}catch{}}};return n.addEventListener("pointerdown",R),n.addEventListener("pointermove",p),n.addEventListener("pointerup",Y),n.addEventListener("pointercancel",Y),()=>{n.removeEventListener("pointerdown",R),n.removeEventListener("pointermove",p),n.removeEventListener("pointerup",Y),n.removeEventListener("pointercancel",Y)}},[]);const Q=h.useCallback(n=>{const c=le(n,0,o.length-1);I.current=c*V,d(c)},[o.length,V]),se=h.useCallback(n=>{const c=le(g+(n==="left"?-1:1),0,o.length-1);Q(c)},[g,Q,o.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>re(!0),onMouseLeave:()=>re(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:o.map((n,c)=>{const m=c===g;return e.jsx("button",{type:"button",onClick:()=>Q(c),style:{padding:"6px 14px",borderRadius:"999px",border:m?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:m?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:m?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:m?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:m?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:n.name},n.name)})}),e.jsx("div",{ref:D,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${x+50}px`,overflow:"hidden",background:A,cursor:"grab",touchAction:"pan-y",opacity:F>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...T},children:o.map((n,c)=>{const m=n.isHeadliner,R=c===g;return e.jsxs("div",{ref:p=>{U.current[c]=p},onClick:()=>{Q(c),M&&M(n,c)},style:{position:"absolute",top:"50%",left:0,width:`${j}px`,height:`${x}px`,borderRadius:`${k}px`,overflow:"hidden",background:"#130c0a",border:R?"1.5px solid rgba(255, 138, 61, 0.85)":m?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:R?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[n.src?e.jsx("img",{src:n.src,alt:n.name,draggable:!1,onError:p=>{p.currentTarget.src=f("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${n.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[m?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:n.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:n.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:n.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",n.bpm]}),e.jsxs("span",{children:["♫ ",n.vibe]})]})]})]},n.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>se("left"),disabled:g===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:g===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:g===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:g===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:g===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:n=>{g>0&&(n.currentTarget.style.transform="scale(1.1)",n.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:n=>{n.currentTarget.style.transform="scale(1)",n.currentTarget.style.borderColor=g===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:o.map((n,c)=>e.jsx("span",{onClick:()=>Q(c),style:{width:c===g?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:c===g?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},c))}),e.jsx("button",{type:"button",onClick:()=>se("right"),disabled:g===o.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:g===o.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:g===o.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:g===o.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:g===o.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:n=>{g<o.length-1&&(n.currentTarget.style.transform="scale(1.1)",n.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:n=>{n.currentTarget.style.transform="scale(1)",n.currentTarget.style.borderColor=g===o.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const pe={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},ft=2,_e=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],gt=Math.max(..._e.map(i=>i.blur)),Ce=36;function je(i,s){const t=Math.max(0,Math.min(1,s));if(typeof i!="string")return`rgba(0,0,0,${t})`;const r=i.trim(),l=r.match(/^#([0-9a-f]{3,8})$/i);if(l){let y=l[1];(y.length===3||y.length===4)&&(y=y.split("").map(v=>v+v).join(""));const k=parseInt(y.slice(0,6),16);return Number.isFinite(k)?`rgba(${k>>16&255},${k>>8&255},${k&255},${t})`:`rgba(0,0,0,${t})`}const b=r.match(/^rgba?\(([^)]+)\)/i);if(b){const y=b[1].split(",").map(k=>parseFloat(k));if(y.length>=3&&y.slice(0,3).every(Number.isFinite))return`rgba(${y[0]},${y[1]},${y[2]},${t})`}return`rgba(0,0,0,${t})`}function ut(i,s,t){const r=(i%1+1)%1*2*(s+t);return r<s?[r,0]:r<s+t?[s,r-s]:r<s*2+t?[s-(r-s-t),t]:[0,t-(r-s*2-t)]}function Le(i,s,t){const r=2*(s+t),l=[0,s/r,(s+t)/r,(s*2+t)/r];return Math.floor(i/4)+l[(i%4+4)%4]}function ht(i,s,t){const[r,l]=ut(i,s,t);return Math.atan2(r-s/2,t/2-l)*180/Math.PI}const De=24,bt=.015;function Se(i,s,t,r,l){const b=t>0?t:100,y=r>0?r:100,k=Math.max(0,Math.min(100,s)),v=Math.max(bt,k/100*.5),A=k/100,L=[];let B=0,N=0,T=0;for(let D=0;D<=De;D++){const U=D/De,I=ht(i+(U-.5)*v,b,y);if(D===0)B=I;else{let E=I-N;for(;E>180;)E-=360;for(;E<-180;)E+=360;T+=E}N=I;const O=Math.abs(U-.5)*2,F=A>=1||O<=A?1:1-(O-A)/(1-A);L.push(`${je(l,F*F*(3-2*F))} ${T.toFixed(2)}deg`)}const M=T.toFixed(2);return L.push(`${je(l,0)} ${M}deg`),L.push(`${je(l,0)} 360deg`),`conic-gradient(from ${B.toFixed(2)}deg at 50% 50%, ${L.join(", ")})`}const Be=30,xt=4,Oe=3,yt=.35,vt=[.72,.16,.18,1.05],wt=[.65,0,.35,1];function We(i){const[s,t,r,l]=i;if(s===t&&r===l)return y=>y;const b=(y,k,v)=>{const A=1-v;return 3*A*A*v*y+3*A*v*v*k+v*v*v};return y=>{const k=Math.max(0,Math.min(1,y));let v=k;for(let A=0;A<8;A++){const L=b(s,r,v)-k,B=1-v,N=3*B*B*s+6*B*v*(r-s)+3*v*v*(1-r);if(Math.abs(N)<1e-6)break;v-=L/N,v=Math.max(0,Math.min(1,v))}return b(t,l,v)}}const jt=We(vt),St=We(wt),He={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function ie({color:i=pe.color,rounded:s=pe.rounded,thickness:t=pe.thickness,borderSize:r=pe.borderSize,glow:l=pe.glow,movement:b=pe.movement,speed:y=pe.speed,style:k,className:v=""}){const A=h.useRef(null),L=h.useRef(null),B=h.useRef({speed:y,movement:b,borderSize:r,color:i});B.current={speed:y,movement:b,borderSize:r,color:i};const N=h.useRef(null),T=h.useRef({w:0,h:0}),[M,D]=h.useState({w:0,h:0});h.useEffect(()=>{const d=N.current;if(!d||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>{const o=d.getBoundingClientRect();o.width===T.current.w&&o.height===T.current.h||(T.current={w:o.width,h:o.height},D(T.current))});return a.observe(d),()=>a.disconnect()},[]),h.useEffect(()=>{const d=N.current;let a=!0,o=null;typeof IntersectionObserver<"u"&&d&&(o=new IntersectionObserver(W=>{W[0]&&(a=W[0].isIntersecting)},{rootMargin:"100px"}),o.observe(d));let j=0,x=performance.now(),V=0,P=0,X=0;const H=W=>{if(j=requestAnimationFrame(H),!a||typeof document<"u"&&document.hidden){x=W;return}const ee=Math.min(.05,Math.max(0,(W-x)/1e3));x=W;const $=B.current,G=Math.max(0,Math.min(20,$.speed));if(G>0){const Q=$.movement==="step",se=Q?Oe+(yt-Oe)*(G-1)/19:(Be+(xt-Be)*(G-1)/19)/4;for(X+=ee/se;X>=1;)X-=1,P+=1;const n=Q?jt(Math.min(1,X*2)):St(X),{w:c,h:m}=T.current,R=c>0?c:100,p=m>0?m:100,Y=Le(P,R,p),C=Le(P+1,R,p);V=Y+(C-Y)*n;const Z=A.current;Z&&Z.style.setProperty("--arc",Se(V,$.borderSize,c,m,$.color));const te=L.current;te&&te.style.setProperty("--arc",Se(V+.5,$.borderSize,c,m,$.color))}};return j=requestAnimationFrame(H),()=>{cancelAnimationFrame(j),o&&o.disconnect()}},[]);const U=Math.max(1,Math.min(10,t)),I=Math.max(0,Math.min(100,s))/100*(Math.min(M.w||200,M.h||200)/2),O=Math.max(0,Math.min(100,l))/100,F=d=>U+O*Ce*d,E=10+Ce+gt*2,_=(d,a=0)=>e.jsx("div",{style:{position:"absolute",inset:a-d,boxSizing:"border-box",padding:d,borderRadius:I>0?I+d:0,background:"var(--arc)",...He}}),re=(d,a,o,j)=>e.jsx("div",{style:{position:"absolute",inset:-E,boxSizing:"border-box",padding:E,borderRadius:I>0?I+E:0,opacity:j,mixBlendMode:"plus-lighter",filter:o?`blur(${o.toFixed(1)}px)`:"none",WebkitFilter:o?`blur(${o.toFixed(1)}px)`:"none",...He},children:_(a,E)},d),g=(d,a)=>e.jsxs("div",{ref:a,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":Se(d,r,M.w,M.h,i)},children:[O>0&&_e.map((o,j)=>re(`glow-${j}`,F(o.reach),o.blur,o.opacity)),Array.from({length:ft}).map((o,j)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:_(U)},`edge-${j}`))]});return e.jsxs("div",{ref:N,className:`neon-border-overlay ${v}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:I,pointerEvents:"none",zIndex:1,...k},children:[g(0,A),g(.5,L)]})}const kt=1.5,At=42,Nt=Math.PI*2,It=300,Et=300,Pt=2,Rt=5e3,zt=3.2,Tt=.05,Ft=3,Mt=1.35,Ct=.08,Lt=.5,Dt=.24,Bt=.35,Ot=Nt*.75,Ht=2,$e=3,be=720,Vt=`
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
    float ang = aA.x * ${Ot.toFixed(6)} + aA.y * TAU * ${Ht.toFixed(1)};
    float rN = mix(${Bt.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${Tt.toFixed(3)} * tau);

    float tp   = ${Ct.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${Lt.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${Mt.toFixed(2)});

    float L  = ${Ft.toFixed(1)};
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
`,Gt=`
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
`,Ut=`
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
    float halfW  = uThick * 0.5 * ${$e.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,_t=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${$e.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function Ve(i){if(!i)return[1,1,1,1];let s=String(i).trim();const t=s.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);t&&(s=t[1].trim());const r=s.match(/^rgba?\(([^)]+)\)$/i);if(r){const b=r[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(b[0]||0)/255,(b[1]||0)/255,(b[2]||0)/255,b.length>3&&isFinite(b[3])?b[3]:1]}let l=s.replace("#","");return(l.length===3||l.length===4)&&(l=l.split("").map(b=>b+b).join("")),l.length<6?[1,1,1,1]:[parseInt(l.slice(0,2),16)/255,parseInt(l.slice(2,4),16)/255,parseInt(l.slice(4,6),16)/255,l.length>=8?parseInt(l.slice(6,8),16)/255:1]}function Wt(i){return()=>{i|=0,i=i+1831565813|0;let s=Math.imul(i^i>>>15,1|i);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function Ge(i,s,t){const r=i.createShader(s);return r?(i.shaderSource(r,t),i.compileShader(r),i.getShaderParameter(r,i.COMPILE_STATUS)||console.warn("VortexDustFall shader:",i.getShaderInfoLog(r)),r):null}function Ue(i,s,t){const r=i.createProgram();if(!r)return null;const l=Ge(i,i.VERTEX_SHADER,s),b=Ge(i,i.FRAGMENT_SHADER,t);return!l||!b?null:(i.attachShader(r,l),i.attachShader(r,b),i.linkProgram(r),i.getProgramParameter(r,i.LINK_STATUS)||console.warn("VortexDustFall link:",i.getProgramInfoLog(r)),r)}const $t={radius:195,thickness:16},Yt={height:165,spin:38,spray:0},qt={scatter:280,blur:0},Kt={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function Xt({background:i="transparent",baseColor:s="#FFA733",accentColor:t="#FFE082",density:r=145,dotSize:l=130,speed:b=48,distance:y=1450,tilt:k=7,ring:v={},fall:A={},field:L={},hover:B={},style:N={},className:T="",children:M}){const D={...$t,...v},U={...Yt,...A},I={...qt,...L},O={...Kt,...B},F=h.useRef(null),E=h.useRef(null),_=h.useRef({x:0,y:0,active:0}),re=h.useRef({baseColor:s,accentColor:t,density:r,dotSize:l,speed:b,distance:y,tilt:k,ring:D,fall:U,field:I,hover:O});return re.current={baseColor:s,accentColor:t,density:r,dotSize:l,speed:b,distance:y,tilt:k,ring:D,fall:U,field:I,hover:O},h.useEffect(()=>{const g=F.current,d=E.current;if(!g||!d)return;const a=d.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!a)return;const o=Ue(a,Vt,Gt),j=Ue(a,Ut,_t);if(!o||!j)return;const x=(S,z)=>a.getUniformLocation(S,z),V={a:a.getAttribLocation(o,"aA"),b:a.getAttribLocation(o,"aB")},P={res:x(o,"uRes"),focal:x(o,"uFocal"),phase:x(o,"uPhase"),radius:x(o,"uRadius"),rise:x(o,"uRise"),fallD:x(o,"uFall"),spinTurns:x(o,"uSpinTurns"),scatter:x(o,"uScatter"),dotWorld:x(o,"uDotWorld"),blurK:x(o,"uBlurK"),camDist:x(o,"uCamDist"),tilt:x(o,"uTilt"),yPx:x(o,"uYPx"),alpha:x(o,"uAlpha"),color:x(o,"uColor")},X={ring:a.getAttribLocation(j,"aRing")},H={res:x(j,"uRes"),focal:x(j,"uFocal"),radius:x(j,"uRadius"),camDist:x(j,"uCamDist"),tilt:x(j,"uTilt"),yPx:x(j,"uYPx"),thick:x(j,"uThick"),seg:x(j,"uSeg"),color:x(j,"uColor"),alpha:x(j,"uAlpha")},W=a.createBuffer(),ee=a.createBuffer();let $=-1,G=0;const Q=S=>{const z=d.clientWidth||g.clientWidth||(typeof window<"u"?window.innerWidth:1200),u=z<768,q=z>=768&&z<1024,ce=u?1800:q?8500:Math.round(S*It);G=Math.max(1e3,ce);const J=new Float32Array(G*4),de=new Float32Array(G*2),oe=Wt(85840071);for(let K=0;K<G;K++)J[K*4]=oe(),J[K*4+1]=oe(),J[K*4+2]=oe(),J[K*4+3]=oe(),de[K*2]=oe(),de[K*2+1]=oe();a.bindBuffer(a.ARRAY_BUFFER,W),a.bufferData(a.ARRAY_BUFFER,J,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,ee),a.bufferData(a.ARRAY_BUFFER,de,a.STATIC_DRAW),$=S},se=a.createBuffer(),n=(be+1)*2;{const S=new Float32Array(n*2);for(let z=0;z<=be;z++){const u=z/be;S[z*4]=u,S[z*4+1]=-1,S[z*4+2]=u,S[z*4+3]=1}a.bindBuffer(a.ARRAY_BUFFER,se),a.bufferData(a.ARRAY_BUFFER,S,a.STATIC_DRAW)}a.disable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE);let c=!0,m=null;typeof IntersectionObserver<"u"&&g&&(m=new IntersectionObserver(S=>{S[0]&&(c=S[0].isIntersecting)},{rootMargin:"120px"}),m.observe(g));let R=1,p=0;const Y=()=>{R=Math.min(window.devicePixelRatio||1,kt);const S=d.clientWidth||g.clientWidth||1,z=d.clientHeight||g.clientHeight||1,u=Math.max(1,Math.round(S*R)),q=Math.max(1,Math.round(z*R));(d.width!==u||d.height!==q)&&(d.width=u,d.height=q),a.viewport(0,0,u,q),Math.abs(p-S)>50&&(p=S,Q(re.current.density))};Y();const C=new ResizeObserver(Y);C.observe(d);let Z=0,te=performance.now(),fe=0,ue=0,ne=0,ae=0;const ve=S=>{if(fe=requestAnimationFrame(ve),!c||typeof document<"u"&&document.hidden){te=S;return}const z=Math.min((S-te)/1e3,.05);te=S;const u=re.current;if(u.density!==$&&Q(u.density),G===0)return;const q=Math.max(.05,u.hover.transition?.duration??.6),ce=1-Math.exp(-z/q),J=_.current;ue+=(J.x-ue)*ce,ne+=(J.y-ne)*ce,ae+=(J.active-ae)*ce;const de=(u.hover.amount||100)/100,oe=1+ae*de*.6;Z=(Z+z*(u.speed/50*oe)/zt)%1;const K=d.width,ge=d.height,we=d.clientWidth||g.clientWidth||1200,me=we<768,Ye=we>=768&&we<1024,ke=ge/(2*Math.tan(At/2*Math.PI/180)),Ae=K/Math.max(ge,1),qe=Ae<1?Math.max(.32,Ae/1.4):Ye?.85:1,he=Et*(u.ring.radius/100)*qe,Ne=he*(me?1.1:u.fall.height/100),Ke=Ne*(u.fall.spray/400),Ie=ge*(me?.22:Dt),Xe=u.fall.spin/100*1.5,Qe=he*(u.field.scatter/100)*(me?.08:.15),Ze=Pt*(u.dotSize/100)*(me?.65:1),Je=Rt*(u.field.blur/100),et=me?Math.min(u.ring.thickness*R,9*R):u.ring.thickness*R,Ee=u.tilt*Math.PI/180+ne*de*ae*(10*Math.PI/180),Pe=(me?u.distance*1.05:u.distance)-ae*de*150,[tt,at,it,rt]=Ve(u.baseColor),[st,nt,ot,lt]=Ve(u.accentColor);a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(o),a.uniform2f(P.res,K,ge),a.uniform1f(P.focal,ke),a.uniform1f(P.phase,Z),a.uniform1f(P.radius,he),a.uniform1f(P.rise,Ke),a.uniform1f(P.fallD,Ne),a.uniform1f(P.spinTurns,Xe),a.uniform1f(P.scatter,Qe),a.uniform1f(P.dotWorld,Ze*R),a.uniform1f(P.blurK,Je*R),a.uniform1f(P.camDist,Pe),a.uniform1f(P.tilt,Ee),a.uniform1f(P.yPx,Ie),a.uniform1f(P.alpha,rt),a.uniform3f(P.color,tt,at,it),a.bindBuffer(a.ARRAY_BUFFER,W),a.enableVertexAttribArray(V.a),a.vertexAttribPointer(V.a,4,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,ee),a.enableVertexAttribArray(V.b),a.vertexAttribPointer(V.b,2,a.FLOAT,!1,0,0),a.drawArrays(a.POINTS,0,G),a.useProgram(j),a.uniform2f(H.res,K,ge),a.uniform1f(H.focal,ke),a.uniform1f(H.radius,he),a.uniform1f(H.camDist,Pe),a.uniform1f(H.tilt,Ee),a.uniform1f(H.yPx,Ie),a.uniform1f(H.thick,et),a.uniform1f(H.seg,be),a.uniform3f(H.color,st,nt,ot),a.uniform1f(H.alpha,lt),a.bindBuffer(a.ARRAY_BUFFER,se),a.enableVertexAttribArray(X.ring),a.vertexAttribPointer(X.ring,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,n)};return fe=requestAnimationFrame(ve),()=>{cancelAnimationFrame(fe),C.disconnect(),m&&m.disconnect(),a.deleteBuffer(W),a.deleteBuffer(ee),a.deleteBuffer(se),a.deleteProgram(o),a.deleteProgram(j)}},[]),e.jsxs("div",{ref:F,className:`vortex-dust-container ${T}`,onPointerMove:g=>{const d=g.currentTarget.getBoundingClientRect();d.width<=0||d.height<=0||(_.current={x:(g.clientX-d.left)/d.width*2-1,y:-((g.clientY-d.top)/d.height*2-1),active:1})},onPointerLeave:()=>{_.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:i,...N},children:[e.jsx("canvas",{ref:E,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),M&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:M})]})}function Qt({category:i,title:s,description:t,price:r,priceSub:l,perks:b=[],tags:y=[],meta:k,ctaText:v="Learn More →",ctaLink:A="/tickets",image:L,bgGradient:B,accentColor:N="#ffbd59",isFeatured:T=!1,index:M=0,total:D=1}){const U=typeof A=="string"&&(A.startsWith("http")||A.startsWith("#")),I=M<D-1,O=["linear-gradient(135deg, #1b0e07 0%, #2e1408 50%, #150904 100%)","linear-gradient(135deg, #091a14 0%, #123328 50%, #06120e 100%)","linear-gradient(135deg, #120f26 0%, #221d45 50%, #0a0817 100%)","linear-gradient(135deg, #23120b 0%, #3d1c0e 50%, #180a05 100%)","linear-gradient(135deg, #1c0a1a 0%, #351430 50%, #120610 100%)"],F=B||O[M%O.length];return e.jsx("div",{className:"deck-stack-card-wrapper",style:{zIndex:10+M,top:`${80+M*10}px`},children:e.jsxs("div",{className:`deck-card ${T?"deck-card-featured":""}`,style:{background:F,borderColor:T?"rgba(255, 189, 89, 0.45)":"rgba(255, 255, 255, 0.12)"},children:[e.jsxs("div",{className:"deck-card-left",children:[e.jsxs("div",{className:"deck-card-top-tag",children:[i&&e.jsxs("span",{className:"deck-category-badge",children:[e.jsx("span",{className:"deck-category-dot",style:{background:N,boxShadow:`0 0 10px ${N}`}}),i]}),T&&e.jsx("span",{className:"deck-category-badge",style:{background:"rgba(255, 189, 89, 0.18)",color:"#ffbd59",borderColor:"rgba(255, 189, 89, 0.4)"},children:"★ POPULAR CHOICE"})]}),e.jsxs("div",{className:"deck-card-body",children:[e.jsx("h3",{className:"deck-card-title",children:s}),t&&e.jsx("p",{className:"deck-card-desc",children:t}),r&&e.jsxs("div",{className:"deck-card-price-row",children:[e.jsx("span",{className:"deck-card-price",style:{color:N},children:r}),l&&e.jsx("span",{className:"deck-card-price-sub",children:l})]}),b&&b.length>0&&e.jsx("ul",{className:"deck-card-perks",children:b.map((E,_)=>e.jsxs("li",{children:[e.jsx("span",{className:"deck-perk-icon",style:{color:N},children:"✓"}),e.jsx("span",{children:E})]},_))}),y&&y.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.4rem"},children:y.map((E,_)=>e.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"0.25rem 0.75rem",borderRadius:"999px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.85)"},children:E},_))})]}),e.jsxs("div",{className:"deck-card-footer",children:[U?e.jsx("a",{href:A,className:"deck-cta-btn",style:T?{background:"linear-gradient(120deg, #ffbd59, #ff8a3d)",color:"#0B0705"}:{},children:v}):e.jsx(ye,{to:A,className:"deck-cta-btn",style:T?{background:"linear-gradient(120deg, #ffbd59, #ff8a3d)",color:"#0B0705"}:{},children:v}),k&&e.jsx("span",{className:"deck-meta-info",children:k})]})]}),e.jsxs("div",{className:"deck-card-right",children:[L?e.jsx("img",{src:L,alt:s,className:"deck-card-img",loading:"lazy",onError:E=>{E.currentTarget.style.display="none"}}):e.jsxs("div",{style:{width:"100%",height:"100%",background:`radial-gradient(circle at 60% 40%, ${N}33, #000000 85%)`,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"1rem",padding:"2rem",textAlign:"center"},children:[e.jsx("div",{style:{width:"70px",height:"70px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.08)",border:`1px solid ${N}66`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",boxShadow:`0 0 30px ${N}44`},children:"⚡"}),e.jsx("span",{style:{fontFamily:"var(--font-marron, serif)",fontSize:"1.4rem",fontWeight:800,color:"#ffffff",letterSpacing:"0.04em"},children:"OZILLA FEST 2026"})]}),e.jsx("div",{className:"deck-card-img-sheen"})]}),I&&e.jsxs("div",{className:"deck-stack-preview-tabs",children:[e.jsx("div",{className:"deck-stack-preview-layer-1"}),M<D-2&&e.jsx("div",{className:"deck-stack-preview-layer-2"})]})]})})}function xe({items:i=[],children:s,className:t=""}){return s?e.jsx("div",{className:`deck-stack-container ${t}`,children:e.jsx("div",{className:"deck-stack-inner",children:s})}):e.jsx("div",{className:`deck-stack-container ${t}`,children:e.jsx("div",{className:"deck-stack-inner",children:i.map((r,l)=>e.jsx(Qt,{index:l,total:i.length,...r},r.id||r.title||l))})})}const Zt=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:f("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:f("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:f("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:f("/assets/ozilla/hassan-raheem.jpg")}],Jt=[{id:"general",title:"General Pass",category:"STANDARD ACCESS",price:"PKR 4,500",priceSub:"Full 1-day festival admission",description:"Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission to all 4 concert zones.",isFeatured:!1,accentColor:"#ff8a3d",image:f("/assets/new-proposal/attendee-experience.jpg"),perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",title:"VIP Experience",category:"MOST POPULAR",price:"PKR 12,500",priceSub:"Elevated front-row & lounge access",description:"Elevated front-stage viewing decks, private artist lounges, fast-track VIP gates, and complimentary hospitality vouchers.",isFeatured:!0,accentColor:"#ffbd59",bgGradient:"linear-gradient(135deg, #2b1406 0%, #481e08 50%, #1a0b03 100%)",image:f("/assets/ozilla/experience.png"),perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",title:"All-Access Platinum",category:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",priceSub:"Ultimate luxury hospitality package",description:"The ultimate festival luxury experience with backstage artist access, private valet parking, and all-inclusive gourmet dining.",isFeatured:!1,accentColor:"#ffd36a",bgGradient:"linear-gradient(135deg, #1f1a10 0%, #3a2e15 50%, #141008 100%)",image:f("/assets/new-proposal/platinum-visual.jpg"),perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],ea=[{id:"stages",category:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",description:"Explosive stage arenas engineered with concert-grade line arrays for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM drops.",accentColor:"#ff5a1f",image:f("/assets/ozilla/venue-branding.png"),tags:["Main Prism Stage","Neon Bass Arena","Underground Stage","Sunset Stage"],ctaText:"Explore Stages →",ctaLink:"#celebrities"},{id:"artists",category:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",description:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top viral artists performing together in Lahore.",accentColor:"#ffbd59",image:f("/assets/ozilla/talwinder.jpg"),tags:["Talwinder","Imran Khan","Bohemia","Hassan Raheem"],ctaText:"View Celebrity Lineup →",ctaLink:"#celebrities"},{id:"culinary",category:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",description:"50+ curated gourmet food stalls, wood-fired artisan eats, craft mocktail lounges, and interactive brand tasting experiences.",accentColor:"#ff8a3d",image:f("/assets/ozilla/activation.png"),tags:["50+ Stalls","Artisan Eats","Mocktail Bars","Night Food Street"],ctaText:"Discover Dining →",ctaLink:"#restaurants"},{id:"hospitality",category:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",description:"Elevated front-stage viewing decks, private artist lounge access, dedicated fast-track entry gates, and premium lounge service.",accentColor:"#ffd36a",image:f("/assets/ozilla/audience.png"),tags:["Front-Stage Deck","Artist Lounge","Fast-Track Gates","Valet Entry"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"}],ta=[{name:"Ozilla Festival 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],aa=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],ia=[{id:"history-2023",category:"SOLD OUT DEBUT · 2023",title:"Ozilla Debut: Sound Awakening",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music, multi-genre fusion, and vibrant night market culture.",meta:"December 12, 2023 · Lahore Expo Center",accentColor:"#ff8a3d",image:f("/assets/ozilla/journey.png"),perks:["6,000+ Attendees in Debut Run","2 Live Concert Stages","Indie & Desi Hip-Hop Fusion"],ctaText:"View 2023 Archive →",ctaLink:"/history"},{id:"history-2024",category:"RECORD CROWD · 2024",title:"Ozilla Season 2: Neon Nights",description:"Season 2 expansion with 4 live stages, headline celebrity acts, and a spectacular 360° laser canopy over 8,500+ fans.",meta:"November 9, 2024 · DHA Sports Complex, Lahore",accentColor:"#ec4899",image:f("/assets/ozilla/scale.png"),perks:["8,500+ Packed Stadium Audience","4 Electrified Live Stages","360° Laser & Cryo Production"],ctaText:"View 2024 Archive →",ctaLink:"/history"},{id:"history-2025",category:"SPRING FESTIVAL · 2025",title:"Ozilla Basant Cultural Beats",description:"Seasonal spring music festival with live acoustic sets, high-energy DJ arenas, artisan bazaar, and cultural kite beat drops.",meta:"March 15, 2025 · Gulberg Cultural District, Lahore",accentColor:"#ffbd59",image:f("/assets/ozilla/brand-objective.png"),perks:["Cultural Music & Basant Fusion","Live DJ Arenas & Acoustic Tents","Artisan Food & Craft Hub"],ctaText:"View 2025 Archive →",ctaLink:"/history"},{id:"history-2026",category:"FLAGSHIP 10,000+ EDITION · 2026",title:"Ozilla Fest 2026 (Grand Edition)",description:"Monumental flagship edition with 4 stages, 20+ star artists, 100kW concert sound arrays, and stadium-wide festival activations.",meta:"November 1, 2026 · Lahore, Punjab",accentColor:"#ff5a1f",isFeatured:!0,image:f("/assets/new-proposal/festival-2026.jpg"),perks:["10,000+ Music Fans & Creators","Talwinder, Imran Khan & Bohemia Live","Official Instant Dynamic QR Entry"],ctaText:"Get Passes For 2026 →",ctaLink:"/tickets"}],ra=[{id:"sponsor-title",category:"FLAGSHIP PARTNER",title:"Title Sponsor",price:"PREMIUM PARTNER",priceSub:"Maximum Brand Dominance",description:"Exclusive brand naming rights, main stage backdrop integration, 30-second main screen video ads, and VIP lounge co-branding.",accentColor:"#ffbd59",isFeatured:!0,image:f("/assets/new-proposal/title-package.jpg"),perks:['Exclusive brand naming rights ("Ozilla Fest Presented by Your Brand")',"Main concert stage backdrop & perimeter LED dominance","VIP lounge & hospitality viewing deck co-branding","Dedicated 30-second main stage video commercials"],ctaText:"Claim Title Partnership",ctaLink:"/tickets"},{id:"sponsor-gold",category:"STAGE ACTIVATION",title:"Gold Sponsor",price:"HIGH IMPACT",priceSub:"High-Energy Ground Presence",description:"Exclusive on-ground interactive brand activation booth, perimeter banner placements, and influencer co-branding campaigns.",accentColor:"#ff8a3d",image:f("/assets/new-proposal/gold-package.jpg"),perks:["Exclusive on-ground interactive activation zone","Perimeter banner placements across all 4 stages","Digital festival app features & social influencer mentions","On-ground branded sampling booth space"],ctaText:"Become Gold Sponsor",ctaLink:"/tickets"},{id:"sponsor-silver",category:"BRAND PARTNER",title:"Silver Sponsor",price:"GROWTH TIER",priceSub:"Targeted Festival Engagement",description:"Official festival website branding, social media shoutouts, sampling booth at food street, and complimentary VIP access tickets.",accentColor:"#cbd5e1",image:f("/assets/new-proposal/silver-package.jpg"),perks:["Official festival website branding & logo placements","Social media shoutouts & creator collaborations","Sampling booth at food & beats street","10 complimentary VIP festival passes"],ctaText:"Join Silver Tier",ctaLink:"/tickets"},{id:"sponsor-media",category:"BROADCAST & PRESS",title:"Media Partner",price:"OFFICIAL MEDIA",priceSub:"Official Media & Broadcast Rights",description:"Official festival media coverage rights, all-access artist press passes, exclusive backstage interview access, and creator lounge credentials.",accentColor:"#ec4899",image:f("/assets/new-proposal/platinum-media-layout.jpg"),perks:["Official media coverage rights & credentials","All-access artist press passes & photo pit access","Exclusive backstage celebrity interview access","Press release announcement feature across channels"],ctaText:"Apply For Media Pass",ctaLink:"/tickets"}],sa=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],na=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],oa=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function la(i){const[s,t]=h.useState(()=>{const r=Math.max(new Date(i)-Date.now(),0);return{days:Math.floor(r/864e5),hours:Math.floor(r/36e5%24),minutes:Math.floor(r/6e4%60),seconds:Math.floor(r/1e3%60)}});return h.useEffect(()=>{const r=setInterval(()=>{const l=Math.max(new Date(i)-Date.now(),0);t({days:Math.floor(l/864e5),hours:Math.floor(l/36e5%24),minutes:Math.floor(l/6e4%60),seconds:Math.floor(l/1e3%60)})},1e3);return()=>clearInterval(r)},[i]),s}function ga(){const i=ct(),s=la("2026-11-01T18:00:00+05:00");return h.useEffect(()=>{const t=i.hash?.replace("#","");t?setTimeout(()=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[i.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx(Xt,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(w.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(w.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsx(w.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:"Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound."}),e.jsxs(w.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsx("span",{children:"📅 November 1, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⚡ 4 Mega Stages"}),e.jsx("span",{children:"🎟️ Official QR Passes"})]}),e.jsxs(w.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(w.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(w.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(ye,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:oa.map((t,r)=>e.jsxs(w.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:r*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:t.value}),e.jsx("span",{className:"stat-label",children:t.label}),e.jsx("small",{className:"stat-sub",children:t.sub})]},t.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(w.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(mt,{items:Zt,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(w.div,{className:"sp-countdown",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",s.days],["Hours",s.hours],["Minutes",s.minutes],["Seconds",s.seconds]].map(([t,r])=>e.jsxs(w.div,{className:"sp-countdown-card",whileHover:{scale:1.06,y:-3},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(r).padStart(2,"0")}),e.jsx("span",{children:t})]},t))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx(xe,{items:Jt})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx(xe,{items:ea}),e.jsxs(w.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(ie,{color:"#ff7a29",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-vibe-eyebrow",children:"FESTIVAL HIGHLIGHTS"}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(w.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(w.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(ye,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0},{text:"100kW Laser & Sound",isMain:!0},{text:"20+ Star Performers",isMain:!0},{text:"Verified QR Instant Passes",isMain:!0},{text:"10,000+ Music Lovers",isMain:!1},{text:"50+ Food & Beats Stalls",isMain:!1},{text:"VIP Artist Lounge & Deck",isMain:!1},{text:"Exclusive Partner Discounts",isMain:!1}].map((t,r)=>e.jsx(w.div,{className:`sp-vibe-tag ${t.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:r*.05},whileHover:{scale:1.04,x:4},whileTap:{scale:.98},children:t.text},t.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:aa.map((t,r)=>e.jsxs(w.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.12},whileHover:{y:-6},children:[e.jsx(ie,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-pill-badge",children:t.status})]}),e.jsx("p",{className:"sp-card-desc",children:t.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:ta.map((t,r)=>e.jsxs(w.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.12},whileHover:{y:-6},children:[e.jsx(ie,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:t.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:t.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.date," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:t.description}),e.jsx(ye,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},t.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx(xe,{items:ia})]})}),e.jsx("section",{id:"hotels",className:"sp-section sp-section-hotels","aria-label":"Partner Hotels",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Hospitality Partners"}),e.jsx("h2",{className:"sp-section-title",children:"Partner Hotels in Lahore"})]}),e.jsx("div",{className:"sp-hotels-grid",children:Re.hotels.map((t,r)=>e.jsxs(w.div,{className:`sp-glass-card sp-hotel-card ${r===0?"sp-featured-border":""}`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},whileHover:{y:-6},children:[t.showImage&&e.jsx("div",{className:"sp-hotel-img-wrap",children:e.jsx("img",{src:t.image,alt:t.name,loading:"lazy",decoding:"async",onError:l=>{l.currentTarget.src=f("/assets/prism-auth-visual.jpg")}})}),e.jsxs("div",{className:"sp-hotel-body",children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),t.rating&&e.jsxs("span",{className:"sp-rating-tag",children:["⭐ ",t.rating]})]}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.facilities?.map(l=>e.jsx("span",{className:"sp-tag",children:l},l))}),e.jsx("p",{className:"sp-contact-text",children:t.contact}),t.website&&e.jsx("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",className:"sp-accent-link",children:"Book Room →"})]})]},t.name))})]})}),e.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),e.jsx("div",{className:"sp-restaurants-grid",children:Re.restaurants.map((t,r)=>e.jsxs(w.div,{className:"sp-glass-card sp-restaurant-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.1},whileHover:{y:-5,scale:1.01},children:[e.jsx(ie,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-discount-pill",children:t.discount})]}),e.jsxs("p",{className:"sp-meta-text",children:[t.cuisine," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.offer}),e.jsxs("div",{className:"sp-code-box",children:[e.jsx("span",{children:"Promo Code:"}),e.jsx("code",{children:t.code})]})]})]},t.name))})]})}),e.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header sp-voucher-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]})]}),e.jsx("div",{className:"sp-discounts-grid",children:na.map((t,r)=>e.jsxs(w.div,{className:"sp-glass-card sp-voucher-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,scale:.92,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.08},whileHover:{y:-6,scale:1.02},children:[e.jsx(ie,{color:"#ff9e42",rounded:22,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:t.category}),e.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:t.brand}),e.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:t.desc}),e.jsxs("div",{className:"sp-discount-footer",children:[e.jsx("span",{className:"sp-big-discount",children:t.discount}),e.jsx("code",{className:"sp-code-pill",children:t.code})]})]})]},t.brand))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:sa.map((t,r)=>e.jsxs(w.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(ie,{color:t.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsx("h3",{className:"sp-facility-title",children:t.title}),e.jsx("p",{className:"sp-card-desc",children:t.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(w.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ie,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx(xe,{items:ra})]})}),e.jsx("style",{children:`
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
      `})]})}export{ga as default};
