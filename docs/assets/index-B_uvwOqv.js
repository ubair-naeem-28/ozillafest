const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserDashboardPage-Ae3fm5e8.js","assets/vendor-motion-BW8tmsoW.js","assets/vendor-react-DycaHlXR.js","assets/PageHeader-Cr0bo0tp.js","assets/vendor-utils-BRCtA9qj.js","assets/AdminDashboardPage-WGlE5e-d.js","assets/AdminTicketReviewPage-B37gDgQS.js"])))=>i.map(i=>d[i]);
var Ba=Object.defineProperty;var $a=(t,a,r)=>a in t?Ba(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;var Gt=(t,a,r)=>$a(t,typeof a!="symbol"?a+"":a,r);import{j as e,u as ka,m as oe,a as Wt,b as Ha,A as Ua}from"./vendor-motion-BW8tmsoW.js";import{a as Ga,r as m,R as ut,u as Je,N as we,O as ht,L as Z,b as pt,c as Wa,d as Va,e as ja,f as qa,g as J,B as Ya}from"./vendor-react-DycaHlXR.js";import{a as Xa,Q as Za}from"./vendor-utils-BRCtA9qj.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var Ft={},Vt=Ga;Ft.createRoot=Vt.createRoot,Ft.hydrateRoot=Vt.hydrateRoot;function Ka(t={}){const{nonce:a,locale:r,onScriptLoadSuccess:s,onScriptLoadError:i}=t,[l,n]=m.useState(!1),o=m.useRef(s);o.current=s;const c=m.useRef(i);return c.current=i,m.useEffect(()=>{const g=document.createElement("script");return g.src="https://accounts.google.com/gsi/client",r&&(g.src+=`?hl=${r}`),g.async=!0,g.defer=!0,g.nonce=a,g.onload=()=>{var u;n(!0),(u=o.current)===null||u===void 0||u.call(o)},g.onerror=()=>{var u;n(!1),(u=c.current)===null||u===void 0||u.call(c)},document.body.appendChild(g),()=>{document.body.removeChild(g)}},[a]),l}const Ja=m.createContext(null);function Qa({clientId:t,nonce:a,locale:r,onScriptLoadSuccess:s,onScriptLoadError:i,children:l}){const n=Ka({nonce:a,onScriptLoadSuccess:s,onScriptLoadError:i,locale:r}),o=m.useMemo(()=>({locale:r,clientId:t,scriptLoadedSuccessfully:n}),[t,n]);return ut.createElement(Ja.Provider,{value:o},l)}const At="prism_token",je={getToken(){return localStorage.getItem(At)},setToken(t){localStorage.setItem(At,t)},removeToken(){localStorage.removeItem(At)}};function Na(){return"https://ozillafest.onrender.com/api"}const Sa=Na(),Ui=Sa.replace(/\/api\/?$/,""),ee=Xa.create({baseURL:Sa,headers:{"Content-Type":"application/json"}});ee.interceptors.request.use(t=>{t.baseURL=Na();const a=je.getToken();return a&&(t.headers.Authorization=`Bearer ${a}`),t},t=>Promise.reject(t));ee.interceptors.response.use(t=>t,t=>(t.response?.status===401&&je.removeToken(),Promise.reject(t)));const Ce={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/resend-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",GOOGLE_CONFIG:"/auth/google/config",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},Aa="ozilla_local_users";let dt=!1;function Le(t){return String(t||"").toLowerCase().trim()}function Ue(t){return String(t||"").trim()}function Ve(){try{const t=localStorage.getItem(Aa),a=t?JSON.parse(t):[];return Array.isArray(a)?a:[]}catch{return[]}}function qe(t){localStorage.setItem(Aa,JSON.stringify(t))}function er(t){const a={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(a))}`}function Pt(t){const a=String(t||"");if(!a)return null;if(a.startsWith("local."))try{return JSON.parse(atob(a.slice(6)))}catch{return null}const r=a.split(".");if(r.length===3)try{return JSON.parse(atob(r[1]))}catch{return null}return null}function kt(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function lt(t={}){const a=String(t.firstName||"Local").trim()||"Local",r=String(t.lastName||"User").trim()||"User",s=Le(t.email||"local@ozillafestival.com"),i=Ue(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:a,lastName:r,name:`${a} ${r}`.trim(),email:s,phone:i,password:String(t.password||""),role:"user"}}function Ot(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function Tt(t){return Ot(t)?(dt=!0,!0):!1}function ct(t){const a=kt(t);return{token:er(a),user:a,mode:"local-fallback"}}const Ke={async login(t){const a=String(t?.email||t?.phone||t?.identifier||"").trim(),r=Le(a),s=Ue(a),i=String(t?.password||"").trim();try{const l=await ee.post(Ce.AUTH.LOGIN,{email:a,password:i});if(l?.data?.token){const n=Ve(),o=n.findIndex(g=>Le(g.email)===r||Ue(g.phone)===s),c={id:l.data.user?.id||`user-${Date.now()}`,firstName:l.data.user?.firstName||"",lastName:l.data.user?.lastName||"",name:l.data.user?.name||"",email:l.data.user?.email?Le(l.data.user.email):r,phone:l.data.user?.phone?Ue(l.data.user.phone):s,password:i,role:l.data.user?.role||"user"};return o>=0?(n[o]=c,qe(n)):qe([c,...n]),l.data}return l.data}catch(l){const n=Ve(),o=n.find(g=>(Le(g.email)===r||Ue(g.phone)===s)&&g.password===i);if(o)return dt=!0,ct(o);const c=n.find(g=>Le(g.email)===r||Ue(g.phone)===s);if(c&&c.password!==i){const g=new Error("Invalid credentials. Please check your password.");throw g.response={status:401,data:{message:"Invalid credentials. Please check your password."}},g}throw l}},async register(t){const a=Le(t?.email),r=Ue(t?.phone),s=String(t?.password||"").trim(),i=Ve(),l=i.find(o=>Le(o.email)===a),n=i.find(o=>Ue(o.phone)===r);try{const o=await ee.post(Ce.AUTH.REGISTER,{...t,email:a,phone:r,password:s});if(o?.data?.token){const c=lt({id:o.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:a,phone:r,password:s}),g=i.filter(u=>Le(u.email)!==a&&Ue(u.phone)!==r);qe([c,...g])}return o.data}catch(o){if(o?.response?.status===409||o?.response?.data?.message)throw o;if(l){const g=new Error("Account already exists with this email. Please log in.");throw g.response={status:409,data:{message:"Account already exists with this email. Please log in."}},g}if(n){const g=new Error("Account already exists with this phone number. Please log in.");throw g.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},g}const c=lt({...t,email:a,phone:r,password:s});return qe([c,...i]),dt=!0,ct(c)}},async sendOtp(t){const a=Le(t);try{return(await ee.post(Ce.AUTH.SEND_OTP,{email:a})).data}catch(r){if(r?.response?.status===404)try{return(await ee.post(Ce.AUTH.RESEND_OTP,{email:a})).data}catch(s){if(s?.response?.data?.message)throw s}if(r?.response?.data?.message)throw r;if(Ot(r)){const s=new Error("Cannot connect to backend server. Please ensure the backend server is running and reachable.");throw s.response={status:503,data:{message:"Cannot connect to backend server. Please ensure the backend server is running and reachable."}},s}throw r}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const a=Le(t?.email),r=String(t?.otp||"").trim();try{return(await ee.post(Ce.AUTH.VERIFY_OTP,{email:a,otp:r})).data}catch(s){if(s?.response?.data?.message)throw s;if(Ot(s)){const i=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw i.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},i}throw s}},async getCurrentUser(){const t=je.getToken();if(!t){const a=new Error("Unauthorized");throw a.response={status:401,data:{message:"Unauthorized"}},a}try{return(await ee.get(Ce.AUTH.ME)).data}catch(a){const r=Pt(t);if(r?.mode==="local-fallback"||String(t||"").startsWith("local.")){const i=Ve().find(l=>l.id===r?.sub||Le(l.email)===Le(r?.email));if(i)return kt(i)}throw je.removeToken(),a}},async logout(){je.removeToken();try{localStorage.removeItem("ozilla_local_users")}catch{}try{return(await ee.post(Ce.AUTH.LOGOUT)).data}catch{return{message:"Logged out successfully"}}},async forgotPassword(t){return(await ee.post(Ce.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await ee.post(Ce.AUTH.RESET_PASSWORD,t)).data},async getGoogleConfig(){try{return(await ee.get(Ce.AUTH.GOOGLE_CONFIG)).data?.clientId||null}catch{return null}},async googleAuth(t,a){if(dt){if(!a?.email)throw new Error("Google account email is required");const r=lt(a),s=Ve();return s.some(i=>i.email===r.email)||qe([r,...s]),ct(r)}try{return(await ee.post(Ce.AUTH.GOOGLE,{token:t,profile:a})).data}catch(r){if(Tt(r)&&a?.email){const s=lt(a);return ct(s)}throw r}},async googleCodeLogin(t,a="postmessage",r){if(dt){if(!r?.email)throw new Error("Google account email is required");const s=lt(r),i=Ve();return i.some(l=>l.email===s.email)||qe([s,...i]),ct(s)}try{return(await ee.post(Ce.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:a,profile:r})).data}catch(s){if(Tt(s)&&r?.email){const i=lt(r);return ct(i)}throw s}},async googleTokenLogin(t,a){return this.googleAuth(t,a)},async updateProfile(t){if(dt){const a=je.getToken(),r=Pt(a),s=Ve(),i=s.findIndex(o=>o.id===r?.sub||o.email===r?.email);if(i===-1){const o=new Error("Unauthorized");throw o.response={status:401,data:{message:"Unauthorized"}},o}const l=s[i],n={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return n.name=`${n.firstName||""} ${n.lastName||""}`.trim()||l.name,s[i]=n,qe(s),{message:"Profile updated successfully",user:kt(n)}}try{return(await ee.put(Ce.AUTH.PROFILE,t)).data}catch(a){if(Tt(a)){const r=je.getToken(),s=Pt(r),i=Ve(),l=i.findIndex(c=>c.id===s?.sub||c.email===s?.email);if(l===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const n=i[l],o={...n,firstName:typeof t?.firstName=="string"?t.firstName.trim():n.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():n.lastName,phone:typeof t?.phone=="string"?t.phone.trim():n.phone};return o.name=`${o.firstName||""} ${o.lastName||""}`.trim()||n.name,i[l]=o,qe(i),{message:"Profile updated successfully",user:kt(o)}}throw a}}},Pa=m.createContext(null);function tr({children:t}){const[a,r]=m.useState(null),[s,i]=m.useState(!0);m.useEffect(()=>{l()},[]);const l=async()=>{try{if(je.getToken()){const k=await Ke.getCurrentUser();r(k)}}catch{je.removeToken()}finally{i(!1)}},n=async b=>{const k=await Ke.login(b);return je.setToken(k.token),r(k.user),k},o=async b=>{const k=await Ke.register(b);return je.setToken(k.token),r(k.user),k},c=()=>{Ke.logout().catch(()=>{}),je.removeToken(),r(null)},g=a?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(a?.email||"").toLowerCase().trim()),u={user:a,isAdmin:g,loading:s,login:n,register:o,logout:c,checkAuth:l};return e.jsx(Pa.Provider,{value:u,children:t})}const ar="modulepreload",rr=function(t){return"/ozillafest/"+t},qt={},_t=function(a,r,s){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=n?.nonce||n?.getAttribute("nonce");i=Promise.allSettled(r.map(c=>{if(c=rr(c),c in qt)return;qt[c]=!0;const g=c.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const b=document.createElement("link");if(b.rel=g?"stylesheet":ar,g||(b.as="script"),b.crossOrigin="",b.href=c,o&&b.setAttribute("nonce",o),document.head.appendChild(b),g)return new Promise((k,S)=>{b.addEventListener("load",k),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(n){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n}return i.then(n=>{for(const o of n||[])o.status==="rejected"&&l(o.reason);return a().catch(l)})};function Qe(){const t=m.useContext(Pa);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function sr({children:t}){const{user:a,loading:r}=Qe(),s=Je();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!a){const i=`${s.pathname}${s.search}`,l=new URLSearchParams({returnTo:i}).toString();return e.jsx(we,{to:`/login?${l}`,replace:!0})}return t||e.jsx(ht,{})}function Nt(t,a="/dashboard"){if(!t||typeof t!="string")return a;let r=t.trim();if(r.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(r))return a;r.startsWith("/ozillafest")&&(r=r.slice(11)),r.startsWith("/")||(r=`/${r}`);const s=r.split("?")[0].replace(/\/$/,"");return!s||s==="/login"||s==="/register"?a:r}function ir({children:t}){const{user:a,loading:r}=Qe(),s=Je();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(a){const l=new URLSearchParams(s.search).get("returnTo"),n=Nt(l,"/dashboard");return e.jsx(we,{to:n,replace:!0})}return t||e.jsx(ht,{})}function V(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const a="/ozillafest/",r=a.endsWith("/")?a:`${a}/`,s=t.replace(/^\/+/,"");return s.startsWith("assets/")||s.startsWith("favicon")?`${r}${s}`:t.startsWith("/")?`${r}${s}`:t}function nr({className:t="",nodeColor:a="#EC4899",lineColor:r="236, 72, 153",secondaryColor:s="255, 90, 31",maxDistance:i=135,speed:l=.5}){const n=m.useRef(null);return m.useEffect(()=>{const o=n.current;if(!o)return;const c=o.getContext("2d",{alpha:!0});if(!c)return;let g=null,u=!0,b=!1,k=o.width=o.parentElement?.clientWidth||window.innerWidth,S=o.height=o.parentElement?.clientHeight||window.innerHeight;const p=k<768?18:34,y=340,x=450,M=i*i;let N={x:k/2,y:S/2,active:!1},f={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const d=[];for(let B=0;B<p;B++)d.push({x:(Math.random()-.5)*k*1.1,y:(Math.random()-.5)*S*1.1,z:(Math.random()-.5)*x,vx:(Math.random()-.5)*l*.7,vy:(Math.random()-.5)*l*.7,vz:(Math.random()-.5)*l*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const _=()=>{o.parentElement&&(k=o.width=o.parentElement.clientWidth||window.innerWidth,S=o.height=o.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",_,{passive:!0});const L=B=>{if(!u)return;const P=o.getBoundingClientRect();N.x=B.clientX-P.left,N.y=B.clientY-P.top,N.active=!0;const $=(N.x-k/2)/(k/2),X=(N.y-S/2)/(S/2);f.targetRotY=$*.14,f.targetRotX=-X*.14},A=()=>{N.active=!1,f.targetRotX=0,f.targetRotY=0};window.addEventListener("mousemove",L,{passive:!0}),window.addEventListener("mouseleave",A,{passive:!0});const h=()=>{if(!u||document.hidden){b=!1;return}c.clearRect(0,0,k,S),f.rotX+=(f.targetRotX-f.rotX)*.05,f.rotY+=(f.targetRotY-f.rotY)*.05;const B=Math.cos(f.rotY),P=Math.sin(f.rotY),$=Math.cos(f.rotX),X=Math.sin(f.rotX),H=k/2,O=S/2,D=k*.65,Y=S*.65,ce=x*.55,j=[];for(let F=0;F<p;F++){const E=d[F];E.x+=E.vx,E.y+=E.vy,E.z+=E.vz,(E.x<-D||E.x>D)&&(E.vx*=-1),(E.y<-Y||E.y>Y)&&(E.vy*=-1),(E.z<-ce||E.z>ce)&&(E.vz*=-1);const re=E.x*B-E.z*P,ie=E.z*B+E.x*P,Q=E.y*$-ie*X,te=ie*$+E.y*X,U=te+x;if(U<=0)continue;const ne=y/(y+U*.65),me=H+re*ne,Ae=O+Q*ne,Ne=Math.max(.18,Math.min(.85,(te+x)/(x*1.4)));j.push({x:me,y:Ae,scale:ne,alpha:Ne,radius:Math.max(1.2,E.radius*ne),colorType:E.colorType})}const z=j.length;for(let F=0;F<z;F++){const E=j[F];let re=0;for(let ie=F+1;ie<z&&re<3;ie++){const Q=j[ie],te=E.x-Q.x,U=E.y-Q.y,ne=te*te+U*U;if(ne<M){re++;const me=Math.sqrt(ne),Ae=(1-me/i)*.4*Math.min(E.alpha,Q.alpha),Ne=E.colorType==="primary"?r:s;c.beginPath(),c.moveTo(E.x,E.y),c.lineTo(Q.x,Q.y),c.strokeStyle=`rgba(${Ne}, ${Ae})`,c.lineWidth=Math.max(.5,(1-me/i)*1.2),c.stroke()}}}for(let F=0;F<z;F++){const E=j[F],re=E.colorType==="primary"?`rgba(${r}, ${E.alpha})`:`rgba(${s}, ${E.alpha})`;c.beginPath(),c.arc(E.x,E.y,E.radius,0,Math.PI*2),c.fillStyle=re,c.fill()}g=requestAnimationFrame(h)},v=()=>{!b&&u&&!document.hidden&&(b=!0,g=requestAnimationFrame(h))},C=()=>{b=!1,g&&(cancelAnimationFrame(g),g=null)};let R=null;"IntersectionObserver"in window?(R=new IntersectionObserver(([B])=>{u=B.isIntersecting,u?v():C()},{threshold:.05}),R.observe(o)):v();const q=()=>{document.hidden?C():u&&v()};return document.addEventListener("visibilitychange",q),()=>{C(),window.removeEventListener("resize",_),window.removeEventListener("mousemove",L),window.removeEventListener("mouseleave",A),document.removeEventListener("visibilitychange",q),R&&R.disconnect()}},[a,r,s,i,l]),e.jsx("canvas",{ref:n,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const Bt=ut.memo(nr);function Et({children:t}){const a=Je(),r=a.pathname==="/login",s=a.pathname==="/register",[i,l]=m.useState({x:0,y:0}),[n,o]=m.useState({x:50,y:42}),c=u=>{if(u.pointerType==="touch")return;const b=u.currentTarget.getBoundingClientRect(),k=(u.clientX-b.left)/b.width,S=(u.clientY-b.top)/b.height;l({x:(.5-S)*10,y:(k-.5)*10}),o({x:k*100,y:S*100})},g=()=>{l({x:0,y:0}),o({x:50,y:42})};return e.jsxs("main",{className:`kx-page auth-page ${r?"auth-page-login":""} ${s?"auth-page-register":""}`,children:[e.jsx(Bt,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:130,speed:.4}),e.jsx("div",{className:"kx-grid","aria-hidden":"true"}),e.jsx("div",{className:"kx-noise","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-top","aria-hidden":"true"}),e.jsx("div",{className:"kx-halo kx-halo-bottom","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-left","aria-hidden":"true"}),e.jsx("div",{className:"kx-orb kx-orb-right","aria-hidden":"true"}),e.jsxs("section",{className:`kx-stage ${s?"kx-stage-wide":""}`,children:[e.jsx("div",{className:"kx-tilt",onPointerMove:c,onPointerLeave:g,onPointerCancel:g,style:{transform:`rotateX(${i.x}deg) rotateY(${i.y}deg)`},children:e.jsxs("div",{className:"kx-card-shell",children:[e.jsx("div",{className:"kx-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"kx-runners","aria-hidden":"true",children:[e.jsx("span",{className:"kx-runner kx-runner-top"}),e.jsx("span",{className:"kx-runner kx-runner-right"}),e.jsx("span",{className:"kx-runner kx-runner-bottom"}),e.jsx("span",{className:"kx-runner kx-runner-left"})]}),e.jsxs("article",{className:"kx-card",children:[e.jsx("div",{className:"kx-pointer-glow","aria-hidden":"true",style:{left:`${n.x}%`,top:`${n.y}%`}}),e.jsx("div",{className:"kx-card-pattern","aria-hidden":"true"}),e.jsxs("header",{className:"kx-header",children:[e.jsx(Z,{to:"/",className:"kx-logo-link","aria-label":"OZILLA FEST Home",children:e.jsxs("div",{className:"kx-logo",children:[e.jsx("img",{src:V("/assets/ozilla/logo.png"),alt:"OZILLA FEST Logo",onError:u=>{u.currentTarget.src=V("/assets/logo.jpeg")}}),e.jsx("i",{"aria-hidden":"true"})]})}),e.jsx("span",{className:"kx-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"kx-title",children:r?"Welcome Back":"Join OZILLA FEST"}),e.jsx("p",{className:"kx-subtitle",children:r?"Sign in to access your passes, tickets & workspace":"Create your account for the ultimate festival experience"}),e.jsxs("div",{className:"kx-tabs",children:[e.jsx(Z,{to:`/login${a.search}`,className:`kx-tab-btn ${r?"active":""}`,children:"Sign In"}),e.jsx(Z,{to:`/register${a.search}`,className:`kx-tab-btn ${s?"active":""}`,children:"Create Account"})]})]}),e.jsx("div",{className:"kx-card-body",children:t||e.jsx(ht,{})})]})]})}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function or({children:t,className:a="",onClick:r,mouseX:s,spring:i,distance:l,magnification:n,baseItemSize:o,label:c}){const g=m.useRef(null),u=ka(0),b=Wt(s,x=>{if(x===1/0||!g.current)return l;const M=g.current.getBoundingClientRect(),N=M.left+M.width/2;return x-N}),k=Wt(b,[-l,0,l],[o,n,o]),S=Ha(k,i),w=x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),r?.())},p=()=>{u.set(1)},y=()=>{u.set(0)};return e.jsx(oe.div,{ref:g,style:{width:S,height:S},onHoverStart:p,onHoverEnd:y,onFocus:p,onBlur:y,onClick:r,className:`dock-item ${a}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":c,onKeyDown:w,children:m.Children.map(t,x=>m.cloneElement(x,{isHovered:u}))})}function lr({children:t,className:a="",...r}){const{isHovered:s}=r,[i,l]=m.useState(!1);return m.useEffect(()=>{if(!s)return;const n=s.on("change",o=>{l(o===1)});return()=>n()},[s]),e.jsx(Ua,{children:i&&e.jsx(oe.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${a}`,role:"tooltip",style:{x:"-50%"},children:t})})}function cr({children:t,className:a=""}){return e.jsx("div",{className:`dock-icon ${a}`,children:t})}function dr({items:t,className:a="",spring:r={mass:.1,stiffness:220,damping:18},magnification:s=52,distance:i=120,panelHeight:l=44,baseItemSize:n=36}){const o=ka(1/0),c=Je(),g=pt();return e.jsx("div",{className:"dock-outer",children:e.jsx(oe.div,{onMouseMove:u=>o.set(u.clientX),onMouseLeave:()=>o.set(1/0),className:`dock-panel ${a}`,style:{height:l},role:"toolbar","aria-label":"Application dock",children:t.map((u,b)=>{const k=c.pathname===u.to||u.to!=="/"&&c.pathname.startsWith(u.to)||u.to==="/"&&c.pathname==="/dashboard";return e.jsxs(or,{onClick:()=>{u.onClick?.(),u.to&&g(u.to)},className:`${u.className||""} ${k?"active":""}`,mouseX:o,spring:r,distance:i,magnification:s,baseItemSize:n,label:u.label,children:[e.jsx(cr,{children:u.icon}),e.jsx(lr,{children:u.label})]},u.to||b)})})})}function ve({path:t,size:a=24,viewBox:r="0 0 24 24",fill:s="none",stroke:i="currentColor",strokeWidth:l=1.8}){return e.jsx("svg",{width:a,height:a,viewBox:r,fill:s,stroke:i,strokeWidth:l,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const bt={home:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(ve,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(ve,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},pr=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Schedule",to:"/schedule",icon:"calendar"},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Hotels",to:"/hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function Yt(t){return t?.firstName||t?.name||t?.email||"Account"}function Ta(){const{user:t,isAdmin:a,logout:r}=Qe(),s=pt(),i=Je(),[l,n]=m.useState(!1),[o,c]=m.useState(!1),[g,u]=m.useState(!1),b=m.useRef(null),k=ut.useMemo(()=>{const p=[...pr];return a&&p.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),p},[a]),S=ut.useMemo(()=>k.map(p=>({label:p.label,to:p.to,icon:bt[p.icon],className:p.cta?"dock-item-cta":""})),[k]);m.useEffect(()=>{const p=()=>{b.current||(b.current=window.requestAnimationFrame(()=>{n(window.scrollY>12),b.current=null}))};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>{window.removeEventListener("scroll",p),b.current&&window.cancelAnimationFrame(b.current)}},[]),m.useEffect(()=>{c(!1),u(!1)},[i.pathname]);const w=()=>{r(),s("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${l?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(Z,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Fest home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:V("/assets/ozilla/logo.png"),alt:"Ozilla Fest",onError:p=>{p.currentTarget.src=V("/assets/company-logo.jpeg")}})}),e.jsx("div",{className:"dock-site-brand-text",children:e.jsx("strong",{children:"OZILLA FEST"})})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(dr,{items:S,className:"dock-nav",magnification:58,distance:140,panelHeight:62,baseItemSize:44,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${g?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>u(p=>!p),"aria-expanded":g,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(Yt(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:Yt(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(Z,{to:"/account",children:"Account"}),e.jsx(Z,{to:"/tickets/my-tickets",children:"My Tickets"}),a&&e.jsx(Z,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:w,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(Z,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${o?"open":""}`,"aria-label":o?"Close menu":"Open menu","aria-expanded":o,onClick:()=>c(p=>!p),children:o?bt.close:bt.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${o?"open":""}`,onClick:()=>c(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${o?"open":""}`,onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>c(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:k.map(p=>e.jsxs(Wa,{to:p.to,className:p.cta?"dock-mobile-link-cta":"",onClick:()=>c(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:bt[p.icon]}),e.jsx("span",{children:p.label}),p.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},p.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{w(),c(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{to:"/login",onClick:()=>c(!1),children:"Login"}),e.jsx(Z,{to:"/register",onClick:()=>c(!1),children:"Sign Up"})]})})]})})]})}const mr=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP & Ticket Passes",href:"/tickets"},{label:"The Festival Vibe",href:"/#about"},{label:"World-Class Facilities",href:"/#facilities"},{label:"My Digital Passes",href:"/tickets/my-tickets"}],fr=[{label:"Instagram",href:"https://www.instagram.com/ozillafestival"}],gr=[{label:"Sponsorship Inquiries",href:"/#sponsorship"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Hotel & Travel Partners",href:"/hotels"},{label:"Privacy & Terms",href:"/privacy"}];function Ea(){return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:"kex-footer",children:[e.jsx("div",{className:"kex-bg-glow","aria-hidden":"true"}),e.jsx("div",{className:"kex-bg-overlay","aria-hidden":"true"}),e.jsxs("div",{className:"kex-container",children:[e.jsxs("div",{className:"kex-nav-grid",children:[e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"MENU"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:mr.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(Z,{to:t.href,children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"SOCIALS"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:fr.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:t.label})},t.label))})]}),e.jsxs("div",{className:"kex-col",children:[e.jsx("h3",{className:"kex-col-title",children:"RESOURCES"}),e.jsx("div",{className:"kex-col-line"}),e.jsx("ul",{className:"kex-col-list",children:gr.map(t=>e.jsx("li",{children:t.href.startsWith("/#")?e.jsx("a",{href:t.href,children:t.label}):e.jsx(Z,{to:t.href,children:t.label})},t.label))}),e.jsx("div",{className:"kex-action-wrap",children:e.jsx("a",{href:"mailto:ozillafestival@gmail.com",className:"kex-pill-btn",children:"Send a message"})})]})]}),e.jsx("div",{className:"kex-hero-word-wrap","aria-hidden":"true",children:e.jsx("span",{className:"kex-hero-word",children:"OZILLA FEST"})}),e.jsxs("div",{className:"kex-bottom-row",children:[e.jsxs("div",{className:"kex-bottom-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(Z,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]}),e.jsx("p",{className:"kex-bottom-copy",children:"© 2026 OZILLA FEST & Prism Entertainment. All rights reserved."})]})]})]}),e.jsx("style",{children:ur})]})}const ur=`
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
`;function _e({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full relative z-[1]",children:[e.jsx(Ta,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden bg-transparent",children:t||e.jsx(ht,{})}),e.jsx(Ea,{})]})}function Ct({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell relative z-[1]",children:[e.jsx(Ta,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content bg-transparent",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(ht,{})})}),e.jsx(Ea,{})]})}function Ca(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}let yt;function hr(){return window.google?.accounts?.id||window.google?.accounts?.oauth2?Promise.resolve(window.google):yt||(yt=new Promise((t,a)=>{const r=document.querySelector('script[data-google-identity="true"]');if(r){r.addEventListener("load",()=>t(window.google),{once:!0}),r.addEventListener("error",()=>a(new Error("Failed to load Google Identity script")),{once:!0});return}const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.dataset.googleIdentity="true",s.onload=()=>t(window.google),s.onerror=()=>a(new Error("Failed to load Google Identity script")),document.head.appendChild(s)}),yt)}async function xr(t){const a=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${t}`}});if(!a.ok)throw new Error("Failed to fetch Google profile");return a.json()}async function La({clientId:t,onProfile:a,onError:r}){if(t.includes("placeholder")||t.includes("your_google"))throw new Error("Google Client ID is not configured. Please add GOOGLE_CLIENT_ID in Render or VITE_GOOGLE_CLIENT_ID in client/.env");if(await hr(),!window.google?.accounts?.oauth2?.initTokenClient)throw new Error("Google Identity Services library is unavailable");return new Promise((s,i)=>{window.google.accounts.oauth2.initTokenClient({client_id:t,scope:"openid email profile",prompt:"select_account",callback:async n=>{try{if(n?.error)throw n.error==="popup_closed_by_user"?new Error("Google sign-in was cancelled"):new Error(n.error_description||n.error||"Google login failed");if(!n?.access_token)throw new Error("Google sign-in was cancelled");const o=await xr(n.access_token);if(!o?.email)throw new Error("Could not retrieve email from selected Google account");a&&await a(o,n.access_token),s(o)}catch(o){r&&r(o),i(o)}},error_callback:n=>{const o=new Error(n?.message||"Google account chooser popup failed");r&&r(o),i(o)}}).requestAccessToken({prompt:"select_account"})})}function br(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function yr(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function wr({hidden:t=!1,...a}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),t&&e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function vr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function kr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function jr(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}function Nr(){const t=pt(),a=Je(),{login:r,checkAuth:s}=Qe(),i="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",l=new URLSearchParams(a.search).get("returnTo"),n=Nt(l,"/dashboard"),[o,c]=m.useState({email:"",password:""}),[g,u]=m.useState(null),[b,k]=m.useState(!1),[S,w]=m.useState(!0),[p,y]=m.useState(""),[x,M]=m.useState(""),[N,f]=m.useState(!1),[d,_]=m.useState(!1),L=v=>{M(""),c(C=>({...C,[v.target.name]:v.target.value}))},A=async v=>{if(v.preventDefault(),!(N||d)){y(""),M(""),f(!0);try{await r({email:String(o.email||"").trim().toLowerCase(),password:String(o.password||"")}),M("Login successful. Preparing your festival workspace..."),await new Promise(C=>setTimeout(C,450)),t(n)}catch(C){y(C.response?.data?.message||C.message||"Invalid email or password")}finally{f(!1)}}},h=async()=>{y(""),M(""),_(!0);try{await La({clientId:i||"231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",onProfile:async(C,R)=>{const q=await Ke.googleAuth(R,C);je.setToken(q.token),await s(),M(`Google sign-in successful as ${C.email}. Redirecting...`),await new Promise(B=>setTimeout(B,450)),t(n)}})}catch(v){const C=v.response?.data?.message||v.message||"Google sign-in failed";!C.toLowerCase().includes("cancel")&&!C.toLowerCase().includes("closed")&&y(C)}finally{_(!1)}};return e.jsxs("form",{onSubmit:A,className:"kx-form",children:[p&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:p}),x&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:x}),e.jsxs("button",{type:"button",className:"kx-google",onClick:h,disabled:d||N,children:[e.jsx(jr,{}),e.jsx("span",{children:d?"Connecting to Google...":"Continue with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or sign in with email"}),e.jsx("span",{})]}),e.jsxs("label",{className:`kx-field ${g==="email"?"kx-focused":""}`,children:[e.jsx(br,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"email",value:o.email,placeholder:"Email or Mobile Number",autoComplete:"username",required:!0,onChange:L,onFocus:()=>u("email"),onBlur:()=>u(null)}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${g==="password"?"kx-focused":""}`,children:[e.jsx(yr,{className:"kx-field-icon"}),e.jsx("input",{type:b?"text":"password",name:"password",value:o.password,placeholder:"Password",autoComplete:"current-password",required:!0,onChange:L,onFocus:()=>u("password"),onBlur:()=>u(null)}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>k(v=>!v),"aria-label":b?"Hide password":"Show password",children:e.jsx(wr,{hidden:b})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-meta",children:[e.jsxs("label",{className:"kx-remember",children:[e.jsx("input",{type:"checkbox",checked:S,onChange:v=>w(v.target.checked)}),e.jsx("span",{className:"kx-checkbox",children:S&&e.jsx(kr,{})}),e.jsx("span",{children:"Remember me"})]}),e.jsx("a",{href:"#forgot-password",className:"kx-forgot-link",children:"Forgot password?"})]}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:N||d,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),N?e.jsx("span",{className:"kx-spinner","aria-label":"Signing in..."}):e.jsxs("span",{className:"kx-button-copy",children:["Sign in",e.jsx(vr,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Don't have an account?"," ",e.jsx(Z,{to:`/register?${new URLSearchParams({returnTo:n}).toString()}`,children:"Create account"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Login"}),e.jsx("span",{children:"⚡ Fast Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Verified"})]})]})}function Sr(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(Nr,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/#contact",children:"Need Help?"})]})]})}function Xt(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function Ar(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function Pr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}function Zt(t){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"2"}),e.jsx("path",{d:"M8 10V7a4 4 0 0 1 8 0v3"})]})}function Kt({hidden:t=!1,...a}){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),t&&e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function Tr(t){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function Er(t){return e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...t,children:[e.jsx("path",{fill:"#4285F4",d:"M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.23c1.9-1.75 2.99-4.32 2.99-7.38Z"}),e.jsx("path",{fill:"#34A853",d:"M12 22c2.7 0 4.97-.9 6.62-2.39l-3.23-2.53c-.9.6-2.04.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.05v2.61A10 10 0 0 0 12 22Z"}),e.jsx("path",{fill:"#FBBC05",d:"M6.39 13.91A6.02 6.02 0 0 1 6.08 12c0-.66.11-1.3.31-1.91V7.48H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.52l3.34-2.61Z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.96c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.95 5.48l3.34 2.61C7.18 7.72 9.39 5.96 12 5.96Z"})]})}const Jt=()=>new Promise(t=>setTimeout(t,450));function Cr(){const t=pt(),a=Je(),{register:r,checkAuth:s}=Qe(),i="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",l=new URLSearchParams(a.search).get("returnTo"),n=Nt(l,"/dashboard"),[o,c]=m.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[g,u]=m.useState(null),[b,k]=m.useState(""),[S,w]=m.useState(!1),[p,y]=m.useState(!1),[x,M]=m.useState(!1),[N,f]=m.useState(!1),[d,_]=m.useState(0),[L,A]=m.useState(""),[h,v]=m.useState(""),[C,R]=m.useState(!1),[q,B]=m.useState(!1),[P,$]=m.useState(!1),[X,H]=m.useState(!1),[O,D]=m.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),Y=/^\S+@\S+\.\S+$/.test(o.email),ce=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(o.phone.replace(/\s+/g,"")),j={upper:/[A-Z]/.test(o.password),lower:/[a-z]/.test(o.password),number:/\d/.test(o.password),special:/[^A-Za-z0-9]/.test(o.password),length:o.password.length>=8},z=Object.values(j).filter(Boolean).length,F=z===5,E=o.confirmPassword.length>0&&o.password===o.confirmPassword,re=o.password.length>0,ie=m.useMemo(()=>re?z<=2?{label:"Weak",className:"weak",percent:28}:z===3?{label:"Medium",className:"medium",percent:52}:z===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[re,z]),Q=[{key:"upper",text:"Uppercase letter",met:j.upper},{key:"lower",text:"Lowercase letter",met:j.lower},{key:"number",text:"Number",met:j.number},{key:"special",text:"Special character",met:j.special},{key:"length",text:"8+ characters",met:j.length}],te=o.firstName.trim()&&o.lastName.trim()&&Y&&ce&&F&&E&&p&&!C&&!q;m.useEffect(()=>{if(d<=0)return;const T=window.setInterval(()=>{_(I=>Math.max(0,I-1))},1e3);return()=>window.clearInterval(T)},[d]);const U=()=>{A(""),v("")},ne=T=>{const{name:I,value:K}=T.target;U(),c(W=>({...W,[I]:K})),I==="email"&&(k(""),w(!1),y(!1),_(0)),I in O&&K.length>0&&D(W=>({...W,[I]:!0}))},me=T=>{const{name:I}=T.target;u(null),I in O&&D(K=>({...K,[I]:!0}))},Ae=async()=>{if(U(),!Y){D(T=>({...T,email:!0})),A("Please enter a valid email address before sending OTP.");return}M(!0);try{const T=await Ke.sendOtp(o.email);T?.emailDelivery==="failed"||typeof T?.message=="string"&&T.message.toLowerCase().includes("delivery failed")&&!T?.devOtp?(w(!1),A(T.emailError||"Email delivery failed: SMTP credentials (SMTP_USER and SMTP_PASS) are not configured on the backend server.")):(w(!0),y(!1),_(60),T?.devOtp?k(String(T.devOtp)):k(""),v(T.message||"OTP code has been sent to your email. Please check your inbox."))}catch(T){A(T.response?.data?.message||T.message||"Unable to send OTP.")}finally{M(!1)}},Ne=async()=>{if(U(),!Y||b.trim().length<4){A("Enter the OTP sent to your email.");return}f(!0);try{const T=await Ke.verifyOtp({email:o.email,otp:b});y(!0),v(T.message||"Email verified successfully.")}catch(T){y(!1),A(T.response?.data?.message||T.message||"OTP verification failed.")}finally{f(!1)}},se=async T=>{if(T.preventDefault(),U(),!Y){D(I=>({...I,email:!0})),A("Please enter a valid email address.");return}if(!p){A("Please verify your email OTP before creating your account.");return}if(!ce){D(I=>({...I,phone:!0})),A("Please enter a valid mobile number.");return}if(!F){D(I=>({...I,password:!0})),A("Please satisfy all password requirements.");return}if(!E){D(I=>({...I,confirmPassword:!0})),A("Passwords do not match.");return}R(!0);try{await r({firstName:o.firstName,lastName:o.lastName,name:`${o.firstName} ${o.lastName}`.trim(),email:o.email,phone:o.phone,password:o.password}),v("Account created successfully. Preparing your festival workspace..."),await Jt(),t(n)}catch(I){const K=I.response?.status,W=I.response?.data?.message||"Registration failed",ue=W.toLowerCase();K===409||ue.includes("already")||ue.includes("exists")?A("Account already exists with this email or phone number"):A(W)}finally{R(!1)}},ae=async()=>{U(),B(!0);try{await La({clientId:i||"231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com",onProfile:async(I,K)=>{const W=await Ke.googleAuth(K,I);je.setToken(W.token),await s(),v(`Google sign-up verified as ${I.email}. Welcome to OZILLA FEST!`),await Jt(),t(n)}})}catch(T){const I=T.response?.data?.message||T.message||"Google sign-up failed";!I.toLowerCase().includes("cancel")&&!I.toLowerCase().includes("closed")&&A(I)}finally{B(!1)}};return e.jsxs("form",{onSubmit:se,className:"kx-form",children:[L&&e.jsx("div",{className:"kx-alert kx-alert-error",role:"alert",children:L}),h&&e.jsx("div",{className:"kx-alert kx-alert-success",role:"alert",children:h}),e.jsxs("button",{type:"button",className:"kx-google",onClick:ae,disabled:q||C,children:[e.jsx(Er,{}),e.jsx("span",{children:q?"Connecting to Google...":"Sign up with Google"}),e.jsx("i",{"aria-hidden":"true"})]}),e.jsxs("div",{className:"kx-divider",children:[e.jsx("span",{}),e.jsx("em",{children:"or register with email"}),e.jsx("span",{})]}),e.jsxs("div",{className:"kx-grid-row",children:[e.jsxs("label",{className:`kx-field ${g==="firstName"?"kx-focused":""}`,children:[e.jsx(Xt,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"firstName",value:o.firstName,placeholder:"First Name",autoComplete:"given-name",required:!0,onChange:ne,onFocus:()=>u("firstName"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("label",{className:`kx-field ${g==="lastName"?"kx-focused":""}`,children:[e.jsx(Xt,{className:"kx-field-icon"}),e.jsx("input",{type:"text",name:"lastName",value:o.lastName,placeholder:"Last Name",autoComplete:"family-name",required:!0,onChange:ne,onFocus:()=>u("lastName"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]})]}),e.jsxs("label",{className:`kx-field ${g==="email"?"kx-focused":""} ${O.email&&!Y?"kx-field-invalid":""}`,children:[e.jsx(Ar,{className:"kx-field-icon"}),e.jsx("input",{type:"email",name:"email",value:o.email,placeholder:"Email address",autoComplete:"email",required:!0,onChange:ne,onFocus:()=>u("email"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),O.email&&!Y&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid email address."}),e.jsxs("div",{className:`kx-otp-box ${p?"kx-otp-verified":""}`,children:[e.jsxs("div",{className:"kx-otp-meta",children:[e.jsx("span",{className:"kx-otp-kicker",children:"Email Verification"}),e.jsx("strong",{children:p?"✓ Email verified":S?"Enter 6-digit code":"Verify email before submit"}),e.jsx("span",{className:"kx-otp-subtext",children:p?"Security verified":d>0?`Resend available in ${d}s`:"Code will be sent to your email"})]}),e.jsxs("div",{className:"kx-otp-controls",children:[e.jsx("button",{type:"button",className:"kx-otp-btn",onClick:Ae,disabled:x||!Y||p||d>0,children:x?"Sending...":S?"Resend OTP":"Send OTP"}),e.jsx("input",{type:"text",value:b,onChange:T=>{U(),k(T.target.value.replace(/\D/g,"").slice(0,6)),y(!1)},className:"kx-otp-input",placeholder:"Enter 6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!S||p}),e.jsx("button",{type:"button",className:"kx-otp-btn kx-otp-btn-accent",onClick:Ne,disabled:!S||p||N,children:N?"Verifying...":p?"Verified":"Verify"})]})]}),e.jsxs("label",{className:`kx-field ${g==="phone"?"kx-focused":""} ${O.phone&&!ce?"kx-field-invalid":""}`,children:[e.jsx(Pr,{className:"kx-field-icon"}),e.jsx("input",{type:"tel",name:"phone",value:o.phone,placeholder:"Phone (+92 3XX XXXXXXX)",autoComplete:"tel",required:!0,onChange:ne,onFocus:()=>u("phone"),onBlur:me}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),O.phone&&!ce&&e.jsx("p",{className:"kx-field-error-msg",children:"Please enter a valid mobile number."}),e.jsxs("label",{className:`kx-field ${g==="password"?"kx-focused":""} ${O.password&&!F?"kx-field-invalid":""}`,children:[e.jsx(Zt,{className:"kx-field-icon"}),e.jsx("input",{type:P?"text":"password",name:"password",value:o.password,placeholder:"Create Password",autoComplete:"new-password",required:!0,onChange:ne,onFocus:()=>u("password"),onBlur:me}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>$(T=>!T),"aria-label":P?"Hide password":"Show password",children:e.jsx(Kt,{hidden:P})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),e.jsxs("div",{className:`kx-strength kx-strength-${ie.className}`,children:[e.jsxs("div",{className:"kx-strength-header",children:[e.jsx("span",{children:"Password Strength"}),e.jsx("strong",{children:ie.label})]}),e.jsx("div",{className:"kx-strength-bar-track",children:e.jsx("span",{style:{width:`${ie.percent}%`}})})]}),e.jsx("ul",{className:"kx-pwd-rules",children:Q.map(T=>{const I=T.met?"kx-rule-met":re?"kx-rule-unmet":"kx-rule-neutral";return e.jsxs("li",{className:`kx-pwd-rule ${I}`,children:[e.jsx("span",{className:"kx-rule-badge",children:T.met?"✓":"•"}),e.jsx("span",{children:T.text})]},T.key)})}),e.jsxs("label",{className:`kx-field ${g==="confirmPassword"?"kx-focused":""} ${O.confirmPassword&&!E?"kx-field-invalid":""}`,children:[e.jsx(Zt,{className:"kx-field-icon"}),e.jsx("input",{type:X?"text":"password",name:"confirmPassword",value:o.confirmPassword,placeholder:"Confirm Password",autoComplete:"new-password",required:!0,onChange:ne,onFocus:()=>u("confirmPassword"),onBlur:me}),e.jsx("button",{className:"kx-password-toggle",type:"button",onClick:()=>H(T=>!T),"aria-label":X?"Hide confirm password":"Show confirm password",children:e.jsx(Kt,{hidden:X})}),e.jsx("span",{className:"kx-field-light","aria-hidden":"true"})]}),O.confirmPassword&&!E&&e.jsx("p",{className:"kx-field-error-msg",children:"Passwords do not match."}),e.jsxs("button",{className:"kx-sign-in",type:"submit",disabled:!te,children:[e.jsx("span",{className:"kx-button-glow","aria-hidden":"true"}),e.jsx("span",{className:"kx-button-sheen","aria-hidden":"true"}),C?e.jsx("span",{className:"kx-spinner","aria-label":"Creating account..."}):e.jsxs("span",{className:"kx-button-copy",children:["Create Account",e.jsx(Tr,{})]})]}),e.jsxs("p",{className:"kx-signup",children:["Already have an account?"," ",e.jsx(Z,{to:`/login?${new URLSearchParams({returnTo:n}).toString()}`,children:"Sign In"})]}),e.jsxs("div",{className:"kx-trust-grid","aria-label":"Security indicators",children:[e.jsx("span",{children:"🔒 Secure Sign Up"}),e.jsx("span",{children:"⚡ Instant Access"}),e.jsx("span",{children:"🛡️ Protected"}),e.jsx("span",{children:"✓ Google Verified"})]})]})}function Lr(){return e.jsxs("div",{className:"auth-form-container",children:[e.jsx(Cr,{}),e.jsxs("div",{className:"auth-footer-links",children:[e.jsx(Z,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"•"}),e.jsx(Z,{to:"/#contact",children:"Need Help?"})]})]})}function Ir(){const[t]=Va(),a=pt(),{checkAuth:r}=Qe(),[s,i]=m.useState("Signing you in with Google...");return m.useEffect(()=>{(async()=>{const n=t.get("token"),o=t.get("error"),c=t.get("returnTo"),g=Nt(c,"/dashboard");if(o){i(o==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const u=new URLSearchParams({returnTo:g}).toString();setTimeout(()=>a(`/login?${u}`,{replace:!0}),1200);return}if(!n){i("Google sign-in token not found. Please try again.");const u=new URLSearchParams({returnTo:g}).toString();setTimeout(()=>a(`/login?${u}`,{replace:!0}),1200);return}je.setToken(n),await r(),a(g,{replace:!0})})()},[r,a,t]),e.jsx("div",{className:"auth-page",children:e.jsxs("div",{className:"auth-card",children:[e.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),e.jsx("p",{className:"auth-subtitle",children:s})]})})}const Rr={hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:V("/assets/hotels/Pearl-Continental-Lahore.jpg"),showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:V("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:V("/assets/hotels/Hotel-Indigo.jpg"),showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:V("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:V("/assets/hotels/Luxus-Grand-Hotel.jpg"),showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:V("/assets/hotels/Nishat.jpg"),showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]};V("/assets/ozilla/talwinder.jpg"),V("/assets/ozilla/talwinder.jpg"),V("/assets/ozilla/Imran-Khan.jpg"),V("/assets/ozilla/Imran-Khan.jpg"),V("/assets/ozilla/Bohemia.jpg"),V("/assets/ozilla/Bohemia.jpg"),V("/assets/ozilla/hassan-raheem.jpg"),V("/assets/ozilla/hassan-raheem.jpg");const Qt=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",src:V("/assets/ozilla/talwinder.jpg"),image:V("/assets/ozilla/talwinder.jpg"),offsetY:0},{name:"IMRAN KHAN",isHeadliner:!1,genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",src:V("/assets/ozilla/Imran-Khan.jpg"),image:V("/assets/ozilla/Imran-Khan.jpg"),offsetY:0},{name:"BOHEMIA",isHeadliner:!1,genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",src:V("/assets/ozilla/Bohemia.jpg"),image:V("/assets/ozilla/Bohemia.jpg"),offsetY:0},{name:"HASSAN RAHEEM",isHeadliner:!1,genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",src:V("/assets/ozilla/hassan-raheem.jpg"),image:V("/assets/ozilla/hassan-raheem.jpg"),offsetY:0}],ea=1.28,ta=.78;function Ye(t,a,r){return Math.min(r,Math.max(a,t))}function aa(t){if(!t)return null;if(typeof t=="string")return t||null;const a=t.src||t.image;return typeof a=="string"&&a?a:null}function zr(t){return aa(t&&typeof t=="object"&&(t.image||t.src)||t)}function Mr(t){if(t&&typeof t=="object"&&"offsetY"in t){const a=t.offsetY;return typeof a=="number"&&isFinite(a)?a:0}return 0}function Fr({items:t=Qt,images:a,slideWidth:r=320,slideHeight:s=440,spacing:i=2.4,direction:l="right",smoothness:n=8.5,radius:o=24,dim:c=5,background:g="transparent",sensitivity:u=5,autoPlay:b=!1,autoPlayInterval:k=3500,style:S,onItemClick:w}){const p=m.useRef(null),y=m.useRef([]),x=m.useRef(0),M=m.useRef(0),[N,f]=m.useState(0),[d,_]=m.useState(!1),[L,A]=m.useState(0),h=t&&t.length>0?t:a&&a.length>0?a:Qt,v=m.useMemo(()=>h.map((j,z)=>({...j,src:zr(j),offsetY:Mr(j),name:j.name||`Artist ${z+1}`,genre:j.genre||"Live Performer",stage:j.stage||"Ozilla Arena",bpm:j.bpm||"128 BPM",vibe:j.vibe||"Festival Energy",isHeadliner:!!j.isHeadliner})),[h]),C=N>0&&N<640?Math.min(r,250):N<1024?Math.min(r,290):r,R=N>0&&N<640?Math.round(C*1.36):s,q=C+Ye(i,0,10)*18,B=.15-Ye(n,0,10)/10*.11,P=Ye(c,0,10)/10*.75,$=.4+Ye(u,0,10)/10*1.1,X=.6+Ye(u,0,10)/10*1.6,H=l==="left",O=m.useRef({count:v.length,step:q,slideWidth:C,width:N,ease:B,maxScale:ea,minScale:ta,dim:P,loop:!1,flip:H});O.current={count:v.length,step:q,slideWidth:C,width:N,ease:B,maxScale:ea,minScale:ta,dim:P,loop:!1,flip:H};const D=m.useRef({wheelMultiplier:$,dragMultiplier:X,flip:H});D.current={wheelMultiplier:$,dragMultiplier:X,flip:H},m.useEffect(()=>{const j=p.current;if(!j)return;const z=new ResizeObserver(F=>{F[0]&&f(F[0].contentRect.width)});return z.observe(j),f(j.getBoundingClientRect().width),()=>z.disconnect()},[]),m.useEffect(()=>{y.current.length=v.length},[v.length]),m.useEffect(()=>{if(!b||d||v.length<=1)return;const j=setInterval(()=>{A(z=>{const F=(z+1)%v.length;return x.current=F*q,F})},k);return()=>clearInterval(j)},[b,d,v.length,q,k]),m.useEffect(()=>{let j=0,z=0,F=!0,E=null;const re=te=>{if(!F){j=0;return}j=requestAnimationFrame(re);const U=O.current,ne=z?Math.min((te-z)/1e3,.1):1/60;if(z=te,!U.count||U.step<=0||U.width<=0)return;const me=(U.count-1)*U.step;x.current=Ye(x.current,0,me);const Ae=1-Math.pow(1-U.ease,ne*60);M.current+=(x.current-M.current)*Ae;const Ne=Math.round(M.current/U.step);Ne>=0&&Ne<U.count&&A(Ne);const se=(U.width-U.slideWidth)/2,ae=U.width/2;for(let T=0;T<U.count;T+=1){const I=y.current[T];if(!I)continue;const W=T*U.step-M.current+se,ue=W+U.slideWidth/2-ae;let pe,he;ue>0?(pe=Math.min(U.maxScale,1+ue/U.width*.45),he=(pe-1)*U.slideWidth*.35):(pe=Math.max(U.minScale,1+ue/U.width*.5),he=0);const Se=U.flip?U.width-U.slideWidth-(W+he):W+he;if(I.style.transform=`translate3d(${Se}px, -50%, 0) scale(${pe})`,U.dim>0&&pe<1){const Pe=(1-pe)/Math.max(.001,1-U.minScale);I.style.opacity=String(Math.max(.45,1-Pe*U.dim*.6))}else I.style.opacity="1"}},ie=()=>{j||(z=performance.now(),j=requestAnimationFrame(re))},Q=()=>{j&&(cancelAnimationFrame(j),j=0)};return typeof IntersectionObserver<"u"&&p.current&&(E=new IntersectionObserver(te=>{te[0]&&(F=te[0].isIntersecting,F?ie():Q())},{rootMargin:"80px"}),E.observe(p.current)),ie(),()=>{Q(),E&&E.disconnect()}},[]),m.useEffect(()=>{const j=p.current;if(!j)return;const z=F=>{F.preventDefault();const E=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY;x.current+=E*D.current.wheelMultiplier};return j.addEventListener("wheel",z,{passive:!1}),()=>j.removeEventListener("wheel",z)},[]),m.useEffect(()=>{const j=p.current;if(!j)return;let z=null,F=0;const E=Q=>{if(z===null){z=Q.pointerId,F=Q.clientX;try{j.setPointerCapture(Q.pointerId)}catch{}}},re=Q=>{if(z!==Q.pointerId)return;const te=Q.clientX-F;F=Q.clientX,x.current+=(D.current.flip?te:-te)*D.current.dragMultiplier},ie=Q=>{if(z===Q.pointerId){z=null;try{j.hasPointerCapture(Q.pointerId)&&j.releasePointerCapture(Q.pointerId)}catch{}}};return j.addEventListener("pointerdown",E),j.addEventListener("pointermove",re),j.addEventListener("pointerup",ie),j.addEventListener("pointercancel",ie),()=>{j.removeEventListener("pointerdown",E),j.removeEventListener("pointermove",re),j.removeEventListener("pointerup",ie),j.removeEventListener("pointercancel",ie)}},[]);const Y=m.useCallback(j=>{const z=Ye(j,0,v.length-1);x.current=z*q,A(z)},[v.length,q]),ce=m.useCallback(j=>{const z=Ye(L+(j==="left"?-1:1),0,v.length-1);Y(z)},[L,Y,v.length]);return e.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1.2rem 0"},onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"8px",marginBottom:"1rem",zIndex:10},children:v.map((j,z)=>{const F=z===L;return e.jsx("button",{type:"button",onClick:()=>Y(z),style:{padding:"6px 14px",borderRadius:"999px",border:F?"1px solid #ff8a3d":"1px solid rgba(255, 255, 255, 0.12)",background:F?"linear-gradient(135deg, rgba(255, 138, 61, 0.32), rgba(255, 90, 31, 0.22))":"rgba(20, 10, 6, 0.55)",color:F?"#ffbd59":"rgba(255, 255, 255, 0.65)",fontSize:"0.78rem",fontWeight:F?"850":"650",letterSpacing:"0.04em",cursor:"pointer",transition:"all 200ms ease",backdropFilter:"blur(8px)",boxShadow:F?"0 0 16px rgba(255, 138, 61, 0.35)":"none"},children:j.name},j.name)})}),e.jsx("div",{ref:p,className:"smooth-scroll-slider-viewport",style:{position:"relative",width:"100%",height:`${R+50}px`,overflow:"hidden",background:g,cursor:"grab",touchAction:"pan-y",opacity:N>0?1:0,transition:"opacity 0.35s ease",userSelect:"none",...S},children:v.map((j,z)=>{const F=j.isHeadliner,E=z===L;return e.jsxs("div",{ref:re=>{y.current[z]=re},onClick:()=>{Y(z),w&&w(j,z)},style:{position:"absolute",top:"50%",left:0,width:`${C}px`,height:`${R}px`,borderRadius:`${o}px`,overflow:"hidden",background:"#130c0a",border:E?"1.5px solid rgba(255, 138, 61, 0.85)":F?"1px solid rgba(255, 138, 61, 0.45)":"1px solid rgba(255, 255, 255, 0.12)",boxShadow:E?"0 26px 65px rgba(0,0,0,0.9), 0 0 35px rgba(255, 90, 31, 0.4)":"0 18px 45px rgba(0,0,0,0.75)",willChange:"transform, filter",transform:"translate3d(0, -50%, 0)",cursor:"pointer",transition:"border-color 250ms ease, box-shadow 250ms ease"},children:[j.src?e.jsx("img",{src:j.src,alt:j.name,draggable:!1,onError:re=>{re.currentTarget.src=V("/assets/prism-auth-visual.jpg")},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:`50% calc(50% + ${j.offsetY}px)`,display:"block",userSelect:"none"}}):null,e.jsxs("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:3},children:[F?e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 10px",borderRadius:"999px",background:"linear-gradient(135deg, #ff8a3d, #ff5a1f)",color:"#fff",fontSize:"0.68rem",fontWeight:"900",letterSpacing:"0.06em",textTransform:"uppercase",boxShadow:"0 4px 14px rgba(255, 90, 31, 0.45)"},children:"★ MAIN HEADLINER"}):e.jsx("span",{style:{padding:"3px 9px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(8px)",color:"#f6eee8",fontSize:"0.66rem",fontWeight:"700",border:"1px solid rgba(255,255,255,0.12)"},children:j.stage}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2px",height:"14px",padding:"3px 6px",borderRadius:"999px",background:"rgba(0, 0, 0, 0.55)",backdropFilter:"blur(6px)"},children:[e.jsx("span",{className:"sss-eq-bar sss-eq-1"}),e.jsx("span",{className:"sss-eq-bar sss-eq-2"}),e.jsx("span",{className:"sss-eq-bar sss-eq-3"})]})]}),e.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(10,5,3,0.72) 65%, rgba(6,3,2,0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"16px 14px",zIndex:2},children:[e.jsx("span",{style:{display:"inline-block",width:"fit-content",padding:"2px 8px",borderRadius:"999px",background:"rgba(255, 138, 61, 0.18)",border:"1px solid rgba(255, 138, 61, 0.35)",color:"#ffbd59",fontSize:"0.68rem",fontWeight:"800",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:"6px"},children:j.genre}),e.jsx("h3",{style:{margin:0,color:"#ffffff",fontSize:"1.28rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.15,textTransform:"uppercase",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:j.name}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"8px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.1)",color:"rgba(255, 255, 255, 0.72)",fontSize:"0.68rem",fontWeight:"700"},children:[e.jsxs("span",{children:["⚡ ",j.bpm]}),e.jsxs("span",{children:["♫ ",j.vibe]})]})]})]},j.name)})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"0.8rem",zIndex:10},children:[e.jsx("button",{type:"button",onClick:()=>ce("left"),disabled:L===0,"aria-label":"Previous artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:L===0?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:L===0?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:L===0?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:L===0?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:j=>{L>0&&(j.currentTarget.style.transform="scale(1.1)",j.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:j=>{j.currentTarget.style.transform="scale(1)",j.currentTarget.style.borderColor=L===0?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"‹"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:v.map((j,z)=>e.jsx("span",{onClick:()=>Y(z),style:{width:z===L?"20px":"6px",height:"6px",borderRadius:"999px",backgroundColor:z===L?"#ff8a3d":"rgba(255, 255, 255, 0.25)",cursor:"pointer",transition:"all 250ms ease"}},z))}),e.jsx("button",{type:"button",onClick:()=>ce("right"),disabled:L===v.length-1,"aria-label":"Next artist",style:{width:"40px",height:"40px",borderRadius:"50%",border:L===v.length-1?"1px solid rgba(255, 255, 255, 0.1)":"1px solid rgba(255, 138, 61, 0.35)",background:L===v.length-1?"rgba(10, 5, 3, 0.4)":"rgba(20, 10, 6, 0.75)",backdropFilter:"blur(10px)",color:L===v.length-1?"rgba(255, 255, 255, 0.25)":"#ffbd59",cursor:L===v.length-1?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",transition:"all 200ms ease"},onMouseEnter:j=>{L<v.length-1&&(j.currentTarget.style.transform="scale(1.1)",j.currentTarget.style.borderColor="#ff8a3d")},onMouseLeave:j=>{j.currentTarget.style.transform="scale(1)",j.currentTarget.style.borderColor=L===v.length-1?"rgba(255, 255, 255, 0.1)":"rgba(255, 138, 61, 0.35)"},children:"›"})]}),e.jsx("style",{children:`
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
      `})]})}const et={color:"#ff8a3d",rounded:24,thickness:2.5,borderSize:45,glow:85,movement:"continuous",speed:16},Or=2,Dt=[{blur:8,opacity:.5,reach:.3},{blur:15,opacity:.3,reach:.6},{blur:40,opacity:.18,reach:1}],Dr=Math.max(...Dt.map(t=>t.blur)),ra=36;function Lt(t,a){const r=Math.max(0,Math.min(1,a));if(typeof t!="string")return`rgba(0,0,0,${r})`;const s=t.trim(),i=s.match(/^#([0-9a-f]{3,8})$/i);if(i){let n=i[1];(n.length===3||n.length===4)&&(n=n.split("").map(c=>c+c).join(""));const o=parseInt(n.slice(0,6),16);return Number.isFinite(o)?`rgba(${o>>16&255},${o>>8&255},${o&255},${r})`:`rgba(0,0,0,${r})`}const l=s.match(/^rgba?\(([^)]+)\)/i);if(l){const n=l[1].split(",").map(o=>parseFloat(o));if(n.length>=3&&n.slice(0,3).every(Number.isFinite))return`rgba(${n[0]},${n[1]},${n[2]},${r})`}return`rgba(0,0,0,${r})`}function _r(t,a,r){const s=(t%1+1)%1*2*(a+r);return s<a?[s,0]:s<a+r?[a,s-a]:s<a*2+r?[a-(s-a-r),r]:[0,r-(s-a*2-r)]}function sa(t,a,r){const s=2*(a+r),i=[0,a/s,(a+r)/s,(a*2+r)/s];return Math.floor(t/4)+i[(t%4+4)%4]}function Br(t,a,r){const[s,i]=_r(t,a,r);return Math.atan2(s-a/2,r/2-i)*180/Math.PI}const ia=24,$r=.015;function It(t,a,r,s,i){const l=r>0?r:100,n=s>0?s:100,o=Math.max(0,Math.min(100,a)),c=Math.max($r,o/100*.5),g=o/100,u=[];let b=0,k=0,S=0;for(let p=0;p<=ia;p++){const y=p/ia,x=Br(t+(y-.5)*c,l,n);if(p===0)b=x;else{let f=x-k;for(;f>180;)f-=360;for(;f<-180;)f+=360;S+=f}k=x;const M=Math.abs(y-.5)*2,N=g>=1||M<=g?1:1-(M-g)/(1-g);u.push(`${Lt(i,N*N*(3-2*N))} ${S.toFixed(2)}deg`)}const w=S.toFixed(2);return u.push(`${Lt(i,0)} ${w}deg`),u.push(`${Lt(i,0)} 360deg`),`conic-gradient(from ${b.toFixed(2)}deg at 50% 50%, ${u.join(", ")})`}const na=30,Hr=4,oa=3,Ur=.35,Gr=[.72,.16,.18,1.05],Wr=[.65,0,.35,1];function Ia(t){const[a,r,s,i]=t;if(a===r&&s===i)return n=>n;const l=(n,o,c)=>{const g=1-c;return 3*g*g*c*n+3*g*c*c*o+c*c*c};return n=>{const o=Math.max(0,Math.min(1,n));let c=o;for(let g=0;g<8;g++){const u=l(a,s,c)-o,b=1-c,k=3*b*b*a+6*b*c*(s-a)+3*c*c*(1-s);if(Math.abs(k)<1e-6)break;c-=u/k,c=Math.max(0,Math.min(1,c))}return l(r,i,c)}}const Vr=Ia(Gr),qr=Ia(Wr),la={WebkitMaskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",WebkitMaskClip:"content-box, border-box",WebkitMaskComposite:"xor",maskImage:"linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",maskClip:"content-box, border-box",maskComposite:"exclude"};function tt({color:t=et.color,rounded:a=et.rounded,thickness:r=et.thickness,borderSize:s=et.borderSize,glow:i=et.glow,movement:l=et.movement,speed:n=et.speed,style:o,className:c=""}){const g=m.useRef(null),u=m.useRef(null),b=m.useRef({speed:n,movement:l,borderSize:s,color:t});b.current={speed:n,movement:l,borderSize:s,color:t};const k=m.useRef(null),S=m.useRef({w:0,h:0}),[w,p]=m.useState({w:0,h:0});m.useEffect(()=>{const A=k.current;if(!A||typeof ResizeObserver>"u")return;const h=new ResizeObserver(()=>{const v=A.getBoundingClientRect();v.width===S.current.w&&v.height===S.current.h||(S.current={w:v.width,h:v.height},p(S.current))});return h.observe(A),()=>h.disconnect()},[]),m.useEffect(()=>{const A=k.current;let h=!0,v=null;typeof IntersectionObserver<"u"&&A&&(v=new IntersectionObserver(X=>{X[0]&&(h=X[0].isIntersecting)},{rootMargin:"100px"}),v.observe(A));let C=0,R=performance.now(),q=0,B=0,P=0;const $=X=>{if(C=requestAnimationFrame($),!h||typeof document<"u"&&document.hidden){R=X;return}const H=Math.min(.05,Math.max(0,(X-R)/1e3));R=X;const O=b.current,D=Math.max(0,Math.min(20,O.speed));if(D>0){const Y=O.movement==="step",ce=Y?oa+(Ur-oa)*(D-1)/19:(na+(Hr-na)*(D-1)/19)/4;for(P+=H/ce;P>=1;)P-=1,B+=1;const j=Y?Vr(Math.min(1,P*2)):qr(P),{w:z,h:F}=S.current,E=z>0?z:100,re=F>0?F:100,ie=sa(B,E,re),Q=sa(B+1,E,re);q=ie+(Q-ie)*j;const te=g.current;te&&te.style.setProperty("--arc",It(q,O.borderSize,z,F,O.color));const U=u.current;U&&U.style.setProperty("--arc",It(q+.5,O.borderSize,z,F,O.color))}};return C=requestAnimationFrame($),()=>{cancelAnimationFrame(C),v&&v.disconnect()}},[]);const y=Math.max(1,Math.min(10,r)),x=Math.max(0,Math.min(100,a))/100*(Math.min(w.w||200,w.h||200)/2),M=Math.max(0,Math.min(100,i))/100,N=A=>y+M*ra*A,f=10+ra+Dr*2,d=(A,h=0)=>e.jsx("div",{style:{position:"absolute",inset:h-A,boxSizing:"border-box",padding:A,borderRadius:x>0?x+A:0,background:"var(--arc)",...la}}),_=(A,h,v,C)=>e.jsx("div",{style:{position:"absolute",inset:-f,boxSizing:"border-box",padding:f,borderRadius:x>0?x+f:0,opacity:C,mixBlendMode:"plus-lighter",filter:v?`blur(${v.toFixed(1)}px)`:"none",WebkitFilter:v?`blur(${v.toFixed(1)}px)`:"none",...la},children:d(h,f)},A),L=(A,h)=>e.jsxs("div",{ref:h,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none","--arc":It(A,s,w.w,w.h,t)},children:[M>0&&(w.w>0&&w.w<600?[Dt[0]].map((v,C)=>_(`glow-${C}`,N(v.reach),v.blur*.7,v.opacity*1.2)):Dt.map((v,C)=>_(`glow-${C}`,N(v.reach),v.blur,v.opacity))),Array.from({length:Or}).map((v,C)=>e.jsx("div",{style:{position:"absolute",inset:0,mixBlendMode:"plus-lighter"},children:d(y)},`edge-${C}`))]});return e.jsxs("div",{ref:k,className:`neon-border-overlay ${c}`,style:{position:"absolute",inset:0,width:"100%",height:"100%",flexShrink:0,borderRadius:x,pointerEvents:"none",zIndex:1,...o},children:[L(0,g),L(.5,u)]})}const Yr=1.5,Xr=42,Zr=Math.PI*2,Kr=300,Jr=300,Qr=2,es=5e3,ts=3.2,as=.05,rs=3,ss=1.35,is=.08,ns=.5,os=.24,ls=.35,cs=Zr*.75,ds=2,Ra=3,wt=720,ps=`
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
    float ang = aA.x * ${cs.toFixed(6)} + aA.y * TAU * ${ds.toFixed(1)};
    float rN = mix(${ls.toFixed(3)}, 1.0, sqrt(aA.z));
    float r  = uRadius * rN * (1.0 + ${as.toFixed(3)} * tau);

    float tp   = ${is.toFixed(3)};
    float bump = (tau / tp) * exp(1.0 - tau / tp);
    float rimW = smoothstep(${ns.toFixed(3)}, 1.0, rN);
    float y    = uRise * bump * rimW - uFall * pow(tau, ${ss.toFixed(2)});

    float L  = ${rs.toFixed(1)};
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
`,ms=`
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
`,fs=`
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
    float halfW  = uThick * 0.5 * ${Ra.toFixed(1)} * near;
    vec2 px = s0 + nrm * aRing.y * halfW;

    gl_Position = vec4(px / (uRes * 0.5), 0.0, 1.0);
    vSide = aRing.y;
    vNear = near;
}
`,gs=`
precision highp float;
uniform vec3  uColor;
uniform float uAlpha;
varying float vSide;
varying float vNear;
void main() {
    float s    = abs(vSide);
    float core = exp(-pow(s * ${Ra.toFixed(1)}, 2.0) * 3.2);
    float halo = exp(-s * s * 1.6) * 0.45;
    float a    = (core + halo) * uAlpha * clamp(vNear, 0.7, 1.5) * 1.35;
    gl_FragColor = vec4(uColor * a, a);
}
`;function ca(t){if(!t)return[1,1,1,1];let a=String(t).trim();const r=a.match(/^var\(\s*[^,)]+\s*,\s*(.+)\)$/i);r&&(a=r[1].trim());const s=a.match(/^rgba?\(([^)]+)\)$/i);if(s){const l=s[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);return[(l[0]||0)/255,(l[1]||0)/255,(l[2]||0)/255,l.length>3&&isFinite(l[3])?l[3]:1]}let i=a.replace("#","");return(i.length===3||i.length===4)&&(i=i.split("").map(l=>l+l).join("")),i.length<6?[1,1,1,1]:[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255,i.length>=8?parseInt(i.slice(6,8),16)/255:1]}function us(t){return()=>{t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function da(t,a,r){const s=t.createShader(a);return s?(t.shaderSource(s,r),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||console.warn("VortexDustFall shader:",t.getShaderInfoLog(s)),s):null}function pa(t,a,r){const s=t.createProgram();if(!s)return null;const i=da(t,t.VERTEX_SHADER,a),l=da(t,t.FRAGMENT_SHADER,r);return!i||!l?null:(t.attachShader(s,i),t.attachShader(s,l),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||console.warn("VortexDustFall link:",t.getProgramInfoLog(s)),s)}const hs={radius:195,thickness:16},xs={height:165,spin:38,spray:0},bs={scatter:280,blur:0},ys={amount:103,transition:{type:"tween",duration:.6,ease:"easeOut"}};function ws({background:t="transparent",baseColor:a="#FFA733",accentColor:r="#FFE082",density:s=145,dotSize:i=130,speed:l=48,distance:n=1450,tilt:o=7,ring:c={},fall:g={},field:u={},hover:b={},style:k={},className:S="",children:w}){const p={...hs,...c},y={...xs,...g},x={...bs,...u},M={...ys,...b},N=m.useRef(null),f=m.useRef(null),d=m.useRef({x:0,y:0,active:0}),_=m.useRef({baseColor:a,accentColor:r,density:s,dotSize:i,speed:l,distance:n,tilt:o,ring:p,fall:y,field:x,hover:M});return _.current={baseColor:a,accentColor:r,density:s,dotSize:i,speed:l,distance:n,tilt:o,ring:p,fall:y,field:x,hover:M},m.useEffect(()=>{const L=N.current,A=f.current;if(!L||!A)return;const h=A.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!h)return;const v=pa(h,ps,ms),C=pa(h,fs,gs);if(!v||!C)return;const R=(I,K)=>h.getUniformLocation(I,K),q={a:h.getAttribLocation(v,"aA"),b:h.getAttribLocation(v,"aB")},B={res:R(v,"uRes"),focal:R(v,"uFocal"),phase:R(v,"uPhase"),radius:R(v,"uRadius"),rise:R(v,"uRise"),fallD:R(v,"uFall"),spinTurns:R(v,"uSpinTurns"),scatter:R(v,"uScatter"),dotWorld:R(v,"uDotWorld"),blurK:R(v,"uBlurK"),camDist:R(v,"uCamDist"),tilt:R(v,"uTilt"),yPx:R(v,"uYPx"),alpha:R(v,"uAlpha"),color:R(v,"uColor")},P={ring:h.getAttribLocation(C,"aRing")},$={res:R(C,"uRes"),focal:R(C,"uFocal"),radius:R(C,"uRadius"),camDist:R(C,"uCamDist"),tilt:R(C,"uTilt"),yPx:R(C,"uYPx"),thick:R(C,"uThick"),seg:R(C,"uSeg"),color:R(C,"uColor"),alpha:R(C,"uAlpha")},X=h.createBuffer(),H=h.createBuffer();let O=-1,D=0;const Y=I=>{const K=A.clientWidth||L.clientWidth||(typeof window<"u"?window.innerWidth:1200),W=K<768,ue=K>=768&&K<1024,pe=W?1800:ue?8500:Math.round(I*Kr);D=Math.max(1e3,pe);const he=new Float32Array(D*4),Se=new Float32Array(D*2),Pe=us(85840071);for(let ke=0;ke<D;ke++)he[ke*4]=Pe(),he[ke*4+1]=Pe(),he[ke*4+2]=Pe(),he[ke*4+3]=Pe(),Se[ke*2]=Pe(),Se[ke*2+1]=Pe();h.bindBuffer(h.ARRAY_BUFFER,X),h.bufferData(h.ARRAY_BUFFER,he,h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,H),h.bufferData(h.ARRAY_BUFFER,Se,h.STATIC_DRAW),O=I},ce=h.createBuffer(),j=(wt+1)*2;{const I=new Float32Array(j*2);for(let K=0;K<=wt;K++){const W=K/wt;I[K*4]=W,I[K*4+1]=-1,I[K*4+2]=W,I[K*4+3]=1}h.bindBuffer(h.ARRAY_BUFFER,ce),h.bufferData(h.ARRAY_BUFFER,I,h.STATIC_DRAW)}h.disable(h.DEPTH_TEST),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE);let z=!0,F=null,E=0,re=performance.now();const ie=()=>{E||(re=performance.now(),E=requestAnimationFrame(T))},Q=()=>{E&&(cancelAnimationFrame(E),E=0)};typeof IntersectionObserver<"u"&&L&&(F=new IntersectionObserver(I=>{I[0]&&(z=I[0].isIntersecting,z?ie():Q())},{rootMargin:"80px"}),F.observe(L));let te=1,U=0;const ne=()=>{const I=typeof window<"u"&&window.innerWidth<768;te=Math.min(window.devicePixelRatio||1,I?.9:Yr);const K=A.clientWidth||L.clientWidth||1,W=A.clientHeight||L.clientHeight||1,ue=Math.max(1,Math.round(K*te)),pe=Math.max(1,Math.round(W*te));(A.width!==ue||A.height!==pe)&&(A.width=ue,A.height=pe),h.viewport(0,0,ue,pe),Math.abs(U-K)>50&&(U=K,Y(_.current.density))};ne();const me=new ResizeObserver(ne);me.observe(A);let Ae=0,Ne=0,se=0,ae=0;const T=I=>{if(!z||typeof document<"u"&&document.hidden){E=0;return}E=requestAnimationFrame(T);const K=Math.min((I-re)/1e3,.05);re=I;const W=_.current;if(W.density!==O&&Y(W.density),D===0)return;const ue=Math.max(.05,W.hover.transition?.duration??.6),pe=1-Math.exp(-K/ue),he=d.current;Ne+=(he.x-Ne)*pe,se+=(he.y-se)*pe,ae+=(he.active-ae)*pe;const Se=(W.hover.amount||100)/100,Pe=1+ae*Se*.6;Ae=(Ae+K*(W.speed/50*Pe)/ts)%1;const ke=A.width,Me=A.height,st=A.clientWidth||L.clientWidth||1200,Fe=st<768,Oe=st>=768&&st<1024,mt=Me/(2*Math.tan(Xr/2*Math.PI/180)),ft=ke/Math.max(Me,1),St=ft<1?Math.max(.32,ft/1.4):Oe?.85:1,it=Jr*(W.ring.radius/100)*St,ze=it*(Fe?1.1:W.fall.height/100),xt=ze*(W.fall.spray/400),$e=Me*(Fe?.22:os),Ge=W.fall.spin/100*1.5,G=it*(W.field.scatter/100)*(Fe?.08:.15),le=Qr*(W.dotSize/100)*(Fe?.65:1),xe=es*(W.field.blur/100),Ee=Fe?Math.min(W.ring.thickness*te,9*te):W.ring.thickness*te,be=W.tilt*Math.PI/180+se*Se*ae*(10*Math.PI/180),Ie=(Fe?W.distance*1.05:W.distance)-ae*Se*150,[We,nt,De,ot]=ca(W.baseColor),[gt,Oa,Da,_a]=ca(W.accentColor);h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(v),h.uniform2f(B.res,ke,Me),h.uniform1f(B.focal,mt),h.uniform1f(B.phase,Ae),h.uniform1f(B.radius,it),h.uniform1f(B.rise,xt),h.uniform1f(B.fallD,ze),h.uniform1f(B.spinTurns,Ge),h.uniform1f(B.scatter,G),h.uniform1f(B.dotWorld,le*te),h.uniform1f(B.blurK,xe*te),h.uniform1f(B.camDist,Ie),h.uniform1f(B.tilt,be),h.uniform1f(B.yPx,$e),h.uniform1f(B.alpha,ot),h.uniform3f(B.color,We,nt,De),h.bindBuffer(h.ARRAY_BUFFER,X),h.enableVertexAttribArray(q.a),h.vertexAttribPointer(q.a,4,h.FLOAT,!1,0,0),h.bindBuffer(h.ARRAY_BUFFER,H),h.enableVertexAttribArray(q.b),h.vertexAttribPointer(q.b,2,h.FLOAT,!1,0,0),h.drawArrays(h.POINTS,0,D),h.useProgram(C),h.uniform2f($.res,ke,Me),h.uniform1f($.focal,mt),h.uniform1f($.radius,it),h.uniform1f($.camDist,Ie),h.uniform1f($.tilt,be),h.uniform1f($.yPx,$e),h.uniform1f($.thick,Ee),h.uniform1f($.seg,wt),h.uniform3f($.color,gt,Oa,Da),h.uniform1f($.alpha,_a),h.bindBuffer(h.ARRAY_BUFFER,ce),h.enableVertexAttribArray(P.ring),h.vertexAttribPointer(P.ring,2,h.FLOAT,!1,0,0),h.drawArrays(h.TRIANGLE_STRIP,0,j)};return E=requestAnimationFrame(T),()=>{cancelAnimationFrame(E),me.disconnect(),F&&F.disconnect(),h.deleteBuffer(X),h.deleteBuffer(H),h.deleteBuffer(ce),h.deleteProgram(v),h.deleteProgram(C)}},[]),e.jsxs("div",{ref:N,className:`vortex-dust-container ${S}`,onPointerMove:L=>{const A=L.currentTarget.getBoundingClientRect();A.width<=0||A.height<=0||(d.current={x:(L.clientX-A.left)/A.width*2-1,y:-((L.clientY-A.top)/A.height*2-1),active:1})},onPointerLeave:()=>{d.current={x:0,y:0,active:0}},style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",background:t,...k},children:[e.jsx("canvas",{ref:f,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),w&&e.jsx("div",{style:{position:"relative",zIndex:2,pointerEvents:"auto",width:"100%",height:"100%"},children:w})]})}const vs=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:V("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:V("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:V("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:V("/assets/ozilla/hassan-raheem.jpg")}],ks=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],js=[{badge:"100kW SOUND SYSTEM",title:"4 Mega Sound Stages",desc:"Explosive stage arenas for Indie Pop, Punjabi Rap, Desi Hip-Hop, and non-stop EDM beats."},{badge:"HEADLINE CELEBRITIES",title:"Star-Studded Lineup",desc:"Live stadium sets by Talwinder, Imran Khan, Bohemia, Hassan Raheem, and top artists."},{badge:"CULINARY & NIGHT BAZAAR",title:"Food & Beats Street",desc:"50+ curated gourmet food stalls, wood-fired artisan eats, and craft mocktail lounges."},{badge:"ALL-ACCESS HOSPITALITY",title:"VIP Lounge & Deck Access",desc:"Elevated front-stage viewing decks, private artist lounges, and fast-track VIP gates."}],Ns=[{name:"OZILLA FEST 2026: The Flagship",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED FESTIVAL",description:"Flagship festival with 4 mega stages, 20+ star artists, and 10,000+ live crowd."},{name:"Celebrity Night Live Concert",date:"February 2027",location:"Lahore, Pakistan",status:"UPCOMING CONCERT",description:"High-octane stadium night with headline Punjabi artists and 360° laser shows."},{name:"Ozilla Basant Beats Season 2",date:"March 2027",location:"Lahore, Pakistan",status:"SEASONAL FESTIVAL",description:"Cultural music fusion festival with live pop sets, color activations, and street eats."}],Ss=[{name:"Ozilla Season 1: The Bass Awakening",status:"Sold Out · 6,500+ Fans",detail:"Debut open-air music festival in Lahore featuring indie fusion acts and 2 live mega stages."},{name:"Ozilla Season 2: Neon Nights",status:"Sold Out · 8,500+ Fans",detail:"High-energy night festival with headline celebrity acts and artisan night food street."}],As=[{name:"Ozilla Debut: The Sound Awakening",year:"2023",badge:"SOLD OUT DEBUT",description:"Historic launch in Lahore uniting 6,000+ fans for live indie music and night market culture.",highlights:["6,000+ Attendees","2 Live Stages","Indie & Desi Fusion"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Season 2: Neon Nights",year:"2024",badge:"RECORD 8,500+ CROWD",description:"Season 2 expansion with 4 live stages, celebrity headliners, and 360° laser canopy.",highlights:["8,500+ Fans","4 Live Stages","Celebrity Headliners"],venue:"DHA Sports Complex, Lahore",date:"November 9, 2024"},{name:"Ozilla Basant Cultural Beats",year:"2025",badge:"SPRING FESTIVAL",description:"Seasonal spring music festival with live acoustic sets, DJ arenas, and artisan bazaar.",highlights:["Cultural Sets","Live DJ Stages","Food Hub"],venue:"Gulberg Cultural District, Lahore",date:"March 15, 2025"},{name:"OZILLA FEST 2026 (The Grand Edition)",year:"2026",badge:"FLAGSHIP 10,000+ EDITION",description:"Monumental flagship edition with 4 stages, 20+ star artists, and 100kW laser sound arrays.",highlights:["10,000+ Crowd","4 Mega Stages","Talwinder & Imran Khan"],venue:"Lahore, Punjab",date:"November 1, 2026"},{name:"OZILLA FEST 2027: Arena Tour",year:"2027",badge:"NATIONWIDE TOUR",description:"Nationwide arena tour expansion bringing the signature Ozilla concert experience across Pakistan.",highlights:["Arena Tour","Multi-City Stages","Star Acts"],venue:"Lahore, Karachi & Islamabad",date:"November 14, 2027"}],Ps=[{tier:"Title Sponsor",price:"PREMIUM",badge:"FLAGSHIP PARTNER",accent:"#ffbd59",tagline:"Maximum Brand Dominance",isFeatured:!0,ctaText:"Claim Title Partnership",perks:["Exclusive brand naming rights","Main stage backdrop placement","VIP lounge & deck co-branding","30-second main stage video slot","Dedicated social & press campaigns"]},{tier:"Gold Sponsor",price:"HIGH IMPACT",badge:"STAGE ACTIVATION",accent:"#ff8a3d",tagline:"High-Energy Ground Presence",isFeatured:!1,ctaText:"Become Gold Sponsor",perks:["Exclusive brand activation zone","Perimeter banner placements","Digital festival app features","Influencer co-branding & mentions","On-ground brand booth space"]},{tier:"Silver Sponsor",price:"GROWTH",badge:"BRAND PARTNER",accent:"#cbd5e1",tagline:"Targeted Festival Engagement",isFeatured:!1,ctaText:"Join Silver Tier",perks:["Official festival website branding","Social media shoutouts","Sampling booth at food street","Newsletter sponsor placement","10 complimentary festival passes"]},{tier:"Media Partner",price:"CUSTOM",badge:"BROADCAST & PRESS",accent:"#ec4899",tagline:"Official Media Rights",isFeatured:!1,ctaText:"Apply For Press Pass",perks:["Official media coverage rights","All-access artist press passes","Exclusive backstage interview access","Press release announcement feature","Dedicated creator lounge access"]}],Ts=[{badge:"100kW SOUND ARRAY",title:"Main Concert Arena",desc:"Stadium-grade concert sound arrays, 360° lasers, and cryogenic live jets.",accent:"#ff5a1f"},{badge:"50+ FOOD SPOTS",title:"Food & Beats Street",desc:"50+ night food stalls, wood-fired artisan eats, and gourmet smash burgers.",accent:"#ffbd59"},{badge:"24/7 RAPID CARE",title:"Medical & First Aid Hub",desc:"Fully equipped medical stations and certified paramedic response teams.",accent:"#ef4444"},{badge:"VALET & VIP GATES",title:"Managed VIP Parking",desc:"Fast-track valet lanes and direct express entry for VIP pass holders.",accent:"#f59e0b"},{badge:"CREATOR LIGHTING",title:"Holographic Photo Booths",desc:"Interactive neon backdrops and 360° video spinners for creator moments.",accent:"#ec4899"},{badge:"INCLUSIVE VENUE",title:"Full Venue Accessibility",desc:"Elevated viewing decks, step-free ramps, and on-ground guest assistance.",accent:"#3b82f6"},{badge:"PROFESSIONAL SQUAD",title:"Crowd Safety & Security",desc:"Trained festival security squad, CCTV monitoring, and RFID gate checks.",accent:"#10b981"},{badge:"GIGABIT HIGH-SPEED",title:"Ultra-Fast Festival Wi-Fi",desc:"High-density wireless zones across all stages and food streets.",accent:"#06b6d4"}],Es=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function Cs(t){const[a,r]=m.useState(()=>{const s=Math.max(new Date(t)-Date.now(),0);return{days:Math.floor(s/864e5),hours:Math.floor(s/36e5%24),minutes:Math.floor(s/6e4%60),seconds:Math.floor(s/1e3%60)}});return m.useEffect(()=>{const s=setInterval(()=>{const i=Math.max(new Date(t)-Date.now(),0);r({days:Math.floor(i/864e5),hours:Math.floor(i/36e5%24),minutes:Math.floor(i/6e4%60),seconds:Math.floor(i/1e3%60)})},1e3);return()=>clearInterval(s)},[t]),a}function Ls(){const t=Je(),a=Cs("2026-11-01T18:00:00+05:00");return m.useEffect(()=>{const r=t.hash?.replace("#","");r?setTimeout(()=>{const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[t.hash]),e.jsxs("main",{className:"sp-main",children:[e.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Fest",children:[e.jsx(ws,{baseColor:"#ff8a3d",accentColor:"#ffbd59",density:125,speed:46,tilt:7}),e.jsx("div",{className:"sp-hero-ambient-glow"}),e.jsxs("div",{className:"sp-hero-content",children:[e.jsxs(oe.div,{className:"sp-hero-badge",initial:{opacity:0,y:-20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.6},children:[e.jsx("span",{children:"✨"}),e.jsx("strong",{children:"OZILLA FEST 2026 · LAHORE"})]}),e.jsx(oe.h1,{className:"sp-hero-title",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:"OZILLA FEST"}),e.jsxs(oe.p,{className:"sp-hero-subtitle",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},children:[e.jsx("strong",{className:"sp-hero-sub-highlight",children:"Pakistan's Flagship Music & Cultural Phenomenon."}),e.jsx("span",{className:"sp-hero-sub-detail",children:"4 Electrified Mega Stages · Headline Celebrities · High-Octane Sound Under the Lahore Night Sky."})]}),e.jsxs(oe.div,{className:"sp-hero-meta-strip",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4},children:[e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsxs("span",{className:"sp-meta-header",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"DATE"})]}),e.jsx("strong",{children:"NOV 01, 2026"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsxs("span",{className:"sp-meta-header",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"CITY"})]}),e.jsx("strong",{children:"LAHORE, PK"})]}),e.jsxs("div",{className:"sp-hero-meta-pill",children:[e.jsxs("span",{className:"sp-meta-header",children:[e.jsx("span",{className:"sp-meta-dot"}),e.jsx("span",{className:"sp-meta-label",children:"PRODUCTION"})]}),e.jsx("strong",{children:"4 MEGA STAGES"})]}),e.jsxs("div",{className:"sp-hero-meta-pill sp-meta-featured",children:[e.jsxs("span",{className:"sp-meta-header",children:[e.jsx("span",{className:"sp-meta-dot sp-dot-gold"}),e.jsx("span",{className:"sp-meta-label",children:"PASSES"})]}),e.jsx("strong",{children:"INSTANT QR PASS"})]})]}),e.jsxs(oe.div,{className:"sp-hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},children:[e.jsx(oe.a,{className:"sp-btn-ember",href:"#celebrities",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup ⚡"}),e.jsx(oe.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes 🎟️"})})]})]})]}),e.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:e.jsx("div",{className:"sp-container",children:e.jsx("div",{className:"stats-inner-grid",children:Es.map((r,s)=>e.jsxs(oe.div,{className:"stat-card",whileHover:{y:-5,scale:1.02},children:[e.jsx("strong",{className:"stat-val",children:r.value}),e.jsx("span",{className:"stat-label",children:r.label}),e.jsx("small",{className:"stat-sub",children:r.sub})]},r.label))})})}),e.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header",children:[e.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),e.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),e.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),e.jsx("div",{className:"sp-celebrity-slider-wrap",style:{margin:"1rem 0 3.5rem 0"},children:e.jsx(Fr,{items:vs,slideWidth:320,slideHeight:440,spacing:2.6,smoothness:8.5,dim:6,sensitivity:5,autoPlay:!0,autoPlaySpeed:1.2})}),e.jsxs("div",{className:"sp-countdown-banner",children:[e.jsx("div",{className:"sp-countdown-header",children:e.jsxs("span",{className:"sp-countdown-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"COUNTDOWN TO THE FIRST BEAT DROP"]})}),e.jsx("div",{className:"sp-countdown-grid",children:[["Days",a.days],["Hours",a.hours],["Minutes",a.minutes],["Seconds",a.seconds]].map(([r,s])=>e.jsxs(oe.div,{className:"sp-countdown-card",whileHover:{scale:1.05,y:-4},transition:{type:"spring",stiffness:350},children:[e.jsx("strong",{children:String(s).padStart(2,"0")}),e.jsx("span",{children:r}),e.jsx("div",{className:"sp-countdown-glow-line"})]},r))})]})]})}),e.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header",style:{textAlign:"center"},children:[e.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),e.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),e.jsx("div",{className:"sp-pricing-grid",children:ks.map(r=>e.jsxs(oe.div,{className:`sp-pricing-card ${r.isFeatured?"sp-featured-pricing":""}`,whileHover:{y:-8},children:[r.isFeatured&&e.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),e.jsxs("div",{className:"sp-pricing-header",children:[e.jsx("span",{className:"sp-tier-badge",children:r.badge}),e.jsx("h3",{children:r.name}),e.jsx("div",{className:"sp-pricing-cost",children:e.jsx("strong",{children:r.price})}),e.jsx("p",{className:"sp-pricing-sub",children:r.sub})]}),e.jsx("div",{className:"sp-pricing-divider"}),e.jsx("ul",{className:"sp-pricing-features",children:r.perks.map(s=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-perk-check",children:"✓"}),e.jsx("span",{children:s})]},s))}),e.jsx(Z,{to:r.ctaLink,className:r.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:r.ctaText})]},r.id))})]})}),e.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header",children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ THE ULTIMATE LIVE EXPERIENCE"}),e.jsx("h2",{className:"sp-section-title",children:"The Ozilla Fest Atmosphere"}),e.jsx("p",{className:"sp-section-subtitle",children:"Pakistan's flagship open-air music & cultural festival. 4 electrified stages, 100kW concert sound, headline celebrity acts, gourmet food street, and unmatched crowd energy under the Lahore night sky."})]}),e.jsx("div",{className:"sp-pillars-grid",children:js.map(r=>e.jsxs(oe.div,{className:"sp-pillar-card",whileHover:{y:-8,scale:1.02},children:[e.jsx("div",{className:"sp-pillar-glow-accent"}),e.jsx("div",{className:"sp-pillar-top",children:e.jsx("span",{className:"sp-pillar-badge",children:r.badge})}),e.jsx("h3",{className:"sp-pillar-title",children:r.title}),e.jsx("p",{className:"sp-pillar-desc",children:r.desc}),e.jsx("div",{className:"sp-pillar-glow-line"})]},r.title))}),e.jsxs("div",{className:"sp-festival-vibe-banner",style:{position:"relative",overflow:"hidden"},children:[e.jsx(tt,{color:"#ff7a29",rounded:32,thickness:2.8,borderSize:50,glow:85}),e.jsxs("div",{className:"sp-vibe-left",style:{position:"relative",zIndex:2},children:[e.jsxs("span",{className:"sp-vibe-eyebrow",children:[e.jsx("span",{className:"sp-countdown-pulse"}),"FESTIVAL HIGHLIGHTS"]}),e.jsx("h3",{children:"What Makes Ozilla Legendary"}),e.jsx("p",{children:"Non-stop beats from golden hour to midnight, surrounded by festival activations and pure music culture."}),e.jsxs("div",{className:"sp-vibe-actions",children:[e.jsx(oe.a,{href:"#celebrities",className:"sp-btn-ember",whileHover:{scale:1.04},whileTap:{scale:.97},children:"Explore Lineup →"}),e.jsx(oe.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:e.jsx(Z,{to:"/tickets",className:"sp-btn-ghost",children:"Book Festival Passes"})})]})]}),e.jsx("div",{className:"sp-vibe-tags-grid",style:{position:"relative",zIndex:2},children:[{text:"4 Mega Music Stages",isMain:!0,icon:"⚡"},{text:"100kW Laser & Sound",isMain:!0,icon:"🔊"},{text:"20+ Star Performers",isMain:!0,icon:"👑"},{text:"Verified QR Instant Passes",isMain:!0,icon:"🎟️"},{text:"10,000+ Music Lovers",isMain:!1,icon:"👥"},{text:"50+ Food & Beats Stalls",isMain:!1,icon:"🍔"},{text:"VIP Artist Lounge & Deck",isMain:!1,icon:"✨"},{text:"Exclusive Partner Discounts",isMain:!1,icon:"🏷️"}].map(r=>e.jsxs(oe.div,{className:`sp-vibe-tag ${r.isMain?"sp-vibe-main":"sp-vibe-secondary"}`,whileHover:{scale:1.03,x:3},whileTap:{scale:.98},children:[e.jsx("span",{className:"sp-vibe-tag-icon",children:r.icon}),e.jsx("span",{className:"sp-vibe-tag-text",children:r.text}),r.isMain&&e.jsx("span",{className:"sp-vibe-tag-dot"})]},r.text))})]})]})}),e.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header",children:[e.jsx("span",{className:"sp-eyebrow",children:"Previous Editions"}),e.jsx("h2",{className:"sp-section-title",children:"Past Festival Milestones"}),e.jsx("p",{className:"sp-section-subtitle",children:"A legacy of sold-out stadium energy, breakthrough artist sets, and unforgettable Lahore nights."})]}),e.jsx("div",{className:"sp-events-grid",children:Ss.map(r=>e.jsxs(oe.div,{className:"sp-glass-card sp-past-event-card",style:{position:"relative",overflow:"hidden"},whileHover:{y:-6},children:[e.jsx(tt,{color:"#ff8a3d",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{className:"sp-card-header",children:[e.jsx("h3",{children:r.name}),e.jsx("span",{className:"sp-pill-badge",children:r.status})]}),e.jsx("p",{className:"sp-card-desc",children:r.detail}),e.jsxs("div",{className:"sp-card-footer-eq",children:[e.jsx("span",{children:"LIVE ARCHIVE"}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},r.name))})]})}),e.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header",children:[e.jsx("span",{className:"sp-eyebrow",children:"Upcoming Concert Tour"}),e.jsx("h2",{className:"sp-section-title",children:"Future Festival Editions"}),e.jsx("p",{className:"sp-section-subtitle",children:"Mark your calendar for upcoming major festival editions, celebrity concert nights, and arena dates."})]}),e.jsx("div",{className:"sp-future-grid",children:Ns.map(r=>e.jsxs(oe.div,{className:"sp-glass-card sp-future-card",style:{position:"relative",overflow:"hidden"},whileHover:{y:-6},children:[e.jsx(tt,{color:"#ff9e42",rounded:22,thickness:2.5,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("span",{className:"sp-pill-badge",children:r.status}),e.jsx("h3",{style:{marginTop:"0.8rem"},children:r.name}),e.jsxs("p",{className:"sp-meta-text",children:["📍 ",r.date," · ",r.location]}),e.jsx("p",{className:"sp-card-desc",style:{flex:1},children:r.description}),e.jsx(Z,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]})]},r.name))})]})}),e.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-timeline-banner-header",style:{position:"relative",overflow:"hidden"},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"Festival Legacy"}),e.jsx("h2",{className:"sp-section-title",children:"Our Editions & Timeline"}),e.jsx("p",{className:"sp-section-subtitle",children:"From our underground debut to Pakistan's biggest stadium concert experience."})]})]}),e.jsx("div",{className:"sp-timeline",children:As.map(r=>e.jsxs("div",{className:"sp-timeline-item",children:[e.jsxs("div",{className:"sp-timeline-node-wrap",children:[e.jsx("div",{className:"sp-timeline-icon",children:e.jsx("span",{className:"sp-timeline-year-pill",children:r.year})}),e.jsx("div",{className:"sp-timeline-pulse-ring"})]}),e.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[e.jsxs("div",{className:"sp-timeline-top-row",children:[e.jsx("div",{className:"sp-meta-text",children:e.jsx("span",{className:"sp-year-highlight",children:r.date})}),e.jsx("span",{className:"sp-timeline-badge",children:r.badge})]}),e.jsx("h3",{className:"sp-timeline-heading",children:r.name}),e.jsx("p",{className:"sp-card-desc",children:r.description}),e.jsx("div",{className:"sp-tag-cloud",children:r.highlights.map(s=>e.jsx("span",{className:"sp-tag sp-timeline-tag",children:s},s))}),e.jsxs("div",{className:"sp-timeline-footer",children:[e.jsx("p",{className:"sp-venue-text",children:r.venue}),e.jsxs("div",{className:"celeb-mini-eq",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]})]},r.name))})]})}),e.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-facilities-header-banner",style:{position:"relative",overflow:"hidden"},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"⚡ FESTIVAL VENUE & PRODUCTION"}),e.jsx("h2",{className:"sp-section-title",children:"World-Class Festival Facilities"}),e.jsx("p",{className:"sp-section-subtitle",children:"Built for a seamless 10,000+ attendee experience with concert-grade sound, medical support, VIP hospitality, and creator amenities."})]})]}),e.jsx("div",{className:"sp-facilities-grid",children:Ts.map(r=>e.jsxs(oe.div,{className:"sp-glass-card sp-facility-card",style:{position:"relative",overflow:"hidden"},whileHover:{y:-8,scale:1.02},children:[e.jsx(tt,{color:r.accent||"#ff8a3d",rounded:20,thickness:2.2,borderSize:40,glow:80}),e.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%"},children:[e.jsx("div",{className:"sp-facility-top",children:e.jsx("span",{className:"sp-facility-badge",style:{color:r.accent,borderColor:`${r.accent}44`,background:`${r.accent}14`},children:r.badge})}),e.jsx("h3",{className:"sp-facility-title",children:r.title}),e.jsx("p",{className:"sp-card-desc",children:r.desc})]}),e.jsx("div",{className:"sp-facility-glow-bar",style:{background:`linear-gradient(90deg, ${r.accent}, transparent)`}})]},r.title))})]})}),e.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:e.jsxs("div",{className:"sp-container",children:[e.jsxs("div",{className:"sp-section-header sp-sponsorship-header-banner",style:{position:"relative",overflow:"hidden",textAlign:"center"},children:[e.jsx(tt,{color:"#ff8a3d",rounded:24,thickness:2.8,borderSize:45,glow:85}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsx("span",{className:"sp-eyebrow",children:"BRAND COLLABORATIONS"}),e.jsx("h2",{className:"sp-section-title",children:"Sponsorship & Brand Packages"}),e.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Partner with Pakistan's biggest live music festival. Gain unparalleled on-ground brand presence, digital engagement, and VIP hospitality."})]})]}),e.jsx("div",{className:"sp-sponsorship-grid",children:Ps.map(r=>e.jsxs(oe.div,{className:`sp-glass-card sp-sponsor-card ${r.isFeatured?"sp-sponsor-featured":""}`,whileHover:{y:-10,scale:1.02},children:[r.isFeatured&&e.jsx("div",{className:"sp-sponsor-popular-tag",children:"MOST PRESTIGIOUS TIER"}),e.jsx("div",{className:"sp-sponsor-top",children:e.jsx("span",{className:"sp-sponsor-badge",style:{color:r.accent,borderColor:`${r.accent}44`,background:`${r.accent}14`},children:r.badge})}),e.jsxs("div",{className:"sp-sponsor-header",children:[e.jsx("h3",{children:r.tier}),e.jsx("div",{className:"sp-sponsor-price-tag",style:{color:r.accent},children:r.price}),e.jsx("p",{className:"sp-sponsor-tagline",children:r.tagline})]}),e.jsx("div",{className:"sp-sponsor-divider"}),e.jsx("ul",{className:"sp-sponsor-perks",children:r.perks.map(s=>e.jsxs("li",{children:[e.jsx("span",{className:"sp-check",style:{color:r.accent},children:"✓"}),e.jsx("span",{children:s})]},s))}),e.jsx(oe.div,{whileHover:{scale:1.04},whileTap:{scale:.96},style:{marginTop:"auto",paddingTop:"1.2rem"},children:e.jsx(Z,{to:"/tickets",className:r.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center"},children:r.ctaText})}),e.jsx("div",{className:"sp-sponsor-glow-bottom",style:{background:`linear-gradient(90deg, ${r.accent}, transparent)`}})]},r.tier))})]})}),e.jsx("style",{children:`
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
          padding: 0 1rem;
          box-sizing: border-box;
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
          gap: 0.8rem;
          flex-wrap: wrap;
          margin: 0 auto 2.6rem;
          width: 100%;
          max-width: 860px;
          box-sizing: border-box;
        }

        .sp-hero-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.15rem;
          border-radius: 999px;
          background: rgba(18, 10, 6, 0.75) !important;
          border: 1px solid rgba(255, 189, 89, 0.3) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
          box-sizing: border-box;
          max-width: 100%;
        }

        .sp-meta-header {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          flex-shrink: 0;
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
          flex-shrink: 0;
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
          white-space: nowrap;
        }

        .sp-meta-featured {
          border-color: rgba(255, 189, 89, 0.55) !important;
          background: rgba(35, 18, 10, 0.82) !important;
          box-shadow: 0 8px 30px rgba(255, 90, 31, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
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

        @media (max-width: 900px) {
          .sp-hero {
            padding: calc(75px + 1.2rem) 1rem 3rem !important;
            min-height: auto !important;
            display: flex !important;
            align-items: flex-start !important;
          }
          .sp-hero-content {
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .sp-hero-meta-strip {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.55rem !important;
            width: 100% !important;
            max-width: 360px !important;
            margin: 0 auto 1.8rem !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          .sp-hero-meta-pill {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.55rem 0.45rem !important;
            border-radius: 12px !important;
            width: 100% !important;
            min-width: 0 !important;
            gap: 0.2rem !important;
            box-sizing: border-box !important;
          }
          .sp-meta-header {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.35rem !important;
          }
          .sp-meta-dot {
            width: 6px !important;
            height: 6px !important;
            flex-shrink: 0 !important;
          }
          .sp-meta-label {
            font-size: 0.6rem !important;
            letter-spacing: 0.08em !important;
          }
          .sp-hero-meta-pill strong {
            font-size: 0.76rem !important;
            letter-spacing: 0.01em !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
            text-align: center !important;
          }
        }

        @media (max-width: 640px) {
          .sp-section { padding: 4rem 0; }
          .sp-container { width: min(100%, calc(100% - 1.2rem)); }
          
          /* Hero Mobile Alignment & Safe Padding (Clears Fixed Navbar) */
          .sp-hero {
            padding: calc(75px + 1.2rem) 1rem 2.8rem !important;
            min-height: auto !important;
            display: flex !important;
            align-items: flex-start !important;
          }
          .sp-hero-content {
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .sp-hero-badge {
            font-size: 0.72rem !important;
            padding: 0.35rem 0.85rem !important;
            margin-bottom: 0.9rem !important;
            letter-spacing: 0.08em !important;
            max-width: 95% !important;
          }
          .sp-hero-title {
            font-size: clamp(2.2rem, 10vw, 3.1rem) !important;
            line-height: 1.05 !important;
            margin-bottom: 1rem !important;
            letter-spacing: 0.02em !important;
            word-break: break-word !important;
          }
          .sp-hero-subtitle {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.4rem !important;
            max-width: 100% !important;
            padding: 0 0.25rem !important;
          }
          .sp-hero-sub-highlight {
            font-size: 1.0rem !important;
            line-height: 1.35 !important;
          }
          .sp-hero-sub-detail {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
          }
          .sp-hero-meta-strip {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto 1.8rem !important;
          }
          .sp-hero-meta-pill {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem 0.4rem !important;
            border-radius: 12px !important;
            width: 100% !important;
            min-width: 0 !important;
            gap: 0.2rem !important;
            box-sizing: border-box !important;
          }
          .sp-meta-header {
            display: flex !important;
            align-items: center !important;
            gap: 0.35rem !important;
          }
          .sp-hero-meta-pill strong {
            font-size: 0.74rem !important;
            letter-spacing: 0.01em !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          .sp-meta-label {
            font-size: 0.58rem !important;
            letter-spacing: 0.08em !important;
          }
          .sp-hero-actions {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 290px !important;
            gap: 0.75rem !important;
            margin: 0 auto !important;
          }
          .sp-hero-actions > * {
            width: 100% !important;
          }
          .sp-btn-ember, .sp-btn-ghost {
            width: 100% !important;
            text-align: center !important;
            padding: 0.85rem 1.4rem !important;
            font-size: 0.94rem !important;
            justify-content: center !important;
          }

          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
          .stat-card { padding: 1.2rem 0.9rem; }
          .stat-val { font-size: 1.8rem; }
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
      `})]})}const za="ozilla_local_tickets";let Re=!1;const Ma={regular:1200,vip:1,premium:120},Is=["pending","payment_submitted","approved","confirmed"];function jt(t){const a=String(t||"regular").toLowerCase().trim();return a==="general"?"regular":Ma[a]?a:"regular"}function vt(){const t=Object.entries(Ma).reduce((s,[i,l])=>(s[i]={type:i,label:i==="regular"?"General":i==="vip"?"VIP":"Premium",capacity:l,sold:0,remaining:l,soldOut:!1},s),{});for(const s of de()){if(!Is.includes(s.status))continue;const i=jt(s.ticketType);t[i].sold+=Number(s.quantity)||1}let a=0,r=0;for(const s of Object.values(t))s.sold=Math.min(s.sold,s.capacity),s.remaining=Math.max(0,s.capacity-s.sold),s.soldOut=s.remaining<=0,a+=s.capacity,r+=s.sold;return{capacity:a,sold:r,remaining:Math.max(0,a-r),soldOut:Object.values(t).every(s=>s.soldOut),byType:t,mode:"local-fallback"}}function Rs(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function Be(t){return Rs(t)?(Re=!0,!0):!1}function de(){try{const t=localStorage.getItem(za),a=t?JSON.parse(t):[];return Array.isArray(a)?a.map(r=>r?.status==="payment_submitted"?{...r,status:"approved",generatedAt:r.generatedAt||r.updatedAt||new Date().toISOString(),verifiedAt:r.verifiedAt||null}:r):[]}catch{return[]}}function fe(t){localStorage.setItem(za,JSON.stringify(t))}function zs(t){const a=String(t||"");if(!a)return null;if(a.startsWith("local."))try{return JSON.parse(atob(a.slice(6)))}catch{return null}const r=a.split(".");if(r.length===3)try{return JSON.parse(atob(r[1]))}catch{return null}return null}function ge(){const t=zs(je.getToken());return{userId:String(t?.sub||t?.userId||"").trim(),email:String(t?.email||"").toLowerCase().trim()}}function ye(t,a){if(!a?.email&&!a?.userId)return!1;const r=String(t?.ownerEmail||"").toLowerCase().trim(),s=String(t?.ownerId||"").trim(),i=String(t?.email||"").toLowerCase().trim();return r&&a.email?r===a.email:s&&a.userId?s===a.userId:a.email?i===a.email:!1}function at(t={}){const a=`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=(t?.name||`${t?.firstName||""} ${t?.lastName||""}`).trim()||"Demo User",s={id:"oz2026",name:"OZILLA FEST 2026",date:"2026-11-01",time:"08:00 PM",location:"Lahore"},i=new Date().toISOString(),l=ge(),n=String(t?.email||l?.email||"local@ozillafestival.com").toLowerCase().trim();return{id:a,ticketId:`OZILLA-${a.slice(-8).toUpperCase()}`,uniqueTicketId:`OZILLA-${a.slice(-8).toUpperCase()}`,ownerId:l?.userId||"",ownerEmail:n,fullName:r,name:r,email:n,phone:String(t?.phone||"+923000000000").trim(),idCardNumber:String(t?.idCardNumber||"").trim(),festivalDay:t?.festivalDay==="day2"?"day2":"day1",eventId:s.id,eventName:s.name,eventDate:s.date,eventTime:s.time,location:s.location,ticketType:jt(t?.ticketType),quantity:Number(t?.quantity)||1,status:"pending",createdAt:i,updatedAt:i}}const Te={async getAvailability(){if(Re)return vt();try{return(await ee.get("/tickets/availability")).data}catch(t){if(Be(t))return vt();throw t}},async getMyTickets(){if(Re){const t=ge();return de().filter(a=>ye(a,t))}try{return(await ee.get("/tickets/my-tickets")).data}catch(t){if(Be(t)){const a=ge();return de().filter(r=>ye(r,a))}throw t}},async requestTicket(t){if(Re){const a=vt(),r=jt(t?.ticketType),s=Math.max(1,Math.min(10,Number(t?.quantity)||1)),i=a.byType[r];if(a.soldOut||!i||i.remaining<=0){const o=new Error("Tickets are sold out. The ticket portal is currently locked.");throw o.response={status:409,data:{message:o.message,soldOut:!0,availability:a}},o}if(s>i.remaining){const o=new Error(`Only ${i.remaining} ${i.label} ticket${i.remaining===1?"":"s"} remaining.`);throw o.response={status:409,data:{message:o.message,soldOut:!1,availability:a}},o}const l=de(),n=at(t);return fe([n,...l]),{...n,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}try{return(await ee.post("/tickets/request",t)).data}catch(a){if(Be(a)){const r=vt(),s=jt(t?.ticketType),i=Math.max(1,Math.min(10,Number(t?.quantity)||1)),l=r.byType[s];if(r.soldOut||!l||l.remaining<=0){const c=new Error("Tickets are sold out. The ticket portal is currently locked.");throw c.response={status:409,data:{message:c.message,soldOut:!0,availability:r}},c}if(i>l.remaining){const c=new Error(`Only ${l.remaining} ${l.label} ticket${l.remaining===1?"":"s"} remaining.`);throw c.response={status:409,data:{message:c.message,soldOut:!1,availability:r}},c}const n=de(),o=at(t);return fe([o,...n]),{...o,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}throw a}},async getTicketById(t){if(Re){const a=ge(),r=de().find(s=>s.id===t&&ye(s,a));if(!r){const s=new Error("Ticket not found");throw s.response={data:{message:"Ticket not found"}},s}return r}try{return(await ee.get(`/tickets/view/${t}`)).data}catch(a){if(Be(a)){const r=ge(),s=de().find(i=>i.id===t&&ye(i,r));if(!s){const i=new Error("Ticket not found");throw i.response={data:{message:"Ticket not found"}},i}return s}throw a}},async payWithCard(t,a){if(Re){const r=de(),s=ge(),i=r.findIndex(o=>o.id===t&&ye(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=new Date().toISOString(),n={...r[i],status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4242",cardholderName:a?.cardholderName||"",transactionId:`TXN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l};return r[i]=n,fe(r),{message:"Payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await ee.post(`/tickets/${t}/pay-card`,a)).data}catch{const s=de(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&ye(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4411",cardholderName:a?.cardholderName||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,fe(s)):(o={...at({name:a?.cardholderName||"Card Customer",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"card",cardType:a?.cardType||"card",cardLast4:a?.cardLast4||"4411",cardholderName:a?.cardholderName||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},fe([o,...s])),{message:"Card payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},async payWithJazzCash(t,a){if(Re){const r=de(),s=ge();let i=r.findIndex(o=>(o.id===t||o.ticketId===t)&&ye(o,s));i===-1&&(i=r.findIndex(o=>o.id===t||o.ticketId===t));const l=new Date().toISOString();let n=null;return i!==-1?(n={...r[i],status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},r[i]=n,fe(r)):(n={...at({name:a?.accountTitle||"JazzCash Customer",phone:a?.mobileNumber||"03000000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},fe([n,...r])),{message:"JazzCash payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await ee.post(`/tickets/${t}/pay-jazzcash`,a)).data}catch{const s=de(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&ye(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,fe(s)):(o={...at({name:a?.accountTitle||"JazzCash Customer",phone:a?.mobileNumber||"03000000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},fe([o,...s])),{message:"JazzCash payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},async payWithEasypaisa(t,a){if(Re){const r=de(),s=ge();let i=r.findIndex(o=>(o.id===t||o.ticketId===t)&&ye(o,s));i===-1&&(i=r.findIndex(o=>o.id===t||o.ticketId===t));const l=new Date().toISOString();let n=null;return i!==-1?(n={...r[i],status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},r[i]=n,fe(r)):(n={...at({name:a?.accountTitle||"Easypaisa Customer",phone:a?.mobileNumber||"03330000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l},fe([n,...r])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:n,mode:"local-fallback"}}try{return(await ee.post(`/tickets/${t}/pay-easypaisa`,a)).data}catch{const s=de(),i=ge();let l=s.findIndex(c=>(c.id===t||c.ticketId===t)&&ye(c,i));l===-1&&(l=s.findIndex(c=>c.id===t||c.ticketId===t));const n=new Date().toISOString();let o=null;return l!==-1?(o={...s[l],status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",cardholderName:a?.accountTitle||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},s[l]=o,fe(s)):(o={...at({name:a?.accountTitle||"Easypaisa Customer",phone:a?.mobileNumber||"03330000000",ticketType:"regular",quantity:1}),id:t,ticketId:String(t).startsWith("OZILLA-")?t:`OZILLA-${String(t).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:a?.mobileNumber||"",accountTitle:a?.accountTitle||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n},fe([o,...s])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:o,mode:"fallback"}}},submitHiddenForm(t,a={}){const r=document.createElement("form");r.method="POST",r.action=t,Object.keys(a).forEach(s=>{const i=document.createElement("input");i.type="hidden",i.name=s,i.value=a[s],r.appendChild(i)}),document.body.appendChild(r),r.submit()},async initiateJazzCashCheckout(t,a){try{return(await ee.post(`/tickets/${t}/jazzcash-checkout`,{returnUrl:a})).data}catch(r){if(Be(r))return{postUrl:"https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/",payload:{pp_Version:"1.1",pp_TxnType:"MWALLET",pp_Amount:"100",pp_TxnRefNo:`T${Date.now()}`}};throw r}},async initiateEasypaisaCheckout(t,a){try{return(await ee.post(`/tickets/${t}/easypaisa-checkout`,{postBackUrl:a})).data}catch(r){if(Be(r))return{postUrl:"https://easypay.easypaisa.com.pk/easypay-service/rest/v4/initiate-ma-transaction",checkoutUrl:`${window.location.origin}/tickets/view/${t}?payment=success`,payload:{orderId:`EP-OZ-${t}`,transactionAmount:"1.0"}};throw r}},async initiatePayFastCheckout(t){if(Re){const a=de(),r=ge(),s=a.find(i=>i.id===t&&ye(i,r));return{message:"PayFast gateway session initiated",ticketId:t,checkout:{basket_id:`OZILLA-${t}-${Date.now().toString().slice(-6)}`,txnamt:String((s?.quantity||1)*1),is_sandbox:!0}}}try{return(await ee.post(`/tickets/${t}/payfast-checkout`)).data}catch(a){if(Be(a)){const r=de(),s=ge(),i=r.find(l=>l.id===t&&ye(l,s));return{message:"PayFast gateway session initiated",ticketId:t,checkout:{basket_id:`OZILLA-${t}-${Date.now().toString().slice(-6)}`,txnamt:String((i?.quantity||1)*1),is_sandbox:!0}}}throw a}},async completePayFastGateway(t,a={}){if(Re){const r=de(),s=ge(),i=r.findIndex(o=>o.id===t&&ye(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=new Date().toISOString(),n={...r[i],status:"approved",paymentMethod:"payfast_gateway",issuingBank:a?.bankName||"PayFast Multi-Channel Gateway",cardholderName:a?.customerName||r[i].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:l,generatedAt:l,verifiedAt:null,updatedAt:l};return r[i]=n,fe(r),{message:"PayFast payment completed successfully",ticket:n,mode:"local-fallback"}}try{return(await ee.post("/tickets/payfast-ipn",{ticket_id:t,basket_id:a?.basket_id,transaction_id:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,bank_name:a?.bankName||"PayFast Gateway"})).data}catch(r){if(Be(r)){const s=de(),i=ge(),l=s.findIndex(c=>c.id===t&&ye(c,i));if(l===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const n=new Date().toISOString(),o={...s[l],status:"approved",paymentMethod:"payfast_gateway",issuingBank:a?.bankName||"PayFast Multi-Channel Gateway",cardholderName:a?.customerName||s[l].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:n,generatedAt:n,verifiedAt:null,updatedAt:n};return s[l]=o,fe(s),{message:"PayFast payment completed successfully",ticket:o,mode:"local-fallback"}}throw r}},async uploadPaymentProof(t,a){if(Re){const r=de(),s=ge(),i=r.findIndex(n=>n.id===t&&ye(n,s));if(i===-1){const n=new Error("Ticket not found");throw n.response={data:{message:"Ticket not found"}},n}const l={...r[i],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return r[i]=l,fe(r),{message:"Payment proof uploaded and ticket generated successfully",ticket:l,mode:"local-fallback"}}try{return(await ee.post(`/tickets/${t}/payment-proof`,a,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(r){if(Be(r)){const s=de(),i=ge(),l=s.findIndex(o=>o.id===t&&ye(o,i));if(l===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const n={...s[l],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return s[l]=n,fe(s),{message:"Payment proof uploaded and ticket generated successfully",ticket:n,mode:"local-fallback"}}throw r}},async verifyTicket(t,a){return(await ee.post(`/tickets/${t}/verify`,{qrData:a})).data},async verifyTicketByQr(t){return(await ee.post("/tickets/verify-qr",{qrData:t})).data},async getPendingTicketsAdmin(){return(await ee.get("/tickets/admin/pending")).data},async decideTicketAdmin(t,a){return(await ee.post(`/tickets/admin/${t}/decision`,{decision:a})).data},async cancelTicket(t){if(Re){const a=de(),r=ge(),s=a.findIndex(n=>n.id===t&&ye(n,r));if(s===-1){const n=new Error("Ticket not found");throw n.response={data:{message:"Ticket not found"}},n}const i=a[s];if(!["pending","payment_submitted"].includes(i.status)){const n=new Error(`Ticket cannot be cancelled from status ${i.status}`);throw n.response={data:{message:`Ticket cannot be cancelled from status ${i.status}`}},n}const l={...i,status:"cancelled",updatedAt:new Date().toISOString()};return a[s]=l,fe(a),{message:"Ticket cancelled successfully",ticket:l,mode:"local-fallback"}}try{return(await ee.post(`/tickets/${t}/cancel`)).data}catch(a){if(Be(a)){const r=de(),s=ge(),i=r.findIndex(o=>o.id===t&&ye(o,s));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const l=r[i];if(!["pending","payment_submitted"].includes(l.status)){const o=new Error(`Ticket cannot be cancelled from status ${l.status}`);throw o.response={data:{message:`Ticket cannot be cancelled from status ${l.status}`}},o}const n={...l,status:"cancelled",updatedAt:new Date().toISOString()};return r[i]=n,fe(r),{message:"Ticket cancelled successfully",ticket:n,mode:"local-fallback"}}throw a}}};function $t(){const[t,a]=m.useState([]),[r,s]=m.useState(!1),[i,l]=m.useState(null),n=m.useCallback(async()=>{s(!0);try{const p=await Te.getMyTickets();a(p)}catch(p){l(p.message)}finally{s(!1)}},[]),o=m.useCallback(async p=>{s(!0);try{const y=await Te.requestTicket(p);return await n(),y}catch(y){throw l(y.message),y}finally{s(!1)}},[n]),c=m.useCallback(async p=>{s(!0);try{return await Te.getTicketById(p)}catch(y){throw l(y.message),y}finally{s(!1)}},[]),g=m.useCallback(async(p,y)=>{s(!0);try{const x=new FormData;x.append("paymentProof",y);const M=await Te.uploadPaymentProof(p,x);return await n(),M}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),u=m.useCallback(async(p,y)=>{s(!0);try{const x=await Te.payWithCard(p,y);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),b=m.useCallback(async(p,y)=>{s(!0);try{const x=await Te.payWithJazzCash(p,y);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),k=m.useCallback(async(p,y)=>{s(!0);try{const x=await Te.payWithEasypaisa(p,y);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]),S=m.useCallback(async p=>{s(!0);try{return await Te.initiatePayFastCheckout(p)}catch(y){throw l(y.message),y}finally{s(!1)}},[]),w=m.useCallback(async(p,y)=>{s(!0);try{const x=await Te.completePayFastGateway(p,y);return await n(),x}catch(x){throw l(x.message),x}finally{s(!1)}},[n]);return{tickets:t,loading:r,error:i,fetchMyTickets:n,requestTicket:o,getTicketById:c,payWithCard:u,payWithJazzCash:b,payWithEasypaisa:k,initiatePayFastCheckout:S,completePayFastGateway:w,uploadPaymentProof:g}}const Rt={regular:{label:"General",value:"regular",price:1,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function Ms(t=""){const a=String(t).trim().split(/\s+/).filter(Boolean);return a.length===0?{firstName:"",lastName:""}:{firstName:a[0],lastName:a.slice(1).join(" ")}}function Fs({onSubmit:t,loading:a,profileDefaults:r,onBookingChange:s,availability:i,availabilityLoading:l}){const n=m.useMemo(()=>{const P=Ms(r?.name);return{firstName:r?.firstName||P.firstName||"",lastName:r?.lastName||P.lastName||"",email:r?.email||"",phone:r?.phone||""}},[r]),[o,c]=m.useState(1),[g,u]=m.useState(""),[b,k]=m.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});m.useEffect(()=>{k(P=>({...P,firstName:n.firstName||P.firstName,lastName:n.lastName||P.lastName,email:n.email||P.email,phone:n.phone||P.phone}))},[n]);const S=P=>i?.byType?.[P],w=P=>!!S(P)?.soldOut,p=Rt[b.ticketType],y=S(b.ticketType),x=Number.isFinite(y?.remaining)?y.remaining:null,M=w(b.ticketType),N=Math.max(1,Math.min(10,x||10)),f=Number(b.quantity)||1,d=p.price*f,_=b.ticketType==="premium"?2500:0,L=Math.max(1,d-_),A=`${n.firstName} ${n.lastName}`.trim()||r?.email;m.useEffect(()=>{s?.({ticketType:p.label,day:b.festivalDay==="day1"?"Day 1":"Day 2",quantity:f,subtotal:d,serviceFee:0,discount:_,total:L,benefits:p.benefits})},[_,b.festivalDay,s,f,p,d,L]),m.useEffect(()=>{if(!i?.byType||!M)return;const P=Object.values(Rt).find($=>!w($.value));P&&k($=>({...$,ticketType:P.value,quantity:1}))},[i,M]),m.useEffect(()=>{f>N&&k(P=>({...P,quantity:N}))},[N,f]);const h=P=>{k($=>({...$,[P.target.name]:P.target.value})),P.target.name==="idCardNumber"&&u("")},v=()=>!!(b.firstName&&b.lastName&&b.email&&b.phone),C=()=>{const P=String(b.idCardNumber||"").trim(),$=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(P);return u($?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),$},R=()=>{o===1&&!v()||o===2&&(M||!C())||c(P=>Math.min(3,P+1))},q=P=>{if(P.preventDefault(),M||!v()||!C()){c(v()?2:1);return}t({...b,quantity:f,name:`${b.firstName} ${b.lastName}`.trim()})},B=()=>{c(1),u(""),k({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:n.firstName||"",lastName:n.lastName||"",email:n.email||"",phone:n.phone||""})};return e.jsxs("form",{onSubmit:q,className:"ticket-wizard-form",children:[e.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((P,$)=>e.jsxs("button",{type:"button",className:o===$+1?"is-active":o>$+1?"is-complete":"",onClick:()=>c($+1),children:[e.jsx("span",{children:$+1}),P]},P))}),A&&e.jsxs("div",{className:"ticket-login-chip",children:[e.jsx("span",{children:"OK"}),"Logged in as ",A]}),o===1&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 1"}),e.jsx("h3",{children:"Personal Information"})]}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"First Name"}),e.jsx("input",{type:"text",name:"firstName",value:b.firstName,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Last Name"}),e.jsx("input",{type:"text",name:"lastName",value:b.lastName,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Email Address"}),e.jsx("input",{type:"email",name:"email",value:b.email,onChange:h,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Phone Number"}),e.jsx("input",{type:"tel",name:"phone",value:b.phone,onChange:h,required:!0})]})]})]}),o===2&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 2"}),e.jsx("h3",{children:"Ticket Information"})]}),e.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values(Rt).map(P=>{const $=S(P.value),X=!!$?.soldOut,H=l?"Checking availability...":$?X?"Sold out":`${$.remaining.toLocaleString()} seats available`:`${P.seats} seats available`;return e.jsxs("button",{type:"button",disabled:X,"aria-disabled":X,className:`ticket-option-card ${b.ticketType===P.value?"is-selected":""} ${X?"is-sold-out":""}`,onClick:()=>{X||k(O=>({...O,ticketType:P.value,quantity:1}))},children:[e.jsx("span",{children:P.label}),e.jsxs("strong",{children:["PKR ",P.price.toLocaleString()]}),e.jsx("small",{children:H})]},P.value)})}),e.jsxs("div",{className:"ticket-input-grid",children:[e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Festival Day"}),e.jsxs("select",{name:"festivalDay",value:b.festivalDay,onChange:h,required:!0,children:[e.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),e.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),e.jsxs("label",{className:"ticket-input-wrap",children:[e.jsx("span",{children:"Quantity"}),e.jsx("input",{type:"number",name:"quantity",value:b.quantity,onChange:h,min:"1",max:N,disabled:M,required:!0})]}),e.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[e.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),e.jsx("input",{type:"text",name:"idCardNumber",value:b.idCardNumber,onChange:h,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),g&&e.jsx("em",{children:g})]})]})]}),o===3&&e.jsxs("section",{className:"ticket-form-panel",children:[e.jsxs("div",{className:"ticket-panel-heading",children:[e.jsx("p",{children:"Step 3"}),e.jsx("h3",{children:"Review & Confirm"})]}),e.jsxs("div",{className:"ticket-review-layout",children:[e.jsx("div",{className:"ticket-benefit-list",children:p.benefits.map(P=>e.jsx("span",{children:P},P))}),e.jsxs("aside",{className:"ticket-summary-card",children:[e.jsx("h4",{children:"Booking Summary"}),e.jsxs("div",{children:[e.jsx("span",{children:"Ticket Type"}),e.jsx("strong",{children:p.label})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:f})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",d.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Processing Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["PKR ",_.toLocaleString()]})]}),e.jsxs("div",{className:"ticket-total",children:[e.jsx("span",{children:"Total"}),e.jsxs("strong",{children:["PKR ",L.toLocaleString()]})]})]})]})]}),e.jsxs("div",{className:"ticket-form-actions",children:[e.jsx("button",{type:"button",onClick:o===1?B:()=>c(P=>P-1),className:"ticket-secondary-button",children:o===1?"Reset":"Back"}),o<3?e.jsx("button",{type:"button",onClick:R,className:"ticket-primary-button",children:"Continue"}):e.jsx("button",{type:"submit",disabled:a,className:"ticket-primary-button ticket-shimmer-button",children:a?"Verifying Details...":"Complete Your Booking"})]})]})}function Os(t){const a=t.replace(/\D/g,"").slice(0,16),r=a.match(/.{1,4}/g);return r?r.join(" "):a}function Ds(t){const a=t.replace(/\D/g,"").slice(0,4);return a.length>=3?`${a.slice(0,2)}/${a.slice(2)}`:a}function _s(t){const a=t.replace(/\D/g,"");return/^4/.test(a)?"visa":/^(5[1-5]|2[2-7])/.test(a)?"mastercard":/^(62|81)/.test(a)?"unionpay":null}function Bs(t){const a=t.replace(/\D/g,""),r=a.slice(0,4);return["5893","4012","5399","4519","4507"].includes(r)?"Meezan Bank":["4116","5241","4214","5488","4027"].includes(r)?"HBL":["4848","5189","4589","5294","4282"].includes(r)?"Bank Alfalah":["4351","5236","4271","5521","4046"].includes(r)?"MCB Bank":["4021","5123","4921","5424"].includes(r)?"Standard Chartered":["4203","5250","4894","5320"].includes(r)?"UBL":["4008","5456","4692","5378"].includes(r)?"Allied Bank":a.length>=6?"Verified Bank":""}function $s({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvv:"",saveCard:!0}),[n,o]=m.useState({}),[c,g]=m.useState(!1),[u,b]=m.useState(""),k=_s(i.cardNumber);Bs(i.cardNumber);const S=N=>{const f=Os(N.target.value);l(d=>({...d,cardNumber:f})),n.cardNumber&&o(d=>({...d,cardNumber:""}))},w=N=>{const f=Ds(N.target.value);l(d=>({...d,expiryDate:f})),n.expiryDate&&o(d=>({...d,expiryDate:""}))},p=N=>{const f=N.target.value.replace(/\D/g,"").slice(0,4);l(d=>({...d,cvv:f})),n.cvv&&o(d=>({...d,cvv:""}))},y=N=>{l(f=>({...f,cardholderName:N.target.value})),n.cardholderName&&o(f=>({...f,cardholderName:""}))},x=()=>{const N={},f=i.cardNumber.replace(/\s/g,"");if((!f||f.length<15)&&(N.cardNumber="Please enter a valid 16-digit card number"),i.cardholderName.trim()||(N.cardholderName="Please enter name as shown on card"),!i.expiryDate||i.expiryDate.length<5)N.expiryDate="Enter MM/YY";else{const[d,_]=i.expiryDate.split("/").map(Number);if(d<1||d>12)N.expiryDate="Invalid month (01-12)";else{const L=new Date,A=Number(String(L.getFullYear()).slice(-2)),h=L.getMonth()+1;(_<A||_===A&&d<h)&&(N.expiryDate="Card has expired")}}return(!i.cvv||i.cvv.length<3)&&(N.cvv="Enter 3 or 4 digits"),o(N),Object.keys(N).length===0},M=async N=>{if(N.preventDefault(),!!x()){b("Validating card credentials with bank..."),await new Promise(f=>setTimeout(f,450)),b("Authorizing payment deduction...");try{await a({cardNumber:i.cardNumber.replace(/\s/g,""),cardLast4:i.cardNumber.replace(/\s/g,"").slice(-4),cardholderName:i.cardholderName.trim(),expiryDate:i.expiryDate,cvv:i.cvv,saveCard:i.saveCard,cardType:k||"card"})}finally{b("")}}};return e.jsxs("div",{className:"card-payment-container",children:[e.jsxs("div",{className:"card-brands-row",children:[e.jsx("div",{className:`card-brand-logo mastercard ${k==="mastercard"?"is-active":""}`,title:"Mastercard",children:e.jsxs("svg",{viewBox:"0 0 38 24",width:"44",height:"28","aria-label":"Mastercard",children:[e.jsx("circle",{cx:"14",cy:"12",r:"10",fill:"#EB001B"}),e.jsx("circle",{cx:"24",cy:"12",r:"10",fill:"#F79E1B",fillOpacity:"0.88"})]})}),e.jsx("div",{className:`card-brand-logo visa ${k==="visa"?"is-active":""}`,title:"VISA",children:e.jsx("svg",{viewBox:"0 0 50 20",width:"54",height:"22","aria-label":"VISA",children:e.jsx("text",{x:"2",y:"16",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"900",fontStyle:"italic",fontSize:"18",fill:"#ffffff",letterSpacing:"1",children:"VISA"})})}),e.jsx("div",{className:`card-brand-logo unionpay ${k==="unionpay"?"is-active":""}`,title:"UnionPay",children:e.jsxs("div",{className:"unionpay-badge",children:[e.jsx("span",{className:"up-red"}),e.jsx("span",{className:"up-blue"}),e.jsx("span",{className:"up-green"}),e.jsx("span",{className:"up-text",children:"UnionPay"})]})})]}),e.jsxs("form",{onSubmit:M,className:"card-payment-form",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Card number"]}),e.jsxs("div",{className:"card-input-wrapper",children:[e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-number",placeholder:"4000 1234 5678 9010",value:i.cardNumber,onChange:S,className:`card-input ${n.cardNumber?"has-error":""}`,maxLength:19,disabled:r}),k&&e.jsx("span",{className:"card-detected-badge",children:k.toUpperCase()})]}),n.cardNumber&&e.jsx("span",{className:"card-field-error",children:n.cardNumber})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Name on card"]}),e.jsx("input",{type:"text",autoComplete:"cc-name",placeholder:"e.g. HAMZA ALI",value:i.cardholderName,onChange:y,className:`card-input ${n.cardholderName?"has-error":""}`,disabled:r}),n.cardholderName&&e.jsx("span",{className:"card-field-error",children:n.cardholderName})]}),e.jsxs("div",{className:"card-row-two-col",children:[e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Expiry date"]}),e.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",value:i.expiryDate,onChange:w,className:`card-input ${n.expiryDate?"has-error":""}`,maxLength:5,disabled:r}),n.expiryDate&&e.jsx("span",{className:"card-field-error",children:n.expiryDate})]}),e.jsxs("div",{className:"card-field-group",children:[e.jsxs("label",{className:"card-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," CVV",e.jsx("button",{type:"button",className:"cvv-info-btn",onClick:()=>g(!c),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),"aria-label":"CVV information",children:"ⓘ"}),c&&e.jsx("div",{className:"cvv-tooltip",children:"3 or 4 digit security code located on the back of your card."})]}),e.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"•••",value:i.cvv,onChange:p,className:`card-input ${n.cvv?"has-error":""}`,maxLength:4,disabled:r}),n.cvv&&e.jsx("span",{className:"card-field-error",children:n.cvv})]})]}),e.jsxs("div",{className:"save-card-wrapper",children:[e.jsxs("label",{className:"save-card-checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:i.saveCard,onChange:N=>l(f=>({...f,saveCard:N.target.checked})),className:"save-card-checkbox",disabled:r}),e.jsx("span",{className:"save-card-title",children:"Save Card for Express Rebooking"})]}),e.jsx("p",{className:"save-card-subtext",children:"Card details are encrypted with bank-grade 256-bit tokenization for your security."})]}),u&&e.jsxs("div",{className:"card-processing-status",children:[e.jsx("span",{className:"card-spinner"}),e.jsx("span",{children:u})]}),e.jsxs("div",{className:"card-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Payment..."]}):t?`Pay Now • PKR ${t.toLocaleString()}`:"Pay Now"})]}),e.jsxs("div",{className:"card-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted & PCI-DSS Compliant"}),e.jsx("span",{children:"⚡ Instant Verified QR Pass Delivery"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Hs(t){const a=t.replace(/\D/g,"").slice(0,11);return a.length>4?`${a.slice(0,4)}-${a.slice(4)}`:a}function Us({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({mobileNumber:"",accountTitle:""}),[n,o]=m.useState({}),[c,g]=m.useState(""),u=w=>{const p=Hs(w.target.value);l(y=>({...y,mobileNumber:p})),n.mobileNumber&&o(y=>({...y,mobileNumber:""}))},b=w=>{l(p=>({...p,accountTitle:w.target.value})),n.accountTitle&&o(p=>({...p,accountTitle:""}))},k=()=>{const w={},p=i.mobileNumber.replace(/\D/g,"");return(!p||p.length<11||!p.startsWith("03"))&&(w.mobileNumber="Please enter a valid 11-digit JazzCash number (e.g., 0300-1234567)"),i.accountTitle.trim()||(w.accountTitle="Please enter the title/name registered with this JazzCash account"),o(w),Object.keys(w).length===0},S=async w=>{if(w.preventDefault(),!!k()){g("Connecting to JazzCash Secure Gateway..."),await new Promise(p=>setTimeout(p,450)),g("Validating JazzCash wallet balance & credentials..."),await new Promise(p=>setTimeout(p,450)),g(`Authorizing deduction of PKR ${t.toLocaleString()}...`);try{await a({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{g("")}}};return e.jsxs("div",{className:"jazzcash-payment-container",children:[e.jsxs("div",{className:"jazzcash-header-badge",children:[e.jsx("div",{className:"jc-logo-circle",children:"JC"}),e.jsxs("div",{children:[e.jsx("h4",{children:"JazzCash Direct Wallet"}),e.jsx("span",{children:"Automatic instant deduction from your mobile wallet"})]})]}),e.jsxs("form",{onSubmit:S,className:"jazzcash-payment-form",children:[e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," JazzCash Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0300-1234567",value:i.mobileNumber,onChange:u,className:`jc-input ${n.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),n.mobileNumber&&e.jsx("span",{className:"jc-field-error",children:n.mobileNumber})]}),e.jsxs("div",{className:"jc-field-group",children:[e.jsxs("label",{className:"jc-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:b,className:`jc-input ${n.accountTitle?"has-error":""}`,disabled:r}),n.accountTitle&&e.jsx("span",{className:"jc-field-error",children:n.accountTitle})]}),c&&e.jsxs("div",{className:"jc-processing-status",children:[e.jsx("span",{className:"jc-spinner"}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"jc-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"jc-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing JazzCash Payment..."]}):t?`Pay with JazzCash • PKR ${t.toLocaleString()}`:"Pay with JazzCash"})]}),e.jsxs("div",{className:"jc-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted JazzCash API Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Gs(t){const a=t.replace(/\D/g,"").slice(0,11);return a.length>4?`${a.slice(0,4)}-${a.slice(4)}`:a}function Ws({amount:t,onSubmit:a,loading:r,onBack:s}){const[i,l]=m.useState({mobileNumber:"",accountTitle:""}),[n,o]=m.useState({}),[c,g]=m.useState(""),u=w=>{const p=Gs(w.target.value);l(y=>({...y,mobileNumber:p})),n.mobileNumber&&o(y=>({...y,mobileNumber:""}))},b=w=>{l(p=>({...p,accountTitle:w.target.value})),n.accountTitle&&o(p=>({...p,accountTitle:""}))},k=()=>{const w={},p=i.mobileNumber.replace(/\D/g,"");return(!p||p.length<11||!p.startsWith("03"))&&(w.mobileNumber="Please enter a valid 11-digit Easypaisa number (e.g., 0333-1234567)"),i.accountTitle.trim()||(w.accountTitle="Please enter the name registered on your Easypaisa account"),o(w),Object.keys(w).length===0},S=async w=>{if(w.preventDefault(),!!k()){g("Connecting to Easypaisa Open API..."),await new Promise(p=>setTimeout(p,450)),g("Verifying account status and authorization..."),await new Promise(p=>setTimeout(p,450)),g(`Authorizing deduction of PKR ${t.toLocaleString()}...`);try{await a({mobileNumber:i.mobileNumber.replace(/\D/g,""),accountTitle:i.accountTitle.trim()})}finally{g("")}}};return e.jsxs("div",{className:"easypaisa-payment-container",children:[e.jsxs("div",{className:"easypaisa-header-badge",children:[e.jsx("div",{className:"ep-logo-circle",children:"EP"}),e.jsxs("div",{children:[e.jsx("h4",{children:"Easypaisa Mobile Account"}),e.jsx("span",{children:"Automatic instant deduction from your mobile account"})]})]}),e.jsxs("form",{onSubmit:S,className:"easypaisa-payment-form",children:[e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Easypaisa Mobile Account Number"]}),e.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0333-1234567",value:i.mobileNumber,onChange:u,className:`ep-input ${n.mobileNumber?"has-error":""}`,maxLength:12,disabled:r}),n.mobileNumber&&e.jsx("span",{className:"ep-field-error",children:n.mobileNumber})]}),e.jsxs("div",{className:"ep-field-group",children:[e.jsxs("label",{className:"ep-field-label",children:[e.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),e.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:i.accountTitle,onChange:b,className:`ep-input ${n.accountTitle?"has-error":""}`,disabled:r}),n.accountTitle&&e.jsx("span",{className:"ep-field-error",children:n.accountTitle})]}),c&&e.jsxs("div",{className:"ep-processing-status",children:[e.jsx("span",{className:"ep-spinner"}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"ep-actions-row",children:[s&&e.jsx("button",{type:"button",onClick:s,disabled:r,className:"ticket-secondary-button",children:"Back"}),e.jsx("button",{type:"submit",disabled:r,className:"ep-pay-now-btn",children:r?e.jsxs("span",{className:"btn-loading-content",children:[e.jsx("span",{className:"btn-spinner"})," Processing Easypaisa Payment..."]}):t?`Pay with Easypaisa • PKR ${t.toLocaleString()}`:"Pay with Easypaisa"})]}),e.jsxs("div",{className:"ep-security-footer",children:[e.jsx("span",{children:"🔒 256-Bit SSL Encrypted Easypaisa Gateway Integration"}),e.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),e.jsx("style",{children:`
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
      `})]})}function qs({isOpen:t,onClose:a,ticket:r,amount:s,onComplete:i}){const[l,n]=m.useState("card"),[o,c]=m.useState(!1),[g,u]=m.useState(""),[b,k]=m.useState(!1),[S,w]=m.useState("849201"),[p,y]=m.useState({cardNumber:"5893 4100 8821 9402",expiry:"08/28",cvv:"921",holderName:r?.fullName||"Customer"}),[x,M]=m.useState(r?.phone||"03001234567");if(!t)return null;const N=async d=>{d.preventDefault(),c(!0),u("Connecting to SBP 1LINK switch..."),await new Promise(_=>setTimeout(_,600)),u("Sending 3D Secure OTP verification request to issuing bank..."),await new Promise(_=>setTimeout(_,600)),c(!1),k(!0)},f=async()=>{c(!0),u("Verifying OTP with issuing bank..."),await new Promise(d=>setTimeout(d,700)),u(`Deducting PKR ${Number(s||0).toLocaleString()} and settling to Organizer Bank Account...`),await new Promise(d=>setTimeout(d,800)),u("Payment Successful! Sending IPN webhook to OZILLA FEST..."),await new Promise(d=>setTimeout(d,600));try{await i({basket_id:`OZILLA-${r?.id||r?.ticketId}`,bankName:l==="card"?"Meezan Bank 1LINK":l==="jazzcash"?"JazzCash MWallet":"Easypaisa MAccount",customerName:r?.fullName||p.holderName})}finally{c(!1)}};return e.jsxs("div",{className:"pf-modal-overlay",children:[e.jsxs("div",{className:"pf-modal-container",children:[e.jsxs("div",{className:"pf-modal-header",children:[e.jsxs("div",{className:"pf-modal-brand",children:[e.jsx("span",{className:"pf-logo",children:"PayFast"}),e.jsx("span",{className:"pf-tagline",children:"Secure Multi-Channel IPG"})]}),e.jsx("button",{type:"button",className:"pf-close-btn",onClick:a,disabled:o,children:"✕"})]}),e.jsxs("div",{className:"pf-merchant-banner",children:[e.jsxs("div",{children:[e.jsx("small",{children:"Merchant"}),e.jsx("strong",{children:"Prism Events & Tours (OZILLA FEST 2026)"})]}),e.jsxs("div",{className:"pf-amount-pill",children:[e.jsx("small",{children:"Total Due"}),e.jsxs("strong",{children:["PKR ",Number(s||0).toLocaleString()]})]})]}),e.jsx("div",{className:"pf-modal-body",children:b?e.jsxs("div",{className:"pf-otp-screen",children:[e.jsx("div",{className:"pf-otp-icon",children:"🔐"}),e.jsx("h3",{children:"3D Secure Bank OTP Verification"}),e.jsxs("p",{children:["A one-time verification code has been sent to your bank-registered mobile number ending in ",e.jsx("strong",{children:"•••• 402"}),"."]}),e.jsx("div",{className:"pf-fg",style:{maxWidth:"240px",margin:"16px auto"},children:e.jsx("input",{type:"text",maxLength:6,value:S,onChange:d=>w(d.target.value),className:"pf-otp-input",style:{textAlign:"center",fontSize:"22px",letterSpacing:"4px",fontWeight:"bold"}})}),g&&e.jsx("div",{className:"pf-phase-msg",children:g}),e.jsx("button",{type:"button",className:"pf-modal-submit",onClick:f,disabled:o,children:o?g:"Confirm & Authorize Payment"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pf-modal-tabs",children:[e.jsx("button",{type:"button",className:`pf-tab ${l==="card"?"is-active":""}`,onClick:()=>n("card"),children:"💳 Debit / Credit Card"}),e.jsx("button",{type:"button",className:`pf-tab ${l==="jazzcash"?"is-active":""}`,onClick:()=>n("jazzcash"),children:"🟠 JazzCash"}),e.jsx("button",{type:"button",className:`pf-tab ${l==="easypaisa"?"is-active":""}`,onClick:()=>n("easypaisa"),children:"🟢 Easypaisa"})]}),l==="card"&&e.jsxs("form",{onSubmit:N,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Card Number"}),e.jsx("input",{type:"text",value:p.cardNumber,onChange:d=>y({...p,cardNumber:d.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-grid-2",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Expiry (MM/YY)"}),e.jsx("input",{type:"text",value:p.expiry,onChange:d=>y({...p,expiry:d.target.value}),required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"CVV / CVC"}),e.jsx("input",{type:"password",maxLength:4,value:p.cvv,onChange:d=>y({...p,cvv:d.target.value}),required:!0})]})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Cardholder Name"}),e.jsx("input",{type:"text",value:p.holderName,onChange:d=>y({...p,holderName:d.target.value}),required:!0})]}),g&&e.jsx("div",{className:"pf-phase-msg",children:g}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:o,children:o?"Connecting...":`Pay PKR ${Number(s||0).toLocaleString()} via PayFast`})]}),(l==="jazzcash"||l==="easypaisa")&&e.jsxs("form",{onSubmit:N,className:"pf-modal-form",children:[e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:l==="jazzcash"?"JazzCash Mobile Number":"Easypaisa Mobile Number"}),e.jsx("input",{type:"text",value:x,onChange:d=>M(d.target.value),placeholder:"0300-1234567",required:!0})]}),e.jsxs("div",{className:"pf-fg",children:[e.jsx("label",{children:"Account Title"}),e.jsx("input",{type:"text",value:p.holderName,onChange:d=>y({...p,holderName:d.target.value}),required:!0})]}),g&&e.jsx("div",{className:"pf-phase-msg",children:g}),e.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:o,children:o?"Connecting...":`Authenticate & Pay PKR ${Number(s||0).toLocaleString()}`})]})]})}),e.jsx("div",{className:"pf-modal-footer",children:e.jsx("span",{children:"🔒 256-Bit Encrypted Secure Connection · PCI-DSS Compliant"})})]}),e.jsx("style",{children:`
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
      `})]})}function Ys({activeMethod:t,onSelectMethod:a}){const r=[{id:"payfast",title:"PayFast Hosted Gateway",subtitle:"Cards, Wallets, 1LINK Bank Accounts",badge:"Recommended",icon:e.jsx("div",{style:{width:24,height:24,borderRadius:"6px",background:"linear-gradient(135deg, #eb4d4b, #f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff"},children:"PF"}),color:"#eb4d4b"},{id:"card",title:"Debit / Credit Card",subtitle:"Visa, Mastercard, UnionPay, PayPak",badge:"Auto-Deduct",icon:e.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),color:"#ff5a1f"},{id:"jazzcash",title:"JazzCash",subtitle:"Mobile Wallet / Direct Pay",badge:"Zero Fee",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#E30613",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"JC"}),color:"#E30613"},{id:"easypaisa",title:"Easypaisa",subtitle:"Mobile Account / Push Approval",badge:"Instant Pass",icon:e.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#00A651",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"EP"}),color:"#00A651"}];return e.jsxs("div",{className:"payment-method-selector-container",children:[e.jsx("div",{className:"payment-method-tabs",children:r.map(s=>{const i=t===s.id;return e.jsxs("button",{type:"button",className:`payment-method-tab ${i?"is-active":""}`,onClick:()=>a(s.id),children:[e.jsxs("div",{className:"payment-tab-top",children:[e.jsx("div",{className:"payment-tab-icon",children:s.icon}),e.jsx("span",{className:"payment-tab-badge",children:s.badge})]}),e.jsxs("div",{className:"payment-tab-text",children:[e.jsxs("div",{className:"payment-tab-title",children:[e.jsx("strong",{children:s.title}),i&&e.jsx("span",{className:"active-dot"})]}),e.jsx("small",{children:s.subtitle})]})]},s.id)})}),e.jsx("style",{children:`
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
      `})]})}function Ht({type:t,message:a,onClose:r}){const s={success:"bg-green-100 border-green-500 text-green-700",error:"bg-red-100 border-red-500 text-red-700",warning:"bg-yellow-100 border-yellow-500 text-yellow-700",info:"bg-blue-100 border-blue-500 text-blue-700"}[t]||"bg-gray-100 border-gray-500 text-gray-700";return e.jsxs("div",{className:`${s} border-l-4 p-4 rounded mb-4 flex justify-between items-center`,children:[e.jsx("p",{children:a}),r&&e.jsx("button",{onClick:r,className:"ml-4 font-bold hover:opacity-75",children:"×"})]})}const Xs=["Personal Info","Ticket Details","Payment Checkout","QR Pass"],Zs={ticketType:"General",day:"Day 1",quantity:1,subtotal:1,serviceFee:0,discount:0,total:1,benefits:["Festival entry","Food court access","Partner discount offers"]};function Ks(){const t=pt(),{user:a}=Qe(),{requestTicket:r,payWithCard:s,payWithJazzCash:i,payWithEasypaisa:l,initiatePayFastCheckout:n,completePayFastGateway:o,loading:c}=$t(),[g,u]=m.useState(null),[b,k]=m.useState(!1),[S,w]=m.useState("payfast"),[p,y]=m.useState(null),[x,M]=m.useState(!1),[N,f]=m.useState(Zs),[d,_]=m.useState(null),[L,A]=m.useState(!0),h=b?3:2;`${a?.firstName||""} ${a?.lastName||""}`.trim()||a?.name||a?.email;const v=!!d?.soldOut;m.useEffect(()=>{let H=!0;return(async()=>{A(!0);try{const D=await Te.getAvailability();if(!H)return;_(D),D?.soldOut&&u({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{H&&_(null)}finally{H&&A(!1)}})(),()=>{H=!1}},[]);const C=()=>{if(v){u({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}t(`/login?returnTo=${encodeURIComponent("/tickets")}`)},R=async H=>{if(v){u({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const O=await r(H);y(O),k(!0),u({type:"success",message:"Ticket reserved! Please complete payment below."});const D=await Te.getAvailability().catch(()=>null);D&&_(D)}catch(O){const D=O?.response?.data?.message||O?.message||"Failed to request ticket. Please try again.";O?.response?.data?.availability&&_(O.response.data.availability),u({type:"error",message:D})}},q=async H=>{if(!p?.id){u({type:"error",message:"Ticket session expired. Please retry."});return}try{await s(p.id,H),u({type:"success",message:`Payment of PKR ${N.total.toLocaleString()} successful! Your QR pass is ready.`}),t(`/tickets/view/${p.id}`)}catch(O){const D=O?.response?.data?.message||O?.message||"Failed to process card payment.";u({type:"error",message:D})}},B=async H=>{if(!p?.id){u({type:"error",message:"Ticket session expired. Please retry."});return}try{await i(p.id,H),u({type:"success",message:"JazzCash payment successful! Your QR pass is ready."}),t(`/tickets/view/${p.id}`)}catch(O){const D=O?.response?.data?.message||O?.message||"Failed to process JazzCash payment.";u({type:"error",message:D})}},P=async H=>{if(!p?.id){u({type:"error",message:"Ticket session expired. Please retry."});return}try{await l(p.id,H),u({type:"success",message:"Easypaisa payment successful! Your QR pass is ready."}),t(`/tickets/view/${p.id}`)}catch(O){const D=O?.response?.data?.message||O?.message||"Failed to process Easypaisa payment.";u({type:"error",message:D})}},$=async()=>{if(!p?.id){u({type:"error",message:"Ticket session expired. Please retry."});return}try{await n(p.id),M(!0)}catch(H){u({type:"error",message:H?.response?.data?.message||H?.message||"Failed to initiate PayFast session."})}},X=async H=>{if(p?.id)try{await o(p.id,H),M(!1),u({type:"success",message:`PayFast payment of PKR ${N.total.toLocaleString()} confirmed! Official QR pass generated.`}),t(`/tickets/view/${p.id}?payment=success`)}catch(O){u({type:"error",message:O?.response?.data?.message||O?.message||"Failed to verify PayFast transaction."})}};return e.jsxs("main",{className:"ticket-portal-clean",children:[e.jsxs("section",{className:"ticket-clean-hero",children:[e.jsx(Bt,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.5}),e.jsx("div",{className:"hero-glow-blob"}),e.jsxs("div",{className:"ticket-clean-hero-content",children:[e.jsx("span",{className:"hero-eyebrow",children:"OZILLA FEST 2026"}),e.jsx("h1",{className:"hero-title",children:"Book Your Festival Passes"}),e.jsx("p",{className:"hero-subtitle",children:"Instant digital QR pass with access to 4 live stages, headline artists, and VIP amenities in Lahore."}),e.jsxs("div",{className:"hero-tags",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore"}),e.jsx("span",{children:"⚡ Instant QR Pass"})]})]})]}),e.jsxs("section",{className:"ticket-clean-shell",children:[g&&e.jsx(Ht,{type:g.type,message:g.message,onClose:()=>u(null)}),e.jsx("div",{className:"ticket-clean-stepper",children:Xs.map((H,O)=>e.jsxs("div",{className:`step-item ${O+1<=h?"is-active":""}`,children:[e.jsx("span",{className:"step-num",children:O+1}),e.jsx("span",{className:"step-text",children:H})]},H))}),v?e.jsxs("div",{className:"ticket-sold-out-box",style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(30, 10, 15, 0.95) 100%)",border:"2px solid #ef4444",borderRadius:"24px",padding:"48px 24px",textAlign:"center",boxShadow:"0 20px 50px rgba(239, 68, 68, 0.25)",margin:"20px 0 40px"},children:[e.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"#ef4444",color:"#ffffff",padding:"6px 16px",borderRadius:"9999px",fontSize:"13px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px"},children:"🔒 PORTAL LOCKED"}),e.jsx("h2",{style:{fontSize:"clamp(26px, 5vw, 40px)",fontWeight:"900",color:"#ffffff",margin:"0 0 12px"},children:"Tickets Are Officially Sold Out!"}),e.jsxs("p",{style:{color:"#d1d5db",maxWidth:"600px",margin:"0 auto 24px",fontSize:"16px",lineHeight:"1.6"},children:["All General, VIP, and Premium passes for ",e.jsx("strong",{children:"OZILLA FEST 2026"})," have been fully booked. The ticket booking system is locked to prevent overbooking."]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"14px",flexWrap:"wrap"},children:[e.jsx("button",{type:"button",onClick:()=>t("/#sponsorship"),style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"12px 28px",borderRadius:"12px",fontWeight:"700",fontSize:"14px",border:"none",cursor:"pointer"},children:"Inquire Corporate / Sponsor Passes"}),e.jsx("button",{type:"button",onClick:()=>t("/schedule"),style:{background:"rgba(255,255,255,0.08)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.2)",padding:"12px 24px",borderRadius:"12px",fontWeight:"600",fontSize:"14px",cursor:"pointer"},children:"View Festival Schedule"})]})]}):a?e.jsxs("div",{className:"ticket-main-grid",children:[e.jsxs("div",{className:"ticket-form-card",children:[e.jsxs("div",{className:"ticket-form-header",children:[e.jsx("h2",{children:b?"Payment Checkout":"Pass Reservation"}),e.jsx("span",{className:"ticket-badge-pill",children:"Official Portal"})]}),b?e.jsxs("div",{className:"ticket-payment-wrapper",children:[e.jsx(Ys,{activeMethod:S,onSelectMethod:w}),S==="payfast"&&e.jsx(Vs,{amount:N.total,onProceed:$,loading:c,onBack:()=>k(!1)}),S==="card"&&e.jsx($s,{amount:N.total,onSubmit:q,loading:c,onBack:()=>k(!1)}),S==="jazzcash"&&e.jsx(Us,{amount:N.total,onSubmit:B,loading:c,onBack:()=>k(!1)}),S==="easypaisa"&&e.jsx(Ws,{amount:N.total,onSubmit:P,loading:c,onBack:()=>k(!1)})]}):e.jsx(Fs,{onSubmit:R,loading:c,profileDefaults:a,onBookingChange:f,availability:d,availabilityLoading:L})]}),e.jsx(qs,{isOpen:x,onClose:()=>M(!1),ticket:p,amount:N.total,onComplete:X}),e.jsx("aside",{className:"ticket-sidebar",children:e.jsxs("div",{className:"ticket-sidebar-summary",children:[e.jsx("h3",{children:"Order Summary"}),e.jsxs("div",{className:"summary-pass-type",children:[e.jsxs("strong",{children:[N.ticketType," Pass"]}),e.jsx("span",{children:N.day})]}),e.jsxs("div",{className:"summary-rows",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Quantity"}),e.jsx("strong",{children:N.quantity})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Price"}),e.jsxs("strong",{children:["PKR ",N.subtotal.toLocaleString()]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Fee"}),e.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),N.discount>0&&e.jsxs("div",{className:"summary-row summary-discount",children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["- PKR ",N.discount.toLocaleString()]})]})]}),e.jsxs("div",{className:"summary-total-row",children:[e.jsx("span",{children:"Grand Total"}),e.jsxs("strong",{children:["PKR ",N.total.toLocaleString()]})]}),e.jsx("div",{className:"summary-pass-badge",children:e.jsx("span",{children:"🎟️ Verified Digital QR Pass"})})]})})]}):e.jsxs("div",{className:"ticket-auth-prompt",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Sign in to Book Passes"}),e.jsx("p",{children:"Secure ticket purchasing requires an account for verified QR pass generation."})]}),e.jsx("button",{type:"button",onClick:C,className:"ticket-primary-button",children:"Sign In to Continue →"})]})]}),e.jsx("style",{children:`
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
      `})]})}function Js(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Qs({ticket:t,size:a=200,showCaption:r=!0}){const s=JSON.stringify({ticketId:t.uniqueTicketId||t.ticketId||t.id,fullName:t.fullName||t.name,email:t.email,phone:t.phone,eventName:t.eventName,eventDate:t.eventDate,eventTime:t.eventTime});return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:e.jsx(Za,{value:s,size:a,level:"H",includeMargin:!0,renderAs:"canvas"})}),r?e.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function ei(t="pending"){return t==="approved"?{label:"Verified",className:"is-approved"}:t==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:t==="rejected"||t==="cancelled"?{label:t==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function zt(t,a,r,s,i,l){const n=Math.min(l,s/2,i/2);t.beginPath(),t.moveTo(a+n,r),t.lineTo(a+s-n,r),t.quadraticCurveTo(a+s,r,a+s,r+n),t.lineTo(a+s,r+i-n),t.quadraticCurveTo(a+s,r+i,a+s-n,r+i),t.lineTo(a+n,r+i),t.quadraticCurveTo(a,r+i,a,r+i-n),t.lineTo(a,r+n),t.quadraticCurveTo(a,r,a+n,r),t.closePath()}function ti(t,a,r,s,i,l,n="left"){const o=String(a).split(/\s+/);let c="",g=s;const u=t.textAlign;t.textAlign=n,o.forEach((b,k)=>{const S=c?`${c} ${b}`:b;t.measureText(S).width>i&&c?(t.fillText(c,n==="right"?r+i:r,g),c=b,g+=l):c=S,k===o.length-1&&c&&t.fillText(c,n==="right"?r+i:r,g)}),t.textAlign=u}function Fa({ticket:t,actionTo:a,actionLabel:r="View Ticket"}){const s=m.useRef(null),i=m.useRef(null),l=t.uniqueTicketId||t.ticketId||t.id,n=t.bookingId||t.requestId||t.id,o=ei(t.status),c=t.status==="approved",g=`${(t.ticketType||"VIP").toUpperCase()} PASS`,u=t.eventDate?Js(t.eventDate):"Nov 01, 2026",b=t.festivalDay==="day2"?"Day 2":"Day 1",k=y=>{const x=document.createElement("a");x.href=y.toDataURL("image/png"),x.download=`ozilla-pass-${l}.png`,x.click()},S=async()=>{const y=s.current?.querySelector("canvas"),x=1200,M=440,N=document.createElement("canvas");N.width=x,N.height=M;const f=N.getContext("2d");if(!f)return;const d=f.createLinearGradient(0,0,x,M);d.addColorStop(0,"#020d0f"),d.addColorStop(.46,"#062828"),d.addColorStop(1,"#23081e"),zt(f,4,4,x-8,M-8,38),f.fillStyle=d,f.fill(),f.strokeStyle="rgba(255, 255, 255, 0.16)",f.lineWidth=3,f.stroke();const _=f.createLinearGradient(80,0,x-80,0);_.addColorStop(0,"rgba(255, 189, 89, 0.7)"),_.addColorStop(.5,"rgba(14, 165, 233, 0.5)"),_.addColorStop(1,"rgba(236, 72, 153, 0.6)"),f.strokeStyle=_,f.lineWidth=3.5,f.beginPath(),f.moveTo(90,6),f.lineTo(x-90,6),f.stroke(),f.fillStyle="#ffffff",f.font='800 20px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(g,54,66),f.fillStyle="#ff9f1c",f.font='800 13px "Segoe UI", Arial, sans-serif',f.fillText("OZILLA FEST 2026",54,94);const L=t.fullName||t.name||"Festival Guest";f.fillStyle="#ffffff",f.font='800 36px "Segoe UI", Arial, sans-serif',ti(f,L,54,152,x-360,42);const A=t.email||"-";f.fillStyle="rgba(255, 255, 255, 0.78)",f.font='600 17px "Segoe UI", Arial, sans-serif',f.fillText(A,54,198);const h=[{label:"DATE",val:u},{label:"DAY",val:b},{label:"LOCATION",val:t.location||"Lahore, Pakistan"},{label:"BOOKING ID",val:String(n)}],v=246;let C=54;h.forEach(P=>{f.font='700 11px "Segoe UI", Arial, sans-serif';const $=f.measureText(P.label).width;f.font='800 14px "Segoe UI", Arial, sans-serif';const X=f.measureText(P.val).width,H=Math.max($,X)+28;zt(f,C,v,H,58,12),f.fillStyle="rgba(255, 255, 255, 0.07)",f.fill(),f.strokeStyle="rgba(255, 255, 255, 0.12)",f.lineWidth=1.5,f.stroke(),f.fillStyle="#ff9f1c",f.font='800 11px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(P.label,C+14,v+22),f.fillStyle="#ffffff",f.font='800 14px "Segoe UI", Arial, sans-serif',f.fillText(P.val,C+14,v+44),C+=H+14}),f.fillStyle="rgba(255, 255, 255, 0.45)",f.font='600 13px "Segoe UI", Arial, sans-serif',f.textAlign="left",f.fillText(`Official Festival Entry Pass • ID: ${l} • Verify at entrance`,54,388),f.fillStyle="#ffbd59",f.font='800 16px "Segoe UI", Arial, sans-serif',f.textAlign="right",f.fillText("TICKET ID",x-54,66),f.fillStyle="#ffffff",f.font='800 20px "Segoe UI", Arial, monospace',f.fillText(String(l),x-54,96);const R=190,q=x-R-54,B=132;zt(f,q,B,R,R,18),f.fillStyle="#ffffff",f.fill(),f.strokeStyle="rgba(255, 189, 89, 0.4)",f.lineWidth=2,f.stroke(),y&&c?f.drawImage(y,q+12,B+12,R-24,R-24):(f.fillStyle="#102525",f.font='800 13px "Segoe UI", Arial, sans-serif',f.textAlign="center",f.fillText("QR CODE",q+R/2,B+R/2-8),f.font='600 11px "Segoe UI", Arial, sans-serif',f.fillStyle="#6b7280",f.fillText(c?"GENERATING":"PENDING APPROVAL",q+R/2,B+R/2+12)),f.fillStyle="#ffbd59",f.font='800 11px "Segoe UI", Arial, sans-serif',f.textAlign="center",f.fillText("SCAN AT ENTRANCE",q+R/2,B+R+28),k(N)},w=()=>{S()},p=async()=>{if(navigator.share)try{await navigator.share({title:t.eventName||"OZILLA FEST Ticket Pass",text:`OZILLA FEST Ticket: ${l} (${g})`})}catch{}};return e.jsxs("div",{className:"ticket-pass-wrapper",ref:i,children:[e.jsxs("div",{className:"ticket-pass-badge",children:[e.jsx("div",{className:"ticket-pass-glow","aria-hidden":"true"}),e.jsxs("div",{className:"ticket-pass-left",children:[e.jsxs("div",{className:"ticket-pass-top-row",children:[e.jsx("div",{className:"ticket-pass-type-badge",children:g}),e.jsx("div",{className:"ticket-pass-festival-tag",children:"OZILLA FEST 2026"})]}),e.jsxs("div",{className:"ticket-pass-identity",children:[e.jsx("h2",{className:"ticket-pass-name",children:t.fullName||t.name||"Festival Guest"}),e.jsx("p",{className:"ticket-pass-email",children:t.email||"-"})]}),e.jsxs("div",{className:"ticket-pass-meta-row",children:[e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"DATE"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:u})]}),e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"DAY"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:b})]}),e.jsxs("div",{className:"ticket-pass-chip",children:[e.jsx("span",{className:"ticket-pass-chip-label",children:"BOOKING ID"}),e.jsx("strong",{className:"ticket-pass-chip-value",children:n})]})]}),e.jsx("div",{className:"ticket-pass-footnote",children:e.jsx("span",{children:"Official Festival Entry Pass • Valid for 1 Person"})})]}),e.jsxs("div",{className:"ticket-pass-right",children:[e.jsxs("div",{className:"ticket-pass-id-block",children:[e.jsx("span",{className:"ticket-pass-id-label",children:"TICKET ID"}),e.jsx("strong",{className:"ticket-pass-id-value",children:l})]}),e.jsxs("div",{className:"ticket-pass-qr-box",ref:s,children:[c?e.jsx(Qs,{ticket:t,size:118,showCaption:!1}):e.jsxs("div",{className:"ticket-pass-qr-pending",children:[e.jsx("span",{children:"QR Pending"}),e.jsx("small",{children:"Approval Required"})]}),e.jsx("span",{className:"ticket-pass-scan-hint",children:"SCAN AT ENTRANCE"})]})]})]}),e.jsxs("div",{className:"ticket-pass-actions-bar",children:[e.jsxs("div",{className:"ticket-pass-status-pill",children:[e.jsx("span",{className:`status-dot ${o.className}`}),e.jsxs("span",{children:["Status: ",e.jsx("strong",{children:o.label})]})]}),e.jsxs("div",{className:"ticket-pass-button-group",children:[c?e.jsxs("button",{type:"button",className:"btn-pass-download",onClick:S,children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Pass"]}):e.jsx("button",{type:"button",className:"btn-pass-download disabled",disabled:!0,title:"Available after verification",children:"Download Pass (Pending)"}),e.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:w,children:"Print"}),e.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:p,children:"Share"}),a&&e.jsx(Z,{to:a,className:"btn-pass-link",children:r})]})]}),e.jsx("style",{children:`
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
      `})]})}const ai=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],ri=["🔒 256-Bit SSL Secured","🎟️ Verified QR Pass","⭐ Official Festival Entry","⚡ Instant Scan Ready"],si=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"];function ma(){const t=new Date("2026-11-01T18:00:00+05:00").getTime(),a=Math.max(0,t-Date.now());return{days:Math.floor(a/(1e3*60*60*24)),hours:Math.floor(a/(1e3*60*60)%24),minutes:Math.floor(a/(1e3*60)%60)}}function ii(){const{tickets:t,loading:a,fetchMyTickets:r}=$t(),{user:s}=Qe(),[i,l]=m.useState(ma);m.useEffect(()=>{r()},[r]),m.useEffect(()=>{const c=window.setInterval(()=>l(ma()),6e4);return()=>window.clearInterval(c)},[]);const n=`${s?.firstName||""} ${s?.lastName||""}`.trim()||s?.name||s?.email||"Festival Member",o=m.useMemo(()=>{const c=t.filter(u=>u.status==="approved").length,g=t.filter(u=>u.status!=="approved").length;return[[t.length,"Total Tickets"],[c,"QR Ready"],[g,"In Review"],[c*250+t.length*100,"Reward Points"],[c>1?"VIP":c===1?"Gold":"Member","Festival Level"]]},[t]);return e.jsxs("main",{className:"my-tickets-premium",children:[e.jsxs("section",{className:"my-tickets-hero",children:[e.jsx(Bt,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.55}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),e.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),e.jsxs("div",{className:"my-tickets-hero-content",children:[e.jsx("p",{className:"my-tickets-eyebrow",children:"DIGITAL FESTIVAL WALLET"}),e.jsx("h1",{className:"my-tickets-title",children:"Your Festival Passes"}),e.jsx("span",{className:"my-tickets-subtitle",children:"Access your verified QR tickets, download pass images, and track your VIP festival benefits for OZILLA FEST 2026."})]})]}),e.jsxs("section",{className:"my-tickets-shell",children:[e.jsxs("div",{className:"ticket-wallet-dashboard",children:[e.jsxs("article",{className:"ticket-wallet-profile",children:[e.jsx("div",{className:"ticket-wallet-avatar",children:String(n).slice(0,1).toUpperCase()}),e.jsxs("div",{children:[e.jsx("p",{children:"Welcome Back,"}),e.jsx("h2",{children:n}),e.jsxs("div",{className:"ticket-wallet-tags",children:[e.jsx("span",{children:"Verified Holder"}),e.jsx("span",{children:"Official Pass Holder"}),e.jsx("span",{children:t.length>2?"VIP Loyalty":t.length>0?"Gold Member":"Festival Member"})]})]})]}),e.jsxs("article",{className:"ticket-wallet-countdown",children:[e.jsx("p",{children:"Festival Starts In"}),e.jsxs("div",{className:"wallet-countdown-row",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.days}),e.jsx("span",{children:"Days"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:i.hours}),e.jsx("span",{children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:i.minutes}),e.jsx("span",{children:"Minutes"})]})]})]})]}),e.jsx("div",{className:"ticket-wallet-stats",children:o.map(([c,g])=>e.jsxs("article",{children:[e.jsx("strong",{children:c}),e.jsx("span",{children:g})]},g))}),a?e.jsxs("div",{className:"ticket-wallet-loading",children:[e.jsx("div",{className:"ticket-wallet-spinner"}),e.jsx("h2",{children:"Loading Your Passes..."}),e.jsx("p",{children:"Fetching your verified QR tickets from the blockchain vault."})]}):t.length===0?e.jsxs("div",{className:"ticket-wallet-empty",children:[e.jsx("div",{className:"ticket-empty-mark",children:"🎟️"}),e.jsx("h2",{children:"No Tickets Booked Yet"}),e.jsx("p",{children:"Reserve your OZILLA FEST pass and unlock your personal digital ticket wallet with dynamic QR entry."}),e.jsx(Z,{to:"/tickets",className:"ticket-empty-btn",children:"Purchase Ticket →"})]}):e.jsxs("div",{className:"ticket-wallet-passes-section",children:[e.jsxs("div",{className:"ticket-wallet-section-heading",children:[e.jsx("p",{children:"OFFICIAL DIGITAL PASSES"}),e.jsx("h2",{children:"Active Festival Tickets"})]}),e.jsx("div",{className:"ticket-wallet-grid",children:t.map(c=>e.jsx(Fa,{ticket:c,actionLabel:"Open Details"},c.id))})]}),e.jsxs("div",{className:"ticket-wallet-extras",children:[e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Pass Privileges"}),e.jsx("div",{className:"ticket-wallet-benefits",children:ai.map(c=>e.jsx("span",{children:c},c))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Verification Journey"}),e.jsx("div",{className:"ticket-wallet-timeline",children:si.map((c,g)=>e.jsx("span",{className:g<4?"is-active":"",children:c},c))})]}),e.jsxs("article",{className:"ticket-wallet-card",children:[e.jsx("p",{children:"Trust & Security"}),e.jsx("div",{className:"ticket-wallet-trust",children:ri.map(c=>e.jsx("span",{children:c},c))})]})]})]}),e.jsx("style",{children:`
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
      `})]})}function ni(){const{ticketId:t}=ja(),{getTicketById:a}=$t(),[r,s]=m.useState(null),[i,l]=m.useState(!0),[n,o]=m.useState(!1),[c,g]=m.useState(null),u=r?.status==="approved",b=["pending","payment_submitted"].includes(r?.status);if(m.useEffect(()=>{(async()=>{try{const w=await a(t);s(w)}catch{s(null)}finally{l(!1)}})()},[t,a]),i)return e.jsx(Ca,{});if(!r)return e.jsx("div",{className:"bg-[#1b110b]/80 border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto my-12 backdrop-blur-xl",children:e.jsx("p",{className:"text-white/80 font-bold text-lg",children:"Ticket not found."})});const k=async()=>{o(!0),g(null);try{const S=await Te.cancelTicket(r.id);s(S.ticket),g({type:"success",message:S.message||"Ticket cancelled successfully."})}catch(S){g({type:"error",message:S.response?.data?.message||"Failed to cancel ticket."})}finally{o(!1)}};return e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[e.jsx("div",{className:"flex items-center justify-between gap-3 mb-6",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-[#ffbd59] text-xs font-black uppercase tracking-widest block mb-1",children:"OFFICIAL DIGITAL PASS"}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]",children:"Your Festival Pass"}),e.jsx("p",{className:"text-sm text-white/70 mt-1",children:"Official digital entry pass with scannable QR badge"})]})}),c&&e.jsx(Ht,{type:c.type,message:c.message,onClose:()=>g(null)}),e.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[e.jsx(Fa,{ticket:r,actionTo:"/tickets/my-tickets",actionLabel:"My Tickets Wallet"}),e.jsxs("div",{className:"bg-[#1b110b]/75 rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl",children:[b&&e.jsx("button",{type:"button",className:"mb-4 bg-rose-600/20 border border-rose-500/40 text-rose-300 px-5 py-2.5 rounded-xl font-bold hover:bg-rose-600/30 transition-colors",onClick:k,disabled:n,children:n?"Cancelling...":"Cancel Ticket Request"}),u?e.jsxs("div",{className:"p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl",children:[e.jsx("h2",{className:"text-lg font-bold text-emerald-300 mb-1",children:"Official Pass Ready"}),e.jsxs("p",{className:"text-emerald-200/80 text-sm",children:["Your ticket pass has been verified and the scannable QR badge is active. Click ",e.jsx("strong",{children:"Download Pass"})," above to save the pass image to your device."]})]}):e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2 font-['Outfit',sans-serif]",children:"Verification In Progress"}),e.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 rounded-xl p-5",children:[e.jsx("p",{className:"text-amber-300 font-semibold mb-1",children:"Pass verification pending admin approval."}),e.jsx("p",{className:"text-amber-200/80 text-sm",children:"Your scannable QR code and downloadable pass image will be unlocked once payment proof is verified by the admin team."})]})]})]})]})]})}function oi(){const{ticketId:t}=ja(),[a,r]=m.useState(null),[s,i]=m.useState(""),[l,n]=m.useState(!0),[o,c]=m.useState(!1),[g,u]=m.useState(null),[b,k]=m.useState(""),S=y=>y==="approved"?"bg-green-100 text-green-800":y==="payment_submitted"?"bg-blue-100 text-blue-700":y==="rejected"||y==="cancelled"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-800",w=y=>{try{const x=JSON.parse(y),N=["ticketId","fullName","email","phone","eventName","eventDate","eventTime"].filter(f=>!x[f]);return N.length>0?{ok:!1,message:`Missing fields: ${N.join(", ")}`}:{ok:!0,parsed:x}}catch{return{ok:!1,message:"QR payload is not valid JSON."}}};m.useEffect(()=>{(async()=>{try{const x=await Te.getTicketById(t);r(x),i(JSON.stringify({ticketId:x.uniqueTicketId||x.ticketId||x.id,fullName:x.fullName||x.name,email:x.email,phone:x.phone,eventName:x.eventName,eventDate:x.eventDate,eventTime:x.eventTime},null,2))}catch{u({type:"error",message:"Ticket not found"})}finally{n(!1)}})()},[t]);const p=async()=>{u(null),k("");const y=w(s);if(!y.ok){k(y.message);return}c(!0);try{const x=await Te.verifyTicketByQr(s);r(x.ticket||a),u({type:"success",message:x.message||`Ticket verified: ${x.status}`})}catch(x){const M=x.response?.data?.message||"Verification failed",N=x.response?.data?.mismatchedFields?.length?` Mismatched fields: ${x.response.data.mismatchedFields.join(", ")}.`:"";u({type:"error",message:`${M}${N}`})}finally{c(!1)}};return l?e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"Ticket Verification"}),g&&e.jsx(Ht,{type:g.type,message:g.message,onClose:()=>u(null)}),a?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:a.eventName}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Date:"})," ",a.eventDate]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Location:"})," ",a.location]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Ticket Type:"})," ",a.ticketType]}),e.jsxs("p",{className:"text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:"Status:"}),e.jsx("span",{className:`ml-2 px-3 py-1 rounded-full text-sm ${S(a.status)}`,children:a.status})]})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block",children:e.jsx("div",{className:"w-48 h-48 bg-gray-100 flex items-center justify-center",children:e.jsx("span",{className:"text-gray-400",children:"Scan / Paste QR Data"})})})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 mb-2 font-semibold",children:"QR Payload"}),e.jsx("textarea",{className:"w-full px-4 py-2 border rounded-lg",rows:6,value:s,onChange:y=>i(y.target.value)}),b&&e.jsx("p",{className:"text-sm text-red-600 mt-2",children:b})]}),e.jsx("button",{onClick:p,disabled:o,className:"w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold",children:o?"Verifying...":"Verify Ticket"})]}):e.jsx("div",{className:"text-center text-gray-600",children:e.jsx("p",{children:"Ticket not found or invalid."})})]})})}const fa={"Pearl Continental Hotel (PC)":V("/assets/hotels/Pearl-Continental-Lahore.jpg"),"Ramada by Wyndham Lahore":V("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),"Hotel Indigo Lahore":V("/assets/hotels/Hotel-Indigo.jpg"),"Hotel One Gulberg Lahore":V("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),"Luxus Grand Hotel (LC)":V("/assets/hotels/Luxus-Grand-Hotel.jpg"),"Nishat Hotel Lahore":V("/assets/hotels/Nishat.jpg")},ga=V("/assets/hotels/Nishat.jpg"),li={"Pearl Continental Hotel (PC)":"Iconic five-star city hospitality","Ramada by Wyndham Lahore":"International comfort in Gulberg","Hotel Indigo Lahore":"Boutique lifestyle stay experience","Hotel One Gulberg Lahore":"Smart central festival access","Luxus Grand Hotel (LC)":"Executive luxury with city energy","Nishat Hotel Lahore":"Refined premium Lahore living"},ua=["Pool","Dining","Gym","WiFi","Parking","Service"],ci=[["Festival Partner Hotels","Curated stays selected for Ozilla guests, brand partners, and VIP visitors."],["Premium Hospitality","Polished service, comfortable rooms, and refined Lahore hospitality."],["Exclusive Discounts","Partner booking options connected to the festival experience."],["Best Location","Convenient Lahore access for concerts, food experiences, and festival moments."]];function di(t){return ua[t%ua.length]}function pi(){const t=Rr.hotels.map((a,r)=>({...a,description:a.description||"Hotel partners showcase rooms, location, facilities and Ozilla special rates.",contact:a.contact||"Contact via Ozilla partner desk",facilities:a.facilities||["Rooms and Suites","On-site Facilities","Event Access Support","Partner Booking Assistance"],booking:a.offer,image:V(a.image)||fa[a.name]||V("/assets/prism-auth-visual.jpg"),fallbackImage:fa[a.name]||V("/assets/prism-auth-visual.jpg"),tagline:li[a.name]||"Premium Ozilla partner hospitality",featured:r===0}));return m.useEffect(()=>{const a=document.querySelectorAll(".hotel-reveal"),r=new IntersectionObserver(s=>{s.forEach(i=>{i.target.classList.toggle("is-visible",i.isIntersecting)})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});return a.forEach(s=>r.observe(s)),()=>r.disconnect()},[]),e.jsxs("main",{className:"hotel-booking-page",style:{"--hotel-hero-image":`url("${ga}")`},children:[e.jsxs("section",{className:"hotel-booking-hero hotel-reveal",children:[e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-a"}),e.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-b"}),e.jsx("div",{className:"hotel-hero-sweep"}),e.jsxs("div",{className:"hotel-hero-content",children:[e.jsx("p",{className:"hotel-eyebrow",children:"OZILLA FEST 2026"}),e.jsx("h1",{children:"LUXURY HOTELS"}),e.jsx("p",{children:"Stay in the finest hotels and experience premium hospitality during OZILLA FEST 2026."}),e.jsxs("div",{className:"hotel-search-bar","aria-label":"Hotel page highlights",children:[e.jsx("span",{children:"Lahore, Pakistan"}),e.jsx("span",{children:"Festival Partner Hotels"}),e.jsx("span",{children:"Premium Stay Options"})]})]})]}),e.jsxs("section",{className:"hotel-booking-intro hotel-reveal",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Stay Collection"}),e.jsx("h2",{children:"Browse OZILLA FEST Partner Hotels"})]}),e.jsx("p",{children:"A curated hotel listing experience for guests who want comfort, convenient access, trusted booking links, and premium Lahore hospitality."})]}),e.jsx("section",{className:"hotel-benefit-strip hotel-reveal",children:ci.map(([a,r],s)=>e.jsxs("article",{className:"hotel-benefit-pill",children:[e.jsx("span",{children:String(s+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:a}),e.jsx("p",{children:r})]})]},a))}),e.jsx("section",{className:"hotel-listings","aria-label":"Luxury hotel listings",children:t.map((a,r)=>e.jsxs("article",{className:`hotel-listing-card hotel-reveal ${a.featured?"hotel-listing-featured":""}`,style:{transitionDelay:`${Math.min(r*70,280)}ms`},children:[a.featured?e.jsx("span",{className:"hotel-featured-ribbon",children:"Featured Partner Hotel"}):null,e.jsx("a",{href:a.website||"#",target:a.website?"_blank":void 0,rel:a.website?"noreferrer":void 0,className:"hotel-listing-image-link","aria-label":`Open ${a.name} details`,children:e.jsxs("div",{className:"hotel-listing-image-wrap",children:[a.showImage?e.jsx("img",{src:a.image,alt:a.name,className:"hotel-listing-image",loading:"lazy",referrerPolicy:"no-referrer",onError:s=>{s.currentTarget.onerror=null,s.currentTarget.src=a.fallbackImage}}):e.jsx("div",{className:"hotel-image-placeholder",children:"Premium Hotel Preview"}),e.jsxs("div",{className:"hotel-image-overlay",children:[e.jsx("span",{children:"*****"}),e.jsx("b",{children:"Luxury Stay"}),e.jsx("em",{children:"Premium Partner"})]})]})}),e.jsxs("div",{className:"hotel-listing-info",children:[e.jsxs("div",{className:"hotel-listing-top",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"hotel-rating-line",children:["***** ",e.jsxs("span",{children:[a.rating||"4.8/5"," Exceptional"]})]}),a.website?e.jsx("a",{href:a.website,target:"_blank",rel:"noreferrer",className:"hotel-listing-title",children:a.name}):e.jsx("h2",{className:"hotel-listing-title",children:a.name}),e.jsx("p",{className:"hotel-tagline",children:a.tagline})]}),e.jsxs("div",{className:"hotel-score-box","aria-label":`${a.name} rating`,children:[e.jsx("strong",{children:a.rating?a.rating.replace("/5",""):"4.8"}),e.jsx("span",{children:"Exceptional"})]})]}),e.jsx("p",{className:"hotel-location",children:"Lahore, Pakistan"}),e.jsx("p",{className:"hotel-description",children:a.description}),e.jsx("div",{className:"hotel-amenity-row","aria-label":`${a.name} amenities`,children:a.facilities.slice(0,6).map((s,i)=>e.jsxs("span",{className:"hotel-amenity-chip",children:[e.jsx("b",{children:di(i)}),s]},s))}),e.jsxs("div",{className:"hotel-listing-footer",children:[e.jsxs("div",{className:"hotel-detail-stack",children:[e.jsx("span",{children:"Festival Partner Badge"}),e.jsx("strong",{children:a.booking}),e.jsx("small",{children:a.contact})]}),a.website?e.jsx("a",{href:a.website,target:"_blank",rel:"noreferrer",className:"hotel-action-button",children:"View Details"}):null]})]})]},a.name))}),e.jsxs("section",{className:"hotel-booking-cta hotel-reveal",children:[e.jsx("p",{className:"hotel-eyebrow",children:"Premium Hospitality"}),e.jsx("h2",{children:"Your Perfect Stay Awaits"}),e.jsx("p",{children:"Stay in the finest hotels during OZILLA FEST 2026."}),e.jsx("a",{href:"#top",onClick:a=>{a.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Explore Partner Hotels"})]}),e.jsx("style",{children:`
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
      `})]})}const mi={day1:{date:"Saturday, November 01, 2026",title:"Day 1: The Grand Opening & Cultural Genesis",theme:"Fusion, Indie Rhythms & Opening Ceremony",gatesOpen:"03:00 PM",curfew:"12:30 AM",timeline:[{time:"03:00 PM - 04:00 PM",stage:"Main Entrance & Ingress",title:"Gate Opening & Red Carpet Welcoming",desc:"Fast-track QR scanning at gates, welcome drinks, media wall red carpet arrivals, and official festival merchandise store opening.",category:"Entry",highlight:!1},{time:"04:00 PM - 05:30 PM",stage:"Central Promenade & Food Court",title:"Sponsor Activation & Food Carnival Launch",desc:"Over 40+ partner culinary stalls, brand experience booths, interactive gaming lounges, and acoustic busker performances.",category:"Experience",highlight:!1},{time:"05:30 PM - 07:00 PM",stage:"Indie & Discovery Stage",title:"Emerging Indie & Sufi-Rock Showcase",desc:"Live performances by leading underground indie bands, modern Sufi fusion ensembles, and youth creator collaborations.",category:"Live Music",highlight:!1},{time:"07:15 PM - 08:15 PM",stage:"Main Arena",title:"Grand Festival Opening Ceremony & Light Show",desc:"Official keynote by festival founders, sponsor recognition tributes, high-powered multi-beam laser inauguration, and 3D hologram showcase.",category:"Ceremony",highlight:!0},{time:"08:30 PM - 10:45 PM",stage:"Main Arena Stage",title:"Prime Time Pop & Rock Headliners",desc:"Blockbuster performances by Pakistan’s top-charting pop icons, live orchestral backing, and crowd-favorite anthem singalongs.",category:"Headliner",highlight:!0},{time:"11:00 PM - 12:30 AM",stage:"Electronic Beats Arena",title:"Midnight DJ & Laser EDM Extravaganza",desc:"High-energy electronic dance music, confetti cannons, smoke blasters, and immersive LED visuals closing Day 1.",category:"EDM / DJ",highlight:!0}]},day2:{date:"Sunday, November 02, 2026",title:"Day 2: The Grand Finale & Star Power Spectacular",theme:"Celebrity Headliners, Mega Concert & Pyro Finale",gatesOpen:"02:30 PM",curfew:"12:30 AM",timeline:[{time:"02:30 PM - 04:00 PM",stage:"Main Gates & VIP Deck",title:"VIP Lounge Ingress & Networking Reception",desc:"Early access for VIP pass holders, executive lounge high tea, artist meet & greets, and celebrity media lounge interviews.",category:"VIP Access",highlight:!1},{time:"04:00 PM - 05:30 PM",stage:"Youth Arena & Gaming Zone",title:"Esports Championship & Creator Challenges",desc:"Live gaming tournament finals on massive SMD displays, celebrity creator showmatches, and youth dance crew battles.",category:"Youth & Gaming",highlight:!1},{time:"05:30 PM - 07:15 PM",stage:"Sunset Stage",title:"Folk, Qawwali & Fusion Heritage Sets",desc:"Soulful sunset Qawwali and regional fusion performances featuring traditional instruments mixed with modern ambient synthesizers.",category:"Cultural Music",highlight:!1},{time:"07:30 PM - 08:30 PM",stage:"Main Arena",title:"Sponsorship Awards & Creator Honors",desc:"Official partner appreciation ceremonies, brand campaign awards, and youth creator milestone presentations.",category:"Awards",highlight:!1},{time:"08:30 PM - 11:30 PM",stage:"Main Mega Stage",title:"The Mega Celebrity Grand Finale Concert",desc:"The biggest headline concert of the year featuring 4 superstar artists performing back-to-back non-stop blockbuster sets.",category:"Mega Headliner",highlight:!0},{time:"11:45 PM - 12:30 AM",stage:"Main Arena Sky",title:"Grand Pyro Fireworks & 500-Drone Sky Ballet",desc:"A world-class synchronized fireworks display and 500 LED illuminated drones crafting the Ozilla emblem and Pakistan map in the night sky.",category:"Grand Finale",highlight:!0}]}};function ha(){const[t,a]=m.useState("day1"),[r,s]=m.useState("all"),i=mi[t],l=i.timeline.filter(n=>r==="all"?!0:n.category.toLowerCase().includes(r.toLowerCase()));return e.jsxs("main",{className:"schedule-page-wrap",style:{minHeight:"100vh",background:"#0b0c10",color:"#e5e7eb",paddingBottom:"80px"},children:[e.jsxs("section",{style:{background:"linear-gradient(180deg, #3d0c1e 0%, #0b0c10 100%)",padding:"100px 20px 40px",textAlign:"center",borderBottom:"1px solid rgba(212, 175, 55, 0.2)"},children:[e.jsx("span",{style:{background:"rgba(212, 175, 55, 0.15)",color:"#ffd700",border:"1px solid #d4af37",padding:"6px 18px",borderRadius:"9999px",fontSize:"13px",fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase"},children:"OFFICIAL FESTIVAL PROGRAM"}),e.jsx("h1",{style:{fontSize:"clamp(28px, 5vw, 48px)",fontWeight:"900",color:"#ffffff",margin:"16px 0 12px",letterSpacing:"1px"},children:"Day 1 & Day 2 Full Lineup Schedule"}),e.jsx("p",{style:{maxWidth:"680px",margin:"0 auto 24px",color:"#d1d5db",fontSize:"16px",lineHeight:"1.6"},children:"Discover the complete minute-by-minute itinerary, stage assignments, headliner performance slots, and grand finale fireworks for OZILLA FEST 2026."}),e.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.4)",padding:"6px",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",gap:"8px"},children:[e.jsx("button",{type:"button",onClick:()=>a("day1"),style:{padding:"12px 28px",borderRadius:"12px",fontSize:"15px",fontWeight:"700",border:"none",cursor:"pointer",transition:"all 0.2s ease",background:t==="day1"?"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)":"transparent",color:t==="day1"?"#111827":"#9ca3af",boxShadow:t==="day1"?"0 4px 15px rgba(212, 175, 55, 0.3)":"none"},children:"📅 DAY 1 (Nov 01)"}),e.jsx("button",{type:"button",onClick:()=>a("day2"),style:{padding:"12px 28px",borderRadius:"12px",fontSize:"15px",fontWeight:"700",border:"none",cursor:"pointer",transition:"all 0.2s ease",background:t==="day2"?"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)":"transparent",color:t==="day2"?"#111827":"#9ca3af",boxShadow:t==="day2"?"0 4px 15px rgba(212, 175, 55, 0.3)":"none"},children:"🎉 DAY 2 (Nov 02)"})]})]}),e.jsxs("div",{style:{maxWidth:"1000px",margin:"40px auto 0",padding:"0 20px"},children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(61, 12, 30, 0.4) 0%, rgba(22, 24, 34, 0.8) 100%)",border:"1px solid rgba(212, 175, 55, 0.3)",borderRadius:"20px",padding:"28px",marginBottom:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#ffd700",fontWeight:"700",fontSize:"13px",textTransform:"uppercase",letterSpacing:"1px"},children:i.date}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:"800",color:"#ffffff",margin:"6px 0 4px"},children:i.title}),e.jsxs("p",{style:{color:"#9ca3af",margin:0,fontSize:"14px"},children:["Theme: ",e.jsx("span",{style:{color:"#e5e7eb",fontWeight:"600"},children:i.theme})]})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center",background:"rgba(0,0,0,0.3)",padding:"10px 18px",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.08)"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#9ca3af",textTransform:"uppercase"},children:"Gates Open"}),e.jsx("strong",{style:{display:"block",fontSize:"16px",color:"#34d399"},children:i.gatesOpen})]}),e.jsxs(Z,{to:`/tickets?day=${t}`,style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"12px 24px",borderRadius:"12px",fontWeight:"700",fontSize:"14px",textDecoration:"none",boxShadow:"0 4px 15px rgba(212, 175, 55, 0.3)",display:"inline-block"},children:["Book ",t==="day1"?"Day 1":"Day 2"," Pass →"]})]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:l.map((n,o)=>e.jsxs(oe.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:o*.05},style:{background:n.highlight?"linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26, 28, 40, 0.95) 100%)":"rgba(255, 255, 255, 0.03)",border:n.highlight?"1px solid #d4af37":"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"16px",padding:"24px",display:"grid",gridTemplateColumns:"minmax(180px, 220px) 1fr",gap:"20px",position:"relative",overflow:"hidden"},children:[n.highlight&&e.jsx("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsx("span",{style:{background:"#d4af37",color:"#111",fontSize:"10px",fontWeight:"800",textTransform:"uppercase",padding:"3px 8px",borderRadius:"4px",letterSpacing:"1px"},children:"★ MUST-SEE"})}),e.jsxs("div",{children:[e.jsxs("span",{style:{fontSize:"15px",fontWeight:"800",color:"#ffd700",display:"block",marginBottom:"6px"},children:["🕒 ",n.time]}),e.jsxs("span",{style:{fontSize:"12px",color:"#9ca3af",display:"block",marginBottom:"10px"},children:["📍 ",n.stage]}),e.jsx("span",{style:{fontSize:"11px",fontWeight:"700",textTransform:"uppercase",background:"rgba(255,255,255,0.06)",color:"#d1d5db",padding:"4px 10px",borderRadius:"6px",display:"inline-block"},children:n.category})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#ffffff",margin:"0 0 8px"},children:n.title}),e.jsx("p",{style:{fontSize:"14px",color:"#9ca3af",lineHeight:"1.6",margin:0},children:n.desc})]})]},n.title))}),e.jsxs("div",{style:{marginTop:"48px",textAlign:"center",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(212, 175, 55, 0.2)",borderRadius:"20px",padding:"36px 20px"},children:[e.jsx("h3",{style:{fontSize:"22px",fontWeight:"800",color:"#ffffff",margin:"0 0 10px"},children:"Ready to Experience the Magic Live?"}),e.jsx("p",{style:{color:"#9ca3af",maxWidth:"520px",margin:"0 auto 20px",fontSize:"14px"},children:"Choose between Single Day Passes or the Full Weekend Access Pass with exclusive VIP Lounge & fast-track stage access."}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"14px",flexWrap:"wrap"},children:[e.jsx(Z,{to:"/tickets",style:{background:"linear-gradient(135deg, #d4af37 0%, #aa8420 100%)",color:"#111827",padding:"14px 32px",borderRadius:"12px",fontWeight:"800",fontSize:"15px",textDecoration:"none",boxShadow:"0 4px 20px rgba(212, 175, 55, 0.35)"},children:"Get Festival Passes Now →"}),e.jsx(Z,{to:"/hotels",style:{background:"rgba(255,255,255,0.06)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.15)",padding:"14px 28px",borderRadius:"12px",fontWeight:"600",fontSize:"15px",textDecoration:"none"},children:"Explore Partner Hotels"})]})]})]})]})}const fi=[{id:"privacy-introduction",number:"01",icon:"PV",title:"Introduction",text:"This Privacy Policy explains how OZILLA FEST handles visitor, account, ticket, and support information with transparency and care."},{id:"information-collection",number:"02",icon:"ID",title:"Information We Collect",text:"We may collect details such as name, email address, phone number, account information, ticket requests, and support messages."},{id:"data-use",number:"03",icon:"DU",title:"How We Use Data",text:"Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations."},{id:"cookies",number:"04",icon:"CK",title:"Cookies",text:"Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience."},{id:"third-party-services",number:"05",icon:"TP",title:"Third-Party Services",text:"Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required."},{id:"data-security",number:"06",icon:"SC",title:"Data Security",text:"We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe."},{id:"user-rights",number:"07",icon:"RT",title:"User Rights",text:"Visitors can contact OZILLA FEST to request support, corrections, clarification, or help with account and privacy-related questions."},{id:"children-privacy",number:"08",icon:"FM",title:"Children's Privacy",text:"Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules."},{id:"policy-updates",number:"09",icon:"UP",title:"Policy Updates",text:"This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services."},{id:"privacy-contact",number:"10",icon:"CT",title:"Contact Information",text:"For privacy questions, account support, or clarification, visitors can contact the OZILLA FEST support team through the Contact page."}],gi=[{id:"introduction",number:"01",icon:"TR",title:"Introduction",text:"These Terms & Conditions explain the policies that help OZILLA FEST maintain a safe, organized, and enjoyable festival experience for every visitor."},{id:"ticket-policy",number:"02",icon:"TK",title:"Ticket Policy",text:"Tickets are issued for the selected OZILLA FEST access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure."},{id:"payments",number:"03",icon:"PM",title:"Payments",text:"Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval."},{id:"refund-policy",number:"04",icon:"RF",title:"Refund Policy",text:"Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow."},{id:"festival-rules",number:"05",icon:"RL",title:"Festival Rules",text:"Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry."},{id:"privacy",number:"06",icon:"PR",title:"Privacy",text:"Personal information is used for event operations, communication, ticketing, and support. OZILLA FEST does not sell visitor information."},{id:"liability",number:"07",icon:"LB",title:"Liability",text:"OZILLA FEST may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance."},{id:"user-responsibilities",number:"08",icon:"UR",title:"User Responsibilities",text:"Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams."},{id:"contact-information",number:"09",icon:"CT",title:"Contact Information",text:"For clarification about these Terms & Conditions, contact the OZILLA FEST support team through the official contact page."}],ui=[["Important Policy Update","Official event instructions, entry rules, and safety notices may be updated before the festival."],["Key Information","Keep your ticket details secure and contact support if anything needs clarification."]],hi=[["Privacy First","Your account, ticket, and support information is handled with transparency and careful access control."],["Security Guaranteed","OZILLA FEST uses secure workflows to protect authentication, ticket requests, and payment-related support."]],xi=[["Notice","Important Notice","Under 16 attendees are allowed with their family according to the current event notice."],["Entry","Restricted Items","Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points."],["Update","Policy Updates","Operational updates may be shared before or during the festival through official OZILLA FEST channels."]],bi=[["Promise","Privacy Promise","We never misuse your information and keep data usage limited to festival, account, ticket, and support needs."],["Rights","Your Rights","Visitors can contact the team for privacy questions, account support, corrections, or clarification."],["Cookies","Cookie Usage","Cookies are used only to support functionality, sessions, performance, and a smoother website experience."]],yi=[["Secure Ticket Purchase","Ticket and booking policies are structured to keep visitor access clear and verifiable."],["Refund Protection","Refund requests follow the official support process so every case is reviewed consistently."],["Privacy Commitment","Visitor information is used only for festival operations, ticketing, communication, and support."],["Safe Payments","Payment details are reviewed through trusted workflows for booking confirmation and assistance."],["Festival Rules","Clear rules help protect guests, families, artists, partners, and the event experience."],["Professional Support","The OZILLA FEST team is available for policy questions and event guidance."]],wi=[["Secure Authentication","Protected account access for ticket and user workflows."],["Encrypted Data","Sensitive flows are handled through secured application processes."],["Protected Payments","Payment-related support is managed through trusted verification steps."],["Secure Database","Visitor data is handled with careful operational access controls."],["Privacy First","Information is used for clear festival purposes only."],["Safe Browsing","The website experience is designed around trust, clarity, and secure usage."]],vi=[{target:100,suffix:"%",label:"Secure Authentication"},{target:256,suffix:"-bit",label:"Data Encryption"},{value:"Protected",label:"User Accounts"},{value:"Secure",label:"Payment Processing"}],ki=["We never misuse your information.","Your data remains protected.","Secure ticket purchases.","Safe payment processing.","Transparent privacy practices."],ji=[["Email","ozillafestival@gmail.com"],["Phone","+92 322 6622221"],["Support Hours","Monday to Saturday, 10:00 AM - 7:00 PM"]];function xa({type:t}){const a=t==="terms",[r,s]=m.useState(0),[i,l]=m.useState(""),[n,o]=m.useState(0),c=m.useMemo(()=>a?gi:fi,[a]),g=a?ui:hi,u=a?xi:bi,b=a?yi:wi;m.useEffect(()=>{const w=()=>{const p=window.scrollY||document.documentElement.scrollTop,y=document.documentElement.scrollHeight-window.innerHeight;s(y>0?Math.min(100,Math.max(0,p/y*100)):0)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>window.removeEventListener("scroll",w)},[]),m.useEffect(()=>{const w=new IntersectionObserver(p=>{const y=p.filter(x=>x.isIntersecting).sort((x,M)=>M.intersectionRatio-x.intersectionRatio)[0];y?.target?.id&&l(y.target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[.15,.35,.55]});return c.forEach(p=>{const y=document.getElementById(p.id);y&&w.observe(y)}),()=>w.disconnect()},[c]),m.useEffect(()=>{const w=Array.from(document.querySelectorAll(".legal-reveal"));if(!w.length)return;const p=new IntersectionObserver(y=>{y.forEach(x=>{x.target.classList.toggle("is-visible",x.isIntersecting)})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return w.forEach(y=>p.observe(y)),()=>p.disconnect()},[a]),m.useEffect(()=>{if(a)return;const w=document.querySelector(".legal-stat-grid");if(!w)return;let p;const y=()=>{const M=performance.now(),N=900,f=d=>{const _=Math.min(1,(d-M)/N);o(_),_<1&&(p=requestAnimationFrame(f))};cancelAnimationFrame(p),o(0),p=requestAnimationFrame(f)},x=new IntersectionObserver(M=>{M.forEach(N=>{N.isIntersecting&&y()})},{threshold:.28});return x.observe(w),()=>{cancelAnimationFrame(p),x.disconnect()}},[a]);const k=a?"Terms & Conditions":"Privacy Policy",S=a?"Please review our policies carefully to ensure a safe and enjoyable OZILLA FEST experience.":"Your privacy matters. We are committed to protecting your personal information and providing complete transparency.";return e.jsxs("main",{className:`legal-premium-page ${a?"legal-terms-page":"legal-privacy-page"}`,children:[e.jsx("div",{className:"legal-scroll-progress","aria-hidden":"true",children:e.jsx("span",{style:{width:`${r}%`}})}),e.jsxs("section",{className:"legal-hero",children:[e.jsx("div",{className:"legal-hero-orb legal-hero-orb-one"}),e.jsx("div",{className:"legal-hero-orb legal-hero-orb-two"}),e.jsxs("div",{className:"legal-particles","aria-hidden":"true",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"legal-hero-content legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:"OZILLA FEST 2026"}),e.jsx("h1",{children:k}),e.jsx("p",{children:S}),!a&&e.jsxs("div",{className:"privacy-hero-trust","aria-label":"Privacy trust highlights",children:[e.jsx("span",{children:"Privacy First"}),e.jsx("span",{children:"Secure Ticketing"}),e.jsx("span",{children:"Transparent Data Use"})]})]})]}),e.jsxs("section",{className:"legal-shell",children:[e.jsxs("aside",{className:"legal-sidebar","aria-label":`${k} quick navigation`,children:[e.jsx("p",{children:a?"Quick Navigation":"Privacy Center"}),e.jsx("nav",{children:c.map(w=>e.jsxs("a",{href:`#${w.id}`,className:i===w.id?"is-active":"",children:[e.jsx("span",{children:w.number}),w.title]},w.id))})]}),e.jsxs("div",{className:"legal-document",children:[e.jsxs("div",{className:"legal-document-top legal-reveal",children:[e.jsxs("div",{children:[e.jsx("p",{className:"legal-kicker",children:a?"Premium Legal Portal":"Executive Privacy Center"}),e.jsx("h2",{children:a?"Clear Policies For A Better Festival":"Your Information, Handled With Care"})]}),e.jsx("span",{className:"legal-updated",children:"Updated for 2026"})]}),e.jsx("div",{className:"legal-policy-banners legal-reveal",children:g.map(([w,p])=>e.jsxs("article",{children:[e.jsx("strong",{children:w}),e.jsx("span",{children:p})]},w))}),!a&&e.jsx("div",{className:"legal-stat-grid legal-reveal",children:vi.map((w,p)=>e.jsxs("article",{style:{"--delay":`${p*70}ms`},children:[e.jsx("strong",{className:"legal-stat-value",children:w.value||`${Math.round(w.target*n)}${w.suffix}`}),e.jsx("span",{children:w.label})]},w.label))}),e.jsx("div",{className:"legal-highlight-grid",children:u.map(([w,p,y],x)=>e.jsxs("article",{className:"legal-highlight-card legal-reveal",style:{"--delay":`${x*80}ms`},children:[e.jsx("span",{children:w}),e.jsx("h3",{children:p}),e.jsx("p",{children:y})]},p))}),e.jsx("div",{className:"legal-benefit-grid",children:b.map(([w,p],y)=>e.jsxs("article",{className:"legal-benefit-card legal-reveal",style:{"--delay":`${y*55}ms`},children:[e.jsx("span",{children:String(y+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("h3",{children:w}),e.jsx("p",{children:p})]})]},w))}),e.jsx("div",{className:"legal-section-list",children:c.map((w,p)=>e.jsxs("article",{id:w.id,className:"legal-section-card legal-reveal",style:{"--delay":`${p*45}ms`},children:[e.jsx("div",{className:"legal-section-icon","aria-hidden":"true",children:w.icon}),e.jsxs("div",{children:[e.jsx("span",{className:"legal-section-number",children:w.number}),e.jsx("h3",{children:w.title}),e.jsx("p",{children:w.text})]})]},w.id))}),a?e.jsxs("article",{className:"legal-acceptance-card legal-reveal",children:[e.jsx("span",{"aria-hidden":"true",children:"OK"}),e.jsxs("div",{children:[e.jsx("h3",{children:"By continuing to use OZILLA FEST, you acknowledge and agree to these Terms & Conditions."}),e.jsx("p",{children:"Please read each section carefully before purchasing tickets, creating an account, or attending the event."})]})]}):e.jsxs("article",{className:"legal-promise-card legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:"Our Privacy Promise"}),e.jsx("h3",{children:"Transparent, secure, and respectful data practices."}),e.jsx("div",{children:ki.map(w=>e.jsx("span",{children:w},w))})]}),e.jsxs("section",{className:"legal-support-cta legal-reveal",children:[e.jsx("p",{className:"legal-kicker",children:a?"We Believe In Complete Transparency":"Questions About Your Privacy?"}),e.jsx("h2",{children:a?"Need help understanding our policies?":"Our team is always available to assist you."}),e.jsx("p",{className:"legal-support-copy",children:a?"Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.":"If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime."}),e.jsx("div",{className:"legal-support-grid",children:ji.map(([w,p])=>e.jsxs("article",{children:[e.jsx("span",{children:w}),e.jsx("strong",{children:p})]},w))}),e.jsx(Z,{to:"/contact",className:"legal-support-button",children:"Contact Support"})]})]})]})]})}function Ni(){return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50",children:[e.jsx("h1",{className:"text-9xl font-bold text-purple-600 mb-4",children:"404"}),e.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Page Not Found"}),e.jsx("p",{className:"text-gray-600 mb-8 text-center max-w-md",children:"The page you're looking for doesn't exist or has been moved."}),e.jsx(Z,{to:"/",className:"bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:"Go to Homepage"})]})}function Ut(t){return m.lazy(async()=>{try{return await t()}catch(a){const r=String(a?.message||"").toLowerCase();if(r.includes("importing a module script failed")||r.includes("failed to fetch dynamically imported module")||r.includes("loading chunk")||r.includes("failed to load module script")||r.includes("error loading dynamically imported module")){const i=Number(sessionStorage.getItem("chunk_reload_ts")||0);if(Date.now()-i>8e3)return sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload(),new Promise(()=>{})}throw a}})}const Si=Ut(()=>_t(()=>import("./UserDashboardPage-Ae3fm5e8.js"),__vite__mapDeps([0,1,2,3,4]))),Ai=Ut(()=>_t(()=>import("./AdminDashboardPage-WGlE5e-d.js"),__vite__mapDeps([5,1,2,3,4]))),Pi=Ut(()=>_t(()=>import("./AdminTicketReviewPage-B37gDgQS.js"),__vite__mapDeps([6,1,2,3,4])));function Ti(){return e.jsx(m.Suspense,{fallback:e.jsx(Ca,{}),children:e.jsxs(qa,{children:[e.jsxs(J,{element:e.jsx(ir,{}),children:[e.jsx(J,{path:"/login",element:e.jsx(Et,{children:e.jsx(Sr,{})})}),e.jsx(J,{path:"/register",element:e.jsx(Et,{children:e.jsx(Lr,{})})}),e.jsx(J,{path:"/auth/google/callback",element:e.jsx(Et,{children:e.jsx(Ir,{})})})]}),e.jsx(J,{path:"/",element:e.jsx(_e,{children:e.jsx(Ls,{})})}),e.jsx(J,{path:"/dashboard",element:e.jsx(we,{to:"/",replace:!0})}),e.jsx(J,{path:"/about",element:e.jsx(we,{to:"/#about",replace:!0})}),e.jsx(J,{path:"/collaboration",element:e.jsx(we,{to:"/#sponsorship",replace:!0})}),e.jsx(J,{path:"/prismfest",element:e.jsx(we,{to:"/#home",replace:!0})}),e.jsx(J,{path:"/prismfest/celebrities",element:e.jsx(we,{to:"/#celebrities",replace:!0})}),e.jsx(J,{path:"/prismfest/events",element:e.jsx(we,{to:"/#events",replace:!0})}),e.jsx(J,{path:"/prismfest/future",element:e.jsx(we,{to:"/#future-events",replace:!0})}),e.jsx(J,{path:"/history",element:e.jsx(we,{to:"/#history",replace:!0})}),e.jsx(J,{path:"/events",element:e.jsx(we,{to:"/#events",replace:!0})}),e.jsx(J,{path:"/sponsorship",element:e.jsx(we,{to:"/#sponsorship",replace:!0})}),e.jsx(J,{path:"/contact",element:e.jsx(we,{to:"/#contact",replace:!0})}),e.jsx(J,{path:"/facilities",element:e.jsx(we,{to:"/#facilities",replace:!0})}),e.jsx(J,{path:"/hotels",element:e.jsx(_e,{children:e.jsx(pi,{})})}),e.jsx(J,{path:"/schedule",element:e.jsx(_e,{children:e.jsx(ha,{})})}),e.jsx(J,{path:"/lineup",element:e.jsx(_e,{children:e.jsx(ha,{})})}),e.jsx(J,{path:"/restaurants",element:e.jsx(we,{to:"/#restaurants",replace:!0})}),e.jsx(J,{path:"/discounts",element:e.jsx(we,{to:"/#discounts",replace:!0})}),e.jsx(J,{path:"/partner",element:e.jsx(we,{to:"/#about",replace:!0})}),e.jsx(J,{path:"/privacy",element:e.jsx(_e,{children:e.jsx(xa,{type:"privacy"})})}),e.jsx(J,{path:"/terms",element:e.jsx(_e,{children:e.jsx(xa,{type:"terms"})})}),e.jsx(J,{path:"/verification/:ticketId",element:e.jsx(_e,{children:e.jsx(oi,{})})}),e.jsx(J,{path:"/tickets",element:e.jsx(Ct,{children:e.jsx(Ks,{})})}),e.jsxs(J,{element:e.jsx(sr,{}),children:[e.jsx(J,{path:"/account",element:e.jsx(_e,{children:e.jsx(Si,{})})}),e.jsx(J,{path:"/admin",element:e.jsx(we,{to:"/admin/dashboard",replace:!0})}),e.jsx(J,{path:"/admin/dashboard",element:e.jsx(_e,{children:e.jsx(Ai,{})})}),e.jsx(J,{path:"/tickets/my-tickets",element:e.jsx(Ct,{children:e.jsx(ii,{})})}),e.jsx(J,{path:"/tickets/view/:ticketId",element:e.jsx(Ct,{children:e.jsx(ni,{})})}),e.jsx(J,{path:"/admin/tickets",element:e.jsx(_e,{children:e.jsx(Pi,{})})})]}),e.jsx(J,{path:"*",element:e.jsx(Ni,{})})]})})}const Ei=typeof window<"u"&&window.innerWidth<768?.85:1.2,Xe=2500,Ze=20,Ci=`
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
`,Li=`
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
`,Ii=`
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
`,Ri=`
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
`;function ba(t,a,r){const s=t.createShader(a);return s?(t.shaderSource(s,r),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(console.error("ParticleDrift shader:",t.getShaderInfoLog(s)),t.deleteShader(s),null)):null}function ya(t,a,r){const s=ba(t,t.VERTEX_SHADER,a),i=ba(t,t.FRAGMENT_SHADER,r);if(!s||!i)return null;const l=t.createProgram();return l?(t.attachShader(l,s),t.attachShader(l,i),t.linkProgram(l),t.getProgramParameter(l,t.LINK_STATUS)?l:(console.error("ParticleDrift link:",t.getProgramInfoLog(l)),null)):null}function wa(t,a){if(!t)return a;const r=String(t).trim();if(r.charAt(0)==="#"){let i=r.slice(1);if((i.length===3||i.length===4)&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),i.length>=6){const l=parseInt(i.slice(0,2),16),n=parseInt(i.slice(2,4),16),o=parseInt(i.slice(4,6),16);if(!isNaN(l)&&!isNaN(n)&&!isNaN(o))return[l/255,n/255,o/255]}return a}const s=r.match(/[\d.]+/g);return s&&s.length>=3?[Math.min(255,parseFloat(s[0]))/255,Math.min(255,parseFloat(s[1]))/255,Math.min(255,parseFloat(s[2]))/255]:a}function He(t,a){return typeof t=="number"&&isFinite(t)?t:a}function rt(t,a,r){return t<a?a:t>r?r:t}function zi(t){let a=t>>>0;return function(){a+=1831565813;let r=a;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}const Mt=[[0,-1],[1,-1],[1,1],[0,-1],[1,1],[0,1]];function Mi({style:t,background:a="transparent",baseColor:r="#F84400",accentColor:s="#ECECEC",density:i=235,dotSize:l=14,speed:n=100,direction:o=0,hover:c=200,linkDistance:g=202,linkThickness:u=2.5,width:b,height:k,isFixed:S=!0}){const w=m.useRef(null),p=m.useRef(null),y=m.useRef({w:0,h:0});y.current={w:He(b,0),h:He(k,0)};const x=m.useRef({x:-1e4,y:-1e4}),M=m.useRef({});M.current={base:r,accent:s,density:Math.round(rt(He(i,90),10,400)),dotSize:rt(He(l,5),1,24),speed:rt(He(n,50),0,100)/50,direction:rt(He(o,0),0,360),hover:rt(He(c,100),0,200)/100,linkDistance:rt(He(g,120),0,400),linkThickness:rt(He(u,1),.5,8)},m.useEffect(()=>{const f=p.current;if(!f)return;const d=f.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,premultipliedAlpha:!0});if(!d){console.error("ParticleDrift: WebGL unavailable");return}const _=ya(d,Ci,Li),L=ya(d,Ii,Ri);if(!_||!L)return;const A=new Map,h=(se,ae)=>{const T=(se===_?"L:":"D:")+ae;return A.has(T)||A.set(T,d.getUniformLocation(se,ae)),A.get(T)},v=new Float32Array(Xe*6*2),C=new Float32Array(Xe*6*2),R=new Float32Array(Xe*6*2),q=new Float32Array(Xe*6*3);for(let se=0;se<Xe;se++)for(let ae=0;ae<6;ae++){const T=(se*6+ae)*2;R[T]=Mt[ae][0],R[T+1]=Mt[ae][1]}const B=d.createBuffer(),P=d.createBuffer(),$=d.createBuffer(),X=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,B),d.bufferData(d.ARRAY_BUFFER,v.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,P),d.bufferData(d.ARRAY_BUFFER,C.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,$),d.bufferData(d.ARRAY_BUFFER,R,d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,X),d.bufferData(d.ARRAY_BUFFER,q.byteLength,d.DYNAMIC_DRAW);const H=zi(20260824);let O=0,D=new Float32Array(0),Y=new Float32Array(0),ce=new Float32Array(0),j=new Float32Array(0),z=new Float32Array(0);const F=d.createBuffer(),E=d.createBuffer(),re=(se,ae,T)=>{O=se,D=new Float32Array(se),Y=new Float32Array(se),ce=new Float32Array(se),j=new Float32Array(se*2),z=new Float32Array(se);for(let I=0;I<se;I++)D[I]=H()*ae,Y[I]=H()*T,ce[I]=(H()*.4+.1)*60;d.bindBuffer(d.ARRAY_BUFFER,F),d.bufferData(d.ARRAY_BUFFER,j.byteLength,d.DYNAMIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,E),d.bufferData(d.ARRAY_BUFFER,z.byteLength,d.DYNAMIC_DRAW)};let ie=0,Q=performance.now(),te=-1,U=0,ne=0;const me=se=>{if(ie=requestAnimationFrame(me),typeof document<"u"&&document.hidden){Q=se;return}const ae=Math.min(.05,(se-Q)/1e3);Q=se;const T=M.current,I=T.speed,K=cw<768,W=cw>=768&&cw<1024,ue=Math.min(window.devicePixelRatio||1,K?.75:Ei),pe=Math.max(1,Math.round(cw*ue)),he=Math.max(1,Math.round(ch*ue));(f.width!==pe||f.height!==he)&&(f.width=pe,f.height=he),d.viewport(0,0,pe,he);let Se=T.density,Pe=T.linkDistance,ke=T.dotSize;if(K?(Se=42,Pe=95,ke=Math.min(T.dotSize,7)):W&&(Se=Math.max(80,Math.min(Math.round(T.density*.5),110)),Pe=Math.min(T.linkDistance,145),ke=Math.min(T.dotSize,10)),Se!==te&&(re(Se,cw,ch),te=Se),cw!==U||ch!==ne){const G=cw/Math.max(U||cw,1),le=ch/Math.max(ne||ch,1);for(let xe=0;xe<O;xe++)D[xe]*=G,Y[xe]*=le;U=cw,ne=ch}const Me=x.current,st=T.hover,Fe=(K?100:180)*(st>0?1:0),Oe=Pe,mt=K?Math.min(T.linkThickness,1.6):T.linkThickness,ft=T.direction*Math.PI/180,St=Math.sin(ft),it=Math.cos(ft);let ze=0;const xt=(G,le,xe,Ee,be,Ie,We,nt)=>{if(!(ze>=Xe)){for(let De=0;De<6;De++){const ot=(ze*6+De)*2,gt=(ze*6+De)*3;v[ot]=G,v[ot+1]=le,C[ot]=xe,C[ot+1]=Ee,q[gt]=Mt[De][0]===0?be:Ie,q[gt+1]=We,q[gt+2]=nt}ze++}};for(let G=0;G<O;G++){D[G]+=ce[G]*St*ae*I,Y[G]+=ce[G]*it*ae*I,D[G]<-Ze?(D[G]=cw+Ze,Y[G]=H()*ch):D[G]>cw+Ze&&(D[G]=-Ze,Y[G]=H()*ch),Y[G]<-Ze?(Y[G]=ch+Ze,D[G]=H()*cw):Y[G]>ch+Ze&&(Y[G]=-Ze,D[G]=H()*cw);const le=Me.x-D[G],xe=Me.y-Y[G],Ee=Math.sqrt(le*le+xe*xe),be=Fe>0&&Ee<Fe?1:0;if(be===1){const Ie=.5*(1-Ee/Fe)*st;xt(D[G],Y[G],Me.x,Me.y,Ie,Ie,1,mt)}j[G*2]=D[G],j[G*2+1]=Y[G],z[G]=be}if(Oe>0){const G=Oe*Oe;for(let le=0;le<O&&ze<Xe;le++){const xe=D[le],Ee=Y[le];for(let be=le+1;be<O&&ze<Xe;be++){const Ie=xe-D[be];if(Ie>Oe||Ie<-Oe)continue;const We=Ee-Y[be];if(We>Oe||We<-Oe)continue;const nt=Ie*Ie+We*We;if(nt>=G)continue;const De=.15*(1-Math.sqrt(nt)/Oe);xt(xe,Ee,D[be],Y[be],De,De,0,mt)}}}d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.disable(d.DEPTH_TEST),d.enable(d.BLEND),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA);const $e=wa(T.base,[.973,.267,0]),Ge=wa(T.accent,[.925,.925,.925]);if(ze>0){d.useProgram(_);const G=ze*6;d.bindBuffer(d.ARRAY_BUFFER,B),d.bufferSubData(d.ARRAY_BUFFER,0,v.subarray(0,G*2));const le=d.getAttribLocation(_,"a_p0");d.enableVertexAttribArray(le),d.vertexAttribPointer(le,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,P),d.bufferSubData(d.ARRAY_BUFFER,0,C.subarray(0,G*2));const xe=d.getAttribLocation(_,"a_p1");d.enableVertexAttribArray(xe),d.vertexAttribPointer(xe,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,$);const Ee=d.getAttribLocation(_,"a_corner");d.enableVertexAttribArray(Ee),d.vertexAttribPointer(Ee,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,X),d.bufferSubData(d.ARRAY_BUFFER,0,q.subarray(0,G*3));const be=d.getAttribLocation(_,"a_shade");d.enableVertexAttribArray(be),d.vertexAttribPointer(be,3,d.FLOAT,!1,0,0),d.uniform2f(h(_,"uSize"),cw,ch),d.uniform3f(h(_,"uBase"),$e[0],$e[1],$e[2]),d.uniform3f(h(_,"uAccent"),Ge[0],Ge[1],Ge[2]),d.drawArrays(d.TRIANGLES,0,G),d.disableVertexAttribArray(le),d.disableVertexAttribArray(xe),d.disableVertexAttribArray(Ee),d.disableVertexAttribArray(be)}if(O>0){d.useProgram(L),d.bindBuffer(d.ARRAY_BUFFER,F),d.bufferSubData(d.ARRAY_BUFFER,0,j);const G=d.getAttribLocation(L,"a_pos");d.enableVertexAttribArray(G),d.vertexAttribPointer(G,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,E),d.bufferSubData(d.ARRAY_BUFFER,0,z);const le=d.getAttribLocation(L,"a_lit");d.enableVertexAttribArray(le),d.vertexAttribPointer(le,1,d.FLOAT,!1,0,0),d.uniform2f(h(L,"uSize"),cw,ch),d.uniform1f(h(L,"uDpr"),ue),d.uniform1f(h(L,"uDot"),ke),d.uniform1f(h(L,"uRestAlpha"),.4),d.uniform3f(h(L,"uBase"),$e[0],$e[1],$e[2]),d.uniform3f(h(L,"uAccent"),Ge[0],Ge[1],Ge[2]),d.drawArrays(d.POINTS,0,O),d.disableVertexAttribArray(G),d.disableVertexAttribArray(le)}},Ae=se=>{const ae=f.getBoundingClientRect();if(ae.width<=0||ae.height<=0)return;const T=y.current.w||f.clientWidth||window.innerWidth||1200,I=y.current.h||f.clientHeight||window.innerHeight||800;x.current.x=(se.clientX-ae.left)/ae.width*T,x.current.y=(se.clientY-ae.top)/ae.height*I},Ne=()=>{x.current.x=-1e4,x.current.y=-1e4};return window.addEventListener("pointermove",Ae,{passive:!0}),window.addEventListener("pointerleave",Ne,{passive:!0}),ie=requestAnimationFrame(me),()=>{cancelAnimationFrame(ie),window.removeEventListener("pointermove",Ae),window.removeEventListener("pointerleave",Ne),d.deleteBuffer(B),d.deleteBuffer(P),d.deleteBuffer($),d.deleteBuffer(X),d.deleteBuffer(F),d.deleteBuffer(E),d.deleteProgram(_),d.deleteProgram(L)}},[]);const N=S?{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",overflow:"hidden",background:a,isolation:"isolate",...t}:{position:"relative",overflow:"hidden",background:a,isolation:"isolate",width:typeof b=="number"&&b>0?b:"100%",height:typeof k=="number"&&k>0?k:"100%",...t};return e.jsx("div",{ref:w,style:N,"aria-hidden":"true",children:e.jsx("canvas",{ref:p,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}function Fi(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(Ya,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsxs(tr,{children:[e.jsx(Mi,{}),e.jsx(Ti,{})]})})}const va=(t="")=>{const a=String(t).toLowerCase();return a.includes("importing a module script failed")||a.includes("failed to fetch dynamically imported module")||a.includes("loading chunk")||a.includes("failed to load module script")||a.includes("error loading dynamically imported module")||a.includes("mime type")||a.includes("dynamically imported")};class Oi extends m.Component{constructor(r){super(r);Gt(this,"handleReload",()=>{sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload()});this.state={error:null}}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,s){if(console.error("Application render error:",r,s),va(r?.message)){const i=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-i>8e3&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}}render(){if(this.state.error){const r=va(this.state.error?.message);return e.jsxs("main",{style:{padding:"32px 20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',maxWidth:"540px",margin:"60px auto",textAlign:"center",backgroundColor:"#121118",color:"#f3f4f6",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"},children:[e.jsx("h2",{style:{color:"#f97316",marginBottom:"12px",fontSize:"1.4rem"},children:r?"New Update Available":"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#9ca3af",marginBottom:"20px",fontSize:"0.95rem",lineHeight:"1.5"},children:r?"A fresh update has been deployed. Please tap refresh to load the latest version.":"Please refresh the page to reload the application."}),e.jsx("button",{type:"button",onClick:this.handleReload,style:{padding:"12px 28px",backgroundColor:"#ea580c",color:"#ffffff",border:"none",borderRadius:"999px",cursor:"pointer",fontWeight:"700",fontSize:"1rem",boxShadow:"0 4px 14px rgba(234, 88, 12, 0.4)",transition:"transform 0.15s ease"},children:"Refresh Website"})]})}return this.props.children}}if(typeof window<"u"){const t=a=>{const r=String(a?.message||a?.reason?.message||"").toLowerCase();if(r.includes("importing a module script failed")||r.includes("failed to fetch dynamically imported module")||r.includes("loading chunk")||r.includes("failed to load module script")){const s=Number(sessionStorage.getItem("chunk_reload_ts")||0);Date.now()-s>8e3&&(sessionStorage.setItem("chunk_reload_ts",String(Date.now())),window.location.reload())}};window.addEventListener("error",t),window.addEventListener("unhandledrejection",t)}const Di="231763775562-gc86oo86thvcfrnlt9u4i3m4emdaga7e.apps.googleusercontent.com";Ft.createRoot(document.getElementById("root")).render(e.jsx(ut.StrictMode,{children:e.jsx(Oi,{children:e.jsx(Qa,{clientId:Di,children:e.jsx(Fi,{})})})}));export{Ht as A,$t as a,ee as b,Ui as c,Js as f,Te as t,Qe as u};
