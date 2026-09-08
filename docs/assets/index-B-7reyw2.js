const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserDashboardPage-BsHbjtsi.js","assets/vendor-motion-Do9_0UrH.js","assets/vendor-react-nW6paGhL.js","assets/useTicket-k76QQcMP.js","assets/ticketService-DMN80rQ5.js","assets/PageHeader-DSdXBTCQ.js","assets/formatDate.util-wEQv7dlP.js","assets/vendor-utils-nxL8y1-h.js","assets/TicketPortalPage-Cq4_vSZr.js","assets/AlertMessage-D_3e8DO-.js","assets/MyTicketsPage-P3IP1F3q.js","assets/GeneratedTicketCard-CCfCQ_fS.js","assets/TicketViewPage-CAOj5lLt.js","assets/TicketVerificationPage-DL6wifID.js","assets/AdminDashboardPage-iKBJabWQ.js","assets/AdminTicketReviewPage-CNdDIEe0.js","assets/HotelsPage-CmlL0dUs.js","assets/FestivalSchedulePage-2Cng7Uio.js","assets/LegalPage-Cp5apOjn.js","assets/NotFound-12U-ahfn.js"])))=>i.map(i=>d[i]);
var da=Object.defineProperty;var pa=(t,s,a)=>s in t?da(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var Rt=(t,s,a)=>pa(t,typeof s!="symbol"?s+"":s,a);import{j as e,u as aa,m as O,a as It,b as ma,A as ua}from"./vendor-motion-Do9_0UrH.js";import{a as ha,r as m,R as lt,u as We,N as ue,O as ct,L as q,b as dt,c as fa,d as ga,e as xa,f as H,B as ba}from"./vendor-react-nW6paGhL.js";import{a as va}from"./vendor-utils-nxL8y1-h.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();var Et={},Tt=ha;Et.createRoot=Tt.createRoot,Et.hydrateRoot=Tt.hydrateRoot;function ya(t={}){const{nonce:s,locale:a,onScriptLoadSuccess:r,onScriptLoadError:i}=t,[l,d]=m.useState(!1),o=m.useRef(r);o.current=r;const p=m.useRef(i);return p.current=i,m.useEffect(()=>{const f=document.createElement("script");return f.src="https://accounts.google.com/gsi/client",a&&(f.src+=`?hl=${a}`),f.async=!0,f.defer=!0,f.nonce=s,f.onload=()=>{var x;d(!0),(x=o.current)===null||x===void 0||x.call(o)},f.onerror=()=>{var x;d(!1),(x=p.current)===null||x===void 0||x.call(p)},document.body.appendChild(f),()=>{document.body.removeChild(f)}},[s]),l}const wa=m.createContext(null);function ja({clientId:t,nonce:s,locale:a,onScriptLoadSuccess:r,onScriptLoadError:i,children:l}){const d=ya({nonce:s,onScriptLoadSuccess:r,onScriptLoadError:i,locale:a}),o=m.useMemo(()=>({locale:a,clientId:t,scriptLoadedSuccessfully:d}),[t,d]);return lt.createElement(wa.Provider,{value:o},l)}const yt="prism_token",je={getToken(){return localStorage.getItem(yt)},setToken(t){localStorage.setItem(yt,t)},removeToken(){localStorage.removeItem(yt)}},ka="http://localhost:5000/api",we=va.create({baseURL:ka,headers:{"Content-Type":"application/json"}});we.interceptors.request.use(t=>{const s=je.getToken();return s&&(t.headers.Authorization=`Bearer ${s}`),t},t=>Promise.reject(t));we.interceptors.response.use(t=>t,t=>(t.response?.status===401&&je.removeToken(),Promise.reject(t)));const Ae={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/send-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},sa="ozilla_local_users";let Ze=!1;function be(t){return String(t||"").toLowerCase().trim()}function ze(t){return String(t||"").trim()}function Ce(){try{const t=localStorage.getItem(sa),s=t?JSON.parse(t):[];return Array.isArray(s)?s:[]}catch{return[]}}function He(t){localStorage.setItem(sa,JSON.stringify(t))}function Na(t){const s={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(s))}`}function wt(t){const s=String(t||"");if(!s)return null;if(s.startsWith("local."))try{return JSON.parse(atob(s.slice(6)))}catch{return null}const a=s.split(".");if(a.length===3)try{return JSON.parse(atob(a[1]))}catch{return null}return null}function ot(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function et(t={}){const s=String(t.firstName||"Local").trim()||"Local",a=String(t.lastName||"User").trim()||"User",r=be(t.email||"local@ozillafestival.com"),i=ze(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:s,lastName:a,name:`${s} ${a}`.trim(),email:r,phone:i,password:String(t.password||""),role:"user"}}function Pt(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function ht(t){return Pt(t)?(Ze=!0,!0):!1}function tt(t){const s=ot(t);return{token:Na(s),user:s,mode:"local-fallback"}}const $e={async login(t){const s=String(t?.email||t?.phone||t?.identifier||"").trim(),a=be(s),r=ze(s),i=String(t?.password||"").trim();try{const l=await we.post(Ae.AUTH.LOGIN,{email:s,password:i});if(l?.data?.token){const d=Ce(),o=d.findIndex(f=>be(f.email)===a||ze(f.phone)===r),p={id:l.data.user?.id||`user-${Date.now()}`,firstName:l.data.user?.firstName||"",lastName:l.data.user?.lastName||"",name:l.data.user?.name||"",email:l.data.user?.email?be(l.data.user.email):a,phone:l.data.user?.phone?ze(l.data.user.phone):r,password:i,role:l.data.user?.role||"user"};return o>=0?(d[o]=p,He(d)):He([p,...d]),l.data}return l.data}catch(l){const d=Ce(),o=d.find(f=>(be(f.email)===a||ze(f.phone)===r)&&f.password===i);if(o)return Ze=!0,tt(o);const p=d.find(f=>be(f.email)===a||ze(f.phone)===r);if(p&&p.password!==i){const f=new Error("Invalid credentials. Please check your password.");throw f.response={status:401,data:{message:"Invalid credentials. Please check your password."}},f}throw l}},async register(t){const s=be(t?.email),a=ze(t?.phone),r=String(t?.password||"").trim(),i=Ce(),l=i.find(o=>be(o.email)===s),d=i.find(o=>ze(o.phone)===a);try{const o=await we.post(Ae.AUTH.REGISTER,{...t,email:s,phone:a,password:r});if(o?.data?.token){const p=et({id:o.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:s,phone:a,password:r}),f=i.filter(x=>be(x.email)!==s&&ze(x.phone)!==a);He([p,...f])}return o.data}catch(o){if(o?.response?.status===409||o?.response?.data?.message)throw o;if(l){const f=new Error("Account already exists with this email. Please log in.");throw f.response={status:409,data:{message:"Account already exists with this email. Please log in."}},f}if(d){const f=new Error("Account already exists with this phone number. Please log in.");throw f.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},f}const p=et({...t,email:s,phone:a,password:r});return He([p,...i]),Ze=!0,tt(p)}},async sendOtp(t){const s=be(t);try{return(await we.post(Ae.AUTH.SEND_OTP,{email:s})).data}catch(a){if(a?.response?.data?.message)throw a;if(Pt(a)){const r=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw r.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},r}throw a}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const s=be(t?.email),a=String(t?.otp||"").trim();try{return(await we.post(Ae.AUTH.VERIFY_OTP,{email:s,otp:a})).data}catch(r){if(r?.response?.data?.message)throw r;if(Pt(r)){const i=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw i.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},i}throw r}},async getCurrentUser(){const t=je.getToken();if(!t){const a=new Error("Unauthorized");throw a.response={status:401,data:{message:"Unauthorized"}},a}const s=wt(t);if(s?.mode==="local-fallback"||String(t||"").startsWith("local.")){const r=Ce().find(i=>i.id===s?.sub||be(i.email)===be(s?.email));if(r)return ot(r)}try{return(await we.get(Ae.AUTH.ME)).data}catch(a){const i=Ce().find(l=>l.id===s?.sub||be(l.email)===be(s?.email));if(i)return ot(i);throw a}},async logout(){if(Ze)return{message:"Logged out successfully"};try{return(await we.post(Ae.AUTH.LOGOUT)).data}catch(t){if(ht(t))return{message:"Logged out successfully"};throw t}},async forgotPassword(t){return(await we.post(Ae.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await we.post(Ae.AUTH.RESET_PASSWORD,t)).data},async googleAuth(t,s){if(Ze){const r=et(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=Ce();return i.some(l=>l.email===r.email)||He([r,...i]),tt(r)}try{return(await we.post(Ae.AUTH.GOOGLE,{token:t,profile:s})).data}catch(a){if(ht(a)){const i=et(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return tt(i)}throw a}},async googleCodeLogin(t,s="postmessage",a){if(Ze){const i=et(a||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),l=Ce();return l.some(d=>d.email===i.email)||He([i,...l]),tt(i)}try{return(await we.post(Ae.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:s,profile:a})).data}catch(r){if(ht(r)){const l=et(a||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return tt(l)}throw r}},async googleTokenLogin(t,s){return this.googleAuth(t,s)},async updateProfile(t){if(Ze){const s=je.getToken(),a=wt(s),r=Ce(),i=r.findIndex(o=>o.id===a?.sub||o.email===a?.email);if(i===-1){const o=new Error("Unauthorized");throw o.response={status:401,data:{message:"Unauthorized"}},o}const l=r[i],d={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return d.name=`${d.firstName||""} ${d.lastName||""}`.trim()||l.name,r[i]=d,He(r),{message:"Profile updated successfully",user:ot(d)}}try{return(await we.put(Ae.AUTH.PROFILE,t)).data}catch(s){if(ht(s)){const a=je.getToken(),r=wt(a),i=Ce(),l=i.findIndex(p=>p.id===r?.sub||p.email===r?.email);if(l===-1){const p=new Error("Unauthorized");throw p.response={status:401,data:{message:"Unauthorized"}},p}const d=i[l],o={...d,firstName:typeof t?.firstName=="string"?t.firstName.trim():d.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():d.lastName,phone:typeof t?.phone=="string"?t.phone.trim():d.phone};return o.name=`${o.firstName||""} ${o.lastName||""}`.trim()||d.name,i[l]=o,He(i),{message:"Profile updated successfully",user:ot(o)}}throw s}}},ra=m.createContext(null);function Sa({children:t}){const[s,a]=m.useState(null),[r,i]=m.useState(!0);m.useEffect(()=>{l()},[]);const l=async()=>{try{if(je.getToken()){const N=await $e.getCurrentUser();a(N)}}catch{je.removeToken()}finally{i(!1)}},d=async j=>{const N=await $e.login(j);return je.setToken(N.token),a(N.user),N},o=async j=>{const N=await $e.register(j);return je.setToken(N.token),a(N.user),N},p=()=>{$e.logout().catch(()=>{}),je.removeToken(),a(null)},f=s?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(s?.email||"").toLowerCase().trim()),x={user:s,isAdmin:f,loading:r,login:d,register:o,logout:p,checkAuth:l};return e.jsx(ra.Provider,{value:x,children:t})}const Aa="modulepreload",Ea=function(t){return"/ozillafest/"+t},Lt={},Ee=function(s,a,r){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),o=d?.nonce||d?.getAttribute("nonce");i=Promise.allSettled(a.map(p=>{if(p=Ea(p),p in Lt)return;Lt[p]=!0;const f=p.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const j=document.createElement("link");if(j.rel=f?"stylesheet":Aa,f||(j.as="script"),j.crossOrigin="",j.href=p,o&&j.setAttribute("nonce",o),document.head.appendChild(j),f)return new Promise((N,C)=>{j.addEventListener("load",N),j.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(d){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=d,window.dispatchEvent(o),!o.defaultPrevented)throw d}return i.then(d=>{for(const o of d||[])o.status==="rejected"&&l(o.reason);return s().catch(l)})};function at(){const t=m.useContext(ra);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function Pa({children:t}){const{user:s,loading:a}=at(),r=We();if(a)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!s){const i=`${r.pathname}${r.search}`,l=new URLSearchParams({returnTo:i}).toString();return e.jsx(ue,{to:`/login?${l}`,replace:!0})}return t||e.jsx(ct,{})}function xt(t,s="/dashboard"){if(!t||typeof t!="string")return s;let a=t.trim();if(a.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(a))return s;a.startsWith("/ozillafest")&&(a=a.slice(11)),a.startsWith("/")||(a=`/${a}`);const r=a.split("?")[0].replace(/\/$/,"");return!r||r==="/login"||r==="/register"?s:a}function Ra({children:t}){const{user:s,loading:a}=at(),r=We();if(a)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(s){const l=new URLSearchParams(r.search).get("returnTo"),d=xt(l,"/dashboard");return e.jsx(ue,{to:d,replace:!0})}return t||e.jsx(ct,{})}function G(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const s="/ozillafest/",a=s.endsWith("/")?s:`${s}/`,r=t.replace(/^\/+/,"");return r.startsWith("assets/")||r.startsWith("favicon")?`${a}${r}`:t.startsWith("/")?`${a}${r}`:t}function Ia({className:t="",nodeColor:s="#EC4899",lineColor:a="236, 72, 153",secondaryColor:r="255, 90, 31",maxDistance:i=135,speed:l=.5}){const d=m.useRef(null);return m.useEffect(()=>{const o=d.current;if(!o)return;const p=o.getContext("2d",{alpha:!0});if(!p)return;let f=null,x=!0,j=!1,N=o.width=o.parentElement?.clientWidth||window.innerWidth,C=o.height=o.parentElement?.clientHeight||window.innerHeight;const w=N<768?18:34,B=340,T=450,$=i*i;let D={x:N/2,y:C/2,active:!1},R={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const n=[];for(let _=0;_<w;_++)n.push({x:(Math.random()-.5)*N*1.1,y:(Math.random()-.5)*C*1.1,z:(Math.random()-.5)*T,vx:(Math.random()-.5)*l*.7,vy:(Math.random()-.5)*l*.7,vz:(Math.random()-.5)*l*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const W=()=>{o.parentElement&&(N=o.width=o.parentElement.clientWidth||window.innerWidth,C=o.height=o.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",W,{passive:!0});const A=_=>{if(!x)return;const se=o.getBoundingClientRect();D.x=_.clientX-se.left,D.y=_.clientY-se.top,D.active=!0;const K=(D.x-N/2)/(N/2),te=(D.y-C/2)/(C/2);R.targetRotY=K*.14,R.targetRotX=-te*.14},y=()=>{D.active=!1,R.targetRotX=0,R.targetRotY=0};window.addEventListener("mousemove",A,{passive:!0}),window.addEventListener("mouseleave",y,{passive:!0});const c=()=>{if(!x||document.hidden){j=!1;return}p.clearRect(0,0,N,C),R.rotX+=(R.targetRotX-R.rotX)*.05,R.rotY+=(R.targetRotY-R.rotY)*.05;const _=Math.cos(R.rotY),se=Math.sin(R.rotY),K=Math.cos(R.rotX),te=Math.sin(R.rotX),oe=N/2,U=C/2,F=N*.65,z=C*.65,ce=T*.55,u=[];for(let S=0;S<w;S++){const v=n[S];v.x+=v.vx,v.y+=v.vy,v.z+=v.vz,(v.x<-F||v.x>F)&&(v.vx*=-1),(v.y<-z||v.y>z)&&(v.vy*=-1),(v.z<-ce||v.z>ce)&&(v.vz*=-1);const P=v.x*_-v.z*se,Z=v.z*_+v.x*se,V=v.y*K-Z*te,le=Z*K+v.y*te,J=le+T;if(J<=0)continue;const re=B/(B+J*.65),de=oe+P*re,he=U+V*re,pe=Math.max(.18,Math.min(.85,(le+T)/(T*1.4)));u.push({x:de,y:he,scale:re,alpha:pe,radius:Math.max(1.2,v.radius*re),colorType:v.colorType})}const k=u.length;for(let S=0;S<k;S++){const v=u[S];let P=0;for(let Z=S+1;Z<k&&P<3;Z++){const V=u[Z],le=v.x-V.x,J=v.y-V.y,re=le*le+J*J;if(re<$){P++;const de=Math.sqrt(re),he=(1-de/i)*.4*Math.min(v.alpha,V.alpha),pe=v.colorType==="primary"?a:r;p.beginPath(),p.moveTo(v.x,v.y),p.lineTo(V.x,V.y),p.strokeStyle=`rgba(${pe}, ${he})`,p.lineWidth=Math.max(.5,(1-de/i)*1.2),p.stroke()}}}for(let S=0;S<k;S++){const v=u[S],P=v.colorType==="primary"?`rgba(${a}, ${v.alpha})`:`rgba(${r}, ${v.alpha})`;p.beginPath(),p.arc(v.x,v.y,v.radius,0,Math.PI*2),p.fillStyle=P,p.fill()}f=requestAnimationFrame(c)},h=()=>{!j&&x&&!document.hidden&&(j=!0,f=requestAnimationFrame(c))},E=()=>{j=!1,f&&(cancelAnimationFrame(f),f=null)};let M=null;"IntersectionObserver"in window?(M=new IntersectionObserver(([_])=>{x=_.isIntersecting,x?h():E()},{threshold:.05}),M.observe(o)):h();const X=()=>{document.hidden?E():x&&h()};return document.addEventListener("visibilitychange",X),()=>{E(),window.removeEventListener("resize",W),window.removeEventListener("mousemove",A),window.removeEventListener("mouseleave",y),document.removeEventListener("visibilitychange",X),M&&M.disconnect()}},[s,a,r,i,l]),e.jsx("canvas",{ref:d,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const Ta=lt.memo(Ia);function jt({children:t}){const s=We(),a=s.pathname==="/login",r=s.pathname==="/register",[i,l]=m.useState({x:0,y:0}),[d,o]=m.useState({x:50,y:42}),p=x=>{if(x.pointerType==="touch")return;const j=x.currentTarget.getBoundingClientRect(),N=(x.clientX-j.left)/j.width,C=(x.clientY-j.top)/j.height;l({x:(.5-C)*10,y:(N-.5)*10}),o({x:N*100,y:C*100})},f=()=>{l({x:0,y:0}),o({x:50,y:42})};return e.jsxs("main",{className:`kx-page auth-page ${a?"auth-page-login":""} ${r?"auth-page-register":""}`,children:[e.jsx(Ta,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:130,speed:.4}),e.jsx("div",{className:"kx-grid","aria-hidden":"true"}),e.jsx("div",{className:"kx-noise","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-top","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-bottom","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-left","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-right","aria-hidden":"true"}),e.jsxs("section",{className:`kx-stage ${r?"kx-stage-wide":""}`,children:[e.jsx("div",{className:"kx-tilt",onPointerMove:p,onPointerLeave:f,onPointerCancel:f,style:{transform:`rotateX(${i.x}deg) rotateY(${i.y}deg)`},children:e.jsxs("div",{className:"kx-card-shell",children:[e.jsx("div",{className:"kx-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"kx-runners","aria-hidden":"true",children:[e.jsx("span",{className:"kx-runner kx-runner-top"}),e.jsx("span",{className:"kx-runner kx-runner-right"}),e.jsx("span",{className:"kx-runner kx-runner-bottom"}),e.jsx("span",{className:"kx-runner kx-runner-left"})]}),e.jsxs("article",{className:"kx-card",children:[e.jsx("div",{className:"kx-pointer-glow","aria-hidden":"true",style:{left:`${d.x}%`,top:`${d.y}%`}}),e.jsx("div",{className:"kx-card-pattern","aria-hidden":"true"}),e.jsxs("header",{className:"kx-header",children:[e.jsx(q,{to:"/",className:"kx-logo-link","aria-label":"OZILLA FEST Home",children:e.jsxs("div",{className:"kx-logo",children:[e.jsx("img",{src:G("/assets/ozilla/logo.png"),alt:"OZILLA FEST Logo",onError:x=>{x.currentTarget.src=G("/assets/logo.jpeg")}}),e.jsx("i",{"aria-hidden":"true"})]})}),e.jsx("span",{className:"kx-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"kx-title",children:a?"Welcome Back":"Join OZILLA FEST"}),e.jsx("p",{className:"kx-subtitle",children:a?"Sign in to access your passes, tickets & workspace":"Create your account for the ultimate festival experience"}),e.jsxs("div",{className:"kx-tabs",children:[e.jsx(q,{to:`/login${s.search}`,className:`kx-tab-btn ${a?"active":""}`,children:"Sign In"}),e.jsx(q,{to:`/register${s.search}`,className:`kx-tab-btn ${r?"active":""}`,children:"Create Account"})]})]}),e.jsx("div",{className:"kx-card-body",children:t||e.jsx(ct,{})})]})]})}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function La({children:t,className:s="",onClick:a,mouseX:r,spring:i,distance:l,magnification:d,baseItemSize:o,label:p}){const f=m.useRef(null),x=aa(0),j=It(r,T=>{if(T===1/0||!f.current)return l;const $=f.current.getBoundingClientRect(),D=$.left+$.width/2;return T-D}),N=It(j,[-l,0,l],[o,d,o]),C=ma(N,i),ae=T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),a?.())},w=()=>{x.set(1)},B=()=>{x.set(0)};return e.jsx(O.div,{ref:f,style:{width:C,height:C},onHoverStart:w,onHoverEnd:B,onFocus:w,onBlur:B,onClick:a,className:`dock-item ${s}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":p,onKeyDown:ae,children:m.Children.map(t,T=>m.cloneElement(T,{isHovered:x}))})}function Ma({children:t,className:s="",...a}){const{isHovered:r}=a,[i,l]=m.useState(!1);return m.useEffect(()=>{if(!r)return;const d=r.on("change",o=>{l(o===1)});return()=>d()},[r]),e.jsx(ua,{children:i&&e.jsx(O.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${s}`,role:"tooltip",style:{x:"-50%"},children:t})})}function Fa({children:t,className:s=""}){return e.jsx("div",{className:`dock-icon ${s}`,children:t})}function Ca({items:t,className:s="",spring:a={mass:.1,stiffness:220,damping:18},magnification:r=52,distance:i=120,panelHeight:l=44,baseItemSize:d=36}){const o=aa(1/0),p=We(),f=dt();return e.jsx("div",{className:"dock-outer",children:e.jsx(O.div,{onMouseMove:x=>o.set(x.clientX),onMouseLeave:()=>o.set(1/0),className:`dock-panel ${s}`,style:{height:l},role:"toolbar","aria-label":"Application dock",children:t.map((x,j)=>{const N=p.pathname===x.to||x.to!=="/"&&p.pathname.startsWith(x.to)||x.to==="/"&&p.pathname==="/dashboard";return e.jsxs(La,{onClick:()=>{x.onClick?.(),x.to&&f(x.to)},className:`${x.className||""} ${N?"active":""}`,mouseX:o,spring:a,distance:i,magnification:r,baseItemSize:d,label:x.label,children:[e.jsx(Fa,{children:x.icon}),e.jsx(Ma,{children:x.label})]},x.to||j)})})})}function ge({path:t,size:s=24,viewBox:a="0 0 24 24",fill:r="none",stroke:i="currentColor",strokeWidth:l=1.8}){return e.jsx("svg",{width:s,height:s,viewBox:a,fill:r,stroke:i,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const ft={home:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(ge,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(ge,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(ge,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(ge,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(ge,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},_a=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function Mt(t){return t?.firstName||t?.name||t?.email||"Account"}function ia(){const{user:t,isAdmin:s,logout:a}=at(),r=dt(),i=We(),[l,d]=m.useState(!1),[o,p]=m.useState(!1),[f,x]=m.useState(!1),j=m.useRef(null),N=lt.useMemo(()=>{const w=[..._a];return s&&w.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),w},[s]),C=lt.useMemo(()=>N.map(w=>({label:w.label,to:w.to,icon:ft[w.icon],className:w.cta?"dock-item-cta":""})),[N]);m.useEffect(()=>{const w=()=>{j.current||(j.current=window.requestAnimationFrame(()=>{d(window.scrollY>12),j.current=null}))};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),j.current&&window.cancelAnimationFrame(j.current)}},[]),m.useEffect(()=>{p(!1),x(!1)},[i.pathname]);const ae=()=>{a(),r("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${l?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(q,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Fest home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:G("/assets/ozilla/logo.png"),alt:"Ozilla Fest",onError:w=>{w.currentTarget.src=G("/assets/company-logo.jpeg")}})}),e.jsx("div",{className:"dock-site-brand-text",children:e.jsx("strong",{children:"OZILLA FEST"})})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(Ca,{items:C,className:"dock-nav",magnification:58,distance:140,panelHeight:62,baseItemSize:44,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${f?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>x(w=>!w),"aria-expanded":f,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(Mt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:Mt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(q,{to:"/account",children:"Account"}),e.jsx(q,{to:"/tickets/my-tickets",children:"My Tickets"}),s&&e.jsx(q,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:ae,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(q,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${o?"open":""}`,"aria-label":o?"Close menu":"Open menu","aria-expanded":o,onClick:()=>p(w=>!w),children:o?ft.close:ft.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${o?"open":""}`,onClick:()=>p(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${o?"open":""}`,onClick:w=>w.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>p(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:N.map(w=>e.jsxs(fa,{to:w.to,className:w.cta?"dock-mobile-link-cta":"",onClick:()=>p(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:ft[w.icon]}),e.jsx("span",{children:w.label}),w.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},w.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{ae(),p(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(q,{to:"/login",onClick:()=>p(!1),children:"Login"}),e.jsx(q,{to:"/register",onClick:()=>p(!1),children:"Sign Up"})]})})]})})]})}const za=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP & Ticket Passes",href:"/tickets"},{label:"The Festival Vibe",href:"/#about"},{label:"World-Class Facilities",href:"/#facilities"},{label:"My Digital Passes",href:"/tickets/my-tickets"}],Oa=[{label:"Instagram",href:"https://www.instagram.com/ozillafestival"}],Da=[{label:"Sponsorship Inquiries",href:"/#sponsorship"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Hotel & Travel Partners",href:"/hotels"},{label:"Privacy & Terms",href:"/privacy"}];function na(){return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"kex-footer",children:[e.jsx("div",{className:"kex-bg-glow","aria-hidden":"true"}),e.jsx("div",{className:"kex-bg-overlay","aria-hidden":"true"}),e.jsxs("div",{className:"kex-container",children:[e.jsxs("div",{className:"kex-nav-grid",children:[e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"MENU"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:za.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(q,{to:t.href,children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"SOCIALS"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:Oa.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"RESOURCES"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:Da.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(q,{to:t.href,children:t.label})},t.label))}),e.jsx("div",{className:"kex-action-wrap",children:e.jsx("a",{href:"mailto:ozillafestival@gmail.com",className:"kex-pill-btn",children:"Send a message"})})]})]}),e.jsx("div",{className:"kex-hero-word-wrap","aria-hidden":"true",children:e.jsx("span",{className:"kex-hero-word",children:"OZILLA FEST"})}),e.jsxs("div",{className:"kex-bottom-row",children:[e.jsxs("div",{className:"kex-bottom-links",children:[e.jsx(q,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(q,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(q,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]}),e.jsx("p",{className:"kex-bottom-copy",children:"© 2026 OZILLA FEST & Prism Entertainment. All rights reserved."})]})]})]}),e.jsx("style",{children:Ba})]})}const Ba=`
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
`;function Le({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(ia,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(ct,{})}),e.jsx(na,{})]})}function kt({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(ia,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(ct,{})})}),e.jsx(na,{})]})}function Ha(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}function Ua(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function Va(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function Ga({hidden:t=!1,...s}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...s,children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),t&&e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function $a(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function Wa(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function Ya(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}function qa(){const t=dt(),s=We(),{login:a,checkAuth:r}=at(),i="",l=new URLSearchParams(s.search).get("returnTo"),d=xt(l,"/dashboard"),[o,p]=m.useState({email:"",password:""}),[f,x]=m.useState(null),[j,N]=m.useState(!1),[C,ae]=m.useState(!0),[w,B]=m.useState(""),[T,$]=m.useState(""),[D,R]=m.useState(!1),[n,W]=m.useState(!1),A=h=>{$(""),p(E=>({...E,[h.target.name]:h.target.value}))},y=async h=>{if(h.preventDefault(),!(D||n)){B(""),$(""),R(!0);try{await a({email:String(o.email||"").trim().toLowerCase(),password:String(o.password||"")}),$("Login successful. Preparing your festival workspace..."),await new Promise(E=>setTimeout(E,450)),t(d)}catch(E){B(E.response?.data?.message||E.message||"Invalid email or password")}finally{R(!1)}}},c=async()=>{B(""),$(""),W(!0);try{if(!(i&&!i.includes("placeholder")&&!i.includes("your_google"))){const h=await $e.googleAuth("local-dev-token",{email:"ubair1100@gmail.com",name:"Ubair Naeem",given_name:"Ubair",family_name:"Naeem"});je.setToken(h.token),await r(),$("Google sign-in verified. Welcome back!"),await new Promise(E=>setTimeout(E,450)),t(d)}}catch(h){const E=h.response?.data?.message||h.message||"Google sign-in failed";E.toLowerCase().includes("cancel")||B(E)}finally{W(!1)}};return e.jsxs("form",{onSubmit:y,className:"kx-form",children:[w&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:w}),T&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:T}),e.jsxs("button",{type:"button",className:"kx-google",onClick:c,disabled:n||D,children:[e.jsx(Ya,{}),e.jsx("span",{children:n?"Connecting to Google...":"Continue with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or sign in with email"}),e.jsx("span",{})]}),e.jsxs("label",{className:`kx-field ${f==="email"?"kx-focused":""}`,children:[e.jsx(Ua,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"email",value:o.email,placeholder:"Email or Mobile Number",autoComplete:"username",required:!0,onChange:A,onFocus:()=>x("email"),onBlur:()=>x(null)}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${f==="password"?"kx-focused":""}`,children:[e.jsx(Va,{className:"kx-field-icon"}),e.jsx("input",{type:j?"text":"password",name:"password",value:o.password,placeholder:"Password",autoComplete:"current-password",required:!0,onChange:A,onFocus:()=>x("password"),onBlur:()=>x(null)}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>N(h=>!h),"aria-label":j?"Hide password":"Show password",children:e.jsx(Ga,{hidden:j})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-meta",children:[e.jsxs("label",{className:"kx-remember",children:[e.jsx("input",{type:"checkbox",checked:C,onChange:h=>ae(h.target.checked)}),e.jsx("span",{className:"kx-checkbox",children:C&&e.jsx(Wa,{})}),e.jsx("span",{children:"Remember me"})]}),e.jsx("a",{href:"#forgot-password",className:"kx-forgot-link",children:"Forgot password?"})]}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:D||n,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),D?e.jsx("span",{className:"kx-spinner","aria-label":"Signing in..."}):e.jsxs("span",{className:"kx-button-copy",children:["Sign in",e.jsx($a,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Don't have an account?"," ",e.jsx(q,{to:`/register?${new URLSearchParams({returnTo:d}).toString()}`,children:"Create account"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Login"}),e.jsx("span",{children:"⚡ Fast Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Verified"})]})]})}function Xa(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(qa,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(q,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(q,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(q,{to:"/#contact",children:"Need Help?"})]})]})}function Ft(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function Ka(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function Za(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}function Ct(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function _t({hidden:t=!1,...s}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...s,children:[e.jsx("path",{d:"M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.6"}),t&&e.jsx("path",{d:"M4 4 20 20"})]})}function Ja(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function Qa(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}const zt=()=>new Promise(t=>setTimeout(t,450));function es(){const t=dt(),s=We(),{register:a,checkAuth:r}=at(),i="",l=new URLSearchParams(s.search).get("returnTo"),d=xt(l,"/dashboard"),[o,p]=m.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[f,x]=m.useState(null),[j,N]=m.useState(""),[C,ae]=m.useState(!1),[w,B]=m.useState(!1),[T,$]=m.useState(!1),[D,R]=m.useState(!1),[n,W]=m.useState(0),[A,y]=m.useState(""),[c,h]=m.useState(""),[E,M]=m.useState(!1),[X,_]=m.useState(!1),[se,K]=m.useState(!1),[te,oe]=m.useState(!1),[U,F]=m.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),z=/^\S+@\S+\.\S+$/.test(o.email),ce=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(o.phone.replace(/\s+/g,"")),u={upper:/[A-Z]/.test(o.password),lower:/[a-z]/.test(o.password),number:/\d/.test(o.password),special:/[^A-Za-z0-9]/.test(o.password),length:o.password.length>=8},k=Object.values(u).filter(Boolean).length,S=k===5,v=o.confirmPassword.length>0&&o.password===o.confirmPassword,P=o.password.length>0,Z=m.useMemo(()=>P?k<=2?{label:"Weak",className:"weak",percent:28}:k===3?{label:"Medium",className:"medium",percent:52}:k===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[P,k]),V=[{key:"upper",text:"Uppercase letter",met:u.upper},{key:"lower",text:"Lowercase letter",met:u.lower},{key:"number",text:"Number",met:u.number},{key:"special",text:"Special character",met:u.special},{key:"length",text:"8+ characters",met:u.length}],le=o.firstName.trim()&&o.lastName.trim()&&z&&ce&&S&&v&&w&&!E&&!X;m.useEffect(()=>{if(n<=0)return;const g=window.setInterval(()=>{W(b=>Math.max(0,b-1))},1e3);return()=>window.clearInterval(g)},[n]);const J=()=>{y(""),h("")},re=g=>{const{name:b,value:ie}=g.target;J(),p(Y=>({...Y,[b]:ie})),b==="email"&&(N(""),ae(!1),B(!1),W(0)),b in U&&ie.length>0&&F(Y=>({...Y,[b]:!0}))},de=g=>{const{name:b}=g.target;x(null),b in U&&F(ie=>({...ie,[b]:!0}))},he=async()=>{if(J(),!z){F(g=>({...g,email:!0})),y("Please enter a valid email address before sending OTP.");return}$(!0);try{const g=await $e.sendOtp(o.email);ae(!0),B(!1),W(60),N(""),h(g.message||"OTP code has been sent to your email. Please check your inbox.")}catch(g){y(g.response?.data?.message||g.message||"Unable to send OTP.")}finally{$(!1)}},pe=async()=>{if(J(),!z||j.trim().length<4){y("Enter the OTP sent to your email.");return}R(!0);try{const g=await $e.verifyOtp({email:o.email,otp:j});B(!0),h(g.message||"Email verified successfully.")}catch(g){B(!1),y(g.response?.data?.message||g.message||"OTP verification failed.")}finally{R(!1)}},Q=async g=>{if(g.preventDefault(),J(),!z){F(b=>({...b,email:!0})),y("Please enter a valid email address.");return}if(!w){y("Please verify your email OTP before creating your account.");return}if(!ce){F(b=>({...b,phone:!0})),y("Please enter a valid mobile number.");return}if(!S){F(b=>({...b,password:!0})),y("Please satisfy all password requirements.");return}if(!v){F(b=>({...b,confirmPassword:!0})),y("Passwords do not match.");return}M(!0);try{await a({firstName:o.firstName,lastName:o.lastName,name:`${o.firstName} ${o.lastName}`.trim(),email:o.email,phone:o.phone,password:o.password}),h("Account created successfully. Preparing your festival workspace..."),await zt(),t(d)}catch(b){const ie=b.response?.status,Y=b.response?.data?.message||"Registration failed",ee=Y.toLowerCase();ie===409||ee.includes("already")||ee.includes("exists")?y("Account already exists with this email or phone number"):y(Y)}finally{M(!1)}},I=async()=>{J(),_(!0);try{if(!(i&&!i.includes("placeholder")&&!i.includes("your_google"))){const g=await $e.googleAuth("local-dev-token",{email:"ubair1100@gmail.com",name:"Ubair Naeem",given_name:"Ubair",family_name:"Naeem"});je.setToken(g.token),await r(),h("Google sign-up verified. Welcome to OZILLA FEST!"),await zt(),t(d)}}catch(g){const b=g.response?.data?.message||g.message||"Google sign-up failed";b.toLowerCase().includes("cancel")||y(b)}finally{_(!1)}};return e.jsxs("form",{onSubmit:Q,className:"kx-form",children:[A&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:A}),c&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:c}),e.jsxs("button",{type:"button",className:"kx-google",onClick:I,disabled:X||E,children:[e.jsx(Qa,{}),e.jsx("span",{children:X?"Connecting to Google...":"Sign up with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or register with email"}),e.jsx("span",{})]}),e.jsxs("div",{className:"kx-grid-row",children:[e.jsxs("label",{className:`kx-field ${f==="firstName"?"kx-focused":""}`,children:[e.jsx(Ft,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"firstName",value:o.firstName,placeholder:"First Name",autoComplete:"given-name",required:!0,onChange:re,onFocus:()=>x("firstName"),onBlur:de}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${f==="lastName"?"kx-focused":""}`,children:[e.jsx(Ft,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"lastName",value:o.lastName,placeholder:"Last Name",autoComplete:"family-name",required:!0,onChange:re,onFocus:()=>x("lastName"),onBlur:de}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]})]}),e.jsxs("label",{className:`kx-field ${f==="email"?"kx-focused":""} ${U.email&&!z?"kx-field-invalid":""}`,children:[e.jsx(Ka,{className:"kx-field-icon"}),e.jsx("input",{type:"email",name:"email",value:o.email,placeholder:"Email address",autoComplete:"email",required:!0,onChange:re,onFocus:()=>x("email"),onBlur:de}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),U.email&&!z&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid email address."}),e.jsxs("div",{className:`kx-otp-box ${w?"kx-otp-verified":""}`,children:[e.jsxs("div",{className:"kx-otp-meta",children:[e.jsx("span",{className:"kx-otp-kicker",children:"Email Verification"}),e.jsx("strong",{children:w?"✓ Email verified":C?"Enter 6-digit code":"Verify email before submit"}),e.jsx("span",{className:"kx-otp-subtext",children:w?"Security verified":n>0?`Resend available in ${n}s`:"Code will be sent to your email"})]}),e.jsxs("div",{className:"kx-otp-controls",children:[e.jsx("button",{type:"button",className:"kx-otp-btn",onClick:he,disabled:T||!z||w||n>0,children:T?"Sending...":C?"Resend OTP":"Send OTP"}),e.jsx("input",{type:"text",value:j,onChange:g=>{J(),N(g.target.value.replace(/\D/g,"").slice(0,6)),B(!1)},className:"kx-otp-input",placeholder:"Enter 6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!C||w}),e.jsx("button",{type:"button",className:"kx-otp-btn kx-otp-btn-accent",onClick:pe,disabled:!C||w||D,children:D?"Verifying...":w?"Verified":"Verify"})]})]}),e.jsxs("label",{className:`kx-field ${f==="phone"?"kx-focused":""} ${U.phone&&!ce?"kx-field-invalid":""}`,children:[e.jsx(Za,{className:"kx-field-icon"}),e.jsx("input",{type:"tel",name:"phone",value:o.phone,placeholder:"Phone (+92 3XX XXXXXXX)",autoComplete:"tel",required:!0,onChange:re,onFocus:()=>x("phone"),onBlur:de}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),U.phone&&!ce&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid mobile number."}),e.jsxs("label",{className:`kx-field ${f==="password"?"kx-focused":""} ${U.password&&!S?"kx-field-invalid":""}`,children:[e.jsx(Ct,{className:"kx-field-icon"}),e.jsx("input",{type:se?"text":"password",name:"password",value:o.password,placeholder:"Create Password",autoComplete:"new-password",required:!0,onChange:re,onFocus:()=>x("password"),onBlur:de}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>K(g=>!g),"aria-label":se?"Hide password":"Show password",children:e.jsx(_t,{hidden:se})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:`kx-strength kx-strength-${Z.className}`,children:[e.jsxs("div",{className:"kx-strength-header",children:[e.jsx("span",{children:"Password Strength"}),e.jsx("strong",{children:Z.label})]}),e.jsx("div",{className:"kx-strength-bar-track",children:e.jsx("span",{style:{width:`${Z.percent}%`}})})]}),e.jsx("ul",{className:"kx-pwd-rules",children:V.map(g=>{const b=g.met?"kx-rule-met":P?"kx-rule-unmet":"kx-rule-neutral";return e.jsxs("li",{className:`kx-pwd-rule ${b}`,children:[e.jsx("span",{className:"kx-rule-badge",children:g.met?"✓":"•"}),e.jsx("span",{children:g.text})]},g.key)})}),e.jsxs("label",{className:`kx-field ${f==="confirmPassword"?"kx-focused":""} ${U.confirmPassword&&!v?"kx-field-invalid":""}`,children:[e.jsx(Ct,{className:"kx-field-icon"}),e.jsx("input",{type:te?"text":"password",name:"confirmPassword",value:o.confirmPassword,placeholder:"Confirm Password",autoComplete:"new-password",required:!0,onChange:re,onFocus:()=>x("confirmPassword"),onBlur:de}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>oe(g=>!g),"aria-label":te?"Hide confirm password":"Show confirm password",children:e.jsx(_t,{hidden:te})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),U.confirmPassword&&!v&&e.jsx("p",{className:"kx-field-error-msg",children:"Passwords do not match."}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:!le,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),E?e.jsx("span",{className:"kx-spinner","aria-label":"Creating account..."}):e.jsxs("span",{className:"kx-button-copy",children:["Create Account",e.jsx(Ja,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Already have an account?"," ",e.jsx(q,{to:`/login?${new URLSearchParams({returnTo:d}).toString()}`,children:"Sign In"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Sign Up"}),e.jsx("span",{children:"⚡ Instant Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Google Verified"})]})]})}function ts(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(es,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(q,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(q,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(q,{to:"/#contact",children:"Need Help?"})]})]})}function as(){const[t]=ga(),s=dt(),{checkAuth:a}=at(),[r,i]=m.useState("Signing you in with Google...");return m.useEffect(()=>{(async()=>{const d=t.get("token"),o=t.get("error"),p=t.get("returnTo"),f=xt(p,"/dashboard");if(o){i(o==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const x=new URLSearchParams({returnTo:f}).toString();setTimeout(()=>s(`/login?${x}`,{replace:!0}),1200);return}if(!d){i("Google sign-in token not found. Please try again.");const x=new URLSearchParams({returnTo:f}).toString();setTimeout(()=>s(`/login?${x}`,{replace:!0}),1200);return}je.setToken(d),await a(),s(f,{replace:!0})})()},[a,s,t]),e.jsx("div",{className:"auth-page",children:e.jsxs("div",{className:"auth-card",children:[e.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),e.jsx("p",{className:"auth-subtitle",children:r})]})})}const ss={restaurants:[{name:"Street Grill Co.",cuisine:"BBQ and Fast Casual",location:"Karachi",discount:"15% OFF",offer:"Festival combo meal with priority queue access.",code:"OZILLA15"},{name:"Spice District",cuisine:"Pakistani Fusion",location:"Lahore",discount:"20% OFF",offer:"Family platter offer for OZilla audience.",code:"SPICE20"},{name:"Urban Brew",cuisine:"Cafe and Desserts",location:"Islamabad",discount:"Buy 1 Get 1",offer:"Coffee and dessert pair for creators and attendees.",code:"BREWBOGO"}],hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:G("/assets/hotels/Pearl-Continental-Lahore.jpg"),showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:G("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:G("/assets/hotels/Hotel-Indigo.jpg"),showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:G("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:G("/assets/hotels/Luxus-Grand-Hotel.jpg"),showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:G("/assets/hotels/Nishat.jpg"),showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]};G("/assets/ozilla/talwinder.jpg"),G("/assets/ozilla/talwinder.jpg"),G("/assets/ozilla/Imran-Khan.jpg"),G("/assets/ozilla/Imran-Khan.jpg"),G("/assets/ozilla/Bohemia.jpg"),G("/assets/ozilla/Bohemia.jpg"),G("/assets/ozilla/hassan-raheem.jpg"),G("/assets/ozilla/hassan-raheem.jpg");const Ot=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:G("/assets/ozilla/talwinder.jpg"),image:G("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:G("/assets/ozilla/Imran-Khan.jpg"),image:G("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:G("/assets/ozilla/Bohemia.jpg"),image:G("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:G("/assets/ozilla/hassan-raheem.jpg"),image:G("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],Dt=1.28,Bt=.78;function Ue(t,s,a){return Math.min(a,Math.max(s,t))}function Ht(t){if(!t)return null;if(typeof t=="string")return t||null;const s=t.src||t.image;return typeof s=="string"&&s?s:null}function rs(t){return Ht(t&&typeof t=="object"&&(t.image||t.src)||t)}function is(t){if(t&&typeof t=="object"&&"offsetY"in t){const s=t.offsetY;return typeof s=="number"&&isFinite(s)?s:0}return 0}function ns({items:t=Ot,images:s,slideWidth:a=320,slideHeight:r=440,spacing:i=2.4,direction:l="right",smoothness:d=8.5,radius:o=24,dim:p=5,background:f="transparent",sensitivity:x=5,autoPlay:j=!1,autoPlayInterval:N=3500,style:C,onItemClick:ae}){const w=m.useRef(null),B=m.useRef([]),T=m.useRef(0),$=m.useRef(0),[D,R]=m.useState(0),[n,W]=m.useState(!1),[A,y]=m.useState(0),c=t&&t.length>0?t:s&&s.length>0?s:Ot,h=m.useMemo(()=>c.map((u,k)=>({...u,src:rs(u),offsetY:is(u),name:u.name||`Artist ${k+1}`,genre:u.genre||"Live Performer",stage:u.stage||"Ozilla Arena",bpm:u.bpm||"128 BPM",vibe:u.vibe||"Festival Energy",isHeadliner:!!u.isHeadliner})),[c]),E=D>0&&D<640?Math.min(a,250):D<1024?Math.min(a,290):a,M=D>0&&D<640?Math.round(E*1.36):r,X=E+Ue(i,0,10)*18,_=.15-Ue(d,0,10)/10*.11,se=Ue(p,0,10)/10*.75,K=.4+Ue(x,0,10)/10*1.1,te=.6+Ue(x,0,10)/10*1.6,oe=l==="left",U=m.useRef({count:h.length,step:X,slideWidth:E,width:D,ease:_,maxScale:Dt,minScale:Bt,dim:se,loop:!1,flip:oe});U.current={count:h.length,step:X,slideWidth:E,width:D,ease:_,maxScale:Dt,minScale:Bt,dim:se,loop:!1,flip:oe};const F=m.useRef({wheelMultiplier:K,dragMultiplier:te,flip:oe});F.current={wheelMultiplier:K,dragMultiplier:te,flip:oe},m.useEffect(()=>{const u=w.current;if(!u)return;const k=new ResizeObserver(S=>{S[0]&&R(S[0].contentRect.width)});return k.observe(u),R(u.getBoundingClientRect().width),()=>k.disconnect()},[]),m.useEffect(()=>{B.current.length=h.length},[h.length]),m.useEffect(()=>{if(!j||n||h.length<=1)return;const u=setInterval(()=>{y(k=>{const S=(k+1)%h.length;return T.current=S*X,S})},N);return()=>clearInterval(u)},[j,n,h.length,X,N]),m.useEffect(()=>{let u=0,k=0;const S=v=>{u=requestAnimationFrame(S);const P=U.current,Z=k?Math.min((v-k)/1e3,.1):1/60;if(k=v,!P.count||P.step<=0||P.width<=0)return;const V=(P.count-1)*P.step;T.current=Ue(T.current,0,V);const le=1-Math.pow(1-P.ease,Z*60);$.current+=(T.current-$.current)*le;const J=Math.round($.current/P.step);J>=0&&J<P.count&&y(J);const re=(P.width-P.slideWidth)/2,de=P.width/2;for(let he=0;he<P.count;he+=1){const pe=B.current[he];if(!pe)continue;const I=he*P.step-$.current+re,g=I+P.slideWidth/2-de;let b,ie;g>0?(b=Math.min(P.maxScale,1+g/P.width*.45),ie=(b-1)*P.slideWidth*.35):(b=Math.max(P.minScale,1+g/P.width*.5),ie=0);const Y=P.flip?P.width-P.slideWidth-(I+ie):I+ie;if(pe.style.transform=`translate3d(${Y}px, -50%, 0) scale(${b})`,P.dim>0&&b<1){const ee=(1-b)/Math.max(.001,1-P.minScale);pe.style.filter=`brightness(${Math.max(.35,1-ee*P.dim)})`}else pe.style.filter="none"}};return u=requestAnimationFrame(S),()=>cancelAnimationFrame(u)},[]),m.useEffect(()=>{const u=w.current;if(!u)return;const k=S=>{S.preventDefault();const v=Math.abs(S.deltaX)>Math.abs(S.deltaY)?S.deltaX:S.deltaY;T.current+=v*F.current.wheelMultiplier};return u.addEventListener("wheel",k,{passive:!1}),()=>u.removeEventListener("wheel",k)},[]),m.useEffect(()=>{const u=w.current;if(!u)return;let k=null,S=0;const v=V=>{if(k===null){k=V.pointerId,S=V.clientX;try{u.setPointerCapture(V.pointerId)}catch{}}},P=V=>{if(k!==V.pointerId)return;const le=V.clientX-S;S=V.clientX,T.current+=(F.current.flip?le:-le)*F.current.dragMultiplier},Z=V=>{if(k===V.pointerId){k=null;try{u.hasPointerCapture(V.pointerId)&&u.releasePointerCapture(V.pointerId)}catch{}}};return u.addEventListener("pointerdown",v),u.addEventListener("pointermove",P),u.addEventListener("pointerup",Z),u.addEventListener("pointercancel",Z),()=>{u.removeEventListener("pointerdown",v),u.removeEventListener("pointermove",P),u.removeEventListener("pointerup",Z),u.removeEventListener("pointercancel",Z)}},[]);const z=m.useCallback(u=>{const k=Ue(u,0,h.length-1);T.current=k*X,y(k)},[h.length,X]),ce=m.useCallback(u=>{const k=Ue(A+(u==="left"?-1:1),0,h.length-1);z(k)},[A,z,h.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:h.map((u,k)=>{const S=k===A;return e.jsx("button",{type:"button",onClick:()=>z(k),style:{padding:"6px 14px",borderRadius:"999px",border:S?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:S?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:S?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:S?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:S?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:u.name},u.name)})}),e.jsx("div",{ref:w,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${M+50}px`,overflow:"hidden",background:f,cursor:"grab",touchAction:"pan-y",opacity:D>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...C},children:h.map((u,k)=>{const S=u.isHeadliner,v=k===A;return e.jsxs("div",{ref:P=>{B.current[k]=P},onClick:()=>{z(k),ae&&ae(u,k)},style:{position:"absolute",top:"50%",left:0,width:`${E}px`,height:`${M}px`,borderRadius:`${o}px`,overflow:"hidden",background:"#130c0a",border:v?"1.5px solid rgba(255, 138, 61, 0.85)":S?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:v?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[u.src?e.jsx("img",{src:u.src,alt:u.name,draggable:!1,onError:P=>{P.currentTarget.src=G("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${u.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[S?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:u.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:u.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:u.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",u.bpm]}),e.jsxs("span",{children:["♫ ",u.vibe]})]})]})]},u.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>ce("left"),disabled:A===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:A===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:A===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:A===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:A===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:u=>{A>0&&(u.currentTarget.style.transform="scale(1.1)",u.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:u=>{u.currentTarget.style.transform="scale(1)",u.currentTarget.style.borderColor=A===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:h.map((u,k)=>e.jsx("span",{onClick:()=>z(k),style:{width:k===A?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:k===A?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},k))}),e.jsx("button",{type:"button",onClick:()=>ce("right"),disabled:A===h.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:A===h.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:A===h.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:A===h.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:A===h.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:u=>{A<h.length-1&&(u.currentTarget.style.transform="scale(1.1)",u.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:u=>{u.currentTarget.style.transform="scale(1)",u.currentTarget.style.borderColor=A===h.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const Xe={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},os=2,oa=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],ls=Math.max(...oa.map(t=>t.blur)),Ut=36;function Nt(t,s){const a=Math.max(0,Math.min(1,s));if(typeof t!="string")return`rgba(0,0,0,${a})`;const r=t.trim(),i=r.match(/^#([0-9a-f]{3,8})$/i);if(i){let d=i[1];(d.length===3||d.length===4)&&(d=d.split("").map(p=>p+p).join(""));const o=parseInt(d.slice(0,6),16);return Number.isFinite(o)?`rgba(${o>>16&255},${o>>8&255},${o&255},${a})`:`rgba(0,0,0,${a})`}const l=r.match(/^rgba?\(([^)]+)\)/i);if(l){const d=l[1].split(",").map(o=>parseFloat(o));if(d.length>=3&&d.slice(0,3).every(Number.isFinite))return`rgba(${d[0]},${d[1]},${d[2]},${a})`}return`rgba(0,0,0,${a})`}function cs(t,s,a){const r=(t%1+1)%1*2*(s+a);return r<s?[r,0]:r<s+a?[s,r-s]:r<s*2+a?[s-(r-s-a),a]:[0,a-(r-s*2-a)]}function Vt(t,s,a){const r=2*(s+a),i=[0,s/r,(s+a)/r,(s*2+a)/r];return Math.floor(t/4)+i[(t%4+4)%4]}function ds(t,s,a){const[r,i]=cs(t,s,a);return Math.atan2(r-s/2,a/2-i)*180/Math.PI}const Gt=24,ps=.015;function St(t,s,a,r,i){const l=a>0?a:100,d=r>0?r:100,o=Math.max(0,Math.min(100,s)),p=Math.max(ps,o/100*.5),f=o/100,x=[];let j=0,N=0,C=0;for(let w=0;w<=Gt;w++){const B=w/Gt,T=ds(t+(B-.5)*p,l,d);if(w===0)j=T;else{let R=T-N;for(;R>180;)R-=360;for(;R<-180;)R+=360;C+=R}N=T;const $=Math.abs(B-.5)*2,D=f>=1||$<=f?1:1-($-f)/(1-f);x.push(`${Nt(i,D*D*(3-2*D))} ${C.toFixed(2)}deg`)}const ae=C.toFixed(2);return x.push(`${Nt(i,0)} ${ae}deg`),x.push(`${Nt(i,0)} 360deg`),`conic-gradient(from ${j.toFixed(2)}deg at 50% 50%, ${x.join(", ")})`}const $t=30,ms=4,Wt=3,us=.35,hs=[.72,.16,.18,1.05],fs=[.65,0,.35,1];function la(t){const[s,a,r,i]=t;if(s===a&&r===i)return d=>d;const l=(d,o,p)=>{const f=1-p;return 3*f*f*p*d+3*f*p*p*o+p*p*p};return d=>{const o=Math.max(0,Math.min(1,d));let p=o;for(let f=0;f<8;f++){const x=l(s,r,p)-o,j=1-p,N=3*j*j*s+6*j*p*(r-s)+3*p*p*(1-r);if(Math.abs(N)<1e-6)break;p-=x/N,p=Math.max(0,Math.min(1,p))}return l(a,i,p)}}const gs=la(hs),xs=la(fs),Yt={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function Me({color:t=Xe.color,rounded:s=Xe.rounded,thickness:a=Xe.thickness,borderSize:r=Xe.borderSize,glow:i=Xe.glow,movement:l=Xe.movement,speed:d=Xe.speed,style:o,className:p=""}){const f=m.useRef(null),x=m.useRef(null),j=m.useRef({speed:d,movement:l,borderSize:r,color:t});j.current={speed:d,movement:l,borderSize:r,color:t};const N=m.useRef(null),C=m.useRef({w:0,h:0}),[ae,w]=m.useState({w:0,h:0});m.useEffect(()=>{const y=N.current;if(!y||typeof ResizeObserver>"u")return;const c=new ResizeObserver(()=>{const h=y.getBoundingClientRect();h.width===C.current.w&&h.height===C.current.h||(C.current={w:h.width,h:h.height},w(C.current))});return c.observe(y),()=>c.disconnect()},[]),m.useEffect(()=>{const y=N.current;let c=!0,h=null;typeof IntersectionObserver<"u"&&y&&(h=new IntersectionObserver(te=>{te[0]&&(c=te[0].isIntersecting)},{rootMargin:"100px"}),h.observe(y));let E=0,M=performance.now(),X=0,_=0,se=0;const K=te=>{if(E=requestAnimationFrame(K),!c||typeof document<"u"&&document.hidden){M=te;return}const oe=Math.min(.05,Math.max(0,(te-M)/1e3));M=te;const U=j.current,F=Math.max(0,Math.min(20,U.speed));if(F>0){const z=U.movement==="step",ce=z?Wt+(us-Wt)*(F-1)/19:($t+(ms-$t)*(F-1)/19)/4;for(se+=oe/ce;se>=1;)se-=1,_+=1;const u=z?gs(Math.min(1,se*2)):xs(se),{w:k,h:S}=C.current,v=k>0?k:100,P=S>0?S:100,Z=Vt(_,v,P),V=Vt(_+1,v,P);X=Z+(V-Z)*u;const le=f.current;le&&le.style.setProperty("--arc",St(X,U.borderSize,k,S,U.color));const J=x.current;J&&J.style.setProperty("--arc",St(X+.5,U.borderSize,k,S,U.color))}};return E=requestAnimationFrame(K),()=>{cancelAnimationFrame(E),h&&h.disconnect()}},[]);const B=Math.max(1,Math.min(10,a)),T=Math.max(0,Math.min(100,s))/100*(Math.min(ae.w||200,ae.h||200)/2),$=Math.max(0,Math.min(100,i))/100,D=y=>B+$*Ut*y,R=10+Ut+ls*2,n=(y,c=0)=>e.jsx("div",{style:{position:"absolute",inset:c-y,boxSizing:"border-box",padding:y,borderRadius:T>0?T+y:0,background:"var(--arc)",...Yt}}),W=(y,c,h,E)=>e.jsx("div",{style:{position:"absolute",inset:-R,boxSizing:"border-box",padding:R,borderRadius:T>0?T+R:0,opacity:E,mixBlendMode:"plus-lighter",filter:h?`blur(${h.toFixed(1)}px)`:"none",WebkitFilter:h?`blur(${h.toFixed(1)}px)`:"none",...Yt},children:n(c,R)},y),A=(y,c)=>e.jsxs("div",{ref:c,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":St(y,r,ae.w,ae.h,t)},children:[$>0&&oa.map((h,E)=>W(`glow-${E}`,D(h.reach),h.blur,h.opacity)),Array.from({length:os}).map((h,E)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:n(B)},`edge-${E}`))]});return e.jsxs("div",{ref:N,className:`neon-border-overlay ${p}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:T,pointerEvents:"none",zIndex:1,...o},children:[A(0,f),A(.5,x)]})}const bs=1.5,vs=42,ys=Math.PI*2,ws=300,js=300,ks=2,Ns=5e3,Ss=3.2,As=.05,Es=3,Ps=1.35,Rs=.08,Is=.5,Ts=.24,Ls=.35,Ms=ys*.75,Fs=2,ca=3,gt=720,Cs=`
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
    float ang = aA.x * ${Ms.toFixed(6)} + aA.y * TAU * ${Fs.toFixed(1)};
    float rN = mix(${Ls.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${As.toFixed(3)} * tau);

    float tp   = ${Rs.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${Is.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${Ps.toFixed(2)});

    float L  = ${Es.toFixed(1)};
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
`,_s=`
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
`,zs=`
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
    float halfW  = uThick * 0.5 * ${ca.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,Os=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${ca.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function qt(t){if(!t)return[1,1,1,1];let s=String(t).trim();const a=s.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);a&&(s=a[1].trim());const r=s.match(/^rgba?\(([^)]+)\)$/i);if(r){const l=r[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(l[0]||0)/255,(l[1]||0)/255,(l[2]||0)/255,l.length>3&&isFinite(l[3])?l[3]:1]}let i=s.replace("#","");return(i.length===3||i.length===4)&&(i=i.split("").map(l=>l+l).join("")),i.length<6?[1,1,1,1]:[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255,i.length>=8?parseInt(i.slice(6,8),16)/255:1]}function Ds(t){return()=>{t|=0,t=t+1831565813|0;let s=Math.imul(t^t>>>15,1|t);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function Xt(t,s,a){const r=t.createShader(s);return r?(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)||console.warn("VortexDustFall shader:",t.getShaderInfoLog(r)),r):null}function Kt(t,s,a){const r=t.createProgram();if(!r)return null;const i=Xt(t,t.VERTEX_SHADER,s),l=Xt(t,t.FRAGMENT_SHADER,a);return!i||!l?null:(t.attachShader(r,i),t.attachShader(r,l),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.warn("VortexDustFall link:",t.getProgramInfoLog(r)),r)}const Bs={radius:195,thickness:16},Hs={height:165,spin:38,spray:0},Us={scatter:280,blur:0},Vs={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function Gs({background:t="transparent",baseColor:s="#FFA733",accentColor:a="#FFE082",density:r=145,dotSize:i=130,speed:l=48,distance:d=1450,tilt:o=7,ring:p={},fall:f={},field:x={},hover:j={},style:N={},className:C="",children:ae}){const w={...Bs,...p},B={...Hs,...f},T={...Us,...x},$={...Vs,...j},D=m.useRef(null),R=m.useRef(null),n=m.useRef({x:0,y:0,active:0}),W=m.useRef({baseColor:s,accentColor:a,density:r,dotSize:i,speed:l,distance:d,tilt:o,ring:w,fall:B,field:T,hover:$});return W.current={baseColor:s,accentColor:a,density:r,dotSize:i,speed:l,distance:d,tilt:o,ring:w,fall:B,field:T,hover:$},m.useEffect(()=>{const A=D.current,y=R.current;if(!A||!y)return;const c=y.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!c)return;const h=Kt(c,Cs,_s),E=Kt(c,zs,Os);if(!h||!E)return;const M=(I,g)=>c.getUniformLocation(I,g),X={a:c.getAttribLocation(h,"aA"),b:c.getAttribLocation(h,"aB")},_={res:M(h,"uRes"),focal:M(h,"uFocal"),phase:M(h,"uPhase"),radius:M(h,"uRadius"),rise:M(h,"uRise"),fallD:M(h,"uFall"),spinTurns:M(h,"uSpinTurns"),scatter:M(h,"uScatter"),dotWorld:M(h,"uDotWorld"),blurK:M(h,"uBlurK"),camDist:M(h,"uCamDist"),tilt:M(h,"uTilt"),yPx:M(h,"uYPx"),alpha:M(h,"uAlpha"),color:M(h,"uColor")},se={ring:c.getAttribLocation(E,"aRing")},K={res:M(E,"uRes"),focal:M(E,"uFocal"),radius:M(E,"uRadius"),camDist:M(E,"uCamDist"),tilt:M(E,"uTilt"),yPx:M(E,"uYPx"),thick:M(E,"uThick"),seg:M(E,"uSeg"),color:M(E,"uColor"),alpha:M(E,"uAlpha")},te=c.createBuffer(),oe=c.createBuffer();let U=-1,F=0;const z=I=>{const g=y.clientWidth||A.clientWidth||(typeof window<"u"?window.innerWidth:1200),b=g<768,ie=g>=768&&g<1024,Y=b?1800:ie?8500:Math.round(I*ws);F=Math.max(1e3,Y);const ee=new Float32Array(F*4),Ne=new Float32Array(F*2),ke=Ds(85840071);for(let xe=0;xe<F;xe++)ee[xe*4]=ke(),ee[xe*4+1]=ke(),ee[xe*4+2]=ke(),ee[xe*4+3]=ke(),Ne[xe*2]=ke(),Ne[xe*2+1]=ke();c.bindBuffer(c.ARRAY_BUFFER,te),c.bufferData(c.ARRAY_BUFFER,ee,c.STATIC_DRAW),c.bindBuffer(c.ARRAY_BUFFER,oe),c.bufferData(c.ARRAY_BUFFER,Ne,c.STATIC_DRAW),U=I},ce=c.createBuffer(),u=(gt+1)*2;{const I=new Float32Array(u*2);for(let g=0;g<=gt;g++){const b=g/gt;I[g*4]=b,I[g*4+1]=-1,I[g*4+2]=b,I[g*4+3]=1}c.bindBuffer(c.ARRAY_BUFFER,ce),c.bufferData(c.ARRAY_BUFFER,I,c.STATIC_DRAW)}c.disable(c.DEPTH_TEST),c.enable(c.BLEND),c.blendFunc(c.ONE,c.ONE);let k=!0,S=null;typeof IntersectionObserver<"u"&&A&&(S=new IntersectionObserver(I=>{I[0]&&(k=I[0].isIntersecting)},{rootMargin:"120px"}),S.observe(A));let v=1,P=0;const Z=()=>{v=Math.min(window.devicePixelRatio||1,bs);const I=y.clientWidth||A.clientWidth||1,g=y.clientHeight||A.clientHeight||1,b=Math.max(1,Math.round(I*v)),ie=Math.max(1,Math.round(g*v));(y.width!==b||y.height!==ie)&&(y.width=b,y.height=ie),c.viewport(0,0,b,ie),Math.abs(P-I)>50&&(P=I,z(W.current.density))};Z();const V=new ResizeObserver(Z);V.observe(y);let le=0,J=performance.now(),re=0,de=0,he=0,pe=0;const Q=I=>{if(re=requestAnimationFrame(Q),!k||typeof document<"u"&&document.hidden){J=I;return}const g=Math.min((I-J)/1e3,.05);J=I;const b=W.current;if(b.density!==U&&z(b.density),F===0)return;const ie=Math.max(.05,b.hover.transition?.duration??.6),Y=1-Math.exp(-g/ie),ee=n.current;de+=(ee.x-de)*Y,he+=(ee.y-he)*Y,pe+=(ee.active-pe)*Y;const Ne=(b.hover.amount||100)/100,ke=1+pe*Ne*.6;le=(le+g*(b.speed/50*ke)/Ss)%1;const xe=y.width,Ye=y.height,Fe=y.clientWidth||A.clientWidth||1200,Re=Fe<768,st=Fe>=768&&Fe<1024,qe=Ye/(2*Math.tan(vs/2*Math.PI/180)),rt=xe/Math.max(Ye,1),it=rt<1?Math.max(.32,rt/1.4):st?.85:1,ve=js*(b.ring.radius/100)*it,nt=ve*(Re?1.1:b.fall.height/100),pt=nt*(b.fall.spray/400),mt=Ye*(Re?.22:Ts),bt=b.fall.spin/100*1.5,Ie=ve*(b.field.scatter/100)*(Re?.08:.15),ut=ks*(b.dotSize/100)*(Re?.65:1),Oe=Ns*(b.field.blur/100),De=Re?Math.min(b.ring.thickness*v,9*v):b.ring.thickness*v,L=b.tilt*Math.PI/180+he*Ne*pe*(10*Math.PI/180),ne=(Re?b.distance*1.05:b.distance)-pe*Ne*150,[me,ye,fe,Se]=qt(b.baseColor),[Be,Je,Te,Qe]=qt(b.accentColor);c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),c.useProgram(h),c.uniform2f(_.res,xe,Ye),c.uniform1f(_.focal,qe),c.uniform1f(_.phase,le),c.uniform1f(_.radius,ve),c.uniform1f(_.rise,pt),c.uniform1f(_.fallD,nt),c.uniform1f(_.spinTurns,bt),c.uniform1f(_.scatter,Ie),c.uniform1f(_.dotWorld,ut*v),c.uniform1f(_.blurK,Oe*v),c.uniform1f(_.camDist,ne),c.uniform1f(_.tilt,L),c.uniform1f(_.yPx,mt),c.uniform1f(_.alpha,Se),c.uniform3f(_.color,me,ye,fe),c.bindBuffer(c.ARRAY_BUFFER,te),c.enableVertexAttribArray(X.a),c.vertexAttribPointer(X.a,4,c.FLOAT,!1,0,0),c.bindBuffer(c.ARRAY_BUFFER,oe),c.enableVertexAttribArray(X.b),c.vertexAttribPointer(X.b,2,c.FLOAT,!1,0,0),c.drawArrays(c.POINTS,0,F),c.useProgram(E),c.uniform2f(K.res,xe,Ye),c.uniform1f(K.focal,qe),c.uniform1f(K.radius,ve),c.uniform1f(K.camDist,ne),c.uniform1f(K.tilt,L),c.uniform1f(K.yPx,mt),c.uniform1f(K.thick,De),c.uniform1f(K.seg,gt),c.uniform3f(K.color,Be,Je,Te),c.uniform1f(K.alpha,Qe),c.bindBuffer(c.ARRAY_BUFFER,ce),c.enableVertexAttribArray(se.ring),c.vertexAttribPointer(se.ring,2,c.FLOAT,!1,0,0),c.drawArrays(c.TRIANGLE_STRIP,0,u)};return re=requestAnimationFrame(Q),()=>{cancelAnimationFrame(re),V.disconnect(),S&&S.disconnect(),c.deleteBuffer(te),c.deleteBuffer(oe),c.deleteBuffer(ce),c.deleteProgram(h),c.deleteProgram(E)}},[]),e.jsxs("div",{ref:D,className:`vortex-dust-container ${C}`,onPointerMove:A=>{const y=A.currentTarget.getBoundingClientRect();y.width<=0||y.height<=0||(n.current={x:(A.clientX-y.left)/y.width*2-1,y:-((A.clientY-y.top)/y.height*2-1),active:1})},onPointerLeave:()=>{n.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:t,...N},children:[e.jsx("canvas",{ref:R,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),ae&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:ae})]})}const $s=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:G("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:G("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:G("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:G("/assets/ozilla/hassan-raheem.jpg")}],Ws=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],Ys=[{num:"01",badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats.",icon:"⚡",highlights:["4 Live Arenas","100kW Sound Array","360° Lasers"]},{num:"02",badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists.",icon:"👑",highlights:["Talwinder","Imran Khan","Bohemia","Hassan Raheem"]},{num:"03",badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges.",icon:"🔥",highlights:["50+ Food Stalls","Artisan Eats","Craft Mocktail Lounges"]},{num:"04",badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates.",icon:"✨",highlights:["Elevated Decks","Artist Lounge","Fast-Track VIP Gates"]}],qs=[{name:"OZILLA FEST 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],Xs=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],Ks=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"OZILLA FEST 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"OZILLA FEST 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],Zs=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],Js=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],Qs=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],er=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function tr(t){const[s,a]=m.useState(()=>{const r=Math.max(new Date(t)-Date.now(),0);return{days:Math.floor(r/864e5),hours:Math.floor(r/36e5%24),minutes:Math.floor(r/6e4%60),seconds:Math.floor(r/1e3%60)}});return m.useEffect(()=>{const r=setInterval(()=>{const i=Math.max(new Date(t)-Date.now(),0);a({days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)})},1e3);return()=>clearInterval(r)},[t]),s}function ar(){const t=We(),s=tr("2026-11-01T18:00:00+05:00");return m.useEffect(()=>{const a=t.hash?.replace("#","");a?setTimeout(()=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[t.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx(Gs,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(O.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(O.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsxs(O.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:[e.jsx("strong",{className:"sp-hero-sub-highlight",children:"Pakistan's Flagship Music & Cultural Phenomenon."}),e.jsx("span",{className:"sp-hero-sub-detail",children:"4 Electrified Mega Stages · Headline Celebrities · High-Octane Sound Under the Lahore Night Sky."})]}),e.jsxs(O.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"DATE"}),e.jsx("strong",{children:"NOV 01, 2026"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"CITY"}),e.jsx("strong",{children:"LAHORE, PK"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"PRODUCTION"}),e.jsx("strong",{children:"4 MEGA STAGES"})]}),e.jsxs("div",{className:"sp-hero-meta-pill sp-meta-featured",children:[e.jsx("span",{className:"sp-meta-dot sp-dot-gold"}),e.jsx("span",{className:"sp-meta-label",children:"PASSES"}),e.jsx("strong",{children:"INSTANT QR PASS"})]})]}),e.jsxs(O.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(O.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(O.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(q,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:er.map((a,r)=>e.jsxs(O.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:r*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:a.value}),e.jsx("span",{className:"stat-label",children:a.label}),e.jsx("small",{className:"stat-sub",children:a.sub})]},a.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(O.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(ns,{items:$s,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(O.div,{className:"sp-countdown-banner",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("div",{className:"sp-countdown-header",children:e.jsxs("span",{className:"sp-countdown-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"COUNTDOWN TO THE FIRST BEAT DROP"]})}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",s.days],["Hours",s.hours],["Minutes",s.minutes],["Seconds",s.seconds]].map(([a,r])=>e.jsxs(O.div,{className:"sp-countdown-card",whileHover:{scale:1.05,y:-4},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(r).padStart(2,"0")}),e.jsx("span",{children:a}),e.jsx("div",{className:"sp-countdown-glow-line"})]},a))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:Ws.map((a,r)=>e.jsxs(O.div,{className:`sp-pricing-card ${a.isFeatured?"sp-featured-pricing":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.12},whileHover:{y:-8},children:[a.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:a.badge}),e.jsx("h3",{children:a.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:a.price})}),e.jsx("p",{className:"sp-pricing-sub",children:a.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:a.perks.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:i})]},i))}),e.jsx(q,{to:a.ctaLink,className:a.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:a.ctaText})]},a.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:Ys.map((a,r)=>e.jsxs(O.div,{className:"sp-pillar-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},whileHover:{y:-8,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-watermark",children:a.num}),e.jsx("div",{className:"sp-pillar-glow-accent"}),e.jsxs("div",{className:"sp-pillar-top",children:[e.jsxs("div",{className:"sp-pillar-badge-wrap",children:[e.jsx("span",{className:"sp-pillar-icon",children:a.icon}),e.jsx("span",{className:"sp-pillar-badge",children:a.badge})]}),e.jsx("span",{className:"sp-pillar-num-pill",children:a.num})]}),e.jsx("h3",{className:"sp-pillar-title",children:a.title}),e.jsx("p",{className:"sp-pillar-desc",children:a.desc}),a.highlights&&e.jsx("div",{className:"sp-pillar-chips",children:a.highlights.map(i=>e.jsxs("span",{className:"sp-pillar-chip",children:[e.jsx("span",{className:"sp-pillar-chip-dot"}),i]},i))}),e.jsx("div",{className:"sp-pillar-glow-line"})]},a.title))}),e.jsxs(O.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(Me,{color:"#ff7a29",rounded:32,thickness:2.8,borderSize:50,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsxs("span",{className:"sp-vibe-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"FESTIVAL HIGHLIGHTS"]}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(O.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(O.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(q,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0,icon:"⚡"},{text:"100kW Laser & Sound",isMain:!0,icon:"🔊"},{text:"20+ Star Performers",isMain:!0,icon:"👑"},{text:"Verified QR Instant Passes",isMain:!0,icon:"🎟️"},{text:"10,000+ Music Lovers",isMain:!1,icon:"👥"},{text:"50+ Food & Beats Stalls",isMain:!1,icon:"🍔"},{text:"VIP Artist Lounge & Deck",isMain:!1,icon:"✨"},{text:"Exclusive Partner Discounts",isMain:!1,icon:"🏷️"}].map((a,r)=>e.jsxs(O.div,{className:`sp-vibe-tag ${a.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:r*.05},whileHover:{scale:1.03,x:3},whileTap:{scale:.98},children:[e.jsx("span",{className:"sp-vibe-tag-icon",children:a.icon}),e.jsx("span",{className:"sp-vibe-tag-text",children:a.text}),a.isMain&&e.jsx("span",{className:"sp-vibe-tag-dot"})]},a.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:Xs.map((a,r)=>e.jsxs(O.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.12},whileHover:{y:-6},children:[e.jsx(Me,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:a.name}),e.jsx("span",{className:"sp-pill-badge",children:a.status})]}),e.jsx("p",{className:"sp-card-desc",children:a.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},a.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:qs.map((a,r)=>e.jsxs(O.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.12},whileHover:{y:-6},children:[e.jsx(Me,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:a.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:a.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",a.date," · ",a.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:a.description}),e.jsx(q,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},a.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(Me,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:Ks.map((a,r)=>e.jsxs(O.div,{className:"sp-timeline-item",initial:{opacity:0,x:-28,y:20},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.45,delay:r*.08},children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:a.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:a.date})}),e.jsx("span",{className:"sp-timeline-badge",children:a.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:a.name}),e.jsx("p",{className:"sp-card-desc",children:a.description}),e.jsx("div",{className:"sp-tag-cloud",children:a.highlights.map(i=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:i},i))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:a.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},a.name))})]})}),e.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),e.jsx("div",{className:"sp-restaurants-grid",children:ss.restaurants.map((a,r)=>e.jsxs(O.div,{className:"sp-glass-card sp-restaurant-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.1},whileHover:{y:-5,scale:1.01},children:[e.jsx(Me,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:a.name}),e.jsx("span",{className:"sp-discount-pill",children:a.discount})]}),e.jsxs("p",{className:"sp-meta-text",children:[a.cuisine," · ",a.location]}),e.jsx("p",{className:"sp-card-desc",children:a.offer}),e.jsxs("div",{className:"sp-code-box",children:[e.jsx("span",{children:"Promo Code:"}),e.jsx("code",{children:a.code})]})]})]},a.name))})]})}),e.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header sp-voucher-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(Me,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]})]}),e.jsx("div",{className:"sp-discounts-grid",children:Qs.map((a,r)=>e.jsxs(O.div,{className:"sp-glass-card sp-voucher-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,scale:.92,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.08},whileHover:{y:-6,scale:1.02},children:[e.jsx(Me,{color:"#ff9e42",rounded:22,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:a.category}),e.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:a.brand}),e.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:a.desc}),e.jsxs("div",{className:"sp-discount-footer",children:[e.jsx("span",{className:"sp-big-discount",children:a.discount}),e.jsx("code",{className:"sp-code-pill",children:a.code})]})]})]},a.brand))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(Me,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:Js.map((a,r)=>e.jsxs(O.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(Me,{color:a.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:a.accent,borderColor:`${a.accent}44`,background:`${a.accent}14`},children:a.badge})}),e.jsx("h3",{className:"sp-facility-title",children:a.title}),e.jsx("p",{className:"sp-card-desc",children:a.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${a.accent}, transparent)`}})]},a.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(O.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(Me,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:Zs.map((a,r)=>e.jsxs(O.div,{className:`sp-glass-card sp-sponsor-card ${a.isFeatured?"sp-sponsor-featured":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:r*.1},whileHover:{y:-10,scale:1.02},children:[a.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:a.accent,borderColor:`${a.accent}44`,background:`${a.accent}14`},children:a.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:a.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:a.accent},children:a.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:a.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:a.perks.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:a.accent},children:"✓"}),e.jsx("span",{children:i})]},i))}),e.jsx(O.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(q,{to:"/tickets",className:a.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:a.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${a.accent}, transparent)`}})]},a.tier))})]})}),e.jsx("style",{children:`
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
          max-width: 780px;
          font-size: clamp(1.05rem, 1.8vw, 1.22rem);
          color: rgba(255, 240, 228, 0.88) !important;
          line-height: 1.78;
          word-spacing: 0.02em;
          font-weight: 400;
          letter-spacing: 0.012em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.9);
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

        /* ── COUNTDOWN BANNER ── */
        .sp-countdown-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 3.5rem auto 0;
          max-width: 860px;
          width: 100%;
          padding: 2.4rem clamp(1.5rem, 4vw, 3rem);
          background: rgba(18, 10, 6, 0.72);
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 28px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 16px 45px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 0 30px rgba(255, 90, 31, 0.12);
        }

        .sp-countdown-header {
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-countdown-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #ffbd59;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.5rem 1.35rem;
          border-radius: 999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .sp-countdown-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 10px #ff5a1f, 0 0 4px #ffbd59;
        }

        .sp-countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.9rem, 2vw, 1.6rem);
          width: 100%;
          max-width: 720px;
        }

        .sp-countdown-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(35, 20, 14, 0.85) 0%, rgba(20, 11, 7, 0.92) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.22) !important;
          border-radius: 20px;
          padding: 1.6rem 1rem 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(14px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 10px 25px rgba(0, 0, 0, 0.5);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .sp-countdown-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 14px 35px rgba(255, 90, 31, 0.35);
        }

        .sp-countdown-card strong {
          display: block;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 189, 89, 0.3);
        }

        .sp-countdown-card span {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.76rem;
          font-weight: 800;
          color: #ffbd59 !important;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .sp-countdown-glow-line {
          position: absolute;
          bottom: 0;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffbd59, transparent);
          opacity: 0.7;
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
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .sp-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.4rem 2.2rem !important;
          border-radius: 28px !important;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(35, 19, 12, 0.84) 0%, rgba(18, 9, 6, 0.95) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.22) !important;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 18px 50px rgba(0, 0, 0, 0.65);
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease;
        }

        .sp-pillar-card:hover {
          border-color: rgba(255, 189, 89, 0.6) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 24px 60px rgba(255, 90, 31, 0.35);
        }

        .sp-pillar-watermark {
          position: absolute;
          right: 1.5rem;
          top: 0.5rem;
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', serif);
          font-size: 5.5rem;
          font-weight: 900;
          color: rgba(255, 189, 89, 0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: color 300ms ease, transform 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-watermark {
          color: rgba(255, 189, 89, 0.12);
          transform: translateY(-4px) scale(1.05);
        }

        .sp-pillar-glow-accent {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 90, 31, 0.22) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-glow-accent {
          background: radial-gradient(circle, rgba(255, 189, 89, 0.35) 0%, transparent 70%);
        }

        .sp-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-badge-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(14, 8, 5, 0.75);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.4rem 0.95rem;
          border-radius: 999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .sp-pillar-icon {
          font-size: 1rem;
          filter: drop-shadow(0 0 6px rgba(255, 189, 89, 0.6));
        }

        .sp-pillar-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.72rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .sp-pillar-num-pill {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.76rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.65rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sp-pillar-title {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(1.45rem, 2.2vw, 1.85rem);
          font-weight: 900;
          color: #ffffff !important;
          margin-bottom: 0.85rem;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.8);
          transition: color 250ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-title {
          color: #ffd36a !important;
        }

        .sp-pillar-desc {
          font-size: 0.98rem;
          color: rgba(255, 240, 225, 0.84) !important;
          line-height: 1.7;
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          backdrop-filter: blur(8px);
          transition: all 200ms ease;
        }

        .sp-pillar-chip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ffbd59;
          box-shadow: 0 0 6px #ffbd59;
        }

        .sp-pillar-card:hover .sp-pillar-chip {
          background: rgba(255, 189, 89, 0.12);
          border-color: rgba(255, 189, 89, 0.35);
          color: #ffd36a;
        }

        .sp-pillar-glow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff5a1f, #ffbd59, transparent);
          opacity: 0.4;
          transition: opacity 300ms ease, height 300ms ease;
        }

        .sp-pillar-card:hover .sp-pillar-glow-line {
          opacity: 1;
          height: 4px;
        }

        /* ── FESTIVAL VIBE SHOWCASE BANNER ── */
        .sp-festival-vibe-banner {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3rem;
          align-items: center;
          background: linear-gradient(135deg, rgba(42, 19, 12, 0.88) 0%, rgba(18, 9, 6, 0.96) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.3) !important;
          border-radius: 32px;
          padding: clamp(2.4rem, 4vw, 3.4rem);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 24px 70px rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .sp-vibe-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sp-vibe-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.8rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          width: fit-content;
        }

        .sp-vibe-left h3 {
          font-family: var(--font-marron, 'Bodoni Moda', 'Italiana', 'Cinzel Decorative', 'Playfair Display', Georgia, serif);
          font-size: clamp(1.8rem, 2.8vw, 2.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .sp-vibe-left p {
          font-size: 1.05rem;
          color: rgba(255, 240, 225, 0.86);
          line-height: 1.7;
          margin-bottom: 0.6rem;
        }

        .sp-vibe-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 0.4rem;
        }

        .sp-vibe-tags-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.95rem;
        }

        .sp-vibe-tag {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 18px;
          font-size: 0.9rem;
          font-weight: 700;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
          cursor: default;
          backdrop-filter: blur(12px);
        }

        .sp-vibe-main {
          background: linear-gradient(135deg, rgba(48, 22, 12, 0.9) 0%, rgba(26, 12, 7, 0.95) 100%);
          border: 1px solid rgba(255, 189, 89, 0.45);
          color: #ffd36a;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .sp-vibe-secondary {
          background: rgba(20, 11, 8, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .sp-vibe-tag:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: #ffbd59 !important;
          background: linear-gradient(135deg, rgba(65, 28, 15, 0.95) 0%, rgba(35, 15, 8, 0.98) 100%) !important;
          box-shadow: 0 10px 30px rgba(255, 90, 31, 0.35);
          color: #ffffff;
        }

        .sp-vibe-tag-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 8px rgba(255, 189, 89, 0.4));
        }

        .sp-vibe-tag-text {
          flex: 1;
          letter-spacing: -0.01em;
        }

        .sp-vibe-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 8px #ff5a1f, 0 0 3px #ffbd59;
          flex-shrink: 0;
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
          .sp-section { padding: 4.5rem 0; }
          .sp-container { width: min(100%, calc(100% - 1.5rem)); }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
          .stat-card { padding: 1.2rem 0.9rem; }
          .stat-val { font-size: 1.8rem; }
          .sp-hero-title { font-size: 2.9rem; }
          .sp-hero-content { padding: 4.5rem 1rem 2.5rem; }
          .sp-hero-actions { flex-direction: column; width: 100%; max-width: 290px; gap: 0.85rem; }
          .sp-btn-ember, .sp-btn-ghost { width: 100%; text-align: center; padding: 0.9rem 1.8rem; }
          .sp-vibe-tag.sp-vibe-secondary { display: flex !important; }
          .sp-vibe-tags-grid { grid-template-columns: 1fr !important; gap: 0.65rem !important; }
          .sp-vibe-tag { font-size: 0.82rem !important; padding: 0.75rem 0.9rem !important; text-align: left; justify-content: flex-start; }
          .sp-section-title { font-size: 1.85rem !important; }
          .sp-section-subtitle { font-size: 0.94rem !important; line-height: 1.6 !important; margin-bottom: 1.4rem !important; }
          .sp-card-desc, .sp-pillar-desc { font-size: 0.88rem !important; line-height: 1.55 !important; }
          .sp-pillar-card { padding: 1.6rem 1.3rem !important; }
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
      `})]})}function Pe(t){return m.lazy(async()=>{try{return await t()}catch(s){if(/Failed to fetch dynamically imported module/i.test(s?.message)||/Loading chunk/i.test(s?.message)||/Failed to load module script/i.test(s?.message)){const r=Number(sessionStorage.getItem("chunk_reload_ts")||0);if(Date.now()-r>1e4)return sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload(),new Promise(()=>{})}throw s}})}const sr=Pe(()=>Ee(()=>import("./UserDashboardPage-BsHbjtsi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),rr=Pe(()=>Ee(()=>import("./TicketPortalPage-Cq4_vSZr.js"),__vite__mapDeps([8,1,2,3,4,9,7]))),ir=Pe(()=>Ee(()=>import("./MyTicketsPage-P3IP1F3q.js"),__vite__mapDeps([10,1,2,3,4,11,6,7]))),nr=Pe(()=>Ee(()=>import("./TicketViewPage-CAOj5lLt.js"),__vite__mapDeps([12,1,2,3,4,11,6,7,9]))),or=Pe(()=>Ee(()=>import("./TicketVerificationPage-DL6wifID.js"),__vite__mapDeps([13,1,2,4,9,7]))),lr=Pe(()=>Ee(()=>import("./AdminDashboardPage-iKBJabWQ.js"),__vite__mapDeps([14,1,2,5,9,7]))),cr=Pe(()=>Ee(()=>import("./AdminTicketReviewPage-CNdDIEe0.js"),__vite__mapDeps([15,1,2,4,9,5,7]))),dr=Pe(()=>Ee(()=>import("./HotelsPage-CmlL0dUs.js"),__vite__mapDeps([16,1,2,7]))),Zt=Pe(()=>Ee(()=>import("./FestivalSchedulePage-2Cng7Uio.js"),__vite__mapDeps([17,1,2]))),Jt=Pe(()=>Ee(()=>import("./LegalPage-Cp5apOjn.js"),__vite__mapDeps([18,1,2]))),pr=Pe(()=>Ee(()=>import("./NotFound-12U-ahfn.js"),__vite__mapDeps([19,1,2])));function mr(){return e.jsx(m.Suspense,{fallback:e.jsx(Ha,{}),children:e.jsxs(xa,{children:[e.jsxs(H,{element:e.jsx(Ra,{}),children:[e.jsx(H,{path:"/login",element:e.jsx(jt,{children:e.jsx(Xa,{})})}),e.jsx(H,{path:"/register",element:e.jsx(jt,{children:e.jsx(ts,{})})}),e.jsx(H,{path:"/auth/google/callback",element:e.jsx(jt,{children:e.jsx(as,{})})})]}),e.jsx(H,{path:"/",element:e.jsx(Le,{children:e.jsx(ar,{})})}),e.jsx(H,{path:"/dashboard",element:e.jsx(ue,{to:"/",replace:!0})}),e.jsx(H,{path:"/about",element:e.jsx(ue,{to:"/#about",replace:!0})}),e.jsx(H,{path:"/collaboration",element:e.jsx(ue,{to:"/#sponsorship",replace:!0})}),e.jsx(H,{path:"/prismfest",element:e.jsx(ue,{to:"/#home",replace:!0})}),e.jsx(H,{path:"/prismfest/celebrities",element:e.jsx(ue,{to:"/#celebrities",replace:!0})}),e.jsx(H,{path:"/prismfest/events",element:e.jsx(ue,{to:"/#events",replace:!0})}),e.jsx(H,{path:"/prismfest/future",element:e.jsx(ue,{to:"/#future-events",replace:!0})}),e.jsx(H,{path:"/history",element:e.jsx(ue,{to:"/#history",replace:!0})}),e.jsx(H,{path:"/events",element:e.jsx(ue,{to:"/#events",replace:!0})}),e.jsx(H,{path:"/sponsorship",element:e.jsx(ue,{to:"/#sponsorship",replace:!0})}),e.jsx(H,{path:"/contact",element:e.jsx(ue,{to:"/#contact",replace:!0})}),e.jsx(H,{path:"/facilities",element:e.jsx(ue,{to:"/#facilities",replace:!0})}),e.jsx(H,{path:"/hotels",element:e.jsx(Le,{children:e.jsx(dr,{})})}),e.jsx(H,{path:"/schedule",element:e.jsx(Le,{children:e.jsx(Zt,{})})}),e.jsx(H,{path:"/lineup",element:e.jsx(Le,{children:e.jsx(Zt,{})})}),e.jsx(H,{path:"/restaurants",element:e.jsx(ue,{to:"/#restaurants",replace:!0})}),e.jsx(H,{path:"/discounts",element:e.jsx(ue,{to:"/#discounts",replace:!0})}),e.jsx(H,{path:"/partner",element:e.jsx(ue,{to:"/#about",replace:!0})}),e.jsx(H,{path:"/privacy",element:e.jsx(Le,{children:e.jsx(Jt,{type:"privacy"})})}),e.jsx(H,{path:"/terms",element:e.jsx(Le,{children:e.jsx(Jt,{type:"terms"})})}),e.jsx(H,{path:"/verification/:ticketId",element:e.jsx(Le,{children:e.jsx(or,{})})}),e.jsx(H,{path:"/tickets",element:e.jsx(kt,{children:e.jsx(rr,{})})}),e.jsxs(H,{element:e.jsx(Pa,{}),children:[e.jsx(H,{path:"/account",element:e.jsx(Le,{children:e.jsx(sr,{})})}),e.jsx(H,{path:"/admin",element:e.jsx(ue,{to:"/admin/dashboard",replace:!0})}),e.jsx(H,{path:"/admin/dashboard",element:e.jsx(Le,{children:e.jsx(lr,{})})}),e.jsx(H,{path:"/tickets/my-tickets",element:e.jsx(kt,{children:e.jsx(ir,{})})}),e.jsx(H,{path:"/tickets/view/:ticketId",element:e.jsx(kt,{children:e.jsx(nr,{})})}),e.jsx(H,{path:"/admin/tickets",element:e.jsx(Le,{children:e.jsx(cr,{})})})]}),e.jsx(H,{path:"*",element:e.jsx(pr,{})})]})})}const ur=2,Ve=8e3,Ge=20,hr=`
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
`,fr=`
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
`,gr=`
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
`,xr=`
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
`;function Qt(t,s,a){const r=t.createShader(s);return r?(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("ParticleDrift shader:",t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}function ea(t,s,a){const r=Qt(t,t.VERTEX_SHADER,s),i=Qt(t,t.FRAGMENT_SHADER,a);if(!r||!i)return null;const l=t.createProgram();return l?(t.attachShader(l,r),t.attachShader(l,i),t.linkProgram(l),t.getProgramParameter(l,t.LINK_STATUS)?l:(console.error("ParticleDrift link:",t.getProgramInfoLog(l)),null)):null}function ta(t,s){if(!t)return s;const a=String(t).trim();if(a.charAt(0)==="#"){let i=a.slice(1);if((i.length===3||i.length===4)&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),i.length>=6){const l=parseInt(i.slice(0,2),16),d=parseInt(i.slice(2,4),16),o=parseInt(i.slice(4,6),16);if(!isNaN(l)&&!isNaN(d)&&!isNaN(o))return[l/255,d/255,o/255]}return s}const r=a.match(/[\d.]+/g);return r&&r.length>=3?[Math.min(255,parseFloat(r[0]))/255,Math.min(255,parseFloat(r[1]))/255,Math.min(255,parseFloat(r[2]))/255]:s}function _e(t,s){return typeof t=="number"&&isFinite(t)?t:s}function Ke(t,s,a){return t<s?s:t>a?a:t}function br(t){let s=t>>>0;return function(){s+=1831565813;let a=s;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}const At=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function vr({style:t,background:s="transparent",baseColor:a="#F84400",accentColor:r="#ECECEC",density:i=235,dotSize:l=14,speed:d=100,direction:o=0,hover:p=200,linkDistance:f=202,linkThickness:x=2.5,width:j,height:N,isFixed:C=!0}){const ae=m.useRef(null),w=m.useRef(null),B=m.useRef({w:0,h:0});B.current={w:_e(j,0),h:_e(N,0)};const T=m.useRef({x:-1e4,y:-1e4}),$=m.useRef({});$.current={base:a,accent:r,density:Math.round(Ke(_e(i,90),10,400)),dotSize:Ke(_e(l,5),1,24),speed:Ke(_e(d,50),0,100)/50,direction:Ke(_e(o,0),0,360),hover:Ke(_e(p,100),0,200)/100,linkDistance:Ke(_e(f,120),0,400),linkThickness:Ke(_e(x,1),.5,8)},m.useEffect(()=>{const R=w.current;if(!R)return;const n=R.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!n){console.error("ParticleDrift: WebGL unavailable");return}const W=ea(n,hr,fr),A=ea(n,gr,xr);if(!W||!A)return;const y=new Map,c=(Q,I)=>{const g=(Q===W?"L:":"D:")+I;return y.has(g)||y.set(g,n.getUniformLocation(Q,I)),y.get(g)},h=new Float32Array(Ve*6*2),E=new Float32Array(Ve*6*2),M=new Float32Array(Ve*6*2),X=new Float32Array(Ve*6*3);for(let Q=0;Q<Ve;Q++)for(let I=0;I<6;I++){const g=(Q*6+I)*2;M[g]=At[I][0],M[g+1]=At[I][1]}const _=n.createBuffer(),se=n.createBuffer(),K=n.createBuffer(),te=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,h.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,se),n.bufferData(n.ARRAY_BUFFER,E.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,K),n.bufferData(n.ARRAY_BUFFER,M,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,te),n.bufferData(n.ARRAY_BUFFER,X.byteLength,n.DYNAMIC_DRAW);const oe=br(20260824);let U=0,F=new Float32Array(0),z=new Float32Array(0),ce=new Float32Array(0),u=new Float32Array(0),k=new Float32Array(0);const S=n.createBuffer(),v=n.createBuffer(),P=(Q,I,g)=>{U=Q,F=new Float32Array(Q),z=new Float32Array(Q),ce=new Float32Array(Q),u=new Float32Array(Q*2),k=new Float32Array(Q);for(let b=0;b<Q;b++)F[b]=oe()*I,z[b]=oe()*g,ce[b]=(oe()*.4+.1)*60;n.bindBuffer(n.ARRAY_BUFFER,S),n.bufferData(n.ARRAY_BUFFER,u.byteLength,n.DYNAMIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,v),n.bufferData(n.ARRAY_BUFFER,k.byteLength,n.DYNAMIC_DRAW)};let Z=0,V=performance.now(),le=-1,J=0,re=0;const de=Q=>{if(Z=requestAnimationFrame(de),typeof document<"u"&&document.hidden){V=Q;return}const I=Math.min(.05,(Q-V)/1e3);V=Q;const g=$.current,b=g.speed,ie=Math.min(window.devicePixelRatio||1,ur),Y=B.current.w||R.clientWidth||window.innerWidth||1200,ee=B.current.h||R.clientHeight||window.innerHeight||800,Ne=Math.max(1,Math.round(Y*ie)),ke=Math.max(1,Math.round(ee*ie));(R.width!==Ne||R.height!==ke)&&(R.width=Ne,R.height=ke),n.viewport(0,0,Ne,ke);const xe=Y<768,Ye=Y>=768&&Y<1024;let Fe=g.density,Re=g.linkDistance,st=g.dotSize;if(xe?(Fe=Math.max(60,Math.min(Math.round(g.density*.38),90)),Re=Math.min(g.linkDistance,135),st=Math.min(g.dotSize,8.5)):Ye&&(Fe=Math.max(90,Math.min(Math.round(g.density*.6),145)),Re=Math.min(g.linkDistance,165),st=Math.min(g.dotSize,11)),Fe!==le&&(P(Fe,Y,ee),le=Fe),Y!==J||ee!==re){const L=Y/Math.max(J||Y,1),ne=ee/Math.max(re||ee,1);for(let me=0;me<U;me++)F[me]*=L,z[me]*=ne;J=Y,re=ee}const qe=T.current,rt=g.hover,it=(xe?100:180)*(rt>0?1:0),ve=Re,nt=xe?Math.min(g.linkThickness,1.6):g.linkThickness,pt=g.direction*Math.PI/180,mt=Math.sin(pt),bt=Math.cos(pt);let Ie=0;const ut=(L,ne,me,ye,fe,Se,Be,Je)=>{if(!(Ie>=Ve)){for(let Te=0;Te<6;Te++){const Qe=(Ie*6+Te)*2,vt=(Ie*6+Te)*3;h[Qe]=L,h[Qe+1]=ne,E[Qe]=me,E[Qe+1]=ye,X[vt]=At[Te][0]===0?fe:Se,X[vt+1]=Be,X[vt+2]=Je}Ie++}};for(let L=0;L<U;L++){F[L]+=ce[L]*mt*I*b,z[L]+=ce[L]*bt*I*b,F[L]<-Ge?(F[L]=Y+Ge,z[L]=oe()*ee):F[L]>Y+Ge&&(F[L]=-Ge,z[L]=oe()*ee),z[L]<-Ge?(z[L]=ee+Ge,F[L]=oe()*Y):z[L]>ee+Ge&&(z[L]=-Ge,F[L]=oe()*Y);const ne=qe.x-F[L],me=qe.y-z[L],ye=Math.sqrt(ne*ne+me*me),fe=it>0&&ye<it?1:0;if(fe===1){const Se=.5*(1-ye/it)*rt;ut(F[L],z[L],qe.x,qe.y,Se,Se,1,nt)}u[L*2]=F[L],u[L*2+1]=z[L],k[L]=fe}if(ve>0){const L=ve*ve;for(let ne=0;ne<U&&Ie<Ve;ne++){const me=F[ne],ye=z[ne];for(let fe=ne+1;fe<U&&Ie<Ve;fe++){const Se=me-F[fe];if(Se>ve||Se<-ve)continue;const Be=ye-z[fe];if(Be>ve||Be<-ve)continue;const Je=Se*Se+Be*Be;if(Je>=L)continue;const Te=.15*(1-Math.sqrt(Je)/ve);ut(me,ye,F[fe],z[fe],Te,Te,0,nt)}}}n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA);const Oe=ta(g.base,[.973,.267,0]),De=ta(g.accent,[.925,.925,.925]);if(Ie>0){n.useProgram(W);const L=Ie*6;n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferSubData(n.ARRAY_BUFFER,0,h.subarray(0,L*2));const ne=n.getAttribLocation(W,"a_p0");n.enableVertexAttribArray(ne),n.vertexAttribPointer(ne,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,se),n.bufferSubData(n.ARRAY_BUFFER,0,E.subarray(0,L*2));const me=n.getAttribLocation(W,"a_p1");n.enableVertexAttribArray(me),n.vertexAttribPointer(me,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,K);const ye=n.getAttribLocation(W,"a_corner");n.enableVertexAttribArray(ye),n.vertexAttribPointer(ye,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,te),n.bufferSubData(n.ARRAY_BUFFER,0,X.subarray(0,L*3));const fe=n.getAttribLocation(W,"a_shade");n.enableVertexAttribArray(fe),n.vertexAttribPointer(fe,3,n.FLOAT,!1,0,0),n.uniform2f(c(W,"uSize"),Y,ee),n.uniform3f(c(W,"uBase"),Oe[0],Oe[1],Oe[2]),n.uniform3f(c(W,"uAccent"),De[0],De[1],De[2]),n.drawArrays(n.TRIANGLES,0,L),n.disableVertexAttribArray(ne),n.disableVertexAttribArray(me),n.disableVertexAttribArray(ye),n.disableVertexAttribArray(fe)}if(U>0){n.useProgram(A),n.bindBuffer(n.ARRAY_BUFFER,S),n.bufferSubData(n.ARRAY_BUFFER,0,u);const L=n.getAttribLocation(A,"a_pos");n.enableVertexAttribArray(L),n.vertexAttribPointer(L,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,v),n.bufferSubData(n.ARRAY_BUFFER,0,k);const ne=n.getAttribLocation(A,"a_lit");n.enableVertexAttribArray(ne),n.vertexAttribPointer(ne,1,n.FLOAT,!1,0,0),n.uniform2f(c(A,"uSize"),Y,ee),n.uniform1f(c(A,"uDpr"),ie),n.uniform1f(c(A,"uDot"),st),n.uniform1f(c(A,"uRestAlpha"),.4),n.uniform3f(c(A,"uBase"),Oe[0],Oe[1],Oe[2]),n.uniform3f(c(A,"uAccent"),De[0],De[1],De[2]),n.drawArrays(n.POINTS,0,U),n.disableVertexAttribArray(L),n.disableVertexAttribArray(ne)}},he=Q=>{const I=R.getBoundingClientRect();if(I.width<=0||I.height<=0)return;const g=B.current.w||R.clientWidth||window.innerWidth||1200,b=B.current.h||R.clientHeight||window.innerHeight||800;T.current.x=(Q.clientX-I.left)/I.width*g,T.current.y=(Q.clientY-I.top)/I.height*b},pe=()=>{T.current.x=-1e4,T.current.y=-1e4};return window.addEventListener("pointermove",he,{passive:!0}),window.addEventListener("pointerleave",pe,{passive:!0}),Z=requestAnimationFrame(de),()=>{cancelAnimationFrame(Z),window.removeEventListener("pointermove",he),window.removeEventListener("pointerleave",pe),n.deleteBuffer(_),n.deleteBuffer(se),n.deleteBuffer(K),n.deleteBuffer(te),n.deleteBuffer(S),n.deleteBuffer(v),n.deleteProgram(W),n.deleteProgram(A)}},[]);const D=C?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:s,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:s,isolation:"isolate",width:typeof j=="number"&&j>0?j:"100%",height:typeof N=="number"&&N>0?N:"100%",...t};return e.jsx("div",{ref:ae,style:D,"aria-hidden":"true",children:e.jsx("canvas",{ref:w,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function yr(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(ba,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(Sa,{children:[e.jsx(vr,{}),e.jsx(mr,{})]})})}class wr extends m.Component{constructor(a){super(a);Rt(this,"handleReload",()=>{sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload()});this.state={error:null}}static getDerivedStateFromError(a){return{error:a}}componentDidCatch(a,r){if(console.error("Application render failed:",a,r),/Failed to fetch dynamically imported module/i.test(a?.message)||/Loading chunk/i.test(a?.message)||/Failed to load module script/i.test(a?.message)){const l=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-l>1e4&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}}render(){if(this.state.error){const a=/Failed to fetch dynamically imported module/i.test(this.state.error?.message)||/Loading chunk/i.test(this.state.error?.message);return e.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif",maxWidth:"600px",margin:"40px auto",textAlign:"center"},children:[e.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:a?"New Update Available":"OZILLA FEST could not render"}),e.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:a?"A new version of the website was published. Please refresh to load the latest version.":"Check the browser console for the full error details."}),e.jsx("button",{type:"button",onClick:this.handleReload,style:{padding:"10px 20px",backgroundColor:"#ea580c",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",marginBottom:"16px"},children:"Refresh Page"}),!a&&e.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12",textAlign:"left"},children:this.state.error.message})]})}return this.props.children}}Et.createRoot(document.getElementById("root")).render(e.jsx(lt.StrictMode,{children:e.jsx(wr,{children:e.jsx(ja,{clientId:"placeholder-client-id",children:e.jsx(yr,{})})})}));export{Ha as L,Ta as P,we as a,G as b,ss as o,je as t,at as u};
