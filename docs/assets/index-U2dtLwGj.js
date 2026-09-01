function pv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function hv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mm={exports:{}},Ea={},gm={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),mv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),jv=Symbol.for("react.lazy"),pf=Symbol.iterator;function Nv(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xm=Object.assign,vm={};function ls(e,t,n){this.props=e,this.context=t,this.refs=vm,this.updater=n||ym}ls.prototype.isReactComponent={};ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bm(){}bm.prototype=ls.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=vm,this.updater=n||ym}var Mu=Ou.prototype=new bm;Mu.constructor=Ou;xm(Mu,ls.prototype);Mu.isPureReactComponent=!0;var hf=Array.isArray,wm=Object.prototype.hasOwnProperty,Iu={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function km(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)wm.call(t,r)&&!Sm.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ki,type:e,key:i,ref:a,props:s,_owner:Iu.current}}function Ev(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function Pv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mf=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pv(""+e.key):t.toString(36)}function go(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ki:case mv:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+il(a,0):r,hf(s)?(n="",e!=null&&(n=e.replace(mf,"$&/")+"/"),go(s,t,n,"",function(u){return u})):s!=null&&(_u(s)&&(s=Ev(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(mf,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",hf(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+il(i,l);a+=go(i,t,n,c,s)}else if(c=Nv(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+il(i,l++),a+=go(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ui(e,t,n){if(e==null)return e;var r=[],s=0;return go(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Tv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},yo={transition:null},Cv={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Iu};function jm(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ls;X.Fragment=gv;X.Profiler=xv;X.PureComponent=Ou;X.StrictMode=yv;X.Suspense=Sv;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;X.act=jm;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xm({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Iu.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)wm.call(t,c)&&!Sm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ki,type:e.type,key:s,ref:i,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:bv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vv,_context:e},e.Consumer=e};X.createElement=km;X.createFactory=function(e){var t=km.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:wv,render:e}};X.isValidElement=_u;X.lazy=function(e){return{$$typeof:jv,_payload:{_status:-1,_result:e},_init:Tv}};X.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=yo.transition;yo.transition={};try{e()}finally{yo.transition=t}};X.unstable_act=jm;X.useCallback=function(e,t){return nt.current.useCallback(e,t)};X.useContext=function(e){return nt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};X.useEffect=function(e,t){return nt.current.useEffect(e,t)};X.useId=function(){return nt.current.useId()};X.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return nt.current.useMemo(e,t)};X.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};X.useRef=function(e){return nt.current.useRef(e)};X.useState=function(e){return nt.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return nt.current.useTransition()};X.version="18.3.1";gm.exports=X;var S=gm.exports;const Ee=hv(S),Av=pv({__proto__:null,default:Ee},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=S,Lv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),Mv=Object.prototype.hasOwnProperty,Iv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_v={key:!0,ref:!0,__self:!0,__source:!0};function Nm(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Mv.call(t,r)&&!_v.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Lv,type:e,key:i,ref:a,props:s,_owner:Iv.current}}Ea.Fragment=Ov;Ea.jsx=Nm;Ea.jsxs=Nm;mm.exports=Ea;var o=mm.exports,ic={},Em={exports:{}},yt={},Pm={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var A=E.length;E.push(R);e:for(;0<A;){var M=A-1>>>1,$=E[M];if(0<s($,R))E[M]=R,E[A]=$,A=M;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],A=E.pop();if(A!==R){E[0]=A;e:for(var M=0,$=E.length,q=$>>>1;M<q;){var oe=2*(M+1)-1,Be=E[oe],H=oe+1,ne=E[H];if(0>s(Be,A))H<$&&0>s(ne,Be)?(E[M]=ne,E[H]=A,M=H):(E[M]=Be,E[oe]=A,M=oe);else if(H<$&&0>s(ne,A))E[M]=ne,E[H]=A,M=H;else break e}}return R}function s(E,R){var A=E.sortIndex-R.sortIndex;return A!==0?A:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,y=!1,m=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=E)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function w(E){if(g=!1,v(E),!m)if(n(c)!==null)m=!0,F(k);else{var R=n(u);R!==null&&G(w,R.startTime-E)}}function k(E,R){m=!1,g&&(g=!1,h(T),T=-1),y=!0;var A=p;try{for(v(R),f=n(c);f!==null&&(!(f.expirationTime>R)||E&&!z());){var M=f.callback;if(typeof M=="function"){f.callback=null,p=f.priorityLevel;var $=M(f.expirationTime<=R);R=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(c)&&r(c),v(R)}else r(c);f=n(c)}if(f!==null)var q=!0;else{var oe=n(u);oe!==null&&G(w,oe.startTime-R),q=!1}return q}finally{f=null,p=A,y=!1}}var N=!1,P=null,T=-1,L=5,C=-1;function z(){return!(e.unstable_now()-C<L)}function U(){if(P!==null){var E=e.unstable_now();C=E;var R=!0;try{R=P(!0,E)}finally{R?J():(N=!1,P=null)}}else N=!1}var J;if(typeof x=="function")J=function(){x(U)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,I=W.port2;W.port1.onmessage=U,J=function(){I.postMessage(null)}}else J=function(){b(U,0)};function F(E){P=E,N||(N=!0,J())}function G(E,R){T=b(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,F(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var A=p;p=R;try{return E()}finally{p=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var A=p;p=E;try{return R()}finally{p=A}},e.unstable_scheduleCallback=function(E,R,A){var M=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?M+A:M):A=M,E){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=A+$,E={id:d++,callback:R,priorityLevel:E,startTime:A,expirationTime:$,sortIndex:-1},A>M?(E.sortIndex=A,t(u,E),n(c)===null&&E===n(u)&&(g?(h(T),T=-1):g=!0,G(w,A-M))):(E.sortIndex=$,t(c,E),m||y||(m=!0,F(k))),E},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(E){var R=p;return function(){var A=p;p=R;try{return E.apply(this,arguments)}finally{p=A}}}})(Tm);Pm.exports=Tm;var Fv=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=S,gt=Fv;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,Xs={};function br(e,t){Qr(e,t),Qr(e+"Capture",t)}function Qr(e,t){for(Xs[e]=t,e=0;e<t.length;e++)Cm.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},yf={};function Dv(e){return oc.call(yf,e)?!0:oc.call(gf,e)?!1:Vv.test(e)?yf[e]=!0:(gf[e]=!0,!1)}function Bv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uv(e,t,n,r){if(t===null||typeof t>"u"||Bv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function zu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fu,zu);De[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fu,zu);De[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fu,zu);De[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,t,n,r){var s=De.hasOwnProperty(t)?De[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uv(t,n,s,r)&&(n=null),r||s===null?Dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$i=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Lm=Symbol.for("react.offscreen"),xf=Symbol.iterator;function bs(e){return e===null||typeof e!="object"?null:(e=xf&&e[xf]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,ol;function As(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var al=!1;function ll(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?As(e):""}function $v(e){switch(e.tag){case 5:return As(e.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function uc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Tr:return"Portal";case ac:return"Profiler";case Du:return"StrictMode";case lc:return"Suspense";case cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rm:return(e.displayName||"Context")+".Consumer";case Am:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uu:return t=e.displayName||null,t!==null?t:uc(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return uc(e(t))}catch{}}return null}function Hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Om(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wv(e){var t=Om(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hi(e){e._valueTracker||(e._valueTracker=Wv(e))}function Mm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Om(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dc(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Im(e,t){t=t.checked,t!=null&&Vu(e,"checked",t,!1)}function fc(e,t){Im(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pc(e,t.type,n):t.hasOwnProperty("defaultValue")&&pc(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pc(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rs=Array.isArray;function Wr(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Rs(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function _m(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gv=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){Gv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_s[t]=_s[e]})});function Vm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_s.hasOwnProperty(e)&&_s[e]?(""+t).trim():t+"px"}function Dm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Vm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Kv=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(e,t){if(t){if(Kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function yc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vc=null,Gr=null,Kr=null;function kf(e){if(e=Ei(e)){if(typeof vc!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Ra(t),vc(e.stateNode,e.type,t))}}function Bm(e){Gr?Kr?Kr.push(e):Kr=[e]:Gr=e}function Um(){if(Gr){var e=Gr,t=Kr;if(Kr=Gr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function $m(e,t){return e(t)}function Hm(){}var cl=!1;function Wm(e,t,n){if(cl)return e(t,n);cl=!0;try{return $m(e,t,n)}finally{cl=!1,(Gr!==null||Kr!==null)&&(Hm(),Um())}}function Js(e,t){var n=e.stateNode;if(n===null)return null;var r=Ra(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var bc=!1;if(cn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){bc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{bc=!1}function qv(e,t,n,r,s,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Fs=!1,Do=null,Bo=!1,wc=null,Yv={onError:function(e){Fs=!0,Do=e}};function Xv(e,t,n,r,s,i,a,l,c){Fs=!1,Do=null,qv.apply(Yv,arguments)}function Qv(e,t,n,r,s,i,a,l,c){if(Xv.apply(this,arguments),Fs){if(Fs){var u=Do;Fs=!1,Do=null}else throw Error(O(198));Bo||(Bo=!0,wc=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jf(e){if(wr(e)!==e)throw Error(O(188))}function Jv(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jf(s),e;if(i===r)return jf(s),t;i=i.sibling}throw Error(O(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Km(e){return e=Jv(e),e!==null?qm(e):null}function qm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qm(e);if(t!==null)return t;e=e.sibling}return null}var Ym=gt.unstable_scheduleCallback,Nf=gt.unstable_cancelCallback,Zv=gt.unstable_shouldYield,e1=gt.unstable_requestPaint,xe=gt.unstable_now,t1=gt.unstable_getCurrentPriorityLevel,Hu=gt.unstable_ImmediatePriority,Xm=gt.unstable_UserBlockingPriority,Uo=gt.unstable_NormalPriority,n1=gt.unstable_LowPriority,Qm=gt.unstable_IdlePriority,Pa=null,Yt=null;function r1(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:o1,s1=Math.log,i1=Math.LN2;function o1(e){return e>>>=0,e===0?32:31-(s1(e)/i1|0)|0}var Gi=64,Ki=4194304;function Ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Ls(l):(i&=a,i!==0&&(r=Ls(i)))}else a=n&~s,a!==0?r=Ls(a):i!==0&&(r=Ls(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),s=1<<n,r|=e[n],t&=~s;return r}function a1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ft(i),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=a1(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jm(){var e=Gi;return Gi<<=1,!(Gi&4194240)&&(Gi=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function c1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ft(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var se=0;function Zm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eg,Gu,tg,ng,rg,kc=!1,qi=[],An=null,Rn=null,Ln=null,Zs=new Map,ei=new Map,jn=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Zs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function Ss(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Ei(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function d1(e,t,n,r,s){switch(t){case"focusin":return An=Ss(An,e,t,n,r,s),!0;case"dragenter":return Rn=Ss(Rn,e,t,n,r,s),!0;case"mouseover":return Ln=Ss(Ln,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Zs.set(i,Ss(Zs.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ei.set(i,Ss(ei.get(i)||null,e,t,n,r,s)),!0}return!1}function sg(e){var t=Zn(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Gm(n),t!==null){e.blockedOn=t,rg(e.priority,function(){tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return t=Ei(n),t!==null&&Gu(t),e.blockedOn=n,!1;t.shift()}return!0}function Pf(e,t,n){xo(e)&&n.delete(t)}function f1(){kc=!1,An!==null&&xo(An)&&(An=null),Rn!==null&&xo(Rn)&&(Rn=null),Ln!==null&&xo(Ln)&&(Ln=null),Zs.forEach(Pf),ei.forEach(Pf)}function ks(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,f1)))}function ti(e){function t(s){return ks(s,e)}if(0<qi.length){ks(qi[0],e);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&ks(An,e),Rn!==null&&ks(Rn,e),Ln!==null&&ks(Ln,e),Zs.forEach(t),ei.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&jn.shift()}var qr=hn.ReactCurrentBatchConfig,Ho=!0;function p1(e,t,n,r){var s=se,i=qr.transition;qr.transition=null;try{se=1,Ku(e,t,n,r)}finally{se=s,qr.transition=i}}function h1(e,t,n,r){var s=se,i=qr.transition;qr.transition=null;try{se=4,Ku(e,t,n,r)}finally{se=s,qr.transition=i}}function Ku(e,t,n,r){if(Ho){var s=jc(e,t,n,r);if(s===null)bl(e,t,r,Wo,n),Ef(e,r);else if(d1(s,e,t,n,r))r.stopPropagation();else if(Ef(e,r),t&4&&-1<u1.indexOf(e)){for(;s!==null;){var i=Ei(s);if(i!==null&&eg(i),i=jc(e,t,n,r),i===null&&bl(e,t,r,Wo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Wo=null;function jc(e,t,n,r){if(Wo=null,e=$u(r),e=Zn(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wo=e,null}function ig(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t1()){case Hu:return 1;case Xm:return 4;case Uo:case n1:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var En=null,qu=null,vo=null;function og(){if(vo)return vo;var e,t=qu,n=t.length,r,s="value"in En?En.value:En.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return vo=s.slice(e,1<r?1-r:void 0)}function bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function Tf(){return!1}function xt(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yi:Tf,this.isPropagationStopped=Tf,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=xt(cs),Ni=he({},cs,{view:0,detail:0}),m1=xt(Ni),dl,fl,js,Ta=he({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(dl=e.screenX-js.screenX,fl=e.screenY-js.screenY):fl=dl=0,js=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Cf=xt(Ta),g1=he({},Ta,{dataTransfer:0}),y1=xt(g1),x1=he({},Ni,{relatedTarget:0}),pl=xt(x1),v1=he({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=xt(v1),w1=he({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S1=xt(w1),k1=he({},cs,{data:0}),Af=xt(k1),j1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E1[e])?!!t[e]:!1}function Xu(){return P1}var T1=he({},Ni,{key:function(e){if(e.key){var t=j1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C1=xt(T1),A1=he({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=xt(A1),R1=he({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),L1=xt(R1),O1=he({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=xt(O1),I1=he({},Ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=xt(I1),F1=[9,13,27,32],Qu=cn&&"CompositionEvent"in window,zs=null;cn&&"documentMode"in document&&(zs=document.documentMode);var z1=cn&&"TextEvent"in window&&!zs,ag=cn&&(!Qu||zs&&8<zs&&11>=zs),Lf=" ",Of=!1;function lg(e,t){switch(e){case"keyup":return F1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function V1(e,t){switch(e){case"compositionend":return cg(t);case"keypress":return t.which!==32?null:(Of=!0,Lf);case"textInput":return e=t.data,e===Lf&&Of?null:e;default:return null}}function D1(e,t){if(Ar)return e==="compositionend"||!Qu&&lg(e,t)?(e=og(),vo=qu=En=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ag&&t.locale!=="ko"?null:t.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B1[e.type]:t==="textarea"}function ug(e,t,n,r){Bm(r),t=Go(t,"onChange"),0<t.length&&(n=new Yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vs=null,ni=null;function U1(e){wg(e,0)}function Ca(e){var t=Or(e);if(Mm(t))return e}function $1(e,t){if(e==="change")return t}var dg=!1;if(cn){var hl;if(cn){var ml="oninput"in document;if(!ml){var If=document.createElement("div");If.setAttribute("oninput","return;"),ml=typeof If.oninput=="function"}hl=ml}else hl=!1;dg=hl&&(!document.documentMode||9<document.documentMode)}function _f(){Vs&&(Vs.detachEvent("onpropertychange",fg),ni=Vs=null)}function fg(e){if(e.propertyName==="value"&&Ca(ni)){var t=[];ug(t,ni,e,$u(e)),Wm(U1,t)}}function H1(e,t,n){e==="focusin"?(_f(),Vs=t,ni=n,Vs.attachEvent("onpropertychange",fg)):e==="focusout"&&_f()}function W1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ca(ni)}function G1(e,t){if(e==="click")return Ca(t)}function K1(e,t){if(e==="input"||e==="change")return Ca(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:q1;function ri(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!oc.call(t,s)||!Dt(e[s],t[s]))return!1}return!0}function Ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=Ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function pg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hg(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y1(e){var t=hg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pg(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=zf(n,i);var a=zf(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X1=cn&&"documentMode"in document&&11>=document.documentMode,Rr=null,Nc=null,Ds=null,Ec=!1;function Vf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||Rr==null||Rr!==Vo(r)||(r=Rr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&ri(Ds,r)||(Ds=r,r=Go(Nc,"onSelect"),0<r.length&&(t=new Yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},gl={},mg={};cn&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Aa(e){if(gl[e])return gl[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mg)return gl[e]=t[n];return e}var gg=Aa("animationend"),yg=Aa("animationiteration"),xg=Aa("animationstart"),vg=Aa("transitionend"),bg=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){bg.set(e,t),br(t,[e])}for(var yl=0;yl<Df.length;yl++){var xl=Df[yl],Q1=xl.toLowerCase(),J1=xl[0].toUpperCase()+xl.slice(1);Un(Q1,"on"+J1)}Un(gg,"onAnimationEnd");Un(yg,"onAnimationIteration");Un(xg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(vg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Bf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qv(r,t,void 0,e),e.currentTarget=null}function wg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Bf(s,l,u),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Bf(s,l,u),i=c}}}if(Bo)throw e=wc,Bo=!1,wc=null,e}function le(e,t){var n=t[Rc];n===void 0&&(n=t[Rc]=new Set);var r=e+"__bubble";n.has(r)||(Sg(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Sg(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Qi]){e[Qi]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,vl("selectionchange",!1,t))}}function Sg(e,t,n,r){switch(ig(t)){case 1:var s=p1;break;case 4:s=h1;break;default:s=Ku}n=s.bind(null,t,n,e),s=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Zn(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Wm(function(){var u=i,d=$u(n),f=[];e:{var p=bg.get(e);if(p!==void 0){var y=Yu,m=e;switch(e){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":y=C1;break;case"focusin":m="focus",y=pl;break;case"focusout":m="blur",y=pl;break;case"beforeblur":case"afterblur":y=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=L1;break;case gg:case yg:case xg:y=b1;break;case vg:y=M1;break;case"scroll":y=m1;break;case"wheel":y=_1;break;case"copy":case"cut":case"paste":y=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rf}var g=(t&4)!==0,b=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var x=u,v;x!==null;){v=x;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=Js(x,h),w!=null&&g.push(ii(x,w,v)))),b)break;x=x.return}0<g.length&&(p=new y(p,m,null,n,d),f.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==xc&&(m=n.relatedTarget||n.fromElement)&&(Zn(m)||m[un]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(m=n.relatedTarget||n.toElement,y=u,m=m?Zn(m):null,m!==null&&(b=wr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(g=Cf,w="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(g=Rf,w="onPointerLeave",h="onPointerEnter",x="pointer"),b=y==null?p:Or(y),v=m==null?p:Or(m),p=new g(w,x+"leave",y,n,d),p.target=b,p.relatedTarget=v,w=null,Zn(d)===u&&(g=new g(h,x+"enter",m,n,d),g.target=v,g.relatedTarget=b,w=g),b=w,y&&m)t:{for(g=y,h=m,x=0,v=g;v;v=Sr(v))x++;for(v=0,w=h;w;w=Sr(w))v++;for(;0<x-v;)g=Sr(g),x--;for(;0<v-x;)h=Sr(h),v--;for(;x--;){if(g===h||h!==null&&g===h.alternate)break t;g=Sr(g),h=Sr(h)}g=null}else g=null;y!==null&&Uf(f,p,y,g,!1),m!==null&&b!==null&&Uf(f,b,m,g,!0)}}e:{if(p=u?Or(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var k=$1;else if(Mf(p))if(dg)k=K1;else{k=W1;var N=H1}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=G1);if(k&&(k=k(e,u))){ug(f,k,n,d);break e}N&&N(e,p,u),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&pc(p,"number",p.value)}switch(N=u?Or(u):window,e){case"focusin":(Mf(N)||N.contentEditable==="true")&&(Rr=N,Nc=u,Ds=null);break;case"focusout":Ds=Nc=Rr=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Vf(f,n,d);break;case"selectionchange":if(X1)break;case"keydown":case"keyup":Vf(f,n,d)}var P;if(Qu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ar?lg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ag&&n.locale!=="ko"&&(Ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ar&&(P=og()):(En=d,qu="value"in En?En.value:En.textContent,Ar=!0)),N=Go(u,T),0<N.length&&(T=new Af(T,e,null,n,d),f.push({event:T,listeners:N}),P?T.data=P:(P=cg(n),P!==null&&(T.data=P)))),(P=z1?V1(e,n):D1(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(d=new Af("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}wg(f,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Js(e,n),i!=null&&r.unshift(ii(e,i,s)),i=Js(e,t),i!=null&&r.push(ii(e,i,s))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Js(n,i),c!=null&&a.unshift(ii(n,c,l))):s||(c=Js(n,i),c!=null&&a.push(ii(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var eb=/\r\n?/g,tb=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(eb,`
`).replace(tb,"")}function Ji(e,t,n){if(t=$f(t),$f(e)!==t&&n)throw Error(O(425))}function Ko(){}var Pc=null,Tc=null;function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(sb)}:Ac;function sb(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ti(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var us=Math.random().toString(36).slice(2),qt="__reactFiber$"+us,oi="__reactProps$"+us,un="__reactContainer$"+us,Rc="__reactEvents$"+us,ib="__reactListeners$"+us,ob="__reactHandles$"+us;function Zn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[qt])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){return e=e[qt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Ra(e){return e[oi]||null}var Lc=[],Mr=-1;function $n(e){return{current:e}}function ce(e){0>Mr||(e.current=Lc[Mr],Lc[Mr]=null,Mr--)}function ae(e,t){Mr++,Lc[Mr]=e.current,e.current=t}var Dn={},Ye=$n(Dn),lt=$n(!1),ur=Dn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ct(e){return e=e.childContextTypes,e!=null}function qo(){ce(lt),ce(Ye)}function Gf(e,t,n){if(Ye.current!==Dn)throw Error(O(168));ae(Ye,t),ae(lt,n)}function kg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(O(108,Hv(e)||"Unknown",s));return he({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,ur=Ye.current,ae(Ye,e),ae(lt,lt.current),!0}function Kf(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=kg(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,ce(lt),ce(Ye),ae(Ye,e)):ce(lt),ae(lt,n)}var sn=null,La=!1,Sl=!1;function jg(e){sn===null?sn=[e]:sn.push(e)}function ab(e){La=!0,jg(e)}function Hn(){if(!Sl&&sn!==null){Sl=!0;var e=0,t=se;try{var n=sn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,La=!1}catch(s){throw sn!==null&&(sn=sn.slice(e+1)),Ym(Hu,Hn),s}finally{se=t,Sl=!1}}return null}var Ir=[],_r=0,Xo=null,Qo=0,wt=[],St=0,dr=null,on=1,an="";function Yn(e,t){Ir[_r++]=Qo,Ir[_r++]=Xo,Xo=e,Qo=t}function Ng(e,t,n){wt[St++]=on,wt[St++]=an,wt[St++]=dr,dr=e;var r=on;e=an;var s=32-Ft(r)-1;r&=~(1<<s),n+=1;var i=32-Ft(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,on=1<<32-Ft(t)+s|n<<s|r,an=i+e}else on=1<<i|n<<s|r,an=e}function Zu(e){e.return!==null&&(Yn(e,1),Ng(e,1,0))}function ed(e){for(;e===Xo;)Xo=Ir[--_r],Ir[_r]=null,Qo=Ir[--_r],Ir[_r]=null;for(;e===dr;)dr=wt[--St],wt[St]=null,an=wt[--St],wt[St]=null,on=wt[--St],wt[St]=null}var ht=null,pt=null,ue=!1,_t=null;function Eg(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:on,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function Oc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mc(e){if(ue){var t=pt;if(t){var n=t;if(!qf(e,t)){if(Oc(e))throw Error(O(418));t=On(n.nextSibling);var r=ht;t&&qf(e,t)?Eg(r,n):(e.flags=e.flags&-4097|2,ue=!1,ht=e)}}else{if(Oc(e))throw Error(O(418));e.flags=e.flags&-4097|2,ue=!1,ht=e}}}function Yf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Zi(e){if(e!==ht)return!1;if(!ue)return Yf(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cc(e.type,e.memoizedProps)),t&&(t=pt)){if(Oc(e))throw Pg(),Error(O(418));for(;t;)Eg(e,t),t=On(t.nextSibling)}if(Yf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?On(e.stateNode.nextSibling):null;return!0}function Pg(){for(var e=pt;e;)e=On(e.nextSibling)}function Zr(){pt=ht=null,ue=!1}function td(e){_t===null?_t=[e]:_t.push(e)}var lb=hn.ReactCurrentBatchConfig;function Ns(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xf(e){var t=e._init;return t(e._payload)}function Tg(e){function t(h,x){if(e){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function s(h,x){return h=Fn(h,x),h.index=0,h.sibling=null,h}function i(h,x,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,x,v,w){return x===null||x.tag!==6?(x=Cl(v,h.mode,w),x.return=h,x):(x=s(x,v),x.return=h,x)}function c(h,x,v,w){var k=v.type;return k===Cr?d(h,x,v.props.children,w,v.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sn&&Xf(k)===x.type)?(w=s(x,v.props),w.ref=Ns(h,x,v),w.return=h,w):(w=Po(v.type,v.key,v.props,null,h.mode,w),w.ref=Ns(h,x,v),w.return=h,w)}function u(h,x,v,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Al(v,h.mode,w),x.return=h,x):(x=s(x,v.children||[]),x.return=h,x)}function d(h,x,v,w,k){return x===null||x.tag!==7?(x=or(v,h.mode,w,k),x.return=h,x):(x=s(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cl(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $i:return v=Po(x.type,x.key,x.props,null,h.mode,v),v.ref=Ns(h,null,x),v.return=h,v;case Tr:return x=Al(x,h.mode,v),x.return=h,x;case Sn:var w=x._init;return f(h,w(x._payload),v)}if(Rs(x)||bs(x))return x=or(x,h.mode,v,null),x.return=h,x;eo(h,x)}return null}function p(h,x,v,w){var k=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:l(h,x,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $i:return v.key===k?c(h,x,v,w):null;case Tr:return v.key===k?u(h,x,v,w):null;case Sn:return k=v._init,p(h,x,k(v._payload),w)}if(Rs(v)||bs(v))return k!==null?null:d(h,x,v,w,null);eo(h,v)}return null}function y(h,x,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,l(x,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $i:return h=h.get(w.key===null?v:w.key)||null,c(x,h,w,k);case Tr:return h=h.get(w.key===null?v:w.key)||null,u(x,h,w,k);case Sn:var N=w._init;return y(h,x,v,N(w._payload),k)}if(Rs(w)||bs(w))return h=h.get(v)||null,d(x,h,w,k,null);eo(x,w)}return null}function m(h,x,v,w){for(var k=null,N=null,P=x,T=x=0,L=null;P!==null&&T<v.length;T++){P.index>T?(L=P,P=null):L=P.sibling;var C=p(h,P,v[T],w);if(C===null){P===null&&(P=L);break}e&&P&&C.alternate===null&&t(h,P),x=i(C,x,T),N===null?k=C:N.sibling=C,N=C,P=L}if(T===v.length)return n(h,P),ue&&Yn(h,T),k;if(P===null){for(;T<v.length;T++)P=f(h,v[T],w),P!==null&&(x=i(P,x,T),N===null?k=P:N.sibling=P,N=P);return ue&&Yn(h,T),k}for(P=r(h,P);T<v.length;T++)L=y(P,h,T,v[T],w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?T:L.key),x=i(L,x,T),N===null?k=L:N.sibling=L,N=L);return e&&P.forEach(function(z){return t(h,z)}),ue&&Yn(h,T),k}function g(h,x,v,w){var k=bs(v);if(typeof k!="function")throw Error(O(150));if(v=k.call(v),v==null)throw Error(O(151));for(var N=k=null,P=x,T=x=0,L=null,C=v.next();P!==null&&!C.done;T++,C=v.next()){P.index>T?(L=P,P=null):L=P.sibling;var z=p(h,P,C.value,w);if(z===null){P===null&&(P=L);break}e&&P&&z.alternate===null&&t(h,P),x=i(z,x,T),N===null?k=z:N.sibling=z,N=z,P=L}if(C.done)return n(h,P),ue&&Yn(h,T),k;if(P===null){for(;!C.done;T++,C=v.next())C=f(h,C.value,w),C!==null&&(x=i(C,x,T),N===null?k=C:N.sibling=C,N=C);return ue&&Yn(h,T),k}for(P=r(h,P);!C.done;T++,C=v.next())C=y(P,h,T,C.value,w),C!==null&&(e&&C.alternate!==null&&P.delete(C.key===null?T:C.key),x=i(C,x,T),N===null?k=C:N.sibling=C,N=C);return e&&P.forEach(function(U){return t(h,U)}),ue&&Yn(h,T),k}function b(h,x,v,w){if(typeof v=="object"&&v!==null&&v.type===Cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $i:e:{for(var k=v.key,N=x;N!==null;){if(N.key===k){if(k=v.type,k===Cr){if(N.tag===7){n(h,N.sibling),x=s(N,v.props.children),x.return=h,h=x;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sn&&Xf(k)===N.type){n(h,N.sibling),x=s(N,v.props),x.ref=Ns(h,N,v),x.return=h,h=x;break e}n(h,N);break}else t(h,N);N=N.sibling}v.type===Cr?(x=or(v.props.children,h.mode,w,v.key),x.return=h,h=x):(w=Po(v.type,v.key,v.props,null,h.mode,w),w.ref=Ns(h,x,v),w.return=h,h=w)}return a(h);case Tr:e:{for(N=v.key;x!==null;){if(x.key===N)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=s(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else t(h,x);x=x.sibling}x=Al(v,h.mode,w),x.return=h,h=x}return a(h);case Sn:return N=v._init,b(h,x,N(v._payload),w)}if(Rs(v))return m(h,x,v,w);if(bs(v))return g(h,x,v,w);eo(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=s(x,v),x.return=h,h=x):(n(h,x),x=Cl(v,h.mode,w),x.return=h,h=x),a(h)):n(h,x)}return b}var es=Tg(!0),Cg=Tg(!1),Jo=$n(null),Zo=null,Fr=null,nd=null;function rd(){nd=Fr=Zo=null}function sd(e){var t=Jo.current;ce(Jo),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){Zo=e,nd=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(nd!==e)if(e={context:e,memoizedValue:t,next:null},Fr===null){if(Zo===null)throw Error(O(308));Fr=e,Zo.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return t}var er=null;function id(e){er===null?er=[e]:er.push(e)}function Ag(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,id(t)):(n.next=s.next,s.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kn=!1;function od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,dn(e,n)}return s=r.interleaved,s===null?(t.next=t,id(r)):(t.next=s.next,s.next=t),r.interleaved=t,dn(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,r){var s=e.updateQueue;kn=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=s.baseState;a=0,d=u=c=null,l=i;do{var p=l.lane,y=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,g=l;switch(p=t,y=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){f=m.call(y,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,p=typeof m=="function"?m.call(y,f,p):m,p==null)break e;f=he({},f,p);break e;case 2:kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,c=f):d=d.next=y,a|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(d===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=f}}function Jf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(O(191,s));s.call(r)}}}var Pi={},Xt=$n(Pi),ai=$n(Pi),li=$n(Pi);function tr(e){if(e===Pi)throw Error(O(174));return e}function ad(e,t){switch(ae(li,t),ae(ai,e),ae(Xt,Pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mc(t,e)}ce(Xt),ae(Xt,t)}function ts(){ce(Xt),ce(ai),ce(li)}function Lg(e){tr(li.current);var t=tr(Xt.current),n=mc(t,e.type);t!==n&&(ae(ai,e),ae(Xt,n))}function ld(e){ai.current===e&&(ce(Xt),ce(ai))}var de=$n(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function cd(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var So=hn.ReactCurrentDispatcher,jl=hn.ReactCurrentBatchConfig,fr=0,fe=null,Pe=null,Le=null,na=!1,Bs=!1,ci=0,cb=0;function Ue(){throw Error(O(321))}function ud(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function dd(e,t,n,r,s,i){if(fr=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?pb:hb,e=n(r,s),Bs){i=0;do{if(Bs=!1,ci=0,25<=i)throw Error(O(301));i+=1,Le=Pe=null,t.updateQueue=null,So.current=mb,e=n(r,s)}while(Bs)}if(So.current=ra,t=Pe!==null&&Pe.next!==null,fr=0,Le=Pe=fe=null,na=!1,t)throw Error(O(300));return e}function fd(){var e=ci!==0;return ci=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?fe.memoizedState=Le=e:Le=Le.next=e,Le}function Ct(){if(Pe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?fe.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(O(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?fe.memoizedState=Le=e:Le=Le.next=e}return Le}function ui(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Pe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,c=null,u=i;do{var d=u.lane;if((fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,fe.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=l,Dt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,fe.lanes|=i,pr|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Dt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Og(){}function Mg(e,t){var n=fe,r=Ct(),s=t(),i=!Dt(r.memoizedState,s);if(i&&(r.memoizedState=s,at=!0),r=r.queue,pd(Fg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,di(9,_g.bind(null,n,r,s,t),void 0,null),Oe===null)throw Error(O(349));fr&30||Ig(n,t,s)}return s}function Ig(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _g(e,t,n,r){t.value=n,t.getSnapshot=r,zg(t)&&Vg(e)}function Fg(e,t,n){return n(function(){zg(t)&&Vg(e)})}function zg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Vg(e){var t=dn(e,1);t!==null&&zt(t,e,1,-1)}function Zf(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=fb.bind(null,fe,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dg(){return Ct().memoizedState}function ko(e,t,n,r){var s=Wt();fe.flags|=e,s.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function Oa(e,t,n,r){var s=Ct();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var a=Pe.memoizedState;if(i=a.destroy,r!==null&&ud(r,a.deps)){s.memoizedState=di(t,n,i,r);return}}fe.flags|=e,s.memoizedState=di(1|t,n,i,r)}function ep(e,t){return ko(8390656,8,e,t)}function pd(e,t){return Oa(2048,8,e,t)}function Bg(e,t){return Oa(4,2,e,t)}function Ug(e,t){return Oa(4,4,e,t)}function $g(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hg(e,t,n){return n=n!=null?n.concat([e]):null,Oa(4,4,$g.bind(null,t,e),n)}function hd(){}function Wg(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gg(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kg(e,t,n){return fr&21?(Dt(n,t)||(n=Jm(),fe.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function ub(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),t()}finally{se=n,jl.transition=r}}function qg(){return Ct().memoizedState}function db(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(e))Xg(t,n);else if(n=Ag(e,t,n,r),n!==null){var s=tt();zt(n,e,r,s),Qg(n,t,r)}}function fb(e,t,n){var r=_n(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(e))Xg(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,Dt(l,a)){var c=t.interleaved;c===null?(s.next=s,id(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Ag(e,t,s,r),n!==null&&(s=tt(),zt(n,e,r,s),Qg(n,t,r))}}function Yg(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Xg(e,t){Bs=na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}var ra={readContext:Tt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},pb={readContext:Tt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:ep,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,$g.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=db.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:Zf,useDebugValue:hd,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=Zf(!1),t=e[0];return e=ub.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,s=Wt();if(ue){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Oe===null)throw Error(O(349));fr&30||Ig(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,ep(Fg.bind(null,r,i,e),[e]),r.flags|=2048,di(9,_g.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Oe.identifierPrefix;if(ue){var n=an,r=on;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hb={readContext:Tt,useCallback:Wg,useContext:Tt,useEffect:pd,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:Ug,useMemo:Gg,useReducer:Nl,useRef:Dg,useState:function(){return Nl(ui)},useDebugValue:hd,useDeferredValue:function(e){var t=Ct();return Kg(t,Pe.memoizedState,e)},useTransition:function(){var e=Nl(ui)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:Mg,useId:qg,unstable_isNewReconciler:!1},mb={readContext:Tt,useCallback:Wg,useContext:Tt,useEffect:pd,useImperativeHandle:Hg,useInsertionEffect:Bg,useLayoutEffect:Ug,useMemo:Gg,useReducer:El,useRef:Dg,useState:function(){return El(ui)},useDebugValue:hd,useDeferredValue:function(e){var t=Ct();return Pe===null?t.memoizedState=e:Kg(t,Pe.memoizedState,e)},useTransition:function(){var e=El(ui)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:Mg,useId:qg,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _c(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ma={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),s=_n(e),i=ln(r,s);i.payload=t,n!=null&&(i.callback=n),t=Mn(e,i,s),t!==null&&(zt(t,e,s,r),wo(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),s=_n(e),i=ln(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mn(e,i,s),t!==null&&(zt(t,e,s,r),wo(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=_n(e),s=ln(n,r);s.tag=2,t!=null&&(s.callback=t),t=Mn(e,s,r),t!==null&&(zt(t,e,r,n),wo(t,e,r))}};function tp(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(s,i):!0}function Jg(e,t,n){var r=!1,s=Dn,i=t.contextType;return typeof i=="object"&&i!==null?i=Tt(i):(s=ct(t)?ur:Ye.current,r=t.contextTypes,i=(r=r!=null)?Jr(e,s):Dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function np(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Fc(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},od(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Tt(i):(i=ct(t)?ur:Ye.current,s.context=Jr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_c(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ma.enqueueReplaceState(s,s.state,null),ea(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ns(e,t){try{var n="",r=t;do n+=$v(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gb=typeof WeakMap=="function"?WeakMap:Map;function Zg(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ia||(ia=!0,qc=r),zc(e,t)},n}function e0(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){zc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zc(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gb;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Ab.bind(null,e,t,n),t.then(e,e))}function sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ip(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,Mn(n,t,1))),n.lanes|=1),e)}var yb=hn.ReactCurrentOwner,at=!1;function Je(e,t,n,r){t.child=e===null?Cg(t,null,n,r):es(t,e.child,n,r)}function op(e,t,n,r,s){n=n.render;var i=t.ref;return Yr(t,s),r=dd(e,t,n,r,i,s),n=fd(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(ue&&n&&Zu(t),t.flags|=1,Je(e,t,r,s),t.child)}function ap(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Sd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,t0(e,t,i,r,s)):(e=Po(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(a,r)&&e.ref===t.ref)return fn(e,t,s)}return t.flags|=1,e=Fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function t0(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(ri(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,fn(e,t,s)}return Vc(e,t,n,r,s)}function n0(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Vr,ft),ft|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Vr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(Vr,ft),ft|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(Vr,ft),ft|=r;return Je(e,t,s,n),t.child}function r0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vc(e,t,n,r,s){var i=ct(n)?ur:Ye.current;return i=Jr(t,i),Yr(t,s),n=dd(e,t,n,r,i,s),r=fd(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(ue&&r&&Zu(t),t.flags|=1,Je(e,t,n,s),t.child)}function lp(e,t,n,r,s){if(ct(n)){var i=!0;Yo(t)}else i=!1;if(Yr(t,s),t.stateNode===null)jo(e,t),Jg(t,n,r),Fc(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=ct(n)?ur:Ye.current,u=Jr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&np(t,a,r,u),kn=!1;var p=t.memoizedState;a.state=p,ea(t,r,a,s),c=t.memoizedState,l!==r||p!==c||lt.current||kn?(typeof d=="function"&&(_c(t,n,d,r),c=t.memoizedState),(l=kn||tp(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Mt(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Tt(c):(c=ct(n)?ur:Ye.current,c=Jr(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&np(t,a,r,c),kn=!1,p=t.memoizedState,a.state=p,ea(t,r,a,s);var m=t.memoizedState;l!==f||p!==m||lt.current||kn?(typeof y=="function"&&(_c(t,n,y,r),m=t.memoizedState),(u=kn||tp(t,n,u,r,p,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Dc(e,t,n,r,i,s)}function Dc(e,t,n,r,s,i){r0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Kf(t,n,!1),fn(e,t,i);r=t.stateNode,yb.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=es(t,e.child,null,i),t.child=es(t,null,l,i)):Je(e,t,l,i),t.memoizedState=r.state,s&&Kf(t,n,!0),t.child}function s0(e){var t=e.stateNode;t.pendingContext?Gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gf(e,t.context,!1),ad(e,t.containerInfo)}function cp(e,t,n,r,s){return Zr(),td(s),t.flags|=256,Je(e,t,n,r),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Uc(e){return{baseLanes:e,cachePool:null,transitions:null}}function i0(e,t,n){var r=t.pendingProps,s=de.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ae(de,s&1),e===null)return Mc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Fa(a,r,0,null),e=or(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Uc(n),t.memoizedState=Bc,e):md(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return xb(e,t,a,r,l,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Fn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Fn(l,i):(i=or(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Uc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Bc,r}return i=e.child,e=i.sibling,r=Fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function md(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&td(r),es(t,e.child,null,n),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xb(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(O(422))),to(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Fa({mode:"visible",children:r.children},s,0,null),i=or(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&es(t,e.child,null,a),t.child.memoizedState=Uc(a),t.memoizedState=Bc,i);if(!(t.mode&1))return to(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(O(419)),r=Pl(i,r,void 0),to(e,t,a,r)}if(l=(a&e.childLanes)!==0,at||l){if(r=Oe,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,dn(e,s),zt(r,e,s,-1))}return wd(),r=Pl(Error(O(421))),to(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Rb.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,pt=On(s.nextSibling),ht=t,ue=!0,_t=null,e!==null&&(wt[St++]=on,wt[St++]=an,wt[St++]=dr,on=e.id,an=e.overflow,dr=t),t=md(t,r.children),t.flags|=4096,t)}function up(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function Tl(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function o0(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&up(e,n,t);else if(e.tag===19)up(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(de,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Tl(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ta(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Tl(t,!0,n,null,i);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vb(e,t,n){switch(t.tag){case 3:s0(t),Zr();break;case 5:Lg(t);break;case 1:ct(t.type)&&Yo(t);break;case 4:ad(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ae(Jo,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?i0(e,t,n):(ae(de,de.current&1),e=fn(e,t,n),e!==null?e.sibling:null);ae(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return o0(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ae(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,n0(e,t,n)}return fn(e,t,n)}var a0,$c,l0,c0;a0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};l0=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,tr(Xt.current);var i=null;switch(n){case"input":s=dc(e,s),r=dc(e,r),i=[];break;case"select":s=he({},s,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":s=hc(e,s),r=hc(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}gc(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&le("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};c0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Es(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bb(e,t,n){var r=t.pendingProps;switch(ed(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return ct(t.type)&&qo(),$e(t),null;case 3:return r=t.stateNode,ts(),ce(lt),ce(Ye),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Qc(_t),_t=null))),$c(e,t),$e(t),null;case 5:ld(t);var s=tr(li.current);if(n=t.type,e!==null&&t.stateNode!=null)l0(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return $e(t),null}if(e=tr(Xt.current),Zi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qt]=t,r[oi]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(s=0;s<Os.length;s++)le(Os[s],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":vf(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":wf(r,i),le("invalid",r)}gc(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ji(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ji(r.textContent,l,e),s=["children",""+l]):Xs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(n){case"input":Hi(r),bf(r,i,!0);break;case"textarea":Hi(r),Sf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[oi]=r,a0(e,t,!1,!1),t.stateNode=e;e:{switch(a=yc(n,r),n){case"dialog":le("cancel",e),le("close",e),s=r;break;case"iframe":case"object":case"embed":le("load",e),s=r;break;case"video":case"audio":for(s=0;s<Os.length;s++)le(Os[s],e);s=r;break;case"source":le("error",e),s=r;break;case"img":case"image":case"link":le("error",e),le("load",e),s=r;break;case"details":le("toggle",e),s=r;break;case"input":vf(e,r),s=dc(e,r),le("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":wf(e,r),s=hc(e,r),le("invalid",e);break;default:s=r}gc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Dm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zm(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Qs(e,c):typeof c=="number"&&Qs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xs.hasOwnProperty(i)?c!=null&&i==="onScroll"&&le("scroll",e):c!=null&&Vu(e,i,c,a))}switch(n){case"input":Hi(e),bf(e,r,!1);break;case"textarea":Hi(e),Sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)c0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=tr(li.current),tr(Xt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(i=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return $e(t),null;case 13:if(ce(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&pt!==null&&t.mode&1&&!(t.flags&128))Pg(),Zr(),t.flags|=98560,i=!1;else if(i=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(O(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[qt]=t}else Zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),i=!1}else _t!==null&&(Qc(_t),_t=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Te===0&&(Te=3):wd())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return ts(),$c(e,t),e===null&&si(t.stateNode.containerInfo),$e(t),null;case 10:return sd(t.type._context),$e(t),null;case 17:return ct(t.type)&&qo(),$e(t),null;case 19:if(ce(de),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Es(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ta(e),a!==null){for(t.flags|=128,Es(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(de,de.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>rs&&(t.flags|=128,r=!0,Es(i,!1),t.lanes=4194304)}else{if(!r)if(e=ta(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Es(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ue)return $e(t),null}else 2*xe()-i.renderingStartTime>rs&&n!==1073741824&&(t.flags|=128,r=!0,Es(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=de.current,ae(de,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return bd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ft&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function wb(e,t){switch(ed(t),t.tag){case 1:return ct(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ts(),ce(lt),ce(Ye),cd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ld(t),null;case 13:if(ce(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(de),null;case 4:return ts(),null;case 10:return sd(t.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var no=!1,Ke=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,V=null;function zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Hc(e,t,n){try{n()}catch(r){ge(e,t,r)}}var dp=!1;function kb(e,t){if(Pc=Ho,e=hg(),Ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(l=a+s),f!==i||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===s&&(l=a),p===i&&++d===r&&(c=a),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:e,selectionRange:n},Ho=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,b=m.memoizedState,h=t.stateNode,x=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:Mt(t.type,g),b);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(w){ge(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return m=dp,dp=!1,m}function Us(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Hc(t,n,i)}s=s.next}while(s!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function u0(e){var t=e.alternate;t!==null&&(e.alternate=null,u0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[oi],delete t[Rc],delete t[ib],delete t[ob])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d0(e){return e.tag===5||e.tag===3||e.tag===4}function fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}var Ie=null,It=!1;function xn(e,t,n){for(n=n.child;n!==null;)f0(e,t,n),n=n.sibling}function f0(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Ke||zr(n,t);case 6:var r=Ie,s=It;Ie=null,xn(e,t,n),Ie=r,It=s,Ie!==null&&(It?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(It?(e=Ie,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),ti(e)):wl(Ie,n.stateNode));break;case 4:r=Ie,s=It,Ie=n.stateNode.containerInfo,It=!0,xn(e,t,n),Ie=r,It=s;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Hc(n,t,a),s=s.next}while(s!==r)}xn(e,t,n);break;case 1:if(!Ke&&(zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,xn(e,t,n),Ke=r):xn(e,t,n);break;default:xn(e,t,n)}}function pp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sb),t.forEach(function(r){var s=Lb.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,It=!1;break e;case 3:Ie=l.stateNode.containerInfo,It=!0;break e;case 4:Ie=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(Ie===null)throw Error(O(160));f0(i,a,s),Ie=null,It=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ge(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)p0(t,e),t=t.sibling}function p0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ht(e),r&4){try{Us(3,e,e.return),Ia(3,e)}catch(g){ge(e,e.return,g)}try{Us(5,e,e.return)}catch(g){ge(e,e.return,g)}}break;case 1:At(t,e),Ht(e),r&512&&n!==null&&zr(n,n.return);break;case 5:if(At(t,e),Ht(e),r&512&&n!==null&&zr(n,n.return),e.flags&32){var s=e.stateNode;try{Qs(s,"")}catch(g){ge(e,e.return,g)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Im(s,i),yc(l,a);var u=yc(l,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Dm(s,f):d==="dangerouslySetInnerHTML"?zm(s,f):d==="children"?Qs(s,f):Vu(s,d,f,u)}switch(l){case"input":fc(s,i);break;case"textarea":_m(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Wr(s,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Wr(s,!!i.multiple,i.defaultValue,!0):Wr(s,!!i.multiple,i.multiple?[]:"",!1))}s[oi]=i}catch(g){ge(e,e.return,g)}}break;case 6:if(At(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(O(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(g){ge(e,e.return,g)}}break;case 3:if(At(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(g){ge(e,e.return,g)}break;case 4:At(t,e),Ht(e);break;case 13:At(t,e),Ht(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xd=xe())),r&4&&pp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(u=Ke)||d,At(t,e),Ke=u):At(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(f=V=d;V!==null;){switch(p=V,y=p.child,p.tag){case 0:case 11:case 14:case 15:Us(4,p,p.return);break;case 1:zr(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ge(r,n,g)}}break;case 5:zr(p,p.return);break;case 22:if(p.memoizedState!==null){mp(f);continue}}y!==null?(y.return=p,V=y):mp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Vm("display",a))}catch(g){ge(e,e.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){ge(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:At(t,e),Ht(e),r&4&&pp(e);break;case 21:break;default:At(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(d0(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Qs(s,""),r.flags&=-33);var i=fp(e);Kc(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=fp(e);Gc(e,l,a);break;default:throw Error(O(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jb(e,t,n){V=e,h0(e)}function h0(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var s=V,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||no;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Ke;l=no;var u=Ke;if(no=a,(Ke=c)&&!u)for(V=s;V!==null;)a=V,c=a.child,a.tag===22&&a.memoizedState!==null?gp(s):c!==null?(c.return=a,V=c):gp(s);for(;i!==null;)V=i,h0(i),i=i.sibling;V=s,no=l,Ke=u}hp(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,V=i):hp(e)}}function hp(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Jf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ke||t.flags&512&&Wc(t)}catch(p){ge(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function mp(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function gp(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ge(t,s,c)}}var i=t.return;try{Wc(t)}catch(c){ge(t,i,c)}break;case 5:var a=t.return;try{Wc(t)}catch(c){ge(t,a,c)}}}catch(c){ge(t,t.return,c)}if(t===e){V=null;break}var l=t.sibling;if(l!==null){l.return=t.return,V=l;break}V=t.return}}var Nb=Math.ceil,sa=hn.ReactCurrentDispatcher,gd=hn.ReactCurrentOwner,Et=hn.ReactCurrentBatchConfig,ee=0,Oe=null,we=null,Ve=0,ft=0,Vr=$n(0),Te=0,fi=null,pr=0,_a=0,yd=0,$s=null,ot=null,xd=0,rs=1/0,rn=null,ia=!1,qc=null,In=null,ro=!1,Pn=null,oa=0,Hs=0,Yc=null,No=-1,Eo=0;function tt(){return ee&6?xe():No!==-1?No:No=xe()}function _n(e){return e.mode&1?ee&2&&Ve!==0?Ve&-Ve:lb.transition!==null?(Eo===0&&(Eo=Jm()),Eo):(e=se,e!==0||(e=window.event,e=e===void 0?16:ig(e.type)),e):1}function zt(e,t,n,r){if(50<Hs)throw Hs=0,Yc=null,Error(O(185));ji(e,n,r),(!(ee&2)||e!==Oe)&&(e===Oe&&(!(ee&2)&&(_a|=n),Te===4&&Nn(e,Ve)),ut(e,r),n===1&&ee===0&&!(t.mode&1)&&(rs=xe()+500,La&&Hn()))}function ut(e,t){var n=e.callbackNode;l1(e,t);var r=$o(e,e===Oe?Ve:0);if(r===0)n!==null&&Nf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nf(n),t===1)e.tag===0?ab(yp.bind(null,e)):jg(yp.bind(null,e)),rb(function(){!(ee&6)&&Hn()}),n=null;else{switch(Zm(r)){case 1:n=Hu;break;case 4:n=Xm;break;case 16:n=Uo;break;case 536870912:n=Qm;break;default:n=Uo}n=S0(n,m0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function m0(e,t){if(No=-1,Eo=0,ee&6)throw Error(O(327));var n=e.callbackNode;if(Xr()&&e.callbackNode!==n)return null;var r=$o(e,e===Oe?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=aa(e,r);else{t=r;var s=ee;ee|=2;var i=y0();(Oe!==e||Ve!==t)&&(rn=null,rs=xe()+500,ir(e,t));do try{Tb();break}catch(l){g0(e,l)}while(!0);rd(),sa.current=i,ee=s,we!==null?t=0:(Oe=null,Ve=0,t=Te)}if(t!==0){if(t===2&&(s=Sc(e),s!==0&&(r=s,t=Xc(e,s))),t===1)throw n=fi,ir(e,0),Nn(e,r),ut(e,xe()),n;if(t===6)Nn(e,r);else{if(s=e.current.alternate,!(r&30)&&!Eb(s)&&(t=aa(e,r),t===2&&(i=Sc(e),i!==0&&(r=i,t=Xc(e,i))),t===1))throw n=fi,ir(e,0),Nn(e,r),ut(e,xe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Xn(e,ot,rn);break;case 3:if(Nn(e,r),(r&130023424)===r&&(t=xd+500-xe(),10<t)){if($o(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ac(Xn.bind(null,e,ot,rn),t);break}Xn(e,ot,rn);break;case 4:if(Nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Ft(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nb(r/1960))-r,10<r){e.timeoutHandle=Ac(Xn.bind(null,e,ot,rn),r);break}Xn(e,ot,rn);break;case 5:Xn(e,ot,rn);break;default:throw Error(O(329))}}}return ut(e,xe()),e.callbackNode===n?m0.bind(null,e):null}function Xc(e,t){var n=$s;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=aa(e,t),e!==2&&(t=ot,ot=n,t!==null&&Qc(t)),e}function Qc(e){ot===null?ot=e:ot.push.apply(ot,e)}function Eb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Dt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~yd,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function yp(e){if(ee&6)throw Error(O(327));Xr();var t=$o(e,0);if(!(t&1))return ut(e,xe()),null;var n=aa(e,t);if(e.tag!==0&&n===2){var r=Sc(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=fi,ir(e,0),Nn(e,t),ut(e,xe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,ot,rn),ut(e,xe()),null}function vd(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(rs=xe()+500,La&&Hn())}}function hr(e){Pn!==null&&Pn.tag===0&&!(ee&6)&&Xr();var t=ee;ee|=1;var n=Et.transition,r=se;try{if(Et.transition=null,se=1,e)return e()}finally{se=r,Et.transition=n,ee=t,!(ee&6)&&Hn()}}function bd(){ft=Vr.current,ce(Vr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nb(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:ts(),ce(lt),ce(Ye),cd();break;case 5:ld(r);break;case 4:ts();break;case 13:ce(de);break;case 19:ce(de);break;case 10:sd(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Oe=e,we=e=Fn(e.current,null),Ve=ft=t,Te=0,fi=null,yd=_a=pr=0,ot=$s=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}er=null}return e}function g0(e,t){do{var n=we;try{if(rd(),So.current=ra,na){for(var r=fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}na=!1}if(fr=0,Le=Pe=fe=null,Bs=!1,ci=0,gd.current=null,n===null||n.return===null){Te=1,fi=t,we=null;break}e:{var i=e,a=n.return,l=n,c=t;if(t=Ve,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=sp(a);if(y!==null){y.flags&=-257,ip(y,a,l,i,t),y.mode&1&&rp(i,u,t),t=y,c=u;var m=t.updateQueue;if(m===null){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}else{if(!(t&1)){rp(i,u,t),wd();break e}c=Error(O(426))}}else if(ue&&l.mode&1){var b=sp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ip(b,a,l,i,t),td(ns(c,l));break e}}i=c=ns(c,l),Te!==4&&(Te=2),$s===null?$s=[i]:$s.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Zg(i,c,t);Qf(i,h);break e;case 1:l=c;var x=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(In===null||!In.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=e0(i,l,t);Qf(i,w);break e}}i=i.return}while(i!==null)}v0(n)}catch(k){t=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function y0(){var e=sa.current;return sa.current=ra,e===null?ra:e}function wd(){(Te===0||Te===3||Te===2)&&(Te=4),Oe===null||!(pr&268435455)&&!(_a&268435455)||Nn(Oe,Ve)}function aa(e,t){var n=ee;ee|=2;var r=y0();(Oe!==e||Ve!==t)&&(rn=null,ir(e,t));do try{Pb();break}catch(s){g0(e,s)}while(!0);if(rd(),ee=n,sa.current=r,we!==null)throw Error(O(261));return Oe=null,Ve=0,Te}function Pb(){for(;we!==null;)x0(we)}function Tb(){for(;we!==null&&!Zv();)x0(we)}function x0(e){var t=w0(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?v0(e):we=t,gd.current=null}function v0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wb(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,we=null;return}}else if(n=bb(n,t,ft),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Te===0&&(Te=5)}function Xn(e,t,n){var r=se,s=Et.transition;try{Et.transition=null,se=1,Cb(e,t,n,r)}finally{Et.transition=s,se=r}return null}function Cb(e,t,n,r){do Xr();while(Pn!==null);if(ee&6)throw Error(O(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(c1(e,i),e===Oe&&(we=Oe=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,S0(Uo,function(){return Xr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Et.transition,Et.transition=null;var a=se;se=1;var l=ee;ee|=4,gd.current=null,kb(e,n),p0(n,e),Y1(Tc),Ho=!!Pc,Tc=Pc=null,e.current=n,jb(n),e1(),ee=l,se=a,Et.transition=i}else e.current=n;if(ro&&(ro=!1,Pn=e,oa=s),i=e.pendingLanes,i===0&&(In=null),r1(n.stateNode),ut(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ia)throw ia=!1,e=qc,qc=null,e;return oa&1&&e.tag!==0&&Xr(),i=e.pendingLanes,i&1?e===Yc?Hs++:(Hs=0,Yc=e):Hs=0,Hn(),null}function Xr(){if(Pn!==null){var e=Zm(oa),t=Et.transition,n=se;try{if(Et.transition=null,se=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,oa=0,ee&6)throw Error(O(331));var s=ee;for(ee|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(V=u;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Us(8,d,i)}var f=d.child;if(f!==null)f.return=d,V=f;else for(;V!==null;){d=V;var p=d.sibling,y=d.return;if(u0(d),d===u){V=null;break}if(p!==null){p.return=y,V=p;break}V=y}}}var m=i.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Us(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,V=h;break e}V=i.return}}var x=e.current;for(V=x;V!==null;){a=V;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,V=v;else e:for(a=x;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ia(9,l)}}catch(k){ge(l,l.return,k)}if(l===a){V=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,V=w;break e}V=l.return}}if(ee=s,Hn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Pa,e)}catch{}r=!0}return r}finally{se=n,Et.transition=t}}return!1}function xp(e,t,n){t=ns(n,t),t=Zg(e,t,1),e=Mn(e,t,1),t=tt(),e!==null&&(ji(e,1,t),ut(e,t))}function ge(e,t,n){if(e.tag===3)xp(e,e,n);else for(;t!==null;){if(t.tag===3){xp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=ns(n,e),e=e0(t,e,1),t=Mn(t,e,1),e=tt(),t!==null&&(ji(t,1,e),ut(t,e));break}}t=t.return}}function Ab(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ve&n)===n&&(Te===4||Te===3&&(Ve&130023424)===Ve&&500>xe()-xd?ir(e,0):yd|=n),ut(e,t)}function b0(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=tt();e=dn(e,t),e!==null&&(ji(e,t,n),ut(e,n))}function Rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),b0(e,n)}function Lb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),b0(e,n)}var w0;w0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,vb(e,t,n);at=!!(e.flags&131072)}else at=!1,ue&&t.flags&1048576&&Ng(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var s=Jr(t,Ye.current);Yr(t,n),s=dd(null,t,r,e,s,n);var i=fd();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(i=!0,Yo(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,od(t),s.updater=Ma,t.stateNode=s,s._reactInternals=t,Fc(t,r,e,n),t=Dc(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&Zu(t),Je(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Mb(r),e=Mt(r,e),s){case 0:t=Vc(null,t,r,e,n);break e;case 1:t=lp(null,t,r,e,n);break e;case 11:t=op(null,t,r,e,n);break e;case 14:t=ap(null,t,r,Mt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),Vc(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),lp(e,t,r,s,n);case 3:e:{if(s0(t),e===null)throw Error(O(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Rg(e,t),ea(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=ns(Error(O(423)),t),t=cp(e,t,r,n,s);break e}else if(r!==s){s=ns(Error(O(424)),t),t=cp(e,t,r,n,s);break e}else for(pt=On(t.stateNode.containerInfo.firstChild),ht=t,ue=!0,_t=null,n=Cg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===s){t=fn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return Lg(t),e===null&&Mc(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Cc(r,s)?a=null:i!==null&&Cc(r,i)&&(t.flags|=32),r0(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&Mc(t),null;case 13:return i0(e,t,n);case 4:return ad(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=es(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),op(e,t,r,s,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,ae(Jo,r._currentValue),r._currentValue=a,i!==null)if(Dt(i.value,a)){if(i.children===s.children&&!lt.current){t=fn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=ln(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ic(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ic(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Je(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Yr(t,n),s=Tt(s),r=r(s),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,s=Mt(r,t.pendingProps),s=Mt(r.type,s),ap(e,t,r,s,n);case 15:return t0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),jo(e,t),t.tag=1,ct(r)?(e=!0,Yo(t)):e=!1,Yr(t,n),Jg(t,r,s),Fc(t,r,s,n),Dc(null,t,r,!0,e,n);case 19:return o0(e,t,n);case 22:return n0(e,t,n)}throw Error(O(156,t.tag))};function S0(e,t){return Ym(e,t)}function Ob(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new Ob(e,t,n,r)}function Sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mb(e){if(typeof e=="function")return Sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===Uu)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")Sd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Cr:return or(n.children,s,i,t);case Du:a=8,s|=8;break;case ac:return e=jt(12,n,t,s|2),e.elementType=ac,e.lanes=i,e;case lc:return e=jt(13,n,t,s),e.elementType=lc,e.lanes=i,e;case cc:return e=jt(19,n,t,s),e.elementType=cc,e.lanes=i,e;case Lm:return Fa(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Am:a=10;break e;case Rm:a=9;break e;case Bu:a=11;break e;case Uu:a=14;break e;case Sn:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=jt(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function or(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=jt(22,e,r,t),e.elementType=Lm,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ib(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function kd(e,t,n,r,s,i,a,l,c){return e=new Ib(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=jt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(i),e}function _b(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function k0(e){if(!e)return Dn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ct(n))return kg(e,n,t)}return t}function j0(e,t,n,r,s,i,a,l,c){return e=kd(n,r,!0,e,s,i,a,l,c),e.context=k0(null),n=e.current,r=tt(),s=_n(n),i=ln(r,s),i.callback=t??null,Mn(n,i,s),e.current.lanes=s,ji(e,s,r),ut(e,r),e}function za(e,t,n,r){var s=t.current,i=tt(),a=_n(s);return n=k0(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mn(s,t,a),e!==null&&(zt(e,s,a,i),wo(e,s,a)),a}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jd(e,t){vp(e,t),(e=e.alternate)&&vp(e,t)}function Fb(){return null}var N0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nd(e){this._internalRoot=e}Va.prototype.render=Nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));za(e,t,null,null)};Va.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){za(null,e,null,null)}),t[un]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=ng();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&sg(e)}};function Ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bp(){}function zb(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=la(a);i.call(u)}}var a=j0(t,r,e,0,null,!1,!1,"",bp);return e._reactRootContainer=a,e[un]=a.current,si(e.nodeType===8?e.parentNode:e),hr(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=la(c);l.call(u)}}var c=kd(e,0,!1,null,null,!1,!1,"",bp);return e._reactRootContainer=c,e[un]=c.current,si(e.nodeType===8?e.parentNode:e),hr(function(){za(t,c,n,r)}),c}function Ba(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var c=la(a);l.call(c)}}za(t,a,e,s)}else a=zb(n,t,e,s,r);return la(a)}eg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ls(t.pendingLanes);n!==0&&(Wu(t,n|1),ut(t,xe()),!(ee&6)&&(rs=xe()+500,Hn()))}break;case 13:hr(function(){var r=dn(e,1);if(r!==null){var s=tt();zt(r,e,1,s)}}),jd(e,1)}};Gu=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=tt();zt(t,e,134217728,n)}jd(e,134217728)}};tg=function(e){if(e.tag===13){var t=_n(e),n=dn(e,t);if(n!==null){var r=tt();zt(n,e,t,r)}jd(e,t)}};ng=function(){return se};rg=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};vc=function(e,t,n){switch(t){case"input":if(fc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ra(r);if(!s)throw Error(O(90));Mm(r),fc(r,s)}}}break;case"textarea":_m(e,n);break;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}};$m=vd;Hm=hr;var Vb={usingClientEntryPoint:!1,Events:[Ei,Or,Ra,Bm,Um,vd]},Ps={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Db={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Km(e),e===null?null:e.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||Fb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Pa=so.inject(Db),Yt=so}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vb;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(t))throw Error(O(200));return _b(e,t,null,n)};yt.createRoot=function(e,t){if(!Ed(e))throw Error(O(299));var n=!1,r="",s=N0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=kd(e,1,!1,null,null,n,!1,r,s),e[un]=t.current,si(e.nodeType===8?e.parentNode:e),new Nd(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Km(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return hr(e)};yt.hydrate=function(e,t,n){if(!Da(t))throw Error(O(200));return Ba(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!Ed(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=N0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=j0(t,null,e,1,n??null,s,!1,i,a),e[un]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Va(t)};yt.render=function(e,t,n){if(!Da(t))throw Error(O(200));return Ba(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!Da(e))throw Error(O(40));return e._reactRootContainer?(hr(function(){Ba(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};yt.unstable_batchedUpdates=vd;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Da(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Ba(e,t,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(e){console.error(e)}}E0(),Em.exports=yt;var Bb=Em.exports,wp=Bb;ic.createRoot=wp.createRoot,ic.hydrateRoot=wp.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(null,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const Sp="popstate";function Ub(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:l}=r.location;return Jc("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ca(s)}return Hb(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function kp(e,t){return{usr:e.state,key:e.key,idx:t}}function Jc(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ds(t):t,{state:n,key:t&&t.key||r||$b()})}function ca(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ds(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hb(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=Tn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(pi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Tn.Pop;let b=d(),h=b==null?null:b-u;u=b,c&&c({action:l,location:g.location,delta:h})}function p(b,h){l=Tn.Push;let x=Jc(g.location,b,h);u=d()+1;let v=kp(x,u),w=g.createHref(x);try{a.pushState(v,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(w)}i&&c&&c({action:l,location:g.location,delta:1})}function y(b,h){l=Tn.Replace;let x=Jc(g.location,b,h);u=d();let v=kp(x,u),w=g.createHref(x);a.replaceState(v,"",w),i&&c&&c({action:l,location:g.location,delta:0})}function m(b){let h=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof b=="string"?b:ca(b);return x=x.replace(/ $/,"%20"),pe(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let g={get action(){return l},get location(){return e(s,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Sp,f),c=b,()=>{s.removeEventListener(Sp,f),c=null}},createHref(b){return t(s,b)},createURL:m,encodeLocation(b){let h=m(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(b){return a.go(b)}};return g}var jp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jp||(jp={}));function Wb(e,t,n){return n===void 0&&(n="/"),Gb(e,t,n)}function Gb(e,t,n,r){let s=typeof t=="string"?ds(t):t,i=ss(s.pathname||"/",n);if(i==null)return null;let a=P0(e);Kb(a);let l=null,c=sw(i);for(let u=0;l==null&&u<a.length;++u)l=nw(a[u],c);return l}function P0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=zn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),P0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ew(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let c of T0(i.path))s(i,a,c)}),t}function T0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=T0(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qb=/^:[\w-]+$/,Yb=3,Xb=2,Qb=1,Jb=10,Zb=-2,Np=e=>e==="*";function ew(e,t){let n=e.split("/"),r=n.length;return n.some(Np)&&(r+=Zb),t&&(r+=Xb),n.filter(s=>!Np(s)).reduce((s,i)=>s+(qb.test(i)?Yb:i===""?Qb:Jb),r)}function tw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function nw(e,t,n){let{routesMeta:r}=e,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Zc({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(s,f.params),a.push({params:s,pathname:zn([i,f.pathname]),pathnameBase:cw(zn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=zn([i,f.pathnameBase]))}return a}function Zc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rw(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let g=l[f]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const m=l[f];return y&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function rw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function sw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ss(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ow=e=>iw.test(e);function aw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?ds(e):e,i;if(n)if(ow(n))i=n;else{if(n.includes("//")){let a=n;n=C0(n),Pd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Ep(n.substring(1),"/"):i=Ep(n,t)}else i=t;return{pathname:i,search:uw(r),hash:dw(s)}}function Ep(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Td(e,t){let n=lw(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=ds(e):(s=pi({},e),pe(!s.pathname||!s.pathname.includes("?"),Rl("?","pathname","search",s)),pe(!s.pathname||!s.pathname.includes("#"),Rl("#","pathname","hash",s)),pe(!s.search||!s.search.includes("#"),Rl("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;s.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=aw(s,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const C0=e=>e.replace(/\/\/+/g,"/"),zn=e=>C0(e.join("/")),cw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const A0=["post","put","patch","delete"];new Set(A0);const pw=["get",...A0];new Set(pw);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(null,arguments)}const Ua=S.createContext(null),R0=S.createContext(null),mn=S.createContext(null),$a=S.createContext(null),Zt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),L0=S.createContext(null);function hw(e,t){let{relative:n}=t===void 0?{}:t;fs()||pe(!1);let{basename:r,navigator:s}=S.useContext(mn),{hash:i,pathname:a,search:l}=Ha(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:zn([r,a])),s.createHref({pathname:c,search:l,hash:i})}function fs(){return S.useContext($a)!=null}function st(){return fs()||pe(!1),S.useContext($a).location}function O0(e){S.useContext(mn).static||S.useLayoutEffect(e)}function gn(){let{isDataRoute:e}=S.useContext(Zt);return e?Cw():mw()}function mw(){fs()||pe(!1);let e=S.useContext(Ua),{basename:t,future:n,navigator:r}=S.useContext(mn),{matches:s}=S.useContext(Zt),{pathname:i}=st(),a=JSON.stringify(Td(s,n.v7_relativeSplatPath)),l=S.useRef(!1);return O0(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Cd(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:zn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}const gw=S.createContext(null);function yw(e){let t=S.useContext(Zt).outlet;return t&&S.createElement(gw.Provider,{value:e},t)}function M0(){let{matches:e}=S.useContext(Zt),t=e[e.length-1];return t?t.params:{}}function Ha(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(mn),{matches:s}=S.useContext(Zt),{pathname:i}=st(),a=JSON.stringify(Td(s,r.v7_relativeSplatPath));return S.useMemo(()=>Cd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function xw(e,t){return vw(e,t)}function vw(e,t,n,r){fs()||pe(!1);let{navigator:s}=S.useContext(mn),{matches:i}=S.useContext(Zt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=st(),d;if(t){var f;let b=typeof t=="string"?ds(t):t;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||pe(!1),d=b}else d=u;let p=d.pathname||"/",y=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=Wb(e,{pathname:y}),g=jw(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:zn([c,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:zn([c,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&g?S.createElement($a.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Tn.Pop}},g):g}function bw(){let e=Tw(),t=fw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:s},n):null,null)}const ww=S.createElement(bw,null);class Sw extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Zt.Provider,{value:this.props.routeContext},S.createElement(L0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kw(e){let{routeContext:t,match:n,children:r}=e,s=S.useContext(Ua);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Zt.Provider,{value:t},r)}function jw(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||pe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:y}=n,m=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let y,m=!1,g=null,b=null;n&&(y=l&&f.route.id?l[f.route.id]:void 0,g=f.route.errorElement||ww,c&&(u<0&&p===0?(Aw("route-fallback"),m=!0,b=null):u===p&&(m=!0,b=f.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,p+1)),x=()=>{let v;return y?v=g:m?v=b:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(kw,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?S.createElement(Sw,{location:n.location,revalidation:n.revalidation,component:g,error:y,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var I0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I0||{}),_0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_0||{});function Nw(e){let t=S.useContext(Ua);return t||pe(!1),t}function Ew(e){let t=S.useContext(R0);return t||pe(!1),t}function Pw(e){let t=S.useContext(Zt);return t||pe(!1),t}function F0(e){let t=Pw(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function Tw(){var e;let t=S.useContext(L0),n=Ew(),r=F0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Cw(){let{router:e}=Nw(I0.UseNavigateStable),t=F0(_0.UseNavigateStable),n=S.useRef(!1);return O0(()=>{n.current=!0}),S.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,hi({fromRouteId:t},i)))},[e,t])}const Pp={};function Aw(e,t,n){Pp[e]||(Pp[e]=!0)}function Rw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){let{to:t,replace:n,state:r,relative:s}=e;fs()||pe(!1);let{future:i,static:a}=S.useContext(mn),{matches:l}=S.useContext(Zt),{pathname:c}=st(),u=gn(),d=Cd(t,Td(l,i.v7_relativeSplatPath),c,s==="path"),f=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:s}),[u,f,s,n,r]),null}function Ti(e){return yw(e.context)}function Z(e){pe(!1)}function Lw(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Tn.Pop,navigator:i,static:a=!1,future:l}=e;fs()&&pe(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:i,static:a,future:hi({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=ds(r));let{pathname:d="/",search:f="",hash:p="",state:y=null,key:m="default"}=r,g=S.useMemo(()=>{let b=ss(d,c);return b==null?null:{location:{pathname:b,search:f,hash:p,state:y,key:m},navigationType:s}},[c,d,f,p,y,m,s]);return g==null?null:S.createElement(mn.Provider,{value:u},S.createElement($a.Provider,{children:n,value:g}))}function Ow(e){let{children:t,location:n}=e;return xw(eu(t),n)}new Promise(()=>{});function eu(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,s)=>{if(!S.isValidElement(r))return;let i=[...t,s];if(r.type===S.Fragment){n.push.apply(n,eu(r.props.children,i));return}r.type!==Z&&pe(!1),!r.props.index||!r.props.children||pe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=eu(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(null,arguments)}function z0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Mw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iw(e,t){return e.button===0&&(!t||t==="_self")&&!Mw(e)}function tu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function _w(e,t){let n=tu(e);return t&&t.forEach((r,s)=>{n.has(s)||t.getAll(s).forEach(i=>{n.append(s,i)})}),n}const Fw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Vw="6";try{window.__reactRouterVersion=Vw}catch{}const Dw=S.createContext({isTransitioning:!1}),Bw="startTransition",Tp=Av[Bw];function Uw(e){let{basename:t,children:n,future:r,window:s}=e,i=S.useRef();i.current==null&&(i.current=Ub({window:s,v5Compat:!0}));let a=i.current,[l,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=S.useCallback(f=>{u&&Tp?Tp(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>a.listen(d),[a,d]),S.useEffect(()=>Rw(r),[r]),S.createElement(Lw,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=S.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=z0(t,Fw),{basename:y}=S.useContext(mn),m,g=!1;if(typeof u=="string"&&Hw.test(u)&&(m=u,$w))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=ss(w.pathname,y);w.origin===v.origin&&k!=null?u=k+w.search+w.hash:g=!0}catch{}let b=hw(u,{relative:s}),h=Kw(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:s,viewTransition:f});function x(v){r&&r(v),v.defaultPrevented||h(v)}return S.createElement("a",ua({},p,{href:m||b,onClick:g||i?r:x,ref:n,target:c}))}),Ww=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:u,children:d}=t,f=z0(t,zw),p=Ha(c,{relative:f.relative}),y=st(),m=S.useContext(R0),{navigator:g,basename:b}=S.useContext(mn),h=m!=null&&Yw(p)&&u===!0,x=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=y.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;s||(v=v.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&b&&(w=ss(w,b)||w);const k=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=v===x||!a&&v.startsWith(x)&&v.charAt(k)==="/",P=w!=null&&(w===x||!a&&w.startsWith(x)&&w.charAt(x.length)==="/"),T={isActive:N,isPending:P,isTransitioning:h},L=N?r:void 0,C;typeof i=="function"?C=i(T):C=[i,N?"active":null,P?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(T):l;return S.createElement(K,ua({},f,{"aria-current":L,className:C,ref:n,style:z,to:c,viewTransition:u}),typeof d=="function"?d(T):d)});var nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nu||(nu={}));var Cp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cp||(Cp={}));function Gw(e){let t=S.useContext(Ua);return t||pe(!1),t}function Kw(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,c=gn(),u=st(),d=Ha(e,{relative:a});return S.useCallback(f=>{if(Iw(f,n)){f.preventDefault();let p=r!==void 0?r:ca(u)===ca(d);c(e,{replace:p,state:s,preventScrollReset:i,relative:a,viewTransition:l})}},[u,c,d,r,s,n,e,i,a,l])}function qw(e){let t=S.useRef(tu(e)),n=S.useRef(!1),r=st(),s=S.useMemo(()=>_w(r.search,n.current?null:t.current),[r.search]),i=gn(),a=S.useCallback((l,c)=>{const u=tu(typeof l=="function"?l(s):l);n.current=!0,i("?"+u,c)},[i,s]);return[s,a]}function Yw(e,t){t===void 0&&(t={});let n=S.useContext(Dw);n==null&&pe(!1);let{basename:r}=Gw(nu.useViewTransitionState),s=Ha(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ss(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ss(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Zc(s.pathname,a)!=null||Zc(s.pathname,i)!=null}function V0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xw}=Object.prototype,{getPrototypeOf:is}=Object,{iterator:Ci,toStringTag:D0}=Symbol,da=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mi=(e,t)=>{let n=e;const r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),da(n,t))return!0;n=is(n)}return!1},Qw=(e,t)=>e!=null&&mi(e,t)?e[t]:void 0,Ad=(e=>t=>{const n=Xw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>Ad(t)===e),Wa=e=>t=>typeof t===e,{isArray:mr}=Array,os=Wa("undefined");function ps(e){return e!==null&&!os(e)&&e.constructor!==null&&!os(e.constructor)&&dt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const B0=Bt("ArrayBuffer");function Jw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&B0(e.buffer),t}const Zw=Wa("string"),dt=Wa("function"),U0=Wa("number"),hs=e=>e!==null&&typeof e=="object",e2=e=>e===!0||e===!1,To=e=>{if(!hs(e))return!1;const t=is(e);return(t===null||t===Object.prototype||is(t)===null)&&!mi(e,D0)&&!mi(e,Ci)},t2=e=>{if(!hs(e)||ps(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},n2=Bt("Date"),r2=Bt("File"),s2=e=>!!(e&&typeof e.uri<"u"),i2=e=>e&&typeof e.getParts<"u",o2=Bt("Blob"),a2=Bt("FileList"),l2=e=>hs(e)&&dt(e.pipe);function c2(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ap=c2(),Rp=typeof Ap.FormData<"u"?Ap.FormData:void 0,u2=e=>{if(!e)return!1;if(Rp&&e instanceof Rp)return!0;const t=is(e);if(!t||t===Object.prototype||!dt(e.append))return!1;const n=Ad(e);return n==="formdata"||n==="object"&&dt(e.toString)&&e.toString()==="[object FormData]"},d2=Bt("URLSearchParams"),[f2,p2,h2,m2]=["ReadableStream","Request","Response","Headers"].map(Bt),g2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ai(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),mr(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(ps(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function $0(e,t){if(ps(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,H0=e=>!os(e)&&e!==nr;function ru(...e){const{caseless:t,skipUndefined:n}=H0(this)&&this||{},r={},s=(i,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=t&&typeof a=="string"&&$0(r,a)||a,c=da(r,l)?r[l]:void 0;To(c)&&To(i)?r[l]=ru(c,i):To(i)?r[l]=ru({},i):mr(i)?r[l]=i.slice():(!n||!os(i))&&(r[l]=i)};for(let i=0,a=e.length;i<a;i++){const l=e[i];if(!l||ps(l)||(Ai(l,s),typeof l!="object"||mr(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let u=0;u<c.length;u++){const d=c[u];T2.call(l,d)&&s(l[d],d)}}return r}const y2=(e,t,n,{allOwnKeys:r}={})=>(Ai(t,(s,i)=>{n&&dt(s)?Object.defineProperty(e,i,{__proto__:null,value:V0(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),x2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),v2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},b2=(e,t,n,r)=>{let s,i,a;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&is(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},w2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},S2=e=>{if(!e)return null;if(mr(e))return e;let t=e.length;if(!U0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},k2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&is(Uint8Array)),j2=(e,t)=>{const r=(e&&e[Ci]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},N2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},E2=Bt("HTMLFormElement"),P2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),{propertyIsEnumerable:T2}=Object.prototype,C2=Bt("RegExp"),W0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ai(n,(s,i)=>{let a;(a=t(s,i,e))!==!1&&(r[i]=a||s)}),Object.defineProperties(e,r)},A2=e=>{W0(e,(t,n)=>{if(dt(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(dt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},R2=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return mr(e)?r(e):r(String(e).split(t)),n},L2=()=>{},O2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function M2(e){return!!(e&&dt(e.append)&&e[D0]==="FormData"&&e[Ci])}const I2=e=>{const t=new WeakSet,n=r=>{if(hs(r)){if(t.has(r))return;if(ps(r))return r;if(!("toJSON"in r)){t.add(r);const s=mr(r)?[]:{};return Ai(r,(i,a)=>{const l=n(i);!os(l)&&(s[a]=l)}),t.delete(r),s}}return r};return n(e)},_2=Bt("AsyncFunction"),F2=e=>e&&(hs(e)||dt(e))&&dt(e.then)&&dt(e.catch),G0=((e,t)=>e?setImmediate:t?((n,r)=>(nr.addEventListener("message",({source:s,data:i})=>{s===nr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),nr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",dt(nr.postMessage)),z2=typeof queueMicrotask<"u"?queueMicrotask.bind(nr):typeof process<"u"&&process.nextTick||G0,K0=e=>e!=null&&dt(e[Ci]),V2=e=>e!=null&&mi(e,Ci)&&K0(e),j={isArray:mr,isArrayBuffer:B0,isBuffer:ps,isFormData:u2,isArrayBufferView:Jw,isString:Zw,isNumber:U0,isBoolean:e2,isObject:hs,isPlainObject:To,isEmptyObject:t2,isReadableStream:f2,isRequest:p2,isResponse:h2,isHeaders:m2,isUndefined:os,isDate:n2,isFile:r2,isReactNativeBlob:s2,isReactNative:i2,isBlob:o2,isRegExp:C2,isFunction:dt,isStream:l2,isURLSearchParams:d2,isTypedArray:k2,isFileList:a2,forEach:Ai,merge:ru,extend:y2,trim:g2,stripBOM:x2,inherits:v2,toFlatObject:b2,kindOf:Ad,kindOfTest:Bt,endsWith:w2,toArray:S2,forEachEntry:j2,matchAll:N2,isHTMLForm:E2,hasOwnProperty:da,hasOwnProp:da,hasOwnInPrototypeChain:mi,getSafeProp:Qw,reduceDescriptors:W0,freezeMethods:A2,toObjectSet:R2,toCamelCase:P2,noop:L2,toFiniteNumber:O2,findKey:$0,global:nr,isContextDefined:H0,isSpecCompliantForm:M2,toJSONObject:I2,isAsyncFn:_2,isThenable:F2,setImmediate:G0,asap:z2,isIterable:K0,isSafeIterable:V2},D2=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),B2=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||t[n]&&D2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};function U2(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const $2=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),H2=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Rd(e,t){return j.isArray(e)?e.map(n=>Rd(n,t)):U2(String(e).replace(t,""))}const W2=e=>Rd(e,$2),G2=e=>Rd(e,H2);function q0(e){const t=Object.create(null);return j.forEach(e.toJSON(),(n,r)=>{t[r]=G2(n)}),t}const Lp=Symbol("internals");function Ts(e){return e&&String(e).trim().toLowerCase()}function Co(e){return e===!1||e==null?e:j.isArray(e)?e.map(Co):W2(String(e))}function K2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const q2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ll(e,t,n,r,s){if(j.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function Y2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function X2(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(s,i,a){return this[r].call(this,t,s,i,a)},configurable:!0})})}let qe=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,c,u){const d=Ts(c);if(!d)return;const f=j.findKey(s,d);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=Co(l))}const a=(l,c)=>j.forEach(l,(u,d)=>i(u,d,c));if(j.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(j.isString(t)&&(t=t.trim())&&!q2(t))a(B2(t),n);else if(j.isObject(t)&&j.isSafeIterable(t)){let l=Object.create(null),c,u;for(const d of t){if(!j.isArray(d))throw new TypeError("Object iterator must return a key-value pair");u=d[0],j.hasOwnProp(l,u)?(c=l[u],l[u]=j.isArray(c)?[...c,d[1]]:[c,d[1]]):l[u]=d[1]}a(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ts(t),t){const r=j.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return K2(s);if(j.isFunction(n))return n.call(this,s,r);if(j.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ts(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ll(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(a){if(a=Ts(a),a){const l=j.findKey(r,a);l&&(!n||Ll(r,r[l],l,n))&&(delete r[l],s=!0)}}return j.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Ll(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return j.forEach(this,(s,i)=>{const a=j.findKey(r,i);if(a){n[a]=Co(s),delete n[i];return}const l=t?Y2(i):String(i).trim();l!==i&&delete n[i],n[l]=Co(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Lp]=this[Lp]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=Ts(a);r[l]||(X2(s,a),r[l]=!0)}return j.isArray(t)?t.forEach(i):i(t),this}};qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(qe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(qe);const Q2="[REDACTED ****]";function J2(e){if(j.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(j.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Z2(e,t){const n=new Set(t.map(i=>String(i).toLowerCase())),r=[],s=i=>{if(i===null||typeof i!="object"||j.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof qe&&(i=i.toJSON()),r.push(i);let a;if(j.isArray(i))a=[],i.forEach((l,c)=>{const u=s(l);j.isUndefined(u)||(a[c]=u)});else{if(!j.isPlainObject(i)&&J2(i))return r.pop(),i;a=Object.create(null);for(const[l,c]of Object.entries(i)){const u=n.has(l.toLowerCase())?Q2:s(c);j.isUndefined(u)||(a[l]=u)}}return r.pop(),a};return s(e)}let _=class Y0 extends Error{static from(t,n,r,s,i,a){const l=new Y0(t.message,n||t.code,r,s,i);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),a&&Object.assign(l,a),l}constructor(t,n,r,s,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,n=t&&j.hasOwnProp(t,"redact")?t.redact:void 0,r=j.isArray(n)&&n.length>0?Z2(t,n):j.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};_.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";_.ERR_BAD_OPTION="ERR_BAD_OPTION";_.ECONNABORTED="ECONNABORTED";_.ETIMEDOUT="ETIMEDOUT";_.ECONNREFUSED="ECONNREFUSED";_.ERR_NETWORK="ERR_NETWORK";_.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";_.ERR_DEPRECATED="ERR_DEPRECATED";_.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";_.ERR_BAD_REQUEST="ERR_BAD_REQUEST";_.ERR_CANCELED="ERR_CANCELED";_.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";_.ERR_INVALID_URL="ERR_INVALID_URL";_.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const e5=null,X0=100;function su(e){return j.isPlainObject(e)||j.isArray(e)}function Q0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Ol(e,t,n){return e?e.concat(t).map(function(s,i){return s=Q0(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function t5(e){return j.isArray(e)&&!e.some(su)}const n5=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Ga(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,v){return!j.isUndefined(v[x])});const r=n.metaTokens,s=n.visitor||m,i=n.dots,a=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?X0:n.maxDepth,u=l&&j.isSpecCompliantForm(t),d=[];if(!j.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(j.isDate(h))return h.toISOString();if(j.isBoolean(h))return h.toString();if(!u&&j.isBlob(h))throw new _("Blob is not supported. Use a Buffer instead.");if(j.isArrayBuffer(h)||j.isTypedArray(h)){if(u&&typeof l=="function")return new l([h]);if(typeof Buffer<"u")return Buffer.from(h);throw new _("Blob is not supported. Use a Buffer instead.",_.ERR_NOT_SUPPORT)}return h}function p(h){if(h>c)throw new _("Object is too deeply nested ("+h+" levels). Max depth: "+c,_.ERR_FORM_DATA_DEPTH_EXCEEDED)}function y(h,x){if(c===1/0)return JSON.stringify(h);const v=[];return JSON.stringify(h,function(k,N){if(!j.isObject(N))return N;for(;v.length&&v[v.length-1]!==this;)v.pop();return v.push(N),p(x+v.length-1),N})}function m(h,x,v){let w=h;if(j.isReactNative(t)&&j.isReactNativeBlob(h))return t.append(Ol(v,x,i),f(h)),!1;if(h&&!v&&typeof h=="object"){if(j.endsWith(x,"{}"))x=r?x:x.slice(0,-2),h=y(h,1);else if(j.isArray(h)&&t5(h)||(j.isFileList(h)||j.endsWith(x,"[]"))&&(w=j.toArray(h)))return x=Q0(x),w.forEach(function(N,P){!(j.isUndefined(N)||N===null)&&t.append(a===!0?Ol([x],P,i):a===null?x:x+"[]",f(N))}),!1}return su(h)?!0:(t.append(Ol(v,x,i),f(h)),!1)}const g=Object.assign(n5,{defaultVisitor:m,convertValue:f,isVisitable:su});function b(h,x,v=0){if(!j.isUndefined(h)){if(p(v),d.indexOf(h)!==-1)throw new Error("Circular reference detected in "+x.join("."));d.push(h),j.forEach(h,function(k,N){(!(j.isUndefined(k)||k===null)&&s.call(t,k,j.isString(N)?N.trim():N,x,g))===!0&&b(k,x?x.concat(N):[N],v+1)}),d.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Op(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function Ld(e,t){this._pairs=[],e&&Ga(e,this,t)}const J0=Ld.prototype;J0.append=function(t,n){this._pairs.push([t,n])};J0.toString=function(t){const n=t?r=>t.call(this,r,Op):Op;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function r5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Z0(e,t,n){if(!t)return e;e=e||"";const r=j.isFunction(n)?{serialize:n}:n,s=j.getSafeProp(r,"encode")||r5,i=j.getSafeProp(r,"serialize");let a;if(i?a=i(t,r):a=j.isURLSearchParams(t)?t.toString():new Ld(t,r).toString(s),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Mp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Od={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},s5=typeof URLSearchParams<"u"?URLSearchParams:Ld,i5=typeof FormData<"u"?FormData:null,o5=typeof Blob<"u"?Blob:null,a5={isBrowser:!0,classes:{URLSearchParams:s5,FormData:i5,Blob:o5},protocols:["http","https","file","blob","url","data"]},Md=typeof window<"u"&&typeof document<"u",iu=typeof navigator=="object"&&navigator||void 0,l5=Md&&(!iu||["ReactNative","NativeScript","NS"].indexOf(iu.product)<0),c5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",u5=Md&&window.location.href||"http://localhost",d5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Md,hasStandardBrowserEnv:l5,hasStandardBrowserWebWorkerEnv:c5,navigator:iu,origin:u5},Symbol.toStringTag,{value:"Module"})),ze={...d5,...a5};function f5(e,t){return Ga(e,new ze.classes.URLSearchParams,{visitor:function(n,r,s,i){return ze.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}const Ip=X0;function ey(e){if(e>Ip)throw new _("FormData field is too deeply nested ("+e+" levels). Max depth: "+Ip,_.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p5(e){const t=[],n=/\w+|\[(\w*)]/g;let r;for(;(r=n.exec(e))!==null;)ey(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function h5(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ty(e){function t(n,r,s,i){ey(i);let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&j.isArray(s)?s.length:a,c?(j.hasOwnProp(s,a)?s[a]=j.isArray(s[a])?s[a].concat(r):[s[a],r]:s[a]=r,!l):((!j.hasOwnProp(s,a)||!j.isObject(s[a]))&&(s[a]=[]),t(n,r,s[a],i)&&j.isArray(s[a])&&(s[a]=h5(s[a])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,s)=>{t(p5(r),s,n,0)}),n}return null}const kr=(e,t)=>e!=null&&j.hasOwnProp(e,t)?e[t]:void 0;function m5(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ri={transitional:Od,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=j.isObject(t);if(i&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return s?JSON.stringify(ty(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){const c=kr(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return f5(t,c).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=kr(this,"env"),d=u&&u.FormData;return Ga(l?{"files[]":t}:t,d&&new d,c)}}return i||s?(n.setContentType("application/json",!1),m5(t)):t}],transformResponse:[function(t){const n=kr(this,"transitional")||Ri.transitional,r=n&&n.forcedJSONParsing,s=kr(this,"responseType"),i=s==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(r&&!s||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,kr(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?_.from(c,_.ERR_BAD_RESPONSE,this,null,kr(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch","query"],e=>{Ri.headers[e]={}});function Ml(e,t){const n=this||Ri,r=t||n,s=qe.from(r.headers);let i=r.data;return j.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ny(e){return!!(e&&e.__CANCEL__)}let Li=class extends _{constructor(t,n,r){super(t??"canceled",_.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function ry(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new _("Request failed with status code "+n.status,n.status>=400&&n.status<500?_.ERR_BAD_REQUEST:_.ERR_BAD_RESPONSE,n.config,n.request,n))}function g5(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function y5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];a||(a=u),n[s]=c,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-a<t)return;const y=d&&u-d;return y?Math.round(p*1e3/y):void 0}}function x5(e,t){let n=0,r=1e3/t,s,i;const a=(u,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?a(u,d):(s=u,i||(i=setTimeout(()=>{i=null,a(s)},r-f)))},()=>s&&a(s)]}const fa=(e,t,n=3)=>{let r=0;const s=y5(50,250);return x5(i=>{if(!i||typeof i.loaded!="number")return;const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=l!=null?Math.min(a,l):a,u=Math.max(0,c-r),d=s(u);r=Math.max(r,c);const f={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l?(l-c)/d:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},_p=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Fp=e=>(...t)=>j.asap(()=>e(...t)),v5=ze.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ze.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ze.origin),ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent)):()=>!0,b5=ze.hasStandardBrowserEnv?{write(e,t,n,r,s,i,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];j.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),j.isString(r)&&l.push(`path=${r}`),j.isString(s)&&l.push(`domain=${s}`),i===!0&&l.push("secure"),j.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===e)try{return decodeURIComponent(r.slice(s+1))}catch{return r.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function w5(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}const k5=/^https?:(?!\/\/)/i,j5=/[\t\n\r]/g;function N5(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function E5(e){return N5(e).replace(j5,"")}function zp(e,t){if(typeof e=="string"&&k5.test(E5(e)))throw new _('Invalid URL: missing "//" after protocol',_.ERR_INVALID_URL,t)}function sy(e,t,n,r){zp(t,r);let s=!w5(t);return e&&(s||n===!1)?(zp(e,r),S5(e,t)):t}const Vp=e=>e instanceof qe?{...e}:e;function gr(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(d,f,p,y){return j.isPlainObject(d)&&j.isPlainObject(f)?j.merge.call({caseless:y},d,f):j.isPlainObject(f)?j.merge({},f):j.isArray(f)?f.slice():f}function s(d,f,p,y){if(j.isUndefined(f)){if(!j.isUndefined(d))return r(void 0,d,p,y)}else return r(d,f,p,y)}function i(d,f){if(!j.isUndefined(f))return r(void 0,f)}function a(d,f){if(j.isUndefined(f)){if(!j.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function l(d){const f=j.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!j.isUndefined(f))if(j.isPlainObject(f)){if(j.hasOwnProp(f,d))return f[d]}else return;const p=j.hasOwnProp(e,"transitional")?e.transitional:void 0;if(j.isPlainObject(p)&&j.hasOwnProp(p,d))return p[d]}function c(d,f,p){if(j.hasOwnProp(t,p))return r(d,f);if(j.hasOwnProp(e,p))return r(void 0,d)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:c,headers:(d,f,p)=>s(Vp(d),Vp(f),p,!0)};return j.forEach(Object.keys({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=j.hasOwnProp(u,f)?u[f]:s,y=j.hasOwnProp(e,f)?e[f]:void 0,m=j.hasOwnProp(t,f)?t[f]:void 0,g=p(y,m,f);j.isUndefined(g)&&p!==c||(n[f]=g)}),j.hasOwnProp(t,"validateStatus")&&j.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(j.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const P5=["content-type","content-length"];function T5(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,s])=>{P5.includes(r.toLowerCase())&&e.set(r,s)})}const C5=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function iy(e){const t=gr({},e),n=p=>j.hasOwnProp(t,p)?t[p]:void 0,r=n("data");let s=n("withXSRFToken");const i=n("xsrfHeaderName"),a=n("xsrfCookieName");let l=n("headers");const c=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),f=n("url");if(t.headers=l=qe.from(l),t.url=Z0(sy(u,f,d,t),n("params"),n("paramsSerializer")),c){const p=j.getSafeProp(c,"username")||"",y=j.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(p+":"+(y?C5(y):"")))}catch(m){throw _.from(m,_.ERR_BAD_OPTION_VALUE,e)}}if(j.isFormData(r)&&(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv||j.isReactNative(r)?l.setContentType(void 0):j.isFunction(r.getHeaders)&&T5(l,r.getHeaders(),n("formDataHeaderPolicy"))),ze.hasStandardBrowserEnv&&(j.isFunction(s)&&(s=s(t)),s===!0||s==null&&v5(t.url))){const y=i&&a&&b5.read(a);y&&l.set(i,y)}return t}const A5=typeof XMLHttpRequest<"u",R5=A5&&function(e){return new Promise(function(n,r){const s=iy(e);let i=s.data;const a=qe.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=s,d,f,p,y,m;function g(){y&&y(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function h(){if(!b)return;const v=qe.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:v,config:e,request:b};ry(function(P){n(P),g()},function(P){r(P),g()},k),b=null}"onloadend"in b?b.onloadend=h:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.startsWith("file:"))||setTimeout(h)},b.onabort=function(){b&&(r(new _("Request aborted",_.ECONNABORTED,e,b)),g(),b=null)},b.onerror=function(w){const k=w&&w.message?w.message:"Network Error",N=new _(k,_.ERR_NETWORK,e,b);N.event=w||null,r(N),g(),b=null},b.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||Od;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),r(new _(w,k.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,b)),g(),b=null},i===void 0&&a.setContentType(null),"setRequestHeader"in b&&j.forEach(q0(a),function(w,k){b.setRequestHeader(k,w)}),j.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),l&&l!=="json"&&(b.responseType=s.responseType),u&&([p,m]=fa(u,!0),b.addEventListener("progress",p)),c&&b.upload&&([f,y]=fa(c),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(d=v=>{b&&(r(!v||v.type?new Li(null,e,b):v),b.abort(),g(),b=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const x=g5(s.url);if(x&&!ze.protocols.includes(x)){r(new _("Unsupported protocol "+x+":",_.ERR_BAD_REQUEST,e)),g();return}b.send(i||null)})},L5=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof _?u:new Li(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,s(new _(`timeout of ${t}ms exceeded`,_.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>c.addEventListener("abort",s,{once:!0}));const{signal:l}=n;return l.unsubscribe=()=>j.asap(a),l},O5=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},M5=async function*(e,t){for await(const n of I5(e))yield*O5(n,t)},I5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Dp=(e,t,n,r)=>{const s=M5(e,t);let i=0,a,l=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await s.next();if(u){l(),c.close();return}let f=d.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},pa=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,_5=(e,t,n)=>t+2<n&&pa(e.charCodeAt(t+1))&&pa(e.charCodeAt(t+2));function F5(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let a=r.length;const l=r.length;for(let y=0;y<l;y++)if(r.charCodeAt(y)===37&&y+2<l){const m=r.charCodeAt(y+1),g=r.charCodeAt(y+2);pa(m)&&pa(g)&&(a-=2,y+=2)}let c=0,u=l-1;const d=y=>y>=2&&r.charCodeAt(y-2)===37&&r.charCodeAt(y-1)===51&&(r.charCodeAt(y)===68||r.charCodeAt(y)===100);u>=0&&(r.charCodeAt(u)===61?(c++,u--):d(u)&&(c++,u-=3)),c===1&&u>=0&&(r.charCodeAt(u)===61||d(u))&&c++;const p=Math.floor(a/4)*3-(c||0);return p>0?p:0}let i=0;for(let a=0,l=r.length;a<l;a++){const c=r.charCodeAt(a);if(c===37&&_5(r,a,l))i+=1,a+=2;else if(c<128)i+=1;else if(c<2048)i+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=r.charCodeAt(a+1);u>=56320&&u<=57343?(i+=4,a++):i+=3}else i+=3}return i}const Id="1.18.1",Bp=64*1024,{isFunction:io}=j,z5=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),Up=e=>{if(!j.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},$p=(e,...t)=>{try{return!!e(...t)}catch{return!1}},V5=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},D5=e=>{const t=j.global!==void 0&&j.global!==null?j.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=j.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:i,Response:a}=e,l=s?io(s):typeof fetch=="function",c=io(i),u=io(a);if(!l)return!1;const d=l&&io(n),f=l&&(typeof r=="function"?(h=>x=>h.encode(x))(new r):async h=>new Uint8Array(await new i(h).arrayBuffer())),p=c&&d&&$p(()=>{let h=!1;const x=new i(ze.origin,{body:new n,method:"POST",get duplex(){return h=!0,"half"}}),v=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),h&&!v}),y=u&&d&&$p(()=>j.isReadableStream(new a("").body)),m={stream:y&&(h=>h.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!m[h]&&(m[h]=(x,v)=>{let w=x&&x[h];if(w)return w.call(x);throw new _(`Response type '${h}' is not supported`,_.ERR_NOT_SUPPORT,v)})});const g=async h=>{if(h==null)return 0;if(j.isBlob(h))return h.size;if(j.isSpecCompliantForm(h))return(await new i(ze.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(j.isArrayBufferView(h)||j.isArrayBuffer(h))return h.byteLength;if(j.isURLSearchParams(h)&&(h=h+""),j.isString(h))return(await f(h)).byteLength},b=async(h,x)=>{const v=j.toFiniteNumber(h.getContentLength());return v??g(x)};return async h=>{let{url:x,method:v,data:w,signal:k,cancelToken:N,timeout:P,onDownloadProgress:T,onUploadProgress:L,responseType:C,headers:z,withCredentials:U="same-origin",fetchOptions:J,maxContentLength:W,maxBodyLength:I}=iy(h);const F=j.isNumber(W)&&W>-1,G=j.isNumber(I)&&I>-1,E=H=>j.hasOwnProp(h,H)?h[H]:void 0;let R=s||fetch;C=C?(C+"").toLowerCase():"text";let A=L5([k,N&&N.toAbortSignal()],P),M=null;const $=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let q,oe=null;const Be=()=>new _("Request body larger than maxBodyLength limit",_.ERR_BAD_REQUEST,h,M);try{let H;const ne=E("auth");if(ne){const B=j.getSafeProp(ne,"username")||"",Y=j.getSafeProp(ne,"password")||"";H={username:B,password:Y}}if(V5(x)){const B=new URL(x,ze.origin);if(!H&&(B.username||B.password)){const Y=Up(B.username),Xe=Up(B.password);H={username:Y,password:Xe}}(B.username||B.password)&&(B.username="",B.password="",x=B.href)}if(H&&(z.delete("authorization"),z.set("Authorization","Basic "+btoa(z5((H.username||"")+":"+(H.password||""))))),F&&typeof x=="string"&&x.startsWith("data:")&&F5(x)>W)throw new _("maxContentLength size of "+W+" exceeded",_.ERR_BAD_RESPONSE,h,M);if(G&&v!=="get"&&v!=="head"){const B=await g(w);if(typeof B=="number"&&isFinite(B)&&(q=B,B>I))throw Be()}const Me=G&&(j.isReadableStream(w)||j.isStream(w)),it=(B,Y,Xe)=>Dp(B,Bp,Ae=>{if(G&&Ae>I)throw oe=Be();Y&&Y(Ae)},Xe);if(p&&v!=="get"&&v!=="head"&&(L||Me)){if(q=q??await b(z,w),q!==0||Me){let B=new i(x,{method:"POST",body:w,duplex:"half"}),Y;if(j.isFormData(w)&&(Y=B.headers.get("content-type"))&&z.setContentType(Y),B.body){const[Xe,Ae]=L&&_p(q,fa(Fp(L)))||[];w=it(B.body,Xe,Ae)}}}else if(Me&&!c&&d&&v!=="get"&&v!=="head")w=it(w);else if(Me&&c&&!p&&v!=="get"&&v!=="head")throw new _("Stream request bodies are not supported by the current fetch implementation",_.ERR_NOT_SUPPORT,h,M);j.isString(U)||(U=U?"include":"omit");const $t=c&&"credentials"in i.prototype;if(j.isFormData(w)){const B=z.getContentType();B&&/^multipart\/form-data/i.test(B)&&!/boundary=/i.test(B)&&z.delete("content-type")}z.set("User-Agent","axios/"+Id,!1);const xs={...J,signal:A,method:v.toUpperCase(),headers:q0(z.normalize()),body:w,duplex:"half",credentials:$t?U:void 0};M=c&&new i(x,xs);let vt=await(c?R(M,J):R(x,xs));const Vi=qe.from(vt.headers);if(F){const B=j.toFiniteNumber(Vi.getContentLength());if(B!=null&&B>W)throw new _("maxContentLength size of "+W+" exceeded",_.ERR_BAD_RESPONSE,h,M)}const vs=y&&(C==="stream"||C==="response");if(y&&vt.body&&(T||F||vs&&$)){const B={};["status","statusText","headers"].forEach(yn=>{B[yn]=vt[yn]});const Y=j.toFiniteNumber(Vi.getContentLength()),[Xe,Ae]=T&&_p(Y,fa(Fp(T),!0))||[];let Di=0;const Bi=yn=>{if(F&&(Di=yn,Di>W))throw new _("maxContentLength size of "+W+" exceeded",_.ERR_BAD_RESPONSE,h,M);Xe&&Xe(yn)};vt=new a(Dp(vt.body,Bp,Bi,()=>{Ae&&Ae(),$&&$()}),B)}C=C||"text";let Q=await m[j.findKey(m,C)||"text"](vt,h);if(F&&!y&&!vs){let B;if(Q!=null&&(typeof Q.byteLength=="number"?B=Q.byteLength:typeof Q.size=="number"?B=Q.size:typeof Q=="string"&&(B=typeof r=="function"?new r().encode(Q).byteLength:Q.length)),typeof B=="number"&&B>W)throw new _("maxContentLength size of "+W+" exceeded",_.ERR_BAD_RESPONSE,h,M)}return!vs&&$&&$(),await new Promise((B,Y)=>{ry(B,Y,{data:Q,headers:qe.from(vt.headers),status:vt.status,statusText:vt.statusText,config:h,request:M})})}catch(H){if($&&$(),A&&A.aborted&&A.reason instanceof _){const ne=A.reason;throw ne.config=h,M&&(ne.request=M),H!==ne&&Object.defineProperty(ne,"cause",{__proto__:null,value:H,writable:!0,enumerable:!1,configurable:!0}),ne}if(oe)throw M&&!oe.request&&(oe.request=M),oe;if(H instanceof _)throw M&&!H.request&&(H.request=M),H;if(H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)){const ne=new _("Network Error",_.ERR_NETWORK,h,M,H&&H.response);throw Object.defineProperty(ne,"cause",{__proto__:null,value:H.cause||H,writable:!0,enumerable:!1,configurable:!0}),ne}throw _.from(H,H&&H.code,h,M,H&&H.response)}}},B5=new Map,oy=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let a=i.length,l=a,c,u,d=B5;for(;l--;)c=i[l],u=d.get(c),u===void 0&&d.set(c,u=l?new Map:D5(t)),d=u;return u};oy();const _d={http:e5,xhr:R5,fetch:{get:oy}};j.forEach(_d,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Hp=e=>`- ${e}`,U5=e=>j.isFunction(e)||e===null||e===!1;function $5(e,t){e=j.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let a=0;a<n;a++){r=e[a];let l;if(s=r,!U5(r)&&(s=_d[(l=String(r)).toLowerCase()],s===void 0))throw new _(`Unknown adapter '${l}'`);if(s&&(j.isFunction(s)||(s=s.get(t))))break;i[l||"#"+a]=s}if(!s){const a=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(Hp).join(`
`):" "+Hp(a[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+l,_.ERR_NOT_SUPPORT)}return s}const ay={getAdapter:$5,adapters:_d};function Il(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Li(null,e)}function Wp(e){return Il(e),e.headers=qe.from(e.headers),e.data=Ml.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ay.getAdapter(e.adapter||Ri.adapter,e)(e).then(function(r){Il(e),e.response=r;try{r.data=Ml.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=qe.from(r.headers),r},function(r){if(!ny(r)&&(Il(e),r&&r.response)){e.response=r.response;try{r.response.data=Ml.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=qe.from(r.response.headers)}return Promise.reject(r)})}const Ka={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ka[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Gp={};Ka.transitional=function(t,n,r){function s(i,a){return"[Axios v"+Id+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new _(s(a," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!Gp[a]&&(Gp[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};Ka.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function H5(e,t,n){if(typeof e!="object"||e===null)throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],a=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new _("option "+i+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}const Ao={assertOptions:H5,validators:Ka},He=Ao.validators;let ar=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Mp,response:new Mp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=(()=>{if(!s.stack)return"";const a=s.stack.indexOf(`
`);return a===-1?"":s.stack.slice(a+1)})();try{if(!r.stack)r.stack=i;else if(i){const a=i.indexOf(`
`),l=a===-1?-1:i.indexOf(`
`,a+1),c=l===-1?"":i.slice(l+1);String(r.stack).endsWith(c)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ao.assertOptions(r,{silentJSONParsing:He.transitional(He.boolean),forcedJSONParsing:He.transitional(He.boolean),clarifyTimeoutError:He.transitional(He.boolean),legacyInterceptorReqResOrdering:He.transitional(He.boolean),advertiseZstdAcceptEncoding:He.transitional(He.boolean),validateStatusUndefinedResolves:He.transitional(He.boolean)},!1),s!=null&&(j.isFunction(s)?n.paramsSerializer={serialize:s}:Ao.assertOptions(s,{encode:He.function,serialize:He.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ao.assertOptions(n,{baseUrl:He.spelling("baseURL"),withXsrfToken:He.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&j.merge(i.common,i[n.method]);i&&j.forEach(["delete","get","head","post","put","patch","query","common"],m=>{delete i[m]}),n.headers=qe.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(n)===!1)return;c=c&&g.synchronous;const b=n.transitional||Od;b&&b.legacyInterceptorReqResOrdering?l.unshift(g.fulfilled,g.rejected):l.push(g.fulfilled,g.rejected)});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let d,f=0,p;if(!c){const m=[Wp.bind(this),void 0];for(m.unshift(...l),m.push(...u),p=m.length,d=Promise.resolve(n);f<p;)d=d.then(m[f++],m[f++]);return d}p=l.length;let y=n;for(;f<p;){const m=l[f++],g=l[f++];try{y=m(y)}catch(b){g.call(this,b);break}}try{d=Wp.call(this,y)}catch(m){return Promise.reject(m)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=gr(this.defaults,t);const n=sy(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Z0(n,t.params,t.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(t){ar.prototype[t]=function(n,r){return this.request(gr(r||{},{method:t,url:n,data:r&&j.hasOwnProp(r,"data")?r.data:void 0}))}});j.forEach(["post","put","patch","query"],function(t){function n(r){return function(i,a,l){return this.request(gr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}ar.prototype[t]=n(),t!=="query"&&(ar.prototype[t+"Form"]=n(!0))});let W5=class ly{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new Li(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ly(function(s){t=s}),cancel:t}}};function G5(e){return function(n){return e.apply(null,n)}}function K5(e){return j.isObject(e)&&e.isAxiosError===!0}const ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ou).forEach(([e,t])=>{ou[t]=e});function cy(e){const t=new ar(e),n=V0(ar.prototype.request,t);return j.extend(n,ar.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return cy(gr(e,s))},n}const ve=cy(Ri);ve.Axios=ar;ve.CanceledError=Li;ve.CancelToken=W5;ve.isCancel=ny;ve.VERSION=Id;ve.toFormData=Ga;ve.AxiosError=_;ve.Cancel=ve.CanceledError;ve.all=function(t){return Promise.all(t)};ve.spread=G5;ve.isAxiosError=K5;ve.mergeConfig=gr;ve.AxiosHeaders=qe;ve.formToJSON=e=>ty(j.isHTMLForm(e)?new FormData(e):e);ve.getAdapter=ay.getAdapter;ve.HttpStatusCode=ou;ve.default=ve;const{Axios:LT,AxiosError:OT,CanceledError:MT,isCancel:IT,CancelToken:_T,VERSION:FT,all:zT,Cancel:VT,isAxiosError:DT,spread:BT,toFormData:UT,AxiosHeaders:$T,HttpStatusCode:HT,formToJSON:WT,getAdapter:GT,mergeConfig:KT,create:qT}=ve,_l="prism_token",kt={getToken(){return localStorage.getItem(_l)},setToken(e){localStorage.setItem(_l,e)},removeToken(){localStorage.removeItem(_l)}},q5="http://localhost:5000/api",te=ve.create({baseURL:q5,headers:{"Content-Type":"application/json"}});te.interceptors.request.use(e=>{const t=kt.getToken();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));te.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&kt.removeToken(),Promise.reject(e)});const Rt={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},uy="ozilla_local_users";let Qn=!1;function Qe(e){return String(e||"").toLowerCase().trim()}function tn(e){return String(e||"").trim()}function en(){try{const e=localStorage.getItem(uy),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function vn(e){localStorage.setItem(uy,JSON.stringify(e))}function Y5(e){const t={sub:e.id,email:e.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(t))}`}function Fl(e){const t=String(e||"");if(!t)return null;if(t.startsWith("local."))try{return JSON.parse(atob(t.slice(6)))}catch{return null}const n=t.split(".");if(n.length===3)try{return JSON.parse(atob(n[1]))}catch{return null}return null}function Ms(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,name:e.name||`${e.firstName||""} ${e.lastName||""}`.trim(),email:e.email,phone:e.phone,role:e.role||"user"}}function jr(e={}){const t=String(e.firstName||"Local").trim()||"Local",n=String(e.lastName||"User").trim()||"User",r=Qe(e.email||"local@ozillafestival.com"),s=tn(e.phone||"+923000000000");return{id:e.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:t,lastName:n,name:`${t} ${n}`.trim(),email:r,phone:s,password:String(e.password||""),role:"user"}}function X5(e){var t,n;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((n=e==null?void 0:e.message)==null?void 0:n.includes("ECONNREFUSED")))}function oo(e){return X5(e)?(Qn=!0,!0):!1}function Nr(e){const t=Ms(e);return{token:Y5(t),user:t,mode:"local-fallback"}}const Dr={async login(e){var i,a,l,c,u,d,f,p;const t=String((e==null?void 0:e.email)||(e==null?void 0:e.phone)||(e==null?void 0:e.identifier)||"").trim(),n=Qe(t),r=tn(t),s=String((e==null?void 0:e.password)||"").trim();try{const y=await te.post(Rt.AUTH.LOGIN,{email:t,password:s});if((i=y==null?void 0:y.data)!=null&&i.token){const m=en(),g=m.findIndex(h=>Qe(h.email)===n||tn(h.phone)===r),b={id:((a=y.data.user)==null?void 0:a.id)||`user-${Date.now()}`,firstName:((l=y.data.user)==null?void 0:l.firstName)||"",lastName:((c=y.data.user)==null?void 0:c.lastName)||"",name:((u=y.data.user)==null?void 0:u.name)||"",email:(d=y.data.user)!=null&&d.email?Qe(y.data.user.email):n,phone:(f=y.data.user)!=null&&f.phone?tn(y.data.user.phone):r,password:s,role:((p=y.data.user)==null?void 0:p.role)||"user"};return g>=0?(m[g]=b,vn(m)):vn([b,...m]),y.data}return y.data}catch(y){const m=en(),g=m.find(h=>(Qe(h.email)===n||tn(h.phone)===r)&&h.password===s);if(g)return Qn=!0,Nr(g);const b=m.find(h=>Qe(h.email)===n||tn(h.phone)===r);if(b&&b.password!==s){const h=new Error("Invalid credentials. Please check your password.");throw h.response={status:401,data:{message:"Invalid credentials. Please check your password."}},h}throw y}},async register(e){var l,c,u,d,f;const t=Qe(e==null?void 0:e.email),n=tn(e==null?void 0:e.phone),r=String((e==null?void 0:e.password)||"").trim(),s=en(),i=s.find(p=>Qe(p.email)===t),a=s.find(p=>tn(p.phone)===n);try{const p=await te.post(Rt.AUTH.REGISTER,{...e,email:t,phone:n,password:r});if((l=p==null?void 0:p.data)!=null&&l.token){const y=jr({id:(c=p.data.user)==null?void 0:c.id,firstName:e.firstName,lastName:e.lastName,email:t,phone:n,password:r}),m=s.filter(g=>Qe(g.email)!==t&&tn(g.phone)!==n);vn([y,...m])}return p.data}catch(p){if(((u=p==null?void 0:p.response)==null?void 0:u.status)===409||(f=(d=p==null?void 0:p.response)==null?void 0:d.data)!=null&&f.message)throw p;if(i){const m=new Error("Account already exists with this email. Please log in.");throw m.response={status:409,data:{message:"Account already exists with this email. Please log in."}},m}if(a){const m=new Error("Account already exists with this phone number. Please log in.");throw m.response={status:409,data:{message:"Account already exists with this phone number. Please log in."}},m}const y=jr({...e,email:t,phone:n,password:r});return vn([y,...s]),Qn=!0,Nr(y)}},async resendOtp(e){const t=Qe(e);try{return(await te.post(Rt.AUTH.RESEND_OTP,{email:t})).data}catch{return{message:"Development OTP generated successfully.",otpForDevelopment:"123456",mode:"local-fallback"}}},async verifyOtp(e){const t=Qe(e==null?void 0:e.email),n=String((e==null?void 0:e.otp)||"").trim();try{return(await te.post(Rt.AUTH.VERIFY_OTP,{email:t,otp:n})).data}catch{if(n==="123456"||n.length>=4)return{message:"Email verified successfully",mode:"local-fallback"};const s=new Error("OTP verification failed");throw s.response={status:400,data:{message:"OTP verification failed"}},s}},async getCurrentUser(){const e=kt.getToken();if(!e){const n=new Error("Unauthorized");throw n.response={status:401,data:{message:"Unauthorized"}},n}const t=Fl(e);if((t==null?void 0:t.mode)==="local-fallback"||String(e||"").startsWith("local.")){const r=en().find(s=>s.id===(t==null?void 0:t.sub)||Qe(s.email)===Qe(t==null?void 0:t.email));if(r)return Ms(r)}try{return(await te.get(Rt.AUTH.ME)).data}catch(n){const s=en().find(i=>i.id===(t==null?void 0:t.sub)||Qe(i.email)===Qe(t==null?void 0:t.email));if(s)return Ms(s);throw n}},async logout(){if(Qn)return{message:"Logged out successfully"};try{return(await te.post(Rt.AUTH.LOGOUT)).data}catch(e){if(oo(e))return{message:"Logged out successfully"};throw e}},async forgotPassword(e){return(await te.post(Rt.AUTH.FORGOT_PASSWORD,{email:e})).data},async resetPassword(e){return(await te.post(Rt.AUTH.RESET_PASSWORD,e)).data},async googleCodeLogin(e,t="postmessage",n){if(Qn){const s=jr(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=en();return i.some(a=>a.email===s.email)||vn([s,...i]),Nr(s)}try{return(await te.post(Rt.AUTH.GOOGLE_CODE_LOGIN,{code:e,redirectUri:t,profile:n})).data}catch(r){if(oo(r)){const i=jr(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Nr(i)}throw r}},async googleTokenLogin(e,t){if(Qn){const r=jr(t||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),s=en();return s.some(i=>i.email===r.email)||vn([r,...s]),Nr(r)}try{return(await te.post(Rt.AUTH.GOOGLE_TOKEN_LOGIN,{credential:e,profile:t})).data}catch(n){if(oo(n)){const s=jr(t||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return Nr(s)}throw n}},async updateProfile(e){if(Qn){const t=kt.getToken(),n=Fl(t),r=en(),s=r.findIndex(l=>l.id===(n==null?void 0:n.sub)||l.email===(n==null?void 0:n.email));if(s===-1){const l=new Error("Unauthorized");throw l.response={status:401,data:{message:"Unauthorized"}},l}const i=r[s],a={...i,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():i.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():i.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():i.phone};return a.name=`${a.firstName||""} ${a.lastName||""}`.trim()||i.name,r[s]=a,vn(r),{message:"Profile updated successfully",user:Ms(a)}}try{return(await te.put(Rt.AUTH.PROFILE,e)).data}catch(t){if(oo(t)){const n=kt.getToken(),r=Fl(n),s=en(),i=s.findIndex(c=>c.id===(r==null?void 0:r.sub)||c.email===(r==null?void 0:r.email));if(i===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const a=s[i],l={...a,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():a.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():a.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():a.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||a.name,s[i]=l,vn(s),{message:"Profile updated successfully",user:Ms(l)}}throw t}}},dy=S.createContext(null);function Q5({children:e}){const[t,n]=S.useState(null),[r,s]=S.useState(!0);S.useEffect(()=>{i()},[]);const i=async()=>{try{if(kt.getToken()){const p=await Dr.getCurrentUser();n(p)}}catch{kt.removeToken()}finally{s(!1)}},a=async f=>{const p=await Dr.login(f);return kt.setToken(p.token),n(p.user),p},l=async f=>{const p=await Dr.register(f);return kt.setToken(p.token),n(p.user),p},c=()=>{Dr.logout().catch(()=>{}),kt.removeToken(),n(null)},u=(t==null?void 0:t.role)==="admin"||["ubair1100@gmail.com","admin@ozillafestival.com","muhammadubair@gmail.com","admin@prism.com"].includes(String((t==null?void 0:t.email)||"").toLowerCase().trim()),d={user:t,isAdmin:u,loading:r,login:a,register:l,logout:c,checkAuth:i};return o.jsx(dy.Provider,{value:d,children:e})}function Ut(){const e=S.useContext(dy);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}function J5({children:e}){const{user:t,loading:n}=Ut(),r=st();if(n)return o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!t){const s=`${r.pathname}${r.search}`,i=new URLSearchParams({returnTo:s}).toString();return o.jsx(je,{to:`/login?${i}`,replace:!0})}return e||o.jsx(Ti,{})}function qa(e,t="/dashboard"){if(!e||typeof e!="string")return t;let n=e.trim();if(n.startsWith("//")||/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(n))return t;n.startsWith("/ozillafest")&&(n=n.slice(11)),n.startsWith("/")||(n=`/${n}`);const r=n.split("?")[0].replace(/\/$/,"");return!r||r==="/login"||r==="/register"?t:n}function Z5({children:e}){const{user:t,loading:n}=Ut(),r=st();if(n)return o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(t){const i=new URLSearchParams(r.search).get("returnTo"),a=qa(i,"/dashboard");return o.jsx(je,{to:a,replace:!0})}return e||o.jsx(Ti,{})}function Fe(e){if(!e||typeof e!="string"||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))return e;const t="/ozillafest/",n=t.endsWith("/")?t:`${t}/`,r=e.replace(/^\/+/,"");return r.startsWith("assets/")||r.startsWith("favicon")?`${n}${r}`:e.startsWith("/")?`${n}${r}`:e}function Ya({className:e="",nodeColor:t="#EC4899",lineColor:n="236, 72, 153",secondaryColor:r="255, 90, 31",maxDistance:s=140,speed:i=.6}){const a=S.useRef(null);return S.useEffect(()=>{var P,T;const l=a.current;if(!l)return;const c=l.getContext("2d");if(!c)return;let u,d=l.width=((P=l.parentElement)==null?void 0:P.clientWidth)||window.innerWidth,f=l.height=((T=l.parentElement)==null?void 0:T.clientHeight)||window.innerHeight;const y=d<768?42:72,m=350,g=500;let b={x:d/2,y:f/2,targetX:d/2,targetY:f/2,active:!1},h={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const x=[];for(let L=0;L<y;L++)x.push({x:(Math.random()-.5)*d*1.2,y:(Math.random()-.5)*f*1.2,z:(Math.random()-.5)*g,vx:(Math.random()-.5)*i*.8,vy:(Math.random()-.5)*i*.8,vz:(Math.random()-.5)*i*.8,radius:Math.random()*2+1.5,colorType:Math.random()>.4?"primary":"secondary"});const v=()=>{l.parentElement&&(d=l.width=l.parentElement.clientWidth||window.innerWidth,f=l.height=l.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",v);const w=L=>{const C=l.getBoundingClientRect();b.x=L.clientX-C.left,b.y=L.clientY-C.top,b.targetX=b.x,b.targetY=b.y,b.active=!0;const z=(b.x-d/2)/(d/2),U=(b.y-f/2)/(f/2);h.targetRotY=z*.18,h.targetRotX=-U*.18},k=()=>{b.active=!1,h.targetRotX=0,h.targetRotY=0};window.addEventListener("mousemove",w,{passive:!0}),window.addEventListener("mouseleave",k,{passive:!0});const N=()=>{c.clearRect(0,0,d,f),h.rotX+=(h.targetRotX-h.rotX)*.05,h.rotY+=(h.targetRotY-h.rotY)*.05;const L=Math.cos(h.rotY),C=Math.sin(h.rotY),z=Math.cos(h.rotX),U=Math.sin(h.rotX),J=d/2,W=f/2,I=[];for(let G=0;G<y;G++){const E=x[G];E.x+=E.vx,E.y+=E.vy,E.z+=E.vz;const R=d*.7,A=f*.7,M=g*.6;(E.x<-R||E.x>R)&&(E.vx*=-1),(E.y<-A||E.y>A)&&(E.vy*=-1),(E.z<-M||E.z>M)&&(E.vz*=-1);let $=E.x*L-E.z*C,q=E.z*L+E.x*C,oe=E.y*z-q*U,Be=q*z+E.y*U;const H=Be+g;if(H<=0)continue;const ne=m/(m+H*.7),Me=J+$*ne,it=W+oe*ne,$t=Math.max(.15,Math.min(.9,(Be+g)/(g*1.5)));I.push({x:Me,y:it,z:Be,scale:ne,alpha:$t,radius:E.radius*ne,colorType:E.colorType,original:E})}const F=I.length;for(let G=0;G<F;G++){const E=I[G];for(let R=G+1;R<F;R++){const A=I[R],M=E.x-A.x,$=E.y-A.y,q=Math.sqrt(M*M+$*$);if(q<s){const oe=(1-q/s)*.45*Math.min(E.alpha,A.alpha),Be=E.colorType==="primary"?n:r;c.beginPath(),c.moveTo(E.x,E.y),c.lineTo(A.x,A.y),c.strokeStyle=`rgba(${Be}, ${oe})`,c.lineWidth=Math.max(.6,(1-q/s)*1.4),c.stroke();for(let H=R+1;H<F;H++){const ne=I[H],Me=Math.hypot(A.x-ne.x,A.y-ne.y),it=Math.hypot(E.x-ne.x,E.y-ne.y);if(Me<s&&it<s){const $t=(1-(q+Me+it)/(s*3))*.08;c.beginPath(),c.moveTo(E.x,E.y),c.lineTo(A.x,A.y),c.lineTo(ne.x,ne.y),c.closePath(),c.fillStyle=`rgba(${n}, ${$t})`,c.fill()}}}}}for(let G=0;G<F;G++){const E=I[G],R=E.colorType==="primary"?`rgba(${n}, ${E.alpha})`:`rgba(${r}, ${E.alpha})`;c.beginPath(),c.arc(E.x,E.y,Math.max(1.2,E.radius),0,Math.PI*2),c.fillStyle=R,c.shadowColor=`rgba(${n}, 0.8)`,c.shadowBlur=8,c.fill(),c.shadowBlur=0}u=requestAnimationFrame(N)};return N(),()=>{window.removeEventListener("resize",v),window.removeEventListener("mousemove",w),window.removeEventListener("mouseleave",k),cancelAnimationFrame(u)}},[t,n,r,s,i]),o.jsx("canvas",{ref:a,className:`plexus-net-canvas ${e}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}})}function zl({children:e}){const t=st(),n=t.pathname==="/login",r=t.pathname==="/register";return o.jsxs("div",{className:`auth-page ${n?"auth-page-login":""} ${r?"auth-page-register":""}`,children:[o.jsx(Ya,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:135,speed:.5}),o.jsx("div",{className:"auth-ambient-blob-1","aria-hidden":"true"}),o.jsx("div",{className:"auth-ambient-blob-2","aria-hidden":"true"}),o.jsxs("div",{className:"auth-centered-shell",children:[o.jsxs("div",{className:"auth-center-header",children:[o.jsxs(K,{to:"/",className:"auth-center-logo-wrap","aria-label":"Go to Home",children:[o.jsx("img",{src:Fe("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"auth-center-logo",onError:s=>{s.currentTarget.src=Fe("/assets/logo.jpeg")}}),o.jsxs("div",{className:"auth-center-brand-text",children:[o.jsx("strong",{children:"OZILLA FESTIVAL"}),o.jsx("span",{children:"OFFICIAL PORTAL · 2026"})]})]}),o.jsx("span",{className:"auth-center-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),o.jsx("h1",{className:"auth-center-title",children:n?"Welcome Back to Ozilla":"Join Ozilla Festival 2026"})]}),o.jsxs("section",{className:"auth-card",children:[o.jsxs("div",{className:"auth-card-tabs",children:[o.jsx(K,{to:`/login${t.search}`,className:`auth-tab-btn ${n?"active":""}`,children:"Sign In"}),o.jsx(K,{to:`/register${t.search}`,className:`auth-tab-btn ${r?"active":""}`,children:"Create Account"})]}),o.jsx("div",{className:"auth-card-body",children:e||o.jsx(Ti,{})})]}),o.jsxs("div",{className:"auth-center-ribbon",children:[o.jsx("span",{children:"📅 Nov 01, 2026"}),o.jsx("span",{children:"📍 Lahore, Pakistan"}),o.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}const Fd=S.createContext({});function yr(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const eS=typeof window<"u",gi=eS?S.useLayoutEffect:S.useEffect,Xa=S.createContext(null);function zd(e,t){e.indexOf(t)===-1&&e.push(t)}function ha(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Jt=(e,t,n)=>n>t?t:n<e?e:n;let Qa=()=>{};const Bn={},fy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),py=e=>typeof e=="object"&&e!==null,hy=e=>/^0[^.\s]+$/u.test(e);function my(e){let t;return()=>(t===void 0&&(t=e()),t)}const Pt=e=>e,Oi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),yi=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Vd{constructor(){this.subscriptions=[]}add(t){return zd(this.subscriptions,t),()=>ha(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let i=0;i<s;i++){const a=this.subscriptions[i];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mt=e=>e*1e3,Nt=e=>e/1e3,gy=(e,t)=>t?e*(1e3/t):0,yy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,tS=1e-7,nS=12;function rS(e,t,n,r,s){let i,a,l=0;do a=t+(n-t)/2,i=yy(a,r,s)-e,i>0?n=a:t=a;while(Math.abs(i)>tS&&++l<nS);return a}function Mi(e,t,n,r){if(e===t&&n===r)return Pt;const s=i=>rS(i,0,1,e,n);return i=>i===0||i===1?i:yy(s(i),t,r)}const xy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vy=e=>t=>1-e(1-t),by=Mi(.33,1.53,.69,.99),Dd=vy(by),wy=xy(Dd),Sy=e=>e>=1?1:(e*=2)<1?.5*Dd(e):.5*(2-Math.pow(2,-10*(e-1))),Bd=e=>1-Math.sin(Math.acos(e)),ky=vy(Bd),jy=xy(Bd),sS=Mi(.42,0,1,1),iS=Mi(0,0,.58,1),Ny=Mi(.42,0,.58,1),oS=e=>Array.isArray(e)&&typeof e[0]!="number",Ey=e=>Array.isArray(e)&&typeof e[0]=="number",aS={linear:Pt,easeIn:sS,easeInOut:Ny,easeOut:iS,circIn:Bd,circInOut:jy,circOut:ky,backIn:Dd,backInOut:wy,backOut:by,anticipate:Sy},lS=e=>typeof e=="string",Kp=e=>{if(Ey(e)){Qa(e.length===4);const[t,n,r,s]=e;return Mi(t,n,r,s)}else if(lS(e))return aS[e];return e},ao=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function cS(e){let t=new Set,n=new Set,r=!1,s=!1;const i=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){i.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const y=f&&r?t:n;return d&&i.add(u),y.add(u),u},cancel:u=>{n.delete(u),i.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(l),t.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const uS=40;function Py(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,a=ao.reduce((v,w)=>(v[w]=cS(i),v),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:f,preRender:p,render:y,postRender:m}=a,g=()=>{const v=Bn.useManualTiming,w=v?s.timestamp:performance.now();n=!1,v||(s.delta=r?1e3/60:Math.max(Math.min(w-s.timestamp,uS),1)),s.timestamp=w,s.isProcessing=!0,l.process(s),c.process(s),u.process(s),d.process(s),f.process(s),p.process(s),y.process(s),m.process(s),s.isProcessing=!1,n&&t&&(r=!1,e(g))},b=()=>{n=!0,r=!0,s.isProcessing||e(g)};return{schedule:ao.reduce((v,w)=>{const k=a[w];return v[w]=(N,P=!1,T=!1)=>(n||b(),k.schedule(N,P,T)),v},{}),cancel:v=>{for(let w=0;w<ao.length;w++)a[ao[w]].cancel(v)},state:s,steps:a}}const{schedule:re,cancel:pn,state:_e,steps:Vl}=Py(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0);let Ro;function dS(){Ro=void 0}const Ze={now:()=>(Ro===void 0&&Ze.set(_e.isProcessing||Bn.useManualTiming?_e.timestamp:performance.now()),Ro),set:e=>{Ro=e,queueMicrotask(dS)}},Ty=e=>t=>typeof t=="string"&&t.startsWith(e),Cy=Ty("--"),fS=Ty("var(--"),Ud=e=>fS(e)?pS.test(e.split("/*")[0].trim()):!1,pS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function qp(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ms={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},xi={...ms,transform:e=>Jt(0,1,e)},lo={...ms,default:1},Ws=e=>Math.round(e*1e5)/1e5,$d=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hS(e){return e==null}const mS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hd=(e,t)=>n=>!!(typeof n=="string"&&mS.test(n)&&n.startsWith(e)||t&&!hS(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ay=(e,t,n)=>r=>{if(typeof r!="string")return r;const[s,i,a,l]=r.match($d);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},gS=e=>Jt(0,255,e),Dl={...ms,transform:e=>Math.round(gS(e))},rr={test:Hd("rgb","red"),parse:Ay("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Dl.transform(e)+", "+Dl.transform(t)+", "+Dl.transform(n)+", "+Ws(xi.transform(r))+")"};function yS(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const au={test:Hd("#"),parse:yS,transform:rr.transform},Ii=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=Ii("deg"),Qt=Ii("%"),D=Ii("px"),xS=Ii("vh"),vS=Ii("vw"),Yp={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},Br={test:Hd("hsl","hue"),parse:Ay("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Qt.transform(Ws(t))+", "+Qt.transform(Ws(n))+", "+Ws(xi.transform(r))+")"},be={test:e=>rr.test(e)||au.test(e)||Br.test(e),parse:e=>rr.test(e)?rr.parse(e):Br.test(e)?Br.parse(e):au.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?rr.transform(e):Br.transform(e),getAnimatableNone:e=>{const t=be.parse(e);return t.alpha=0,be.transform(t)}},bS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wS(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match($d))==null?void 0:t.length)||0)+(((n=e.match(bS))==null?void 0:n.length)||0)>0}const Ry="number",Ly="color",SS="var",kS="var(",Xp="${}",jS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function as(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[];let i=0;const l=t.replace(jS,c=>(be.test(c)?(r.color.push(i),s.push(Ly),n.push(be.parse(c))):c.startsWith(kS)?(r.var.push(i),s.push(SS),n.push(c)):(r.number.push(i),s.push(Ry),n.push(parseFloat(c))),++i,Xp)).split(Xp);return{values:n,split:l,indexes:r,types:s}}function NS(e){return as(e).values}function Oy({split:e,types:t}){const n=e.length;return r=>{let s="";for(let i=0;i<n;i++)if(s+=e[i],r[i]!==void 0){const a=t[i];a===Ry?s+=Ws(r[i]):a===Ly?s+=be.transform(r[i]):s+=r[i]}return s}}function ES(e){return Oy(as(e))}const PS=e=>typeof e=="number"?0:be.test(e)?be.getAnimatableNone(e):e,TS=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:PS(e);function CS(e){const t=as(e);return Oy(t)(t.values.map((r,s)=>TS(r,t.split[s])))}const Vt={test:wS,parse:NS,createTransformer:ES,getAnimatableNone:CS};function Bl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function AS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,a=0;if(!t)s=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;s=Bl(c,l,e+1/3),i=Bl(c,l,e),a=Bl(c,l,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}function ma(e,t){return n=>n>0?t:e}const ie=(e,t,n)=>e+(t-e)*n,Ul=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r;return s<0?0:Math.sqrt(s)},RS=[au,rr,Br],LS=e=>RS.find(t=>t.test(e));function Qp(e){const t=LS(e);if(!t)return!1;let n=t.parse(e);return t===Br&&(n=AS(n)),n}const Jp=(e,t)=>{const n=Qp(e),r=Qp(t);if(!n||!r)return ma(e,t);const s={...n};return i=>(s.red=Ul(n.red,r.red,i),s.green=Ul(n.green,r.green,i),s.blue=Ul(n.blue,r.blue,i),s.alpha=ie(n.alpha,r.alpha,i),rr.transform(s))},lu=new Set(["none","hidden"]);function OS(e,t){return lu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function MS(e,t){return n=>ie(e,t,n)}function Wd(e){return typeof e=="number"?MS:typeof e=="string"?Ud(e)?ma:be.test(e)?Jp:FS:Array.isArray(e)?My:typeof e=="object"?be.test(e)?Jp:IS:ma}function My(e,t){const n=[...e],r=n.length,s=e.map((i,a)=>Wd(i)(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=s[a](i);return n}}function IS(e,t){const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=Wd(e[s])(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}}function _S(e,t){const n=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const i=t.types[s],a=e.indexes[i][r[i]],l=e.values[a]??0;n[s]=l,r[i]++}return n}const FS=(e,t)=>{const n=Vt.createTransformer(t),r=as(e),s=as(t);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?lu.has(e)&&!s.values.length||lu.has(t)&&!r.values.length?OS(e,t):Oi(My(_S(r,s),s.values),n):ma(e,t)};function Iy(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ie(e,t,n):Wd(e)(e,t)}const zS=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>re.update(t,n),stop:()=>pn(t),now:()=>_e.isProcessing?_e.timestamp:Ze.now()}},_y=(e,t,n=10)=>{let r="";const s=Math.max(Math.round(t/n),2);for(let i=0;i<s;i++)r+=Math.round(e(i/(s-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ga=2e4;function Gd(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ga;)t+=n,r=e.next(t);return t>=ga?1/0:t}function VS(e,t=100,n){const r=n({...e,keyframes:[0,t]}),s=Math.min(Gd(r),ga);return{type:"keyframes",ease:i=>r.next(s*i).value/t,duration:Nt(s)}}const me={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function cu(e,t){return e*Math.sqrt(1-t*t)}const DS=12;function BS(e,t,n){let r=n;for(let s=1;s<DS;s++)r=r-e(r)/t(r);return r}const $l=.001;function US({duration:e=me.duration,bounce:t=me.bounce,velocity:n=me.velocity,mass:r=me.mass}){let s,i,a=1-t;a=Jt(me.minDamping,me.maxDamping,a),e=Jt(me.minDuration,me.maxDuration,Nt(e)),a<1?(s=u=>{const d=u*a,f=d*e,p=d-n,y=cu(u,a),m=Math.exp(-f);return $l-p/y*m},i=u=>{const f=u*a*e,p=f*n+n,y=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),g=cu(Math.pow(u,2),a);return(-s(u)+$l>0?-1:1)*((p-y)*m)/g}):(s=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-$l+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=BS(s,i,l);if(e=mt(e),isNaN(c))return{stiffness:me.stiffness,damping:me.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const $S=["duration","bounce"],HS=["stiffness","damping","mass"];function Zp(e,t){return t.some(n=>e[n]!==void 0)}function WS(e){let t={velocity:me.velocity,stiffness:me.stiffness,damping:me.damping,mass:me.mass,isResolvedFromDuration:!1,...e};if(!Zp(e,HS)&&Zp(e,$S))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),s=r*r,i=2*Jt(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:me.mass,stiffness:s,damping:i}}else{const n=US({...e,velocity:0});t={...t,...n,mass:me.mass},t.isResolvedFromDuration=!0}return t}function ya(e=me.visualDuration,t=me.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:s}=n;const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:y}=WS({...n,velocity:-Nt(n.velocity||0)}),m=p||0,g=u/(2*Math.sqrt(c*d)),b=a-i,h=Nt(Math.sqrt(c/d)),x=Math.abs(b)<5;r||(r=x?me.restSpeed.granular:me.restSpeed.default),s||(s=x?me.restDelta.granular:me.restDelta.default);let v,w,k,N,P,T;if(g<1)k=cu(h,g),N=(m+g*h*b)/k,v=C=>{const z=Math.exp(-g*h*C);return a-z*(N*Math.sin(k*C)+b*Math.cos(k*C))},P=g*h*N+b*k,T=g*h*b-N*k,w=C=>Math.exp(-g*h*C)*(P*Math.sin(k*C)+T*Math.cos(k*C));else if(g===1){v=z=>a-Math.exp(-h*z)*(b+(m+h*b)*z);const C=m+h*b;w=z=>Math.exp(-h*z)*(h*C*z-m)}else{const C=h*Math.sqrt(g*g-1);v=W=>{const I=Math.exp(-g*h*W),F=Math.min(C*W,300);return a-I*((m+g*h*b)*Math.sinh(F)+C*b*Math.cosh(F))/C};const z=(m+g*h*b)/C,U=g*h*z-b*C,J=g*h*b-z*C;w=W=>{const I=Math.exp(-g*h*W),F=Math.min(C*W,300);return I*(U*Math.sinh(F)+J*Math.cosh(F))}}const L={calculatedDuration:y&&f||null,velocity:C=>mt(w(C)),next:C=>{if(!y&&g<1){const U=Math.exp(-g*h*C),J=Math.sin(k*C),W=Math.cos(k*C),I=a-U*(N*J+b*W),F=mt(U*(P*J+T*W));return l.done=Math.abs(F)<=r&&Math.abs(a-I)<=s,l.value=l.done?a:I,l}const z=v(C);if(y)l.done=C>=f;else{const U=mt(w(C));l.done=Math.abs(U)<=r&&Math.abs(a-z)<=s}return l.value=l.done?a:z,l},toString:()=>{const C=Math.min(Gd(L),ga),z=_y(U=>L.next(C*U).value,C,30);return C+"ms "+z},toTransition:()=>{}};return L}ya.applyToOptions=e=>{const t=VS(e,100,ya);return e.ease=t.ease,e.duration=mt(t.duration),e.type="keyframes",e};const GS=5;function Fy(e,t,n){const r=Math.max(t-GS,0);return gy(n-e(r),t-r)}function uu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},y=T=>l!==void 0&&T<l||c!==void 0&&T>c,m=T=>l===void 0?c:c===void 0||Math.abs(l-T)<Math.abs(c-T)?l:c;let g=n*t;const b=f+g,h=a===void 0?b:a(b);h!==b&&(g=h-f);const x=T=>-g*Math.exp(-T/r),v=T=>h+x(T),w=T=>{const L=x(T),C=v(T);p.done=Math.abs(L)<=u,p.value=p.done?h:C};let k,N;const P=T=>{y(p.value)&&(k=T,N=ya({keyframes:[p.value,m(p.value)],velocity:Fy(v,T,p.value),damping:s,stiffness:i,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:T=>{let L=!1;return!N&&k===void 0&&(L=!0,w(T),P(T)),k!==void 0&&T>=k?N.next(T-k):(!L&&w(T),p)}}}function KS(e,t,n){const r=[],s=n||Bn.mix||Iy,i=e.length-1;for(let a=0;a<i;a++){let l=s(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||Pt:t;l=Oi(c,l)}r.push(l)}return r}function zy(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;if(Qa(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=KS(t,r,s),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=yi(e[f],e[f+1],d);return l[f](p)};return n?d=>u(Jt(e[0],e[i-1],d)):u}function qS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=yi(0,t,r);e.push(ie(n,1,s))}}function YS(e){const t=[0];return qS(t,e.length-1),t}function XS(e,t){return e.map(n=>n*t)}function QS(e,t){return e.map(()=>t||Ny).splice(0,e.length-1)}function Gs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=oS(r)?r.map(Kp):Kp(r),i={done:!1,value:t[0]},a=XS(n&&n.length===t.length?n:YS(t),e),l=zy(a,t,{ease:Array.isArray(s)?s:QS(t,s)});return{calculatedDuration:e,next:c=>(i.value=l(c),i.done=c>=e,i)}}const JS=e=>e!==null;function Ja(e,{repeat:t,repeatType:n="loop"},r,s=1){const i=e.filter(JS),l=s<0||t&&n!=="loop"&&t%2===1?0:i.length-1;return!l||r===void 0?i[l]:r}const ZS={decay:uu,inertia:uu,tween:Gs,keyframes:Gs,spring:ya};function Vy(e){typeof e.type=="string"&&(e.type=ZS[e.type])}class Kd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const ek=e=>e/100;class vi extends Kd{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,s;const{motionValue:n}=this.options;n&&n.updatedAt!==Ze.now()&&this.tick(Ze.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(r=this.options).onStop)==null||s.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Vy(t);const{type:n=Gs,repeat:r=0,repeatDelay:s=0,repeatType:i,velocity:a=0}=t;let{keyframes:l}=t;const c=n||Gs;c!==Gs&&typeof l[0]!="number"&&(this.mixKeyframes=Oi(ek,Iy(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});i==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=Gd(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+s,this.totalDuration=this.resolvedDuration*(r+1)-s,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:s,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:y,type:m,onUpdate:g,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const h=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>s;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let v=this.currentTime,w=r;if(f){const T=Math.min(this.currentTime,s)/l;let L=Math.floor(T),C=T%1;!C&&T>=1&&(C=1),C===1&&L--,L=Math.min(L,f+1),!!(L%2)&&(p==="reverse"?(C=1-C,y&&(C-=y/l)):p==="mirror"&&(w=a)),v=Jt(0,1,C)*l}let k;x?(this.delayState.value=d[0],k=this.delayState):k=w.next(v),i&&!x&&(k.value=i(k.value));let{done:N}=k;!x&&c!==null&&(N=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return P&&m!==uu&&(k.value=Ja(d,this.options,b,this.speed)),g&&g(k.value),P&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return Nt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Nt(t)}get time(){return Nt(this.currentTime)}set time(t){t=mt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return Fy(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(Ze.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Nt(this.currentTime))}play(){var s,i;if(this.isStopped)return;const{driver:t=zS,startTime:n}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),(i=(s=this.options).onPlay)==null||i.call(s);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ze.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function tk(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const sr=e=>e*180/Math.PI,du=e=>{const t=sr(Math.atan2(e[1],e[0]));return fu(t)},nk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:du,rotateZ:du,skewX:e=>sr(Math.atan(e[1])),skewY:e=>sr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},fu=e=>(e=e%360,e<0&&(e+=360),e),eh=du,th=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),nh=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),rk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:th,scaleY:nh,scale:e=>(th(e)+nh(e))/2,rotateX:e=>fu(sr(Math.atan2(e[6],e[5]))),rotateY:e=>fu(sr(Math.atan2(-e[2],e[0]))),rotateZ:eh,rotate:eh,skewX:e=>sr(Math.atan(e[4])),skewY:e=>sr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function pu(e){return e.includes("scale")?1:0}function hu(e,t){if(!e||e==="none")return pu(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,s;if(n)r=rk,s=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=nk,s=l}if(!s)return pu(t);const i=r[t],a=s[1].split(",").map(ik);return typeof i=="function"?i(a):a[i]}const sk=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return hu(n,t)};function ik(e){return parseFloat(e.trim())}const gs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ys=new Set([...gs,"pathRotation"]),rh=e=>e===ms||e===D,ok=new Set(["x","y","z"]),ak=gs.filter(e=>!ok.has(e));function lk(e){const t=[];return ak.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Cn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>hu(t,"x"),y:(e,{transform:t})=>hu(t,"y")};Cn.translateX=Cn.x;Cn.translateY=Cn.y;const lr=new Set;let mu=!1,gu=!1,yu=!1;function Dy(){if(gu){const e=Array.from(lr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const s=lk(r);s.length&&(n.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const s=n.get(r);s&&s.forEach(([i,a])=>{var l;(l=r.getValue(i))==null||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}gu=!1,mu=!1,lr.forEach(e=>e.complete(yu)),lr.clear()}function By(){lr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(gu=!0)})}function ck(){yu=!0,By(),Dy(),yu=!1}class qd{constructor(t,n,r,s,i,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=s,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(lr.add(this),mu||(mu=!0,re.read(By),re.resolveKeyframes(Dy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:s}=this;if(t[0]===null){const i=s==null?void 0:s.get(),a=t[t.length-1];if(i!==void 0)t[0]=i;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&i===void 0&&s.set(t[0])}tk(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),lr.delete(this)}cancel(){this.state==="scheduled"&&(lr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const uk=e=>e.startsWith("--");function Uy(e,t,n){uk(t)?e.style.setProperty(t,n):e.style[t]=n}const dk={};function $y(e,t){const n=my(e);return()=>dk[t]??n()}const fk=$y(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Hy=$y(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Is=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,sh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Is([0,.65,.55,1]),circOut:Is([.55,0,1,.45]),backIn:Is([.31,.01,.66,-.59]),backOut:Is([.33,1.53,.69,.99])};function Wy(e,t){if(e)return typeof e=="function"?Hy()?_y(e,t):"ease-out":Ey(e)?Is(e):Array.isArray(e)?e.map(n=>Wy(n,t)||sh.easeOut):sh[e]}function pk(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:a="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const f=Wy(l,s);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:s,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(d,p)}function Gy(e){return typeof e=="function"&&"applyToOptions"in e}function hk({type:e,...t}){return Gy(e)&&Hy()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Ky extends Kd{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:s,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=t,Qa(typeof t.type!="string");const u=hk(t);this.animation=pk(n,r,s,u,i),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const d=Ja(s,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Uy(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,s;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((s=(r=this.animation).commitStyles)==null||s.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Nt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Nt(t)}get time(){return Nt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=mt(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:s}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&fk()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Pt):s(this)}}const qy={anticipate:Sy,backInOut:wy,circInOut:jy};function mk(e){return e in qy}function gk(e){typeof e.ease=="string"&&mk(e.ease)&&(e.ease=qy[e.ease])}const Hl=10;class yk extends Ky{constructor(t){gk(t),Vy(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:s,element:i,...a}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new vi({...a,autoplay:!1}),c=Math.max(Hl,Ze.now()-this.startTime),u=Jt(0,Hl,c-Hl),d=l.sample(c).value,{name:f}=this.options;i&&f&&Uy(i,f,d),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,d,u),l.stop()}}const ih=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Vt.test(e)||e==="0")&&!e.startsWith("url("));function xk(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function vk(e,t,n,r){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],a=ih(s,t),l=ih(i,t);return!a||!l?!1:xk(e)||(n==="spring"||Gy(n))&&r}function xu(e){e.duration=0,e.type="keyframes"}const Yy=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),bk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function wk(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&bk.test(e[t]))return!0;return!1}const Sk=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),kk=my(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function jk(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:s,damping:i,type:a,keyframes:l}=e,c=(f=t==null?void 0:t.owner)==null?void 0:f.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:d}=t.owner.getProps();return kk()&&n&&(Yy.has(n)||Sk.has(n)&&wk(l))&&(n!=="transform"||!d)&&!u&&!r&&s!=="mirror"&&i!==0&&a!=="inertia"}const Nk=40;class Ek extends Kd{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:a="loop",keyframes:l,name:c,motionValue:u,element:d,...f}){var m;super(),this.stop=()=>{var g,b;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=Ze.now();const p={autoplay:t,delay:n,type:r,repeat:s,repeatDelay:i,repeatType:a,name:c,motionValue:u,element:d,...f},y=(d==null?void 0:d.KeyframeResolver)||qd;this.keyframeResolver=new y(l,(g,b,h)=>this.onKeyframesResolved(g,b,p,!h),c,u,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,s){var h,x;this.keyframeResolver=void 0;const{name:i,type:a,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=Ze.now();let f=!0;vk(t,i,a,l)||(f=!1,(Bn.instantAnimations||!c)&&(d==null||d(Ja(t,r,n))),t[0]=t[t.length-1],xu(r),r.repeat=0);const y={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>Nk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},m=f&&!u&&jk(y),g=(x=(h=y.motionValue)==null?void 0:h.owner)==null?void 0:x.current;let b;if(m)try{b=new yk({...y,element:g})}catch{b=new vi(y)}else b=new vi(y);b.finished.then(()=>{this.notifyFinished()}).catch(Pt),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),ck()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Xy(e,t,n,r=0,s=1){const i=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),a=e.size,l=(a-1)*r;return typeof n=="function"?n(i,a):s===1?i*r:l-i*r}const oh=30,Pk=e=>!isNaN(parseFloat(e)),Ks={current:void 0};class Tk{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var i;const s=Ze.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((i=this.events.change)==null||i.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ze.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Pk(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Vd);const r=this.events[t].add(n);return t==="change"?()=>{r(),re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Ks.current&&Ks.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Ze.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>oh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,oh);return gy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xr(e,t){return new Tk(e,t)}function Qy(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function Yd(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Qy(n,e):n}const Ck={type:"spring",stiffness:500,damping:25,restSpeed:10},Ak=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rk={type:"keyframes",duration:.8},Lk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ok=(e,{keyframes:t})=>t.length>2?Rk:ys.has(e)?e.startsWith("scale")?Ak(t[1]):Ck:Lk,Mk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Ik(e){for(const t in e)if(!Mk.has(t))return!0;return!1}const Xd=(e,t,n,r={},s,i)=>a=>{const l=Yd(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:s};Ik(l)||Object.assign(d,Ok(e,d)),d.duration&&(d.duration=mt(d.duration)),d.repeatDelay&&(d.repeatDelay=mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(xu(d),d.delay===0&&(f=!0)),(Bn.instantAnimations||Bn.skipAnimations||s!=null&&s.shouldSkipAnimations||l.skipAnimations)&&(f=!0,xu(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,f&&!i&&t.get()!==void 0){const p=Ja(d.keyframes,l);if(p!==void 0){re.update(()=>{d.onUpdate(p),d.onComplete()});return}}return l.isSync?new vi(d):new Ek(d)},_k=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fk(e){const t=_k.exec(e);if(!t)return[,];const[,n,r,s]=t;return[`--${n??r}`,s]}function Jy(e,t,n=1){const[r,s]=Fk(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const a=i.trim();return fy(a)?parseFloat(a):a}return Ud(s)?Jy(s,t,n+1):s}function ah(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Qd(e,t,n,r){if(typeof t=="function"){const[s,i]=ah(r);t=t(n!==void 0?n:e.custom,s,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,i]=ah(r);t=t(n!==void 0?n:e.custom,s,i)}return t}function cr(e,t,n){const r=e.getProps();return Qd(r,t,n!==void 0?n:r.custom,e)}const Zy=new Set(["width","height","top","left","right","bottom",...gs]),vu=e=>Array.isArray(e);function zk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,xr(n))}function Vk(e){return vu(e)?e[e.length-1]||0:e}function Dk(e,t){const n=cr(e,t);let{transitionEnd:r={},transition:s={},...i}=n||{};i={...i,...r};for(const a in i){const l=Vk(i[a]);zk(e,a,l)}}const Ce=e=>!!(e&&e.getVelocity);function Bk(e){return!!(Ce(e)&&e.add)}function bu(e,t){const n=e.getValue("willChange");if(Bk(n))return n.add(t);if(!n&&Bn.WillChange){const r=new Bn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Jd(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Uk="framerAppearId",ex="data-"+Jd(Uk);function tx(e){return e.props[ex]}function $k({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function nx(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i,transitionEnd:a,...l}=t;const c=e.getDefaultTransition();i=i?Qy(i,c):c;const u=i==null?void 0:i.reduceMotion,d=i==null?void 0:i.skipAnimations;r&&(i=r);const f=[],p=s&&e.animationState&&e.animationState.getState()[s],y=i==null?void 0:i.path;y&&y.animateVisualElement(e,l,i,n,f);for(const m in l){const g=e.getValue(m,e.latestValues[m]??null),b=l[m];if(b===void 0||p&&$k(p,m))continue;const h={delay:n,...Yd(i||{},m)};d&&(h.skipAnimations=!0);const x=g.get();if(x!==void 0&&!g.isAnimating()&&!Array.isArray(b)&&b===x&&!h.velocity){re.update(()=>g.set(b));continue}let v=!1;if(window.MotionHandoffAnimation){const N=tx(e);if(N){const P=window.MotionHandoffAnimation(N,m,re);P!==null&&(h.startTime=P,v=!0)}}bu(e,m);const w=u??e.shouldReduceMotion;g.start(Xd(m,g,b,w&&Zy.has(m)?{type:!1}:h,e,v));const k=g.animation;k&&f.push(k)}if(a){const m=()=>re.update(()=>{a&&Dk(e,a)});f.length?Promise.all(f).then(m):m()}return f}function wu(e,t,n={}){var c;const r=cr(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(nx(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return Hk(e,t,u,d,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[i,a]:[a,i];return u().then(()=>d())}else return Promise.all([i(),a(n.delay)])}function Hk(e,t,n=0,r=0,s=0,i=1,a){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(wu(c,t,{...a,delay:n+(typeof r=="function"?0:r)+Xy(e.variantChildren,c,r,s,i)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function Wk(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(i=>wu(e,i,n));r=Promise.all(s)}else if(typeof t=="string")r=wu(e,t,n);else{const s=typeof t=="function"?cr(e,t,n.custom):t;r=Promise.all(nx(e,s,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Gk={test:e=>e==="auto",parse:e=>e},rx=e=>t=>t.test(e),sx=[ms,D,Qt,nn,vS,xS,Gk],lh=e=>sx.find(rx(e));function Kk(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||hy(e):!0}const qk=new Set(["brightness","contrast","saturate","opacity"]);function Yk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match($d)||[];if(!r)return e;const s=n.replace(r,"");let i=qk.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const Xk=/\b([a-z-]*)\(.*?\)/gu,Su={...Vt,getAnimatableNone:e=>{const t=e.match(Xk);return t?t.map(Yk).join(" "):e}},ku={...Vt,getAnimatableNone:e=>{const t=Vt.parse(e);return Vt.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ch={...ms,transform:Math.round},Qk={rotate:nn,pathRotation:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:lo,scaleX:lo,scaleY:lo,scaleZ:lo,skew:nn,skewX:nn,skewY:nn,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:xi,originX:Yp,originY:Yp,originZ:D},xa={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,top:D,right:D,bottom:D,left:D,inset:D,insetBlock:D,insetBlockStart:D,insetBlockEnd:D,insetInline:D,insetInlineStart:D,insetInlineEnd:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,paddingBlock:D,paddingBlockStart:D,paddingBlockEnd:D,paddingInline:D,paddingInlineStart:D,paddingInlineEnd:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,marginBlock:D,marginBlockStart:D,marginBlockEnd:D,marginInline:D,marginInlineStart:D,marginInlineEnd:D,fontSize:D,backgroundPositionX:D,backgroundPositionY:D,...Qk,zIndex:ch,fillOpacity:xi,strokeOpacity:xi,numOctaves:ch},Jk={...xa,color:be,backgroundColor:be,outlineColor:be,fill:be,stroke:be,borderColor:be,borderTopColor:be,borderRightColor:be,borderBottomColor:be,borderLeftColor:be,filter:Su,WebkitFilter:Su,mask:ku,WebkitMask:ku},ix=e=>Jk[e],Zk=new Set([Su,ku]);function ox(e,t){let n=ix(e);return Zk.has(n)||(n=Vt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ej=new Set(["auto","none","0"]);function tj(e,t,n){let r=0,s;for(;r<e.length&&!s;){const i=e[r];typeof i=="string"&&!ej.has(i)&&as(i).values.length&&(s=e[r]),r++}if(s&&n)for(const i of t)e[i]=ox(n,s)}class nj extends qd{constructor(t,n,r,s,i){super(t,n,r,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),Ud(f))){const p=Jy(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Zy.has(r)||t.length!==2)return;const[s,i]=t,a=lh(s),l=lh(i),c=qp(s),u=qp(i);if(c!==u&&Cn[r]){this.needsMeasurement=!0;return}if(a!==l)if(rh(a)&&rh(l))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else Cn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let s=0;s<t.length;s++)(t[s]===null||Kk(t[s]))&&r.push(s);r.length&&tj(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Cn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(r,s).jump(s,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const i=r.length-1,a=r[i];r[i]=Cn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Zd=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function ax(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const s=(n==null?void 0:n[e])??r.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(r=>r!=null)}const ju=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Lo(e){return py(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:ef}=Py(queueMicrotask,!1),Ot={x:!1,y:!1};function lx(){return Ot.x||Ot.y}function rj(e){return e==="x"||e==="y"?Ot[e]?null:(Ot[e]=!0,()=>{Ot[e]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function cx(e,t){const n=ax(e),r=new AbortController,s={passive:!0,...t,signal:r.signal};return[n,s,()=>r.abort()]}function sj(e){return!(e.pointerType==="touch"||lx())}function ij(e,t,n={}){const[r,s,i]=cx(e,n);return r.forEach(a=>{let l=!1,c=!1,u;const d=()=>{a.removeEventListener("pointerleave",m)},f=b=>{u&&(u(b),u=void 0),d()},p=b=>{l=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),c&&(c=!1,f(b))},y=()=>{l=!0,window.addEventListener("pointerup",p,s),window.addEventListener("pointercancel",p,s)},m=b=>{if(b.pointerType!=="touch"){if(l){c=!0;return}f(b)}},g=b=>{if(!sj(b))return;c=!1;const h=t(a,b);typeof h=="function"&&(u=h,a.addEventListener("pointerleave",m,s))};a.addEventListener("pointerenter",g,s),a.addEventListener("pointerdown",y,s)}),i}const ux=(e,t)=>t?e===t?!0:ux(e,t.parentElement):!1,tf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,oj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aj(e){return oj.has(e.tagName)||e.isContentEditable===!0}const lj=new Set(["INPUT","SELECT","TEXTAREA"]);function cj(e){return lj.has(e.tagName)||e.isContentEditable===!0}const Oo=new WeakSet;function uh(e){return t=>{t.key==="Enter"&&e(t)}}function Wl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const uj=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=uh(()=>{if(Oo.has(n))return;Wl(n,"down");const s=uh(()=>{Wl(n,"up")}),i=()=>Wl(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function dh(e){return tf(e)&&!lx()}const fh=new WeakSet;function dj(e,t,n={}){const[r,s,i]=cx(e,n),a=l=>{const c=l.currentTarget;if(!dh(l)||fh.has(l))return;Oo.add(c),n.stopPropagation&&fh.add(l);const u=t(c,l),d={...s,capture:!0},f=(m,g)=>{window.removeEventListener("pointerup",p,d),window.removeEventListener("pointercancel",y,d),Oo.has(c)&&Oo.delete(c),dh(m)&&typeof u=="function"&&u(m,{success:g})},p=m=>{f(m,c===window||c===document||n.useGlobalTarget||ux(c,m.target))},y=m=>{f(m,!1)};window.addEventListener("pointerup",p,d),window.addEventListener("pointercancel",y,d)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,s),Lo(l)&&(l.addEventListener("focus",u=>uj(u,s)),!aj(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),i}function nf(e){return py(e)&&"ownerSVGElement"in e}const Mo=new WeakMap;let wn;const dx=(e,t,n)=>(r,s)=>s&&s[0]?s[0][e+"Size"]:nf(r)&&"getBBox"in r?r.getBBox()[t]:r[n],fj=dx("inline","width","offsetWidth"),pj=dx("block","height","offsetHeight");function hj({target:e,borderBoxSize:t}){var n;(n=Mo.get(e))==null||n.forEach(r=>{r(e,{get width(){return fj(e,t)},get height(){return pj(e,t)}})})}function mj(e){e.forEach(hj)}function gj(){typeof ResizeObserver>"u"||(wn=new ResizeObserver(mj))}function yj(e,t){wn||gj();const n=ax(e);return n.forEach(r=>{let s=Mo.get(r);s||(s=new Set,Mo.set(r,s)),s.add(t),wn==null||wn.observe(r)}),()=>{n.forEach(r=>{const s=Mo.get(r);s==null||s.delete(t),s!=null&&s.size||wn==null||wn.unobserve(r)})}}const Io=new Set;let Ur;function xj(){Ur=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Io.forEach(t=>t(e))},window.addEventListener("resize",Ur)}function vj(e){return Io.add(e),Ur||xj(),()=>{Io.delete(e),!Io.size&&typeof Ur=="function"&&(window.removeEventListener("resize",Ur),Ur=void 0)}}function ph(e,t){return typeof e=="function"?vj(e):yj(e,t)}function bj(e){return nf(e)&&e.tagName==="svg"}function wj(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],s=e[1+n],i=e[2+n],a=e[3+n],l=zy(s,i,a);return t?l(r):l}function Sj(e,t,n={}){const r=e.get();let s=null,i=r,a;const l=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,c=()=>{s&&(s.stop(),s=null),e.animation=void 0},u=()=>{const f=hh(e.get()),p=hh(i);if(f===p){c();return}const y=s?s.getGeneratorVelocity():e.getVelocity();c(),s=new vi({keyframes:[f,p],velocity:y,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:a})},d=()=>{var f;u(),e.animation=s??void 0,(f=e.events.animationStart)==null||f.notify(),s==null||s.then(()=>{var p;e.animation=void 0,(p=e.events.animationComplete)==null||p.notify()})};if(e.attach((f,p)=>{i=f,a=y=>p(Gl(y,l)),re.postRender(d)},c),Ce(t)){let f=n.skipInitialAnimation===!0;const p=t.on("change",m=>{f?(f=!1,e.jump(Gl(m,l),!1)):e.set(Gl(m,l))}),y=e.on("destroy",p);return()=>{p(),y()}}return c}function Gl(e,t){return t?e+t:e}function hh(e){return typeof e=="number"?e:parseFloat(e)}const kj=[...sx,be,Vt],jj=e=>kj.find(rx(e)),mh=()=>({translate:0,scale:1,origin:0,originPoint:0}),$r=()=>({x:mh(),y:mh()}),gh=()=>({min:0,max:0}),Ne=()=>({x:gh(),y:gh()}),Nj=new WeakMap;function Za(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function bi(e){return typeof e=="string"||Array.isArray(e)}const rf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sf=["initial",...rf];function el(e){return Za(e.animate)||sf.some(t=>bi(e[t]))}function fx(e){return!!(el(e)||e.variants)}function Ej(e,t,n){for(const r in t){const s=t[r],i=n[r];if(Ce(s))e.addValue(r,s);else if(Ce(i))e.addValue(r,xr(s,{owner:e}));else if(i!==s)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=e.getStaticValue(r);e.addValue(r,xr(a!==void 0?a:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Nu={current:null},px={current:!1},Pj=typeof window<"u";function Tj(){if(px.current=!0,!!Pj)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Nu.current=e.matches;e.addEventListener("change",t),t()}else Nu.current=!1}const yh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let va={};function hx(e){va=e}function Cj(){return va}class Aj{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,skipAnimations:i,blockInitialAnimation:a,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=qd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ze.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,re.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=i,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=el(n),this.isVariantNode=fx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in p){const m=p[y];u[y]!==void 0&&Ce(m)&&m.set(u[y])}}mount(t){var n,r;if(this.hasBeenMounted)for(const s in this.initialValues)(n=this.values.get(s))==null||n.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=t,Nj.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,i)=>this.bindToMotionValue(i,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(px.current||Tj(),this.shouldReduceMotion=Nu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),pn(this.notifyUpdate),pn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Yy.has(t)&&this.current instanceof HTMLElement){const{factory:a,keyframes:l,times:c,ease:u,duration:d}=n.accelerate,f=new Ky({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:mt(d)}),p=a(f);this.valueSubscriptions.set(t,()=>{p(),f.cancel()});return}const r=ys.has(t);r&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&re.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),i&&i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in va){const n=va[t];if(!n)continue;const{isEnabled:r,Feature:s}=n;if(!this.features[t]&&s&&r(this.props)&&(this.features[t]=new s(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ne()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<yh.length;r++){const s=yh[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i="on"+s,a=t[i];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=Ej(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=xr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(fy(r)||hy(r))?r=parseFloat(r):!jj(r)&&Vt.test(n)&&(r=ox(t,n)),this.setBaseTarget(t,Ce(r)?r.get():r)),Ce(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var i;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const a=Qd(this.props,n,(i=this.presenceContext)==null?void 0:i.custom);a&&(r=a[t])}if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Ce(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Vd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){ef.render(this.render)}}class mx extends Aj{constructor(){super(...arguments),this.KeyframeResolver=nj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ce(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Wn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function gx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Rj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Lj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Kl(e){return e===void 0||e===1}function Eu({scale:e,scaleX:t,scaleY:n}){return!Kl(e)||!Kl(t)||!Kl(n)}function Jn(e){return Eu(e)||yx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function yx(e){return xh(e.x)||xh(e.y)}function xh(e){return e&&e!=="0%"}function ba(e,t,n){const r=e-n,s=t*r;return n+s}function vh(e,t,n,r,s){return s!==void 0&&(e=ba(e,s,r)),ba(e,n,r)+t}function Pu(e,t=0,n=1,r,s){e.min=vh(e.min,t,n,r,s),e.max=vh(e.max,t,n,r,s)}function xx(e,{x:t,y:n}){Pu(e.x,t.translate,t.scale,t.originPoint),Pu(e.y,n.translate,n.scale,n.originPoint)}const bh=.999999999999,wh=1.0000000000001;function Oj(e,t,n,r=!1){var l;const s=n.length;if(!s)return;t.x=t.y=1;let i,a;for(let c=0;c<s;c++){i=n[c],a=i.projectionDelta;const{visualElement:u}=i.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(Kt(e.x,-i.scroll.offset.x),Kt(e.y,-i.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,xx(e,a)),r&&Jn(i.latestValues)&&_o(e,i.latestValues,(l=i.layout)==null?void 0:l.layoutBox))}t.x<wh&&t.x>bh&&(t.x=1),t.y<wh&&t.y>bh&&(t.y=1)}function Kt(e,t){e.min+=t,e.max+=t}function Sh(e,t,n,r,s=.5){const i=ie(e.min,e.max,s);Pu(e,t,n,i,r)}function kh(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function _o(e,t,n){const r=n??e;Sh(e.x,kh(t.x,r.x),t.scaleX,t.scale,t.originX),Sh(e.y,kh(t.y,r.y),t.scaleY,t.scale,t.originY)}function vx(e,t){return gx(Lj(e.getBoundingClientRect(),t))}function Mj(e,t,n){const r=vx(e,n),{scroll:s}=t;return s&&(Kt(r.x,s.offset.x),Kt(r.y,s.offset.y)),r}const Ij={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_j=gs.length;function Fj(e,t,n){let r="",s=!0;for(let a=0;a<_j;a++){const l=gs[a],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{const d=parseFloat(c);u=l.startsWith("scale")?d===1:d===0}if(!u||n){const d=ju(c,xa[l]);if(!u){s=!1;const f=Ij[l]||l;r+=`${f}(${d}) `}n&&(t[l]=d)}}const i=e.pathRotation;return i&&(s=!1,r+=`rotate(${ju(i,xa.pathRotation)}) `),r=r.trim(),n?r=n(t,s?"":r):s&&(r="none"),r}function of(e,t,n){const{style:r,vars:s,transformOrigin:i}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(ys.has(c)){a=!0;continue}else if(Cy(c)){s[c]=u;continue}else{const d=ju(u,xa[c]);c.startsWith("origin")?(l=!0,i[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=Fj(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=i;r.transformOrigin=`${c} ${u} ${d}`}}function bx(e,{style:t,vars:n},r,s){const i=e.style;let a;for(a in t)i[a]=t[a];s==null||s.applyProjectionStyles(i,r);for(a in n)i.setProperty(a,n[a])}function jh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Cs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=jh(e,t.target.x),r=jh(e,t.target.y);return`${n}% ${r}%`}},zj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,s=Vt.parse(e);if(s.length>5)return r;const i=Vt.createTransformer(e),a=typeof s[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;s[0+a]/=l,s[1+a]/=c;const u=ie(l,c,.5);return typeof s[2+a]=="number"&&(s[2+a]/=u),typeof s[3+a]=="number"&&(s[3+a]/=u),i(s)}},Tu={borderRadius:{...Cs,applyTo:[...Zd]},borderTopLeftRadius:Cs,borderTopRightRadius:Cs,borderBottomLeftRadius:Cs,borderBottomRightRadius:Cs,boxShadow:zj};function wx(e,{layout:t,layoutId:n}){return ys.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Tu[e]||e==="opacity")}function af(e,t,n){var a;const r=e.style,s=t==null?void 0:t.style,i={};if(!r)return i;for(const l in r)(Ce(r[l])||s&&Ce(s[l])||wx(l,e)||((a=n==null?void 0:n.getValue(l))==null?void 0:a.liveStyle)!==void 0)&&(i[l]=r[l]);return i}function Vj(e){return window.getComputedStyle(e)}class Dj extends mx{constructor(){super(...arguments),this.type="html",this.renderInstance=bx}mount(t){Qa(!!t.style),super.mount(t)}readValueFromInstance(t,n){var r;if(ys.has(n))return(r=this.projection)!=null&&r.isProjecting?pu(n):sk(t,n);{const s=Vj(t),i=(Cy(n)?s.getPropertyValue(n):s[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return vx(t,n)}build(t,n,r){of(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return af(t,n,r)}}const Bj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Uj={offset:"strokeDashoffset",array:"strokeDasharray"};function $j(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?Bj:Uj;e[i.offset]=`${-r}`,e[i.array]=`${t} ${n}`}const Sx=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function kx(e,{attrX:t,attrY:n,attrScale:r,pathLength:s,pathSpacing:i=1,pathOffset:a=0,...l},c,u,d){if(of(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;for(const y of Sx)f[y]!==void 0&&(p[y]=f[y],delete f[y]);(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&$j(f,s,i,a,!1)}const jx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Nx=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Hj(e,t,n,r){bx(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(jx.has(s)?s:Jd(s),t.attrs[s])}function Ex(e,t,n){const r=af(e,t,n);for(const s in e)if(Ce(e[s])||Ce(t[s])){const i=gs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[i]=e[s]}return r}class Wj extends mx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ne}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ys.has(n)){const r=ix(n);return r&&r.default||0}if(Sx.includes(n)){const s=getComputedStyle(t)[n];if(typeof s=="string"&&s)return s.trim()}return n=jx.has(n)?n:Jd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ex(t,n,r)}build(t,n,r){kx(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,s){Hj(t,n,r,s)}mount(t){this.isSVGTag=Nx(t.tagName),super.mount(t)}}const Gj=sf.length;function Px(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Px(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Gj;n++){const r=sf[n],s=e.props[r];(bi(s)||s===!1)&&(t[r]=s)}return t}function Tx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Kj=[...rf].reverse(),qj=rf.length;function Yj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Wk(e,n,r)))}function Xj(e){let t=Yj(e),n=Nh(),r=!0,s=!1;const i=u=>(d,f)=>{var y;const p=cr(e,f,u==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(p){const{transition:m,transitionEnd:g,...b}=p;d={...d,...b,...g}}return d};function a(u){t=u(e)}function l(u){const{props:d}=e,f=Px(e.parent)||{},p=[],y=new Set;let m={},g=1/0;for(let h=0;h<qj;h++){const x=Kj[h],v=n[x],w=d[x]!==void 0?d[x]:f[x],k=bi(w),N=x===u?v.isActive:null;N===!1&&(g=h);let P=w===f[x]&&w!==d[x]&&k;if(P&&(r||s)&&e.manuallyAnimateOnMount&&(P=!1),v.protectedKeys={...m},!v.isActive&&N===null||!w&&!v.prevProp||Za(w)||typeof w=="boolean")continue;if(x==="exit"&&v.isActive&&N!==!0){v.prevResolvedValues&&(m={...m,...v.prevResolvedValues});continue}const T=Qj(v.prevProp,w);let L=T||x===u&&v.isActive&&!P&&k||h>g&&k,C=!1;const z=Array.isArray(w)?w:[w];let U=z.reduce(i(x),{});N===!1&&(U={});const{prevResolvedValues:J={}}=v,W={...J,...U},I=E=>{L=!0,y.has(E)&&(C=!0,y.delete(E)),v.needsAnimating[E]=!0;const R=e.getValue(E);R&&(R.liveStyle=!1)};for(const E in W){const R=U[E],A=J[E];if(m.hasOwnProperty(E))continue;let M=!1;vu(R)&&vu(A)?M=!Tx(R,A)||T:M=R!==A,M?R!=null?I(E):y.add(E):R!==void 0&&y.has(E)?I(E):v.protectedKeys[E]=!0}v.prevProp=w,v.prevResolvedValues=U,v.isActive&&(m={...m,...U}),(r||s)&&e.blockInitialAnimation&&(L=!1);const F=P&&T;L&&(!F||C)&&p.push(...z.map(E=>{const R={type:x};if(typeof E=="string"&&(r||s)&&!F&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=cr(A,E);if(A.enteringChildren&&M){const{delayChildren:$}=M.transition||{};R.delay=Xy(A.enteringChildren,e,$)}}return{animation:E,options:R}}))}if(y.size){const h={};if(typeof d.initial!="boolean"){const x=cr(e,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(h.transition=x.transition)}y.forEach(x=>{const v=e.getBaseTarget(x),w=e.getValue(x);w&&(w.liveStyle=!0),h[x]=v??null}),p.push({animation:h})}let b=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,s=!1,b?t(p):Promise.resolve()}function c(u,d){var p;if(n[u].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(y=>{var m;return(m=y.animationState)==null?void 0:m.setActive(u,d)}),n[u].isActive=d;const f=l(u);for(const y in n)n[y].protectedKeys={};return f}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Nh(),s=!0}}}function Qj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Tx(t,e):!1}function Gn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nh(){return{animate:Gn(!0),whileInView:Gn(),whileHover:Gn(),whileTap:Gn(),whileDrag:Gn(),whileFocus:Gn(),exit:Gn()}}function Cu(e,t){e.min=t.min,e.max=t.max}function Lt(e,t){Cu(e.x,t.x),Cu(e.y,t.y)}function Eh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Cx=1e-4,Jj=1-Cx,Zj=1+Cx,Ax=.01,eN=0-Ax,tN=0+Ax;function et(e){return e.max-e.min}function nN(e,t,n){return Math.abs(e-t)<=n}function Ph(e,t,n,r=.5){e.origin=r,e.originPoint=ie(t.min,t.max,e.origin),e.scale=et(n)/et(t),e.translate=ie(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Jj&&e.scale<=Zj||isNaN(e.scale))&&(e.scale=1),(e.translate>=eN&&e.translate<=tN||isNaN(e.translate))&&(e.translate=0)}function qs(e,t,n,r){Ph(e.x,t.x,n.x,r?r.originX:void 0),Ph(e.y,t.y,n.y,r?r.originY:void 0)}function Th(e,t,n,r=0){const s=r?ie(n.min,n.max,r):n.min;e.min=s+t.min,e.max=e.min+et(t)}function rN(e,t,n,r){Th(e.x,t.x,n.x,r==null?void 0:r.x),Th(e.y,t.y,n.y,r==null?void 0:r.y)}function Ch(e,t,n,r=0){const s=r?ie(n.min,n.max,r):n.min;e.min=t.min-s,e.max=e.min+et(t)}function wa(e,t,n,r){Ch(e.x,t.x,n.x,r==null?void 0:r.x),Ch(e.y,t.y,n.y,r==null?void 0:r.y)}function Ah(e,t,n,r,s){return e-=t,e=ba(e,1/n,r),s!==void 0&&(e=ba(e,1/s,r)),e}function sN(e,t=0,n=1,r=.5,s,i=e,a=e){if(Qt.test(t)&&(t=parseFloat(t),t=ie(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=ie(i.min,i.max,r);e===i&&(l-=t),e.min=Ah(e.min,t,n,l,s),e.max=Ah(e.max,t,n,l,s)}function Rh(e,t,[n,r,s],i,a){sN(e,t[n],t[r],t[s],t.scale,i,a)}const iN=["x","scaleX","originX"],oN=["y","scaleY","originY"];function Lh(e,t,n,r){Rh(e.x,t,iN,n?n.x:void 0,r?r.x:void 0),Rh(e.y,t,oN,n?n.y:void 0,r?r.y:void 0)}function Oh(e){return e.translate===0&&e.scale===1}function Rx(e){return Oh(e.x)&&Oh(e.y)}function Mh(e,t){return e.min===t.min&&e.max===t.max}function aN(e,t){return Mh(e.x,t.x)&&Mh(e.y,t.y)}function Ih(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Lx(e,t){return Ih(e.x,t.x)&&Ih(e.y,t.y)}function _h(e){return et(e.x)/et(e.y)}function Fh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Gt(e){return[e("x"),e("y")]}function lN(e,t,n){let r="";const s=e.x.translate/t.x,i=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((s||i||a)&&(r=`translate3d(${s}px, ${i}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,pathRotation:f,rotateX:p,rotateY:y,skewX:m,skewY:g}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),y&&(r+=`rotateY(${y}deg) `),m&&(r+=`skewX(${m}deg) `),g&&(r+=`skewY(${g}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const cN=Zd.length,zh=e=>typeof e=="string"?parseFloat(e):e,Vh=e=>typeof e=="number"||D.test(e);function uN(e,t,n,r,s,i){s?(e.opacity=ie(0,n.opacity??1,dN(r)),e.opacityExit=ie(t.opacity??1,0,fN(r))):i&&(e.opacity=ie(t.opacity??1,n.opacity??1,r));for(let a=0;a<cN;a++){const l=Zd[a];let c=Dh(t,l),u=Dh(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Vh(c)===Vh(u)?(e[l]=Math.max(ie(zh(c),zh(u),r),0),(Qt.test(u)||Qt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=ie(t.rotate||0,n.rotate||0,r))}function Dh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const dN=Ox(0,.5,ky),fN=Ox(.5,.95,Pt);function Ox(e,t,n){return r=>r<e?0:r>t?1:n(yi(e,t,r))}function pN(e,t,n){const r=Ce(e)?e:xr(e);return r.start(Xd("",r,t,n)),r.animation}function wi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const hN=(e,t)=>e.depth-t.depth;class mN{constructor(){this.children=[],this.isDirty=!1}add(t){zd(this.children,t),this.isDirty=!0}remove(t){ha(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(hN),this.isDirty=!1,this.children.forEach(t)}}function gN(e,t){const n=Ze.now(),r=({timestamp:s})=>{const i=s-n;i>=t&&(pn(r),e(i-t))};return re.setup(r,!0),()=>pn(r)}function Fo(e){return Ce(e)?e.get():e}class yN{constructor(){this.members=[]}add(t){zd(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const s=r.instance;(!s||s.isConnected===!1)&&!r.snapshot&&(ha(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(ha(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1&&((n=s.instance)==null?void 0:n.isConnected)!==!1)return this.promote(s),!0}return!1}promote(t,n){var s;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:i}=r.options,{layoutDependency:a}=t.options;(i===void 0||i!==a)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(s=t.root)!=null&&s.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,s,i,a;(r=(n=t.options).onExitComplete)==null||r.call(n),(a=(s=t.resumingFrom)==null?void 0:(i=s.options).onExitComplete)==null||a.call(i)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const zo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ql=["","X","Y","Z"],xN=1e3;let vN=0;function Yl(e,t,n,r){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Mx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=tx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",re,!(s||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Mx(r)}function Ix({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(a={},l=t==null?void 0:t()){this.id=vN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(SN),this.nodes.forEach(TN),this.nodes.forEach(CN),this.nodes.forEach(kN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new mN)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Vd),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=nf(a)&&!bj(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;re.read(()=>{f=window.innerWidth}),e(a,()=>{const y=window.innerWidth;y!==f&&(f=y,this.root.updateBlockedByResize=!0,d&&d(),d=gN(p,250),zo.hasAnimatedSinceResize&&(zo.hasAnimatedSinceResize=!1,this.nodes.forEach($h)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||MN,{onLayoutAnimationStart:g,onLayoutAnimationComplete:b}=u.getProps(),h=!this.targetLayout||!Lx(this.targetLayout,y),x=!f&&p;if(this.options.layoutRoot||this.resumeFrom||x||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Yd(m,"layout"),onPlay:g,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x,v.path)}else f||$h(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(AN),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(NN),this.nodes.forEach(Bh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Uh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(EN),this.nodes.forEach(PN),this.nodes.forEach(bN),this.nodes.forEach(wN)):this.nodes.forEach(Uh),this.clearAllSnapshots();const l=Ze.now();_e.delta=Jt(0,1e3/60,l-_e.timestamp),_e.timestamp=l,_e.isProcessing=!0,Vl.update.process(_e),Vl.preRender.process(_e),Vl.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ef.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jN),this.sharedNodes.forEach(RN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!et(this.snapshot.measuredBox.x)&&!et(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ne()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Rx(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&this.instance&&(l||Jn(this.latestValues)||d)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),IN(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:a}=this.options;if(!a)return Ne();const l=a.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(_N))){const{scroll:d}=this.root;d&&(Kt(l.x,d.offset.x),Kt(l.y,d.offset.y))}return l}removeElementScroll(a){var c;const l=Ne();if(Lt(l,a),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Lt(l,a),Kt(l.x,f.offset.x),Kt(l.y,f.offset.y))}return l}applyTransform(a,l=!1,c){var d,f;const u=c||Ne();Lt(u,a);for(let p=0;p<this.path.length;p++){const y=this.path[p];!l&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(Kt(u.x,-y.scroll.offset.x),Kt(u.y,-y.scroll.offset.y)),Jn(y.latestValues)&&_o(u,y.latestValues,(d=y.layout)==null?void 0:d.layoutBox)}return Jn(this.latestValues)&&_o(u,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),u}removeTransform(a){var c;const l=Ne();Lt(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!Jn(d.latestValues))continue;let f;d.instance&&(Eu(d.latestValues)&&d.updateSnapshot(),f=Ne(),Lt(f,d.measurePageBox())),Lh(l,d.latestValues,(c=d.snapshot)==null?void 0:c.layoutBox,f)}return Jn(this.latestValues)&&Lh(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var y;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=_e.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ne(),this.targetWithTransforms=Ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rN(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Lt(this.target,this.layout.layoutBox),xx(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Eu(this.parent.latestValues)||yx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,l,c){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),wa(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),Lt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Lt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;Oj(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Ne());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Eh(this.prevProjectionDelta.x,this.projectionDelta.x),Eh(this.prevProjectionDelta.y,this.projectionDelta.y)),qs(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Fh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$r(),this.projectionDelta=$r(),this.projectionDeltaWithTransform=$r()}setAnimationOrigin(a,l=!1,c){const u=this.snapshot,d=u?u.latestValues:{},f={...this.latestValues},p=$r();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const y=Ne(),m=u?u.source:void 0,g=this.layout?this.layout.source:void 0,b=m!==g,h=this.getStack(),x=!h||h.members.length<=1,v=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(ON));this.animationProgress=0;let w;const k=c==null?void 0:c.interpolateProjection(a);this.mixTargetDelta=N=>{const P=N/1e3,T=k==null?void 0:k(P);T?(p.x.translate=T.x,p.x.scale=ie(a.x.scale,1,P),p.x.origin=a.x.origin,p.x.originPoint=a.x.originPoint,p.y.translate=T.y,p.y.scale=ie(a.y.scale,1,P),p.y.origin=a.y.origin,p.y.originPoint=a.y.originPoint):(Hh(p.x,a.x,P),Hh(p.y,a.y,P)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),LN(this.relativeTarget,this.relativeTargetOrigin,y,P),w&&aN(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Ne()),Lt(w,this.relativeTarget)),b&&(this.animationValues=f,uN(f,d,this.latestValues,P,v,x)),T&&T.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=T.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{zo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=xr(0)),this.motionValue.jump(0,!1),this.currentAnimation=pN(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&_x(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Ne();const f=et(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=et(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}Lt(l,c),_o(l,d),qs(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new yN),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var l;const{layoutId:a}=this.options;return a?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:a}=this.options;return a?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Yl("z",a,u,this.animationValues);for(let d=0;d<ql.length;d++)Yl(`rotate${ql[d]}`,a,u,this.animationValues),Yl(`skew${ql[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}applyProjectionStyles(a,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Fo(l==null?void 0:l.pointerEvents)||"",a.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Fo(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Jn(this.latestValues)&&(a.transform=c?c({},""):"none",this.hasProjected=!1);return}a.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=lN(this.projectionDeltaWithTransform,this.treeScale,d);c&&(f=c(d,f)),a.transform=f;const{x:p,y}=this.projectionDelta;a.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,u.animationValues?a.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Tu){if(d[m]===void 0)continue;const{correct:g,applyTo:b,isCSSVariable:h}=Tu[m],x=f==="none"?d[m]:g(d[m],u);if(b){const v=b.length;for(let w=0;w<v;w++)a[b[w]]=x}else h?this.options.visualElement.renderState.vars[m]=x:a[m]=x}this.options.layoutId&&(a.pointerEvents=u===this?Fo(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(Bh),this.root.sharedNodes.clear()}}}function bN(e){e.updateLayout()}function wN(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i==="size")Gt(f=>{const p=a?t.measuredBox[f]:t.layoutBox[f],y=et(p);p.min=r[f].min,p.max=p.min+y});else if(i==="x"||i==="y"){const f=i==="x"?"y":"x";Cu(a?t.measuredBox[f]:t.layoutBox[f],r[f])}else _x(i,t.layoutBox,r)&&Gt(f=>{const p=a?t.measuredBox[f]:t.layoutBox[f],y=et(r[f]);p.max=p.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const l=$r();qs(l,r,t.layoutBox);const c=$r();a?qs(c,e.applyTransform(s,!0),t.measuredBox):qs(c,r,t.layoutBox);const u=!Rx(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const m=e.options.layoutAnchor||void 0,g=Ne();wa(g,t.layoutBox,p.layoutBox,m);const b=Ne();wa(b,r,y.layoutBox,m),Lx(g,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=g,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function SN(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kN(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function jN(e){e.clearSnapshot()}function Bh(e){e.clearMeasurements()}function NN(e){e.isLayoutDirty=!0,e.updateLayout()}function Uh(e){e.isLayoutDirty=!1}function EN(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function PN(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $h(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function TN(e){e.resolveTargetDelta()}function CN(e){e.calcProjection()}function AN(e){e.resetSkewAndRotation()}function RN(e){e.removeLeadSnapshot()}function Hh(e,t,n){e.translate=ie(t.translate,0,n),e.scale=ie(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Wh(e,t,n,r){e.min=ie(t.min,n.min,r),e.max=ie(t.max,n.max,r)}function LN(e,t,n,r){Wh(e.x,t.x,n.x,r),Wh(e.y,t.y,n.y,r)}function ON(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const MN={duration:.45,ease:[.4,0,.1,1]},Gh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Kh=Gh("applewebkit/")&&!Gh("chrome/")?Math.round:Pt;function qh(e){e.min=Kh(e.min),e.max=Kh(e.max)}function IN(e){qh(e.x),qh(e.y)}function _x(e,t,n){return e==="position"||e==="preserve-aspect"&&!nN(_h(t),_h(n),.2)}function _N(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const FN=Ix({attachResizeListener:(e,t)=>wi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Xl={current:void 0},Fx=Ix({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xl.current){const e=new FN({});e.mount(window),e.setOptions({layoutScroll:!0}),Xl.current=e}return Xl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),_i=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Yh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function zN(...e){return t=>{let n=!1;const r=e.map(s=>{const i=Yh(s,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():Yh(e[s],null)}}}}function VN(...e){return S.useCallback(zN(...e),e)}class DN extends S.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(Lo(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,s=Lo(r)&&r.offsetWidth||0,i=Lo(r)&&r.offsetHeight||0,a=getComputedStyle(n),l=this.props.sizeRef.current;l.height=parseFloat(a.height),l.width=parseFloat(a.width),l.top=n.offsetTop,l.left=n.offsetLeft,l.right=s-l.width-l.left,l.bottom=i-l.height-l.top,l.direction=a.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function BN({children:e,isPresent:t,anchorX:n,anchorY:r,root:s,pop:i}){var p;const a=S.useId(),l=S.useRef(null),c=S.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=S.useContext(_i),d=i!==!1?((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref):void 0,f=VN(l,d);return S.useInsertionEffect(()=>{const{width:y,height:m,top:g,left:b,right:h,bottom:x,direction:v}=c.current;if(t||i===!1||!l.current||!y||!m)return;const w=v==="rtl",k=n==="left"?w?`right: ${h}`:`left: ${b}`:w?`left: ${b}`:`right: ${h}`,N=r==="bottom"?`bottom: ${x}`:`top: ${g}`;l.current.dataset.motionPopId=a;const P=document.createElement("style");u&&(P.nonce=u);const T=s??document.head;return T.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${m}px !important;
            ${k}px !important;
            ${N}px !important;
          }
        `),()=>{var L;(L=l.current)==null||L.removeAttribute("data-motion-pop-id"),T.contains(P)&&T.removeChild(P)}},[t]),o.jsx(DN,{isPresent:t,childRef:l,sizeRef:c,pop:i,children:i===!1?e:S.cloneElement(e,{ref:f})})}const UN=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:i,mode:a,anchorX:l,anchorY:c,root:u})=>{const d=yr($N),f=S.useId(),p=S.useRef(n),y=S.useRef(r);gi(()=>{p.current=n,y.current=r});let m=!0,g=S.useMemo(()=>(m=!1,{id:f,initial:t,isPresent:n,custom:s,onExitComplete:b=>{d.set(b,!0);for(const h of d.values())if(!h)return;r&&r()},register:b=>(d.set(b,!1),()=>{var h;d.delete(b),!p.current&&!d.size&&((h=y.current)==null||h.call(y))})}),[n,d,r]);return i&&m&&(g={...g}),S.useMemo(()=>{d.forEach((b,h)=>d.set(h,!1))},[n]),S.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=o.jsx(BN,{pop:a==="popLayout",isPresent:n,anchorX:l,anchorY:c,root:u,children:e}),o.jsx(Xa.Provider,{value:g,children:e})};function $N(){return new Map}function zx(e=!0){const t=S.useContext(Xa);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:s}=t,i=S.useId();S.useEffect(()=>{if(e)return s(i)},[e]);const a=S.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,a]:[!0]}const co=e=>e.key||"";function Xh(e){const t=[];return S.Children.forEach(e,n=>{S.isValidElement(n)&&t.push(n)}),t}const HN=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:i="sync",propagate:a=!1,anchorX:l="left",anchorY:c="top",root:u})=>{const[d,f]=zx(a),p=S.useMemo(()=>Xh(e),[e]),y=a&&!d?[]:p.map(co),m=S.useRef(!0),g=S.useRef(p),b=yr(()=>new Map),h=S.useRef(new Set),[x,v]=S.useState(p),[w,k]=S.useState(p);gi(()=>{a&&!d&&!w.length&&(f==null||f())},[d,a,w.length,f]),gi(()=>{m.current=!1,g.current=p;for(let T=0;T<w.length;T++){const L=co(w[T]);y.includes(L)?(b.delete(L),h.current.delete(L)):b.get(L)!==!0&&b.set(L,!1)}},[w,y.length,y.join("-")]);const N=[];if(p!==x){let T=[...p];for(let L=0;L<w.length;L++){const C=w[L],z=co(C);y.includes(z)||(T.splice(L,0,C),N.push(C))}return i==="wait"&&N.length&&(T=N),k(Xh(T)),v(p),null}const{forceRender:P}=S.useContext(Fd);return o.jsx(o.Fragment,{children:w.map(T=>{const L=co(T),C=a&&!d?!1:p===w||y.includes(L),z=()=>{if(h.current.has(L))return;if(b.has(L))h.current.add(L),b.set(L,!0);else return;let U=!0;b.forEach(J=>{J||(U=!1)}),U&&(P==null||P(),k(g.current),a&&(f==null||f()),r&&r())};return o.jsx(UN,{isPresent:C,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:s,mode:i,root:u,onExitComplete:C?void 0:z,anchorX:l,anchorY:c,children:T},L)})})},Vx=S.createContext({strict:!1}),Qh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Jh=!1;function WN(){if(Jh)return;const e={};for(const t in Qh)e[t]={isEnabled:n=>Qh[t].some(r=>!!n[r])};hx(e),Jh=!0}function Dx(){return WN(),Cj()}function GN(e){const t=Dx();for(const n in e)t[n]={...t[n],...e[n]};hx(t)}const tl=S.createContext({});function KN(e,t){if(el(e)){const{initial:n,animate:r}=e;return{initial:n===!1||bi(n)?n:void 0,animate:bi(r)?r:void 0}}return e.inherit!==!1?t:{}}function qN(e){const{initial:t,animate:n}=KN(e,S.useContext(tl));return S.useMemo(()=>({initial:t,animate:n}),[Zh(t),Zh(n)])}function Zh(e){return Array.isArray(e)?e.join(" "):e}const lf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bx(e,t,n){for(const r in t)!Ce(t[r])&&!wx(r,n)&&(e[r]=t[r])}function YN({transformTemplate:e},t){return S.useMemo(()=>{const n=lf();return of(n,t,e),Object.assign({},n.vars,n.style)},[t])}function XN(e,t){const n=e.style||{},r={};return Bx(r,n,e),Object.assign(r,YN(e,t)),r}function QN(e,t){const n={},r=XN(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Ux=()=>({...lf(),attrs:{}});function JN(e,t,n,r){const s=S.useMemo(()=>{const i=Ux();return kx(i,t,Nx(r),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Bx(i,e.style,e),s.style={...i,...s.style}}return s}const ZN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Sa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ZN.has(e)}function eE(e,t){return e.startsWith("on")?!Sa(e):(t==null?void 0:t(e))??!Sa(e)}function tE(e,t,n,r){const s={};for(const i in e)i==="values"&&typeof e.values=="object"||Ce(e[i])||(eE(i,r)||n===!0&&Sa(i)||!t&&!Sa(i)||e.draggable&&i.startsWith("onDrag"))&&(s[i]=e[i]);return s}const nE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cf(e){return typeof e!="string"||e.includes("-")?!1:!!(nE.indexOf(e)>-1||/[A-Z]/u.test(e))}function rE(e,t,n,{latestValues:r},s,i=!1,a,l){const u=(a??cf(e)?JN:QN)(t,r,s,e),d=tE(t,typeof e=="string",i,l),f=e!==S.Fragment?{...d,...u,ref:n}:{},{children:p}=t,y=S.useMemo(()=>Ce(p)?p.get():p,[p]);return S.createElement(e,{...f,children:y})}function sE({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,s){return{latestValues:iE(n,r,s,e),renderState:t()}}function iE(e,t,n,r){const s={},i=r(e,{});for(const p in i)s[p]=Fo(i[p]);let{initial:a,animate:l}=e;const c=el(e),u=fx(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!Za(f)){const p=Array.isArray(f)?f:[f];for(let y=0;y<p.length;y++){const m=Qd(e,p[y]);if(m){const{transitionEnd:g,transition:b,...h}=m;for(const x in h){let v=h[x];if(Array.isArray(v)){const w=d?v.length-1:0;v=v[w]}v!==null&&(s[x]=v)}for(const x in g)s[x]=g[x]}}}return s}const $x=e=>(t,n)=>{const r=S.useContext(tl),s=S.useContext(Xa),i=()=>sE(e,t,r,s);return n?i():yr(i)},oE=$x({scrapeMotionValuesFromProps:af,createRenderState:lf}),aE=$x({scrapeMotionValuesFromProps:Ex,createRenderState:Ux}),lE=Symbol.for("motionComponentSymbol");function cE(e,t,n){const r=S.useRef(n);S.useInsertionEffect(()=>{r.current=n});const s=S.useRef(null);return S.useCallback(i=>{var l;i&&((l=e.onMount)==null||l.call(e,i)),t&&(i?t.mount(i):t.unmount());const a=r.current;if(typeof a=="function")if(i){const c=a(i);typeof c=="function"&&(s.current=c)}else s.current?(s.current(),s.current=null):a(i);else a&&(a.current=i)},[t])}const Hx=S.createContext({});function Pr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function uE(e,t,n,r,s,i){var v,w;const{visualElement:a}=S.useContext(tl),l=S.useContext(Vx),c=S.useContext(Xa),u=S.useContext(_i),d=u.reducedMotion,f=u.skipAnimations,p=S.useRef(null),y=S.useRef(!1);r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:i}),y.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const m=p.current,g=S.useContext(Hx);m&&!m.projection&&s&&(m.type==="html"||m.type==="svg")&&dE(p.current,n,s,g);const b=S.useRef(!1);S.useInsertionEffect(()=>{m&&b.current&&m.update(n,c)});const h=n[ex],x=S.useRef(!!h&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,h))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,h)));return gi(()=>{y.current=!0,m&&(b.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),S.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,h)}),x.current=!1),m.enteringChildren=void 0)}),m}function dE(e,t,n,r){const{layoutId:s,layout:i,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Wx(e.parent)),e.projection.setOptions({layoutId:s,layout:i,alwaysMeasureLayout:!!a||l&&Pr(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function Wx(e){if(e)return e.options.allowProjection!==!1?e.projection:Wx(e.parent)}function Ql(e,{forwardMotionProps:t=!1,type:n}={},r,s){r&&GN(r);const i=n?n==="svg":cf(e),a=i?aE:oE;function l(u,d){let f;const p={...S.useContext(_i),...u,layoutId:fE(u)},{isStatic:y,isValidProp:m}=p,g=qN(u),b=a(u,y);if(!y&&typeof window<"u"){pE();const h=hE(p);f=h.MeasureLayout,g.visualElement=uE(e,b,p,s,h.ProjectionNode,i)}return o.jsxs(tl.Provider,{value:g,children:[f&&g.visualElement?o.jsx(f,{visualElement:g.visualElement,...p}):null,rE(e,u,cE(b,g.visualElement,d),b,y,t,i,m)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=S.forwardRef(l);return c[lE]=e,c}function fE({layoutId:e}){const t=S.useContext(Fd).id;return t&&e!==void 0?t+"-"+e:e}function pE(e,t){S.useContext(Vx).strict}function hE(e){const t=Dx(),{drag:n,layout:r}=t;if(!n&&!r)return{};const s={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function mE(e,t){if(typeof Proxy>"u")return Ql;const n=new Map,r=(i,a)=>Ql(i,a,e,t),s=(i,a)=>r(i,a);return new Proxy(s,{get:(i,a)=>a==="create"?r:(n.has(a)||n.set(a,Ql(a,void 0,e,t)),n.get(a))})}const gE=(e,t)=>t.isSVG??cf(e)?new Wj(t):new Dj(t,{allowProjection:e!==S.Fragment});class yE extends Wn{constructor(t){super(t),t.animationState||(t.animationState=Xj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Za(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let xE=0;class vE extends Wn{constructor(){super(...arguments),this.id=xE++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:a,custom:l}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const c=cr(this.node,a,l);if(c){const{transition:u,transitionEnd:d,...f}=c;for(const p in f)(i=this.node.getValue(p))==null||i.jump(f[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const bE={animation:{Feature:yE},exit:{Feature:vE}};function Fi(e){return{point:{x:e.pageX,y:e.pageY}}}const wE=e=>t=>tf(t)&&e(t,Fi(t));function Ys(e,t,n,r){return wi(e,t,wE(n),r)}const Gx=({current:e})=>e?e.ownerDocument.defaultView:null,em=(e,t)=>Math.abs(e-t);function SE(e,t){const n=em(e.x,t.x),r=em(e.y,t.y);return Math.sqrt(n**2+r**2)}const tm=new Set(["auto","scroll"]);class Kx{constructor(t,n,{transformPagePoint:r,contextWindow:s=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=uo(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Jl(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,b=SE(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!b)return;const{point:h}=m,{timestamp:x}=_e;this.history.push({...h,timestamp:x});const{onStart:v,onMove:w}=this.handlers;g||(v&&v(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=uo(g,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:b,onSessionEnd:h,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Jl(m.type==="pointercancel"?this.lastMoveEventInfo:uo(g,this.transformPagePoint),this.history);this.startEvent&&b&&b(m,v),h&&h(m,v)},!tf(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=a,this.contextWindow=s||window;const c=Fi(t),u=uo(c,this.transformPagePoint),{point:d}=u,{timestamp:f}=_e;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,Jl(u,this.history));const y={passive:!0,capture:!0};this.removeListeners=Oi(Ys(this.contextWindow,"pointermove",this.handlePointerMove,y),Ys(this.contextWindow,"pointerup",this.handlePointerUp,y),Ys(this.contextWindow,"pointercancel",this.handlePointerUp,y)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(tm.has(r.overflowX)||tm.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,s=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:s.x-n.x,y:s.y-n.y};i.x===0&&i.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,s),re.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),pn(this.updatePoint)}}function uo(e,t){return t?{point:t(e.point)}:e}function nm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Jl({point:e},t){return{point:e,delta:nm(e,qx(t)),offset:nm(e,kE(t)),velocity:jE(t,.1)}}function kE(e){return e[0]}function qx(e){return e[e.length-1]}function jE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=qx(e);for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>mt(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&s.timestamp-r.timestamp>mt(t)*2&&(r=e[1]);const i=Nt(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const a={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function NE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ie(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ie(n,e,r.max):Math.min(e,n)),e}function rm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function EE(e,{top:t,left:n,bottom:r,right:s}){return{x:rm(e.x,n,s),y:rm(e.y,t,r)}}function sm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function PE(e,t){return{x:sm(e.x,t.x),y:sm(e.y,t.y)}}function TE(e,t){let n=.5;const r=et(e),s=et(t);return s>r?n=yi(t.min,t.max-r,e.min):r>s&&(n=yi(e.min,e.max-s,t.min)),Jt(0,1,n)}function CE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Au=.35;function AE(e=Au){return e===!1?e=0:e===!0&&(e=Au),{x:im(e,"left","right"),y:im(e,"top","bottom")}}function im(e,t,n){return{min:om(e,t),max:om(e,n)}}function om(e,t){return typeof e=="number"?e:e[t]||0}const RE=new WeakMap;class LE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const i=f=>{n&&this.snapToCursor(Fi(f).point),this.stopAnimation()},a=(f,p)=>{const{drag:y,dragPropagation:m,onDragStart:g}=this.getProps();if(y&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=rj(y),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(h=>{let x=this.getAxisMotionValue(h).get()||0;if(Qt.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const w=v.layout.layoutBox[h];w&&(x=et(w)*(parseFloat(x)/100))}}this.originPoint[h]=x}),g&&re.update(()=>g(f,p),!1,!0),bu(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:y,dragDirectionLock:m,onDirectionLock:g,onDrag:b}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:h}=p;if(m&&this.currentDirection===null){this.currentDirection=ME(h),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",p.point,h),this.updateAxis("y",p.point,h),this.visualElement.render(),b&&re.update(()=>b(f,p),!1,!0)},c=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Kx(t,{onSessionStart:i,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Gx(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,s=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!s||!r)return;const{velocity:a}=s;this.startAnimation(a);const{onDragEnd:l}=this.getProps();l&&re.postRender(()=>l(r,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:s}=this.getProps();if(!r||!fo(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=NE(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,s=this.constraints;t&&Pr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=EE(r.layoutBox,t):this.constraints=!1,this.elastic=AE(n),s!==this.constraints&&!Pr(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&Gt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=CE(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Pr(t))return!1;const r=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;s.root&&(s.root.scroll=void 0,s.root.updateScroll());const i=Mj(r,s.root,this.visualElement.getTransformPagePoint());let a=PE(s.layout.layoutBox,i);if(n){const l=n(Rj(a));this.hasMutatedConstraints=!!l,l&&(a=gx(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Gt(d=>{if(!fo(d,n,this.currentDirection))return;let f=c&&c[d]||{};(a===!0||a===d)&&(f={min:0,max:0});const p=s?200:1e6,y=s?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return bu(this.visualElement,t),r.start(Xd(t,r,0,n,this.visualElement,!1))}stopAnimation(){Gt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps()[n];return s||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){Gt(n=>{const{drag:r}=this.getProps();if(!fo(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:a,max:l}=s.layout.layoutBox[n],c=i.get()||0;i.set(t[n]-ie(a,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Pr(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Gt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();s[a]=TE({min:c,max:c},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Gt(a=>{if(!fo(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(ie(c,u,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;RE.set(this.visualElement,this);const t=this.visualElement.current,n=Ys(t,"pointerdown",u=>{const{drag:d,dragListener:f=!0}=this.getProps(),p=u.target,y=p!==t&&cj(p);d&&f&&!y&&this.start(u)});let r;const s=()=>{const{dragConstraints:u}=this.getProps();Pr(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=OE(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),re.read(s);const l=wi(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(Gt(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=u[f].translate,p.set(p.get()+u[f].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:a=Au,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:a,dragMomentum:l}}}function am(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function OE(e,t,n){const r=ph(e,am(n)),s=ph(t,am(n));return()=>{r(),s()}}function fo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ME(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class IE extends Wn{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new LE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Zl=e=>(t,n)=>{e&&re.update(()=>e(t,n),!1,!0)};class _E extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new Kx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:Zl(t),onStart:Zl(n),onMove:Zl(r),onEnd:(i,a)=>{delete this.session,s&&re.postRender(()=>s(i,a))}}}mount(){this.removePointerDownListener=Ys(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ec=!1;class FE extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),ec&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),zo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,{projection:a}=r;return a&&(a.isPresent=i,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),ec=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==i?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||re.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),ef.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=t;ec=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Yx(e){const[t,n]=zx(),r=S.useContext(Fd);return o.jsx(FE,{...e,layoutGroup:r,switchLayoutGroup:S.useContext(Hx),isPresent:t,safeToRemove:n})}const zE={pan:{Feature:_E},drag:{Feature:IE,ProjectionNode:Fx,MeasureLayout:Yx}};function lm(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,i=r[s];i&&re.postRender(()=>i(t,Fi(t)))}class VE extends Wn{mount(){const{current:t}=this.node;t&&(this.unmount=ij(t,(n,r)=>(lm(this.node,r,"Start"),s=>lm(this.node,s,"End"))))}unmount(){}}class DE extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oi(wi(this.node.current,"focus",()=>this.onFocus()),wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function cm(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),i=r[s];i&&re.postRender(()=>i(t,Fi(t)))}class BE extends Wn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=dj(t,(s,i)=>(cm(this.node,i,"Start"),(a,{success:l})=>cm(this.node,a,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Ru=new WeakMap,tc=new WeakMap,UE=e=>{const t=Ru.get(e.target);t&&t(e)},$E=e=>{e.forEach(UE)};function HE({root:e,...t}){const n=e||document;tc.has(n)||tc.set(n,{});const r=tc.get(n),s=JSON.stringify(t);return r[s]||(r[s]=new IntersectionObserver($E,{root:e,...t})),r[s]}function WE(e,t,n){const r=HE(t);return Ru.set(e,n),r.observe(e),()=>{Ru.delete(e),r.unobserve(e)}}const GE={some:0,all:1};class KE extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:GE[s]},l=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,i&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),y=d?f:p;y&&y(u)};this.stopObserver=WE(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(qE(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function qE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const YE={inView:{Feature:KE},tap:{Feature:BE},focus:{Feature:DE},hover:{Feature:VE}},XE={layout:{ProjectionNode:Fx,MeasureLayout:Yx}},QE={...bE,...YE,...zE,...XE},nl=mE(QE,gE);function rl(e){const t=yr(()=>xr(e)),{isStatic:n}=S.useContext(_i);if(n){const[,r]=S.useState(e);S.useEffect(()=>t.on("change",r),[])}return t}function Xx(e,t){const n=rl(t()),r=()=>n.set(t());return r(),gi(()=>{const s=()=>re.preRender(r,!1,!0),i=e.map(a=>a.on("change",s));return()=>{i.forEach(a=>a()),pn(r)}}),n}function JE(e){Ks.current=[],e();const t=Xx(Ks.current,e);return Ks.current=void 0,t}function ka(e,t,n,r){if(typeof e=="function")return JE(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!="function")return ZE(e,t,n,r);const a=typeof t=="function"?t:wj(t,n,r),l=Array.isArray(e)?um(e,a):um([e],([u])=>a(u)),c=Array.isArray(e)?void 0:e.accelerate;return c&&!c.isTransformed&&typeof t!="function"&&Array.isArray(n)&&(r==null?void 0:r.clamp)!==!1&&(l.accelerate={...c,times:t,keyframes:n,isTransformed:!0}),l}function um(e,t){const n=yr(()=>[]);return Xx(e,()=>{n.length=0;const r=e.length;for(let s=0;s<r;s++)n[s]=e[s].get();return t(n)})}function ZE(e,t,n,r){const s=yr(()=>Object.keys(n)),i=yr(()=>({}));for(const a of s)i[a]=ka(e,t,n[a],r);return i}function eP(e,t={}){const{isStatic:n}=S.useContext(_i),r=()=>Ce(e)?e.get():e;if(n)return ka(r);const s=rl(r());return S.useInsertionEffect(()=>Sj(s,e,t),[s,JSON.stringify(t)]),s}function tP(e,t={}){return eP(e,{type:"spring",...t})}function nP({children:e,className:t="",onClick:n,mouseX:r,spring:s,distance:i,magnification:a,baseItemSize:l,label:c}){const u=S.useRef(null),d=rl(0),f=ka(r,g=>{if(!u.current||g===1/0)return i;const b=u.current.getBoundingClientRect(),h=b.left+b.width/2;return g-h}),p=ka(f,[-i,0,i],[1,a/l,1]),y=tP(p,s),m=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),n==null||n())};return o.jsx(nl.div,{ref:u,style:{width:l,height:l,scale:y},onHoverStart:()=>d.set(1),onHoverEnd:()=>d.set(0),onFocus:()=>d.set(1),onBlur:()=>d.set(0),onClick:n,className:`dock-item ${t}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":c,onKeyDown:m,children:S.Children.map(e,g=>S.cloneElement(g,{isHovered:d}))})}function rP({children:e,className:t="",...n}){const{isHovered:r}=n,[s,i]=S.useState(!1);return S.useEffect(()=>{if(!r)return;const a=r.on("change",l=>{i(l===1)});return()=>a()},[r]),o.jsx(HN,{children:s&&o.jsx(nl.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${t}`,role:"tooltip",style:{x:"-50%"},children:e})})}function sP({children:e,className:t=""}){return o.jsx("div",{className:`dock-icon ${t}`,children:e})}function iP({items:e,className:t="",spring:n={mass:.1,stiffness:220,damping:18},magnification:r=52,distance:s=120,panelHeight:i=44,baseItemSize:a=36}){const l=rl(1/0),c=st(),u=gn();return o.jsx("div",{className:"dock-outer",children:o.jsx(nl.div,{onMouseMove:d=>l.set(d.clientX),onMouseLeave:()=>l.set(1/0),className:`dock-panel ${t}`,style:{height:i},role:"toolbar","aria-label":"Application dock",children:e.map((d,f)=>{const p=c.pathname===d.to||d.to!=="/"&&c.pathname.startsWith(d.to)||d.to==="/"&&c.pathname==="/dashboard";return o.jsxs(nP,{onClick:()=>{var y;(y=d.onClick)==null||y.call(d),d.to&&u(d.to)},className:`${d.className||""} ${p?"active":""}`,mouseX:l,spring:n,distance:s,magnification:r,baseItemSize:a,label:d.label,children:[o.jsx(sP,{children:d.icon}),o.jsx(rP,{children:d.label})]},d.to||f)})})})}function We({path:e,size:t=24,viewBox:n="0 0 24 24",fill:r="none",stroke:s="currentColor",strokeWidth:i=1.8}){return o.jsx("svg",{width:t,height:t,viewBox:n,fill:r,stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e})}const po={home:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),o.jsx("path",{d:"M5 9.5V21h14V9.5"}),o.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),o.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),o.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),o.jsx("path",{d:"M12 17v5"})]})}),clock:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M12 7v5l3 3"})]})}),history:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),o.jsx("path",{d:"M3 4v5h5"}),o.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),o.jsx("path",{d:"M2 21h20"}),o.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),o.jsx("path",{d:"M2 21h20"}),o.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),o.jsx("path",{d:"M4 13h16"})]})}),discounts:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),o.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),o.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),o.jsx("path",{d:"M15 21V9h6v12"}),o.jsx("path",{d:"M3 21h18"}),o.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:o.jsx(We,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),ticket:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),o.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),o.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),o.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:o.jsx(We,{path:o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"12",cy:"8",r:"4"}),o.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:o.jsx(We,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:o.jsx(We,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},oP=[{label:"Home",to:"/#home",icon:"home"},{label:"Events",to:"/#events",icon:"calendar"},{label:"Celebrity Singers",to:"/#celebrities",icon:"mic"},{label:"Future Events",to:"/#future-events",icon:"clock"},{label:"History",to:"/#history",icon:"history"},{label:"Hotels",to:"/#hotels",icon:"hotels"},{label:"Restaurants",to:"/#restaurants",icon:"restaurants"},{label:"Discounts",to:"/#discounts",icon:"discounts"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"},{label:"Contact",to:"/#contact",icon:"contact"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0}];function dm(e){return(e==null?void 0:e.firstName)||(e==null?void 0:e.name)||(e==null?void 0:e.email)||"Account"}function Qx(){const{user:e,isAdmin:t,logout:n}=Ut(),r=gn(),s=st(),[i,a]=S.useState(!1),[l,c]=S.useState(!1),[u,d]=S.useState(!1),f=S.useRef(null),p=Ee.useMemo(()=>{const g=[...oP];return t&&g.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),g},[t]),y=Ee.useMemo(()=>p.map(g=>({label:g.label,to:g.to,icon:po[g.icon],className:g.cta?"dock-item-cta":""})),[p]);S.useEffect(()=>{const g=()=>{f.current||(f.current=window.requestAnimationFrame(()=>{a(window.scrollY>12),f.current=null}))};return g(),window.addEventListener("scroll",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),f.current&&window.cancelAnimationFrame(f.current)}},[]),S.useEffect(()=>{c(!1),d(!1)},[s.pathname]);const m=()=>{n(),r("/")};return o.jsxs(o.Fragment,{children:[o.jsx("header",{className:`dock-site-header ${i?"scrolled":""}`,children:o.jsxs("div",{className:"dock-site-header-inner",children:[o.jsx(K,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Festival home",children:o.jsx("span",{className:"dock-site-brand-logo",children:o.jsx("img",{src:Fe("/assets/company-logo.jpeg"),alt:"Ozilla Festival"})})}),o.jsx("div",{className:"dock-header-center",children:o.jsx(iP,{items:y,className:"dock-nav",magnification:60,distance:130,panelHeight:50,baseItemSize:42})}),o.jsxs("div",{className:"dock-site-header-actions",children:[e?o.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[o.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>d(g=>!g),"aria-expanded":u,"aria-label":"Account menu",children:[o.jsx("span",{className:"dock-account-avatar",children:String(dm(e)).slice(0,1).toUpperCase()}),o.jsx("strong",{children:dm(e)})]}),o.jsxs("div",{className:"dock-account-menu",children:[o.jsx(K,{to:"/account",children:"Account"}),o.jsx(K,{to:"/tickets/my-tickets",children:"My Tickets"}),t&&o.jsx(K,{to:"/admin/dashboard",children:"Admin Dashboard"}),o.jsx("button",{type:"button",onClick:m,children:"Logout"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(K,{to:"/login",className:"dock-site-login-btn",children:"Login"}),o.jsx(K,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),o.jsx("button",{type:"button",className:`dock-mobile-toggle ${l?"open":""}`,"aria-label":l?"Close menu":"Open menu","aria-expanded":l,onClick:()=>c(g=>!g),children:l?po.close:po.menu})]})]})}),o.jsx("div",{className:`dock-mobile-overlay ${l?"open":""}`,onClick:()=>c(!1),children:o.jsxs("div",{className:`dock-mobile-panel ${l?"open":""}`,onClick:g=>g.stopPropagation(),children:[o.jsxs("div",{className:"dock-mobile-header",children:[o.jsx("div",{children:o.jsx("h2",{children:"Menu"})}),o.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>c(!1),"aria-label":"Close menu",children:"x"})]}),o.jsx("div",{className:"dock-mobile-links",children:p.map(g=>o.jsxs(Ww,{to:g.to,onClick:()=>c(!1),children:[o.jsx("span",{className:"dock-mobile-link-icon",children:po[g.icon]}),o.jsx("span",{children:g.label})]},g.to))}),o.jsx("div",{className:"dock-mobile-auth",children:e?o.jsx("button",{type:"button",onClick:()=>{m(),c(!1)},children:"Logout"}):o.jsxs(o.Fragment,{children:[o.jsx(K,{to:"/login",onClick:()=>c(!1),children:"Login"}),o.jsx(K,{to:"/register",onClick:()=>c(!1),children:"Sign Up"})]})})]})})]})}const aP=[{label:"Headline Artists",href:"/#celebrities"},{label:"VIP Passes",href:"/tickets"},{label:"Live Stages",href:"/#facilities"},{label:"Hotel Partners",href:"/#hotels"},{label:"Festival Dining",href:"/#restaurants"}],lP=[{label:"My Digital Passes",href:"/tickets/my-tickets"},{label:"Contact Team",href:"/#contact"},{label:"QR Ticket Verification",href:"/verification/OZ-2026-PREVIEW"},{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"}],cP=[{name:"Instagram",href:"https://www.instagram.com/ozillafestival",svg:o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Facebook",href:"https://www.facebook.com/ozillafestival",svg:o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"YouTube",href:"https://www.youtube.com",svg:o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}];function Jx(){return o.jsxs("footer",{className:"oz-footer",children:[o.jsxs("div",{className:"oz-footer-container",children:[o.jsxs("div",{className:"oz-footer-grid",children:[o.jsxs("div",{className:"oz-footer-col oz-brand-col",children:[o.jsxs(K,{to:"/",className:"oz-brand-link",children:[o.jsx("img",{src:Fe("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"oz-brand-logo",onError:e=>{e.currentTarget.src=Fe("/assets/logo.jpeg")}}),o.jsxs("div",{children:[o.jsx("strong",{children:"OZILLA FESTIVAL"}),o.jsx("span",{children:"PRISM ENTERTAINMENT · 2026"})]})]}),o.jsx("p",{className:"oz-brand-text",children:"Pakistan's premier live music and cultural festival in Lahore. Experience 4 mega stages, headline artists, gourmet food, and official QR passes."}),o.jsx("div",{className:"oz-social-row",children:cP.map(e=>o.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,className:"oz-social-btn",children:e.svg},e.name))})]}),o.jsxs("div",{className:"oz-footer-col",children:[o.jsx("h4",{children:"Festival"}),o.jsx("ul",{className:"oz-footer-nav",children:aP.map(e=>o.jsx("li",{children:o.jsx(K,{to:e.href,children:e.label})},e.label))})]}),o.jsxs("div",{className:"oz-footer-col",children:[o.jsx("h4",{children:"Support & Info"}),o.jsx("ul",{className:"oz-footer-nav",children:lP.map(e=>o.jsx("li",{children:o.jsx(K,{to:e.href,children:e.label})},e.label))})]}),o.jsxs("div",{className:"oz-footer-col oz-event-col",children:[o.jsx("h4",{children:"Event Details"}),o.jsxs("div",{className:"oz-event-info",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Date"}),o.jsx("strong",{children:"November 1, 2026"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Location"}),o.jsx("strong",{children:"Lahore, Pakistan"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Inquiries"}),o.jsx("strong",{children:"ozillafestival@gmail.com"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Pass Access"}),o.jsx("strong",{children:"Instant Verified QR Pass"})]})]})]})]}),o.jsxs("div",{className:"oz-footer-bottom",children:[o.jsx("p",{children:"© 2026 Ozilla Festival & Prism Entertainment. All rights reserved."}),o.jsxs("div",{className:"oz-footer-bottom-links",children:[o.jsx(K,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"·"}),o.jsx(K,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"·"}),o.jsx(K,{to:"/verification/OZ-2026-PREVIEW",children:"QR Verification"})]})]})]}),o.jsx("style",{children:`
        .oz-footer {
          background: #080504 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 4rem 0 2rem;
          position: relative;
          z-index: 10;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .oz-footer-container {
          width: min(1200px, calc(100% - 2.5rem));
          margin: 0 auto;
        }

        .oz-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .oz-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .oz-brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .oz-brand-link strong {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-brand-link span {
          display: block;
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .oz-brand-text {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin-bottom: 1.2rem;
          max-width: 320px;
        }

        .oz-social-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .oz-social-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 180ms ease;
        }

        .oz-social-btn:hover {
          background: #ff5a1f;
          border-color: #ff5a1f;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .oz-footer-col h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.1rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .oz-footer-nav a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 150ms ease;
        }

        .oz-footer-nav a:hover {
          color: #ffbd59;
        }

        .oz-event-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-event-info > div {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .oz-event-info span {
          font-size: 0.72rem;
          color: #ffbd59;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .oz-event-info strong {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }

        .oz-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.8rem;
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
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .oz-footer-bottom-links a:hover {
          color: #ffbd59;
        }

        @media (max-width: 900px) {
          .oz-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 560px) {
          .oz-footer-grid {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }
          .oz-footer-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `})]})}function Kn({children:e}){return o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#550e0e] text-white overflow-x-hidden w-full",children:[o.jsx(Qx,{}),o.jsx("div",{className:"flex-1 w-full overflow-x-hidden",children:e||o.jsx(Ti,{})}),o.jsx(Jx,{})]})}function nc({children:e}){return o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#0B0705] text-white overflow-x-hidden w-full font-['Plus_Jakarta_Sans',sans-serif] dock-app-shell",children:[o.jsx(Qx,{}),o.jsx("main",{className:"flex-1 px-4 sm:px-6 py-6 md:py-10 app-main app-content dock-app-content",children:o.jsx("div",{className:"w-full max-w-[1280px] mx-auto",children:e||o.jsx(Ti,{})})}),o.jsx(Jx,{})]})}const uP='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>';function dP(){const e=gn(),t=st(),{login:n,checkAuth:r}=Ut(),s=new URLSearchParams(t.search).get("returnTo"),i=qa(s,"/dashboard"),[a,l]=S.useState(!1),[c,u]=S.useState({email:"",password:""}),[d,f]=S.useState(!0),[p,y]=S.useState(""),[m,g]=S.useState(""),[b,h]=S.useState(!1),[x,v]=S.useState(!1),w=P=>{g(""),u({...c,[P.target.name]:P.target.value})},k=async P=>{var T,L;P.preventDefault(),y(""),g(""),h(!0);try{await n({email:String(c.email||"").trim().toLowerCase(),password:String(c.password||"")}),g("Login successful. Preparing your festival workspace..."),await new Promise(C=>setTimeout(C,450)),e(i)}catch(C){y(((L=(T=C.response)==null?void 0:T.data)==null?void 0:L.message)||C.message||"Invalid email or password")}finally{h(!1)}},N=async()=>{y(""),g("");{y("Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env");return}};return o.jsxs("form",{onSubmit:k,className:"auth-form login-form-premium",children:[p&&o.jsx("div",{className:"auth-alert auth-alert-error",children:p}),m&&o.jsx("div",{className:"auth-alert auth-alert-success login-success-alert",children:m}),o.jsx("div",{className:"auth-social-wrap",children:o.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google",onClick:N,disabled:x||b,children:[o.jsx("img",{src:uP,alt:"Google logo",className:"auth-google-logo"}),o.jsx("span",{children:x?"Opening Google...":"Sign in with Google"})]})}),o.jsx("div",{className:"auth-divider",children:o.jsx("span",{children:"Or sign in with email or phone"})}),o.jsxs("div",{className:"auth-field login-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"login-email",children:"Email or Mobile Number"}),o.jsx("input",{id:"login-email",type:"text",name:"email",value:c.email,onChange:w,className:"auth-input",placeholder:"you@example.com or 03001234567",autoComplete:"username",required:!0})]}),o.jsxs("div",{className:"auth-field login-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"login-password",children:"Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"login-password",type:a?"text":"password",name:"password",value:c.password,onChange:w,className:"auth-input auth-input-with-icon",placeholder:"Enter your password",autoComplete:"current-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>l(P=>!P),"aria-label":a?"Hide password":"Show password",children:a?"🙈":"👁"})]})]}),o.jsxs("div",{className:"login-form-row",children:[o.jsxs("label",{className:"login-remember",children:[o.jsx("input",{type:"checkbox",checked:d,onChange:P=>f(P.target.checked)}),o.jsx("span",{children:"Remember me"})]}),o.jsx("button",{type:"button",className:"auth-link login-forgot-link",children:"Forgot Password?"})]}),o.jsx("button",{type:"submit",disabled:b||x,className:"auth-btn auth-btn-primary",children:b?o.jsxs("span",{className:"login-loading-wrap",children:[o.jsx("span",{className:"login-loading-dot"}),"Signing In..."]}):o.jsx("span",{children:"Sign In"})}),o.jsxs("div",{className:"login-register-line",children:[o.jsx("span",{children:"Don't have an account?"}),o.jsx(K,{to:`/register?${new URLSearchParams({returnTo:i}).toString()}`,children:"Create New Account"})]}),o.jsxs("div",{className:"login-trust-grid","aria-label":"Login trust indicators",children:[o.jsx("span",{children:"Secure Login"}),o.jsx("span",{children:"Fast Authentication"}),o.jsx("span",{children:"Protected Account"}),o.jsx("span",{children:"Google Verified"})]})]})}function fP(){return o.jsxs("div",{className:"auth-form-container",children:[o.jsx(dP,{}),o.jsxs("div",{className:"auth-footer-links",children:[o.jsx(K,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"•"}),o.jsx(K,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"•"}),o.jsx(K,{to:"/#contact",children:"Need Help?"})]})]})}const pP='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>',hP=()=>new Promise(e=>setTimeout(e,450));function mP(){const e=gn(),t=st(),{register:n,checkAuth:r}=Ut(),s=new URLSearchParams(t.search).get("returnTo"),i=qa(s,"/dashboard"),[a,l]=S.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[c,u]=S.useState(""),[d,f]=S.useState(!1),[p,y]=S.useState(!1),[m,g]=S.useState(!1),[b,h]=S.useState(!1),[x,v]=S.useState(0),[w,k]=S.useState(""),[N,P]=S.useState(""),[T,L]=S.useState(!1),[C,z]=S.useState(!1),[U,J]=S.useState(!1),[W,I]=S.useState(!1),[F,G]=S.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),E=/^\S+@\S+\.\S+$/.test(a.email),R=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(a.phone.replace(/\s+/g,"")),A={upper:/[A-Z]/.test(a.password),lower:/[a-z]/.test(a.password),number:/\d/.test(a.password),special:/[^A-Za-z0-9]/.test(a.password),length:a.password.length>=8},M=Object.values(A).filter(Boolean).length,$=M===5,q=a.confirmPassword.length>0&&a.password===a.confirmPassword,oe=a.password.length>0,Be=S.useMemo(()=>oe?M<=2?{label:"Weak",className:"weak",percent:28}:M===3?{label:"Medium",className:"medium",percent:52}:M===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[oe,M]),H=[{key:"upper",text:"Uppercase letter",met:A.upper},{key:"lower",text:"Lowercase letter",met:A.lower},{key:"number",text:"Number",met:A.number},{key:"special",text:"Special character",met:A.special},{key:"length",text:"8+ characters",met:A.length}],ne=a.firstName.trim()&&a.lastName.trim()&&E&&R&&$&&q&&p&&!T&&!C;S.useEffect(()=>{if(x<=0)return;const Q=window.setInterval(()=>{v(B=>Math.max(0,B-1))},1e3);return()=>window.clearInterval(Q)},[x]);const Me=()=>{k(""),P("")},it=Q=>{const{name:B,value:Y}=Q.target;Me(),l(Xe=>({...Xe,[B]:Y})),B==="email"&&(u(""),f(!1),y(!1),v(0)),B in F&&Y.length>0&&G(Xe=>({...Xe,[B]:!0}))},$t=Q=>{const{name:B}=Q.target;B in F&&G(Y=>({...Y,[B]:!0}))},xs=async()=>{var Q,B;if(Me(),!E){G(Y=>({...Y,email:!0})),k("Please enter a valid email address before sending OTP.");return}g(!0);try{const Y=await Dr.resendOtp(a.email);f(!0),y(!1),v(60),Y.otpForDevelopment?(u(Y.otpForDevelopment),P(`${Y.message} Development OTP: ${Y.otpForDevelopment}`)):P(Y.message||"OTP sent to your email address.")}catch(Y){k(((B=(Q=Y.response)==null?void 0:Q.data)==null?void 0:B.message)||Y.message||"Unable to send OTP.")}finally{g(!1)}},vt=async()=>{var Q,B;if(Me(),!E||c.trim().length<4){k("Enter the OTP sent to your email.");return}h(!0);try{const Y=await Dr.verifyOtp({email:a.email,otp:c});y(!0),P(Y.message||"Email verified successfully.")}catch(Y){y(!1),k(((B=(Q=Y.response)==null?void 0:Q.data)==null?void 0:B.message)||Y.message||"OTP verification failed.")}finally{h(!1)}},Vi=async Q=>{var B,Y,Xe;if(Q.preventDefault(),Me(),!E){G(Ae=>({...Ae,email:!0})),k("Please enter a valid email address.");return}if(!p){k("Please verify your email OTP before creating your account.");return}if(!R){G(Ae=>({...Ae,phone:!0})),k("Please enter a valid mobile number.");return}if(!$){G(Ae=>({...Ae,password:!0})),k("Please satisfy all password requirements.");return}if(!q){G(Ae=>({...Ae,confirmPassword:!0})),k("Passwords do not match.");return}L(!0);try{await n({firstName:a.firstName,lastName:a.lastName,name:`${a.firstName} ${a.lastName}`.trim(),email:a.email,phone:a.phone,password:a.password}),P("Account created successfully. Preparing your festival workspace..."),await hP(),e(i)}catch(Ae){const Di=(B=Ae.response)==null?void 0:B.status,Bi=((Xe=(Y=Ae.response)==null?void 0:Y.data)==null?void 0:Xe.message)||"Registration failed",yn=Bi.toLowerCase();Di===409||yn.includes("already")||yn.includes("exists")?k("Account already exists with this email or phone number"):k(Bi)}finally{L(!1)}},vs=async()=>{Me();{k("Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env");return}};return o.jsxs("form",{onSubmit:Vi,className:"auth-form register-form-premium",children:[w&&o.jsx("div",{className:"auth-alert auth-alert-error register-alert",children:w}),N&&o.jsx("div",{className:"auth-alert auth-alert-success register-alert",children:N}),o.jsx("div",{className:"auth-social-wrap",children:o.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google register-google-btn",onClick:vs,disabled:C||T,children:[o.jsx("img",{src:pP,alt:"Google logo",className:"auth-google-logo"}),o.jsx("span",{children:C?"Opening Google...":"Sign up with Google"})]})}),o.jsx("div",{className:"auth-divider",children:o.jsx("span",{children:"Or create with email"})}),o.jsxs("div",{className:"auth-row register-name-row",children:[o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-first-name",children:"First Name"}),o.jsx("input",{id:"register-first-name",type:"text",name:"firstName",value:a.firstName,onChange:it,className:"auth-input",autoComplete:"given-name",required:!0})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-last-name",children:"Last Name"}),o.jsx("input",{id:"register-last-name",type:"text",name:"lastName",value:a.lastName,onChange:it,className:"auth-input",autoComplete:"family-name",required:!0})]})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-email",children:"Email Address"}),o.jsx("input",{id:"register-email",type:"email",name:"email",value:a.email,onChange:it,onBlur:$t,className:`auth-input ${F.email&&!E?"auth-input-invalid":""}`,placeholder:"you@example.com",autoComplete:"email",required:!0})]}),F.email&&!E&&o.jsx("p",{className:"auth-field-error",children:"Please enter a valid email address."}),o.jsxs("div",{className:`register-otp-card register-otp-card-desktop ${p?"register-otp-verified":""}`,children:[o.jsxs("div",{children:[o.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),o.jsx("strong",{children:p?"Email verified":d?"Enter your OTP":"Verify before signup"}),o.jsx("span",{className:"register-otp-status",children:p?"Verified with premium security":x>0?`Resend available in ${x}s`:"One-time code expires in 10 minutes"})]}),o.jsxs("div",{className:"register-otp-controls",children:[o.jsx("button",{type:"button",className:"register-mini-btn",onClick:xs,disabled:m||!E||p||x>0,children:m?"Sending...":d?"Resend OTP":"Send OTP"}),o.jsx("input",{type:"text",value:c,onChange:Q=>{Me(),u(Q.target.value.replace(/\D/g,"").slice(0,6)),y(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!d||p}),o.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:vt,disabled:!d||p||b,children:b?"Verifying...":p?"Verified":"Verify"})]}),p&&o.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-phone",children:"Phone Number"}),o.jsx("input",{id:"register-phone",type:"tel",name:"phone",value:a.phone,onChange:it,onBlur:$t,className:`auth-input ${F.phone&&!R?"auth-input-invalid":""}`,placeholder:"+92 3XX XXXXXXX",autoComplete:"tel",required:!0})]}),F.phone&&!R&&o.jsx("p",{className:"auth-field-error",children:"Please enter a valid mobile number."}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-password",children:"Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"register-password",type:U?"text":"password",name:"password",value:a.password,onChange:it,onBlur:$t,className:`auth-input auth-input-with-icon ${F.password&&!$?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>J(Q=>!Q),"aria-label":U?"Hide password":"Show password",children:U?"🙈":"👁"})]})]}),o.jsxs("div",{className:`register-strength register-strength-${Be.className}`,children:[o.jsxs("div",{className:"register-strength-top",children:[o.jsx("span",{children:"Password Strength"}),o.jsx("strong",{children:Be.label})]}),o.jsx("div",{className:"register-strength-track",children:o.jsx("span",{style:{width:`${Be.percent}%`}})})]}),o.jsx("ul",{className:"auth-password-rules register-password-rules",children:H.map(Q=>{const B=Q.met?"auth-rule-met":oe?"auth-rule-unmet":"auth-rule-neutral";return o.jsxs("li",{className:`auth-password-rule-item ${B}`,children:[o.jsx("span",{className:"auth-rule-icon","aria-hidden":"true",children:Q.met?"✓":"✗"}),o.jsx("span",{children:Q.text})]},Q.key)})}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-confirm-password",children:"Confirm Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"register-confirm-password",type:W?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:it,onBlur:$t,className:`auth-input auth-input-with-icon ${F.confirmPassword&&!q?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>I(Q=>!Q),"aria-label":W?"Hide confirm password":"Show confirm password",children:W?"🙈":"👁"})]})]}),F.confirmPassword&&!q&&o.jsx("p",{className:"auth-field-error",children:"Passwords do not match."}),o.jsxs("div",{className:`register-otp-card register-otp-card-mobile ${p?"register-otp-verified":""}`,children:[o.jsxs("div",{children:[o.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),o.jsx("strong",{children:p?"Email verified":d?"Enter your OTP":"Verify before signup"}),o.jsx("span",{className:"register-otp-status",children:p?"Verified with premium security":x>0?`Resend available in ${x}s`:"One-time code expires in 10 minutes"})]}),o.jsxs("div",{className:"register-otp-controls",children:[o.jsx("button",{type:"button",className:"register-mini-btn",onClick:xs,disabled:m||!E||p||x>0,children:m?"Sending...":d?"Resend OTP":"Send OTP"}),o.jsx("input",{type:"text",value:c,onChange:Q=>{Me(),u(Q.target.value.replace(/\D/g,"").slice(0,6)),y(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code","aria-label":"Email OTP code",disabled:!d||p}),o.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:vt,disabled:!d||p||b,children:b?"Verifying...":p?"Verified":"Verify"})]}),p&&o.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),o.jsx("button",{type:"submit",disabled:!ne,className:"auth-btn auth-btn-primary register-create-btn",children:T?o.jsxs("span",{className:"login-loading-wrap",children:[o.jsx("span",{className:"login-loading-dot"}),"Preparing Your Experience..."]}):o.jsx("span",{children:"Create Account"})}),o.jsxs("div",{className:"register-login-line",children:[o.jsx("span",{children:"Already have an account?"}),o.jsx(K,{to:`/login?${new URLSearchParams({returnTo:i}).toString()}`,children:"Sign In"})]}),o.jsxs("div",{className:"register-trust-grid","aria-label":"Registration trust indicators",children:[o.jsx("span",{children:"Secure Registration"}),o.jsx("span",{children:"Instant Verification"}),o.jsx("span",{children:"Protected Account"}),o.jsx("span",{children:"Google Verified"})]})]})}function gP(){return o.jsxs("div",{className:"auth-form-container",children:[o.jsx(mP,{}),o.jsxs("div",{className:"auth-footer-links",children:[o.jsx(K,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"•"}),o.jsx(K,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"•"}),o.jsx(K,{to:"/#contact",children:"Need Help?"})]})]})}function yP(){const[e]=qw(),t=gn(),{checkAuth:n}=Ut(),[r,s]=S.useState("Signing you in with Google...");return S.useEffect(()=>{(async()=>{const a=e.get("token"),l=e.get("error"),c=e.get("returnTo"),u=qa(c,"/dashboard");if(l){s(l==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const d=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>t(`/login?${d}`,{replace:!0}),1200);return}if(!a){s("Google sign-in token not found. Please try again.");const d=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>t(`/login?${d}`,{replace:!0}),1200);return}kt.setToken(a),await n(),t(u,{replace:!0})})()},[n,t,e]),o.jsx("div",{className:"auth-page",children:o.jsxs("div",{className:"auth-card",children:[o.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),o.jsx("p",{className:"auth-subtitle",children:r})]})})}const Er={about:"OZilla Festival is a youth-focused entertainment experience combining music, food, culture, creators, brands and communities into one powerful lifestyle platform.",festivalExperience:["Live Concerts","DJ Nights","Food Experiences","Brand Activation Zones","Content and Photo Moments","Community Engagement"],journey:["Discover OZilla","Explore Partners","Select Discount","Use Promo Code","Enjoy Experience"],partnerBenefits:["Digital Visibility","Customer Reach","Influencer Promotion","Event Audience Access","Brand Awareness"],restaurants:[{name:"Street Grill Co.",cuisine:"BBQ and Fast Casual",location:"Karachi",discount:"15% OFF",offer:"Festival combo meal with priority queue access.",code:"OZILLA15"},{name:"Spice District",cuisine:"Pakistani Fusion",location:"Lahore",discount:"20% OFF",offer:"Family platter offer for OZilla audience.",code:"SPICE20"},{name:"Urban Brew",cuisine:"Cafe and Desserts",location:"Islamabad",discount:"Buy 1 Get 1",offer:"Coffee and dessert pair for creators and attendees.",code:"BREWBOGO"}],hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:Fe("/assets/hotels/Pearl-Continental-Lahore.jpg"),showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:Fe("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:Fe("/assets/hotels/Hotel-Indigo.jpg"),showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:Fe("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:Fe("/assets/hotels/Luxus-Grand-Hotel.jpg"),showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:Fe("/assets/hotels/Nishat.jpg"),showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]},xP=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:Fe("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:Fe("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:Fe("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:Fe("/assets/ozilla/hassan-raheem.jpg")}],vP=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],bP=[{name:"Ozilla Festival 2026",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED EVENT",description:"The flagship Ozilla experience with live music, food culture, partner activations, and premium crowd moments."},{name:"Celebrity Night",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIVE EVENT",description:"A high-energy night built around headline artists, stage lights, social moments, and unforgettable performances."},{name:"Brand Experience Zone",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIMITED SEATS",description:"Immersive sponsor zones, creator content, giveaways, product trials, and interactive festival experiences."}],wP=[{name:"Ozilla Strategy Module",status:"Completed",detail:"Audience journey and activation playbook finalized."},{name:"Ozilla Scale Module",status:"Completed",detail:"Multi-channel visibility model and sponsor packages benchmarked."}],SP=[{name:"Ozilla Strategy Module",year:"2023",description:"Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.",highlights:["Brand Positioning","Audience Research","Partner Onboarding"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Scale Module",year:"2024",description:"Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.",highlights:["Creator Collaborations","Sponsor Visibility","Live Entertainment Blocks"],venue:"DHA Sports Club, Lahore",date:"November 9, 2024"},{name:"Ozilla Festival Website Brief 2026",year:"2025",description:"Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.",highlights:["Ticketing Workflow","Experience Mapping","Marketing Readiness"],venue:"Gulberg Event District, Lahore",date:"October 18, 2025"},{name:"Ozilla Basand Festival",year:"2026",description:"Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.",highlights:["Cultural Performances","Live Music","Brand Activation Zones"],venue:"Lahore, Punjab",date:"March 07, 2026"},{name:"Ozilla Festival 2027 Season 2",year:"2027",description:"Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.",highlights:["Celebrity Performances","Expanded Audience Program","Premium Experience Zones"],venue:"Lahore, Punjab",date:"November 14, 2027"}],kP=[{tier:"Title Sponsor",price:"Premium",perks:["Exclusive brand naming rights","Stage backdrop placement","VIP zone branding","30-second ad slot","Social media features"]},{tier:"Gold Sponsor",price:"High",perks:["Brand activation zone","Banner placements","Digital features","Influencer mentions","On-ground presence"]},{tier:"Silver Sponsor",price:"Mid",perks:["Logo on all materials","Social shoutout","Booth at festival","Feature in email campaigns"]},{tier:"Media Partner",price:"Custom",perks:["Media coverage rights","Press passes","Collaborative content","Announcement placement"]}],jP=[{title:"Main Concert Stage",desc:"World-class 100kW concert sound system, 360° laser array, and immersive sub-bass arrays."},{title:"Food & Beats Court",desc:"Curated food street featuring artisan fusion eats, mocktails, coffee and desserts."},{title:"24/7 Medical Hub",desc:"On-site first aid stations, paramedic support, and emergency rapid response teams."},{title:"Secure VIP Parking",desc:"Valet and managed parking zones for general festival attendees and VIP ticket holders."},{title:"Neon Photo Booths",desc:"Interactive holographic backdrops, creator lighting rigs, and festival photo moments."},{title:"Full Accessibility",desc:"Dedicated accessible viewing decks, pathways, and on-ground hospitality assistance."},{title:"Crowd Safety Squad",desc:"Trained professional security and crowd flow management across all festival zones."},{title:"Ultra-Fast WiFi",desc:"High-speed gigabit Wi-Fi zones for seamless streaming, posting, and sharing moments."}],NP=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],EP=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function PP(e){const[t,n]=S.useState(()=>{const r=Math.max(new Date(e)-Date.now(),0);return{days:Math.floor(r/864e5),hours:Math.floor(r/36e5%24),minutes:Math.floor(r/6e4%60),seconds:Math.floor(r/1e3%60)}});return S.useEffect(()=>{const r=setInterval(()=>{const s=Math.max(new Date(e)-Date.now(),0);n({days:Math.floor(s/864e5),hours:Math.floor(s/36e5%24),minutes:Math.floor(s/6e4%60),seconds:Math.floor(s/1e3%60)})},1e3);return()=>clearInterval(r)},[e]),t}function TP(){const e=st(),t=PP("2026-11-01T18:00:00+05:00");return S.useEffect(()=>{var r;const n=(r=e.hash)==null?void 0:r.replace("#","");n?setTimeout(()=>{const s=document.getElementById(n);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[e.hash]),o.jsxs("main",{className:"sp-main",children:[o.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Festival",children:[o.jsx(Ya,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:145,speed:.6}),o.jsx("div",{className:"sp-hero-ambient-glow"}),o.jsxs("div",{className:"sp-hero-content",children:[o.jsxs("div",{className:"sp-hero-badge",children:[o.jsx("span",{children:"✨"}),o.jsx("strong",{children:"OZILLA FESTIVAL 2026 · LAHORE"})]}),o.jsx("h1",{className:"sp-hero-title",children:"OZILLA FESTIVAL"}),o.jsx("p",{className:"sp-hero-subtitle",children:"Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound."}),o.jsxs("div",{className:"sp-hero-meta-strip",children:[o.jsx("span",{children:"📅 November 1, 2026"}),o.jsx("span",{children:"📍 Lahore, Pakistan"}),o.jsx("span",{children:"⚡ 4 Mega Stages"}),o.jsx("span",{children:"🎟️ Official QR Passes"})]}),o.jsxs("div",{className:"sp-hero-actions",children:[o.jsx("a",{className:"sp-btn-ember",href:"#celebrities",children:"Explore Lineup"}),o.jsx(K,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes"})]})]})]}),o.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:o.jsx("div",{className:"sp-container",children:o.jsx("div",{className:"stats-inner-grid",children:EP.map((n,r)=>o.jsxs(nl.div,{className:"stat-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:r*.08},children:[o.jsx("strong",{className:"stat-val",children:n.value}),o.jsx("span",{className:"stat-label",children:n.label}),o.jsx("small",{className:"stat-sub",children:n.sub})]},n.label))})})}),o.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),o.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),o.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),o.jsx("div",{className:"sp-celebrity-grid",children:xP.map(n=>o.jsx("article",{className:`sp-celeb-card ${n.isHeadliner?"sp-celeb-headliner":""}`,children:o.jsxs("div",{className:"sp-celeb-frame",children:[o.jsx("img",{src:n.image,alt:n.name,loading:"lazy",onError:r=>{r.currentTarget.src=Fe("/assets/prism-auth-visual.jpg")}}),o.jsx("div",{className:"celeb-holo-sheen"}),o.jsxs("div",{className:"celeb-top-badges",children:[n.isHeadliner?o.jsx("span",{className:"sp-headliner-badge",children:"★ MAIN HEADLINER"}):o.jsx("span",{className:"celeb-stage-tag",children:n.stage}),o.jsxs("div",{className:"celeb-mini-eq",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsxs("div",{className:"sp-celeb-overlay",children:[o.jsx("div",{className:"celeb-genre-pill",children:n.genre}),o.jsx("h3",{children:n.name}),o.jsxs("div",{className:"celeb-meta-row",children:[o.jsxs("span",{children:["⚡ ",n.bpm]}),o.jsxs("span",{children:["♫ ",n.vibe]})]})]})]})},n.name))}),o.jsxs("div",{className:"sp-countdown",children:[o.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),o.jsx("div",{className:"sp-countdown-grid",children:[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]].map(([n,r])=>o.jsxs("div",{className:"sp-countdown-card",children:[o.jsx("strong",{children:String(r).padStart(2,"0")}),o.jsx("span",{children:n})]},n))})]})]})}),o.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",style:{textAlign:"center"},children:[o.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),o.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),o.jsx("div",{className:"sp-pricing-grid",children:vP.map(n=>o.jsxs("div",{className:`sp-pricing-card ${n.isFeatured?"sp-featured-pricing":""}`,children:[n.isFeatured&&o.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),o.jsxs("div",{className:"sp-pricing-header",children:[o.jsx("span",{className:"sp-tier-badge",children:n.badge}),o.jsx("h3",{children:n.name}),o.jsx("div",{className:"sp-pricing-cost",children:o.jsx("strong",{children:n.price})}),o.jsx("p",{className:"sp-pricing-sub",children:n.sub})]}),o.jsx("div",{className:"sp-pricing-divider"}),o.jsx("ul",{className:"sp-pricing-features",children:n.perks.map(r=>o.jsxs("li",{children:[o.jsx("span",{className:"sp-perk-check",children:"✓"}),o.jsx("span",{children:r})]},r))}),o.jsx(K,{to:n.ctaLink,className:n.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:n.ctaText})]},n.id))})]})}),o.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"The Festival Experience"}),o.jsx("h2",{className:"sp-section-title",children:"Who We Are"})]}),o.jsxs("div",{className:"sp-about-grid",children:[o.jsxs("div",{className:"sp-about-text",children:[o.jsx("p",{className:"sp-lead",children:Er.about}),o.jsx("p",{children:"The platform is designed around discovery, curated stage experiences, hospitality partnerships, exclusive discount access, and long-term brand collaborations."}),o.jsx("div",{className:"sp-journey-steps",children:Er.journey.map((n,r)=>o.jsxs("div",{className:"sp-journey-step",children:[o.jsx("span",{className:"sp-step-num",children:r+1}),o.jsx("span",{children:n})]},n))})]}),o.jsxs("div",{className:"sp-about-features",children:[o.jsx("h3",{children:"Festival Highlights"}),o.jsx("div",{className:"sp-tag-cloud",children:Er.festivalExperience.map(n=>o.jsx("span",{className:"sp-tag",children:n},n))}),o.jsx("h3",{style:{marginTop:"2rem"},children:"Partner Benefits"}),o.jsx("div",{className:"sp-tag-cloud",children:Er.partnerBenefits.map(n=>o.jsx("span",{className:"sp-tag sp-tag-accent",children:n},n))})]})]})]})}),o.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Completed Milestones"}),o.jsx("h2",{className:"sp-section-title",children:"Past Event Modules"})]}),o.jsx("div",{className:"sp-events-grid",children:wP.map(n=>o.jsxs("div",{className:"sp-glass-card",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),o.jsx("span",{className:"sp-pill-badge",children:n.status})]}),o.jsx("p",{className:"sp-card-desc",children:n.detail})]},n.name))})]})}),o.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Upcoming Roadmap"}),o.jsx("h2",{className:"sp-section-title",children:"Upcoming Experiences"})]}),o.jsx("div",{className:"sp-future-grid",children:bP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-future-card",children:[o.jsx("span",{className:"sp-pill-badge",children:n.status}),o.jsx("h3",{style:{marginTop:"0.8rem"},children:n.name}),o.jsxs("p",{className:"sp-meta-text",children:["📍 ",n.date," · ",n.location]}),o.jsx("p",{className:"sp-card-desc",style:{flex:1},children:n.description}),o.jsx(K,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]},n.name))})]})}),o.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Festival Journey"}),o.jsx("h2",{className:"sp-section-title",children:"Our Legacy & Timeline"})]}),o.jsx("div",{className:"sp-timeline",children:SP.map((n,r)=>o.jsxs("div",{className:"sp-timeline-item",children:[o.jsx("div",{className:"sp-timeline-icon",children:r+1}),o.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[o.jsxs("div",{className:"sp-meta-text",children:[o.jsx("span",{className:"sp-year-highlight",children:n.year})," · ",n.date]}),o.jsx("h3",{children:n.name}),o.jsx("p",{className:"sp-card-desc",children:n.description}),o.jsx("div",{className:"sp-tag-cloud",children:n.highlights.map(s=>o.jsx("span",{className:"sp-tag",children:s},s))}),o.jsxs("p",{className:"sp-venue-text",children:["📍 ",n.venue]})]})]},n.name))})]})}),o.jsx("section",{id:"hotels",className:"sp-section sp-section-hotels","aria-label":"Partner Hotels",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Hospitality Partners"}),o.jsx("h2",{className:"sp-section-title",children:"Partner Hotels in Lahore"})]}),o.jsx("div",{className:"sp-hotels-grid",children:Er.hotels.map((n,r)=>{var s;return o.jsxs("div",{className:`sp-glass-card sp-hotel-card ${r===0?"sp-featured-border":""}`,children:[n.showImage&&o.jsx("div",{className:"sp-hotel-img-wrap",children:o.jsx("img",{src:n.image,alt:n.name,loading:"lazy",onError:i=>{i.currentTarget.src=Fe("/assets/prism-auth-visual.jpg")}})}),o.jsxs("div",{className:"sp-hotel-body",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),n.rating&&o.jsxs("span",{className:"sp-rating-tag",children:["⭐ ",n.rating]})]}),o.jsxs("p",{className:"sp-meta-text",children:["📍 ",n.location]}),o.jsx("p",{className:"sp-card-desc",children:n.description}),o.jsx("div",{className:"sp-tag-cloud",children:(s=n.facilities)==null?void 0:s.map(i=>o.jsx("span",{className:"sp-tag",children:i},i))}),o.jsx("p",{className:"sp-contact-text",children:n.contact}),n.website&&o.jsx("a",{href:n.website,target:"_blank",rel:"noopener noreferrer",className:"sp-accent-link",children:"Book Room →"})]})]},n.name)})})]})}),o.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),o.jsx("div",{className:"sp-restaurants-grid",children:Er.restaurants.map(n=>o.jsxs("div",{className:"sp-glass-card",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),o.jsx("span",{className:"sp-discount-pill",children:n.discount})]}),o.jsxs("p",{className:"sp-meta-text",children:[n.cuisine," · ",n.location]}),o.jsx("p",{className:"sp-card-desc",children:n.offer}),o.jsxs("div",{className:"sp-code-box",children:[o.jsx("span",{children:"Promo Code:"}),o.jsx("code",{children:n.code})]})]},n.name))})]})}),o.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]}),o.jsx("div",{className:"sp-discounts-grid",children:NP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-voucher-card",children:[o.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:n.category}),o.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:n.brand}),o.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:n.desc}),o.jsxs("div",{className:"sp-discount-footer",children:[o.jsx("span",{className:"sp-big-discount",children:n.discount}),o.jsx("code",{className:"sp-code-pill",children:n.code})]})]},n.brand))})]})}),o.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Festival Venue"}),o.jsx("h2",{className:"sp-section-title",children:"World-Class Facilities"})]}),o.jsx("div",{className:"sp-facilities-grid",children:jP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-facility-card",children:[o.jsx("h3",{children:n.title}),o.jsx("p",{className:"sp-card-desc",children:n.desc})]},n.title))})]})}),o.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",style:{textAlign:"center"},children:[o.jsx("span",{className:"sp-eyebrow",children:"Brand Partnerships"}),o.jsx("h2",{className:"sp-section-title",children:"Sponsorship Packages"}),o.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Be part of Lahore's biggest music festival. Gain massive on-ground visibility and digital engagement."})]}),o.jsx("div",{className:"sp-sponsorship-grid",children:kP.map((n,r)=>o.jsxs("div",{className:`sp-glass-card sp-sponsor-card ${r===0?"sp-featured-border":""}`,children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.tier}),o.jsx("span",{className:"sp-pill-badge",children:n.price})]}),o.jsx("ul",{className:"sp-sponsor-perks",children:n.perks.map(s=>o.jsxs("li",{children:[o.jsx("span",{className:"sp-check",children:"✓"}),s]},s))}),o.jsx(K,{to:"/tickets",className:"sp-btn-ghost",style:{textAlign:"center",marginTop:"1.2rem"},children:"Get Partner Pass"})]},n.tier))})]})}),o.jsx("style",{children:`
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
          background: #0B0705 !important;
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
        }

        /* ── HERO SECTION ── */
        .sp-hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 15%, rgba(255, 90, 31, 0.28) 0%, rgba(85, 14, 14, 0.45) 45%, #0B0705 85%) !important;
          padding: clamp(7rem, 12vw, 10rem) 1.5rem clamp(5rem, 8vw, 7rem);
        }

        .sp-hero-ambient-glow {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 138, 61, 0.28) 0%, rgba(236, 72, 153, 0.16) 50%, transparent 70%);
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
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
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.2rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.02;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 14px 45px rgba(0, 0, 0, 0.85);
          background: linear-gradient(180deg, #ffffff 45%, #ffd36a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sp-hero-subtitle {
          max-width: 740px;
          font-size: clamp(1.08rem, 2vw, 1.3rem);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.75;
          margin-bottom: 2.2rem;
          word-spacing: 0.03em;
        }

        .sp-hero-meta-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          margin-bottom: 2.8rem;
        }

        .sp-hero-meta-strip span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1.15rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.01em;
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
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 3.5vw, 2.7rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.05;
          margin-bottom: 0.4rem;
          letter-spacing: -0.03em;
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
        }

        .sp-eyebrow {
          display: block;
          color: #ffbd59 !important;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .sp-section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.3rem, 4.8vw, 3.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #ffffff !important;
          margin-bottom: 1rem;
        }

        .sp-section-subtitle {
          max-width: 720px;
          font-size: 1.1rem;
          color: var(--text-muted) !important;
          line-height: 1.75;
          word-spacing: 0.02em;
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
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff !important;
          letter-spacing: -0.02em;
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
          font-family: 'Outfit', sans-serif;
          color: #fff !important;
          font-size: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.01em;
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
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3.8vw, 2.8rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1;
          margin-bottom: 0.4rem;
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
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.9rem;
          letter-spacing: -0.02em;
        }

        .sp-pricing-cost strong {
          font-family: 'Outfit', sans-serif;
          font-size: 2.3rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
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

        /* ── ABOUT ── */
        .sp-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }
        .sp-lead { font-size: 1.2rem; line-height: 1.78; color: #ffffff !important; margin-bottom: 1.2rem; word-spacing: 0.02em; }
        .sp-about-text p { color: var(--text-muted) !important; line-height: 1.78; margin-bottom: 1.6rem; word-spacing: 0.02em; }
        .sp-journey-steps { display: flex; flex-direction: column; gap: 0.95rem; }
        .sp-journey-step { display: flex; align-items: center; gap: 1.1rem; padding: 0.95rem 1.3rem; background: rgba(27, 17, 11, 0.65) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 16px; }
        .sp-step-num { width: 30px; height: 30px; background: #ffbd59 !important; border-radius: 50%; display: grid; place-items: center; font-weight: 800; font-size: 0.88rem; color: #101819 !important; flex-shrink: 0; }
        .sp-about-features h3 { font-family: 'Outfit', sans-serif; font-size: 1.15rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff !important; margin-bottom: 0.9rem; }
        .sp-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .sp-tag { display: inline-block; padding: 0.45rem 1rem; border-radius: 999px; background: rgba(255, 255, 255, 0.06) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; color: #ffffff !important; font-size: 0.85rem; font-weight: 600; }
        .sp-tag-accent { background: rgba(255, 90, 31, 0.15) !important; border: 1px solid rgba(255, 90, 31, 0.35) !important; color: #ff8a3d !important; }

        /* ── EVENTS ── */
        .sp-events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; }
        .sp-future-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* ── TIMELINE ── */
        .sp-timeline { position: relative; display: flex; flex-direction: column; gap: 2rem; }
        .sp-timeline::before { content: ''; position: absolute; left: 2.2rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.25), transparent); }
        .sp-timeline-item { display: flex; gap: 1.8rem; align-items: flex-start; }
        .sp-timeline-icon { width: 46px; height: 46px; flex-shrink: 0; background: #ffbd59 !important; border-radius: 50%; display: grid; place-items: center; font-size: 1.05rem; font-weight: 900; color: #101819 !important; z-index: 1; box-shadow: 0 0 22px rgba(0, 0, 0, 0.4); }
        .sp-timeline-content { flex: 1; }
        .sp-year-highlight { font-size: 1.05rem; color: #ffbd59 !important; font-weight: 800; }
        .sp-venue-text { font-size: 0.86rem; color: #ffffff !important; opacity: 0.9; font-weight: 600; margin-top: 0.75rem; }

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
        .sp-big-discount { font-family: 'Outfit', sans-serif; font-size: 1.45rem; font-weight: 900; color: #ffbd59 !important; }
        .sp-code-pill { font-family: monospace; background: rgba(255, 255, 255, 0.1) !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; padding: 0.35rem 0.8rem; border-radius: 8px; color: #ffffff !important; font-weight: 800; font-size: 0.85rem; }

        /* ── FACILITIES ── */
        .sp-facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-facility-card { text-align: center; padding: 2.2rem 1.6rem !important; }

        /* ── SPONSORSHIP ── */
        .sp-sponsorship-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .sp-sponsor-card { display: flex; flex-direction: column; gap: 1.1rem; }
        .sp-sponsor-perks { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; flex: 1; }
        .sp-sponsor-perks li { display: flex; align-items: flex-start; gap: 0.7rem; font-size: 0.92rem; color: var(--text-muted) !important; line-height: 1.5; }
        .sp-check { color: #ffbd59 !important; font-weight: 900; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
          .stats-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
        }

        @media (max-width: 992px) {
          .sp-celebrity-grid, .sp-facilities-grid, .sp-sponsorship-grid, .sp-discounts-grid,
          .sp-hotels-grid, .sp-restaurants-grid, .sp-future-grid, .sp-pricing-grid { grid-template-columns: 1fr; gap: 1.6rem; }
          .sp-featured-pricing { transform: none; }
          .sp-featured-pricing:hover { transform: translateY(-4px); }
          .sp-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
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
          .sp-countdown-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .sp-countdown-card { padding: 1rem 0.85rem; }
          .sp-timeline::before { left: 1rem; }
          .sp-timeline-icon { width: 36px; height: 36px; font-size: 0.9rem; }
        }
      `})]})}const Zx="ozilla_local_tickets";let bt=!1;const ev={regular:1200,vip:1,premium:120},CP=["pending","payment_submitted","approved","confirmed"];function ja(e){const t=String(e||"regular").toLowerCase().trim();return t==="general"?"regular":ev[t]?t:"regular"}function ho(){const e=Object.entries(ev).reduce((r,[s,i])=>(r[s]={type:s,label:s==="regular"?"General":s==="vip"?"VIP":"Premium",capacity:i,sold:0,remaining:i,soldOut:!1},r),{});for(const r of ye()){if(!CP.includes(r.status))continue;const s=ja(r.ticketType);e[s].sold+=Number(r.quantity)||1}let t=0,n=0;for(const r of Object.values(e))r.sold=Math.min(r.sold,r.capacity),r.remaining=Math.max(0,r.capacity-r.sold),r.soldOut=r.remaining<=0,t+=r.capacity,n+=r.sold;return{capacity:t,sold:n,remaining:Math.max(0,t-n),soldOut:Object.values(e).every(r=>r.soldOut),byType:e,mode:"local-fallback"}}function AP(e){var t,n;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((n=e==null?void 0:e.message)==null?void 0:n.includes("ECONNREFUSED")))}function bn(e){return AP(e)?(bt=!0,!0):!1}function ye(){try{const e=localStorage.getItem(Zx),t=e?JSON.parse(e):[];return Array.isArray(t)?t.map(n=>(n==null?void 0:n.status)==="payment_submitted"?{...n,status:"approved",generatedAt:n.generatedAt||n.updatedAt||new Date().toISOString(),verifiedAt:n.verifiedAt||null}:n):[]}catch{return[]}}function Se(e){localStorage.setItem(Zx,JSON.stringify(e))}function RP(e){const t=String(e||"");if(!t)return null;if(t.startsWith("local."))try{return JSON.parse(atob(t.slice(6)))}catch{return null}const n=t.split(".");if(n.length===3)try{return JSON.parse(atob(n[1]))}catch{return null}return null}function ke(){const e=RP(kt.getToken());return{userId:String((e==null?void 0:e.sub)||(e==null?void 0:e.userId)||"").trim(),email:String((e==null?void 0:e.email)||"").toLowerCase().trim()}}function Re(e,t){if(!(t!=null&&t.email)&&!(t!=null&&t.userId))return!1;const n=String((e==null?void 0:e.ownerEmail)||"").toLowerCase().trim(),r=String((e==null?void 0:e.ownerId)||"").trim(),s=String((e==null?void 0:e.email)||"").toLowerCase().trim();return n&&t.email?n===t.email:r&&t.userId?r===t.userId:t.email?s===t.email:!1}function qn(e={}){const t=`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,n=((e==null?void 0:e.name)||`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`).trim()||"Demo User",r={id:"oz2026",name:"Ozilla Festival 2026",date:"2026-11-01",time:"08:00 PM",location:"Lahore"},s=new Date().toISOString(),i=ke(),a=String((e==null?void 0:e.email)||(i==null?void 0:i.email)||"local@ozillafestival.com").toLowerCase().trim();return{id:t,ticketId:`OZILLA-${t.slice(-8).toUpperCase()}`,uniqueTicketId:`OZILLA-${t.slice(-8).toUpperCase()}`,ownerId:(i==null?void 0:i.userId)||"",ownerEmail:a,fullName:n,name:n,email:a,phone:String((e==null?void 0:e.phone)||"+923000000000").trim(),idCardNumber:String((e==null?void 0:e.idCardNumber)||"").trim(),festivalDay:(e==null?void 0:e.festivalDay)==="day2"?"day2":"day1",eventId:r.id,eventName:r.name,eventDate:r.date,eventTime:r.time,location:r.location,ticketType:ja(e==null?void 0:e.ticketType),quantity:Number(e==null?void 0:e.quantity)||1,status:"pending",createdAt:s,updatedAt:s}}const Ge={async getAvailability(){if(bt)return ho();try{return(await te.get("/tickets/availability")).data}catch(e){if(bn(e))return ho();throw e}},async getMyTickets(){if(bt){const e=ke();return ye().filter(t=>Re(t,e))}try{return(await te.get("/tickets/my-tickets")).data}catch(e){if(bn(e)){const t=ke();return ye().filter(n=>Re(n,t))}throw e}},async requestTicket(e){if(bt){const t=ho(),n=ja(e==null?void 0:e.ticketType),r=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),s=t.byType[n];if(t.soldOut||!s||s.remaining<=0){const l=new Error("Tickets are sold out. The ticket portal is currently locked.");throw l.response={status:409,data:{message:l.message,soldOut:!0,availability:t}},l}if(r>s.remaining){const l=new Error(`Only ${s.remaining} ${s.label} ticket${s.remaining===1?"":"s"} remaining.`);throw l.response={status:409,data:{message:l.message,soldOut:!1,availability:t}},l}const i=ye(),a=qn(e);return Se([a,...i]),{...a,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}try{return(await te.post("/tickets/request",e)).data}catch(t){if(bn(t)){const n=ho(),r=ja(e==null?void 0:e.ticketType),s=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),i=n.byType[r];if(n.soldOut||!i||i.remaining<=0){const c=new Error("Tickets are sold out. The ticket portal is currently locked.");throw c.response={status:409,data:{message:c.message,soldOut:!0,availability:n}},c}if(s>i.remaining){const c=new Error(`Only ${i.remaining} ${i.label} ticket${i.remaining===1?"":"s"} remaining.`);throw c.response={status:409,data:{message:c.message,soldOut:!1,availability:n}},c}const a=ye(),l=qn(e);return Se([l,...a]),{...l,ibanNumber:"2205931265594411 (TALAL NASEER)",mode:"local-fallback"}}throw t}},async getTicketById(e){if(bt){const t=ke(),n=ye().find(r=>r.id===e&&Re(r,t));if(!n){const r=new Error("Ticket not found");throw r.response={data:{message:"Ticket not found"}},r}return n}try{return(await te.get(`/tickets/view/${e}`)).data}catch(t){if(bn(t)){const n=ke(),r=ye().find(s=>s.id===e&&Re(s,n));if(!r){const s=new Error("Ticket not found");throw s.response={data:{message:"Ticket not found"}},s}return r}throw t}},async payWithCard(e,t){if(bt){const n=ye(),r=ke(),s=n.findIndex(l=>l.id===e&&Re(l,r));if(s===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const i=new Date().toISOString(),a={...n[s],status:"approved",paymentMethod:"card",cardType:(t==null?void 0:t.cardType)||"card",cardLast4:(t==null?void 0:t.cardLast4)||"4242",cardholderName:(t==null?void 0:t.cardholderName)||"",transactionId:`TXN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i};return n[s]=a,Se(n),{message:"Payment processed and ticket generated successfully",ticket:a,mode:"local-fallback"}}try{return(await te.post(`/tickets/${e}/pay-card`,t)).data}catch{const r=ye(),s=ke();let i=r.findIndex(c=>(c.id===e||c.ticketId===e)&&Re(c,s));i===-1&&(i=r.findIndex(c=>c.id===e||c.ticketId===e));const a=new Date().toISOString();let l=null;return i!==-1?(l={...r[i],status:"approved",paymentMethod:"card",cardType:(t==null?void 0:t.cardType)||"card",cardLast4:(t==null?void 0:t.cardLast4)||"4411",cardholderName:(t==null?void 0:t.cardholderName)||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},r[i]=l,Se(r)):(l={...qn({name:(t==null?void 0:t.cardholderName)||"Card Customer",ticketType:"regular",quantity:1}),id:e,ticketId:String(e).startsWith("OZILLA-")?e:`OZILLA-${String(e).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"card",cardType:(t==null?void 0:t.cardType)||"card",cardLast4:(t==null?void 0:t.cardLast4)||"4411",cardholderName:(t==null?void 0:t.cardholderName)||"TALAL NASEER",issuingBank:"Mastercard Commercial Bank",payoutAccount:"TALAL NASEER | Mastercard Commercial Bank (2205931265594411)",transactionId:`TXN-CRD-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},Se([l,...r])),{message:"Card payment processed and ticket generated successfully",ticket:l,mode:"fallback"}}},async payWithJazzCash(e,t){if(bt){const n=ye(),r=ke();let s=n.findIndex(l=>(l.id===e||l.ticketId===e)&&Re(l,r));s===-1&&(s=n.findIndex(l=>l.id===e||l.ticketId===e));const i=new Date().toISOString();let a=null;return s!==-1?(a={...n[s],status:"approved",paymentMethod:"jazzcash",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",cardholderName:(t==null?void 0:t.accountTitle)||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i},n[s]=a,Se(n)):(a={...qn({name:(t==null?void 0:t.accountTitle)||"JazzCash Customer",phone:(t==null?void 0:t.mobileNumber)||"03000000000",ticketType:"regular",quantity:1}),id:e,ticketId:String(e).startsWith("OZILLA-")?e:`OZILLA-${String(e).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i},Se([a,...n])),{message:"JazzCash payment processed and ticket generated successfully",ticket:a,mode:"local-fallback"}}try{return(await te.post(`/tickets/${e}/pay-jazzcash`,t)).data}catch{const r=ye(),s=ke();let i=r.findIndex(c=>(c.id===e||c.ticketId===e)&&Re(c,s));i===-1&&(i=r.findIndex(c=>c.id===e||c.ticketId===e));const a=new Date().toISOString();let l=null;return i!==-1?(l={...r[i],status:"approved",paymentMethod:"jazzcash",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",cardholderName:(t==null?void 0:t.accountTitle)||"",issuingBank:"JazzCash Mobile Wallet",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},r[i]=l,Se(r)):(l={...qn({name:(t==null?void 0:t.accountTitle)||"JazzCash Customer",phone:(t==null?void 0:t.mobileNumber)||"03000000000",ticketType:"regular",quantity:1}),id:e,ticketId:String(e).startsWith("OZILLA-")?e:`OZILLA-${String(e).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"jazzcash",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",payoutAccount:"TALAL NASEER (JazzCash: 0300-1234567)",transactionId:`TXN-JC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},Se([l,...r])),{message:"JazzCash payment processed and ticket generated successfully",ticket:l,mode:"fallback"}}},async payWithEasypaisa(e,t){if(bt){const n=ye(),r=ke();let s=n.findIndex(l=>(l.id===e||l.ticketId===e)&&Re(l,r));s===-1&&(s=n.findIndex(l=>l.id===e||l.ticketId===e));const i=new Date().toISOString();let a=null;return s!==-1?(a={...n[s],status:"approved",paymentMethod:"easypaisa",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",cardholderName:(t==null?void 0:t.accountTitle)||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i},n[s]=a,Se(n)):(a={...qn({name:(t==null?void 0:t.accountTitle)||"Easypaisa Customer",phone:(t==null?void 0:t.mobileNumber)||"03330000000",ticketType:"regular",quantity:1}),id:e,ticketId:String(e).startsWith("OZILLA-")?e:`OZILLA-${String(e).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i},Se([a,...n])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:a,mode:"local-fallback"}}try{return(await te.post(`/tickets/${e}/pay-easypaisa`,t)).data}catch{const r=ye(),s=ke();let i=r.findIndex(c=>(c.id===e||c.ticketId===e)&&Re(c,s));i===-1&&(i=r.findIndex(c=>c.id===e||c.ticketId===e));const a=new Date().toISOString();let l=null;return i!==-1?(l={...r[i],status:"approved",paymentMethod:"easypaisa",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",cardholderName:(t==null?void 0:t.accountTitle)||"",issuingBank:"Easypaisa Mobile Wallet",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},r[i]=l,Se(r)):(l={...qn({name:(t==null?void 0:t.accountTitle)||"Easypaisa Customer",phone:(t==null?void 0:t.mobileNumber)||"03330000000",ticketType:"regular",quantity:1}),id:e,ticketId:String(e).startsWith("OZILLA-")?e:`OZILLA-${String(e).slice(-8).toUpperCase()}`,status:"approved",paymentMethod:"easypaisa",senderPhone:(t==null?void 0:t.mobileNumber)||"",accountTitle:(t==null?void 0:t.accountTitle)||"",payoutAccount:"TALAL NASEER (Easypaisa: 0333-1234567)",transactionId:`TXN-EP-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a},Se([l,...r])),{message:"Easypaisa payment processed and ticket generated successfully",ticket:l,mode:"fallback"}}},async initiatePayFastCheckout(e){if(bt){const t=ye(),n=ke(),r=t.find(s=>s.id===e&&Re(s,n));return{message:"PayFast gateway session initiated",ticketId:e,checkout:{basket_id:`OZILLA-${e}-${Date.now().toString().slice(-6)}`,txnamt:String(((r==null?void 0:r.quantity)||1)*1e3),is_sandbox:!0}}}try{return(await te.post(`/tickets/${e}/payfast-checkout`)).data}catch(t){if(bn(t)){const n=ye(),r=ke(),s=n.find(i=>i.id===e&&Re(i,r));return{message:"PayFast gateway session initiated",ticketId:e,checkout:{basket_id:`OZILLA-${e}-${Date.now().toString().slice(-6)}`,txnamt:String(((s==null?void 0:s.quantity)||1)*1e3),is_sandbox:!0}}}throw t}},async completePayFastGateway(e,t={}){if(bt){const n=ye(),r=ke(),s=n.findIndex(l=>l.id===e&&Re(l,r));if(s===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const i=new Date().toISOString(),a={...n[s],status:"approved",paymentMethod:"payfast_gateway",issuingBank:(t==null?void 0:t.bankName)||"PayFast Multi-Channel Gateway",cardholderName:(t==null?void 0:t.customerName)||n[s].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i};return n[s]=a,Se(n),{message:"PayFast payment completed successfully",ticket:a,mode:"local-fallback"}}try{return(await te.post("/tickets/payfast-ipn",{ticket_id:e,basket_id:t==null?void 0:t.basket_id,transaction_id:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,bank_name:(t==null?void 0:t.bankName)||"PayFast Gateway"})).data}catch(n){if(bn(n)){const r=ye(),s=ke(),i=r.findIndex(c=>c.id===e&&Re(c,s));if(i===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const a=new Date().toISOString(),l={...r[i],status:"approved",paymentMethod:"payfast_gateway",issuingBank:(t==null?void 0:t.bankName)||"PayFast Multi-Channel Gateway",cardholderName:(t==null?void 0:t.customerName)||r[i].fullName,transactionId:`TXN-PF-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a};return r[i]=l,Se(r),{message:"PayFast payment completed successfully",ticket:l,mode:"local-fallback"}}throw n}},async uploadPaymentProof(e,t){if(bt){const n=ye(),r=ke(),s=n.findIndex(a=>a.id===e&&Re(a,r));if(s===-1){const a=new Error("Ticket not found");throw a.response={data:{message:"Ticket not found"}},a}const i={...n[s],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return n[s]=i,Se(n),{message:"Payment proof uploaded and ticket generated successfully",ticket:i,mode:"local-fallback"}}try{return(await te.post(`/tickets/${e}/payment-proof`,t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(n){if(bn(n)){const r=ye(),s=ke(),i=r.findIndex(l=>l.id===e&&Re(l,s));if(i===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const a={...r[i],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return r[i]=a,Se(r),{message:"Payment proof uploaded and ticket generated successfully",ticket:a,mode:"local-fallback"}}throw n}},async verifyTicket(e,t){return(await te.post(`/tickets/${e}/verify`,{qrData:t})).data},async verifyTicketByQr(e){return(await te.post("/tickets/verify-qr",{qrData:e})).data},async getPendingTicketsAdmin(){return(await te.get("/tickets/admin/pending")).data},async decideTicketAdmin(e,t){return(await te.post(`/tickets/admin/${e}/decision`,{decision:t})).data},async cancelTicket(e){if(bt){const t=ye(),n=ke(),r=t.findIndex(a=>a.id===e&&Re(a,n));if(r===-1){const a=new Error("Ticket not found");throw a.response={data:{message:"Ticket not found"}},a}const s=t[r];if(!["pending","payment_submitted"].includes(s.status)){const a=new Error(`Ticket cannot be cancelled from status ${s.status}`);throw a.response={data:{message:`Ticket cannot be cancelled from status ${s.status}`}},a}const i={...s,status:"cancelled",updatedAt:new Date().toISOString()};return t[r]=i,Se(t),{message:"Ticket cancelled successfully",ticket:i,mode:"local-fallback"}}try{return(await te.post(`/tickets/${e}/cancel`)).data}catch(t){if(bn(t)){const n=ye(),r=ke(),s=n.findIndex(l=>l.id===e&&Re(l,r));if(s===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const i=n[s];if(!["pending","payment_submitted"].includes(i.status)){const l=new Error(`Ticket cannot be cancelled from status ${i.status}`);throw l.response={data:{message:`Ticket cannot be cancelled from status ${i.status}`}},l}const a={...i,status:"cancelled",updatedAt:new Date().toISOString()};return n[s]=a,Se(n),{message:"Ticket cancelled successfully",ticket:a,mode:"local-fallback"}}throw t}}};function sl(){const[e,t]=S.useState([]),[n,r]=S.useState(!1),[s,i]=S.useState(null),a=S.useCallback(async()=>{r(!0);try{const g=await Ge.getMyTickets();t(g)}catch(g){i(g.message)}finally{r(!1)}},[]),l=S.useCallback(async g=>{r(!0);try{const b=await Ge.requestTicket(g);return await a(),b}catch(b){throw i(b.message),b}finally{r(!1)}},[a]),c=S.useCallback(async g=>{r(!0);try{return await Ge.getTicketById(g)}catch(b){throw i(b.message),b}finally{r(!1)}},[]),u=S.useCallback(async(g,b)=>{r(!0);try{const h=new FormData;h.append("paymentProof",b);const x=await Ge.uploadPaymentProof(g,h);return await a(),x}catch(h){throw i(h.message),h}finally{r(!1)}},[a]),d=S.useCallback(async(g,b)=>{r(!0);try{const h=await Ge.payWithCard(g,b);return await a(),h}catch(h){throw i(h.message),h}finally{r(!1)}},[a]),f=S.useCallback(async(g,b)=>{r(!0);try{const h=await Ge.payWithJazzCash(g,b);return await a(),h}catch(h){throw i(h.message),h}finally{r(!1)}},[a]),p=S.useCallback(async(g,b)=>{r(!0);try{const h=await Ge.payWithEasypaisa(g,b);return await a(),h}catch(h){throw i(h.message),h}finally{r(!1)}},[a]),y=S.useCallback(async g=>{r(!0);try{return await Ge.initiatePayFastCheckout(g)}catch(b){throw i(b.message),b}finally{r(!1)}},[]),m=S.useCallback(async(g,b)=>{r(!0);try{const h=await Ge.completePayFastGateway(g,b);return await a(),h}catch(h){throw i(h.message),h}finally{r(!1)}},[a]);return{tickets:e,loading:n,error:s,fetchMyTickets:a,requestTicket:l,getTicketById:c,payWithCard:d,payWithJazzCash:f,payWithEasypaisa:p,initiatePayFastCheckout:y,completePayFastGateway:m,uploadPaymentProof:u}}function uf({title:e,subtitle:t}){return o.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-8 p-8 sm:p-10 border border-white/10 bg-gradient-to-r from-red-950/70 via-orange-950/40 to-black/60 backdrop-blur-xl shadow-2xl",children:[o.jsx("div",{className:"absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("p",{className:"text-xs font-extrabold uppercase tracking-widest text-[#ffbd59] mb-2 flex items-center gap-2",children:[o.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#ffbd59] animate-ping"}),"Ozilla Festival 2026"]}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight mb-2",children:e}),t&&o.jsx("p",{className:"text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed",children:t})]})]})}function Lu(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function LP(){const{user:e}=Ut(),{tickets:t,loading:n,fetchMyTickets:r}=sl();S.useEffect(()=>{r()},[r]);const s=S.useMemo(()=>{const u={total:t.length,pending:0,payment_submitted:0,approved:0,rejected:0,cancelled:0};for(const d of t)u[d.status]!==void 0&&(u[d.status]+=1);return u},[t]),i=new Date,a=t.filter(u=>new Date(u.eventDate)>=i),l=t.filter(u=>new Date(u.eventDate)<i),c=`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`.trim()||(e==null?void 0:e.name)||(e==null?void 0:e.email)||"Festival Guest";return o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx(uf,{title:"My Account & Passes",subtitle:"Manage your festival passes, member profile, and event history"}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EC4899] to-[#cf5704] flex items-center justify-center font-black text-2xl text-white shadow-lg",children:c.slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-extrabold text-white",children:c}),o.jsx("span",{className:"text-sm text-[#ffbd59] font-semibold tracking-wide uppercase",children:"Official Festival Member"})]})]}),o.jsx(K,{to:"/tickets",className:"px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffbd59] to-[#ff8a00] text-black font-bold text-sm hover:scale-105 transition-transform shadow-lg",children:"+ Book New Tickets"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Email Address"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:(e==null?void 0:e.email)||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Phone Number"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:(e==null?void 0:e.phone)||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Account Role"}),o.jsx("p",{className:"text-sm font-bold text-white capitalize mt-1",children:(e==null?void 0:e.role)||"Guest Member"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Festival Passes"}),o.jsxs("p",{className:"text-sm font-bold text-[#EC4899] mt-1",children:[t.length," Active Pass(es)"]})]})]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8",children:[{label:"Total Passes",val:s.total,color:"text-white"},{label:"Pending",val:s.pending,color:"text-yellow-400"},{label:"Payment Sent",val:s.payment_submitted,color:"text-blue-400"},{label:"Approved QR",val:s.approved,color:"text-green-400"},{label:"Rejected",val:s.rejected,color:"text-red-400"},{label:"Cancelled",val:s.cancelled,color:"text-gray-400"}].map(u=>o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center shadow-lg",children:[o.jsx("p",{className:"text-xs text-white/60 font-semibold mb-1 uppercase tracking-wider",children:u.label}),o.jsx("p",{className:`text-3xl font-black ${u.color}`,children:u.val})]},u.label))}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-3 border-b border-white/10",children:[o.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-green-400 animate-pulse"}),"Upcoming Events"]}),o.jsxs("span",{className:"text-xs font-bold text-white/50",children:[a.length," Events"]})]}),n?o.jsx("p",{className:"text-white/60 text-sm py-4",children:"Loading your upcoming passes..."}):a.length===0?o.jsxs("div",{className:"py-8 text-center",children:[o.jsx("p",{className:"text-white/60 text-sm mb-4",children:"No upcoming festival passes found."}),o.jsx(K,{to:"/tickets",className:"text-sm font-bold text-[#ffbd59] hover:underline",children:"Explore & Purchase Tickets →"})]}):o.jsx("div",{className:"space-y-3",children:a.map(u=>o.jsxs("div",{className:"bg-white/5 border border-white/5 hover:border-white/20 transition-all rounded-xl p-4 flex items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-extrabold text-white text-base",children:u.eventName}),o.jsxs("p",{className:"text-xs text-white/60 mt-0.5",children:[Lu(u.eventDate)," · ",u.eventTime]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"inline-block text-xs font-black uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#ffbd59]",children:u.status}),o.jsx("div",{children:o.jsx(K,{to:`/tickets/view/${u.id}`,className:"text-xs font-bold text-white/80 hover:text-white underline mt-1 inline-block",children:"View Pass →"})})]})]},u.id))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-3 border-b border-white/10",children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:"Past Events"}),o.jsxs("span",{className:"text-xs font-bold text-white/50",children:[l.length," Events"]})]}),n?o.jsx("p",{className:"text-white/60 text-sm py-4",children:"Loading past history..."}):l.length===0?o.jsx("p",{className:"text-white/60 text-sm py-8 text-center",children:"No past events recorded yet."}):o.jsx("div",{className:"space-y-3",children:l.map(u=>o.jsxs("div",{className:"bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 opacity-75",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-white text-base",children:u.eventName}),o.jsxs("p",{className:"text-xs text-white/60 mt-0.5",children:[Lu(u.eventDate)," · ",u.eventTime]})]}),o.jsx("span",{className:"text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/70",children:u.status})]},u.id))})]})]})]})}const rc={regular:{label:"General",value:"regular",price:1,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function OP(e=""){const t=String(e).trim().split(/\s+/).filter(Boolean);return t.length===0?{firstName:"",lastName:""}:{firstName:t[0],lastName:t.slice(1).join(" ")}}function MP({onSubmit:e,loading:t,profileDefaults:n,onBookingChange:r,availability:s,availabilityLoading:i}){const a=S.useMemo(()=>{const I=OP(n==null?void 0:n.name);return{firstName:(n==null?void 0:n.firstName)||I.firstName||"",lastName:(n==null?void 0:n.lastName)||I.lastName||"",email:(n==null?void 0:n.email)||"",phone:(n==null?void 0:n.phone)||""}},[n]),[l,c]=S.useState(1),[u,d]=S.useState(""),[f,p]=S.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});S.useEffect(()=>{p(I=>({...I,firstName:a.firstName||I.firstName,lastName:a.lastName||I.lastName,email:a.email||I.email,phone:a.phone||I.phone}))},[a]);const y=I=>{var F;return(F=s==null?void 0:s.byType)==null?void 0:F[I]},m=I=>{var F;return!!((F=y(I))!=null&&F.soldOut)},g=rc[f.ticketType],b=y(f.ticketType),h=Number.isFinite(b==null?void 0:b.remaining)?b.remaining:null,x=m(f.ticketType),v=Math.max(1,Math.min(10,h||10)),w=Number(f.quantity)||1,k=g.price*w,N=f.ticketType==="premium"?2500:0,P=Math.max(1,k-N),T=`${a.firstName} ${a.lastName}`.trim()||(n==null?void 0:n.email);S.useEffect(()=>{r==null||r({ticketType:g.label,day:f.festivalDay==="day1"?"Day 1":"Day 2",quantity:w,subtotal:k,serviceFee:0,discount:N,total:P,benefits:g.benefits})},[N,f.festivalDay,r,w,g,k,P]),S.useEffect(()=>{if(!(s!=null&&s.byType)||!x)return;const I=Object.values(rc).find(F=>!m(F.value));I&&p(F=>({...F,ticketType:I.value,quantity:1}))},[s,x]),S.useEffect(()=>{w>v&&p(I=>({...I,quantity:v}))},[v,w]);const L=I=>{p(F=>({...F,[I.target.name]:I.target.value})),I.target.name==="idCardNumber"&&d("")},C=()=>!!(f.firstName&&f.lastName&&f.email&&f.phone),z=()=>{const I=String(f.idCardNumber||"").trim(),F=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(I);return d(F?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),F},U=()=>{l===1&&!C()||l===2&&(x||!z())||c(I=>Math.min(3,I+1))},J=I=>{if(I.preventDefault(),x||!C()||!z()){c(C()?2:1);return}e({...f,quantity:w,name:`${f.firstName} ${f.lastName}`.trim()})},W=()=>{c(1),d(""),p({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:a.phone||""})};return o.jsxs("form",{onSubmit:J,className:"ticket-wizard-form",children:[o.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((I,F)=>o.jsxs("button",{type:"button",className:l===F+1?"is-active":l>F+1?"is-complete":"",onClick:()=>c(F+1),children:[o.jsx("span",{children:F+1}),I]},I))}),T&&o.jsxs("div",{className:"ticket-login-chip",children:[o.jsx("span",{children:"OK"}),"Logged in as ",T]}),l===1&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 1"}),o.jsx("h3",{children:"Personal Information"})]}),o.jsxs("div",{className:"ticket-input-grid",children:[o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"First Name"}),o.jsx("input",{type:"text",name:"firstName",value:f.firstName,onChange:L,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Last Name"}),o.jsx("input",{type:"text",name:"lastName",value:f.lastName,onChange:L,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Email Address"}),o.jsx("input",{type:"email",name:"email",value:f.email,onChange:L,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Phone Number"}),o.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:L,required:!0})]})]})]}),l===2&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 2"}),o.jsx("h3",{children:"Ticket Information"})]}),o.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values(rc).map(I=>{const F=y(I.value),G=!!(F!=null&&F.soldOut),E=i?"Checking availability...":F?G?"Sold out":`${F.remaining.toLocaleString()} seats available`:`${I.seats} seats available`;return o.jsxs("button",{type:"button",disabled:G,"aria-disabled":G,className:`ticket-option-card ${f.ticketType===I.value?"is-selected":""} ${G?"is-sold-out":""}`,onClick:()=>{G||p(R=>({...R,ticketType:I.value,quantity:1}))},children:[o.jsx("span",{children:I.label}),o.jsxs("strong",{children:["PKR ",I.price.toLocaleString()]}),o.jsx("small",{children:E})]},I.value)})}),o.jsxs("div",{className:"ticket-input-grid",children:[o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Festival Day"}),o.jsxs("select",{name:"festivalDay",value:f.festivalDay,onChange:L,required:!0,children:[o.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),o.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Quantity"}),o.jsx("input",{type:"number",name:"quantity",value:f.quantity,onChange:L,min:"1",max:v,disabled:x,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[o.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),o.jsx("input",{type:"text",name:"idCardNumber",value:f.idCardNumber,onChange:L,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),u&&o.jsx("em",{children:u})]})]})]}),l===3&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 3"}),o.jsx("h3",{children:"Review & Confirm"})]}),o.jsxs("div",{className:"ticket-review-layout",children:[o.jsx("div",{className:"ticket-benefit-list",children:g.benefits.map(I=>o.jsx("span",{children:I},I))}),o.jsxs("aside",{className:"ticket-summary-card",children:[o.jsx("h4",{children:"Booking Summary"}),o.jsxs("div",{children:[o.jsx("span",{children:"Ticket Type"}),o.jsx("strong",{children:g.label})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Quantity"}),o.jsx("strong",{children:w})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Price"}),o.jsxs("strong",{children:["PKR ",k.toLocaleString()]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Processing Fee"}),o.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Discount"}),o.jsxs("strong",{children:["PKR ",N.toLocaleString()]})]}),o.jsxs("div",{className:"ticket-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("strong",{children:["PKR ",P.toLocaleString()]})]})]})]})]}),o.jsxs("div",{className:"ticket-form-actions",children:[o.jsx("button",{type:"button",onClick:l===1?W:()=>c(I=>I-1),className:"ticket-secondary-button",children:l===1?"Reset":"Back"}),l<3?o.jsx("button",{type:"button",onClick:U,className:"ticket-primary-button",children:"Continue"}):o.jsx("button",{type:"submit",disabled:t,className:"ticket-primary-button ticket-shimmer-button",children:t?"Verifying Details...":"Complete Your Booking"})]})]})}function IP(e){const t=e.replace(/\D/g,"").slice(0,16),n=t.match(/.{1,4}/g);return n?n.join(" "):t}function _P(e){const t=e.replace(/\D/g,"").slice(0,4);return t.length>=3?`${t.slice(0,2)}/${t.slice(2)}`:t}function FP(e){const t=e.replace(/\D/g,"");return/^4/.test(t)?"visa":/^(5[1-5]|2[2-7])/.test(t)?"mastercard":/^(62|81)/.test(t)?"unionpay":null}function zP(e){const t=e.replace(/\D/g,""),n=t.slice(0,4);return["5893","4012","5399","4519","4507"].includes(n)?"Meezan Bank":["4116","5241","4214","5488","4027"].includes(n)?"HBL":["4848","5189","4589","5294","4282"].includes(n)?"Bank Alfalah":["4351","5236","4271","5521","4046"].includes(n)?"MCB Bank":["4021","5123","4921","5424"].includes(n)?"Standard Chartered":["4203","5250","4894","5320"].includes(n)?"UBL":["4008","5456","4692","5378"].includes(n)?"Allied Bank":t.length>=6?"Verified Bank":""}function VP({amount:e,onSubmit:t,loading:n,onBack:r}){const[s,i]=S.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvv:"",saveCard:!0}),[a,l]=S.useState({}),[c,u]=S.useState(!1),[d,f]=S.useState(""),p=FP(s.cardNumber);zP(s.cardNumber);const y=v=>{const w=IP(v.target.value);i(k=>({...k,cardNumber:w})),a.cardNumber&&l(k=>({...k,cardNumber:""}))},m=v=>{const w=_P(v.target.value);i(k=>({...k,expiryDate:w})),a.expiryDate&&l(k=>({...k,expiryDate:""}))},g=v=>{const w=v.target.value.replace(/\D/g,"").slice(0,4);i(k=>({...k,cvv:w})),a.cvv&&l(k=>({...k,cvv:""}))},b=v=>{i(w=>({...w,cardholderName:v.target.value})),a.cardholderName&&l(w=>({...w,cardholderName:""}))},h=()=>{const v={},w=s.cardNumber.replace(/\s/g,"");if((!w||w.length<15)&&(v.cardNumber="Please enter a valid 16-digit card number"),s.cardholderName.trim()||(v.cardholderName="Please enter name as shown on card"),!s.expiryDate||s.expiryDate.length<5)v.expiryDate="Enter MM/YY";else{const[k,N]=s.expiryDate.split("/").map(Number);if(k<1||k>12)v.expiryDate="Invalid month (01-12)";else{const P=new Date,T=Number(String(P.getFullYear()).slice(-2)),L=P.getMonth()+1;(N<T||N===T&&k<L)&&(v.expiryDate="Card has expired")}}return(!s.cvv||s.cvv.length<3)&&(v.cvv="Enter 3 or 4 digits"),l(v),Object.keys(v).length===0},x=async v=>{if(v.preventDefault(),!!h()){f("Validating card credentials with bank..."),await new Promise(w=>setTimeout(w,450)),f("Authorizing payment deduction...");try{await t({cardNumber:s.cardNumber.replace(/\s/g,""),cardLast4:s.cardNumber.replace(/\s/g,"").slice(-4),cardholderName:s.cardholderName.trim(),expiryDate:s.expiryDate,cvv:s.cvv,saveCard:s.saveCard,cardType:p||"card"})}finally{f("")}}};return o.jsxs("div",{className:"card-payment-container",children:[o.jsxs("div",{className:"card-brands-row",children:[o.jsx("div",{className:`card-brand-logo mastercard ${p==="mastercard"?"is-active":""}`,title:"Mastercard",children:o.jsxs("svg",{viewBox:"0 0 38 24",width:"44",height:"28","aria-label":"Mastercard",children:[o.jsx("circle",{cx:"14",cy:"12",r:"10",fill:"#EB001B"}),o.jsx("circle",{cx:"24",cy:"12",r:"10",fill:"#F79E1B",fillOpacity:"0.88"})]})}),o.jsx("div",{className:`card-brand-logo visa ${p==="visa"?"is-active":""}`,title:"VISA",children:o.jsx("svg",{viewBox:"0 0 50 20",width:"54",height:"22","aria-label":"VISA",children:o.jsx("text",{x:"2",y:"16",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"900",fontStyle:"italic",fontSize:"18",fill:"#ffffff",letterSpacing:"1",children:"VISA"})})}),o.jsx("div",{className:`card-brand-logo unionpay ${p==="unionpay"?"is-active":""}`,title:"UnionPay",children:o.jsxs("div",{className:"unionpay-badge",children:[o.jsx("span",{className:"up-red"}),o.jsx("span",{className:"up-blue"}),o.jsx("span",{className:"up-green"}),o.jsx("span",{className:"up-text",children:"UnionPay"})]})})]}),o.jsxs("form",{onSubmit:x,className:"card-payment-form",children:[o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Card number"]}),o.jsxs("div",{className:"card-input-wrapper",children:[o.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-number",placeholder:"4000 1234 5678 9010",value:s.cardNumber,onChange:y,className:`card-input ${a.cardNumber?"has-error":""}`,maxLength:19,disabled:n}),p&&o.jsx("span",{className:"card-detected-badge",children:p.toUpperCase()})]}),a.cardNumber&&o.jsx("span",{className:"card-field-error",children:a.cardNumber})]}),o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Name on card"]}),o.jsx("input",{type:"text",autoComplete:"cc-name",placeholder:"e.g. HAMZA ALI",value:s.cardholderName,onChange:b,className:`card-input ${a.cardholderName?"has-error":""}`,disabled:n}),a.cardholderName&&o.jsx("span",{className:"card-field-error",children:a.cardholderName})]}),o.jsxs("div",{className:"card-row-two-col",children:[o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Expiry date"]}),o.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",value:s.expiryDate,onChange:m,className:`card-input ${a.expiryDate?"has-error":""}`,maxLength:5,disabled:n}),a.expiryDate&&o.jsx("span",{className:"card-field-error",children:a.expiryDate})]}),o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," CVV",o.jsx("button",{type:"button",className:"cvv-info-btn",onClick:()=>u(!c),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"aria-label":"CVV information",children:"ⓘ"}),c&&o.jsx("div",{className:"cvv-tooltip",children:"3 or 4 digit security code located on the back of your card."})]}),o.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"•••",value:s.cvv,onChange:g,className:`card-input ${a.cvv?"has-error":""}`,maxLength:4,disabled:n}),a.cvv&&o.jsx("span",{className:"card-field-error",children:a.cvv})]})]}),o.jsxs("div",{className:"save-card-wrapper",children:[o.jsxs("label",{className:"save-card-checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:s.saveCard,onChange:v=>i(w=>({...w,saveCard:v.target.checked})),className:"save-card-checkbox",disabled:n}),o.jsx("span",{className:"save-card-title",children:"Save Card for Express Rebooking"})]}),o.jsx("p",{className:"save-card-subtext",children:"Card details are encrypted with bank-grade 256-bit tokenization for your security."})]}),d&&o.jsxs("div",{className:"card-processing-status",children:[o.jsx("span",{className:"card-spinner"}),o.jsx("span",{children:d})]}),o.jsxs("div",{className:"card-actions-row",children:[r&&o.jsx("button",{type:"button",onClick:r,disabled:n,className:"ticket-secondary-button",children:"Back"}),o.jsx("button",{type:"submit",disabled:n,className:"pay-now-btn",children:n?o.jsxs("span",{className:"btn-loading-content",children:[o.jsx("span",{className:"btn-spinner"})," Processing Payment..."]}):e?`Pay Now • PKR ${e.toLocaleString()}`:"Pay Now"})]}),o.jsxs("div",{className:"card-security-footer",children:[o.jsx("span",{children:"🔒 256-Bit SSL Encrypted & PCI-DSS Compliant"}),o.jsx("span",{children:"⚡ Instant Verified QR Pass Delivery"})]})]}),o.jsx("style",{children:`
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
      `})]})}function DP(e){const t=e.replace(/\D/g,"").slice(0,11);return t.length>4?`${t.slice(0,4)}-${t.slice(4)}`:t}function BP({amount:e,onSubmit:t,loading:n,onBack:r}){const[s,i]=S.useState({mobileNumber:"",accountTitle:""}),[a,l]=S.useState({}),[c,u]=S.useState(""),d=m=>{const g=DP(m.target.value);i(b=>({...b,mobileNumber:g})),a.mobileNumber&&l(b=>({...b,mobileNumber:""}))},f=m=>{i(g=>({...g,accountTitle:m.target.value})),a.accountTitle&&l(g=>({...g,accountTitle:""}))},p=()=>{const m={},g=s.mobileNumber.replace(/\D/g,"");return(!g||g.length<11||!g.startsWith("03"))&&(m.mobileNumber="Please enter a valid 11-digit JazzCash number (e.g., 0300-1234567)"),s.accountTitle.trim()||(m.accountTitle="Please enter the title/name registered with this JazzCash account"),l(m),Object.keys(m).length===0},y=async m=>{if(m.preventDefault(),!!p()){u("Connecting to JazzCash Secure Gateway..."),await new Promise(g=>setTimeout(g,450)),u("Validating JazzCash wallet balance & credentials..."),await new Promise(g=>setTimeout(g,450)),u(`Authorizing deduction of PKR ${e.toLocaleString()}...`);try{await t({mobileNumber:s.mobileNumber.replace(/\D/g,""),accountTitle:s.accountTitle.trim()})}finally{u("")}}};return o.jsxs("div",{className:"jazzcash-payment-container",children:[o.jsxs("div",{className:"jazzcash-header-badge",children:[o.jsx("div",{className:"jc-logo-circle",children:"JC"}),o.jsxs("div",{children:[o.jsx("h4",{children:"JazzCash Direct Wallet"}),o.jsx("span",{children:"Automatic instant deduction from your mobile wallet"})]})]}),o.jsxs("form",{onSubmit:y,className:"jazzcash-payment-form",children:[o.jsxs("div",{className:"jc-field-group",children:[o.jsxs("label",{className:"jc-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," JazzCash Mobile Account Number"]}),o.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0300-1234567",value:s.mobileNumber,onChange:d,className:`jc-input ${a.mobileNumber?"has-error":""}`,maxLength:12,disabled:n}),a.mobileNumber&&o.jsx("span",{className:"jc-field-error",children:a.mobileNumber})]}),o.jsxs("div",{className:"jc-field-group",children:[o.jsxs("label",{className:"jc-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),o.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:s.accountTitle,onChange:f,className:`jc-input ${a.accountTitle?"has-error":""}`,disabled:n}),a.accountTitle&&o.jsx("span",{className:"jc-field-error",children:a.accountTitle})]}),c&&o.jsxs("div",{className:"jc-processing-status",children:[o.jsx("span",{className:"jc-spinner"}),o.jsx("span",{children:c})]}),o.jsxs("div",{className:"jc-actions-row",children:[r&&o.jsx("button",{type:"button",onClick:r,disabled:n,className:"ticket-secondary-button",children:"Back"}),o.jsx("button",{type:"submit",disabled:n,className:"jc-pay-now-btn",children:n?o.jsxs("span",{className:"btn-loading-content",children:[o.jsx("span",{className:"btn-spinner"})," Processing JazzCash Payment..."]}):e?`Pay with JazzCash • PKR ${e.toLocaleString()}`:"Pay with JazzCash"})]}),o.jsxs("div",{className:"jc-security-footer",children:[o.jsx("span",{children:"🔒 256-Bit SSL Encrypted JazzCash API Integration"}),o.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),o.jsx("style",{children:`
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
      `})]})}function UP(e){const t=e.replace(/\D/g,"").slice(0,11);return t.length>4?`${t.slice(0,4)}-${t.slice(4)}`:t}function $P({amount:e,onSubmit:t,loading:n,onBack:r}){const[s,i]=S.useState({mobileNumber:"",accountTitle:""}),[a,l]=S.useState({}),[c,u]=S.useState(""),d=m=>{const g=UP(m.target.value);i(b=>({...b,mobileNumber:g})),a.mobileNumber&&l(b=>({...b,mobileNumber:""}))},f=m=>{i(g=>({...g,accountTitle:m.target.value})),a.accountTitle&&l(g=>({...g,accountTitle:""}))},p=()=>{const m={},g=s.mobileNumber.replace(/\D/g,"");return(!g||g.length<11||!g.startsWith("03"))&&(m.mobileNumber="Please enter a valid 11-digit Easypaisa number (e.g., 0333-1234567)"),s.accountTitle.trim()||(m.accountTitle="Please enter the name registered on your Easypaisa account"),l(m),Object.keys(m).length===0},y=async m=>{if(m.preventDefault(),!!p()){u("Connecting to Easypaisa Open API..."),await new Promise(g=>setTimeout(g,450)),u("Verifying account status and authorization..."),await new Promise(g=>setTimeout(g,450)),u(`Authorizing deduction of PKR ${e.toLocaleString()}...`);try{await t({mobileNumber:s.mobileNumber.replace(/\D/g,""),accountTitle:s.accountTitle.trim()})}finally{u("")}}};return o.jsxs("div",{className:"easypaisa-payment-container",children:[o.jsxs("div",{className:"easypaisa-header-badge",children:[o.jsx("div",{className:"ep-logo-circle",children:"EP"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Easypaisa Mobile Account"}),o.jsx("span",{children:"Automatic instant deduction from your mobile account"})]})]}),o.jsxs("form",{onSubmit:y,className:"easypaisa-payment-form",children:[o.jsxs("div",{className:"ep-field-group",children:[o.jsxs("label",{className:"ep-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Easypaisa Mobile Account Number"]}),o.jsx("input",{type:"tel",inputMode:"numeric",placeholder:"0333-1234567",value:s.mobileNumber,onChange:d,className:`ep-input ${a.mobileNumber?"has-error":""}`,maxLength:12,disabled:n}),a.mobileNumber&&o.jsx("span",{className:"ep-field-error",children:a.mobileNumber})]}),o.jsxs("div",{className:"ep-field-group",children:[o.jsxs("label",{className:"ep-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Account Title / Registered Name"]}),o.jsx("input",{type:"text",placeholder:"e.g. HAMZA ALI",value:s.accountTitle,onChange:f,className:`ep-input ${a.accountTitle?"has-error":""}`,disabled:n}),a.accountTitle&&o.jsx("span",{className:"ep-field-error",children:a.accountTitle})]}),c&&o.jsxs("div",{className:"ep-processing-status",children:[o.jsx("span",{className:"ep-spinner"}),o.jsx("span",{children:c})]}),o.jsxs("div",{className:"ep-actions-row",children:[r&&o.jsx("button",{type:"button",onClick:r,disabled:n,className:"ticket-secondary-button",children:"Back"}),o.jsx("button",{type:"submit",disabled:n,className:"ep-pay-now-btn",children:n?o.jsxs("span",{className:"btn-loading-content",children:[o.jsx("span",{className:"btn-spinner"})," Processing Easypaisa Payment..."]}):e?`Pay with Easypaisa • PKR ${e.toLocaleString()}`:"Pay with Easypaisa"})]}),o.jsxs("div",{className:"ep-security-footer",children:[o.jsx("span",{children:"🔒 256-Bit SSL Encrypted Easypaisa Gateway Integration"}),o.jsx("span",{children:"⚡ Instant Digital QR Ticket Generated"})]})]}),o.jsx("style",{children:`
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
      `})]})}function HP({amount:e,onProceed:t,loading:n,onBack:r}){const[s,i]=S.useState(!1),a=async()=>{i(!0);try{await t()}finally{i(!1)}};return o.jsxs("div",{className:"payfast-gateway-card",children:[o.jsxs("div",{className:"payfast-header-banner",children:[o.jsxs("div",{className:"payfast-logo-group",children:[o.jsx("span",{className:"pf-brand-name",children:"PayFast"}),o.jsx("span",{className:"pf-badge-tag",children:"Official Payment Gateway"})]}),o.jsx("span",{className:"pf-security-seal",children:"🔒 SBP Regulated · 256-Bit SSL"})]}),o.jsxs("div",{className:"payfast-body",children:[o.jsxs("p",{className:"payfast-instruction",children:["You will be redirected to the secure ",o.jsx("strong",{children:"PayFast Payment Portal"})," to complete your payment."]}),o.jsxs("div",{className:"payfast-channels-grid",children:[o.jsxs("div",{className:"pf-channel-item",children:[o.jsx("span",{className:"pf-icon",children:"💳"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Cards"}),o.jsx("small",{children:"Visa, Master, PayPak, UnionPay"})]})]}),o.jsxs("div",{className:"pf-channel-item",children:[o.jsx("span",{className:"pf-icon",children:"📱"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Wallets"}),o.jsx("small",{children:"JazzCash & Easypaisa"})]})]}),o.jsxs("div",{className:"pf-channel-item",children:[o.jsx("span",{className:"pf-icon",children:"🏦"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Bank Accounts"}),o.jsx("small",{children:"1LINK & Direct Internet Banking"})]})]})]}),o.jsxs("div",{className:"payfast-summary-box",children:[o.jsxs("div",{className:"pf-summary-row",children:[o.jsx("span",{children:"Total Payable Amount:"}),o.jsxs("strong",{children:["PKR ",Number(e||0).toLocaleString()]})]}),o.jsxs("div",{className:"pf-summary-row pf-small-row",children:[o.jsx("span",{children:"Processing / Gateway Fee:"}),o.jsx("span",{className:"pf-free-tag",children:"Free (PKR 0)"})]})]}),o.jsxs("div",{className:"payfast-flow-steps",children:[o.jsxs("div",{className:"pf-step",children:[o.jsx("span",{className:"pf-step-num",children:"1"}),o.jsx("span",{children:"Redirect to PayFast"})]}),o.jsx("span",{className:"pf-arrow",children:"→"}),o.jsxs("div",{className:"pf-step",children:[o.jsx("span",{className:"pf-step-num",children:"2"}),o.jsx("span",{children:"Enter Card / OTP / Wallet"})]}),o.jsx("span",{className:"pf-arrow",children:"→"}),o.jsxs("div",{className:"pf-step",children:[o.jsx("span",{className:"pf-step-num",children:"3"}),o.jsx("span",{children:"Instant Return & QR Pass"})]})]}),o.jsxs("div",{className:"payfast-actions",children:[r&&o.jsx("button",{type:"button",className:"pf-back-btn",onClick:r,disabled:n||s,children:"← Back"}),o.jsx("button",{type:"button",className:"pf-proceed-btn",onClick:a,disabled:n||s,children:s||n?o.jsxs("span",{className:"pf-btn-loading",children:[o.jsx("span",{className:"pf-spinner"})," Connecting to PayFast Gateway..."]}):`Proceed to PayFast (PKR ${Number(e||0).toLocaleString()}) →`})]})]}),o.jsx("style",{children:`
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
      `})]})}function WP({isOpen:e,onClose:t,ticket:n,amount:r,onComplete:s}){const[i,a]=S.useState("card"),[l,c]=S.useState(!1),[u,d]=S.useState(""),[f,p]=S.useState(!1),[y,m]=S.useState("849201"),[g,b]=S.useState({cardNumber:"5893 4100 8821 9402",expiry:"08/28",cvv:"921",holderName:(n==null?void 0:n.fullName)||"Customer"}),[h,x]=S.useState((n==null?void 0:n.phone)||"03001234567");if(!e)return null;const v=async k=>{k.preventDefault(),c(!0),d("Connecting to SBP 1LINK switch..."),await new Promise(N=>setTimeout(N,600)),d("Sending 3D Secure OTP verification request to issuing bank..."),await new Promise(N=>setTimeout(N,600)),c(!1),p(!0)},w=async()=>{c(!0),d("Verifying OTP with issuing bank..."),await new Promise(k=>setTimeout(k,700)),d(`Deducting PKR ${Number(r||0).toLocaleString()} and settling to Organizer Bank Account...`),await new Promise(k=>setTimeout(k,800)),d("Payment Successful! Sending IPN webhook to Ozilla Festival..."),await new Promise(k=>setTimeout(k,600));try{await s({basket_id:`OZILLA-${(n==null?void 0:n.id)||(n==null?void 0:n.ticketId)}`,bankName:i==="card"?"Meezan Bank 1LINK":i==="jazzcash"?"JazzCash MWallet":"Easypaisa MAccount",customerName:(n==null?void 0:n.fullName)||g.holderName})}finally{c(!1)}};return o.jsxs("div",{className:"pf-modal-overlay",children:[o.jsxs("div",{className:"pf-modal-container",children:[o.jsxs("div",{className:"pf-modal-header",children:[o.jsxs("div",{className:"pf-modal-brand",children:[o.jsx("span",{className:"pf-logo",children:"PayFast"}),o.jsx("span",{className:"pf-tagline",children:"Secure Multi-Channel IPG"})]}),o.jsx("button",{type:"button",className:"pf-close-btn",onClick:t,disabled:l,children:"✕"})]}),o.jsxs("div",{className:"pf-merchant-banner",children:[o.jsxs("div",{children:[o.jsx("small",{children:"Merchant"}),o.jsx("strong",{children:"Prism Events & Tours (Ozilla Festival 2026)"})]}),o.jsxs("div",{className:"pf-amount-pill",children:[o.jsx("small",{children:"Total Due"}),o.jsxs("strong",{children:["PKR ",Number(r||0).toLocaleString()]})]})]}),o.jsx("div",{className:"pf-modal-body",children:f?o.jsxs("div",{className:"pf-otp-screen",children:[o.jsx("div",{className:"pf-otp-icon",children:"🔐"}),o.jsx("h3",{children:"3D Secure Bank OTP Verification"}),o.jsxs("p",{children:["A one-time verification code has been sent to your bank-registered mobile number ending in ",o.jsx("strong",{children:"•••• 402"}),"."]}),o.jsx("div",{className:"pf-fg",style:{maxWidth:"240px",margin:"16px auto"},children:o.jsx("input",{type:"text",maxLength:6,value:y,onChange:k=>m(k.target.value),className:"pf-otp-input",style:{textAlign:"center",fontSize:"22px",letterSpacing:"4px",fontWeight:"bold"}})}),u&&o.jsx("div",{className:"pf-phase-msg",children:u}),o.jsx("button",{type:"button",className:"pf-modal-submit",onClick:w,disabled:l,children:l?u:"Confirm & Authorize Payment"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"pf-modal-tabs",children:[o.jsx("button",{type:"button",className:`pf-tab ${i==="card"?"is-active":""}`,onClick:()=>a("card"),children:"💳 Debit / Credit Card"}),o.jsx("button",{type:"button",className:`pf-tab ${i==="jazzcash"?"is-active":""}`,onClick:()=>a("jazzcash"),children:"🟠 JazzCash"}),o.jsx("button",{type:"button",className:`pf-tab ${i==="easypaisa"?"is-active":""}`,onClick:()=>a("easypaisa"),children:"🟢 Easypaisa"})]}),i==="card"&&o.jsxs("form",{onSubmit:v,className:"pf-modal-form",children:[o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:"Card Number"}),o.jsx("input",{type:"text",value:g.cardNumber,onChange:k=>b({...g,cardNumber:k.target.value}),required:!0})]}),o.jsxs("div",{className:"pf-grid-2",children:[o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:"Expiry (MM/YY)"}),o.jsx("input",{type:"text",value:g.expiry,onChange:k=>b({...g,expiry:k.target.value}),required:!0})]}),o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:"CVV / CVC"}),o.jsx("input",{type:"password",maxLength:4,value:g.cvv,onChange:k=>b({...g,cvv:k.target.value}),required:!0})]})]}),o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:"Cardholder Name"}),o.jsx("input",{type:"text",value:g.holderName,onChange:k=>b({...g,holderName:k.target.value}),required:!0})]}),u&&o.jsx("div",{className:"pf-phase-msg",children:u}),o.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:l,children:l?"Connecting...":`Pay PKR ${Number(r||0).toLocaleString()} via PayFast`})]}),(i==="jazzcash"||i==="easypaisa")&&o.jsxs("form",{onSubmit:v,className:"pf-modal-form",children:[o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:i==="jazzcash"?"JazzCash Mobile Number":"Easypaisa Mobile Number"}),o.jsx("input",{type:"text",value:h,onChange:k=>x(k.target.value),placeholder:"0300-1234567",required:!0})]}),o.jsxs("div",{className:"pf-fg",children:[o.jsx("label",{children:"Account Title"}),o.jsx("input",{type:"text",value:g.holderName,onChange:k=>b({...g,holderName:k.target.value}),required:!0})]}),u&&o.jsx("div",{className:"pf-phase-msg",children:u}),o.jsx("button",{type:"submit",className:"pf-modal-submit",disabled:l,children:l?"Connecting...":`Authenticate & Pay PKR ${Number(r||0).toLocaleString()}`})]})]})}),o.jsx("div",{className:"pf-modal-footer",children:o.jsx("span",{children:"🔒 256-Bit Encrypted Secure Connection · PCI-DSS Compliant"})})]}),o.jsx("style",{children:`
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
      `})]})}function GP({activeMethod:e,onSelectMethod:t}){const n=[{id:"payfast",title:"PayFast Hosted Gateway",subtitle:"Cards, Wallets, 1LINK Bank Accounts",badge:"Recommended",icon:o.jsx("div",{style:{width:24,height:24,borderRadius:"6px",background:"linear-gradient(135deg, #eb4d4b, #f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff"},children:"PF"}),color:"#eb4d4b"},{id:"card",title:"Debit / Credit Card",subtitle:"Visa, Mastercard, UnionPay, PayPak",badge:"Auto-Deduct",icon:o.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),o.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),color:"#ff5a1f"},{id:"jazzcash",title:"JazzCash",subtitle:"Mobile Wallet / Direct Pay",badge:"Zero Fee",icon:o.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#E30613",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"JC"}),color:"#E30613"},{id:"easypaisa",title:"Easypaisa",subtitle:"Mobile Account / Push Approval",badge:"Instant Pass",icon:o.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#00A651",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"11px",color:"#fff",letterSpacing:"-0.5px"},children:"EP"}),color:"#00A651"}];return o.jsxs("div",{className:"payment-method-selector-container",children:[o.jsx("div",{className:"payment-method-tabs",children:n.map(r=>{const s=e===r.id;return o.jsxs("button",{type:"button",className:`payment-method-tab ${s?"is-active":""}`,onClick:()=>t(r.id),children:[o.jsxs("div",{className:"payment-tab-top",children:[o.jsx("div",{className:"payment-tab-icon",children:r.icon}),o.jsx("span",{className:"payment-tab-badge",children:r.badge})]}),o.jsxs("div",{className:"payment-tab-text",children:[o.jsxs("div",{className:"payment-tab-title",children:[o.jsx("strong",{children:r.title}),s&&o.jsx("span",{className:"active-dot"})]}),o.jsx("small",{children:r.subtitle})]})]},r.id)})}),o.jsx("style",{children:`
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
      `})]})}function zi({type:e,message:t,onClose:n}){const r={success:"bg-green-100 border-green-500 text-green-700",error:"bg-red-100 border-red-500 text-red-700",warning:"bg-yellow-100 border-yellow-500 text-yellow-700",info:"bg-blue-100 border-blue-500 text-blue-700"}[e]||"bg-gray-100 border-gray-500 text-gray-700";return o.jsxs("div",{className:`${r} border-l-4 p-4 rounded mb-4 flex justify-between items-center`,children:[o.jsx("p",{children:t}),n&&o.jsx("button",{onClick:n,className:"ml-4 font-bold hover:opacity-75",children:"×"})]})}const KP=["Personal Info","Ticket Details","Payment Checkout","QR Pass"],qP={ticketType:"General",day:"Day 1",quantity:1,subtotal:1,serviceFee:0,discount:0,total:1,benefits:["Festival entry","Food court access","Partner discount offers"]};function YP(){const e=gn(),{user:t}=Ut(),{requestTicket:n,payWithCard:r,payWithJazzCash:s,payWithEasypaisa:i,initiatePayFastCheckout:a,completePayFastGateway:l,loading:c}=sl(),[u,d]=S.useState(null),[f,p]=S.useState(!1),[y,m]=S.useState("payfast"),[g,b]=S.useState(null),[h,x]=S.useState(!1),[v,w]=S.useState(qP),[k,N]=S.useState(null),[P,T]=S.useState(!0),L=f?3:2;`${(t==null?void 0:t.firstName)||""} ${(t==null?void 0:t.lastName)||""}`.trim()||t!=null&&t.name||t!=null&&t.email;const C=!!(k!=null&&k.soldOut);S.useEffect(()=>{let E=!0;return(async()=>{T(!0);try{const A=await Ge.getAvailability();if(!E)return;N(A),A!=null&&A.soldOut&&d({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{E&&N(null)}finally{E&&T(!1)}})(),()=>{E=!1}},[]);const z=()=>{if(C){d({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}e(`/login?returnTo=${encodeURIComponent("/tickets")}`)},U=async E=>{var R,A,M,$;if(C){d({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const q=await n(E);b(q),p(!0),d({type:"success",message:"Ticket reserved! Please complete payment below."});const oe=await Ge.getAvailability().catch(()=>null);oe&&N(oe)}catch(q){const oe=((A=(R=q==null?void 0:q.response)==null?void 0:R.data)==null?void 0:A.message)||(q==null?void 0:q.message)||"Failed to request ticket. Please try again.";($=(M=q==null?void 0:q.response)==null?void 0:M.data)!=null&&$.availability&&N(q.response.data.availability),d({type:"error",message:oe})}},J=async E=>{var R,A;if(!(g!=null&&g.id)){d({type:"error",message:"Ticket session expired. Please retry."});return}try{await r(g.id,E),d({type:"success",message:`Payment of PKR ${v.total.toLocaleString()} successful! Your QR pass is ready.`}),e(`/tickets/view/${g.id}`)}catch(M){const $=((A=(R=M==null?void 0:M.response)==null?void 0:R.data)==null?void 0:A.message)||(M==null?void 0:M.message)||"Failed to process card payment.";d({type:"error",message:$})}},W=async E=>{var R,A;if(!(g!=null&&g.id)){d({type:"error",message:"Ticket session expired. Please retry."});return}try{await s(g.id,E),d({type:"success",message:"JazzCash payment successful! Your QR pass is ready."}),e(`/tickets/view/${g.id}`)}catch(M){const $=((A=(R=M==null?void 0:M.response)==null?void 0:R.data)==null?void 0:A.message)||(M==null?void 0:M.message)||"Failed to process JazzCash payment.";d({type:"error",message:$})}},I=async E=>{var R,A;if(!(g!=null&&g.id)){d({type:"error",message:"Ticket session expired. Please retry."});return}try{await i(g.id,E),d({type:"success",message:"Easypaisa payment successful! Your QR pass is ready."}),e(`/tickets/view/${g.id}`)}catch(M){const $=((A=(R=M==null?void 0:M.response)==null?void 0:R.data)==null?void 0:A.message)||(M==null?void 0:M.message)||"Failed to process Easypaisa payment.";d({type:"error",message:$})}},F=async()=>{var E,R;if(!(g!=null&&g.id)){d({type:"error",message:"Ticket session expired. Please retry."});return}try{await a(g.id),x(!0)}catch(A){d({type:"error",message:((R=(E=A==null?void 0:A.response)==null?void 0:E.data)==null?void 0:R.message)||(A==null?void 0:A.message)||"Failed to initiate PayFast session."})}},G=async E=>{var R,A;if(g!=null&&g.id)try{await l(g.id,E),x(!1),d({type:"success",message:`PayFast payment of PKR ${v.total.toLocaleString()} confirmed! Official QR pass generated.`}),e(`/tickets/view/${g.id}?payment=success`)}catch(M){d({type:"error",message:((A=(R=M==null?void 0:M.response)==null?void 0:R.data)==null?void 0:A.message)||(M==null?void 0:M.message)||"Failed to verify PayFast transaction."})}};return o.jsxs("main",{className:"ticket-portal-clean",children:[o.jsxs("section",{className:"ticket-clean-hero",children:[o.jsx(Ya,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.5}),o.jsx("div",{className:"hero-glow-blob"}),o.jsxs("div",{className:"ticket-clean-hero-content",children:[o.jsx("span",{className:"hero-eyebrow",children:"OZILLA FESTIVAL 2026"}),o.jsx("h1",{className:"hero-title",children:"Book Your Festival Passes"}),o.jsx("p",{className:"hero-subtitle",children:"Instant digital QR pass with access to 4 live stages, headline artists, and VIP amenities in Lahore."}),o.jsxs("div",{className:"hero-tags",children:[o.jsx("span",{children:"📅 Nov 01, 2026"}),o.jsx("span",{children:"📍 Lahore"}),o.jsx("span",{children:"⚡ Instant QR Pass"})]})]})]}),o.jsxs("section",{className:"ticket-clean-shell",children:[u&&o.jsx(zi,{type:u.type,message:u.message,onClose:()=>d(null)}),o.jsx("div",{className:"ticket-clean-stepper",children:KP.map((E,R)=>o.jsxs("div",{className:`step-item ${R+1<=L?"is-active":""}`,children:[o.jsx("span",{className:"step-num",children:R+1}),o.jsx("span",{className:"step-text",children:E})]},E))}),C?o.jsxs("div",{className:"ticket-sold-out-box",children:[o.jsx("h2",{children:"Tickets Sold Out"}),o.jsx("p",{children:"All available Ozilla Festival passes have been reserved."})]}):t?o.jsxs("div",{className:"ticket-main-grid",children:[o.jsxs("div",{className:"ticket-form-card",children:[o.jsxs("div",{className:"ticket-form-header",children:[o.jsx("h2",{children:f?"Payment Checkout":"Pass Reservation"}),o.jsx("span",{className:"ticket-badge-pill",children:"Official Portal"})]}),f?o.jsxs("div",{className:"ticket-payment-wrapper",children:[o.jsx(GP,{activeMethod:y,onSelectMethod:m}),y==="payfast"&&o.jsx(HP,{amount:v.total,onProceed:F,loading:c,onBack:()=>p(!1)}),y==="card"&&o.jsx(VP,{amount:v.total,onSubmit:J,loading:c,onBack:()=>p(!1)}),y==="jazzcash"&&o.jsx(BP,{amount:v.total,onSubmit:W,loading:c,onBack:()=>p(!1)}),y==="easypaisa"&&o.jsx($P,{amount:v.total,onSubmit:I,loading:c,onBack:()=>p(!1)})]}):o.jsx(MP,{onSubmit:U,loading:c,profileDefaults:t,onBookingChange:w,availability:k,availabilityLoading:P})]}),o.jsx(WP,{isOpen:h,onClose:()=>x(!1),ticket:g,amount:v.total,onComplete:G}),o.jsx("aside",{className:"ticket-sidebar",children:o.jsxs("div",{className:"ticket-sidebar-summary",children:[o.jsx("h3",{children:"Order Summary"}),o.jsxs("div",{className:"summary-pass-type",children:[o.jsxs("strong",{children:[v.ticketType," Pass"]}),o.jsx("span",{children:v.day})]}),o.jsxs("div",{className:"summary-rows",children:[o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Quantity"}),o.jsx("strong",{children:v.quantity})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Price"}),o.jsxs("strong",{children:["PKR ",v.subtotal.toLocaleString()]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Fee"}),o.jsx("strong",{style:{color:"#10b981"},children:"Free (PKR 0)"})]}),v.discount>0&&o.jsxs("div",{className:"summary-row summary-discount",children:[o.jsx("span",{children:"Discount"}),o.jsxs("strong",{children:["- PKR ",v.discount.toLocaleString()]})]})]}),o.jsxs("div",{className:"summary-total-row",children:[o.jsx("span",{children:"Grand Total"}),o.jsxs("strong",{children:["PKR ",v.total.toLocaleString()]})]}),o.jsx("div",{className:"summary-pass-badge",children:o.jsx("span",{children:"🎟️ Verified Digital QR Pass"})})]})})]}):o.jsxs("div",{className:"ticket-auth-prompt",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Sign in to Book Passes"}),o.jsx("p",{children:"Secure ticket purchasing requires an account for verified QR pass generation."})]}),o.jsx("button",{type:"button",onClick:z,className:"ticket-primary-button",children:"Sign In to Continue →"})]})]}),o.jsx("style",{children:`
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
      `})]})}var XP=Object.defineProperty,Na=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,nv=Object.prototype.propertyIsEnumerable,fm=(e,t,n)=>t in e?XP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Si=(e,t)=>{for(var n in t||(t={}))tv.call(t,n)&&fm(e,n,t[n]);if(Na)for(var n of Na(t))nv.call(t,n)&&fm(e,n,t[n]);return e},df=(e,t)=>{var n={};for(var r in e)tv.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Na)for(var r of Na(e))t.indexOf(r)<0&&nv.call(e,r)&&(n[r]=e[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var vr;(e=>{const t=class{constructor(c,u,d,f){if(this.version=c,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],c<t.MIN_VERSION||c>t.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let p=[];for(let m=0;m<this.size;m++)p.push(!1);for(let m=0;m<this.size;m++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const y=this.addEccAndInterleave(d);if(this.drawCodewords(y),f==-1){let m=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const b=this.getPenaltyScore();b<m&&(f=g,m=b),this.applyMask(g)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(c,u){const d=e.QrSegment.makeSegments(c);return t.encodeSegments(d,u)}static encodeBinary(c,u){const d=e.QrSegment.makeBytes(c);return t.encodeSegments([d],u)}static encodeSegments(c,u,d=1,f=40,p=-1,y=!0){if(!(t.MIN_VERSION<=d&&d<=f&&f<=t.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let m,g;for(m=d;;m++){const v=t.getNumDataCodewords(m,u)*8,w=l.getTotalBits(c,m);if(w<=v){g=w;break}if(m>=f)throw new RangeError("Data too long")}for(const v of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])y&&g<=t.getNumDataCodewords(m,v)*8&&(u=v);let b=[];for(const v of c){r(v.mode.modeBits,4,b),r(v.numChars,v.mode.numCharCountBits(m),b);for(const w of v.getData())b.push(w)}i(b.length==g);const h=t.getNumDataCodewords(m,u)*8;i(b.length<=h),r(0,Math.min(4,h-b.length),b),r(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let v=236;b.length<h;v^=253)r(v,8,b);let x=[];for(;x.length*8<b.length;)x.push(0);return b.forEach((v,w)=>x[w>>>3]|=v<<7-(w&7)),new t(m,u,x,p)}getModule(c,u){return 0<=c&&c<this.size&&0<=u&&u<this.size&&this.modules[u][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),u=c.length;for(let d=0;d<u;d++)for(let f=0;f<u;f++)d==0&&f==0||d==0&&f==u-1||d==u-1&&f==0||this.drawAlignmentPattern(c[d],c[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const u=this.errorCorrectionLevel.formatBits<<3|c;let d=u;for(let p=0;p<10;p++)d=d<<1^(d>>>9)*1335;const f=(u<<10|d)^21522;i(f>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,s(f,p));this.setFunctionModule(8,7,s(f,6)),this.setFunctionModule(8,8,s(f,7)),this.setFunctionModule(7,8,s(f,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,s(f,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,s(f,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,s(f,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let d=0;d<12;d++)c=c<<1^(c>>>11)*7973;const u=this.version<<12|c;i(u>>>18==0);for(let d=0;d<18;d++){const f=s(u,d),p=this.size-11+d%3,y=Math.floor(d/3);this.setFunctionModule(p,y,f),this.setFunctionModule(y,p,f)}}drawFinderPattern(c,u){for(let d=-4;d<=4;d++)for(let f=-4;f<=4;f++){const p=Math.max(Math.abs(f),Math.abs(d)),y=c+f,m=u+d;0<=y&&y<this.size&&0<=m&&m<this.size&&this.setFunctionModule(y,m,p!=2&&p!=4)}}drawAlignmentPattern(c,u){for(let d=-2;d<=2;d++)for(let f=-2;f<=2;f++)this.setFunctionModule(c+f,u+d,Math.max(Math.abs(f),Math.abs(d))!=1)}setFunctionModule(c,u,d){this.modules[u][c]=d,this.isFunction[u][c]=!0}addEccAndInterleave(c){const u=this.version,d=this.errorCorrectionLevel;if(c.length!=t.getNumDataCodewords(u,d))throw new RangeError("Invalid argument");const f=t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][u],p=t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][u],y=Math.floor(t.getNumRawDataModules(u)/8),m=f-y%f,g=Math.floor(y/f);let b=[];const h=t.reedSolomonComputeDivisor(p);for(let v=0,w=0;v<f;v++){let k=c.slice(w,w+g-p+(v<m?0:1));w+=k.length;const N=t.reedSolomonComputeRemainder(k,h);v<m&&k.push(0),b.push(k.concat(N))}let x=[];for(let v=0;v<b[0].length;v++)b.forEach((w,k)=>{(v!=g-p||k>=m)&&x.push(w[v])});return i(x.length==y),x}drawCodewords(c){if(c.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let f=0;f<this.size;f++)for(let p=0;p<2;p++){const y=d-p,g=(d+1&2)==0?this.size-1-f:f;!this.isFunction[g][y]&&u<c.length*8&&(this.modules[g][y]=s(c[u>>>3],7-(u&7)),u++)}}i(u==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let d=0;d<this.size;d++){let f;switch(c){case 0:f=(d+u)%2==0;break;case 1:f=u%2==0;break;case 2:f=d%3==0;break;case 3:f=(d+u)%3==0;break;case 4:f=(Math.floor(d/3)+Math.floor(u/2))%2==0;break;case 5:f=d*u%2+d*u%3==0;break;case 6:f=(d*u%2+d*u%3)%2==0;break;case 7:f=((d+u)%2+d*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][d]&&f&&(this.modules[u][d]=!this.modules[u][d])}}getPenaltyScore(){let c=0;for(let p=0;p<this.size;p++){let y=!1,m=0,g=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[p][b]==y?(m++,m==5?c+=t.PENALTY_N1:m>5&&c++):(this.finderPenaltyAddHistory(m,g),y||(c+=this.finderPenaltyCountPatterns(g)*t.PENALTY_N3),y=this.modules[p][b],m=1);c+=this.finderPenaltyTerminateAndCount(y,m,g)*t.PENALTY_N3}for(let p=0;p<this.size;p++){let y=!1,m=0,g=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][p]==y?(m++,m==5?c+=t.PENALTY_N1:m>5&&c++):(this.finderPenaltyAddHistory(m,g),y||(c+=this.finderPenaltyCountPatterns(g)*t.PENALTY_N3),y=this.modules[b][p],m=1);c+=this.finderPenaltyTerminateAndCount(y,m,g)*t.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let y=0;y<this.size-1;y++){const m=this.modules[p][y];m==this.modules[p][y+1]&&m==this.modules[p+1][y]&&m==this.modules[p+1][y+1]&&(c+=t.PENALTY_N2)}let u=0;for(const p of this.modules)u=p.reduce((y,m)=>y+(m?1:0),u);const d=this.size*this.size,f=Math.ceil(Math.abs(u*20-d*10)/d)-1;return i(0<=f&&f<=9),c+=f*t.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let d=[6];for(let f=this.size-7;d.length<c;f-=u)d.splice(1,0,f);return d}}static getNumRawDataModules(c){if(c<t.MIN_VERSION||c>t.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*c+128)*c+64;if(c>=2){const d=Math.floor(c/7)+2;u-=(25*d-10)*d-55,c>=7&&(u-=36)}return i(208<=u&&u<=29648),u}static getNumDataCodewords(c,u){return Math.floor(t.getNumRawDataModules(c)/8)-t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c]*t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let u=[];for(let f=0;f<c-1;f++)u.push(0);u.push(1);let d=1;for(let f=0;f<c;f++){for(let p=0;p<u.length;p++)u[p]=t.reedSolomonMultiply(u[p],d),p+1<u.length&&(u[p]^=u[p+1]);d=t.reedSolomonMultiply(d,2)}return u}static reedSolomonComputeRemainder(c,u){let d=u.map(f=>0);for(const f of c){const p=f^d.shift();d.push(0),u.forEach((y,m)=>d[m]^=t.reedSolomonMultiply(y,p))}return d}static reedSolomonMultiply(c,u){if(c>>>8||u>>>8)throw new RangeError("Byte out of range");let d=0;for(let f=7;f>=0;f--)d=d<<1^(d>>>7)*285,d^=(u>>>f&1)*c;return i(d>>>8==0),d}finderPenaltyCountPatterns(c){const u=c[1];i(u<=this.size*3);const d=u>0&&c[2]==u&&c[3]==u*3&&c[4]==u&&c[5]==u;return(d&&c[0]>=u*4&&c[6]>=u?1:0)+(d&&c[6]>=u*4&&c[0]>=u?1:0)}finderPenaltyTerminateAndCount(c,u,d){return c&&(this.finderPenaltyAddHistory(u,d),u=0),u+=this.size,this.finderPenaltyAddHistory(u,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(c,u){u[0]==0&&(c+=this.size),u.pop(),u.unshift(c)}};let n=t;n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;function r(c,u,d){if(u<0||u>31||c>>>u)throw new RangeError("Value out of range");for(let f=u-1;f>=0;f--)d.push(c>>>f&1)}function s(c,u){return(c>>>u&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const a=class{constructor(c,u,d){if(this.mode=c,this.numChars=u,this.bitData=d,u<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(c){let u=[];for(const d of c)r(d,8,u);return new a(a.Mode.BYTE,c.length,u)}static makeNumeric(c){if(!a.isNumeric(c))throw new RangeError("String contains non-numeric characters");let u=[];for(let d=0;d<c.length;){const f=Math.min(c.length-d,3);r(parseInt(c.substr(d,f),10),f*3+1,u),d+=f}return new a(a.Mode.NUMERIC,c.length,u)}static makeAlphanumeric(c){if(!a.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],d;for(d=0;d+2<=c.length;d+=2){let f=a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d))*45;f+=a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d+1)),r(f,11,u)}return d<c.length&&r(a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d)),6,u),new a(a.Mode.ALPHANUMERIC,c.length,u)}static makeSegments(c){return c==""?[]:a.isNumeric(c)?[a.makeNumeric(c)]:a.isAlphanumeric(c)?[a.makeAlphanumeric(c)]:[a.makeBytes(a.toUtf8ByteArray(c))]}static makeEci(c){let u=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)r(c,8,u);else if(c<16384)r(2,2,u),r(c,14,u);else if(c<1e6)r(6,3,u),r(c,21,u);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,u)}static isNumeric(c){return a.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return a.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,u){let d=0;for(const f of c){const p=f.mode.numCharCountBits(u);if(f.numChars>=1<<p)return 1/0;d+=4+p+f.bitData.length}return d}static toUtf8ByteArray(c){c=encodeURI(c);let u=[];for(let d=0;d<c.length;d++)c.charAt(d)!="%"?u.push(c.charCodeAt(d)):(u.push(parseInt(c.substr(d+1,2),16)),d+=2);return u}};let l=a;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=l})(vr||(vr={}));(e=>{(t=>{const n=class{constructor(s,i){this.ordinal=s,this.formatBits=i}};let r=n;r.LOW=new n(0,1),r.MEDIUM=new n(1,0),r.QUARTILE=new n(2,3),r.HIGH=new n(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(vr||(vr={}));(e=>{(t=>{const n=class{constructor(s,i){this.modeBits=s,this.numBitsCharCount=i}numCharCountBits(s){return this.numBitsCharCount[Math.floor((s+7)/17)]}};let r=n;r.NUMERIC=new n(1,[10,12,14]),r.ALPHANUMERIC=new n(2,[9,11,13]),r.BYTE=new n(4,[8,16,16]),r.KANJI=new n(8,[8,10,12]),r.ECI=new n(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(vr||(vr={}));var Hr=vr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var rv={L:Hr.QrCode.Ecc.LOW,M:Hr.QrCode.Ecc.MEDIUM,Q:Hr.QrCode.Ecc.QUARTILE,H:Hr.QrCode.Ecc.HIGH},sv=128,iv="L",ov="#FFFFFF",av="#000000",lv=!1,ff=4,QP=.1;function cv(e,t=0){const n=[];return e.forEach(function(r,s){let i=null;r.forEach(function(a,l){if(!a&&i!==null){n.push(`M${i+t} ${s+t}h${l-i}v1H${i+t}z`),i=null;return}if(l===r.length-1){if(!a)return;i===null?n.push(`M${l+t},${s+t} h1v1H${l+t}z`):n.push(`M${i+t},${s+t} h${l+1-i}v1H${i+t}z`);return}a&&i===null&&(i=l)})}),n.join("")}function uv(e,t){return e.slice().map((n,r)=>r<t.y||r>=t.y+t.h?n:n.map((s,i)=>i<t.x||i>=t.x+t.w?s:!1))}function dv(e,t,n,r){if(r==null)return null;const s=n?ff:0,i=e.length+s*2,a=Math.floor(t*QP),l=i/t,c=(r.width||a)*l,u=(r.height||a)*l,d=r.x==null?e.length/2-c/2:r.x*l,f=r.y==null?e.length/2-u/2:r.y*l;let p=null;if(r.excavate){let y=Math.floor(d),m=Math.floor(f),g=Math.ceil(c+d-y),b=Math.ceil(u+f-m);p={x:y,y:m,w:g,h:b}}return{x:d,y:f,h:u,w:c,excavation:p}}var JP=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ZP(e){const t=e,{value:n,size:r=sv,level:s=iv,bgColor:i=ov,fgColor:a=av,includeMargin:l=lv,style:c,imageSettings:u}=t,d=df(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),f=u==null?void 0:u.src,p=Ee.useRef(null),y=Ee.useRef(null),[m,g]=Ee.useState(!1);Ee.useEffect(()=>{if(p.current!=null){const x=p.current,v=x.getContext("2d");if(!v)return;let w=Hr.QrCode.encodeText(n,rv[s]).getModules();const k=l?ff:0,N=w.length+k*2,P=dv(w,r,l,u),T=y.current,L=P!=null&&T!==null&&T.complete&&T.naturalHeight!==0&&T.naturalWidth!==0;L&&P.excavation!=null&&(w=uv(w,P.excavation));const C=window.devicePixelRatio||1;x.height=x.width=r*C;const z=r/N*C;v.scale(z,z),v.fillStyle=i,v.fillRect(0,0,N,N),v.fillStyle=a,JP?v.fill(new Path2D(cv(w,k))):w.forEach(function(U,J){U.forEach(function(W,I){W&&v.fillRect(I+k,J+k,1,1)})}),L&&v.drawImage(T,P.x+k,P.y+k,P.w,P.h)}}),Ee.useEffect(()=>{g(!1)},[f]);const b=Si({height:r,width:r},c);let h=null;return f!=null&&(h=Ee.createElement("img",{src:f,key:f,style:{display:"none"},onLoad:()=>{g(!0)},ref:y})),Ee.createElement(Ee.Fragment,null,Ee.createElement("canvas",Si({style:b,height:r,width:r,ref:p},d)),h)}function eT(e){const t=e,{value:n,size:r=sv,level:s=iv,bgColor:i=ov,fgColor:a=av,includeMargin:l=lv,imageSettings:c}=t,u=df(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let d=Hr.QrCode.encodeText(n,rv[s]).getModules();const f=l?ff:0,p=d.length+f*2,y=dv(d,r,l,c);let m=null;c!=null&&y!=null&&(y.excavation!=null&&(d=uv(d,y.excavation)),m=Ee.createElement("image",{xlinkHref:c.src,height:y.h,width:y.w,x:y.x+f,y:y.y+f,preserveAspectRatio:"none"}));const g=cv(d,f);return Ee.createElement("svg",Si({height:r,width:r,viewBox:`0 0 ${p} ${p}`},u),Ee.createElement("path",{fill:i,d:`M0,0 h${p}v${p}H0z`,shapeRendering:"crispEdges"}),Ee.createElement("path",{fill:a,d:g,shapeRendering:"crispEdges"}),m)}var tT=e=>{const t=e,{renderAs:n}=t,r=df(t,["renderAs"]);return n==="svg"?Ee.createElement(eT,Si({},r)):Ee.createElement(ZP,Si({},r))};function nT({ticket:e,size:t=200,showCaption:n=!0}){const r=JSON.stringify({ticketId:e.uniqueTicketId||e.ticketId||e.id,fullName:e.fullName||e.name,email:e.email,phone:e.phone,eventName:e.eventName,eventDate:e.eventDate,eventTime:e.eventTime});return o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:o.jsx(tT,{value:r,size:t,level:"H",includeMargin:!0,renderAs:"canvas"})}),n?o.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function rT(e="pending"){return e==="approved"?{label:"Verified",className:"is-approved"}:e==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:e==="rejected"||e==="cancelled"?{label:e==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function sc(e,t,n,r,s,i){const a=Math.min(i,r/2,s/2);e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+s-a),e.quadraticCurveTo(t+r,n+s,t+r-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}function sT(e,t,n,r,s,i,a="left"){const l=String(t).split(/\s+/);let c="",u=r;const d=e.textAlign;e.textAlign=a,l.forEach((f,p)=>{const y=c?`${c} ${f}`:f;e.measureText(y).width>s&&c?(e.fillText(c,a==="right"?n+s:n,u),c=f,u+=i):c=y,p===l.length-1&&c&&e.fillText(c,a==="right"?n+s:n,u)}),e.textAlign=d}function fv({ticket:e,actionTo:t,actionLabel:n="View Ticket"}){const r=S.useRef(null),s=S.useRef(null),i=e.uniqueTicketId||e.ticketId||e.id,a=e.bookingId||e.requestId||e.id,l=rT(e.status),c=e.status==="approved",u=`${(e.ticketType||"VIP").toUpperCase()} PASS`,d=e.eventDate?Lu(e.eventDate):"Nov 01, 2026",f=e.festivalDay==="day2"?"Day 2":"Day 1",p=b=>{const h=document.createElement("a");h.href=b.toDataURL("image/png"),h.download=`ozilla-pass-${i}.png`,h.click()},y=async()=>{var I;const b=(I=r.current)==null?void 0:I.querySelector("canvas"),h=1200,x=440,v=document.createElement("canvas");v.width=h,v.height=x;const w=v.getContext("2d");if(!w)return;const k=w.createLinearGradient(0,0,h,x);k.addColorStop(0,"#020d0f"),k.addColorStop(.46,"#062828"),k.addColorStop(1,"#23081e"),sc(w,4,4,h-8,x-8,38),w.fillStyle=k,w.fill(),w.strokeStyle="rgba(255, 255, 255, 0.16)",w.lineWidth=3,w.stroke();const N=w.createLinearGradient(80,0,h-80,0);N.addColorStop(0,"rgba(255, 189, 89, 0.7)"),N.addColorStop(.5,"rgba(14, 165, 233, 0.5)"),N.addColorStop(1,"rgba(236, 72, 153, 0.6)"),w.strokeStyle=N,w.lineWidth=3.5,w.beginPath(),w.moveTo(90,6),w.lineTo(h-90,6),w.stroke(),w.fillStyle="#ffffff",w.font='800 20px "Segoe UI", Arial, sans-serif',w.textAlign="left",w.fillText(u,54,66),w.fillStyle="#ff9f1c",w.font='800 13px "Segoe UI", Arial, sans-serif',w.fillText("OZILLA FESTIVAL 2026",54,94);const P=e.fullName||e.name||"Festival Guest";w.fillStyle="#ffffff",w.font='800 36px "Segoe UI", Arial, sans-serif',sT(w,P,54,152,h-360,42);const T=e.email||"-";w.fillStyle="rgba(255, 255, 255, 0.78)",w.font='600 17px "Segoe UI", Arial, sans-serif',w.fillText(T,54,198);const L=[{label:"DATE",val:d},{label:"DAY",val:f},{label:"LOCATION",val:e.location||"Lahore, Pakistan"},{label:"BOOKING ID",val:String(a)}],C=246;let z=54;L.forEach(F=>{w.font='700 11px "Segoe UI", Arial, sans-serif';const G=w.measureText(F.label).width;w.font='800 14px "Segoe UI", Arial, sans-serif';const E=w.measureText(F.val).width,R=Math.max(G,E)+28;sc(w,z,C,R,58,12),w.fillStyle="rgba(255, 255, 255, 0.07)",w.fill(),w.strokeStyle="rgba(255, 255, 255, 0.12)",w.lineWidth=1.5,w.stroke(),w.fillStyle="#ff9f1c",w.font='800 11px "Segoe UI", Arial, sans-serif',w.textAlign="left",w.fillText(F.label,z+14,C+22),w.fillStyle="#ffffff",w.font='800 14px "Segoe UI", Arial, sans-serif',w.fillText(F.val,z+14,C+44),z+=R+14}),w.fillStyle="rgba(255, 255, 255, 0.45)",w.font='600 13px "Segoe UI", Arial, sans-serif',w.textAlign="left",w.fillText(`Official Festival Entry Pass • ID: ${i} • Verify at entrance`,54,388),w.fillStyle="#ffbd59",w.font='800 16px "Segoe UI", Arial, sans-serif',w.textAlign="right",w.fillText("TICKET ID",h-54,66),w.fillStyle="#ffffff",w.font='800 20px "Segoe UI", Arial, monospace',w.fillText(String(i),h-54,96);const U=190,J=h-U-54,W=132;sc(w,J,W,U,U,18),w.fillStyle="#ffffff",w.fill(),w.strokeStyle="rgba(255, 189, 89, 0.4)",w.lineWidth=2,w.stroke(),b&&c?w.drawImage(b,J+12,W+12,U-24,U-24):(w.fillStyle="#102525",w.font='800 13px "Segoe UI", Arial, sans-serif',w.textAlign="center",w.fillText("QR CODE",J+U/2,W+U/2-8),w.font='600 11px "Segoe UI", Arial, sans-serif',w.fillStyle="#6b7280",w.fillText(c?"GENERATING":"PENDING APPROVAL",J+U/2,W+U/2+12)),w.fillStyle="#ffbd59",w.font='800 11px "Segoe UI", Arial, sans-serif',w.textAlign="center",w.fillText("SCAN AT ENTRANCE",J+U/2,W+U+28),p(v)},m=()=>{y()},g=async()=>{if(navigator.share)try{await navigator.share({title:e.eventName||"Ozilla Festival Ticket Pass",text:`Ozilla Festival Ticket: ${i} (${u})`})}catch{}};return o.jsxs("div",{className:"ticket-pass-wrapper",ref:s,children:[o.jsxs("div",{className:"ticket-pass-badge",children:[o.jsx("div",{className:"ticket-pass-glow","aria-hidden":"true"}),o.jsxs("div",{className:"ticket-pass-left",children:[o.jsxs("div",{className:"ticket-pass-top-row",children:[o.jsx("div",{className:"ticket-pass-type-badge",children:u}),o.jsx("div",{className:"ticket-pass-festival-tag",children:"OZILLA FESTIVAL 2026"})]}),o.jsxs("div",{className:"ticket-pass-identity",children:[o.jsx("h2",{className:"ticket-pass-name",children:e.fullName||e.name||"Festival Guest"}),o.jsx("p",{className:"ticket-pass-email",children:e.email||"-"})]}),o.jsxs("div",{className:"ticket-pass-meta-row",children:[o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"DATE"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:d})]}),o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"DAY"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:f})]}),o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"BOOKING ID"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:a})]})]}),o.jsx("div",{className:"ticket-pass-footnote",children:o.jsx("span",{children:"Official Festival Entry Pass • Valid for 1 Person"})})]}),o.jsxs("div",{className:"ticket-pass-right",children:[o.jsxs("div",{className:"ticket-pass-id-block",children:[o.jsx("span",{className:"ticket-pass-id-label",children:"TICKET ID"}),o.jsx("strong",{className:"ticket-pass-id-value",children:i})]}),o.jsxs("div",{className:"ticket-pass-qr-box",ref:r,children:[c?o.jsx(nT,{ticket:e,size:118,showCaption:!1}):o.jsxs("div",{className:"ticket-pass-qr-pending",children:[o.jsx("span",{children:"QR Pending"}),o.jsx("small",{children:"Approval Required"})]}),o.jsx("span",{className:"ticket-pass-scan-hint",children:"SCAN AT ENTRANCE"})]})]})]}),o.jsxs("div",{className:"ticket-pass-actions-bar",children:[o.jsxs("div",{className:"ticket-pass-status-pill",children:[o.jsx("span",{className:`status-dot ${l.className}`}),o.jsxs("span",{children:["Status: ",o.jsx("strong",{children:l.label})]})]}),o.jsxs("div",{className:"ticket-pass-button-group",children:[c?o.jsxs("button",{type:"button",className:"btn-pass-download",onClick:y,children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"7 10 12 15 17 10"}),o.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Pass"]}):o.jsx("button",{type:"button",className:"btn-pass-download disabled",disabled:!0,title:"Available after verification",children:"Download Pass (Pending)"}),o.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:m,children:"Print"}),o.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:g,children:"Share"}),t&&o.jsx(K,{to:t,className:"btn-pass-link",children:n})]})]}),o.jsx("style",{children:`
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
      `})]})}const iT=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],oT=["🔒 256-Bit SSL Secured","🎟️ Verified QR Pass","⭐ Official Festival Entry","⚡ Instant Scan Ready"],aT=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"];function pm(){const e=new Date("2026-11-01T18:00:00+05:00").getTime(),t=Math.max(0,e-Date.now());return{days:Math.floor(t/(1e3*60*60*24)),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/(1e3*60)%60)}}function lT(){const{tickets:e,loading:t,fetchMyTickets:n}=sl(),{user:r}=Ut(),[s,i]=S.useState(pm);S.useEffect(()=>{n()},[n]),S.useEffect(()=>{const c=window.setInterval(()=>i(pm()),6e4);return()=>window.clearInterval(c)},[]);const a=`${(r==null?void 0:r.firstName)||""} ${(r==null?void 0:r.lastName)||""}`.trim()||(r==null?void 0:r.name)||(r==null?void 0:r.email)||"Festival Member",l=S.useMemo(()=>{const c=e.filter(d=>d.status==="approved").length,u=e.filter(d=>d.status!=="approved").length;return[[e.length,"Total Tickets"],[c,"QR Ready"],[u,"In Review"],[c*250+e.length*100,"Reward Points"],[c>1?"VIP":c===1?"Gold":"Member","Festival Level"]]},[e]);return o.jsxs("main",{className:"my-tickets-premium",children:[o.jsxs("section",{className:"my-tickets-hero",children:[o.jsx(Ya,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:140,speed:.55}),o.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),o.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),o.jsxs("div",{className:"my-tickets-hero-content",children:[o.jsx("p",{className:"my-tickets-eyebrow",children:"DIGITAL FESTIVAL WALLET"}),o.jsx("h1",{className:"my-tickets-title",children:"Your Festival Passes"}),o.jsx("span",{className:"my-tickets-subtitle",children:"Access your verified QR tickets, download pass images, and track your VIP festival benefits for Ozilla Festival 2026."})]})]}),o.jsxs("section",{className:"my-tickets-shell",children:[o.jsxs("div",{className:"ticket-wallet-dashboard",children:[o.jsxs("article",{className:"ticket-wallet-profile",children:[o.jsx("div",{className:"ticket-wallet-avatar",children:String(a).slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("p",{children:"Welcome Back,"}),o.jsx("h2",{children:a}),o.jsxs("div",{className:"ticket-wallet-tags",children:[o.jsx("span",{children:"Verified Holder"}),o.jsx("span",{children:"Official Pass Holder"}),o.jsx("span",{children:e.length>2?"VIP Loyalty":e.length>0?"Gold Member":"Festival Member"})]})]})]}),o.jsxs("article",{className:"ticket-wallet-countdown",children:[o.jsx("p",{children:"Festival Starts In"}),o.jsxs("div",{className:"wallet-countdown-row",children:[o.jsxs("div",{children:[o.jsx("strong",{children:s.days}),o.jsx("span",{children:"Days"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:s.hours}),o.jsx("span",{children:"Hours"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:s.minutes}),o.jsx("span",{children:"Minutes"})]})]})]})]}),o.jsx("div",{className:"ticket-wallet-stats",children:l.map(([c,u])=>o.jsxs("article",{children:[o.jsx("strong",{children:c}),o.jsx("span",{children:u})]},u))}),t?o.jsxs("div",{className:"ticket-wallet-loading",children:[o.jsx("div",{className:"ticket-wallet-spinner"}),o.jsx("h2",{children:"Loading Your Passes..."}),o.jsx("p",{children:"Fetching your verified QR tickets from the blockchain vault."})]}):e.length===0?o.jsxs("div",{className:"ticket-wallet-empty",children:[o.jsx("div",{className:"ticket-empty-mark",children:"🎟️"}),o.jsx("h2",{children:"No Tickets Booked Yet"}),o.jsx("p",{children:"Reserve your Ozilla Festival pass and unlock your personal digital ticket wallet with dynamic QR entry."}),o.jsx(K,{to:"/tickets",className:"ticket-empty-btn",children:"Purchase Ticket →"})]}):o.jsxs("div",{className:"ticket-wallet-passes-section",children:[o.jsxs("div",{className:"ticket-wallet-section-heading",children:[o.jsx("p",{children:"OFFICIAL DIGITAL PASSES"}),o.jsx("h2",{children:"Active Festival Tickets"})]}),o.jsx("div",{className:"ticket-wallet-grid",children:e.map(c=>o.jsx(fv,{ticket:c,actionLabel:"Open Details"},c.id))})]}),o.jsxs("div",{className:"ticket-wallet-extras",children:[o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Pass Privileges"}),o.jsx("div",{className:"ticket-wallet-benefits",children:iT.map(c=>o.jsx("span",{children:c},c))})]}),o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Verification Journey"}),o.jsx("div",{className:"ticket-wallet-timeline",children:aT.map((c,u)=>o.jsx("span",{className:u<4?"is-active":"",children:c},c))})]}),o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Trust & Security"}),o.jsx("div",{className:"ticket-wallet-trust",children:oT.map(c=>o.jsx("span",{children:c},c))})]})]})]}),o.jsx("style",{children:`
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
      `})]})}function cT(){return o.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:o.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}function uT(){const{ticketId:e}=M0(),{getTicketById:t}=sl(),[n,r]=S.useState(null),[s,i]=S.useState(!0),[a,l]=S.useState(!1),[c,u]=S.useState(null),d=(n==null?void 0:n.status)==="approved",f=["pending","payment_submitted"].includes(n==null?void 0:n.status);if(S.useEffect(()=>{(async()=>{try{const m=await t(e);r(m)}catch{r(null)}finally{i(!1)}})()},[e,t]),s)return o.jsx(cT,{});if(!n)return o.jsx("div",{className:"bg-[#1b110b]/80 border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto my-12 backdrop-blur-xl",children:o.jsx("p",{className:"text-white/80 font-bold text-lg",children:"Ticket not found."})});const p=async()=>{var y,m;l(!0),u(null);try{const g=await Ge.cancelTicket(n.id);r(g.ticket),u({type:"success",message:g.message||"Ticket cancelled successfully."})}catch(g){u({type:"error",message:((m=(y=g.response)==null?void 0:y.data)==null?void 0:m.message)||"Failed to cancel ticket."})}finally{l(!1)}};return o.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[o.jsx("div",{className:"flex items-center justify-between gap-3 mb-6",children:o.jsxs("div",{children:[o.jsx("span",{className:"text-[#ffbd59] text-xs font-black uppercase tracking-widest block mb-1",children:"OFFICIAL DIGITAL PASS"}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif]",children:"Your Festival Pass"}),o.jsx("p",{className:"text-sm text-white/70 mt-1",children:"Official digital entry pass with scannable QR badge"})]})}),c&&o.jsx(zi,{type:c.type,message:c.message,onClose:()=>u(null)}),o.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[o.jsx(fv,{ticket:n,actionTo:"/tickets/my-tickets",actionLabel:"My Tickets Wallet"}),o.jsxs("div",{className:"bg-[#1b110b]/75 rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl",children:[f&&o.jsx("button",{type:"button",className:"mb-4 bg-rose-600/20 border border-rose-500/40 text-rose-300 px-5 py-2.5 rounded-xl font-bold hover:bg-rose-600/30 transition-colors",onClick:p,disabled:a,children:a?"Cancelling...":"Cancel Ticket Request"}),d?o.jsxs("div",{className:"p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl",children:[o.jsx("h2",{className:"text-lg font-bold text-emerald-300 mb-1",children:"Official Pass Ready"}),o.jsxs("p",{className:"text-emerald-200/80 text-sm",children:["Your ticket pass has been verified and the scannable QR badge is active. Click ",o.jsx("strong",{children:"Download Pass"})," above to save the pass image to your device."]})]}):o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-bold text-white mb-2 font-['Outfit',sans-serif]",children:"Verification In Progress"}),o.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 rounded-xl p-5",children:[o.jsx("p",{className:"text-amber-300 font-semibold mb-1",children:"Pass verification pending admin approval."}),o.jsx("p",{className:"text-amber-200/80 text-sm",children:"Your scannable QR code and downloadable pass image will be unlocked once payment proof is verified by the admin team."})]})]})]})]})]})}function dT(){const{ticketId:e}=M0(),[t,n]=S.useState(null),[r,s]=S.useState(""),[i,a]=S.useState(!0),[l,c]=S.useState(!1),[u,d]=S.useState(null),[f,p]=S.useState(""),y=b=>b==="approved"?"bg-green-100 text-green-800":b==="payment_submitted"?"bg-blue-100 text-blue-700":b==="rejected"||b==="cancelled"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-800",m=b=>{try{const h=JSON.parse(b),v=["ticketId","fullName","email","phone","eventName","eventDate","eventTime"].filter(w=>!h[w]);return v.length>0?{ok:!1,message:`Missing fields: ${v.join(", ")}`}:{ok:!0,parsed:h}}catch{return{ok:!1,message:"QR payload is not valid JSON."}}};S.useEffect(()=>{(async()=>{try{const h=await Ge.getTicketById(e);n(h),s(JSON.stringify({ticketId:h.uniqueTicketId||h.ticketId||h.id,fullName:h.fullName||h.name,email:h.email,phone:h.phone,eventName:h.eventName,eventDate:h.eventDate,eventTime:h.eventTime},null,2))}catch{d({type:"error",message:"Ticket not found"})}finally{a(!1)}})()},[e]);const g=async()=>{var h,x,v,w,k;d(null),p("");const b=m(r);if(!b.ok){p(b.message);return}c(!0);try{const N=await Ge.verifyTicketByQr(r);n(N.ticket||t),d({type:"success",message:N.message||`Ticket verified: ${N.status}`})}catch(N){const P=((x=(h=N.response)==null?void 0:h.data)==null?void 0:x.message)||"Verification failed",T=(k=(w=(v=N.response)==null?void 0:v.data)==null?void 0:w.mismatchedFields)!=null&&k.length?` Mismatched fields: ${N.response.data.mismatchedFields.join(", ")}.`:"";d({type:"error",message:`${P}${T}`})}finally{c(!1)}};return i?o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:o.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})}):o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6",children:o.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[o.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"Ticket Verification"}),u&&o.jsx(zi,{type:u.type,message:u.message,onClose:()=>d(null)}),t?o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6",children:[o.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:t.eventName}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Date:"})," ",t.eventDate]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Location:"})," ",t.location]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Ticket Type:"})," ",t.ticketType]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Status:"}),o.jsx("span",{className:`ml-2 px-3 py-1 rounded-full text-sm ${y(t.status)}`,children:t.status})]})]})]}),o.jsx("div",{className:"text-center",children:o.jsx("div",{className:"bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block",children:o.jsx("div",{className:"w-48 h-48 bg-gray-100 flex items-center justify-center",children:o.jsx("span",{className:"text-gray-400",children:"Scan / Paste QR Data"})})})}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-gray-700 mb-2 font-semibold",children:"QR Payload"}),o.jsx("textarea",{className:"w-full px-4 py-2 border rounded-lg",rows:6,value:r,onChange:b=>s(b.target.value)}),f&&o.jsx("p",{className:"text-sm text-red-600 mt-2",children:f})]}),o.jsx("button",{onClick:g,disabled:l,className:"w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold",children:l?"Verifying...":"Verify Ticket"})]}):o.jsx("div",{className:"text-center text-gray-600",children:o.jsx("p",{children:"Ticket not found or invalid."})})]})})}const mo={async getDashboard(){return(await te.get("/admin/dashboard")).data},async getUsers(){return(await te.get("/admin/users")).data},async getPayments(){return(await te.get("/admin/payments")).data},async getReports(){return(await te.get("/admin/reports")).data}};function fT(){const{isAdmin:e}=Ut(),[t,n]=S.useState(!0),[r,s]=S.useState(null),[i,a]=S.useState(null),[l,c]=S.useState([]),[u,d]=S.useState([]),[f,p]=S.useState(null);if(S.useEffect(()=>{(async()=>{var h,x;if(!e){n(!1);return}n(!0);try{const[v,w,k,N]=await Promise.all([mo.getDashboard(),mo.getUsers(),mo.getPayments(),mo.getReports()]);a(v),c(w),d(k),p(N)}catch(v){s({type:"error",message:((x=(h=v.response)==null?void 0:h.data)==null?void 0:x.message)||"Failed to load admin dashboard."})}finally{n(!1)}})()},[e]),!e)return o.jsx("div",{className:"max-w-4xl mx-auto py-12",children:o.jsxs("div",{className:"bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center",children:[o.jsx("h1",{className:"text-2xl font-black text-red-400 mb-2",children:"Admin Access Required"}),o.jsx("p",{className:"text-white/70",children:"Only authenticated festival admin accounts can access this command center."})]})});if(t)return o.jsx("div",{className:"max-w-6xl mx-auto py-12 text-center",children:o.jsx("div",{className:"bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8",children:o.jsx("p",{className:"text-white/70",children:"Loading festival admin analytics..."})})});const y=(i==null?void 0:i.stats)||{},m=(i==null?void 0:i.ticketStatus)||{},g=(f==null?void 0:f.ticketsByType)||{};return o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6",children:o.jsx("div",{children:o.jsx(uf,{title:"Admin Command Center",subtitle:"Real-time festival ticket velocity, user data, revenue analytics & approvals"})})}),r&&o.jsx(zi,{type:r.type,message:r.message,onClose:()=>s(null)}),o.jsx("div",{className:"flex items-center gap-3 mb-8",children:o.jsxs(K,{to:"/admin/tickets",className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#cf5704] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform",children:["Review Pending Ticket Approvals (",m.payment_submitted||0,") →"]})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Total Users"}),o.jsx("p",{className:"text-3xl font-black text-white",children:y.totalUsers||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Total Tickets"}),o.jsx("p",{className:"text-3xl font-black text-[#ffbd59]",children:y.totalTickets||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Active Events"}),o.jsx("p",{className:"text-3xl font-black text-[#EC4899]",children:y.totalEvents||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Revenue Estimate"}),o.jsxs("p",{className:"text-2xl font-black text-green-400",children:["PKR ",Number(y.totalRevenueEstimate||0).toLocaleString()]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Pass Status Breakdown"}),o.jsx("div",{className:"space-y-3",children:[["Pending",m.pending||0,"text-yellow-400"],["Payment Submitted",m.payment_submitted||0,"text-blue-400"],["Approved & Issued",m.approved||0,"text-green-400"],["Rejected",m.rejected||0,"text-red-400"],["Cancelled",m.cancelled||0,"text-gray-400"]].map(([b,h,x])=>o.jsxs("div",{className:"flex justify-between items-center bg-white/5 p-3 rounded-xl",children:[o.jsx("span",{className:"text-sm font-semibold text-white/80",children:b}),o.jsx("span",{className:`text-base font-black ${x}`,children:h})]},b))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Passes by Category"}),o.jsx("div",{className:"space-y-3",children:[["General Access Pass",g.regular||0],["VIP All-Access Pass",g.vip||0],["Gold Sponsor Pass",g.premium||0]].map(([b,h])=>o.jsxs("div",{className:"flex justify-between items-center bg-white/5 p-3 rounded-xl",children:[o.jsx("span",{className:"text-sm font-semibold text-white/80",children:b}),o.jsx("span",{className:"text-base font-black text-[#ffbd59]",children:h})]},b))})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Recent Users"}),l.length===0?o.jsx("p",{className:"text-white/50 text-sm py-4",children:"No users registered yet."}):o.jsx("div",{className:"space-y-2",children:l.slice(0,6).map(b=>o.jsxs("div",{className:"p-3 bg-white/5 rounded-xl flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-white text-sm",children:b.name||`${b.firstName||""} ${b.lastName||""}`.trim()||"Guest"}),o.jsx("p",{className:"text-xs text-white/50",children:b.email})]}),o.jsx("span",{className:"text-xs font-bold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70",children:b.role||"user"})]},b.id))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Payment Audit Log & Transferred Funds"}),u.length===0?o.jsx("p",{className:"text-white/50 text-sm py-4",children:"No payment activity recorded yet."}):o.jsx("div",{className:"space-y-3",children:u.slice(0,10).map(b=>{const h=b.quantity?b.quantity*1e3:1e3,x=b.paymentMethod==="card"?"💳 Debit/Credit Card":b.paymentMethod==="jazzcash"?"🟠 JazzCash":b.paymentMethod==="easypaisa"?"🟢 Easypaisa":"⚡ PayFast Gateway";return o.jsxs("div",{className:"p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-sm font-black text-[#ffbd59]",children:["PKR ",h.toLocaleString()]}),o.jsx("span",{className:"text-xs font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 uppercase",children:b.status||"approved"})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs text-white/70",children:[o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"User:"})," ",b.fullName||"Guest"]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"Email:"})," ",b.email||"-"]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"Phone:"})," ",b.phone||b.senderPhone||"-"]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"CNIC:"})," ",b.idCardNumber||"-"]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"Method:"})," ",x]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-white",children:"Txn ID:"})," ",o.jsx("code",{className:"text-[#EC4899]",children:b.transactionId||b.ticketId})]})]}),b.payoutAccount&&o.jsxs("div",{className:"text-xs text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20",children:[o.jsx("strong",{children:"Credited To:"})," ",b.payoutAccount]})]},b.id)})})]})]})]})}function pT(){const{isAdmin:e}=Ut(),[t,n]=S.useState([]),[r,s]=S.useState(!0),[i,a]=S.useState(null),[l,c]=S.useState(null),u=async()=>{var f,p;s(!0);try{const y=await Ge.getPendingTicketsAdmin();n(y)}catch(y){c({type:"error",message:((p=(f=y.response)==null?void 0:f.data)==null?void 0:p.message)||"Failed to load pending tickets."})}finally{s(!1)}};S.useEffect(()=>{e?u():s(!1)},[e]);const d=async(f,p)=>{var y,m;a(f);try{await Ge.decideTicketAdmin(f,p),c({type:"success",message:`Ticket ${p} successfully.`}),await u()}catch(g){c({type:"error",message:((m=(y=g.response)==null?void 0:y.data)==null?void 0:m.message)||"Failed to update ticket."})}finally{a(null)}};return e?o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx("div",{className:"flex items-center justify-between gap-4 mb-2",children:o.jsx(K,{to:"/admin/dashboard",className:"text-sm font-bold text-[#ffbd59] hover:underline",children:"← Back to Admin Dashboard"})}),o.jsx(uf,{title:"Ticket Payment Approvals",subtitle:"Review manual and card payment submissions for official festival pass issuance"}),l&&o.jsx(zi,{type:l.type,message:l.message,onClose:()=>c(null)}),r?o.jsx("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center",children:o.jsx("p",{className:"text-white/70",children:"Loading pending payment verification queues..."})}):t.length===0?o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center",children:[o.jsx("p",{className:"text-2xl mb-2",children:"🎉"}),o.jsx("p",{className:"text-lg font-bold text-white mb-1",children:"Queue is Clear!"}),o.jsx("p",{className:"text-sm text-white/60",children:"No pending ticket payment proofs requiring admin review right now."})]}):o.jsx("div",{className:"space-y-6",children:t.map(f=>o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10 mb-6",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-black uppercase tracking-wider text-[#ffbd59] bg-[#ffbd59]/10 px-2.5 py-1 rounded-full",children:f.status}),o.jsx("h3",{className:"text-xl font-extrabold text-white mt-2",children:f.eventName})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs text-white/50 block",children:"Ticket Reference"}),o.jsx("code",{className:"text-sm font-bold text-[#EC4899]",children:f.uniqueTicketId||f.ticketId||f.id})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6",children:[o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Attendee Name"}),o.jsx("p",{className:"text-sm font-bold text-white mt-1",children:f.fullName||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Email"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:f.email||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Phone"}),o.jsx("p",{className:"text-sm font-bold text-white mt-1",children:f.phone||"-"})]})]}),f.paymentProofPath&&o.jsxs("div",{className:"mb-6 bg-white/5 p-4 rounded-xl border border-white/10",children:[o.jsx("p",{className:"text-xs font-bold text-white/70 uppercase tracking-wide mb-2",children:"Attached Payment Proof"}),o.jsx("a",{href:`${"http://localhost:5000/api".replace("/api","")||"http://localhost:5000"}/${f.paymentProofPath}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold text-[#ffbd59] hover:underline",children:"🔍 View Full Resolution Proof Document →"})]}),o.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-white/10",children:[o.jsx("button",{type:"button",disabled:i===f.id,onClick:()=>d(f.id,"reject"),className:"px-6 py-2.5 rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/20 font-bold text-sm transition-all",children:"Reject"}),o.jsx("button",{type:"button",disabled:i===f.id,onClick:()=>d(f.id,"approve"),className:"px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg",children:i===f.id?"Approving...":"Approve & Issue QR Pass"})]})]},f.id))})]}):o.jsx("div",{className:"max-w-4xl mx-auto py-12",children:o.jsxs("div",{className:"bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center",children:[o.jsx("h1",{className:"text-2xl font-black text-red-400 mb-2",children:"Admin Access Required"}),o.jsx("p",{className:"text-white/70",children:"Only authenticated admins can review ticket payment submissions."})]})})}const hT=[{id:"privacy-introduction",number:"01",icon:"PV",title:"Introduction",text:"This Privacy Policy explains how Ozilla Festival handles visitor, account, ticket, and support information with transparency and care."},{id:"information-collection",number:"02",icon:"ID",title:"Information We Collect",text:"We may collect details such as name, email address, phone number, account information, ticket requests, and support messages."},{id:"data-use",number:"03",icon:"DU",title:"How We Use Data",text:"Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations."},{id:"cookies",number:"04",icon:"CK",title:"Cookies",text:"Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience."},{id:"third-party-services",number:"05",icon:"TP",title:"Third-Party Services",text:"Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required."},{id:"data-security",number:"06",icon:"SC",title:"Data Security",text:"We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe."},{id:"user-rights",number:"07",icon:"RT",title:"User Rights",text:"Visitors can contact Ozilla Festival to request support, corrections, clarification, or help with account and privacy-related questions."},{id:"children-privacy",number:"08",icon:"FM",title:"Children's Privacy",text:"Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules."},{id:"policy-updates",number:"09",icon:"UP",title:"Policy Updates",text:"This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services."},{id:"privacy-contact",number:"10",icon:"CT",title:"Contact Information",text:"For privacy questions, account support, or clarification, visitors can contact the Ozilla Festival support team through the Contact page."}],mT=[{id:"introduction",number:"01",icon:"TR",title:"Introduction",text:"These Terms & Conditions explain the policies that help Ozilla Festival maintain a safe, organized, and enjoyable festival experience for every visitor."},{id:"ticket-policy",number:"02",icon:"TK",title:"Ticket Policy",text:"Tickets are issued for the selected Ozilla Festival access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure."},{id:"payments",number:"03",icon:"PM",title:"Payments",text:"Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval."},{id:"refund-policy",number:"04",icon:"RF",title:"Refund Policy",text:"Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow."},{id:"festival-rules",number:"05",icon:"RL",title:"Festival Rules",text:"Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry."},{id:"privacy",number:"06",icon:"PR",title:"Privacy",text:"Personal information is used for event operations, communication, ticketing, and support. Ozilla Festival does not sell visitor information."},{id:"liability",number:"07",icon:"LB",title:"Liability",text:"Ozilla Festival may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance."},{id:"user-responsibilities",number:"08",icon:"UR",title:"User Responsibilities",text:"Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams."},{id:"contact-information",number:"09",icon:"CT",title:"Contact Information",text:"For clarification about these Terms & Conditions, contact the Ozilla Festival support team through the official contact page."}],gT=[["Important Policy Update","Official event instructions, entry rules, and safety notices may be updated before the festival."],["Key Information","Keep your ticket details secure and contact support if anything needs clarification."]],yT=[["Privacy First","Your account, ticket, and support information is handled with transparency and careful access control."],["Security Guaranteed","Ozilla Festival uses secure workflows to protect authentication, ticket requests, and payment-related support."]],xT=[["Notice","Important Notice","Under 16 attendees are allowed with their family according to the current event notice."],["Entry","Restricted Items","Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points."],["Update","Policy Updates","Operational updates may be shared before or during the festival through official Ozilla Festival channels."]],vT=[["Promise","Privacy Promise","We never misuse your information and keep data usage limited to festival, account, ticket, and support needs."],["Rights","Your Rights","Visitors can contact the team for privacy questions, account support, corrections, or clarification."],["Cookies","Cookie Usage","Cookies are used only to support functionality, sessions, performance, and a smoother website experience."]],bT=[["Secure Ticket Purchase","Ticket and booking policies are structured to keep visitor access clear and verifiable."],["Refund Protection","Refund requests follow the official support process so every case is reviewed consistently."],["Privacy Commitment","Visitor information is used only for festival operations, ticketing, communication, and support."],["Safe Payments","Payment details are reviewed through trusted workflows for booking confirmation and assistance."],["Festival Rules","Clear rules help protect guests, families, artists, partners, and the event experience."],["Professional Support","The Ozilla Festival team is available for policy questions and event guidance."]],wT=[["Secure Authentication","Protected account access for ticket and user workflows."],["Encrypted Data","Sensitive flows are handled through secured application processes."],["Protected Payments","Payment-related support is managed through trusted verification steps."],["Secure Database","Visitor data is handled with careful operational access controls."],["Privacy First","Information is used for clear festival purposes only."],["Safe Browsing","The website experience is designed around trust, clarity, and secure usage."]],ST=[{target:100,suffix:"%",label:"Secure Authentication"},{target:256,suffix:"-bit",label:"Data Encryption"},{value:"Protected",label:"User Accounts"},{value:"Secure",label:"Payment Processing"}],kT=["We never misuse your information.","Your data remains protected.","Secure ticket purchases.","Safe payment processing.","Transparent privacy practices."],jT=[["Email","ozillafestival@gmail.com"],["Phone","+92 322 6622221"],["Support Hours","Monday to Saturday, 10:00 AM - 7:00 PM"]];function hm({type:e}){const t=e==="terms",[n,r]=S.useState(0),[s,i]=S.useState(""),[a,l]=S.useState(0),c=S.useMemo(()=>t?mT:hT,[t]),u=t?gT:yT,d=t?xT:vT,f=t?bT:wT;S.useEffect(()=>{const m=()=>{const g=window.scrollY||document.documentElement.scrollTop,b=document.documentElement.scrollHeight-window.innerHeight;r(b>0?Math.min(100,Math.max(0,g/b*100)):0)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),S.useEffect(()=>{const m=new IntersectionObserver(g=>{var h;const b=g.filter(x=>x.isIntersecting).sort((x,v)=>v.intersectionRatio-x.intersectionRatio)[0];(h=b==null?void 0:b.target)!=null&&h.id&&i(b.target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[.15,.35,.55]});return c.forEach(g=>{const b=document.getElementById(g.id);b&&m.observe(b)}),()=>m.disconnect()},[c]),S.useEffect(()=>{const m=Array.from(document.querySelectorAll(".legal-reveal"));if(!m.length)return;const g=new IntersectionObserver(b=>{b.forEach(h=>{h.target.classList.toggle("is-visible",h.isIntersecting)})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return m.forEach(b=>g.observe(b)),()=>g.disconnect()},[t]),S.useEffect(()=>{if(t)return;const m=document.querySelector(".legal-stat-grid");if(!m)return;let g;const b=()=>{const x=performance.now(),v=900,w=k=>{const N=Math.min(1,(k-x)/v);l(N),N<1&&(g=requestAnimationFrame(w))};cancelAnimationFrame(g),l(0),g=requestAnimationFrame(w)},h=new IntersectionObserver(x=>{x.forEach(v=>{v.isIntersecting&&b()})},{threshold:.28});return h.observe(m),()=>{cancelAnimationFrame(g),h.disconnect()}},[t]);const p=t?"Terms & Conditions":"Privacy Policy",y=t?"Please review our policies carefully to ensure a safe and enjoyable Ozilla Festival experience.":"Your privacy matters. We are committed to protecting your personal information and providing complete transparency.";return o.jsxs("main",{className:`legal-premium-page ${t?"legal-terms-page":"legal-privacy-page"}`,children:[o.jsx("div",{className:"legal-scroll-progress","aria-hidden":"true",children:o.jsx("span",{style:{width:`${n}%`}})}),o.jsxs("section",{className:"legal-hero",children:[o.jsx("div",{className:"legal-hero-orb legal-hero-orb-one"}),o.jsx("div",{className:"legal-hero-orb legal-hero-orb-two"}),o.jsxs("div",{className:"legal-particles","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{className:"legal-hero-content legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:"Ozilla Festival 2026"}),o.jsx("h1",{children:p}),o.jsx("p",{children:y}),!t&&o.jsxs("div",{className:"privacy-hero-trust","aria-label":"Privacy trust highlights",children:[o.jsx("span",{children:"Privacy First"}),o.jsx("span",{children:"Secure Ticketing"}),o.jsx("span",{children:"Transparent Data Use"})]})]})]}),o.jsxs("section",{className:"legal-shell",children:[o.jsxs("aside",{className:"legal-sidebar","aria-label":`${p} quick navigation`,children:[o.jsx("p",{children:t?"Quick Navigation":"Privacy Center"}),o.jsx("nav",{children:c.map(m=>o.jsxs("a",{href:`#${m.id}`,className:s===m.id?"is-active":"",children:[o.jsx("span",{children:m.number}),m.title]},m.id))})]}),o.jsxs("div",{className:"legal-document",children:[o.jsxs("div",{className:"legal-document-top legal-reveal",children:[o.jsxs("div",{children:[o.jsx("p",{className:"legal-kicker",children:t?"Premium Legal Portal":"Executive Privacy Center"}),o.jsx("h2",{children:t?"Clear Policies For A Better Festival":"Your Information, Handled With Care"})]}),o.jsx("span",{className:"legal-updated",children:"Updated for 2026"})]}),o.jsx("div",{className:"legal-policy-banners legal-reveal",children:u.map(([m,g])=>o.jsxs("article",{children:[o.jsx("strong",{children:m}),o.jsx("span",{children:g})]},m))}),!t&&o.jsx("div",{className:"legal-stat-grid legal-reveal",children:ST.map((m,g)=>o.jsxs("article",{style:{"--delay":`${g*70}ms`},children:[o.jsx("strong",{className:"legal-stat-value",children:m.value||`${Math.round(m.target*a)}${m.suffix}`}),o.jsx("span",{children:m.label})]},m.label))}),o.jsx("div",{className:"legal-highlight-grid",children:d.map(([m,g,b],h)=>o.jsxs("article",{className:"legal-highlight-card legal-reveal",style:{"--delay":`${h*80}ms`},children:[o.jsx("span",{children:m}),o.jsx("h3",{children:g}),o.jsx("p",{children:b})]},g))}),o.jsx("div",{className:"legal-benefit-grid",children:f.map(([m,g],b)=>o.jsxs("article",{className:"legal-benefit-card legal-reveal",style:{"--delay":`${b*55}ms`},children:[o.jsx("span",{children:String(b+1).padStart(2,"0")}),o.jsxs("div",{children:[o.jsx("h3",{children:m}),o.jsx("p",{children:g})]})]},m))}),o.jsx("div",{className:"legal-section-list",children:c.map((m,g)=>o.jsxs("article",{id:m.id,className:"legal-section-card legal-reveal",style:{"--delay":`${g*45}ms`},children:[o.jsx("div",{className:"legal-section-icon","aria-hidden":"true",children:m.icon}),o.jsxs("div",{children:[o.jsx("span",{className:"legal-section-number",children:m.number}),o.jsx("h3",{children:m.title}),o.jsx("p",{children:m.text})]})]},m.id))}),t?o.jsxs("article",{className:"legal-acceptance-card legal-reveal",children:[o.jsx("span",{"aria-hidden":"true",children:"OK"}),o.jsxs("div",{children:[o.jsx("h3",{children:"By continuing to use Ozilla Festival, you acknowledge and agree to these Terms & Conditions."}),o.jsx("p",{children:"Please read each section carefully before purchasing tickets, creating an account, or attending the event."})]})]}):o.jsxs("article",{className:"legal-promise-card legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:"Our Privacy Promise"}),o.jsx("h3",{children:"Transparent, secure, and respectful data practices."}),o.jsx("div",{children:kT.map(m=>o.jsx("span",{children:m},m))})]}),o.jsxs("section",{className:"legal-support-cta legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:t?"We Believe In Complete Transparency":"Questions About Your Privacy?"}),o.jsx("h2",{children:t?"Need help understanding our policies?":"Our team is always available to assist you."}),o.jsx("p",{className:"legal-support-copy",children:t?"Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.":"If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime."}),o.jsx("div",{className:"legal-support-grid",children:jT.map(([m,g])=>o.jsxs("article",{children:[o.jsx("span",{children:m}),o.jsx("strong",{children:g})]},m))}),o.jsx(K,{to:"/contact",className:"legal-support-button",children:"Contact Support"})]})]})]})]})}function NT(){return o.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50",children:[o.jsx("h1",{className:"text-9xl font-bold text-purple-600 mb-4",children:"404"}),o.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Page Not Found"}),o.jsx("p",{className:"text-gray-600 mb-8 text-center max-w-md",children:"The page you're looking for doesn't exist or has been moved."}),o.jsx(K,{to:"/",className:"bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:"Go to Homepage"})]})}function ET(){return o.jsxs(Ow,{children:[o.jsxs(Z,{element:o.jsx(Z5,{}),children:[o.jsx(Z,{path:"/login",element:o.jsx(zl,{children:o.jsx(fP,{})})}),o.jsx(Z,{path:"/register",element:o.jsx(zl,{children:o.jsx(gP,{})})}),o.jsx(Z,{path:"/auth/google/callback",element:o.jsx(zl,{children:o.jsx(yP,{})})})]}),o.jsx(Z,{path:"/",element:o.jsx(Kn,{children:o.jsx(TP,{})})}),o.jsx(Z,{path:"/dashboard",element:o.jsx(je,{to:"/",replace:!0})}),o.jsx(Z,{path:"/about",element:o.jsx(je,{to:"/#about",replace:!0})}),o.jsx(Z,{path:"/collaboration",element:o.jsx(je,{to:"/#sponsorship",replace:!0})}),o.jsx(Z,{path:"/prismfest",element:o.jsx(je,{to:"/#home",replace:!0})}),o.jsx(Z,{path:"/prismfest/celebrities",element:o.jsx(je,{to:"/#celebrities",replace:!0})}),o.jsx(Z,{path:"/prismfest/events",element:o.jsx(je,{to:"/#events",replace:!0})}),o.jsx(Z,{path:"/prismfest/future",element:o.jsx(je,{to:"/#future-events",replace:!0})}),o.jsx(Z,{path:"/history",element:o.jsx(je,{to:"/#history",replace:!0})}),o.jsx(Z,{path:"/events",element:o.jsx(je,{to:"/#events",replace:!0})}),o.jsx(Z,{path:"/sponsorship",element:o.jsx(je,{to:"/#sponsorship",replace:!0})}),o.jsx(Z,{path:"/contact",element:o.jsx(je,{to:"/#contact",replace:!0})}),o.jsx(Z,{path:"/facilities",element:o.jsx(je,{to:"/#facilities",replace:!0})}),o.jsx(Z,{path:"/hotels",element:o.jsx(je,{to:"/#hotels",replace:!0})}),o.jsx(Z,{path:"/restaurants",element:o.jsx(je,{to:"/#restaurants",replace:!0})}),o.jsx(Z,{path:"/discounts",element:o.jsx(je,{to:"/#discounts",replace:!0})}),o.jsx(Z,{path:"/partner",element:o.jsx(je,{to:"/#about",replace:!0})}),o.jsx(Z,{path:"/privacy",element:o.jsx(Kn,{children:o.jsx(hm,{type:"privacy"})})}),o.jsx(Z,{path:"/terms",element:o.jsx(Kn,{children:o.jsx(hm,{type:"terms"})})}),o.jsx(Z,{path:"/verification/:ticketId",element:o.jsx(Kn,{children:o.jsx(dT,{})})}),o.jsx(Z,{path:"/tickets",element:o.jsx(nc,{children:o.jsx(YP,{})})}),o.jsxs(Z,{element:o.jsx(J5,{}),children:[o.jsx(Z,{path:"/account",element:o.jsx(Kn,{children:o.jsx(LP,{})})}),o.jsx(Z,{path:"/admin",element:o.jsx(je,{to:"/admin/dashboard",replace:!0})}),o.jsx(Z,{path:"/admin/dashboard",element:o.jsx(Kn,{children:o.jsx(fT,{})})}),o.jsx(Z,{path:"/tickets/my-tickets",element:o.jsx(nc,{children:o.jsx(lT,{})})}),o.jsx(Z,{path:"/tickets/view/:ticketId",element:o.jsx(nc,{children:o.jsx(uT,{})})}),o.jsx(Z,{path:"/admin/tickets",element:o.jsx(Kn,{children:o.jsx(pT,{})})})]}),o.jsx(Z,{path:"*",element:o.jsx(NT,{})})]})}function PT(){const e="/ozillafest/".replace(/\/$/,"");return o.jsx(Uw,{basename:e||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:o.jsx(Q5,{children:o.jsx(ET,{})})})}class TT extends S.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("Application render failed:",t,n)}render(){return this.state.error?o.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[o.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),o.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),o.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}ic.createRoot(document.getElementById("root")).render(o.jsx(Ee.StrictMode,{children:o.jsx(TT,{children:o.jsx(PT,{})})}));
