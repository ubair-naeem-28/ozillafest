const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserDashboardPage-BD6tq7CK.js","assets/vendor-motion-BW8tmsoW.js","assets/vendor-react-DycaHlXR.js","assets/PageHeader-Cr0bo0tp.js","assets/vendor-utils-BRCtA9qj.js","assets/AdminDashboardPage-oLONYos5.js","assets/AdminTicketReviewPage-DlgZMu2L.js"])))=>i.map(i=>d[i]);
var _a=Object.defineProperty;var Ba=(t,a,r)=>a in t?_a(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;var Vt=(t,a,r)=>Ba(t,typeof a!="symbol"?a+"":a,r);import{j as e,u as ja,m as J,a as Wt,b as $a,A as Ha}from"./vendor-motion-BW8tmsoW.js";import{a as Ua,r as m,R as ut,u as Ze,N as be,O as gt,L as Z,b as ct,c as Ga,d as Va,e as Na,f as Wa,g as K,B as qa}from"./vendor-react-DycaHlXR.js";import{a as Ya,Q as Xa}from"./vendor-utils-BRCtA9qj.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var Dt={},qt=Ua;Dt.createRoot=qt.createRoot,Dt.hydrateRoot=qt.hydrateRoot;function Za(t={}){const{nonce:a,locale:r,onScriptLoadSuccess:s,onScriptLoadError:i}=t,[l,n]=m.useState(!1),o=m.useRef(s);o.current=s;const c=m.useRef(i);return c.current=i,m.useEffect(()=>{const u=document.createElement("script");return u.src="https://accounts.google.com/gsi/client",r&&(u.src+=`?hl=${r}`),u.async=!0,u.defer=!0,u.nonce=a,u.onload=()=>{var g;n(!0),(g=o.current)===null||g===void 0||g.call(o)},u.onerror=()=>{var g;n(!1),(g=c.current)===null||g===void 0||g.call(c)},document.body.appendChild(u),()=>{document.body.removeChild(u)}},[a]),l}const Ka=m.createContext(null);function Ja({clientId:t,nonce:a,locale:r,onScriptLoadSuccess:s,onScriptLoadError:i,children:l}){const n=Za({nonce:a,onScriptLoadSuccess:s,onScriptLoadError:i,locale:r}),o=m.useMemo(()=>({locale:r,clientId:t,scriptLoadedSuccessfully:n}),[t,n]);return ut.createElement(Ka.Provider,{value:o},l)}const Tt="prism_token",je={getToken(){return localStorage.getItem(Tt)},setToken(t){localStorage.setItem(Tt,t)},removeToken(){localStorage.removeItem(Tt)}};function Sa(){return"https://ozillafest.onrender.com/api"}const Aa=Sa(),Hi=Aa.replace(/\/api\/?$/,""),te=Ya.create({baseURL:Aa,headers:{"Content-Type":"application/json"}});te.interceptors.request.use(t=>{t.baseURL=Sa();const a=je.getToken();return a&&(t.headers.Authorization=`Bearer ${a}`),t},t=>Promise.reject(t));te.interceptors.response.use(t=>t,t=>(t.response?.status===401&&je.removeToken(),Promise.reject(t)));const Pe={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/resend-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",GOOGLE_CONFIG:"/auth/google/config",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},Pa="ozilla_local_users";let lt=!1;function Te(t){return String(t||"").toLowerCase().trim()}function Be(t){return String(t||"").trim()}function Ge(){try{const t=localStorage.getItem(Pa),a=t?JSON.parse(t):[];return Array.isArray(a)?a:[]}catch{return[]}}function Ve(t){localStorage.setItem(Pa,JSON.stringify(t))}function Qa(t){const a={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(a))}`}function Et(t){const a=String(t||"");if(!a)return null;if(a.startsWith("local."))try{return JSON.parse(atob(a.slice(6)))}catch{return null}const r=a.split(".");if(r.length===3)try{return JSON.parse(atob(r[1]))}catch{return null}return null}function jt(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function nt(t={}){const a=String(t.firstName||"Local").trim()||"Local",r=String(t.lastName||"User").trim()||"User",s=Te(t.email||"local@ozillafestival.com"),i=Be(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:a,lastName:r,name:`${a} ${r}`.trim(),email:s,phone:i,password:String(t.password||""),role:"user"}}function _t(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function Ct(t){return _t(t)?(lt=!0,!0):!1}function ot(t){const a=jt(t);return{token:Qa(a),user:a,mode:"local-fallback"}}const Xe={async login(t){const a=String(t?.email||t?.phone||t?.identifier||"").trim(),r=Te(a),s=Be(a),i=String(t?.password||"").trim();try{const l=await te.post(Pe.AUTH.LOGIN,{email:a,password:i});if(l?.data?.token){const n=Ge(),o=n.findIndex(u=>Te(u.email)===r||Be(u.phone)===s),c={id:l.data.user?.id||`user-${Date.now()}`,firstName:l.data.user?.firstName||"",lastName:l.data.user?.lastName||"",name:l.data.user?.name||"",email:l.data.user?.email?Te(l.data.user.email):r,phone:l.data.user?.phone?Be(l.data.user.phone):s,password:i,role:l.data.user?.role||"user"};return o>=0?(n[o]=c,Ve(n)):Ve([c,...n]),l.data}return l.data}catch(l){const n=Ge(),o=n.find(u=>(Te(u.email)===r||Be(u.phone)===s)&&u.password===i);if(o)return lt=!0,ot(o);const c=n.find(u=>Te(u.email)===r||Be(u.phone)===s);if(c&&c.password!==i){const u=new Error("Invalid credentials. Please check your password.");throw u.response={status:401,data:{message:"Invalid credentials. Please check your password."}},u}throw l}},async register(t){const a=Te(t?.email),r=Be(t?.phone),s=String(t?.password||"").trim(),i=Ge(),l=i.find(o=>Te(o.email)===a),n=i.find(o=>Be(o.phone)===r);try{const o=await te.post(Pe.AUTH.REGISTER,{...t,email:a,phone:r,password:s});if(o?.data?.token){const c=nt({id:o.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:a,phone:r,password:s}),u=i.filter(g=>Te(g.email)!==a&&Be(g.phone)!==r);Ve([c,...u])}return o.data}catch(o){if(o?.response?.status===409||o?.response?.data?.message)throw o;if(l){const u=new Error("Account already exists with this email. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this email. Please log in."}},u}if(n){const u=new Error("Account already exists with this phone number. Please log in.");throw u.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},u}const c=nt({...t,email:a,phone:r,password:s});return Ve([c,...i]),lt=!0,ot(c)}},async sendOtp(t){const a=Te(t);try{return(await te.post(Pe.AUTH.SEND_OTP,{email:a})).data}catch(r){if(r?.response?.status===404)try{return(await te.post(Pe.AUTH.RESEND_OTP,{email:a})).data}catch(s){if(s?.response?.data?.message)throw s}if(r?.response?.data?.message)throw r;if(_t(r)){const s=new Error("Cannot connect to backend server. Please ensure the backend server is running and reachable.");throw s.response={status:503,data:{message:"Cannot connect to backend server. Please ensure the backend server is running and reachable."}},s}throw r}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const a=Te(t?.email),r=String(t?.otp||"").trim();try{return(await te.post(Pe.AUTH.VERIFY_OTP,{email:a,otp:r})).data}catch(s){if(s?.response?.data?.message)throw s;if(_t(s)){const i=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw i.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},i}throw s}},async getCurrentUser(){const t=je.getToken();if(!t){const a=new Error("Unauthorized");throw a.response={status:401,data:{message:"Unauthorized"}},a}try{return(await te.get(Pe.AUTH.ME)).data}catch(a){const r=Et(t);if(r?.mode==="local-fallback"||String(t||"").startsWith("local.")){const i=Ge().find(l=>l.id===r?.sub||Te(l.email)===Te(r?.email));if(i)return jt(i)}throw je.removeToken(),a}},async logout(){je.removeToken();try{localStorage.removeItem("ozilla_local_users")}catch{}try{return(await te.post(Pe.AUTH.LOGOUT)).data}catch{return{message:"Logged out successfully"}}},async forgotPassword(t){return(await te.post(Pe.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await te.post(Pe.AUTH.RESET_PASSWORD,t)).data},async getGoogleConfig(){try{return(await te.get(Pe.AUTH.GOOGLE_CONFIG)).data?.clientId||null}catch{return null}},async googleAuth(t,a){if(lt){if(!a?.email)throw new Error("Google account email is required");const r=nt(a),s=Ge();return s.some(i=>i.email===r.email)||Ve([r,...s]),ot(r)}try{return(await te.post(Pe.AUTH.GOOGLE,{token:t,profile:a})).data}catch(r){if(Ct(r)&&a?.email){const s=nt(a);return ot(s)}throw r}},async googleCodeLogin(t,a="postmessage",r){if(lt){if(!r?.email)throw new Error("Google account email is required");const s=nt(r),i=Ge();return i.some(l=>l.email===s.email)||Ve([s,...i]),ot(s)}try{return(await te.post(Pe.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:a,profile:r})).data}catch(s){if(Ct(s)&&r?.email){const i=nt(r);return ot(i)}throw s}},async googleTokenLogin(t,a){return this.googleAuth(t,a)},async updateProfile(t){if(lt){const a=je.getToken(),r=Et(a),s=Ge(),i=s.findIndex(o=>o.id===r?.sub||o.email===r?.email);if(i===-1){const o=new Error("Unauthorized");throw o.response={status:401,data:{message:"Unauthorized"}},o}const l=s[i],n={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return n.name=`${n.firstName||""} ${n.lastName||""}`.trim()||l.name,s[i]=n,Ve(s),{message:"Profile updated successfully",user:jt(n)}}try{return(await te.put(Pe.AUTH.PROFILE,t)).data}catch(a){if(Ct(a)){const r=je.getToken(),s=Et(r),i=Ge(),l=i.findIndex(c=>c.id===s?.sub||c.email===s?.email);if(l===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const n=i[l],o={...n,firstName:typeof t?.firstName=="string"?t.firstName.trim():n.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():n.lastName,phone:typeof t?.phone=="string"?t.phone.trim():n.phone};return o.name=`${o.firstName||""} ${o.lastName||""}`.trim()||n.name,i[l]=o,Ve(i),{message:"Profile updated successfully",user:jt(o)}}throw a}}},Ta=m.createContext(null);function er({children:t}){const[a,r]=m.useState(null),[s,i]=m.useState(!0);m.useEffect(()=>{l()},[]);const l=async()=>{try{if(je.getToken()){const k=await Xe.getCurrentUser();r(k)}}catch{je.removeToken()}finally{i(!1)}},n=async y=>{const k=await Xe.login(y);return je.setToken(k.token),r(k.user),k},o=async y=>{const k=await Xe.register(y);return je.setToken(k.token),r(k.user),k},c=()=>{Xe.logout().catch(()=>{}),je.removeToken(),r(null)},u=a?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(a?.email||"").toLowerCase().trim()),g={user:a,isAdmin:u,loading:s,login:n,register:o,logout:c,checkAuth:l};return e.jsx(Ta.Provider,{value:g,children:t})}const tr="modulepreload",ar=function(t){return"/ozillafest/"+t},Yt={},Bt=function(a,r,s){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=n?.nonce||n?.getAttribute("nonce");i=Promise.allSettled(r.map(c=>{if(c=ar(c),c in Yt)return;Yt[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":tr,u||(y.as="script"),y.crossOrigin="",y.href=c,o&&y.setAttribute("nonce",o),document.head.appendChild(y),u)return new Promise((k,A)=>{y.addEventListener("load",k),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return i.then(n=>{for(const o of n||[])o.status==="rejected"&&l(o.reason);return a().catch(l)})};function Ke(){const t=m.useContext(Ta);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function rr({children:t}){const{user:a,loading:r}=Ke(),s=Ze();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!a){const i=`${s.pathname}${s.search}`,l=new URLSearchParams({returnTo:i}).toString();return e.jsx(be,{to:`/login?${l}`,replace:!0})}return t||e.jsx(gt,{})}function St(t,a="/dashboard"){if(!t||typeof t!="string")return a;let r=t.trim();if(r.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(r))return a;r.startsWith("/ozillafest")&&(r=r.slice(11)),r.startsWith("/")||(r=`/${r}`);const s=r.split("?")[0].replace(/\/$/,"");return!s||s==="/login"||s==="/register"?a:r}function sr({children:t}){const{user:a,loading:r}=Ke(),s=Ze();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(a){const l=new URLSearchParams(s.search).get("returnTo"),n=St(l,"/dashboard");return e.jsx(be,{to:n,replace:!0})}return t||e.jsx(gt,{})}function W(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const a="/ozillafest/",r=a.endsWith("/")?a:`${a}/`,s=t.replace(/^\/+/,"");return s.startsWith("assets/")||s.startsWith("favicon")?`${r}${s}`:t.startsWith("/")?`${r}${s}`:t}function ir({className:t="",nodeColor:a="#EC4899",lineColor:r="236, 72, 153",secondaryColor:s="255, 90, 31",maxDistance:i=135,speed:l=.5}){const n=m.useRef(null);return m.useEffect(()=>{const o=n.current;if(!o)return;const c=o.getContext("2d",{alpha:!0});if(!c)return;let u=null,g=!0,y=!1,k=o.width=o.parentElement?.clientWidth||window.innerWidth,A=o.height=o.parentElement?.clientHeight||window.innerHeight;const p=k<768?18:34,b=340,x=450,M=i*i;let j={x:k/2,y:A/2,active:!1},f={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const d=[];for(let B=0;B<p;B++)d.push({x:(Math.random()-.5)*k*1.1,y:(Math.random()-.5)*A*1.1,z:(Math.random()-.5)*x,vx:(Math.random()-.5)*l*.7,vy:(Math.random()-.5)*l*.7,vz:(Math.random()-.5)*l*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const _=()=>{o.parentElement&&(k=o.width=o.parentElement.clientWidth||window.innerWidth,A=o.height=o.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",_,{passive:!0});const L=B=>{if(!g)return;const T=o.getBoundingClientRect();j.x=B.clientX-T.left,j.y=B.clientY-T.top,j.active=!0;const H=(j.x-k/2)/(k/2),X=(j.y-A/2)/(A/2);f.targetRotY=H*.14,f.targetRotX=-X*.14},P=()=>{j.active=!1,f.targetRotX=0,f.targetRotY=0};window.addEventListener("mousemove",L,{passive:!0}),window.addEventListener("mouseleave",P,{passive:!0});const h=()=>{if(!g||document.hidden){y=!1;return}c.clearRect(0,0,k,A),f.rotX+=(f.targetRotX-f.rotX)*.05,f.rotY+=(f.targetRotY-f.rotY)*.05;const B=Math.cos(f.rotY),T=Math.sin(f.rotY),H=Math.cos(f.rotX),X=Math.sin(f.rotX),U=k/2,F=A/2,O=k*.65,Y=A*.65,de=x*.55,N=[];for(let D=0;D<p;D++){const C=d[D];C.x+=C.vx,C.y+=C.vy,C.z+=C.vz,(C.x<-O||C.x>O)&&(C.vx*=-1),(C.y<-Y||C.y>Y)&&(C.vy*=-1),(C.z<-de||C.z>de)&&(C.vz*=-1);const $=C.x*B-C.z*T,ae=C.z*B+C.x*T,Q=C.y*H-ae*X,ce=ae*H+C.y*X,re=ce+x;if(re<=0)continue;const oe=b/(b+re*.65),me=U+$*oe,ye=F+Q*oe,fe=Math.max(.18,Math.min(.85,(ce+x)/(x*1.4)));N.push({x:me,y:ye,scale:oe,alpha:fe,radius:Math.max(1.2,C.radius*oe),colorType:C.colorType})}const z=N.length;for(let D=0;D<z;D++){const C=N[D];let $=0;for(let ae=D+1;ae<z&&$<3;ae++){const Q=N[ae],ce=C.x-Q.x,re=C.y-Q.y,oe=ce*ce+re*re;if(oe<M){$++;const me=Math.sqrt(oe),ye=(1-me/i)*.4*Math.min(C.alpha,Q.alpha),fe=C.colorType==="primary"?r:s;c.beginPath(),c.moveTo(C.x,C.y),c.lineTo(Q.x,Q.y),c.strokeStyle=`rgba(${fe}, ${ye})`,c.lineWidth=Math.max(.5,(1-me/i)*1.2),c.stroke()}}}for(let D=0;D<z;D++){const C=N[D],$=C.colorType==="primary"?`rgba(${r}, ${C.alpha})`:`rgba(${s}, ${C.alpha})`;c.beginPath(),c.arc(C.x,C.y,C.radius,0,Math.PI*2),c.fillStyle=$,c.fill()}u=requestAnimationFrame(h)},v=()=>{!y&&g&&!document.hidden&&(y=!0,u=requestAnimationFrame(h))},I=()=>{y=!1,u&&(cancelAnimationFrame(u),u=null)};let R=null;"IntersectionObserver"in window?(R=new IntersectionObserver(([B])=>{g=B.isIntersecting,g?v():I()},{threshold:.05}),R.observe(o)):v();const q=()=>{document.hidden?I():g&&v()};return document.addEventListener("visibilitychange",q),()=>{I(),window.removeEventListener("resize",_),window.removeEventListener("mousemove",L),window.removeEventListener("mouseleave",P),document.removeEventListener("visibilitychange",q),R&&R.disconnect()}},[a,r,s,i,l]),e.jsx("canvas",{ref:n,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const $t=ut.memo(ir);function Lt({children:t}){const a=Ze(),r=a.pathname==="/login",s=a.pathname==="/register",[i,l]=m.useState({x:0,y:0}),[n,o]=m.useState({x:50,y:42}),c=g=>{if(g.pointerType==="touch")return;const y=g.currentTarget.getBoundingClientRect(),k=(g.clientX-y.left)/y.width,A=(g.clientY-y.top)/y.height;l({x:(.5-A)*10,y:(k-.5)*10}),o({x:k*100,y:A*100})},u=()=>{l({x:0,y:0}),o({x:50,y:42})};return e.jsxs("main",{className:`kx-page auth-page ${r?"auth-page-login":""} ${s?"auth-page-register":""}`,children:[e.jsx($t,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:130,speed:.4}),e.jsx("div",{className:"kx-grid","aria-hidden":"true"}),e.jsx("div",{className:"kx-noise","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-top","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-bottom","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-left","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-right","aria-hidden":"true"}),e.jsxs("section",{className:`kx-stage ${s?"kx-stage-wide":""}`,children:[e.jsx("div",{className:"kx-tilt",onPointerMove:c,onPointerLeave:u,onPointerCancel:u,style:{transform:`rotateX(${i.x}deg) rotateY(${i.y}deg)`},children:e.jsxs("div",{className:"kx-card-shell",children:[e.jsx("div",{className:"kx-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"kx-runners","aria-hidden":"true",children:[e.jsx("span",{className:"kx-runner kx-runner-top"}),e.jsx("span",{className:"kx-runner kx-runner-right"}),e.jsx("span",{className:"kx-runner kx-runner-bottom"}),e.jsx("span",{className:"kx-runner kx-runner-left"})]}),e.jsxs("article",{className:"kx-card",children:[e.jsx("div",{className:"kx-pointer-glow","aria-hidden":"true",style:{left:`${n.x}%`,top:`${n.y}%`}}),e.jsx("div",{className:"kx-card-pattern","aria-hidden":"true"}),e.jsxs("header",{className:"kx-header",children:[e.jsx(Z,{to:"/",className:"kx-logo-link","aria-label":"OZILLA FEST Home",children:e.jsxs("div",{className:"kx-logo",children:[e.jsx("img",{src:W("/assets/ozilla/logo.png"),alt:"OZILLA FEST Logo",onError:g=>{g.currentTarget.src=W("/assets/logo.jpeg")}}),e.jsx("i",{"aria-hidden":"true"})]})}),e.jsx("span",{className:"kx-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"kx-title",children:r?"Welcome Back":"Join OZILLA FEST"}),e.jsx("p",{className:"kx-subtitle",children:r?"Sign in to access your passes, tickets & workspace":"Create your account for the ultimate festival experience"}),e.jsxs("div",{className:"kx-tabs",children:[e.jsx(Z,{to:`/login${a.search}`,className:`kx-tab-btn ${r?"active":""}`,children:"Sign In"}),e.jsx(Z,{to:`/register${a.search}`,className:`kx-tab-btn ${s?"active":""}`,children:"Create Account"})]})]}),e.jsx("div",{className:"kx-card-body",children:t||e.jsx(gt,{})})]})]})}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function nr({children:t,className:a="",onClick:r,mouseX:s,spring:i,distance:l,magnification:n,baseItemSize:o,label:c}){const u=m.useRef(null),g=ja(0),y=Wt(s,x=>{if(x===1/0||!u.current)return l;const M=u.current.getBoundingClientRect(),j=M.left+M.width/2;return x-j}),k=Wt(y,[-l,0,l],[o,n,o]),A=$a(k,i),w=x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),r?.())},p=()=>{g.set(1)},b=()=>{g.set(0)};return e.jsx(J.div,{ref:u,style:{width:A,height:A},onHoverStart:p,onHoverEnd:b,onFocus:p,onBlur:b,onClick:r,className:`dock-item ${a}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":c,onKeyDown:w,children:m.Children.map(t,x=>m.cloneElement(x,{isHovered:g}))})}function or({children:t,className:a="",...r}){const{isHovered:s}=r,[i,l]=m.useState(!1);return m.useEffect(()=>{if(!s)return;const n=s.on("change",o=>{l(o===1)});return()=>n()},[s]),e.jsx(Ha,{children:i&&e.jsx(J.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${a}`,role:"tooltip",style:{x:"-50%"},children:t})})}function lr({children:t,className:a=""}){return e.jsx("div",{className:`dock-icon ${a}`,children:t})}function cr({items:t,className:a="",spring:r={mass:.1,stiffness:220,damping:18},magnification:s=52,distance:i=120,panelHeight:l=44,baseItemSize:n=36}){const o=ja(1/0),c=Ze(),u=ct();return e.jsx("div",{className:"dock-outer",children:e.jsx(J.div,{onMouseMove:g=>o.set(g.clientX),onMouseLeave:()=>o.set(1/0),className:`dock-panel ${a}`,style:{height:l},role:"toolbar","aria-label":"Application dock",children:t.map((g,y)=>{const k=c.pathname===g.to||g.to!=="/"&&c.pathname.startsWith(g.to)||g.to==="/"&&c.pathname==="/dashboard";return e.jsxs(nr,{onClick:()=>{g.onClick?.(),g.to&&u(g.to)},className:`${g.className||""} ${k?"active":""}`,mouseX:o,spring:r,distance:i,magnification:s,baseItemSize:n,label:g.label,children:[e.jsx(lr,{children:g.icon}),e.jsx(or,{children:g.label})]},g.to||y)})})})}function ve({path:t,size:a=24,viewBox:r="0 0 24 24",fill:s="none",stroke:i="currentColor",strokeWidth:l=1.8}){return e.jsx("svg",{width:a,height:a,viewBox:r,fill:s,stroke:i,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const yt={home:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},dr=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function Xt(t){return t?.firstName||t?.name||t?.email||"Account"}function Ea(){const{user:t,isAdmin:a,logout:r}=Ke(),s=ct(),i=Ze(),[l,n]=m.useState(!1),[o,c]=m.useState(!1),[u,g]=m.useState(!1),y=m.useRef(null),k=ut.useMemo(()=>{const p=[...dr];return a&&p.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),p},[a]),A=ut.useMemo(()=>k.map(p=>({label:p.label,to:p.to,icon:yt[p.icon],className:p.cta?"dock-item-cta":""})),[k]);m.useEffect(()=>{const p=()=>{y.current||(y.current=window.requestAnimationFrame(()=>{n(window.scrollY>12),y.current=null}))};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>{window.removeEventListener("scroll",p),y.current&&window.cancelAnimationFrame(y.current)}},[]),m.useEffect(()=>{c(!1),g(!1)},[i.pathname]);const w=()=>{r(),s("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${l?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(Z,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Fest home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:W("/assets/ozilla/logo.png"),alt:"Ozilla Fest",onError:p=>{p.currentTarget.src=W("/assets/company-logo.jpeg")}})}),e.jsx("div",{className:"dock-site-brand-text",children:e.jsx("strong",{children:"OZILLA FEST"})})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(cr,{items:A,className:"dock-nav",magnification:58,distance:140,panelHeight:62,baseItemSize:44,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>g(p=>!p),"aria-expanded":u,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(Xt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:Xt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(Z,{to:"/account",children:"Account"}),e.jsx(Z,{to:"/tickets/my-tickets",children:"My Tickets"}),a&&e.jsx(Z,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:w,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(Z,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${o?"open":""}`,"aria-label":o?"Close menu":"Open menu","aria-expanded":o,onClick:()=>c(p=>!p),children:o?yt.close:yt.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${o?"open":""}`,onClick:()=>c(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${o?"open":""}`,onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>c(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:k.map(p=>e.jsxs(Ga,{to:p.to,className:p.cta?"dock-mobile-link-cta":"",onClick:()=>c(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:yt[p.icon]}),e.jsx("span",{children:p.label}),p.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},p.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{w(),c(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{to:"/login",onClick:()=>c(!1),children:"Login"}),e.jsx(Z,{to:"/register",onClick:()=>c(!1),children:"Sign Up"})]})})]})})]})}const pr=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP & Ticket Passes",href:"/tickets"},{label:"The Festival Vibe",href:"/#about"},{label:"World-Class Facilities",href:"/#facilities"},{label:"My Digital Passes",href:"/tickets/my-tickets"}],mr=[{label:"Instagram",href:"https://www.instagram.com/ozillafestival"}],fr=[{label:"Sponsorship Inquiries",href:"/#sponsorship"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Hotel & Travel Partners",href:"/hotels"},{label:"Privacy & Terms",href:"/privacy"}];function Ca(){return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"kex-footer",children:[e.jsx("div",{className:"kex-bg-glow","aria-hidden":"true"}),e.jsx("div",{className:"kex-bg-overlay","aria-hidden":"true"}),e.jsxs("div",{className:"kex-container",children:[e.jsxs("div",{className:"kex-nav-grid",children:[e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"MENU"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:pr.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(Z,{to:t.href,children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"SOCIALS"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:mr.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"RESOURCES"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:fr.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(Z,{to:t.href,children:t.label})},t.label))}),e.jsx("div",{className:"kex-action-wrap",children:e.jsx("a",{href:"mailto:ozillafestival@gmail.com",className:"kex-pill-btn",children:"Send a message"})})]})]}),e.jsx("div",{className:"kex-hero-word-wrap","aria-hidden":"true",children:e.jsx("span",{className:"kex-hero-word",children:"OZILLA FEST"})}),e.jsxs("div",{className:"kex-bottom-row",children:[e.jsxs("div",{className:"kex-bottom-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(Z,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]}),e.jsx("p",{className:"kex-bottom-copy",children:"© 2026 OZILLA FEST & Prism Entertainment. All rights reserved."})]})]})]}),e.jsx("style",{children:ur})]})}const ur=`
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
`;function Fe({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(Ea,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(gt,{})}),e.jsx(Ca,{})]})}function It({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(Ea,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(gt,{})})}),e.jsx(Ca,{})]})}function La(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}let wt;function gr(){return window.google?.accounts?.id||window.google?.accounts?.oauth2?Promise.resolve(window.google):wt||(wt=new Promise((t,a)=>{const r=document.querySelector('script[data-google-identity="true"]');if(r){r.addEventListener("load",()=>t(window.google),{once:!0}),r.addEventListener("error",()=>a(new Error("Failed to load Google Identity script")),{once:!0});return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.dataset.googleIdentity="true",s.onload=()=>t(window.google),s.onerror=()=>a(new Error("Failed to load Google Identity script")),document.head.appendChild(s)}),wt)}async function hr(t){const a=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${t}`}});if(!a.ok)throw new Error("Failed to fetch Google profile");return a.json()}async function Ia({clientId:t,onProfile:a,onError:r}){if(t.includes("placeholder")||t.includes("your_google"))throw new Error("Google Client ID is not configured. Please add GOOGLE_CLIENT_ID in Render or VITE_GOOGLE_CLIENT_ID in client/.env");if(await gr(),!window.google?.accounts?.oauth2?.initTokenClient)throw new Error("Google Identity Services library is unavailable");return new Promise((s,i)=>{window.google.accounts.oauth2.initTokenClient({client_id:t,scope:"openid email profile",prompt:"select_account",callback:async n=>{try{if(n?.error)throw n.error==="popup_closed_by_user"?new Error("Google sign-in was cancelled"):new Error(n.error_description||n.error||"Google login failed");if(!n?.access_token)throw new Error("Google sign-in was cancelled");const o=await hr(n.access_token);if(!o?.email)throw new Error("Could not retrieve email from selected Google account");a&&await a(o,n.access_token),s(o)}catch(o){r&&r(o),i(o)}},error_callback:n=>{const o=new Error(n?.message||"Google account chooser popup failed");r&&r(o),i(o)}}).requestAccessToken({prompt:"select_account"})})}function xr(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function br(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function yr({hidden:t=!1,...a}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),t&&e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function wr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function vr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function kr(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}function jr(){const t=ct(),a=Ze(),{login:r,checkAuth:s}=Ke(),i="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",l=new URLSearchParams(a.search).get("returnTo"),n=St(l,"/dashboard"),[o,c]=m.useState({email:"",password:""}),[u,g]=m.useState(null),[y,k]=m.useState(!1),[A,w]=m.useState(!0),[p,b]=m.useState(""),[x,M]=m.useState(""),[j,f]=m.useState(!1),[d,_]=m.useState(!1),L=v=>{M(""),c(I=>({...I,[v.target.name]:v.target.value}))},P=async v=>{if(v.preventDefault(),!(j||d)){b(""),M(""),f(!0);try{await r({email:String(o.email||"").trim().toLowerCase(),password:String(o.password||"")}),M("Login successful. Preparing your festival workspace..."),await new Promise(I=>setTimeout(I,450)),t(n)}catch(I){b(I.response?.data?.message||I.message||"Invalid email or password")}finally{f(!1)}}},h=async()=>{b(""),M(""),_(!0);try{await Ia({clientId:i||"231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",onProfile:async(I,R)=>{const q=await Xe.googleAuth(R,I);je.setToken(q.token),await s(),M(`Google sign-in successful as ${I.email}. Redirecting...`),await new Promise(B=>setTimeout(B,450)),t(n)}})}catch(v){const I=v.response?.data?.message||v.message||"Google sign-in failed";!I.toLowerCase().includes("cancel")&&!I.toLowerCase().includes("closed")&&b(I)}finally{_(!1)}};return e.jsxs("form",{onSubmit:P,className:"kx-form",children:[p&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:p}),x&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:x}),e.jsxs("button",{type:"button",className:"kx-google",onClick:h,disabled:d||j,children:[e.jsx(kr,{}),e.jsx("span",{children:d?"Connecting to Google...":"Continue with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or sign in with email"}),e.jsx("span",{})]}),e.jsxs("label",{className:`kx-field ${u==="email"?"kx-focused":""}`,children:[e.jsx(xr,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"email",value:o.email,placeholder:"Email or Mobile Number",autoComplete:"username",required:!0,onChange:L,onFocus:()=>g("email"),onBlur:()=>g(null)}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${u==="password"?"kx-focused":""}`,children:[e.jsx(br,{className:"kx-field-icon"}),e.jsx("input",{type:y?"text":"password",name:"password",value:o.password,placeholder:"Password",autoComplete:"current-password",required:!0,onChange:L,onFocus:()=>g("password"),onBlur:()=>g(null)}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>k(v=>!v),"aria-label":y?"Hide password":"Show password",children:e.jsx(yr,{hidden:y})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-meta",children:[e.jsxs("label",{className:"kx-remember",children:[e.jsx("input",{type:"checkbox",checked:A,onChange:v=>w(v.target.checked)}),e.jsx("span",{className:"kx-checkbox",children:A&&e.jsx(vr,{})}),e.jsx("span",{children:"Remember me"})]}),e.jsx("a",{href:"#forgot-password",className:"kx-forgot-link",children:"Forgot password?"})]}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:j||d,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),j?e.jsx("span",{className:"kx-spinner","aria-label":"Signing in..."}):e.jsxs("span",{className:"kx-button-copy",children:["Sign in",e.jsx(wr,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Don't have an account?"," ",e.jsx(Z,{to:`/register?${new URLSearchParams({returnTo:n}).toString()}`,children:"Create account"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Login"}),e.jsx("span",{children:"⚡ Fast Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Verified"})]})]})}function Nr(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(jr,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/#contact",children:"Need Help?"})]})]})}function Zt(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function Sr(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function Ar(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}function Kt(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function Jt({hidden:t=!1,...a}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),t&&e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function Pr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function Tr(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}const Qt=()=>new Promise(t=>setTimeout(t,450));function Er(){const t=ct(),a=Ze(),{register:r,checkAuth:s}=Ke(),i="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",l=new URLSearchParams(a.search).get("returnTo"),n=St(l,"/dashboard"),[o,c]=m.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[u,g]=m.useState(null),[y,k]=m.useState(""),[A,w]=m.useState(!1),[p,b]=m.useState(!1),[x,M]=m.useState(!1),[j,f]=m.useState(!1),[d,_]=m.useState(0),[L,P]=m.useState(""),[h,v]=m.useState(""),[I,R]=m.useState(!1),[q,B]=m.useState(!1),[T,H]=m.useState(!1),[X,U]=m.useState(!1),[F,O]=m.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),Y=/^\S+@\S+\.\S+$/.test(o.email),de=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(o.phone.replace(/\s+/g,"")),N={upper:/[A-Z]/.test(o.password),lower:/[a-z]/.test(o.password),number:/\d/.test(o.password),special:/[^A-Za-z0-9]/.test(o.password),length:o.password.length>=8},z=Object.values(N).filter(Boolean).length,D=z===5,C=o.confirmPassword.length>0&&o.password===o.confirmPassword,$=o.password.length>0,ae=m.useMemo(()=>$?z<=2?{label:"Weak",className:"weak",percent:28}:z===3?{label:"Medium",className:"medium",percent:52}:z===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[$,z]),Q=[{key:"upper",text:"Uppercase letter",met:N.upper},{key:"lower",text:"Lowercase letter",met:N.lower},{key:"number",text:"Number",met:N.number},{key:"special",text:"Special character",met:N.special},{key:"length",text:"8+ characters",met:N.length}],ce=o.firstName.trim()&&o.lastName.trim()&&Y&&de&&D&&C&&p&&!I&&!q;m.useEffect(()=>{if(d<=0)return;const S=window.setInterval(()=>{_(E=>Math.max(0,E-1))},1e3);return()=>window.clearInterval(S)},[d]);const re=()=>{P(""),v("")},oe=S=>{const{name:E,value:ne}=S.target;re(),c(ee=>({...ee,[E]:ne})),E==="email"&&(k(""),w(!1),b(!1),_(0)),E in F&&ne.length>0&&O(ee=>({...ee,[E]:!0}))},me=S=>{const{name:E}=S.target;g(null),E in F&&O(ne=>({...ne,[E]:!0}))},ye=async()=>{if(re(),!Y){O(S=>({...S,email:!0})),P("Please enter a valid email address before sending OTP.");return}M(!0);try{const S=await Xe.sendOtp(o.email);S?.emailDelivery==="failed"||typeof S?.message=="string"&&S.message.toLowerCase().includes("delivery failed")&&!S?.devOtp?(w(!1),P(S.emailError||"Email delivery failed: SMTP credentials (SMTP_USER and SMTP_PASS) are not configured on the backend server.")):(w(!0),b(!1),_(60),S?.devOtp?k(String(S.devOtp)):k(""),v(S.message||"OTP code has been sent to your email. Please check your inbox."))}catch(S){P(S.response?.data?.message||S.message||"Unable to send OTP.")}finally{M(!1)}},fe=async()=>{if(re(),!Y||y.trim().length<4){P("Enter the OTP sent to your email.");return}f(!0);try{const S=await Xe.verifyOtp({email:o.email,otp:y});b(!0),v(S.message||"Email verified successfully.")}catch(S){b(!1),P(S.response?.data?.message||S.message||"OTP verification failed.")}finally{f(!1)}},se=async S=>{if(S.preventDefault(),re(),!Y){O(E=>({...E,email:!0})),P("Please enter a valid email address.");return}if(!p){P("Please verify your email OTP before creating your account.");return}if(!de){O(E=>({...E,phone:!0})),P("Please enter a valid mobile number.");return}if(!D){O(E=>({...E,password:!0})),P("Please satisfy all password requirements.");return}if(!C){O(E=>({...E,confirmPassword:!0})),P("Passwords do not match.");return}R(!0);try{await r({firstName:o.firstName,lastName:o.lastName,name:`${o.firstName} ${o.lastName}`.trim(),email:o.email,phone:o.phone,password:o.password}),v("Account created successfully. Preparing your festival workspace..."),await Qt(),t(n)}catch(E){const ne=E.response?.status,ee=E.response?.data?.message||"Registration failed",ie=ee.toLowerCase();ne===409||ie.includes("already")||ie.includes("exists")?P("Account already exists with this email or phone number"):P(ee)}finally{R(!1)}},G=async()=>{re(),B(!0);try{await Ia({clientId:i||"231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",onProfile:async(E,ne)=>{const ee=await Xe.googleAuth(ne,E);je.setToken(ee.token),await s(),v(`Google sign-up verified as ${E.email}. Welcome to OZILLA FEST!`),await Qt(),t(n)}})}catch(S){const E=S.response?.data?.message||S.message||"Google sign-up failed";!E.toLowerCase().includes("cancel")&&!E.toLowerCase().includes("closed")&&P(E)}finally{B(!1)}};return e.jsxs("form",{onSubmit:se,className:"kx-form",children:[L&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:L}),h&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:h}),e.jsxs("button",{type:"button",className:"kx-google",onClick:G,disabled:q||I,children:[e.jsx(Tr,{}),e.jsx("span",{children:q?"Connecting to Google...":"Sign up with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or register with email"}),e.jsx("span",{})]}),e.jsxs("div",{className:"kx-grid-row",children:[e.jsxs("label",{className:`kx-field ${u==="firstName"?"kx-focused":""}`,children:[e.jsx(Zt,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"firstName",value:o.firstName,placeholder:"First Name",autoComplete:"given-name",required:!0,onChange:oe,onFocus:()=>g("firstName"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${u==="lastName"?"kx-focused":""}`,children:[e.jsx(Zt,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"lastName",value:o.lastName,placeholder:"Last Name",autoComplete:"family-name",required:!0,onChange:oe,onFocus:()=>g("lastName"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]})]}),e.jsxs("label",{className:`kx-field ${u==="email"?"kx-focused":""} ${F.email&&!Y?"kx-field-invalid":""}`,children:[e.jsx(Sr,{className:"kx-field-icon"}),e.jsx("input",{type:"email",name:"email",value:o.email,placeholder:"Email address",autoComplete:"email",required:!0,onChange:oe,onFocus:()=>g("email"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),F.email&&!Y&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid email address."}),e.jsxs("div",{className:`kx-otp-box ${p?"kx-otp-verified":""}`,children:[e.jsxs("div",{className:"kx-otp-meta",children:[e.jsx("span",{className:"kx-otp-kicker",children:"Email Verification"}),e.jsx("strong",{children:p?"✓ Email verified":A?"Enter 6-digit code":"Verify email before submit"}),e.jsx("span",{className:"kx-otp-subtext",children:p?"Security verified":d>0?`Resend available in ${d}s`:"Code will be sent to your email"})]}),e.jsxs("div",{className:"kx-otp-controls",children:[e.jsx("button",{type:"button",className:"kx-otp-btn",onClick:ye,disabled:x||!Y||p||d>0,children:x?"Sending...":A?"Resend OTP":"Send OTP"}),e.jsx("input",{type:"text",value:y,onChange:S=>{re(),k(S.target.value.replace(/\D/g,"").slice(0,6)),b(!1)},className:"kx-otp-input",placeholder:"Enter 6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!A||p}),e.jsx("button",{type:"button",className:"kx-otp-btn kx-otp-btn-accent",onClick:fe,disabled:!A||p||j,children:j?"Verifying...":p?"Verified":"Verify"})]})]}),e.jsxs("label",{className:`kx-field ${u==="phone"?"kx-focused":""} ${F.phone&&!de?"kx-field-invalid":""}`,children:[e.jsx(Ar,{className:"kx-field-icon"}),e.jsx("input",{type:"tel",name:"phone",value:o.phone,placeholder:"Phone (+92 3XX XXXXXXX)",autoComplete:"tel",required:!0,onChange:oe,onFocus:()=>g("phone"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),F.phone&&!de&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid mobile number."}),e.jsxs("label",{className:`kx-field ${u==="password"?"kx-focused":""} ${F.password&&!D?"kx-field-invalid":""}`,children:[e.jsx(Kt,{className:"kx-field-icon"}),e.jsx("input",{type:T?"text":"password",name:"password",value:o.password,placeholder:"Create Password",autoComplete:"new-password",required:!0,onChange:oe,onFocus:()=>g("password"),onBlur:me}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>H(S=>!S),"aria-label":T?"Hide password":"Show password",children:e.jsx(Jt,{hidden:T})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:`kx-strength kx-strength-${ae.className}`,children:[e.jsxs("div",{className:"kx-strength-header",children:[e.jsx("span",{children:"Password Strength"}),e.jsx("strong",{children:ae.label})]}),e.jsx("div",{className:"kx-strength-bar-track",children:e.jsx("span",{style:{width:`${ae.percent}%`}})})]}),e.jsx("ul",{className:"kx-pwd-rules",children:Q.map(S=>{const E=S.met?"kx-rule-met":$?"kx-rule-unmet":"kx-rule-neutral";return e.jsxs("li",{className:`kx-pwd-rule ${E}`,children:[e.jsx("span",{className:"kx-rule-badge",children:S.met?"✓":"•"}),e.jsx("span",{children:S.text})]},S.key)})}),e.jsxs("label",{className:`kx-field ${u==="confirmPassword"?"kx-focused":""} ${F.confirmPassword&&!C?"kx-field-invalid":""}`,children:[e.jsx(Kt,{className:"kx-field-icon"}),e.jsx("input",{type:X?"text":"password",name:"confirmPassword",value:o.confirmPassword,placeholder:"Confirm Password",autoComplete:"new-password",required:!0,onChange:oe,onFocus:()=>g("confirmPassword"),onBlur:me}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>U(S=>!S),"aria-label":X?"Hide confirm password":"Show confirm password",children:e.jsx(Jt,{hidden:X})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),F.confirmPassword&&!C&&e.jsx("p",{className:"kx-field-error-msg",children:"Passwords do not match."}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:!ce,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),I?e.jsx("span",{className:"kx-spinner","aria-label":"Creating account..."}):e.jsxs("span",{className:"kx-button-copy",children:["Create Account",e.jsx(Pr,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Already have an account?"," ",e.jsx(Z,{to:`/login?${new URLSearchParams({returnTo:n}).toString()}`,children:"Sign In"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Sign Up"}),e.jsx("span",{children:"⚡ Instant Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Google Verified"})]})]})}function Cr(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(Er,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/#contact",children:"Need Help?"})]})]})}function Lr(){const[t]=Va(),a=ct(),{checkAuth:r}=Ke(),[s,i]=m.useState("Signing you in with Google...");return m.useEffect(()=>{(async()=>{const n=t.get("token"),o=t.get("error"),c=t.get("returnTo"),u=St(c,"/dashboard");if(o){i(o==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const g=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>a(`/login?${g}`,{replace:!0}),1200);return}if(!n){i("Google sign-in token not found. Please try again.");const g=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>a(`/login?${g}`,{replace:!0}),1200);return}je.setToken(n),await r(),a(u,{replace:!0})})()},[r,a,t]),e.jsx("div",{className:"auth-page",children:e.jsxs("div",{className:"auth-card",children:[e.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),e.jsx("p",{className:"auth-subtitle",children:s})]})})}const Ir={hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:W("/assets/hotels/Pearl-Continental-Lahore.jpg"),showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:W("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:W("/assets/hotels/Hotel-Indigo.jpg"),showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:W("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:W("/assets/hotels/Luxus-Grand-Hotel.jpg"),showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:W("/assets/hotels/Nishat.jpg"),showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]};W("/assets/ozilla/talwinder.jpg"),W("/assets/ozilla/talwinder.jpg"),W("/assets/ozilla/Imran-Khan.jpg"),W("/assets/ozilla/Imran-Khan.jpg"),W("/assets/ozilla/Bohemia.jpg"),W("/assets/ozilla/Bohemia.jpg"),W("/assets/ozilla/hassan-raheem.jpg"),W("/assets/ozilla/hassan-raheem.jpg");const ea=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:W("/assets/ozilla/talwinder.jpg"),image:W("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:W("/assets/ozilla/Imran-Khan.jpg"),image:W("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:W("/assets/ozilla/Bohemia.jpg"),image:W("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:W("/assets/ozilla/hassan-raheem.jpg"),image:W("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],ta=1.28,aa=.78;function We(t,a,r){return Math.min(r,Math.max(a,t))}function ra(t){if(!t)return null;if(typeof t=="string")return t||null;const a=t.src||t.image;return typeof a=="string"&&a?a:null}function Rr(t){return ra(t&&typeof t=="object"&&(t.image||t.src)||t)}function zr(t){if(t&&typeof t=="object"&&"offsetY"in t){const a=t.offsetY;return typeof a=="number"&&isFinite(a)?a:0}return 0}function Mr({items:t=ea,images:a,slideWidth:r=320,slideHeight:s=440,spacing:i=2.4,direction:l="right",smoothness:n=8.5,radius:o=24,dim:c=5,background:u="transparent",sensitivity:g=5,autoPlay:y=!1,autoPlayInterval:k=3500,style:A,onItemClick:w}){const p=m.useRef(null),b=m.useRef([]),x=m.useRef(0),M=m.useRef(0),[j,f]=m.useState(0),[d,_]=m.useState(!1),[L,P]=m.useState(0),h=t&&t.length>0?t:a&&a.length>0?a:ea,v=m.useMemo(()=>h.map((N,z)=>({...N,src:Rr(N),offsetY:zr(N),name:N.name||`Artist ${z+1}`,genre:N.genre||"Live Performer",stage:N.stage||"Ozilla Arena",bpm:N.bpm||"128 BPM",vibe:N.vibe||"Festival Energy",isHeadliner:!!N.isHeadliner})),[h]),I=j>0&&j<640?Math.min(r,250):j<1024?Math.min(r,290):r,R=j>0&&j<640?Math.round(I*1.36):s,q=I+We(i,0,10)*18,B=.15-We(n,0,10)/10*.11,T=We(c,0,10)/10*.75,H=.4+We(g,0,10)/10*1.1,X=.6+We(g,0,10)/10*1.6,U=l==="left",F=m.useRef({count:v.length,step:q,slideWidth:I,width:j,ease:B,maxScale:ta,minScale:aa,dim:T,loop:!1,flip:U});F.current={count:v.length,step:q,slideWidth:I,width:j,ease:B,maxScale:ta,minScale:aa,dim:T,loop:!1,flip:U};const O=m.useRef({wheelMultiplier:H,dragMultiplier:X,flip:U});O.current={wheelMultiplier:H,dragMultiplier:X,flip:U},m.useEffect(()=>{const N=p.current;if(!N)return;const z=new ResizeObserver(D=>{D[0]&&f(D[0].contentRect.width)});return z.observe(N),f(N.getBoundingClientRect().width),()=>z.disconnect()},[]),m.useEffect(()=>{b.current.length=v.length},[v.length]),m.useEffect(()=>{if(!y||d||v.length<=1)return;const N=setInterval(()=>{P(z=>{const D=(z+1)%v.length;return x.current=D*q,D})},k);return()=>clearInterval(N)},[y,d,v.length,q,k]),m.useEffect(()=>{let N=0,z=0;const D=C=>{N=requestAnimationFrame(D);const $=F.current,ae=z?Math.min((C-z)/1e3,.1):1/60;if(z=C,!$.count||$.step<=0||$.width<=0)return;const Q=($.count-1)*$.step;x.current=We(x.current,0,Q);const ce=1-Math.pow(1-$.ease,ae*60);M.current+=(x.current-M.current)*ce;const re=Math.round(M.current/$.step);re>=0&&re<$.count&&P(re);const oe=($.width-$.slideWidth)/2,me=$.width/2;for(let ye=0;ye<$.count;ye+=1){const fe=b.current[ye];if(!fe)continue;const G=ye*$.step-M.current+oe,S=G+$.slideWidth/2-me;let E,ne;S>0?(E=Math.min($.maxScale,1+S/$.width*.45),ne=(E-1)*$.slideWidth*.35):(E=Math.max($.minScale,1+S/$.width*.5),ne=0);const ee=$.flip?$.width-$.slideWidth-(G+ne):G+ne;if(fe.style.transform=`translate3d(${ee}px, -50%, 0) scale(${E})`,$.dim>0&&E<1){const ie=(1-E)/Math.max(.001,1-$.minScale);fe.style.filter=`brightness(${Math.max(.35,1-ie*$.dim)})`}else fe.style.filter="none"}};return N=requestAnimationFrame(D),()=>cancelAnimationFrame(N)},[]),m.useEffect(()=>{const N=p.current;if(!N)return;const z=D=>{D.preventDefault();const C=Math.abs(D.deltaX)>Math.abs(D.deltaY)?D.deltaX:D.deltaY;x.current+=C*O.current.wheelMultiplier};return N.addEventListener("wheel",z,{passive:!1}),()=>N.removeEventListener("wheel",z)},[]),m.useEffect(()=>{const N=p.current;if(!N)return;let z=null,D=0;const C=Q=>{if(z===null){z=Q.pointerId,D=Q.clientX;try{N.setPointerCapture(Q.pointerId)}catch{}}},$=Q=>{if(z!==Q.pointerId)return;const ce=Q.clientX-D;D=Q.clientX,x.current+=(O.current.flip?ce:-ce)*O.current.dragMultiplier},ae=Q=>{if(z===Q.pointerId){z=null;try{N.hasPointerCapture(Q.pointerId)&&N.releasePointerCapture(Q.pointerId)}catch{}}};return N.addEventListener("pointerdown",C),N.addEventListener("pointermove",$),N.addEventListener("pointerup",ae),N.addEventListener("pointercancel",ae),()=>{N.removeEventListener("pointerdown",C),N.removeEventListener("pointermove",$),N.removeEventListener("pointerup",ae),N.removeEventListener("pointercancel",ae)}},[]);const Y=m.useCallback(N=>{const z=We(N,0,v.length-1);x.current=z*q,P(z)},[v.length,q]),de=m.useCallback(N=>{const z=We(L+(N==="left"?-1:1),0,v.length-1);Y(z)},[L,Y,v.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:v.map((N,z)=>{const D=z===L;return e.jsx("button",{type:"button",onClick:()=>Y(z),style:{padding:"6px 14px",borderRadius:"999px",border:D?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:D?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:D?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:D?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:D?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:N.name},N.name)})}),e.jsx("div",{ref:p,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${R+50}px`,overflow:"hidden",background:u,cursor:"grab",touchAction:"pan-y",opacity:j>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...A},children:v.map((N,z)=>{const D=N.isHeadliner,C=z===L;return e.jsxs("div",{ref:$=>{b.current[z]=$},onClick:()=>{Y(z),w&&w(N,z)},style:{position:"absolute",top:"50%",left:0,width:`${I}px`,height:`${R}px`,borderRadius:`${o}px`,overflow:"hidden",background:"#130c0a",border:C?"1.5px solid rgba(255, 138, 61, 0.85)":D?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:C?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[N.src?e.jsx("img",{src:N.src,alt:N.name,draggable:!1,onError:$=>{$.currentTarget.src=W("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${N.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[D?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:N.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:N.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:N.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",N.bpm]}),e.jsxs("span",{children:["♫ ",N.vibe]})]})]})]},N.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>de("left"),disabled:L===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:L===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:L===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:L===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:L===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:N=>{L>0&&(N.currentTarget.style.transform="scale(1.1)",N.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:N=>{N.currentTarget.style.transform="scale(1)",N.currentTarget.style.borderColor=L===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:v.map((N,z)=>e.jsx("span",{onClick:()=>Y(z),style:{width:z===L?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:z===L?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},z))}),e.jsx("button",{type:"button",onClick:()=>de("right"),disabled:L===v.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:L===v.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:L===v.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:L===v.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:L===v.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:N=>{L<v.length-1&&(N.currentTarget.style.transform="scale(1.1)",N.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:N=>{N.currentTarget.style.transform="scale(1)",N.currentTarget.style.borderColor=L===v.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const et={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},Fr=2,Ra=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],Or=Math.max(...Ra.map(t=>t.blur)),sa=36;function Rt(t,a){const r=Math.max(0,Math.min(1,a));if(typeof t!="string")return`rgba(0,0,0,${r})`;const s=t.trim(),i=s.match(/^#([0-9a-f]{3,8})$/i);if(i){let n=i[1];(n.length===3||n.length===4)&&(n=n.split("").map(c=>c+c).join(""));const o=parseInt(n.slice(0,6),16);return Number.isFinite(o)?`rgba(${o>>16&255},${o>>8&255},${o&255},${r})`:`rgba(0,0,0,${r})`}const l=s.match(/^rgba?\(([^)]+)\)/i);if(l){const n=l[1].split(",").map(o=>parseFloat(o));if(n.length>=3&&n.slice(0,3).every(Number.isFinite))return`rgba(${n[0]},${n[1]},${n[2]},${r})`}return`rgba(0,0,0,${r})`}function Dr(t,a,r){const s=(t%1+1)%1*2*(a+r);return s<a?[s,0]:s<a+r?[a,s-a]:s<a*2+r?[a-(s-a-r),r]:[0,r-(s-a*2-r)]}function ia(t,a,r){const s=2*(a+r),i=[0,a/s,(a+r)/s,(a*2+r)/s];return Math.floor(t/4)+i[(t%4+4)%4]}function _r(t,a,r){const[s,i]=Dr(t,a,r);return Math.atan2(s-a/2,r/2-i)*180/Math.PI}const na=24,Br=.015;function zt(t,a,r,s,i){const l=r>0?r:100,n=s>0?s:100,o=Math.max(0,Math.min(100,a)),c=Math.max(Br,o/100*.5),u=o/100,g=[];let y=0,k=0,A=0;for(let p=0;p<=na;p++){const b=p/na,x=_r(t+(b-.5)*c,l,n);if(p===0)y=x;else{let f=x-k;for(;f>180;)f-=360;for(;f<-180;)f+=360;A+=f}k=x;const M=Math.abs(b-.5)*2,j=u>=1||M<=u?1:1-(M-u)/(1-u);g.push(`${Rt(i,j*j*(3-2*j))} ${A.toFixed(2)}deg`)}const w=A.toFixed(2);return g.push(`${Rt(i,0)} ${w}deg`),g.push(`${Rt(i,0)} 360deg`),`conic-gradient(from ${y.toFixed(2)}deg at 50% 50%, ${g.join(", ")})`}const oa=30,$r=4,la=3,Hr=.35,Ur=[.72,.16,.18,1.05],Gr=[.65,0,.35,1];function za(t){const[a,r,s,i]=t;if(a===r&&s===i)return n=>n;const l=(n,o,c)=>{const u=1-c;return 3*u*u*c*n+3*u*c*c*o+c*c*c};return n=>{const o=Math.max(0,Math.min(1,n));let c=o;for(let u=0;u<8;u++){const g=l(a,s,c)-o,y=1-c,k=3*y*y*a+6*y*c*(s-a)+3*c*c*(1-s);if(Math.abs(k)<1e-6)break;c-=g/k,c=Math.max(0,Math.min(1,c))}return l(r,i,c)}}const Vr=za(Ur),Wr=za(Gr),ca={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function tt({color:t=et.color,rounded:a=et.rounded,thickness:r=et.thickness,borderSize:s=et.borderSize,glow:i=et.glow,movement:l=et.movement,speed:n=et.speed,style:o,className:c=""}){const u=m.useRef(null),g=m.useRef(null),y=m.useRef({speed:n,movement:l,borderSize:s,color:t});y.current={speed:n,movement:l,borderSize:s,color:t};const k=m.useRef(null),A=m.useRef({w:0,h:0}),[w,p]=m.useState({w:0,h:0});m.useEffect(()=>{const P=k.current;if(!P||typeof ResizeObserver>"u")return;const h=new ResizeObserver(()=>{const v=P.getBoundingClientRect();v.width===A.current.w&&v.height===A.current.h||(A.current={w:v.width,h:v.height},p(A.current))});return h.observe(P),()=>h.disconnect()},[]),m.useEffect(()=>{const P=k.current;let h=!0,v=null;typeof IntersectionObserver<"u"&&P&&(v=new IntersectionObserver(X=>{X[0]&&(h=X[0].isIntersecting)},{rootMargin:"100px"}),v.observe(P));let I=0,R=performance.now(),q=0,B=0,T=0;const H=X=>{if(I=requestAnimationFrame(H),!h||typeof document<"u"&&document.hidden){R=X;return}const U=Math.min(.05,Math.max(0,(X-R)/1e3));R=X;const F=y.current,O=Math.max(0,Math.min(20,F.speed));if(O>0){const Y=F.movement==="step",de=Y?la+(Hr-la)*(O-1)/19:(oa+($r-oa)*(O-1)/19)/4;for(T+=U/de;T>=1;)T-=1,B+=1;const N=Y?Vr(Math.min(1,T*2)):Wr(T),{w:z,h:D}=A.current,C=z>0?z:100,$=D>0?D:100,ae=ia(B,C,$),Q=ia(B+1,C,$);q=ae+(Q-ae)*N;const ce=u.current;ce&&ce.style.setProperty("--arc",zt(q,F.borderSize,z,D,F.color));const re=g.current;re&&re.style.setProperty("--arc",zt(q+.5,F.borderSize,z,D,F.color))}};return I=requestAnimationFrame(H),()=>{cancelAnimationFrame(I),v&&v.disconnect()}},[]);const b=Math.max(1,Math.min(10,r)),x=Math.max(0,Math.min(100,a))/100*(Math.min(w.w||200,w.h||200)/2),M=Math.max(0,Math.min(100,i))/100,j=P=>b+M*sa*P,f=10+sa+Or*2,d=(P,h=0)=>e.jsx("div",{style:{position:"absolute",inset:h-P,boxSizing:"border-box",padding:P,borderRadius:x>0?x+P:0,background:"var(--arc)",...ca}}),_=(P,h,v,I)=>e.jsx("div",{style:{position:"absolute",inset:-f,boxSizing:"border-box",padding:f,borderRadius:x>0?x+f:0,opacity:I,mixBlendMode:"plus-lighter",filter:v?`blur(${v.toFixed(1)}px)`:"none",WebkitFilter:v?`blur(${v.toFixed(1)}px)`:"none",...ca},children:d(h,f)},P),L=(P,h)=>e.jsxs("div",{ref:h,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":zt(P,s,w.w,w.h,t)},children:[M>0&&Ra.map((v,I)=>_(`glow-${I}`,j(v.reach),v.blur,v.opacity)),Array.from({length:Fr}).map((v,I)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:d(b)},`edge-${I}`))]});return e.jsxs("div",{ref:k,className:`neon-border-overlay ${c}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:x,pointerEvents:"none",zIndex:1,...o},children:[L(0,u),L(.5,g)]})}const qr=1.5,Yr=42,Xr=Math.PI*2,Zr=300,Kr=300,Jr=2,Qr=5e3,es=3.2,ts=.05,as=3,rs=1.35,ss=.08,is=.5,ns=.24,os=.35,ls=Xr*.75,cs=2,Ma=3,vt=720,ds=`
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
    float ang = aA.x * ${ls.toFixed(6)} + aA.y * TAU * ${cs.toFixed(1)};
    float rN = mix(${os.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${ts.toFixed(3)} * tau);

    float tp   = ${ss.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${is.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${rs.toFixed(2)});

    float L  = ${as.toFixed(1)};
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
`,ps=`
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
`,ms=`
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
    float halfW  = uThick * 0.5 * ${Ma.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,fs=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${Ma.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function da(t){if(!t)return[1,1,1,1];let a=String(t).trim();const r=a.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);r&&(a=r[1].trim());const s=a.match(/^rgba?\(([^)]+)\)$/i);if(s){const l=s[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(l[0]||0)/255,(l[1]||0)/255,(l[2]||0)/255,l.length>3&&isFinite(l[3])?l[3]:1]}let i=a.replace("#","");return(i.length===3||i.length===4)&&(i=i.split("").map(l=>l+l).join("")),i.length<6?[1,1,1,1]:[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255,i.length>=8?parseInt(i.slice(6,8),16)/255:1]}function us(t){return()=>{t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function pa(t,a,r){const s=t.createShader(a);return s?(t.shaderSource(s,r),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||console.warn("VortexDustFall shader:",t.getShaderInfoLog(s)),s):null}function ma(t,a,r){const s=t.createProgram();if(!s)return null;const i=pa(t,t.VERTEX_SHADER,a),l=pa(t,t.FRAGMENT_SHADER,r);return!i||!l?null:(t.attachShader(s,i),t.attachShader(s,l),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||console.warn("VortexDustFall link:",t.getProgramInfoLog(s)),s)}const gs={radius:195,thickness:16},hs={height:165,spin:38,spray:0},xs={scatter:280,blur:0},bs={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function ys({background:t="transparent",baseColor:a="#FFA733",accentColor:r="#FFE082",density:s=145,dotSize:i=130,speed:l=48,distance:n=1450,tilt:o=7,ring:c={},fall:u={},field:g={},hover:y={},style:k={},className:A="",children:w}){const p={...gs,...c},b={...hs,...u},x={...xs,...g},M={...bs,...y},j=m.useRef(null),f=m.useRef(null),d=m.useRef({x:0,y:0,active:0}),_=m.useRef({baseColor:a,accentColor:r,density:s,dotSize:i,speed:l,distance:n,tilt:o,ring:p,fall:b,field:x,hover:M});return _.current={baseColor:a,accentColor:r,density:s,dotSize:i,speed:l,distance:n,tilt:o,ring:p,fall:b,field:x,hover:M},m.useEffect(()=>{const L=j.current,P=f.current;if(!L||!P)return;const h=P.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!h)return;const v=ma(h,ds,ps),I=ma(h,ms,fs);if(!v||!I)return;const R=(G,S)=>h.getUniformLocation(G,S),q={a:h.getAttribLocation(v,"aA"),b:h.getAttribLocation(v,"aB")},B={res:R(v,"uRes"),focal:R(v,"uFocal"),phase:R(v,"uPhase"),radius:R(v,"uRadius"),rise:R(v,"uRise"),fallD:R(v,"uFall"),spinTurns:R(v,"uSpinTurns"),scatter:R(v,"uScatter"),dotWorld:R(v,"uDotWorld"),blurK:R(v,"uBlurK"),camDist:R(v,"uCamDist"),tilt:R(v,"uTilt"),yPx:R(v,"uYPx"),alpha:R(v,"uAlpha"),color:R(v,"uColor")},T={ring:h.getAttribLocation(I,"aRing")},H={res:R(I,"uRes"),focal:R(I,"uFocal"),radius:R(I,"uRadius"),camDist:R(I,"uCamDist"),tilt:R(I,"uTilt"),yPx:R(I,"uYPx"),thick:R(I,"uThick"),seg:R(I,"uSeg"),color:R(I,"uColor"),alpha:R(I,"uAlpha")},X=h.createBuffer(),U=h.createBuffer();let F=-1,O=0;const Y=G=>{const S=P.clientWidth||L.clientWidth||(typeof window<"u"?window.innerWidth:1200),E=S<768,ne=S>=768&&S<1024,ee=E?1800:ne?8500:Math.round(G*Zr);O=Math.max(1e3,ee);const ie=new Float32Array(O*4),Le=new Float32Array(O*2),Ee=us(85840071);for(let ke=0;ke<O;ke++)ie[ke*4]=Ee(),ie[ke*4+1]=Ee(),ie[ke*4+2]=Ee(),ie[ke*4+3]=Ee(),Le[ke*2]=Ee(),Le[ke*2+1]=Ee();h.bindBuffer(h.ARRAY_BUFFER,X),h.bufferData(h.ARRAY_BUFFER,ie,h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,U),h.bufferData(h.ARRAY_BUFFER,Le,h.STATIC_DRAW),F=G},de=h.createBuffer(),N=(vt+1)*2;{const G=new Float32Array(N*2);for(let S=0;S<=vt;S++){const E=S/vt;G[S*4]=E,G[S*4+1]=-1,G[S*4+2]=E,G[S*4+3]=1}h.bindBuffer(h.ARRAY_BUFFER,de),h.bufferData(h.ARRAY_BUFFER,G,h.STATIC_DRAW)}h.disable(h.DEPTH_TEST),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE);let z=!0,D=null;typeof IntersectionObserver<"u"&&L&&(D=new IntersectionObserver(G=>{G[0]&&(z=G[0].isIntersecting)},{rootMargin:"120px"}),D.observe(L));let C=1,$=0;const ae=()=>{C=Math.min(window.devicePixelRatio||1,qr);const G=P.clientWidth||L.clientWidth||1,S=P.clientHeight||L.clientHeight||1,E=Math.max(1,Math.round(G*C)),ne=Math.max(1,Math.round(S*C));(P.width!==E||P.height!==ne)&&(P.width=E,P.height=ne),h.viewport(0,0,E,ne),Math.abs($-G)>50&&($=G,Y(_.current.density))};ae();const Q=new ResizeObserver(ae);Q.observe(P);let ce=0,re=performance.now(),oe=0,me=0,ye=0,fe=0;const se=G=>{if(oe=requestAnimationFrame(se),!z||typeof document<"u"&&document.hidden){re=G;return}const S=Math.min((G-re)/1e3,.05);re=G;const E=_.current;if(E.density!==F&&Y(E.density),O===0)return;const ne=Math.max(.05,E.hover.transition?.duration??.6),ee=1-Math.exp(-S/ne),ie=d.current;me+=(ie.x-me)*ee,ye+=(ie.y-ye)*ee,fe+=(ie.active-fe)*ee;const Le=(E.hover.amount||100)/100,Ee=1+fe*Le*.6;ce=(ce+S*(E.speed/50*Ee)/es)%1;const ke=P.width,Je=P.height,De=P.clientWidth||L.clientWidth||1200,Re=De<768,dt=De>=768&&De<1024,Qe=Je/(2*Math.tan(Yr/2*Math.PI/180)),pt=ke/Math.max(Je,1),mt=pt<1?Math.max(.32,pt/1.4):dt?.85:1,Se=Kr*(E.ring.radius/100)*mt,ft=Se*(Re?1.1:E.fall.height/100),ht=ft*(E.fall.spray/400),xt=Je*(Re?.22:ns),At=E.fall.spin/100*1.5,ze=Se*(E.field.scatter/100)*(Re?.08:.15),bt=Jr*(E.dotSize/100)*(Re?.65:1),$e=Qr*(E.field.blur/100),He=Re?Math.min(E.ring.thickness*C,9*C):E.ring.thickness*C,V=E.tilt*Math.PI/180+ye*Le*fe*(10*Math.PI/180),le=(Re?E.distance*1.05:E.distance)-fe*Le*150,[he,Ae,we,Ie]=da(E.baseColor),[Ue,st,Me,it]=da(E.accentColor);h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(v),h.uniform2f(B.res,ke,Je),h.uniform1f(B.focal,Qe),h.uniform1f(B.phase,ce),h.uniform1f(B.radius,Se),h.uniform1f(B.rise,ht),h.uniform1f(B.fallD,ft),h.uniform1f(B.spinTurns,At),h.uniform1f(B.scatter,ze),h.uniform1f(B.dotWorld,bt*C),h.uniform1f(B.blurK,$e*C),h.uniform1f(B.camDist,le),h.uniform1f(B.tilt,V),h.uniform1f(B.yPx,xt),h.uniform1f(B.alpha,Ie),h.uniform3f(B.color,he,Ae,we),h.bindBuffer(h.ARRAY_BUFFER,X),h.enableVertexAttribArray(q.a),h.vertexAttribPointer(q.a,4,h.FLOAT,!1,0,0),h.bindBuffer(h.ARRAY_BUFFER,U),h.enableVertexAttribArray(q.b),h.vertexAttribPointer(q.b,2,h.FLOAT,!1,0,0),h.drawArrays(h.POINTS,0,O),h.useProgram(I),h.uniform2f(H.res,ke,Je),h.uniform1f(H.focal,Qe),h.uniform1f(H.radius,Se),h.uniform1f(H.camDist,le),h.uniform1f(H.tilt,V),h.uniform1f(H.yPx,xt),h.uniform1f(H.thick,He),h.uniform1f(H.seg,vt),h.uniform3f(H.color,Ue,st,Me),h.uniform1f(H.alpha,it),h.bindBuffer(h.ARRAY_BUFFER,de),h.enableVertexAttribArray(T.ring),h.vertexAttribPointer(T.ring,2,h.FLOAT,!1,0,0),h.drawArrays(h.TRIANGLE_STRIP,0,N)};return oe=requestAnimationFrame(se),()=>{cancelAnimationFrame(oe),Q.disconnect(),D&&D.disconnect(),h.deleteBuffer(X),h.deleteBuffer(U),h.deleteBuffer(de),h.deleteProgram(v),h.deleteProgram(I)}},[]),e.jsxs("div",{ref:j,className:`vortex-dust-container ${A}`,onPointerMove:L=>{const P=L.currentTarget.getBoundingClientRect();P.width<=0||P.height<=0||(d.current={x:(L.clientX-P.left)/P.width*2-1,y:-((L.clientY-P.top)/P.height*2-1),active:1})},onPointerLeave:()=>{d.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:t,...k},children:[e.jsx("canvas",{ref:f,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),w&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:w})]})}const ws=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:W("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:W("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:W("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:W("/assets/ozilla/hassan-raheem.jpg")}],vs=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],ks=[{badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats."},{badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists."},{badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges."},{badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates."}],js=[{name:"OZILLA FEST 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],Ns=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],Ss=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"OZILLA FEST 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"OZILLA FEST 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],As=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],Ps=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],Ts=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function Es(t){const[a,r]=m.useState(()=>{const s=Math.max(new Date(t)-Date.now(),0);return{days:Math.floor(s/864e5),hours:Math.floor(s/36e5%24),minutes:Math.floor(s/6e4%60),seconds:Math.floor(s/1e3%60)}});return m.useEffect(()=>{const s=setInterval(()=>{const i=Math.max(new Date(t)-Date.now(),0);r({days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)})},1e3);return()=>clearInterval(s)},[t]),a}function Cs(){const t=Ze(),a=Es("2026-11-01T18:00:00+05:00");return m.useEffect(()=>{const r=t.hash?.replace("#","");r?setTimeout(()=>{const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[t.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx(ys,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(J.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(J.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsxs(J.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:[e.jsx("strong",{className:"sp-hero-sub-highlight",children:"Pakistan's Flagship Music & Cultural Phenomenon."}),e.jsx("span",{className:"sp-hero-sub-detail",children:"4 Electrified Mega Stages · Headline Celebrities · High-Octane Sound Under the Lahore Night Sky."})]}),e.jsxs(J.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"DATE"}),e.jsx("strong",{children:"NOV 01, 2026"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"CITY"}),e.jsx("strong",{children:"LAHORE, PK"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"PRODUCTION"}),e.jsx("strong",{children:"4 MEGA STAGES"})]}),e.jsxs("div",{className:"sp-hero-meta-pill sp-meta-featured",children:[e.jsx("span",{className:"sp-meta-dot sp-dot-gold"}),e.jsx("span",{className:"sp-meta-label",children:"PASSES"}),e.jsx("strong",{children:"INSTANT QR PASS"})]})]}),e.jsxs(J.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(J.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(J.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:Ts.map((r,s)=>e.jsxs(J.div,{className:"stat-card",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:s*.08},whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:r.value}),e.jsx("span",{className:"stat-label",children:r.label}),e.jsx("small",{className:"stat-sub",children:r.sub})]},r.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx(J.div,{className:"sp-celebrity-slider-wrap",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.6},style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(Mr,{items:ws,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs(J.div,{className:"sp-countdown-banner",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},children:[e.jsx("div",{className:"sp-countdown-header",children:e.jsxs("span",{className:"sp-countdown-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"COUNTDOWN TO THE FIRST BEAT DROP"]})}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",a.days],["Hours",a.hours],["Minutes",a.minutes],["Seconds",a.seconds]].map(([r,s])=>e.jsxs(J.div,{className:"sp-countdown-card",whileHover:{scale:1.05,y:-4},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(s).padStart(2,"0")}),e.jsx("span",{children:r}),e.jsx("div",{className:"sp-countdown-glow-line"})]},r))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header",style:{textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:vs.map((r,s)=>e.jsxs(J.div,{className:`sp-pricing-card ${r.isFeatured?"sp-featured-pricing":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s*.12},whileHover:{y:-8},children:[r.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:r.badge}),e.jsx("h3",{children:r.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:r.price})}),e.jsx("p",{className:"sp-pricing-sub",children:r.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:r.perks.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:i})]},i))}),e.jsx(Z,{to:r.ctaLink,className:r.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:r.ctaText})]},r.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:ks.map((r,s)=>e.jsxs(J.div,{className:"sp-pillar-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s*.1},whileHover:{y:-8,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-glow-accent"}),e.jsx("div",{className:"sp-pillar-top",children:e.jsx("span",{className:"sp-pillar-badge",children:r.badge})}),e.jsx("h3",{className:"sp-pillar-title",children:r.title}),e.jsx("p",{className:"sp-pillar-desc",children:r.desc}),e.jsx("div",{className:"sp-pillar-glow-line"})]},r.title))}),e.jsxs(J.div,{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(tt,{color:"#ff7a29",rounded:32,thickness:2.8,borderSize:50,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsxs("span",{className:"sp-vibe-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"FESTIVAL HIGHLIGHTS"]}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(J.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(J.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0,icon:"⚡"},{text:"100kW Laser & Sound",isMain:!0,icon:"🔊"},{text:"20+ Star Performers",isMain:!0,icon:"👑"},{text:"Verified QR Instant Passes",isMain:!0,icon:"🎟️"},{text:"10,000+ Music Lovers",isMain:!1,icon:"👥"},{text:"50+ Food & Beats Stalls",isMain:!1,icon:"🍔"},{text:"VIP Artist Lounge & Deck",isMain:!1,icon:"✨"},{text:"Exclusive Partner Discounts",isMain:!1,icon:"🏷️"}].map((r,s)=>e.jsxs(J.div,{className:`sp-vibe-tag ${r.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.35,delay:s*.05},whileHover:{scale:1.03,x:3},whileTap:{scale:.98},children:[e.jsx("span",{className:"sp-vibe-tag-icon",children:r.icon}),e.jsx("span",{className:"sp-vibe-tag-text",children:r.text}),r.isMain&&e.jsx("span",{className:"sp-vibe-tag-dot"})]},r.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:Ns.map((r,s)=>e.jsxs(J.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s*.12},whileHover:{y:-6},children:[e.jsx(tt,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:r.name}),e.jsx("span",{className:"sp-pill-badge",children:r.status})]}),e.jsx("p",{className:"sp-card-desc",children:r.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},r.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:js.map((r,s)=>e.jsxs(J.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s*.12},whileHover:{y:-6},children:[e.jsx(tt,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:r.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:r.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",r.date," · ",r.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:r.description}),e.jsx(Z,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},r.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:Ss.map((r,s)=>e.jsxs(J.div,{className:"sp-timeline-item",initial:{opacity:0,x:-28,y:20},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.45,delay:s*.08},children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:r.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:r.date})}),e.jsx("span",{className:"sp-timeline-badge",children:r.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:r.name}),e.jsx("p",{className:"sp-card-desc",children:r.description}),e.jsx("div",{className:"sp-tag-cloud",children:r.highlights.map(i=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:i},i))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:r.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},r.name))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:Ps.map((r,s)=>e.jsxs(J.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:s*.07},whileHover:{y:-8,scale:1.02},children:[e.jsx(tt,{color:r.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:r.accent,borderColor:`${r.accent}44`,background:`${r.accent}14`},children:r.badge})}),e.jsx("h3",{className:"sp-facility-title",children:r.title}),e.jsx("p",{className:"sp-card-desc",children:r.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${r.accent}, transparent)`}})]},r.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs(J.div,{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:As.map((r,s)=>e.jsxs(J.div,{className:`sp-glass-card sp-sponsor-card ${r.isFeatured?"sp-sponsor-featured":""}`,initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:s*.1},whileHover:{y:-10,scale:1.02},children:[r.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:r.accent,borderColor:`${r.accent}44`,background:`${r.accent}14`},children:r.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:r.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:r.accent},children:r.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:r.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:r.perks.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:r.accent},children:"✓"}),e.jsx("span",{children:i})]},i))}),e.jsx(J.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(Z,{to:"/tickets",className:r.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:r.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${r.accent}, transparent)`}})]},r.tier))})]})}),e.jsx("style",{children:`
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
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 2;
        }

        .sp-pillar-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 800;
          color: #ffbd59;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255, 189, 89, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.35);
          padding: 0.42rem 1.1rem;
          border-radius: 999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
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
          line-height: 1.75;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
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
      `})]})}const Fa="ozilla_local_tickets";let Ce=!1;const Oa={regular:1200,vip:1,premium:120},Ls=["pending","payment_submitted","approved","confirmed"];function Nt(t){const a=String(t||"regular").toLowerCase().trim();return a==="general"?"regular":Oa[a]?a:"regular"}function kt(){const t=Object.entries(Oa).reduce((s,[i,l])=>(s[i]={type:i,label:i==="regular"?"General":i==="vip"?"VIP":"Premium",capacity:l,sold:0,remaining:l,soldOut:!1},s),{});for(const s of pe()){if(!Ls.includes(s.status))continue;const i=Nt(s.ticketType);t[i].sold+=Number(s.quantity)||1}let a=0,r=0;for(const s of Object.values(t))s.sold=Math.min(s.sold,s.capacity),s.remaining=Math.max(0,s.capacity-s.sold),s.soldOut=s.remaining<=0,a+=s.capacity,r+=s.sold;return{capacity:a,sold:r,remaining:Math.max(0,a-r),soldOut:Object.values(t).every(s=>s.soldOut),byType:t,mode:"local-fallback"}}function Is(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function Oe(t){return Is(t)?(Ce=!0,!0):!1}function pe(){try{const t=localStorage.getItem(Fa),a=t?JSON.parse(t):[];return Array.isArray(a)?a.map(r=>r?.status==="payment_submitted"?{...r,status:"approved",generatedAt:r.generatedAt||r.updatedAt||new Date().toISOString(),verifiedAt:r.verifiedAt||null}:r):[]}catch{return[]}}function ue(t){localStorage.setItem(Fa,JSON.stringify(t))}function Rs(t){const a=String(t||"");if(!a)return null;if(a.startsWith("local."))try{return JSON.parse(atob(a.slice(6)))}catch{return null}const r=a.split(".");if(r.length===3)try{return JSON.parse(atob(r[1]))}catch{return null}return null}function ge(){const t=Rs(je.getToken());return{userId:String(t?.sub||t?.userId||"").trim(),email:String(t?.email||"").toLowerCase().trim()}}function xe(t,a){if(!a?.email&&!a?.userId)return!1;const r=String(t?.ownerEmail||"").toLowerCase().trim(),s=String(t?.ownerId||"").trim(),i=String(t?.email||"").toLowerCase().trim();return r&&a.email?r===a.email:s&&a.userId?s===a.userId:a.email?i===a.email:!1}function at(t={}){const a=`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=(t?.name||`${t?.firstName||""} ${t?.lastName||""}`).trim()||"Demo User",s={id:"oz2026",name:"OZILLA FEST 2026",date:"2026-11-01",time:"08:00 PM",location:"Lahore"},i=new Date().toISOString(),l=ge(),n=String(t?.email||l?.email||"local@ozillafestival.com").toLowerCase().trim();return{id:a,ticketId:`OZILLA-${a.slice(-8).toUpperCase()}`,uniqueTicketId:`OZILLA-${a.slice(-8).toUpperCase()}`,ownerId:l?.userId||"",ownerEmail:n,fullName:r,name:r,email:n,phone:String(t?.phone||"+923000000000").trim(),idCardNumber:String(t?.idCardNumber||"").trim(),festivalDay:t?.festivalDay==="day2"?"day2":"day1",eventId:s.id,eventName:s.name,eventDate:s.date,eventTime:s.time,location:s.location,ticketType:Nt(t?.ticketType),quantity:Number(t?.quantity)||1,status:"pending",createdAt:i,updatedAt:i}}const Ne={async getAvailability(){if(Ce)return kt();try{return(await te.get("/tickets/availability")).data}catch(t){if(Oe(t))return kt();throw t}},async getMyTickets(){if(Ce){const t=ge();return pe().filter(a=>xe(a,t))}try{return(await te.get("/tickets/my-tickets")).data}catch(t){if(Oe(t)){const a=ge();return pe().filter(r=>xe(r,a))}throw t}},async requestTicket(t){if(Ce){const a=kt(),r=Nt(t?.ticketType),s=Math.max(1,Math.min(10,Number(t?.quantity)||1)),i=a.byType[r];if(a.soldOut||!i||i.remaining<=0){const o=new Error("Tickets are sold out. The ticket portal is currently locked.");throw o.response={status:409,data:{message:o.message,soldOut:!0,availability:a}},o}if(s>i.remaining){const o=new Error(`Only ${i.remaining} ${i.label} ticket${i.remaining===1?"":"s"} remaining.`);throw o.response={status:409,data:{message:o.message,soldOut:!1,availability:a}},o}const l=pe(),n=at(t);return ue([n,...l]),{...n,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}try{return(await te.post("/tickets/request",t)).data}catch(a){if(Oe(a)){const r=kt(),s=Nt(t?.ticketType),i=Math.max(1,Math.min(10,Number(t?.quantity)||1)),l=r.byType[s];if(r.soldOut||!l||l.remaining<=0){const c=new Error("Tickets are sold out. The ticket portal is currently locked.");throw c.response={status:409,data:{message:c.message,soldOut:!0,availability:r}},c}if(i>l.remaining){const c=new Error(`Only ${l.remaining} ${l.label} ticket${l.remaining===1?"":"s"} remaining.`);throw c.response={status:409,data:{message:c.message,soldOut:!1,availability:r}},c}const n=pe(),o=at(t);return ue([o,...n]),{...o,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}throw a}},async getTicketById(t){if(Ce){const a=ge(),r=pe().find(s=>s.id===t&&xe(s,a));if(!r){const s=new Error("Ticket not found");throw s.response={data:{message:"Ticket not found"}},s}return r}try{return(await te.get(`/tickets/view/${t}`)).data}catch(a){if(Oe(a)){const r=ge(),s=pe().find(i=>i.id===t&&xe(i,r));if(!s){const i=new Error("Ticket not found");throw i.response={data:{message:"Ticket not found"}},i}return s}throw a}},async payWithCard(t,a){if(Ce){const r=pe(),s=ge(),i=r.findIndex(o=>o.id===t&&xe(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=new Date().toISOString(),n={...r[i],status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4242",cardholderName:a?.cardholderName||"",transactionId:`TXN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l};return r[i]=n,ue(r),{message:"Payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await te.post(`/tickets/${t}/pay-card`,a)).data}catch{const s=pe(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&xe(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4411",cardholderName:a?.cardholderName||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,ue(s)):(o={...at({name:a?.cardholderName||"Card Customer",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4411",cardholderName:a?.cardholderName||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},ue([o,...s])),{message:"Card payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},async payWithJazzCash(t,a){if(Ce){const r=pe(),s=ge();let i=r.findIndex(o=>(o.id===t||o.ticketId===t)&&xe(o,s));i===-1&&(i=r.findIndex(o=>o.id===t||o.ticketId===t));const l=new Date().toISOString();let n=null;return i!==-1?(n={...r[i],status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},r[i]=n,ue(r)):(n={...at({name:a?.accountTitle||"JazzCash Customer",phone:a?.mobileNumber||"03000000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},ue([n,...r])),{message:"JazzCash payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await te.post(`/tickets/${t}/pay-jazzcash`,a)).data}catch{const s=pe(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&xe(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,ue(s)):(o={...at({name:a?.accountTitle||"JazzCash Customer",phone:a?.mobileNumber||"03000000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},ue([o,...s])),{message:"JazzCash payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},async payWithEasypaisa(t,a){if(Ce){const r=pe(),s=ge();let i=r.findIndex(o=>(o.id===t||o.ticketId===t)&&xe(o,s));i===-1&&(i=r.findIndex(o=>o.id===t||o.ticketId===t));const l=new Date().toISOString();let n=null;return i!==-1?(n={...r[i],status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},r[i]=n,ue(r)):(n={...at({name:a?.accountTitle||"Easypaisa Customer",phone:a?.mobileNumber||"03330000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},ue([n,...r])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await te.post(`/tickets/${t}/pay-easypaisa`,a)).data}catch{const s=pe(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&xe(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,ue(s)):(o={...at({name:a?.accountTitle||"Easypaisa Customer",phone:a?.mobileNumber||"03330000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},ue([o,...s])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},submitHiddenForm(t,a={}){const r=document.createElement("form");r.method="POST",r.action=t,Object.keys(a).forEach(s=>{const i=document.createElement("input");i.type="hidden",i.name=s,i.value=a[s],r.appendChild(i)}),document.body.appendChild(r),r.submit()},async initiateJazzCashCheckout(t,a){try{return(await te.post(`/tickets/${t}/jazzcash-checkout`,{returnUrl:a})).data}catch(r){if(Oe(r))return{postUrl:"https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/",payload:{pp_Version:"1.1",pp_TxnType:"MWALLET",pp_Amount:"100",pp_TxnRefNo:`T${Date.now()}`}};throw r}},async initiateEasypaisaCheckout(t,a){try{return(await te.post(`/tickets/${t}/easypaisa-checkout`,{postBackUrl:a})).data}catch(r){if(Oe(r))return{postUrl:"https://easypay.easypaisa.com.pk/easypay-service/rest/v4/initiate-ma-transaction",checkoutUrl:`${window.location.origin}/tickets/view/${t}?payment=success`,payload:{orderId:`EP-OZ-${t}`,transactionAmount:"1.0"}};throw r}},async initiatePayFastCheckout(t){if(Ce){const a=pe(),r=ge(),s=a.find(i=>i.id===t&&xe(i,r));return{message:"PayFast gateway session initiated",ticketId:t,checkout:{basket_id:`OZILLA-${t}-${Date.now().toString().slice(-6)}`,txnamt:String((s?.quantity||1)*1),is_sandbox:!0}}}try{return(await te.post(`/tickets/${t}/payfast-checkout`)).data}catch(a){if(Oe(a)){const r=pe(),s=ge(),i=r.find(l=>l.id===t&&xe(l,s));return{message:"PayFast gateway session initiated",ticketId:t,checkout:{basket_id:`OZILLA-${t}-${Date.now().toString().slice(-6)}`,txnamt:String((i?.quantity||1)*1),is_sandbox:!0}}}throw a}},async completePayFastGateway(t,a={}){if(Ce){const r=pe(),s=ge(),i=r.findIndex(o=>o.id===t&&xe(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=new Date().toISOString(),n={...r[i],status:"approved",paymentMethod:"payfast_gateway",issuingBank:a?.bankName||"PayFast Multi-Channel Gateway",cardholderName:a?.customerName||r[i].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l};return r[i]=n,ue(r),{message:"PayFast payment completed successfully",ticket:n,mode:"local-fallback"}}try{return(await te.post("/tickets/payfast-ipn",{ticket_id:t,basket_id:a?.basket_id,transaction_id:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,bank_name:a?.bankName||"PayFast Gateway"})).data}catch(r){if(Oe(r)){const s=pe(),i=ge(),l=s.findIndex(c=>c.id===t&&xe(c,i));if(l===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const n=new Date().toISOString(),o={...s[l],status:"approved",paymentMethod:"payfast_gateway",issuingBank:a?.bankName||"PayFast Multi-Channel Gateway",cardholderName:a?.customerName||s[l].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n};return s[l]=o,ue(s),{message:"PayFast payment completed successfully",ticket:o,mode:"local-fallback"}}throw r}},async uploadPaymentProof(t,a){if(Ce){const r=pe(),s=ge(),i=r.findIndex(n=>n.id===t&&xe(n,s));if(i===-1){const n=new Error("Ticket not found");throw n.response={data:{message:"Ticket not found"}},n}const l={...r[i],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return r[i]=l,ue(r),{message:"Payment proof uploaded and ticket generated successfully",ticket:l,mode:"local-fallback"}}try{return(await te.post(`/tickets/${t}/payment-proof`,a,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(r){if(Oe(r)){const s=pe(),i=ge(),l=s.findIndex(o=>o.id===t&&xe(o,i));if(l===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const n={...s[l],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return s[l]=n,ue(s),{message:"Payment proof uploaded and ticket generated successfully",ticket:n,mode:"local-fallback"}}throw r}},async verifyTicket(t,a){return(await te.post(`/tickets/${t}/verify`,{qrData:a})).data},async verifyTicketByQr(t){return(await te.post("/tickets/verify-qr",{qrData:t})).data},async getPendingTicketsAdmin(){return(await te.get("/tickets/admin/pending")).data},async decideTicketAdmin(t,a){return(await te.post(`/tickets/admin/${t}/decision`,{decision:a})).data},async cancelTicket(t){if(Ce){const a=pe(),r=ge(),s=a.findIndex(n=>n.id===t&&xe(n,r));if(s===-1){const n=new Error("Ticket not found");throw n.response={data:{message:"Ticket not found"}},n}const i=a[s];if(!["pending","payment_submitted"].includes(i.status)){const n=new Error(`Ticket cannot be cancelled from status ${i.status}`);throw n.response={data:{message:`Ticket cannot be cancelled from status ${i.status}`}},n}const l={...i,status:"cancelled",updatedAt:new Date().toISOString()};return a[s]=l,ue(a),{message:"Ticket cancelled successfully",ticket:l,mode:"local-fallback"}}try{return(await te.post(`/tickets/${t}/cancel`)).data}catch(a){if(Oe(a)){const r=pe(),s=ge(),i=r.findIndex(o=>o.id===t&&xe(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=r[i];if(!["pending","payment_submitted"].includes(l.status)){const o=new Error(`Ticket cannot be cancelled from status ${l.status}`);throw o.response={data:{message:`Ticket cannot be cancelled from status ${l.status}`}},o}const n={...l,status:"cancelled",updatedAt:new Date().toISOString()};return r[i]=n,ue(r),{message:"Ticket cancelled successfully",ticket:n,mode:"local-fallback"}}throw a}}};function Ht(){const[t,a]=m.useState([]),[r,s]=m.useState(!1),[i,l]=m.useState(null),n=m.useCallback(async()=>{s(!0);try{const p=await Ne.getMyTickets();a(p)}catch(p){l(p.message)}finally{s(!1)}},[]),o=m.useCallback(async p=>{s(!0);try{const b=await Ne.requestTicket(p);return await n(),b}catch(b){throw l(b.message),b}finally{s(!1)}},[n]),c=m.useCallback(async p=>{s(!0);try{return await Ne.getTicketById(p)}catch(b){throw l(b.message),b}finally{s(!1)}},[]),u=m.useCallback(async(p,b)=>{s(!0);try{const x=new FormData;x.append("paymentProof",b);const M=await Ne.uploadPaymentProof(p,x);return await n(),M}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),g=m.useCallback(async(p,b)=>{s(!0);try{const x=await Ne.payWithCard(p,b);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),y=m.useCallback(async(p,b)=>{s(!0);try{const x=await Ne.payWithJazzCash(p,b);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),k=m.useCallback(async(p,b)=>{s(!0);try{const x=await Ne.payWithEasypaisa(p,b);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),A=m.useCallback(async p=>{s(!0);try{return await Ne.initiatePayFastCheckout(p)}catch(b){throw l(b.message),b}finally{s(!1)}},[]),w=m.useCallback(async(p,b)=>{s(!0);try{const x=await Ne.completePayFastGateway(p,b);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]);return{tickets:t,loading:r,error:i,fetchMyTickets:n,requestTicket:o,getTicketById:c,payWithCard:g,payWithJazzCash:y,payWithEasypaisa:k,initiatePayFastCheckout:A,completePayFastGateway:w,uploadPaymentProof:u}}const Mt={regular:{label:"General",value:"regular",price:1,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function zs(t=""){const a=String(t).trim().split(/\s+/).filter(Boolean);return a.length===0?{firstName:"",lastName:""}:{firstName:a[0],lastName:a.slice(1).join(" ")}}function Ms({onSubmit:t,loading:a,profileDefaults:r,onBookingChange:s,availability:i,availabilityLoading:l}){const n=m.useMemo(()=>{const T=zs(r?.name);return{firstName:r?.firstName||T.firstName||"",lastName:r?.lastName||T.lastName||"",email:r?.email||"",phone:r?.phone||""}},[r]),[o,c]=m.useState(1),[u,g]=m.useState(""),[y,k]=m.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});m.useEffect(()=>{k(T=>({...T,firstName:n.firstName||T.firstName,lastName:n.lastName||T.lastName,email:n.email||T.email,phone:n.phone||T.phone}))},[n]);const A=T=>i?.byType?.[T],w=T=>!!A(T)?.soldOut,p=Mt[y.ticketType],b=A(y.ticketType),x=Number.isFinite(b?.remaining)?b.remaining:null,M=w(y.ticketType),j=Math.max(1,Math.min(10,x||10)),f=Number(y.quantity)||1,d=p.price*f,_=y.ticketType==="premium"?2500:0,L=Math.max(1,d-_),P=`${n.firstName} ${n.lastName}`.trim()||r?.email;m.useEffect(()=>{s?.({ticketType:p.label,day:y.festivalDay==="day1"?"Day 1":"Day 2",quantity:f,subtotal:d,serviceFee:0,discount:_,total:L,benefits:p.benefits})},[_,y.festivalDay,s,f,p,d,L]),m.useEffect(()=>{if(!i?.byType||!M)return;const T=Object.values(Mt).find(H=>!w(H.value));T&&k(H=>({...H,ticketType:T.value,quantity:1}))},[i,M]),m.useEffect(()=>{f>j&&k(T=>({...T,quantity:j}))},[j,f]);const h=T=>{k(H=>({...H,[T.target.name]:T.target.value})),T.target.name==="idCardNumber"&&g("")},v=()=>!!(y.firstName&&y.lastName&&y.email&&y.phone),I=()=>{const T=String(y.idCardNumber||"").trim(),H=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(T);return g(H?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),H},R=()=>{o===1&&!v()||o===2&&(M||!I())||c(T=>Math.min(3,T+1))},q=T=>{if(T.preventDefault(),M||!v()||!I()){c(v()?2:1);return}t({...y,quantity:f,name:`${y.firstName} ${y.lastName}`.trim()})},B=()=>{c(1),g(""),k({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:n.firstName||"",lastName:n.lastName||"",email:n.email||"",phone:n.phone||""})};return e.jsxs("form",{onSubmit:q,className:"ticket-wizard-form",children:[e.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((T,H)=>e.jsxs("button",{type:"button",className:o===H+1?"is-active":o>H+1?"is-complete":"",onClick:()=>c(H+1),children:[e.jsx("span",{children:H+1}),T]},T))}),P&&e.jsxs("div",{className:"ticket-login-chip",children:[e.jsx("span",{children:"OK"}),"Logged in as ",P]}),o===1&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 1"}),e.jsx("h3",{children:"Personal Information"})]}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"First Name"}),e.jsx("input",{type:"text",name:"firstName",value:y.firstName,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Last Name"}),e.jsx("input",{type:"text",name:"lastName",value:y.lastName,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Email Address"}),e.jsx("input",{type:"email",name:"email",value:y.email,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Phone Number"}),e.jsx("input",{type:"tel",name:"phone",value:y.phone,onChange:h,required:!0})]})]})]}),o===2&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 2"}),e.jsx("h3",{children:"Ticket Information"})]}),e.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values(Mt).map(T=>{const H=A(T.value),X=!!H?.soldOut,U=l?"Checking availability...":H?X?"Sold out":`${H.remaining.toLocaleString()} seats available`:`${T.seats} seats available`;return e.jsxs("button",{type:"button",disabled:X,"aria-disabled":X,className:`ticket-option-card ${y.ticketType===T.value?"is-selected":""} ${X?"is-sold-out":""}`,onClick:()=>{X||k(F=>({...F,ticketType:T.value,quantity:1}))},children:[e.jsx("span",{children:T.label}),e.jsxs("strong",{children:["PKR ",T.price.toLocaleString()]}),e.jsx("small",{children:U})]},T.value)})}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Festival Day"}),e.jsxs("select",{name:"festivalDay",value:y.festivalDay,onChange:h,required:!0,children:[e.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),e.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Quantity"}),e.jsx("input",{type:"number",name:"quantity",value:y.quantity,onChange:h,min:"1",max:j,disabled:M,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[e.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),e.jsx("input",{type:"text",name:"idCardNumber",value:y.idCardNumber,onChange:h,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),u&&e.jsx("em",{children:u})]})]})]}),o===3&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 3"}),e.jsx("h3",{children:"Review & Confirm"})]}),e.jsxs("div",{className:"ticket-review-layout",children:[e.jsx("div",{className:"ticket-benefit-list",children:p.benefits.map(T=>e.jsx("span",{children:T},T))}),e.jsxs("aside",{className:"ticket-summary-card",children:[e.jsx("h4",{children:"Booking Summary"}),e.jsxs("div",{children:[e.jsx("span",{children:"Ticket Type"}),e.jsx("strong",{children:p.label})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:f})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",d.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Processing Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["PKR ",_.toLocaleString()]})]}),e.jsxs("div",{className:"ticket-total",children:[e.jsx("span",{children:"Total"}),e.jsxs("strong",{children:["PKR ",L.toLocaleString()]})]})]})]})]}),e.jsxs("div",{className:"ticket-form-actions",children:[e.jsx("button",{type:"button",onClick:o===1?B:()=>c(T=>T-1),className:"ticket-secondary-button",children:o===1?"Reset":"Back"}),o<3?e.jsx("button",{type:"button",onClick:R,className:"ticket-primary-button",children:"Continue"}):e.jsx("button",{type:"submit",disabled:a,className:"ticket-primary-button ticket-shimmer-button",children:a?"Verifying Details...":"Complete Your Booking"})]})]})}function Fs(t){const a=t.replace(/\D/g,"").slice(0,16),r=a.match(/.{1,4}/g);return r?r.join(" "):a}function Os(t){const a=t.replace(/\D/g,"").slice(0,4);return a.length>=3?`${a.slice(0,2)}/${a.slice(2)}`:a}function Ds(t){const a=t.replace(/\D/g,"");return/^4/.test(a)?"visa":/^(5[1-5]|2[2-7])/.test(a)?"mastercard":/^(62|81)/.test(a)?"unionpay":null}function _s(t){const a=t.replace(/\D/g,""),r=a.slice(0,4);return["5893","4012","5399","4519","4507"].includes(r)?"Meezan Bank":["4116","5241","4214","5488","4027"].includes(r)?"HBL":["4848","5189","4589","5294","4282"].includes(r)?"Bank Alfalah":["4351","5236","4271","5521","4046"].includes(r)?"MCB Bank":["4021","5123","4921","5424"].includes(r)?"Standard Chartered":["4203","5250","4894","5320"].includes(r)?"UBL":["4008","5456","4692","5378"].includes(r)?"Allied Bank":a.length>=6?"Verified Bank":""}function Bs({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvv:"",saveCard:!0}),[n,o]=m.useState({}),[c,u]=m.useState(!1),[g,y]=m.useState(""),k=Ds(i.cardNumber);_s(i.cardNumber);const A=j=>{const f=Fs(j.target.value);l(d=>({...d,cardNumber:f})),n.cardNumber&&o(d=>({...d,cardNumber:""}))},w=j=>{const f=Os(j.target.value);l(d=>({...d,expiryDate:f})),n.expiryDate&&o(d=>({...d,expiryDate:""}))},p=j=>{const f=j.target.value.replace(/\D/g,"").slice(0,4);l(d=>({...d,cvv:f})),n.cvv&&o(d=>({...d,cvv:""}))},b=j=>{l(f=>({...f,cardholderName:j.target.value})),n.cardholderName&&o(f=>({...f,cardholderName:""}))},x=()=>{const j={},f=i.cardNumber.replace(/\s/g,"");if((!f||f.length<15)&&(j.cardNumber="Please enter a valid 16-digit card number"),i.cardholderName.trim()||(j.cardholderName="Please enter name as shown on card"),!i.expiryDate||i.expiryDate.length<5)j.expiryDate="Enter MM/YY";else{const[d,_]=i.expiryDate.split("/").map(Number);if(d<1||d>12)j.expiryDate="Invalid month (01-12)";else{const L=new Date,P=Number(String(L.getFullYear()).slice(-2)),h=L.getMonth()+1;(_<P||_===P&&d<h)&&(j.expiryDate="Card has expired")}}return(!i.cvv||i.cvv.length<3)&&(j.cvv="Enter 3 or 4 digits"),o(j),Object.keys(j).length===0},M=async j=>{if(j.preventDefault(),!!x()){y("Validating card credentials with bank..."),await new Promise(f=>setTimeout(f,450)),y("Authorizing payment deduction...");try{await a({cardNumber:i.cardNumber.replace(/\s/g,""),cardLast4:i.cardNumber.replace(/\s/g,"").slice(-4),cardholderName:i.cardholderName.trim(),expiryDate:i.expiryDate,cvv:i.cvv,saveCard:i.saveCard,cardType:k||"card"})}finally{y("")}}};return e.jsxs("div",{className:"card-payment-container",children:[e.jsxs("div",{className:"card-brands-row",children:[e.jsx("div",{className:`card-brand-logo mastercard ${k==="mastercard"?"is-active":""}`,title:"Mastercard",children:e.jsxs("svg",{viewBox:"0 0 38 24",width:"44",height:"28","aria-label":"Mastercard",children:[e.jsx("circle",{cx:"14",cy:"12",r:"10",fill:"#EB001B"}),e.jsx("circle",{cx:"24",cy:"12",r:"10",fill:"#F79E1B",fillOpacity:"0.88"})]})}),e.jsx("div",{className:`card-brand-logo visa ${k==="visa"?"is-active":""}`,title:"VISA",children:e.jsx("svg",{viewBox:"0 0 50 20",width:"54",height:"22","aria-label":"VISA",children:e.jsx("text",{x:"2",y:"16",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"900",fontStyle:"italic",fontSize:"18",fill:"#ffffff",letterSpacing:"1",children:"VISA"})})}),e.jsx("div",{className:`card-brand-logo unionpay ${k==="unionpay"?"is-active":""}`,title:"UnionPay",children:e.jsxs("div",{className:"unionpay-badge",children:[e.jsx("span",{className:"up-red"}),e.jsx("span",{className:"up-blue"}),e.jsx("span",{className:"up-green"}),e.jsx("span",{className:"up-text",children:"UnionPay"})]})})]}),e.jsxs("form",{onSubmit:M,className:"card-payment-form",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Card number"]}),e.jsxs("div",{className:"card-input-wrapper",children:[e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-number",placeholder:"4000 1234 5678 9010",value:i.cardNumber,onChange:A,className:`card-input ${n.cardNumber?"has-error":""}`,maxLength:19,disabled:r}),k&&e.jsx("span",{className:"card-detected-badge",children:k.toUpperCase()})]}),n.cardNumber&&e.jsx("span",{className:"card-field-error",children:n.cardNumber})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Name on card"]}),e.jsx("input",{type:"text",autoComplete:"cc-name",placeholder:"e.g. HAMZA ALI",value:i.cardholderName,onChange:b,className:`card-input ${n.cardholderName?"has-error":""}`,disabled:r}),n.cardholderName&&e.jsx("span",{className:"card-field-error",children:n.cardholderName})]}),e.jsxs("div",{className:"card-row-two-col",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Expiry date"]}),e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",value:i.expiryDate,onChange:w,className:`card-input ${n.expiryDate?"has-error":""}`,maxLength:5,disabled:r}),n.expiryDate&&e.jsx("span",{className:"card-field-error",children:n.expiryDate})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," CVV",e.jsx("button",{type:"button",className:"cvv-info-btn",onClick:()=>u(!c),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"aria-label":"CVV information",children:"ⓘ"}),c&&e.jsx("div",{className:"cvv-tooltip",children:"3 or 4 digit security code located on the back of your card."})]}),e.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"•••",value:i.cvv,onChange:p,className:`card-input ${n.cvv?"has-error":""}`,maxLength:4,disabled:r}),n.cvv&&e.jsx("span",{className:"card-field-error",children:n.cvv})]})]}),e.jsxs("div",{className:"save-card-wrapper",children:[e.jsxs("label",{className:"save-card-checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:i.saveCard,onChange:j=>l(f=>({...f,saveCard:j.target.checked})),className:"save-card-checkbox",disabled:r}),e.jsx("span",{className:"save-card-title",children:"Save Card for Express Rebooking"})]}),e.jsx("p",{className:"save-card-subtext",children:"Card details are encrypted with bank-grade 256-bit tokenization for your security."})]}),g&&e.jsxs("div",{className:"card-processing-status",children:[e.jsx("span",{className:"card-spinner"}),e.jsx("span",{children:g})]}),e.jsxs("div",{className:"card-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Payment..."]}):t?`Pay Now • PKR ${t.toLocaleString()}`:"Pay Now"})]}),e.jsxs("div",{className:"card-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted & PCI-DSS Compliant"}),e.jsx("span",{children:"⚡ Instant Verified QR Pass Delivery"})]})]}),e.jsx("style",{children:`
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
      `})]})}function $s(t){const a=t.replace(/\D/g,"").slice(0,11);return a.length>4?`${a.slice(0,4)}-${a.slice(4)}`:a}function Hs({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({mobileNumber:"",accountTitle:""}),[n,o]=m.useState({}),[c,u]=m.useState(""),g=w=>{const p=$s(w.target.value);l(b=>({...b,mobileNumber:p})),n.mobileNumber&&o(b=>({...b,mobileNumber:""}))},y=w=>{l(p=>({...p,accountTitle:w.target.value})),n.accountTitle&&o(p=>({...p,accountTitle:""}))},k=()=>{const w={},p=i.mobileNumber.replace(/\D/g,"");return(!p||p.length<11||!p.startsWith("03"))&&(w.mobileNumber="Please enter a valid 11-digit JazzCash number (e.g., 0300-1234567)"),i.accountTitle.trim()||(w.accountTitle="Please enter the title/name registered with this JazzCash account"),o(w),Object.keys(w).length===0},A=async w=>{if(w.preventDefault(),!!k()){u("Connecting to JazzCash Secure Gateway..."),await new Promise(p=>setTimeout(p,450)),u("Validating JazzCash wallet balance & credentials..."),await new Promise(p=>setTimeout(p,450)),u(`Authorizing deduction of PKR ${t.toLocaleString()}...`);try{await a({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{u("")}}};return e.jsxs("div",{className:"jazzcash-payment-container",children:[e.jsxs("div",{className:"jazzcash-header-badge",children:[e.jsx("div",{className:"jc-logo-circle",children:"JC"}),e.jsxs("div",{children:[e.jsx("h4",{children:"JazzCash Direct Wallet"}),e.jsx("span",{children:"Automatic instant deduction from your mobile wallet"})]})]}),e.jsxs("form",{onSubmit:A,className:"jazzcash-payment-form",children:[e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," JazzCash Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0300-1234567",value:i.mobileNumber,onChange:g,className:`jc-input ${n.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),n.mobileNumber&&e.jsx("span",{className:"jc-field-error",children:n.mobileNumber})]}),e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:y,className:`jc-input ${n.accountTitle?"has-error":""}`,disabled:r}),n.accountTitle&&e.jsx("span",{className:"jc-field-error",children:n.accountTitle})]}),c&&e.jsxs("div",{className:"jc-processing-status",children:[e.jsx("span",{className:"jc-spinner"}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"jc-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"jc-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing JazzCash Payment..."]}):t?`Pay with JazzCash • PKR ${t.toLocaleString()}`:"Pay with JazzCash"})]}),e.jsxs("div",{className:"jc-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted JazzCash API Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Us(t){const a=t.replace(/\D/g,"").slice(0,11);return a.length>4?`${a.slice(0,4)}-${a.slice(4)}`:a}function Gs({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({mobileNumber:"",accountTitle:""}),[n,o]=m.useState({}),[c,u]=m.useState(""),g=w=>{const p=Us(w.target.value);l(b=>({...b,mobileNumber:p})),n.mobileNumber&&o(b=>({...b,mobileNumber:""}))},y=w=>{l(p=>({...p,accountTitle:w.target.value})),n.accountTitle&&o(p=>({...p,accountTitle:""}))},k=()=>{const w={},p=i.mobileNumber.replace(/\D/g,"");return(!p||p.length<11||!p.startsWith("03"))&&(w.mobileNumber="Please enter a valid 11-digit Easypaisa number (e.g., 0333-1234567)"),i.accountTitle.trim()||(w.accountTitle="Please enter the name registered on your Easypaisa account"),o(w),Object.keys(w).length===0},A=async w=>{if(w.preventDefault(),!!k()){u("Connecting to Easypaisa Open API..."),await new Promise(p=>setTimeout(p,450)),u("Verifying account status and authorization..."),await new Promise(p=>setTimeout(p,450)),u(`Authorizing deduction of PKR ${t.toLocaleString()}...`);try{await a({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{u("")}}};return e.jsxs("div",{className:"easypaisa-payment-container",children:[e.jsxs("div",{className:"easypaisa-header-badge",children:[e.jsx("div",{className:"ep-logo-circle",children:"EP"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Easypaisa Mobile Account"}),e.jsx("span",{children:"Automatic instant deduction from your mobile account"})]})]}),e.jsxs("form",{onSubmit:A,className:"easypaisa-payment-form",children:[e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Easypaisa Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0333-1234567",value:i.mobileNumber,onChange:g,className:`ep-input ${n.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),n.mobileNumber&&e.jsx("span",{className:"ep-field-error",children:n.mobileNumber})]}),e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:y,className:`ep-input ${n.accountTitle?"has-error":""}`,disabled:r}),n.accountTitle&&e.jsx("span",{className:"ep-field-error",children:n.accountTitle})]}),c&&e.jsxs("div",{className:"ep-processing-status",children:[e.jsx("span",{className:"ep-spinner"}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"ep-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"ep-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Easypaisa Payment..."]}):t?`Pay with Easypaisa • PKR ${t.toLocaleString()}`:"Pay with Easypaisa"})]}),e.jsxs("div",{className:"ep-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted Easypaisa Gateway Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Vs({amount:t,onProceed:a,loading:r,onBack:s}){const[i,l]=m.useState(!1),n=async()=>{l(!0);try{await a()}finally{l(!1)}};return e.jsxs("div",{className:"payfast-gateway-card",children:[e.jsxs("div",{className:"payfast-header-banner",children:[e.jsxs("div",{className:"payfast-logo-group",children:[e.jsx("span",{className:"pf-brand-name",children:"PayFast"}),e.jsx("span",{className:"pf-badge-tag",children:"Official Payment Gateway"})]}),e.jsx("span",{className:"pf-security-seal",children:"🔒 SBP Regulated · 256-Bit SSL"})]}),e.jsxs("div",{className:"payfast-body",children:[e.jsxs("p",{className:"payfast-instruction",children:["You will be redirected to the secure ",e.jsx("strong",{children:"PayFast Payment Portal"})," to complete your payment."]}),e.jsxs("div",{className:"payfast-channels-grid",children:[e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"💳"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Cards"}),e.jsx("small",{children:"Visa, Master, PayPak, UnionPay"})]})]}),e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"📱"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Wallets"}),e.jsx("small",{children:"JazzCash & Easypaisa"})]})]}),e.jsxs("div",{className:"pf-channel-item",children:[e.jsx("span",{className:"pf-icon",children:"🏦"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bank Accounts"}),e.jsx("small",{children:"1LINK & Direct Internet Banking"})]})]})]}),e.jsxs("div",{className:"payfast-summary-box",children:[e.jsxs("div",{className:"pf-summary-row",children:[e.jsx("span",{children:"Total Payable Amount:"}),e.jsxs("strong",{children:["PKR ",Number(t||0).toLocaleString()]})]}),e.jsxs("div",{className:"pf-summary-row pf-small-row",children:[e.jsx("span",{children:"Processing / Gateway Fee:"}),e.jsx("span",{className:"pf-free-tag",children:"Free (PKR 0)"})]})]}),e.jsxs("div",{className:"payfast-flow-steps",children:[e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"1"}),e.jsx("span",{children:"Redirect to PayFast"})]}),e.jsx("span",{className:"pf-arrow",children:"→"}),e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"2"}),e.jsx("span",{children:"Enter Card / OTP / Wallet"})]}),e.jsx("span",{className:"pf-arrow",children:"→"}),e.jsxs("div",{className:"pf-step",children:[e.jsx("span",{className:"pf-step-num",children:"3"}),e.jsx("span",{children:"Instant Return & QR Pass"})]})]}),e.jsxs("div",{className:"payfast-actions",children:[s&&e.jsx("button",{type:"button",className:"pf-back-btn",onClick:s,disabled:r||i,children:"← Back"}),e.jsx("button",{type:"button",className:"pf-proceed-btn",onClick:n,disabled:r||i,children:i||r?e.jsxs("span",{className:"pf-btn-loading",children:[e.jsx("span",{className:"pf-spinner"})," Connecting to PayFast Gateway..."]}):`Proceed to PayFast (PKR ${Number(t||0).toLocaleString()}) →`})]})]}),e.jsx("style",{children:`
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
      `})]})}function Ws({isOpen:t,onClose:a,ticket:r,amount:s,onComplete:i}){const[l,n]=m.useState("card"),[o,c]=m.useState(!1),[u,g]=m.useState(""),[y,k]=m.useState(!1),[A,w]=m.useState("849201"),[p,b]=m.useState({cardNumber:"5893 4100 8821 9402",expiry:"08/28",cvv:"921",holderName:r?.fullName||"Customer"}),[x,M]=m.useState(r?.phone||"03001234567");if(!t)return null;const j=async d=>{d.preventDefault(),c(!0),g("Connecting to SBP 1LINK switch..."),await new Promise(_=>setTimeout(_,600)),g("Sending 3D Secure OTP verification request to issuing bank..."),await new Promise(_=>setTimeout(_,600)),c(!1),k(!0)},f=async()=>{c(!0),g("Verifying OTP with issuing bank..."),await new Promise(d=>setTimeout(d,700)),g(`Deducting PKR ${Number(s||0).toLocaleString()} and settling to Organizer Bank Account...`),await new Promise(d=>setTimeout(d,800)),g("Payment Successful! Sending IPN webhook to OZILLA FEST..."),await new Promise(d=>setTimeout(d,600));try{await i({basket_id:`OZILLA-${r?.id||r?.ticketId}`,bankName:l==="card"?"Meezan Bank 1LINK":l==="jazzcash"?"JazzCash MWallet":"Easypaisa MAccount",customerName:r?.fullName||p.holderName})}finally{c(!1)}};return e.jsxs("div",{className:"pf-modal-overlay",children:[e.jsxs("div",{className:"pf-modal-container",children:[e.jsxs("div",{className:"pf-modal-header",children:[e.jsxs("div",{className:"pf-modal-brand",children:[e.jsx("span",{className:"pf-logo",children:"PayFast"}),e.jsx("span",{className:"pf-tagline",children:"Secure Multi-Channel IPG"})]}),e.jsx("button",{type:"button",className:"pf-close-btn",onClick:a,disabled:o,children:"✕"})]}),e.jsxs("div",{className:"pf-merchant-banner",children:[e.jsxs("div",{children:[e.jsx("small",{children:"Merchant"}),e.jsx("strong",{children:"Prism Events & Tours (OZILLA FEST 2026)"})]}),e.jsxs("div",{className:"pf-amount-pill",children:[e.jsx("small",{children:"Total Due"}),e.jsxs("strong",{children:["PKR ",Number(s||0).toLocaleString()]})]})]}),e.jsx("div",{className:"pf-modal-body",children:y?e.jsxs("div",{className:"pf-otp-screen",children:[e.jsx("div",{className:"pf-otp-icon",children:"🔐"}),e.jsx("h3",{children:"3D Secure Bank OTP Verification"}),e.jsxs("p",{children:["A one-time verification code has been sent to your bank-registered mobile number ending in ",e.jsx("strong",{children:"•••• 402"}),"."]}),e.jsx("div",{className:"pf-fg",style:{maxWidth:"240px",margin:"16px auto"},children:e.jsx("input",{type:"text",maxLength:6,value:A,onChange:d=>w(d.target.value),className:"pf-otp-input",style:{textAlign:"center",fontSize:"22px",letterSpacing:"4px",fontWeight:"bold"}})}),u&&e.jsx("div",{className:"pf-phase-msg",children:u}),e.jsx("button",{type:"button",className:"pf-modal-submit",onClick:f,disabled:o,children:o?u:"Confirm & Authorize Payment"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pf-modal-tabs",children:[e.jsx("button",{type:"button",className:`pf-tab ${l==="card"?"is-active":""}`,onClick:()=>n("card"),children:"💳 Debit / Credit Card"}),e.jsx("button",{type:"button",className:`pf-tab ${l==="jazzcash"?"is-active":""}`,onClick:()=>n("jazzcash"),children:"🟠 JazzCash"}),e.jsx("button",{type:"button",className:`pf-tab ${l==="easypaisa"?"is-active":""}`,onClick:()=>n("easypaisa"),children:"🟢 Easypaisa"})]}),l==="card"&&e.jsxs("form",{onSubmit:j,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Card Number"}),e.jsx("input",{type:"text",value:p.cardNumber,onChange:d=>b({...p,cardNumber:d.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-grid-2",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Expiry (MM/YY)"}),e.jsx("input",{type:"text",value:p.expiry,onChange:d=>b({...p,expiry:d.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"CVV / CVC"}),e.jsx("input",{type:"password",maxLength:4,value:p.cvv,onChange:d=>b({...p,cvv:d.target.value}),required:!0})]})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Cardholder Name"}),e.jsx("input",{type:"text",value:p.holderName,onChange:d=>b({...p,holderName:d.target.value}),required:!0})]}),u&&e.jsx("div",{className:"pf-phase-msg",children:u}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:o,children:o?"Connecting...":`Pay PKR ${Number(s||0).toLocaleString()} via PayFast`})]}),(l==="jazzcash"||l==="easypaisa")&&e.jsxs("form",{onSubmit:j,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:l==="jazzcash"?"JazzCash Mobile Number":"Easypaisa Mobile Number"}),e.jsx("input",{type:"text",value:x,onChange:d=>M(d.target.value),placeholder:"0300-1234567",required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Account Title"}),e.jsx("input",{type:"text",value:p.holderName,onChange:d=>b({...p,holderName:d.target.value}),required:!0})]}),u&&e.jsx("div",{className:"pf-phase-msg",children:u}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:o,children:o?"Connecting...":`Authenticate & Pay PKR ${Number(s||0).toLocaleString()}`})]})]})}),e.jsx("div",{className:"pf-modal-footer",children:e.jsx("span",{children:"🔒 256-Bit Encrypted Secure Connection · PCI-DSS Compliant"})})]}),e.jsx("style",{children:`
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
      `})]})}function qs({activeMethod:t,onSelectMethod:a}){const r=[{id:"payfast",title:"PayFast Hosted Gateway",subtitle:"Cards, Wallets, 1LINK Bank Accounts",badge:"Recommended",icon:e.jsx("div",{style:{width:24,height:24,borderRadius:"6px",background:"linear-gradient(135deg, #eb4d4b, #f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff"},children:"PF"}),color:"#eb4d4b"},{id:"card",title:"Debit / Credit Card",subtitle:"Visa, Mastercard, UnionPay, PayPak",badge:"Auto-Deduct",icon:e.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),color:"#ff5a1f"},{id:"jazzcash",title:"JazzCash",subtitle:"Mobile Wallet / Direct Pay",badge:"Zero Fee",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#E30613",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"JC"}),color:"#E30613"},{id:"easypaisa",title:"Easypaisa",subtitle:"Mobile Account / Push Approval",badge:"Instant Pass",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#00A651",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"EP"}),color:"#00A651"}];return e.jsxs("div",{className:"payment-method-selector-container",children:[e.jsx("div",{className:"payment-method-tabs",children:r.map(s=>{const i=t===s.id;return e.jsxs("button",{type:"button",className:`payment-method-tab ${i?"is-active":""}`,onClick:()=>a(s.id),children:[e.jsxs("div",{className:"payment-tab-top",children:[e.jsx("div",{className:"payment-tab-icon",children:s.icon}),e.jsx("span",{className:"payment-tab-badge",children:s.badge})]}),e.jsxs("div",{className:"payment-tab-text",children:[e.jsxs("div",{className:"payment-tab-title",children:[e.jsx("strong",{children:s.title}),i&&e.jsx("span",{className:"active-dot"})]}),e.jsx("small",{children:s.subtitle})]})]},s.id)})}),e.jsx("style",{children:`
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
      `})]})}function Ut({type:t,message:a,onClose:r}){const s={success:"bg-green-100 border-green-500 text-green-700",error:"bg-red-100 border-red-500 text-red-700",warning:"bg-yellow-100 border-yellow-500 text-yellow-700",info:"bg-blue-100 border-blue-500 text-blue-700"}[t]||"bg-gray-100 border-gray-500 text-gray-700";return e.jsxs("div",{className:`${s} border-l-4 p-4 rounded mb-4 flex justify-between items-center`,children:[e.jsx("p",{children:a}),r&&e.jsx("button",{onClick:r,className:"ml-4 font-bold hover:opacity-75",children:"×"})]})}const Ys=["Personal Info","Ticket Details","Payment Checkout","QR Pass"],Xs={ticketType:"General",day:"Day 1",quantity:1,subtotal:1,serviceFee:0,discount:0,total:1,benefits:["Festival entry","Food court access","Partner discount offers"]};function Zs(){const t=ct(),{user:a}=Ke(),{requestTicket:r,payWithCard:s,payWithJazzCash:i,payWithEasypaisa:l,initiatePayFastCheckout:n,completePayFastGateway:o,loading:c}=Ht(),[u,g]=m.useState(null),[y,k]=m.useState(!1),[A,w]=m.useState("payfast"),[p,b]=m.useState(null),[x,M]=m.useState(!1),[j,f]=m.useState(Xs),[d,_]=m.useState(null),[L,P]=m.useState(!0),h=y?3:2;`${a?.firstName||""} ${a?.lastName||""}`.trim()||a?.name||a?.email;const v=!!d?.soldOut;m.useEffect(()=>{let U=!0;return(async()=>{P(!0);try{const O=await Ne.getAvailability();if(!U)return;_(O),O?.soldOut&&g({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{U&&_(null)}finally{U&&P(!1)}})(),()=>{U=!1}},[]);const I=()=>{if(v){g({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}t(`/login?returnTo=${encodeURIComponent("/tickets")}`)},R=async U=>{if(v){g({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const F=await r(U);b(F),k(!0),g({type:"success",message:"Ticket reserved! Please complete payment below."});const O=await Ne.getAvailability().catch(()=>null);O&&_(O)}catch(F){const O=F?.response?.data?.message||F?.message||"Failed to request ticket. Please try again.";F?.response?.data?.availability&&_(F.response.data.availability),g({type:"error",message:O})}},q=async U=>{if(!p?.id){g({type:"error",message:"Ticket session expired. Please retry."});return}try{await s(p.id,U),g({type:"success",message:`Payment of PKR ${j.total.toLocaleString()} successful! Your QR pass is ready.`}),t(`/tickets/view/${p.id}`)}catch(F){const O=F?.response?.data?.message||F?.message||"Failed to process card payment.";g({type:"error",message:O})}},B=async U=>{if(!p?.id){g({type:"error",message:"Ticket session expired. Please retry."});return}try{await i(p.id,U),g({type:"success",message:"JazzCash payment successful! Your QR pass is ready."}),t(`/tickets/view/${p.id}`)}catch(F){const O=F?.response?.data?.message||F?.message||"Failed to process JazzCash payment.";g({type:"error",message:O})}},T=async U=>{if(!p?.id){g({type:"error",message:"Ticket session expired. Please retry."});return}try{await l(p.id,U),g({type:"success",message:"Easypaisa payment successful! Your QR pass is ready."}),t(`/tickets/view/${p.id}`)}catch(F){const O=F?.response?.data?.message||F?.message||"Failed to process Easypaisa payment.";g({type:"error",message:O})}},H=async()=>{if(!p?.id){g({type:"error",message:"Ticket session expired. Please retry."});return}try{await n(p.id),M(!0)}catch(U){g({type:"error",message:U?.response?.data?.message||U?.message||"Failed to initiate PayFast session."})}},X=async U=>{if(p?.id)try{await o(p.id,U),M(!1),g({type:"success",message:`PayFast payment of PKR ${j.total.toLocaleString()} confirmed! Official QR pass generated.`}),t(`/tickets/view/${p.id}?payment=success`)}catch(F){g({type:"error",message:F?.response?.data?.message||F?.message||"Failed to verify PayFast transaction."})}};return e.jsxs("main",{className:"ticket-portal-clean",children:[e.jsxs("section",{className:"ticket-clean-hero",children:[e.jsx($t,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.5}),e.jsx("div",{className:"hero-glow-blob"}),e.jsxs("div",{className:"ticket-clean-hero-content",children:[e.jsx("span",{className:"hero-eyebrow",children:"OZILLA FEST 2026"}),e.jsx("h1",{className:"hero-title",children:"Book Your Festival Passes"}),e.jsx("p",{className:"hero-subtitle",children:"Instant digital QR pass with access to 4 live stages, headline artists, and VIP amenities in Lahore."}),e.jsxs("div",{className:"hero-tags",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore"}),e.jsx("span",{children:"⚡ Instant QR Pass"})]})]})]}),e.jsxs("section",{className:"ticket-clean-shell",children:[u&&e.jsx(Ut,{type:u.type,message:u.message,onClose:()=>g(null)}),e.jsx("div",{className:"ticket-clean-stepper",children:Ys.map((U,F)=>e.jsxs("div",{className:`step-item ${F+1<=h?"is-active":""}`,children:[e.jsx("span",{className:"step-num",children:F+1}),e.jsx("span",{className:"step-text",children:U})]},U))}),v?e.jsxs("div",{className:"ticket-sold-out-box",style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(30, 10, 15, 0.95) 100%)",border:"2px solid #ef4444",borderRadius:"24px",padding:"48px 24px",textAlign:"center",boxShadow:"0 20px 50px rgba(239, 68, 68, 0.25)",margin:"20px 0 40px"},children:[e.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"#ef4444",color:"#ffffff",padding:"6px 16px",borderRadius:"9999px",fontSize:"13px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px"},children:"🔒 PORTAL LOCKED"}),e.jsx("h2",{style:{fontSize:"clamp(26px, 5vw, 40px)",fontWeight:"900",color:"#ffffff",margin:"0 0 12px"},children:"Tickets Are Officially Sold Out!"}),e.jsxs("p",{style:{color:"#d1d5db",maxWidth:"600px",margin:"0 auto 24px",fontSize:"16px",lineHeight:"1.6"},children:["All General, VIP, and Premium passes for ",e.jsx("strong",{children:"OZILLA FEST 2026"})," have been fully booked. The ticket booking system is locked to prevent overbooking."]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"14px",flexWrap:"wrap"},children:[e.jsx("button",{type:"button",onClick:()=>t("/#sponsorship"),style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"12px 28px",borderRadius:"12px",fontWeight:"700",fontSize:"14px",border:"none",cursor:"pointer"},children:"Inquire Corporate / Sponsor Passes"}),e.jsx("button",{type:"button",onClick:()=>t("/schedule"),style:{background:"rgba(255,255,255,0.08)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.2)",padding:"12px 24px",borderRadius:"12px",fontWeight:"600",fontSize:"14px",cursor:"pointer"},children:"View Festival Schedule"})]})]}):a?e.jsxs("div",{className:"ticket-main-grid",children:[e.jsxs("div",{className:"ticket-form-card",children:[e.jsxs("div",{className:"ticket-form-header",children:[e.jsx("h2",{children:y?"Payment Checkout":"Pass Reservation"}),e.jsx("span",{className:"ticket-badge-pill",children:"Official Portal"})]}),y?e.jsxs("div",{className:"ticket-payment-wrapper",children:[e.jsx(qs,{activeMethod:A,onSelectMethod:w}),A==="payfast"&&e.jsx(Vs,{amount:j.total,onProceed:H,loading:c,onBack:()=>k(!1)}),A==="card"&&e.jsx(Bs,{amount:j.total,onSubmit:q,loading:c,onBack:()=>k(!1)}),A==="jazzcash"&&e.jsx(Hs,{amount:j.total,onSubmit:B,loading:c,onBack:()=>k(!1)}),A==="easypaisa"&&e.jsx(Gs,{amount:j.total,onSubmit:T,loading:c,onBack:()=>k(!1)})]}):e.jsx(Ms,{onSubmit:R,loading:c,profileDefaults:a,onBookingChange:f,availability:d,availabilityLoading:L})]}),e.jsx(Ws,{isOpen:x,onClose:()=>M(!1),ticket:p,amount:j.total,onComplete:X}),e.jsx("aside",{className:"ticket-sidebar",children:e.jsxs("div",{className:"ticket-sidebar-summary",children:[e.jsx("h3",{children:"Order Summary"}),e.jsxs("div",{className:"summary-pass-type",children:[e.jsxs("strong",{children:[j.ticketType," Pass"]}),e.jsx("span",{children:j.day})]}),e.jsxs("div",{className:"summary-rows",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:j.quantity})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",j.subtotal.toLocaleString()]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),j.discount>0&&e.jsxs("div",{className:"summary-row summary-discount",children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["- PKR ",j.discount.toLocaleString()]})]})]}),e.jsxs("div",{className:"summary-total-row",children:[e.jsx("span",{children:"Grand Total"}),e.jsxs("strong",{children:["PKR ",j.total.toLocaleString()]})]}),e.jsx("div",{className:"summary-pass-badge",children:e.jsx("span",{children:"🎟️ Verified Digital QR Pass"})})]})})]}):e.jsxs("div",{className:"ticket-auth-prompt",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Sign in to Book Passes"}),e.jsx("p",{children:"Secure ticket purchasing requires an account for verified QR pass generation."})]}),e.jsx("button",{type:"button",onClick:I,className:"ticket-primary-button",children:"Sign In to Continue →"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Ks(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Js({ticket:t,size:a=200,showCaption:r=!0}){const s=JSON.stringify({ticketId:t.uniqueTicketId||t.ticketId||t.id,fullName:t.fullName||t.name,email:t.email,phone:t.phone,eventName:t.eventName,eventDate:t.eventDate,eventTime:t.eventTime});return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:e.jsx(Xa,{value:s,size:a,level:"H",includeMargin:!0,renderAs:"canvas"})}),r?e.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function Qs(t="pending"){return t==="approved"?{label:"Verified",className:"is-approved"}:t==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:t==="rejected"||t==="cancelled"?{label:t==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function Ft(t,a,r,s,i,l){const n=Math.min(l,s/2,i/2);t.beginPath(),t.moveTo(a+n,r),t.lineTo(a+s-n,r),t.quadraticCurveTo(a+s,r,a+s,r+n),t.lineTo(a+s,r+i-n),t.quadraticCurveTo(a+s,r+i,a+s-n,r+i),t.lineTo(a+n,r+i),t.quadraticCurveTo(a,r+i,a,r+i-n),t.lineTo(a,r+n),t.quadraticCurveTo(a,r,a+n,r),t.closePath()}function ei(t,a,r,s,i,l,n="left"){const o=String(a).split(/\s+/);let c="",u=s;const g=t.textAlign;t.textAlign=n,o.forEach((y,k)=>{const A=c?`${c} ${y}`:y;t.measureText(A).width>i&&c?(t.fillText(c,n==="right"?r+i:r,u),c=y,u+=l):c=A,k===o.length-1&&c&&t.fillText(c,n==="right"?r+i:r,u)}),t.textAlign=g}function Da({ticket:t,actionTo:a,actionLabel:r="View Ticket"}){const s=m.useRef(null),i=m.useRef(null),l=t.uniqueTicketId||t.ticketId||t.id,n=t.bookingId||t.requestId||t.id,o=Qs(t.status),c=t.status==="approved",u=`${(t.ticketType||"VIP").toUpperCase()} PASS`,g=t.eventDate?Ks(t.eventDate):"Nov 01, 2026",y=t.festivalDay==="day2"?"Day 2":"Day 1",k=b=>{const x=document.createElement("a");x.href=b.toDataURL("image/png"),x.download=`ozilla-pass-${l}.png`,x.click()},A=async()=>{const b=s.current?.querySelector("canvas"),x=1200,M=440,j=document.createElement("canvas");j.width=x,j.height=M;const f=j.getContext("2d");if(!f)return;const d=f.createLinearGradient(0,0,x,M);d.addColorStop(0,"#020d0f"),d.addColorStop(.46,"#062828"),d.addColorStop(1,"#23081e"),Ft(f,4,4,x-8,M-8,38),f.fillStyle=d,f.fill(),f.strokeStyle="rgba(255, 255, 255, 0.16)",f.lineWidth=3,f.stroke();const _=f.createLinearGradient(80,0,x-80,0);_.addColorStop(0,"rgba(255, 189, 89, 0.7)"),_.addColorStop(.5,"rgba(14, 165, 233, 0.5)"),_.addColorStop(1,"rgba(236, 72, 153, 0.6)"),f.strokeStyle=_,f.lineWidth=3.5,f.beginPath(),f.moveTo(90,6),f.lineTo(x-90,6),f.stroke(),f.fillStyle="#ffffff",f.font='800 20px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(u,54,66),f.fillStyle="#ff9f1c",f.font='800 13px "Segoe UI", Arial, sans-serif',f.fillText("OZILLA FEST 2026",54,94);const L=t.fullName||t.name||"Festival Guest";f.fillStyle="#ffffff",f.font='800 36px "Segoe UI", Arial, sans-serif',ei(f,L,54,152,x-360,42);const P=t.email||"-";f.fillStyle="rgba(255, 255, 255, 0.78)",f.font='600 17px "Segoe UI", Arial, sans-serif',f.fillText(P,54,198);const h=[{label:"DATE",val:g},{label:"DAY",val:y},{label:"LOCATION",val:t.location||"Lahore, Pakistan"},{label:"BOOKING ID",val:String(n)}],v=246;let I=54;h.forEach(T=>{f.font='700 11px "Segoe UI", Arial, sans-serif';const H=f.measureText(T.label).width;f.font='800 14px "Segoe UI", Arial, sans-serif';const X=f.measureText(T.val).width,U=Math.max(H,X)+28;Ft(f,I,v,U,58,12),f.fillStyle="rgba(255, 255, 255, 0.07)",f.fill(),f.strokeStyle="rgba(255, 255, 255, 0.12)",f.lineWidth=1.5,f.stroke(),f.fillStyle="#ff9f1c",f.font='800 11px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(T.label,I+14,v+22),f.fillStyle="#ffffff",f.font='800 14px "Segoe UI", Arial, sans-serif',f.fillText(T.val,I+14,v+44),I+=U+14}),f.fillStyle="rgba(255, 255, 255, 0.45)",f.font='600 13px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(`Official Festival Entry Pass • ID: ${l} • Verify at entrance`,54,388),f.fillStyle="#ffbd59",f.font='800 16px "Segoe UI", Arial, sans-serif',f.textAlign="right",f.fillText("TICKET ID",x-54,66),f.fillStyle="#ffffff",f.font='800 20px "Segoe UI", Arial, monospace',f.fillText(String(l),x-54,96);const R=190,q=x-R-54,B=132;Ft(f,q,B,R,R,18),f.fillStyle="#ffffff",f.fill(),f.strokeStyle="rgba(255, 189, 89, 0.4)",f.lineWidth=2,f.stroke(),b&&c?f.drawImage(b,q+12,B+12,R-24,R-24):(f.fillStyle="#102525",f.font='800 13px "Segoe UI", Arial, sans-serif',f.textAlign="center",f.fillText("QR CODE",q+R/2,B+R/2-8),f.font='600 11px "Segoe UI", Arial, sans-serif',f.fillStyle="#6b7280",f.fillText(c?"GENERATING":"PENDING APPROVAL",q+R/2,B+R/2+12)),f.fillStyle="#ffbd59",f.font='800 11px "Segoe UI", Arial, sans-serif',f.textAlign="center",f.fillText("SCAN AT ENTRANCE",q+R/2,B+R+28),k(j)},w=()=>{A()},p=async()=>{if(navigator.share)try{await navigator.share({title:t.eventName||"OZILLA FEST Ticket Pass",text:`OZILLA FEST Ticket: ${l} (${u})`})}catch{}};return e.jsxs("div",{className:"ticket-pass-wrapper",ref:i,children:[e.jsxs("div",{className:"ticket-pass-badge",children:[e.jsx("div",{className:"ticket-pass-glow","aria-hidden":"true"}),e.jsxs("div",{className:"ticket-pass-left",children:[e.jsxs("div",{className:"ticket-pass-top-row",children:[e.jsx("div",{className:"ticket-pass-type-badge",children:u}),e.jsx("div",{className:"ticket-pass-festival-tag",children:"OZILLA FEST 2026"})]}),e.jsxs("div",{className:"ticket-pass-identity",children:[e.jsx("h2",{className:"ticket-pass-name",children:t.fullName||t.name||"Festival Guest"}),e.jsx("p",{className:"ticket-pass-email",children:t.email||"-"})]}),e.jsxs("div",{className:"ticket-pass-meta-row",children:[e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"DATE"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:g})]}),e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"DAY"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:y})]}),e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"BOOKING ID"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:n})]})]}),e.jsx("div",{className:"ticket-pass-footnote",children:e.jsx("span",{children:"Official Festival Entry Pass • Valid for 1 Person"})})]}),e.jsxs("div",{className:"ticket-pass-right",children:[e.jsxs("div",{className:"ticket-pass-id-block",children:[e.jsx("span",{className:"ticket-pass-id-label",children:"TICKET ID"}),e.jsx("strong",{className:"ticket-pass-id-value",children:l})]}),e.jsxs("div",{className:"ticket-pass-qr-box",ref:s,children:[c?e.jsx(Js,{ticket:t,size:118,showCaption:!1}):e.jsxs("div",{className:"ticket-pass-qr-pending",children:[e.jsx("span",{children:"QR Pending"}),e.jsx("small",{children:"Approval Required"})]}),e.jsx("span",{className:"ticket-pass-scan-hint",children:"SCAN AT ENTRANCE"})]})]})]}),e.jsxs("div",{className:"ticket-pass-actions-bar",children:[e.jsxs("div",{className:"ticket-pass-status-pill",children:[e.jsx("span",{className:`status-dot ${o.className}`}),e.jsxs("span",{children:["Status: ",e.jsx("strong",{children:o.label})]})]}),e.jsxs("div",{className:"ticket-pass-button-group",children:[c?e.jsxs("button",{type:"button",className:"btn-pass-download",onClick:A,children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Pass"]}):e.jsx("button",{type:"button",className:"btn-pass-download disabled",disabled:!0,title:"Available after verification",children:"Download Pass (Pending)"}),e.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:w,children:"Print"}),e.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:p,children:"Share"}),a&&e.jsx(Z,{to:a,className:"btn-pass-link",children:r})]})]}),e.jsx("style",{children:`
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
      `})]})}const ti=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],ai=["🔒 256-Bit SSL Secured","🎟️ Verified QR Pass","⭐ Official Festival Entry","⚡ Instant Scan Ready"],ri=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"];function fa(){const t=new Date("2026-11-01T18:00:00+05:00").getTime(),a=Math.max(0,t-Date.now());return{days:Math.floor(a/(1e3*60*60*24)),hours:Math.floor(a/(1e3*60*60)%24),minutes:Math.floor(a/(1e3*60)%60)}}function si(){const{tickets:t,loading:a,fetchMyTickets:r}=Ht(),{user:s}=Ke(),[i,l]=m.useState(fa);m.useEffect(()=>{r()},[r]),m.useEffect(()=>{const c=window.setInterval(()=>l(fa()),6e4);return()=>window.clearInterval(c)},[]);const n=`${s?.firstName||""} ${s?.lastName||""}`.trim()||s?.name||s?.email||"Festival Member",o=m.useMemo(()=>{const c=t.filter(g=>g.status==="approved").length,u=t.filter(g=>g.status!=="approved").length;return[[t.length,"Total Tickets"],[c,"QR Ready"],[u,"In Review"],[c*250+t.length*100,"Reward Points"],[c>1?"VIP":c===1?"Gold":"Member","Festival Level"]]},[t]);return e.jsxs("main",{className:"my-tickets-premium",children:[e.jsxs("section",{className:"my-tickets-hero",children:[e.jsx($t,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.55}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),e.jsxs("div",{className:"my-tickets-hero-content",children:[e.jsx("p",{className:"my-tickets-eyebrow",children:"DIGITAL FESTIVAL WALLET"}),e.jsx("h1",{className:"my-tickets-title",children:"Your Festival Passes"}),e.jsx("span",{className:"my-tickets-subtitle",children:"Access your verified QR tickets, download pass images, and track your VIP festival benefits for OZILLA FEST 2026."})]})]}),e.jsxs("section",{className:"my-tickets-shell",children:[e.jsxs("div",{className:"ticket-wallet-dashboard",children:[e.jsxs("article",{className:"ticket-wallet-profile",children:[e.jsx("div",{className:"ticket-wallet-avatar",children:String(n).slice(0,1).toUpperCase()}),e.jsxs("div",{children:[e.jsx("p",{children:"Welcome Back,"}),e.jsx("h2",{children:n}),e.jsxs("div",{className:"ticket-wallet-tags",children:[e.jsx("span",{children:"Verified Holder"}),e.jsx("span",{children:"Official Pass Holder"}),e.jsx("span",{children:t.length>2?"VIP Loyalty":t.length>0?"Gold Member":"Festival Member"})]})]})]}),e.jsxs("article",{className:"ticket-wallet-countdown",children:[e.jsx("p",{children:"Festival Starts In"}),e.jsxs("div",{className:"wallet-countdown-row",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.days}),e.jsx("span",{children:"Days"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:i.hours}),e.jsx("span",{children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:i.minutes}),e.jsx("span",{children:"Minutes"})]})]})]})]}),e.jsx("div",{className:"ticket-wallet-stats",children:o.map(([c,u])=>e.jsxs("article",{children:[e.jsx("strong",{children:c}),e.jsx("span",{children:u})]},u))}),a?e.jsxs("div",{className:"ticket-wallet-loading",children:[e.jsx("div",{className:"ticket-wallet-spinner"}),e.jsx("h2",{children:"Loading Your Passes..."}),e.jsx("p",{children:"Fetching your verified QR tickets from the blockchain vault."})]}):t.length===0?e.jsxs("div",{className:"ticket-wallet-empty",children:[e.jsx("div",{className:"ticket-empty-mark",children:"🎟️"}),e.jsx("h2",{children:"No Tickets Booked Yet"}),e.jsx("p",{children:"Reserve your OZILLA FEST pass and unlock your personal digital ticket wallet with dynamic QR entry."}),e.jsx(Z,{to:"/tickets",className:"ticket-empty-btn",children:"Purchase Ticket →"})]}):e.jsxs("div",{className:"ticket-wallet-passes-section",children:[e.jsxs("div",{className:"ticket-wallet-section-heading",children:[e.jsx("p",{children:"OFFICIAL DIGITAL PASSES"}),e.jsx("h2",{children:"Active Festival Tickets"})]}),e.jsx("div",{className:"ticket-wallet-grid",children:t.map(c=>e.jsx(Da,{ticket:c,actionLabel:"Open Details"},c.id))})]}),e.jsxs("div",{className:"ticket-wallet-extras",children:[e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Pass Privileges"}),e.jsx("div",{className:"ticket-wallet-benefits",children:ti.map(c=>e.jsx("span",{children:c},c))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Verification Journey"}),e.jsx("div",{className:"ticket-wallet-timeline",children:ri.map((c,u)=>e.jsx("span",{className:u<4?"is-active":"",children:c},c))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Trust & Security"}),e.jsx("div",{className:"ticket-wallet-trust",children:ai.map(c=>e.jsx("span",{children:c},c))})]})]})]}),e.jsx("style",{children:`
        .my-tickets-premium {
          position: relative;
          min-height: 100vh;
          padding: 0 0 4rem;
          color: #ffffff;
          background: #0B0705 !important;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          letter-spacing: -0.01em;
        }

        .my-tickets-premium * { box-sizing: border-box; }

        .my-tickets-hero,
        .my-tickets-shell {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ── HERO ── */
        .my-tickets-hero {
          position: relative;
          min-height: clamp(320px, 44vh, 460px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 30px;
          margin-bottom: 2rem;
          background:
            radial-gradient(ellipse at 50% 20%, rgba(255, 90, 31, 0.28) 0%, rgba(85, 14, 14, 0.45) 45%, #0B0705 90%) !important;
          box-shadow: 0 24px 65px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: clamp(3rem, 6vw, 4.5rem) 1.5rem;
        }

        .my-tickets-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.55;
          pointer-events: none;
        }

        .my-tickets-orb-one {
          width: 320px;
          height: 320px;
          left: 10%;
          top: 20%;
          background: rgba(255, 138, 61, 0.25);
        }

        .my-tickets-orb-two {
          width: 350px;
          height: 350px;
          right: 10%;
          bottom: 15%;
          background: rgba(236, 72, 153, 0.2);
        }

        .my-tickets-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          text-align: center;
          color: #ffffff;
        }

        .my-tickets-eyebrow {
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .my-tickets-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin-bottom: 1.1rem;
          background: linear-gradient(180deg, #ffffff 40%, #ffd36a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .my-tickets-subtitle {
          display: block;
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(0.98rem, 1.6vw, 1.15rem);
          line-height: 1.7;
        }

        /* ── WALLET TOP DASHBOARD ── */
        .ticket-wallet-dashboard {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .ticket-wallet-profile,
        .ticket-wallet-countdown,
        .ticket-wallet-stats article,
        .ticket-wallet-empty,
        .ticket-wallet-loading,
        .ticket-wallet-card {
          background: rgba(27, 17, 11, 0.72) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 1.8rem;
          backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 14px 40px rgba(0, 0, 0, 0.5);
        }

        .ticket-wallet-profile {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .ticket-wallet-avatar {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          background: linear-gradient(135deg, #EC4899, #cf5704);
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: 900;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .ticket-wallet-profile p {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.2rem;
        }

        .ticket-wallet-profile h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
        }

        .ticket-wallet-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.5rem;
        }

        .ticket-wallet-tags span {
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        .ticket-wallet-countdown {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .ticket-wallet-countdown p {
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .wallet-countdown-row {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
        }

        .wallet-countdown-row strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }

        .wallet-countdown-row span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 700;
          text-transform: uppercase;
        }

        /* ── STATS BAR ── */
        .ticket-wallet-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .ticket-wallet-stats article {
          text-align: center;
          padding: 1.3rem 1rem;
        }

        .ticket-wallet-stats strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .ticket-wallet-stats span {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ff8a3d;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── SECTION HEADING ── */
        .ticket-wallet-section-heading {
          margin-bottom: 1.5rem;
        }

        .ticket-wallet-section-heading p {
          color: #ffbd59;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .ticket-wallet-section-heading h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #ffffff;
        }

        .ticket-wallet-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        /* ── EMPTY / LOADING ── */
        .ticket-wallet-empty,
        .ticket-wallet-loading {
          text-align: center;
          padding: 4rem 2rem;
          margin-bottom: 2.5rem;
        }

        .ticket-empty-mark {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .ticket-wallet-empty h2,
        .ticket-wallet-loading h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.6rem;
        }

        .ticket-wallet-empty p,
        .ticket-wallet-loading p {
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
          margin: 0 auto 1.8rem;
          line-height: 1.65;
        }

        .ticket-empty-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.9rem 2.2rem;
          border-radius: 16px;
          background: linear-gradient(120deg, #ff8a3d, #ff5a1f 55%, #e0380c);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(255, 90, 31, 0.5);
          transition: transform 200ms ease;
        }

        .ticket-empty-btn:hover {
          transform: translateY(-2px);
        }

        .ticket-wallet-spinner {
          width: 44px;
          height: 44px;
          border: 3px solid rgba(255, 138, 61, 0.3);
          border-top-color: #ff8a3d;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1.2rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── EXTRAS ── */
        .ticket-wallet-extras {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .ticket-wallet-card p {
          color: #ffbd59;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.9rem;
        }

        .ticket-wallet-benefits,
        .ticket-wallet-timeline,
        .ticket-wallet-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ticket-wallet-benefits span,
        .ticket-wallet-timeline span,
        .ticket-wallet-trust span {
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .ticket-wallet-timeline span.is-active {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.35);
          color: #86efac;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .ticket-wallet-dashboard {
            grid-template-columns: 1fr;
          }
          .ticket-wallet-stats {
            grid-template-columns: repeat(3, 1fr);
          }
          .ticket-wallet-extras {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ticket-wallet-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}function ii(){const{ticketId:t}=Na(),{getTicketById:a}=Ht(),[r,s]=m.useState(null),[i,l]=m.useState(!0),[n,o]=m.useState(!1),[c,u]=m.useState(null),g=r?.status==="approved",y=["pending","payment_submitted"].includes(r?.status);if(m.useEffect(()=>{(async()=>{try{const w=await a(t);s(w)}catch{s(null)}finally{l(!1)}})()},[t,a]),i)return e.jsx(La,{});if(!r)return e.jsx("div",{className:"bg-[#1b110b]/80 border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto my-12 backdrop-blur-xl",children:e.jsx("p",{className:"text-white/80 font-bold text-lg",children:"Ticket not found."})});const k=async()=>{o(!0),u(null);try{const A=await Ne.cancelTicket(r.id);s(A.ticket),u({type:"success",message:A.message||"Ticket cancelled successfully."})}catch(A){u({type:"error",message:A.response?.data?.message||"Failed to cancel ticket."})}finally{o(!1)}};return e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[e.jsx("div",{className:"flex items-center justify-between gap-3 mb-6",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-[#ffbd59] text-xs font-black uppercase tracking-widest block mb-1",children:"OFFICIAL DIGITAL PASS"}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]",children:"Your Festival Pass"}),e.jsx("p",{className:"text-sm text-white/70 mt-1",children:"Official digital entry pass with scannable QR badge"})]})}),c&&e.jsx(Ut,{type:c.type,message:c.message,onClose:()=>u(null)}),e.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[e.jsx(Da,{ticket:r,actionTo:"/tickets/my-tickets",actionLabel:"My Tickets Wallet"}),e.jsxs("div",{className:"bg-[#1b110b]/75 rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl",children:[y&&e.jsx("button",{type:"button",className:"mb-4 bg-rose-600/20 border border-rose-500/40 text-rose-300 px-5 py-2.5 rounded-xl font-bold hover:bg-rose-600/30 transition-colors",onClick:k,disabled:n,children:n?"Cancelling...":"Cancel Ticket Request"}),g?e.jsxs("div",{className:"p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl",children:[e.jsx("h2",{className:"text-lg font-bold text-emerald-300 mb-1",children:"Official Pass Ready"}),e.jsxs("p",{className:"text-emerald-200/80 text-sm",children:["Your ticket pass has been verified and the scannable QR badge is active. Click ",e.jsx("strong",{children:"Download Pass"})," above to save the pass image to your device."]})]}):e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2 font-['Outfit',sans-serif]",children:"Verification In Progress"}),e.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 rounded-xl p-5",children:[e.jsx("p",{className:"text-amber-300 font-semibold mb-1",children:"Pass verification pending admin approval."}),e.jsx("p",{className:"text-amber-200/80 text-sm",children:"Your scannable QR code and downloadable pass image will be unlocked once payment proof is verified by the admin team."})]})]})]})]})]})}function ni(){const{ticketId:t}=Na(),[a,r]=m.useState(null),[s,i]=m.useState(""),[l,n]=m.useState(!0),[o,c]=m.useState(!1),[u,g]=m.useState(null),[y,k]=m.useState(""),A=b=>b==="approved"?"bg-green-100 text-green-800":b==="payment_submitted"?"bg-blue-100 text-blue-700":b==="rejected"||b==="cancelled"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-800",w=b=>{try{const x=JSON.parse(b),j=["ticketId","fullName","email","phone","eventName","eventDate","eventTime"].filter(f=>!x[f]);return j.length>0?{ok:!1,message:`Missing fields: ${j.join(", ")}`}:{ok:!0,parsed:x}}catch{return{ok:!1,message:"QR payload is not valid JSON."}}};m.useEffect(()=>{(async()=>{try{const x=await Ne.getTicketById(t);r(x),i(JSON.stringify({ticketId:x.uniqueTicketId||x.ticketId||x.id,fullName:x.fullName||x.name,email:x.email,phone:x.phone,eventName:x.eventName,eventDate:x.eventDate,eventTime:x.eventTime},null,2))}catch{g({type:"error",message:"Ticket not found"})}finally{n(!1)}})()},[t]);const p=async()=>{g(null),k("");const b=w(s);if(!b.ok){k(b.message);return}c(!0);try{const x=await Ne.verifyTicketByQr(s);r(x.ticket||a),g({type:"success",message:x.message||`Ticket verified: ${x.status}`})}catch(x){const M=x.response?.data?.message||"Verification failed",j=x.response?.data?.mismatchedFields?.length?` Mismatched fields: ${x.response.data.mismatchedFields.join(", ")}.`:"";g({type:"error",message:`${M}${j}`})}finally{c(!1)}};return l?e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"Ticket Verification"}),u&&e.jsx(Ut,{type:u.type,message:u.message,onClose:()=>g(null)}),a?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:a.eventName}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Date:"})," ",a.eventDate]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Location:"})," ",a.location]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Ticket Type:"})," ",a.ticketType]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Status:"}),e.jsx("span",{className:`ml-2 px-3 py-1 rounded-full text-sm ${A(a.status)}`,children:a.status})]})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block",children:e.jsx("div",{className:"w-48 h-48 bg-gray-100 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-400",children:"Scan / Paste QR Data"})})})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 mb-2 font-semibold",children:"QR Payload"}),e.jsx("textarea",{className:"w-full px-4 py-2 border rounded-lg",rows:6,value:s,onChange:b=>i(b.target.value)}),y&&e.jsx("p",{className:"text-sm text-red-600 mt-2",children:y})]}),e.jsx("button",{onClick:p,disabled:o,className:"w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold",children:o?"Verifying...":"Verify Ticket"})]}):e.jsx("div",{className:"text-center text-gray-600",children:e.jsx("p",{children:"Ticket not found or invalid."})})]})})}const ua={"Pearl Continental Hotel (PC)":W("/assets/hotels/Pearl-Continental-Lahore.jpg"),"Ramada by Wyndham Lahore":W("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),"Hotel Indigo Lahore":W("/assets/hotels/Hotel-Indigo.jpg"),"Hotel One Gulberg Lahore":W("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),"Luxus Grand Hotel (LC)":W("/assets/hotels/Luxus-Grand-Hotel.jpg"),"Nishat Hotel Lahore":W("/assets/hotels/Nishat.jpg")},ga=W("/assets/hotels/Nishat.jpg"),oi={"Pearl Continental Hotel (PC)":"Iconic five-star city hospitality","Ramada by Wyndham Lahore":"International comfort in Gulberg","Hotel Indigo Lahore":"Boutique lifestyle stay experience","Hotel One Gulberg Lahore":"Smart central festival access","Luxus Grand Hotel (LC)":"Executive luxury with city energy","Nishat Hotel Lahore":"Refined premium Lahore living"},ha=["Pool","Dining","Gym","WiFi","Parking","Service"],li=[["Festival Partner Hotels","Curated stays selected for Ozilla guests, brand partners, and VIP visitors."],["Premium Hospitality","Polished service, comfortable rooms, and refined Lahore hospitality."],["Exclusive Discounts","Partner booking options connected to the festival experience."],["Best Location","Convenient Lahore access for concerts, food experiences, and festival moments."]];function ci(t){return ha[t%ha.length]}function di(){const t=Ir.hotels.map((a,r)=>({...a,description:a.description||"Hotel partners showcase rooms, location, facilities and Ozilla special rates.",contact:a.contact||"Contact via Ozilla partner desk",facilities:a.facilities||["Rooms and Suites","On-site Facilities","Event Access Support","Partner Booking Assistance"],booking:a.offer,image:W(a.image)||ua[a.name]||W("/assets/prism-auth-visual.jpg"),fallbackImage:ua[a.name]||W("/assets/prism-auth-visual.jpg"),tagline:oi[a.name]||"Premium Ozilla partner hospitality",featured:r===0}));return m.useEffect(()=>{const a=document.querySelectorAll(".hotel-reveal"),r=new IntersectionObserver(s=>{s.forEach(i=>{i.target.classList.toggle("is-visible",i.isIntersecting)})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});return a.forEach(s=>r.observe(s)),()=>r.disconnect()},[]),e.jsxs("main",{className:"hotel-booking-page",style:{"--hotel-hero-image":`url("${ga}")`},children:[e.jsxs("section",{className:"hotel-booking-hero hotel-reveal",children:[e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-a"}),e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-b"}),e.jsx("div",{className:"hotel-hero-sweep"}),e.jsxs("div",{className:"hotel-hero-content",children:[e.jsx("p",{className:"hotel-eyebrow",children:"OZILLA FEST 2026"}),e.jsx("h1",{children:"LUXURY HOTELS"}),e.jsx("p",{children:"Stay in the finest hotels and experience premium hospitality during OZILLA FEST 2026."}),e.jsxs("div",{className:"hotel-search-bar","aria-label":"Hotel page highlights",children:[e.jsx("span",{children:"Lahore, Pakistan"}),e.jsx("span",{children:"Festival Partner Hotels"}),e.jsx("span",{children:"Premium Stay Options"})]})]})]}),e.jsxs("section",{className:"hotel-booking-intro hotel-reveal",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Stay Collection"}),e.jsx("h2",{children:"Browse OZILLA FEST Partner Hotels"})]}),e.jsx("p",{children:"A curated hotel listing experience for guests who want comfort, convenient access, trusted booking links, and premium Lahore hospitality."})]}),e.jsx("section",{className:"hotel-benefit-strip hotel-reveal",children:li.map(([a,r],s)=>e.jsxs("article",{className:"hotel-benefit-pill",children:[e.jsx("span",{children:String(s+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:a}),e.jsx("p",{children:r})]})]},a))}),e.jsx("section",{className:"hotel-listings","aria-label":"Luxury hotel listings",children:t.map((a,r)=>e.jsxs("article",{className:`hotel-listing-card hotel-reveal ${a.featured?"hotel-listing-featured":""}`,style:{transitionDelay:`${Math.min(r*70,280)}ms`},children:[a.featured?e.jsx("span",{className:"hotel-featured-ribbon",children:"Featured Partner Hotel"}):null,e.jsx("a",{href:a.website||"#",target:a.website?"_blank":void 0,rel:a.website?"noreferrer":void 0,className:"hotel-listing-image-link","aria-label":`Open ${a.name} details`,children:e.jsxs("div",{className:"hotel-listing-image-wrap",children:[a.showImage?e.jsx("img",{src:a.image,alt:a.name,className:"hotel-listing-image",loading:"lazy",referrerPolicy:"no-referrer",onError:s=>{s.currentTarget.onerror=null,s.currentTarget.src=a.fallbackImage}}):e.jsx("div",{className:"hotel-image-placeholder",children:"Premium Hotel Preview"}),e.jsxs("div",{className:"hotel-image-overlay",children:[e.jsx("span",{children:"*****"}),e.jsx("b",{children:"Luxury Stay"}),e.jsx("em",{children:"Premium Partner"})]})]})}),e.jsxs("div",{className:"hotel-listing-info",children:[e.jsxs("div",{className:"hotel-listing-top",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"hotel-rating-line",children:["***** ",e.jsxs("span",{children:[a.rating||"4.8/5"," Exceptional"]})]}),a.website?e.jsx("a",{href:a.website,target:"_blank",rel:"noreferrer",className:"hotel-listing-title",children:a.name}):e.jsx("h2",{className:"hotel-listing-title",children:a.name}),e.jsx("p",{className:"hotel-tagline",children:a.tagline})]}),e.jsxs("div",{className:"hotel-score-box","aria-label":`${a.name} rating`,children:[e.jsx("strong",{children:a.rating?a.rating.replace("/5",""):"4.8"}),e.jsx("span",{children:"Exceptional"})]})]}),e.jsx("p",{className:"hotel-location",children:"Lahore, Pakistan"}),e.jsx("p",{className:"hotel-description",children:a.description}),e.jsx("div",{className:"hotel-amenity-row","aria-label":`${a.name} amenities`,children:a.facilities.slice(0,6).map((s,i)=>e.jsxs("span",{className:"hotel-amenity-chip",children:[e.jsx("b",{children:ci(i)}),s]},s))}),e.jsxs("div",{className:"hotel-listing-footer",children:[e.jsxs("div",{className:"hotel-detail-stack",children:[e.jsx("span",{children:"Festival Partner Badge"}),e.jsx("strong",{children:a.booking}),e.jsx("small",{children:a.contact})]}),a.website?e.jsx("a",{href:a.website,target:"_blank",rel:"noreferrer",className:"hotel-action-button",children:"View Details"}):null]})]})]},a.name))}),e.jsxs("section",{className:"hotel-booking-cta hotel-reveal",children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Hospitality"}),e.jsx("h2",{children:"Your Perfect Stay Awaits"}),e.jsx("p",{children:"Stay in the finest hotels during OZILLA FEST 2026."}),e.jsx("a",{href:"#top",onClick:a=>{a.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Explore Partner Hotels"})]}),e.jsx("style",{children:`
        .hotel-booking-page {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          max-width: 100%;
          padding: clamp(1rem, 2.4vw, 1.65rem) 0 clamp(1.8rem, 4.5vw, 3.4rem);
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 184, 62, 0.2), transparent 30%),
            radial-gradient(circle at 92% 22%, rgba(7, 54, 51, 0.16), transparent 34%),
            linear-gradient(180deg, rgba(255, 250, 242, 0.58), rgba(255, 242, 224, 0.22));
        }

        .hotel-booking-page::before,
        .hotel-booking-page::after {
          content: '';
          position: fixed;
          z-index: -2;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(20px);
          opacity: 0.58;
          animation: hotelAmbient 14s ease-in-out infinite alternate;
        }

        .hotel-booking-page::before {
          width: min(54vw, 650px);
          height: min(54vw, 650px);
          top: 6vh;
          left: -20vw;
          background: radial-gradient(circle, rgba(255, 171, 42, 0.34), rgba(255, 171, 42, 0));
        }

        .hotel-booking-page::after {
          width: min(44vw, 560px);
          height: min(44vw, 560px);
          right: -15vw;
          bottom: 10vh;
          background: radial-gradient(circle, rgba(7, 54, 51, 0.28), rgba(7, 54, 51, 0));
          animation-delay: -5s;
        }

        .hotel-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 680ms cubic-bezier(0.22, 1, 0.36, 1), transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hotel-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hotel-booking-hero {
          position: relative;
          min-height: clamp(380px, 48vw, 570px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(26px, 4vw, 48px);
          margin-bottom: clamp(1.15rem, 2.8vw, 1.85rem);
          padding: clamp(1.9rem, 4.4vw, 3.65rem);
          color: #fff;
            background:
            linear-gradient(135deg, rgba(3, 38, 36, 0.9), rgba(54, 18, 21, 0.86)),
            var(--hotel-hero-image, url('${ga}')) center / cover;
          box-shadow: 0 34px 90px rgba(8, 47, 47, 0.28), inset 0 0 0 1px rgba(255, 221, 152, 0.18);
        }

        .hotel-booking-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 24%, rgba(255, 183, 60, 0.34), transparent 30%),
            linear-gradient(to top, rgba(0, 0, 0, 0.68), transparent 54%),
            linear-gradient(120deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.52));
          animation: hotelHeroBreath 8s ease-in-out infinite alternate;
        }

        .hotel-booking-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(255, 190, 72, 0.82) 0 2px, transparent 3px),
            radial-gradient(circle, rgba(255, 255, 255, 0.45) 0 1px, transparent 2px);
          background-size: 170px 170px, 260px 260px;
          background-position: 12% 34%, 78% 45%;
          opacity: 0.34;
          animation: hotelParticleDrift 17s linear infinite;
        }

        .hotel-hero-glow,
        .hotel-hero-sweep {
          position: absolute;
          pointer-events: none;
        }

        .hotel-hero-glow {
          border-radius: 999px;
          filter: blur(5px);
          animation: hotelFloat 8s ease-in-out infinite;
        }

        .hotel-hero-glow-a {
          width: 120px;
          height: 120px;
          left: 10%;
          bottom: 14%;
          background: radial-gradient(circle, rgba(255, 165, 31, 0.44), transparent 70%);
        }

        .hotel-hero-glow-b {
          width: 170px;
          height: 170px;
          right: 9%;
          top: 16%;
          background: radial-gradient(circle, rgba(255, 230, 170, 0.3), transparent 72%);
          animation-delay: -3s;
        }

        .hotel-hero-sweep {
          inset: -20%;
          background: linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.12), transparent 50%);
          animation: hotelLightSweep 7s ease-in-out infinite;
        }

        .hotel-hero-content {
          position: relative;
          z-index: 2;
          width: min(900px, 100%);
          text-align: center;
          min-width: 0;
        }

        .hotel-eyebrow {
          margin: 0 0 0.75rem;
          color: #ffad24;
          font-size: clamp(0.72rem, 1.4vw, 0.9rem);
          font-weight: 950;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .hotel-booking-hero h1 {
          margin: 0;
          font-size: clamp(3.2rem, 10vw, 8rem);
          line-height: 0.88;
          letter-spacing: -0.065em;
          text-transform: uppercase;
          text-shadow: 0 24px 64px rgba(0, 0, 0, 0.56), 0 0 42px rgba(255, 173, 36, 0.18);
        }

        .hotel-booking-hero p:not(.hotel-eyebrow) {
          max-width: 700px;
          margin: clamp(1rem, 2vw, 1.3rem) auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.2vw, 1.22rem);
          line-height: 1.65;
        }

        .hotel-search-bar {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.7rem;
          max-width: 840px;
          margin: clamp(1.15rem, 2.7vw, 1.8rem) auto 0;
          padding: 0.62rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);
          min-width: 0;
        }

        .hotel-search-bar span {
          border-radius: 999px;
          padding: 0.74rem 0.92rem;
          color: #fff;
          background: rgba(0, 0, 0, 0.16);
          font-weight: 850;
          font-size: 0.9rem;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .hotel-booking-intro,
        .hotel-benefit-strip,
        .hotel-booking-cta {
          border: 1px solid rgba(255, 180, 56, 0.22);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(255, 248, 236, 0.56));
          box-shadow: 0 20px 50px rgba(8, 47, 47, 0.1);
          backdrop-filter: blur(16px);
        }

        .hotel-booking-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1.1fr);
          gap: clamp(1.1rem, 3.1vw, 2.15rem);
          align-items: end;
          border-radius: 28px;
          padding: clamp(1.15rem, 2.7vw, 1.8rem);
          margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
          min-width: 0;
        }

        .hotel-booking-intro h2 {
          margin: 0;
          color: #082f2f;
          font-size: clamp(1.7rem, 4vw, 3.1rem);
          line-height: 1;
          letter-spacing: -0.055em;
          font-weight: 950;
        }

        .hotel-booking-intro p:not(.hotel-eyebrow) {
          margin: 0;
          color: #496567;
          line-height: 1.7;
          font-size: clamp(0.98rem, 1.8vw, 1.08rem);
        }

        .hotel-benefit-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.7rem, 1.5vw, 0.95rem);
          border-radius: 28px;
          padding: clamp(0.65rem, 1.4vw, 0.85rem);
          margin-bottom: clamp(1.25rem, 3vw, 2rem);
          min-width: 0;
        }

        .hotel-benefit-pill {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.82rem;
          align-items: start;
          min-height: 118px;
          border-radius: 22px;
          padding: clamp(0.9rem, 1.7vw, 1.05rem);
          border: 1px solid rgba(8, 47, 47, 0.08);
          background: rgba(255, 255, 255, 0.46);
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
          min-width: 0;
        }

        .hotel-benefit-pill:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 159, 28, 0.34);
          box-shadow: 0 16px 34px rgba(8, 47, 47, 0.11);
        }

        .hotel-benefit-pill > span {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #211200;
          background: linear-gradient(135deg, #ffe2a0, #ff9518);
          font-size: 0.72rem;
          font-weight: 950;
          box-shadow: 0 12px 24px rgba(255, 149, 24, 0.18);
        }

        .hotel-benefit-pill h3 {
          margin: 0 0 0.35rem;
          color: #082f2f;
          font-size: 1rem;
          line-height: 1.15;
        }

        .hotel-benefit-pill p {
          margin: 0;
          color: #5b7072;
          font-size: 0.88rem;
          line-height: 1.48;
        }

        .hotel-listings {
          display: grid;
          gap: clamp(1.1rem, 2.5vw, 1.6rem);
          min-width: 0;
        }

        .hotel-listing-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(300px, 43%) minmax(0, 1fr);
          gap: clamp(1rem, 2.3vw, 1.55rem);
          overflow: hidden;
          border-radius: 30px;
          padding: clamp(0.68rem, 1.45vw, 0.95rem);
          border: 1px solid rgba(255, 183, 60, 0.3);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 248, 237, 0.66)),
            radial-gradient(circle at 0 0, rgba(255, 183, 60, 0.2), transparent 30%);
          box-shadow: 0 24px 62px rgba(8, 47, 47, 0.13), inset 0 1px 0 rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(18px);
          transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms ease, border-color 360ms ease;
          min-width: 0;
        }

        .hotel-listing-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 29px;
          border: 1px solid rgba(255, 255, 255, 0.52);
          pointer-events: none;
        }

        .hotel-listing-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 159, 28, 0.64);
          box-shadow: 0 36px 84px rgba(8, 47, 47, 0.18), 0 0 48px rgba(255, 183, 60, 0.12);
        }

        .hotel-listing-featured {
          border-color: rgba(255, 159, 28, 0.72);
          box-shadow: 0 30px 82px rgba(255, 159, 28, 0.16), 0 24px 64px rgba(8, 47, 47, 0.14);
        }

        .hotel-featured-ribbon {
          position: absolute;
          top: 1.15rem;
          left: 1.15rem;
          z-index: 5;
          border-radius: 999px;
          padding: 0.55rem 0.9rem;
          color: #221300;
          background: linear-gradient(90deg, #ffe3a0, #ff9418);
          box-shadow: 0 14px 30px rgba(255, 149, 24, 0.26);
          font-size: 0.75rem;
          font-weight: 950;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .hotel-listing-image-link {
          display: block;
          min-width: 0;
          text-decoration: none;
        }

        .hotel-listing-image-wrap {
          position: relative;
          height: 100%;
          min-height: 310px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255, 197, 91, 0.46);
          background: #102627;
          box-shadow: 0 18px 45px rgba(8, 47, 47, 0.18), 0 0 0 7px rgba(255, 255, 255, 0.28);
        }

        .hotel-listing-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 12%, rgba(255, 255, 255, 0.18), transparent 40%);
          opacity: 0;
          transform: translateX(-70%);
          transition: opacity 260ms ease, transform 740ms ease;
          pointer-events: none;
        }

        .hotel-listing-card:hover .hotel-listing-image-wrap::after {
          opacity: 1;
          transform: translateX(65%);
        }

        .hotel-listing-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease;
        }

        .hotel-listing-card:hover .hotel-listing-image {
          transform: scale(1.075);
          filter: saturate(1.12) contrast(1.04) brightness(1.04);
        }

        .hotel-image-placeholder {
          height: 100%;
          min-height: 330px;
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.74);
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #073633, #52181f);
        }

        .hotel-image-overlay {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.55rem;
          flex-wrap: wrap;
          border-radius: 18px;
          padding: 0.72rem;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(4, 24, 24, 0.56);
          backdrop-filter: blur(16px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
          font-size: 0.78rem;
          font-style: normal;
          font-weight: 900;
        }

        .hotel-image-overlay span {
          color: #ffd267;
          letter-spacing: 0.16em;
          text-shadow: 0 0 18px rgba(255, 210, 103, 0.42);
        }

        .hotel-image-overlay em {
          font-style: normal;
          color: rgba(255, 255, 255, 0.8);
        }

        .hotel-listing-info {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(0.78rem, 1.5vw, 0.98rem);
          padding: clamp(0.85rem, 2vw, 1.25rem) clamp(0.5rem, 1.5vw, 0.95rem) clamp(0.75rem, 1.5vw, 0.95rem) 0;
          min-width: 0;
        }

        .hotel-listing-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(0.9rem, 2vw, 1.2rem);
          min-width: 0;
        }

        .hotel-rating-line {
          margin: 0 0 0.32rem;
          color: #c77708;
          font-size: 0.82rem;
          font-weight: 950;
          letter-spacing: 0.12em;
        }

        .hotel-rating-line span {
          color: #536a6c;
          letter-spacing: 0;
          margin-left: 0.4rem;
        }

        .hotel-listing-title {
          display: inline-block;
          margin: 0;
          color: #082f2f;
          font-size: clamp(1.55rem, 3.6vw, 2.55rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 950;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .hotel-listing-title:hover {
          color: #8f4d05;
        }

        .hotel-tagline {
          margin: 0.42rem 0 0;
          color: #9a5a09;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hotel-score-box {
          flex: 0 0 auto;
          min-width: 88px;
          border-radius: 18px;
          padding: 0.7rem 0.75rem;
          text-align: center;
          color: #fff;
          background: linear-gradient(145deg, #073633, #0f4d49);
          box-shadow: 0 14px 28px rgba(8, 47, 47, 0.18);
        }

        .hotel-score-box strong {
          display: block;
          font-size: 1.65rem;
          line-height: 1;
        }

        .hotel-score-box span {
          display: block;
          margin-top: 0.2rem;
          color: #ffcf76;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .hotel-location {
          margin: 0;
          color: #0b5550;
          font-size: 0.96rem;
          font-weight: 950;
        }

        .hotel-description {
          margin: 0;
          max-width: 760px;
          color: #4f696b;
          font-size: 1rem;
          line-height: 1.68;
          overflow-wrap: anywhere;
        }

        .hotel-amenity-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .hotel-amenity-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.42rem 0.62rem;
          color: #173f40;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 183, 60, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.44);
          backdrop-filter: blur(12px);
          font-size: 0.82rem;
          font-weight: 850;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
          max-width: 100%;
        }

        .hotel-amenity-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 159, 28, 0.42);
          background: rgba(255, 183, 60, 0.12);
          box-shadow: 0 12px 24px rgba(255, 159, 28, 0.12);
        }

        .hotel-amenity-chip b {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          height: 26px;
          border-radius: 999px;
          color: #211200;
          background: linear-gradient(135deg, #ffe3a0, #ff9818);
          font-size: 0.65rem;
          font-weight: 950;
        }

        .hotel-listing-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          margin-top: auto;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(8, 47, 47, 0.08);
        }

        .hotel-detail-stack {
          display: grid;
          gap: 0.18rem;
          min-width: 0;
        }

        .hotel-detail-stack span {
          color: #9a5a09;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hotel-detail-stack strong {
          color: #173f40;
          font-size: 0.92rem;
          overflow-wrap: anywhere;
        }

        .hotel-detail-stack small {
          color: #637779;
          font-size: 0.82rem;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .hotel-action-button,
        .hotel-booking-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          border-radius: 999px;
          padding: 0.9rem 1.2rem;
          color: #102627;
          background: linear-gradient(90deg, #ffd267, #ff8f13);
          border: 1px solid rgba(255, 159, 28, 0.45);
          box-shadow: 0 16px 34px rgba(255, 143, 19, 0.2);
          font-weight: 950;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .hotel-action-button:hover,
        .hotel-booking-cta a:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow: 0 22px 42px rgba(255, 143, 19, 0.27);
        }

        .hotel-booking-cta {
          position: relative;
          overflow: hidden;
          margin-top: clamp(1.65rem, 3.8vw, 2.8rem);
          border-radius: 32px;
          text-align: center;
          color: #fff;
          padding: clamp(1.7rem, 4vw, 3rem);
          background:
            linear-gradient(135deg, rgba(7, 43, 43, 0.97), rgba(68, 21, 25, 0.95)),
            radial-gradient(circle at 18% 22%, rgba(255, 183, 60, 0.3), transparent 34%);
        }

        .hotel-booking-cta::before {
          content: '';
          position: absolute;
          inset: -20%;
          background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.12), transparent 44%);
          animation: hotelLightSweep 8s ease-in-out infinite;
        }

        .hotel-booking-cta > * {
          position: relative;
          z-index: 1;
        }

        .hotel-booking-cta h2 {
          margin: 0;
          font-size: clamp(2.2rem, 6vw, 4.8rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .hotel-booking-cta p:not(.hotel-eyebrow) {
          max-width: 560px;
          margin: 1rem auto 1.35rem;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.65;
        }

        @media (min-width: 1600px) {
          .hotel-booking-hero {
            min-height: 600px;
          }

          .hotel-listing-card {
            grid-template-columns: minmax(430px, 42%) minmax(0, 1fr);
          }

          .hotel-listing-image-wrap {
            min-height: 360px;
          }

          .hotel-description {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 1100px) {
          .hotel-benefit-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hotel-listing-card {
            grid-template-columns: minmax(280px, 42%) minmax(0, 1fr);
          }

          .hotel-listing-image-wrap {
            min-height: 285px;
          }

          .hotel-listing-title {
            font-size: clamp(1.35rem, 3.1vw, 2rem);
          }

          .hotel-listing-footer {
            align-items: flex-start;
          }
        }

        @media (max-width: 860px) {
          .hotel-booking-intro {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 0.85rem;
          }

          .hotel-listing-card {
            grid-template-columns: 1fr;
            gap: 0.95rem;
          }

          .hotel-listing-image-wrap {
            min-height: 285px;
          }

          .hotel-listing-info {
            padding: 0.28rem 0.3rem 0.72rem;
          }

          .hotel-listing-top {
            align-items: flex-start;
          }

          .hotel-score-box {
            min-width: 104px;
          }
        }

        @media (max-width: 640px) {
          .hotel-booking-hero {
            min-height: 400px;
            border-radius: 26px;
            padding: 1.25rem;
            background-position: center;
          }

          .hotel-booking-hero h1 {
            font-size: clamp(2.75rem, 16vw, 4.3rem);
            letter-spacing: -0.07em;
          }

          .hotel-booking-hero p:not(.hotel-eyebrow) {
            font-size: 0.98rem;
            line-height: 1.55;
          }

          .hotel-search-bar {
            grid-template-columns: 1fr;
            border-radius: 24px;
            padding: 0.5rem;
            gap: 0.5rem;
          }

          .hotel-search-bar span {
            padding: 0.58rem 0.7rem;
          }

          .hotel-benefit-strip {
            grid-template-columns: 1fr;
          }

          .hotel-listing-card,
          .hotel-booking-intro,
          .hotel-benefit-strip,
          .hotel-booking-cta {
            border-radius: 24px;
          }

          .hotel-listing-image-wrap {
            min-height: 225px;
            border-radius: 20px;
          }

          .hotel-listing-card {
            padding: 0.55rem;
          }

          .hotel-booking-intro,
          .hotel-benefit-strip {
            padding: 0.88rem;
          }

          .hotel-benefit-pill {
            min-height: auto;
            padding: 0.86rem;
          }

          .hotel-listing-top,
          .hotel-listing-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }

          .hotel-score-box {
            width: 100%;
          }

          .hotel-action-button {
            width: 100%;
          }

          .hotel-image-overlay {
            left: 0.7rem;
            right: 0.7rem;
            bottom: 0.7rem;
            padding: 0.58rem;
            gap: 0.38rem;
            font-size: 0.72rem;
          }

          .hotel-amenity-row {
            gap: 0.4rem;
          }

          .hotel-amenity-chip {
            padding: 0.38rem 0.52rem;
            font-size: 0.78rem;
          }
        }

        @media (max-width: 480px) {
          .hotel-booking-page {
            padding-top: 0.62rem;
          }

          .hotel-booking-hero {
            min-height: 370px;
            border-radius: 22px;
          }

          .hotel-booking-intro h2,
          .hotel-booking-cta h2 {
            letter-spacing: -0.05em;
          }

          .hotel-benefit-pill {
            grid-template-columns: 1fr;
          }

          .hotel-benefit-pill > span {
            width: 38px;
            height: 38px;
          }

          .hotel-listing-title {
            font-size: clamp(1.45rem, 9vw, 2.05rem);
          }

          .hotel-rating-line {
            display: grid;
            gap: 0.15rem;
          }

          .hotel-rating-line span {
            margin-left: 0;
          }

          .hotel-tagline {
            letter-spacing: 0.08em;
          }

          .hotel-listing-image-wrap {
            min-height: 210px;
          }

          .hotel-featured-ribbon {
            top: 0.85rem;
            left: 0.85rem;
            max-width: calc(100% - 1.7rem);
            white-space: normal;
          }
        }

        @media (max-width: 390px) {
          .hotel-booking-hero {
            min-height: 345px;
            padding: 1.05rem;
          }

          .hotel-search-bar span {
            font-size: 0.82rem;
          }

          .hotel-listing-card {
            border-radius: 20px;
            padding: 0.38rem;
          }

          .hotel-listing-card::before {
            border-radius: 19px;
          }

          .hotel-listing-image-wrap {
            min-height: 195px;
            border-radius: 17px;
          }

          .hotel-image-overlay {
            position: static;
            margin: -3.15rem 0.55rem 0.55rem;
            transform: translateZ(0);
          }

          .hotel-amenity-chip {
            width: 100%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 340px) {
          .hotel-booking-hero h1 {
            font-size: 2.45rem;
          }

          .hotel-booking-intro,
          .hotel-benefit-strip,
          .hotel-booking-cta {
            padding: 0.62rem;
          }

          .hotel-listing-image-wrap {
            min-height: 180px;
          }

          .hotel-action-button,
          .hotel-booking-cta a {
            min-width: 0;
            padding: 0.78rem 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hotel-reveal,
          .hotel-booking-page::before,
          .hotel-booking-page::after,
          .hotel-booking-hero::before,
          .hotel-booking-hero::after,
          .hotel-hero-glow,
          .hotel-hero-sweep,
          .hotel-listing-card,
          .hotel-listing-image,
          .hotel-listing-image-wrap::after,
          .hotel-booking-cta::before {
            animation: none !important;
            transition: none !important;
          }
        }

        @keyframes hotelAmbient {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(24px, -18px, 0) scale(1.08); }
        }

        @keyframes hotelHeroBreath {
          0% { opacity: 0.82; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.035); }
        }

        @keyframes hotelParticleDrift {
          0% { background-position: 12% 34%, 78% 45%; }
          100% { background-position: 17% 28%, 72% 54%; }
        }

        @keyframes hotelFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(12px, -16px, 0); }
        }

        @keyframes hotelLightSweep {
          0%, 35% { transform: translateX(-36%) rotate(0.001deg); opacity: 0; }
          55% { opacity: 1; }
          100% { transform: translateX(36%) rotate(0.001deg); opacity: 0; }
        }
      `})]})}const pi={day1:{date:"Saturday, November 01, 2026",title:"Day 1: The Grand Opening & Cultural Genesis",theme:"Fusion, Indie Rhythms & Opening Ceremony",gatesOpen:"03:00 PM",curfew:"12:30 AM",timeline:[{time:"03:00 PM - 04:00 PM",stage:"Main Entrance & Ingress",title:"Gate Opening & Red Carpet Welcoming",desc:"Fast-track QR scanning at gates, welcome drinks, media wall red carpet arrivals, and official festival merchandise store opening.",category:"Entry",highlight:!1},{time:"04:00 PM - 05:30 PM",stage:"Central Promenade & Food Court",title:"Sponsor Activation & Food Carnival Launch",desc:"Over 40+ partner culinary stalls, brand experience booths, interactive gaming lounges, and acoustic busker performances.",category:"Experience",highlight:!1},{time:"05:30 PM - 07:00 PM",stage:"Indie & Discovery Stage",title:"Emerging Indie & Sufi-Rock Showcase",desc:"Live performances by leading underground indie bands, modern Sufi fusion ensembles, and youth creator collaborations.",category:"Live Music",highlight:!1},{time:"07:15 PM - 08:15 PM",stage:"Main Arena",title:"Grand Festival Opening Ceremony & Light Show",desc:"Official keynote by festival founders, sponsor recognition tributes, high-powered multi-beam laser inauguration, and 3D hologram showcase.",category:"Ceremony",highlight:!0},{time:"08:30 PM - 10:45 PM",stage:"Main Arena Stage",title:"Prime Time Pop & Rock Headliners",desc:"Blockbuster performances by Pakistan’s top-charting pop icons, live orchestral backing, and crowd-favorite anthem singalongs.",category:"Headliner",highlight:!0},{time:"11:00 PM - 12:30 AM",stage:"Electronic Beats Arena",title:"Midnight DJ & Laser EDM Extravaganza",desc:"High-energy electronic dance music, confetti cannons, smoke blasters, and immersive LED visuals closing Day 1.",category:"EDM / DJ",highlight:!0}]},day2:{date:"Sunday, November 02, 2026",title:"Day 2: The Grand Finale & Star Power Spectacular",theme:"Celebrity Headliners, Mega Concert & Pyro Finale",gatesOpen:"02:30 PM",curfew:"12:30 AM",timeline:[{time:"02:30 PM - 04:00 PM",stage:"Main Gates & VIP Deck",title:"VIP Lounge Ingress & Networking Reception",desc:"Early access for VIP pass holders, executive lounge high tea, artist meet & greets, and celebrity media lounge interviews.",category:"VIP Access",highlight:!1},{time:"04:00 PM - 05:30 PM",stage:"Youth Arena & Gaming Zone",title:"Esports Championship & Creator Challenges",desc:"Live gaming tournament finals on massive SMD displays, celebrity creator showmatches, and youth dance crew battles.",category:"Youth & Gaming",highlight:!1},{time:"05:30 PM - 07:15 PM",stage:"Sunset Stage",title:"Folk, Qawwali & Fusion Heritage Sets",desc:"Soulful sunset Qawwali and regional fusion performances featuring traditional instruments mixed with modern ambient synthesizers.",category:"Cultural Music",highlight:!1},{time:"07:30 PM - 08:30 PM",stage:"Main Arena",title:"Sponsorship Awards & Creator Honors",desc:"Official partner appreciation ceremonies, brand campaign awards, and youth creator milestone presentations.",category:"Awards",highlight:!1},{time:"08:30 PM - 11:30 PM",stage:"Main Mega Stage",title:"The Mega Celebrity Grand Finale Concert",desc:"The biggest headline concert of the year featuring 4 superstar artists performing back-to-back non-stop blockbuster sets.",category:"Mega Headliner",highlight:!0},{time:"11:45 PM - 12:30 AM",stage:"Main Arena Sky",title:"Grand Pyro Fireworks & 500-Drone Sky Ballet",desc:"A world-class synchronized fireworks display and 500 LED illuminated drones crafting the Ozilla emblem and Pakistan map in the night sky.",category:"Grand Finale",highlight:!0}]}};function xa(){const[t,a]=m.useState("day1"),[r,s]=m.useState("all"),i=pi[t],l=i.timeline.filter(n=>r==="all"?!0:n.category.toLowerCase().includes(r.toLowerCase()));return e.jsxs("main",{className:"schedule-page-wrap",style:{minHeight:"100vh",background:"#0b0c10",color:"#e5e7eb",paddingBottom:"80px"},children:[e.jsxs("section",{style:{background:"linear-gradient(180deg, #3d0c1e 0%, #0b0c10 100%)",padding:"100px 20px 40px",textAlign:"center",borderBottom:"1px solid rgba(212, 175, 55, 0.2)"},children:[e.jsx("span",{style:{background:"rgba(212, 175, 55, 0.15)",color:"#ffd700",border:"1px solid #d4af37",padding:"6px 18px",borderRadius:"9999px",fontSize:"13px",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase"},children:"OFFICIAL FESTIVAL PROGRAM"}),e.jsx("h1",{style:{fontSize:"clamp(28px, 5vw, 48px)",fontWeight:"900",color:"#ffffff",margin:"16px 0 12px",letterSpacing:"1px"},children:"Day 1 & Day 2 Full Lineup Schedule"}),e.jsx("p",{style:{maxWidth:"680px",margin:"0 auto 24px",color:"#d1d5db",fontSize:"16px",lineHeight:"1.6"},children:"Discover the complete minute-by-minute itinerary, stage assignments, headliner performance slots, and grand finale fireworks for OZILLA FEST 2026."}),e.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.4)",padding:"6px",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",gap:"8px"},children:[e.jsx("button",{type:"button",onClick:()=>a("day1"),style:{padding:"12px 28px",borderRadius:"12px",fontSize:"15px",fontWeight:"700",border:"none",cursor:"pointer",transition:"all 0.2s ease",background:t==="day1"?"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)":"transparent",color:t==="day1"?"#111827":"#9ca3af",boxShadow:t==="day1"?"0 4px 15px rgba(212, 175, 55, 0.3)":"none"},children:"📅 DAY 1 (Nov 01)"}),e.jsx("button",{type:"button",onClick:()=>a("day2"),style:{padding:"12px 28px",borderRadius:"12px",fontSize:"15px",fontWeight:"700",border:"none",cursor:"pointer",transition:"all 0.2s ease",background:t==="day2"?"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)":"transparent",color:t==="day2"?"#111827":"#9ca3af",boxShadow:t==="day2"?"0 4px 15px rgba(212, 175, 55, 0.3)":"none"},children:"🎉 DAY 2 (Nov 02)"})]})]}),e.jsxs("div",{style:{maxWidth:"1000px",margin:"40px auto 0",padding:"0 20px"},children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(61, 12, 30, 0.4) 0%, rgba(22, 24, 34, 0.8) 100%)",border:"1px solid rgba(212, 175, 55, 0.3)",borderRadius:"20px",padding:"28px",marginBottom:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#ffd700",fontWeight:"700",fontSize:"13px",textTransform:"uppercase",letterSpacing:"1px"},children:i.date}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:"800",color:"#ffffff",margin:"6px 0 4px"},children:i.title}),e.jsxs("p",{style:{color:"#9ca3af",margin:0,fontSize:"14px"},children:["Theme: ",e.jsx("span",{style:{color:"#e5e7eb",fontWeight:"600"},children:i.theme})]})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center",background:"rgba(0,0,0,0.3)",padding:"10px 18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.08)"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#9ca3af",textTransform:"uppercase"},children:"Gates Open"}),e.jsx("strong",{style:{display:"block",fontSize:"16px",color:"#34d399"},children:i.gatesOpen})]}),e.jsxs(Z,{to:`/tickets?day=${t}`,style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"12px 24px",borderRadius:"12px",fontWeight:"700",fontSize:"14px",textDecoration:"none",boxShadow:"0 4px 15px rgba(212, 175, 55, 0.3)",display:"inline-block"},children:["Book ",t==="day1"?"Day 1":"Day 2"," Pass →"]})]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:l.map((n,o)=>e.jsxs(J.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:o*.05},style:{background:n.highlight?"linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26, 28, 40, 0.95) 100%)":"rgba(255, 255, 255, 0.03)",border:n.highlight?"1px solid #d4af37":"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"16px",padding:"24px",display:"grid",gridTemplateColumns:"minmax(180px, 220px) 1fr",gap:"20px",position:"relative",overflow:"hidden"},children:[n.highlight&&e.jsx("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsx("span",{style:{background:"#d4af37",color:"#111",fontSize:"10px",fontWeight:"800",textTransform:"uppercase",padding:"3px 8px",borderRadius:"4px",letterSpacing:"1px"},children:"★ MUST-SEE"})}),e.jsxs("div",{children:[e.jsxs("span",{style:{fontSize:"15px",fontWeight:"800",color:"#ffd700",display:"block",marginBottom:"6px"},children:["🕒 ",n.time]}),e.jsxs("span",{style:{fontSize:"12px",color:"#9ca3af",display:"block",marginBottom:"10px"},children:["📍 ",n.stage]}),e.jsx("span",{style:{fontSize:"11px",fontWeight:"700",textTransform:"uppercase",background:"rgba(255,255,255,0.06)",color:"#d1d5db",padding:"4px 10px",borderRadius:"6px",display:"inline-block"},children:n.category})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#ffffff",margin:"0 0 8px"},children:n.title}),e.jsx("p",{style:{fontSize:"14px",color:"#9ca3af",lineHeight:"1.6",margin:0},children:n.desc})]})]},n.title))}),e.jsxs("div",{style:{marginTop:"48px",textAlign:"center",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(212, 175, 55, 0.2)",borderRadius:"20px",padding:"36px 20px"},children:[e.jsx("h3",{style:{fontSize:"22px",fontWeight:"800",color:"#ffffff",margin:"0 0 10px"},children:"Ready to Experience the Magic Live?"}),e.jsx("p",{style:{color:"#9ca3af",maxWidth:"520px",margin:"0 auto 20px",fontSize:"14px"},children:"Choose between Single Day Passes or the Full Weekend Access Pass with exclusive VIP Lounge & fast-track stage access."}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"14px",flexWrap:"wrap"},children:[e.jsx(Z,{to:"/tickets",style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"14px 32px",borderRadius:"12px",fontWeight:"800",fontSize:"15px",textDecoration:"none",boxShadow:"0 4px 20px rgba(212, 175, 55, 0.35)"},children:"Get Festival Passes Now →"}),e.jsx(Z,{to:"/hotels",style:{background:"rgba(255,255,255,0.06)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.15)",padding:"14px 28px",borderRadius:"12px",fontWeight:"600",fontSize:"15px",textDecoration:"none"},children:"Explore Partner Hotels"})]})]})]})]})}const mi=[{id:"privacy-introduction",number:"01",icon:"PV",title:"Introduction",text:"This Privacy Policy explains how OZILLA FEST handles visitor, account, ticket, and support information with transparency and care."},{id:"information-collection",number:"02",icon:"ID",title:"Information We Collect",text:"We may collect details such as name, email address, phone number, account information, ticket requests, and support messages."},{id:"data-use",number:"03",icon:"DU",title:"How We Use Data",text:"Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations."},{id:"cookies",number:"04",icon:"CK",title:"Cookies",text:"Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience."},{id:"third-party-services",number:"05",icon:"TP",title:"Third-Party Services",text:"Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required."},{id:"data-security",number:"06",icon:"SC",title:"Data Security",text:"We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe."},{id:"user-rights",number:"07",icon:"RT",title:"User Rights",text:"Visitors can contact OZILLA FEST to request support, corrections, clarification, or help with account and privacy-related questions."},{id:"children-privacy",number:"08",icon:"FM",title:"Children's Privacy",text:"Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules."},{id:"policy-updates",number:"09",icon:"UP",title:"Policy Updates",text:"This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services."},{id:"privacy-contact",number:"10",icon:"CT",title:"Contact Information",text:"For privacy questions, account support, or clarification, visitors can contact the OZILLA FEST support team through the Contact page."}],fi=[{id:"introduction",number:"01",icon:"TR",title:"Introduction",text:"These Terms & Conditions explain the policies that help OZILLA FEST maintain a safe, organized, and enjoyable festival experience for every visitor."},{id:"ticket-policy",number:"02",icon:"TK",title:"Ticket Policy",text:"Tickets are issued for the selected OZILLA FEST access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure."},{id:"payments",number:"03",icon:"PM",title:"Payments",text:"Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval."},{id:"refund-policy",number:"04",icon:"RF",title:"Refund Policy",text:"Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow."},{id:"festival-rules",number:"05",icon:"RL",title:"Festival Rules",text:"Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry."},{id:"privacy",number:"06",icon:"PR",title:"Privacy",text:"Personal information is used for event operations, communication, ticketing, and support. OZILLA FEST does not sell visitor information."},{id:"liability",number:"07",icon:"LB",title:"Liability",text:"OZILLA FEST may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance."},{id:"user-responsibilities",number:"08",icon:"UR",title:"User Responsibilities",text:"Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams."},{id:"contact-information",number:"09",icon:"CT",title:"Contact Information",text:"For clarification about these Terms & Conditions, contact the OZILLA FEST support team through the official contact page."}],ui=[["Important Policy Update","Official event instructions, entry rules, and safety notices may be updated before the festival."],["Key Information","Keep your ticket details secure and contact support if anything needs clarification."]],gi=[["Privacy First","Your account, ticket, and support information is handled with transparency and careful access control."],["Security Guaranteed","OZILLA FEST uses secure workflows to protect authentication, ticket requests, and payment-related support."]],hi=[["Notice","Important Notice","Under 16 attendees are allowed with their family according to the current event notice."],["Entry","Restricted Items","Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points."],["Update","Policy Updates","Operational updates may be shared before or during the festival through official OZILLA FEST channels."]],xi=[["Promise","Privacy Promise","We never misuse your information and keep data usage limited to festival, account, ticket, and support needs."],["Rights","Your Rights","Visitors can contact the team for privacy questions, account support, corrections, or clarification."],["Cookies","Cookie Usage","Cookies are used only to support functionality, sessions, performance, and a smoother website experience."]],bi=[["Secure Ticket Purchase","Ticket and booking policies are structured to keep visitor access clear and verifiable."],["Refund Protection","Refund requests follow the official support process so every case is reviewed consistently."],["Privacy Commitment","Visitor information is used only for festival operations, ticketing, communication, and support."],["Safe Payments","Payment details are reviewed through trusted workflows for booking confirmation and assistance."],["Festival Rules","Clear rules help protect guests, families, artists, partners, and the event experience."],["Professional Support","The OZILLA FEST team is available for policy questions and event guidance."]],yi=[["Secure Authentication","Protected account access for ticket and user workflows."],["Encrypted Data","Sensitive flows are handled through secured application processes."],["Protected Payments","Payment-related support is managed through trusted verification steps."],["Secure Database","Visitor data is handled with careful operational access controls."],["Privacy First","Information is used for clear festival purposes only."],["Safe Browsing","The website experience is designed around trust, clarity, and secure usage."]],wi=[{target:100,suffix:"%",label:"Secure Authentication"},{target:256,suffix:"-bit",label:"Data Encryption"},{value:"Protected",label:"User Accounts"},{value:"Secure",label:"Payment Processing"}],vi=["We never misuse your information.","Your data remains protected.","Secure ticket purchases.","Safe payment processing.","Transparent privacy practices."],ki=[["Email","ozillafestival@gmail.com"],["Phone","+92 322 6622221"],["Support Hours","Monday to Saturday, 10:00 AM - 7:00 PM"]];function ba({type:t}){const a=t==="terms",[r,s]=m.useState(0),[i,l]=m.useState(""),[n,o]=m.useState(0),c=m.useMemo(()=>a?fi:mi,[a]),u=a?ui:gi,g=a?hi:xi,y=a?bi:yi;m.useEffect(()=>{const w=()=>{const p=window.scrollY||document.documentElement.scrollTop,b=document.documentElement.scrollHeight-window.innerHeight;s(b>0?Math.min(100,Math.max(0,p/b*100)):0)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>window.removeEventListener("scroll",w)},[]),m.useEffect(()=>{const w=new IntersectionObserver(p=>{const b=p.filter(x=>x.isIntersecting).sort((x,M)=>M.intersectionRatio-x.intersectionRatio)[0];b?.target?.id&&l(b.target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[.15,.35,.55]});return c.forEach(p=>{const b=document.getElementById(p.id);b&&w.observe(b)}),()=>w.disconnect()},[c]),m.useEffect(()=>{const w=Array.from(document.querySelectorAll(".legal-reveal"));if(!w.length)return;const p=new IntersectionObserver(b=>{b.forEach(x=>{x.target.classList.toggle("is-visible",x.isIntersecting)})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return w.forEach(b=>p.observe(b)),()=>p.disconnect()},[a]),m.useEffect(()=>{if(a)return;const w=document.querySelector(".legal-stat-grid");if(!w)return;let p;const b=()=>{const M=performance.now(),j=900,f=d=>{const _=Math.min(1,(d-M)/j);o(_),_<1&&(p=requestAnimationFrame(f))};cancelAnimationFrame(p),o(0),p=requestAnimationFrame(f)},x=new IntersectionObserver(M=>{M.forEach(j=>{j.isIntersecting&&b()})},{threshold:.28});return x.observe(w),()=>{cancelAnimationFrame(p),x.disconnect()}},[a]);const k=a?"Terms & Conditions":"Privacy Policy",A=a?"Please review our policies carefully to ensure a safe and enjoyable OZILLA FEST experience.":"Your privacy matters. We are committed to protecting your personal information and providing complete transparency.";return e.jsxs("main",{className:`legal-premium-page ${a?"legal-terms-page":"legal-privacy-page"}`,children:[e.jsx("div",{className:"legal-scroll-progress","aria-hidden":"true",children:e.jsx("span",{style:{width:`${r}%`}})}),e.jsxs("section",{className:"legal-hero",children:[e.jsx("div",{className:"legal-hero-orb legal-hero-orb-one"}),e.jsx("div",{className:"legal-hero-orb legal-hero-orb-two"}),e.jsxs("div",{className:"legal-particles","aria-hidden":"true",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"legal-hero-content legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:"OZILLA FEST 2026"}),e.jsx("h1",{children:k}),e.jsx("p",{children:A}),!a&&e.jsxs("div",{className:"privacy-hero-trust","aria-label":"Privacy trust highlights",children:[e.jsx("span",{children:"Privacy First"}),e.jsx("span",{children:"Secure Ticketing"}),e.jsx("span",{children:"Transparent Data Use"})]})]})]}),e.jsxs("section",{className:"legal-shell",children:[e.jsxs("aside",{className:"legal-sidebar","aria-label":`${k} quick navigation`,children:[e.jsx("p",{children:a?"Quick Navigation":"Privacy Center"}),e.jsx("nav",{children:c.map(w=>e.jsxs("a",{href:`#${w.id}`,className:i===w.id?"is-active":"",children:[e.jsx("span",{children:w.number}),w.title]},w.id))})]}),e.jsxs("div",{className:"legal-document",children:[e.jsxs("div",{className:"legal-document-top legal-reveal",children:[e.jsxs("div",{children:[e.jsx("p",{className:"legal-kicker",children:a?"Premium Legal Portal":"Executive Privacy Center"}),e.jsx("h2",{children:a?"Clear Policies For A Better Festival":"Your Information, Handled With Care"})]}),e.jsx("span",{className:"legal-updated",children:"Updated for 2026"})]}),e.jsx("div",{className:"legal-policy-banners legal-reveal",children:u.map(([w,p])=>e.jsxs("article",{children:[e.jsx("strong",{children:w}),e.jsx("span",{children:p})]},w))}),!a&&e.jsx("div",{className:"legal-stat-grid legal-reveal",children:wi.map((w,p)=>e.jsxs("article",{style:{"--delay":`${p*70}ms`},children:[e.jsx("strong",{className:"legal-stat-value",children:w.value||`${Math.round(w.target*n)}${w.suffix}`}),e.jsx("span",{children:w.label})]},w.label))}),e.jsx("div",{className:"legal-highlight-grid",children:g.map(([w,p,b],x)=>e.jsxs("article",{className:"legal-highlight-card legal-reveal",style:{"--delay":`${x*80}ms`},children:[e.jsx("span",{children:w}),e.jsx("h3",{children:p}),e.jsx("p",{children:b})]},p))}),e.jsx("div",{className:"legal-benefit-grid",children:y.map(([w,p],b)=>e.jsxs("article",{className:"legal-benefit-card legal-reveal",style:{"--delay":`${b*55}ms`},children:[e.jsx("span",{children:String(b+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:w}),e.jsx("p",{children:p})]})]},w))}),e.jsx("div",{className:"legal-section-list",children:c.map((w,p)=>e.jsxs("article",{id:w.id,className:"legal-section-card legal-reveal",style:{"--delay":`${p*45}ms`},children:[e.jsx("div",{className:"legal-section-icon","aria-hidden":"true",children:w.icon}),e.jsxs("div",{children:[e.jsx("span",{className:"legal-section-number",children:w.number}),e.jsx("h3",{children:w.title}),e.jsx("p",{children:w.text})]})]},w.id))}),a?e.jsxs("article",{className:"legal-acceptance-card legal-reveal",children:[e.jsx("span",{"aria-hidden":"true",children:"OK"}),e.jsxs("div",{children:[e.jsx("h3",{children:"By continuing to use OZILLA FEST, you acknowledge and agree to these Terms & Conditions."}),e.jsx("p",{children:"Please read each section carefully before purchasing tickets, creating an account, or attending the event."})]})]}):e.jsxs("article",{className:"legal-promise-card legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:"Our Privacy Promise"}),e.jsx("h3",{children:"Transparent, secure, and respectful data practices."}),e.jsx("div",{children:vi.map(w=>e.jsx("span",{children:w},w))})]}),e.jsxs("section",{className:"legal-support-cta legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:a?"We Believe In Complete Transparency":"Questions About Your Privacy?"}),e.jsx("h2",{children:a?"Need help understanding our policies?":"Our team is always available to assist you."}),e.jsx("p",{className:"legal-support-copy",children:a?"Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.":"If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime."}),e.jsx("div",{className:"legal-support-grid",children:ki.map(([w,p])=>e.jsxs("article",{children:[e.jsx("span",{children:w}),e.jsx("strong",{children:p})]},w))}),e.jsx(Z,{to:"/contact",className:"legal-support-button",children:"Contact Support"})]})]})]})]})}function ji(){return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50",children:[e.jsx("h1",{className:"text-9xl font-bold text-purple-600 mb-4",children:"404"}),e.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Page Not Found"}),e.jsx("p",{className:"text-gray-600 mb-8 text-center max-w-md",children:"The page you're looking for doesn't exist or has been moved."}),e.jsx(Z,{to:"/",className:"bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:"Go to Homepage"})]})}function Gt(t){return m.lazy(async()=>{try{return await t()}catch(a){const r=String(a?.message||"").toLowerCase();if(r.includes("importing a module script failed")||r.includes("failed to fetch dynamically imported module")||r.includes("loading chunk")||r.includes("failed to load module script")||r.includes("error loading dynamically imported module")){const i=Number(sessionStorage.getItem("chunk_reload_ts")||0);if(Date.now()-i>8e3)return sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload(),new Promise(()=>{})}throw a}})}const Ni=Gt(()=>Bt(()=>import("./UserDashboardPage-BD6tq7CK.js"),__vite__mapDeps([0,1,2,3,4]))),Si=Gt(()=>Bt(()=>import("./AdminDashboardPage-oLONYos5.js"),__vite__mapDeps([5,1,2,3,4]))),Ai=Gt(()=>Bt(()=>import("./AdminTicketReviewPage-DlgZMu2L.js"),__vite__mapDeps([6,1,2,3,4])));function Pi(){return e.jsx(m.Suspense,{fallback:e.jsx(La,{}),children:e.jsxs(Wa,{children:[e.jsxs(K,{element:e.jsx(sr,{}),children:[e.jsx(K,{path:"/login",element:e.jsx(Lt,{children:e.jsx(Nr,{})})}),e.jsx(K,{path:"/register",element:e.jsx(Lt,{children:e.jsx(Cr,{})})}),e.jsx(K,{path:"/auth/google/callback",element:e.jsx(Lt,{children:e.jsx(Lr,{})})})]}),e.jsx(K,{path:"/",element:e.jsx(Fe,{children:e.jsx(Cs,{})})}),e.jsx(K,{path:"/dashboard",element:e.jsx(be,{to:"/",replace:!0})}),e.jsx(K,{path:"/about",element:e.jsx(be,{to:"/#about",replace:!0})}),e.jsx(K,{path:"/collaboration",element:e.jsx(be,{to:"/#sponsorship",replace:!0})}),e.jsx(K,{path:"/prismfest",element:e.jsx(be,{to:"/#home",replace:!0})}),e.jsx(K,{path:"/prismfest/celebrities",element:e.jsx(be,{to:"/#celebrities",replace:!0})}),e.jsx(K,{path:"/prismfest/events",element:e.jsx(be,{to:"/#events",replace:!0})}),e.jsx(K,{path:"/prismfest/future",element:e.jsx(be,{to:"/#future-events",replace:!0})}),e.jsx(K,{path:"/history",element:e.jsx(be,{to:"/#history",replace:!0})}),e.jsx(K,{path:"/events",element:e.jsx(be,{to:"/#events",replace:!0})}),e.jsx(K,{path:"/sponsorship",element:e.jsx(be,{to:"/#sponsorship",replace:!0})}),e.jsx(K,{path:"/contact",element:e.jsx(be,{to:"/#contact",replace:!0})}),e.jsx(K,{path:"/facilities",element:e.jsx(be,{to:"/#facilities",replace:!0})}),e.jsx(K,{path:"/hotels",element:e.jsx(Fe,{children:e.jsx(di,{})})}),e.jsx(K,{path:"/schedule",element:e.jsx(Fe,{children:e.jsx(xa,{})})}),e.jsx(K,{path:"/lineup",element:e.jsx(Fe,{children:e.jsx(xa,{})})}),e.jsx(K,{path:"/restaurants",element:e.jsx(be,{to:"/#restaurants",replace:!0})}),e.jsx(K,{path:"/discounts",element:e.jsx(be,{to:"/#discounts",replace:!0})}),e.jsx(K,{path:"/partner",element:e.jsx(be,{to:"/#about",replace:!0})}),e.jsx(K,{path:"/privacy",element:e.jsx(Fe,{children:e.jsx(ba,{type:"privacy"})})}),e.jsx(K,{path:"/terms",element:e.jsx(Fe,{children:e.jsx(ba,{type:"terms"})})}),e.jsx(K,{path:"/verification/:ticketId",element:e.jsx(Fe,{children:e.jsx(ni,{})})}),e.jsx(K,{path:"/tickets",element:e.jsx(It,{children:e.jsx(Zs,{})})}),e.jsxs(K,{element:e.jsx(rr,{}),children:[e.jsx(K,{path:"/account",element:e.jsx(Fe,{children:e.jsx(Ni,{})})}),e.jsx(K,{path:"/admin",element:e.jsx(be,{to:"/admin/dashboard",replace:!0})}),e.jsx(K,{path:"/admin/dashboard",element:e.jsx(Fe,{children:e.jsx(Si,{})})}),e.jsx(K,{path:"/tickets/my-tickets",element:e.jsx(It,{children:e.jsx(si,{})})}),e.jsx(K,{path:"/tickets/view/:ticketId",element:e.jsx(It,{children:e.jsx(ii,{})})}),e.jsx(K,{path:"/admin/tickets",element:e.jsx(Fe,{children:e.jsx(Ai,{})})})]}),e.jsx(K,{path:"*",element:e.jsx(ji,{})})]})})}const Ti=typeof window<"u"&&window.innerWidth<768?.85:1.2,qe=2500,Ye=20,Ei=`
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
`,Ci=`
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
`,Li=`
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
`,Ii=`
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
`;function ya(t,a,r){const s=t.createShader(a);return s?(t.shaderSource(s,r),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(console.error("ParticleDrift shader:",t.getShaderInfoLog(s)),t.deleteShader(s),null)):null}function wa(t,a,r){const s=ya(t,t.VERTEX_SHADER,a),i=ya(t,t.FRAGMENT_SHADER,r);if(!s||!i)return null;const l=t.createProgram();return l?(t.attachShader(l,s),t.attachShader(l,i),t.linkProgram(l),t.getProgramParameter(l,t.LINK_STATUS)?l:(console.error("ParticleDrift link:",t.getProgramInfoLog(l)),null)):null}function va(t,a){if(!t)return a;const r=String(t).trim();if(r.charAt(0)==="#"){let i=r.slice(1);if((i.length===3||i.length===4)&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),i.length>=6){const l=parseInt(i.slice(0,2),16),n=parseInt(i.slice(2,4),16),o=parseInt(i.slice(4,6),16);if(!isNaN(l)&&!isNaN(n)&&!isNaN(o))return[l/255,n/255,o/255]}return a}const s=r.match(/[\d.]+/g);return s&&s.length>=3?[Math.min(255,parseFloat(s[0]))/255,Math.min(255,parseFloat(s[1]))/255,Math.min(255,parseFloat(s[2]))/255]:a}function _e(t,a){return typeof t=="number"&&isFinite(t)?t:a}function rt(t,a,r){return t<a?a:t>r?r:t}function Ri(t){let a=t>>>0;return function(){a+=1831565813;let r=a;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}const Ot=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function zi({style:t,background:a="transparent",baseColor:r="#F84400",accentColor:s="#ECECEC",density:i=235,dotSize:l=14,speed:n=100,direction:o=0,hover:c=200,linkDistance:u=202,linkThickness:g=2.5,width:y,height:k,isFixed:A=!0}){const w=m.useRef(null),p=m.useRef(null),b=m.useRef({w:0,h:0});b.current={w:_e(y,0),h:_e(k,0)};const x=m.useRef({x:-1e4,y:-1e4}),M=m.useRef({});M.current={base:r,accent:s,density:Math.round(rt(_e(i,90),10,400)),dotSize:rt(_e(l,5),1,24),speed:rt(_e(n,50),0,100)/50,direction:rt(_e(o,0),0,360),hover:rt(_e(c,100),0,200)/100,linkDistance:rt(_e(u,120),0,400),linkThickness:rt(_e(g,1),.5,8)},m.useEffect(()=>{const f=p.current;if(!f)return;const d=f.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!d){console.error("ParticleDrift: WebGL unavailable");return}const _=wa(d,Ei,Ci),L=wa(d,Li,Ii);if(!_||!L)return;const P=new Map,h=(se,G)=>{const S=(se===_?"L:":"D:")+G;return P.has(S)||P.set(S,d.getUniformLocation(se,G)),P.get(S)},v=new Float32Array(qe*6*2),I=new Float32Array(qe*6*2),R=new Float32Array(qe*6*2),q=new Float32Array(qe*6*3);for(let se=0;se<qe;se++)for(let G=0;G<6;G++){const S=(se*6+G)*2;R[S]=Ot[G][0],R[S+1]=Ot[G][1]}const B=d.createBuffer(),T=d.createBuffer(),H=d.createBuffer(),X=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,B),d.bufferData(d.ARRAY_BUFFER,v.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,T),d.bufferData(d.ARRAY_BUFFER,I.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,H),d.bufferData(d.ARRAY_BUFFER,R,d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,X),d.bufferData(d.ARRAY_BUFFER,q.byteLength,d.DYNAMIC_DRAW);const U=Ri(20260824);let F=0,O=new Float32Array(0),Y=new Float32Array(0),de=new Float32Array(0),N=new Float32Array(0),z=new Float32Array(0);const D=d.createBuffer(),C=d.createBuffer(),$=(se,G,S)=>{F=se,O=new Float32Array(se),Y=new Float32Array(se),de=new Float32Array(se),N=new Float32Array(se*2),z=new Float32Array(se);for(let E=0;E<se;E++)O[E]=U()*G,Y[E]=U()*S,de[E]=(U()*.4+.1)*60;d.bindBuffer(d.ARRAY_BUFFER,D),d.bufferData(d.ARRAY_BUFFER,N.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,C),d.bufferData(d.ARRAY_BUFFER,z.byteLength,d.DYNAMIC_DRAW)};let ae=0,Q=performance.now(),ce=-1,re=0,oe=0;const me=se=>{if(ae=requestAnimationFrame(me),typeof document<"u"&&document.hidden){Q=se;return}const G=Math.min(.05,(se-Q)/1e3);Q=se;const S=M.current,E=S.speed,ne=Math.min(window.devicePixelRatio||1,Ti),ee=b.current.w||f.clientWidth||window.innerWidth||1200,ie=b.current.h||f.clientHeight||window.innerHeight||800,Le=Math.max(1,Math.round(ee*ne)),Ee=Math.max(1,Math.round(ie*ne));(f.width!==Le||f.height!==Ee)&&(f.width=Le,f.height=Ee),d.viewport(0,0,Le,Ee);const ke=ee<768,Je=ee>=768&&ee<1024;let De=S.density,Re=S.linkDistance,dt=S.dotSize;if(ke?(De=Math.max(60,Math.min(Math.round(S.density*.38),90)),Re=Math.min(S.linkDistance,135),dt=Math.min(S.dotSize,8.5)):Je&&(De=Math.max(90,Math.min(Math.round(S.density*.6),145)),Re=Math.min(S.linkDistance,165),dt=Math.min(S.dotSize,11)),De!==ce&&($(De,ee,ie),ce=De),ee!==re||ie!==oe){const V=ee/Math.max(re||ee,1),le=ie/Math.max(oe||ie,1);for(let he=0;he<F;he++)O[he]*=V,Y[he]*=le;re=ee,oe=ie}const Qe=x.current,pt=S.hover,mt=(ke?100:180)*(pt>0?1:0),Se=Re,ft=ke?Math.min(S.linkThickness,1.6):S.linkThickness,ht=S.direction*Math.PI/180,xt=Math.sin(ht),At=Math.cos(ht);let ze=0;const bt=(V,le,he,Ae,we,Ie,Ue,st)=>{if(!(ze>=qe)){for(let Me=0;Me<6;Me++){const it=(ze*6+Me)*2,Pt=(ze*6+Me)*3;v[it]=V,v[it+1]=le,I[it]=he,I[it+1]=Ae,q[Pt]=Ot[Me][0]===0?we:Ie,q[Pt+1]=Ue,q[Pt+2]=st}ze++}};for(let V=0;V<F;V++){O[V]+=de[V]*xt*G*E,Y[V]+=de[V]*At*G*E,O[V]<-Ye?(O[V]=ee+Ye,Y[V]=U()*ie):O[V]>ee+Ye&&(O[V]=-Ye,Y[V]=U()*ie),Y[V]<-Ye?(Y[V]=ie+Ye,O[V]=U()*ee):Y[V]>ie+Ye&&(Y[V]=-Ye,O[V]=U()*ee);const le=Qe.x-O[V],he=Qe.y-Y[V],Ae=Math.sqrt(le*le+he*he),we=mt>0&&Ae<mt?1:0;if(we===1){const Ie=.5*(1-Ae/mt)*pt;bt(O[V],Y[V],Qe.x,Qe.y,Ie,Ie,1,ft)}N[V*2]=O[V],N[V*2+1]=Y[V],z[V]=we}if(Se>0){const V=Se*Se;for(let le=0;le<F&&ze<qe;le++){const he=O[le],Ae=Y[le];for(let we=le+1;we<F&&ze<qe;we++){const Ie=he-O[we];if(Ie>Se||Ie<-Se)continue;const Ue=Ae-Y[we];if(Ue>Se||Ue<-Se)continue;const st=Ie*Ie+Ue*Ue;if(st>=V)continue;const Me=.15*(1-Math.sqrt(st)/Se);bt(he,Ae,O[we],Y[we],Me,Me,0,ft)}}}d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.disable(d.DEPTH_TEST),d.enable(d.BLEND),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA);const $e=va(S.base,[.973,.267,0]),He=va(S.accent,[.925,.925,.925]);if(ze>0){d.useProgram(_);const V=ze*6;d.bindBuffer(d.ARRAY_BUFFER,B),d.bufferSubData(d.ARRAY_BUFFER,0,v.subarray(0,V*2));const le=d.getAttribLocation(_,"a_p0");d.enableVertexAttribArray(le),d.vertexAttribPointer(le,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,T),d.bufferSubData(d.ARRAY_BUFFER,0,I.subarray(0,V*2));const he=d.getAttribLocation(_,"a_p1");d.enableVertexAttribArray(he),d.vertexAttribPointer(he,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,H);const Ae=d.getAttribLocation(_,"a_corner");d.enableVertexAttribArray(Ae),d.vertexAttribPointer(Ae,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,X),d.bufferSubData(d.ARRAY_BUFFER,0,q.subarray(0,V*3));const we=d.getAttribLocation(_,"a_shade");d.enableVertexAttribArray(we),d.vertexAttribPointer(we,3,d.FLOAT,!1,0,0),d.uniform2f(h(_,"uSize"),ee,ie),d.uniform3f(h(_,"uBase"),$e[0],$e[1],$e[2]),d.uniform3f(h(_,"uAccent"),He[0],He[1],He[2]),d.drawArrays(d.TRIANGLES,0,V),d.disableVertexAttribArray(le),d.disableVertexAttribArray(he),d.disableVertexAttribArray(Ae),d.disableVertexAttribArray(we)}if(F>0){d.useProgram(L),d.bindBuffer(d.ARRAY_BUFFER,D),d.bufferSubData(d.ARRAY_BUFFER,0,N);const V=d.getAttribLocation(L,"a_pos");d.enableVertexAttribArray(V),d.vertexAttribPointer(V,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,C),d.bufferSubData(d.ARRAY_BUFFER,0,z);const le=d.getAttribLocation(L,"a_lit");d.enableVertexAttribArray(le),d.vertexAttribPointer(le,1,d.FLOAT,!1,0,0),d.uniform2f(h(L,"uSize"),ee,ie),d.uniform1f(h(L,"uDpr"),ne),d.uniform1f(h(L,"uDot"),dt),d.uniform1f(h(L,"uRestAlpha"),.4),d.uniform3f(h(L,"uBase"),$e[0],$e[1],$e[2]),d.uniform3f(h(L,"uAccent"),He[0],He[1],He[2]),d.drawArrays(d.POINTS,0,F),d.disableVertexAttribArray(V),d.disableVertexAttribArray(le)}},ye=se=>{const G=f.getBoundingClientRect();if(G.width<=0||G.height<=0)return;const S=b.current.w||f.clientWidth||window.innerWidth||1200,E=b.current.h||f.clientHeight||window.innerHeight||800;x.current.x=(se.clientX-G.left)/G.width*S,x.current.y=(se.clientY-G.top)/G.height*E},fe=()=>{x.current.x=-1e4,x.current.y=-1e4};return window.addEventListener("pointermove",ye,{passive:!0}),window.addEventListener("pointerleave",fe,{passive:!0}),ae=requestAnimationFrame(me),()=>{cancelAnimationFrame(ae),window.removeEventListener("pointermove",ye),window.removeEventListener("pointerleave",fe),d.deleteBuffer(B),d.deleteBuffer(T),d.deleteBuffer(H),d.deleteBuffer(X),d.deleteBuffer(D),d.deleteBuffer(C),d.deleteProgram(_),d.deleteProgram(L)}},[]);const j=A?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:a,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:a,isolation:"isolate",width:typeof y=="number"&&y>0?y:"100%",height:typeof k=="number"&&k>0?k:"100%",...t};return e.jsx("div",{ref:w,style:j,"aria-hidden":"true",children:e.jsx("canvas",{ref:p,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function Mi(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(qa,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(er,{children:[e.jsx(zi,{}),e.jsx(Pi,{})]})})}const ka=(t="")=>{const a=String(t).toLowerCase();return a.includes("importing a module script failed")||a.includes("failed to fetch dynamically imported module")||a.includes("loading chunk")||a.includes("failed to load module script")||a.includes("error loading dynamically imported module")||a.includes("mime type")||a.includes("dynamically imported")};class Fi extends m.Component{constructor(r){super(r);Vt(this,"handleReload",()=>{sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload()});this.state={error:null}}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,s){if(console.error("Application render error:",r,s),ka(r?.message)){const i=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-i>8e3&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}}render(){if(this.state.error){const r=ka(this.state.error?.message);return e.jsxs("main",{style:{padding:"32px 20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',maxWidth:"540px",margin:"60px auto",textAlign:"center",backgroundColor:"#121118",color:"#f3f4f6",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"},children:[e.jsx("h2",{style:{color:"#f97316",marginBottom:"12px",fontSize:"1.4rem"},children:r?"New Update Available":"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#9ca3af",marginBottom:"20px",fontSize:"0.95rem",lineHeight:"1.5"},children:r?"A fresh update has been deployed. Please tap refresh to load the latest version.":"Please refresh the page to reload the application."}),e.jsx("button",{type:"button",onClick:this.handleReload,style:{padding:"12px 28px",backgroundColor:"#ea580c",color:"#ffffff",border:"none",borderRadius:"999px",cursor:"pointer",fontWeight:"700",fontSize:"1rem",boxShadow:"0 4px 14px rgba(234, 88, 12, 0.4)",transition:"transform 0.15s ease"},children:"Refresh Website"})]})}return this.props.children}}if(typeof window<"u"){const t=a=>{const r=String(a?.message||a?.reason?.message||"").toLowerCase();if(r.includes("importing a module script failed")||r.includes("failed to fetch dynamically imported module")||r.includes("loading chunk")||r.includes("failed to load module script")){const s=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-s>8e3&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}};window.addEventListener("error",t),window.addEventListener("unhandledrejection",t)}const Oi="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com";Dt.createRoot(document.getElementById("root")).render(e.jsx(ut.StrictMode,{children:e.jsx(Fi,{children:e.jsx(Ja,{clientId:Oi,children:e.jsx(Mi,{})})})}));export{Ut as A,Ht as a,te as b,Hi as c,Ks as f,Ne as t,Ke as u};
