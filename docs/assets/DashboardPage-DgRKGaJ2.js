import{j as e,m as h}from"./vendor-motion-DHTbcX3O.js";import{r as u,u as ot,L as he}from"./vendor-react-6MXTWAEx.js";import{b as E}from"./index-DzGJmwAp.js";import{o as lt}from"./ozillaProfessionalContent-Bpt1_Dj2.js";import"./vendor-utils-Bub7y9MC.js";E("/assets/ozilla/talwinder.jpg"),E("/assets/ozilla/talwinder.jpg"),E("/assets/ozilla/Imran-Khan.jpg"),E("/assets/ozilla/Imran-Khan.jpg"),E("/assets/ozilla/Bohemia.jpg"),E("/assets/ozilla/Bohemia.jpg"),E("/assets/ozilla/hassan-raheem.jpg"),E("/assets/ozilla/hassan-raheem.jpg");const Pe=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:E("/assets/ozilla/talwinder.jpg"),image:E("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:E("/assets/ozilla/Imran-Khan.jpg"),image:E("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:E("/assets/ozilla/Bohemia.jpg"),image:E("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:E("/assets/ozilla/hassan-raheem.jpg"),image:E("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],Re=1.28,Te=.78;function le(r,n,t){return Math.min(t,Math.max(n,r))}function ze(r){if(!r)return null;if(typeof r=="string")return r||null;const n=r.src||r.image;return typeof n=="string"&&n?n:null}function ct(r){return ze(r&&typeof r=="object"&&(r.image||r.src)||r)}function pt(r){if(r&&typeof r=="object"&&"offsetY"in r){const n=r.offsetY;return typeof n=="number"&&isFinite(n)?n:0}return 0}function dt({items:r=Pe,images:n,slideWidth:t=320,slideHeight:i=440,spacing:l=2.4,direction:y="right",smoothness:w=8.5,radius:I=24,dim:v=5,background:P="transparent",sensitivity:D=5,autoPlay:L=!1,autoPlayInterval:B=3500,style:H,onItemClick:U}){const O=u.useRef(null),_=u.useRef([]),k=u.useRef(0),V=u.useRef(0),[T,z]=u.useState(0),[ie,re]=u.useState(!1),[f,p]=u.useState(0),a=r&&r.length>0?r:n&&n.length>0?n:Pe,o=u.useMemo(()=>a.map((s,c)=>({...s,src:ct(s),offsetY:pt(s),name:s.name||`Artist ${c+1}`,genre:s.genre||"Live Performer",stage:s.stage||"Ozilla Arena",bpm:s.bpm||"128 BPM",vibe:s.vibe||"Festival Energy",isHeadliner:!!s.isHeadliner})),[a]),x=T>0&&T<640?Math.min(t,250):T<1024?Math.min(t,290):t,b=T>0&&T<640?Math.round(x*1.36):i,M=x+le(l,0,10)*18,N=.15-le(w,0,10)/10*.11,K=le(v,0,10)/10*.75,F=.4+le(D,0,10)/10*1.1,G=.6+le(D,0,10)/10*1.6,Q=y==="left",W=u.useRef({count:o.length,step:M,slideWidth:x,width:T,ease:N,maxScale:Re,minScale:Te,dim:K,loop:!1,flip:Q});W.current={count:o.length,step:M,slideWidth:x,width:T,ease:N,maxScale:Re,minScale:Te,dim:K,loop:!1,flip:Q};const C=u.useRef({wheelMultiplier:F,dragMultiplier:G,flip:Q});C.current={wheelMultiplier:F,dragMultiplier:G,flip:Q},u.useEffect(()=>{const s=O.current;if(!s)return;const c=new ResizeObserver(m=>{m[0]&&z(m[0].contentRect.width)});return c.observe(s),z(s.getBoundingClientRect().width),()=>c.disconnect()},[]),u.useEffect(()=>{_.current.length=o.length},[o.length]),u.useEffect(()=>{if(!L||ie||o.length<=1)return;const s=setInterval(()=>{p(c=>{const m=(c+1)%o.length;return k.current=m*M,m})},B);return()=>clearInterval(s)},[L,ie,o.length,M,B]),u.useEffect(()=>{let s=0,c=0;const m=S=>{s=requestAnimationFrame(m);const d=W.current,$=c?Math.min((S-c)/1e3,.1):1/60;if(c=S,!d.count||d.step<=0||d.width<=0)return;const R=(d.count-1)*d.step;k.current=le(k.current,0,R);const Z=1-Math.pow(1-d.ease,$*60);V.current+=(k.current-V.current)*Z;const ee=Math.round(V.current/d.step);ee>=0&&ee<d.count&&p(ee);const fe=(d.width-d.slideWidth)/2,ue=d.width/2;for(let ne=0;ne<d.count;ne+=1){const te=_.current[ne];if(!te)continue;const j=ne*d.step-V.current+fe,A=j+d.slideWidth/2-ue;let g,Y;A>0?(g=Math.min(d.maxScale,1+A/d.width*.45),Y=(g-1)*d.slideWidth*.35):(g=Math.max(d.minScale,1+A/d.width*.5),Y=0);const ce=d.flip?d.width-d.slideWidth-(j+Y):j+Y;if(te.style.transform=`translate3d(${ce}px, -50%, 0) scale(${g})`,d.dim>0&&g<1){const J=(1-g)/Math.max(.001,1-d.minScale);te.style.filter=`brightness(${Math.max(.35,1-J*d.dim)})`}else te.style.filter="none"}};return s=requestAnimationFrame(m),()=>cancelAnimationFrame(s)},[]),u.useEffect(()=>{const s=O.current;if(!s)return;const c=m=>{m.preventDefault();const S=Math.abs(m.deltaX)>Math.abs(m.deltaY)?m.deltaX:m.deltaY;k.current+=S*C.current.wheelMultiplier};return s.addEventListener("wheel",c,{passive:!1}),()=>s.removeEventListener("wheel",c)},[]),u.useEffect(()=>{const s=O.current;if(!s)return;let c=null,m=0;const S=R=>{if(c===null){c=R.pointerId,m=R.clientX;try{s.setPointerCapture(R.pointerId)}catch{}}},d=R=>{if(c!==R.pointerId)return;const Z=R.clientX-m;m=R.clientX,k.current+=(C.current.flip?Z:-Z)*C.current.dragMultiplier},$=R=>{if(c===R.pointerId){c=null;try{s.hasPointerCapture(R.pointerId)&&s.releasePointerCapture(R.pointerId)}catch{}}};return s.addEventListener("pointerdown",S),s.addEventListener("pointermove",d),s.addEventListener("pointerup",$),s.addEventListener("pointercancel",$),()=>{s.removeEventListener("pointerdown",S),s.removeEventListener("pointermove",d),s.removeEventListener("pointerup",$),s.removeEventListener("pointercancel",$)}},[]);const X=u.useCallback(s=>{const c=le(s,0,o.length-1);k.current=c*M,p(c)},[o.length,M]),se=u.useCallback(s=>{const c=le(f+(s==="left"?-1:1),0,o.length-1);X(c)},[f,X,o.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>re(!0),onMouseLeave:()=>re(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:o.map((s,c)=>{const m=c===f;return e.jsx("button",{type:"button",onClick:()=>X(c),style:{padding:"6px 14px",borderRadius:"999px",border:m?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:m?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:m?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:m?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:m?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:s.name},s.name)})}),e.jsx("div",{ref:O,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${b+50}px`,overflow:"hidden",background:P,cursor:"grab",touchAction:"pan-y",opacity:T>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...H},children:o.map((s,c)=>{const m=s.isHeadliner,S=c===f;return e.jsxs("div",{ref:d=>{_.current[c]=d},onClick:()=>{X(c),U&&U(s,c)},style:{position:"absolute",top:"50%",left:0,width:`${x}px`,height:`${b}px`,borderRadius:`${I}px`,overflow:"hidden",background:"#130c0a",border:S?"1.5px solid rgba(255, 138, 61, 0.85)":m?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:S?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[s.src?e.jsx("img",{src:s.src,alt:s.name,draggable:!1,onError:d=>{d.currentTarget.src=E("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${s.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[m?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:s.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:s.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:s.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",s.bpm]}),e.jsxs("span",{children:["♫ ",s.vibe]})]})]})]},s.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>se("left"),disabled:f===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:f===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:f===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:f===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:f===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:s=>{f>0&&(s.currentTarget.style.transform="scale(1.1)",s.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:s=>{s.currentTarget.style.transform="scale(1)",s.currentTarget.style.borderColor=f===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:o.map((s,c)=>e.jsx("span",{onClick:()=>X(c),style:{width:c===f?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:c===f?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},c))}),e.jsx("button",{type:"button",onClick:()=>se("right"),disabled:f===o.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:f===o.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:f===o.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:f===o.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:f===o.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:s=>{f<o.length-1&&(s.currentTarget.style.transform="scale(1.1)",s.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:s=>{s.currentTarget.style.transform="scale(1)",s.currentTarget.style.borderColor=f===o.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const de={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},mt=2,Ge=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],ft=Math.max(...Ge.map(r=>r.blur)),Fe=36;function we(r,n){const t=Math.max(0,Math.min(1,n));if(typeof r!="string")return`rgba(0,0,0,${t})`;const i=r.trim(),l=i.match(/^#([0-9a-f]{3,8})$/i);if(l){let w=l[1];(w.length===3||w.length===4)&&(w=w.split("").map(v=>v+v).join(""));const I=parseInt(w.slice(0,6),16);return Number.isFinite(I)?`rgba(${I>>16&255},${I>>8&255},${I&255},${t})`:`rgba(0,0,0,${t})`}const y=i.match(/^rgba?\(([^)]+)\)/i);if(y){const w=y[1].split(",").map(I=>parseFloat(I));if(w.length>=3&&w.slice(0,3).every(Number.isFinite))return`rgba(${w[0]},${w[1]},${w[2]},${t})`}return`rgba(0,0,0,${t})`}function gt(r,n,t){const i=(r%1+1)%1*2*(n+t);return i<n?[i,0]:i<n+t?[n,i-n]:i<n*2+t?[n-(i-n-t),t]:[0,t-(i-n*2-t)]}function Me(r,n,t){const i=2*(n+t),l=[0,n/i,(n+t)/i,(n*2+t)/i];return Math.floor(r/4)+l[(r%4+4)%4]}function ht(r,n,t){const[i,l]=gt(r,n,t);return Math.atan2(i-n/2,t/2-l)*180/Math.PI}const Ce=24,ut=.015;function je(r,n,t,i,l){const y=t>0?t:100,w=i>0?i:100,I=Math.max(0,Math.min(100,n)),v=Math.max(ut,I/100*.5),P=I/100,D=[];let L=0,B=0,H=0;for(let O=0;O<=Ce;O++){const _=O/Ce,k=ht(r+(_-.5)*v,y,w);if(O===0)L=k;else{let z=k-B;for(;z>180;)z-=360;for(;z<-180;)z+=360;H+=z}B=k;const V=Math.abs(_-.5)*2,T=P>=1||V<=P?1:1-(V-P)/(1-P);D.push(`${we(l,T*T*(3-2*T))} ${H.toFixed(2)}deg`)}const U=H.toFixed(2);return D.push(`${we(l,0)} ${U}deg`),D.push(`${we(l,0)} 360deg`),`conic-gradient(from ${L.toFixed(2)}deg at 50% 50%, ${D.join(", ")})`}const De=30,bt=4,Le=3,xt=.35,yt=[.72,.16,.18,1.05],vt=[.65,0,.35,1];function Ue(r){const[n,t,i,l]=r;if(n===t&&i===l)return w=>w;const y=(w,I,v)=>{const P=1-v;return 3*P*P*v*w+3*P*v*v*I+v*v*v};return w=>{const I=Math.max(0,Math.min(1,w));let v=I;for(let P=0;P<8;P++){const D=y(n,i,v)-I,L=1-v,B=3*L*L*n+6*L*v*(i-n)+3*v*v*(1-i);if(Math.abs(B)<1e-6)break;v-=D/B,v=Math.max(0,Math.min(1,v))}return y(t,l,v)}}const wt=Ue(yt),jt=Ue(vt),Be={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function ae({color:r=de.color,rounded:n=de.rounded,thickness:t=de.thickness,borderSize:i=de.borderSize,glow:l=de.glow,movement:y=de.movement,speed:w=de.speed,style:I,className:v=""}){const P=u.useRef(null),D=u.useRef(null),L=u.useRef({speed:w,movement:y,borderSize:i,color:r});L.current={speed:w,movement:y,borderSize:i,color:r};const B=u.useRef(null),H=u.useRef({w:0,h:0}),[U,O]=u.useState({w:0,h:0});u.useEffect(()=>{const p=B.current;if(!p||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>{const o=p.getBoundingClientRect();o.width===H.current.w&&o.height===H.current.h||(H.current={w:o.width,h:o.height},O(H.current))});return a.observe(p),()=>a.disconnect()},[]),u.useEffect(()=>{const p=B.current;let a=!0,o=null;typeof IntersectionObserver<"u"&&p&&(o=new IntersectionObserver(G=>{G[0]&&(a=G[0].isIntersecting)},{rootMargin:"100px"}),o.observe(p));let x=0,b=performance.now(),M=0,N=0,K=0;const F=G=>{if(x=requestAnimationFrame(F),!a||typeof document<"u"&&document.hidden){b=G;return}const Q=Math.min(.05,Math.max(0,(G-b)/1e3));b=G;const W=L.current,C=Math.max(0,Math.min(20,W.speed));if(C>0){const X=W.movement==="step",se=X?Le+(xt-Le)*(C-1)/19:(De+(bt-De)*(C-1)/19)/4;for(K+=Q/se;K>=1;)K-=1,N+=1;const s=X?wt(Math.min(1,K*2)):jt(K),{w:c,h:m}=H.current,S=c>0?c:100,d=m>0?m:100,$=Me(N,S,d),R=Me(N+1,S,d);M=$+(R-$)*s;const Z=P.current;Z&&Z.style.setProperty("--arc",je(M,W.borderSize,c,m,W.color));const ee=D.current;ee&&ee.style.setProperty("--arc",je(M+.5,W.borderSize,c,m,W.color))}};return x=requestAnimationFrame(F),()=>{cancelAnimationFrame(x),o&&o.disconnect()}},[]);const _=Math.max(1,Math.min(10,t)),k=Math.max(0,Math.min(100,n))/100*(Math.min(U.w||200,U.h||200)/2),V=Math.max(0,Math.min(100,l))/100,T=p=>_+V*Fe*p,z=10+Fe+ft*2,ie=(p,a=0)=>e.jsx("div",{style:{position:"absolute",inset:a-p,boxSizing:"border-box",padding:p,borderRadius:k>0?k+p:0,background:"var(--arc)",...Be}}),re=(p,a,o,x)=>e.jsx("div",{style:{position:"absolute",inset:-z,boxSizing:"border-box",padding:z,borderRadius:k>0?k+z:0,opacity:x,mixBlendMode:"plus-lighter",filter:o?`blur(${o.toFixed(1)}px)`:"none",WebkitFilter:o?`blur(${o.toFixed(1)}px)`:"none",...Be},children:ie(a,z)},p),f=(p,a)=>e.jsxs("div",{ref:a,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":je(p,i,U.w,U.h,r)},children:[V>0&&Ge.map((o,x)=>re(`glow-${x}`,T(o.reach),o.blur,o.opacity)),Array.from({length:mt}).map((o,x)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:ie(_)},`edge-${x}`))]});return e.jsxs("div",{ref:B,className:`neon-border-overlay ${v}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:k,pointerEvents:"none",zIndex:1,...I},children:[f(0,P),f(.5,D)]})}const Nt=1.5,St=42,At=Math.PI*2,It=300,Et=300,kt=2,Pt=5e3,Rt=3.2,Tt=.05,zt=3,Ft=1.35,Mt=.08,Ct=.5,Dt=.24,Lt=.35,Bt=At*.75,Ot=2,_e=3,xe=720,Ht=`
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
    float ang = aA.x * ${Bt.toFixed(6)} + aA.y * TAU * ${Ot.toFixed(1)};
    float rN = mix(${Lt.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${Tt.toFixed(3)} * tau);

    float tp   = ${Mt.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${Ct.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${Ft.toFixed(2)});

    float L  = ${zt.toFixed(1)};
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
`,Vt=`
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
`,Gt=`
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
    float halfW  = uThick * 0.5 * ${_e.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,Ut=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${_e.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function Oe(r){if(!r)return[1,1,1,1];let n=String(r).trim();const t=n.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);t&&(n=t[1].trim());const i=n.match(/^rgba?\(([^)]+)\)$/i);if(i){const y=i[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(y[0]||0)/255,(y[1]||0)/255,(y[2]||0)/255,y.length>3&&isFinite(y[3])?y[3]:1]}let l=n.replace("#","");return(l.length===3||l.length===4)&&(l=l.split("").map(y=>y+y).join("")),l.length<6?[1,1,1,1]:[parseInt(l.slice(0,2),16)/255,parseInt(l.slice(2,4),16)/255,parseInt(l.slice(4,6),16)/255,l.length>=8?parseInt(l.slice(6,8),16)/255:1]}function _t(r){return()=>{r|=0,r=r+1831565813|0;let n=Math.imul(r^r>>>15,1|r);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function He(r,n,t){const i=r.createShader(n);return i?(r.shaderSource(i,t),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)||console.warn("VortexDustFall shader:",r.getShaderInfoLog(i)),i):null}function Ve(r,n,t){const i=r.createProgram();if(!i)return null;const l=He(r,r.VERTEX_SHADER,n),y=He(r,r.FRAGMENT_SHADER,t);return!l||!y?null:(r.attachShader(i,l),r.attachShader(i,y),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||console.warn("VortexDustFall link:",r.getProgramInfoLog(i)),i)}const Wt={radius:195,thickness:16},$t={height:165,spin:38,spray:0},Yt={scatter:280,blur:0},qt={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function Kt({background:r="transparent",baseColor:n="#FFA733",accentColor:t="#FFE082",density:i=145,dotSize:l=130,speed:y=48,distance:w=1450,tilt:I=7,ring:v={},fall:P={},field:D={},hover:L={},style:B={},className:H="",children:U}){const O={...Wt,...v},_={...$t,...P},k={...Yt,...D},V={...qt,...L},T=u.useRef(null),z=u.useRef(null),ie=u.useRef({x:0,y:0,active:0}),re=u.useRef({baseColor:n,accentColor:t,density:i,dotSize:l,speed:y,distance:w,tilt:I,ring:O,fall:_,field:k,hover:V});return re.current={baseColor:n,accentColor:t,density:i,dotSize:l,speed:y,distance:w,tilt:I,ring:O,fall:_,field:k,hover:V},u.useEffect(()=>{const f=T.current,p=z.current;if(!f||!p)return;const a=p.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!a)return;const o=Ve(a,Ht,Vt),x=Ve(a,Gt,Ut);if(!o||!x)return;const b=(j,A)=>a.getUniformLocation(j,A),M={a:a.getAttribLocation(o,"aA"),b:a.getAttribLocation(o,"aB")},N={res:b(o,"uRes"),focal:b(o,"uFocal"),phase:b(o,"uPhase"),radius:b(o,"uRadius"),rise:b(o,"uRise"),fallD:b(o,"uFall"),spinTurns:b(o,"uSpinTurns"),scatter:b(o,"uScatter"),dotWorld:b(o,"uDotWorld"),blurK:b(o,"uBlurK"),camDist:b(o,"uCamDist"),tilt:b(o,"uTilt"),yPx:b(o,"uYPx"),alpha:b(o,"uAlpha"),color:b(o,"uColor")},K={ring:a.getAttribLocation(x,"aRing")},F={res:b(x,"uRes"),focal:b(x,"uFocal"),radius:b(x,"uRadius"),camDist:b(x,"uCamDist"),tilt:b(x,"uTilt"),yPx:b(x,"uYPx"),thick:b(x,"uThick"),seg:b(x,"uSeg"),color:b(x,"uColor"),alpha:b(x,"uAlpha")},G=a.createBuffer(),Q=a.createBuffer();let W=-1,C=0;const X=j=>{const A=p.clientWidth||f.clientWidth||(typeof window<"u"?window.innerWidth:1200),g=A<768,Y=A>=768&&A<1024,ce=g?1800:Y?8500:Math.round(j*It);C=Math.max(1e3,ce);const J=new Float32Array(C*4),pe=new Float32Array(C*2),oe=_t(85840071);for(let q=0;q<C;q++)J[q*4]=oe(),J[q*4+1]=oe(),J[q*4+2]=oe(),J[q*4+3]=oe(),pe[q*2]=oe(),pe[q*2+1]=oe();a.bindBuffer(a.ARRAY_BUFFER,G),a.bufferData(a.ARRAY_BUFFER,J,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,Q),a.bufferData(a.ARRAY_BUFFER,pe,a.STATIC_DRAW),W=j},se=a.createBuffer(),s=(xe+1)*2;{const j=new Float32Array(s*2);for(let A=0;A<=xe;A++){const g=A/xe;j[A*4]=g,j[A*4+1]=-1,j[A*4+2]=g,j[A*4+3]=1}a.bindBuffer(a.ARRAY_BUFFER,se),a.bufferData(a.ARRAY_BUFFER,j,a.STATIC_DRAW)}a.disable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE);let c=!0,m=null;typeof IntersectionObserver<"u"&&f&&(m=new IntersectionObserver(j=>{j[0]&&(c=j[0].isIntersecting)},{rootMargin:"120px"}),m.observe(f));let S=1,d=0;const $=()=>{S=Math.min(window.devicePixelRatio||1,Nt);const j=p.clientWidth||f.clientWidth||1,A=p.clientHeight||f.clientHeight||1,g=Math.max(1,Math.round(j*S)),Y=Math.max(1,Math.round(A*S));(p.width!==g||p.height!==Y)&&(p.width=g,p.height=Y),a.viewport(0,0,g,Y),Math.abs(d-j)>50&&(d=j,X(re.current.density))};$();const R=new ResizeObserver($);R.observe(p);let Z=0,ee=performance.now(),fe=0,ue=0,ne=0,te=0;const ye=j=>{if(fe=requestAnimationFrame(ye),!c||typeof document<"u"&&document.hidden){ee=j;return}const A=Math.min((j-ee)/1e3,.05);ee=j;const g=re.current;if(g.density!==W&&X(g.density),C===0)return;const Y=Math.max(.05,g.hover.transition?.duration??.6),ce=1-Math.exp(-A/Y),J=ie.current;ue+=(J.x-ue)*ce,ne+=(J.y-ne)*ce,te+=(J.active-te)*ce;const pe=(g.hover.amount||100)/100,oe=1+te*pe*.6;Z=(Z+A*(g.speed/50*oe)/Rt)%1;const q=p.width,ge=p.height,ve=p.clientWidth||f.clientWidth||1200,me=ve<768,We=ve>=768&&ve<1024,Ne=ge/(2*Math.tan(St/2*Math.PI/180)),Se=q/Math.max(ge,1),$e=Se<1?Math.max(.32,Se/1.4):We?.85:1,be=Et*(g.ring.radius/100)*$e,Ae=be*(me?1.1:g.fall.height/100),Ye=Ae*(g.fall.spray/400),Ie=ge*(me?.22:Dt),qe=g.fall.spin/100*1.5,Ke=be*(g.field.scatter/100)*(me?.08:.15),Xe=kt*(g.dotSize/100)*(me?.65:1),Ze=Pt*(g.field.blur/100),Je=me?Math.min(g.ring.thickness*S,9*S):g.ring.thickness*S,Ee=g.tilt*Math.PI/180+ne*pe*te*(10*Math.PI/180),ke=(me?g.distance*1.05:g.distance)-te*pe*150,[Qe,et,tt,at]=Oe(g.baseColor),[it,rt,st,nt]=Oe(g.accentColor);a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(o),a.uniform2f(N.res,q,ge),a.uniform1f(N.focal,Ne),a.uniform1f(N.phase,Z),a.uniform1f(N.radius,be),a.uniform1f(N.rise,Ye),a.uniform1f(N.fallD,Ae),a.uniform1f(N.spinTurns,qe),a.uniform1f(N.scatter,Ke),a.uniform1f(N.dotWorld,Xe*S),a.uniform1f(N.blurK,Ze*S),a.uniform1f(N.camDist,ke),a.uniform1f(N.tilt,Ee),a.uniform1f(N.yPx,Ie),a.uniform1f(N.alpha,at),a.uniform3f(N.color,Qe,et,tt),a.bindBuffer(a.ARRAY_BUFFER,G),a.enableVertexAttribArray(M.a),a.vertexAttribPointer(M.a,4,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,Q),a.enableVertexAttribArray(M.b),a.vertexAttribPointer(M.b,2,a.FLOAT,!1,0,0),a.drawArrays(a.POINTS,0,C),a.useProgram(x),a.uniform2f(F.res,q,ge),a.uniform1f(F.focal,Ne),a.uniform1f(F.radius,be),a.uniform1f(F.camDist,ke),a.uniform1f(F.tilt,Ee),a.uniform1f(F.yPx,Ie),a.uniform1f(F.thick,Je),a.uniform1f(F.seg,xe),a.uniform3f(F.color,it,rt,st),a.uniform1f(F.alpha,nt),a.bindBuffer(a.ARRAY_BUFFER,se),a.enableVertexAttribArray(K.ring),a.vertexAttribPointer(K.ring,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,s)};return fe=requestAnimationFrame(ye),()=>{cancelAnimationFrame(fe),R.disconnect(),m&&m.disconnect(),a.deleteBuffer(G),a.deleteBuffer(Q),a.deleteBuffer(se),a.deleteProgram(o),a.deleteProgram(x)}},[]),e.jsxs("div",{ref:T,className:`vortex-dust-container ${H}`,onPointerMove:f=>{const p=f.currentTarget.getBoundingClientRect();p.width<=0||p.height<=0||(ie.current={x:(f.clientX-p.left)/p.width*2-1,y:-((f.clientY-p.top)/p.height*2-1),active:1})},onPointerLeave:()=>{ie.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:r,...B},children:[e.jsx("canvas",{ref:z,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),U&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:U})]})}const Xt=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:E("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:E("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:E("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:E("/assets/ozilla/hassan-raheem.jpg")}],Zt=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],Jt=[{badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats."},{badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists."},{badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges."},{badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates."}],Qt=[{name:"Ozilla Festival 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],ea=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],ta=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"Ozilla Festival 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"Ozilla Festival 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],aa=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],ia=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],ra=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],sa=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function na(r){const[n,t]=u.useState(()=>{const i=Math.max(new Date(r)-Date.now(),0);return{days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)}});return u.useEffect(()=>{const i=setInterval(()=>{const l=Math.max(new Date(r)-Date.now(),0);t({days:Math.floor(l/864e5),hours:Math.floor(l/36e5%24),minutes:Math.floor(l/6e4%60),seconds:Math.floor(l/1e3%60)})},1e3);return()=>clearInterval(i)},[r]),n}function ma(){const r=ot(),n=na("2026-11-01T18:00:00+05:00");return u.useEffect(()=>{const t=r.hash?.replace("#","");t?setTimeout(()=>{const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[r.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx(Kt,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(h.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(h.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsxs(h.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:[e.jsx("strong",{className:"sp-hero-sub-highlight",children:"Pakistan's Flagship Music & Cultural Phenomenon."}),e.jsx("span",{className:"sp-hero-sub-detail",children:"4 Electrified Mega Stages · Headline Celebrities · High-Octane Sound Under the Lahore Night Sky."})]}),e.jsxs(h.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"DATE"}),e.jsx("strong",{children:"NOV 01, 2026"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"CITY"}),e.jsx("strong",{children:"LAHORE, PK"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"PRODUCTION"}),e.jsx("strong",{children:"4 MEGA STAGES"})]}),e.jsxs("div",{className:"sp-hero-meta-pill sp-meta-featured",children:[e.jsx("span",{className:"sp-meta-dot sp-dot-gold"}),e.jsx("span",{className:"sp-meta-label",children:"PASSES"}),e.jsx("strong",{children:"INSTANT QR PASS"})]})]}),e.jsxs(h.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(h.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(h.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(he,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:sa.map((t,i)=>e.jsxs(h.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:i*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:t.value}),e.jsx("span",{className:"stat-label",children:t.label}),e.jsx("small",{className:"stat-sub",children:t.sub})]},t.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(h.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(dt,{items:Xt,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(h.div,{className:"sp-countdown",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",n.days],["Hours",n.hours],["Minutes",n.minutes],["Seconds",n.seconds]].map(([t,i])=>e.jsxs(h.div,{className:"sp-countdown-card",whileHover:{scale:1.06,y:-3},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(i).padStart(2,"0")}),e.jsx("span",{children:t})]},t))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:Zt.map((t,i)=>e.jsxs(h.div,{className:`sp-pricing-card ${t.isFeatured?"sp-featured-pricing":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-8},children:[t.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:t.badge}),e.jsx("h3",{children:t.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:t.price})}),e.jsx("p",{className:"sp-pricing-sub",children:t.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(he,{to:t.ctaLink,className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:t.ctaText})]},t.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:Jt.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-pillar-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-6,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-top",children:e.jsx("span",{className:"sp-pillar-badge",children:t.badge})}),e.jsx("h3",{className:"sp-pillar-title",children:t.title}),e.jsx("p",{className:"sp-pillar-desc",children:t.desc}),e.jsx("div",{className:"sp-pillar-glow-line"})]},t.title))}),e.jsxs(h.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(ae,{color:"#ff7a29",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-vibe-eyebrow",children:"FESTIVAL HIGHLIGHTS"}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(h.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(h.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(he,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0},{text:"100kW Laser & Sound",isMain:!0},{text:"20+ Star Performers",isMain:!0},{text:"Verified QR Instant Passes",isMain:!0},{text:"10,000+ Music Lovers",isMain:!1},{text:"50+ Food & Beats Stalls",isMain:!1},{text:"VIP Artist Lounge & Deck",isMain:!1},{text:"Exclusive Partner Discounts",isMain:!1}].map((t,i)=>e.jsx(h.div,{className:`sp-vibe-tag ${t.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:i*.05},whileHover:{scale:1.04,x:4},whileTap:{scale:.98},children:t.text},t.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:ea.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(ae,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-pill-badge",children:t.status})]}),e.jsx("p",{className:"sp-card-desc",children:t.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:Qt.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.12},whileHover:{y:-6},children:[e.jsx(ae,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:t.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:t.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",t.date," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:t.description}),e.jsx(he,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},t.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(ae,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:ta.map((t,i)=>e.jsxs(h.div,{className:"sp-timeline-item",initial:{opacity:0,x:-28,y:20},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.45,delay:i*.08},children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:t.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:t.date})}),e.jsx("span",{className:"sp-timeline-badge",children:t.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:t.name}),e.jsx("p",{className:"sp-card-desc",children:t.description}),e.jsx("div",{className:"sp-tag-cloud",children:t.highlights.map(l=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:l},l))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:t.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},t.name))})]})}),e.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),e.jsx("div",{className:"sp-restaurants-grid",children:lt.restaurants.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-restaurant-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-5,scale:1.01},children:[e.jsx(ae,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:t.name}),e.jsx("span",{className:"sp-discount-pill",children:t.discount})]}),e.jsxs("p",{className:"sp-meta-text",children:[t.cuisine," · ",t.location]}),e.jsx("p",{className:"sp-card-desc",children:t.offer}),e.jsxs("div",{className:"sp-code-box",children:[e.jsx("span",{children:"Promo Code:"}),e.jsx("code",{children:t.code})]})]})]},t.name))})]})}),e.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header sp-voucher-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ae,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]})]}),e.jsx("div",{className:"sp-discounts-grid",children:ra.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-voucher-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,scale:.92,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.08},whileHover:{y:-6,scale:1.02},children:[e.jsx(ae,{color:"#ff9e42",rounded:22,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:t.category}),e.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:t.brand}),e.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:t.desc}),e.jsxs("div",{className:"sp-discount-footer",children:[e.jsx("span",{className:"sp-big-discount",children:t.discount}),e.jsx("code",{className:"sp-code-pill",children:t.code})]})]})]},t.brand))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ae,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:ia.map((t,i)=>e.jsxs(h.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(ae,{color:t.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsx("h3",{className:"sp-facility-title",children:t.title}),e.jsx("p",{className:"sp-card-desc",children:t.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(h.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(ae,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:aa.map((t,i)=>e.jsxs(h.div,{className:`sp-glass-card sp-sponsor-card ${t.isFeatured?"sp-sponsor-featured":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:i*.1},whileHover:{y:-10,scale:1.02},children:[t.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:t.accent,borderColor:`${t.accent}44`,background:`${t.accent}14`},children:t.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:t.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:t.accent},children:t.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:t.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:t.perks.map(l=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:t.accent},children:"✓"}),e.jsx("span",{children:l})]},l))}),e.jsx(h.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(he,{to:"/tickets",className:t.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:t.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${t.accent}, transparent)`}})]},t.tier))})]})}),e.jsx("style",{children:`
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
          max-width: 820px;
          font-size: clamp(1.06rem, 1.85vw, 1.28rem);
          color: rgba(255, 255, 255, 0.92) !important;
          line-height: 1.68;
          margin-bottom: 2.2rem;
          font-weight: 400;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 1), 0 1px 6px rgba(0, 0, 0, 0.95);
        }

        .sp-hero-sub-highlight {
          font-size: clamp(1.15rem, 2.1vw, 1.45rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          background: linear-gradient(120deg, #ffffff 0%, #ffd36a 60%, #ff8a3d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sp-hero-sub-detail {
          font-size: clamp(0.92rem, 1.5vw, 1.06rem);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          max-width: 720px;
        }

        .sp-hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin: 0 auto 2.8rem;
          max-width: 880px;
        }

        .sp-hero-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          background: rgba(18, 10, 6, 0.75) !important;
          border: 1px solid rgba(255, 189, 89, 0.3) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .sp-hero-meta-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 189, 89, 0.65) !important;
          box-shadow: 0 12px 35px rgba(255, 90, 31, 0.35);
        }

        .sp-meta-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 10px #ff5a1f, 0 0 4px #ffbd59;
        }

        .sp-dot-gold {
          background: #ffbd59;
          box-shadow: 0 0 10px #ffbd59;
        }

        .sp-meta-label {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255, 189, 89, 0.9);
          text-transform: uppercase;
        }

        .sp-hero-meta-pill strong {
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .sp-meta-featured {
          border-color: rgba(255, 189, 89, 0.55) !important;
          background: rgba(35, 18, 10, 0.82) !important;
          box-shadow: 0 8px 30px rgba(255, 90, 31, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .sp-hero-meta-strip {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
            width: 100%;
            max-width: 380px;
            margin: 0 auto 2.4rem;
          }
          .sp-hero-meta-pill {
            padding: 0.5rem 0.65rem;
            justify-content: center;
            gap: 0.45rem;
          }
          .sp-hero-meta-pill strong {
            font-size: 0.78rem;
            white-space: nowrap;
          }
          .sp-meta-label {
            font-size: 0.62rem;
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
      `})]})}export{ma as default};
