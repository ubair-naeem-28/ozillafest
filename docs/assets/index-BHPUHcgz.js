const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-BckUcc2z.js","assets/vendor-motion-DHTbcX3O.js","assets/vendor-react-6MXTWAEx.js","assets/vendor-utils-Bub7y9MC.js","assets/RegisterPage-D15VKVzp.js","assets/GoogleAuthCallbackPage-CBGKNUi3.js","assets/DashboardPage-BaWe5epl.js","assets/UserDashboardPage-DvdPIfW0.js","assets/useTicket-DQZmvqsD.js","assets/ticketService-DPW9VbEf.js","assets/PageHeader-DJkV4_O-.js","assets/formatDate.util-wEQv7dlP.js","assets/TicketPortalPage-DRX67jwL.js","assets/AlertMessage-BVQu3q6F.js","assets/MyTicketsPage-C-GilKV7.js","assets/GeneratedTicketCard-CRSYxZvM.js","assets/TicketViewPage-DUqxnUpv.js","assets/TicketVerificationPage-Dape8wgf.js","assets/AdminDashboardPage-VXrnh6YJ.js","assets/AdminTicketReviewPage-DwA43RGr.js","assets/LegalPage-0v422c6k.js","assets/NotFound-DvQu_5Ky.js"])))=>i.map(i=>d[i]);
import{j as e,u as Ie,m as be,a as Te,b as He,A as We}from"./vendor-motion-DHTbcX3O.js";import{a as Ge,r as m,R as q,u as J,N as j,O as Q,L as b,b as Re,c as Ye,d as Be,e as p,B as Xe}from"./vendor-react-6MXTWAEx.js";import{a as Ze}from"./vendor-utils-Bub7y9MC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var ge={},Me=Ge;ge.createRoot=Me.createRoot,ge.hydrateRoot=Me.hydrateRoot;function Ke(t={}){const{nonce:s,locale:r,onScriptLoadSuccess:o,onScriptLoadError:n}=t,[a,l]=m.useState(!1),i=m.useRef(o);i.current=o;const c=m.useRef(n);return c.current=n,m.useEffect(()=>{const d=document.createElement("script");return d.src="https://accounts.google.com/gsi/client",r&&(d.src+=`?hl=${r}`),d.async=!0,d.defer=!0,d.nonce=s,d.onload=()=>{var h;l(!0),(h=i.current)===null||h===void 0||h.call(i)},d.onerror=()=>{var h;l(!1),(h=c.current)===null||h===void 0||h.call(c)},document.body.appendChild(d),()=>{document.body.removeChild(d)}},[s]),a}const qe=m.createContext(null);function Je({clientId:t,nonce:s,locale:r,onScriptLoadSuccess:o,onScriptLoadError:n,children:a}){const l=Ke({nonce:s,onScriptLoadSuccess:o,onScriptLoadError:n,locale:r}),i=m.useMemo(()=>({locale:r,clientId:t,scriptLoadedSuccessfully:l}),[t,l]);return q.createElement(qe.Provider,{value:i},a)}const ue="prism_token",T={getToken(){return localStorage.getItem(ue)},setToken(t){localStorage.setItem(ue,t)},removeToken(){localStorage.removeItem(ue)}},Qe="http://localhost:5000/api",E=Ze.create({baseURL:Qe,headers:{"Content-Type":"application/json"}});E.interceptors.request.use(t=>{const s=T.getToken();return s&&(t.headers.Authorization=`Bearer ${s}`),t},t=>Promise.reject(t));E.interceptors.response.use(t=>t,t=>(t.response?.status===401&&T.removeToken(),Promise.reject(t)));const S={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",SEND_OTP:"/auth/send-otp",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE:"/auth/google",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},Ce="ozilla_local_users";let F=!1;function N(t){return String(t||"").toLowerCase().trim()}function A(t){return String(t||"").trim()}function M(){try{const t=localStorage.getItem(Ce),s=t?JSON.parse(t):[];return Array.isArray(s)?s:[]}catch{return[]}}function _(t){localStorage.setItem(Ce,JSON.stringify(t))}function et(t){const s={sub:t.id,email:t.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(s))}`}function pe(t){const s=String(t||"");if(!s)return null;if(s.startsWith("local."))try{return JSON.parse(atob(s.slice(6)))}catch{return null}const r=s.split(".");if(r.length===3)try{return JSON.parse(atob(r[1]))}catch{return null}return null}function K(t){return{id:t.id,firstName:t.firstName,lastName:t.lastName,name:t.name||`${t.firstName||""} ${t.lastName||""}`.trim(),email:t.email,phone:t.phone,role:t.role||"user"}}function V(t={}){const s=String(t.firstName||"Local").trim()||"Local",r=String(t.lastName||"User").trim()||"User",o=N(t.email||"local@ozillafestival.com"),n=A(t.phone||"+923000000000");return{id:t.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:s,lastName:r,name:`${s} ${r}`.trim(),email:o,phone:n,password:String(t.password||""),role:"user"}}function je(t){return!t?.response&&(t?.code==="ERR_NETWORK"||t?.message?.includes("Network Error")||t?.message?.includes("ECONNREFUSED"))}function ne(t){return je(t)?(F=!0,!0):!1}function D(t){const s=K(t);return{token:et(s),user:s,mode:"local-fallback"}}const ae={async login(t){const s=String(t?.email||t?.phone||t?.identifier||"").trim(),r=N(s),o=A(s),n=String(t?.password||"").trim();try{const a=await E.post(S.AUTH.LOGIN,{email:s,password:n});if(a?.data?.token){const l=M(),i=l.findIndex(d=>N(d.email)===r||A(d.phone)===o),c={id:a.data.user?.id||`user-${Date.now()}`,firstName:a.data.user?.firstName||"",lastName:a.data.user?.lastName||"",name:a.data.user?.name||"",email:a.data.user?.email?N(a.data.user.email):r,phone:a.data.user?.phone?A(a.data.user.phone):o,password:n,role:a.data.user?.role||"user"};return i>=0?(l[i]=c,_(l)):_([c,...l]),a.data}return a.data}catch(a){const l=M(),i=l.find(d=>(N(d.email)===r||A(d.phone)===o)&&d.password===n);if(i)return F=!0,D(i);const c=l.find(d=>N(d.email)===r||A(d.phone)===o);if(c&&c.password!==n){const d=new Error("Invalid credentials. Please check your password.");throw d.response={status:401,data:{message:"Invalid credentials. Please check your password."}},d}throw a}},async register(t){const s=N(t?.email),r=A(t?.phone),o=String(t?.password||"").trim(),n=M(),a=n.find(i=>N(i.email)===s),l=n.find(i=>A(i.phone)===r);try{const i=await E.post(S.AUTH.REGISTER,{...t,email:s,phone:r,password:o});if(i?.data?.token){const c=V({id:i.data.user?.id,firstName:t.firstName,lastName:t.lastName,email:s,phone:r,password:o}),d=n.filter(h=>N(h.email)!==s&&A(h.phone)!==r);_([c,...d])}return i.data}catch(i){if(i?.response?.status===409||i?.response?.data?.message)throw i;if(a){const d=new Error("Account already exists with this email. Please log in.");throw d.response={status:409,data:{message:"Account already exists with this email. Please log in."}},d}if(l){const d=new Error("Account already exists with this phone number. Please log in.");throw d.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},d}const c=V({...t,email:s,phone:r,password:o});return _([c,...n]),F=!0,D(c)}},async sendOtp(t){const s=N(t);try{return(await E.post(S.AUTH.SEND_OTP,{email:s})).data}catch(r){if(r?.response?.data?.message)throw r;if(je(r)){const o=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw o.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},o}throw r}},async resendOtp(t){return this.sendOtp(t)},async verifyOtp(t){const s=N(t?.email),r=String(t?.otp||"").trim();try{return(await E.post(S.AUTH.VERIFY_OTP,{email:s,otp:r})).data}catch(o){if(o?.response?.data?.message)throw o;if(je(o)){const n=new Error("Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.");throw n.response={status:503,data:{message:"Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running."}},n}throw o}},async getCurrentUser(){const t=T.getToken();if(!t){const r=new Error("Unauthorized");throw r.response={status:401,data:{message:"Unauthorized"}},r}const s=pe(t);if(s?.mode==="local-fallback"||String(t||"").startsWith("local.")){const o=M().find(n=>n.id===s?.sub||N(n.email)===N(s?.email));if(o)return K(o)}try{return(await E.get(S.AUTH.ME)).data}catch(r){const n=M().find(a=>a.id===s?.sub||N(a.email)===N(s?.email));if(n)return K(n);throw r}},async logout(){if(F)return{message:"Logged out successfully"};try{return(await E.post(S.AUTH.LOGOUT)).data}catch(t){if(ne(t))return{message:"Logged out successfully"};throw t}},async forgotPassword(t){return(await E.post(S.AUTH.FORGOT_PASSWORD,{email:t})).data},async resetPassword(t){return(await E.post(S.AUTH.RESET_PASSWORD,t)).data},async googleAuth(t,s){if(F){const o=V(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),n=M();return n.some(a=>a.email===o.email)||_([o,...n]),D(o)}try{return(await E.post(S.AUTH.GOOGLE,{token:t,profile:s})).data}catch(r){if(ne(r)){const n=V(s||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return D(n)}throw r}},async googleCodeLogin(t,s="postmessage",r){if(F){const n=V(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),a=M();return a.some(l=>l.email===n.email)||_([n,...a]),D(n)}try{return(await E.post(S.AUTH.GOOGLE_CODE_LOGIN,{code:t,redirectUri:s,profile:r})).data}catch(o){if(ne(o)){const a=V(r||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return D(a)}throw o}},async googleTokenLogin(t,s){return this.googleAuth(t,s)},async updateProfile(t){if(F){const s=T.getToken(),r=pe(s),o=M(),n=o.findIndex(i=>i.id===r?.sub||i.email===r?.email);if(n===-1){const i=new Error("Unauthorized");throw i.response={status:401,data:{message:"Unauthorized"}},i}const a=o[n],l={...a,firstName:typeof t?.firstName=="string"?t.firstName.trim():a.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():a.lastName,phone:typeof t?.phone=="string"?t.phone.trim():a.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||a.name,o[n]=l,_(o),{message:"Profile updated successfully",user:K(l)}}try{return(await E.put(S.AUTH.PROFILE,t)).data}catch(s){if(ne(s)){const r=T.getToken(),o=pe(r),n=M(),a=n.findIndex(c=>c.id===o?.sub||c.email===o?.email);if(a===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const l=n[a],i={...l,firstName:typeof t?.firstName=="string"?t.firstName.trim():l.firstName,lastName:typeof t?.lastName=="string"?t.lastName.trim():l.lastName,phone:typeof t?.phone=="string"?t.phone.trim():l.phone};return i.name=`${i.firstName||""} ${i.lastName||""}`.trim()||l.name,n[a]=i,_(n),{message:"Profile updated successfully",user:K(i)}}throw s}}},Fe=m.createContext(null);function tt({children:t}){const[s,r]=m.useState(null),[o,n]=m.useState(!0);m.useEffect(()=>{a()},[]);const a=async()=>{try{if(T.getToken()){const g=await ae.getCurrentUser();r(g)}}catch{T.removeToken()}finally{n(!1)}},l=async x=>{const g=await ae.login(x);return T.setToken(g.token),r(g.user),g},i=async x=>{const g=await ae.register(x);return T.setToken(g.token),r(g.user),g},c=()=>{ae.logout().catch(()=>{}),T.removeToken(),r(null)},d=s?.role==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String(s?.email||"").toLowerCase().trim()),h={user:s,isAdmin:d,loading:o,login:l,register:i,logout:c,checkAuth:a};return e.jsx(Fe.Provider,{value:h,children:t})}const st="modulepreload",rt=function(t){return"/ozillafest/"+t},Ae={},z=function(s,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=l?.nonce||l?.getAttribute("nonce");n=Promise.allSettled(r.map(c=>{if(c=rt(c),c in Ae)return;Ae[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":st,d||(x.as="script"),x.crossOrigin="",x.href=c,i&&x.setAttribute("nonce",i),document.head.appendChild(x),d)return new Promise((g,y)=>{x.addEventListener("load",g),x.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return n.then(l=>{for(const i of l||[])i.status==="rejected"&&a(i.reason);return s().catch(a)})};function ve(){const t=m.useContext(Fe);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function ot({children:t}){const{user:s,loading:r}=ve(),o=J();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!s){const n=`${o.pathname}${o.search}`,a=new URLSearchParams({returnTo:n}).toString();return e.jsx(j,{to:`/login?${a}`,replace:!0})}return t||e.jsx(Q,{})}function nt(t,s="/dashboard"){if(!t||typeof t!="string")return s;let r=t.trim();if(r.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(r))return s;r.startsWith("/ozillafest")&&(r=r.slice(11)),r.startsWith("/")||(r=`/${r}`);const o=r.split("?")[0].replace(/\/$/,"");return!o||o==="/login"||o==="/register"?s:r}function at({children:t}){const{user:s,loading:r}=ve(),o=J();if(r)return e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(s){const a=new URLSearchParams(o.search).get("returnTo"),l=nt(a,"/dashboard");return e.jsx(j,{to:l,replace:!0})}return t||e.jsx(Q,{})}function H(t){if(!t||typeof t!="string"||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const s="/ozillafest/",r=s.endsWith("/")?s:`${s}/`,o=t.replace(/^\/+/,"");return o.startsWith("assets/")||o.startsWith("favicon")?`${r}${o}`:t.startsWith("/")?`${r}${o}`:t}function it({className:t="",nodeColor:s="#EC4899",lineColor:r="236, 72, 153",secondaryColor:o="255, 90, 31",maxDistance:n=135,speed:a=.5}){const l=m.useRef(null);return m.useEffect(()=>{const i=l.current;if(!i)return;const c=i.getContext("2d",{alpha:!0});if(!c)return;let d=null,h=!0,x=!1,g=i.width=i.parentElement?.clientWidth||window.innerWidth,y=i.height=i.parentElement?.clientHeight||window.innerHeight;const f=g<768?18:34,G=340,w=450,ee=n*n;let O={x:g/2,y:y/2,active:!1},k={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const ye=[];for(let P=0;P<f;P++)ye.push({x:(Math.random()-.5)*g*1.1,y:(Math.random()-.5)*y*1.1,z:(Math.random()-.5)*w,vx:(Math.random()-.5)*a*.7,vy:(Math.random()-.5)*a*.7,vz:(Math.random()-.5)*a*.7,radius:Math.random()*1.8+1.2,colorType:Math.random()>.4?"primary":"secondary"});const Ne=()=>{i.parentElement&&(g=i.width=i.parentElement.clientWidth||window.innerWidth,y=i.height=i.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",Ne,{passive:!0});const we=P=>{if(!h)return;const Y=i.getBoundingClientRect();O.x=P.clientX-Y.left,O.y=P.clientY-Y.top,O.active=!0;const se=(O.x-g/2)/(g/2),re=(O.y-y/2)/(y/2);k.targetRotY=se*.14,k.targetRotX=-re*.14},ke=()=>{O.active=!1,k.targetRotX=0,k.targetRotY=0};window.addEventListener("mousemove",we,{passive:!0}),window.addEventListener("mouseleave",ke,{passive:!0});const Ee=()=>{if(!h||document.hidden){x=!1;return}c.clearRect(0,0,g,y),k.rotX+=(k.targetRotX-k.rotX)*.05,k.rotY+=(k.targetRotY-k.rotY)*.05;const P=Math.cos(k.rotY),Y=Math.sin(k.rotY),se=Math.cos(k.rotX),re=Math.sin(k.rotX),Ve=g/2,De=y/2,Le=g*.65,Se=y*.65,Pe=w*.55,B=[];for(let L=0;L<f;L++){const u=ye[L];u.x+=u.vx,u.y+=u.vy,u.z+=u.vz,(u.x<-Le||u.x>Le)&&(u.vx*=-1),(u.y<-Se||u.y>Se)&&(u.vy*=-1),(u.z<-Pe||u.z>Pe)&&(u.vz*=-1);const U=u.x*P-u.z*Y,$=u.z*P+u.x*Y,I=u.y*se-$*re,X=$*se+u.y*re,Z=X+w;if(Z<=0)continue;const R=G/(G+Z*.65),oe=Ve+U*R,he=De+I*R,me=Math.max(.18,Math.min(.85,(X+w)/(w*1.4)));B.push({x:oe,y:he,scale:R,alpha:me,radius:Math.max(1.2,u.radius*R),colorType:u.colorType})}const de=B.length;for(let L=0;L<de;L++){const u=B[L];let U=0;for(let $=L+1;$<de&&U<3;$++){const I=B[$],X=u.x-I.x,Z=u.y-I.y,R=X*X+Z*Z;if(R<ee){U++;const oe=Math.sqrt(R),he=(1-oe/n)*.4*Math.min(u.alpha,I.alpha),me=u.colorType==="primary"?r:o;c.beginPath(),c.moveTo(u.x,u.y),c.lineTo(I.x,I.y),c.strokeStyle=`rgba(${me}, ${he})`,c.lineWidth=Math.max(.5,(1-oe/n)*1.2),c.stroke()}}}for(let L=0;L<de;L++){const u=B[L],U=u.colorType==="primary"?`rgba(${r}, ${u.alpha})`:`rgba(${o}, ${u.alpha})`;c.beginPath(),c.arc(u.x,u.y,u.radius,0,Math.PI*2),c.fillStyle=U,c.fill()}d=requestAnimationFrame(Ee)},ce=()=>{!x&&h&&!document.hidden&&(x=!0,d=requestAnimationFrame(Ee))},le=()=>{x=!1,d&&(cancelAnimationFrame(d),d=null)};let te=null;"IntersectionObserver"in window?(te=new IntersectionObserver(([P])=>{h=P.isIntersecting,h?ce():le()},{threshold:.05}),te.observe(i)):ce();const ze=()=>{document.hidden?le():h&&ce()};return document.addEventListener("visibilitychange",ze),()=>{le(),window.removeEventListener("resize",Ne),window.removeEventListener("mousemove",we),window.removeEventListener("mouseleave",ke),document.removeEventListener("visibilitychange",ze),te&&te.disconnect()}},[s,r,o,n,a]),e.jsx("canvas",{ref:l,className:`plexus-net-canvas ${t}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,willChange:"transform"}})}const ct=q.memo(it);function fe({children:t}){const s=J(),r=s.pathname==="/login",o=s.pathname==="/register";return e.jsxs("div",{className:`auth-page ${r?"auth-page-login":""} ${o?"auth-page-register":""}`,children:[e.jsx(ct,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:135,speed:.5}),e.jsx("div",{className:"auth-ambient-blob-1","aria-hidden":"true"}),e.jsx("div",{className:"auth-ambient-blob-2","aria-hidden":"true"}),e.jsxs("div",{className:"auth-centered-shell",children:[e.jsxs("div",{className:"auth-center-header",children:[e.jsxs(b,{to:"/",className:"auth-center-logo-wrap","aria-label":"Go to Home",children:[e.jsx("img",{src:H("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"auth-center-logo",onError:n=>{n.currentTarget.src=H("/assets/logo.jpeg")}}),e.jsxs("div",{className:"auth-center-brand-text",children:[e.jsx("strong",{children:"OZILLA FESTIVAL"}),e.jsx("span",{children:"OFFICIAL PORTAL · 2026"})]})]}),e.jsx("span",{className:"auth-center-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),e.jsx("h1",{className:"auth-center-title",children:r?"Welcome Back to Ozilla":"Join Ozilla Festival 2026"})]}),e.jsxs("section",{className:"auth-card",children:[e.jsxs("div",{className:"auth-card-tabs",children:[e.jsx(b,{to:`/login${s.search}`,className:`auth-tab-btn ${r?"active":""}`,children:"Sign In"}),e.jsx(b,{to:`/register${s.search}`,className:`auth-tab-btn ${o?"active":""}`,children:"Create Account"})]}),e.jsx("div",{className:"auth-card-body",children:t||e.jsx(Q,{})})]}),e.jsxs("div",{className:"auth-center-ribbon",children:[e.jsx("span",{children:"📅 Nov 01, 2026"}),e.jsx("span",{children:"📍 Lahore, Pakistan"}),e.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}function lt({children:t,className:s="",onClick:r,mouseX:o,spring:n,distance:a,magnification:l,baseItemSize:i,label:c}){const d=m.useRef(null),h=Ie(0),x=Te(o,w=>{if(w===1/0||!d.current)return a;const ee=d.current.getBoundingClientRect(),O=ee.left+ee.width/2;return w-O}),g=Te(x,[-a,0,a],[i,l,i]),y=He(g,n),W=w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),r?.())},f=()=>{h.set(1)},G=()=>{h.set(0)};return e.jsx(be.div,{ref:d,style:{width:y,height:y},onHoverStart:f,onHoverEnd:G,onFocus:f,onBlur:G,onClick:r,className:`dock-item ${s}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":c,onKeyDown:W,children:m.Children.map(t,w=>m.cloneElement(w,{isHovered:h}))})}function dt({children:t,className:s="",...r}){const{isHovered:o}=r,[n,a]=m.useState(!1);return m.useEffect(()=>{if(!o)return;const l=o.on("change",i=>{a(i===1)});return()=>l()},[o]),e.jsx(We,{children:n&&e.jsx(be.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${s}`,role:"tooltip",style:{x:"-50%"},children:t})})}function ht({children:t,className:s=""}){return e.jsx("div",{className:`dock-icon ${s}`,children:t})}function mt({items:t,className:s="",spring:r={mass:.1,stiffness:220,damping:18},magnification:o=52,distance:n=120,panelHeight:a=44,baseItemSize:l=36}){const i=Ie(1/0),c=J(),d=Re();return e.jsx("div",{className:"dock-outer",children:e.jsx(be.div,{onMouseMove:h=>i.set(h.clientX),onMouseLeave:()=>i.set(1/0),className:`dock-panel ${s}`,style:{height:a},role:"toolbar","aria-label":"Application dock",children:t.map((h,x)=>{const g=c.pathname===h.to||h.to!=="/"&&c.pathname.startsWith(h.to)||h.to==="/"&&c.pathname==="/dashboard";return e.jsxs(lt,{onClick:()=>{h.onClick?.(),h.to&&d(h.to)},className:`${h.className||""} ${g?"active":""}`,mouseX:i,spring:r,distance:n,magnification:o,baseItemSize:l,label:h.label,children:[e.jsx(ht,{children:h.icon}),e.jsx(dt,{children:h.label})]},h.to||x)})})})}function v({path:t,size:s=24,viewBox:r="0 0 24 24",fill:o="none",stroke:n="currentColor",strokeWidth:a=1.8}){return e.jsx("svg",{width:s,height:s,viewBox:r,fill:o,stroke:n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t})}const ie={home:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),e.jsx("path",{d:"M5 9.5V21h14V9.5"}),e.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),e.jsx("path",{d:"M12 17v5"})]})}),clock:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 3"})]})}),history:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),e.jsx("path",{d:"M3 4v5h5"}),e.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),e.jsx("path",{d:"M2 21h20"}),e.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),e.jsx("path",{d:"M4 13h16"})]})}),discounts:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),e.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),e.jsx("path",{d:"M15 21V9h6v12"}),e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:e.jsx(v,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),sparkle:e.jsx(v,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"})})}),ticket:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),e.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),e.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:e.jsx(v,{path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:e.jsx(v,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:e.jsx(v,{path:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},ut=[{label:"Home",to:"/#home",icon:"home"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0},{label:"Lineup",to:"/#celebrities",icon:"mic"},{label:"VIP Passes",to:"/#vip-experience",icon:"ticket"},{label:"Atmosphere",to:"/#about",icon:"sparkle"},{label:"Editions",to:"/#events",icon:"calendar"},{label:"Timeline",to:"/#history",icon:"history"},{label:"Hotels & Dining",to:"/#hotels",icon:"hotels"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"}];function Oe(t){return t?.firstName||t?.name||t?.email||"Account"}function Ue(){const{user:t,isAdmin:s,logout:r}=ve(),o=Re(),n=J(),[a,l]=m.useState(!1),[i,c]=m.useState(!1),[d,h]=m.useState(!1),x=m.useRef(null),g=q.useMemo(()=>{const f=[...ut];return s&&f.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),f},[s]),y=q.useMemo(()=>g.map(f=>({label:f.label,to:f.to,icon:ie[f.icon],className:f.cta?"dock-item-cta":""})),[g]);m.useEffect(()=>{const f=()=>{x.current||(x.current=window.requestAnimationFrame(()=>{l(window.scrollY>12),x.current=null}))};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f),x.current&&window.cancelAnimationFrame(x.current)}},[]),m.useEffect(()=>{c(!1),h(!1)},[n.pathname]);const W=()=>{r(),o("/")};return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`dock-site-header ${a?"scrolled":""}`,children:e.jsxs("div",{className:"dock-site-header-inner",children:[e.jsxs(b,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Festival home",children:[e.jsx("span",{className:"dock-site-brand-logo",children:e.jsx("img",{src:H("/assets/ozilla/logo.png"),alt:"Ozilla Festival",onError:f=>{f.currentTarget.src=H("/assets/company-logo.jpeg")}})}),e.jsxs("div",{className:"dock-site-brand-text",children:[e.jsx("strong",{children:"OZILLA"}),e.jsx("small",{children:"FESTIVAL '26"})]})]}),e.jsx("div",{className:"dock-header-center",children:e.jsx(mt,{items:y,className:"dock-nav",magnification:50,distance:130,panelHeight:58,baseItemSize:38,spring:{mass:.1,stiffness:260,damping:19}})}),e.jsxs("div",{className:"dock-site-header-actions",children:[t?e.jsxs("div",{className:`dock-account ${d?"open":""}`,children:[e.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>h(f=>!f),"aria-expanded":d,"aria-label":"Account menu",children:[e.jsx("span",{className:"dock-account-avatar",children:String(Oe(t)).slice(0,1).toUpperCase()}),e.jsx("strong",{children:Oe(t)})]}),e.jsxs("div",{className:"dock-account-menu",children:[e.jsx(b,{to:"/account",children:"Account"}),e.jsx(b,{to:"/tickets/my-tickets",children:"My Tickets"}),s&&e.jsx(b,{to:"/admin/dashboard",children:"Admin Dashboard"}),e.jsx("button",{type:"button",onClick:W,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(b,{to:"/login",className:"dock-site-login-btn",children:"Login"}),e.jsx(b,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),e.jsx("button",{type:"button",className:`dock-mobile-toggle ${i?"open":""}`,"aria-label":i?"Close menu":"Open menu","aria-expanded":i,onClick:()=>c(f=>!f),children:i?ie.close:ie.menu})]})]})}),e.jsx("div",{className:`dock-mobile-overlay ${i?"open":""}`,onClick:()=>c(!1),children:e.jsxs("div",{className:`dock-mobile-panel ${i?"open":""}`,onClick:f=>f.stopPropagation(),children:[e.jsxs("div",{className:"dock-mobile-header",children:[e.jsx("div",{children:e.jsx("h2",{children:"Menu"})}),e.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>c(!1),"aria-label":"Close menu",children:"x"})]}),e.jsx("div",{className:"dock-mobile-links",children:g.map(f=>e.jsxs(Ye,{to:f.to,className:f.cta?"dock-mobile-link-cta":"",onClick:()=>c(!1),children:[e.jsx("span",{className:"dock-mobile-link-icon",children:ie[f.icon]}),e.jsx("span",{children:f.label}),f.cta&&e.jsx("span",{className:"dock-mobile-badge",children:"PASSES"})]},f.to))}),e.jsx("div",{className:"dock-mobile-auth",children:t?e.jsx("button",{type:"button",onClick:()=>{W(),c(!1)},children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(b,{to:"/login",onClick:()=>c(!1),children:"Login"}),e.jsx(b,{to:"/register",onClick:()=>c(!1),children:"Sign Up"})]})})]})})]})}const pt=[{label:"Headline Artists",href:"/#celebrities",isMain:!0},{label:"VIP & Ticket Passes",href:"/tickets",isMain:!0},{label:"The Festival Vibe",href:"/#about",isMain:!0},{label:"World-Class Facilities",href:"/#facilities",isMain:!0},{label:"Milestones & History",href:"/#history",isSecondary:!0},{label:"Hotel & Travel Partners",href:"/#hotels",isSecondary:!0}],ft=[{label:"My Digital Passes",href:"/tickets/my-tickets",isMain:!0},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW",isMain:!0},{label:"Sponsorship Inquiries",href:"/#sponsorship",isMain:!0},{label:"Festival Dining Hub",href:"/#restaurants",isSecondary:!0},{label:"Privacy Policy",href:"/privacy",isSecondary:!0},{label:"Terms & Conditions",href:"/terms",isSecondary:!0}];function $e(){return e.jsxs("footer",{className:"oz-footer",children:[e.jsx("div",{className:"oz-footer-glow-line"}),e.jsxs("div",{className:"oz-footer-container",children:[e.jsxs("div",{className:"oz-footer-grid",children:[e.jsxs("div",{className:"oz-footer-col oz-brand-col",children:[e.jsxs(b,{to:"/",className:"oz-brand-link",children:[e.jsx("img",{src:H("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"oz-brand-logo",onError:t=>{t.currentTarget.src=H("/assets/logo.jpeg")}}),e.jsxs("div",{children:[e.jsx("strong",{children:"OZILLA FESTIVAL"}),e.jsx("span",{children:"PRISM ENTERTAINMENT · 2026"})]})]}),e.jsx("p",{className:"oz-brand-text",children:"Pakistan's premier live music and cultural festival in Lahore. 4 electrified stages, 20+ celebrity performers, night food street, and instant verified mobile passes."}),e.jsx("div",{className:"oz-social-single",children:e.jsxs("a",{href:"https://www.instagram.com/ozillafestival",target:"_blank",rel:"noopener noreferrer",className:"oz-insta-badge",children:[e.jsx("svg",{className:"oz-insta-svg",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),e.jsx("span",{children:"Follow @ozillafestival"})]})})]}),e.jsxs("div",{className:"oz-footer-col",children:[e.jsx("h4",{children:"Festival Guide"}),e.jsx("ul",{className:"oz-footer-nav",children:pt.map(t=>e.jsx("li",{className:t.isSecondary?"oz-footer-secondary":"",children:e.jsxs(b,{to:t.href,children:[e.jsx("span",{className:"oz-nav-arrow",children:"→"}),t.label]})},t.label))})]}),e.jsxs("div",{className:"oz-footer-col",children:[e.jsx("h4",{children:"Passes & Support"}),e.jsx("ul",{className:"oz-footer-nav",children:ft.map(t=>e.jsx("li",{className:t.isSecondary?"oz-footer-secondary":"",children:e.jsxs(b,{to:t.href,children:[e.jsx("span",{className:"oz-nav-arrow",children:"→"}),t.label]})},t.label))})]}),e.jsxs("div",{className:"oz-footer-col oz-event-col",children:[e.jsx("h4",{children:"Festival Venue"}),e.jsxs("div",{className:"oz-event-info",children:[e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"FESTIVAL DATE"}),e.jsx("strong",{children:"November 1, 2026"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"LOCATION"}),e.jsx("strong",{children:"Lahore, Pakistan"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"OFFICIAL INQUIRIES"}),e.jsx("strong",{children:"ozillafestival@gmail.com"})]}),e.jsxs("div",{className:"oz-info-box",children:[e.jsx("span",{className:"oz-info-label",children:"TICKET PASSES"}),e.jsx("strong",{className:"oz-text-glow",children:"Instant Dynamic QR Mobile Passes"})]})]})]})]}),e.jsxs("div",{className:"oz-footer-status-bar",children:[e.jsxs("div",{className:"oz-live-indicator",children:[e.jsx("span",{className:"oz-live-dot"}),e.jsx("span",{children:"OZILLA 2026 ADMISSION PORTAL ACTIVE · LAHORE"})]}),e.jsx(b,{to:"/tickets",className:"oz-footer-cta-link",children:"Get Your Festival Passes →"})]}),e.jsxs("div",{className:"oz-footer-bottom",children:[e.jsx("p",{children:"© 2026 Ozilla Festival & Prism Entertainment. All rights reserved."}),e.jsxs("div",{className:"oz-footer-bottom-links",children:[e.jsx(b,{to:"/privacy",children:"Privacy Policy"}),e.jsx("span",{children:"·"}),e.jsx(b,{to:"/terms",children:"Terms of Service"}),e.jsx("span",{children:"·"}),e.jsx(b,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]})]})]}),e.jsx("style",{children:`
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
      `})]})}function C({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-[#550e0e] text-white overflow-x-hidden w-full",children:[e.jsx(Ue,{}),e.jsx("div",{className:"flex-1 w-full overflow-x-hidden",children:t||e.jsx(Q,{})}),e.jsx($e,{})]})}function xe({children:t}){return e.jsxs("div",{className:"min-h-screen flex flex-col bg-[#0B0705] text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell",children:[e.jsx(Ue,{}),e.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content",children:e.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:t||e.jsx(Q,{})})}),e.jsx($e,{})]})}function xt(){return e.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}const gt=m.lazy(()=>z(()=>import("./LoginPage-BckUcc2z.js"),__vite__mapDeps([0,1,2,3]))),jt=m.lazy(()=>z(()=>import("./RegisterPage-D15VKVzp.js"),__vite__mapDeps([4,1,2,3]))),bt=m.lazy(()=>z(()=>import("./GoogleAuthCallbackPage-CBGKNUi3.js"),__vite__mapDeps([5,1,2,3]))),vt=m.lazy(()=>z(()=>import("./DashboardPage-BaWe5epl.js"),__vite__mapDeps([6,1,2,3]))),yt=m.lazy(()=>z(()=>import("./UserDashboardPage-DvdPIfW0.js"),__vite__mapDeps([7,1,2,8,9,10,11,3]))),Nt=m.lazy(()=>z(()=>import("./TicketPortalPage-DRX67jwL.js"),__vite__mapDeps([12,1,2,8,9,13,3]))),wt=m.lazy(()=>z(()=>import("./MyTicketsPage-C-GilKV7.js"),__vite__mapDeps([14,1,2,8,9,15,11,3]))),kt=m.lazy(()=>z(()=>import("./TicketViewPage-DUqxnUpv.js"),__vite__mapDeps([16,1,2,8,9,15,11,3,13]))),Et=m.lazy(()=>z(()=>import("./TicketVerificationPage-Dape8wgf.js"),__vite__mapDeps([17,1,2,9,13,3]))),zt=m.lazy(()=>z(()=>import("./AdminDashboardPage-VXrnh6YJ.js"),__vite__mapDeps([18,1,2,10,13,3]))),Lt=m.lazy(()=>z(()=>import("./AdminTicketReviewPage-DwA43RGr.js"),__vite__mapDeps([19,1,2,9,13,10,3]))),_e=m.lazy(()=>z(()=>import("./LegalPage-0v422c6k.js"),__vite__mapDeps([20,1,2]))),St=m.lazy(()=>z(()=>import("./NotFound-DvQu_5Ky.js"),__vite__mapDeps([21,1,2])));function Pt(){return e.jsx(m.Suspense,{fallback:e.jsx(xt,{}),children:e.jsxs(Be,{children:[e.jsxs(p,{element:e.jsx(at,{}),children:[e.jsx(p,{path:"/login",element:e.jsx(fe,{children:e.jsx(gt,{})})}),e.jsx(p,{path:"/register",element:e.jsx(fe,{children:e.jsx(jt,{})})}),e.jsx(p,{path:"/auth/google/callback",element:e.jsx(fe,{children:e.jsx(bt,{})})})]}),e.jsx(p,{path:"/",element:e.jsx(C,{children:e.jsx(vt,{})})}),e.jsx(p,{path:"/dashboard",element:e.jsx(j,{to:"/",replace:!0})}),e.jsx(p,{path:"/about",element:e.jsx(j,{to:"/#about",replace:!0})}),e.jsx(p,{path:"/collaboration",element:e.jsx(j,{to:"/#sponsorship",replace:!0})}),e.jsx(p,{path:"/prismfest",element:e.jsx(j,{to:"/#home",replace:!0})}),e.jsx(p,{path:"/prismfest/celebrities",element:e.jsx(j,{to:"/#celebrities",replace:!0})}),e.jsx(p,{path:"/prismfest/events",element:e.jsx(j,{to:"/#events",replace:!0})}),e.jsx(p,{path:"/prismfest/future",element:e.jsx(j,{to:"/#future-events",replace:!0})}),e.jsx(p,{path:"/history",element:e.jsx(j,{to:"/#history",replace:!0})}),e.jsx(p,{path:"/events",element:e.jsx(j,{to:"/#events",replace:!0})}),e.jsx(p,{path:"/sponsorship",element:e.jsx(j,{to:"/#sponsorship",replace:!0})}),e.jsx(p,{path:"/contact",element:e.jsx(j,{to:"/#contact",replace:!0})}),e.jsx(p,{path:"/facilities",element:e.jsx(j,{to:"/#facilities",replace:!0})}),e.jsx(p,{path:"/hotels",element:e.jsx(j,{to:"/#hotels",replace:!0})}),e.jsx(p,{path:"/restaurants",element:e.jsx(j,{to:"/#restaurants",replace:!0})}),e.jsx(p,{path:"/discounts",element:e.jsx(j,{to:"/#discounts",replace:!0})}),e.jsx(p,{path:"/partner",element:e.jsx(j,{to:"/#about",replace:!0})}),e.jsx(p,{path:"/privacy",element:e.jsx(C,{children:e.jsx(_e,{type:"privacy"})})}),e.jsx(p,{path:"/terms",element:e.jsx(C,{children:e.jsx(_e,{type:"terms"})})}),e.jsx(p,{path:"/verification/:ticketId",element:e.jsx(C,{children:e.jsx(Et,{})})}),e.jsx(p,{path:"/tickets",element:e.jsx(xe,{children:e.jsx(Nt,{})})}),e.jsxs(p,{element:e.jsx(ot,{}),children:[e.jsx(p,{path:"/account",element:e.jsx(C,{children:e.jsx(yt,{})})}),e.jsx(p,{path:"/admin",element:e.jsx(j,{to:"/admin/dashboard",replace:!0})}),e.jsx(p,{path:"/admin/dashboard",element:e.jsx(C,{children:e.jsx(zt,{})})}),e.jsx(p,{path:"/tickets/my-tickets",element:e.jsx(xe,{children:e.jsx(wt,{})})}),e.jsx(p,{path:"/tickets/view/:ticketId",element:e.jsx(xe,{children:e.jsx(kt,{})})}),e.jsx(p,{path:"/admin/tickets",element:e.jsx(C,{children:e.jsx(Lt,{})})})]}),e.jsx(p,{path:"*",element:e.jsx(St,{})})]})})}function Tt(){const t="/ozillafest/".replace(/\/$/,"");return e.jsx(Xe,{basename:t||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(tt,{children:e.jsx(Pt,{})})})}class Mt extends m.Component{constructor(s){super(s),this.state={error:null}}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,r){console.error("Application render failed:",s,r)}render(){return this.state.error?e.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),e.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}ge.createRoot(document.getElementById("root")).render(e.jsx(q.StrictMode,{children:e.jsx(Mt,{children:e.jsx(Je,{clientId:"placeholder-client-id",children:e.jsx(Tt,{})})})}));export{xt as L,ct as P,ae as a,H as b,E as c,nt as g,T as t,ve as u};
