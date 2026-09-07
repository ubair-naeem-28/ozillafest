const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-DB9WVH8B.js","assets/vendor-motion-DHTbcX3O.js","assets/vendor-react-6MXTWAEx.js","assets/googleAuth.util-sbKcTwTI.js","assets/vendor-utils-Bub7y9MC.js","assets/RegisterPage-6kEQKGE5.js","assets/GoogleAuthCallbackPage-7Epelufz.js","assets/DashboardPage-BUAxq5MS.js","assets/ozillaProfessionalContent-BUZswfBt.js","assets/UserDashboardPage-BcqpSGoG.js","assets/useTicket-BY0UoVbI.js","assets/ticketService-uFukg8CG.js","assets/PageHeader-DJkV4_O-.js","assets/formatDate.util-wEQv7dlP.js","assets/TicketPortalPage-XeHk4DU1.js","assets/AlertMessage-BVQu3q6F.js","assets/MyTicketsPage-BsfrZwJe.js","assets/GeneratedTicketCard-CRSYxZvM.js","assets/TicketViewPage-C5hQ2zNM.js","assets/TicketVerificationPage-EPQH5jvZ.js","assets/AdminDashboardPage-RdqCfoA0.js","assets/AdminTicketReviewPage-CGYZYgch.js","assets/HotelsPage-DWbXD4AJ.js","assets/FestivalSchedulePage-C-fwl41C.js","assets/LegalPage-0v422c6k.js","assets/NotFound-DvQu_5Ky.js"])))=>i.map(i=>d[i]);
import{j as e,u as Nt,m as dt,a as xt,b as Tt,A as Ot}from"./vendor-motion-DHTbcX3O.js";import{a as It,r as h,R as De,u as Ue,N as z,O as Be,L as S,b as _t,c as Ct,d as Dt,e as g,B as Ut}from"./vendor-react-6MXTWAEx.js";import{a as Bt}from"./vendor-utils-Bub7y9MC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ct={},gt=It;ct.createRoot=gt.createRoot,ct.hydrateRoot=gt.hydrateRoot;function Vt(t={}){const{nonce:s,locale:n,onScriptLoadSuccess:a,onScriptLoadError:o}=t,[i,l]=h.useState(!1),c=h.useRef(a);c.current=a;const d=h.useRef(o);return d.current=o,h.useEffect(()=>{const u=document.createElement("script");return u.src="https://accounts.google.com/gsi/client",n&&(u.src+=`?hl=${n}`),u.async=!0,u.defer=!0,u.nonce=s,u.onload=()=>{var m;l(!0),(m=c.current)===null||m===void 0||m.call(c)},u.onerror=()=>{var m;l(!1),(m=d.current)===null||m===void 0||m.call(d)},document.body.appendChild(u),()=>{document.body.removeChild(u)}},[s]),i}const Yt=h.createContext(null);function $t({clientId:t,nonce:s,locale:n,onScriptLoadSuccess:a,onScriptLoadError:o,children:i}){const l=Vt({nonce:s,onScriptLoadSuccess:a,onScriptLoadError:o,locale:n}),c=h.useMemo(()=>({locale:n,clientId:t,scriptLoadedSuccessfully:l}),[t,l]);return De.createElement(Yt.Provider,{value:c},i)}const st="prism_token",ee={getToken(){return localStorage.getItem(st)},setToken(t){localStorage.setItem(st,t)},removeToken(){localStorage.removeItem(st)}},Wt="http://localhost:5000/api",U=Bt.create({baseURL:Wt,headers:{"Content-Type":"application/json"}});U.interceptors.request.use(t=>{const s=ee.getToken();return s&&(t.headers.Authorization=`Bearer ${s}`),t},t=>Promise.reject(t));U.interceptors.response.use(t=>t,t=>(t.response?.status===401&&ee.removeToken(),Promise.reject(t)));const X={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/send-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},kt="ozilla_local_users";let ke=!1;function T(t){return String(t||"").toLowerCase().trim()}function ie(t){return String(t||"").trim()}function ae(){try{const t=localStorage.getItem(kt),s=t?JSON.parse(t):[];return Array.isArray(s)?s:[]}catch{return[]}}function be(t){localStorage.setItem(kt,JSON.stringify(t))}function Ht(t){const s={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(s))}`}function nt(t){const s=String(t||"");if(!s)return null;if(s.startsWith("local."))try{return JSON.parse(atob(s.slice(6)))}catch{return null}const n=s.split(".");if(n.length===3)try{return JSON.parse(atob(n[1]))}catch{return null}return null}function Ce(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function Me(t={}){const s=String(t.firstName||"Local").trim()||"Local",n=String(t.lastName||"User").trim()||"User",a=T(t.email||"local@ozillafestival.com"),o=ie(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:s,lastName:n,name:`${s} ${n}`.trim(),email:a,phone:o,password:String(t.password||""),role:"user"}}function lt(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function He(t){return lt(t)?(ke=!0,!0):!1}function Fe(t){const s=Ce(t);return{token:Ht(s),user:s,mode:"local-fallback"}}const Ge={async login(t){const s=String(t?.email||t?.phone||t?.identifier||"").trim(),n=T(s),a=ie(s),o=String(t?.password||"").trim();try{const i=await U.post(X.AUTH.LOGIN,{email:s,password:o});if(i?.data?.token){const l=ae(),c=l.findIndex(u=>T(u.email)===n||ie(u.phone)===a),d={id:i.data.user?.id||`user-${Date.now()}`,firstName:i.data.user?.firstName||"",lastName:i.data.user?.lastName||"",name:i.data.user?.name||"",email:i.data.user?.email?T(i.data.user.email):n,phone:i.data.user?.phone?ie(i.data.user.phone):a,password:o,role:i.data.user?.role||"user"};return c>=0?(l[c]=d,be(l)):be([d,...l]),i.data}return i.data}catch(i){const l=ae(),c=l.find(u=>(T(u.email)===n||ie(u.phone)===a)&&u.password===o);if(c)return ke=!0,Fe(c);const d=l.find(u=>T(u.email)===n||ie(u.phone)===a);if(d&&d.password!==o){const u=new Error("Invalid credentials. Please check your password.");throw u.response={status:401,data:{message:"Invalid credentials. Please check your password."}},u}throw i}},async register(t){const s=T(t?.email),n=ie(t?.phone),a=String(t?.password||"").trim(),o=ae(),i=o.find(c=>T(c.email)===s),l=o.find(c=>ie(c.phone)===n);try{const c=await U.post(X.AUTH.REGISTER,{...t,email:s,phone:n,password:a});if(c?.data?.token){const d=Me({id:c.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:s,phone:n,password:a}),u=o.filter(m=>T(m.email)!==s&&ie(m.phone)!==n);be([d,...u])}return c.data}catch(c){if(c?.response?.status===409||c?.response?.data?.message)throw c;if(i){const u=new Error("Account already exists with this email. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this email. Please log in."}},u}if(l){const u=new Error("Account already exists with this phone number. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},u}const d=Me({...t,email:s,phone:n,password:a});return be([d,...o]),ke=!0,Fe(d)}},async sendOtp(t){const s=T(t);try{return(await U.post(X.AUTH.SEND_OTP,{email:s})).data}catch(n){if(n?.response?.data?.message)throw n;if(lt(n)){const a=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw a.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},a}throw n}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const s=T(t?.email),n=String(t?.otp||"").trim();try{return(await U.post(X.AUTH.VERIFY_OTP,{email:s,otp:n})).data}catch(a){if(a?.response?.data?.message)throw a;if(lt(a)){const o=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw o.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},o}throw a}},async getCurrentUser(){const t=ee.getToken();if(!t){const n=new Error("Unauthorized");throw n.response={status:401,data:{message:"Unauthorized"}},n}const s=nt(t);if(s?.mode==="local-fallback"||String(t||"").startsWith("local.")){const a=ae().find(o=>o.id===s?.sub||T(o.email)===T(s?.email));if(a)return Ce(a)}try{return(await U.get(X.AUTH.ME)).data}catch(n){const o=ae().find(i=>i.id===s?.sub||T(i.email)===T(s?.email));if(o)return Ce(o);throw n}},async logout(){if(ke)return{message:"Logged out successfully"};try{return(await U.post(X.AUTH.LOGOUT)).data}catch(t){if(He(t))return{message:"Logged out successfully"};throw t}},async forgotPassword(t){return(await U.post(X.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await U.post(X.AUTH.RESET_PASSWORD,t)).data},async googleAuth(t,s){if(ke){const a=Me(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),o=ae();return o.some(i=>i.email===a.email)||be([a,...o]),Fe(a)}try{return(await U.post(X.AUTH.GOOGLE,{token:t,profile:s})).data}catch(n){if(He(n)){const o=Me(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Fe(o)}throw n}},async googleCodeLogin(t,s="postmessage",n){if(ke){const o=Me(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=ae();return i.some(l=>l.email===o.email)||be([o,...i]),Fe(o)}try{return(await U.post(X.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:s,profile:n})).data}catch(a){if(He(a)){const i=Me(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Fe(i)}throw a}},async googleTokenLogin(t,s){return this.googleAuth(t,s)},async updateProfile(t){if(ke){const s=ee.getToken(),n=nt(s),a=ae(),o=a.findIndex(c=>c.id===n?.sub||c.email===n?.email);if(o===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const i=a[o],l={...i,firstName:typeof t?.firstName=="string"?t.firstName.trim():i.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():i.lastName,phone:typeof t?.phone=="string"?t.phone.trim():i.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||i.name,a[o]=l,be(a),{message:"Profile updated successfully",user:Ce(l)}}try{return(await U.put(X.AUTH.PROFILE,t)).data}catch(s){if(He(s)){const n=ee.getToken(),a=nt(n),o=ae(),i=o.findIndex(d=>d.id===a?.sub||d.email===a?.email);if(i===-1){const d=new Error("Unauthorized");throw d.response={status:401,data:{message:"Unauthorized"}},d}const l=o[i],c={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return c.name=`${c.firstName||""} ${c.lastName||""}`.trim()||l.name,o[i]=c,be(o),{message:"Profile updated successfully",user:Ce(c)}}throw s}}},Rt=h.createContext(null);function Gt({children:t}){const[s,n]=h.useState(null),[a,o]=h.useState(!0);h.useEffect(()=>{i()},[]);const i=async()=>{try{if(ee.getToken()){const v=await Ge.getCurrentUser();n(v)}}catch{ee.removeToken()}finally{o(!1)}},l=async b=>{const v=await Ge.login(b);return ee.setToken(v.token),n(v.user),v},c=async b=>{const v=await Ge.register(b);return ee.setToken(v.token),n(v.user),v},d=()=>{Ge.logout().catch(()=>{}),ee.removeToken(),n(null)},u=s?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(s?.email||"").toLowerCase().trim()),m={user:s,isAdmin:u,loading:a,login:l,register:c,logout:d,checkAuth:i};return e.jsx(Rt.Provider,{value:m,children:t})}const Xt="modulepreload",qt=function(t){return"/ozillafest/"+t},bt={},O=function(s,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(n.map(d=>{if(d=qt(d),d in bt)return;bt[d]=!0;const u=d.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":Xt,u||(b.as="script"),b.crossOrigin="",b.href=d,c&&b.setAttribute("nonce",c),document.head.appendChild(b),u)return new Promise((v,L)=>{b.addEventListener("load",v),b.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return s().catch(i)})};function ut(){const t=h.useContext(Rt);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function Kt({children:t}){const{user:s,loading:n}=ut(),a=Ue();if(n)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!s){const o=`${a.pathname}${a.search}`,i=new URLSearchParams({returnTo:o}).toString();return e.jsx(z,{to:`/login?${i}`,replace:!0})}return t||e.jsx(Be,{})}function Zt(t,s="/dashboard"){if(!t||typeof t!="string")return s;let n=t.trim();if(n.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(n))return s;n.startsWith("/ozillafest")&&(n=n.slice(11)),n.startsWith("/")||(n=`/${n}`);const a=n.split("?")[0].replace(/\/$/,"");return!a||a==="/login"||a==="/register"?s:n}function Jt({children:t}){const{user:s,loading:n}=ut(),a=Ue();if(n)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(s){const i=new URLSearchParams(a.search).get("returnTo"),l=Zt(i,"/dashboard");return e.jsx(z,{to:l,replace:!0})}return t||e.jsx(Be,{})}function Te(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const s="/ozillafest/",n=s.endsWith("/")?s:`${s}/`,a=t.replace(/^\/+/,"");return a.startsWith("assets/")||a.startsWith("favicon")?`${n}${a}`:t.startsWith("/")?`${n}${a}`:t}function Qt({className:t="",nodeColor:s="#EC4899",lineColor:n="236, 72, 153",secondaryColor:a="255, 90, 31",maxDistance:o=135,speed:i=.5}){const l=h.useRef(null);return h.useEffect(()=>{const c=l.current;if(!c)return;const d=c.getContext("2d",{alpha:!0});if(!d)return;let u=null,m=!0,b=!1,v=c.width=c.parentElement?.clientWidth||window.innerWidth,L=c.height=c.parentElement?.clientHeight||window.innerHeight;const x=v<768?18:34,Y=340,w=450,Ae=o*o;let q={x:v/2,y:L/2,active:!1},y={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const r=[];for(let D=0;D<x;D++)r.push({x:(Math.random()-.5)*v*1.1,y:(Math.random()-.5)*L*1.1,z:(Math.random()-.5)*w,vx:(Math.random()-.5)*i*.7,vy:(Math.random()-.5)*i*.7,vz:(Math.random()-.5)*i*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const I=()=>{c.parentElement&&(v=c.width=c.parentElement.clientWidth||window.innerWidth,L=c.height=c.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",I,{passive:!0});const C=D=>{if(!m)return;const te=c.getBoundingClientRect();q.x=D.clientX-te.left,q.y=D.clientY-te.top,q.active=!0;const he=(q.x-v/2)/(v/2),me=(q.y-L/2)/(L/2);y.targetRotY=he*.14,y.targetRotX=-me*.14},Re=()=>{q.active=!1,y.targetRotX=0,y.targetRotY=0};window.addEventListener("mousemove",C,{passive:!0}),window.addEventListener("mouseleave",Re,{passive:!0});const B=()=>{if(!m||document.hidden){b=!1;return}d.clearRect(0,0,v,L),y.rotX+=(y.targetRotX-y.rotX)*.05,y.rotY+=(y.targetRotY-y.rotY)*.05;const D=Math.cos(y.rotY),te=Math.sin(y.rotY),he=Math.cos(y.rotX),me=Math.sin(y.rotX),re=v/2,se=L/2,E=v*.65,N=L*.65,we=w*.55,$=[];for(let M=0;M<x;M++){const p=r[M];p.x+=p.vx,p.y+=p.vy,p.z+=p.vz,(p.x<-E||p.x>E)&&(p.vx*=-1),(p.y<-N||p.y>N)&&(p.vy*=-1),(p.z<-we||p.z>we)&&(p.vz*=-1);const pe=p.x*D-p.z*te,K=p.z*D+p.x*te,Z=p.y*he-K*me,xe=K*he+p.y*me,ne=xe+w;if(ne<=0)continue;const W=Y/(Y+ne*.65),Ee=re+pe*W,ze=se+Z*W,Se=Math.max(.18,Math.min(.85,(xe+w)/(w*1.4)));$.push({x:Ee,y:ze,scale:W,alpha:Se,radius:Math.max(1.2,p.radius*W),colorType:p.colorType})}const fe=$.length;for(let M=0;M<fe;M++){const p=$[M];let pe=0;for(let K=M+1;K<fe&&pe<3;K++){const Z=$[K],xe=p.x-Z.x,ne=p.y-Z.y,W=xe*xe+ne*ne;if(W<Ae){pe++;const Ee=Math.sqrt(W),ze=(1-Ee/o)*.4*Math.min(p.alpha,Z.alpha),Se=p.colorType==="primary"?n:a;d.beginPath(),d.moveTo(p.x,p.y),d.lineTo(Z.x,Z.y),d.strokeStyle=`rgba(${Se}, ${ze})`,d.lineWidth=Math.max(.5,(1-Ee/o)*1.2),d.stroke()}}}for(let M=0;M<fe;M++){const p=$[M],pe=p.colorType==="primary"?`rgba(${n}, ${p.alpha})`:`rgba(${a}, ${p.alpha})`;d.beginPath(),d.arc(p.x,p.y,p.radius,0,Math.PI*2),d.fillStyle=pe,d.fill()}u=requestAnimationFrame(B)},ce=()=>{!b&&m&&!document.hidden&&(b=!0,u=requestAnimationFrame(B))},le=()=>{b=!1,u&&(cancelAnimationFrame(u),u=null)};let de=null;"IntersectionObserver"in window?(de=new IntersectionObserver(([D])=>{m=D.isIntersecting,m?ce():le()},{threshold:.05}),de.observe(c)):ce();const ue=()=>{document.hidden?le():m&&ce()};return document.addEventListener("visibilitychange",ue),()=>{le(),window.removeEventListener("resize",I),window.removeEventListener("mousemove",C),window.removeEventListener("mouseleave",Re),document.removeEventListener("visibilitychange",ue),de&&de.disconnect()}},[s,n,a,o,i]),e.jsx("canvas",{ref:l,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const er=De.memo(Qt);function at({children:t}){const s=Ue(),n=s.pathname==="/login",a=s.pathname==="/register";return e.jsxs("div",{className:`auth-page ${n?"auth-page-login":""} ${a?"auth-page-register":""}`,children:[e.jsx(er,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:135,speed:.5}),e.jsx("div",{className:"auth-ambient-blob-1","aria-hidden":"true"}),e.jsx("div",{className:"auth-ambient-blob-2","aria-hidden":"true"}),e.jsxs("div",{className:"auth-centered-shell",children:[e.jsxs("div",{className:"auth-center-header",children:[e.jsxs(S,{to:"/",className:"auth-center-logo-wrap","aria-label":"Go to Home",children:[e.jsx("img",{src:Te("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"auth-center-logo",onError:o=>{o.currentTarget.src=Te("/assets/logo.jpeg")}}),e.jsxs("div",{className:"auth-center-brand-text",children:[e.jsx("strong",{children:"OZILLA FESTIVAL"}),e.jsx("span",{children:"OFFICIAL PORTAL · 2026"})]})]}),e.jsx("span",{className:"auth-center-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"auth-center-title",children:n?"Welcome Back to Ozilla":"Join Ozilla Festival 2026"})]}),e.jsxs("section",{className:"auth-card",children:[e.jsxs("div",{className:"auth-card-tabs",children:[e.jsx(S,{to:`/login${s.search}`,className:`auth-tab-btn ${n?"active":""}`,children:"Sign In"}),e.jsx(S,{to:`/register${s.search}`,className:`auth-tab-btn ${a?"active":""}`,children:"Create Account"})]}),e.jsx("div",{className:"auth-card-body",children:t||e.jsx(Be,{})})]}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function tr({children:t,className:s="",onClick:n,mouseX:a,spring:o,distance:i,magnification:l,baseItemSize:c,label:d}){const u=h.useRef(null),m=Nt(0),b=xt(a,w=>{if(w===1/0||!u.current)return i;const Ae=u.current.getBoundingClientRect(),q=Ae.left+Ae.width/2;return w-q}),v=xt(b,[-i,0,i],[c,l,c]),L=Tt(v,o),ye=w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),n?.())},x=()=>{m.set(1)},Y=()=>{m.set(0)};return e.jsx(dt.div,{ref:u,style:{width:L,height:L},onHoverStart:x,onHoverEnd:Y,onFocus:x,onBlur:Y,onClick:n,className:`dock-item ${s}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":d,onKeyDown:ye,children:h.Children.map(t,w=>h.cloneElement(w,{isHovered:m}))})}function rr({children:t,className:s="",...n}){const{isHovered:a}=n,[o,i]=h.useState(!1);return h.useEffect(()=>{if(!a)return;const l=a.on("change",c=>{i(c===1)});return()=>l()},[a]),e.jsx(Ot,{children:o&&e.jsx(dt.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${s}`,role:"tooltip",style:{x:"-50%"},children:t})})}function sr({children:t,className:s=""}){return e.jsx("div",{className:`dock-icon ${s}`,children:t})}function nr({items:t,className:s="",spring:n={mass:.1,stiffness:220,damping:18},magnification:a=52,distance:o=120,panelHeight:i=44,baseItemSize:l=36}){const c=Nt(1/0),d=Ue(),u=_t();return e.jsx("div",{className:"dock-outer",children:e.jsx(dt.div,{onMouseMove:m=>c.set(m.clientX),onMouseLeave:()=>c.set(1/0),className:`dock-panel ${s}`,style:{height:i},role:"toolbar","aria-label":"Application dock",children:t.map((m,b)=>{const v=d.pathname===m.to||m.to!=="/"&&d.pathname.startsWith(m.to)||m.to==="/"&&d.pathname==="/dashboard";return e.jsxs(tr,{onClick:()=>{m.onClick?.(),m.to&&u(m.to)},className:`${m.className||""} ${v?"active":""}`,mouseX:c,spring:n,distance:o,magnification:a,baseItemSize:l,label:m.label,children:[e.jsx(sr,{children:m.icon}),e.jsx(rr,{children:m.label})]},m.to||b)})})})}function P({path:t,size:s=24,viewBox:n="0 0 24 24",fill:a="none",stroke:o="currentColor",strokeWidth:i=1.8}){return e.jsx("svg",{width:s,height:s,viewBox:n,fill:a,stroke:o,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const Xe={home:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(P,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(P,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(P,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(P,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(P,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},ar=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function vt(t){return t?.firstName||t?.name||t?.email||"Account"}function zt(){const{user:t,isAdmin:s,logout:n}=ut(),a=_t(),o=Ue(),[i,l]=h.useState(!1),[c,d]=h.useState(!1),[u,m]=h.useState(!1),b=h.useRef(null),v=De.useMemo(()=>{const x=[...ar];return s&&x.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),x},[s]),L=De.useMemo(()=>v.map(x=>({label:x.label,to:x.to,icon:Xe[x.icon],className:x.cta?"dock-item-cta":""})),[v]);h.useEffect(()=>{const x=()=>{b.current||(b.current=window.requestAnimationFrame(()=>{l(window.scrollY>12),b.current=null}))};return x(),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("scroll",x),b.current&&window.cancelAnimationFrame(b.current)}},[]),h.useEffect(()=>{d(!1),m(!1)},[o.pathname]);const ye=()=>{n(),a("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${i?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(S,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Festival home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:Te("/assets/ozilla/logo.png"),alt:"Ozilla Festival",onError:x=>{x.currentTarget.src=Te("/assets/company-logo.jpeg")}})}),e.jsxs("div",{className:"dock-site-brand-text",children:[e.jsx("strong",{children:"OZILLA"}),e.jsx("small",{children:"FESTIVAL '26"})]})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(nr,{items:L,className:"dock-nav",magnification:50,distance:130,panelHeight:58,baseItemSize:38,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>m(x=>!x),"aria-expanded":u,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(vt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:vt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(S,{to:"/account",children:"Account"}),e.jsx(S,{to:"/tickets/my-tickets",children:"My Tickets"}),s&&e.jsx(S,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:ye,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(S,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${c?"open":""}`,"aria-label":c?"Close menu":"Open menu","aria-expanded":c,onClick:()=>d(x=>!x),children:c?Xe.close:Xe.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${c?"open":""}`,onClick:()=>d(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${c?"open":""}`,onClick:x=>x.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>d(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:v.map(x=>e.jsxs(Ct,{to:x.to,className:x.cta?"dock-mobile-link-cta":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:Xe[x.icon]}),e.jsx("span",{children:x.label}),x.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},x.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{ye(),d(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(S,{to:"/login",onClick:()=>d(!1),children:"Login"}),e.jsx(S,{to:"/register",onClick:()=>d(!1),children:"Sign Up"})]})})]})})]})}const or=[{label:"Headline Artists",href:"/#celebrities",isMain:!0},{label:"VIP & Ticket Passes",href:"/tickets",isMain:!0},{label:"The Festival Vibe",href:"/#about",isMain:!0},{label:"World-Class Facilities",href:"/#facilities",isMain:!0},{label:"Milestones & History",href:"/#history",isSecondary:!0},{label:"Hotel & Travel Partners",href:"/hotels",isSecondary:!0}],ir=[{label:"My Digital Passes",href:"/tickets/my-tickets",isMain:!0},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW",isMain:!0},{label:"Sponsorship Inquiries",href:"/#sponsorship",isMain:!0},{label:"Festival Dining Hub",href:"/#restaurants",isSecondary:!0},{label:"Privacy Policy",href:"/privacy",isSecondary:!0},{label:"Terms & Conditions",href:"/terms",isSecondary:!0}];function St(){return e.jsxs("footer",{className:"oz-footer",children:[e.jsx("div",{className:"oz-footer-glow-line"}),e.jsxs("div",{className:"oz-footer-container",children:[e.jsxs("div",{className:"oz-footer-grid",children:[e.jsxs("div",{className:"oz-footer-col oz-brand-col",children:[e.jsxs(S,{to:"/",className:"oz-brand-link",children:[e.jsx("img",{src:Te("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"oz-brand-logo",onError:t=>{t.currentTarget.src=Te("/assets/logo.jpeg")}}),e.jsxs("div",{children:[e.jsx("strong",{children:"OZILLA FESTIVAL"}),e.jsx("span",{children:"PRISM ENTERTAINMENT · 2026"})]})]}),e.jsx("p",{className:"oz-brand-text",children:"Pakistan's premier live music and cultural festival in Lahore. 4 electrified stages, 20+ celebrity performers, night food street, and instant verified mobile passes."}),e.jsx("div",{className:"oz-social-single",children:e.jsxs("a",{href:"https://www.instagram.com/ozillafestival",target:"_blank",rel:"noopener noreferrer",className:"oz-insta-badge",children:[e.jsx("svg",{className:"oz-insta-svg",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),e.jsx("span",{children:"Follow @ozillafestival"})]})})]}),e.jsxs("div",{className:"oz-footer-col",children:[e.jsx("h4",{children:"Festival Guide"}),e.jsx("ul",{className:"oz-footer-nav",children:or.map(t=>e.jsx("li",{className:t.isSecondary?"oz-footer-secondary":"",children:e.jsxs(S,{to:t.href,children:[e.jsx("span",{className:"oz-nav-arrow",children:"→"}),t.label]})},t.label))})]}),e.jsxs("div",{className:"oz-footer-col",children:[e.jsx("h4",{children:"Passes & Support"}),e.jsx("ul",{className:"oz-footer-nav",children:ir.map(t=>e.jsx("li",{className:t.isSecondary?"oz-footer-secondary":"",children:e.jsxs(S,{to:t.href,children:[e.jsx("span",{className:"oz-nav-arrow",children:"→"}),t.label]})},t.label))})]}),e.jsxs("div",{className:"oz-footer-col oz-event-col",children:[e.jsx("h4",{children:"Festival Venue"}),e.jsxs("div",{className:"oz-event-info",children:[e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"FESTIVAL DATE"}),e.jsx("strong",{children:"November 1, 2026"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"LOCATION"}),e.jsx("strong",{children:"Lahore, Pakistan"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"OFFICIAL INQUIRIES"}),e.jsx("strong",{children:"ozillafestival@gmail.com"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"TICKET PASSES"}),e.jsx("strong",{className:"oz-text-glow",children:"Instant Dynamic QR Mobile Passes"})]})]})]})]}),e.jsxs("div",{className:"oz-footer-status-bar",children:[e.jsxs("div",{className:"oz-live-indicator",children:[e.jsx("span",{className:"oz-live-dot"}),e.jsx("span",{children:"OZILLA 2026 ADMISSION PORTAL ACTIVE · LAHORE"})]}),e.jsx(S,{to:"/tickets",className:"oz-footer-cta-link",children:"Get Your Festival Passes →"})]}),e.jsxs("div",{className:"oz-footer-bottom",children:[e.jsx("p",{children:"© 2026 Ozilla Festival & Prism Entertainment. All rights reserved."}),e.jsxs("div",{className:"oz-footer-bottom-links",children:[e.jsx(S,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(S,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(S,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]})]})]}),e.jsx("style",{children:`
        .oz-footer {
          background: #080504 !important;
          color: #ffffff;
          padding: 4.5rem 0 2.2rem;
          position: relative;
          z-index: 10;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
        }

        .oz-footer-glow-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 90, 31, 0.4), #ffbd59, rgba(236, 72, 153, 0.4), transparent);
          box-shadow: 0 0 15px rgba(255, 189, 89, 0.5);
        }

        .oz-footer-container {
          width: min(1240px, calc(100% - 3rem));
          margin: 0 auto;
        }

        .oz-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.8rem;
          padding-bottom: 2.5rem;
        }

        .oz-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.1rem;
        }

        .oz-brand-logo {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255, 189, 89, 0.4);
          box-shadow: 0 0 15px rgba(255, 90, 31, 0.25);
        }

        .oz-brand-link strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-brand-link span {
          display: block;
          font-size: 0.7rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .oz-brand-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.65;
          margin-bottom: 1.4rem;
          max-width: 320px;
        }

        .oz-social-single {
          display: flex;
          align-items: center;
        }

        .oz-insta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 700;
          transition: all 250ms ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .oz-insta-svg {
          width: 18px;
          height: 18px;
          color: #ff5a1f;
          transition: transform 250ms ease, color 250ms ease;
        }

        .oz-insta-badge:hover {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(255, 90, 31, 0.2));
          border-color: rgba(255, 189, 89, 0.6);
          color: #ffbd59;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 90, 31, 0.25);
        }

        .oz-insta-badge:hover .oz-insta-svg {
          transform: scale(1.15) rotate(5deg);
          color: #ffbd59;
        }

        .oz-footer-col h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.2rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-footer-nav a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 180ms ease;
        }

        .oz-nav-arrow {
          font-size: 0.75rem;
          color: #ff5a1f;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 180ms ease;
        }

        .oz-footer-nav a:hover {
          color: #ffbd59;
          transform: translateX(4px);
        }

        .oz-footer-nav a:hover .oz-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .oz-event-info {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .oz-info-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.65rem 0.9rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
        }

        .oz-info-label {
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .oz-info-box strong {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
        }

        .oz-text-glow {
          color: #ff8a3d !important;
        }

        .oz-footer-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.4rem;
          margin: 1.5rem 0 2rem;
          background: rgba(255, 90, 31, 0.08);
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 16px;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-live-indicator {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.05em;
        }

        .oz-live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: livePulse 1.8s ease-in-out infinite;
        }

        @keyframes livePulse {
          0% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.6; transform: scale(0.9); }
        }

        .oz-footer-cta-link {
          font-size: 0.84rem;
          font-weight: 800;
          color: #ffbd59;
          text-decoration: none;
          transition: transform 180ms ease, color 180ms ease;
        }

        .oz-footer-cta-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .oz-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-footer-bottom-links a {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .oz-footer-bottom-links a:hover {
          color: #ffbd59;
        }

        @media (max-width: 992px) {
          .oz-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .oz-footer-nav li.oz-footer-secondary {
            display: none !important;
          }
          .oz-footer-grid {
            grid-template-columns: 1fr;
            gap: 1.6rem;
          }
          .oz-footer-nav {
            gap: 0.55rem;
          }
          .oz-footer-status-bar {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .oz-footer-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `})]})}function Q({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(zt,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(Be,{})}),e.jsx(St,{})]})}function ot({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(zt,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(Be,{})})}),e.jsx(St,{})]})}function cr(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}const lr=h.lazy(()=>O(()=>import("./LoginPage-DB9WVH8B.js"),__vite__mapDeps([0,1,2,3,4]))),dr=h.lazy(()=>O(()=>import("./RegisterPage-6kEQKGE5.js"),__vite__mapDeps([5,1,2,3,4]))),ur=h.lazy(()=>O(()=>import("./GoogleAuthCallbackPage-7Epelufz.js"),__vite__mapDeps([6,1,2,4]))),hr=h.lazy(()=>O(()=>import("./DashboardPage-BUAxq5MS.js"),__vite__mapDeps([7,1,2,8,4]))),mr=h.lazy(()=>O(()=>import("./UserDashboardPage-BcqpSGoG.js"),__vite__mapDeps([9,1,2,10,11,12,13,4]))),fr=h.lazy(()=>O(()=>import("./TicketPortalPage-XeHk4DU1.js"),__vite__mapDeps([14,1,2,10,11,15,4]))),pr=h.lazy(()=>O(()=>import("./MyTicketsPage-BsfrZwJe.js"),__vite__mapDeps([16,1,2,10,11,17,13,4]))),xr=h.lazy(()=>O(()=>import("./TicketViewPage-C5hQ2zNM.js"),__vite__mapDeps([18,1,2,10,11,17,13,4,15]))),gr=h.lazy(()=>O(()=>import("./TicketVerificationPage-EPQH5jvZ.js"),__vite__mapDeps([19,1,2,11,15,4]))),br=h.lazy(()=>O(()=>import("./AdminDashboardPage-RdqCfoA0.js"),__vite__mapDeps([20,1,2,12,15,4]))),vr=h.lazy(()=>O(()=>import("./AdminTicketReviewPage-CGYZYgch.js"),__vite__mapDeps([21,1,2,11,15,12,4]))),jr=h.lazy(()=>O(()=>import("./HotelsPage-DWbXD4AJ.js"),__vite__mapDeps([22,1,2,8,4]))),jt=h.lazy(()=>O(()=>import("./FestivalSchedulePage-C-fwl41C.js"),__vite__mapDeps([23,1,2]))),yt=h.lazy(()=>O(()=>import("./LegalPage-0v422c6k.js"),__vite__mapDeps([24,1,2]))),yr=h.lazy(()=>O(()=>import("./NotFound-DvQu_5Ky.js"),__vite__mapDeps([25,1,2])));function Ar(){return e.jsx(h.Suspense,{fallback:e.jsx(cr,{}),children:e.jsxs(Dt,{children:[e.jsxs(g,{element:e.jsx(Jt,{}),children:[e.jsx(g,{path:"/login",element:e.jsx(at,{children:e.jsx(lr,{})})}),e.jsx(g,{path:"/register",element:e.jsx(at,{children:e.jsx(dr,{})})}),e.jsx(g,{path:"/auth/google/callback",element:e.jsx(at,{children:e.jsx(ur,{})})})]}),e.jsx(g,{path:"/",element:e.jsx(Q,{children:e.jsx(hr,{})})}),e.jsx(g,{path:"/dashboard",element:e.jsx(z,{to:"/",replace:!0})}),e.jsx(g,{path:"/about",element:e.jsx(z,{to:"/#about",replace:!0})}),e.jsx(g,{path:"/collaboration",element:e.jsx(z,{to:"/#sponsorship",replace:!0})}),e.jsx(g,{path:"/prismfest",element:e.jsx(z,{to:"/#home",replace:!0})}),e.jsx(g,{path:"/prismfest/celebrities",element:e.jsx(z,{to:"/#celebrities",replace:!0})}),e.jsx(g,{path:"/prismfest/events",element:e.jsx(z,{to:"/#events",replace:!0})}),e.jsx(g,{path:"/prismfest/future",element:e.jsx(z,{to:"/#future-events",replace:!0})}),e.jsx(g,{path:"/history",element:e.jsx(z,{to:"/#history",replace:!0})}),e.jsx(g,{path:"/events",element:e.jsx(z,{to:"/#events",replace:!0})}),e.jsx(g,{path:"/sponsorship",element:e.jsx(z,{to:"/#sponsorship",replace:!0})}),e.jsx(g,{path:"/contact",element:e.jsx(z,{to:"/#contact",replace:!0})}),e.jsx(g,{path:"/facilities",element:e.jsx(z,{to:"/#facilities",replace:!0})}),e.jsx(g,{path:"/hotels",element:e.jsx(Q,{children:e.jsx(jr,{})})}),e.jsx(g,{path:"/schedule",element:e.jsx(Q,{children:e.jsx(jt,{})})}),e.jsx(g,{path:"/lineup",element:e.jsx(Q,{children:e.jsx(jt,{})})}),e.jsx(g,{path:"/restaurants",element:e.jsx(z,{to:"/#restaurants",replace:!0})}),e.jsx(g,{path:"/discounts",element:e.jsx(z,{to:"/#discounts",replace:!0})}),e.jsx(g,{path:"/partner",element:e.jsx(z,{to:"/#about",replace:!0})}),e.jsx(g,{path:"/privacy",element:e.jsx(Q,{children:e.jsx(yt,{type:"privacy"})})}),e.jsx(g,{path:"/terms",element:e.jsx(Q,{children:e.jsx(yt,{type:"terms"})})}),e.jsx(g,{path:"/verification/:ticketId",element:e.jsx(Q,{children:e.jsx(gr,{})})}),e.jsx(g,{path:"/tickets",element:e.jsx(ot,{children:e.jsx(fr,{})})}),e.jsxs(g,{element:e.jsx(Kt,{}),children:[e.jsx(g,{path:"/account",element:e.jsx(Q,{children:e.jsx(mr,{})})}),e.jsx(g,{path:"/admin",element:e.jsx(z,{to:"/admin/dashboard",replace:!0})}),e.jsx(g,{path:"/admin/dashboard",element:e.jsx(Q,{children:e.jsx(br,{})})}),e.jsx(g,{path:"/tickets/my-tickets",element:e.jsx(ot,{children:e.jsx(pr,{})})}),e.jsx(g,{path:"/tickets/view/:ticketId",element:e.jsx(ot,{children:e.jsx(xr,{})})}),e.jsx(g,{path:"/admin/tickets",element:e.jsx(Q,{children:e.jsx(vr,{})})})]}),e.jsx(g,{path:"*",element:e.jsx(yr,{})})]})})}const wr=2,ve=8e3,je=20,Er=`
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
`,Nr=`
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
`,_r=`
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
`,kr=`
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
`;function At(t,s,n){const a=t.createShader(s);return a?(t.shaderSource(a,n),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("ParticleDrift shader:",t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function wt(t,s,n){const a=At(t,t.VERTEX_SHADER,s),o=At(t,t.FRAGMENT_SHADER,n);if(!a||!o)return null;const i=t.createProgram();return i?(t.attachShader(i,a),t.attachShader(i,o),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(console.error("ParticleDrift link:",t.getProgramInfoLog(i)),null)):null}function Et(t,s){if(!t)return s;const n=String(t).trim();if(n.charAt(0)==="#"){let o=n.slice(1);if((o.length===3||o.length===4)&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),o.length>=6){const i=parseInt(o.slice(0,2),16),l=parseInt(o.slice(2,4),16),c=parseInt(o.slice(4,6),16);if(!isNaN(i)&&!isNaN(l)&&!isNaN(c))return[i/255,l/255,c/255]}return s}const a=n.match(/[\d.]+/g);return a&&a.length>=3?[Math.min(255,parseFloat(a[0]))/255,Math.min(255,parseFloat(a[1]))/255,Math.min(255,parseFloat(a[2]))/255]:s}function oe(t,s){return typeof t=="number"&&isFinite(t)?t:s}function _e(t,s,n){return t<s?s:t>n?n:t}function Rr(t){let s=t>>>0;return function(){s+=1831565813;let n=s;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const it=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function zr({style:t,background:s="transparent",baseColor:n="#F84400",accentColor:a="#ECECEC",density:o=235,dotSize:i=14,speed:l=100,direction:c=0,hover:d=200,linkDistance:u=202,linkThickness:m=2.5,width:b,height:v,isFixed:L=!0}){const ye=h.useRef(null),x=h.useRef(null),Y=h.useRef({w:0,h:0});Y.current={w:oe(b,0),h:oe(v,0)};const w=h.useRef({x:-1e4,y:-1e4}),Ae=h.useRef({});Ae.current={base:n,accent:a,density:Math.round(_e(oe(o,90),10,400)),dotSize:_e(oe(i,5),1,24),speed:_e(oe(l,50),0,100)/50,direction:_e(oe(c,0),0,360),hover:_e(oe(d,100),0,200)/100,linkDistance:_e(oe(u,120),0,400),linkThickness:_e(oe(m,1),.5,8)},h.useEffect(()=>{const y=x.current;if(!y)return;const r=y.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!r){console.error("ParticleDrift: WebGL unavailable");return}const I=wt(r,Er,Nr),C=wt(r,_r,kr);if(!I||!C)return;const Re=new Map,B=(_,k)=>{const j=(_===I?"L:":"D:")+k;return Re.has(j)||Re.set(j,r.getUniformLocation(_,k)),Re.get(j)},ce=new Float32Array(ve*6*2),le=new Float32Array(ve*6*2),de=new Float32Array(ve*6*2),ue=new Float32Array(ve*6*3);for(let _=0;_<ve;_++)for(let k=0;k<6;k++){const j=(_*6+k)*2;de[j]=it[k][0],de[j+1]=it[k][1]}const D=r.createBuffer(),te=r.createBuffer(),he=r.createBuffer(),me=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,D),r.bufferData(r.ARRAY_BUFFER,ce.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,te),r.bufferData(r.ARRAY_BUFFER,le.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,he),r.bufferData(r.ARRAY_BUFFER,de,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,me),r.bufferData(r.ARRAY_BUFFER,ue.byteLength,r.DYNAMIC_DRAW);const re=Rr(20260824);let se=0,E=new Float32Array(0),N=new Float32Array(0),we=new Float32Array(0),$=new Float32Array(0),fe=new Float32Array(0);const M=r.createBuffer(),p=r.createBuffer(),pe=(_,k,j)=>{se=_,E=new Float32Array(_),N=new Float32Array(_),we=new Float32Array(_),$=new Float32Array(_*2),fe=new Float32Array(_);for(let J=0;J<_;J++)E[J]=re()*k,N[J]=re()*j,we[J]=(re()*.4+.1)*60;r.bindBuffer(r.ARRAY_BUFFER,M),r.bufferData(r.ARRAY_BUFFER,$.byteLength,r.DYNAMIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,p),r.bufferData(r.ARRAY_BUFFER,fe.byteLength,r.DYNAMIC_DRAW)};let K=0,Z=performance.now(),xe=-1,ne=0,W=0;const Ee=_=>{const k=Math.min(.05,(_-Z)/1e3);Z=_;const j=Ae.current,J=j.speed,qe=Math.min(window.devicePixelRatio||1,wr),F=Y.current.w||y.clientWidth||window.innerWidth||1200,V=Y.current.h||y.clientHeight||window.innerHeight||800,Ke=Math.max(1,Math.round(F*qe)),Ze=Math.max(1,Math.round(V*qe));(y.width!==Ke||y.height!==Ze)&&(y.width=Ke,y.height=Ze),r.viewport(0,0,Ke,Ze);const Je=F<768,Lt=F>=768&&F<1024;let Oe=j.density,Qe=j.linkDistance,et=j.dotSize;if(Je?(Oe=Math.max(60,Math.min(Math.round(j.density*.38),90)),Qe=Math.min(j.linkDistance,135),et=Math.min(j.dotSize,8.5)):Lt&&(Oe=Math.max(90,Math.min(Math.round(j.density*.6),145)),Qe=Math.min(j.linkDistance,165),et=Math.min(j.dotSize,11)),Oe!==xe&&(pe(Oe,F,V),xe=Oe),F!==ne||V!==W){const f=F/Math.max(ne||F,1),A=V/Math.max(W||V,1);for(let R=0;R<se;R++)E[R]*=f,N[R]*=A;ne=F,W=V}const Ve=w.current,ht=j.hover,tt=(Je?100:180)*(ht>0?1:0),Ye=Qe,mt=Je?Math.min(j.linkThickness,1.6):j.linkThickness,ft=j.direction*Math.PI/180,Pt=Math.sin(ft),Mt=Math.cos(ft);let ge=0;const pt=(f,A,R,H,G,Ne,$e,Ft)=>{if(!(ge>=ve)){for(let Ie=0;Ie<6;Ie++){const We=(ge*6+Ie)*2,rt=(ge*6+Ie)*3;ce[We]=f,ce[We+1]=A,le[We]=R,le[We+1]=H,ue[rt]=it[Ie][0]===0?G:Ne,ue[rt+1]=$e,ue[rt+2]=Ft}ge++}};for(let f=0;f<se;f++){E[f]+=we[f]*Pt*k*J,N[f]+=we[f]*Mt*k*J,E[f]<-je?(E[f]=F+je,N[f]=re()*V):E[f]>F+je&&(E[f]=-je,N[f]=re()*V),N[f]<-je?(N[f]=V+je,E[f]=re()*F):N[f]>V+je&&(N[f]=-je,E[f]=re()*F);const A=Ve.x-E[f],R=Ve.y-N[f],H=Math.sqrt(A*A+R*R),G=tt>0&&H<tt?1:0;if(G===1){const Ne=.5*(1-H/tt)*ht;pt(E[f],N[f],Ve.x,Ve.y,Ne,Ne,1,mt)}$[f*2]=E[f],$[f*2+1]=N[f],fe[f]=G}if(Ye>0){const f=Ye*Ye;for(let A=0;A<se&&ge<ve;A++)for(let R=A+1;R<se&&ge<ve;R++){const H=E[A]-E[R],G=N[A]-N[R],Ne=H*H+G*G;if(Ne>=f)continue;const $e=.15*(1-Math.sqrt(Ne)/Ye);pt(E[A],N[A],E[R],N[R],$e,$e,0,mt)}}r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.disable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA);const Le=Et(j.base,[.973,.267,0]),Pe=Et(j.accent,[.925,.925,.925]);if(ge>0){r.useProgram(I);const f=ge*6;r.bindBuffer(r.ARRAY_BUFFER,D),r.bufferSubData(r.ARRAY_BUFFER,0,ce.subarray(0,f*2));const A=r.getAttribLocation(I,"a_p0");r.enableVertexAttribArray(A),r.vertexAttribPointer(A,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,te),r.bufferSubData(r.ARRAY_BUFFER,0,le.subarray(0,f*2));const R=r.getAttribLocation(I,"a_p1");r.enableVertexAttribArray(R),r.vertexAttribPointer(R,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,he);const H=r.getAttribLocation(I,"a_corner");r.enableVertexAttribArray(H),r.vertexAttribPointer(H,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,me),r.bufferSubData(r.ARRAY_BUFFER,0,ue.subarray(0,f*3));const G=r.getAttribLocation(I,"a_shade");r.enableVertexAttribArray(G),r.vertexAttribPointer(G,3,r.FLOAT,!1,0,0),r.uniform2f(B(I,"uSize"),F,V),r.uniform3f(B(I,"uBase"),Le[0],Le[1],Le[2]),r.uniform3f(B(I,"uAccent"),Pe[0],Pe[1],Pe[2]),r.drawArrays(r.TRIANGLES,0,f),r.disableVertexAttribArray(A),r.disableVertexAttribArray(R),r.disableVertexAttribArray(H),r.disableVertexAttribArray(G)}if(se>0){r.useProgram(C),r.bindBuffer(r.ARRAY_BUFFER,M),r.bufferSubData(r.ARRAY_BUFFER,0,$);const f=r.getAttribLocation(C,"a_pos");r.enableVertexAttribArray(f),r.vertexAttribPointer(f,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,p),r.bufferSubData(r.ARRAY_BUFFER,0,fe);const A=r.getAttribLocation(C,"a_lit");r.enableVertexAttribArray(A),r.vertexAttribPointer(A,1,r.FLOAT,!1,0,0),r.uniform2f(B(C,"uSize"),F,V),r.uniform1f(B(C,"uDpr"),qe),r.uniform1f(B(C,"uDot"),et),r.uniform1f(B(C,"uRestAlpha"),.4),r.uniform3f(B(C,"uBase"),Le[0],Le[1],Le[2]),r.uniform3f(B(C,"uAccent"),Pe[0],Pe[1],Pe[2]),r.drawArrays(r.POINTS,0,se),r.disableVertexAttribArray(f),r.disableVertexAttribArray(A)}K=requestAnimationFrame(Ee)},ze=_=>{const k=y.getBoundingClientRect();if(k.width<=0||k.height<=0)return;const j=Y.current.w||y.clientWidth||window.innerWidth||1200,J=Y.current.h||y.clientHeight||window.innerHeight||800;w.current.x=(_.clientX-k.left)/k.width*j,w.current.y=(_.clientY-k.top)/k.height*J},Se=()=>{w.current.x=-1e4,w.current.y=-1e4};return window.addEventListener("pointermove",ze,{passive:!0}),window.addEventListener("pointerleave",Se,{passive:!0}),K=requestAnimationFrame(Ee),()=>{cancelAnimationFrame(K),window.removeEventListener("pointermove",ze),window.removeEventListener("pointerleave",Se),r.deleteBuffer(D),r.deleteBuffer(te),r.deleteBuffer(he),r.deleteBuffer(me),r.deleteBuffer(M),r.deleteBuffer(p),r.deleteProgram(I),r.deleteProgram(C)}},[]);const q=L?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:s,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:s,isolation:"isolate",width:typeof b=="number"&&b>0?b:"100%",height:typeof v=="number"&&v>0?v:"100%",...t};return e.jsx("div",{ref:ye,style:q,"aria-hidden":"true",children:e.jsx("canvas",{ref:x,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function Sr(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(Ut,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(Gt,{children:[e.jsx(zr,{}),e.jsx(Ar,{})]})})}class Lr extends h.Component{constructor(s){super(s),this.state={error:null}}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,n){console.error("Application render failed:",s,n)}render(){return this.state.error?e.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}ct.createRoot(document.getElementById("root")).render(e.jsx(De.StrictMode,{children:e.jsx(Lr,{children:e.jsx($t,{clientId:"placeholder-client-id",children:e.jsx(Sr,{})})})}));export{cr as L,er as P,Ge as a,Te as b,U as c,Zt as g,ee as t,ut as u};
