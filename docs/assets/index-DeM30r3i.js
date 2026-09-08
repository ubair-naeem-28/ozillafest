const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-DaTkNxtF.js","assets/vendor-motion-DHTbcX3O.js","assets/vendor-react-6MXTWAEx.js","assets/googleAuth.util-sbKcTwTI.js","assets/vendor-utils-Bub7y9MC.js","assets/RegisterPage-Cc09A8Gf.js","assets/GoogleAuthCallbackPage-DYs6knhH.js","assets/DashboardPage-MxGP6F6k.js","assets/ozillaProfessionalContent-CNw1F_eZ.js","assets/UserDashboardPage-D66YQ0GC.js","assets/useTicket-DFiNpzkS.js","assets/ticketService-BUyOx3V1.js","assets/PageHeader-DJkV4_O-.js","assets/formatDate.util-wEQv7dlP.js","assets/TicketPortalPage-FgnOdoPR.js","assets/AlertMessage-BVQu3q6F.js","assets/MyTicketsPage-6_RaXNom.js","assets/GeneratedTicketCard-CRSYxZvM.js","assets/TicketViewPage-Bk2-b3lq.js","assets/TicketVerificationPage-NGjmIWpW.js","assets/AdminDashboardPage-4PxVGmk1.js","assets/AdminTicketReviewPage-CbRa2ghh.js","assets/HotelsPage-BXTl3Xw8.js","assets/FestivalSchedulePage-C-fwl41C.js","assets/LegalPage-0v422c6k.js","assets/NotFound-DvQu_5Ky.js"])))=>i.map(i=>d[i]);
var Ct=Object.defineProperty;var Dt=(t,r,s)=>r in t?Ct(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;var bt=(t,r,s)=>Dt(t,typeof r!="symbol"?r+"":r,s);import{j as e,u as Rt,m as ht,a as vt,b as Ut,A as Bt}from"./vendor-motion-DHTbcX3O.js";import{a as zt,r as v,R as ze,u as Ve,N as S,O as Ye,L as F,b as St,c as Vt,d as Yt,e as b,B as $t}from"./vendor-react-6MXTWAEx.js";import{a as Wt}from"./vendor-utils-Bub7y9MC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();var dt={},jt=zt;dt.createRoot=jt.createRoot,dt.hydrateRoot=jt.hydrateRoot;function Ht(t={}){const{nonce:r,locale:s,onScriptLoadSuccess:a,onScriptLoadError:o}=t,[i,l]=v.useState(!1),c=v.useRef(a);c.current=a;const d=v.useRef(o);return d.current=o,v.useEffect(()=>{const u=document.createElement("script");return u.src="https://accounts.google.com/gsi/client",s&&(u.src+=`?hl=${s}`),u.async=!0,u.defer=!0,u.nonce=r,u.onload=()=>{var h;l(!0),(h=c.current)===null||h===void 0||h.call(c)},u.onerror=()=>{var h;l(!1),(h=d.current)===null||h===void 0||h.call(d)},document.body.appendChild(u),()=>{document.body.removeChild(u)}},[r]),i}const Gt=v.createContext(null);function Xt({clientId:t,nonce:r,locale:s,onScriptLoadSuccess:a,onScriptLoadError:o,children:i}){const l=Ht({nonce:r,onScriptLoadSuccess:a,onScriptLoadError:o,locale:s}),c=v.useMemo(()=>({locale:s,clientId:t,scriptLoadedSuccessfully:l}),[t,l]);return ze.createElement(Gt.Provider,{value:c},i)}const at="prism_token",te={getToken(){return localStorage.getItem(at)},setToken(t){localStorage.setItem(at,t)},removeToken(){localStorage.removeItem(at)}},qt="http://localhost:5000/api",V=Wt.create({baseURL:qt,headers:{"Content-Type":"application/json"}});V.interceptors.request.use(t=>{const r=te.getToken();return r&&(t.headers.Authorization=`Bearer ${r}`),t},t=>Promise.reject(t));V.interceptors.response.use(t=>t,t=>(t.response?.status===401&&te.removeToken(),Promise.reject(t)));const K={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/send-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},Lt="ozilla_local_users";let Le=!1;function I(t){return String(t||"").toLowerCase().trim()}function le(t){return String(t||"").trim()}function ie(){try{const t=localStorage.getItem(Lt),r=t?JSON.parse(t):[];return Array.isArray(r)?r:[]}catch{return[]}}function ye(t){localStorage.setItem(Lt,JSON.stringify(t))}function Kt(t){const r={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(r))}`}function ot(t){const r=String(t||"");if(!r)return null;if(r.startsWith("local."))try{return JSON.parse(atob(r.slice(6)))}catch{return null}const s=r.split(".");if(s.length===3)try{return JSON.parse(atob(s[1]))}catch{return null}return null}function Be(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function Ce(t={}){const r=String(t.firstName||"Local").trim()||"Local",s=String(t.lastName||"User").trim()||"User",a=I(t.email||"local@ozillafestival.com"),o=le(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:r,lastName:s,name:`${r} ${s}`.trim(),email:a,phone:o,password:String(t.password||""),role:"user"}}function ut(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function Ge(t){return ut(t)?(Le=!0,!0):!1}function De(t){const r=Be(t);return{token:Kt(r),user:r,mode:"local-fallback"}}const Xe={async login(t){const r=String(t?.email||t?.phone||t?.identifier||"").trim(),s=I(r),a=le(r),o=String(t?.password||"").trim();try{const i=await V.post(K.AUTH.LOGIN,{email:r,password:o});if(i?.data?.token){const l=ie(),c=l.findIndex(u=>I(u.email)===s||le(u.phone)===a),d={id:i.data.user?.id||`user-${Date.now()}`,firstName:i.data.user?.firstName||"",lastName:i.data.user?.lastName||"",name:i.data.user?.name||"",email:i.data.user?.email?I(i.data.user.email):s,phone:i.data.user?.phone?le(i.data.user.phone):a,password:o,role:i.data.user?.role||"user"};return c>=0?(l[c]=d,ye(l)):ye([d,...l]),i.data}return i.data}catch(i){const l=ie(),c=l.find(u=>(I(u.email)===s||le(u.phone)===a)&&u.password===o);if(c)return Le=!0,De(c);const d=l.find(u=>I(u.email)===s||le(u.phone)===a);if(d&&d.password!==o){const u=new Error("Invalid credentials. Please check your password.");throw u.response={status:401,data:{message:"Invalid credentials. Please check your password."}},u}throw i}},async register(t){const r=I(t?.email),s=le(t?.phone),a=String(t?.password||"").trim(),o=ie(),i=o.find(c=>I(c.email)===r),l=o.find(c=>le(c.phone)===s);try{const c=await V.post(K.AUTH.REGISTER,{...t,email:r,phone:s,password:a});if(c?.data?.token){const d=Ce({id:c.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:r,phone:s,password:a}),u=o.filter(h=>I(h.email)!==r&&le(h.phone)!==s);ye([d,...u])}return c.data}catch(c){if(c?.response?.status===409||c?.response?.data?.message)throw c;if(i){const u=new Error("Account already exists with this email. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this email. Please log in."}},u}if(l){const u=new Error("Account already exists with this phone number. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},u}const d=Ce({...t,email:r,phone:s,password:a});return ye([d,...o]),Le=!0,De(d)}},async sendOtp(t){const r=I(t);try{return(await V.post(K.AUTH.SEND_OTP,{email:r})).data}catch(s){if(s?.response?.data?.message)throw s;if(ut(s)){const a=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw a.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},a}throw s}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const r=I(t?.email),s=String(t?.otp||"").trim();try{return(await V.post(K.AUTH.VERIFY_OTP,{email:r,otp:s})).data}catch(a){if(a?.response?.data?.message)throw a;if(ut(a)){const o=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw o.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},o}throw a}},async getCurrentUser(){const t=te.getToken();if(!t){const s=new Error("Unauthorized");throw s.response={status:401,data:{message:"Unauthorized"}},s}const r=ot(t);if(r?.mode==="local-fallback"||String(t||"").startsWith("local.")){const a=ie().find(o=>o.id===r?.sub||I(o.email)===I(r?.email));if(a)return Be(a)}try{return(await V.get(K.AUTH.ME)).data}catch(s){const o=ie().find(i=>i.id===r?.sub||I(i.email)===I(r?.email));if(o)return Be(o);throw s}},async logout(){if(Le)return{message:"Logged out successfully"};try{return(await V.post(K.AUTH.LOGOUT)).data}catch(t){if(Ge(t))return{message:"Logged out successfully"};throw t}},async forgotPassword(t){return(await V.post(K.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await V.post(K.AUTH.RESET_PASSWORD,t)).data},async googleAuth(t,r){if(Le){const a=Ce(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),o=ie();return o.some(i=>i.email===a.email)||ye([a,...o]),De(a)}try{return(await V.post(K.AUTH.GOOGLE,{token:t,profile:r})).data}catch(s){if(Ge(s)){const o=Ce(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return De(o)}throw s}},async googleCodeLogin(t,r="postmessage",s){if(Le){const o=Ce(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=ie();return i.some(l=>l.email===o.email)||ye([o,...i]),De(o)}try{return(await V.post(K.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:r,profile:s})).data}catch(a){if(Ge(a)){const i=Ce(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return De(i)}throw a}},async googleTokenLogin(t,r){return this.googleAuth(t,r)},async updateProfile(t){if(Le){const r=te.getToken(),s=ot(r),a=ie(),o=a.findIndex(c=>c.id===s?.sub||c.email===s?.email);if(o===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const i=a[o],l={...i,firstName:typeof t?.firstName=="string"?t.firstName.trim():i.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():i.lastName,phone:typeof t?.phone=="string"?t.phone.trim():i.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||i.name,a[o]=l,ye(a),{message:"Profile updated successfully",user:Be(l)}}try{return(await V.put(K.AUTH.PROFILE,t)).data}catch(r){if(Ge(r)){const s=te.getToken(),a=ot(s),o=ie(),i=o.findIndex(d=>d.id===a?.sub||d.email===a?.email);if(i===-1){const d=new Error("Unauthorized");throw d.response={status:401,data:{message:"Unauthorized"}},d}const l=o[i],c={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return c.name=`${c.firstName||""} ${c.lastName||""}`.trim()||l.name,o[i]=c,ye(o),{message:"Profile updated successfully",user:Be(c)}}throw r}}},Pt=v.createContext(null);function Zt({children:t}){const[r,s]=v.useState(null),[a,o]=v.useState(!0);v.useEffect(()=>{i()},[]);const i=async()=>{try{if(te.getToken()){const x=await Xe.getCurrentUser();s(x)}}catch{te.removeToken()}finally{o(!1)}},l=async f=>{const x=await Xe.login(f);return te.setToken(x.token),s(x.user),x},c=async f=>{const x=await Xe.register(f);return te.setToken(x.token),s(x.user),x},d=()=>{Xe.logout().catch(()=>{}),te.removeToken(),s(null)},u=r?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(r?.email||"").toLowerCase().trim()),h={user:r,isAdmin:u,loading:a,login:l,register:c,logout:d,checkAuth:i};return e.jsx(Pt.Provider,{value:h,children:t})}const Jt="modulepreload",Qt=function(t){return"/ozillafest/"+t},kt={},C=function(r,s,a){let o=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(s.map(d=>{if(d=Qt(d),d in kt)return;kt[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Jt,u||(f.as="script"),f.crossOrigin="",f.href=d,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((x,w)=>{f.addEventListener("load",x),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return r().catch(i)})};function mt(){const t=v.useContext(Pt);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function es({children:t}){const{user:r,loading:s}=mt(),a=Ve();if(s)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!r){const o=`${a.pathname}${a.search}`,i=new URLSearchParams({returnTo:o}).toString();return e.jsx(S,{to:`/login?${i}`,replace:!0})}return t||e.jsx(Ye,{})}function ts(t,r="/dashboard"){if(!t||typeof t!="string")return r;let s=t.trim();if(s.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(s))return r;s.startsWith("/ozillafest")&&(s=s.slice(11)),s.startsWith("/")||(s=`/${s}`);const a=s.split("?")[0].replace(/\/$/,"");return!a||a==="/login"||a==="/register"?r:s}function ss({children:t}){const{user:r,loading:s}=mt(),a=Ve();if(s)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(r){const i=new URLSearchParams(a.search).get("returnTo"),l=ts(i,"/dashboard");return e.jsx(S,{to:l,replace:!0})}return t||e.jsx(Ye,{})}function Ke(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const r="/ozillafest/",s=r.endsWith("/")?r:`${r}/`,a=t.replace(/^\/+/,"");return a.startsWith("assets/")||a.startsWith("favicon")?`${s}${a}`:t.startsWith("/")?`${s}${a}`:t}function rs({className:t="",nodeColor:r="#EC4899",lineColor:s="236, 72, 153",secondaryColor:a="255, 90, 31",maxDistance:o=135,speed:i=.5}){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;const d=c.getContext("2d",{alpha:!0});if(!d)return;let u=null,h=!0,f=!1,x=c.width=c.parentElement?.clientWidth||window.innerWidth,w=c.height=c.parentElement?.clientHeight||window.innerHeight;const g=x<768?18:34,W=340,A=450,Ne=o*o;let Z={x:x/2,y:w/2,active:!1},k={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const n=[];for(let z=0;z<g;z++)n.push({x:(Math.random()-.5)*x*1.1,y:(Math.random()-.5)*w*1.1,z:(Math.random()-.5)*A,vx:(Math.random()-.5)*i*.7,vy:(Math.random()-.5)*i*.7,vz:(Math.random()-.5)*i*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const U=()=>{c.parentElement&&(x=c.width=c.parentElement.clientWidth||window.innerWidth,w=c.height=c.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",U,{passive:!0});const B=z=>{if(!h)return;const se=c.getBoundingClientRect();Z.x=z.clientX-se.left,Z.y=z.clientY-se.top,Z.active=!0;const pe=(Z.x-x/2)/(x/2),fe=(Z.y-w/2)/(w/2);k.targetRotY=pe*.14,k.targetRotX=-fe*.14},Pe=()=>{Z.active=!1,k.targetRotX=0,k.targetRotY=0};window.addEventListener("mousemove",B,{passive:!0}),window.addEventListener("mouseleave",Pe,{passive:!0});const Y=()=>{if(!h||document.hidden){f=!1;return}d.clearRect(0,0,x,w),k.rotX+=(k.targetRotX-k.rotX)*.05,k.rotY+=(k.targetRotY-k.rotY)*.05;const z=Math.cos(k.rotY),se=Math.sin(k.rotY),pe=Math.cos(k.rotX),fe=Math.sin(k.rotX),re=x/2,ne=w/2,E=x*.65,R=w*.65,Ee=A*.55,H=[];for(let P=0;P<g;P++){const p=n[P];p.x+=p.vx,p.y+=p.vy,p.z+=p.vz,(p.x<-E||p.x>E)&&(p.vx*=-1),(p.y<-R||p.y>R)&&(p.vy*=-1),(p.z<-Ee||p.z>Ee)&&(p.vz*=-1);const ge=p.x*z-p.z*se,J=p.z*z+p.x*se,G=p.y*pe-J*fe,be=J*pe+p.y*fe,ae=be+A;if(ae<=0)continue;const X=W/(W+ae*.65),Re=re+ge*X,Me=ne+G*X,Fe=Math.max(.18,Math.min(.85,(be+A)/(A*1.4)));H.push({x:Re,y:Me,scale:X,alpha:Fe,radius:Math.max(1.2,p.radius*X),colorType:p.colorType})}const xe=H.length;for(let P=0;P<xe;P++){const p=H[P];let ge=0;for(let J=P+1;J<xe&&ge<3;J++){const G=H[J],be=p.x-G.x,ae=p.y-G.y,X=be*be+ae*ae;if(X<Ne){ge++;const Re=Math.sqrt(X),Me=(1-Re/o)*.4*Math.min(p.alpha,G.alpha),Fe=p.colorType==="primary"?s:a;d.beginPath(),d.moveTo(p.x,p.y),d.lineTo(G.x,G.y),d.strokeStyle=`rgba(${Fe}, ${Me})`,d.lineWidth=Math.max(.5,(1-Re/o)*1.2),d.stroke()}}}for(let P=0;P<xe;P++){const p=H[P],ge=p.colorType==="primary"?`rgba(${s}, ${p.alpha})`:`rgba(${a}, ${p.alpha})`;d.beginPath(),d.arc(p.x,p.y,p.radius,0,Math.PI*2),d.fillStyle=ge,d.fill()}u=requestAnimationFrame(Y)},de=()=>{!f&&h&&!document.hidden&&(f=!0,u=requestAnimationFrame(Y))},ue=()=>{f=!1,u&&(cancelAnimationFrame(u),u=null)};let he=null;"IntersectionObserver"in window?(he=new IntersectionObserver(([z])=>{h=z.isIntersecting,h?de():ue()},{threshold:.05}),he.observe(c)):de();const me=()=>{document.hidden?ue():h&&de()};return document.addEventListener("visibilitychange",me),()=>{ue(),window.removeEventListener("resize",U),window.removeEventListener("mousemove",B),window.removeEventListener("mouseleave",Pe),document.removeEventListener("visibilitychange",me),he&&he.disconnect()}},[r,s,a,o,i]),e.jsx("canvas",{ref:l,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const ns=ze.memo(rs);function it({children:t}){const r=Ve(),s=r.pathname==="/login",a=r.pathname==="/register",[o,i]=v.useState({x:0,y:0}),[l,c]=v.useState({x:50,y:42}),d=h=>{if(h.pointerType==="touch")return;const f=h.currentTarget.getBoundingClientRect(),x=(h.clientX-f.left)/f.width,w=(h.clientY-f.top)/f.height;i({x:(.5-w)*10,y:(x-.5)*10}),c({x:x*100,y:w*100})},u=()=>{i({x:0,y:0}),c({x:50,y:42})};return e.jsxs("main",{className:`kx-page auth-page ${s?"auth-page-login":""} ${a?"auth-page-register":""}`,children:[e.jsx(ns,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:130,speed:.4}),e.jsx("div",{className:"kx-grid","aria-hidden":"true"}),e.jsx("div",{className:"kx-noise","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-top","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-bottom","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-left","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-right","aria-hidden":"true"}),e.jsxs("section",{className:`kx-stage ${a?"kx-stage-wide":""}`,children:[e.jsx("div",{className:"kx-tilt",onPointerMove:d,onPointerLeave:u,onPointerCancel:u,style:{transform:`rotateX(${o.x}deg) rotateY(${o.y}deg)`},children:e.jsxs("div",{className:"kx-card-shell",children:[e.jsx("div",{className:"kx-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"kx-runners","aria-hidden":"true",children:[e.jsx("span",{className:"kx-runner kx-runner-top"}),e.jsx("span",{className:"kx-runner kx-runner-right"}),e.jsx("span",{className:"kx-runner kx-runner-bottom"}),e.jsx("span",{className:"kx-runner kx-runner-left"})]}),e.jsxs("article",{className:"kx-card",children:[e.jsx("div",{className:"kx-pointer-glow","aria-hidden":"true",style:{left:`${l.x}%`,top:`${l.y}%`}}),e.jsx("div",{className:"kx-card-pattern","aria-hidden":"true"}),e.jsxs("header",{className:"kx-header",children:[e.jsx(F,{to:"/",className:"kx-logo-link","aria-label":"Ozilla Festival Home",children:e.jsxs("div",{className:"kx-logo",children:[e.jsx("img",{src:Ke("/assets/ozilla/logo.png"),alt:"Ozilla Festival Logo",onError:h=>{h.currentTarget.src=Ke("/assets/logo.jpeg")}}),e.jsx("i",{"aria-hidden":"true"})]})}),e.jsx("span",{className:"kx-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"kx-title",children:s?"Welcome Back":"Join Ozilla Festival"}),e.jsx("p",{className:"kx-subtitle",children:s?"Sign in to access your passes, tickets & workspace":"Create your account for the ultimate festival experience"}),e.jsxs("div",{className:"kx-tabs",children:[e.jsx(F,{to:`/login${r.search}`,className:`kx-tab-btn ${s?"active":""}`,children:"Sign In"}),e.jsx(F,{to:`/register${r.search}`,className:`kx-tab-btn ${a?"active":""}`,children:"Create Account"})]})]}),e.jsx("div",{className:"kx-card-body",children:t||e.jsx(Ye,{})})]})]})}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function as({children:t,className:r="",onClick:s,mouseX:a,spring:o,distance:i,magnification:l,baseItemSize:c,label:d}){const u=v.useRef(null),h=Rt(0),f=vt(a,A=>{if(A===1/0||!u.current)return i;const Ne=u.current.getBoundingClientRect(),Z=Ne.left+Ne.width/2;return A-Z}),x=vt(f,[-i,0,i],[c,l,c]),w=Ut(x,o),_e=A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),s?.())},g=()=>{h.set(1)},W=()=>{h.set(0)};return e.jsx(ht.div,{ref:u,style:{width:w,height:w},onHoverStart:g,onHoverEnd:W,onFocus:g,onBlur:W,onClick:s,className:`dock-item ${r}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":d,onKeyDown:_e,children:v.Children.map(t,A=>v.cloneElement(A,{isHovered:h}))})}function os({children:t,className:r="",...s}){const{isHovered:a}=s,[o,i]=v.useState(!1);return v.useEffect(()=>{if(!a)return;const l=a.on("change",c=>{i(c===1)});return()=>l()},[a]),e.jsx(Bt,{children:o&&e.jsx(ht.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${r}`,role:"tooltip",style:{x:"-50%"},children:t})})}function is({children:t,className:r=""}){return e.jsx("div",{className:`dock-icon ${r}`,children:t})}function cs({items:t,className:r="",spring:s={mass:.1,stiffness:220,damping:18},magnification:a=52,distance:o=120,panelHeight:i=44,baseItemSize:l=36}){const c=Rt(1/0),d=Ve(),u=St();return e.jsx("div",{className:"dock-outer",children:e.jsx(ht.div,{onMouseMove:h=>c.set(h.clientX),onMouseLeave:()=>c.set(1/0),className:`dock-panel ${r}`,style:{height:i},role:"toolbar","aria-label":"Application dock",children:t.map((h,f)=>{const x=d.pathname===h.to||h.to!=="/"&&d.pathname.startsWith(h.to)||h.to==="/"&&d.pathname==="/dashboard";return e.jsxs(as,{onClick:()=>{h.onClick?.(),h.to&&u(h.to)},className:`${h.className||""} ${x?"active":""}`,mouseX:c,spring:s,distance:o,magnification:a,baseItemSize:l,label:h.label,children:[e.jsx(is,{children:h.icon}),e.jsx(os,{children:h.label})]},h.to||f)})})})}function L({path:t,size:r=24,viewBox:s="0 0 24 24",fill:a="none",stroke:o="currentColor",strokeWidth:i=1.8}){return e.jsx("svg",{width:r,height:r,viewBox:s,fill:a,stroke:o,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const qe={home:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},ls=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function yt(t){return t?.firstName||t?.name||t?.email||"Account"}function Mt(){const{user:t,isAdmin:r,logout:s}=mt(),a=St(),o=Ve(),[i,l]=v.useState(!1),[c,d]=v.useState(!1),[u,h]=v.useState(!1),f=v.useRef(null),x=ze.useMemo(()=>{const g=[...ls];return r&&g.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),g},[r]),w=ze.useMemo(()=>x.map(g=>({label:g.label,to:g.to,icon:qe[g.icon],className:g.cta?"dock-item-cta":""})),[x]);v.useEffect(()=>{const g=()=>{f.current||(f.current=window.requestAnimationFrame(()=>{l(window.scrollY>12),f.current=null}))};return g(),window.addEventListener("scroll",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),f.current&&window.cancelAnimationFrame(f.current)}},[]),v.useEffect(()=>{d(!1),h(!1)},[o.pathname]);const _e=()=>{s(),a("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${i?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(F,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Fest home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:Ke("/assets/ozilla/logo.png"),alt:"Ozilla Fest",onError:g=>{g.currentTarget.src=Ke("/assets/company-logo.jpeg")}})}),e.jsx("div",{className:"dock-site-brand-text",children:e.jsx("strong",{children:"OZILLA FEST"})})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(cs,{items:w,className:"dock-nav",magnification:58,distance:140,panelHeight:62,baseItemSize:44,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>h(g=>!g),"aria-expanded":u,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(yt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:yt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(F,{to:"/account",children:"Account"}),e.jsx(F,{to:"/tickets/my-tickets",children:"My Tickets"}),r&&e.jsx(F,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:_e,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(F,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${c?"open":""}`,"aria-label":c?"Close menu":"Open menu","aria-expanded":c,onClick:()=>d(g=>!g),children:c?qe.close:qe.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${c?"open":""}`,onClick:()=>d(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${c?"open":""}`,onClick:g=>g.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>d(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:x.map(g=>e.jsxs(Vt,{to:g.to,className:g.cta?"dock-mobile-link-cta":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:qe[g.icon]}),e.jsx("span",{children:g.label}),g.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},g.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{_e(),d(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(F,{to:"/login",onClick:()=>d(!1),children:"Login"}),e.jsx(F,{to:"/register",onClick:()=>d(!1),children:"Sign Up"})]})})]})})]})}const ds=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP & Ticket Passes",href:"/tickets"},{label:"The Festival Vibe",href:"/#about"},{label:"World-Class Facilities",href:"/#facilities"},{label:"My Digital Passes",href:"/tickets/my-tickets"}],us=[{label:"Instagram",href:"https://www.instagram.com/ozillafestival"}],hs=[{label:"Sponsorship Inquiries",href:"/#sponsorship"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Hotel & Travel Partners",href:"/hotels"},{label:"Privacy & Terms",href:"/privacy"}];function Ft(){return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"kex-footer",children:[e.jsx("div",{className:"kex-bg-glow","aria-hidden":"true"}),e.jsx("div",{className:"kex-bg-overlay","aria-hidden":"true"}),e.jsxs("div",{className:"kex-container",children:[e.jsxs("div",{className:"kex-nav-grid",children:[e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"MENU"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:ds.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(F,{to:t.href,children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"SOCIALS"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:us.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"RESOURCES"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:hs.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(F,{to:t.href,children:t.label})},t.label))}),e.jsx("div",{className:"kex-action-wrap",children:e.jsx("a",{href:"mailto:ozillafestival@gmail.com",className:"kex-pill-btn",children:"Send a message"})})]})]}),e.jsx("div",{className:"kex-hero-word-wrap","aria-hidden":"true",children:e.jsx("span",{className:"kex-hero-word",children:"OZILLA FEST"})}),e.jsxs("div",{className:"kex-bottom-row",children:[e.jsxs("div",{className:"kex-bottom-links",children:[e.jsx(F,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(F,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(F,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]}),e.jsx("p",{className:"kex-bottom-copy",children:"© 2026 Ozilla Festival & Prism Entertainment. All rights reserved."})]})]})]}),e.jsx("style",{children:ms})]})}const ms=`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap");

  .kex-footer {
    position: relative;
    width: 100%;
    background: #080504;
    background:
      radial-gradient(circle at 50% 0%, rgba(255, 90, 31, 0.12), transparent 45%),
      radial-gradient(circle at 85% 20%, rgba(236, 72, 153, 0.08), transparent 40%),
      linear-gradient(180deg, #140b07 0%, #0a0604 40%, #030202 100%);
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    padding-top: clamp(60px, 8vh, 90px);
    padding-bottom: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255, 189, 89, 0.12);
  }

  .kex-bg-glow {
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 180px;
    background: radial-gradient(ellipse at 50% 0%, rgba(255, 189, 89, 0.08), transparent 70%);
    pointer-events: none;
  }

  .kex-bg-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
    pointer-events: none;
  }

  .kex-container {
    position: relative;
    width: min(1280px, calc(100% - 64px));
    margin: 0 auto;
    z-index: 2;
  }

  /* 3-Column Navigation Grid */
  .kex-nav-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(30px, 6vw, 90px);
    padding-bottom: clamp(40px, 6vh, 70px);
  }

  .kex-col-title {
    margin: 0 0 10px;
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(14px, 1.2vw, 17px);
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #ffffff;
    text-transform: uppercase;
  }

  .kex-col-line {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.28);
    margin-bottom: 22px;
  }

  .kex-col-list {
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .kex-col-list a {
    color: rgba(255, 255, 255, 0.72);
    font-size: clamp(13.5px, 1.05vw, 15px);
    font-weight: 400;
    text-decoration: none;
    transition: color 200ms ease, transform 200ms ease;
    display: inline-block;
  }

  .kex-col-list a:hover {
    color: #ffffff;
    transform: translateX(3px);
  }

  /* Pill button in 3rd column */
  .kex-action-wrap {
    margin-top: 24px;
  }

  .kex-pill-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.04);
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 600;
    text-decoration: none;
    transition: all 250ms ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .kex-pill-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ffffff;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 189, 89, 0.2);
  }

  /* Massive Hero Brand Typography Display */
  .kex-hero-word-wrap {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(20px, 3vh, 40px) 0 10px;
    user-select: none;
    pointer-events: none;
  }

  .kex-hero-word {
    display: block;
    font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    font-size: clamp(52px, 15.5vw, 215px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 0.88;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.45) 35%,
      rgba(255, 255, 255, 0.85) 75%,
      #ffffff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.92;
    filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.7));
  }

  /* Bottom Copyright & Legal Links */
  .kex-bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 11.5px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .kex-bottom-links {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .kex-bottom-links a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 180ms ease;
  }

  .kex-bottom-links a:hover {
    color: #ffbd59;
  }

  .kex-bottom-copy {
    margin: 0;
  }

  /* Responsive Breakpoints */
  @media (max-width: 860px) {
    .kex-nav-grid {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 36px;
    }
    .kex-col:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 540px) {
    .kex-footer {
      padding-top: 45px;
    }
    .kex-container {
      width: calc(100% - 32px);
    }
    .kex-nav-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      padding-bottom: 30px;
    }
    .kex-bottom-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .kex-hero-word {
      font-size: 14vw;
      letter-spacing: -0.03em;
    }
  }
