const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-CeRZKHKO.js","assets/vendor-motion-DHTbcX3O.js","assets/vendor-react-6MXTWAEx.js","assets/googleAuth.util-sbKcTwTI.js","assets/vendor-utils-Bub7y9MC.js","assets/RegisterPage-Wt08g9vh.js","assets/GoogleAuthCallbackPage-C2m-jjSp.js","assets/DashboardPage-P1knAltE.js","assets/ozillaProfessionalContent-DSGiVBDU.js","assets/UserDashboardPage-1fQiqIro.js","assets/useTicket-ncZCIlQH.js","assets/ticketService-sQ8VbJ6N.js","assets/PageHeader-DJkV4_O-.js","assets/formatDate.util-wEQv7dlP.js","assets/TicketPortalPage-ABQ2mH23.js","assets/AlertMessage-BVQu3q6F.js","assets/MyTicketsPage-CvFZfoED.js","assets/GeneratedTicketCard-CRSYxZvM.js","assets/TicketViewPage-BvdcJRpx.js","assets/TicketVerificationPage-CYiDoIHP.js","assets/AdminDashboardPage-CAuOXA0o.js","assets/AdminTicketReviewPage-BhfxWvEf.js","assets/HotelsPage-DaeELR14.js","assets/FestivalSchedulePage-C-fwl41C.js","assets/LegalPage-0v422c6k.js","assets/NotFound-DvQu_5Ky.js"])))=>i.map(i=>d[i]);
import{j as e,u as Et,m as ut,a as gt,b as Ot,A as It}from"./vendor-motion-DHTbcX3O.js";import{a as Ct,r as m,R as Ue,u as Be,N as S,O as Ve,L as T,b as _t,c as zt,d as Dt,e as v,B as Ut}from"./vendor-react-6MXTWAEx.js";import{a as Bt}from"./vendor-utils-Bub7y9MC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var lt={},bt=Ct;lt.createRoot=bt.createRoot,lt.hydrateRoot=bt.hydrateRoot;function Vt(t={}){const{nonce:r,locale:n,onScriptLoadSuccess:a,onScriptLoadError:o}=t,[i,l]=m.useState(!1),c=m.useRef(a);c.current=a;const d=m.useRef(o);return d.current=o,m.useEffect(()=>{const u=document.createElement("script");return u.src="https://accounts.google.com/gsi/client",n&&(u.src+=`?hl=${n}`),u.async=!0,u.defer=!0,u.nonce=r,u.onload=()=>{var h;l(!0),(h=c.current)===null||h===void 0||h.call(c)},u.onerror=()=>{var h;l(!1),(h=d.current)===null||h===void 0||h.call(d)},document.body.appendChild(u),()=>{document.body.removeChild(u)}},[r]),i}const Yt=m.createContext(null);function $t({clientId:t,nonce:r,locale:n,onScriptLoadSuccess:a,onScriptLoadError:o,children:i}){const l=Vt({nonce:r,onScriptLoadSuccess:a,onScriptLoadError:o,locale:n}),c=m.useMemo(()=>({locale:n,clientId:t,scriptLoadedSuccessfully:l}),[t,l]);return Ue.createElement(Yt.Provider,{value:c},i)}const nt="prism_token",ee={getToken(){return localStorage.getItem(nt)},setToken(t){localStorage.setItem(nt,t)},removeToken(){localStorage.removeItem(nt)}},Wt="http://localhost:5000/api",B=Bt.create({baseURL:Wt,headers:{"Content-Type":"application/json"}});B.interceptors.request.use(t=>{const r=ee.getToken();return r&&(t.headers.Authorization=`Bearer ${r}`),t},t=>Promise.reject(t));B.interceptors.response.use(t=>t,t=>(t.response?.status===401&&ee.removeToken(),Promise.reject(t)));const q={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/send-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},Rt="ozilla_local_users";let Se=!1;function I(t){return String(t||"").toLowerCase().trim()}function ce(t){return String(t||"").trim()}function oe(){try{const t=localStorage.getItem(Rt),r=t?JSON.parse(t):[];return Array.isArray(r)?r:[]}catch{return[]}}function ye(t){localStorage.setItem(Rt,JSON.stringify(t))}function Ht(t){const r={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(r))}`}function at(t){const r=String(t||"");if(!r)return null;if(r.startsWith("local."))try{return JSON.parse(atob(r.slice(6)))}catch{return null}const n=r.split(".");if(n.length===3)try{return JSON.parse(atob(n[1]))}catch{return null}return null}function De(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function Ie(t={}){const r=String(t.firstName||"Local").trim()||"Local",n=String(t.lastName||"User").trim()||"User",a=I(t.email||"local@ozillafestival.com"),o=ce(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:r,lastName:n,name:`${r} ${n}`.trim(),email:a,phone:o,password:String(t.password||""),role:"user"}}function dt(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function He(t){return dt(t)?(Se=!0,!0):!1}function Ce(t){const r=De(t);return{token:Ht(r),user:r,mode:"local-fallback"}}const Ge={async login(t){const r=String(t?.email||t?.phone||t?.identifier||"").trim(),n=I(r),a=ce(r),o=String(t?.password||"").trim();try{const i=await B.post(q.AUTH.LOGIN,{email:r,password:o});if(i?.data?.token){const l=oe(),c=l.findIndex(u=>I(u.email)===n||ce(u.phone)===a),d={id:i.data.user?.id||`user-${Date.now()}`,firstName:i.data.user?.firstName||"",lastName:i.data.user?.lastName||"",name:i.data.user?.name||"",email:i.data.user?.email?I(i.data.user.email):n,phone:i.data.user?.phone?ce(i.data.user.phone):a,password:o,role:i.data.user?.role||"user"};return c>=0?(l[c]=d,ye(l)):ye([d,...l]),i.data}return i.data}catch(i){const l=oe(),c=l.find(u=>(I(u.email)===n||ce(u.phone)===a)&&u.password===o);if(c)return Se=!0,Ce(c);const d=l.find(u=>I(u.email)===n||ce(u.phone)===a);if(d&&d.password!==o){const u=new Error("Invalid credentials. Please check your password.");throw u.response={status:401,data:{message:"Invalid credentials. Please check your password."}},u}throw i}},async register(t){const r=I(t?.email),n=ce(t?.phone),a=String(t?.password||"").trim(),o=oe(),i=o.find(c=>I(c.email)===r),l=o.find(c=>ce(c.phone)===n);try{const c=await B.post(q.AUTH.REGISTER,{...t,email:r,phone:n,password:a});if(c?.data?.token){const d=Ie({id:c.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:r,phone:n,password:a}),u=o.filter(h=>I(h.email)!==r&&ce(h.phone)!==n);ye([d,...u])}return c.data}catch(c){if(c?.response?.status===409||c?.response?.data?.message)throw c;if(i){const u=new Error("Account already exists with this email. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this email. Please log in."}},u}if(l){const u=new Error("Account already exists with this phone number. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},u}const d=Ie({...t,email:r,phone:n,password:a});return ye([d,...o]),Se=!0,Ce(d)}},async sendOtp(t){const r=I(t);try{return(await B.post(q.AUTH.SEND_OTP,{email:r})).data}catch(n){if(n?.response?.data?.message)throw n;if(dt(n)){const a=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw a.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},a}throw n}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const r=I(t?.email),n=String(t?.otp||"").trim();try{return(await B.post(q.AUTH.VERIFY_OTP,{email:r,otp:n})).data}catch(a){if(a?.response?.data?.message)throw a;if(dt(a)){const o=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw o.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},o}throw a}},async getCurrentUser(){const t=ee.getToken();if(!t){const n=new Error("Unauthorized");throw n.response={status:401,data:{message:"Unauthorized"}},n}const r=at(t);if(r?.mode==="local-fallback"||String(t||"").startsWith("local.")){const a=oe().find(o=>o.id===r?.sub||I(o.email)===I(r?.email));if(a)return De(a)}try{return(await B.get(q.AUTH.ME)).data}catch(n){const o=oe().find(i=>i.id===r?.sub||I(i.email)===I(r?.email));if(o)return De(o);throw n}},async logout(){if(Se)return{message:"Logged out successfully"};try{return(await B.post(q.AUTH.LOGOUT)).data}catch(t){if(He(t))return{message:"Logged out successfully"};throw t}},async forgotPassword(t){return(await B.post(q.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await B.post(q.AUTH.RESET_PASSWORD,t)).data},async googleAuth(t,r){if(Se){const a=Ie(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),o=oe();return o.some(i=>i.email===a.email)||ye([a,...o]),Ce(a)}try{return(await B.post(q.AUTH.GOOGLE,{token:t,profile:r})).data}catch(n){if(He(n)){const o=Ie(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Ce(o)}throw n}},async googleCodeLogin(t,r="postmessage",n){if(Se){const o=Ie(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=oe();return i.some(l=>l.email===o.email)||ye([o,...i]),Ce(o)}try{return(await B.post(q.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:r,profile:n})).data}catch(a){if(He(a)){const i=Ie(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Ce(i)}throw a}},async googleTokenLogin(t,r){return this.googleAuth(t,r)},async updateProfile(t){if(Se){const r=ee.getToken(),n=at(r),a=oe(),o=a.findIndex(c=>c.id===n?.sub||c.email===n?.email);if(o===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const i=a[o],l={...i,firstName:typeof t?.firstName=="string"?t.firstName.trim():i.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():i.lastName,phone:typeof t?.phone=="string"?t.phone.trim():i.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||i.name,a[o]=l,ye(a),{message:"Profile updated successfully",user:De(l)}}try{return(await B.put(q.AUTH.PROFILE,t)).data}catch(r){if(He(r)){const n=ee.getToken(),a=at(n),o=oe(),i=o.findIndex(d=>d.id===a?.sub||d.email===a?.email);if(i===-1){const d=new Error("Unauthorized");throw d.response={status:401,data:{message:"Unauthorized"}},d}const l=o[i],c={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return c.name=`${c.firstName||""} ${c.lastName||""}`.trim()||l.name,o[i]=c,ye(o),{message:"Profile updated successfully",user:De(c)}}throw r}}},St=m.createContext(null);function Gt({children:t}){const[r,n]=m.useState(null),[a,o]=m.useState(!0);m.useEffect(()=>{i()},[]);const i=async()=>{try{if(ee.getToken()){const g=await Ge.getCurrentUser();n(g)}}catch{ee.removeToken()}finally{o(!1)}},l=async x=>{const g=await Ge.login(x);return ee.setToken(g.token),n(g.user),g},c=async x=>{const g=await Ge.register(x);return ee.setToken(g.token),n(g.user),g},d=()=>{Ge.logout().catch(()=>{}),ee.removeToken(),n(null)},u=r?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(r?.email||"").toLowerCase().trim()),h={user:r,isAdmin:u,loading:a,login:l,register:c,logout:d,checkAuth:i};return e.jsx(St.Provider,{value:h,children:t})}const Xt="modulepreload",qt=function(t){return"/ozillafest/"+t},vt={},C=function(r,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(n.map(d=>{if(d=qt(d),d in vt)return;vt[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const x=document.createElement("link");if(x.rel=u?"stylesheet":Xt,u||(x.as="script"),x.crossOrigin="",x.href=d,c&&x.setAttribute("nonce",c),document.head.appendChild(x),u)return new Promise((g,w)=>{x.addEventListener("load",g),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return r().catch(i)})};function ht(){const t=m.useContext(St);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function Kt({children:t}){const{user:r,loading:n}=ht(),a=Be();if(n)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!r){const o=`${a.pathname}${a.search}`,i=new URLSearchParams({returnTo:o}).toString();return e.jsx(S,{to:`/login?${i}`,replace:!0})}return t||e.jsx(Ve,{})}function Zt(t,r="/dashboard"){if(!t||typeof t!="string")return r;let n=t.trim();if(n.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(n))return r;n.startsWith("/ozillafest")&&(n=n.slice(11)),n.startsWith("/")||(n=`/${n}`);const a=n.split("?")[0].replace(/\/$/,"");return!a||a==="/login"||a==="/register"?r:n}function Jt({children:t}){const{user:r,loading:n}=ht(),a=Be();if(n)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(r){const i=new URLSearchParams(a.search).get("returnTo"),l=Zt(i,"/dashboard");return e.jsx(S,{to:l,replace:!0})}return t||e.jsx(Ve,{})}function qe(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const r="/ozillafest/",n=r.endsWith("/")?r:`${r}/`,a=t.replace(/^\/+/,"");return a.startsWith("assets/")||a.startsWith("favicon")?`${n}${a}`:t.startsWith("/")?`${n}${a}`:t}function Qt({className:t="",nodeColor:r="#EC4899",lineColor:n="236, 72, 153",secondaryColor:a="255, 90, 31",maxDistance:o=135,speed:i=.5}){const l=m.useRef(null);return m.useEffect(()=>{const c=l.current;if(!c)return;const d=c.getContext("2d",{alpha:!0});if(!d)return;let u=null,h=!0,x=!1,g=c.width=c.parentElement?.clientWidth||window.innerWidth,w=c.height=c.parentElement?.clientHeight||window.innerHeight;const b=g<768?18:34,$=340,A=450,Ne=o*o;let K={x:g/2,y:w/2,active:!1},y={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const s=[];for(let U=0;U<b;U++)s.push({x:(Math.random()-.5)*g*1.1,y:(Math.random()-.5)*w*1.1,z:(Math.random()-.5)*A,vx:(Math.random()-.5)*i*.7,vy:(Math.random()-.5)*i*.7,vz:(Math.random()-.5)*i*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const z=()=>{c.parentElement&&(g=c.width=c.parentElement.clientWidth||window.innerWidth,w=c.height=c.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",z,{passive:!0});const D=U=>{if(!h)return;const te=c.getBoundingClientRect();K.x=U.clientX-te.left,K.y=U.clientY-te.top,K.active=!0;const me=(K.x-g/2)/(g/2),pe=(K.y-w/2)/(w/2);y.targetRotY=me*.14,y.targetRotX=-pe*.14},Le=()=>{K.active=!1,y.targetRotX=0,y.targetRotY=0};window.addEventListener("mousemove",D,{passive:!0}),window.addEventListener("mouseleave",Le,{passive:!0});const V=()=>{if(!h||document.hidden){x=!1;return}d.clearRect(0,0,g,w),y.rotX+=(y.targetRotX-y.rotX)*.05,y.rotY+=(y.targetRotY-y.rotY)*.05;const U=Math.cos(y.rotY),te=Math.sin(y.rotY),me=Math.cos(y.rotX),pe=Math.sin(y.rotX),se=g/2,re=w/2,_=g*.65,R=w*.65,Ee=A*.55,W=[];for(let P=0;P<b;P++){const f=s[P];f.x+=f.vx,f.y+=f.vy,f.z+=f.vz,(f.x<-_||f.x>_)&&(f.vx*=-1),(f.y<-R||f.y>R)&&(f.vy*=-1),(f.z<-Ee||f.z>Ee)&&(f.vz*=-1);const xe=f.x*U-f.z*te,Z=f.z*U+f.x*te,H=f.y*me-Z*pe,ge=Z*me+f.y*pe,ne=ge+A;if(ne<=0)continue;const G=$/($+ne*.65),_e=se+xe*G,Pe=re+H*G,Me=Math.max(.18,Math.min(.85,(ge+A)/(A*1.4)));W.push({x:_e,y:Pe,scale:G,alpha:Me,radius:Math.max(1.2,f.radius*G),colorType:f.colorType})}const fe=W.length;for(let P=0;P<fe;P++){const f=W[P];let xe=0;for(let Z=P+1;Z<fe&&xe<3;Z++){const H=W[Z],ge=f.x-H.x,ne=f.y-H.y,G=ge*ge+ne*ne;if(G<Ne){xe++;const _e=Math.sqrt(G),Pe=(1-_e/o)*.4*Math.min(f.alpha,H.alpha),Me=f.colorType==="primary"?n:a;d.beginPath(),d.moveTo(f.x,f.y),d.lineTo(H.x,H.y),d.strokeStyle=`rgba(${Me}, ${Pe})`,d.lineWidth=Math.max(.5,(1-_e/o)*1.2),d.stroke()}}}for(let P=0;P<fe;P++){const f=W[P],xe=f.colorType==="primary"?`rgba(${n}, ${f.alpha})`:`rgba(${a}, ${f.alpha})`;d.beginPath(),d.arc(f.x,f.y,f.radius,0,Math.PI*2),d.fillStyle=xe,d.fill()}u=requestAnimationFrame(V)},le=()=>{!x&&h&&!document.hidden&&(x=!0,u=requestAnimationFrame(V))},de=()=>{x=!1,u&&(cancelAnimationFrame(u),u=null)};let ue=null;"IntersectionObserver"in window?(ue=new IntersectionObserver(([U])=>{h=U.isIntersecting,h?le():de()},{threshold:.05}),ue.observe(c)):le();const he=()=>{document.hidden?de():h&&le()};return document.addEventListener("visibilitychange",he),()=>{de(),window.removeEventListener("resize",z),window.removeEventListener("mousemove",D),window.removeEventListener("mouseleave",Le),document.removeEventListener("visibilitychange",he),ue&&ue.disconnect()}},[r,n,a,o,i]),e.jsx("canvas",{ref:l,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const es=Ue.memo(Qt);function ot({children:t}){const r=Be(),n=r.pathname==="/login",a=r.pathname==="/register",[o,i]=m.useState({x:0,y:0}),[l,c]=m.useState({x:50,y:42}),d=h=>{if(h.pointerType==="touch")return;const x=h.currentTarget.getBoundingClientRect(),g=(h.clientX-x.left)/x.width,w=(h.clientY-x.top)/x.height;i({x:(.5-w)*10,y:(g-.5)*10}),c({x:g*100,y:w*100})},u=()=>{i({x:0,y:0}),c({x:50,y:42})};return e.jsxs("main",{className:`kx-page auth-page ${n?"auth-page-login":""} ${a?"auth-page-register":""}`,children:[e.jsx(es,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:130,speed:.4}),e.jsx("div",{className:"kx-grid","aria-hidden":"true"}),e.jsx("div",{className:"kx-noise","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-top","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-bottom","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-left","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-right","aria-hidden":"true"}),e.jsxs("section",{className:`kx-stage ${a?"kx-stage-wide":""}`,children:[e.jsx("div",{className:"kx-tilt",onPointerMove:d,onPointerLeave:u,onPointerCancel:u,style:{transform:`rotateX(${o.x}deg) rotateY(${o.y}deg)`},children:e.jsxs("div",{className:"kx-card-shell",children:[e.jsx("div",{className:"kx-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"kx-runners","aria-hidden":"true",children:[e.jsx("span",{className:"kx-runner kx-runner-top"}),e.jsx("span",{className:"kx-runner kx-runner-right"}),e.jsx("span",{className:"kx-runner kx-runner-bottom"}),e.jsx("span",{className:"kx-runner kx-runner-left"})]}),e.jsxs("article",{className:"kx-card",children:[e.jsx("div",{className:"kx-pointer-glow","aria-hidden":"true",style:{left:`${l.x}%`,top:`${l.y}%`}}),e.jsx("div",{className:"kx-card-pattern","aria-hidden":"true"}),e.jsxs("header",{className:"kx-header",children:[e.jsx(T,{to:"/",className:"kx-logo-link","aria-label":"Ozilla Festival Home",children:e.jsxs("div",{className:"kx-logo",children:[e.jsx("img",{src:qe("/assets/ozilla/logo.png"),alt:"Ozilla Festival Logo",onError:h=>{h.currentTarget.src=qe("/assets/logo.jpeg")}}),e.jsx("i",{"aria-hidden":"true"})]})}),e.jsx("span",{className:"kx-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"kx-title",children:n?"Welcome Back":"Join Ozilla Festival"}),e.jsx("p",{className:"kx-subtitle",children:n?"Sign in to access your passes, tickets & workspace":"Create your account for the ultimate festival experience"}),e.jsxs("div",{className:"kx-tabs",children:[e.jsx(T,{to:`/login${r.search}`,className:`kx-tab-btn ${n?"active":""}`,children:"Sign In"}),e.jsx(T,{to:`/register${r.search}`,className:`kx-tab-btn ${a?"active":""}`,children:"Create Account"})]})]}),e.jsx("div",{className:"kx-card-body",children:t||e.jsx(Ve,{})})]})]})}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function ts({children:t,className:r="",onClick:n,mouseX:a,spring:o,distance:i,magnification:l,baseItemSize:c,label:d}){const u=m.useRef(null),h=Et(0),x=gt(a,A=>{if(A===1/0||!u.current)return i;const Ne=u.current.getBoundingClientRect(),K=Ne.left+Ne.width/2;return A-K}),g=gt(x,[-i,0,i],[c,l,c]),w=Ot(g,o),Ae=A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),n?.())},b=()=>{h.set(1)},$=()=>{h.set(0)};return e.jsx(ut.div,{ref:u,style:{width:w,height:w},onHoverStart:b,onHoverEnd:$,onFocus:b,onBlur:$,onClick:n,className:`dock-item ${r}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":d,onKeyDown:Ae,children:m.Children.map(t,A=>m.cloneElement(A,{isHovered:h}))})}function ss({children:t,className:r="",...n}){const{isHovered:a}=n,[o,i]=m.useState(!1);return m.useEffect(()=>{if(!a)return;const l=a.on("change",c=>{i(c===1)});return()=>l()},[a]),e.jsx(It,{children:o&&e.jsx(ut.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${r}`,role:"tooltip",style:{x:"-50%"},children:t})})}function rs({children:t,className:r=""}){return e.jsx("div",{className:`dock-icon ${r}`,children:t})}function ns({items:t,className:r="",spring:n={mass:.1,stiffness:220,damping:18},magnification:a=52,distance:o=120,panelHeight:i=44,baseItemSize:l=36}){const c=Et(1/0),d=Be(),u=_t();return e.jsx("div",{className:"dock-outer",children:e.jsx(ut.div,{onMouseMove:h=>c.set(h.clientX),onMouseLeave:()=>c.set(1/0),className:`dock-panel ${r}`,style:{height:i},role:"toolbar","aria-label":"Application dock",children:t.map((h,x)=>{const g=d.pathname===h.to||h.to!=="/"&&d.pathname.startsWith(h.to)||h.to==="/"&&d.pathname==="/dashboard";return e.jsxs(ts,{onClick:()=>{h.onClick?.(),h.to&&u(h.to)},className:`${h.className||""} ${g?"active":""}`,mouseX:c,spring:n,distance:o,magnification:a,baseItemSize:l,label:h.label,children:[e.jsx(rs,{children:h.icon}),e.jsx(ss,{children:h.label})]},h.to||x)})})})}function L({path:t,size:r=24,viewBox:n="0 0 24 24",fill:a="none",stroke:o="currentColor",strokeWidth:i=1.8}){return e.jsx("svg",{width:r,height:r,viewBox:n,fill:a,stroke:o,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const Xe={home:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(L,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(L,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},as=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function jt(t){return t?.firstName||t?.name||t?.email||"Account"}function Lt(){const{user:t,isAdmin:r,logout:n}=ht(),a=_t(),o=Be(),[i,l]=m.useState(!1),[c,d]=m.useState(!1),[u,h]=m.useState(!1),x=m.useRef(null),g=Ue.useMemo(()=>{const b=[...as];return r&&b.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),b},[r]),w=Ue.useMemo(()=>g.map(b=>({label:b.label,to:b.to,icon:Xe[b.icon],className:b.cta?"dock-item-cta":""})),[g]);m.useEffect(()=>{const b=()=>{x.current||(x.current=window.requestAnimationFrame(()=>{l(window.scrollY>12),x.current=null}))};return b(),window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),x.current&&window.cancelAnimationFrame(x.current)}},[]),m.useEffect(()=>{d(!1),h(!1)},[o.pathname]);const Ae=()=>{n(),a("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${i?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(T,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Festival home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:qe("/assets/ozilla/logo.png"),alt:"Ozilla Festival",onError:b=>{b.currentTarget.src=qe("/assets/company-logo.jpeg")}})}),e.jsxs("div",{className:"dock-site-brand-text",children:[e.jsx("strong",{children:"OZILLA"}),e.jsx("small",{children:"FESTIVAL '26"})]})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(ns,{items:w,className:"dock-nav",magnification:50,distance:130,panelHeight:58,baseItemSize:38,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>h(b=>!b),"aria-expanded":u,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(jt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:jt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(T,{to:"/account",children:"Account"}),e.jsx(T,{to:"/tickets/my-tickets",children:"My Tickets"}),r&&e.jsx(T,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:Ae,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(T,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${c?"open":""}`,"aria-label":c?"Close menu":"Open menu","aria-expanded":c,onClick:()=>d(b=>!b),children:c?Xe.close:Xe.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${c?"open":""}`,onClick:()=>d(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${c?"open":""}`,onClick:b=>b.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>d(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:g.map(b=>e.jsxs(zt,{to:b.to,className:b.cta?"dock-mobile-link-cta":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:Xe[b.icon]}),e.jsx("span",{children:b.label}),b.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},b.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{Ae(),d(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/login",onClick:()=>d(!1),children:"Login"}),e.jsx(T,{to:"/register",onClick:()=>d(!1),children:"Sign Up"})]})})]})})]})}const os=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP & Ticket Passes",href:"/tickets"},{label:"The Festival Vibe",href:"/#about"},{label:"World-Class Facilities",href:"/#facilities"},{label:"My Digital Passes",href:"/tickets/my-tickets"}],is=[{label:"Instagram",href:"https://www.instagram.com/ozillafestival"}],cs=[{label:"Sponsorship Inquiries",href:"/#sponsorship"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Hotel & Travel Partners",href:"/hotels"},{label:"Privacy & Terms",href:"/privacy"}];function Pt(){return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"kex-footer",children:[e.jsx("div",{className:"kex-bg-glow","aria-hidden":"true"}),e.jsx("div",{className:"kex-bg-overlay","aria-hidden":"true"}),e.jsxs("div",{className:"kex-container",children:[e.jsxs("div",{className:"kex-nav-grid",children:[e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"MENU"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:os.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(T,{to:t.href,children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"SOCIALS"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:is.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"RESOURCES"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:cs.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(T,{to:t.href,children:t.label})},t.label))}),e.jsx("div",{className:"kex-action-wrap",children:e.jsx("a",{href:"mailto:ozillafestival@gmail.com",className:"kex-pill-btn",children:"Send a message"})})]})]}),e.jsx("div",{className:"kex-hero-word-wrap","aria-hidden":"true",children:e.jsx("span",{className:"kex-hero-word",children:"OZILLA FEST"})}),e.jsxs("div",{className:"kex-bottom-row",children:[e.jsxs("div",{className:"kex-bottom-links",children:[e.jsx(T,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(T,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(T,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]}),e.jsx("p",{className:"kex-bottom-copy",children:"© 2026 Ozilla Festival & Prism Entertainment. All rights reserved."})]})]})]}),e.jsx("style",{children:ls})]})}const ls=`
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
`;function Q({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(Lt,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(Ve,{})}),e.jsx(Pt,{})]})}function it({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(Lt,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(Ve,{})})}),e.jsx(Pt,{})]})}function ds(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}const us=m.lazy(()=>C(()=>import("./LoginPage-CeRZKHKO.js"),__vite__mapDeps([0,1,2,3,4]))),hs=m.lazy(()=>C(()=>import("./RegisterPage-Wt08g9vh.js"),__vite__mapDeps([5,1,2,3,4]))),ms=m.lazy(()=>C(()=>import("./GoogleAuthCallbackPage-C2m-jjSp.js"),__vite__mapDeps([6,1,2,4]))),ps=m.lazy(()=>C(()=>import("./DashboardPage-P1knAltE.js"),__vite__mapDeps([7,1,2,8,4]))),fs=m.lazy(()=>C(()=>import("./UserDashboardPage-1fQiqIro.js"),__vite__mapDeps([9,1,2,10,11,12,13,4]))),xs=m.lazy(()=>C(()=>import("./TicketPortalPage-ABQ2mH23.js"),__vite__mapDeps([14,1,2,10,11,15,4]))),gs=m.lazy(()=>C(()=>import("./MyTicketsPage-CvFZfoED.js"),__vite__mapDeps([16,1,2,10,11,17,13,4]))),bs=m.lazy(()=>C(()=>import("./TicketViewPage-BvdcJRpx.js"),__vite__mapDeps([18,1,2,10,11,17,13,4,15]))),vs=m.lazy(()=>C(()=>import("./TicketVerificationPage-CYiDoIHP.js"),__vite__mapDeps([19,1,2,11,15,4]))),js=m.lazy(()=>C(()=>import("./AdminDashboardPage-CAuOXA0o.js"),__vite__mapDeps([20,1,2,12,15,4]))),ys=m.lazy(()=>C(()=>import("./AdminTicketReviewPage-BhfxWvEf.js"),__vite__mapDeps([21,1,2,11,15,12,4]))),ks=m.lazy(()=>C(()=>import("./HotelsPage-DaeELR14.js"),__vite__mapDeps([22,1,2,8,4]))),yt=m.lazy(()=>C(()=>import("./FestivalSchedulePage-C-fwl41C.js"),__vite__mapDeps([23,1,2]))),kt=m.lazy(()=>C(()=>import("./LegalPage-0v422c6k.js"),__vite__mapDeps([24,1,2]))),ws=m.lazy(()=>C(()=>import("./NotFound-DvQu_5Ky.js"),__vite__mapDeps([25,1,2])));function As(){return e.jsx(m.Suspense,{fallback:e.jsx(ds,{}),children:e.jsxs(Dt,{children:[e.jsxs(v,{element:e.jsx(Jt,{}),children:[e.jsx(v,{path:"/login",element:e.jsx(ot,{children:e.jsx(us,{})})}),e.jsx(v,{path:"/register",element:e.jsx(ot,{children:e.jsx(hs,{})})}),e.jsx(v,{path:"/auth/google/callback",element:e.jsx(ot,{children:e.jsx(ms,{})})})]}),e.jsx(v,{path:"/",element:e.jsx(Q,{children:e.jsx(ps,{})})}),e.jsx(v,{path:"/dashboard",element:e.jsx(S,{to:"/",replace:!0})}),e.jsx(v,{path:"/about",element:e.jsx(S,{to:"/#about",replace:!0})}),e.jsx(v,{path:"/collaboration",element:e.jsx(S,{to:"/#sponsorship",replace:!0})}),e.jsx(v,{path:"/prismfest",element:e.jsx(S,{to:"/#home",replace:!0})}),e.jsx(v,{path:"/prismfest/celebrities",element:e.jsx(S,{to:"/#celebrities",replace:!0})}),e.jsx(v,{path:"/prismfest/events",element:e.jsx(S,{to:"/#events",replace:!0})}),e.jsx(v,{path:"/prismfest/future",element:e.jsx(S,{to:"/#future-events",replace:!0})}),e.jsx(v,{path:"/history",element:e.jsx(S,{to:"/#history",replace:!0})}),e.jsx(v,{path:"/events",element:e.jsx(S,{to:"/#events",replace:!0})}),e.jsx(v,{path:"/sponsorship",element:e.jsx(S,{to:"/#sponsorship",replace:!0})}),e.jsx(v,{path:"/contact",element:e.jsx(S,{to:"/#contact",replace:!0})}),e.jsx(v,{path:"/facilities",element:e.jsx(S,{to:"/#facilities",replace:!0})}),e.jsx(v,{path:"/hotels",element:e.jsx(Q,{children:e.jsx(ks,{})})}),e.jsx(v,{path:"/schedule",element:e.jsx(Q,{children:e.jsx(yt,{})})}),e.jsx(v,{path:"/lineup",element:e.jsx(Q,{children:e.jsx(yt,{})})}),e.jsx(v,{path:"/restaurants",element:e.jsx(S,{to:"/#restaurants",replace:!0})}),e.jsx(v,{path:"/discounts",element:e.jsx(S,{to:"/#discounts",replace:!0})}),e.jsx(v,{path:"/partner",element:e.jsx(S,{to:"/#about",replace:!0})}),e.jsx(v,{path:"/privacy",element:e.jsx(Q,{children:e.jsx(kt,{type:"privacy"})})}),e.jsx(v,{path:"/terms",element:e.jsx(Q,{children:e.jsx(kt,{type:"terms"})})}),e.jsx(v,{path:"/verification/:ticketId",element:e.jsx(Q,{children:e.jsx(vs,{})})}),e.jsx(v,{path:"/tickets",element:e.jsx(it,{children:e.jsx(xs,{})})}),e.jsxs(v,{element:e.jsx(Kt,{}),children:[e.jsx(v,{path:"/account",element:e.jsx(Q,{children:e.jsx(fs,{})})}),e.jsx(v,{path:"/admin",element:e.jsx(S,{to:"/admin/dashboard",replace:!0})}),e.jsx(v,{path:"/admin/dashboard",element:e.jsx(Q,{children:e.jsx(js,{})})}),e.jsx(v,{path:"/tickets/my-tickets",element:e.jsx(it,{children:e.jsx(gs,{})})}),e.jsx(v,{path:"/tickets/view/:ticketId",element:e.jsx(it,{children:e.jsx(bs,{})})}),e.jsx(v,{path:"/admin/tickets",element:e.jsx(Q,{children:e.jsx(ys,{})})})]}),e.jsx(v,{path:"*",element:e.jsx(ws,{})})]})})}const Ns=2,ke=8e3,we=20,Es=`
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
`,_s=`
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
`,Rs=`
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
`,Ss=`
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
`;function wt(t,r,n){const a=t.createShader(r);return a?(t.shaderSource(a,n),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("ParticleDrift shader:",t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function At(t,r,n){const a=wt(t,t.VERTEX_SHADER,r),o=wt(t,t.FRAGMENT_SHADER,n);if(!a||!o)return null;const i=t.createProgram();return i?(t.attachShader(i,a),t.attachShader(i,o),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(console.error("ParticleDrift link:",t.getProgramInfoLog(i)),null)):null}function Nt(t,r){if(!t)return r;const n=String(t).trim();if(n.charAt(0)==="#"){let o=n.slice(1);if((o.length===3||o.length===4)&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),o.length>=6){const i=parseInt(o.slice(0,2),16),l=parseInt(o.slice(2,4),16),c=parseInt(o.slice(4,6),16);if(!isNaN(i)&&!isNaN(l)&&!isNaN(c))return[i/255,l/255,c/255]}return r}const a=n.match(/[\d.]+/g);return a&&a.length>=3?[Math.min(255,parseFloat(a[0]))/255,Math.min(255,parseFloat(a[1]))/255,Math.min(255,parseFloat(a[2]))/255]:r}function ie(t,r){return typeof t=="number"&&isFinite(t)?t:r}function Re(t,r,n){return t<r?r:t>n?n:t}function Ls(t){let r=t>>>0;return function(){r+=1831565813;let n=r;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ct=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function Ps({style:t,background:r="transparent",baseColor:n="#F84400",accentColor:a="#ECECEC",density:o=235,dotSize:i=14,speed:l=100,direction:c=0,hover:d=200,linkDistance:u=202,linkThickness:h=2.5,width:x,height:g,isFixed:w=!0}){const Ae=m.useRef(null),b=m.useRef(null),$=m.useRef({w:0,h:0});$.current={w:ie(x,0),h:ie(g,0)};const A=m.useRef({x:-1e4,y:-1e4}),Ne=m.useRef({});Ne.current={base:n,accent:a,density:Math.round(Re(ie(o,90),10,400)),dotSize:Re(ie(i,5),1,24),speed:Re(ie(l,50),0,100)/50,direction:Re(ie(c,0),0,360),hover:Re(ie(d,100),0,200)/100,linkDistance:Re(ie(u,120),0,400),linkThickness:Re(ie(h,1),.5,8)},m.useEffect(()=>{const y=b.current;if(!y)return;const s=y.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!s){console.error("ParticleDrift: WebGL unavailable");return}const z=At(s,Es,_s),D=At(s,Rs,Ss);if(!z||!D)return;const Le=new Map,V=(k,N)=>{const j=(k===z?"L:":"D:")+N;return Le.has(j)||Le.set(j,s.getUniformLocation(k,N)),Le.get(j)},le=new Float32Array(ke*6*2),de=new Float32Array(ke*6*2),ue=new Float32Array(ke*6*2),he=new Float32Array(ke*6*3);for(let k=0;k<ke;k++)for(let N=0;N<6;N++){const j=(k*6+N)*2;ue[j]=ct[N][0],ue[j+1]=ct[N][1]}const U=s.createBuffer(),te=s.createBuffer(),me=s.createBuffer(),pe=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,U),s.bufferData(s.ARRAY_BUFFER,le.byteLength,s.DYNAMIC_DRAW),s.bindBuffer(s.ARRAY_BUFFER,te),s.bufferData(s.ARRAY_BUFFER,de.byteLength,s.DYNAMIC_DRAW),s.bindBuffer(s.ARRAY_BUFFER,me),s.bufferData(s.ARRAY_BUFFER,ue,s.STATIC_DRAW),s.bindBuffer(s.ARRAY_BUFFER,pe),s.bufferData(s.ARRAY_BUFFER,he.byteLength,s.DYNAMIC_DRAW);const se=Ls(20260824);let re=0,_=new Float32Array(0),R=new Float32Array(0),Ee=new Float32Array(0),W=new Float32Array(0),fe=new Float32Array(0);const P=s.createBuffer(),f=s.createBuffer(),xe=(k,N,j)=>{re=k,_=new Float32Array(k),R=new Float32Array(k),Ee=new Float32Array(k),W=new Float32Array(k*2),fe=new Float32Array(k);for(let J=0;J<k;J++)_[J]=se()*N,R[J]=se()*j,Ee[J]=(se()*.4+.1)*60;s.bindBuffer(s.ARRAY_BUFFER,P),s.bufferData(s.ARRAY_BUFFER,W.byteLength,s.DYNAMIC_DRAW),s.bindBuffer(s.ARRAY_BUFFER,f),s.bufferData(s.ARRAY_BUFFER,fe.byteLength,s.DYNAMIC_DRAW)};let Z=0,H=performance.now(),ge=-1,ne=0,G=0;const _e=k=>{if(Z=requestAnimationFrame(_e),typeof document<"u"&&document.hidden){H=k;return}const N=Math.min(.05,(k-H)/1e3);H=k;const j=Ne.current,J=j.speed,Ke=Math.min(window.devicePixelRatio||1,Ns),F=$.current.w||y.clientWidth||window.innerWidth||1200,Y=$.current.h||y.clientHeight||window.innerHeight||800,Ze=Math.max(1,Math.round(F*Ke)),Je=Math.max(1,Math.round(Y*Ke));(y.width!==Ze||y.height!==Je)&&(y.width=Ze,y.height=Je),s.viewport(0,0,Ze,Je);const Qe=F<768,Mt=F>=768&&F<1024;let ze=j.density,et=j.linkDistance,tt=j.dotSize;if(Qe?(ze=Math.max(60,Math.min(Math.round(j.density*.38),90)),et=Math.min(j.linkDistance,135),tt=Math.min(j.dotSize,8.5)):Mt&&(ze=Math.max(90,Math.min(Math.round(j.density*.6),145)),et=Math.min(j.linkDistance,165),tt=Math.min(j.dotSize,11)),ze!==ge&&(xe(ze,F,Y),ge=ze),F!==ne||Y!==G){const p=F/Math.max(ne||F,1),E=Y/Math.max(G||Y,1);for(let M=0;M<re;M++)_[M]*=p,R[M]*=E;ne=F,G=Y}const Ye=A.current,mt=j.hover,st=(Qe?100:180)*(mt>0?1:0),be=et,pt=Qe?Math.min(j.linkThickness,1.6):j.linkThickness,ft=j.direction*Math.PI/180,Tt=Math.sin(ft),Ft=Math.cos(ft);let ve=0;const xt=(p,E,M,X,O,ae,Oe,$e)=>{if(!(ve>=ke)){for(let je=0;je<6;je++){const We=(ve*6+je)*2,rt=(ve*6+je)*3;le[We]=p,le[We+1]=E,de[We]=M,de[We+1]=X,he[rt]=ct[je][0]===0?O:ae,he[rt+1]=Oe,he[rt+2]=$e}ve++}};for(let p=0;p<re;p++){_[p]+=Ee[p]*Tt*N*J,R[p]+=Ee[p]*Ft*N*J,_[p]<-we?(_[p]=F+we,R[p]=se()*Y):_[p]>F+we&&(_[p]=-we,R[p]=se()*Y),R[p]<-we?(R[p]=Y+we,_[p]=se()*F):R[p]>Y+we&&(R[p]=-we,_[p]=se()*F);const E=Ye.x-_[p],M=Ye.y-R[p],X=Math.sqrt(E*E+M*M),O=st>0&&X<st?1:0;if(O===1){const ae=.5*(1-X/st)*mt;xt(_[p],R[p],Ye.x,Ye.y,ae,ae,1,pt)}W[p*2]=_[p],W[p*2+1]=R[p],fe[p]=O}if(be>0){const p=be*be;for(let E=0;E<re&&ve<ke;E++){const M=_[E],X=R[E];for(let O=E+1;O<re&&ve<ke;O++){const ae=M-_[O];if(ae>be||ae<-be)continue;const Oe=X-R[O];if(Oe>be||Oe<-be)continue;const $e=ae*ae+Oe*Oe;if($e>=p)continue;const je=.15*(1-Math.sqrt($e)/be);xt(M,X,_[O],R[O],je,je,0,pt)}}}s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA);const Te=Nt(j.base,[.973,.267,0]),Fe=Nt(j.accent,[.925,.925,.925]);if(ve>0){s.useProgram(z);const p=ve*6;s.bindBuffer(s.ARRAY_BUFFER,U),s.bufferSubData(s.ARRAY_BUFFER,0,le.subarray(0,p*2));const E=s.getAttribLocation(z,"a_p0");s.enableVertexAttribArray(E),s.vertexAttribPointer(E,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,te),s.bufferSubData(s.ARRAY_BUFFER,0,de.subarray(0,p*2));const M=s.getAttribLocation(z,"a_p1");s.enableVertexAttribArray(M),s.vertexAttribPointer(M,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,me);const X=s.getAttribLocation(z,"a_corner");s.enableVertexAttribArray(X),s.vertexAttribPointer(X,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,pe),s.bufferSubData(s.ARRAY_BUFFER,0,he.subarray(0,p*3));const O=s.getAttribLocation(z,"a_shade");s.enableVertexAttribArray(O),s.vertexAttribPointer(O,3,s.FLOAT,!1,0,0),s.uniform2f(V(z,"uSize"),F,Y),s.uniform3f(V(z,"uBase"),Te[0],Te[1],Te[2]),s.uniform3f(V(z,"uAccent"),Fe[0],Fe[1],Fe[2]),s.drawArrays(s.TRIANGLES,0,p),s.disableVertexAttribArray(E),s.disableVertexAttribArray(M),s.disableVertexAttribArray(X),s.disableVertexAttribArray(O)}if(re>0){s.useProgram(D),s.bindBuffer(s.ARRAY_BUFFER,P),s.bufferSubData(s.ARRAY_BUFFER,0,W);const p=s.getAttribLocation(D,"a_pos");s.enableVertexAttribArray(p),s.vertexAttribPointer(p,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,f),s.bufferSubData(s.ARRAY_BUFFER,0,fe);const E=s.getAttribLocation(D,"a_lit");s.enableVertexAttribArray(E),s.vertexAttribPointer(E,1,s.FLOAT,!1,0,0),s.uniform2f(V(D,"uSize"),F,Y),s.uniform1f(V(D,"uDpr"),Ke),s.uniform1f(V(D,"uDot"),tt),s.uniform1f(V(D,"uRestAlpha"),.4),s.uniform3f(V(D,"uBase"),Te[0],Te[1],Te[2]),s.uniform3f(V(D,"uAccent"),Fe[0],Fe[1],Fe[2]),s.drawArrays(s.POINTS,0,re),s.disableVertexAttribArray(p),s.disableVertexAttribArray(E)}},Pe=k=>{const N=y.getBoundingClientRect();if(N.width<=0||N.height<=0)return;const j=$.current.w||y.clientWidth||window.innerWidth||1200,J=$.current.h||y.clientHeight||window.innerHeight||800;A.current.x=(k.clientX-N.left)/N.width*j,A.current.y=(k.clientY-N.top)/N.height*J},Me=()=>{A.current.x=-1e4,A.current.y=-1e4};return window.addEventListener("pointermove",Pe,{passive:!0}),window.addEventListener("pointerleave",Me,{passive:!0}),Z=requestAnimationFrame(_e),()=>{cancelAnimationFrame(Z),window.removeEventListener("pointermove",Pe),window.removeEventListener("pointerleave",Me),s.deleteBuffer(U),s.deleteBuffer(te),s.deleteBuffer(me),s.deleteBuffer(pe),s.deleteBuffer(P),s.deleteBuffer(f),s.deleteProgram(z),s.deleteProgram(D)}},[]);const K=w?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:r,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:r,isolation:"isolate",width:typeof x=="number"&&x>0?x:"100%",height:typeof g=="number"&&g>0?g:"100%",...t};return e.jsx("div",{ref:Ae,style:K,"aria-hidden":"true",children:e.jsx("canvas",{ref:b,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function Ms(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(Ut,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(Gt,{children:[e.jsx(Ps,{}),e.jsx(As,{})]})})}class Ts extends m.Component{constructor(r){super(r),this.state={error:null}}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,n){console.error("Application render failed:",r,n)}render(){return this.state.error?e.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}lt.createRoot(document.getElementById("root")).render(e.jsx(Ue.StrictMode,{children:e.jsx(Ts,{children:e.jsx($t,{clientId:"placeholder-client-id",children:e.jsx(Ms,{})})})}));export{ds as L,es as P,Ge as a,qe as b,B as c,Zt as g,ee as t,ht as u};