`;function ee({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(Mt,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(Ye,{})}),e.jsx(Ft,{})]})}function ct({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(Mt,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(Ye,{})})}),e.jsx(Ft,{})]})}function ps(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}function D(t){return v.lazy(async()=>{try{return await t()}catch(r){if(/Failed to fetch dynamically imported module/i.test(r?.message)||/Loading chunk/i.test(r?.message)||/Failed to load module script/i.test(r?.message)){const a=Number(sessionStorage.getItem("chunk_reload_ts")||0);if(Date.now()-a>1e4)return sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload(),new Promise(()=>{})}throw r}})}const fs=D(()=>C(()=>import("./LoginPage-DaTkNxtF.js"),__vite__mapDeps([0,1,2,3,4]))),xs=D(()=>C(()=>import("./RegisterPage-Cc09A8Gf.js"),__vite__mapDeps([5,1,2,3,4]))),gs=D(()=>C(()=>import("./GoogleAuthCallbackPage-DYs6knhH.js"),__vite__mapDeps([6,1,2,4]))),bs=D(()=>C(()=>import("./DashboardPage-MxGP6F6k.js"),__vite__mapDeps([7,1,2,8,4]))),vs=D(()=>C(()=>import("./UserDashboardPage-D66YQ0GC.js"),__vite__mapDeps([9,1,2,10,11,12,13,4]))),js=D(()=>C(()=>import("./TicketPortalPage-FgnOdoPR.js"),__vite__mapDeps([14,1,2,10,11,15,4]))),ks=D(()=>C(()=>import("./MyTicketsPage-6_RaXNom.js"),__vite__mapDeps([16,1,2,10,11,17,13,4]))),ys=D(()=>C(()=>import("./TicketViewPage-Bk2-b3lq.js"),__vite__mapDeps([18,1,2,10,11,17,13,4,15]))),ws=D(()=>C(()=>import("./TicketVerificationPage-NGjmIWpW.js"),__vite__mapDeps([19,1,2,11,15,4]))),As=D(()=>C(()=>import("./AdminDashboardPage-4PxVGmk1.js"),__vite__mapDeps([20,1,2,12,15,4]))),_s=D(()=>C(()=>import("./AdminTicketReviewPage-CbRa2ghh.js"),__vite__mapDeps([21,1,2,11,15,12,4]))),Ns=D(()=>C(()=>import("./HotelsPage-BXTl3Xw8.js"),__vite__mapDeps([22,1,2,8,4]))),wt=D(()=>C(()=>import("./FestivalSchedulePage-C-fwl41C.js"),__vite__mapDeps([23,1,2]))),At=D(()=>C(()=>import("./LegalPage-0v422c6k.js"),__vite__mapDeps([24,1,2]))),Es=D(()=>C(()=>import("./NotFound-DvQu_5Ky.js"),__vite__mapDeps([25,1,2])));function Rs(){return e.jsx(v.Suspense,{fallback:e.jsx(ps,{}),children:e.jsxs(Yt,{children:[e.jsxs(b,{element:e.jsx(ss,{}),children:[e.jsx(b,{path:"/login",element:e.jsx(it,{children:e.jsx(fs,{})})}),e.jsx(b,{path:"/register",element:e.jsx(it,{children:e.jsx(xs,{})})}),e.jsx(b,{path:"/auth/google/callback",element:e.jsx(it,{children:e.jsx(gs,{})})})]}),e.jsx(b,{path:"/",element:e.jsx(ee,{children:e.jsx(bs,{})})}),e.jsx(b,{path:"/dashboard",element:e.jsx(S,{to:"/",replace:!0})}),e.jsx(b,{path:"/about",element:e.jsx(S,{to:"/#about",replace:!0})}),e.jsx(b,{path:"/collaboration",element:e.jsx(S,{to:"/#sponsorship",replace:!0})}),e.jsx(b,{path:"/prismfest",element:e.jsx(S,{to:"/#home",replace:!0})}),e.jsx(b,{path:"/prismfest/celebrities",element:e.jsx(S,{to:"/#celebrities",replace:!0})}),e.jsx(b,{path:"/prismfest/events",element:e.jsx(S,{to:"/#events",replace:!0})}),e.jsx(b,{path:"/prismfest/future",element:e.jsx(S,{to:"/#future-events",replace:!0})}),e.jsx(b,{path:"/history",element:e.jsx(S,{to:"/#history",replace:!0})}),e.jsx(b,{path:"/events",element:e.jsx(S,{to:"/#events",replace:!0})}),e.jsx(b,{path:"/sponsorship",element:e.jsx(S,{to:"/#sponsorship",replace:!0})}),e.jsx(b,{path:"/contact",element:e.jsx(S,{to:"/#contact",replace:!0})}),e.jsx(b,{path:"/facilities",element:e.jsx(S,{to:"/#facilities",replace:!0})}),e.jsx(b,{path:"/hotels",element:e.jsx(ee,{children:e.jsx(Ns,{})})}),e.jsx(b,{path:"/schedule",element:e.jsx(ee,{children:e.jsx(wt,{})})}),e.jsx(b,{path:"/lineup",element:e.jsx(ee,{children:e.jsx(wt,{})})}),e.jsx(b,{path:"/restaurants",element:e.jsx(S,{to:"/#restaurants",replace:!0})}),e.jsx(b,{path:"/discounts",element:e.jsx(S,{to:"/#discounts",replace:!0})}),e.jsx(b,{path:"/partner",element:e.jsx(S,{to:"/#about",replace:!0})}),e.jsx(b,{path:"/privacy",element:e.jsx(ee,{children:e.jsx(At,{type:"privacy"})})}),e.jsx(b,{path:"/terms",element:e.jsx(ee,{children:e.jsx(At,{type:"terms"})})}),e.jsx(b,{path:"/verification/:ticketId",element:e.jsx(ee,{children:e.jsx(ws,{})})}),e.jsx(b,{path:"/tickets",element:e.jsx(ct,{children:e.jsx(js,{})})}),e.jsxs(b,{element:e.jsx(es,{}),children:[e.jsx(b,{path:"/account",element:e.jsx(ee,{children:e.jsx(vs,{})})}),e.jsx(b,{path:"/admin",element:e.jsx(S,{to:"/admin/dashboard",replace:!0})}),e.jsx(b,{path:"/admin/dashboard",element:e.jsx(ee,{children:e.jsx(As,{})})}),e.jsx(b,{path:"/tickets/my-tickets",element:e.jsx(ct,{children:e.jsx(ks,{})})}),e.jsx(b,{path:"/tickets/view/:ticketId",element:e.jsx(ct,{children:e.jsx(ys,{})})}),e.jsx(b,{path:"/admin/tickets",element:e.jsx(ee,{children:e.jsx(_s,{})})})]}),e.jsx(b,{path:"*",element:e.jsx(Es,{})})]})})}const Ss=2,we=8e3,Ae=20,Ls=`
precision highp float;

attribute vec2  a_p0;
attribute vec2  a_p1;
attribute vec2  a_corner;   // x: which end (0|1), y: which side (-1|1)
attribute vec3  a_shade;    // x: alpha at this end, y: colour mix (0 base, 1 accent), z: width px

uniform vec2  uSize;

varying float v_alpha;
varying float v_mix;
varying float v_off;
varying float v_half;

void main(){
  vec2 d = a_p1 - a_p0;
  float len = max(length(d), 1e-5);
  vec2 nrm = vec2(-d.y, d.x) / len;

  float half_ = max(a_shade.z * 0.5, 0.35);
  float ext = half_ + 0.75;                 // feather added OUTSIDE the stroke
  vec2 p = mix(a_p0, a_p1, a_corner.x);
  p += nrm * a_corner.y * ext;

  v_alpha = a_shade.x;
  v_mix = a_shade.y;
  v_off = a_corner.y * ext;
  v_half = half_;
  gl_Position = vec4(p.x / uSize.x * 2.0 - 1.0, 1.0 - p.y / uSize.y * 2.0, 0.0, 1.0);
}
`,Ps=`
precision mediump float;

uniform vec3 uBase, uAccent;

varying float v_alpha;
varying float v_mix;
varying float v_off;
varying float v_half;

void main(){
  float cov = clamp((v_half - abs(v_off)) / 0.75 + 0.5, 0.0, 1.0);
  float a = v_alpha * cov;
  vec3 col = mix(uBase, uAccent, v_mix);
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`,Ms=`
precision highp float;

attribute vec2  a_pos;
attribute float a_lit;     // 0 resting, 1 under the pointer

uniform vec2  uSize;
uniform float uDpr, uDot;

varying float v_lit;

void main(){
  gl_PointSize = max(1.0, uDot * uDpr);
  v_lit = a_lit;
  gl_Position = vec4(a_pos.x / uSize.x * 2.0 - 1.0, 1.0 - a_pos.y / uSize.y * 2.0, 0.0, 1.0);
}
`,Fs=`
precision mediump float;

uniform vec3  uBase, uAccent;
uniform float uRestAlpha;

varying float v_lit;

void main(){
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float disc = 1.0 - smoothstep(0.72, 1.0, d);
  vec3 col = mix(uBase, uAccent, v_lit);
  float a = disc * mix(uRestAlpha, 1.0, v_lit);
  if (a <= 0.004) discard;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`;function _t(t,r,s){const a=t.createShader(r);return a?(t.shaderSource(a,s),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("ParticleDrift shader:",t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function Nt(t,r,s){const a=_t(t,t.VERTEX_SHADER,r),o=_t(t,t.FRAGMENT_SHADER,s);if(!a||!o)return null;const i=t.createProgram();return i?(t.attachShader(i,a),t.attachShader(i,o),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(console.error("ParticleDrift link:",t.getProgramInfoLog(i)),null)):null}function Et(t,r){if(!t)return r;const s=String(t).trim();if(s.charAt(0)==="#"){let o=s.slice(1);if((o.length===3||o.length===4)&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),o.length>=6){const i=parseInt(o.slice(0,2),16),l=parseInt(o.slice(2,4),16),c=parseInt(o.slice(4,6),16);if(!isNaN(i)&&!isNaN(l)&&!isNaN(c))return[i/255,l/255,c/255]}return r}const a=s.match(/[\d.]+/g);return a&&a.length>=3?[Math.min(255,parseFloat(a[0]))/255,Math.min(255,parseFloat(a[1]))/255,Math.min(255,parseFloat(a[2]))/255]:r}function ce(t,r){return typeof t=="number"&&isFinite(t)?t:r}function Se(t,r,s){return t<r?r:t>s?s:t}function Ts(t){let r=t>>>0;return function(){r+=1831565813;let s=r;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}const lt=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function Os({style:t,background:r="transparent",baseColor:s="#F84400",accentColor:a="#ECECEC",density:o=235,dotSize:i=14,speed:l=100,direction:c=0,hover:d=200,linkDistance:u=202,linkThickness:h=2.5,width:f,height:x,isFixed:w=!0}){const _e=v.useRef(null),g=v.useRef(null),W=v.useRef({w:0,h:0});W.current={w:ce(f,0),h:ce(x,0)};const A=v.useRef({x:-1e4,y:-1e4}),Ne=v.useRef({});Ne.current={base:s,accent:a,density:Math.round(Se(ce(o,90),10,400)),dotSize:Se(ce(i,5),1,24),speed:Se(ce(l,50),0,100)/50,direction:Se(ce(c,0),0,360),hover:Se(ce(d,100),0,200)/100,linkDistance:Se(ce(u,120),0,400),linkThickness:Se(ce(h,1),.5,8)},v.useEffect(()=>{const k=g.current;if(!k)return;const n=k.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!n){console.error("ParticleDrift: WebGL unavailable");return}const U=Nt(n,Ls,Ps),B=Nt(n,Ms,Fs);if(!U||!B)return;const Pe=new Map,Y=(y,_)=>{const j=(y===U?"L:":"D:")+_;return Pe.has(j)||Pe.set(j,n.getUniformLocation(y,_)),Pe.get(j)},de=new Float32Array(we*6*2),ue=new Float32Array(we*6*2),he=new Float32Array(we*6*2),me=new Float32Array(we*6*3);for(let y=0;y<we;y++)for(let _=0;_<6;_++){const j=(y*6+_)*2;he[j]=lt[_][0],he[j+1]=lt[_][1]}const z=n.createBuffer(),se=n.createBuffer(),pe=n.createBuffer(),fe=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,z),n.bufferData(n.ARRAY_BUFFER,de.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,se),n.bufferData(n.ARRAY_BUFFER,ue.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,pe),n.bufferData(n.ARRAY_BUFFER,he,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,fe),n.bufferData(n.ARRAY_BUFFER,me.byteLength,n.DYNAMIC_DRAW);const re=Ts(20260824);let ne=0,E=new Float32Array(0),R=new Float32Array(0),Ee=new Float32Array(0),H=new Float32Array(0),xe=new Float32Array(0);const P=n.createBuffer(),p=n.createBuffer(),ge=(y,_,j)=>{ne=y,E=new Float32Array(y),R=new Float32Array(y),Ee=new Float32Array(y),H=new Float32Array(y*2),xe=new Float32Array(y);for(let Q=0;Q<y;Q++)E[Q]=re()*_,R[Q]=re()*j,Ee[Q]=(re()*.4+.1)*60;n.bindBuffer(n.ARRAY_BUFFER,P),n.bufferData(n.ARRAY_BUFFER,H.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferData(n.ARRAY_BUFFER,xe.byteLength,n.DYNAMIC_DRAW)};let J=0,G=performance.now(),be=-1,ae=0,X=0;const Re=y=>{if(J=requestAnimationFrame(Re),typeof document<"u"&&document.hidden){G=y;return}const _=Math.min(.05,(y-G)/1e3);G=y;const j=Ne.current,Q=j.speed,Ze=Math.min(window.devicePixelRatio||1,Ss),T=W.current.w||k.clientWidth||window.innerWidth||1200,$=W.current.h||k.clientHeight||window.innerHeight||800,Je=Math.max(1,Math.round(T*Ze)),Qe=Math.max(1,Math.round($*Ze));(k.width!==Je||k.height!==Qe)&&(k.width=Je,k.height=Qe),n.viewport(0,0,Je,Qe);const et=T<768,Tt=T>=768&&T<1024;let Ue=j.density,tt=j.linkDistance,st=j.dotSize;if(et?(Ue=Math.max(60,Math.min(Math.round(j.density*.38),90)),tt=Math.min(j.linkDistance,135),st=Math.min(j.dotSize,8.5)):Tt&&(Ue=Math.max(90,Math.min(Math.round(j.density*.6),145)),tt=Math.min(j.linkDistance,165),st=Math.min(j.dotSize,11)),Ue!==be&&(ge(Ue,T,$),be=Ue),T!==ae||$!==X){const m=T/Math.max(ae||T,1),N=$/Math.max(X||$,1);for(let M=0;M<ne;M++)E[M]*=m,R[M]*=N;ae=T,X=$}const $e=A.current,pt=j.hover,rt=(et?100:180)*(pt>0?1:0),ve=tt,ft=et?Math.min(j.linkThickness,1.6):j.linkThickness,xt=j.direction*Math.PI/180,Ot=Math.sin(xt),It=Math.cos(xt);let je=0;const gt=(m,N,M,q,O,oe,Ie,We)=>{if(!(je>=we)){for(let ke=0;ke<6;ke++){const He=(je*6+ke)*2,nt=(je*6+ke)*3;de[He]=m,de[He+1]=N,ue[He]=M,ue[He+1]=q,me[nt]=lt[ke][0]===0?O:oe,me[nt+1]=Ie,me[nt+2]=We}je++}};for(let m=0;m<ne;m++){E[m]+=Ee[m]*Ot*_*Q,R[m]+=Ee[m]*It*_*Q,E[m]<-Ae?(E[m]=T+Ae,R[m]=re()*$):E[m]>T+Ae&&(E[m]=-Ae,R[m]=re()*$),R[m]<-Ae?(R[m]=$+Ae,E[m]=re()*T):R[m]>$+Ae&&(R[m]=-Ae,E[m]=re()*T);const N=$e.x-E[m],M=$e.y-R[m],q=Math.sqrt(N*N+M*M),O=rt>0&&q<rt?1:0;if(O===1){const oe=.5*(1-q/rt)*pt;gt(E[m],R[m],$e.x,$e.y,oe,oe,1,ft)}H[m*2]=E[m],H[m*2+1]=R[m],xe[m]=O}if(ve>0){const m=ve*ve;for(let N=0;N<ne&&je<we;N++){const M=E[N],q=R[N];for(let O=N+1;O<ne&&je<we;O++){const oe=M-E[O];if(oe>ve||oe<-ve)continue;const Ie=q-R[O];if(Ie>ve||Ie<-ve)continue;const We=oe*oe+Ie*Ie;if(We>=m)continue;const ke=.15*(1-Math.sqrt(We)/ve);gt(M,q,E[O],R[O],ke,ke,0,ft)}}}n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA);const Te=Et(j.base,[.973,.267,0]),Oe=Et(j.accent,[.925,.925,.925]);if(je>0){n.useProgram(U);const m=je*6;n.bindBuffer(n.ARRAY_BUFFER,z),n.bufferSubData(n.ARRAY_BUFFER,0,de.subarray(0,m*2));const N=n.getAttribLocation(U,"a_p0");n.enableVertexAttribArray(N),n.vertexAttribPointer(N,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,se),n.bufferSubData(n.ARRAY_BUFFER,0,ue.subarray(0,m*2));const M=n.getAttribLocation(U,"a_p1");n.enableVertexAttribArray(M),n.vertexAttribPointer(M,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,pe);const q=n.getAttribLocation(U,"a_corner");n.enableVertexAttribArray(q),n.vertexAttribPointer(q,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,fe),n.bufferSubData(n.ARRAY_BUFFER,0,me.subarray(0,m*3));const O=n.getAttribLocation(U,"a_shade");n.enableVertexAttribArray(O),n.vertexAttribPointer(O,3,n.FLOAT,!1,0,0),n.uniform2f(Y(U,"uSize"),T,$),n.uniform3f(Y(U,"uBase"),Te[0],Te[1],Te[2]),n.uniform3f(Y(U,"uAccent"),Oe[0],Oe[1],Oe[2]),n.drawArrays(n.TRIANGLES,0,m),n.disableVertexAttribArray(N),n.disableVertexAttribArray(M),n.disableVertexAttribArray(q),n.disableVertexAttribArray(O)}if(ne>0){n.useProgram(B),n.bindBuffer(n.ARRAY_BUFFER,P),n.bufferSubData(n.ARRAY_BUFFER,0,H);const m=n.getAttribLocation(B,"a_pos");n.enableVertexAttribArray(m),n.vertexAttribPointer(m,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,p),n.bufferSubData(n.ARRAY_BUFFER,0,xe);const N=n.getAttribLocation(B,"a_lit");n.enableVertexAttribArray(N),n.vertexAttribPointer(N,1,n.FLOAT,!1,0,0),n.uniform2f(Y(B,"uSize"),T,$),n.uniform1f(Y(B,"uDpr"),Ze),n.uniform1f(Y(B,"uDot"),st),n.uniform1f(Y(B,"uRestAlpha"),.4),n.uniform3f(Y(B,"uBase"),Te[0],Te[1],Te[2]),n.uniform3f(Y(B,"uAccent"),Oe[0],Oe[1],Oe[2]),n.drawArrays(n.POINTS,0,ne),n.disableVertexAttribArray(m),n.disableVertexAttribArray(N)}},Me=y=>{const _=k.getBoundingClientRect();if(_.width<=0||_.height<=0)return;const j=W.current.w||k.clientWidth||window.innerWidth||1200,Q=W.current.h||k.clientHeight||window.innerHeight||800;A.current.x=(y.clientX-_.left)/_.width*j,A.current.y=(y.clientY-_.top)/_.height*Q},Fe=()=>{A.current.x=-1e4,A.current.y=-1e4};return window.addEventListener("pointermove",Me,{passive:!0}),window.addEventListener("pointerleave",Fe,{passive:!0}),J=requestAnimationFrame(Re),()=>{cancelAnimationFrame(J),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerleave",Fe),n.deleteBuffer(z),n.deleteBuffer(se),n.deleteBuffer(pe),n.deleteBuffer(fe),n.deleteBuffer(P),n.deleteBuffer(p),n.deleteProgram(U),n.deleteProgram(B)}},[]);const Z=w?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:r,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:r,isolation:"isolate",width:typeof f=="number"&&f>0?f:"100%",height:typeof x=="number"&&x>0?x:"100%",...t};return e.jsx("div",{ref:_e,style:Z,"aria-hidden":"true",children:e.jsx("canvas",{ref:g,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function Is(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx($t,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(Zt,{children:[e.jsx(Os,{}),e.jsx(Rs,{})]})})}class Cs extends v.Component{constructor(s){super(s);bt(this,"handleReload",()=>{sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload()});this.state={error:null}}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,a){if(console.error("Application render failed:",s,a),/Failed to fetch dynamically imported module/i.test(s?.message)||/Loading chunk/i.test(s?.message)||/Failed to load module script/i.test(s?.message)){const i=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-i>1e4&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}}render(){if(this.state.error){const s=/Failed to fetch dynamically imported module/i.test(this.state.error?.message)||/Loading chunk/i.test(this.state.error?.message);return e.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif",maxWidth:"600px",margin:"40px auto",textAlign:"center"},children:[e.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:s?"New Update Available":"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:s?"A new version of the website was published. Please refresh to load the latest version.":"Check the browser console for the full error details."}),e.jsx("button",{type:"button",onClick:this.handleReload,style:{padding:"10px 20px",backgroundColor:"#ea580c",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",marginBottom:"16px"},children:"Refresh Page"}),!s&&e.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12",textAlign:"left"},children:this.state.error.message})]})}return this.props.children}}dt.createRoot(document.getElementById("root")).render(e.jsx(ze.StrictMode,{children:e.jsx(Cs,{children:e.jsx(Xt,{clientId:"placeholder-client-id",children:e.jsx(Is,{})})})}));export{ps as L,ns as P,Xe as a,Ke as b,V as c,ts as g,te as t,mt as u};
