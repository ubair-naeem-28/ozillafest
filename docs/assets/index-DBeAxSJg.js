function fv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pm={exports:{}},No={},hm={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),hv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),uf=Symbol.iterator;function jv(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,xm={};function as(e,t,n){this.props=e,this.context=t,this.refs=xm,this.updater=n||mm}as.prototype.isReactComponent={};as.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};as.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ym(){}ym.prototype=as.prototype;function Ru(e,t,n){this.props=e,this.context=t,this.refs=xm,this.updater=n||mm}var Au=Ru.prototype=new ym;Au.constructor=Ru;gm(Au,as.prototype);Au.isPureReactComponent=!0;var df=Array.isArray,vm=Object.prototype.hasOwnProperty,Ou={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)vm.call(t,r)&&!wm.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ki,type:e,key:i,ref:a,props:s,_owner:Ou.current}}function Nv(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function Ev(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ff=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ev(""+e.key):t.toString(36)}function ha(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ki:case hv:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+nl(a,0):r,df(s)?(n="",e!=null&&(n=e.replace(ff,"$&/")+"/"),ha(s,t,n,"",function(u){return u})):s!=null&&(Lu(s)&&(s=Nv(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ff,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",df(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+nl(i,l);a+=ha(i,t,n,c,s)}else if(c=jv(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+nl(i,l++),a+=ha(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bi(e,t,n){if(e==null)return e;var r=[],s=0;return ha(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},ma={transition:null},Tv={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ma,ReactCurrentOwner:Ou};function km(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Bi,forEach:function(e,t,n){Bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bi(e,function(){t++}),t},toArray:function(e){return Bi(e,function(t){return t})||[]},only:function(e){if(!Lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=as;Y.Fragment=mv;Y.Profiler=xv;Y.PureComponent=Ru;Y.StrictMode=gv;Y.Suspense=bv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;Y.act=km;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gm({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ou.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)vm.call(t,c)&&!wm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ki,type:e.type,key:s,ref:i,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:vv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yv,_context:e},e.Consumer=e};Y.createElement=bm;Y.createFactory=function(e){var t=bm.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:wv,render:e}};Y.isValidElement=Lu;Y.lazy=function(e){return{$$typeof:Sv,_payload:{_status:-1,_result:e},_init:Pv}};Y.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ma.transition;ma.transition={};try{e()}finally{ma.transition=t}};Y.unstable_act=km;Y.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Y.useContext=function(e){return Xe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Y.useId=function(){return Xe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Y.useRef=function(e){return Xe.current.useRef(e)};Y.useState=function(e){return Xe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Xe.current.useTransition()};Y.version="18.3.1";hm.exports=Y;var k=hm.exports;const ke=pv(k),Cv=fv({__proto__:null,default:ke},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=k,Av=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Mv=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iv={key:!0,ref:!0,__self:!0,__source:!0};function Sm(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Lv.call(t,r)&&!Iv.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Av,type:e,key:i,ref:a,props:s,_owner:Mv.current}}No.Fragment=Ov;No.jsx=Sm;No.jsxs=Sm;pm.exports=No;var o=pm.exports,tc={},jm={exports:{}},ft={},Nm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var L=T.length;T.push(M);e:for(;0<L;){var B=L-1>>>1,q=T[B];if(0<s(q,M))T[B]=M,T[L]=q,L=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],L=T.pop();if(L!==M){T[0]=L;e:for(var B=0,q=T.length,le=q>>>1;B<le;){var ge=2*(B+1)-1,_e=T[ge],W=ge+1,ee=T[W];if(0>s(_e,L))W<q&&0>s(ee,_e)?(T[B]=ee,T[W]=L,B=W):(T[B]=_e,T[ge]=L,B=ge);else if(W<q&&0>s(ee,L))T[B]=ee,T[W]=L,B=W;else break e}}return M}function s(T,M){var L=T.sortIndex-M.sortIndex;return L!==0?L:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,g=!1,m=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function v(T){if(w=!1,y(T),!m)if(n(c)!==null)m=!0,O(S);else{var M=n(u);M!==null&&U(v,M.startTime-T)}}function S(T,M){m=!1,w&&(w=!1,h(N),N=-1),g=!0;var L=p;try{for(y(M),f=n(c);f!==null&&(!(f.expirationTime>M)||T&&!I());){var B=f.callback;if(typeof B=="function"){f.callback=null,p=f.priorityLevel;var q=B(f.expirationTime<=M);M=e.unstable_now(),typeof q=="function"?f.callback=q:f===n(c)&&r(c),y(M)}else r(c);f=n(c)}if(f!==null)var le=!0;else{var ge=n(u);ge!==null&&U(v,ge.startTime-M),le=!1}return le}finally{f=null,p=L,g=!1}}var E=!1,P=null,N=-1,R=5,C=-1;function I(){return!(e.unstable_now()-C<R)}function V(){if(P!==null){var T=e.unstable_now();C=T;var M=!0;try{M=P(!0,T)}finally{M?$():(E=!1,P=null)}}else E=!1}var $;if(typeof x=="function")$=function(){x(V)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=V,$=function(){J.postMessage(null)}}else $=function(){b(V,0)};function O(T){P=T,E||(E=!0,$())}function U(T,M){N=b(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||g||(m=!0,O(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var L=p;p=M;try{return T()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=p;p=T;try{return M()}finally{p=L}},e.unstable_scheduleCallback=function(T,M,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=L+q,T={id:d++,callback:M,priorityLevel:T,startTime:L,expirationTime:q,sortIndex:-1},L>B?(T.sortIndex=L,t(u,T),n(c)===null&&T===n(u)&&(w?(h(N),N=-1):w=!0,U(v,L-B))):(T.sortIndex=q,t(c,T),m||g||(m=!0,O(S))),T},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(T){var M=p;return function(){var L=p;p=M;try{return T.apply(this,arguments)}finally{p=L}}}})(Em);Nm.exports=Em;var _v=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=k,dt=_v;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pm=new Set,Ys={};function yr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Ys[e]=t,e=0;e<t.length;e++)Pm.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},hf={};function Dv(e){return nc.call(hf,e)?!0:nc.call(pf,e)?!1:zv.test(e)?hf[e]=!0:(pf[e]=!0,!1)}function Vv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bv(e,t,n,r){if(t===null||typeof t>"u"||Vv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Iu);Ie[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Iu);Ie[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Iu);Ie[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function _u(e,t,n,r){var s=Ie.hasOwnProperty(t)?Ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bv(t,n,s,r)&&(n=null),r||s===null?Dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),zu=Symbol.for("react.forward_ref"),sc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),mf=Symbol.iterator;function ys(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,rl;function Ts(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var sl=!1;function il(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ts(e):""}function Uv(e){switch(e.tag){case 5:return Ts(e.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function ac(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case Er:return"Portal";case rc:return"Profiler";case Fu:return"StrictMode";case sc:return"Suspense";case ic:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cm:return(e.displayName||"Context")+".Consumer";case Tm:return(e._context.displayName||"Context")+".Provider";case zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:ac(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return ac(e(t))}catch{}}return null}function $v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hv(e){var t=Am(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $i(e){e._valueTracker||(e._valueTracker=Hv(e))}function Om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Am(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oc(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lm(e,t){t=t.checked,t!=null&&_u(e,"checked",t,!1)}function lc(e,t){Lm(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cc(e,t.type,n):t.hasOwnProperty("defaultValue")&&cc(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cc(e,t,n){(t!=="number"||Fa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cs=Array.isArray;function $r(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Cs(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Mm(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Im(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Im(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hi,_m=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){Wv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Is[t]=Is[e]})});function Fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Is.hasOwnProperty(e)&&Is[e]?(""+t).trim():t+"px"}function zm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Gv=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(e,t){if(t){if(Gv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function pc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mc=null,Hr=null,Wr=null;function wf(e){if(e=Ni(e)){if(typeof mc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ro(t),mc(e.stateNode,e.type,t))}}function Dm(e){Hr?Wr?Wr.push(e):Wr=[e]:Hr=e}function Vm(){if(Hr){var e=Hr,t=Wr;if(Wr=Hr=null,wf(e),t)for(e=0;e<t.length;e++)wf(t[e])}}function Bm(e,t){return e(t)}function Um(){}var al=!1;function $m(e,t,n){if(al)return e(t,n);al=!0;try{return Bm(e,t,n)}finally{al=!1,(Hr!==null||Wr!==null)&&(Um(),Vm())}}function Qs(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var gc=!1;if(on)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){gc=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{gc=!1}function qv(e,t,n,r,s,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var _s=!1,za=null,Da=!1,xc=null,Kv={onError:function(e){_s=!0,za=e}};function Yv(e,t,n,r,s,i,a,l,c){_s=!1,za=null,qv.apply(Kv,arguments)}function Xv(e,t,n,r,s,i,a,l,c){if(Yv.apply(this,arguments),_s){if(_s){var u=za;_s=!1,za=null}else throw Error(A(198));Da||(Da=!0,xc=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(vr(e)!==e)throw Error(A(188))}function Qv(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return bf(s),e;if(i===r)return bf(s),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Wm(e){return e=Qv(e),e!==null?Gm(e):null}function Gm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gm(e);if(t!==null)return t;e=e.sibling}return null}var qm=dt.unstable_scheduleCallback,kf=dt.unstable_cancelCallback,Zv=dt.unstable_shouldYield,Jv=dt.unstable_requestPaint,xe=dt.unstable_now,e1=dt.unstable_getCurrentPriorityLevel,Bu=dt.unstable_ImmediatePriority,Km=dt.unstable_UserBlockingPriority,Va=dt.unstable_NormalPriority,t1=dt.unstable_LowPriority,Ym=dt.unstable_IdlePriority,Eo=null,Kt=null;function n1(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:i1,r1=Math.log,s1=Math.LN2;function i1(e){return e>>>=0,e===0?32:31-(r1(e)/s1|0)|0}var Wi=64,Gi=4194304;function Rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Rs(l):(i&=a,i!==0&&(r=Rs(i)))}else a=n&~s,a!==0?r=Rs(a):i!==0&&(r=Rs(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),s=1<<n,r|=e[n],t&=~s;return r}function a1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Mt(i),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=a1(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function yc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xm(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function l1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Mt(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Uu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var ne=0;function Qm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zm,$u,Jm,eg,tg,vc=!1,qi=[],Cn=null,Rn=null,An=null,Zs=new Map,Js=new Map,Sn=[],c1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Zs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(t.pointerId)}}function ws(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Ni(t),t!==null&&$u(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function u1(e,t,n,r,s){switch(t){case"focusin":return Cn=ws(Cn,e,t,n,r,s),!0;case"dragenter":return Rn=ws(Rn,e,t,n,r,s),!0;case"mouseover":return An=ws(An,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Zs.set(i,ws(Zs.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Js.set(i,ws(Js.get(i)||null,e,t,n,r,s)),!0}return!1}function ng(e){var t=Qn(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=Hm(n),t!==null){e.blockedOn=t,tg(e.priority,function(){Jm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hc=r,n.target.dispatchEvent(r),hc=null}else return t=Ni(n),t!==null&&$u(t),e.blockedOn=n,!1;t.shift()}return!0}function jf(e,t,n){ga(e)&&n.delete(t)}function d1(){vc=!1,Cn!==null&&ga(Cn)&&(Cn=null),Rn!==null&&ga(Rn)&&(Rn=null),An!==null&&ga(An)&&(An=null),Zs.forEach(jf),Js.forEach(jf)}function bs(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,d1)))}function ei(e){function t(s){return bs(s,e)}if(0<qi.length){bs(qi[0],e);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&bs(Cn,e),Rn!==null&&bs(Rn,e),An!==null&&bs(An,e),Zs.forEach(t),Js.forEach(t),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&Sn.shift()}var Gr=fn.ReactCurrentBatchConfig,Ua=!0;function f1(e,t,n,r){var s=ne,i=Gr.transition;Gr.transition=null;try{ne=1,Hu(e,t,n,r)}finally{ne=s,Gr.transition=i}}function p1(e,t,n,r){var s=ne,i=Gr.transition;Gr.transition=null;try{ne=4,Hu(e,t,n,r)}finally{ne=s,Gr.transition=i}}function Hu(e,t,n,r){if(Ua){var s=wc(e,t,n,r);if(s===null)xl(e,t,r,$a,n),Sf(e,r);else if(u1(s,e,t,n,r))r.stopPropagation();else if(Sf(e,r),t&4&&-1<c1.indexOf(e)){for(;s!==null;){var i=Ni(s);if(i!==null&&Zm(i),i=wc(e,t,n,r),i===null&&xl(e,t,r,$a,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var $a=null;function wc(e,t,n,r){if($a=null,e=Vu(r),e=Qn(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e1()){case Bu:return 1;case Km:return 4;case Va:case t1:return 16;case Ym:return 536870912;default:return 16}default:return 16}}var Nn=null,Wu=null,xa=null;function sg(){if(xa)return xa;var e,t=Wu,n=t.length,r,s="value"in Nn?Nn.value:Nn.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return xa=s.slice(e,1<r?1-r:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function Nf(){return!1}function pt(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ki:Nf,this.isPropagationStopped=Nf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=pt(os),ji=pe({},os,{view:0,detail:0}),h1=pt(ji),ll,cl,ks,Po=pe({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(ll=e.screenX-ks.screenX,cl=e.screenY-ks.screenY):cl=ll=0,ks=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Ef=pt(Po),m1=pe({},Po,{dataTransfer:0}),g1=pt(m1),x1=pe({},ji,{relatedTarget:0}),ul=pt(x1),y1=pe({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=pt(y1),w1=pe({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b1=pt(w1),k1=pe({},os,{data:0}),Pf=pt(k1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N1[e])?!!t[e]:!1}function qu(){return E1}var P1=pe({},ji,{key:function(e){if(e.key){var t=S1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T1=pt(P1),C1=pe({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=pt(C1),R1=pe({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),A1=pt(R1),O1=pe({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=pt(O1),M1=pe({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=pt(M1),_1=[9,13,27,32],Ku=on&&"CompositionEvent"in window,Fs=null;on&&"documentMode"in document&&(Fs=document.documentMode);var F1=on&&"TextEvent"in window&&!Fs,ig=on&&(!Ku||Fs&&8<Fs&&11>=Fs),Cf=" ",Rf=!1;function ag(e,t){switch(e){case"keyup":return _1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function z1(e,t){switch(e){case"compositionend":return og(t);case"keypress":return t.which!==32?null:(Rf=!0,Cf);case"textInput":return e=t.data,e===Cf&&Rf?null:e;default:return null}}function D1(e,t){if(Tr)return e==="compositionend"||!Ku&&ag(e,t)?(e=sg(),xa=Wu=Nn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ig&&t.locale!=="ko"?null:t.data;default:return null}}var V1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V1[e.type]:t==="textarea"}function lg(e,t,n,r){Dm(r),t=Ha(t,"onChange"),0<t.length&&(n=new Gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zs=null,ti=null;function B1(e){vg(e,0)}function To(e){var t=Ar(e);if(Om(t))return e}function U1(e,t){if(e==="change")return t}var cg=!1;if(on){var dl;if(on){var fl="oninput"in document;if(!fl){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),fl=typeof Of.oninput=="function"}dl=fl}else dl=!1;cg=dl&&(!document.documentMode||9<document.documentMode)}function Lf(){zs&&(zs.detachEvent("onpropertychange",ug),ti=zs=null)}function ug(e){if(e.propertyName==="value"&&To(ti)){var t=[];lg(t,ti,e,Vu(e)),$m(B1,t)}}function $1(e,t,n){e==="focusin"?(Lf(),zs=t,ti=n,zs.attachEvent("onpropertychange",ug)):e==="focusout"&&Lf()}function H1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(ti)}function W1(e,t){if(e==="click")return To(t)}function G1(e,t){if(e==="input"||e==="change")return To(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:q1;function ni(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!nc.call(t,s)||!Ft(e[s],t[s]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Mf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function dg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fg(){for(var e=window,t=Fa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fa(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K1(e){var t=fg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(r!==null&&Yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=If(n,i);var a=If(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y1=on&&"documentMode"in document&&11>=document.documentMode,Cr=null,bc=null,Ds=null,kc=!1;function _f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||Cr==null||Cr!==Fa(r)||(r=Cr,"selectionStart"in r&&Yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&ni(Ds,r)||(Ds=r,r=Ha(bc,"onSelect"),0<r.length&&(t=new Gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},pl={},pg={};on&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Co(e){if(pl[e])return pl[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pg)return pl[e]=t[n];return e}var hg=Co("animationend"),mg=Co("animationiteration"),gg=Co("animationstart"),xg=Co("transitionend"),yg=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){yg.set(e,t),yr(t,[e])}for(var hl=0;hl<Ff.length;hl++){var ml=Ff[hl],X1=ml.toLowerCase(),Q1=ml[0].toUpperCase()+ml.slice(1);Bn(X1,"on"+Q1)}Bn(hg,"onAnimationEnd");Bn(mg,"onAnimationIteration");Bn(gg,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(xg,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function zf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xv(r,t,void 0,e),e.currentTarget=null}function vg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;zf(s,l,u),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;zf(s,l,u),i=c}}}if(Da)throw e=xc,Da=!1,xc=null,e}function ae(e,t){var n=t[Pc];n===void 0&&(n=t[Pc]=new Set);var r=e+"__bubble";n.has(r)||(wg(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),wg(n,e,r,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[Xi]){e[Xi]=!0,Pm.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,gl("selectionchange",!1,t))}}function wg(e,t,n,r){switch(rg(t)){case 1:var s=f1;break;case 4:s=p1;break;default:s=Hu}n=s.bind(null,t,n,e),s=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Qn(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}$m(function(){var u=i,d=Vu(n),f=[];e:{var p=yg.get(e);if(p!==void 0){var g=Gu,m=e;switch(e){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":g=T1;break;case"focusin":m="focus",g=ul;break;case"focusout":m="blur",g=ul;break;case"beforeblur":case"afterblur":g=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=A1;break;case hg:case mg:case gg:g=v1;break;case xg:g=L1;break;case"scroll":g=h1;break;case"wheel":g=I1;break;case"copy":case"cut":case"paste":g=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Tf}var w=(t&4)!==0,b=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var x=u,y;x!==null;){y=x;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,h!==null&&(v=Qs(x,h),v!=null&&w.push(si(x,v,y)))),b)break;x=x.return}0<w.length&&(p=new g(p,m,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==hc&&(m=n.relatedTarget||n.fromElement)&&(Qn(m)||m[ln]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?Qn(m):null,m!==null&&(b=vr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(w=Ef,v="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=Tf,v="onPointerLeave",h="onPointerEnter",x="pointer"),b=g==null?p:Ar(g),y=m==null?p:Ar(m),p=new w(v,x+"leave",g,n,d),p.target=b,p.relatedTarget=y,v=null,Qn(d)===u&&(w=new w(h,x+"enter",m,n,d),w.target=y,w.relatedTarget=b,v=w),b=v,g&&m)t:{for(w=g,h=m,x=0,y=w;y;y=wr(y))x++;for(y=0,v=h;v;v=wr(v))y++;for(;0<x-y;)w=wr(w),x--;for(;0<y-x;)h=wr(h),y--;for(;x--;){if(w===h||h!==null&&w===h.alternate)break t;w=wr(w),h=wr(h)}w=null}else w=null;g!==null&&Df(f,p,g,w,!1),m!==null&&b!==null&&Df(f,b,m,w,!0)}}e:{if(p=u?Ar(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=U1;else if(Af(p))if(cg)S=G1;else{S=H1;var E=$1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=W1);if(S&&(S=S(e,u))){lg(f,S,n,d);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&cc(p,"number",p.value)}switch(E=u?Ar(u):window,e){case"focusin":(Af(E)||E.contentEditable==="true")&&(Cr=E,bc=u,Ds=null);break;case"focusout":Ds=bc=Cr=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,_f(f,n,d);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":_f(f,n,d)}var P;if(Ku)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Tr?ag(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ig&&n.locale!=="ko"&&(Tr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Tr&&(P=sg()):(Nn=d,Wu="value"in Nn?Nn.value:Nn.textContent,Tr=!0)),E=Ha(u,N),0<E.length&&(N=new Pf(N,e,null,n,d),f.push({event:N,listeners:E}),P?N.data=P:(P=og(n),P!==null&&(N.data=P)))),(P=F1?z1(e,n):D1(e,n))&&(u=Ha(u,"onBeforeInput"),0<u.length&&(d=new Pf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}vg(f,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Qs(e,n),i!=null&&r.unshift(si(e,i,s)),i=Qs(e,t),i!=null&&r.push(si(e,i,s))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=Qs(n,i),c!=null&&a.unshift(si(n,c,l))):s||(c=Qs(n,i),c!=null&&a.push(si(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var J1=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(J1,`
`).replace(ew,"")}function Qi(e,t,n){if(t=Vf(t),Vf(e)!==t&&n)throw Error(A(425))}function Wa(){}var Sc=null,jc=null;function Nc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,tw=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,nw=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(rw)}:Ec;function rw(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ei(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ls=Math.random().toString(36).slice(2),qt="__reactFiber$"+ls,ii="__reactProps$"+ls,ln="__reactContainer$"+ls,Pc="__reactEvents$"+ls,sw="__reactListeners$"+ls,iw="__reactHandles$"+ls;function Qn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uf(e);e!==null;){if(n=e[qt])return n;e=Uf(e)}return t}e=n,n=e.parentNode}return null}function Ni(e){return e=e[qt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ro(e){return e[ii]||null}var Tc=[],Or=-1;function Un(e){return{current:e}}function oe(e){0>Or||(e.current=Tc[Or],Tc[Or]=null,Or--)}function ie(e,t){Or++,Tc[Or]=e.current,e.current=t}var Dn={},He=Un(Dn),nt=Un(!1),lr=Dn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function rt(e){return e=e.childContextTypes,e!=null}function Ga(){oe(nt),oe(He)}function $f(e,t,n){if(He.current!==Dn)throw Error(A(168));ie(He,t),ie(nt,n)}function bg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(A(108,$v(e)||"Unknown",s));return pe({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,lr=He.current,ie(He,e),ie(nt,nt.current),!0}function Hf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=bg(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,oe(nt),oe(He),ie(He,e)):oe(nt),ie(nt,n)}var nn=null,Ao=!1,vl=!1;function kg(e){nn===null?nn=[e]:nn.push(e)}function aw(e){Ao=!0,kg(e)}function $n(){if(!vl&&nn!==null){vl=!0;var e=0,t=ne;try{var n=nn;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Ao=!1}catch(s){throw nn!==null&&(nn=nn.slice(e+1)),qm(Bu,$n),s}finally{ne=t,vl=!1}}return null}var Lr=[],Mr=0,Ka=null,Ya=0,mt=[],gt=0,cr=null,rn=1,sn="";function Kn(e,t){Lr[Mr++]=Ya,Lr[Mr++]=Ka,Ka=e,Ya=t}function Sg(e,t,n){mt[gt++]=rn,mt[gt++]=sn,mt[gt++]=cr,cr=e;var r=rn;e=sn;var s=32-Mt(r)-1;r&=~(1<<s),n+=1;var i=32-Mt(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,rn=1<<32-Mt(t)+s|n<<s|r,sn=i+e}else rn=1<<i|n<<s|r,sn=e}function Xu(e){e.return!==null&&(Kn(e,1),Sg(e,1,0))}function Qu(e){for(;e===Ka;)Ka=Lr[--Mr],Lr[Mr]=null,Ya=Lr[--Mr],Lr[Mr]=null;for(;e===cr;)cr=mt[--gt],mt[gt]=null,sn=mt[--gt],mt[gt]=null,rn=mt[--gt],mt[gt]=null}var ct=null,lt=null,ce=!1,Lt=null;function jg(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,lt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:rn,overflow:sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,lt=null,!0):!1;default:return!1}}function Cc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rc(e){if(ce){var t=lt;if(t){var n=t;if(!Wf(e,t)){if(Cc(e))throw Error(A(418));t=On(n.nextSibling);var r=ct;t&&Wf(e,t)?jg(r,n):(e.flags=e.flags&-4097|2,ce=!1,ct=e)}}else{if(Cc(e))throw Error(A(418));e.flags=e.flags&-4097|2,ce=!1,ct=e}}}function Gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Zi(e){if(e!==ct)return!1;if(!ce)return Gf(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nc(e.type,e.memoizedProps)),t&&(t=lt)){if(Cc(e))throw Ng(),Error(A(418));for(;t;)jg(e,t),t=On(t.nextSibling)}if(Gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ct?On(e.stateNode.nextSibling):null;return!0}function Ng(){for(var e=lt;e;)e=On(e.nextSibling)}function Qr(){lt=ct=null,ce=!1}function Zu(e){Lt===null?Lt=[e]:Lt.push(e)}var ow=fn.ReactCurrentBatchConfig;function Ss(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qf(e){var t=e._init;return t(e._payload)}function Eg(e){function t(h,x){if(e){var y=h.deletions;y===null?(h.deletions=[x],h.flags|=16):y.push(x)}}function n(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function s(h,x){return h=_n(h,x),h.index=0,h.sibling=null,h}function i(h,x,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<x?(h.flags|=2,x):y):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,x,y,v){return x===null||x.tag!==6?(x=El(y,h.mode,v),x.return=h,x):(x=s(x,y),x.return=h,x)}function c(h,x,y,v){var S=y.type;return S===Pr?d(h,x,y.props.children,v,y.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&qf(S)===x.type)?(v=s(x,y.props),v.ref=Ss(h,x,y),v.return=h,v):(v=Na(y.type,y.key,y.props,null,h.mode,v),v.ref=Ss(h,x,y),v.return=h,v)}function u(h,x,y,v){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Pl(y,h.mode,v),x.return=h,x):(x=s(x,y.children||[]),x.return=h,x)}function d(h,x,y,v,S){return x===null||x.tag!==7?(x=sr(y,h.mode,v,S),x.return=h,x):(x=s(x,y),x.return=h,x)}function f(h,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=El(""+x,h.mode,y),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ui:return y=Na(x.type,x.key,x.props,null,h.mode,y),y.ref=Ss(h,null,x),y.return=h,y;case Er:return x=Pl(x,h.mode,y),x.return=h,x;case bn:var v=x._init;return f(h,v(x._payload),y)}if(Cs(x)||ys(x))return x=sr(x,h.mode,y,null),x.return=h,x;Ji(h,x)}return null}function p(h,x,y,v){var S=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:l(h,x,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ui:return y.key===S?c(h,x,y,v):null;case Er:return y.key===S?u(h,x,y,v):null;case bn:return S=y._init,p(h,x,S(y._payload),v)}if(Cs(y)||ys(y))return S!==null?null:d(h,x,y,v,null);Ji(h,y)}return null}function g(h,x,y,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(y)||null,l(x,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ui:return h=h.get(v.key===null?y:v.key)||null,c(x,h,v,S);case Er:return h=h.get(v.key===null?y:v.key)||null,u(x,h,v,S);case bn:var E=v._init;return g(h,x,y,E(v._payload),S)}if(Cs(v)||ys(v))return h=h.get(y)||null,d(x,h,v,S,null);Ji(x,v)}return null}function m(h,x,y,v){for(var S=null,E=null,P=x,N=x=0,R=null;P!==null&&N<y.length;N++){P.index>N?(R=P,P=null):R=P.sibling;var C=p(h,P,y[N],v);if(C===null){P===null&&(P=R);break}e&&P&&C.alternate===null&&t(h,P),x=i(C,x,N),E===null?S=C:E.sibling=C,E=C,P=R}if(N===y.length)return n(h,P),ce&&Kn(h,N),S;if(P===null){for(;N<y.length;N++)P=f(h,y[N],v),P!==null&&(x=i(P,x,N),E===null?S=P:E.sibling=P,E=P);return ce&&Kn(h,N),S}for(P=r(h,P);N<y.length;N++)R=g(P,h,N,y[N],v),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?N:R.key),x=i(R,x,N),E===null?S=R:E.sibling=R,E=R);return e&&P.forEach(function(I){return t(h,I)}),ce&&Kn(h,N),S}function w(h,x,y,v){var S=ys(y);if(typeof S!="function")throw Error(A(150));if(y=S.call(y),y==null)throw Error(A(151));for(var E=S=null,P=x,N=x=0,R=null,C=y.next();P!==null&&!C.done;N++,C=y.next()){P.index>N?(R=P,P=null):R=P.sibling;var I=p(h,P,C.value,v);if(I===null){P===null&&(P=R);break}e&&P&&I.alternate===null&&t(h,P),x=i(I,x,N),E===null?S=I:E.sibling=I,E=I,P=R}if(C.done)return n(h,P),ce&&Kn(h,N),S;if(P===null){for(;!C.done;N++,C=y.next())C=f(h,C.value,v),C!==null&&(x=i(C,x,N),E===null?S=C:E.sibling=C,E=C);return ce&&Kn(h,N),S}for(P=r(h,P);!C.done;N++,C=y.next())C=g(P,h,N,C.value,v),C!==null&&(e&&C.alternate!==null&&P.delete(C.key===null?N:C.key),x=i(C,x,N),E===null?S=C:E.sibling=C,E=C);return e&&P.forEach(function(V){return t(h,V)}),ce&&Kn(h,N),S}function b(h,x,y,v){if(typeof y=="object"&&y!==null&&y.type===Pr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ui:e:{for(var S=y.key,E=x;E!==null;){if(E.key===S){if(S=y.type,S===Pr){if(E.tag===7){n(h,E.sibling),x=s(E,y.props.children),x.return=h,h=x;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&qf(S)===E.type){n(h,E.sibling),x=s(E,y.props),x.ref=Ss(h,E,y),x.return=h,h=x;break e}n(h,E);break}else t(h,E);E=E.sibling}y.type===Pr?(x=sr(y.props.children,h.mode,v,y.key),x.return=h,h=x):(v=Na(y.type,y.key,y.props,null,h.mode,v),v.ref=Ss(h,x,y),v.return=h,h=v)}return a(h);case Er:e:{for(E=y.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(h,x.sibling),x=s(x,y.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else t(h,x);x=x.sibling}x=Pl(y,h.mode,v),x.return=h,h=x}return a(h);case bn:return E=y._init,b(h,x,E(y._payload),v)}if(Cs(y))return m(h,x,y,v);if(ys(y))return w(h,x,y,v);Ji(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(h,x.sibling),x=s(x,y),x.return=h,h=x):(n(h,x),x=El(y,h.mode,v),x.return=h,h=x),a(h)):n(h,x)}return b}var Zr=Eg(!0),Pg=Eg(!1),Xa=Un(null),Qa=null,Ir=null,Ju=null;function ed(){Ju=Ir=Qa=null}function td(e){var t=Xa.current;oe(Xa),e._currentValue=t}function Ac(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qr(e,t){Qa=e,Ju=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Ju!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Qa===null)throw Error(A(308));Ir=e,Qa.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Zn=null;function nd(e){Zn===null?Zn=[e]:Zn.push(e)}function Tg(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,nd(t)):(n.next=s.next,s.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kn=!1;function rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,cn(e,n)}return s=r.interleaved,s===null?(t.next=t,nd(r)):(t.next=s.next,s.next=t),r.interleaved=t,cn(e,n)}function va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uu(e,n)}}function Kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var s=e.updateQueue;kn=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=s.baseState;a=0,d=u=c=null,l=i;do{var p=l.lane,g=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,w=l;switch(p=t,g=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){f=m.call(g,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,p=typeof m=="function"?m.call(g,f,p):m,p==null)break e;f=pe({},f,p);break e;case 2:kn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,c=f):d=d.next=g,a|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(d===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);dr|=a,e.lanes=a,e.memoizedState=f}}function Yf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(A(191,s));s.call(r)}}}var Ei={},Yt=Un(Ei),ai=Un(Ei),oi=Un(Ei);function Jn(e){if(e===Ei)throw Error(A(174));return e}function sd(e,t){switch(ie(oi,t),ie(ai,e),ie(Yt,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dc(t,e)}oe(Yt),ie(Yt,t)}function Jr(){oe(Yt),oe(ai),oe(oi)}function Rg(e){Jn(oi.current);var t=Jn(Yt.current),n=dc(t,e.type);t!==n&&(ie(ai,e),ie(Yt,n))}function id(e){ai.current===e&&(oe(Yt),oe(ai))}var ue=Un(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function ad(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var wa=fn.ReactCurrentDispatcher,bl=fn.ReactCurrentBatchConfig,ur=0,de=null,Se=null,Te=null,eo=!1,Vs=!1,li=0,lw=0;function Fe(){throw Error(A(321))}function od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function ld(e,t,n,r,s,i){if(ur=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?fw:pw,e=n(r,s),Vs){i=0;do{if(Vs=!1,li=0,25<=i)throw Error(A(301));i+=1,Te=Se=null,t.updateQueue=null,wa.current=hw,e=n(r,s)}while(Vs)}if(wa.current=to,t=Se!==null&&Se.next!==null,ur=0,Te=Se=de=null,eo=!1,t)throw Error(A(300));return e}function cd(){var e=li!==0;return li=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?de.memoizedState=Te=e:Te=Te.next=e,Te}function jt(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?de.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(A(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?de.memoizedState=Te=e:Te=Te.next=e}return Te}function ci(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Se,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,c=null,u=i;do{var d=u.lane;if((ur&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,de.lanes|=d,dr|=d}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=l,Ft(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,de.lanes|=i,dr|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Ft(i,t.memoizedState)||(tt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ag(){}function Og(e,t){var n=de,r=jt(),s=t(),i=!Ft(r.memoizedState,s);if(i&&(r.memoizedState=s,tt=!0),r=r.queue,ud(Ig.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ui(9,Mg.bind(null,n,r,s,t),void 0,null),Ce===null)throw Error(A(349));ur&30||Lg(n,t,s)}return s}function Lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mg(e,t,n,r){t.value=n,t.getSnapshot=r,_g(t)&&Fg(e)}function Ig(e,t,n){return n(function(){_g(t)&&Fg(e)})}function _g(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function Fg(e){var t=cn(e,1);t!==null&&It(t,e,1,-1)}function Xf(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=dw.bind(null,de,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zg(){return jt().memoizedState}function ba(e,t,n,r){var s=Ht();de.flags|=e,s.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var s=jt();r=r===void 0?null:r;var i=void 0;if(Se!==null){var a=Se.memoizedState;if(i=a.destroy,r!==null&&od(r,a.deps)){s.memoizedState=ui(t,n,i,r);return}}de.flags|=e,s.memoizedState=ui(1|t,n,i,r)}function Qf(e,t){return ba(8390656,8,e,t)}function ud(e,t){return Oo(2048,8,e,t)}function Dg(e,t){return Oo(4,2,e,t)}function Vg(e,t){return Oo(4,4,e,t)}function Bg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ug(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Bg.bind(null,t,e),n)}function dd(){}function $g(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hg(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wg(e,t,n){return ur&21?(Ft(n,t)||(n=Xm(),de.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function cw(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{ne=n,bl.transition=r}}function Gg(){return jt().memoizedState}function uw(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qg(e))Kg(t,n);else if(n=Tg(e,t,n,r),n!==null){var s=Ye();It(n,e,r,s),Yg(n,t,r)}}function dw(e,t,n){var r=In(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qg(e))Kg(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,Ft(l,a)){var c=t.interleaved;c===null?(s.next=s,nd(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Tg(e,t,s,r),n!==null&&(s=Ye(),It(n,e,r,s),Yg(n,t,r))}}function qg(e){var t=e.alternate;return e===de||t!==null&&t===de}function Kg(e,t){Vs=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uu(e,n)}}var to={readContext:St,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},fw={readContext:St,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Qf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ba(4194308,4,Bg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uw.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Xf,useDebugValue:dd,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Xf(!1),t=e[0];return e=cw.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,s=Ht();if(ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ce===null)throw Error(A(349));ur&30||Lg(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Qf(Ig.bind(null,r,i,e),[e]),r.flags|=2048,ui(9,Mg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ce.identifierPrefix;if(ce){var n=sn,r=rn;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:St,useCallback:$g,useContext:St,useEffect:ud,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Vg,useMemo:Hg,useReducer:kl,useRef:zg,useState:function(){return kl(ci)},useDebugValue:dd,useDeferredValue:function(e){var t=jt();return Wg(t,Se.memoizedState,e)},useTransition:function(){var e=kl(ci)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Og,useId:Gg,unstable_isNewReconciler:!1},hw={readContext:St,useCallback:$g,useContext:St,useEffect:ud,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Vg,useMemo:Hg,useReducer:Sl,useRef:zg,useState:function(){return Sl(ci)},useDebugValue:dd,useDeferredValue:function(e){var t=jt();return Se===null?t.memoizedState=e:Wg(t,Se.memoizedState,e)},useTransition:function(){var e=Sl(ci)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Ag,useSyncExternalStore:Og,useId:Gg,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),s=In(e),i=an(r,s);i.payload=t,n!=null&&(i.callback=n),t=Ln(e,i,s),t!==null&&(It(t,e,s,r),va(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),s=In(e),i=an(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ln(e,i,s),t!==null&&(It(t,e,s,r),va(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=In(e),s=an(n,r);s.tag=2,t!=null&&(s.callback=t),t=Ln(e,s,r),t!==null&&(It(t,e,r,n),va(t,e,r))}};function Zf(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(s,i):!0}function Xg(e,t,n){var r=!1,s=Dn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(s=rt(t)?lr:He.current,r=t.contextTypes,i=(r=r!=null)?Xr(e,s):Dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Jf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function Lc(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},rd(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=St(i):(i=rt(t)?lr:He.current,s.context=Xr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oc(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Lo.enqueueReplaceState(s,s.state,null),Za(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function es(e,t){try{var n="",r=t;do n+=Uv(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mw=typeof WeakMap=="function"?WeakMap:Map;function Qg(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Hc=r),Mc(e,t)},n}function Zg(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Mc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Mc(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ep(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mw;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Cw.bind(null,e,t,n),t.then(e,e))}function tp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function np(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var gw=fn.ReactCurrentOwner,tt=!1;function Ge(e,t,n,r){t.child=e===null?Pg(t,null,n,r):Zr(t,e.child,n,r)}function rp(e,t,n,r,s){n=n.render;var i=t.ref;return qr(t,s),r=ld(e,t,n,r,i,s),n=cd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,un(e,t,s)):(ce&&n&&Xu(t),t.flags|=1,Ge(e,t,r,s),t.child)}function sp(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!vd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jg(e,t,i,r,s)):(e=Na(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(a,r)&&e.ref===t.ref)return un(e,t,s)}return t.flags|=1,e=_n(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jg(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(ni(i,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,un(e,t,s)}return Ic(e,t,n,r,s)}function e0(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Fr,ot),ot|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Fr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(Fr,ot),ot|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(Fr,ot),ot|=r;return Ge(e,t,s,n),t.child}function t0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ic(e,t,n,r,s){var i=rt(n)?lr:He.current;return i=Xr(t,i),qr(t,s),n=ld(e,t,n,r,i,s),r=cd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,un(e,t,s)):(ce&&r&&Xu(t),t.flags|=1,Ge(e,t,n,s),t.child)}function ip(e,t,n,r,s){if(rt(n)){var i=!0;qa(t)}else i=!1;if(qr(t,s),t.stateNode===null)ka(e,t),Xg(t,n,r),Lc(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=rt(n)?lr:He.current,u=Xr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Jf(t,a,r,u),kn=!1;var p=t.memoizedState;a.state=p,Za(t,r,a,s),c=t.memoizedState,l!==r||p!==c||nt.current||kn?(typeof d=="function"&&(Oc(t,n,d,r),c=t.memoizedState),(l=kn||Zf(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:At(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=St(c):(c=rt(n)?lr:He.current,c=Xr(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Jf(t,a,r,c),kn=!1,p=t.memoizedState,a.state=p,Za(t,r,a,s);var m=t.memoizedState;l!==f||p!==m||nt.current||kn?(typeof g=="function"&&(Oc(t,n,g,r),m=t.memoizedState),(u=kn||Zf(t,n,u,r,p,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,i,s)}function _c(e,t,n,r,s,i){t0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Hf(t,n,!1),un(e,t,i);r=t.stateNode,gw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zr(t,e.child,null,i),t.child=Zr(t,null,l,i)):Ge(e,t,l,i),t.memoizedState=r.state,s&&Hf(t,n,!0),t.child}function n0(e){var t=e.stateNode;t.pendingContext?$f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$f(e,t.context,!1),sd(e,t.containerInfo)}function ap(e,t,n,r,s){return Qr(),Zu(s),t.flags|=256,Ge(e,t,n,r),t.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function zc(e){return{baseLanes:e,cachePool:null,transitions:null}}function r0(e,t,n){var r=t.pendingProps,s=ue.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ie(ue,s&1),e===null)return Rc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_o(a,r,0,null),e=sr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zc(n),t.memoizedState=Fc,e):fd(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return xw(e,t,a,r,l,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=_n(l,i):(i=sr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?zc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Fc,r}return i=e.child,e=i.sibling,r=_n(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fd(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ea(e,t,n,r){return r!==null&&Zu(r),Zr(t,e.child,null,n),e=fd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xw(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(A(422))),ea(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=_o({mode:"visible",children:r.children},s,0,null),i=sr(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zr(t,e.child,null,a),t.child.memoizedState=zc(a),t.memoizedState=Fc,i);if(!(t.mode&1))return ea(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(A(419)),r=jl(i,r,void 0),ea(e,t,a,r)}if(l=(a&e.childLanes)!==0,tt||l){if(r=Ce,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cn(e,s),It(r,e,s,-1))}return yd(),r=jl(Error(A(421))),ea(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Rw.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,lt=On(s.nextSibling),ct=t,ce=!0,Lt=null,e!==null&&(mt[gt++]=rn,mt[gt++]=sn,mt[gt++]=cr,rn=e.id,sn=e.overflow,cr=t),t=fd(t,r.children),t.flags|=4096,t)}function op(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ac(e.return,t,n)}function Nl(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function s0(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,n,t);else if(e.tag===19)op(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Nl(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ja(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Nl(t,!0,n,null,i);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yw(e,t,n){switch(t.tag){case 3:n0(t),Qr();break;case 5:Rg(t);break;case 1:rt(t.type)&&qa(t);break;case 4:sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ie(Xa,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?r0(e,t,n):(ie(ue,ue.current&1),e=un(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return s0(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,e0(e,t,n)}return un(e,t,n)}var i0,Dc,a0,o0;i0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dc=function(){};a0=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Jn(Yt.current);var i=null;switch(n){case"input":s=oc(e,s),r=oc(e,r),i=[];break;case"select":s=pe({},s,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":s=uc(e,s),r=uc(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wa)}fc(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ys.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ae("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};o0=function(e,t,n,r){n!==r&&(t.flags|=4)};function js(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vw(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return rt(t.type)&&Ga(),ze(t),null;case 3:return r=t.stateNode,Jr(),oe(nt),oe(He),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(qc(Lt),Lt=null))),Dc(e,t),ze(t),null;case 5:id(t);var s=Jn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)a0(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ze(t),null}if(e=Jn(Yt.current),Zi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qt]=t,r[ii]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(s=0;s<As.length;s++)ae(As[s],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":gf(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":yf(r,i),ae("invalid",r)}fc(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Qi(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Qi(r.textContent,l,e),s=["children",""+l]):Ys.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":$i(r),xf(r,i,!0);break;case"textarea":$i(r),vf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wa)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Im(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[ii]=r,i0(e,t,!1,!1),t.stateNode=e;e:{switch(a=pc(n,r),n){case"dialog":ae("cancel",e),ae("close",e),s=r;break;case"iframe":case"object":case"embed":ae("load",e),s=r;break;case"video":case"audio":for(s=0;s<As.length;s++)ae(As[s],e);s=r;break;case"source":ae("error",e),s=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),s=r;break;case"details":ae("toggle",e),s=r;break;case"input":gf(e,r),s=oc(e,r),ae("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":yf(e,r),s=uc(e,r),ae("invalid",e);break;default:s=r}fc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?zm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_m(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xs(e,c):typeof c=="number"&&Xs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ys.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ae("scroll",e):c!=null&&_u(e,i,c,a))}switch(n){case"input":$i(e),xf(e,r,!1);break;case"textarea":$i(e),vf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$r(e,!!r.multiple,i,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)o0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Jn(oi.current),Jn(Yt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return ze(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&lt!==null&&t.mode&1&&!(t.flags&128))Ng(),Qr(),t.flags|=98560,i=!1;else if(i=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[qt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else Lt!==null&&(qc(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?je===0&&(je=3):yd())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Jr(),Dc(e,t),e===null&&ri(t.stateNode.containerInfo),ze(t),null;case 10:return td(t.type._context),ze(t),null;case 17:return rt(t.type)&&Ga(),ze(t),null;case 19:if(oe(ue),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)js(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ja(e),a!==null){for(t.flags|=128,js(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>ts&&(t.flags|=128,r=!0,js(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ja(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),js(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ce)return ze(t),null}else 2*xe()-i.renderingStartTime>ts&&n!==1073741824&&(t.flags|=128,r=!0,js(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return xd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function ww(e,t){switch(Qu(t),t.tag){case 1:return rt(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),oe(nt),oe(He),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return id(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return Jr(),null;case 10:return td(t.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ta=!1,Be=!1,bw=typeof WeakSet=="function"?WeakSet:Set,F=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Vc(e,t,n){try{n()}catch(r){me(e,t,r)}}var lp=!1;function kw(e,t){if(Sc=Ua,e=fg(),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||s!==0&&f.nodeType!==3||(l=a+s),f!==i||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===s&&(l=a),p===i&&++d===r&&(c=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:e,selectionRange:n},Ua=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,b=m.memoizedState,h=t.stateNode,x=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:At(t.type,w),b);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){me(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return m=lp,lp=!1,m}function Bs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Vc(t,n,i)}s=s.next}while(s!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function l0(e){var t=e.alternate;t!==null&&(e.alternate=null,l0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[ii],delete t[Pc],delete t[sw],delete t[iw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c0(e){return e.tag===5||e.tag===3||e.tag===4}function cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wa));else if(r!==4&&(e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}var Ae=null,Ot=!1;function gn(e,t,n){for(n=n.child;n!==null;)u0(e,t,n),n=n.sibling}function u0(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:Be||_r(n,t);case 6:var r=Ae,s=Ot;Ae=null,gn(e,t,n),Ae=r,Ot=s,Ae!==null&&(Ot?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Ot?(e=Ae,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),ei(e)):yl(Ae,n.stateNode));break;case 4:r=Ae,s=Ot,Ae=n.stateNode.containerInfo,Ot=!0,gn(e,t,n),Ae=r,Ot=s;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Vc(n,t,a),s=s.next}while(s!==r)}gn(e,t,n);break;case 1:if(!Be&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,t,l)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,gn(e,t,n),Be=r):gn(e,t,n);break;default:gn(e,t,n)}}function up(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bw),t.forEach(function(r){var s=Aw.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,Ot=!1;break e;case 3:Ae=l.stateNode.containerInfo,Ot=!0;break e;case 4:Ae=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Ae===null)throw Error(A(160));u0(i,a,s),Ae=null,Ot=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){me(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)d0(t,e),t=t.sibling}function d0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Bt(e),r&4){try{Bs(3,e,e.return),Mo(3,e)}catch(w){me(e,e.return,w)}try{Bs(5,e,e.return)}catch(w){me(e,e.return,w)}}break;case 1:Nt(t,e),Bt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(Nt(t,e),Bt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var s=e.stateNode;try{Xs(s,"")}catch(w){me(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Lm(s,i),pc(l,a);var u=pc(l,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?zm(s,f):d==="dangerouslySetInnerHTML"?_m(s,f):d==="children"?Xs(s,f):_u(s,d,f,u)}switch(l){case"input":lc(s,i);break;case"textarea":Mm(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?$r(s,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?$r(s,!!i.multiple,i.defaultValue,!0):$r(s,!!i.multiple,i.multiple?[]:"",!1))}s[ii]=i}catch(w){me(e,e.return,w)}}break;case 6:if(Nt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(w){me(e,e.return,w)}}break;case 3:if(Nt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(w){me(e,e.return,w)}break;case 4:Nt(t,e),Bt(e);break;case 13:Nt(t,e),Bt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(md=xe())),r&4&&up(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,Nt(t,e),Be=u):Nt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(f=F=d;F!==null;){switch(p=F,g=p.child,p.tag){case 0:case 11:case 14:case 15:Bs(4,p,p.return);break;case 1:_r(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:_r(p,p.return);break;case 22:if(p.memoizedState!==null){fp(f);continue}}g!==null?(g.return=p,F=g):fp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Fm("display",a))}catch(w){me(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){me(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),Bt(e),r&4&&up(e);break;case 21:break;default:Nt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xs(s,""),r.flags&=-33);var i=cp(e);$c(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=cp(e);Uc(e,l,a);break;default:throw Error(A(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sw(e,t,n){F=e,f0(e)}function f0(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var s=F,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||ta;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Be;l=ta;var u=Be;if(ta=a,(Be=c)&&!u)for(F=s;F!==null;)a=F,c=a.child,a.tag===22&&a.memoizedState!==null?pp(s):c!==null?(c.return=a,F=c):pp(s);for(;i!==null;)F=i,f0(i),i=i.sibling;F=s,ta=l,Be=u}dp(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,F=i):dp(e)}}function dp(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Be||t.flags&512&&Bc(t)}catch(p){me(t,t.return,p)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function fp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function pp(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(c){me(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){me(t,s,c)}}var i=t.return;try{Bc(t)}catch(c){me(t,i,c)}break;case 5:var a=t.return;try{Bc(t)}catch(c){me(t,a,c)}}}catch(c){me(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var jw=Math.ceil,no=fn.ReactCurrentDispatcher,pd=fn.ReactCurrentOwner,bt=fn.ReactCurrentBatchConfig,Z=0,Ce=null,we=null,Me=0,ot=0,Fr=Un(0),je=0,di=null,dr=0,Io=0,hd=0,Us=null,et=null,md=0,ts=1/0,tn=null,ro=!1,Hc=null,Mn=null,na=!1,En=null,so=0,$s=0,Wc=null,Sa=-1,ja=0;function Ye(){return Z&6?xe():Sa!==-1?Sa:Sa=xe()}function In(e){return e.mode&1?Z&2&&Me!==0?Me&-Me:ow.transition!==null?(ja===0&&(ja=Xm()),ja):(e=ne,e!==0||(e=window.event,e=e===void 0?16:rg(e.type)),e):1}function It(e,t,n,r){if(50<$s)throw $s=0,Wc=null,Error(A(185));Si(e,n,r),(!(Z&2)||e!==Ce)&&(e===Ce&&(!(Z&2)&&(Io|=n),je===4&&jn(e,Me)),st(e,r),n===1&&Z===0&&!(t.mode&1)&&(ts=xe()+500,Ao&&$n()))}function st(e,t){var n=e.callbackNode;o1(e,t);var r=Ba(e,e===Ce?Me:0);if(r===0)n!==null&&kf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kf(n),t===1)e.tag===0?aw(hp.bind(null,e)):kg(hp.bind(null,e)),nw(function(){!(Z&6)&&$n()}),n=null;else{switch(Qm(r)){case 1:n=Bu;break;case 4:n=Km;break;case 16:n=Va;break;case 536870912:n=Ym;break;default:n=Va}n=w0(n,p0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function p0(e,t){if(Sa=-1,ja=0,Z&6)throw Error(A(327));var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var r=Ba(e,e===Ce?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=io(e,r);else{t=r;var s=Z;Z|=2;var i=m0();(Ce!==e||Me!==t)&&(tn=null,ts=xe()+500,rr(e,t));do try{Pw();break}catch(l){h0(e,l)}while(!0);ed(),no.current=i,Z=s,we!==null?t=0:(Ce=null,Me=0,t=je)}if(t!==0){if(t===2&&(s=yc(e),s!==0&&(r=s,t=Gc(e,s))),t===1)throw n=di,rr(e,0),jn(e,r),st(e,xe()),n;if(t===6)jn(e,r);else{if(s=e.current.alternate,!(r&30)&&!Nw(s)&&(t=io(e,r),t===2&&(i=yc(e),i!==0&&(r=i,t=Gc(e,i))),t===1))throw n=di,rr(e,0),jn(e,r),st(e,xe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Yn(e,et,tn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=md+500-xe(),10<t)){if(Ba(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ec(Yn.bind(null,e,et,tn),t);break}Yn(e,et,tn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Mt(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jw(r/1960))-r,10<r){e.timeoutHandle=Ec(Yn.bind(null,e,et,tn),r);break}Yn(e,et,tn);break;case 5:Yn(e,et,tn);break;default:throw Error(A(329))}}}return st(e,xe()),e.callbackNode===n?p0.bind(null,e):null}function Gc(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=io(e,t),e!==2&&(t=et,et=n,t!==null&&qc(t)),e}function qc(e){et===null?et=e:et.push.apply(et,e)}function Nw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Ft(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~hd,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function hp(e){if(Z&6)throw Error(A(327));Kr();var t=Ba(e,0);if(!(t&1))return st(e,xe()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=yc(e);r!==0&&(t=r,n=Gc(e,r))}if(n===1)throw n=di,rr(e,0),jn(e,t),st(e,xe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,et,tn),st(e,xe()),null}function gd(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(ts=xe()+500,Ao&&$n())}}function fr(e){En!==null&&En.tag===0&&!(Z&6)&&Kr();var t=Z;Z|=1;var n=bt.transition,r=ne;try{if(bt.transition=null,ne=1,e)return e()}finally{ne=r,bt.transition=n,Z=t,!(Z&6)&&$n()}}function xd(){ot=Fr.current,oe(Fr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tw(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:Jr(),oe(nt),oe(He),ad();break;case 5:id(r);break;case 4:Jr();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:td(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Ce=e,we=e=_n(e.current,null),Me=ot=t,je=0,di=null,hd=Io=dr=0,et=Us=null,Zn!==null){for(t=0;t<Zn.length;t++)if(n=Zn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Zn=null}return e}function h0(e,t){do{var n=we;try{if(ed(),wa.current=to,eo){for(var r=de.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}eo=!1}if(ur=0,Te=Se=de=null,Vs=!1,li=0,pd.current=null,n===null||n.return===null){je=1,di=t,we=null;break}e:{var i=e,a=n.return,l=n,c=t;if(t=Me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=tp(a);if(g!==null){g.flags&=-257,np(g,a,l,i,t),g.mode&1&&ep(i,u,t),t=g,c=u;var m=t.updateQueue;if(m===null){var w=new Set;w.add(c),t.updateQueue=w}else m.add(c);break e}else{if(!(t&1)){ep(i,u,t),yd();break e}c=Error(A(426))}}else if(ce&&l.mode&1){var b=tp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),np(b,a,l,i,t),Zu(es(c,l));break e}}i=c=es(c,l),je!==4&&(je=2),Us===null?Us=[i]:Us.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Qg(i,c,t);Kf(i,h);break e;case 1:l=c;var x=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mn===null||!Mn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Zg(i,l,t);Kf(i,v);break e}}i=i.return}while(i!==null)}x0(n)}catch(S){t=S,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function m0(){var e=no.current;return no.current=to,e===null?to:e}function yd(){(je===0||je===3||je===2)&&(je=4),Ce===null||!(dr&268435455)&&!(Io&268435455)||jn(Ce,Me)}function io(e,t){var n=Z;Z|=2;var r=m0();(Ce!==e||Me!==t)&&(tn=null,rr(e,t));do try{Ew();break}catch(s){h0(e,s)}while(!0);if(ed(),Z=n,no.current=r,we!==null)throw Error(A(261));return Ce=null,Me=0,je}function Ew(){for(;we!==null;)g0(we)}function Pw(){for(;we!==null&&!Zv();)g0(we)}function g0(e){var t=v0(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?x0(e):we=t,pd.current=null}function x0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ww(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,we=null;return}}else if(n=vw(n,t,ot),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);je===0&&(je=5)}function Yn(e,t,n){var r=ne,s=bt.transition;try{bt.transition=null,ne=1,Tw(e,t,n,r)}finally{bt.transition=s,ne=r}return null}function Tw(e,t,n,r){do Kr();while(En!==null);if(Z&6)throw Error(A(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(l1(e,i),e===Ce&&(we=Ce=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,w0(Va,function(){return Kr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bt.transition,bt.transition=null;var a=ne;ne=1;var l=Z;Z|=4,pd.current=null,kw(e,n),d0(n,e),K1(jc),Ua=!!Sc,jc=Sc=null,e.current=n,Sw(n),Jv(),Z=l,ne=a,bt.transition=i}else e.current=n;if(na&&(na=!1,En=e,so=s),i=e.pendingLanes,i===0&&(Mn=null),n1(n.stateNode),st(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ro)throw ro=!1,e=Hc,Hc=null,e;return so&1&&e.tag!==0&&Kr(),i=e.pendingLanes,i&1?e===Wc?$s++:($s=0,Wc=e):$s=0,$n(),null}function Kr(){if(En!==null){var e=Qm(so),t=bt.transition,n=ne;try{if(bt.transition=null,ne=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,so=0,Z&6)throw Error(A(331));var s=Z;for(Z|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Bs(8,d,i)}var f=d.child;if(f!==null)f.return=d,F=f;else for(;F!==null;){d=F;var p=d.sibling,g=d.return;if(l0(d),d===u){F=null;break}if(p!==null){p.return=g,F=p;break}F=g}}}var m=i.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bs(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,F=h;break e}F=i.return}}var x=e.current;for(F=x;F!==null;){a=F;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,F=y;else e:for(a=x;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mo(9,l)}}catch(S){me(l,l.return,S)}if(l===a){F=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,F=v;break e}F=l.return}}if(Z=s,$n(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{ne=n,bt.transition=t}}return!1}function mp(e,t,n){t=es(n,t),t=Qg(e,t,1),e=Ln(e,t,1),t=Ye(),e!==null&&(Si(e,1,t),st(e,t))}function me(e,t,n){if(e.tag===3)mp(e,e,n);else for(;t!==null;){if(t.tag===3){mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=es(n,e),e=Zg(t,e,1),t=Ln(t,e,1),e=Ye(),t!==null&&(Si(t,1,e),st(t,e));break}}t=t.return}}function Cw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Me&n)===n&&(je===4||je===3&&(Me&130023424)===Me&&500>xe()-md?rr(e,0):hd|=n),st(e,t)}function y0(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var n=Ye();e=cn(e,t),e!==null&&(Si(e,t,n),st(e,n))}function Rw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),y0(e,n)}function Aw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),y0(e,n)}var v0;v0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,yw(e,t,n);tt=!!(e.flags&131072)}else tt=!1,ce&&t.flags&1048576&&Sg(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ka(e,t),e=t.pendingProps;var s=Xr(t,He.current);qr(t,n),s=ld(null,t,r,e,s,n);var i=cd();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,qa(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,rd(t),s.updater=Lo,t.stateNode=s,s._reactInternals=t,Lc(t,r,e,n),t=_c(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&Xu(t),Ge(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ka(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Lw(r),e=At(r,e),s){case 0:t=Ic(null,t,r,e,n);break e;case 1:t=ip(null,t,r,e,n);break e;case 11:t=rp(null,t,r,e,n);break e;case 14:t=sp(null,t,r,At(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:At(r,s),Ic(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:At(r,s),ip(e,t,r,s,n);case 3:e:{if(n0(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Cg(e,t),Za(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=es(Error(A(423)),t),t=ap(e,t,r,n,s);break e}else if(r!==s){s=es(Error(A(424)),t),t=ap(e,t,r,n,s);break e}else for(lt=On(t.stateNode.containerInfo.firstChild),ct=t,ce=!0,Lt=null,n=Pg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===s){t=un(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Rg(t),e===null&&Rc(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Nc(r,s)?a=null:i!==null&&Nc(r,i)&&(t.flags|=32),t0(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&Rc(t),null;case 13:return r0(e,t,n);case 4:return sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:At(r,s),rp(e,t,r,s,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,ie(Xa,r._currentValue),r._currentValue=a,i!==null)if(Ft(i.value,a)){if(i.children===s.children&&!nt.current){t=un(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=an(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ac(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(A(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ac(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ge(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,qr(t,n),s=St(s),r=r(s),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,s=At(r,t.pendingProps),s=At(r.type,s),sp(e,t,r,s,n);case 15:return Jg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:At(r,s),ka(e,t),t.tag=1,rt(r)?(e=!0,qa(t)):e=!1,qr(t,n),Xg(t,r,s),Lc(t,r,s,n),_c(null,t,r,!0,e,n);case 19:return s0(e,t,n);case 22:return e0(e,t,n)}throw Error(A(156,t.tag))};function w0(e,t){return qm(e,t)}function Ow(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Ow(e,t,n,r)}function vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return vd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zu)return 11;if(e===Du)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")vd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pr:return sr(n.children,s,i,t);case Fu:a=8,s|=8;break;case rc:return e=vt(12,n,t,s|2),e.elementType=rc,e.lanes=i,e;case sc:return e=vt(13,n,t,s),e.elementType=sc,e.lanes=i,e;case ic:return e=vt(19,n,t,s),e.elementType=ic,e.lanes=i,e;case Rm:return _o(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tm:a=10;break e;case Cm:a=9;break e;case zu:a=11;break e;case Du:a=14;break e;case bn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=vt(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function sr(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function _o(e,t,n,r){return e=vt(22,e,r,t),e.elementType=Rm,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mw(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function wd(e,t,n,r,s,i,a,l,c){return e=new Mw(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=vt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(i),e}function Iw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b0(e){if(!e)return Dn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(rt(n))return bg(e,n,t)}return t}function k0(e,t,n,r,s,i,a,l,c){return e=wd(n,r,!0,e,s,i,a,l,c),e.context=b0(null),n=e.current,r=Ye(),s=In(n),i=an(r,s),i.callback=t??null,Ln(n,i,s),e.current.lanes=s,Si(e,s,r),st(e,r),e}function Fo(e,t,n,r){var s=t.current,i=Ye(),a=In(s);return n=b0(n),t.context===null?t.context=n:t.pendingContext=n,t=an(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(s,t,a),e!==null&&(It(e,s,a,i),va(e,s,a)),a}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bd(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function _w(){return null}var S0=typeof reportError=="function"?reportError:function(e){console.error(e)};function kd(e){this._internalRoot=e}zo.prototype.render=kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Fo(e,t,null,null)};zo.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Fo(null,e,null,null)}),t[ln]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=eg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&ng(e)}};function Sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Fw(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ao(a);i.call(u)}}var a=k0(t,r,e,0,null,!1,!1,"",xp);return e._reactRootContainer=a,e[ln]=a.current,ri(e.nodeType===8?e.parentNode:e),fr(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=ao(c);l.call(u)}}var c=wd(e,0,!1,null,null,!1,!1,"",xp);return e._reactRootContainer=c,e[ln]=c.current,ri(e.nodeType===8?e.parentNode:e),fr(function(){Fo(t,c,n,r)}),c}function Vo(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var c=ao(a);l.call(c)}}Fo(t,a,e,s)}else a=Fw(n,t,e,s,r);return ao(a)}Zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rs(t.pendingLanes);n!==0&&(Uu(t,n|1),st(t,xe()),!(Z&6)&&(ts=xe()+500,$n()))}break;case 13:fr(function(){var r=cn(e,1);if(r!==null){var s=Ye();It(r,e,1,s)}}),bd(e,1)}};$u=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=Ye();It(t,e,134217728,n)}bd(e,134217728)}};Jm=function(e){if(e.tag===13){var t=In(e),n=cn(e,t);if(n!==null){var r=Ye();It(n,e,t,r)}bd(e,t)}};eg=function(){return ne};tg=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};mc=function(e,t,n){switch(t){case"input":if(lc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ro(r);if(!s)throw Error(A(90));Om(r),lc(r,s)}}}break;case"textarea":Mm(e,n);break;case"select":t=n.value,t!=null&&$r(e,!!n.multiple,t,!1)}};Bm=gd;Um=fr;var zw={usingClientEntryPoint:!1,Events:[Ni,Ar,Ro,Dm,Vm,gd]},Ns={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Eo=ra.inject(Dw),Kt=ra}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(t))throw Error(A(200));return Iw(e,t,null,n)};ft.createRoot=function(e,t){if(!Sd(e))throw Error(A(299));var n=!1,r="",s=S0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=wd(e,1,!1,null,null,n,!1,r,s),e[ln]=t.current,ri(e.nodeType===8?e.parentNode:e),new kd(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Wm(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return fr(e)};ft.hydrate=function(e,t,n){if(!Do(t))throw Error(A(200));return Vo(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!Sd(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=S0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=k0(t,null,e,1,n??null,s,!1,i,a),e[ln]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zo(t)};ft.render=function(e,t,n){if(!Do(t))throw Error(A(200));return Vo(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Do(e))throw Error(A(40));return e._reactRootContainer?(fr(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ft.unstable_batchedUpdates=gd;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Vo(e,t,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(e){console.error(e)}}j0(),jm.exports=ft;var Vw=jm.exports,yp=Vw;tc.createRoot=yp.createRoot,tc.hydrateRoot=yp.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fi(){return fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fi.apply(null,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const vp="popstate";function Bw(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:l}=r.location;return Kc("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:oo(s)}return $w(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uw(){return Math.random().toString(36).substr(2,8)}function wp(e,t){return{usr:e.state,key:e.key,idx:t}}function Kc(e,t,n,r){return n===void 0&&(n=null),fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cs(t):t,{state:n,key:t&&t.key||r||Uw()})}function oo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $w(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=Pn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(fi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Pn.Pop;let b=d(),h=b==null?null:b-u;u=b,c&&c({action:l,location:w.location,delta:h})}function p(b,h){l=Pn.Push;let x=Kc(w.location,b,h);u=d()+1;let y=wp(x,u),v=w.createHref(x);try{a.pushState(y,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(v)}i&&c&&c({action:l,location:w.location,delta:1})}function g(b,h){l=Pn.Replace;let x=Kc(w.location,b,h);u=d();let y=wp(x,u),v=w.createHref(x);a.replaceState(y,"",v),i&&c&&c({action:l,location:w.location,delta:0})}function m(b){let h=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof b=="string"?b:oo(b);return x=x.replace(/ $/,"%20"),fe(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let w={get action(){return l},get location(){return e(s,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(vp,f),c=b,()=>{s.removeEventListener(vp,f),c=null}},createHref(b){return t(s,b)},createURL:m,encodeLocation(b){let h=m(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(b){return a.go(b)}};return w}var bp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bp||(bp={}));function Hw(e,t,n){return n===void 0&&(n="/"),Ww(e,t,n)}function Ww(e,t,n,r){let s=typeof t=="string"?cs(t):t,i=ns(s.pathname||"/",n);if(i==null)return null;let a=N0(e);Gw(a);let l=null,c=rb(i);for(let u=0;l==null&&u<a.length;++u)l=tb(a[u],c);return l}function N0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Fn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),N0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Jw(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let c of E0(i.path))s(i,a,c)}),t}function E0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=E0(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Gw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qw=/^:[\w-]+$/,Kw=3,Yw=2,Xw=1,Qw=10,Zw=-2,kp=e=>e==="*";function Jw(e,t){let n=e.split("/"),r=n.length;return n.some(kp)&&(r+=Zw),t&&(r+=Yw),n.filter(s=>!kp(s)).reduce((s,i)=>s+(qw.test(i)?Kw:i===""?Xw:Qw),r)}function eb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function tb(e,t,n){let{routesMeta:r}=e,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Yc({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(s,f.params),a.push({params:s,pathname:Fn([i,f.pathname]),pathnameBase:lb(Fn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Fn([i,f.pathnameBase]))}return a}function Yc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nb(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let w=l[f]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const m=l[f];return g&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function nb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function rb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ns(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ib=e=>sb.test(e);function ab(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?cs(e):e,i;if(n)if(ib(n))i=n;else{if(n.includes("//")){let a=n;n=P0(n),jd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Sp(n.substring(1),"/"):i=Sp(n,t)}else i=t;return{pathname:i,search:cb(r),hash:ub(s)}}function Sp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ob(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Nd(e,t){let n=ob(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ed(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=cs(e):(s=fi({},e),fe(!s.pathname||!s.pathname.includes("?"),Tl("?","pathname","search",s)),fe(!s.pathname||!s.pathname.includes("#"),Tl("#","pathname","hash",s)),fe(!s.search||!s.search.includes("#"),Tl("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;s.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=ab(s,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const P0=e=>e.replace(/\/\/+/g,"/"),Fn=e=>P0(e.join("/")),lb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ub=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function db(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T0=["post","put","patch","delete"];new Set(T0);const fb=["get",...T0];new Set(fb);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(null,arguments)}const Bo=k.createContext(null),C0=k.createContext(null),pn=k.createContext(null),Uo=k.createContext(null),Zt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=k.createContext(null);function pb(e,t){let{relative:n}=t===void 0?{}:t;us()||fe(!1);let{basename:r,navigator:s}=k.useContext(pn),{hash:i,pathname:a,search:l}=$o(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Fn([r,a])),s.createHref({pathname:c,search:l,hash:i})}function us(){return k.useContext(Uo)!=null}function Ze(){return us()||fe(!1),k.useContext(Uo).location}function A0(e){k.useContext(pn).static||k.useLayoutEffect(e)}function hn(){let{isDataRoute:e}=k.useContext(Zt);return e?Tb():hb()}function hb(){us()||fe(!1);let e=k.useContext(Bo),{basename:t,future:n,navigator:r}=k.useContext(pn),{matches:s}=k.useContext(Zt),{pathname:i}=Ze(),a=JSON.stringify(Nd(s,n.v7_relativeSplatPath)),l=k.useRef(!1);return A0(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Ed(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Fn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,i,e])}const mb=k.createContext(null);function gb(e){let t=k.useContext(Zt).outlet;return t&&k.createElement(mb.Provider,{value:e},t)}function O0(){let{matches:e}=k.useContext(Zt),t=e[e.length-1];return t?t.params:{}}function $o(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(pn),{matches:s}=k.useContext(Zt),{pathname:i}=Ze(),a=JSON.stringify(Nd(s,r.v7_relativeSplatPath));return k.useMemo(()=>Ed(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function xb(e,t){return yb(e,t)}function yb(e,t,n,r){us()||fe(!1);let{navigator:s}=k.useContext(pn),{matches:i}=k.useContext(Zt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ze(),d;if(t){var f;let b=typeof t=="string"?cs(t):t;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||fe(!1),d=b}else d=u;let p=d.pathname||"/",g=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=Hw(e,{pathname:g}),w=Sb(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Fn([c,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Fn([c,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&w?k.createElement(Uo.Provider,{value:{location:pi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pn.Pop}},w):w}function vb(){let e=Pb(),t=db(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:s},n):null,null)}const wb=k.createElement(vb,null);class bb extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Zt.Provider,{value:this.props.routeContext},k.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kb(e){let{routeContext:t,match:n,children:r}=e,s=k.useContext(Bo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Zt.Provider,{value:t},r)}function Sb(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||fe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=n,m=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let g,m=!1,w=null,b=null;n&&(g=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||wb,c&&(u<0&&p===0?(Cb("route-fallback"),m=!0,b=null):u===p&&(m=!0,b=f.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,p+1)),x=()=>{let y;return g?y=w:m?y=b:f.route.Component?y=k.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,k.createElement(kb,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?k.createElement(bb,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var L0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(L0||{}),M0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(M0||{});function jb(e){let t=k.useContext(Bo);return t||fe(!1),t}function Nb(e){let t=k.useContext(C0);return t||fe(!1),t}function Eb(e){let t=k.useContext(Zt);return t||fe(!1),t}function I0(e){let t=Eb(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Pb(){var e;let t=k.useContext(R0),n=Nb(),r=I0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Tb(){let{router:e}=jb(L0.UseNavigateStable),t=I0(M0.UseNavigateStable),n=k.useRef(!1);return A0(()=>{n.current=!0}),k.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,pi({fromRouteId:t},i)))},[e,t])}const jp={};function Cb(e,t,n){jp[e]||(jp[e]=!0)}function Rb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pe(e){let{to:t,replace:n,state:r,relative:s}=e;us()||fe(!1);let{future:i,static:a}=k.useContext(pn),{matches:l}=k.useContext(Zt),{pathname:c}=Ze(),u=hn(),d=Ed(t,Nd(l,i.v7_relativeSplatPath),c,s==="path"),f=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:s}),[u,f,s,n,r]),null}function Pi(e){return gb(e.context)}function Q(e){fe(!1)}function Ab(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Pn.Pop,navigator:i,static:a=!1,future:l}=e;us()&&fe(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:i,static:a,future:pi({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=cs(r));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:m="default"}=r,w=k.useMemo(()=>{let b=ns(d,c);return b==null?null:{location:{pathname:b,search:f,hash:p,state:g,key:m},navigationType:s}},[c,d,f,p,g,m,s]);return w==null?null:k.createElement(pn.Provider,{value:u},k.createElement(Uo.Provider,{children:n,value:w}))}function Ob(e){let{children:t,location:n}=e;return xb(Xc(t),n)}new Promise(()=>{});function Xc(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,s)=>{if(!k.isValidElement(r))return;let i=[...t,s];if(r.type===k.Fragment){n.push.apply(n,Xc(r.props.children,i));return}r.type!==Q&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(null,arguments)}function _0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Lb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mb(e,t){return e.button===0&&(!t||t==="_self")&&!Lb(e)}function Qc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function Ib(e,t){let n=Qc(e);return t&&t.forEach((r,s)=>{n.has(s)||t.getAll(s).forEach(i=>{n.append(s,i)})}),n}const _b=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zb="6";try{window.__reactRouterVersion=zb}catch{}const Db=k.createContext({isTransitioning:!1}),Vb="startTransition",Np=Cv[Vb];function Bb(e){let{basename:t,children:n,future:r,window:s}=e,i=k.useRef();i.current==null&&(i.current=Bw({window:s,v5Compat:!0}));let a=i.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&Np?Np(()=>c(f)):c(f)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Rb(r),[r]),k.createElement(Ab,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$b=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=k.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,p=_0(t,_b),{basename:g}=k.useContext(pn),m,w=!1;if(typeof u=="string"&&$b.test(u)&&(m=u,Ub))try{let y=new URL(window.location.href),v=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=ns(v.pathname,g);v.origin===y.origin&&S!=null?u=S+v.search+v.hash:w=!0}catch{}let b=pb(u,{relative:s}),h=Gb(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:s,viewTransition:f});function x(y){r&&r(y),y.defaultPrevented||h(y)}return k.createElement("a",lo({},p,{href:m||b,onClick:w||i?r:x,ref:n,target:c}))}),Hb=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:u,children:d}=t,f=_0(t,Fb),p=$o(c,{relative:f.relative}),g=Ze(),m=k.useContext(C0),{navigator:w,basename:b}=k.useContext(pn),h=m!=null&&Kb(p)&&u===!0,x=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,y=g.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;s||(y=y.toLowerCase(),v=v?v.toLowerCase():null,x=x.toLowerCase()),v&&b&&(v=ns(v,b)||v);const S=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let E=y===x||!a&&y.startsWith(x)&&y.charAt(S)==="/",P=v!=null&&(v===x||!a&&v.startsWith(x)&&v.charAt(x.length)==="/"),N={isActive:E,isPending:P,isTransitioning:h},R=E?r:void 0,C;typeof i=="function"?C=i(N):C=[i,E?"active":null,P?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let I=typeof l=="function"?l(N):l;return k.createElement(G,lo({},f,{"aria-current":R,className:C,ref:n,style:I,to:c,viewTransition:u}),typeof d=="function"?d(N):d)});var Zc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zc||(Zc={}));var Ep;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ep||(Ep={}));function Wb(e){let t=k.useContext(Bo);return t||fe(!1),t}function Gb(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,c=hn(),u=Ze(),d=$o(e,{relative:a});return k.useCallback(f=>{if(Mb(f,n)){f.preventDefault();let p=r!==void 0?r:oo(u)===oo(d);c(e,{replace:p,state:s,preventScrollReset:i,relative:a,viewTransition:l})}},[u,c,d,r,s,n,e,i,a,l])}function qb(e){let t=k.useRef(Qc(e)),n=k.useRef(!1),r=Ze(),s=k.useMemo(()=>Ib(r.search,n.current?null:t.current),[r.search]),i=hn(),a=k.useCallback((l,c)=>{const u=Qc(typeof l=="function"?l(s):l);n.current=!0,i("?"+u,c)},[i,s]);return[s,a]}function Kb(e,t){t===void 0&&(t={});let n=k.useContext(Db);n==null&&fe(!1);let{basename:r}=Wb(Zc.useViewTransitionState),s=$o(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ns(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ns(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yc(s.pathname,a)!=null||Yc(s.pathname,i)!=null}function F0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Yb}=Object.prototype,{getPrototypeOf:rs}=Object,{iterator:Ti,toStringTag:z0}=Symbol,co=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hi=(e,t)=>{let n=e;const r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),co(n,t))return!0;n=rs(n)}return!1},Xb=(e,t)=>e!=null&&hi(e,t)?e[t]:void 0,Pd=(e=>t=>{const n=Yb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),zt=e=>(e=e.toLowerCase(),t=>Pd(t)===e),Ho=e=>t=>typeof t===e,{isArray:pr}=Array,ss=Ho("undefined");function ds(e){return e!==null&&!ss(e)&&e.constructor!==null&&!ss(e.constructor)&&it(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const D0=zt("ArrayBuffer");function Qb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&D0(e.buffer),t}const Zb=Ho("string"),it=Ho("function"),V0=Ho("number"),fs=e=>e!==null&&typeof e=="object",Jb=e=>e===!0||e===!1,Ea=e=>{if(!fs(e))return!1;const t=rs(e);return(t===null||t===Object.prototype||rs(t)===null)&&!hi(e,z0)&&!hi(e,Ti)},e2=e=>{if(!fs(e)||ds(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},t2=zt("Date"),n2=zt("File"),r2=e=>!!(e&&typeof e.uri<"u"),s2=e=>e&&typeof e.getParts<"u",i2=zt("Blob"),a2=zt("FileList"),o2=e=>fs(e)&&it(e.pipe);function l2(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Pp=l2(),Tp=typeof Pp.FormData<"u"?Pp.FormData:void 0,c2=e=>{if(!e)return!1;if(Tp&&e instanceof Tp)return!0;const t=rs(e);if(!t||t===Object.prototype||!it(e.append))return!1;const n=Pd(e);return n==="formdata"||n==="object"&&it(e.toString)&&e.toString()==="[object FormData]"},u2=zt("URLSearchParams"),[d2,f2,p2,h2]=["ReadableStream","Request","Response","Headers"].map(zt),m2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ci(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),pr(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(ds(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function B0(e,t){if(ds(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,U0=e=>!ss(e)&&e!==er;function Jc(...e){const{caseless:t,skipUndefined:n}=U0(this)&&this||{},r={},s=(i,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=t&&typeof a=="string"&&B0(r,a)||a,c=co(r,l)?r[l]:void 0;Ea(c)&&Ea(i)?r[l]=Jc(c,i):Ea(i)?r[l]=Jc({},i):pr(i)?r[l]=i.slice():(!n||!ss(i))&&(r[l]=i)};for(let i=0,a=e.length;i<a;i++){const l=e[i];if(!l||ds(l)||(Ci(l,s),typeof l!="object"||pr(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let u=0;u<c.length;u++){const d=c[u];P2.call(l,d)&&s(l[d],d)}}return r}const g2=(e,t,n,{allOwnKeys:r}={})=>(Ci(t,(s,i)=>{n&&it(s)?Object.defineProperty(e,i,{__proto__:null,value:F0(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),x2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),y2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},v2=(e,t,n,r)=>{let s,i,a;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&rs(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},w2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},b2=e=>{if(!e)return null;if(pr(e))return e;let t=e.length;if(!V0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},k2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rs(Uint8Array)),S2=(e,t)=>{const r=(e&&e[Ti]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},j2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},N2=zt("HTMLFormElement"),E2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),{propertyIsEnumerable:P2}=Object.prototype,T2=zt("RegExp"),$0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ci(n,(s,i)=>{let a;(a=t(s,i,e))!==!1&&(r[i]=a||s)}),Object.defineProperties(e,r)},C2=e=>{$0(e,(t,n)=>{if(it(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(it(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},R2=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return pr(e)?r(e):r(String(e).split(t)),n},A2=()=>{},O2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function L2(e){return!!(e&&it(e.append)&&e[z0]==="FormData"&&e[Ti])}const M2=e=>{const t=new WeakSet,n=r=>{if(fs(r)){if(t.has(r))return;if(ds(r))return r;if(!("toJSON"in r)){t.add(r);const s=pr(r)?[]:{};return Ci(r,(i,a)=>{const l=n(i);!ss(l)&&(s[a]=l)}),t.delete(r),s}}return r};return n(e)},I2=zt("AsyncFunction"),_2=e=>e&&(fs(e)||it(e))&&it(e.then)&&it(e.catch),H0=((e,t)=>e?setImmediate:t?((n,r)=>(er.addEventListener("message",({source:s,data:i})=>{s===er&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),er.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",it(er.postMessage)),F2=typeof queueMicrotask<"u"?queueMicrotask.bind(er):typeof process<"u"&&process.nextTick||H0,W0=e=>e!=null&&it(e[Ti]),z2=e=>e!=null&&hi(e,Ti)&&W0(e),j={isArray:pr,isArrayBuffer:D0,isBuffer:ds,isFormData:c2,isArrayBufferView:Qb,isString:Zb,isNumber:V0,isBoolean:Jb,isObject:fs,isPlainObject:Ea,isEmptyObject:e2,isReadableStream:d2,isRequest:f2,isResponse:p2,isHeaders:h2,isUndefined:ss,isDate:t2,isFile:n2,isReactNativeBlob:r2,isReactNative:s2,isBlob:i2,isRegExp:T2,isFunction:it,isStream:o2,isURLSearchParams:u2,isTypedArray:k2,isFileList:a2,forEach:Ci,merge:Jc,extend:g2,trim:m2,stripBOM:x2,inherits:y2,toFlatObject:v2,kindOf:Pd,kindOfTest:zt,endsWith:w2,toArray:b2,forEachEntry:S2,matchAll:j2,isHTMLForm:N2,hasOwnProperty:co,hasOwnProp:co,hasOwnInPrototypeChain:hi,getSafeProp:Xb,reduceDescriptors:$0,freezeMethods:C2,toObjectSet:R2,toCamelCase:E2,noop:A2,toFiniteNumber:O2,findKey:B0,global:er,isContextDefined:U0,isSpecCompliantForm:L2,toJSONObject:M2,isAsyncFn:I2,isThenable:_2,setImmediate:H0,asap:F2,isIterable:W0,isSafeIterable:z2},D2=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),V2=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||t[n]&&D2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};function B2(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const U2=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),$2=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Td(e,t){return j.isArray(e)?e.map(n=>Td(n,t)):B2(String(e).replace(t,""))}const H2=e=>Td(e,U2),W2=e=>Td(e,$2);function G0(e){const t=Object.create(null);return j.forEach(e.toJSON(),(n,r)=>{t[r]=W2(n)}),t}const Cp=Symbol("internals");function Es(e){return e&&String(e).trim().toLowerCase()}function Pa(e){return e===!1||e==null?e:j.isArray(e)?e.map(Pa):H2(String(e))}function G2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const q2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cl(e,t,n,r,s){if(j.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function K2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Y2(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(s,i,a){return this[r].call(this,t,s,i,a)},configurable:!0})})}let $e=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,c,u){const d=Es(c);if(!d)return;const f=j.findKey(s,d);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=Pa(l))}const a=(l,c)=>j.forEach(l,(u,d)=>i(u,d,c));if(j.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(j.isString(t)&&(t=t.trim())&&!q2(t))a(V2(t),n);else if(j.isObject(t)&&j.isSafeIterable(t)){let l=Object.create(null),c,u;for(const d of t){if(!j.isArray(d))throw new TypeError("Object iterator must return a key-value pair");u=d[0],j.hasOwnProp(l,u)?(c=l[u],l[u]=j.isArray(c)?[...c,d[1]]:[c,d[1]]):l[u]=d[1]}a(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Es(t),t){const r=j.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return G2(s);if(j.isFunction(n))return n.call(this,s,r);if(j.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Es(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(a){if(a=Es(a),a){const l=j.findKey(r,a);l&&(!n||Cl(r,r[l],l,n))&&(delete r[l],s=!0)}}return j.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Cl(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return j.forEach(this,(s,i)=>{const a=j.findKey(r,i);if(a){n[a]=Pa(s),delete n[i];return}const l=t?K2(i):String(i).trim();l!==i&&delete n[i],n[l]=Pa(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Cp]=this[Cp]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=Es(a);r[l]||(Y2(s,a),r[l]=!0)}return j.isArray(t)?t.forEach(i):i(t),this}};$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors($e.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods($e);const X2="[REDACTED ****]";function Q2(e){if(j.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(j.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Z2(e,t){const n=new Set(t.map(i=>String(i).toLowerCase())),r=[],s=i=>{if(i===null||typeof i!="object"||j.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof $e&&(i=i.toJSON()),r.push(i);let a;if(j.isArray(i))a=[],i.forEach((l,c)=>{const u=s(l);j.isUndefined(u)||(a[c]=u)});else{if(!j.isPlainObject(i)&&Q2(i))return r.pop(),i;a=Object.create(null);for(const[l,c]of Object.entries(i)){const u=n.has(l.toLowerCase())?X2:s(c);j.isUndefined(u)||(a[l]=u)}}return r.pop(),a};return s(e)}let _=class q0 extends Error{static from(t,n,r,s,i,a){const l=new q0(t.message,n||t.code,r,s,i);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),a&&Object.assign(l,a),l}constructor(t,n,r,s,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,n=t&&j.hasOwnProp(t,"redact")?t.redact:void 0,r=j.isArray(n)&&n.length>0?Z2(t,n):j.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};_.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";_.ERR_BAD_OPTION="ERR_BAD_OPTION";_.ECONNABORTED="ECONNABORTED";_.ETIMEDOUT="ETIMEDOUT";_.ECONNREFUSED="ECONNREFUSED";_.ERR_NETWORK="ERR_NETWORK";_.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";_.ERR_DEPRECATED="ERR_DEPRECATED";_.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";_.ERR_BAD_REQUEST="ERR_BAD_REQUEST";_.ERR_CANCELED="ERR_CANCELED";_.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";_.ERR_INVALID_URL="ERR_INVALID_URL";_.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const J2=null,K0=100;function eu(e){return j.isPlainObject(e)||j.isArray(e)}function Y0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Rl(e,t,n){return e?e.concat(t).map(function(s,i){return s=Y0(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function e5(e){return j.isArray(e)&&!e.some(eu)}const t5=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Wo(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,y){return!j.isUndefined(y[x])});const r=n.metaTokens,s=n.visitor||m,i=n.dots,a=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?K0:n.maxDepth,u=l&&j.isSpecCompliantForm(t),d=[];if(!j.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(j.isDate(h))return h.toISOString();if(j.isBoolean(h))return h.toString();if(!u&&j.isBlob(h))throw new _("Blob is not supported. Use a Buffer instead.");if(j.isArrayBuffer(h)||j.isTypedArray(h)){if(u&&typeof l=="function")return new l([h]);if(typeof Buffer<"u")return Buffer.from(h);throw new _("Blob is not supported. Use a Buffer instead.",_.ERR_NOT_SUPPORT)}return h}function p(h){if(h>c)throw new _("Object is too deeply nested ("+h+" levels). Max depth: "+c,_.ERR_FORM_DATA_DEPTH_EXCEEDED)}function g(h,x){if(c===1/0)return JSON.stringify(h);const y=[];return JSON.stringify(h,function(S,E){if(!j.isObject(E))return E;for(;y.length&&y[y.length-1]!==this;)y.pop();return y.push(E),p(x+y.length-1),E})}function m(h,x,y){let v=h;if(j.isReactNative(t)&&j.isReactNativeBlob(h))return t.append(Rl(y,x,i),f(h)),!1;if(h&&!y&&typeof h=="object"){if(j.endsWith(x,"{}"))x=r?x:x.slice(0,-2),h=g(h,1);else if(j.isArray(h)&&e5(h)||(j.isFileList(h)||j.endsWith(x,"[]"))&&(v=j.toArray(h)))return x=Y0(x),v.forEach(function(E,P){!(j.isUndefined(E)||E===null)&&t.append(a===!0?Rl([x],P,i):a===null?x:x+"[]",f(E))}),!1}return eu(h)?!0:(t.append(Rl(y,x,i),f(h)),!1)}const w=Object.assign(t5,{defaultVisitor:m,convertValue:f,isVisitable:eu});function b(h,x,y=0){if(!j.isUndefined(h)){if(p(y),d.indexOf(h)!==-1)throw new Error("Circular reference detected in "+x.join("."));d.push(h),j.forEach(h,function(S,E){(!(j.isUndefined(S)||S===null)&&s.call(t,S,j.isString(E)?E.trim():E,x,w))===!0&&b(S,x?x.concat(E):[E],y+1)}),d.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Rp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function Cd(e,t){this._pairs=[],e&&Wo(e,this,t)}const X0=Cd.prototype;X0.append=function(t,n){this._pairs.push([t,n])};X0.toString=function(t){const n=t?r=>t.call(this,r,Rp):Rp;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function n5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Q0(e,t,n){if(!t)return e;e=e||"";const r=j.isFunction(n)?{serialize:n}:n,s=j.getSafeProp(r,"encode")||n5,i=j.getSafeProp(r,"serialize");let a;if(i?a=i(t,r):a=j.isURLSearchParams(t)?t.toString():new Cd(t,r).toString(s),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Ap{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Rd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},r5=typeof URLSearchParams<"u"?URLSearchParams:Cd,s5=typeof FormData<"u"?FormData:null,i5=typeof Blob<"u"?Blob:null,a5={isBrowser:!0,classes:{URLSearchParams:r5,FormData:s5,Blob:i5},protocols:["http","https","file","blob","url","data"]},Ad=typeof window<"u"&&typeof document<"u",tu=typeof navigator=="object"&&navigator||void 0,o5=Ad&&(!tu||["ReactNative","NativeScript","NS"].indexOf(tu.product)<0),l5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",c5=Ad&&window.location.href||"http://localhost",u5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ad,hasStandardBrowserEnv:o5,hasStandardBrowserWebWorkerEnv:l5,navigator:tu,origin:c5},Symbol.toStringTag,{value:"Module"})),Le={...u5,...a5};function d5(e,t){return Wo(e,new Le.classes.URLSearchParams,{visitor:function(n,r,s,i){return Le.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}const Op=K0;function Z0(e){if(e>Op)throw new _("FormData field is too deeply nested ("+e+" levels). Max depth: "+Op,_.ERR_FORM_DATA_DEPTH_EXCEEDED)}function f5(e){const t=[],n=/\w+|\[(\w*)]/g;let r;for(;(r=n.exec(e))!==null;)Z0(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function p5(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function J0(e){function t(n,r,s,i){Z0(i);let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&j.isArray(s)?s.length:a,c?(j.hasOwnProp(s,a)?s[a]=j.isArray(s[a])?s[a].concat(r):[s[a],r]:s[a]=r,!l):((!j.hasOwnProp(s,a)||!j.isObject(s[a]))&&(s[a]=[]),t(n,r,s[a],i)&&j.isArray(s[a])&&(s[a]=p5(s[a])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,s)=>{t(f5(r),s,n,0)}),n}return null}const br=(e,t)=>e!=null&&j.hasOwnProp(e,t)?e[t]:void 0;function h5(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ri={transitional:Rd,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=j.isObject(t);if(i&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return s?JSON.stringify(J0(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){const c=br(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return d5(t,c).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=br(this,"env"),d=u&&u.FormData;return Wo(l?{"files[]":t}:t,d&&new d,c)}}return i||s?(n.setContentType("application/json",!1),h5(t)):t}],transformResponse:[function(t){const n=br(this,"transitional")||Ri.transitional,r=n&&n.forcedJSONParsing,s=br(this,"responseType"),i=s==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(r&&!s||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,br(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?_.from(c,_.ERR_BAD_RESPONSE,this,null,br(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Le.classes.FormData,Blob:Le.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch","query"],e=>{Ri.headers[e]={}});function Al(e,t){const n=this||Ri,r=t||n,s=$e.from(r.headers);let i=r.data;return j.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ex(e){return!!(e&&e.__CANCEL__)}let Ai=class extends _{constructor(t,n,r){super(t??"canceled",_.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function tx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new _("Request failed with status code "+n.status,n.status>=400&&n.status<500?_.ERR_BAD_REQUEST:_.ERR_BAD_RESPONSE,n.config,n.request,n))}function m5(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function g5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];a||(a=u),n[s]=c,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-a<t)return;const g=d&&u-d;return g?Math.round(p*1e3/g):void 0}}function x5(e,t){let n=0,r=1e3/t,s,i;const a=(u,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?a(u,d):(s=u,i||(i=setTimeout(()=>{i=null,a(s)},r-f)))},()=>s&&a(s)]}const uo=(e,t,n=3)=>{let r=0;const s=g5(50,250);return x5(i=>{if(!i||typeof i.loaded!="number")return;const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=l!=null?Math.min(a,l):a,u=Math.max(0,c-r),d=s(u);r=Math.max(r,c);const f={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l?(l-c)/d:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Lp=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Mp=e=>(...t)=>j.asap(()=>e(...t)),y5=Le.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Le.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Le.origin),Le.navigator&&/(msie|trident)/i.test(Le.navigator.userAgent)):()=>!0,v5=Le.hasStandardBrowserEnv?{write(e,t,n,r,s,i,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];j.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),j.isString(r)&&l.push(`path=${r}`),j.isString(s)&&l.push(`domain=${s}`),i===!0&&l.push("secure"),j.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===e)try{return decodeURIComponent(r.slice(s+1))}catch{return r.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function w5(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function b5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}const k5=/^https?:(?!\/\/)/i,S5=/[\t\n\r]/g;function j5(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function N5(e){return j5(e).replace(S5,"")}function Ip(e,t){if(typeof e=="string"&&k5.test(N5(e)))throw new _('Invalid URL: missing "//" after protocol',_.ERR_INVALID_URL,t)}function nx(e,t,n,r){Ip(t,r);let s=!w5(t);return e&&(s||n===!1)?(Ip(e,r),b5(e,t)):t}const _p=e=>e instanceof $e?{...e}:e;function hr(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(d,f,p,g){return j.isPlainObject(d)&&j.isPlainObject(f)?j.merge.call({caseless:g},d,f):j.isPlainObject(f)?j.merge({},f):j.isArray(f)?f.slice():f}function s(d,f,p,g){if(j.isUndefined(f)){if(!j.isUndefined(d))return r(void 0,d,p,g)}else return r(d,f,p,g)}function i(d,f){if(!j.isUndefined(f))return r(void 0,f)}function a(d,f){if(j.isUndefined(f)){if(!j.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function l(d){const f=j.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!j.isUndefined(f))if(j.isPlainObject(f)){if(j.hasOwnProp(f,d))return f[d]}else return;const p=j.hasOwnProp(e,"transitional")?e.transitional:void 0;if(j.isPlainObject(p)&&j.hasOwnProp(p,d))return p[d]}function c(d,f,p){if(j.hasOwnProp(t,p))return r(d,f);if(j.hasOwnProp(e,p))return r(void 0,d)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:c,headers:(d,f,p)=>s(_p(d),_p(f),p,!0)};return j.forEach(Object.keys({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=j.hasOwnProp(u,f)?u[f]:s,g=j.hasOwnProp(e,f)?e[f]:void 0,m=j.hasOwnProp(t,f)?t[f]:void 0,w=p(g,m,f);j.isUndefined(w)&&p!==c||(n[f]=w)}),j.hasOwnProp(t,"validateStatus")&&j.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(j.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const E5=["content-type","content-length"];function P5(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,s])=>{E5.includes(r.toLowerCase())&&e.set(r,s)})}const T5=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function rx(e){const t=hr({},e),n=p=>j.hasOwnProp(t,p)?t[p]:void 0,r=n("data");let s=n("withXSRFToken");const i=n("xsrfHeaderName"),a=n("xsrfCookieName");let l=n("headers");const c=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),f=n("url");if(t.headers=l=$e.from(l),t.url=Q0(nx(u,f,d,t),n("params"),n("paramsSerializer")),c){const p=j.getSafeProp(c,"username")||"",g=j.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(p+":"+(g?T5(g):"")))}catch(m){throw _.from(m,_.ERR_BAD_OPTION_VALUE,e)}}if(j.isFormData(r)&&(Le.hasStandardBrowserEnv||Le.hasStandardBrowserWebWorkerEnv||j.isReactNative(r)?l.setContentType(void 0):j.isFunction(r.getHeaders)&&P5(l,r.getHeaders(),n("formDataHeaderPolicy"))),Le.hasStandardBrowserEnv&&(j.isFunction(s)&&(s=s(t)),s===!0||s==null&&y5(t.url))){const g=i&&a&&v5.read(a);g&&l.set(i,g)}return t}const C5=typeof XMLHttpRequest<"u",R5=C5&&function(e){return new Promise(function(n,r){const s=rx(e);let i=s.data;const a=$e.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=s,d,f,p,g,m;function w(){g&&g(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function h(){if(!b)return;const y=$e.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),S={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:y,config:e,request:b};tx(function(P){n(P),w()},function(P){r(P),w()},S),b=null}"onloadend"in b?b.onloadend=h:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.startsWith("file:"))||setTimeout(h)},b.onabort=function(){b&&(r(new _("Request aborted",_.ECONNABORTED,e,b)),w(),b=null)},b.onerror=function(v){const S=v&&v.message?v.message:"Network Error",E=new _(S,_.ERR_NETWORK,e,b);E.event=v||null,r(E),w(),b=null},b.ontimeout=function(){let v=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const S=s.transitional||Rd;s.timeoutErrorMessage&&(v=s.timeoutErrorMessage),r(new _(v,S.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,b)),w(),b=null},i===void 0&&a.setContentType(null),"setRequestHeader"in b&&j.forEach(G0(a),function(v,S){b.setRequestHeader(S,v)}),j.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),l&&l!=="json"&&(b.responseType=s.responseType),u&&([p,m]=uo(u,!0),b.addEventListener("progress",p)),c&&b.upload&&([f,g]=uo(c),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(d=y=>{b&&(r(!y||y.type?new Ai(null,e,b):y),b.abort(),w(),b=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const x=m5(s.url);if(x&&!Le.protocols.includes(x)){r(new _("Unsupported protocol "+x+":",_.ERR_BAD_REQUEST,e)),w();return}b.send(i||null)})},A5=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof _?u:new Ai(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,s(new _(`timeout of ${t}ms exceeded`,_.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>c.addEventListener("abort",s,{once:!0}));const{signal:l}=n;return l.unsubscribe=()=>j.asap(a),l},O5=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},L5=async function*(e,t){for await(const n of M5(e))yield*O5(n,t)},M5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Fp=(e,t,n,r)=>{const s=L5(e,t);let i=0,a,l=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await s.next();if(u){l(),c.close();return}let f=d.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},fo=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,I5=(e,t,n)=>t+2<n&&fo(e.charCodeAt(t+1))&&fo(e.charCodeAt(t+2));function _5(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let a=r.length;const l=r.length;for(let g=0;g<l;g++)if(r.charCodeAt(g)===37&&g+2<l){const m=r.charCodeAt(g+1),w=r.charCodeAt(g+2);fo(m)&&fo(w)&&(a-=2,g+=2)}let c=0,u=l-1;const d=g=>g>=2&&r.charCodeAt(g-2)===37&&r.charCodeAt(g-1)===51&&(r.charCodeAt(g)===68||r.charCodeAt(g)===100);u>=0&&(r.charCodeAt(u)===61?(c++,u--):d(u)&&(c++,u-=3)),c===1&&u>=0&&(r.charCodeAt(u)===61||d(u))&&c++;const p=Math.floor(a/4)*3-(c||0);return p>0?p:0}let i=0;for(let a=0,l=r.length;a<l;a++){const c=r.charCodeAt(a);if(c===37&&I5(r,a,l))i+=1,a+=2;else if(c<128)i+=1;else if(c<2048)i+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=r.charCodeAt(a+1);u>=56320&&u<=57343?(i+=4,a++):i+=3}else i+=3}return i}const Od="1.18.1",zp=64*1024,{isFunction:sa}=j,F5=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),Dp=e=>{if(!j.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Vp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},z5=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},D5=e=>{const t=j.global!==void 0&&j.global!==null?j.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=j.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:i,Response:a}=e,l=s?sa(s):typeof fetch=="function",c=sa(i),u=sa(a);if(!l)return!1;const d=l&&sa(n),f=l&&(typeof r=="function"?(h=>x=>h.encode(x))(new r):async h=>new Uint8Array(await new i(h).arrayBuffer())),p=c&&d&&Vp(()=>{let h=!1;const x=new i(Le.origin,{body:new n,method:"POST",get duplex(){return h=!0,"half"}}),y=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),h&&!y}),g=u&&d&&Vp(()=>j.isReadableStream(new a("").body)),m={stream:g&&(h=>h.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!m[h]&&(m[h]=(x,y)=>{let v=x&&x[h];if(v)return v.call(x);throw new _(`Response type '${h}' is not supported`,_.ERR_NOT_SUPPORT,y)})});const w=async h=>{if(h==null)return 0;if(j.isBlob(h))return h.size;if(j.isSpecCompliantForm(h))return(await new i(Le.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(j.isArrayBufferView(h)||j.isArrayBuffer(h))return h.byteLength;if(j.isURLSearchParams(h)&&(h=h+""),j.isString(h))return(await f(h)).byteLength},b=async(h,x)=>{const y=j.toFiniteNumber(h.getContentLength());return y??w(x)};return async h=>{let{url:x,method:y,data:v,signal:S,cancelToken:E,timeout:P,onDownloadProgress:N,onUploadProgress:R,responseType:C,headers:I,withCredentials:V="same-origin",fetchOptions:$,maxContentLength:H,maxBodyLength:J}=rx(h);const O=j.isNumber(H)&&H>-1,U=j.isNumber(J)&&J>-1,T=W=>j.hasOwnProp(h,W)?h[W]:void 0;let M=s||fetch;C=C?(C+"").toLowerCase():"text";let L=A5([S,E&&E.toAbortSignal()],P),B=null;const q=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let le,ge=null;const _e=()=>new _("Request body larger than maxBodyLength limit",_.ERR_BAD_REQUEST,h,B);try{let W;const ee=T("auth");if(ee){const D=j.getSafeProp(ee,"username")||"",K=j.getSafeProp(ee,"password")||"";W={username:D,password:K}}if(z5(x)){const D=new URL(x,Le.origin);if(!W&&(D.username||D.password)){const K=Dp(D.username),We=Dp(D.password);W={username:K,password:We}}(D.username||D.password)&&(D.username="",D.password="",x=D.href)}if(W&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(F5((W.username||"")+":"+(W.password||""))))),O&&typeof x=="string"&&x.startsWith("data:")&&_5(x)>H)throw new _("maxContentLength size of "+H+" exceeded",_.ERR_BAD_RESPONSE,h,B);if(U&&y!=="get"&&y!=="head"){const D=await w(v);if(typeof D=="number"&&isFinite(D)&&(le=D,D>J))throw _e()}const Re=U&&(j.isReadableStream(v)||j.isStream(v)),Je=(D,K,We)=>Fp(D,zp,Ee=>{if(U&&Ee>J)throw ge=_e();K&&K(Ee)},We);if(p&&y!=="get"&&y!=="head"&&(R||Re)){if(le=le??await b(I,v),le!==0||Re){let D=new i(x,{method:"POST",body:v,duplex:"half"}),K;if(j.isFormData(v)&&(K=D.headers.get("content-type"))&&I.setContentType(K),D.body){const[We,Ee]=R&&Lp(le,uo(Mp(R)))||[];v=Je(D.body,We,Ee)}}}else if(Re&&!c&&d&&y!=="get"&&y!=="head")v=Je(v);else if(Re&&c&&!p&&y!=="get"&&y!=="head")throw new _("Stream request bodies are not supported by the current fetch implementation",_.ERR_NOT_SUPPORT,h,B);j.isString(V)||(V=V?"include":"omit");const Vt=c&&"credentials"in i.prototype;if(j.isFormData(v)){const D=I.getContentType();D&&/^multipart\/form-data/i.test(D)&&!/boundary=/i.test(D)&&I.delete("content-type")}I.set("User-Agent","axios/"+Od,!1);const gs={...$,signal:L,method:y.toUpperCase(),headers:G0(I.normalize()),body:v,duplex:"half",credentials:Vt?V:void 0};B=c&&new i(x,gs);let ht=await(c?M(B,$):M(x,gs));const zi=$e.from(ht.headers);if(O){const D=j.toFiniteNumber(zi.getContentLength());if(D!=null&&D>H)throw new _("maxContentLength size of "+H+" exceeded",_.ERR_BAD_RESPONSE,h,B)}const xs=g&&(C==="stream"||C==="response");if(g&&ht.body&&(N||O||xs&&q)){const D={};["status","statusText","headers"].forEach(mn=>{D[mn]=ht[mn]});const K=j.toFiniteNumber(zi.getContentLength()),[We,Ee]=N&&Lp(K,uo(Mp(N),!0))||[];let Di=0;const Vi=mn=>{if(O&&(Di=mn,Di>H))throw new _("maxContentLength size of "+H+" exceeded",_.ERR_BAD_RESPONSE,h,B);We&&We(mn)};ht=new a(Fp(ht.body,zp,Vi,()=>{Ee&&Ee(),q&&q()}),D)}C=C||"text";let X=await m[j.findKey(m,C)||"text"](ht,h);if(O&&!g&&!xs){let D;if(X!=null&&(typeof X.byteLength=="number"?D=X.byteLength:typeof X.size=="number"?D=X.size:typeof X=="string"&&(D=typeof r=="function"?new r().encode(X).byteLength:X.length)),typeof D=="number"&&D>H)throw new _("maxContentLength size of "+H+" exceeded",_.ERR_BAD_RESPONSE,h,B)}return!xs&&q&&q(),await new Promise((D,K)=>{tx(D,K,{data:X,headers:$e.from(ht.headers),status:ht.status,statusText:ht.statusText,config:h,request:B})})}catch(W){if(q&&q(),L&&L.aborted&&L.reason instanceof _){const ee=L.reason;throw ee.config=h,B&&(ee.request=B),W!==ee&&Object.defineProperty(ee,"cause",{__proto__:null,value:W,writable:!0,enumerable:!1,configurable:!0}),ee}if(ge)throw B&&!ge.request&&(ge.request=B),ge;if(W instanceof _)throw B&&!W.request&&(W.request=B),W;if(W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)){const ee=new _("Network Error",_.ERR_NETWORK,h,B,W&&W.response);throw Object.defineProperty(ee,"cause",{__proto__:null,value:W.cause||W,writable:!0,enumerable:!1,configurable:!0}),ee}throw _.from(W,W&&W.code,h,B,W&&W.response)}}},V5=new Map,sx=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let a=i.length,l=a,c,u,d=V5;for(;l--;)c=i[l],u=d.get(c),u===void 0&&d.set(c,u=l?new Map:D5(t)),d=u;return u};sx();const Ld={http:J2,xhr:R5,fetch:{get:sx}};j.forEach(Ld,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Bp=e=>`- ${e}`,B5=e=>j.isFunction(e)||e===null||e===!1;function U5(e,t){e=j.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let a=0;a<n;a++){r=e[a];let l;if(s=r,!B5(r)&&(s=Ld[(l=String(r)).toLowerCase()],s===void 0))throw new _(`Unknown adapter '${l}'`);if(s&&(j.isFunction(s)||(s=s.get(t))))break;i[l||"#"+a]=s}if(!s){const a=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(Bp).join(`
`):" "+Bp(a[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+l,_.ERR_NOT_SUPPORT)}return s}const ix={getAdapter:U5,adapters:Ld};function Ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ai(null,e)}function Up(e){return Ol(e),e.headers=$e.from(e.headers),e.data=Al.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ix.getAdapter(e.adapter||Ri.adapter,e)(e).then(function(r){Ol(e),e.response=r;try{r.data=Al.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=$e.from(r.headers),r},function(r){if(!ex(r)&&(Ol(e),r&&r.response)){e.response=r.response;try{r.response.data=Al.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=$e.from(r.response.headers)}return Promise.reject(r)})}const Go={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Go[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $p={};Go.transitional=function(t,n,r){function s(i,a){return"[Axios v"+Od+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new _(s(a," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!$p[a]&&($p[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};Go.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function $5(e,t,n){if(typeof e!="object"||e===null)throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],a=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new _("option "+i+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}const Ta={assertOptions:$5,validators:Go},De=Ta.validators;let ir=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ap,response:new Ap}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=(()=>{if(!s.stack)return"";const a=s.stack.indexOf(`
`);return a===-1?"":s.stack.slice(a+1)})();try{if(!r.stack)r.stack=i;else if(i){const a=i.indexOf(`
`),l=a===-1?-1:i.indexOf(`
`,a+1),c=l===-1?"":i.slice(l+1);String(r.stack).endsWith(c)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=hr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ta.assertOptions(r,{silentJSONParsing:De.transitional(De.boolean),forcedJSONParsing:De.transitional(De.boolean),clarifyTimeoutError:De.transitional(De.boolean),legacyInterceptorReqResOrdering:De.transitional(De.boolean),advertiseZstdAcceptEncoding:De.transitional(De.boolean),validateStatusUndefinedResolves:De.transitional(De.boolean)},!1),s!=null&&(j.isFunction(s)?n.paramsSerializer={serialize:s}:Ta.assertOptions(s,{encode:De.function,serialize:De.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ta.assertOptions(n,{baseUrl:De.spelling("baseURL"),withXsrfToken:De.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&j.merge(i.common,i[n.method]);i&&j.forEach(["delete","get","head","post","put","patch","query","common"],m=>{delete i[m]}),n.headers=$e.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(n)===!1)return;c=c&&w.synchronous;const b=n.transitional||Rd;b&&b.legacyInterceptorReqResOrdering?l.unshift(w.fulfilled,w.rejected):l.push(w.fulfilled,w.rejected)});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,p;if(!c){const m=[Up.bind(this),void 0];for(m.unshift(...l),m.push(...u),p=m.length,d=Promise.resolve(n);f<p;)d=d.then(m[f++],m[f++]);return d}p=l.length;let g=n;for(;f<p;){const m=l[f++],w=l[f++];try{g=m(g)}catch(b){w.call(this,b);break}}try{d=Up.call(this,g)}catch(m){return Promise.reject(m)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=hr(this.defaults,t);const n=nx(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Q0(n,t.params,t.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(t){ir.prototype[t]=function(n,r){return this.request(hr(r||{},{method:t,url:n,data:r&&j.hasOwnProp(r,"data")?r.data:void 0}))}});j.forEach(["post","put","patch","query"],function(t){function n(r){return function(i,a,l){return this.request(hr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}ir.prototype[t]=n(),t!=="query"&&(ir.prototype[t+"Form"]=n(!0))});let H5=class ax{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new Ai(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ax(function(s){t=s}),cancel:t}}};function W5(e){return function(n){return e.apply(null,n)}}function G5(e){return j.isObject(e)&&e.isAxiosError===!0}const nu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(nu).forEach(([e,t])=>{nu[t]=e});function ox(e){const t=new ir(e),n=F0(ir.prototype.request,t);return j.extend(n,ir.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ox(hr(e,s))},n}const ye=ox(Ri);ye.Axios=ir;ye.CanceledError=Ai;ye.CancelToken=H5;ye.isCancel=ex;ye.VERSION=Od;ye.toFormData=Wo;ye.AxiosError=_;ye.Cancel=ye.CanceledError;ye.all=function(t){return Promise.all(t)};ye.spread=W5;ye.isAxiosError=G5;ye.mergeConfig=hr;ye.AxiosHeaders=$e;ye.formToJSON=e=>J0(j.isHTMLForm(e)?new FormData(e):e);ye.getAdapter=ix.getAdapter;ye.HttpStatusCode=nu;ye.default=ye;const{Axios:TT,AxiosError:CT,CanceledError:RT,isCancel:AT,CancelToken:OT,VERSION:LT,all:MT,Cancel:IT,isAxiosError:_T,spread:FT,toFormData:zT,AxiosHeaders:DT,HttpStatusCode:VT,formToJSON:BT,getAdapter:UT,mergeConfig:$T,create:HT}=ye,Ll="prism_token",xt={getToken(){return localStorage.getItem(Ll)},setToken(e){localStorage.setItem(Ll,e)},removeToken(){localStorage.removeItem(Ll)}},q5="http://localhost:5000/api",re=ye.create({baseURL:q5,headers:{"Content-Type":"application/json"}});re.interceptors.request.use(e=>{const t=xt.getToken();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));re.interceptors.response.use(e=>e,e=>{var t;if(((t=e.response)==null?void 0:t.status)===401){xt.removeToken();const n=`${window.location.pathname}${window.location.search}`,r=new URLSearchParams({returnTo:n}).toString();window.location.href=`/login?${r}`}return Promise.reject(e)});const Et={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},lx="ozilla_local_users";let Tt=!1;function Os(e){return String(e||"").toLowerCase().trim()}function ru(e){return String(e||"").trim()}function Ut(){try{const e=localStorage.getItem(lx),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function kr(e){localStorage.setItem(lx,JSON.stringify(e))}function K5(e){const t={sub:e.id,email:e.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(t))}`}function ia(e){const t=String(e||""),n=t.startsWith("local.")?t.slice(6):t;try{return JSON.parse(atob(n))}catch{return null}}function Ls(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,name:e.name||`${e.firstName||""} ${e.lastName||""}`.trim(),email:e.email,phone:e.phone,role:e.role||"user"}}function Sr(e={}){const t=String(e.firstName||"Local").trim()||"Local",n=String(e.lastName||"User").trim()||"User",r=Os(e.email||"local@ozillafestival.com"),s=ru(e.phone||"+923000000000");return{id:e.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:t,lastName:n,name:`${t} ${n}`.trim(),email:r,phone:s,password:String(e.password||""),role:"user"}}function Y5(e){var t,n;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((n=e==null?void 0:e.message)==null?void 0:n.includes("ECONNREFUSED")))}function Jt(e){return Y5(e)?(Tt=!0,!0):!1}function xn(e){const t=Ls(e);return{token:K5(t),user:t,mode:"local-fallback"}}const zr={async login(e){if(Tt){const t=Os(e==null?void 0:e.email),n=String((e==null?void 0:e.password)||""),r=Ut().find(s=>s.email===t&&s.password===n);if(!r){const s=new Error("Invalid credentials");throw s.response={status:401,data:{message:"Invalid credentials"}},s}return xn(r)}try{return(await re.post(Et.AUTH.LOGIN,e)).data}catch(t){if(Jt(t)){const n=Os(e==null?void 0:e.email),r=String((e==null?void 0:e.password)||""),s=Ut().find(i=>i.email===n&&i.password===r);if(!s){const i=new Error("Invalid credentials");throw i.response={status:401,data:{message:"Invalid credentials"}},i}return xn(s)}throw t}},async register(e){if(Tt){const t=Os(e==null?void 0:e.email),n=ru(e==null?void 0:e.phone),r=Ut();if(r.some(l=>l.email===t)){const l=new Error("Account already exists with this email");throw l.response={status:409,data:{message:"Account already exists with this email"}},l}if(r.some(l=>l.phone===n)){const l=new Error("Account already exists with this phone number");throw l.response={status:409,data:{message:"Account already exists with this phone number"}},l}const a=Sr(e);return kr([a,...r]),xn(a)}try{return(await re.post(Et.AUTH.REGISTER,e)).data}catch(t){if(Jt(t)){const n=Os(e==null?void 0:e.email),r=ru(e==null?void 0:e.phone),s=Ut();if(s.some(c=>c.email===n)){const c=new Error("Account already exists with this email");throw c.response={status:409,data:{message:"Account already exists with this email"}},c}if(s.some(c=>c.phone===r)){const c=new Error("Account already exists with this phone number");throw c.response={status:409,data:{message:"Account already exists with this phone number"}},c}const l=Sr(e);return kr([l,...s]),xn(l)}throw t}},async resendOtp(e){if(Tt)return{message:"Development OTP generated successfully.",otpForDevelopment:"123456",mode:"local-fallback"};try{return(await re.post(Et.AUTH.RESEND_OTP,{email:e})).data}catch(t){if(Jt(t))return{message:"Development OTP generated successfully.",otpForDevelopment:"123456",mode:"local-fallback"};throw t}},async verifyOtp(e){if(Tt){if(String((e==null?void 0:e.otp)||"").trim()!=="123456"){const t=new Error("OTP verification failed");throw t.response={status:400,data:{message:"OTP verification failed"}},t}return{message:"Email verified successfully",mode:"local-fallback"}}try{return(await re.post(Et.AUTH.VERIFY_OTP,e)).data}catch(t){if(Jt(t)){if(String((e==null?void 0:e.otp)||"").trim()!=="123456"){const n=new Error("OTP verification failed");throw n.response={status:400,data:{message:"OTP verification failed"}},n}return{message:"Email verified successfully",mode:"local-fallback"}}throw t}},async getCurrentUser(){const e=xt.getToken(),t=ia(e);if((t==null?void 0:t.mode)==="local-fallback"||String(e||"").startsWith("local.")){const n=Ut(),r=n.find(s=>s.id===(t==null?void 0:t.sub))||n.find(s=>s.email===(t==null?void 0:t.email));if(!r){const s=new Error("Unauthorized");throw s.response={status:401,data:{message:"Unauthorized"}},s}return Tt=!0,Ls(r)}if(Tt){const n=new Error("Unauthorized");throw n.response={status:401,data:{message:"Unauthorized"}},n}try{return(await re.get(Et.AUTH.ME)).data}catch(n){if(Jt(n)){const r=ia(e);if(!(r!=null&&r.sub)&&!(r!=null&&r.email)){const a=new Error("Unauthorized");throw a.response={status:401,data:{message:"Unauthorized"}},a}const s=Ut(),i=s.find(a=>a.id===r.sub)||s.find(a=>a.email===r.email);if(!i){const a=new Error("Unauthorized");throw a.response={status:401,data:{message:"Unauthorized"}},a}return Ls(i)}throw n}},async logout(){if(Tt)return{message:"Logged out successfully"};try{return(await re.post(Et.AUTH.LOGOUT)).data}catch(e){if(Jt(e))return{message:"Logged out successfully"};throw e}},async forgotPassword(e){return(await re.post(Et.AUTH.FORGOT_PASSWORD,{email:e})).data},async resetPassword(e){return(await re.post(Et.AUTH.RESET_PASSWORD,e)).data},async googleCodeLogin(e,t="postmessage",n){if(Tt){const s=Sr(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),i=Ut();return i.some(a=>a.email===s.email)||kr([s,...i]),xn(s)}try{return(await re.post(Et.AUTH.GOOGLE_CODE_LOGIN,{code:e,redirectUri:t,profile:n})).data}catch(r){if(Jt(r)){const i=Sr(n||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return xn(i)}throw r}},async googleTokenLogin(e,t){if(Tt){const r=Sr(t||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"}),s=Ut();return s.some(i=>i.email===r.email)||kr([r,...s]),xn(r)}try{return(await re.post(Et.AUTH.GOOGLE_TOKEN_LOGIN,{credential:e,profile:t})).data}catch(n){if(Jt(n)){const s=Sr(t||{email:"ubair1100@gmail.com",firstName:"Ubair",lastName:"Naeem"});return xn(s)}throw n}},async updateProfile(e){if(Tt){const t=xt.getToken(),n=ia(t),r=Ut(),s=r.findIndex(l=>l.id===(n==null?void 0:n.sub)||l.email===(n==null?void 0:n.email));if(s===-1){const l=new Error("Unauthorized");throw l.response={status:401,data:{message:"Unauthorized"}},l}const i=r[s],a={...i,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():i.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():i.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():i.phone};return a.name=`${a.firstName||""} ${a.lastName||""}`.trim()||i.name,r[s]=a,kr(r),{message:"Profile updated successfully",user:Ls(a)}}try{return(await re.put(Et.AUTH.PROFILE,e)).data}catch(t){if(Jt(t)){const n=xt.getToken(),r=ia(n),s=Ut(),i=s.findIndex(c=>c.id===(r==null?void 0:r.sub)||c.email===(r==null?void 0:r.email));if(i===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const a=s[i],l={...a,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():a.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():a.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():a.phone};return l.name=`${l.firstName||""} ${l.lastName||""}`.trim()||a.name,s[i]=l,kr(s),{message:"Profile updated successfully",user:Ls(l)}}throw t}}},cx=k.createContext(null);function X5({children:e}){const[t,n]=k.useState(null),[r,s]=k.useState(!0);k.useEffect(()=>{i()},[]);const i=async()=>{try{if(xt.getToken()){const f=await zr.getCurrentUser();n(f)}}catch{xt.removeToken()}finally{s(!1)}},a=async d=>{const f=await zr.login(d);return xt.setToken(f.token),n(f.user),f},l=async d=>{const f=await zr.register(d);return xt.setToken(f.token),n(f.user),f},c=()=>{zr.logout().catch(()=>{}),xt.removeToken(),n(null)},u={user:t,isAdmin:(t==null?void 0:t.role)==="admin",loading:r,login:a,register:l,logout:c,checkAuth:i};return o.jsx(cx.Provider,{value:u,children:e})}function Dt(){const e=k.useContext(cx);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}function Q5({children:e}){const{user:t,loading:n}=Dt(),r=Ze();if(n)return o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!t){const s=`${r.pathname}${r.search}`,i=new URLSearchParams({returnTo:s}).toString();return o.jsx(Pe,{to:`/login?${i}`,replace:!0})}return e||o.jsx(Pi,{})}function Z5({children:e}){const{user:t,loading:n}=Dt(),r=Ze();if(n)return o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(t){const i=new URLSearchParams(r.search).get("returnTo"),a=i&&i.startsWith("/")?i:"/dashboard";return o.jsx(Pe,{to:a,replace:!0})}return e||o.jsx(Pi,{})}function Ue(e){if(!e||typeof e!="string"||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))return e;const t="/ozillafest/",n=t.endsWith("/")?t:`${t}/`,r=e.replace(/^\/+/,"");return r.startsWith("assets/")||r.startsWith("favicon")?`${n}${r}`:e.startsWith("/")?`${n}${r}`:e}function ux({className:e="",nodeColor:t="#EC4899",lineColor:n="236, 72, 153",secondaryColor:r="255, 90, 31",maxDistance:s=140,speed:i=.6}){const a=k.useRef(null);return k.useEffect(()=>{var P,N;const l=a.current;if(!l)return;const c=l.getContext("2d");if(!c)return;let u,d=l.width=((P=l.parentElement)==null?void 0:P.clientWidth)||window.innerWidth,f=l.height=((N=l.parentElement)==null?void 0:N.clientHeight)||window.innerHeight;const g=d<768?42:72,m=350,w=500;let b={x:d/2,y:f/2,targetX:d/2,targetY:f/2,active:!1},h={rotX:0,rotY:0,targetRotX:0,targetRotY:0};const x=[];for(let R=0;R<g;R++)x.push({x:(Math.random()-.5)*d*1.2,y:(Math.random()-.5)*f*1.2,z:(Math.random()-.5)*w,vx:(Math.random()-.5)*i*.8,vy:(Math.random()-.5)*i*.8,vz:(Math.random()-.5)*i*.8,radius:Math.random()*2+1.5,colorType:Math.random()>.4?"primary":"secondary"});const y=()=>{l.parentElement&&(d=l.width=l.parentElement.clientWidth||window.innerWidth,f=l.height=l.parentElement.clientHeight||window.innerHeight)};window.addEventListener("resize",y);const v=R=>{const C=l.getBoundingClientRect();b.x=R.clientX-C.left,b.y=R.clientY-C.top,b.targetX=b.x,b.targetY=b.y,b.active=!0;const I=(b.x-d/2)/(d/2),V=(b.y-f/2)/(f/2);h.targetRotY=I*.18,h.targetRotX=-V*.18},S=()=>{b.active=!1,h.targetRotX=0,h.targetRotY=0};window.addEventListener("mousemove",v,{passive:!0}),window.addEventListener("mouseleave",S,{passive:!0});const E=()=>{c.clearRect(0,0,d,f),h.rotX+=(h.targetRotX-h.rotX)*.05,h.rotY+=(h.targetRotY-h.rotY)*.05;const R=Math.cos(h.rotY),C=Math.sin(h.rotY),I=Math.cos(h.rotX),V=Math.sin(h.rotX),$=d/2,H=f/2,J=[];for(let U=0;U<g;U++){const T=x[U];T.x+=T.vx,T.y+=T.vy,T.z+=T.vz;const M=d*.7,L=f*.7,B=w*.6;(T.x<-M||T.x>M)&&(T.vx*=-1),(T.y<-L||T.y>L)&&(T.vy*=-1),(T.z<-B||T.z>B)&&(T.vz*=-1);let q=T.x*R-T.z*C,le=T.z*R+T.x*C,ge=T.y*I-le*V,_e=le*I+T.y*V;const W=_e+w;if(W<=0)continue;const ee=m/(m+W*.7),Re=$+q*ee,Je=H+ge*ee,Vt=Math.max(.15,Math.min(.9,(_e+w)/(w*1.5)));J.push({x:Re,y:Je,z:_e,scale:ee,alpha:Vt,radius:T.radius*ee,colorType:T.colorType,original:T})}const O=J.length;for(let U=0;U<O;U++){const T=J[U];for(let M=U+1;M<O;M++){const L=J[M],B=T.x-L.x,q=T.y-L.y,le=Math.sqrt(B*B+q*q);if(le<s){const ge=(1-le/s)*.45*Math.min(T.alpha,L.alpha),_e=T.colorType==="primary"?n:r;c.beginPath(),c.moveTo(T.x,T.y),c.lineTo(L.x,L.y),c.strokeStyle=`rgba(${_e}, ${ge})`,c.lineWidth=Math.max(.6,(1-le/s)*1.4),c.stroke();for(let W=M+1;W<O;W++){const ee=J[W],Re=Math.hypot(L.x-ee.x,L.y-ee.y),Je=Math.hypot(T.x-ee.x,T.y-ee.y);if(Re<s&&Je<s){const Vt=(1-(le+Re+Je)/(s*3))*.08;c.beginPath(),c.moveTo(T.x,T.y),c.lineTo(L.x,L.y),c.lineTo(ee.x,ee.y),c.closePath(),c.fillStyle=`rgba(${n}, ${Vt})`,c.fill()}}}}}for(let U=0;U<O;U++){const T=J[U],M=T.colorType==="primary"?`rgba(${n}, ${T.alpha})`:`rgba(${r}, ${T.alpha})`;c.beginPath(),c.arc(T.x,T.y,Math.max(1.2,T.radius),0,Math.PI*2),c.fillStyle=M,c.shadowColor=`rgba(${n}, 0.8)`,c.shadowBlur=8,c.fill(),c.shadowBlur=0}u=requestAnimationFrame(E)};return E(),()=>{window.removeEventListener("resize",y),window.removeEventListener("mousemove",v),window.removeEventListener("mouseleave",S),cancelAnimationFrame(u)}},[t,n,r,s,i]),o.jsx("canvas",{ref:a,className:`plexus-net-canvas ${e}`,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}})}function Ml({children:e}){const t=Ze(),n=t.pathname==="/login",r=t.pathname==="/register";return o.jsxs("div",{className:`auth-page ${n?"auth-page-login":""} ${r?"auth-page-register":""}`,children:[o.jsx(ux,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:135,speed:.5}),o.jsx("div",{className:"auth-ambient-blob-1","aria-hidden":"true"}),o.jsx("div",{className:"auth-ambient-blob-2","aria-hidden":"true"}),o.jsxs("div",{className:"auth-centered-shell",children:[o.jsxs("div",{className:"auth-center-header",children:[o.jsxs(G,{to:"/",className:"auth-center-logo-wrap","aria-label":"Go to Home",children:[o.jsx("img",{src:Ue("/assets/ozilla/logo.png"),alt:"Ozilla Festival",className:"auth-center-logo",onError:s=>{s.currentTarget.src=Ue("/assets/logo.jpeg")}}),o.jsxs("div",{className:"auth-center-brand-text",children:[o.jsx("strong",{children:"OZILLA FESTIVAL"}),o.jsx("span",{children:"OFFICIAL PORTAL · 2026"})]})]}),o.jsx("span",{className:"auth-center-tag",children:"PAKISTAN'S PREMIER MUSIC FESTIVAL"}),o.jsx("h1",{className:"auth-center-title",children:n?"Welcome Back to Ozilla":"Join Ozilla Festival 2026"})]}),o.jsxs("section",{className:"auth-card",children:[o.jsxs("div",{className:"auth-card-tabs",children:[o.jsx(G,{to:`/login${t.search}`,className:`auth-tab-btn ${n?"active":""}`,children:"Sign In"}),o.jsx(G,{to:`/register${t.search}`,className:`auth-tab-btn ${r?"active":""}`,children:"Create Account"})]}),o.jsx("div",{className:"auth-card-body",children:e||o.jsx(Pi,{})})]}),o.jsxs("div",{className:"auth-center-ribbon",children:[o.jsx("span",{children:"📅 Nov 01, 2026"}),o.jsx("span",{children:"📍 Lahore, Pakistan"}),o.jsx("span",{children:"⭐ 10,000+ Fans"})]})]})]})}const Md=k.createContext({});function mr(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const J5=typeof window<"u",mi=J5?k.useLayoutEffect:k.useEffect,qo=k.createContext(null);function Id(e,t){e.indexOf(t)===-1&&e.push(t)}function po(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Qt=(e,t,n)=>n>t?t:n<e?e:n;let Ko=()=>{};const Vn={},dx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),fx=e=>typeof e=="object"&&e!==null,px=e=>/^0[^.\s]+$/u.test(e);function hx(e){let t;return()=>(t===void 0&&(t=e()),t)}const kt=e=>e,Oi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),gi=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class _d{constructor(){this.subscriptions=[]}add(t){return Id(this.subscriptions,t),()=>po(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let i=0;i<s;i++){const a=this.subscriptions[i];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ut=e=>e*1e3,wt=e=>e/1e3,mx=(e,t)=>t?e*(1e3/t):0,gx=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ek=1e-7,tk=12;function nk(e,t,n,r,s){let i,a,l=0;do a=t+(n-t)/2,i=gx(a,r,s)-e,i>0?n=a:t=a;while(Math.abs(i)>ek&&++l<tk);return a}function Li(e,t,n,r){if(e===t&&n===r)return kt;const s=i=>nk(i,0,1,e,n);return i=>i===0||i===1?i:gx(s(i),t,r)}const xx=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,yx=e=>t=>1-e(1-t),vx=Li(.33,1.53,.69,.99),Fd=yx(vx),wx=xx(Fd),bx=e=>e>=1?1:(e*=2)<1?.5*Fd(e):.5*(2-Math.pow(2,-10*(e-1))),zd=e=>1-Math.sin(Math.acos(e)),kx=yx(zd),Sx=xx(zd),rk=Li(.42,0,1,1),sk=Li(0,0,.58,1),jx=Li(.42,0,.58,1),ik=e=>Array.isArray(e)&&typeof e[0]!="number",Nx=e=>Array.isArray(e)&&typeof e[0]=="number",ak={linear:kt,easeIn:rk,easeInOut:jx,easeOut:sk,circIn:zd,circInOut:Sx,circOut:kx,backIn:Fd,backInOut:wx,backOut:vx,anticipate:bx},ok=e=>typeof e=="string",Hp=e=>{if(Nx(e)){Ko(e.length===4);const[t,n,r,s]=e;return Li(t,n,r,s)}else if(ok(e))return ak[e];return e},aa=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function lk(e){let t=new Set,n=new Set,r=!1,s=!1;const i=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){i.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const g=f&&r?t:n;return d&&i.add(u),g.add(u),u},cancel:u=>{n.delete(u),i.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(l),t.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const ck=40;function Ex(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,a=aa.reduce((y,v)=>(y[v]=lk(i),y),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:f,preRender:p,render:g,postRender:m}=a,w=()=>{const y=Vn.useManualTiming,v=y?s.timestamp:performance.now();n=!1,y||(s.delta=r?1e3/60:Math.max(Math.min(v-s.timestamp,ck),1)),s.timestamp=v,s.isProcessing=!0,l.process(s),c.process(s),u.process(s),d.process(s),f.process(s),p.process(s),g.process(s),m.process(s),s.isProcessing=!1,n&&t&&(r=!1,e(w))},b=()=>{n=!0,r=!0,s.isProcessing||e(w)};return{schedule:aa.reduce((y,v)=>{const S=a[v];return y[v]=(E,P=!1,N=!1)=>(n||b(),S.schedule(E,P,N)),y},{}),cancel:y=>{for(let v=0;v<aa.length;v++)a[aa[v]].cancel(y)},state:s,steps:a}}const{schedule:te,cancel:dn,state:Oe,steps:Il}=Ex(typeof requestAnimationFrame<"u"?requestAnimationFrame:kt,!0);let Ca;function uk(){Ca=void 0}const qe={now:()=>(Ca===void 0&&qe.set(Oe.isProcessing||Vn.useManualTiming?Oe.timestamp:performance.now()),Ca),set:e=>{Ca=e,queueMicrotask(uk)}},Px=e=>t=>typeof t=="string"&&t.startsWith(e),Tx=Px("--"),dk=Px("var(--"),Dd=e=>dk(e)?fk.test(e.split("/*")[0].trim()):!1,fk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Wp(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ps={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},xi={...ps,transform:e=>Qt(0,1,e)},oa={...ps,default:1},Hs=e=>Math.round(e*1e5)/1e5,Vd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pk(e){return e==null}const hk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bd=(e,t)=>n=>!!(typeof n=="string"&&hk.test(n)&&n.startsWith(e)||t&&!pk(n)&&Object.prototype.hasOwnProperty.call(n,t)),Cx=(e,t,n)=>r=>{if(typeof r!="string")return r;const[s,i,a,l]=r.match(Vd);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},mk=e=>Qt(0,255,e),_l={...ps,transform:e=>Math.round(mk(e))},tr={test:Bd("rgb","red"),parse:Cx("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+_l.transform(e)+", "+_l.transform(t)+", "+_l.transform(n)+", "+Hs(xi.transform(r))+")"};function gk(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const su={test:Bd("#"),parse:gk,transform:tr.transform},Mi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),en=Mi("deg"),Xt=Mi("%"),z=Mi("px"),xk=Mi("vh"),yk=Mi("vw"),Gp={...Xt,parse:e=>Xt.parse(e)/100,transform:e=>Xt.transform(e*100)},Dr={test:Bd("hsl","hue"),parse:Cx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Xt.transform(Hs(t))+", "+Xt.transform(Hs(n))+", "+Hs(xi.transform(r))+")"},ve={test:e=>tr.test(e)||su.test(e)||Dr.test(e),parse:e=>tr.test(e)?tr.parse(e):Dr.test(e)?Dr.parse(e):su.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?tr.transform(e):Dr.transform(e),getAnimatableNone:e=>{const t=ve.parse(e);return t.alpha=0,ve.transform(t)}},vk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wk(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Vd))==null?void 0:t.length)||0)+(((n=e.match(vk))==null?void 0:n.length)||0)>0}const Rx="number",Ax="color",bk="var",kk="var(",qp="${}",Sk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function is(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[];let i=0;const l=t.replace(Sk,c=>(ve.test(c)?(r.color.push(i),s.push(Ax),n.push(ve.parse(c))):c.startsWith(kk)?(r.var.push(i),s.push(bk),n.push(c)):(r.number.push(i),s.push(Rx),n.push(parseFloat(c))),++i,qp)).split(qp);return{values:n,split:l,indexes:r,types:s}}function jk(e){return is(e).values}function Ox({split:e,types:t}){const n=e.length;return r=>{let s="";for(let i=0;i<n;i++)if(s+=e[i],r[i]!==void 0){const a=t[i];a===Rx?s+=Hs(r[i]):a===Ax?s+=ve.transform(r[i]):s+=r[i]}return s}}function Nk(e){return Ox(is(e))}const Ek=e=>typeof e=="number"?0:ve.test(e)?ve.getAnimatableNone(e):e,Pk=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:Ek(e);function Tk(e){const t=is(e);return Ox(t)(t.values.map((r,s)=>Pk(r,t.split[s])))}const _t={test:wk,parse:jk,createTransformer:Nk,getAnimatableNone:Tk};function Fl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ck({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,a=0;if(!t)s=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;s=Fl(c,l,e+1/3),i=Fl(c,l,e),a=Fl(c,l,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}function ho(e,t){return n=>n>0?t:e}const se=(e,t,n)=>e+(t-e)*n,zl=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r;return s<0?0:Math.sqrt(s)},Rk=[su,tr,Dr],Ak=e=>Rk.find(t=>t.test(e));function Kp(e){const t=Ak(e);if(!t)return!1;let n=t.parse(e);return t===Dr&&(n=Ck(n)),n}const Yp=(e,t)=>{const n=Kp(e),r=Kp(t);if(!n||!r)return ho(e,t);const s={...n};return i=>(s.red=zl(n.red,r.red,i),s.green=zl(n.green,r.green,i),s.blue=zl(n.blue,r.blue,i),s.alpha=se(n.alpha,r.alpha,i),tr.transform(s))},iu=new Set(["none","hidden"]);function Ok(e,t){return iu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Lk(e,t){return n=>se(e,t,n)}function Ud(e){return typeof e=="number"?Lk:typeof e=="string"?Dd(e)?ho:ve.test(e)?Yp:_k:Array.isArray(e)?Lx:typeof e=="object"?ve.test(e)?Yp:Mk:ho}function Lx(e,t){const n=[...e],r=n.length,s=e.map((i,a)=>Ud(i)(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=s[a](i);return n}}function Mk(e,t){const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=Ud(e[s])(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}}function Ik(e,t){const n=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const i=t.types[s],a=e.indexes[i][r[i]],l=e.values[a]??0;n[s]=l,r[i]++}return n}const _k=(e,t)=>{const n=_t.createTransformer(t),r=is(e),s=is(t);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?iu.has(e)&&!s.values.length||iu.has(t)&&!r.values.length?Ok(e,t):Oi(Lx(Ik(r,s),s.values),n):ho(e,t)};function Mx(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?se(e,t,n):Ud(e)(e,t)}const Fk=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>te.update(t,n),stop:()=>dn(t),now:()=>Oe.isProcessing?Oe.timestamp:qe.now()}},Ix=(e,t,n=10)=>{let r="";const s=Math.max(Math.round(t/n),2);for(let i=0;i<s;i++)r+=Math.round(e(i/(s-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},mo=2e4;function $d(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<mo;)t+=n,r=e.next(t);return t>=mo?1/0:t}function zk(e,t=100,n){const r=n({...e,keyframes:[0,t]}),s=Math.min($d(r),mo);return{type:"keyframes",ease:i=>r.next(s*i).value/t,duration:wt(s)}}const he={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function au(e,t){return e*Math.sqrt(1-t*t)}const Dk=12;function Vk(e,t,n){let r=n;for(let s=1;s<Dk;s++)r=r-e(r)/t(r);return r}const Dl=.001;function Bk({duration:e=he.duration,bounce:t=he.bounce,velocity:n=he.velocity,mass:r=he.mass}){let s,i,a=1-t;a=Qt(he.minDamping,he.maxDamping,a),e=Qt(he.minDuration,he.maxDuration,wt(e)),a<1?(s=u=>{const d=u*a,f=d*e,p=d-n,g=au(u,a),m=Math.exp(-f);return Dl-p/g*m},i=u=>{const f=u*a*e,p=f*n+n,g=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),w=au(Math.pow(u,2),a);return(-s(u)+Dl>0?-1:1)*((p-g)*m)/w}):(s=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Dl+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=Vk(s,i,l);if(e=ut(e),isNaN(c))return{stiffness:he.stiffness,damping:he.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const Uk=["duration","bounce"],$k=["stiffness","damping","mass"];function Xp(e,t){return t.some(n=>e[n]!==void 0)}function Hk(e){let t={velocity:he.velocity,stiffness:he.stiffness,damping:he.damping,mass:he.mass,isResolvedFromDuration:!1,...e};if(!Xp(e,$k)&&Xp(e,Uk))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),s=r*r,i=2*Qt(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:he.mass,stiffness:s,damping:i}}else{const n=Bk({...e,velocity:0});t={...t,...n,mass:he.mass},t.isResolvedFromDuration=!0}return t}function go(e=he.visualDuration,t=he.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:s}=n;const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:g}=Hk({...n,velocity:-wt(n.velocity||0)}),m=p||0,w=u/(2*Math.sqrt(c*d)),b=a-i,h=wt(Math.sqrt(c/d)),x=Math.abs(b)<5;r||(r=x?he.restSpeed.granular:he.restSpeed.default),s||(s=x?he.restDelta.granular:he.restDelta.default);let y,v,S,E,P,N;if(w<1)S=au(h,w),E=(m+w*h*b)/S,y=C=>{const I=Math.exp(-w*h*C);return a-I*(E*Math.sin(S*C)+b*Math.cos(S*C))},P=w*h*E+b*S,N=w*h*b-E*S,v=C=>Math.exp(-w*h*C)*(P*Math.sin(S*C)+N*Math.cos(S*C));else if(w===1){y=I=>a-Math.exp(-h*I)*(b+(m+h*b)*I);const C=m+h*b;v=I=>Math.exp(-h*I)*(h*C*I-m)}else{const C=h*Math.sqrt(w*w-1);y=H=>{const J=Math.exp(-w*h*H),O=Math.min(C*H,300);return a-J*((m+w*h*b)*Math.sinh(O)+C*b*Math.cosh(O))/C};const I=(m+w*h*b)/C,V=w*h*I-b*C,$=w*h*b-I*C;v=H=>{const J=Math.exp(-w*h*H),O=Math.min(C*H,300);return J*(V*Math.sinh(O)+$*Math.cosh(O))}}const R={calculatedDuration:g&&f||null,velocity:C=>ut(v(C)),next:C=>{if(!g&&w<1){const V=Math.exp(-w*h*C),$=Math.sin(S*C),H=Math.cos(S*C),J=a-V*(E*$+b*H),O=ut(V*(P*$+N*H));return l.done=Math.abs(O)<=r&&Math.abs(a-J)<=s,l.value=l.done?a:J,l}const I=y(C);if(g)l.done=C>=f;else{const V=ut(v(C));l.done=Math.abs(V)<=r&&Math.abs(a-I)<=s}return l.value=l.done?a:I,l},toString:()=>{const C=Math.min($d(R),mo),I=Ix(V=>R.next(C*V).value,C,30);return C+"ms "+I},toTransition:()=>{}};return R}go.applyToOptions=e=>{const t=zk(e,100,go);return e.ease=t.ease,e.duration=ut(t.duration),e.type="keyframes",e};const Wk=5;function _x(e,t,n){const r=Math.max(t-Wk,0);return mx(n-e(r),t-r)}function ou({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=N=>l!==void 0&&N<l||c!==void 0&&N>c,m=N=>l===void 0?c:c===void 0||Math.abs(l-N)<Math.abs(c-N)?l:c;let w=n*t;const b=f+w,h=a===void 0?b:a(b);h!==b&&(w=h-f);const x=N=>-w*Math.exp(-N/r),y=N=>h+x(N),v=N=>{const R=x(N),C=y(N);p.done=Math.abs(R)<=u,p.value=p.done?h:C};let S,E;const P=N=>{g(p.value)&&(S=N,E=go({keyframes:[p.value,m(p.value)],velocity:_x(y,N,p.value),damping:s,stiffness:i,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:N=>{let R=!1;return!E&&S===void 0&&(R=!0,v(N),P(N)),S!==void 0&&N>=S?E.next(N-S):(!R&&v(N),p)}}}function Gk(e,t,n){const r=[],s=n||Vn.mix||Mx,i=e.length-1;for(let a=0;a<i;a++){let l=s(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||kt:t;l=Oi(c,l)}r.push(l)}return r}function Fx(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;if(Ko(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Gk(t,r,s),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(c>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=gi(e[f],e[f+1],d);return l[f](p)};return n?d=>u(Qt(e[0],e[i-1],d)):u}function qk(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=gi(0,t,r);e.push(se(n,1,s))}}function Kk(e){const t=[0];return qk(t,e.length-1),t}function Yk(e,t){return e.map(n=>n*t)}function Xk(e,t){return e.map(()=>t||jx).splice(0,e.length-1)}function Ws({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=ik(r)?r.map(Hp):Hp(r),i={done:!1,value:t[0]},a=Yk(n&&n.length===t.length?n:Kk(t),e),l=Fx(a,t,{ease:Array.isArray(s)?s:Xk(t,s)});return{calculatedDuration:e,next:c=>(i.value=l(c),i.done=c>=e,i)}}const Qk=e=>e!==null;function Yo(e,{repeat:t,repeatType:n="loop"},r,s=1){const i=e.filter(Qk),l=s<0||t&&n!=="loop"&&t%2===1?0:i.length-1;return!l||r===void 0?i[l]:r}const Zk={decay:ou,inertia:ou,tween:Ws,keyframes:Ws,spring:go};function zx(e){typeof e.type=="string"&&(e.type=Zk[e.type])}class Hd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const Jk=e=>e/100;class yi extends Hd{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,s;const{motionValue:n}=this.options;n&&n.updatedAt!==qe.now()&&this.tick(qe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(r=this.options).onStop)==null||s.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;zx(t);const{type:n=Ws,repeat:r=0,repeatDelay:s=0,repeatType:i,velocity:a=0}=t;let{keyframes:l}=t;const c=n||Ws;c!==Ws&&typeof l[0]!="number"&&(this.mixKeyframes=Oi(Jk,Mx(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});i==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=$d(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+s,this.totalDuration=this.resolvedDuration*(r+1)-s,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:s,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:g,type:m,onUpdate:w,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const h=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>s;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let y=this.currentTime,v=r;if(f){const N=Math.min(this.currentTime,s)/l;let R=Math.floor(N),C=N%1;!C&&N>=1&&(C=1),C===1&&R--,R=Math.min(R,f+1),!!(R%2)&&(p==="reverse"?(C=1-C,g&&(C-=g/l)):p==="mirror"&&(v=a)),y=Qt(0,1,C)*l}let S;x?(this.delayState.value=d[0],S=this.delayState):S=v.next(y),i&&!x&&(S.value=i(S.value));let{done:E}=S;!x&&c!==null&&(E=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return P&&m!==ou&&(S.value=Yo(d,this.options,b,this.speed)),w&&w(S.value),P&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return wt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+wt(t)}get time(){return wt(this.currentTime)}set time(t){t=ut(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return _x(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(qe.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=wt(this.currentTime))}play(){var s,i;if(this.isStopped)return;const{driver:t=Fk,startTime:n}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),(i=(s=this.options).onPlay)==null||i.call(s);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function eS(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const nr=e=>e*180/Math.PI,lu=e=>{const t=nr(Math.atan2(e[1],e[0]));return cu(t)},tS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:lu,rotateZ:lu,skewX:e=>nr(Math.atan(e[1])),skewY:e=>nr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},cu=e=>(e=e%360,e<0&&(e+=360),e),Qp=lu,Zp=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Jp=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),nS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zp,scaleY:Jp,scale:e=>(Zp(e)+Jp(e))/2,rotateX:e=>cu(nr(Math.atan2(e[6],e[5]))),rotateY:e=>cu(nr(Math.atan2(-e[2],e[0]))),rotateZ:Qp,rotate:Qp,skewX:e=>nr(Math.atan(e[4])),skewY:e=>nr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function uu(e){return e.includes("scale")?1:0}function du(e,t){if(!e||e==="none")return uu(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,s;if(n)r=nS,s=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=tS,s=l}if(!s)return uu(t);const i=r[t],a=s[1].split(",").map(sS);return typeof i=="function"?i(a):a[i]}const rS=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return du(n,t)};function sS(e){return parseFloat(e.trim())}const hs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ms=new Set([...hs,"pathRotation"]),eh=e=>e===ps||e===z,iS=new Set(["x","y","z"]),aS=hs.filter(e=>!iS.has(e));function oS(e){const t=[];return aS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Tn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>du(t,"x"),y:(e,{transform:t})=>du(t,"y")};Tn.translateX=Tn.x;Tn.translateY=Tn.y;const ar=new Set;let fu=!1,pu=!1,hu=!1;function Dx(){if(pu){const e=Array.from(ar).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const s=oS(r);s.length&&(n.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const s=n.get(r);s&&s.forEach(([i,a])=>{var l;(l=r.getValue(i))==null||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}pu=!1,fu=!1,ar.forEach(e=>e.complete(hu)),ar.clear()}function Vx(){ar.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(pu=!0)})}function lS(){hu=!0,Vx(),Dx(),hu=!1}class Wd{constructor(t,n,r,s,i,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=s,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(ar.add(this),fu||(fu=!0,te.read(Vx),te.resolveKeyframes(Dx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:s}=this;if(t[0]===null){const i=s==null?void 0:s.get(),a=t[t.length-1];if(i!==void 0)t[0]=i;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&i===void 0&&s.set(t[0])}eS(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ar.delete(this)}cancel(){this.state==="scheduled"&&(ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const cS=e=>e.startsWith("--");function Bx(e,t,n){cS(t)?e.style.setProperty(t,n):e.style[t]=n}const uS={};function Ux(e,t){const n=hx(e);return()=>uS[t]??n()}const dS=Ux(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),$x=Ux(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ms=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,th={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ms([0,.65,.55,1]),circOut:Ms([.55,0,1,.45]),backIn:Ms([.31,.01,.66,-.59]),backOut:Ms([.33,1.53,.69,.99])};function Hx(e,t){if(e)return typeof e=="function"?$x()?Ix(e,t):"ease-out":Nx(e)?Ms(e):Array.isArray(e)?e.map(n=>Hx(n,t)||th.easeOut):th[e]}function fS(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:a="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const f=Hx(l,s);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:s,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(d,p)}function Wx(e){return typeof e=="function"&&"applyToOptions"in e}function pS({type:e,...t}){return Wx(e)&&$x()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Gx extends Hd{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:s,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=t,Ko(typeof t.type!="string");const u=pS(t);this.animation=fS(n,r,s,u,i),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const d=Yo(s,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Bx(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,s;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((s=(r=this.animation).commitStyles)==null||s.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return wt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+wt(t)}get time(){return wt(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ut(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:s}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&dS()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),kt):s(this)}}const qx={anticipate:bx,backInOut:wx,circInOut:Sx};function hS(e){return e in qx}function mS(e){typeof e.ease=="string"&&hS(e.ease)&&(e.ease=qx[e.ease])}const Vl=10;class gS extends Gx{constructor(t){mS(t),zx(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:s,element:i,...a}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new yi({...a,autoplay:!1}),c=Math.max(Vl,qe.now()-this.startTime),u=Qt(0,Vl,c-Vl),d=l.sample(c).value,{name:f}=this.options;i&&f&&Bx(i,f,d),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,d,u),l.stop()}}const nh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(_t.test(e)||e==="0")&&!e.startsWith("url("));function xS(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yS(e,t,n,r){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],a=nh(s,t),l=nh(i,t);return!a||!l?!1:xS(e)||(n==="spring"||Wx(n))&&r}function mu(e){e.duration=0,e.type="keyframes"}const Kx=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),vS=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function wS(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&vS.test(e[t]))return!0;return!1}const bS=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),kS=hx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function SS(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:s,damping:i,type:a,keyframes:l}=e,c=(f=t==null?void 0:t.owner)==null?void 0:f.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:d}=t.owner.getProps();return kS()&&n&&(Kx.has(n)||bS.has(n)&&wS(l))&&(n!=="transform"||!d)&&!u&&!r&&s!=="mirror"&&i!==0&&a!=="inertia"}const jS=40;class NS extends Hd{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:a="loop",keyframes:l,name:c,motionValue:u,element:d,...f}){var m;super(),this.stop=()=>{var w,b;this._animation&&(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=qe.now();const p={autoplay:t,delay:n,type:r,repeat:s,repeatDelay:i,repeatType:a,name:c,motionValue:u,element:d,...f},g=(d==null?void 0:d.KeyframeResolver)||Wd;this.keyframeResolver=new g(l,(w,b,h)=>this.onKeyframesResolved(w,b,p,!h),c,u,d),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,s){var h,x;this.keyframeResolver=void 0;const{name:i,type:a,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=qe.now();let f=!0;yS(t,i,a,l)||(f=!1,(Vn.instantAnimations||!c)&&(d==null||d(Yo(t,r,n))),t[0]=t[t.length-1],mu(r),r.repeat=0);const g={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>jS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},m=f&&!u&&SS(g),w=(x=(h=g.motionValue)==null?void 0:h.owner)==null?void 0:x.current;let b;if(m)try{b=new gS({...g,element:w})}catch{b=new yi(g)}else b=new yi(g);b.finished.then(()=>{this.notifyFinished()}).catch(kt),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),lS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Yx(e,t,n,r=0,s=1){const i=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),a=e.size,l=(a-1)*r;return typeof n=="function"?n(i,a):s===1?i*r:l-i*r}const rh=30,ES=e=>!isNaN(parseFloat(e)),Gs={current:void 0};class PS{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var i;const s=qe.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((i=this.events.change)==null||i.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=qe.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=ES(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _d);const r=this.events[t].add(n);return t==="change"?()=>{r(),te.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Gs.current&&Gs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=qe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>rh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,rh);return mx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gr(e,t){return new PS(e,t)}function Xx(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function Gd(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Xx(n,e):n}const TS={type:"spring",stiffness:500,damping:25,restSpeed:10},CS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RS={type:"keyframes",duration:.8},AS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},OS=(e,{keyframes:t})=>t.length>2?RS:ms.has(e)?e.startsWith("scale")?CS(t[1]):TS:AS,LS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function MS(e){for(const t in e)if(!LS.has(t))return!0;return!1}const qd=(e,t,n,r={},s,i)=>a=>{const l=Gd(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-ut(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:s};MS(l)||Object.assign(d,OS(e,d)),d.duration&&(d.duration=ut(d.duration)),d.repeatDelay&&(d.repeatDelay=ut(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(mu(d),d.delay===0&&(f=!0)),(Vn.instantAnimations||Vn.skipAnimations||s!=null&&s.shouldSkipAnimations||l.skipAnimations)&&(f=!0,mu(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,f&&!i&&t.get()!==void 0){const p=Yo(d.keyframes,l);if(p!==void 0){te.update(()=>{d.onUpdate(p),d.onComplete()});return}}return l.isSync?new yi(d):new NS(d)},IS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _S(e){const t=IS.exec(e);if(!t)return[,];const[,n,r,s]=t;return[`--${n??r}`,s]}function Qx(e,t,n=1){const[r,s]=_S(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const a=i.trim();return dx(a)?parseFloat(a):a}return Dd(s)?Qx(s,t,n+1):s}function sh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Kd(e,t,n,r){if(typeof t=="function"){const[s,i]=sh(r);t=t(n!==void 0?n:e.custom,s,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,i]=sh(r);t=t(n!==void 0?n:e.custom,s,i)}return t}function or(e,t,n){const r=e.getProps();return Kd(r,t,n!==void 0?n:r.custom,e)}const Zx=new Set(["width","height","top","left","right","bottom",...hs]),gu=e=>Array.isArray(e);function FS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gr(n))}function zS(e){return gu(e)?e[e.length-1]||0:e}function DS(e,t){const n=or(e,t);let{transitionEnd:r={},transition:s={},...i}=n||{};i={...i,...r};for(const a in i){const l=zS(i[a]);FS(e,a,l)}}const Ne=e=>!!(e&&e.getVelocity);function VS(e){return!!(Ne(e)&&e.add)}function xu(e,t){const n=e.getValue("willChange");if(VS(n))return n.add(t);if(!n&&Vn.WillChange){const r=new Vn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Yd(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const BS="framerAppearId",Jx="data-"+Yd(BS);function ey(e){return e.props[Jx]}function US({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ty(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i,transitionEnd:a,...l}=t;const c=e.getDefaultTransition();i=i?Xx(i,c):c;const u=i==null?void 0:i.reduceMotion,d=i==null?void 0:i.skipAnimations;r&&(i=r);const f=[],p=s&&e.animationState&&e.animationState.getState()[s],g=i==null?void 0:i.path;g&&g.animateVisualElement(e,l,i,n,f);for(const m in l){const w=e.getValue(m,e.latestValues[m]??null),b=l[m];if(b===void 0||p&&US(p,m))continue;const h={delay:n,...Gd(i||{},m)};d&&(h.skipAnimations=!0);const x=w.get();if(x!==void 0&&!w.isAnimating()&&!Array.isArray(b)&&b===x&&!h.velocity){te.update(()=>w.set(b));continue}let y=!1;if(window.MotionHandoffAnimation){const E=ey(e);if(E){const P=window.MotionHandoffAnimation(E,m,te);P!==null&&(h.startTime=P,y=!0)}}xu(e,m);const v=u??e.shouldReduceMotion;w.start(qd(m,w,b,v&&Zx.has(m)?{type:!1}:h,e,y));const S=w.animation;S&&f.push(S)}if(a){const m=()=>te.update(()=>{a&&DS(e,a)});f.length?Promise.all(f).then(m):m()}return f}function yu(e,t,n={}){var c;const r=or(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(ty(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return $S(e,t,u,d,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[i,a]:[a,i];return u().then(()=>d())}else return Promise.all([i(),a(n.delay)])}function $S(e,t,n=0,r=0,s=0,i=1,a){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(yu(c,t,{...a,delay:n+(typeof r=="function"?0:r)+Yx(e.variantChildren,c,r,s,i)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function HS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(i=>yu(e,i,n));r=Promise.all(s)}else if(typeof t=="string")r=yu(e,t,n);else{const s=typeof t=="function"?or(e,t,n.custom):t;r=Promise.all(ty(e,s,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const WS={test:e=>e==="auto",parse:e=>e},ny=e=>t=>t.test(e),ry=[ps,z,Xt,en,yk,xk,WS],ih=e=>ry.find(ny(e));function GS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||px(e):!0}const qS=new Set(["brightness","contrast","saturate","opacity"]);function KS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Vd)||[];if(!r)return e;const s=n.replace(r,"");let i=qS.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const YS=/\b([a-z-]*)\(.*?\)/gu,vu={..._t,getAnimatableNone:e=>{const t=e.match(YS);return t?t.map(KS).join(" "):e}},wu={..._t,getAnimatableNone:e=>{const t=_t.parse(e);return _t.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ah={...ps,transform:Math.round},XS={rotate:en,pathRotation:en,rotateX:en,rotateY:en,rotateZ:en,scale:oa,scaleX:oa,scaleY:oa,scaleZ:oa,skew:en,skewX:en,skewY:en,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:xi,originX:Gp,originY:Gp,originZ:z},xo={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,inset:z,insetBlock:z,insetBlockStart:z,insetBlockEnd:z,insetInline:z,insetInlineStart:z,insetInlineEnd:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,paddingBlock:z,paddingBlockStart:z,paddingBlockEnd:z,paddingInline:z,paddingInlineStart:z,paddingInlineEnd:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,marginBlock:z,marginBlockStart:z,marginBlockEnd:z,marginInline:z,marginInlineStart:z,marginInlineEnd:z,fontSize:z,backgroundPositionX:z,backgroundPositionY:z,...XS,zIndex:ah,fillOpacity:xi,strokeOpacity:xi,numOctaves:ah},QS={...xo,color:ve,backgroundColor:ve,outlineColor:ve,fill:ve,stroke:ve,borderColor:ve,borderTopColor:ve,borderRightColor:ve,borderBottomColor:ve,borderLeftColor:ve,filter:vu,WebkitFilter:vu,mask:wu,WebkitMask:wu},sy=e=>QS[e],ZS=new Set([vu,wu]);function iy(e,t){let n=sy(e);return ZS.has(n)||(n=_t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const JS=new Set(["auto","none","0"]);function ej(e,t,n){let r=0,s;for(;r<e.length&&!s;){const i=e[r];typeof i=="string"&&!JS.has(i)&&is(i).values.length&&(s=e[r]),r++}if(s&&n)for(const i of t)e[i]=iy(n,s)}class tj extends Wd{constructor(t,n,r,s,i){super(t,n,r,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),Dd(f))){const p=Qx(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Zx.has(r)||t.length!==2)return;const[s,i]=t,a=ih(s),l=ih(i),c=Wp(s),u=Wp(i);if(c!==u&&Tn[r]){this.needsMeasurement=!0;return}if(a!==l)if(eh(a)&&eh(l))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else Tn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let s=0;s<t.length;s++)(t[s]===null||GS(t[s]))&&r.push(s);r.length&&ej(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(r,s).jump(s,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const i=r.length-1,a=r[i];r[i]=Tn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Xd=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function ay(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const s=(n==null?void 0:n[e])??r.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(r=>r!=null)}const bu=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Ra(e){return fx(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Qd}=Ex(queueMicrotask,!1),Rt={x:!1,y:!1};function oy(){return Rt.x||Rt.y}function nj(e){return e==="x"||e==="y"?Rt[e]?null:(Rt[e]=!0,()=>{Rt[e]=!1}):Rt.x||Rt.y?null:(Rt.x=Rt.y=!0,()=>{Rt.x=Rt.y=!1})}function ly(e,t){const n=ay(e),r=new AbortController,s={passive:!0,...t,signal:r.signal};return[n,s,()=>r.abort()]}function rj(e){return!(e.pointerType==="touch"||oy())}function sj(e,t,n={}){const[r,s,i]=ly(e,n);return r.forEach(a=>{let l=!1,c=!1,u;const d=()=>{a.removeEventListener("pointerleave",m)},f=b=>{u&&(u(b),u=void 0),d()},p=b=>{l=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),c&&(c=!1,f(b))},g=()=>{l=!0,window.addEventListener("pointerup",p,s),window.addEventListener("pointercancel",p,s)},m=b=>{if(b.pointerType!=="touch"){if(l){c=!0;return}f(b)}},w=b=>{if(!rj(b))return;c=!1;const h=t(a,b);typeof h=="function"&&(u=h,a.addEventListener("pointerleave",m,s))};a.addEventListener("pointerenter",w,s),a.addEventListener("pointerdown",g,s)}),i}const cy=(e,t)=>t?e===t?!0:cy(e,t.parentElement):!1,Zd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ij=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aj(e){return ij.has(e.tagName)||e.isContentEditable===!0}const oj=new Set(["INPUT","SELECT","TEXTAREA"]);function lj(e){return oj.has(e.tagName)||e.isContentEditable===!0}const Aa=new WeakSet;function oh(e){return t=>{t.key==="Enter"&&e(t)}}function Bl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const cj=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=oh(()=>{if(Aa.has(n))return;Bl(n,"down");const s=oh(()=>{Bl(n,"up")}),i=()=>Bl(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function lh(e){return Zd(e)&&!oy()}const ch=new WeakSet;function uj(e,t,n={}){const[r,s,i]=ly(e,n),a=l=>{const c=l.currentTarget;if(!lh(l)||ch.has(l))return;Aa.add(c),n.stopPropagation&&ch.add(l);const u=t(c,l),d={...s,capture:!0},f=(m,w)=>{window.removeEventListener("pointerup",p,d),window.removeEventListener("pointercancel",g,d),Aa.has(c)&&Aa.delete(c),lh(m)&&typeof u=="function"&&u(m,{success:w})},p=m=>{f(m,c===window||c===document||n.useGlobalTarget||cy(c,m.target))},g=m=>{f(m,!1)};window.addEventListener("pointerup",p,d),window.addEventListener("pointercancel",g,d)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,s),Ra(l)&&(l.addEventListener("focus",u=>cj(u,s)),!aj(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),i}function Jd(e){return fx(e)&&"ownerSVGElement"in e}const Oa=new WeakMap;let vn;const uy=(e,t,n)=>(r,s)=>s&&s[0]?s[0][e+"Size"]:Jd(r)&&"getBBox"in r?r.getBBox()[t]:r[n],dj=uy("inline","width","offsetWidth"),fj=uy("block","height","offsetHeight");function pj({target:e,borderBoxSize:t}){var n;(n=Oa.get(e))==null||n.forEach(r=>{r(e,{get width(){return dj(e,t)},get height(){return fj(e,t)}})})}function hj(e){e.forEach(pj)}function mj(){typeof ResizeObserver>"u"||(vn=new ResizeObserver(hj))}function gj(e,t){vn||mj();const n=ay(e);return n.forEach(r=>{let s=Oa.get(r);s||(s=new Set,Oa.set(r,s)),s.add(t),vn==null||vn.observe(r)}),()=>{n.forEach(r=>{const s=Oa.get(r);s==null||s.delete(t),s!=null&&s.size||vn==null||vn.unobserve(r)})}}const La=new Set;let Vr;function xj(){Vr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};La.forEach(t=>t(e))},window.addEventListener("resize",Vr)}function yj(e){return La.add(e),Vr||xj(),()=>{La.delete(e),!La.size&&typeof Vr=="function"&&(window.removeEventListener("resize",Vr),Vr=void 0)}}function uh(e,t){return typeof e=="function"?yj(e):gj(e,t)}function vj(e){return Jd(e)&&e.tagName==="svg"}function wj(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],s=e[1+n],i=e[2+n],a=e[3+n],l=Fx(s,i,a);return t?l(r):l}function bj(e,t,n={}){const r=e.get();let s=null,i=r,a;const l=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,c=()=>{s&&(s.stop(),s=null),e.animation=void 0},u=()=>{const f=dh(e.get()),p=dh(i);if(f===p){c();return}const g=s?s.getGeneratorVelocity():e.getVelocity();c(),s=new yi({keyframes:[f,p],velocity:g,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:a})},d=()=>{var f;u(),e.animation=s??void 0,(f=e.events.animationStart)==null||f.notify(),s==null||s.then(()=>{var p;e.animation=void 0,(p=e.events.animationComplete)==null||p.notify()})};if(e.attach((f,p)=>{i=f,a=g=>p(Ul(g,l)),te.postRender(d)},c),Ne(t)){let f=n.skipInitialAnimation===!0;const p=t.on("change",m=>{f?(f=!1,e.jump(Ul(m,l),!1)):e.set(Ul(m,l))}),g=e.on("destroy",p);return()=>{p(),g()}}return c}function Ul(e,t){return t?e+t:e}function dh(e){return typeof e=="number"?e:parseFloat(e)}const kj=[...ry,ve,_t],Sj=e=>kj.find(ny(e)),fh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:fh(),y:fh()}),ph=()=>({min:0,max:0}),be=()=>({x:ph(),y:ph()}),jj=new WeakMap;function Xo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function vi(e){return typeof e=="string"||Array.isArray(e)}const ef=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tf=["initial",...ef];function Qo(e){return Xo(e.animate)||tf.some(t=>vi(e[t]))}function dy(e){return!!(Qo(e)||e.variants)}function Nj(e,t,n){for(const r in t){const s=t[r],i=n[r];if(Ne(s))e.addValue(r,s);else if(Ne(i))e.addValue(r,gr(s,{owner:e}));else if(i!==s)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=e.getStaticValue(r);e.addValue(r,gr(a!==void 0?a:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const ku={current:null},fy={current:!1},Ej=typeof window<"u";function Pj(){if(fy.current=!0,!!Ej)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ku.current=e.matches;e.addEventListener("change",t),t()}else ku.current=!1}const hh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yo={};function py(e){yo=e}function Tj(){return yo}class Cj{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,skipAnimations:i,blockInitialAnimation:a,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Wd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=qe.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,te.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=i,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=Qo(n),this.isVariantNode=dy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const m=p[g];u[g]!==void 0&&Ne(m)&&m.set(u[g])}}mount(t){var n,r;if(this.hasBeenMounted)for(const s in this.initialValues)(n=this.values.get(s))==null||n.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=t,jj.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,i)=>this.bindToMotionValue(i,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(fy.current||Pj(),this.shouldReduceMotion=ku.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),dn(this.notifyUpdate),dn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Kx.has(t)&&this.current instanceof HTMLElement){const{factory:a,keyframes:l,times:c,ease:u,duration:d}=n.accelerate,f=new Gx({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:ut(d)}),p=a(f);this.valueSubscriptions.set(t,()=>{p(),f.cancel()});return}const r=ms.has(t);r&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&te.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),i&&i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in yo){const n=yo[t];if(!n)continue;const{isEnabled:r,Feature:s}=n;if(!this.features[t]&&s&&r(this.props)&&(this.features[t]=new s(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<hh.length;r++){const s=hh[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i="on"+s,a=t[i];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=Nj(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=gr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(dx(r)||px(r))?r=parseFloat(r):!Sj(r)&&_t.test(n)&&(r=iy(t,n)),this.setBaseTarget(t,Ne(r)?r.get():r)),Ne(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var i;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const a=Kd(this.props,n,(i=this.presenceContext)==null?void 0:i.custom);a&&(r=a[t])}if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Ne(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _d),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Qd.render(this.render)}}class hy extends Cj{constructor(){super(...arguments),this.KeyframeResolver=tj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ne(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Hn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function my({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Rj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Aj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $l(e){return e===void 0||e===1}function Su({scale:e,scaleX:t,scaleY:n}){return!$l(e)||!$l(t)||!$l(n)}function Xn(e){return Su(e)||gy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gy(e){return mh(e.x)||mh(e.y)}function mh(e){return e&&e!=="0%"}function vo(e,t,n){const r=e-n,s=t*r;return n+s}function gh(e,t,n,r,s){return s!==void 0&&(e=vo(e,s,r)),vo(e,n,r)+t}function ju(e,t=0,n=1,r,s){e.min=gh(e.min,t,n,r,s),e.max=gh(e.max,t,n,r,s)}function xy(e,{x:t,y:n}){ju(e.x,t.translate,t.scale,t.originPoint),ju(e.y,n.translate,n.scale,n.originPoint)}const xh=.999999999999,yh=1.0000000000001;function Oj(e,t,n,r=!1){var l;const s=n.length;if(!s)return;t.x=t.y=1;let i,a;for(let c=0;c<s;c++){i=n[c],a=i.projectionDelta;const{visualElement:u}=i.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(Gt(e.x,-i.scroll.offset.x),Gt(e.y,-i.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,xy(e,a)),r&&Xn(i.latestValues)&&Ma(e,i.latestValues,(l=i.layout)==null?void 0:l.layoutBox))}t.x<yh&&t.x>xh&&(t.x=1),t.y<yh&&t.y>xh&&(t.y=1)}function Gt(e,t){e.min+=t,e.max+=t}function vh(e,t,n,r,s=.5){const i=se(e.min,e.max,s);ju(e,t,n,i,r)}function wh(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Ma(e,t,n){const r=n??e;vh(e.x,wh(t.x,r.x),t.scaleX,t.scale,t.originX),vh(e.y,wh(t.y,r.y),t.scaleY,t.scale,t.originY)}function yy(e,t){return my(Aj(e.getBoundingClientRect(),t))}function Lj(e,t,n){const r=yy(e,n),{scroll:s}=t;return s&&(Gt(r.x,s.offset.x),Gt(r.y,s.offset.y)),r}const Mj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ij=hs.length;function _j(e,t,n){let r="",s=!0;for(let a=0;a<Ij;a++){const l=hs[a],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{const d=parseFloat(c);u=l.startsWith("scale")?d===1:d===0}if(!u||n){const d=bu(c,xo[l]);if(!u){s=!1;const f=Mj[l]||l;r+=`${f}(${d}) `}n&&(t[l]=d)}}const i=e.pathRotation;return i&&(s=!1,r+=`rotate(${bu(i,xo.pathRotation)}) `),r=r.trim(),n?r=n(t,s?"":r):s&&(r="none"),r}function nf(e,t,n){const{style:r,vars:s,transformOrigin:i}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(ms.has(c)){a=!0;continue}else if(Tx(c)){s[c]=u;continue}else{const d=bu(u,xo[c]);c.startsWith("origin")?(l=!0,i[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=_j(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=i;r.transformOrigin=`${c} ${u} ${d}`}}function vy(e,{style:t,vars:n},r,s){const i=e.style;let a;for(a in t)i[a]=t[a];s==null||s.applyProjectionStyles(i,r);for(a in n)i.setProperty(a,n[a])}function bh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ps={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=bh(e,t.target.x),r=bh(e,t.target.y);return`${n}% ${r}%`}},Fj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,s=_t.parse(e);if(s.length>5)return r;const i=_t.createTransformer(e),a=typeof s[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;s[0+a]/=l,s[1+a]/=c;const u=se(l,c,.5);return typeof s[2+a]=="number"&&(s[2+a]/=u),typeof s[3+a]=="number"&&(s[3+a]/=u),i(s)}},Nu={borderRadius:{...Ps,applyTo:[...Xd]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:Fj};function wy(e,{layout:t,layoutId:n}){return ms.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Nu[e]||e==="opacity")}function rf(e,t,n){var a;const r=e.style,s=t==null?void 0:t.style,i={};if(!r)return i;for(const l in r)(Ne(r[l])||s&&Ne(s[l])||wy(l,e)||((a=n==null?void 0:n.getValue(l))==null?void 0:a.liveStyle)!==void 0)&&(i[l]=r[l]);return i}function zj(e){return window.getComputedStyle(e)}class Dj extends hy{constructor(){super(...arguments),this.type="html",this.renderInstance=vy}mount(t){Ko(!!t.style),super.mount(t)}readValueFromInstance(t,n){var r;if(ms.has(n))return(r=this.projection)!=null&&r.isProjecting?uu(n):rS(t,n);{const s=zj(t),i=(Tx(n)?s.getPropertyValue(n):s[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return yy(t,n)}build(t,n,r){nf(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return rf(t,n,r)}}const Vj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bj={offset:"strokeDashoffset",array:"strokeDasharray"};function Uj(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?Vj:Bj;e[i.offset]=`${-r}`,e[i.array]=`${t} ${n}`}const by=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ky(e,{attrX:t,attrY:n,attrScale:r,pathLength:s,pathSpacing:i=1,pathOffset:a=0,...l},c,u,d){if(nf(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;for(const g of by)f[g]!==void 0&&(p[g]=f[g],delete f[g]);(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&Uj(f,s,i,a,!1)}const Sy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),jy=e=>typeof e=="string"&&e.toLowerCase()==="svg";function $j(e,t,n,r){vy(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(Sy.has(s)?s:Yd(s),t.attrs[s])}function Ny(e,t,n){const r=rf(e,t,n);for(const s in e)if(Ne(e[s])||Ne(t[s])){const i=hs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[i]=e[s]}return r}class Hj extends hy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=be}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ms.has(n)){const r=sy(n);return r&&r.default||0}if(by.includes(n)){const s=getComputedStyle(t)[n];if(typeof s=="string"&&s)return s.trim()}return n=Sy.has(n)?n:Yd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ny(t,n,r)}build(t,n,r){ky(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,s){$j(t,n,r,s)}mount(t){this.isSVGTag=jy(t.tagName),super.mount(t)}}const Wj=tf.length;function Ey(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ey(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Wj;n++){const r=tf[n],s=e.props[r];(vi(s)||s===!1)&&(t[r]=s)}return t}function Py(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Gj=[...ef].reverse(),qj=ef.length;function Kj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>HS(e,n,r)))}function Yj(e){let t=Kj(e),n=kh(),r=!0,s=!1;const i=u=>(d,f)=>{var g;const p=or(e,f,u==="exit"?(g=e.presenceContext)==null?void 0:g.custom:void 0);if(p){const{transition:m,transitionEnd:w,...b}=p;d={...d,...b,...w}}return d};function a(u){t=u(e)}function l(u){const{props:d}=e,f=Ey(e.parent)||{},p=[],g=new Set;let m={},w=1/0;for(let h=0;h<qj;h++){const x=Gj[h],y=n[x],v=d[x]!==void 0?d[x]:f[x],S=vi(v),E=x===u?y.isActive:null;E===!1&&(w=h);let P=v===f[x]&&v!==d[x]&&S;if(P&&(r||s)&&e.manuallyAnimateOnMount&&(P=!1),y.protectedKeys={...m},!y.isActive&&E===null||!v&&!y.prevProp||Xo(v)||typeof v=="boolean")continue;if(x==="exit"&&y.isActive&&E!==!0){y.prevResolvedValues&&(m={...m,...y.prevResolvedValues});continue}const N=Xj(y.prevProp,v);let R=N||x===u&&y.isActive&&!P&&S||h>w&&S,C=!1;const I=Array.isArray(v)?v:[v];let V=I.reduce(i(x),{});E===!1&&(V={});const{prevResolvedValues:$={}}=y,H={...$,...V},J=T=>{R=!0,g.has(T)&&(C=!0,g.delete(T)),y.needsAnimating[T]=!0;const M=e.getValue(T);M&&(M.liveStyle=!1)};for(const T in H){const M=V[T],L=$[T];if(m.hasOwnProperty(T))continue;let B=!1;gu(M)&&gu(L)?B=!Py(M,L)||N:B=M!==L,B?M!=null?J(T):g.add(T):M!==void 0&&g.has(T)?J(T):y.protectedKeys[T]=!0}y.prevProp=v,y.prevResolvedValues=V,y.isActive&&(m={...m,...V}),(r||s)&&e.blockInitialAnimation&&(R=!1);const O=P&&N;R&&(!O||C)&&p.push(...I.map(T=>{const M={type:x};if(typeof T=="string"&&(r||s)&&!O&&e.manuallyAnimateOnMount&&e.parent){const{parent:L}=e,B=or(L,T);if(L.enteringChildren&&B){const{delayChildren:q}=B.transition||{};M.delay=Yx(L.enteringChildren,e,q)}}return{animation:T,options:M}}))}if(g.size){const h={};if(typeof d.initial!="boolean"){const x=or(e,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(h.transition=x.transition)}g.forEach(x=>{const y=e.getBaseTarget(x),v=e.getValue(x);v&&(v.liveStyle=!0),h[x]=y??null}),p.push({animation:h})}let b=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,s=!1,b?t(p):Promise.resolve()}function c(u,d){var p;if(n[u].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(g=>{var m;return(m=g.animationState)==null?void 0:m.setActive(u,d)}),n[u].isActive=d;const f=l(u);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n,reset:()=>{n=kh(),s=!0}}}function Xj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Py(t,e):!1}function Wn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kh(){return{animate:Wn(!0),whileInView:Wn(),whileHover:Wn(),whileTap:Wn(),whileDrag:Wn(),whileFocus:Wn(),exit:Wn()}}function Eu(e,t){e.min=t.min,e.max=t.max}function Pt(e,t){Eu(e.x,t.x),Eu(e.y,t.y)}function Sh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Ty=1e-4,Qj=1-Ty,Zj=1+Ty,Cy=.01,Jj=0-Cy,eN=0+Cy;function Ke(e){return e.max-e.min}function tN(e,t,n){return Math.abs(e-t)<=n}function jh(e,t,n,r=.5){e.origin=r,e.originPoint=se(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),e.translate=se(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Qj&&e.scale<=Zj||isNaN(e.scale))&&(e.scale=1),(e.translate>=Jj&&e.translate<=eN||isNaN(e.translate))&&(e.translate=0)}function qs(e,t,n,r){jh(e.x,t.x,n.x,r?r.originX:void 0),jh(e.y,t.y,n.y,r?r.originY:void 0)}function Nh(e,t,n,r=0){const s=r?se(n.min,n.max,r):n.min;e.min=s+t.min,e.max=e.min+Ke(t)}function nN(e,t,n,r){Nh(e.x,t.x,n.x,r==null?void 0:r.x),Nh(e.y,t.y,n.y,r==null?void 0:r.y)}function Eh(e,t,n,r=0){const s=r?se(n.min,n.max,r):n.min;e.min=t.min-s,e.max=e.min+Ke(t)}function wo(e,t,n,r){Eh(e.x,t.x,n.x,r==null?void 0:r.x),Eh(e.y,t.y,n.y,r==null?void 0:r.y)}function Ph(e,t,n,r,s){return e-=t,e=vo(e,1/n,r),s!==void 0&&(e=vo(e,1/s,r)),e}function rN(e,t=0,n=1,r=.5,s,i=e,a=e){if(Xt.test(t)&&(t=parseFloat(t),t=se(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=se(i.min,i.max,r);e===i&&(l-=t),e.min=Ph(e.min,t,n,l,s),e.max=Ph(e.max,t,n,l,s)}function Th(e,t,[n,r,s],i,a){rN(e,t[n],t[r],t[s],t.scale,i,a)}const sN=["x","scaleX","originX"],iN=["y","scaleY","originY"];function Ch(e,t,n,r){Th(e.x,t,sN,n?n.x:void 0,r?r.x:void 0),Th(e.y,t,iN,n?n.y:void 0,r?r.y:void 0)}function Rh(e){return e.translate===0&&e.scale===1}function Ry(e){return Rh(e.x)&&Rh(e.y)}function Ah(e,t){return e.min===t.min&&e.max===t.max}function aN(e,t){return Ah(e.x,t.x)&&Ah(e.y,t.y)}function Oh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ay(e,t){return Oh(e.x,t.x)&&Oh(e.y,t.y)}function Lh(e){return Ke(e.x)/Ke(e.y)}function Mh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Wt(e){return[e("x"),e("y")]}function oN(e,t,n){let r="";const s=e.x.translate/t.x,i=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((s||i||a)&&(r=`translate3d(${s}px, ${i}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,pathRotation:f,rotateX:p,rotateY:g,skewX:m,skewY:w}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),g&&(r+=`rotateY(${g}deg) `),m&&(r+=`skewX(${m}deg) `),w&&(r+=`skewY(${w}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const lN=Xd.length,Ih=e=>typeof e=="string"?parseFloat(e):e,_h=e=>typeof e=="number"||z.test(e);function cN(e,t,n,r,s,i){s?(e.opacity=se(0,n.opacity??1,uN(r)),e.opacityExit=se(t.opacity??1,0,dN(r))):i&&(e.opacity=se(t.opacity??1,n.opacity??1,r));for(let a=0;a<lN;a++){const l=Xd[a];let c=Fh(t,l),u=Fh(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||_h(c)===_h(u)?(e[l]=Math.max(se(Ih(c),Ih(u),r),0),(Xt.test(u)||Xt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=se(t.rotate||0,n.rotate||0,r))}function Fh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const uN=Oy(0,.5,kx),dN=Oy(.5,.95,kt);function Oy(e,t,n){return r=>r<e?0:r>t?1:n(gi(e,t,r))}function fN(e,t,n){const r=Ne(e)?e:gr(e);return r.start(qd("",r,t,n)),r.animation}function wi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const pN=(e,t)=>e.depth-t.depth;class hN{constructor(){this.children=[],this.isDirty=!1}add(t){Id(this.children,t),this.isDirty=!0}remove(t){po(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(pN),this.isDirty=!1,this.children.forEach(t)}}function mN(e,t){const n=qe.now(),r=({timestamp:s})=>{const i=s-n;i>=t&&(dn(r),e(i-t))};return te.setup(r,!0),()=>dn(r)}function Ia(e){return Ne(e)?e.get():e}class gN{constructor(){this.members=[]}add(t){Id(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const s=r.instance;(!s||s.isConnected===!1)&&!r.snapshot&&(po(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(po(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1&&((n=s.instance)==null?void 0:n.isConnected)!==!1)return this.promote(s),!0}return!1}promote(t,n){var s;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:i}=r.options,{layoutDependency:a}=t.options;(i===void 0||i!==a)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(s=t.root)!=null&&s.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,s,i,a;(r=(n=t.options).onExitComplete)==null||r.call(n),(a=(s=t.resumingFrom)==null?void 0:(i=s.options).onExitComplete)==null||a.call(i)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const _a={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Hl=["","X","Y","Z"],xN=1e3;let yN=0;function Wl(e,t,n,r){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ly(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ey(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",te,!(s||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ly(r)}function My({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(a={},l=t==null?void 0:t()){this.id=yN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(bN),this.nodes.forEach(PN),this.nodes.forEach(TN),this.nodes.forEach(kN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new hN)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new _d),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=Jd(a)&&!vj(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;te.read(()=>{f=window.innerWidth}),e(a,()=>{const g=window.innerWidth;g!==f&&(f=g,this.root.updateBlockedByResize=!0,d&&d(),d=mN(p,250),_a.hasAnimatedSinceResize&&(_a.hasAnimatedSinceResize=!1,this.nodes.forEach(Vh)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||LN,{onLayoutAnimationStart:w,onLayoutAnimationComplete:b}=u.getProps(),h=!this.targetLayout||!Ay(this.targetLayout,g),x=!f&&p;if(this.options.layoutRoot||this.resumeFrom||x||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...Gd(m,"layout"),onPlay:w,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(d,x,y.path)}else f||Vh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(CN),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ly(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(jN),this.nodes.forEach(zh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(NN),this.nodes.forEach(EN),this.nodes.forEach(vN),this.nodes.forEach(wN)):this.nodes.forEach(Dh),this.clearAllSnapshots();const l=qe.now();Oe.delta=Qt(0,1e3/60,l-Oe.timestamp),Oe.timestamp=l,Oe.isProcessing=!0,Il.update.process(Oe),Il.preRender.process(Oe),Il.render.process(Oe),Oe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SN),this.sharedNodes.forEach(RN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ke(this.snapshot.measuredBox.x)&&!Ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=be()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Ry(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&this.instance&&(l||Xn(this.latestValues)||d)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),MN(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:a}=this.options;if(!a)return be();const l=a.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(IN))){const{scroll:d}=this.root;d&&(Gt(l.x,d.offset.x),Gt(l.y,d.offset.y))}return l}removeElementScroll(a){var c;const l=be();if(Pt(l,a),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Pt(l,a),Gt(l.x,f.offset.x),Gt(l.y,f.offset.y))}return l}applyTransform(a,l=!1,c){var d,f;const u=c||be();Pt(u,a);for(let p=0;p<this.path.length;p++){const g=this.path[p];!l&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(Gt(u.x,-g.scroll.offset.x),Gt(u.y,-g.scroll.offset.y)),Xn(g.latestValues)&&Ma(u,g.latestValues,(d=g.layout)==null?void 0:d.layoutBox)}return Xn(this.latestValues)&&Ma(u,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),u}removeTransform(a){var c;const l=be();Pt(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!Xn(d.latestValues))continue;let f;d.instance&&(Su(d.latestValues)&&d.updateSnapshot(),f=be(),Pt(f,d.measurePageBox())),Ch(l,d.latestValues,(c=d.snapshot)==null?void 0:c.layoutBox,f)}return Xn(this.latestValues)&&Ch(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Oe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var g;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=Oe.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=be(),this.targetWithTransforms=be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),nN(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Pt(this.target,this.layout.layoutBox),xy(this.target,this.targetDelta)):Pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Su(this.parent.latestValues)||gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,l,c){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),wo(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),Pt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Oe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Pt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;Oj(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=be());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sh(this.prevProjectionDelta.x,this.projectionDelta.x),Sh(this.prevProjectionDelta.y,this.projectionDelta.y)),qs(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Mh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(a,l=!1,c){const u=this.snapshot,d=u?u.latestValues:{},f={...this.latestValues},p=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const g=be(),m=u?u.source:void 0,w=this.layout?this.layout.source:void 0,b=m!==w,h=this.getStack(),x=!h||h.members.length<=1,y=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(ON));this.animationProgress=0;let v;const S=c==null?void 0:c.interpolateProjection(a);this.mixTargetDelta=E=>{const P=E/1e3,N=S==null?void 0:S(P);N?(p.x.translate=N.x,p.x.scale=se(a.x.scale,1,P),p.x.origin=a.x.origin,p.x.originPoint=a.x.originPoint,p.y.translate=N.y,p.y.scale=se(a.y.scale,1,P),p.y.origin=a.y.origin,p.y.originPoint=a.y.originPoint):(Bh(p.x,a.x,P),Bh(p.y,a.y,P)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wo(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),AN(this.relativeTarget,this.relativeTargetOrigin,g,P),v&&aN(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=be()),Pt(v,this.relativeTarget)),b&&(this.animationValues=f,cN(f,d,this.latestValues,P,y,x)),N&&N.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=N.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(dn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=te.update(()=>{_a.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gr(0)),this.motionValue.jump(0,!1),this.currentAnimation=fN(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Iy(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||be();const f=Ke(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+f;const p=Ke(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}Pt(l,c),Ma(l,d),qs(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new gN),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var l;const{layoutId:a}=this.options;return a?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:a}=this.options;return a?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Wl("z",a,u,this.animationValues);for(let d=0;d<Hl.length;d++)Wl(`rotate${Hl[d]}`,a,u,this.animationValues),Wl(`skew${Hl[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}applyProjectionStyles(a,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Ia(l==null?void 0:l.pointerEvents)||"",a.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Ia(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(a.transform=c?c({},""):"none",this.hasProjected=!1);return}a.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=oN(this.projectionDeltaWithTransform,this.treeScale,d);c&&(f=c(d,f)),a.transform=f;const{x:p,y:g}=this.projectionDelta;a.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,u.animationValues?a.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const m in Nu){if(d[m]===void 0)continue;const{correct:w,applyTo:b,isCSSVariable:h}=Nu[m],x=f==="none"?d[m]:w(d[m],u);if(b){const y=b.length;for(let v=0;v<y;v++)a[b[v]]=x}else h?this.options.visualElement.renderState.vars[m]=x:a[m]=x}this.options.layoutId&&(a.pointerEvents=u===this?Ia(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(zh),this.root.sharedNodes.clear()}}}function vN(e){e.updateLayout()}function wN(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i==="size")Wt(f=>{const p=a?t.measuredBox[f]:t.layoutBox[f],g=Ke(p);p.min=r[f].min,p.max=p.min+g});else if(i==="x"||i==="y"){const f=i==="x"?"y":"x";Eu(a?t.measuredBox[f]:t.layoutBox[f],r[f])}else Iy(i,t.layoutBox,r)&&Wt(f=>{const p=a?t.measuredBox[f]:t.layoutBox[f],g=Ke(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const l=Br();qs(l,r,t.layoutBox);const c=Br();a?qs(c,e.applyTransform(s,!0),t.measuredBox):qs(c,r,t.layoutBox);const u=!Ry(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const m=e.options.layoutAnchor||void 0,w=be();wo(w,t.layoutBox,p.layoutBox,m);const b=be();wo(b,r,g.layoutBox,m),Ay(w,b)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=w,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function bN(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kN(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function SN(e){e.clearSnapshot()}function zh(e){e.clearMeasurements()}function jN(e){e.isLayoutDirty=!0,e.updateLayout()}function Dh(e){e.isLayoutDirty=!1}function NN(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function EN(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Vh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function PN(e){e.resolveTargetDelta()}function TN(e){e.calcProjection()}function CN(e){e.resetSkewAndRotation()}function RN(e){e.removeLeadSnapshot()}function Bh(e,t,n){e.translate=se(t.translate,0,n),e.scale=se(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Uh(e,t,n,r){e.min=se(t.min,n.min,r),e.max=se(t.max,n.max,r)}function AN(e,t,n,r){Uh(e.x,t.x,n.x,r),Uh(e.y,t.y,n.y,r)}function ON(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const LN={duration:.45,ease:[.4,0,.1,1]},$h=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Hh=$h("applewebkit/")&&!$h("chrome/")?Math.round:kt;function Wh(e){e.min=Hh(e.min),e.max=Hh(e.max)}function MN(e){Wh(e.x),Wh(e.y)}function Iy(e,t,n){return e==="position"||e==="preserve-aspect"&&!tN(Lh(t),Lh(n),.2)}function IN(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const _N=My({attachResizeListener:(e,t)=>wi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Gl={current:void 0},_y=My({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gl.current){const e=new _N({});e.mount(window),e.setOptions({layoutScroll:!0}),Gl.current=e}return Gl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ii=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Gh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function FN(...e){return t=>{let n=!1;const r=e.map(s=>{const i=Gh(s,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():Gh(e[s],null)}}}}function zN(...e){return k.useCallback(FN(...e),e)}class DN extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(Ra(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,s=Ra(r)&&r.offsetWidth||0,i=Ra(r)&&r.offsetHeight||0,a=getComputedStyle(n),l=this.props.sizeRef.current;l.height=parseFloat(a.height),l.width=parseFloat(a.width),l.top=n.offsetTop,l.left=n.offsetLeft,l.right=s-l.width-l.left,l.bottom=i-l.height-l.top,l.direction=a.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function VN({children:e,isPresent:t,anchorX:n,anchorY:r,root:s,pop:i}){var p;const a=k.useId(),l=k.useRef(null),c=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=k.useContext(Ii),d=i!==!1?((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref):void 0,f=zN(l,d);return k.useInsertionEffect(()=>{const{width:g,height:m,top:w,left:b,right:h,bottom:x,direction:y}=c.current;if(t||i===!1||!l.current||!g||!m)return;const v=y==="rtl",S=n==="left"?v?`right: ${h}`:`left: ${b}`:v?`left: ${b}`:`right: ${h}`,E=r==="bottom"?`bottom: ${x}`:`top: ${w}`;l.current.dataset.motionPopId=a;const P=document.createElement("style");u&&(P.nonce=u);const N=s??document.head;return N.appendChild(P),P.sheet&&P.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${m}px !important;
            ${S}px !important;
            ${E}px !important;
          }
        `),()=>{var R;(R=l.current)==null||R.removeAttribute("data-motion-pop-id"),N.contains(P)&&N.removeChild(P)}},[t]),o.jsx(DN,{isPresent:t,childRef:l,sizeRef:c,pop:i,children:i===!1?e:k.cloneElement(e,{ref:f})})}const BN=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:i,mode:a,anchorX:l,anchorY:c,root:u})=>{const d=mr(UN),f=k.useId(),p=k.useRef(n),g=k.useRef(r);mi(()=>{p.current=n,g.current=r});let m=!0,w=k.useMemo(()=>(m=!1,{id:f,initial:t,isPresent:n,custom:s,onExitComplete:b=>{d.set(b,!0);for(const h of d.values())if(!h)return;r&&r()},register:b=>(d.set(b,!1),()=>{var h;d.delete(b),!p.current&&!d.size&&((h=g.current)==null||h.call(g))})}),[n,d,r]);return i&&m&&(w={...w}),k.useMemo(()=>{d.forEach((b,h)=>d.set(h,!1))},[n]),k.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),e=o.jsx(VN,{pop:a==="popLayout",isPresent:n,anchorX:l,anchorY:c,root:u,children:e}),o.jsx(qo.Provider,{value:w,children:e})};function UN(){return new Map}function Fy(e=!0){const t=k.useContext(qo);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:s}=t,i=k.useId();k.useEffect(()=>{if(e)return s(i)},[e]);const a=k.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,a]:[!0]}const la=e=>e.key||"";function qh(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const $N=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:i="sync",propagate:a=!1,anchorX:l="left",anchorY:c="top",root:u})=>{const[d,f]=Fy(a),p=k.useMemo(()=>qh(e),[e]),g=a&&!d?[]:p.map(la),m=k.useRef(!0),w=k.useRef(p),b=mr(()=>new Map),h=k.useRef(new Set),[x,y]=k.useState(p),[v,S]=k.useState(p);mi(()=>{a&&!d&&!v.length&&(f==null||f())},[d,a,v.length,f]),mi(()=>{m.current=!1,w.current=p;for(let N=0;N<v.length;N++){const R=la(v[N]);g.includes(R)?(b.delete(R),h.current.delete(R)):b.get(R)!==!0&&b.set(R,!1)}},[v,g.length,g.join("-")]);const E=[];if(p!==x){let N=[...p];for(let R=0;R<v.length;R++){const C=v[R],I=la(C);g.includes(I)||(N.splice(R,0,C),E.push(C))}return i==="wait"&&E.length&&(N=E),S(qh(N)),y(p),null}const{forceRender:P}=k.useContext(Md);return o.jsx(o.Fragment,{children:v.map(N=>{const R=la(N),C=a&&!d?!1:p===v||g.includes(R),I=()=>{if(h.current.has(R))return;if(b.has(R))h.current.add(R),b.set(R,!0);else return;let V=!0;b.forEach($=>{$||(V=!1)}),V&&(P==null||P(),S(w.current),a&&(f==null||f()),r&&r())};return o.jsx(BN,{isPresent:C,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:s,mode:i,root:u,onExitComplete:C?void 0:I,anchorX:l,anchorY:c,children:N},R)})})},zy=k.createContext({strict:!1}),Kh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Yh=!1;function HN(){if(Yh)return;const e={};for(const t in Kh)e[t]={isEnabled:n=>Kh[t].some(r=>!!n[r])};py(e),Yh=!0}function Dy(){return HN(),Tj()}function WN(e){const t=Dy();for(const n in e)t[n]={...t[n],...e[n]};py(t)}const Zo=k.createContext({});function GN(e,t){if(Qo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||vi(n)?n:void 0,animate:vi(r)?r:void 0}}return e.inherit!==!1?t:{}}function qN(e){const{initial:t,animate:n}=GN(e,k.useContext(Zo));return k.useMemo(()=>({initial:t,animate:n}),[Xh(t),Xh(n)])}function Xh(e){return Array.isArray(e)?e.join(" "):e}const sf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vy(e,t,n){for(const r in t)!Ne(t[r])&&!wy(r,n)&&(e[r]=t[r])}function KN({transformTemplate:e},t){return k.useMemo(()=>{const n=sf();return nf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function YN(e,t){const n=e.style||{},r={};return Vy(r,n,e),Object.assign(r,KN(e,t)),r}function XN(e,t){const n={},r=YN(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const By=()=>({...sf(),attrs:{}});function QN(e,t,n,r){const s=k.useMemo(()=>{const i=By();return ky(i,t,jy(r),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Vy(i,e.style,e),s.style={...i,...s.style}}return s}const ZN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function bo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ZN.has(e)}function JN(e,t){return e.startsWith("on")?!bo(e):(t==null?void 0:t(e))??!bo(e)}function eE(e,t,n,r){const s={};for(const i in e)i==="values"&&typeof e.values=="object"||Ne(e[i])||(JN(i,r)||n===!0&&bo(i)||!t&&!bo(i)||e.draggable&&i.startsWith("onDrag"))&&(s[i]=e[i]);return s}const tE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function af(e){return typeof e!="string"||e.includes("-")?!1:!!(tE.indexOf(e)>-1||/[A-Z]/u.test(e))}function nE(e,t,n,{latestValues:r},s,i=!1,a,l){const u=(a??af(e)?QN:XN)(t,r,s,e),d=eE(t,typeof e=="string",i,l),f=e!==k.Fragment?{...d,...u,ref:n}:{},{children:p}=t,g=k.useMemo(()=>Ne(p)?p.get():p,[p]);return k.createElement(e,{...f,children:g})}function rE({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,s){return{latestValues:sE(n,r,s,e),renderState:t()}}function sE(e,t,n,r){const s={},i=r(e,{});for(const p in i)s[p]=Ia(i[p]);let{initial:a,animate:l}=e;const c=Qo(e),u=dy(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;if(f&&typeof f!="boolean"&&!Xo(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const m=Kd(e,p[g]);if(m){const{transitionEnd:w,transition:b,...h}=m;for(const x in h){let y=h[x];if(Array.isArray(y)){const v=d?y.length-1:0;y=y[v]}y!==null&&(s[x]=y)}for(const x in w)s[x]=w[x]}}}return s}const Uy=e=>(t,n)=>{const r=k.useContext(Zo),s=k.useContext(qo),i=()=>rE(e,t,r,s);return n?i():mr(i)},iE=Uy({scrapeMotionValuesFromProps:rf,createRenderState:sf}),aE=Uy({scrapeMotionValuesFromProps:Ny,createRenderState:By}),oE=Symbol.for("motionComponentSymbol");function lE(e,t,n){const r=k.useRef(n);k.useInsertionEffect(()=>{r.current=n});const s=k.useRef(null);return k.useCallback(i=>{var l;i&&((l=e.onMount)==null||l.call(e,i)),t&&(i?t.mount(i):t.unmount());const a=r.current;if(typeof a=="function")if(i){const c=a(i);typeof c=="function"&&(s.current=c)}else s.current?(s.current(),s.current=null):a(i);else a&&(a.current=i)},[t])}const $y=k.createContext({});function Nr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function cE(e,t,n,r,s,i){var y,v;const{visualElement:a}=k.useContext(Zo),l=k.useContext(zy),c=k.useContext(qo),u=k.useContext(Ii),d=u.reducedMotion,f=u.skipAnimations,p=k.useRef(null),g=k.useRef(!1);r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:f,isSVG:i}),g.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const m=p.current,w=k.useContext($y);m&&!m.projection&&s&&(m.type==="html"||m.type==="svg")&&uE(p.current,n,s,w);const b=k.useRef(!1);k.useInsertionEffect(()=>{m&&b.current&&m.update(n,c)});const h=n[Jx],x=k.useRef(!!h&&typeof window<"u"&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,h))&&((v=window.MotionHasOptimisedAnimation)==null?void 0:v.call(window,h)));return mi(()=>{g.current=!0,m&&(b.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),k.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)==null||S.call(window,h)}),x.current=!1),m.enteringChildren=void 0)}),m}function uE(e,t,n,r){const{layoutId:s,layout:i,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Hy(e.parent)),e.projection.setOptions({layoutId:s,layout:i,alwaysMeasureLayout:!!a||l&&Nr(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function Hy(e){if(e)return e.options.allowProjection!==!1?e.projection:Hy(e.parent)}function ql(e,{forwardMotionProps:t=!1,type:n}={},r,s){r&&WN(r);const i=n?n==="svg":af(e),a=i?aE:iE;function l(u,d){let f;const p={...k.useContext(Ii),...u,layoutId:dE(u)},{isStatic:g,isValidProp:m}=p,w=qN(u),b=a(u,g);if(!g&&typeof window<"u"){fE();const h=pE(p);f=h.MeasureLayout,w.visualElement=cE(e,b,p,s,h.ProjectionNode,i)}return o.jsxs(Zo.Provider,{value:w,children:[f&&w.visualElement?o.jsx(f,{visualElement:w.visualElement,...p}):null,nE(e,u,lE(b,w.visualElement,d),b,g,t,i,m)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=k.forwardRef(l);return c[oE]=e,c}function dE({layoutId:e}){const t=k.useContext(Md).id;return t&&e!==void 0?t+"-"+e:e}function fE(e,t){k.useContext(zy).strict}function pE(e){const t=Dy(),{drag:n,layout:r}=t;if(!n&&!r)return{};const s={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function hE(e,t){if(typeof Proxy>"u")return ql;const n=new Map,r=(i,a)=>ql(i,a,e,t),s=(i,a)=>r(i,a);return new Proxy(s,{get:(i,a)=>a==="create"?r:(n.has(a)||n.set(a,ql(a,void 0,e,t)),n.get(a))})}const mE=(e,t)=>t.isSVG??af(e)?new Hj(t):new Dj(t,{allowProjection:e!==k.Fragment});class gE extends Hn{constructor(t){super(t),t.animationState||(t.animationState=Yj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let xE=0;class yE extends Hn{constructor(){super(...arguments),this.id=xE++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:a,custom:l}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const c=or(this.node,a,l);if(c){const{transition:u,transitionEnd:d,...f}=c;for(const p in f)(i=this.node.getValue(p))==null||i.jump(f[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const vE={animation:{Feature:gE},exit:{Feature:yE}};function _i(e){return{point:{x:e.pageX,y:e.pageY}}}const wE=e=>t=>Zd(t)&&e(t,_i(t));function Ks(e,t,n,r){return wi(e,t,wE(n),r)}const Wy=({current:e})=>e?e.ownerDocument.defaultView:null,Qh=(e,t)=>Math.abs(e-t);function bE(e,t){const n=Qh(e.x,t.x),r=Qh(e.y,t.y);return Math.sqrt(n**2+r**2)}const Zh=new Set(["auto","scroll"]);class Gy{constructor(t,n,{transformPagePoint:r,contextWindow:s=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ca(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Kl(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,b=bE(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!b)return;const{point:h}=m,{timestamp:x}=Oe;this.history.push({...h,timestamp:x});const{onStart:y,onMove:v}=this.handlers;w||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,m)},this.handlePointerMove=(m,w)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=w,this.lastMoveEventInfo=ca(w,this.transformPagePoint),te.update(this.updatePoint,!0)},this.handlePointerUp=(m,w)=>{this.end();const{onEnd:b,onSessionEnd:h,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Kl(m.type==="pointercancel"?this.lastMoveEventInfo:ca(w,this.transformPagePoint),this.history);this.startEvent&&b&&b(m,y),h&&h(m,y)},!Zd(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=a,this.contextWindow=s||window;const c=_i(t),u=ca(c,this.transformPagePoint),{point:d}=u,{timestamp:f}=Oe;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,Kl(u,this.history));const g={passive:!0,capture:!0};this.removeListeners=Oi(Ks(this.contextWindow,"pointermove",this.handlePointerMove,g),Ks(this.contextWindow,"pointerup",this.handlePointerUp,g),Ks(this.contextWindow,"pointercancel",this.handlePointerUp,g)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Zh.has(r.overflowX)||Zh.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,s=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:s.x-n.x,y:s.y-n.y};i.x===0&&i.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,s),te.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),dn(this.updatePoint)}}function ca(e,t){return t?{point:t(e.point)}:e}function Jh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Kl({point:e},t){return{point:e,delta:Jh(e,qy(t)),offset:Jh(e,kE(t)),velocity:SE(t,.1)}}function kE(e){return e[0]}function qy(e){return e[e.length-1]}function SE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=qy(e);for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>ut(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&s.timestamp-r.timestamp>ut(t)*2&&(r=e[1]);const i=wt(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const a={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function jE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?se(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?se(n,e,r.max):Math.min(e,n)),e}function em(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function NE(e,{top:t,left:n,bottom:r,right:s}){return{x:em(e.x,n,s),y:em(e.y,t,r)}}function tm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function EE(e,t){return{x:tm(e.x,t.x),y:tm(e.y,t.y)}}function PE(e,t){let n=.5;const r=Ke(e),s=Ke(t);return s>r?n=gi(t.min,t.max-r,e.min):r>s&&(n=gi(e.min,e.max-s,t.min)),Qt(0,1,n)}function TE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Pu=.35;function CE(e=Pu){return e===!1?e=0:e===!0&&(e=Pu),{x:nm(e,"left","right"),y:nm(e,"top","bottom")}}function nm(e,t,n){return{min:rm(e,t),max:rm(e,n)}}function rm(e,t){return typeof e=="number"?e:e[t]||0}const RE=new WeakMap;class AE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=be(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const i=f=>{n&&this.snapToCursor(_i(f).point),this.stopAnimation()},a=(f,p)=>{const{drag:g,dragPropagation:m,onDragStart:w}=this.getProps();if(g&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=nj(g),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(h=>{let x=this.getAxisMotionValue(h).get()||0;if(Xt.test(x)){const{projection:y}=this.visualElement;if(y&&y.layout){const v=y.layout.layoutBox[h];v&&(x=Ke(v)*(parseFloat(x)/100))}}this.originPoint[h]=x}),w&&te.update(()=>w(f,p),!1,!0),xu(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:g,dragDirectionLock:m,onDirectionLock:w,onDrag:b}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:h}=p;if(m&&this.currentDirection===null){this.currentDirection=LE(h),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",p.point,h),this.updateAxis("y",p.point,h),this.visualElement.render(),b&&te.update(()=>b(f,p),!1,!0)},c=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Gy(t,{onSessionStart:i,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Wy(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,s=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!s||!r)return;const{velocity:a}=s;this.startAnimation(a);const{onDragEnd:l}=this.getProps();l&&te.postRender(()=>l(r,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:s}=this.getProps();if(!r||!ua(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=jE(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,s=this.constraints;t&&Nr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=NE(r.layoutBox,t):this.constraints=!1,this.elastic=CE(n),s!==this.constraints&&!Nr(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&Wt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=TE(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Nr(t))return!1;const r=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;s.root&&(s.root.scroll=void 0,s.root.updateScroll());const i=Lj(r,s.root,this.visualElement.getTransformPagePoint());let a=EE(s.layout.layoutBox,i);if(n){const l=n(Rj(a));this.hasMutatedConstraints=!!l,l&&(a=my(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Wt(d=>{if(!ua(d,n,this.currentDirection))return;let f=c&&c[d]||{};(a===!0||a===d)&&(f={min:0,max:0});const p=s?200:1e6,g=s?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return xu(this.visualElement,t),r.start(qd(t,r,0,n,this.visualElement,!1))}stopAnimation(){Wt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps()[n];return s||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){Wt(n=>{const{drag:r}=this.getProps();if(!ua(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:a,max:l}=s.layout.layoutBox[n],c=i.get()||0;i.set(t[n]-se(a,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Nr(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Wt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();s[a]=PE({min:c,max:c},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Wt(a=>{if(!ua(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(se(c,u,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;RE.set(this.visualElement,this);const t=this.visualElement.current,n=Ks(t,"pointerdown",u=>{const{drag:d,dragListener:f=!0}=this.getProps(),p=u.target,g=p!==t&&lj(p);d&&f&&!g&&this.start(u)});let r;const s=()=>{const{dragConstraints:u}=this.getProps();Nr(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=OE(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),te.read(s);const l=wi(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(Wt(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=u[f].translate,p.set(p.get()+u[f].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:a=Pu,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:a,dragMomentum:l}}}function sm(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function OE(e,t,n){const r=uh(e,sm(n)),s=uh(t,sm(n));return()=>{r(),s()}}function ua(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function LE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class ME extends Hn{constructor(t){super(t),this.removeGroupControls=kt,this.removeListeners=kt,this.controls=new AE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||kt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yl=e=>(t,n)=>{e&&te.update(()=>e(t,n),!1,!0)};class IE extends Hn{constructor(){super(...arguments),this.removePointerDownListener=kt}onPointerDown(t){this.session=new Gy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:Yl(t),onStart:Yl(n),onMove:Yl(r),onEnd:(i,a)=>{delete this.session,s&&te.postRender(()=>s(i,a))}}}mount(){this.removePointerDownListener=Ks(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Xl=!1;class _E extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),Xl&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),_a.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,{projection:a}=r;return a&&(a.isPresent=i,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),Xl=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==i?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||te.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),Qd.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=t;Xl=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ky(e){const[t,n]=Fy(),r=k.useContext(Md);return o.jsx(_E,{...e,layoutGroup:r,switchLayoutGroup:k.useContext($y),isPresent:t,safeToRemove:n})}const FE={pan:{Feature:IE},drag:{Feature:ME,ProjectionNode:_y,MeasureLayout:Ky}};function im(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,i=r[s];i&&te.postRender(()=>i(t,_i(t)))}class zE extends Hn{mount(){const{current:t}=this.node;t&&(this.unmount=sj(t,(n,r)=>(im(this.node,r,"Start"),s=>im(this.node,s,"End"))))}unmount(){}}class DE extends Hn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oi(wi(this.node.current,"focus",()=>this.onFocus()),wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function am(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),i=r[s];i&&te.postRender(()=>i(t,_i(t)))}class VE extends Hn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=uj(t,(s,i)=>(am(this.node,i,"Start"),(a,{success:l})=>am(this.node,a,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Tu=new WeakMap,Ql=new WeakMap,BE=e=>{const t=Tu.get(e.target);t&&t(e)},UE=e=>{e.forEach(BE)};function $E({root:e,...t}){const n=e||document;Ql.has(n)||Ql.set(n,{});const r=Ql.get(n),s=JSON.stringify(t);return r[s]||(r[s]=new IntersectionObserver(UE,{root:e,...t})),r[s]}function HE(e,t,n){const r=$E(t);return Tu.set(e,n),r.observe(e),()=>{Tu.delete(e),r.unobserve(e)}}const WE={some:0,all:1};class GE extends Hn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:WE[s]},l=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,i&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),g=d?f:p;g&&g(u)};this.stopObserver=HE(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(qE(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function qE({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const KE={inView:{Feature:GE},tap:{Feature:VE},focus:{Feature:DE},hover:{Feature:zE}},YE={layout:{ProjectionNode:_y,MeasureLayout:Ky}},XE={...vE,...KE,...FE,...YE},Jo=hE(XE,mE);function el(e){const t=mr(()=>gr(e)),{isStatic:n}=k.useContext(Ii);if(n){const[,r]=k.useState(e);k.useEffect(()=>t.on("change",r),[])}return t}function Yy(e,t){const n=el(t()),r=()=>n.set(t());return r(),mi(()=>{const s=()=>te.preRender(r,!1,!0),i=e.map(a=>a.on("change",s));return()=>{i.forEach(a=>a()),dn(r)}}),n}function QE(e){Gs.current=[],e();const t=Yy(Gs.current,e);return Gs.current=void 0,t}function ko(e,t,n,r){if(typeof e=="function")return QE(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!="function")return ZE(e,t,n,r);const a=typeof t=="function"?t:wj(t,n,r),l=Array.isArray(e)?om(e,a):om([e],([u])=>a(u)),c=Array.isArray(e)?void 0:e.accelerate;return c&&!c.isTransformed&&typeof t!="function"&&Array.isArray(n)&&(r==null?void 0:r.clamp)!==!1&&(l.accelerate={...c,times:t,keyframes:n,isTransformed:!0}),l}function om(e,t){const n=mr(()=>[]);return Yy(e,()=>{n.length=0;const r=e.length;for(let s=0;s<r;s++)n[s]=e[s].get();return t(n)})}function ZE(e,t,n,r){const s=mr(()=>Object.keys(n)),i=mr(()=>({}));for(const a of s)i[a]=ko(e,t,n[a],r);return i}function JE(e,t={}){const{isStatic:n}=k.useContext(Ii),r=()=>Ne(e)?e.get():e;if(n)return ko(r);const s=el(r());return k.useInsertionEffect(()=>bj(s,e,t),[s,JSON.stringify(t)]),s}function eP(e,t={}){return JE(e,{type:"spring",...t})}function tP({children:e,className:t="",onClick:n,mouseX:r,spring:s,distance:i,magnification:a,baseItemSize:l,label:c}){const u=k.useRef(null),d=el(0),f=ko(r,w=>{if(!u.current||w===1/0)return i;const b=u.current.getBoundingClientRect(),h=b.left+b.width/2;return w-h}),p=ko(f,[-i,0,i],[1,a/l,1]),g=eP(p,s),m=w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),n==null||n())};return o.jsx(Jo.div,{ref:u,style:{width:l,height:l,scale:g},onHoverStart:()=>d.set(1),onHoverEnd:()=>d.set(0),onFocus:()=>d.set(1),onBlur:()=>d.set(0),onClick:n,className:`dock-item ${t}`,tabIndex:0,role:"button","aria-haspopup":"true","aria-label":c,onKeyDown:m,children:k.Children.map(e,w=>k.cloneElement(w,{isHovered:d}))})}function nP({children:e,className:t="",...n}){const{isHovered:r}=n,[s,i]=k.useState(!1);return k.useEffect(()=>{if(!r)return;const a=r.on("change",l=>{i(l===1)});return()=>a()},[r]),o.jsx($N,{children:s&&o.jsx(Jo.div,{initial:{opacity:0,y:-4,scale:.85},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-4,scale:.85},transition:{duration:.15},className:`dock-label ${t}`,role:"tooltip",style:{x:"-50%"},children:e})})}function rP({children:e,className:t=""}){return o.jsx("div",{className:`dock-icon ${t}`,children:e})}function sP({items:e,className:t="",spring:n={mass:.1,stiffness:220,damping:18},magnification:r=52,distance:s=120,panelHeight:i=44,baseItemSize:a=36}){const l=el(1/0),c=Ze(),u=hn();return o.jsx("div",{className:"dock-outer",children:o.jsx(Jo.div,{onMouseMove:d=>l.set(d.clientX),onMouseLeave:()=>l.set(1/0),className:`dock-panel ${t}`,style:{height:i},role:"toolbar","aria-label":"Application dock",children:e.map((d,f)=>{const p=c.pathname===d.to||d.to!=="/"&&c.pathname.startsWith(d.to)||d.to==="/"&&c.pathname==="/dashboard";return o.jsxs(tP,{onClick:()=>{var g;(g=d.onClick)==null||g.call(d),d.to&&u(d.to)},className:`${d.className||""} ${p?"active":""}`,mouseX:l,spring:n,distance:s,magnification:r,baseItemSize:a,label:d.label,children:[o.jsx(rP,{children:d.icon}),o.jsx(nP,{children:d.label})]},d.to||f)})})})}function Ve({path:e,size:t=24,viewBox:n="0 0 24 24",fill:r="none",stroke:s="currentColor",strokeWidth:i=1.8}){return o.jsx("svg",{width:t,height:t,viewBox:n,fill:r,stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e})}const da={home:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),o.jsx("path",{d:"M5 9.5V21h14V9.5"}),o.jsx("path",{d:"M9 21v-6h6v6"})]})}),calendar:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),o.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})}),mic:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),o.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),o.jsx("path",{d:"M12 17v5"})]})}),clock:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M12 7v5l3 3"})]})}),history:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),o.jsx("path",{d:"M3 4v5h5"}),o.jsx("path",{d:"M12 8v4l3 2"})]})}),hotels:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M2 21V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16"}),o.jsx("path",{d:"M2 21h20"}),o.jsx("path",{d:"M6 7h4M6 11h4M14 7h4M14 11h4M6 15h4M14 15h4M6 19h4M14 19h4"})]})}),restaurants:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M4 21v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8"}),o.jsx("path",{d:"M2 21h20"}),o.jsx("path",{d:"M8 9V3M12 9V3M16 9V3"}),o.jsx("path",{d:"M4 13h16"})]})}),discounts:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M20.6 13.4 12 22 2 12 3.5 4.5 11 3l9.6 10.4Z"}),o.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),o.jsx("path",{d:"m15.5 5.5 4 4"})]})}),facilities:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 21V7l6-4 6 4v14"}),o.jsx("path",{d:"M15 21V9h6v12"}),o.jsx("path",{d:"M3 21h18"}),o.jsx("path",{d:"M7 10h3M7 14h3M7 18h3"})]})}),sponsorship:o.jsx(Ve,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M12 21s-7.5-4.6-10-9.2C.6 8.6 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23.4 8.6 22 11.8 19.5 16.4 12 21 12 21Z"})})}),ticket:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a3 3 0 0 0 0 6v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a3 3 0 0 0 0-6Z"}),o.jsx("path",{d:"M13 5v2M13 11v2M13 17v2"})]})}),contact:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),o.jsx("path",{d:"m3 7 9 6 9-6"})]})}),shield:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("path",{d:"M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"}),o.jsx("path",{d:"m9 11.5 2 2 4-4"})]})}),user:o.jsx(Ve,{path:o.jsxs(o.Fragment,{children:[o.jsx("circle",{cx:"12",cy:"8",r:"4"}),o.jsx("path",{d:"M4 21c0-4 4-6 8-6s8 2 8 6"})]})}),menu:o.jsx(Ve,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"})})}),close:o.jsx(Ve,{path:o.jsx(o.Fragment,{children:o.jsx("path",{d:"M5 5l14 14M19 5 5 19"})})})},iP=[{label:"Home",to:"/#home",icon:"home"},{label:"Events",to:"/#events",icon:"calendar"},{label:"Celebrity Singers",to:"/#celebrities",icon:"mic"},{label:"Future Events",to:"/#future-events",icon:"clock"},{label:"History",to:"/#history",icon:"history"},{label:"Hotels",to:"/#hotels",icon:"hotels"},{label:"Restaurants",to:"/#restaurants",icon:"restaurants"},{label:"Discounts",to:"/#discounts",icon:"discounts"},{label:"Facilities",to:"/#facilities",icon:"facilities"},{label:"Sponsorship",to:"/#sponsorship",icon:"sponsorship"},{label:"My Tickets",to:"/tickets/my-tickets",icon:"ticket"},{label:"Contact",to:"/#contact",icon:"contact"},{label:"Ticket Portal",to:"/tickets",icon:"ticket",cta:!0}];function lm(e){return(e==null?void 0:e.firstName)||(e==null?void 0:e.name)||(e==null?void 0:e.email)||"Account"}function Xy(){const{user:e,isAdmin:t,logout:n}=Dt(),r=hn(),s=Ze(),[i,a]=k.useState(!1),[l,c]=k.useState(!1),[u,d]=k.useState(!1),f=k.useRef(null),p=ke.useMemo(()=>{const w=[...iP];return t&&w.push({label:"Admin",to:"/admin/dashboard",icon:"shield"}),w},[t]),g=ke.useMemo(()=>p.map(w=>({label:w.label,to:w.to,icon:da[w.icon],className:w.cta?"dock-item-cta":""})),[p]);k.useEffect(()=>{const w=()=>{f.current||(f.current=window.requestAnimationFrame(()=>{a(window.scrollY>12),f.current=null}))};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),f.current&&window.cancelAnimationFrame(f.current)}},[]),k.useEffect(()=>{c(!1),d(!1)},[s.pathname]);const m=()=>{n(),r("/")};return o.jsxs(o.Fragment,{children:[o.jsx("header",{className:`dock-site-header ${i?"scrolled":""}`,children:o.jsxs("div",{className:"dock-site-header-inner",children:[o.jsx(G,{to:"/",className:"dock-site-brand","aria-label":"Ozilla Festival home",children:o.jsx("span",{className:"dock-site-brand-logo",children:o.jsx("img",{src:Ue("/assets/company-logo.jpeg"),alt:"Ozilla Festival"})})}),o.jsx("div",{className:"dock-header-center",children:o.jsx(sP,{items:g,className:"dock-nav",magnification:60,distance:130,panelHeight:50,baseItemSize:42})}),o.jsxs("div",{className:"dock-site-header-actions",children:[e?o.jsxs("div",{className:`dock-account ${u?"open":""}`,children:[o.jsxs("button",{type:"button",className:"dock-account-button",onClick:()=>d(w=>!w),"aria-expanded":u,"aria-label":"Account menu",children:[o.jsx("span",{className:"dock-account-avatar",children:String(lm(e)).slice(0,1).toUpperCase()}),o.jsx("strong",{children:lm(e)})]}),o.jsxs("div",{className:"dock-account-menu",children:[o.jsx(G,{to:"/account",children:"Account"}),o.jsx(G,{to:"/tickets/my-tickets",children:"My Tickets"}),t&&o.jsx(G,{to:"/admin/dashboard",children:"Admin Dashboard"}),o.jsx("button",{type:"button",onClick:m,children:"Logout"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(G,{to:"/login",className:"dock-site-login-btn",children:"Login"}),o.jsx(G,{to:"/register",className:"dock-site-register-btn",children:"Sign Up"})]}),o.jsx("button",{type:"button",className:`dock-mobile-toggle ${l?"open":""}`,"aria-label":l?"Close menu":"Open menu","aria-expanded":l,onClick:()=>c(w=>!w),children:l?da.close:da.menu})]})]})}),o.jsx("div",{className:`dock-mobile-overlay ${l?"open":""}`,onClick:()=>c(!1),children:o.jsxs("div",{className:`dock-mobile-panel ${l?"open":""}`,onClick:w=>w.stopPropagation(),children:[o.jsxs("div",{className:"dock-mobile-header",children:[o.jsx("div",{children:o.jsx("h2",{children:"Menu"})}),o.jsx("button",{type:"button",className:"dock-mobile-close",onClick:()=>c(!1),"aria-label":"Close menu",children:"x"})]}),o.jsx("div",{className:"dock-mobile-links",children:p.map(w=>o.jsxs(Hb,{to:w.to,onClick:()=>c(!1),children:[o.jsx("span",{className:"dock-mobile-link-icon",children:da[w.icon]}),o.jsx("span",{children:w.label})]},w.to))}),o.jsx("div",{className:"dock-mobile-auth",children:e?o.jsx("button",{type:"button",onClick:()=>{m(),c(!1)},children:"Logout"}):o.jsxs(o.Fragment,{children:[o.jsx(G,{to:"/login",onClick:()=>c(!1),children:"Login"}),o.jsx(G,{to:"/register",onClick:()=>c(!1),children:"Sign Up"})]})})]})})]})}const aP=[["Headline Artists","/#celebrities"],["VIP Passes","/tickets"],["Schedule & Roadmap","/#future-events"],["Partner Hotels","/#hotels"],["Festival Dining","/#restaurants"],["Promo Vouchers","/#discounts"],["Brand Sponsorships","/#sponsorship"]],oP=[["Contact Festival Team","/#contact"],["World-Class Facilities","/#facilities"],["Ticket Verification","/verification/OZ-2026-PREVIEW"],["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["My Digital Passes","/tickets/my-tickets"]],lP=[{name:"Instagram",href:"https://www.instagram.com/ozillafestival",svg:o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})},{name:"Facebook",href:"https://www.facebook.com/ozillafestival",svg:o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},{name:"YouTube",href:"https://www.youtube.com",svg:o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})},{name:"TikTok",href:"https://www.tiktok.com",svg:o.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.28-1.53 3.28-3.36V.02z"})})}];function Qy(){return o.jsxs("footer",{className:"oz-footer",children:[o.jsxs("div",{className:"oz-footer-container",children:[o.jsxs("section",{className:"oz-footer-cta-card",children:[o.jsxs("div",{className:"oz-footer-cta-text",children:[o.jsx("span",{className:"oz-footer-tag",children:"OZILLA FESTIVAL 2026"}),o.jsx("h2",{children:"Ready to experience Pakistan's biggest live music festival?"}),o.jsx("p",{children:"Join thousands of festival goers, celebrity artists, food culture hubs, and creators for an unforgettable Lahore celebration."})]}),o.jsxs("div",{className:"oz-footer-cta-buttons",children:[o.jsx(G,{to:"/tickets",className:"oz-btn-primary",children:"Book Your Pass →"}),o.jsx("a",{href:"/#celebrities",className:"oz-btn-outline",children:"Explore Lineup"})]})]}),o.jsxs("div",{className:"oz-footer-main-grid",children:[o.jsxs("div",{className:"oz-footer-col oz-footer-brand",children:[o.jsxs(G,{to:"/",className:"oz-footer-logo-wrap",children:[o.jsx("img",{src:Ue("/assets/ozilla/logo.png"),alt:"Ozilla Festival Logo",className:"oz-footer-logo-img"}),o.jsxs("div",{children:[o.jsx("strong",{children:"OZILLA FESTIVAL"}),o.jsx("span",{children:"PRISM ENTERTAINMENT"})]})]}),o.jsx("p",{className:"oz-footer-brand-desc",children:"Pakistan's premier live music, arts, food culture, and festival entertainment platform in Lahore."}),o.jsx("div",{className:"oz-footer-social-row",children:lP.map(e=>o.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,className:"oz-social-btn",children:e.svg},e.name))})]}),o.jsxs("div",{className:"oz-footer-col",children:[o.jsx("h4",{children:"Explore Festival"}),o.jsx("ul",{className:"oz-footer-list",children:aP.map(([e,t])=>o.jsx("li",{children:o.jsx(G,{to:t,children:e})},e))})]}),o.jsxs("div",{className:"oz-footer-col",children:[o.jsx("h4",{children:"Support & Info"}),o.jsx("ul",{className:"oz-footer-list",children:oP.map(([e,t])=>o.jsx("li",{children:o.jsx(G,{to:t,children:e})},e))})]}),o.jsxs("div",{className:"oz-footer-col oz-footer-hq",children:[o.jsx("h4",{children:"Festival HQ"}),o.jsxs("div",{className:"oz-hq-item",children:[o.jsx("span",{className:"oz-hq-badge",children:"VENUE"}),o.jsxs("div",{children:[o.jsx("p",{className:"oz-hq-title",children:"Lahore Event District"}),o.jsx("p",{className:"oz-hq-sub",children:"Lahore, Punjab, Pakistan"})]})]}),o.jsxs("div",{className:"oz-hq-item",children:[o.jsx("span",{className:"oz-hq-badge",children:"EMAIL"}),o.jsxs("div",{children:[o.jsx("p",{className:"oz-hq-title",children:"ozillafestival@gmail.com"}),o.jsx("p",{className:"oz-hq-sub",children:"Direct booking & inquiries"})]})]}),o.jsxs("div",{className:"oz-hq-item",children:[o.jsx("span",{className:"oz-hq-badge",children:"PHONE"}),o.jsxs("div",{children:[o.jsx("p",{className:"oz-hq-title",children:"+92 322 6622221"}),o.jsx("p",{className:"oz-hq-sub",children:"10:00 AM – 8:00 PM PKT"})]})]})]})]}),o.jsxs("section",{className:"oz-footer-newsletter-box",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Stay Updated on Drop Announcements"}),o.jsx("p",{children:"Get instant alerts on headline artist additions, VIP pass releases, and early-bird discounts."})]}),o.jsxs("form",{onSubmit:e=>e.preventDefault(),className:"oz-newsletter-form",children:[o.jsx("input",{type:"email",placeholder:"Enter your email address...",required:!0,"aria-label":"Email address"}),o.jsx("button",{type:"submit",children:"Subscribe"})]})]}),o.jsxs("div",{className:"oz-footer-bottom-bar",children:[o.jsx("p",{children:"© 2026 Ozilla Festival & Prism Events & Tours. All rights reserved."}),o.jsxs("div",{className:"oz-footer-legal-links",children:[o.jsx(G,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/verification/OZ-2026-PREVIEW",children:"QR Ticket Validation"})]})]})]}),o.jsx("style",{children:`
        .oz-footer {
          background: #080103 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 4.5rem 0 2rem;
          position: relative;
          z-index: 10;
        }

        .oz-footer-container {
          width: min(1280px, calc(100% - 3rem));
          margin: 0 auto;
        }

        /* ── TOP CTA CARD ── */
        .oz-footer-cta-card {
          background: linear-gradient(135deg, rgba(207, 87, 4, 0.3) 0%, rgba(85, 14, 14, 0.45) 50%, rgba(18, 2, 5, 0.9) 100%) !important;
          border: 1px solid rgba(255, 189, 89, 0.25);
          border-radius: 24px;
          padding: 2.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          margin-bottom: 4.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
        }

        .oz-footer-cta-text {
          max-width: 680px;
        }

        .oz-footer-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffbd59;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .oz-footer-cta-text h2 {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 0.8rem;
          letter-spacing: -0.02em;
        }

        .oz-footer-cta-text p {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
        }

        .oz-footer-cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .oz-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00) !important;
          color: #101819 !important;
          font-size: 0.95rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
          box-shadow: 0 8px 24px rgba(255, 138, 0, 0.35);
          white-space: nowrap;
        }

        .oz-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 138, 0, 0.5);
        }

        .oz-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff !important;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 200ms ease, transform 200ms ease;
          white-space: nowrap;
        }

        .oz-btn-outline:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.16) !important;
        }

        /* ── MAIN GRID ── */
        .oz-footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .oz-footer-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 1.2rem;
        }

        .oz-footer-logo-img {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .oz-footer-logo-wrap strong {
          display: block;
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.02em;
          color: #ffffff;
        }

        .oz-footer-logo-wrap span {
          display: block;
          font-size: 0.68rem;
          color: #ffbd59;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .oz-footer-brand-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .oz-footer-social-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: grid;
          place-items: center;
          color: #ffffff;
          transition: background 200ms ease, color 200ms ease, transform 200ms ease;
        }

        .oz-social-btn:hover {
          transform: translateY(-3px);
          background: #ffbd59;
          color: #101819;
        }

        .oz-footer-col h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.4rem;
          letter-spacing: 0.02em;
        }

        .oz-footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .oz-footer-list a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.92rem;
          text-decoration: none;
          transition: color 180ms ease, padding-left 180ms ease;
          display: inline-block;
        }

        .oz-footer-list a:hover {
          color: #ffbd59;
          padding-left: 4px;
        }

        /* ── HQ COLUMN ── */
        .oz-footer-hq {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .oz-hq-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.85rem 1rem;
          border-radius: 14px;
        }

        .oz-hq-badge {
          font-size: 0.65rem;
          font-weight: 900;
          color: #ffbd59;
          background: rgba(255, 189, 89, 0.15);
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          letter-spacing: 0.08em;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .oz-hq-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .oz-hq-sub {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 2px;
        }

        /* ── NEWSLETTER ── */
        .oz-footer-newsletter-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.8rem 2.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .oz-footer-newsletter-box h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }

        .oz-footer-newsletter-box p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .oz-newsletter-form {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          max-width: 440px;
          width: 100%;
          flex-shrink: 0;
        }

        .oz-newsletter-form input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
        }

        .oz-newsletter-form input:focus {
          border-color: #ffbd59;
        }

        .oz-newsletter-form button {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          background: #ffffff;
          color: #101819;
          font-size: 0.9rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: background 180ms ease, transform 180ms ease;
          white-space: nowrap;
        }

        .oz-newsletter-form button:hover {
          background: #ffbd59;
          transform: translateY(-2px);
        }

        /* ── BOTTOM BAR ── */
        .oz-footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .oz-footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .oz-footer-legal-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .oz-footer-legal-links a:hover {
          color: #ffbd59;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .oz-footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
          .oz-footer-cta-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .oz-footer-cta-buttons {
            width: 100%;
            justify-content: center;
          }
          .oz-footer-newsletter-box {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
          .oz-newsletter-form {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .oz-footer {
            padding: 3rem 0 1.5rem;
          }
          .oz-footer-container {
            width: min(100%, calc(100% - 1.5rem));
          }
          .oz-footer-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .oz-footer-cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          .oz-btn-primary, .oz-btn-outline {
            width: 100%;
          }
          .oz-newsletter-form {
            flex-direction: column;
            width: 100%;
          }
          .oz-newsletter-form button {
            width: 100%;
          }
          .oz-footer-bottom-bar {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `})]})}function Gn({children:e}){return o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#550e0e] text-white overflow-x-hidden w-full",children:[o.jsx(Xy,{}),o.jsx("div",{className:"flex-1 w-full overflow-x-hidden",children:e||o.jsx(Pi,{})}),o.jsx(Qy,{})]})}function Zl({children:e}){return o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#120205] text-white overflow-x-hidden w-full dock-app-shell",children:[o.jsx(Xy,{}),o.jsx("main",{className:"flex-1 px-4 sm:px-6 py-8 app-main app-content dock-app-content",children:o.jsx("div",{className:"app-page-frame",children:e||o.jsx(Pi,{})})}),o.jsx(Qy,{})]})}const cP='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>';function uP(){const e=hn(),t=Ze(),{login:n,checkAuth:r}=Dt(),s=new URLSearchParams(t.search).get("returnTo"),i=s&&s.startsWith("/")?s:"/dashboard",[a,l]=k.useState(!1),[c,u]=k.useState({email:"",password:""}),[d,f]=k.useState(!0),[p,g]=k.useState(""),[m,w]=k.useState(""),[b,h]=k.useState(!1),[x,y]=k.useState(!1),v=P=>{w(""),u({...c,[P.target.name]:P.target.value})},S=async P=>{var N,R;P.preventDefault(),g(""),w(""),h(!0);try{await n(c),w("Login successful. Preparing your festival workspace..."),await new Promise(C=>setTimeout(C,450)),e(i)}catch(C){g(((R=(N=C.response)==null?void 0:N.data)==null?void 0:R.message)||"Login failed")}finally{h(!1)}},E=async()=>{g(""),w("");{g("Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env");return}};return o.jsxs("form",{onSubmit:S,className:"auth-form login-form-premium",children:[p&&o.jsx("div",{className:"auth-alert auth-alert-error",children:p}),m&&o.jsx("div",{className:"auth-alert auth-alert-success login-success-alert",children:m}),o.jsx("div",{className:"auth-social-wrap",children:o.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google",onClick:E,disabled:x||b,children:[o.jsx("img",{src:cP,alt:"Google logo",className:"auth-google-logo"}),o.jsx("span",{children:x?"Opening Google...":"Sign in with Google"})]})}),o.jsx("div",{className:"auth-divider",children:o.jsx("span",{children:"Or sign in with email"})}),o.jsxs("div",{className:"auth-field login-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"login-email",children:"Email"}),o.jsx("input",{id:"login-email",type:"email",name:"email",value:c.email,onChange:v,className:"auth-input",placeholder:"you@example.com",autoComplete:"email",required:!0})]}),o.jsxs("div",{className:"auth-field login-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"login-password",children:"Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"login-password",type:a?"text":"password",name:"password",value:c.password,onChange:v,className:"auth-input auth-input-with-icon",placeholder:"Enter your password",autoComplete:"current-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>l(P=>!P),"aria-label":a?"Hide password":"Show password",children:a?"🙈":"👁"})]})]}),o.jsxs("div",{className:"login-form-row",children:[o.jsxs("label",{className:"login-remember",children:[o.jsx("input",{type:"checkbox",checked:d,onChange:P=>f(P.target.checked)}),o.jsx("span",{children:"Remember me"})]}),o.jsx("button",{type:"button",className:"auth-link login-forgot-link",children:"Forgot Password?"})]}),o.jsx("button",{type:"submit",disabled:b||x,className:"auth-btn auth-btn-primary",children:b?o.jsxs("span",{className:"login-loading-wrap",children:[o.jsx("span",{className:"login-loading-dot"}),"Signing In..."]}):o.jsx("span",{children:"Sign In"})}),o.jsxs("div",{className:"login-register-line",children:[o.jsx("span",{children:"Don't have an account?"}),o.jsx(G,{to:`/register?${new URLSearchParams({returnTo:i}).toString()}`,children:"Create New Account"})]}),o.jsxs("div",{className:"login-trust-grid","aria-label":"Login trust indicators",children:[o.jsx("span",{children:"Secure Login"}),o.jsx("span",{children:"Fast Authentication"}),o.jsx("span",{children:"Protected Account"}),o.jsx("span",{children:"Google Verified"})]})]})}function dP(){return o.jsxs("div",{className:"auth-form-container",children:[o.jsx(uP,{}),o.jsxs("div",{className:"auth-footer-links",children:[o.jsx(G,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/#contact",children:"Need Help?"})]})]})}const fP='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>',pP=()=>new Promise(e=>setTimeout(e,450));function hP(){const e=hn(),t=Ze(),{register:n,checkAuth:r}=Dt(),s=new URLSearchParams(t.search).get("returnTo"),i=s&&s.startsWith("/")?s:"/dashboard",[a,l]=k.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[c,u]=k.useState(""),[d,f]=k.useState(!1),[p,g]=k.useState(!1),[m,w]=k.useState(!1),[b,h]=k.useState(!1),[x,y]=k.useState(0),[v,S]=k.useState(""),[E,P]=k.useState(""),[N,R]=k.useState(!1),[C,I]=k.useState(!1),[V,$]=k.useState(!1),[H,J]=k.useState(!1),[O,U]=k.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),T=/^\S+@\S+\.\S+$/.test(a.email),M=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(a.phone.replace(/\s+/g,"")),L={upper:/[A-Z]/.test(a.password),lower:/[a-z]/.test(a.password),number:/\d/.test(a.password),special:/[^A-Za-z0-9]/.test(a.password),length:a.password.length>=8},B=Object.values(L).filter(Boolean).length,q=B===5,le=a.confirmPassword.length>0&&a.password===a.confirmPassword,ge=a.password.length>0,_e=k.useMemo(()=>ge?B<=2?{label:"Weak",className:"weak",percent:28}:B===3?{label:"Medium",className:"medium",percent:52}:B===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[ge,B]),W=[{key:"upper",text:"Uppercase letter",met:L.upper},{key:"lower",text:"Lowercase letter",met:L.lower},{key:"number",text:"Number",met:L.number},{key:"special",text:"Special character",met:L.special},{key:"length",text:"8+ characters",met:L.length}],ee=a.firstName.trim()&&a.lastName.trim()&&T&&M&&q&&le&&p&&!N&&!C;k.useEffect(()=>{if(x<=0)return;const X=window.setInterval(()=>{y(D=>Math.max(0,D-1))},1e3);return()=>window.clearInterval(X)},[x]);const Re=()=>{S(""),P("")},Je=X=>{const{name:D,value:K}=X.target;Re(),l(We=>({...We,[D]:K})),D==="email"&&(u(""),f(!1),g(!1),y(0)),D in O&&K.length>0&&U(We=>({...We,[D]:!0}))},Vt=X=>{const{name:D}=X.target;D in O&&U(K=>({...K,[D]:!0}))},gs=async()=>{var X,D;if(Re(),!T){U(K=>({...K,email:!0})),S("Please enter a valid email address before sending OTP.");return}w(!0);try{const K=await zr.resendOtp(a.email);f(!0),g(!1),y(60),K.otpForDevelopment?(u(K.otpForDevelopment),P(`${K.message} Development OTP: ${K.otpForDevelopment}`)):P(K.message||"OTP sent to your email address.")}catch(K){S(((D=(X=K.response)==null?void 0:X.data)==null?void 0:D.message)||K.message||"Unable to send OTP.")}finally{w(!1)}},ht=async()=>{var X,D;if(Re(),!T||c.trim().length<4){S("Enter the OTP sent to your email.");return}h(!0);try{const K=await zr.verifyOtp({email:a.email,otp:c});g(!0),P(K.message||"Email verified successfully.")}catch(K){g(!1),S(((D=(X=K.response)==null?void 0:X.data)==null?void 0:D.message)||K.message||"OTP verification failed.")}finally{h(!1)}},zi=async X=>{var D,K,We;if(X.preventDefault(),Re(),!T){U(Ee=>({...Ee,email:!0})),S("Please enter a valid email address.");return}if(!p){S("Please verify your email OTP before creating your account.");return}if(!M){U(Ee=>({...Ee,phone:!0})),S("Please enter a valid mobile number.");return}if(!q){U(Ee=>({...Ee,password:!0})),S("Please satisfy all password requirements.");return}if(!le){U(Ee=>({...Ee,confirmPassword:!0})),S("Passwords do not match.");return}R(!0);try{await n({firstName:a.firstName,lastName:a.lastName,name:`${a.firstName} ${a.lastName}`.trim(),email:a.email,phone:a.phone,password:a.password}),P("Account created successfully. Preparing your festival workspace..."),await pP(),e(i)}catch(Ee){const Di=(D=Ee.response)==null?void 0:D.status,Vi=((We=(K=Ee.response)==null?void 0:K.data)==null?void 0:We.message)||"Registration failed",mn=Vi.toLowerCase();Di===409||mn.includes("already")||mn.includes("exists")?S("Account already exists with this email or phone number"):S(Vi)}finally{R(!1)}},xs=async()=>{Re();{S("Google Sign-In configuration required: Please add VITE_GOOGLE_CLIENT_ID in client/.env");return}};return o.jsxs("form",{onSubmit:zi,className:"auth-form register-form-premium",children:[v&&o.jsx("div",{className:"auth-alert auth-alert-error register-alert",children:v}),E&&o.jsx("div",{className:"auth-alert auth-alert-success register-alert",children:E}),o.jsx("div",{className:"auth-social-wrap",children:o.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google register-google-btn",onClick:xs,disabled:C||N,children:[o.jsx("img",{src:fP,alt:"Google logo",className:"auth-google-logo"}),o.jsx("span",{children:C?"Opening Google...":"Sign up with Google"})]})}),o.jsx("div",{className:"auth-divider",children:o.jsx("span",{children:"Or create with email"})}),o.jsxs("div",{className:"auth-row register-name-row",children:[o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-first-name",children:"First Name"}),o.jsx("input",{id:"register-first-name",type:"text",name:"firstName",value:a.firstName,onChange:Je,className:"auth-input",autoComplete:"given-name",required:!0})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-last-name",children:"Last Name"}),o.jsx("input",{id:"register-last-name",type:"text",name:"lastName",value:a.lastName,onChange:Je,className:"auth-input",autoComplete:"family-name",required:!0})]})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-email",children:"Email Address"}),o.jsx("input",{id:"register-email",type:"email",name:"email",value:a.email,onChange:Je,onBlur:Vt,className:`auth-input ${O.email&&!T?"auth-input-invalid":""}`,placeholder:"you@example.com",autoComplete:"email",required:!0})]}),O.email&&!T&&o.jsx("p",{className:"auth-field-error",children:"Please enter a valid email address."}),o.jsxs("div",{className:`register-otp-card register-otp-card-desktop ${p?"register-otp-verified":""}`,children:[o.jsxs("div",{children:[o.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),o.jsx("strong",{children:p?"Email verified":d?"Enter your OTP":"Verify before signup"}),o.jsx("span",{className:"register-otp-status",children:p?"Verified with premium security":x>0?`Resend available in ${x}s`:"One-time code expires in 10 minutes"})]}),o.jsxs("div",{className:"register-otp-controls",children:[o.jsx("button",{type:"button",className:"register-mini-btn",onClick:gs,disabled:m||!T||p||x>0,children:m?"Sending...":d?"Resend OTP":"Send OTP"}),o.jsx("input",{type:"text",value:c,onChange:X=>{Re(),u(X.target.value.replace(/\D/g,"").slice(0,6)),g(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!d||p}),o.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:ht,disabled:!d||p||b,children:b?"Verifying...":p?"Verified":"Verify"})]}),p&&o.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-phone",children:"Phone Number"}),o.jsx("input",{id:"register-phone",type:"tel",name:"phone",value:a.phone,onChange:Je,onBlur:Vt,className:`auth-input ${O.phone&&!M?"auth-input-invalid":""}`,placeholder:"+92 3XX XXXXXXX",autoComplete:"tel",required:!0})]}),O.phone&&!M&&o.jsx("p",{className:"auth-field-error",children:"Please enter a valid mobile number."}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-password",children:"Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"register-password",type:V?"text":"password",name:"password",value:a.password,onChange:Je,onBlur:Vt,className:`auth-input auth-input-with-icon ${O.password&&!q?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>$(X=>!X),"aria-label":V?"Hide password":"Show password",children:V?"🙈":"👁"})]})]}),o.jsxs("div",{className:`register-strength register-strength-${_e.className}`,children:[o.jsxs("div",{className:"register-strength-top",children:[o.jsx("span",{children:"Password Strength"}),o.jsx("strong",{children:_e.label})]}),o.jsx("div",{className:"register-strength-track",children:o.jsx("span",{style:{width:`${_e.percent}%`}})})]}),o.jsx("ul",{className:"auth-password-rules register-password-rules",children:W.map(X=>{const D=X.met?"auth-rule-met":ge?"auth-rule-unmet":"auth-rule-neutral";return o.jsxs("li",{className:`auth-password-rule-item ${D}`,children:[o.jsx("span",{className:"auth-rule-icon","aria-hidden":"true",children:X.met?"✓":"✗"}),o.jsx("span",{children:X.text})]},X.key)})}),o.jsxs("div",{className:"auth-field register-field-shell",children:[o.jsx("label",{className:"auth-label",htmlFor:"register-confirm-password",children:"Confirm Password"}),o.jsxs("div",{className:"auth-input-wrap",children:[o.jsx("input",{id:"register-confirm-password",type:H?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:Je,onBlur:Vt,className:`auth-input auth-input-with-icon ${O.confirmPassword&&!le?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),o.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>J(X=>!X),"aria-label":H?"Hide confirm password":"Show confirm password",children:H?"🙈":"👁"})]})]}),O.confirmPassword&&!le&&o.jsx("p",{className:"auth-field-error",children:"Passwords do not match."}),o.jsxs("div",{className:`register-otp-card register-otp-card-mobile ${p?"register-otp-verified":""}`,children:[o.jsxs("div",{children:[o.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),o.jsx("strong",{children:p?"Email verified":d?"Enter your OTP":"Verify before signup"}),o.jsx("span",{className:"register-otp-status",children:p?"Verified with premium security":x>0?`Resend available in ${x}s`:"One-time code expires in 10 minutes"})]}),o.jsxs("div",{className:"register-otp-controls",children:[o.jsx("button",{type:"button",className:"register-mini-btn",onClick:gs,disabled:m||!T||p||x>0,children:m?"Sending...":d?"Resend OTP":"Send OTP"}),o.jsx("input",{type:"text",value:c,onChange:X=>{Re(),u(X.target.value.replace(/\D/g,"").slice(0,6)),g(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code","aria-label":"Email OTP code",disabled:!d||p}),o.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:ht,disabled:!d||p||b,children:b?"Verifying...":p?"Verified":"Verify"})]}),p&&o.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),o.jsx("button",{type:"submit",disabled:!ee,className:"auth-btn auth-btn-primary register-create-btn",children:N?o.jsxs("span",{className:"login-loading-wrap",children:[o.jsx("span",{className:"login-loading-dot"}),"Preparing Your Experience..."]}):o.jsx("span",{children:"Create Account"})}),o.jsxs("div",{className:"register-login-line",children:[o.jsx("span",{children:"Already have an account?"}),o.jsx(G,{to:`/login?${new URLSearchParams({returnTo:i}).toString()}`,children:"Sign In"})]}),o.jsxs("div",{className:"register-trust-grid","aria-label":"Registration trust indicators",children:[o.jsx("span",{children:"Secure Registration"}),o.jsx("span",{children:"Instant Verification"}),o.jsx("span",{children:"Protected Account"}),o.jsx("span",{children:"Google Verified"})]})]})}function mP(){return o.jsxs("div",{className:"auth-form-container",children:[o.jsx(hP,{}),o.jsxs("div",{className:"auth-footer-links",children:[o.jsx(G,{to:"/privacy",children:"Privacy Policy"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/terms",children:"Terms of Service"}),o.jsx("span",{children:"•"}),o.jsx(G,{to:"/#contact",children:"Need Help?"})]})]})}function gP(){const[e]=qb(),t=hn(),{checkAuth:n}=Dt(),[r,s]=k.useState("Signing you in with Google...");return k.useEffect(()=>{(async()=>{const a=e.get("token"),l=e.get("error"),c=e.get("returnTo"),u=c&&c.startsWith("/")?c:"/dashboard";if(l){s(l==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const d=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>t(`/login?${d}`,{replace:!0}),1200);return}if(!a){s("Google sign-in token not found. Please try again.");const d=new URLSearchParams({returnTo:u}).toString();setTimeout(()=>t(`/login?${d}`,{replace:!0}),1200);return}xt.setToken(a),await n(),t(u,{replace:!0})})()},[n,t,e]),o.jsx("div",{className:"auth-page",children:o.jsxs("div",{className:"auth-card",children:[o.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),o.jsx("p",{className:"auth-subtitle",children:r})]})})}const jr={about:"OZilla Festival is a youth-focused entertainment experience combining music, food, culture, creators, brands and communities into one powerful lifestyle platform.",festivalExperience:["Live Concerts","DJ Nights","Food Experiences","Brand Activation Zones","Content and Photo Moments","Community Engagement"],journey:["Discover OZilla","Explore Partners","Select Discount","Use Promo Code","Enjoy Experience"],partnerBenefits:["Digital Visibility","Customer Reach","Influencer Promotion","Event Audience Access","Brand Awareness"],restaurants:[{name:"Street Grill Co.",cuisine:"BBQ and Fast Casual",location:"Karachi",discount:"15% OFF",offer:"Festival combo meal with priority queue access.",code:"OZILLA15"},{name:"Spice District",cuisine:"Pakistani Fusion",location:"Lahore",discount:"20% OFF",offer:"Family platter offer for OZilla audience.",code:"SPICE20"},{name:"Urban Brew",cuisine:"Cafe and Desserts",location:"Islamabad",discount:"Buy 1 Get 1",offer:"Coffee and dessert pair for creators and attendees.",code:"BREWBOGO"}],hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:Ue("/assets/hotels/Pearl-Continental-Lahore.jpg"),showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:Ue("/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg"),showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:Ue("/assets/hotels/Hotel-Indigo.jpg"),showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:Ue("/assets/hotels/Hotel-One-Gulberg-Lahore.jpg"),showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:Ue("/assets/hotels/Luxus-Grand-Hotel.jpg"),showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:Ue("/assets/hotels/Nishat.jpg"),showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]},xP=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",stage:"Main Prism Stage",bpm:"128 BPM",vibe:"Euphoric Night",image:Ue("/assets/ozilla/talwinder.jpg")},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",stage:"Neon Bass Arena",bpm:"132 BPM",vibe:"High Energy",image:Ue("/assets/ozilla/Imran-Khan.jpg")},{name:"BOHEMIA",genre:"Punjabi Rap / Desi Hip Hop",stage:"Underground Stage",bpm:"95 BPM",vibe:"Heavy Bass",image:Ue("/assets/ozilla/Bohemia.jpg")},{name:"HASSAN RAHEEM",genre:"Pop / Indie R&B",stage:"Sunset Stage",bpm:"115 BPM",vibe:"Golden Hour Chill",image:Ue("/assets/ozilla/hassan-raheem.jpg")}],yP=[{id:"general",name:"General Pass",badge:"STANDARD ACCESS",price:"PKR 4,500",sub:"Full 1-day festival admission",isFeatured:!1,perks:["Access to All 4 Music Stages","Food & Beats Street Access","Festival Photo Booths & Activations","Instant Digital QR Pass"],ctaText:"Get General Pass",ctaLink:"/tickets"},{id:"vip",name:"VIP Experience",badge:"MOST POPULAR",price:"PKR 12,500",sub:"Elevated front-row & lounge access",isFeatured:!0,perks:["Priority Front Stage Viewing Deck","Private VIP Artist Lounge Access","Dedicated Fast-Track Entry Gate","Complimentary Food & Drink Voucher","20% Partner Hotel & Dining Discounts","Holographic VIP Commemorative Pass"],ctaText:"Book VIP Pass →",ctaLink:"/tickets"},{id:"platinum",name:"All-Access Platinum",badge:"EXCLUSIVE ALL-ACCESS",price:"PKR 25,000",sub:"Ultimate luxury hospitality package",isFeatured:!1,perks:["Backstage & Artist Lounge Access","Valet Reserved Parking Spot","Gourmet Catering & Open Mocktail Bar","Exclusive Afterparty Invitation","Dedicated Hospitality Concierge","Full Merchandise Gift Bundle"],ctaText:"Reserve Platinum Pass",ctaLink:"/tickets"}],vP=[{name:"Ozilla Festival 2026",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED EVENT",description:"The flagship Ozilla experience with live music, food culture, partner activations, and premium crowd moments."},{name:"Celebrity Night",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIVE EVENT",description:"A high-energy night built around headline artists, stage lights, social moments, and unforgettable performances."},{name:"Brand Experience Zone",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIMITED SEATS",description:"Immersive sponsor zones, creator content, giveaways, product trials, and interactive festival experiences."}],wP=[{name:"Ozilla Strategy Module",status:"Completed",detail:"Audience journey and activation playbook finalized."},{name:"Ozilla Scale Module",status:"Completed",detail:"Multi-channel visibility model and sponsor packages benchmarked."}],bP=[{name:"Ozilla Strategy Module",year:"2023",description:"Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.",highlights:["Brand Positioning","Audience Research","Partner Onboarding"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Scale Module",year:"2024",description:"Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.",highlights:["Creator Collaborations","Sponsor Visibility","Live Entertainment Blocks"],venue:"DHA Sports Club, Lahore",date:"November 9, 2024"},{name:"Ozilla Festival Website Brief 2026",year:"2025",description:"Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.",highlights:["Ticketing Workflow","Experience Mapping","Marketing Readiness"],venue:"Gulberg Event District, Lahore",date:"October 18, 2025"},{name:"Ozilla Basand Festival",year:"2026",description:"Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.",highlights:["Cultural Performances","Live Music","Brand Activation Zones"],venue:"Lahore, Punjab",date:"March 07, 2026"},{name:"Ozilla Festival 2027 Season 2",year:"2027",description:"Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.",highlights:["Celebrity Performances","Expanded Audience Program","Premium Experience Zones"],venue:"Lahore, Punjab",date:"November 14, 2027"}],kP=[{tier:"Title Sponsor",price:"Premium",perks:["Exclusive brand naming rights","Stage backdrop placement","VIP zone branding","30-second ad slot","Social media features"]},{tier:"Gold Sponsor",price:"High",perks:["Brand activation zone","Banner placements","Digital features","Influencer mentions","On-ground presence"]},{tier:"Silver Sponsor",price:"Mid",perks:["Logo on all materials","Social shoutout","Booth at festival","Feature in email campaigns"]},{tier:"Media Partner",price:"Custom",perks:["Media coverage rights","Press passes","Collaborative content","Announcement placement"]}],SP=[{title:"Main Concert Stage",desc:"World-class 100kW concert sound system, 360° laser array, and immersive sub-bass arrays."},{title:"Food & Beats Court",desc:"Curated food street featuring artisan fusion eats, mocktails, coffee and desserts."},{title:"24/7 Medical Hub",desc:"On-site first aid stations, paramedic support, and emergency rapid response teams."},{title:"Secure VIP Parking",desc:"Valet and managed parking zones for general festival attendees and VIP ticket holders."},{title:"Neon Photo Booths",desc:"Interactive holographic backdrops, creator lighting rigs, and festival photo moments."},{title:"Full Accessibility",desc:"Dedicated accessible viewing decks, pathways, and on-ground hospitality assistance."},{title:"Crowd Safety Squad",desc:"Trained professional security and crowd flow management across all festival zones."},{title:"Ultra-Fast WiFi",desc:"High-speed gigabit Wi-Fi zones for seamless streaming, posting, and sharing moments."}],jP=[{brand:"Street Grill Co.",category:"Restaurant",discount:"15% OFF",code:"OZILLA15",desc:"Festival combo meal with priority queue access."},{brand:"Spice District",category:"Restaurant",discount:"20% OFF",code:"SPICE20",desc:"Family platter offer for OZilla audience."},{brand:"Urban Brew",category:"Cafe",discount:"Buy 1 Get 1",code:"BREWBOGO",desc:"Coffee and dessert pair for creators and attendees."},{brand:"Partner Hotels",category:"Hotel",discount:"10% OFF",code:"OZHOTEL10",desc:"Exclusive discount on festival weekend stays."}],NP=[{value:"10,000+",label:"Music Lovers",sub:"Packed Live Crowd"},{value:"20+",label:"Star Performers",sub:"Celebrity & Indie Acts"},{value:"4",label:"Mega Stages",sub:"Non-stop Beats"},{value:"50+",label:"Food & Stalls",sub:"Culinary & Brand Hub"}];function EP(e){const[t,n]=k.useState(()=>{const r=Math.max(new Date(e)-Date.now(),0);return{days:Math.floor(r/864e5),hours:Math.floor(r/36e5%24),minutes:Math.floor(r/6e4%60),seconds:Math.floor(r/1e3%60)}});return k.useEffect(()=>{const r=setInterval(()=>{const s=Math.max(new Date(e)-Date.now(),0);n({days:Math.floor(s/864e5),hours:Math.floor(s/36e5%24),minutes:Math.floor(s/6e4%60),seconds:Math.floor(s/1e3%60)})},1e3);return()=>clearInterval(r)},[e]),t}function PP(){const e=Ze(),t=EP("2026-11-01T18:00:00+05:00");return k.useEffect(()=>{var r;const n=(r=e.hash)==null?void 0:r.replace("#","");n?setTimeout(()=>{const s=document.getElementById(n);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},150):window.scrollTo({top:0,behavior:"smooth"})},[e.hash]),o.jsxs("main",{className:"sp-main",children:[o.jsxs("section",{id:"home",className:"sp-hero","aria-label":"Ozilla Festival",children:[o.jsx(ux,{nodeColor:"#EC4899",lineColor:"236, 72, 153",secondaryColor:"255, 90, 31",maxDistance:145,speed:.6}),o.jsx("div",{className:"sp-hero-ambient-glow"}),o.jsxs("div",{className:"sp-hero-content",children:[o.jsxs("div",{className:"sp-hero-badge",children:[o.jsx("span",{children:"✨"}),o.jsx("strong",{children:"OZILLA FESTIVAL 2026 · LAHORE"})]}),o.jsx("h1",{className:"sp-hero-title",children:"OZILLA FESTIVAL"}),o.jsx("p",{className:"sp-hero-subtitle",children:"Pakistan's Premier Music, Cultural & Entertainment Festival Live in Lahore. Experience 4 Mega Stages, Headline Artists, Gourmet Dining & Unmatched Sound."}),o.jsxs("div",{className:"sp-hero-meta-strip",children:[o.jsx("span",{children:"📅 November 1, 2026"}),o.jsx("span",{children:"📍 Lahore, Pakistan"}),o.jsx("span",{children:"⚡ 4 Mega Stages"}),o.jsx("span",{children:"🎟️ Official QR Passes"})]}),o.jsxs("div",{className:"sp-hero-actions",children:[o.jsx("a",{className:"sp-btn-ember",href:"#celebrities",children:"Explore Lineup"}),o.jsx(G,{className:"sp-btn-ghost",to:"/tickets",children:"Get VIP Passes"})]})]})]}),o.jsx("section",{className:"festival-stats-strip","aria-label":"Festival Highlights",children:o.jsx("div",{className:"sp-container",children:o.jsx("div",{className:"stats-inner-grid",children:NP.map((n,r)=>o.jsxs(Jo.div,{className:"stat-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:r*.08},children:[o.jsx("strong",{className:"stat-val",children:n.value}),o.jsx("span",{className:"stat-label",children:n.label}),o.jsx("small",{className:"stat-sub",children:n.sub})]},n.label))})})}),o.jsx("section",{id:"celebrities",className:"sp-section sp-section-celebrities","aria-label":"Celebrities Lineup",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Live on the Ozilla Stage"}),o.jsx("h2",{className:"sp-section-title",children:"Celebrity Singers & Performers"}),o.jsx("p",{className:"sp-section-subtitle",children:"Four powerhouse headline performers, one premium Lahore festival atmosphere, and an amphitheatre built for unforgettable crowd moments."})]}),o.jsx("div",{className:"sp-celebrity-grid",children:xP.map(n=>o.jsx("article",{className:`sp-celeb-card ${n.isHeadliner?"sp-celeb-headliner":""}`,children:o.jsxs("div",{className:"sp-celeb-frame",children:[o.jsx("img",{src:n.image,alt:n.name,loading:"lazy",onError:r=>{r.currentTarget.src=Ue("/assets/prism-auth-visual.jpg")}}),o.jsx("div",{className:"celeb-holo-sheen"}),o.jsxs("div",{className:"celeb-top-badges",children:[n.isHeadliner?o.jsx("span",{className:"sp-headliner-badge",children:"★ MAIN HEADLINER"}):o.jsx("span",{className:"celeb-stage-tag",children:n.stage}),o.jsxs("div",{className:"celeb-mini-eq",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsxs("div",{className:"sp-celeb-overlay",children:[o.jsx("div",{className:"celeb-genre-pill",children:n.genre}),o.jsx("h3",{children:n.name}),o.jsxs("div",{className:"celeb-meta-row",children:[o.jsxs("span",{children:["⚡ ",n.bpm]}),o.jsxs("span",{children:["♫ ",n.vibe]})]})]})]})},n.name))}),o.jsxs("div",{className:"sp-countdown",children:[o.jsx("p",{className:"sp-eyebrow",style:{marginBottom:"1.4rem"},children:"Countdown to the First Beat Drop"}),o.jsx("div",{className:"sp-countdown-grid",children:[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]].map(([n,r])=>o.jsxs("div",{className:"sp-countdown-card",children:[o.jsx("strong",{children:String(r).padStart(2,"0")}),o.jsx("span",{children:n})]},n))})]})]})}),o.jsx("section",{id:"vip-experience",className:"sp-section sp-section-pricing","aria-label":"Festival Passes",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",style:{textAlign:"center"},children:[o.jsx("span",{className:"sp-eyebrow",children:"CHOOSE YOUR ACCESS"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Passes & VIP Tiers"}),o.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Select your festival experience tier. Instant dynamic QR pass generated upon reservation with guaranteed fast-track admission."})]}),o.jsx("div",{className:"sp-pricing-grid",children:yP.map(n=>o.jsxs("div",{className:`sp-pricing-card ${n.isFeatured?"sp-featured-pricing":""}`,children:[n.isFeatured&&o.jsx("div",{className:"sp-pricing-popular-tag",children:"MOST POPULAR ACCESS"}),o.jsxs("div",{className:"sp-pricing-header",children:[o.jsx("span",{className:"sp-tier-badge",children:n.badge}),o.jsx("h3",{children:n.name}),o.jsx("div",{className:"sp-pricing-cost",children:o.jsx("strong",{children:n.price})}),o.jsx("p",{className:"sp-pricing-sub",children:n.sub})]}),o.jsx("div",{className:"sp-pricing-divider"}),o.jsx("ul",{className:"sp-pricing-features",children:n.perks.map(r=>o.jsxs("li",{children:[o.jsx("span",{className:"sp-perk-check",children:"✓"}),o.jsx("span",{children:r})]},r))}),o.jsx(G,{to:n.ctaLink,className:n.isFeatured?"sp-btn-ember w-full":"sp-btn-ghost w-full",style:{textAlign:"center",marginTop:"auto"},children:n.ctaText})]},n.id))})]})}),o.jsx("section",{id:"about",className:"sp-section sp-section-about","aria-label":"About Ozilla",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"The Festival Experience"}),o.jsx("h2",{className:"sp-section-title",children:"Who We Are"})]}),o.jsxs("div",{className:"sp-about-grid",children:[o.jsxs("div",{className:"sp-about-text",children:[o.jsx("p",{className:"sp-lead",children:jr.about}),o.jsx("p",{children:"The platform is designed around discovery, curated stage experiences, hospitality partnerships, exclusive discount access, and long-term brand collaborations."}),o.jsx("div",{className:"sp-journey-steps",children:jr.journey.map((n,r)=>o.jsxs("div",{className:"sp-journey-step",children:[o.jsx("span",{className:"sp-step-num",children:r+1}),o.jsx("span",{children:n})]},n))})]}),o.jsxs("div",{className:"sp-about-features",children:[o.jsx("h3",{children:"Festival Highlights"}),o.jsx("div",{className:"sp-tag-cloud",children:jr.festivalExperience.map(n=>o.jsx("span",{className:"sp-tag",children:n},n))}),o.jsx("h3",{style:{marginTop:"2rem"},children:"Partner Benefits"}),o.jsx("div",{className:"sp-tag-cloud",children:jr.partnerBenefits.map(n=>o.jsx("span",{className:"sp-tag sp-tag-accent",children:n},n))})]})]})]})}),o.jsx("section",{id:"events",className:"sp-section sp-section-events","aria-label":"Past Events",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Completed Milestones"}),o.jsx("h2",{className:"sp-section-title",children:"Past Event Modules"})]}),o.jsx("div",{className:"sp-events-grid",children:wP.map(n=>o.jsxs("div",{className:"sp-glass-card",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),o.jsx("span",{className:"sp-pill-badge",children:n.status})]}),o.jsx("p",{className:"sp-card-desc",children:n.detail})]},n.name))})]})}),o.jsx("section",{id:"future-events",className:"sp-section sp-section-future","aria-label":"Upcoming Events",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Upcoming Roadmap"}),o.jsx("h2",{className:"sp-section-title",children:"Upcoming Experiences"})]}),o.jsx("div",{className:"sp-future-grid",children:vP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-future-card",children:[o.jsx("span",{className:"sp-pill-badge",children:n.status}),o.jsx("h3",{style:{marginTop:"0.8rem"},children:n.name}),o.jsxs("p",{className:"sp-meta-text",children:["📍 ",n.date," · ",n.location]}),o.jsx("p",{className:"sp-card-desc",style:{flex:1},children:n.description}),o.jsx(G,{to:"/tickets",className:"sp-accent-link",children:"Get Tickets →"})]},n.name))})]})}),o.jsx("section",{id:"history",className:"sp-section sp-section-history","aria-label":"Festival History",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Festival Journey"}),o.jsx("h2",{className:"sp-section-title",children:"Our Legacy & Timeline"})]}),o.jsx("div",{className:"sp-timeline",children:bP.map((n,r)=>o.jsxs("div",{className:"sp-timeline-item",children:[o.jsx("div",{className:"sp-timeline-icon",children:r+1}),o.jsxs("div",{className:"sp-glass-card sp-timeline-content",children:[o.jsxs("div",{className:"sp-meta-text",children:[o.jsx("span",{className:"sp-year-highlight",children:n.year})," · ",n.date]}),o.jsx("h3",{children:n.name}),o.jsx("p",{className:"sp-card-desc",children:n.description}),o.jsx("div",{className:"sp-tag-cloud",children:n.highlights.map(s=>o.jsx("span",{className:"sp-tag",children:s},s))}),o.jsxs("p",{className:"sp-venue-text",children:["📍 ",n.venue]})]})]},n.name))})]})}),o.jsx("section",{id:"hotels",className:"sp-section sp-section-hotels","aria-label":"Partner Hotels",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Hospitality Partners"}),o.jsx("h2",{className:"sp-section-title",children:"Partner Hotels in Lahore"})]}),o.jsx("div",{className:"sp-hotels-grid",children:jr.hotels.map((n,r)=>{var s;return o.jsxs("div",{className:`sp-glass-card sp-hotel-card ${r===0?"sp-featured-border":""}`,children:[n.showImage&&o.jsx("div",{className:"sp-hotel-img-wrap",children:o.jsx("img",{src:n.image,alt:n.name,loading:"lazy",onError:i=>{i.currentTarget.src=Ue("/assets/prism-auth-visual.jpg")}})}),o.jsxs("div",{className:"sp-hotel-body",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),n.rating&&o.jsxs("span",{className:"sp-rating-tag",children:["⭐ ",n.rating]})]}),o.jsxs("p",{className:"sp-meta-text",children:["📍 ",n.location]}),o.jsx("p",{className:"sp-card-desc",children:n.description}),o.jsx("div",{className:"sp-tag-cloud",children:(s=n.facilities)==null?void 0:s.map(i=>o.jsx("span",{className:"sp-tag",children:i},i))}),o.jsx("p",{className:"sp-contact-text",children:n.contact}),n.website&&o.jsx("a",{href:n.website,target:"_blank",rel:"noopener noreferrer",className:"sp-accent-link",children:"Book Room →"})]})]},n.name)})})]})}),o.jsx("section",{id:"restaurants",className:"sp-section sp-section-dining","aria-label":"Dining Hub",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Food & Drinks"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Dining Hub"})]}),o.jsx("div",{className:"sp-restaurants-grid",children:jr.restaurants.map(n=>o.jsxs("div",{className:"sp-glass-card",children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.name}),o.jsx("span",{className:"sp-discount-pill",children:n.discount})]}),o.jsxs("p",{className:"sp-meta-text",children:[n.cuisine," · ",n.location]}),o.jsx("p",{className:"sp-card-desc",children:n.offer}),o.jsxs("div",{className:"sp-code-box",children:[o.jsx("span",{children:"Promo Code:"}),o.jsx("code",{children:n.code})]})]},n.name))})]})}),o.jsx("section",{id:"discounts",className:"sp-section sp-section-deals","aria-label":"Promo Vouchers",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Exclusive Member Deals"}),o.jsx("h2",{className:"sp-section-title",children:"Festival Promo Vouchers"})]}),o.jsx("div",{className:"sp-discounts-grid",children:jP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-voucher-card",children:[o.jsx("span",{className:"sp-eyebrow",style:{fontSize:"0.75rem",marginBottom:"0.3rem"},children:n.category}),o.jsx("h3",{style:{marginTop:"0.2rem",fontSize:"1.3rem"},children:n.brand}),o.jsx("p",{className:"sp-card-desc",style:{margin:"0.6rem 0 1.2rem"},children:n.desc}),o.jsxs("div",{className:"sp-discount-footer",children:[o.jsx("span",{className:"sp-big-discount",children:n.discount}),o.jsx("code",{className:"sp-code-pill",children:n.code})]})]},n.brand))})]})}),o.jsx("section",{id:"facilities",className:"sp-section sp-section-facilities","aria-label":"Facilities",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",children:[o.jsx("span",{className:"sp-eyebrow",children:"Festival Venue"}),o.jsx("h2",{className:"sp-section-title",children:"World-Class Facilities"})]}),o.jsx("div",{className:"sp-facilities-grid",children:SP.map(n=>o.jsxs("div",{className:"sp-glass-card sp-facility-card",children:[o.jsx("h3",{children:n.title}),o.jsx("p",{className:"sp-card-desc",children:n.desc})]},n.title))})]})}),o.jsx("section",{id:"sponsorship",className:"sp-section sp-section-sponsorship","aria-label":"Sponsorships",children:o.jsxs("div",{className:"sp-container",children:[o.jsxs("div",{className:"sp-section-header",style:{textAlign:"center"},children:[o.jsx("span",{className:"sp-eyebrow",children:"Brand Partnerships"}),o.jsx("h2",{className:"sp-section-title",children:"Sponsorship Packages"}),o.jsx("p",{className:"sp-section-subtitle",style:{margin:"0 auto"},children:"Be part of Lahore's biggest music festival. Gain massive on-ground visibility and digital engagement."})]}),o.jsx("div",{className:"sp-sponsorship-grid",children:kP.map((n,r)=>o.jsxs("div",{className:`sp-glass-card sp-sponsor-card ${r===0?"sp-featured-border":""}`,children:[o.jsxs("div",{className:"sp-card-header",children:[o.jsx("h3",{children:n.tier}),o.jsx("span",{className:"sp-pill-badge",children:n.price})]}),o.jsx("ul",{className:"sp-sponsor-perks",children:n.perks.map(s=>o.jsxs("li",{children:[o.jsx("span",{className:"sp-check",children:"✓"}),s]},s))}),o.jsx(G,{to:"/tickets",className:"sp-btn-ghost",style:{textAlign:"center",marginTop:"1.2rem"},children:"Get Partner Pass"})]},n.tier))})]})}),o.jsx("style",{children:`
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
      `})]})}const Zy="ozilla_local_tickets";let wn=!1;const Jy={regular:1200,vip:1,premium:120},TP=["pending","payment_submitted","approved","confirmed"];function So(e){const t=String(e||"regular").toLowerCase().trim();return t==="general"?"regular":Jy[t]?t:"regular"}function fa(){const e=Object.entries(Jy).reduce((r,[s,i])=>(r[s]={type:s,label:s==="regular"?"General":s==="vip"?"VIP":"Premium",capacity:i,sold:0,remaining:i,soldOut:!1},r),{});for(const r of at()){if(!TP.includes(r.status))continue;const s=So(r.ticketType);e[s].sold+=Number(r.quantity)||1}let t=0,n=0;for(const r of Object.values(e))r.sold=Math.min(r.sold,r.capacity),r.remaining=Math.max(0,r.capacity-r.sold),r.soldOut=r.remaining<=0,t+=r.capacity,n+=r.sold;return{capacity:t,sold:n,remaining:Math.max(0,t-n),soldOut:Object.values(e).every(r=>r.soldOut),byType:e,mode:"local-fallback"}}function CP(e){var t,n;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((n=e==null?void 0:e.message)==null?void 0:n.includes("ECONNREFUSED")))}function qn(e){return CP(e)?(wn=!0,!0):!1}function at(){try{const e=localStorage.getItem(Zy),t=e?JSON.parse(e):[];return Array.isArray(t)?t.map(n=>(n==null?void 0:n.status)==="payment_submitted"?{...n,status:"approved",generatedAt:n.generatedAt||n.updatedAt||new Date().toISOString(),verifiedAt:n.verifiedAt||null}:n):[]}catch{return[]}}function yn(e){localStorage.setItem(Zy,JSON.stringify(e))}function RP(e){const t=String(e||""),n=t.startsWith("local.")?t.slice(6):t;try{return JSON.parse(atob(n))}catch{return null}}function Ct(){const e=RP(xt.getToken());return{userId:String((e==null?void 0:e.sub)||"").trim(),email:String((e==null?void 0:e.email)||"").toLowerCase().trim()}}function $t(e,t){if(!(t!=null&&t.email)&&!(t!=null&&t.userId))return!1;const n=String((e==null?void 0:e.ownerEmail)||"").toLowerCase().trim(),r=String((e==null?void 0:e.ownerId)||"").trim(),s=String((e==null?void 0:e.email)||"").toLowerCase().trim();return n&&t.email?n===t.email:r&&t.userId?r===t.userId:t.email?s===t.email:!1}function cm(e={}){const t=`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,n=((e==null?void 0:e.name)||`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`).trim()||"Demo User",r={id:"oz2026",name:"Ozilla Festival 2026",date:"2026-11-01",time:"08:00 PM",location:"Lahore"},s=new Date().toISOString(),i=Ct(),a=String((e==null?void 0:e.email)||(i==null?void 0:i.email)||"local@ozillafestival.com").toLowerCase().trim();return{id:t,ticketId:`OZILLA-${t.slice(-8).toUpperCase()}`,uniqueTicketId:`OZILLA-${t.slice(-8).toUpperCase()}`,ownerId:(i==null?void 0:i.userId)||"",ownerEmail:a,fullName:n,name:n,email:a,phone:String((e==null?void 0:e.phone)||"+923000000000").trim(),idCardNumber:String((e==null?void 0:e.idCardNumber)||"").trim(),festivalDay:(e==null?void 0:e.festivalDay)==="day2"?"day2":"day1",eventId:r.id,eventName:r.name,eventDate:r.date,eventTime:r.time,location:r.location,ticketType:So(e==null?void 0:e.ticketType),quantity:Number(e==null?void 0:e.quantity)||1,status:"pending",createdAt:s,updatedAt:s}}const yt={async getAvailability(){if(wn)return fa();try{return(await re.get("/tickets/availability")).data}catch(e){if(qn(e))return fa();throw e}},async getMyTickets(){if(wn){const e=Ct();return at().filter(t=>$t(t,e))}try{return(await re.get("/tickets/my-tickets")).data}catch(e){if(qn(e)){const t=Ct();return at().filter(n=>$t(n,t))}throw e}},async requestTicket(e){if(wn){const t=fa(),n=So(e==null?void 0:e.ticketType),r=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),s=t.byType[n];if(t.soldOut||!s||s.remaining<=0){const l=new Error("Tickets are sold out. The ticket portal is currently locked.");throw l.response={status:409,data:{message:l.message,soldOut:!0,availability:t}},l}if(r>s.remaining){const l=new Error(`Only ${s.remaining} ${s.label} ticket${s.remaining===1?"":"s"} remaining.`);throw l.response={status:409,data:{message:l.message,soldOut:!1,availability:t}},l}const i=at(),a=cm(e);return yn([a,...i]),{...a,ibanNumber:"PK00-OZIL-1234567890",mode:"local-fallback"}}try{return(await re.post("/tickets/request",e)).data}catch(t){if(qn(t)){const n=fa(),r=So(e==null?void 0:e.ticketType),s=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),i=n.byType[r];if(n.soldOut||!i||i.remaining<=0){const c=new Error("Tickets are sold out. The ticket portal is currently locked.");throw c.response={status:409,data:{message:c.message,soldOut:!0,availability:n}},c}if(s>i.remaining){const c=new Error(`Only ${i.remaining} ${i.label} ticket${i.remaining===1?"":"s"} remaining.`);throw c.response={status:409,data:{message:c.message,soldOut:!1,availability:n}},c}const a=at(),l=cm(e);return yn([l,...a]),{...l,ibanNumber:"PK00-OZIL-1234567890",mode:"local-fallback"}}throw t}},async getTicketById(e){if(wn){const t=Ct(),n=at().find(r=>r.id===e&&$t(r,t));if(!n){const r=new Error("Ticket not found");throw r.response={data:{message:"Ticket not found"}},r}return n}try{return(await re.get(`/tickets/view/${e}`)).data}catch(t){if(qn(t)){const n=Ct(),r=at().find(s=>s.id===e&&$t(s,n));if(!r){const s=new Error("Ticket not found");throw s.response={data:{message:"Ticket not found"}},s}return r}throw t}},async payWithCard(e,t){if(wn){const n=at(),r=Ct(),s=n.findIndex(l=>l.id===e&&$t(l,r));if(s===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const i=new Date().toISOString(),a={...n[s],status:"approved",paymentMethod:"card",cardType:(t==null?void 0:t.cardType)||"card",cardLast4:(t==null?void 0:t.cardLast4)||"4242",cardholderName:(t==null?void 0:t.cardholderName)||"",transactionId:`TXN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:i,generatedAt:i,verifiedAt:null,updatedAt:i};return n[s]=a,yn(n),{message:"Payment processed and ticket generated successfully",ticket:a,mode:"local-fallback"}}try{return(await re.post(`/tickets/${e}/pay-card`,t)).data}catch(n){if(qn(n)){const r=at(),s=Ct(),i=r.findIndex(c=>c.id===e&&$t(c,s));if(i===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const a=new Date().toISOString(),l={...r[i],status:"approved",paymentMethod:"card",cardType:(t==null?void 0:t.cardType)||"card",cardLast4:(t==null?void 0:t.cardLast4)||"4242",cardholderName:(t==null?void 0:t.cardholderName)||"",transactionId:`TXN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,paidAt:a,generatedAt:a,verifiedAt:null,updatedAt:a};return r[i]=l,yn(r),{message:"Payment processed and ticket generated successfully",ticket:l,mode:"local-fallback"}}throw n}},async uploadPaymentProof(e,t){if(wn){const n=at(),r=Ct(),s=n.findIndex(a=>a.id===e&&$t(a,r));if(s===-1){const a=new Error("Ticket not found");throw a.response={data:{message:"Ticket not found"}},a}const i={...n[s],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return n[s]=i,yn(n),{message:"Payment proof uploaded and ticket generated successfully",ticket:i,mode:"local-fallback"}}try{return(await re.post(`/tickets/${e}/payment-proof`,t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(n){if(qn(n)){const r=at(),s=Ct(),i=r.findIndex(l=>l.id===e&&$t(l,s));if(i===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const a={...r[i],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return r[i]=a,yn(r),{message:"Payment proof uploaded and ticket generated successfully",ticket:a,mode:"local-fallback"}}throw n}},async verifyTicket(e,t){return(await re.post(`/tickets/${e}/verify`,{qrData:t})).data},async verifyTicketByQr(e){return(await re.post("/tickets/verify-qr",{qrData:e})).data},async getPendingTicketsAdmin(){return(await re.get("/tickets/admin/pending")).data},async decideTicketAdmin(e,t){return(await re.post(`/tickets/admin/${e}/decision`,{decision:t})).data},async cancelTicket(e){if(wn){const t=at(),n=Ct(),r=t.findIndex(a=>a.id===e&&$t(a,n));if(r===-1){const a=new Error("Ticket not found");throw a.response={data:{message:"Ticket not found"}},a}const s=t[r];if(!["pending","payment_submitted"].includes(s.status)){const a=new Error(`Ticket cannot be cancelled from status ${s.status}`);throw a.response={data:{message:`Ticket cannot be cancelled from status ${s.status}`}},a}const i={...s,status:"cancelled",updatedAt:new Date().toISOString()};return t[r]=i,yn(t),{message:"Ticket cancelled successfully",ticket:i,mode:"local-fallback"}}try{return(await re.post(`/tickets/${e}/cancel`)).data}catch(t){if(qn(t)){const n=at(),r=Ct(),s=n.findIndex(l=>l.id===e&&$t(l,r));if(s===-1){const l=new Error("Ticket not found");throw l.response={data:{message:"Ticket not found"}},l}const i=n[s];if(!["pending","payment_submitted"].includes(i.status)){const l=new Error(`Ticket cannot be cancelled from status ${i.status}`);throw l.response={data:{message:`Ticket cannot be cancelled from status ${i.status}`}},l}const a={...i,status:"cancelled",updatedAt:new Date().toISOString()};return n[s]=a,yn(n),{message:"Ticket cancelled successfully",ticket:a,mode:"local-fallback"}}throw t}}};function tl(){const[e,t]=k.useState([]),[n,r]=k.useState(!1),[s,i]=k.useState(null),a=k.useCallback(async()=>{r(!0);try{const f=await yt.getMyTickets();t(f)}catch(f){i(f.message)}finally{r(!1)}},[]),l=k.useCallback(async f=>{r(!0);try{const p=await yt.requestTicket(f);return await a(),p}catch(p){throw i(p.message),p}finally{r(!1)}},[a]),c=k.useCallback(async f=>{r(!0);try{return await yt.getTicketById(f)}catch(p){throw i(p.message),p}finally{r(!1)}},[]),u=k.useCallback(async(f,p)=>{r(!0);try{const g=new FormData;g.append("paymentProof",p);const m=await yt.uploadPaymentProof(f,g);return await a(),m}catch(g){throw i(g.message),g}finally{r(!1)}},[a]),d=k.useCallback(async(f,p)=>{r(!0);try{const g=await yt.payWithCard(f,p);return await a(),g}catch(g){throw i(g.message),g}finally{r(!1)}},[a]);return{tickets:e,loading:n,error:s,fetchMyTickets:a,requestTicket:l,getTicketById:c,payWithCard:d,uploadPaymentProof:u}}function of({title:e,subtitle:t}){return o.jsxs("div",{className:"relative overflow-hidden rounded-2xl mb-8 p-8 sm:p-10 border border-white/10 bg-gradient-to-r from-red-950/70 via-orange-950/40 to-black/60 backdrop-blur-xl shadow-2xl",children:[o.jsx("div",{className:"absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("p",{className:"text-xs font-extrabold uppercase tracking-widest text-[#ffbd59] mb-2 flex items-center gap-2",children:[o.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-[#ffbd59] animate-ping"}),"Ozilla Festival 2026"]}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight mb-2",children:e}),t&&o.jsx("p",{className:"text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed",children:t})]})]})}function Cu(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function AP(){const{user:e}=Dt(),{tickets:t,loading:n,fetchMyTickets:r}=tl();k.useEffect(()=>{r()},[r]);const s=k.useMemo(()=>{const u={total:t.length,pending:0,payment_submitted:0,approved:0,rejected:0,cancelled:0};for(const d of t)u[d.status]!==void 0&&(u[d.status]+=1);return u},[t]),i=new Date,a=t.filter(u=>new Date(u.eventDate)>=i),l=t.filter(u=>new Date(u.eventDate)<i),c=`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`.trim()||(e==null?void 0:e.name)||(e==null?void 0:e.email)||"Festival Guest";return o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx(of,{title:"My Account & Passes",subtitle:"Manage your festival passes, member profile, and event history"}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EC4899] to-[#cf5704] flex items-center justify-center font-black text-2xl text-white shadow-lg",children:c.slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-extrabold text-white",children:c}),o.jsx("span",{className:"text-sm text-[#ffbd59] font-semibold tracking-wide uppercase",children:"Official Festival Member"})]})]}),o.jsx(G,{to:"/tickets",className:"px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffbd59] to-[#ff8a00] text-black font-bold text-sm hover:scale-105 transition-transform shadow-lg",children:"+ Book New Tickets"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Email Address"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:(e==null?void 0:e.email)||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Phone Number"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:(e==null?void 0:e.phone)||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Account Role"}),o.jsx("p",{className:"text-sm font-bold text-white capitalize mt-1",children:(e==null?void 0:e.role)||"Guest Member"})]}),o.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Festival Passes"}),o.jsxs("p",{className:"text-sm font-bold text-[#EC4899] mt-1",children:[t.length," Active Pass(es)"]})]})]})]}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8",children:[{label:"Total Passes",val:s.total,color:"text-white"},{label:"Pending",val:s.pending,color:"text-yellow-400"},{label:"Payment Sent",val:s.payment_submitted,color:"text-blue-400"},{label:"Approved QR",val:s.approved,color:"text-green-400"},{label:"Rejected",val:s.rejected,color:"text-red-400"},{label:"Cancelled",val:s.cancelled,color:"text-gray-400"}].map(u=>o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center shadow-lg",children:[o.jsx("p",{className:"text-xs text-white/60 font-semibold mb-1 uppercase tracking-wider",children:u.label}),o.jsx("p",{className:`text-3xl font-black ${u.color}`,children:u.val})]},u.label))}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-3 border-b border-white/10",children:[o.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-green-400 animate-pulse"}),"Upcoming Events"]}),o.jsxs("span",{className:"text-xs font-bold text-white/50",children:[a.length," Events"]})]}),n?o.jsx("p",{className:"text-white/60 text-sm py-4",children:"Loading your upcoming passes..."}):a.length===0?o.jsxs("div",{className:"py-8 text-center",children:[o.jsx("p",{className:"text-white/60 text-sm mb-4",children:"No upcoming festival passes found."}),o.jsx(G,{to:"/tickets",className:"text-sm font-bold text-[#ffbd59] hover:underline",children:"Explore & Purchase Tickets →"})]}):o.jsx("div",{className:"space-y-3",children:a.map(u=>o.jsxs("div",{className:"bg-white/5 border border-white/5 hover:border-white/20 transition-all rounded-xl p-4 flex items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-extrabold text-white text-base",children:u.eventName}),o.jsxs("p",{className:"text-xs text-white/60 mt-0.5",children:[Cu(u.eventDate)," · ",u.eventTime]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"inline-block text-xs font-black uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#ffbd59]",children:u.status}),o.jsx("div",{children:o.jsx(G,{to:`/tickets/view/${u.id}`,className:"text-xs font-bold text-white/80 hover:text-white underline mt-1 inline-block",children:"View Pass →"})})]})]},u.id))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 pb-3 border-b border-white/10",children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:"Past Events"}),o.jsxs("span",{className:"text-xs font-bold text-white/50",children:[l.length," Events"]})]}),n?o.jsx("p",{className:"text-white/60 text-sm py-4",children:"Loading past history..."}):l.length===0?o.jsx("p",{className:"text-white/60 text-sm py-8 text-center",children:"No past events recorded yet."}):o.jsx("div",{className:"space-y-3",children:l.map(u=>o.jsxs("div",{className:"bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 opacity-75",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-white text-base",children:u.eventName}),o.jsxs("p",{className:"text-xs text-white/60 mt-0.5",children:[Cu(u.eventDate)," · ",u.eventTime]})]}),o.jsx("span",{className:"text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/70",children:u.status})]},u.id))})]})]})]})}const Jl={regular:{label:"General",value:"regular",price:5e3,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function OP(e=""){const t=String(e).trim().split(/\s+/).filter(Boolean);return t.length===0?{firstName:"",lastName:""}:{firstName:t[0],lastName:t.slice(1).join(" ")}}function LP({onSubmit:e,loading:t,profileDefaults:n,onBookingChange:r,availability:s,availabilityLoading:i}){const a=k.useMemo(()=>{const O=OP(n==null?void 0:n.name);return{firstName:(n==null?void 0:n.firstName)||O.firstName||"",lastName:(n==null?void 0:n.lastName)||O.lastName||"",email:(n==null?void 0:n.email)||"",phone:(n==null?void 0:n.phone)||""}},[n]),[l,c]=k.useState(1),[u,d]=k.useState(""),[f,p]=k.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});k.useEffect(()=>{p(O=>({...O,firstName:a.firstName||O.firstName,lastName:a.lastName||O.lastName,email:a.email||O.email,phone:a.phone||O.phone}))},[a]);const g=O=>{var U;return(U=s==null?void 0:s.byType)==null?void 0:U[O]},m=O=>{var U;return!!((U=g(O))!=null&&U.soldOut)},w=Jl[f.ticketType],b=g(f.ticketType),h=Number.isFinite(b==null?void 0:b.remaining)?b.remaining:null,x=m(f.ticketType),y=Math.max(1,Math.min(10,h||10)),v=Number(f.quantity)||1,S=w.price*v,E=Math.round(S*.03),P=f.ticketType==="premium"?2500:0,N=S+E-P,R=`${a.firstName} ${a.lastName}`.trim()||(n==null?void 0:n.email);k.useEffect(()=>{r==null||r({ticketType:w.label,day:f.festivalDay==="day1"?"Day 1":"Day 2",quantity:v,subtotal:S,serviceFee:E,discount:P,total:N,benefits:w.benefits})},[P,f.festivalDay,r,v,w,E,S,N]),k.useEffect(()=>{if(!(s!=null&&s.byType)||!x)return;const O=Object.values(Jl).find(U=>!m(U.value));O&&p(U=>({...U,ticketType:O.value,quantity:1}))},[s,x]),k.useEffect(()=>{v>y&&p(O=>({...O,quantity:y}))},[y,v]);const C=O=>{p(U=>({...U,[O.target.name]:O.target.value})),O.target.name==="idCardNumber"&&d("")},I=()=>!!(f.firstName&&f.lastName&&f.email&&f.phone),V=()=>{const O=String(f.idCardNumber||"").trim(),U=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(O);return d(U?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),U},$=()=>{l===1&&!I()||l===2&&(x||!V())||c(O=>Math.min(3,O+1))},H=O=>{if(O.preventDefault(),x||!I()||!V()){c(I()?2:1);return}e({...f,quantity:v,name:`${f.firstName} ${f.lastName}`.trim()})},J=()=>{c(1),d(""),p({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:a.phone||""})};return o.jsxs("form",{onSubmit:H,className:"ticket-wizard-form",children:[o.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((O,U)=>o.jsxs("button",{type:"button",className:l===U+1?"is-active":l>U+1?"is-complete":"",onClick:()=>c(U+1),children:[o.jsx("span",{children:U+1}),O]},O))}),R&&o.jsxs("div",{className:"ticket-login-chip",children:[o.jsx("span",{children:"OK"}),"Logged in as ",R]}),l===1&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 1"}),o.jsx("h3",{children:"Personal Information"})]}),o.jsxs("div",{className:"ticket-input-grid",children:[o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"First Name"}),o.jsx("input",{type:"text",name:"firstName",value:f.firstName,onChange:C,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Last Name"}),o.jsx("input",{type:"text",name:"lastName",value:f.lastName,onChange:C,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Email Address"}),o.jsx("input",{type:"email",name:"email",value:f.email,onChange:C,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Phone Number"}),o.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:C,required:!0})]})]})]}),l===2&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 2"}),o.jsx("h3",{children:"Ticket Information"})]}),o.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values(Jl).map(O=>{const U=g(O.value),T=!!(U!=null&&U.soldOut),M=i?"Checking availability...":U?T?"Sold out":`${U.remaining.toLocaleString()} seats available`:`${O.seats} seats available`;return o.jsxs("button",{type:"button",disabled:T,"aria-disabled":T,className:`ticket-option-card ${f.ticketType===O.value?"is-selected":""} ${T?"is-sold-out":""}`,onClick:()=>{T||p(L=>({...L,ticketType:O.value,quantity:1}))},children:[o.jsx("span",{children:O.label}),o.jsxs("strong",{children:["PKR ",O.price.toLocaleString()]}),o.jsx("small",{children:M})]},O.value)})}),o.jsxs("div",{className:"ticket-input-grid",children:[o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Festival Day"}),o.jsxs("select",{name:"festivalDay",value:f.festivalDay,onChange:C,required:!0,children:[o.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),o.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),o.jsxs("label",{className:"ticket-input-wrap",children:[o.jsx("span",{children:"Quantity"}),o.jsx("input",{type:"number",name:"quantity",value:f.quantity,onChange:C,min:"1",max:y,disabled:x,required:!0})]}),o.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[o.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),o.jsx("input",{type:"text",name:"idCardNumber",value:f.idCardNumber,onChange:C,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),u&&o.jsx("em",{children:u})]})]})]}),l===3&&o.jsxs("section",{className:"ticket-form-panel",children:[o.jsxs("div",{className:"ticket-panel-heading",children:[o.jsx("p",{children:"Step 3"}),o.jsx("h3",{children:"Review & Confirm"})]}),o.jsxs("div",{className:"ticket-review-layout",children:[o.jsx("div",{className:"ticket-benefit-list",children:w.benefits.map(O=>o.jsx("span",{children:O},O))}),o.jsxs("aside",{className:"ticket-summary-card",children:[o.jsx("h4",{children:"Booking Summary"}),o.jsxs("div",{children:[o.jsx("span",{children:"Ticket Type"}),o.jsx("strong",{children:w.label})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Quantity"}),o.jsx("strong",{children:v})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Price"}),o.jsxs("strong",{children:["PKR ",S.toLocaleString()]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Service Fee"}),o.jsxs("strong",{children:["PKR ",E.toLocaleString()]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Discount"}),o.jsxs("strong",{children:["PKR ",P.toLocaleString()]})]}),o.jsxs("div",{className:"ticket-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("strong",{children:["PKR ",N.toLocaleString()]})]})]})]})]}),o.jsxs("div",{className:"ticket-form-actions",children:[o.jsx("button",{type:"button",onClick:l===1?J:()=>c(O=>O-1),className:"ticket-secondary-button",children:l===1?"Reset":"Back"}),l<3?o.jsx("button",{type:"button",onClick:$,className:"ticket-primary-button",children:"Continue"}):o.jsx("button",{type:"submit",disabled:t,className:"ticket-primary-button ticket-shimmer-button",children:t?"Verifying Details...":"Complete Your Booking"})]})]})}function MP(e){const t=e.replace(/\D/g,"").slice(0,16),n=t.match(/.{1,4}/g);return n?n.join(" "):t}function IP(e){const t=e.replace(/\D/g,"").slice(0,4);return t.length>=3?`${t.slice(0,2)}/${t.slice(2)}`:t}function _P(e){const t=e.replace(/\D/g,"");return/^4/.test(t)?"visa":/^(5[1-5]|2[2-7])/.test(t)?"mastercard":/^(62|81)/.test(t)?"unionpay":null}function FP({amount:e,onSubmit:t,loading:n,onBack:r}){const[s,i]=k.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvv:"",saveCard:!0}),[a,l]=k.useState({}),[c,u]=k.useState(!1),[d,f]=k.useState(""),p=_P(s.cardNumber),g=y=>{const v=MP(y.target.value);i(S=>({...S,cardNumber:v})),a.cardNumber&&l(S=>({...S,cardNumber:""}))},m=y=>{const v=IP(y.target.value);i(S=>({...S,expiryDate:v})),a.expiryDate&&l(S=>({...S,expiryDate:""}))},w=y=>{const v=y.target.value.replace(/\D/g,"").slice(0,4);i(S=>({...S,cvv:v})),a.cvv&&l(S=>({...S,cvv:""}))},b=y=>{i(v=>({...v,cardholderName:y.target.value})),a.cardholderName&&l(v=>({...v,cardholderName:""}))},h=()=>{const y={},v=s.cardNumber.replace(/\s/g,"");if((!v||v.length<15)&&(y.cardNumber="Please enter a valid 16-digit card number"),s.cardholderName.trim()||(y.cardholderName="Please enter name as shown on card"),!s.expiryDate||s.expiryDate.length<5)y.expiryDate="Enter MM/YY";else{const[S,E]=s.expiryDate.split("/").map(Number);if(S<1||S>12)y.expiryDate="Invalid month (01-12)";else{const P=new Date,N=Number(String(P.getFullYear()).slice(-2)),R=P.getMonth()+1;(E<N||E===N&&S<R)&&(y.expiryDate="Card has expired")}}return(!s.cvv||s.cvv.length<3)&&(y.cvv="Enter 3 or 4 digits"),l(y),Object.keys(y).length===0},x=async y=>{if(y.preventDefault(),!!h()){f("Validating card details..."),await new Promise(v=>setTimeout(v,400)),f("Deducting payment from card...");try{await t({cardNumber:s.cardNumber.replace(/\s/g,""),cardLast4:s.cardNumber.replace(/\s/g,"").slice(-4),cardholderName:s.cardholderName.trim(),expiryDate:s.expiryDate,cvv:s.cvv,saveCard:s.saveCard,cardType:p||"card"})}finally{f("")}}};return o.jsxs("div",{className:"card-payment-container",children:[o.jsxs("div",{className:"card-brands-row",children:[o.jsx("div",{className:`card-brand-logo mastercard ${p==="mastercard"?"is-active":""}`,title:"Mastercard",children:o.jsxs("svg",{viewBox:"0 0 38 24",width:"48",height:"30","aria-label":"Mastercard",children:[o.jsx("circle",{cx:"14",cy:"12",r:"10",fill:"#EB001B"}),o.jsx("circle",{cx:"24",cy:"12",r:"10",fill:"#F79E1B",fillOpacity:"0.88"})]})}),o.jsx("div",{className:`card-brand-logo visa ${p==="visa"?"is-active":""}`,title:"VISA",children:o.jsx("svg",{viewBox:"0 0 50 20",width:"58",height:"24","aria-label":"VISA",children:o.jsx("text",{x:"2",y:"16",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"900",fontStyle:"italic",fontSize:"18",fill:"#1A1F71",letterSpacing:"1",children:"VISA"})})}),o.jsx("div",{className:`card-brand-logo unionpay ${p==="unionpay"?"is-active":""}`,title:"UnionPay",children:o.jsxs("div",{className:"unionpay-badge",children:[o.jsx("span",{className:"up-red"}),o.jsx("span",{className:"up-blue"}),o.jsx("span",{className:"up-green"}),o.jsxs("span",{className:"up-text",children:["UnionPay",o.jsx("br",{}),"银联"]})]})})]}),o.jsxs("form",{onSubmit:x,className:"card-payment-form",children:[o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Card number"]}),o.jsxs("div",{className:"card-input-wrapper",children:[o.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-number",placeholder:"Card number",value:s.cardNumber,onChange:g,className:`card-input ${a.cardNumber?"has-error":""}`,maxLength:19,disabled:n}),p&&o.jsx("span",{className:"card-detected-badge",children:p.toUpperCase()})]}),a.cardNumber&&o.jsx("span",{className:"card-field-error",children:a.cardNumber})]}),o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Name on card"]}),o.jsx("input",{type:"text",autoComplete:"cc-name",placeholder:"Name on card",value:s.cardholderName,onChange:b,className:`card-input ${a.cardholderName?"has-error":""}`,disabled:n}),a.cardholderName&&o.jsx("span",{className:"card-field-error",children:a.cardholderName})]}),o.jsxs("div",{className:"card-row-two-col",children:[o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," Expiry date"]}),o.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",value:s.expiryDate,onChange:m,className:`card-input ${a.expiryDate?"has-error":""}`,maxLength:5,disabled:n}),a.expiryDate&&o.jsx("span",{className:"card-field-error",children:a.expiryDate})]}),o.jsxs("div",{className:"card-field-group",children:[o.jsxs("label",{className:"card-field-label",children:[o.jsx("span",{className:"required-star",children:"*"})," CVV",o.jsx("button",{type:"button",className:"cvv-info-btn",onClick:()=>u(!c),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"aria-label":"CVV information",children:"ⓘ"}),c&&o.jsx("div",{className:"cvv-tooltip",children:"3 or 4 digit security code located on the back of your card."})]}),o.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"CVV",value:s.cvv,onChange:w,className:`card-input ${a.cvv?"has-error":""}`,maxLength:4,disabled:n}),a.cvv&&o.jsx("span",{className:"card-field-error",children:a.cvv})]})]}),o.jsxs("div",{className:"save-card-wrapper",children:[o.jsxs("label",{className:"save-card-checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:s.saveCard,onChange:y=>i(v=>({...v,saveCard:y.target.checked})),className:"save-card-checkbox",disabled:n}),o.jsx("span",{className:"save-card-title",children:"Save Card"})]}),o.jsx("p",{className:"save-card-subtext",children:'We will save this card for your convenience. If required, you can remove the card in the "Payment Options" section in the "Account" menu.'})]}),d&&o.jsxs("div",{className:"card-processing-status",children:[o.jsx("span",{className:"card-spinner"}),o.jsx("span",{children:d})]}),o.jsxs("div",{className:"card-actions-row",children:[r&&o.jsx("button",{type:"button",onClick:r,disabled:n,className:"ticket-secondary-button",children:"Back"}),o.jsx("button",{type:"submit",disabled:n,className:"pay-now-btn",children:n?o.jsxs("span",{className:"btn-loading-content",children:[o.jsx("span",{className:"btn-spinner"})," Deducting Payment..."]}):e?`Pay Now • PKR ${e.toLocaleString()}`:"Pay Now"})]}),o.jsxs("div",{className:"card-security-footer",children:[o.jsx("span",{children:"🔒 256-Bit SSL Encrypted & PCI Compliant"}),o.jsx("span",{children:"⚡ Automatic Payment Deduction & Instant QR Ticket"})]})]}),o.jsx("style",{children:`
        .card-payment-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: clamp(1.2rem, 3vw, 2rem);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          width: 100%;
        }

        .card-brands-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.8rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid #edf2f7;
        }

        .card-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0.6rem;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .card-brand-logo.is-active {
          border-color: #f97316;
          background: #fff7ed;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
        }

        .unionpay-badge {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 24px;
          padding: 0 4px;
          background: #005a9c;
          border-radius: 4px;
          color: #fff;
          font-family: sans-serif;
        }

        .unionpay-badge span.up-red {
          width: 6px;
          height: 18px;
          background: #e21c24;
          border-radius: 2px;
        }
        .unionpay-badge span.up-blue {
          width: 6px;
          height: 18px;
          background: #004586;
          border-radius: 2px;
        }
        .unionpay-badge span.up-green {
          width: 6px;
          height: 18px;
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
          gap: 1.25rem;
        }

        .card-field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-field-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .required-star {
          color: #ef4444;
          font-weight: 700;
        }

        .card-input-wrapper {
          position: relative;
          width: 100%;
        }

        .card-input {
          width: 100%;
          min-height: 50px;
          padding: 0 1rem;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          color: #1e293b;
          background: #ffffff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .card-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }

        .card-input.has-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .card-detected-badge {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          background: #ffedd5;
          color: #c2410c;
          letter-spacing: 0.05em;
        }

        .card-field-error {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 500;
        }

        .card-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .cvv-info-btn {
          border: none;
          background: none;
          color: #0284c7;
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
          background: #1e293b;
          color: #fff;
          font-size: 0.75rem;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          width: max-content;
          max-width: 220px;
          z-index: 10;
          margin-bottom: 4px;
        }

        .save-card-wrapper {
          margin-top: 0.5rem;
        }

        .save-card-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          user-select: none;
        }

        .save-card-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #f97316;
          cursor: pointer;
        }

        .save-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
        }

        .save-card-subtext {
          margin: 0.35rem 0 0 1.7rem;
          font-size: 0.82rem;
          line-height: 1.45;
          color: #64748b;
        }

        .card-processing-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #c2410c;
          font-weight: 600;
          font-size: 0.88rem;
          animation: pulse 1.5s infinite;
        }

        .card-spinner,
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(194, 65, 12, 0.3);
          border-top-color: #c2410c;
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
          margin-top: 0.6rem;
        }

        .pay-now-btn {
          flex: 1;
          min-height: 52px;
          background: #f97316;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
        }

        .pay-now-btn:hover:not(:disabled) {
          background: #ea580c;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
        }

        .pay-now-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .pay-now-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .btn-loading-content {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .card-security-footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: 0.6rem;
          padding-top: 0.9rem;
          border-top: 1px dashed #e2e8f0;
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
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
      `})]})}function Fi({type:e,message:t,onClose:n}){const r={success:"bg-green-100 border-green-500 text-green-700",error:"bg-red-100 border-red-500 text-red-700",warning:"bg-yellow-100 border-yellow-500 text-yellow-700",info:"bg-blue-100 border-blue-500 text-blue-700"}[e]||"bg-gray-100 border-gray-500 text-gray-700";return o.jsxs("div",{className:`${r} border-l-4 p-4 rounded mb-4 flex justify-between items-center`,children:[o.jsx("p",{children:t}),n&&o.jsx("button",{onClick:n,className:"ml-4 font-bold hover:opacity-75",children:"×"})]})}const zP=["Personal Info","Ticket Details","Card Payment","Confirmation"],DP=["Secure Payments","Protected Booking","Instant QR Ticket","Official Festival Pass"],VP=[["Instant Card Payment","Automatic & seamless deduction from your debit/credit card."],["Instant QR Ticket","Verified bookings immediately generate scannable festival QR tickets."],["Protected Checkout","256-bit SSL encrypted and PCI-compliant secure transaction."],["Premium Support","Support team available 24/7 for booking and festival guidance."]],BP=["VIP Access","Celebrity Performances","Food Court Access","Discount Offers","Festival Merchandise","Premium Seating"],UP=["Personal Info","Ticket Details","Card Payment","QR Ticket Issued"],$P={ticketType:"General",day:"Day 1",quantity:1,subtotal:5e3,serviceFee:150,discount:0,total:5150,benefits:["Festival entry","Food court access","Partner discount offers"]};function HP(){const e=hn(),{user:t}=Dt(),{requestTicket:n,payWithCard:r,loading:s}=tl(),[i,a]=k.useState(null),[l,c]=k.useState(!1),[u,d]=k.useState(null),[f,p]=k.useState($P),[g,m]=k.useState(null),[w,b]=k.useState(!0),h=l?3:2,x=k.useMemo(()=>14,[]),y=`${(t==null?void 0:t.firstName)||""} ${(t==null?void 0:t.lastName)||""}`.trim()||(t==null?void 0:t.name)||(t==null?void 0:t.email)||"Festival Guest",v=!!(g!=null&&g.soldOut);k.useEffect(()=>{let N=!0;return(async()=>{b(!0);try{const C=await yt.getAvailability();if(!N)return;m(C),C!=null&&C.soldOut&&a({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{N&&m(null)}finally{N&&b(!1)}})(),()=>{N=!1}},[]);const S=()=>{if(v){a({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}e(`/login?returnTo=${encodeURIComponent("/tickets")}`)},E=async N=>{var R,C,I,V;if(v){a({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const $=await n(N);d($),c(!0),a({type:"success",message:"Ticket reserved! Please enter your card details to complete payment."});const H=await yt.getAvailability().catch(()=>null);H&&m(H)}catch($){const H=((C=(R=$==null?void 0:$.response)==null?void 0:R.data)==null?void 0:C.message)||($==null?void 0:$.message)||"Failed to request ticket. Please try again.";(V=(I=$==null?void 0:$.response)==null?void 0:I.data)!=null&&V.availability&&m($.response.data.availability),a({type:"error",message:H})}},P=async N=>{var R,C;if(!(u!=null&&u.id)){a({type:"error",message:"Ticket request session expired. Please retry booking."});return}try{await r(u.id,N),a({type:"success",message:`Payment of PKR ${f.total.toLocaleString()} deducted successfully! Your QR ticket is ready.`}),e(`/tickets/view/${u.id}`)}catch(I){const V=((C=(R=I==null?void 0:I.response)==null?void 0:R.data)==null?void 0:C.message)||(I==null?void 0:I.message)||"Failed to process card payment. Please verify your card details and try again.";a({type:"error",message:V})}};return o.jsxs("main",{className:"ticket-portal-premium",children:[o.jsxs("section",{className:"ticket-portal-hero",children:[o.jsx("div",{className:"ticket-portal-orb ticket-portal-orb-one"}),o.jsx("div",{className:"ticket-portal-orb ticket-portal-orb-two"}),o.jsxs("div",{className:"ticket-portal-particles","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{className:"ticket-portal-hero-content",children:[o.jsx("p",{children:"Ozilla Festival 2026"}),o.jsx("h1",{children:"Book Your Ozilla Festival Experience"}),o.jsx("span",{children:"Reserve your place for one of Pakistan's biggest entertainment festivals and become part of an unforgettable celebration."}),o.jsx("div",{className:"ticket-trust-row",children:DP.map(N=>o.jsx("strong",{children:N},N))})]})]}),o.jsxs("section",{className:"ticket-portal-shell",children:[i&&o.jsx(Fi,{type:i.type,message:i.message,onClose:()=>a(null)}),o.jsx("div",{className:"ticket-progress-card",children:zP.map((N,R)=>o.jsxs("article",{className:R+1<=h?"is-active":"",children:[o.jsx("span",{children:R+1}),o.jsx("strong",{children:N})]},N))}),v?o.jsxs("div",{className:"ticket-sold-out-lock",role:"alert",children:[o.jsx("div",{className:"ticket-sold-out-mark",children:"Sold Out"}),o.jsxs("div",{children:[o.jsx("p",{children:"Ticket Portal Locked"}),o.jsx("h2",{children:"Tickets are sold out."}),o.jsx("span",{children:"All available Ozilla Festival tickets have been reserved. Ticket purchases are currently closed."})]})]}):t?o.jsxs("div",{className:"ticket-booking-layout",children:[o.jsxs("section",{className:"ticket-booking-card",children:[o.jsxs("div",{className:"ticket-card-top",children:[o.jsxs("div",{children:[o.jsx("p",{children:l?"Card Payment":"Premium Booking Portal"}),o.jsx("h2",{children:l?"Card Payment Details":"Reserve Your Festival Ticket"})]}),o.jsx("span",{children:l?`Reserved for ${x} minutes`:"Official festival ticket"})]}),l?o.jsx("div",{className:"ticket-payment-flow",children:o.jsx(FP,{amount:f.total,onSubmit:P,loading:s,onBack:()=>c(!1)})}):o.jsx(LP,{onSubmit:E,loading:s,profileDefaults:t,onBookingChange:p,availability:g,availabilityLoading:w})]}),o.jsxs("aside",{className:"ticket-side-panel",children:[o.jsxs("div",{className:"ticket-profile-card",children:[o.jsx("div",{className:"ticket-profile-avatar",children:String(y).slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("p",{children:"Welcome Back"}),o.jsx("h3",{children:y}),o.jsx("span",{children:"Verified Account"}),o.jsx("span",{children:"Secure Booking"}),o.jsx("span",{children:"Returning Visitor"})]})]}),o.jsxs("div",{className:"ticket-live-summary",children:[o.jsx("p",{children:"Live Booking Summary"}),o.jsxs("h3",{children:[f.ticketType," Pass"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Festival Day"}),o.jsx("strong",{children:f.day})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Quantity"}),o.jsx("strong",{children:f.quantity})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Ticket Price"}),o.jsxs("strong",{children:["PKR ",f.subtotal.toLocaleString()]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Festival Fee"}),o.jsxs("strong",{children:["PKR ",f.serviceFee.toLocaleString()]})]}),o.jsxs("div",{children:[o.jsx("span",{children:"Discount"}),o.jsxs("strong",{children:["PKR ",f.discount.toLocaleString()]})]}),o.jsxs("div",{className:"ticket-live-total",children:[o.jsx("span",{children:"Grand Total"}),o.jsxs("strong",{children:["PKR ",f.total.toLocaleString()]})]}),o.jsx("small",{children:"Estimated confirmation: 24 hours"})]}),o.jsxs("div",{className:"ticket-pass-preview",children:[o.jsx("p",{children:"Festival Pass Preview"}),o.jsxs("h3",{children:[f.ticketType," Pass"]}),o.jsx("span",{children:"Ozilla Festival 2026"}),o.jsx("div",{className:"ticket-qr-placeholder",children:"QR"}),o.jsxs("strong",{children:[f.day," / Lahore, Pakistan"]})]}),o.jsxs("div",{className:"ticket-mini-card",children:[o.jsx("p",{children:"Ticket Benefits"}),o.jsx("div",{children:BP.map(N=>o.jsx("span",{children:N},N))})]}),o.jsxs("div",{className:"ticket-mini-card",children:[o.jsx("p",{children:"Why Book With Us"}),VP.map(([N,R])=>o.jsxs("article",{children:[o.jsx("strong",{children:N}),o.jsx("span",{children:R})]},N))]}),o.jsxs("div",{className:"ticket-mini-card ticket-timeline-card",children:[o.jsx("p",{children:"Booking Timeline"}),UP.map((N,R)=>o.jsxs("article",{className:R<h?"is-active":"",children:[o.jsx("strong",{children:N}),o.jsx("span",{children:R<h?"In progress":"Upcoming"})]},N))]})]})]}):o.jsxs("div",{className:"ticket-auth-card",children:[o.jsxs("div",{children:[o.jsx("p",{children:"Premium Ticket Access"}),o.jsx("h2",{children:"Sign in to purchase your festival ticket."}),o.jsx("span",{children:"You can browse the website as a guest, but ticket purchases require secure account access."})]}),o.jsx("button",{type:"button",onClick:S,className:"ticket-primary-button",children:"Purchase Ticket"})]})]}),o.jsx("style",{children:`
        .ticket-portal-premium {
          position: relative;
          min-height: 100vh;
          padding: clamp(1rem, 3vw, 2.2rem);
          overflow: hidden;
          color: #102525;
          background:
            radial-gradient(circle at 8% 10%, rgba(255, 176, 0, 0.2), transparent 24rem),
            radial-gradient(circle at 88% 12%, rgba(20, 142, 126, 0.2), transparent 26rem),
            radial-gradient(circle at 55% 95%, rgba(255, 77, 46, 0.12), transparent 25rem),
            linear-gradient(135deg, #fffaf2 0%, #eef5f0 48%, #f5e6dc 100%);
        }

        .ticket-portal-premium * { box-sizing: border-box; }

        .ticket-portal-premium button:focus-visible,
        .ticket-portal-premium input:focus-visible,
        .ticket-portal-premium select:focus-visible,
        .ticket-dropzone:focus-within {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 3px;
        }

        .ticket-booking-card,
        .ticket-auth-card,
        .ticket-sold-out-lock,
        .ticket-form-panel,
        .ticket-upload-card,
        .ticket-bank-card,
        .ticket-side-panel > *,
        .ticket-progress-card,
        .ticket-option-card {
          min-width: 0;
        }

        .ticket-portal-hero,
        .ticket-portal-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1260px);
          margin-inline: auto;
        }

        .ticket-portal-hero {
          min-height: clamp(380px, 54vh, 620px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 20% 20%, rgba(255, 189, 89, 0.32), transparent 18rem);
          box-shadow: 0 38px 110px rgba(2, 11, 13, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .ticket-portal-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(255, 255, 255, 0.11) 46%, transparent 56%),
            radial-gradient(circle at 54% 18%, rgba(255, 189, 89, 0.2), transparent 18rem);
          animation: ticketLightSweep 10s ease-in-out infinite alternate;
        }

        .ticket-portal-hero-content {
          position: relative;
          z-index: 1;
          width: min(92%, 970px);
          text-align: center;
          color: #fff;
          animation: ticketRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .ticket-portal-hero-content p,
        .ticket-card-top p,
        .ticket-panel-heading p,
        .ticket-bank-header p,
        .ticket-mini-card p {
          margin: 0 0 0.7rem;
          color: #ffbd59;
          font-size: clamp(0.7rem, 1.2vw, 0.84rem);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ticket-portal-hero-content h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.75rem, 7.4vw, 7rem);
          line-height: 0.91;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .ticket-portal-hero-content > span {
          display: block;
          width: min(100%, 790px);
          margin: 1.15rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.22rem);
          line-height: 1.6;
        }

        .ticket-trust-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }

        .ticket-trust-row strong {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          padding: 0 0.85rem;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.76rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
        }

        .ticket-portal-orb,
        .ticket-portal-particles span {
          position: absolute;
          pointer-events: none;
        }

        .ticket-portal-orb {
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.66;
          animation: ticketFloat 8s ease-in-out infinite;
        }

        .ticket-portal-orb-one {
          width: clamp(140px, 22vw, 290px);
          aspect-ratio: 1;
          left: 8%;
          top: 15%;
          background: rgba(255, 189, 89, 0.42);
        }

        .ticket-portal-orb-two {
          width: clamp(160px, 24vw, 330px);
          aspect-ratio: 1;
          right: 6%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.38);
          animation-direction: reverse;
        }

        .ticket-portal-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .ticket-portal-particles span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd36a, #ff7a1a);
          box-shadow: 0 0 22px rgba(255, 189, 89, 0.65);
          animation: ticketParticle 7s ease-in-out infinite;
        }
        .ticket-portal-particles span:nth-child(1) { left: 12%; top: 22%; }
        .ticket-portal-particles span:nth-child(2) { left: 28%; bottom: 18%; animation-delay: 1s; }
        .ticket-portal-particles span:nth-child(3) { right: 18%; top: 20%; animation-delay: 1.8s; }
        .ticket-portal-particles span:nth-child(4) { right: 28%; bottom: 22%; animation-delay: 2.6s; }
        .ticket-portal-particles span:nth-child(5) { left: 52%; top: 12%; animation-delay: 3.4s; }

        .ticket-portal-shell {
          margin-top: clamp(1rem, 2.4vw, 1.8rem);
        }

        .ticket-progress-card,
        .ticket-auth-card,
        .ticket-sold-out-lock,
        .ticket-booking-card,
        .ticket-side-panel > *,
        .ticket-bank-card,
        .ticket-upload-card {
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-progress-card {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.75rem;
          border-radius: 24px;
          padding: 0.85rem;
          margin-bottom: 1rem;
        }

        .ticket-progress-card article {
          min-height: 72px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border-radius: 18px;
          padding: 0.7rem;
          color: #55706f;
          background: rgba(255, 255, 255, 0.45);
        }

        .ticket-progress-card article.is-active {
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.35), rgba(255, 255, 255, 0.72));
          box-shadow: 0 16px 34px rgba(255, 176, 0, 0.13);
        }

        .ticket-progress-card span,
        .ticket-form-stepper span {
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #102525;
          font-weight: 950;
        }

        .ticket-booking-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
          gap: clamp(1rem, 2.4vw, 1.35rem);
          align-items: start;
        }

        .ticket-booking-card,
        .ticket-auth-card,
        .ticket-sold-out-lock {
          border-radius: 30px;
          padding: clamp(1rem, 2.4vw, 1.55rem);
        }

        .ticket-auth-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .ticket-sold-out-lock {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: clamp(0.85rem, 2.2vw, 1.3rem);
          border-color: rgba(190, 18, 60, 0.24);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 242, 0.58)),
            radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.18), transparent 16rem),
            radial-gradient(circle at 100% 0%, rgba(255, 189, 89, 0.2), transparent 14rem);
        }

        .ticket-sold-out-mark {
          width: clamp(84px, 11vw, 116px);
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          border-radius: 28px;
          color: #fff;
          font-size: clamp(0.72rem, 1.4vw, 0.92rem);
          font-weight: 950;
          letter-spacing: 0.13em;
          text-align: center;
          text-transform: uppercase;
          background: linear-gradient(135deg, #be123c, #ff4d2e 48%, #ffbd59);
          box-shadow: 0 20px 45px rgba(190, 18, 60, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.34);
        }

        .ticket-sold-out-lock p {
          margin: 0 0 0.45rem;
          color: #be123c;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ticket-sold-out-lock h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .ticket-sold-out-lock span {
          display: block;
          margin-top: 0.65rem;
          color: #55706f;
          line-height: 1.65;
        }

        .ticket-auth-card h2,
        .ticket-card-top h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.8rem, 3.4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-auth-card span,
        .ticket-card-top > span {
          color: #55706f;
          line-height: 1.65;
        }

        .ticket-card-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(11, 79, 76, 0.12);
          margin-bottom: 1rem;
        }

        .ticket-card-top > span {
          flex: 0 0 auto;
          height: fit-content;
          border-radius: 999px;
          padding: 0.55rem 0.8rem;
          background: rgba(255, 189, 89, 0.22);
          color: #0b4f4c;
          font-weight: 900;
        }

        .ticket-form-stepper {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .ticket-form-stepper button,
        .ticket-option-card,
        .ticket-secondary-button,
        .ticket-primary-button {
          border: 0;
          cursor: pointer;
          font: inherit;
        }

        .ticket-form-stepper button {
          min-height: 58px;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 999px;
          padding: 0.55rem 0.75rem;
          color: #55706f;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.52);
        }

        .ticket-form-stepper button.is-active,
        .ticket-form-stepper button.is-complete {
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.3), rgba(255, 255, 255, 0.72));
        }

        .ticket-login-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          min-height: 42px;
          border-radius: 999px;
          padding: 0 0.85rem;
          margin-bottom: 1rem;
          color: #0b4f4c;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-login-chip span {
          width: 28px;
          height: 28px;
          display: inline-grid;
          place-items: center;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, #22c55e, #0b4f4c);
        }

        .ticket-form-panel,
        .ticket-upload-card {
          border-radius: 24px;
          padding: clamp(1rem, 2.2vw, 1.25rem);
          background: rgba(255, 255, 255, 0.42);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
        }

        .ticket-panel-heading h3,
        .ticket-bank-header h3 {
          margin: 0 0 0.8rem;
          color: #102525;
          font-size: clamp(1.35rem, 2.4vw, 2rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .ticket-input-grid,
        .ticket-option-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .ticket-input-wide { grid-column: 1 / -1; }

        .ticket-input-wrap {
          display: grid;
          gap: 0.45rem;
          color: #0b4f4c;
          font-weight: 900;
        }

        .ticket-input-wrap input,
        .ticket-input-wrap select {
          min-height: 54px;
          width: 100%;
          border: 1px solid rgba(11, 79, 76, 0.16);
          border-radius: 16px;
          padding: 0 0.9rem;
          color: #102525;
          background: rgba(255, 255, 255, 0.72);
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .ticket-input-wrap input:focus,
        .ticket-input-wrap select:focus {
          border-color: rgba(255, 138, 0, 0.56);
          box-shadow: 0 0 0 4px rgba(255, 189, 89, 0.18), 0 16px 34px rgba(255, 176, 0, 0.12);
          transform: translateY(-1px);
        }

        .ticket-input-wrap em {
          color: #be123c;
          font-size: 0.84rem;
          font-style: normal;
        }

        .ticket-option-card {
          min-height: 132px;
          display: grid;
          gap: 0.45rem;
          text-align: left;
          border: 1px solid rgba(11, 79, 76, 0.12);
          border-radius: 22px;
          padding: 1rem;
          color: #102525;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .ticket-option-card:hover,
        .ticket-option-card.is-selected,
        .ticket-mini-card article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.32);
          box-shadow: 0 28px 70px rgba(2, 11, 13, 0.12), 0 0 30px rgba(255, 176, 0, 0.08);
        }

        .ticket-option-card span {
          color: #ff8a00;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ticket-option-card strong {
          font-size: 1.45rem;
          letter-spacing: -0.04em;
        }

        .ticket-option-card.is-sold-out {
          cursor: not-allowed;
          opacity: 0.58;
          filter: grayscale(0.34);
        }

        .ticket-option-card.is-sold-out:hover {
          transform: none;
          border-color: rgba(11, 79, 76, 0.12);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.08);
        }

        .ticket-option-card.is-sold-out small {
          color: #be123c;
          font-weight: 950;
        }

        .ticket-review-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(250px, 320px);
          gap: 1rem;
        }

        .ticket-benefit-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .ticket-benefit-list span,
        .ticket-mini-card div span {
          min-height: 48px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.7rem 0.8rem;
          color: #315b59;
          font-weight: 850;
          background: rgba(255, 255, 255, 0.54);
        }

        .ticket-summary-card {
          border-radius: 22px;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86));
          color: #fff;
        }

        .ticket-summary-card h4 {
          margin: 0 0 0.85rem;
          color: #ffbd59;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ticket-summary-card div {
          display: flex;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.65rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .ticket-summary-card .ticket-total {
          border: 0;
          color: #ffbd59;
          font-size: 1.16rem;
        }

        .ticket-form-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-top: 1rem;
        }

        .ticket-primary-button,
        .ticket-secondary-button {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 1.2rem;
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease, opacity 220ms ease;
        }

        .ticket-primary-button {
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.28);
        }

        .ticket-secondary-button {
          color: #0b4f4c;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: inset 0 0 0 1px rgba(11, 79, 76, 0.14);
        }

        .ticket-primary-button:hover,
        .ticket-secondary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.28);
        }

        .ticket-shimmer-button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .ticket-shimmer-button::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 -45%;
          width: 42%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.48), transparent);
          transform: skewX(-18deg);
          animation: ticketButtonShine 3.4s ease-in-out infinite;
          z-index: -1;
        }

        .ticket-primary-button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .ticket-side-panel {
          display: grid;
          gap: 1rem;
          position: sticky;
          top: 110px;
        }

        .ticket-profile-card,
        .ticket-live-summary,
        .ticket-pass-preview,
        .ticket-mini-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-profile-card,
        .ticket-live-summary,
        .ticket-pass-preview {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-profile-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.85rem;
          align-items: center;
        }

        .ticket-profile-avatar {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          color: #102525;
          font-weight: 950;
          font-size: 1.35rem;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 18px 34px rgba(255, 138, 0, 0.24);
        }

        .ticket-profile-card p,
        .ticket-live-summary p,
        .ticket-pass-preview p {
          margin: 0 0 0.35rem;
          color: #ff8a00;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ticket-profile-card h3,
        .ticket-live-summary h3,
        .ticket-pass-preview h3 {
          margin: 0 0 0.65rem;
          color: #102525;
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .ticket-profile-card span {
          display: inline-flex;
          width: fit-content;
          margin: 0.25rem 0.25rem 0 0;
          border-radius: 999px;
          padding: 0.35rem 0.55rem;
          color: #0b4f4c;
          font-size: 0.72rem;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-live-summary::after,
        .ticket-pass-preview::after {
          content: '';
          position: absolute;
          inset: -42% -25% auto auto;
          width: 45%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(30px);
          pointer-events: none;
        }

        .ticket-live-summary div {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.55rem 0;
          border-bottom: 1px solid rgba(11, 79, 76, 0.09);
          color: #55706f;
        }

        .ticket-live-summary div strong {
          color: #102525;
          text-align: right;
        }

        .ticket-live-summary .ticket-live-total {
          border: 0;
          color: #0b4f4c;
          font-size: 1.08rem;
        }

        .ticket-live-summary .ticket-live-total strong {
          color: #ff8a00;
          font-size: 1.18rem;
        }

        .ticket-live-summary small {
          display: block;
          margin-top: 0.7rem;
          color: #55706f;
          font-weight: 800;
        }

        .ticket-pass-preview {
          min-height: 255px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(7, 51, 50, 0.88), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 18% 18%, rgba(255, 189, 89, 0.28), transparent 12rem);
        }

        .ticket-pass-preview p,
        .ticket-pass-preview h3,
        .ticket-pass-preview span,
        .ticket-pass-preview strong,
        .ticket-qr-placeholder {
          position: relative;
          z-index: 1;
        }

        .ticket-pass-preview h3 {
          color: #fff;
          text-transform: uppercase;
        }

        .ticket-pass-preview > span {
          display: block;
          color: rgba(255, 255, 255, 0.74);
          font-weight: 800;
        }

        .ticket-qr-placeholder {
          width: 92px;
          height: 92px;
          display: grid;
          place-items: center;
          margin: 1rem 0;
          border-radius: 18px;
          color: #102525;
          font-weight: 950;
          background:
            linear-gradient(90deg, rgba(16, 37, 37, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(16, 37, 37, 0.1) 1px, transparent 1px),
            #fffaf2;
          background-size: 14px 14px;
          box-shadow: 0 18px 38px rgba(255, 189, 89, 0.18);
        }

        .ticket-mini-card div,
        .ticket-mini-card {
          display: grid;
          gap: 0.75rem;
        }

        .ticket-mini-card article {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 18px;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.5);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .ticket-mini-card article strong {
          display: block;
          color: #102525;
          margin-bottom: 0.25rem;
        }

        .ticket-timeline-card article {
          position: relative;
          padding-left: 1.1rem;
        }

        .ticket-timeline-card article::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1rem;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.22);
          box-shadow: 0 0 0 4px rgba(11, 79, 76, 0.06);
        }

        .ticket-timeline-card article.is-active::before {
          background: #ff8a00;
          box-shadow: 0 0 0 4px rgba(255, 138, 0, 0.12), 0 0 18px rgba(255, 138, 0, 0.42);
        }

        .ticket-mini-card article span,
        .ticket-bank-note p,
        .ticket-bank-grid span {
          color: #55706f;
          line-height: 1.6;
        }

        .ticket-payment-flow {
          display: grid;
          gap: 1rem;
        }

        .ticket-bank-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-bank-header span {
          display: inline-flex;
          border-radius: 999px;
          padding: 0.45rem 0.7rem;
          color: #0b4f4c;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
        }

        .ticket-bank-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .ticket-bank-grid article,
        .ticket-bank-note {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 18px;
          padding: 0.85rem;
          background: rgba(255, 255, 255, 0.54);
        }

        .ticket-bank-grid strong {
          display: block;
          margin-top: 0.25rem;
          color: #102525;
          overflow-wrap: anywhere;
        }

        .ticket-bank-grid button {
          margin-top: 0.55rem;
          border: 0;
          border-radius: 999px;
          padding: 0.45rem 0.75rem;
          color: #101819;
          font-weight: 900;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
        }

        .ticket-bank-note {
          margin-top: 0.75rem;
        }

        .ticket-bank-note strong {
          color: #0b4f4c;
        }

        .ticket-dropzone {
          min-height: 170px;
          display: grid;
          place-items: center;
          gap: 0.4rem;
          text-align: center;
          border: 1px dashed rgba(255, 138, 0, 0.54);
          border-radius: 22px;
          padding: 1rem;
          color: #0b4f4c;
          background: rgba(255, 189, 89, 0.1);
          cursor: pointer;
        }

        .ticket-dropzone input {
          display: none;
        }

        .ticket-proof-preview {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(11, 79, 76, 0.12);
          margin: 1rem 0;
          max-height: 320px;
        }

        .ticket-proof-preview img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes ticketRise {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes ticketLightSweep {
          from { transform: translateX(-4%) scale(1); }
          to { transform: translateX(4%) scale(1.04); }
        }

        @keyframes ticketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes ticketParticle {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate3d(10px, -18px, 0) scale(1.35); opacity: 1; }
        }

        @keyframes ticketButtonShine {
          0%, 58% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          68% { opacity: 1; }
          100% { transform: translateX(360%) skewX(-18deg); opacity: 0; }
        }

        @media (min-width: 1600px) {
          .ticket-portal-hero,
          .ticket-portal-shell {
            width: min(100%, 1380px);
          }

          .ticket-booking-layout {
            grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
          }
        }

        @media (max-width: 1280px) {
          .ticket-booking-layout {
            grid-template-columns: minmax(0, 1fr) minmax(270px, 330px);
          }

          .ticket-progress-card strong {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 1024px) {
          .ticket-booking-layout {
            grid-template-columns: 1fr;
          }

          .ticket-side-panel {
            position: static;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ticket-live-summary,
          .ticket-pass-preview {
            align-self: stretch;
          }

          .ticket-progress-card {
            overflow-x: auto;
            grid-template-columns: repeat(5, minmax(190px, 1fr));
            scroll-snap-type: x proximity;
            scrollbar-width: thin;
          }

          .ticket-progress-card article {
            scroll-snap-align: start;
          }
        }

        @media (max-width: 912px) {
          .ticket-portal-hero {
            min-height: clamp(360px, 50vh, 520px);
          }

          .ticket-booking-card {
            width: min(100%, 900px);
            margin-inline: auto;
          }

          .ticket-side-panel {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .ticket-portal-premium {
            padding: 0.85rem;
            overflow-x: hidden;
          }

          .ticket-portal-hero,
          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock {
            border-radius: 24px;
          }

          .ticket-card-top,
          .ticket-auth-card,
          .ticket-sold-out-lock {
            display: grid;
          }

          .ticket-sold-out-lock {
            grid-template-columns: 1fr;
          }

          .ticket-input-grid,
          .ticket-option-grid,
          .ticket-review-layout,
          .ticket-bank-grid,
          .ticket-side-panel {
            grid-template-columns: 1fr;
          }

          .ticket-side-panel {
            order: 2;
          }

          .ticket-booking-card {
            order: 1;
          }

          .ticket-form-stepper {
            display: flex;
            overflow-x: auto;
            padding-bottom: 0.25rem;
            scroll-snap-type: x proximity;
            scrollbar-width: thin;
          }

          .ticket-form-stepper button {
            flex: 0 0 auto;
            min-width: 210px;
            scroll-snap-align: start;
          }
        }

        @media (max-width: 540px) {
          .ticket-portal-premium {
            padding: 0.65rem;
          }

          .ticket-portal-hero {
            min-height: 360px;
            border-radius: 20px;
            padding: 1rem 0.75rem;
          }

          .ticket-portal-hero-content h1 {
            font-size: clamp(2.05rem, 12vw, 3.35rem);
            letter-spacing: -0.04em;
          }

          .ticket-trust-row {
            display: grid;
            grid-template-columns: 1fr;
            width: min(100%, 310px);
          }

          .ticket-trust-row strong {
            justify-content: center;
          }

          .ticket-progress-card {
            border-radius: 18px;
            padding: 0.65rem;
            gap: 0.55rem;
            grid-template-columns: repeat(5, minmax(170px, 1fr));
          }

          .ticket-progress-card article {
            min-height: 62px;
          }

          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock,
          .ticket-form-panel,
          .ticket-upload-card,
          .ticket-bank-card,
          .ticket-profile-card,
          .ticket-live-summary,
          .ticket-pass-preview,
          .ticket-mini-card {
            border-radius: 18px;
            padding: 0.85rem;
          }

          .ticket-profile-card {
            grid-template-columns: 1fr;
          }

          .ticket-form-actions {
            grid-template-columns: 1fr;
          }

          .ticket-primary-button,
          .ticket-secondary-button {
            width: 100%;
          }

          .ticket-booking-layout {
            display: flex;
            flex-direction: column;
          }

          .ticket-booking-card { order: 1; }
          .ticket-profile-card { order: 2; }
          .ticket-pass-preview { order: 3; }
          .ticket-mini-card:first-of-type { order: 4; }
          .ticket-mini-card:nth-of-type(2) { order: 5; }
          .ticket-timeline-card { order: 6; }
          .ticket-live-summary { order: 7; }

          .ticket-side-panel {
            display: contents;
          }

          .ticket-input-wrap input,
          .ticket-input-wrap select {
            min-height: 52px;
          }

          .ticket-option-card {
            min-height: 118px;
          }

          .ticket-dropzone {
            min-height: 150px;
          }
        }

        @media (max-width: 430px) {
          .ticket-portal-hero-content h1 {
            font-size: clamp(1.9rem, 11vw, 2.9rem);
          }

          .ticket-portal-hero-content > span {
            font-size: 0.95rem;
          }

          .ticket-progress-card {
            grid-template-columns: repeat(5, minmax(155px, 1fr));
          }

          .ticket-form-stepper button {
            min-width: 180px;
          }

          .ticket-card-top > span {
            width: fit-content;
          }
        }

        @media (max-width: 360px) {
          .ticket-portal-premium {
            padding: 0.5rem;
          }

          .ticket-portal-hero {
            min-height: 330px;
            border-radius: 18px;
          }

          .ticket-portal-hero-content h1 {
            font-size: 1.85rem;
          }

          .ticket-booking-card,
          .ticket-auth-card,
          .ticket-sold-out-lock,
          .ticket-form-panel,
          .ticket-upload-card,
          .ticket-bank-card,
          .ticket-profile-card,
          .ticket-live-summary,
          .ticket-pass-preview,
          .ticket-mini-card {
            padding: 0.72rem;
          }

          .ticket-panel-heading h3,
          .ticket-bank-header h3,
          .ticket-card-top h2 {
            font-size: 1.35rem;
          }

          .ticket-progress-card {
            grid-template-columns: repeat(5, minmax(145px, 1fr));
          }

          .ticket-progress-card article {
            min-height: 58px;
            padding: 0.55rem;
          }

          .ticket-progress-card span,
          .ticket-form-stepper span {
            width: 30px;
            height: 30px;
          }
        }

        @media (hover: none) {
          .ticket-option-card:hover,
          .ticket-primary-button:hover,
          .ticket-secondary-button:hover,
          .ticket-live-summary:hover,
          .ticket-pass-preview:hover,
          .ticket-mini-card article:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticket-portal-hero::before,
          .ticket-portal-orb,
          .ticket-portal-particles span,
          .ticket-portal-hero-content,
          .ticket-shimmer-button::before {
            animation: none;
          }
        }
      `})]})}var WP=Object.defineProperty,jo=Object.getOwnPropertySymbols,ev=Object.prototype.hasOwnProperty,tv=Object.prototype.propertyIsEnumerable,um=(e,t,n)=>t in e?WP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bi=(e,t)=>{for(var n in t||(t={}))ev.call(t,n)&&um(e,n,t[n]);if(jo)for(var n of jo(t))tv.call(t,n)&&um(e,n,t[n]);return e},lf=(e,t)=>{var n={};for(var r in e)ev.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&jo)for(var r of jo(e))t.indexOf(r)<0&&tv.call(e,r)&&(n[r]=e[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var xr;(e=>{const t=class{constructor(c,u,d,f){if(this.version=c,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],c<t.MIN_VERSION||c>t.MAX_VERSION)throw new RangeError("Version value out of range");if(f<-1||f>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let p=[];for(let m=0;m<this.size;m++)p.push(!1);for(let m=0;m<this.size;m++)this.modules.push(p.slice()),this.isFunction.push(p.slice());this.drawFunctionPatterns();const g=this.addEccAndInterleave(d);if(this.drawCodewords(g),f==-1){let m=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const b=this.getPenaltyScore();b<m&&(f=w,m=b),this.applyMask(w)}}i(0<=f&&f<=7),this.mask=f,this.applyMask(f),this.drawFormatBits(f),this.isFunction=[]}static encodeText(c,u){const d=e.QrSegment.makeSegments(c);return t.encodeSegments(d,u)}static encodeBinary(c,u){const d=e.QrSegment.makeBytes(c);return t.encodeSegments([d],u)}static encodeSegments(c,u,d=1,f=40,p=-1,g=!0){if(!(t.MIN_VERSION<=d&&d<=f&&f<=t.MAX_VERSION)||p<-1||p>7)throw new RangeError("Invalid value");let m,w;for(m=d;;m++){const y=t.getNumDataCodewords(m,u)*8,v=l.getTotalBits(c,m);if(v<=y){w=v;break}if(m>=f)throw new RangeError("Data too long")}for(const y of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])g&&w<=t.getNumDataCodewords(m,y)*8&&(u=y);let b=[];for(const y of c){r(y.mode.modeBits,4,b),r(y.numChars,y.mode.numCharCountBits(m),b);for(const v of y.getData())b.push(v)}i(b.length==w);const h=t.getNumDataCodewords(m,u)*8;i(b.length<=h),r(0,Math.min(4,h-b.length),b),r(0,(8-b.length%8)%8,b),i(b.length%8==0);for(let y=236;b.length<h;y^=253)r(y,8,b);let x=[];for(;x.length*8<b.length;)x.push(0);return b.forEach((y,v)=>x[v>>>3]|=y<<7-(v&7)),new t(m,u,x,p)}getModule(c,u){return 0<=c&&c<this.size&&0<=u&&u<this.size&&this.modules[u][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),u=c.length;for(let d=0;d<u;d++)for(let f=0;f<u;f++)d==0&&f==0||d==0&&f==u-1||d==u-1&&f==0||this.drawAlignmentPattern(c[d],c[f]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const u=this.errorCorrectionLevel.formatBits<<3|c;let d=u;for(let p=0;p<10;p++)d=d<<1^(d>>>9)*1335;const f=(u<<10|d)^21522;i(f>>>15==0);for(let p=0;p<=5;p++)this.setFunctionModule(8,p,s(f,p));this.setFunctionModule(8,7,s(f,6)),this.setFunctionModule(8,8,s(f,7)),this.setFunctionModule(7,8,s(f,8));for(let p=9;p<15;p++)this.setFunctionModule(14-p,8,s(f,p));for(let p=0;p<8;p++)this.setFunctionModule(this.size-1-p,8,s(f,p));for(let p=8;p<15;p++)this.setFunctionModule(8,this.size-15+p,s(f,p));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let d=0;d<12;d++)c=c<<1^(c>>>11)*7973;const u=this.version<<12|c;i(u>>>18==0);for(let d=0;d<18;d++){const f=s(u,d),p=this.size-11+d%3,g=Math.floor(d/3);this.setFunctionModule(p,g,f),this.setFunctionModule(g,p,f)}}drawFinderPattern(c,u){for(let d=-4;d<=4;d++)for(let f=-4;f<=4;f++){const p=Math.max(Math.abs(f),Math.abs(d)),g=c+f,m=u+d;0<=g&&g<this.size&&0<=m&&m<this.size&&this.setFunctionModule(g,m,p!=2&&p!=4)}}drawAlignmentPattern(c,u){for(let d=-2;d<=2;d++)for(let f=-2;f<=2;f++)this.setFunctionModule(c+f,u+d,Math.max(Math.abs(f),Math.abs(d))!=1)}setFunctionModule(c,u,d){this.modules[u][c]=d,this.isFunction[u][c]=!0}addEccAndInterleave(c){const u=this.version,d=this.errorCorrectionLevel;if(c.length!=t.getNumDataCodewords(u,d))throw new RangeError("Invalid argument");const f=t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][u],p=t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][u],g=Math.floor(t.getNumRawDataModules(u)/8),m=f-g%f,w=Math.floor(g/f);let b=[];const h=t.reedSolomonComputeDivisor(p);for(let y=0,v=0;y<f;y++){let S=c.slice(v,v+w-p+(y<m?0:1));v+=S.length;const E=t.reedSolomonComputeRemainder(S,h);y<m&&S.push(0),b.push(S.concat(E))}let x=[];for(let y=0;y<b[0].length;y++)b.forEach((v,S)=>{(y!=w-p||S>=m)&&x.push(v[y])});return i(x.length==g),x}drawCodewords(c){if(c.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let f=0;f<this.size;f++)for(let p=0;p<2;p++){const g=d-p,w=(d+1&2)==0?this.size-1-f:f;!this.isFunction[w][g]&&u<c.length*8&&(this.modules[w][g]=s(c[u>>>3],7-(u&7)),u++)}}i(u==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let d=0;d<this.size;d++){let f;switch(c){case 0:f=(d+u)%2==0;break;case 1:f=u%2==0;break;case 2:f=d%3==0;break;case 3:f=(d+u)%3==0;break;case 4:f=(Math.floor(d/3)+Math.floor(u/2))%2==0;break;case 5:f=d*u%2+d*u%3==0;break;case 6:f=(d*u%2+d*u%3)%2==0;break;case 7:f=((d+u)%2+d*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][d]&&f&&(this.modules[u][d]=!this.modules[u][d])}}getPenaltyScore(){let c=0;for(let p=0;p<this.size;p++){let g=!1,m=0,w=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[p][b]==g?(m++,m==5?c+=t.PENALTY_N1:m>5&&c++):(this.finderPenaltyAddHistory(m,w),g||(c+=this.finderPenaltyCountPatterns(w)*t.PENALTY_N3),g=this.modules[p][b],m=1);c+=this.finderPenaltyTerminateAndCount(g,m,w)*t.PENALTY_N3}for(let p=0;p<this.size;p++){let g=!1,m=0,w=[0,0,0,0,0,0,0];for(let b=0;b<this.size;b++)this.modules[b][p]==g?(m++,m==5?c+=t.PENALTY_N1:m>5&&c++):(this.finderPenaltyAddHistory(m,w),g||(c+=this.finderPenaltyCountPatterns(w)*t.PENALTY_N3),g=this.modules[b][p],m=1);c+=this.finderPenaltyTerminateAndCount(g,m,w)*t.PENALTY_N3}for(let p=0;p<this.size-1;p++)for(let g=0;g<this.size-1;g++){const m=this.modules[p][g];m==this.modules[p][g+1]&&m==this.modules[p+1][g]&&m==this.modules[p+1][g+1]&&(c+=t.PENALTY_N2)}let u=0;for(const p of this.modules)u=p.reduce((g,m)=>g+(m?1:0),u);const d=this.size*this.size,f=Math.ceil(Math.abs(u*20-d*10)/d)-1;return i(0<=f&&f<=9),c+=f*t.PENALTY_N4,i(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let d=[6];for(let f=this.size-7;d.length<c;f-=u)d.splice(1,0,f);return d}}static getNumRawDataModules(c){if(c<t.MIN_VERSION||c>t.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*c+128)*c+64;if(c>=2){const d=Math.floor(c/7)+2;u-=(25*d-10)*d-55,c>=7&&(u-=36)}return i(208<=u&&u<=29648),u}static getNumDataCodewords(c,u){return Math.floor(t.getNumRawDataModules(c)/8)-t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c]*t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let u=[];for(let f=0;f<c-1;f++)u.push(0);u.push(1);let d=1;for(let f=0;f<c;f++){for(let p=0;p<u.length;p++)u[p]=t.reedSolomonMultiply(u[p],d),p+1<u.length&&(u[p]^=u[p+1]);d=t.reedSolomonMultiply(d,2)}return u}static reedSolomonComputeRemainder(c,u){let d=u.map(f=>0);for(const f of c){const p=f^d.shift();d.push(0),u.forEach((g,m)=>d[m]^=t.reedSolomonMultiply(g,p))}return d}static reedSolomonMultiply(c,u){if(c>>>8||u>>>8)throw new RangeError("Byte out of range");let d=0;for(let f=7;f>=0;f--)d=d<<1^(d>>>7)*285,d^=(u>>>f&1)*c;return i(d>>>8==0),d}finderPenaltyCountPatterns(c){const u=c[1];i(u<=this.size*3);const d=u>0&&c[2]==u&&c[3]==u*3&&c[4]==u&&c[5]==u;return(d&&c[0]>=u*4&&c[6]>=u?1:0)+(d&&c[6]>=u*4&&c[0]>=u?1:0)}finderPenaltyTerminateAndCount(c,u,d){return c&&(this.finderPenaltyAddHistory(u,d),u=0),u+=this.size,this.finderPenaltyAddHistory(u,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(c,u){u[0]==0&&(c+=this.size),u.pop(),u.unshift(c)}};let n=t;n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;function r(c,u,d){if(u<0||u>31||c>>>u)throw new RangeError("Value out of range");for(let f=u-1;f>=0;f--)d.push(c>>>f&1)}function s(c,u){return(c>>>u&1)!=0}function i(c){if(!c)throw new Error("Assertion error")}const a=class{constructor(c,u,d){if(this.mode=c,this.numChars=u,this.bitData=d,u<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(c){let u=[];for(const d of c)r(d,8,u);return new a(a.Mode.BYTE,c.length,u)}static makeNumeric(c){if(!a.isNumeric(c))throw new RangeError("String contains non-numeric characters");let u=[];for(let d=0;d<c.length;){const f=Math.min(c.length-d,3);r(parseInt(c.substr(d,f),10),f*3+1,u),d+=f}return new a(a.Mode.NUMERIC,c.length,u)}static makeAlphanumeric(c){if(!a.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],d;for(d=0;d+2<=c.length;d+=2){let f=a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d))*45;f+=a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d+1)),r(f,11,u)}return d<c.length&&r(a.ALPHANUMERIC_CHARSET.indexOf(c.charAt(d)),6,u),new a(a.Mode.ALPHANUMERIC,c.length,u)}static makeSegments(c){return c==""?[]:a.isNumeric(c)?[a.makeNumeric(c)]:a.isAlphanumeric(c)?[a.makeAlphanumeric(c)]:[a.makeBytes(a.toUtf8ByteArray(c))]}static makeEci(c){let u=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)r(c,8,u);else if(c<16384)r(2,2,u),r(c,14,u);else if(c<1e6)r(6,3,u),r(c,21,u);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,u)}static isNumeric(c){return a.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return a.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,u){let d=0;for(const f of c){const p=f.mode.numCharCountBits(u);if(f.numChars>=1<<p)return 1/0;d+=4+p+f.bitData.length}return d}static toUtf8ByteArray(c){c=encodeURI(c);let u=[];for(let d=0;d<c.length;d++)c.charAt(d)!="%"?u.push(c.charCodeAt(d)):(u.push(parseInt(c.substr(d+1,2),16)),d+=2);return u}};let l=a;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=l})(xr||(xr={}));(e=>{(t=>{const n=class{constructor(s,i){this.ordinal=s,this.formatBits=i}};let r=n;r.LOW=new n(0,1),r.MEDIUM=new n(1,0),r.QUARTILE=new n(2,3),r.HIGH=new n(3,2),t.Ecc=r})(e.QrCode||(e.QrCode={}))})(xr||(xr={}));(e=>{(t=>{const n=class{constructor(s,i){this.modeBits=s,this.numBitsCharCount=i}numCharCountBits(s){return this.numBitsCharCount[Math.floor((s+7)/17)]}};let r=n;r.NUMERIC=new n(1,[10,12,14]),r.ALPHANUMERIC=new n(2,[9,11,13]),r.BYTE=new n(4,[8,16,16]),r.KANJI=new n(8,[8,10,12]),r.ECI=new n(7,[0,0,0]),t.Mode=r})(e.QrSegment||(e.QrSegment={}))})(xr||(xr={}));var Ur=xr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var nv={L:Ur.QrCode.Ecc.LOW,M:Ur.QrCode.Ecc.MEDIUM,Q:Ur.QrCode.Ecc.QUARTILE,H:Ur.QrCode.Ecc.HIGH},rv=128,sv="L",iv="#FFFFFF",av="#000000",ov=!1,cf=4,GP=.1;function lv(e,t=0){const n=[];return e.forEach(function(r,s){let i=null;r.forEach(function(a,l){if(!a&&i!==null){n.push(`M${i+t} ${s+t}h${l-i}v1H${i+t}z`),i=null;return}if(l===r.length-1){if(!a)return;i===null?n.push(`M${l+t},${s+t} h1v1H${l+t}z`):n.push(`M${i+t},${s+t} h${l+1-i}v1H${i+t}z`);return}a&&i===null&&(i=l)})}),n.join("")}function cv(e,t){return e.slice().map((n,r)=>r<t.y||r>=t.y+t.h?n:n.map((s,i)=>i<t.x||i>=t.x+t.w?s:!1))}function uv(e,t,n,r){if(r==null)return null;const s=n?cf:0,i=e.length+s*2,a=Math.floor(t*GP),l=i/t,c=(r.width||a)*l,u=(r.height||a)*l,d=r.x==null?e.length/2-c/2:r.x*l,f=r.y==null?e.length/2-u/2:r.y*l;let p=null;if(r.excavate){let g=Math.floor(d),m=Math.floor(f),w=Math.ceil(c+d-g),b=Math.ceil(u+f-m);p={x:g,y:m,w,h:b}}return{x:d,y:f,h:u,w:c,excavation:p}}var qP=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function KP(e){const t=e,{value:n,size:r=rv,level:s=sv,bgColor:i=iv,fgColor:a=av,includeMargin:l=ov,style:c,imageSettings:u}=t,d=lf(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),f=u==null?void 0:u.src,p=ke.useRef(null),g=ke.useRef(null),[m,w]=ke.useState(!1);ke.useEffect(()=>{if(p.current!=null){const x=p.current,y=x.getContext("2d");if(!y)return;let v=Ur.QrCode.encodeText(n,nv[s]).getModules();const S=l?cf:0,E=v.length+S*2,P=uv(v,r,l,u),N=g.current,R=P!=null&&N!==null&&N.complete&&N.naturalHeight!==0&&N.naturalWidth!==0;R&&P.excavation!=null&&(v=cv(v,P.excavation));const C=window.devicePixelRatio||1;x.height=x.width=r*C;const I=r/E*C;y.scale(I,I),y.fillStyle=i,y.fillRect(0,0,E,E),y.fillStyle=a,qP?y.fill(new Path2D(lv(v,S))):v.forEach(function(V,$){V.forEach(function(H,J){H&&y.fillRect(J+S,$+S,1,1)})}),R&&y.drawImage(N,P.x+S,P.y+S,P.w,P.h)}}),ke.useEffect(()=>{w(!1)},[f]);const b=bi({height:r,width:r},c);let h=null;return f!=null&&(h=ke.createElement("img",{src:f,key:f,style:{display:"none"},onLoad:()=>{w(!0)},ref:g})),ke.createElement(ke.Fragment,null,ke.createElement("canvas",bi({style:b,height:r,width:r,ref:p},d)),h)}function YP(e){const t=e,{value:n,size:r=rv,level:s=sv,bgColor:i=iv,fgColor:a=av,includeMargin:l=ov,imageSettings:c}=t,u=lf(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let d=Ur.QrCode.encodeText(n,nv[s]).getModules();const f=l?cf:0,p=d.length+f*2,g=uv(d,r,l,c);let m=null;c!=null&&g!=null&&(g.excavation!=null&&(d=cv(d,g.excavation)),m=ke.createElement("image",{xlinkHref:c.src,height:g.h,width:g.w,x:g.x+f,y:g.y+f,preserveAspectRatio:"none"}));const w=lv(d,f);return ke.createElement("svg",bi({height:r,width:r,viewBox:`0 0 ${p} ${p}`},u),ke.createElement("path",{fill:i,d:`M0,0 h${p}v${p}H0z`,shapeRendering:"crispEdges"}),ke.createElement("path",{fill:a,d:w,shapeRendering:"crispEdges"}),m)}var XP=e=>{const t=e,{renderAs:n}=t,r=lf(t,["renderAs"]);return n==="svg"?ke.createElement(YP,bi({},r)):ke.createElement(KP,bi({},r))};function QP({ticket:e,size:t=200,showCaption:n=!0}){const r=JSON.stringify({ticketId:e.uniqueTicketId||e.ticketId||e.id,fullName:e.fullName||e.name,email:e.email,phone:e.phone,eventName:e.eventName,eventDate:e.eventDate,eventTime:e.eventTime});return o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:o.jsx(XP,{value:r,size:t,level:"H",includeMargin:!0,renderAs:"canvas"})}),n?o.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function ZP(e="pending"){return e==="approved"?{label:"Verified",className:"is-approved"}:e==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:e==="rejected"||e==="cancelled"?{label:e==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function ec(e,t,n,r,s,i){const a=Math.min(i,r/2,s/2);e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+s-a),e.quadraticCurveTo(t+r,n+s,t+r-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}function JP(e,t,n,r,s,i,a="left"){const l=String(t).split(/\s+/);let c="",u=r;const d=e.textAlign;e.textAlign=a,l.forEach((f,p)=>{const g=c?`${c} ${f}`:f;e.measureText(g).width>s&&c?(e.fillText(c,a==="right"?n+s:n,u),c=f,u+=i):c=g,p===l.length-1&&c&&e.fillText(c,a==="right"?n+s:n,u)}),e.textAlign=d}function dv({ticket:e,actionTo:t,actionLabel:n="View Ticket"}){const r=k.useRef(null),s=k.useRef(null),i=e.uniqueTicketId||e.ticketId||e.id,a=e.bookingId||e.requestId||e.id,l=ZP(e.status),c=e.status==="approved",u=`${(e.ticketType||"VIP").toUpperCase()} PASS`,d=e.eventDate?Cu(e.eventDate):"Nov 01, 2026",f=e.festivalDay==="day2"?"Day 2":"Day 1",p=b=>{const h=document.createElement("a");h.href=b.toDataURL("image/png"),h.download=`ozilla-pass-${i}.png`,h.click()},g=async()=>{var J;const b=(J=r.current)==null?void 0:J.querySelector("canvas"),h=1200,x=440,y=document.createElement("canvas");y.width=h,y.height=x;const v=y.getContext("2d");if(!v)return;const S=v.createLinearGradient(0,0,h,x);S.addColorStop(0,"#020d0f"),S.addColorStop(.46,"#062828"),S.addColorStop(1,"#23081e"),ec(v,4,4,h-8,x-8,38),v.fillStyle=S,v.fill(),v.strokeStyle="rgba(255, 255, 255, 0.16)",v.lineWidth=3,v.stroke();const E=v.createLinearGradient(80,0,h-80,0);E.addColorStop(0,"rgba(255, 189, 89, 0.7)"),E.addColorStop(.5,"rgba(14, 165, 233, 0.5)"),E.addColorStop(1,"rgba(236, 72, 153, 0.6)"),v.strokeStyle=E,v.lineWidth=3.5,v.beginPath(),v.moveTo(90,6),v.lineTo(h-90,6),v.stroke(),v.fillStyle="#ffffff",v.font='800 20px "Segoe UI", Arial, sans-serif',v.textAlign="left",v.fillText(u,54,66),v.fillStyle="#ff9f1c",v.font='800 13px "Segoe UI", Arial, sans-serif',v.fillText("OZILLA FESTIVAL 2026",54,94);const P=e.fullName||e.name||"Festival Guest";v.fillStyle="#ffffff",v.font='800 36px "Segoe UI", Arial, sans-serif',JP(v,P,54,152,h-360,42);const N=e.email||"-";v.fillStyle="rgba(255, 255, 255, 0.78)",v.font='600 17px "Segoe UI", Arial, sans-serif',v.fillText(N,54,198);const R=[{label:"DATE",val:d},{label:"DAY",val:f},{label:"LOCATION",val:e.location||"Lahore, Pakistan"},{label:"BOOKING ID",val:String(a)}],C=246;let I=54;R.forEach(O=>{v.font='700 11px "Segoe UI", Arial, sans-serif';const U=v.measureText(O.label).width;v.font='800 14px "Segoe UI", Arial, sans-serif';const T=v.measureText(O.val).width,M=Math.max(U,T)+28;ec(v,I,C,M,58,12),v.fillStyle="rgba(255, 255, 255, 0.07)",v.fill(),v.strokeStyle="rgba(255, 255, 255, 0.12)",v.lineWidth=1.5,v.stroke(),v.fillStyle="#ff9f1c",v.font='800 11px "Segoe UI", Arial, sans-serif',v.textAlign="left",v.fillText(O.label,I+14,C+22),v.fillStyle="#ffffff",v.font='800 14px "Segoe UI", Arial, sans-serif',v.fillText(O.val,I+14,C+44),I+=M+14}),v.fillStyle="rgba(255, 255, 255, 0.45)",v.font='600 13px "Segoe UI", Arial, sans-serif',v.textAlign="left",v.fillText(`Official Festival Entry Pass • ID: ${i} • Verify at entrance`,54,388),v.fillStyle="#ffbd59",v.font='800 16px "Segoe UI", Arial, sans-serif',v.textAlign="right",v.fillText("TICKET ID",h-54,66),v.fillStyle="#ffffff",v.font='800 20px "Segoe UI", Arial, monospace',v.fillText(String(i),h-54,96);const V=190,$=h-V-54,H=132;ec(v,$,H,V,V,18),v.fillStyle="#ffffff",v.fill(),v.strokeStyle="rgba(255, 189, 89, 0.4)",v.lineWidth=2,v.stroke(),b&&c?v.drawImage(b,$+12,H+12,V-24,V-24):(v.fillStyle="#102525",v.font='800 13px "Segoe UI", Arial, sans-serif',v.textAlign="center",v.fillText("QR CODE",$+V/2,H+V/2-8),v.font='600 11px "Segoe UI", Arial, sans-serif',v.fillStyle="#6b7280",v.fillText(c?"GENERATING":"PENDING APPROVAL",$+V/2,H+V/2+12)),v.fillStyle="#ffbd59",v.font='800 11px "Segoe UI", Arial, sans-serif',v.textAlign="center",v.fillText("SCAN AT ENTRANCE",$+V/2,H+V+28),p(y)},m=()=>{g()},w=async()=>{if(navigator.share)try{await navigator.share({title:e.eventName||"Ozilla Festival Ticket Pass",text:`Ozilla Festival Ticket: ${i} (${u})`})}catch{}};return o.jsxs("div",{className:"ticket-pass-wrapper",ref:s,children:[o.jsxs("div",{className:"ticket-pass-badge",children:[o.jsx("div",{className:"ticket-pass-glow","aria-hidden":"true"}),o.jsxs("div",{className:"ticket-pass-left",children:[o.jsxs("div",{className:"ticket-pass-top-row",children:[o.jsx("div",{className:"ticket-pass-type-badge",children:u}),o.jsx("div",{className:"ticket-pass-festival-tag",children:"OZILLA FESTIVAL 2026"})]}),o.jsxs("div",{className:"ticket-pass-identity",children:[o.jsx("h2",{className:"ticket-pass-name",children:e.fullName||e.name||"Festival Guest"}),o.jsx("p",{className:"ticket-pass-email",children:e.email||"-"})]}),o.jsxs("div",{className:"ticket-pass-meta-row",children:[o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"DATE"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:d})]}),o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"DAY"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:f})]}),o.jsxs("div",{className:"ticket-pass-chip",children:[o.jsx("span",{className:"ticket-pass-chip-label",children:"BOOKING ID"}),o.jsx("strong",{className:"ticket-pass-chip-value",children:a})]})]}),o.jsx("div",{className:"ticket-pass-footnote",children:o.jsx("span",{children:"Official Festival Entry Pass • Valid for 1 Person"})})]}),o.jsxs("div",{className:"ticket-pass-right",children:[o.jsxs("div",{className:"ticket-pass-id-block",children:[o.jsx("span",{className:"ticket-pass-id-label",children:"TICKET ID"}),o.jsx("strong",{className:"ticket-pass-id-value",children:i})]}),o.jsxs("div",{className:"ticket-pass-qr-box",ref:r,children:[c?o.jsx(QP,{ticket:e,size:118,showCaption:!1}):o.jsxs("div",{className:"ticket-pass-qr-pending",children:[o.jsx("span",{children:"QR Pending"}),o.jsx("small",{children:"Approval Required"})]}),o.jsx("span",{className:"ticket-pass-scan-hint",children:"SCAN AT ENTRANCE"})]})]})]}),o.jsxs("div",{className:"ticket-pass-actions-bar",children:[o.jsxs("div",{className:"ticket-pass-status-pill",children:[o.jsx("span",{className:`status-dot ${l.className}`}),o.jsxs("span",{children:["Status: ",o.jsx("strong",{children:l.label})]})]}),o.jsxs("div",{className:"ticket-pass-button-group",children:[c?o.jsxs("button",{type:"button",className:"btn-pass-download",onClick:g,children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("polyline",{points:"7 10 12 15 17 10"}),o.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Pass"]}):o.jsx("button",{type:"button",className:"btn-pass-download disabled",disabled:!0,title:"Available after verification",children:"Download Pass (Pending)"}),o.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:m,children:"Print"}),o.jsx("button",{type:"button",className:"btn-pass-secondary",onClick:w,children:"Share"}),t&&o.jsx(G,{to:t,className:"btn-pass-link",children:n})]})]}),o.jsx("style",{children:`
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
      `})]})}const eT=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],tT=["Secure Ticket","Official Entry Pass","QR Verified","Instant Validation","Protected Account"],nT=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"],rT=["Festival Member","Digital Pass Ready","Partner Offers Unlocked","VIP Wallet Active"];function dm(){const e=new Date("2026-11-01T18:00:00+05:00").getTime(),t=Math.max(0,e-Date.now());return{days:Math.floor(t/(1e3*60*60*24)),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/(1e3*60)%60)}}function sT(){const{tickets:e,loading:t,fetchMyTickets:n}=tl(),{user:r}=Dt(),[s,i]=k.useState(dm);k.useEffect(()=>{n()},[n]),k.useEffect(()=>{const c=window.setInterval(()=>i(dm()),6e4);return()=>window.clearInterval(c)},[]);const a=`${(r==null?void 0:r.firstName)||""} ${(r==null?void 0:r.lastName)||""}`.trim()||(r==null?void 0:r.name)||(r==null?void 0:r.email)||"Festival Member",l=k.useMemo(()=>{const c=e.filter(d=>d.status==="approved").length,u=e.filter(d=>d.status!=="approved").length;return[[e.length,"Total Tickets"],[c,"QR Ready"],[u,"In Review"],[c*250+e.length*100,"Reward Points"],[c>1?"VIP":c===1?"Gold":"Member","Festival Level"]]},[e]);return o.jsxs("main",{className:"my-tickets-premium",children:[o.jsxs("section",{className:"my-tickets-hero",children:[o.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),o.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),o.jsxs("div",{className:"my-tickets-particles","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{className:"my-tickets-hero-content",children:[o.jsx("p",{children:"Digital Festival Wallet"}),o.jsx("h1",{children:"Your Ozilla Festival Passes"}),o.jsx("span",{children:"Access your tickets, download your QR codes, and get ready for the biggest entertainment festival."})]})]}),o.jsxs("section",{className:"my-tickets-shell",children:[o.jsxs("div",{className:"ticket-wallet-dashboard",children:[o.jsxs("article",{className:"ticket-wallet-profile",children:[o.jsx("div",{className:"ticket-wallet-avatar",children:String(a).slice(0,1).toUpperCase()}),o.jsxs("div",{children:[o.jsx("p",{children:"Welcome Back,"}),o.jsx("h2",{children:a}),o.jsx("span",{children:"Verified User"}),o.jsx("span",{children:"Official Ticket Holder"}),o.jsx("span",{children:"Festival Member"}),o.jsx("span",{children:e.length>2?"VIP Loyalty":e.length>0?"Gold Loyalty":"Member Since 2026"})]})]}),o.jsxs("article",{className:"ticket-wallet-countdown",children:[o.jsx("p",{children:"Festival Starts In"}),o.jsxs("div",{children:[o.jsx("strong",{children:s.days}),o.jsx("span",{children:"Days"}),o.jsx("strong",{children:s.hours}),o.jsx("span",{children:"Hours"}),o.jsx("strong",{children:s.minutes}),o.jsx("span",{children:"Minutes"})]})]})]}),o.jsx("div",{className:"ticket-wallet-stats",children:l.map(([c,u])=>o.jsxs("article",{children:[o.jsx("strong",{children:c}),o.jsx("span",{children:u})]},u))}),t?o.jsxs("div",{className:"ticket-wallet-loading",children:[o.jsx("div",{className:"ticket-wallet-spinner"}),o.jsx("h2",{children:"Loading Your Tickets..."}),o.jsx("p",{children:"Preparing your premium digital festival wallet."}),o.jsxs("div",{className:"ticket-skeleton-grid",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}):e.length===0?o.jsxs("div",{className:"ticket-wallet-empty",children:[o.jsx("div",{className:"ticket-empty-mark",children:"QR"}),o.jsx("h2",{children:"You haven't booked any tickets yet."}),o.jsx("p",{children:"Reserve your Ozilla Festival pass and unlock your personal digital ticket wallet."}),o.jsx(G,{to:"/tickets",children:"Purchase Ticket"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"ticket-wallet-section-heading",children:[o.jsx("p",{children:"Your Official Passes"}),o.jsx("h2",{children:"Premium Festival Tickets"})]}),o.jsx("div",{className:"ticket-wallet-grid",children:e.map(c=>o.jsx(dv,{ticket:c,actionLabel:"Open Details"},c.id))})]}),o.jsxs("div",{className:"ticket-wallet-extras",children:[o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Ticket Benefits"}),o.jsx("div",{className:"ticket-wallet-benefits",children:eT.map(c=>o.jsx("span",{children:c},c))})]}),o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Booking History"}),o.jsx("div",{className:"ticket-wallet-timeline",children:nT.map((c,u)=>o.jsx("span",{className:u<3?"is-active":"",children:c},c))})]}),o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Festival Journey"}),o.jsx("div",{className:"ticket-wallet-journey",children:rT.map((c,u)=>o.jsx("span",{className:u<=Math.min(3,e.length)?"is-active":"",children:c},c))})]}),o.jsxs("article",{className:"ticket-wallet-card ticket-save-wallet-card",children:[o.jsx("p",{children:"Wallet Access"}),o.jsx("h3",{children:"Save your pass to your digital wallet."}),o.jsx("span",{children:"Apple Wallet / Google Wallet style access is prepared as a premium interface."}),o.jsx("button",{type:"button",children:"Save to Wallet"})]}),o.jsxs("article",{className:"ticket-wallet-card",children:[o.jsx("p",{children:"Trust & Security"}),o.jsx("div",{className:"ticket-wallet-trust",children:tT.map(c=>o.jsx("span",{children:c},c))})]})]})]}),o.jsx("style",{children:`
        .my-tickets-premium {
          position: relative;
          min-height: 100vh;
          padding: clamp(1rem, 3vw, 2.2rem);
          overflow: hidden;
          color: #102525;
          background:
            radial-gradient(circle at 8% 10%, rgba(255, 176, 0, 0.2), transparent 24rem),
            radial-gradient(circle at 88% 12%, rgba(20, 142, 126, 0.2), transparent 26rem),
            radial-gradient(circle at 55% 95%, rgba(255, 77, 46, 0.12), transparent 25rem),
            linear-gradient(135deg, #fffaf2 0%, #eef5f0 48%, #f5e6dc 100%);
        }

        .my-tickets-premium * {
          box-sizing: border-box;
          min-width: 0;
        }

        .my-tickets-premium {
          overflow-x: hidden;
        }

        .my-tickets-premium a:focus-visible,
        .my-tickets-premium button:focus-visible {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 4px;
          box-shadow: 0 0 0 7px rgba(255, 189, 89, 0.16);
        }

        .my-tickets-hero,
        .my-tickets-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1260px);
          margin-inline: auto;
        }

        .my-tickets-hero {
          min-height: clamp(360px, 50vh, 590px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 20% 20%, rgba(255, 189, 89, 0.32), transparent 18rem);
          box-shadow: 0 38px 110px rgba(2, 11, 13, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .my-tickets-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(255, 255, 255, 0.11) 46%, transparent 56%),
            radial-gradient(circle at 54% 18%, rgba(255, 189, 89, 0.2), transparent 18rem);
          animation: walletLightSweep 10s ease-in-out infinite alternate;
        }

        .my-tickets-hero-content {
          position: relative;
          z-index: 1;
          width: min(92%, 920px);
          text-align: center;
          color: #fff;
          animation: walletRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .my-tickets-hero-content p,
        .ticket-wallet-profile p,
        .ticket-wallet-countdown p,
        .ticket-wallet-section-heading p,
        .ticket-wallet-card p {
          margin: 0 0 0.7rem;
          color: #ffbd59;
          font-size: clamp(0.7rem, 1.2vw, 0.84rem);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .my-tickets-hero-content h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.75rem, 7.4vw, 7rem);
          line-height: 0.91;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .my-tickets-hero-content > span {
          display: block;
          width: min(100%, 790px);
          margin: 1.15rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(1rem, 2vw, 1.22rem);
          line-height: 1.6;
        }

        .my-tickets-orb,
        .my-tickets-particles span {
          position: absolute;
          pointer-events: none;
        }

        .my-tickets-orb {
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.66;
          animation: walletFloat 8s ease-in-out infinite;
        }

        .my-tickets-orb-one {
          width: clamp(140px, 22vw, 290px);
          aspect-ratio: 1;
          left: 8%;
          top: 15%;
          background: rgba(255, 189, 89, 0.42);
        }

        .my-tickets-orb-two {
          width: clamp(160px, 24vw, 330px);
          aspect-ratio: 1;
          right: 6%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.38);
          animation-direction: reverse;
        }

        .my-tickets-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .my-tickets-particles span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd36a, #ff7a1a);
          box-shadow: 0 0 22px rgba(255, 189, 89, 0.65);
          animation: walletParticle 7s ease-in-out infinite;
        }
        .my-tickets-particles span:nth-child(1) { left: 12%; top: 22%; }
        .my-tickets-particles span:nth-child(2) { left: 28%; bottom: 18%; animation-delay: 1s; }
        .my-tickets-particles span:nth-child(3) { right: 18%; top: 20%; animation-delay: 1.8s; }
        .my-tickets-particles span:nth-child(4) { right: 28%; bottom: 22%; animation-delay: 2.6s; }
        .my-tickets-particles span:nth-child(5) { left: 52%; top: 12%; animation-delay: 3.4s; }

        .my-tickets-shell {
          display: grid;
          gap: clamp(1rem, 2.4vw, 1.35rem);
          margin-top: clamp(1rem, 2.4vw, 1.8rem);
        }

        .ticket-wallet-dashboard,
        .ticket-wallet-stats,
        .ticket-wallet-extras {
          display: grid;
          gap: 1rem;
        }

        .ticket-wallet-dashboard {
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
        }

        .ticket-wallet-profile,
        .ticket-wallet-countdown,
        .ticket-wallet-stats article,
        .ticket-wallet-card,
        .ticket-wallet-empty,
        .ticket-wallet-loading {
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
        }

        .ticket-wallet-profile {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.4rem);
        }

        .ticket-wallet-avatar {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          border-radius: 24px;
          color: #102525;
          font-size: 1.65rem;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 18px 34px rgba(255, 138, 0, 0.24);
          animation: walletFloat 5.8s ease-in-out infinite;
        }

        .ticket-wallet-profile h2 {
          margin: 0 0 0.7rem;
          color: #102525;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-profile span {
          display: inline-flex;
          width: fit-content;
          margin: 0.25rem 0.25rem 0 0;
          border-radius: 999px;
          padding: 0.4rem 0.6rem;
          color: #0b4f4c;
          font-size: 0.76rem;
          font-weight: 900;
          background: rgba(34, 197, 94, 0.12);
          overflow-wrap: anywhere;
        }

        .ticket-wallet-countdown {
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.4rem);
        }

        .ticket-wallet-countdown div {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
          text-align: center;
        }

        .ticket-wallet-countdown strong {
          display: block;
          color: #102525;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-countdown span {
          color: #55706f;
          font-size: 0.76rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          overflow-wrap: anywhere;
        }

        .ticket-wallet-stats {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .ticket-wallet-stats article {
          border-radius: 22px;
          padding: 1rem;
          min-height: 120px;
          display: grid;
          align-content: center;
          text-align: center;
        }

        .ticket-wallet-stats strong {
          color: #0b4f4c;
          font-size: clamp(1.55rem, 3vw, 2.3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-stats span {
          margin-top: 0.45rem;
          color: #55706f;
          font-size: 0.78rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          overflow-wrap: anywhere;
        }

        .ticket-wallet-section-heading h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.8rem, 3.6vw, 3.1rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.2vw, 1.25rem);
        }

        .ticket-wallet-extras {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ticket-wallet-card {
          border-radius: 24px;
          padding: 1rem;
        }

        .ticket-wallet-benefits,
        .ticket-wallet-timeline,
        .ticket-wallet-trust,
        .ticket-wallet-journey {
          display: grid;
          gap: 0.7rem;
        }

        .ticket-wallet-benefits {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ticket-wallet-benefits span,
        .ticket-wallet-trust span,
        .ticket-wallet-timeline span,
        .ticket-wallet-journey span {
          min-height: 48px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.7rem 0.8rem;
          color: #315b59;
          font-weight: 850;
          background: rgba(255, 255, 255, 0.54);
          overflow-wrap: anywhere;
        }

        .ticket-wallet-timeline span {
          position: relative;
          padding-left: 1.5rem;
        }

        .ticket-wallet-timeline span::before {
          content: '';
          position: absolute;
          left: 0.7rem;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.22);
        }

        .ticket-wallet-timeline span.is-active::before {
          background: #ff8a00;
          box-shadow: 0 0 18px rgba(255, 138, 0, 0.42);
        }

        .ticket-wallet-journey span.is-active {
          border-color: rgba(255, 176, 0, 0.32);
          color: #0b4f4c;
          background: linear-gradient(135deg, rgba(255, 189, 89, 0.22), rgba(255, 255, 255, 0.62));
        }

        .ticket-save-wallet-card {
          position: relative;
          overflow: hidden;
        }

        .ticket-save-wallet-card::after {
          content: '';
          position: absolute;
          inset: -45% -20% auto auto;
          width: 48%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(30px);
          pointer-events: none;
        }

        .ticket-save-wallet-card h3,
        .ticket-save-wallet-card span,
        .ticket-save-wallet-card button {
          position: relative;
          z-index: 1;
        }

        .ticket-save-wallet-card h3 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.25rem, 2.4vw, 1.75rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .ticket-save-wallet-card > span {
          display: block;
          margin-top: 0.6rem;
          color: #55706f;
          line-height: 1.6;
        }

        .ticket-save-wallet-card button {
          min-height: 48px;
          border: 0;
          border-radius: 999px;
          margin-top: 1rem;
          padding: 0 1rem;
          color: #101819;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.24);
          cursor: pointer;
        }

        .ticket-wallet-empty,
        .ticket-wallet-loading {
          display: grid;
          justify-items: center;
          text-align: center;
          gap: 0.85rem;
          border-radius: 28px;
          padding: clamp(1.4rem, 4vw, 2.4rem);
        }

        .ticket-empty-mark,
        .ticket-wallet-spinner {
          width: 96px;
          height: 96px;
          display: grid;
          place-items: center;
          border-radius: 28px;
          color: #102525;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          box-shadow: 0 20px 44px rgba(255, 138, 0, 0.24);
        }

        .ticket-wallet-spinner {
          border-radius: 999px;
          background: conic-gradient(from 0deg, #ffbd59, #ff8a00, #0b4f4c, #ffbd59);
          animation: walletSpin 1.1s linear infinite;
        }

        .ticket-wallet-spinner::after {
          content: '';
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: #fffaf2;
        }

        .ticket-wallet-empty h2,
        .ticket-wallet-loading h2 {
          margin: 0;
          color: #102525;
          font-size: clamp(1.6rem, 3.5vw, 2.5rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .ticket-wallet-empty p,
        .ticket-wallet-loading p {
          margin: 0;
          color: #55706f;
          max-width: 620px;
          line-height: 1.65;
        }

        .ticket-wallet-empty a {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 1.2rem;
          color: #101819;
          font-weight: 950;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.28);
        }

        .ticket-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
          width: min(100%, 760px);
        }

        .ticket-skeleton-grid span {
          min-height: 150px;
          border-radius: 22px;
          background: linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,189,89,0.18), rgba(255,255,255,0.4));
          background-size: 240% 100%;
          animation: walletSkeleton 1.3s ease-in-out infinite;
        }

        @keyframes walletRise {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes walletLightSweep {
          from { transform: translateX(-4%) scale(1); }
          to { transform: translateX(4%) scale(1.04); }
        }

        @keyframes walletFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes walletParticle {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate3d(10px, -18px, 0) scale(1.35); opacity: 1; }
        }

        @keyframes walletSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes walletSkeleton {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @media (min-width: 1600px) {
          .my-tickets-hero,
          .my-tickets-shell {
            width: min(100%, 1380px);
          }
        }

        @media (max-width: 1280px) {
          .ticket-wallet-grid {
            gap: 1rem;
          }

          .ticket-wallet-extras {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .ticket-wallet-dashboard,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 912px) {
          .my-tickets-hero {
            min-height: clamp(380px, 48vh, 500px);
          }

          .ticket-wallet-dashboard,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-extras {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .my-tickets-premium {
            padding: 0.85rem;
          }

          .my-tickets-hero {
            border-radius: 24px;
          }

          .ticket-wallet-profile {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .ticket-skeleton-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ticket-wallet-extras,
          .ticket-wallet-grid {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ticket-wallet-benefits {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .my-tickets-premium {
            padding: 0.65rem;
          }

          .my-tickets-hero {
            min-height: 340px;
            border-radius: 20px;
            padding: 1rem 0.75rem;
          }

          .my-tickets-hero-content h1 {
            font-size: clamp(2rem, 12vw, 3.25rem);
            letter-spacing: -0.04em;
          }

          .my-tickets-hero-content > span {
            font-size: 0.98rem;
          }

          .ticket-wallet-stats,
          .ticket-wallet-benefits {
            grid-template-columns: 1fr;
          }

          .ticket-wallet-profile,
          .ticket-wallet-countdown,
          .ticket-wallet-stats article,
          .ticket-wallet-card,
          .ticket-wallet-empty,
          .ticket-wallet-loading {
            border-radius: 18px;
            padding: 0.85rem;
          }

          .ticket-wallet-countdown div {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .ticket-wallet-avatar {
            width: 64px;
            height: 64px;
            border-radius: 20px;
          }

          .ticket-save-wallet-card button,
          .ticket-wallet-empty a {
            width: 100%;
          }
        }

        @media (max-width: 430px) {
          .my-tickets-premium {
            padding: 0.55rem;
          }

          .my-tickets-hero {
            min-height: 330px;
            border-radius: 18px;
          }

          .my-tickets-hero-content {
            width: 94%;
          }

          .my-tickets-hero-content p,
          .ticket-wallet-profile p,
          .ticket-wallet-countdown p,
          .ticket-wallet-section-heading p,
          .ticket-wallet-card p {
            letter-spacing: 0.11em;
          }

          .ticket-wallet-countdown div {
            gap: 0.35rem;
          }

          .ticket-wallet-countdown strong {
            font-size: clamp(1.5rem, 10vw, 2.1rem);
          }
        }

        @media (max-width: 360px) {
          .my-tickets-premium {
            padding: 0.45rem;
          }

          .my-tickets-shell {
            gap: 0.75rem;
          }

          .my-tickets-hero {
            min-height: 310px;
            border-radius: 16px;
            padding: 0.9rem 0.5rem;
          }

          .my-tickets-hero-content h1 {
            font-size: clamp(1.8rem, 11.5vw, 2.65rem);
          }

          .ticket-wallet-profile,
          .ticket-wallet-countdown,
          .ticket-wallet-stats article,
          .ticket-wallet-card,
          .ticket-wallet-empty,
          .ticket-wallet-loading {
            padding: 0.75rem;
          }

          .ticket-wallet-benefits span,
          .ticket-wallet-trust span,
          .ticket-wallet-timeline span,
          .ticket-wallet-journey span {
            min-height: 44px;
            padding: 0.65rem;
            font-size: 0.9rem;
          }
        }

        @media (hover: none) {
          .premium-ticket-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .my-tickets-hero::before,
          .my-tickets-orb,
          .my-tickets-particles span,
          .my-tickets-hero-content,
          .ticket-wallet-avatar,
          .ticket-wallet-spinner,
          .ticket-skeleton-grid span {
            animation: none;
          }
        }
      `})]})}function iT(){return o.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:o.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}function aT(){const{ticketId:e}=O0(),{getTicketById:t}=tl(),[n,r]=k.useState(null),[s,i]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),d=(n==null?void 0:n.status)==="approved",f=["pending","payment_submitted"].includes(n==null?void 0:n.status);if(k.useEffect(()=>{(async()=>{try{const m=await t(e);r(m)}catch{r(null)}finally{i(!1)}})()},[e,t]),s)return o.jsx(iT,{});if(!n)return o.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto my-12",children:o.jsx("p",{className:"text-gray-600 font-semibold text-lg",children:"Ticket not found."})});const p=async()=>{var g,m;l(!0),u(null);try{const w=await yt.cancelTicket(n.id);r(w.ticket),u({type:"success",message:w.message||"Ticket cancelled successfully."})}catch(w){u({type:"error",message:((m=(g=w.response)==null?void 0:g.data)==null?void 0:m.message)||"Failed to cancel ticket."})}finally{l(!1)}};return o.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[o.jsx("div",{className:"flex items-center justify-between gap-3 mb-6",children:o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-black text-gray-900",children:"Your Festival Pass"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Official digital entry pass with scannable QR badge"})]})}),c&&o.jsx(Fi,{type:c.type,message:c.message,onClose:()=>u(null)}),o.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[o.jsx(dv,{ticket:n,actionTo:"/tickets/my-tickets",actionLabel:"My Tickets Wallet"}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8",children:[f&&o.jsx("button",{type:"button",className:"mb-4 bg-rose-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-rose-700 transition-colors",onClick:p,disabled:a,children:a?"Cancelling...":"Cancel Ticket Request"}),d?o.jsxs("div",{className:"p-5 bg-emerald-50/80 border border-emerald-200 rounded-xl",children:[o.jsx("h2",{className:"text-lg font-bold text-emerald-900 mb-1",children:"Official Pass Ready"}),o.jsxs("p",{className:"text-emerald-700 text-sm",children:["Your ticket pass has been verified and the scannable QR badge is active. Click ",o.jsx("strong",{children:"Download Pass"})," above to save the pass image to your device."]})]}):o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Verification In Progress"}),o.jsxs("div",{className:"bg-amber-50/80 border border-amber-200 rounded-xl p-5",children:[o.jsx("p",{className:"text-amber-900 font-semibold mb-1",children:"Pass verification pending admin approval."}),o.jsx("p",{className:"text-amber-700 text-sm",children:"Your scannable QR code and downloadable pass image will be unlocked once payment proof is verified by the admin team."})]})]})]})]})]})}function oT(){const{ticketId:e}=O0(),[t,n]=k.useState(null),[r,s]=k.useState(""),[i,a]=k.useState(!0),[l,c]=k.useState(!1),[u,d]=k.useState(null),[f,p]=k.useState(""),g=b=>b==="approved"?"bg-green-100 text-green-800":b==="payment_submitted"?"bg-blue-100 text-blue-700":b==="rejected"||b==="cancelled"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-800",m=b=>{try{const h=JSON.parse(b),y=["ticketId","fullName","email","phone","eventName","eventDate","eventTime"].filter(v=>!h[v]);return y.length>0?{ok:!1,message:`Missing fields: ${y.join(", ")}`}:{ok:!0,parsed:h}}catch{return{ok:!1,message:"QR payload is not valid JSON."}}};k.useEffect(()=>{(async()=>{try{const h=await yt.getTicketById(e);n(h),s(JSON.stringify({ticketId:h.uniqueTicketId||h.ticketId||h.id,fullName:h.fullName||h.name,email:h.email,phone:h.phone,eventName:h.eventName,eventDate:h.eventDate,eventTime:h.eventTime},null,2))}catch{d({type:"error",message:"Ticket not found"})}finally{a(!1)}})()},[e]);const w=async()=>{var h,x,y,v,S;d(null),p("");const b=m(r);if(!b.ok){p(b.message);return}c(!0);try{const E=await yt.verifyTicketByQr(r);n(E.ticket||t),d({type:"success",message:E.message||`Ticket verified: ${E.status}`})}catch(E){const P=((x=(h=E.response)==null?void 0:h.data)==null?void 0:x.message)||"Verification failed",N=(S=(v=(y=E.response)==null?void 0:y.data)==null?void 0:v.mismatchedFields)!=null&&S.length?` Mismatched fields: ${E.response.data.mismatchedFields.join(", ")}.`:"";d({type:"error",message:`${P}${N}`})}finally{c(!1)}};return i?o.jsx("div",{className:"flex items-center justify-center min-h-screen",children:o.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})}):o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6",children:o.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[o.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"Ticket Verification"}),u&&o.jsx(Fi,{type:u.type,message:u.message,onClose:()=>d(null)}),t?o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6",children:[o.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:t.eventName}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Date:"})," ",t.eventDate]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Location:"})," ",t.location]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Ticket Type:"})," ",t.ticketType]}),o.jsxs("p",{className:"text-gray-600",children:[o.jsx("span",{className:"font-semibold",children:"Status:"}),o.jsx("span",{className:`ml-2 px-3 py-1 rounded-full text-sm ${g(t.status)}`,children:t.status})]})]})]}),o.jsx("div",{className:"text-center",children:o.jsx("div",{className:"bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block",children:o.jsx("div",{className:"w-48 h-48 bg-gray-100 flex items-center justify-center",children:o.jsx("span",{className:"text-gray-400",children:"Scan / Paste QR Data"})})})}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-gray-700 mb-2 font-semibold",children:"QR Payload"}),o.jsx("textarea",{className:"w-full px-4 py-2 border rounded-lg",rows:6,value:r,onChange:b=>s(b.target.value)}),f&&o.jsx("p",{className:"text-sm text-red-600 mt-2",children:f})]}),o.jsx("button",{onClick:w,disabled:l,className:"w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold",children:l?"Verifying...":"Verify Ticket"})]}):o.jsx("div",{className:"text-center text-gray-600",children:o.jsx("p",{children:"Ticket not found or invalid."})})]})})}const pa={async getDashboard(){return(await re.get("/admin/dashboard")).data},async getUsers(){return(await re.get("/admin/users")).data},async getPayments(){return(await re.get("/admin/payments")).data},async getReports(){return(await re.get("/admin/reports")).data}};function lT(){const{isAdmin:e}=Dt(),[t,n]=k.useState(!0),[r,s]=k.useState(null),[i,a]=k.useState(null),[l,c]=k.useState([]),[u,d]=k.useState([]),[f,p]=k.useState(null);if(k.useEffect(()=>{(async()=>{var h,x;if(!e){n(!1);return}n(!0);try{const[y,v,S,E]=await Promise.all([pa.getDashboard(),pa.getUsers(),pa.getPayments(),pa.getReports()]);a(y),c(v),d(S),p(E)}catch(y){s({type:"error",message:((x=(h=y.response)==null?void 0:h.data)==null?void 0:x.message)||"Failed to load admin dashboard."})}finally{n(!1)}})()},[e]),!e)return o.jsx("div",{className:"max-w-4xl mx-auto py-12",children:o.jsxs("div",{className:"bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center",children:[o.jsx("h1",{className:"text-2xl font-black text-red-400 mb-2",children:"Admin Access Required"}),o.jsx("p",{className:"text-white/70",children:"Only authenticated festival admin accounts can access this command center."})]})});if(t)return o.jsx("div",{className:"max-w-6xl mx-auto py-12 text-center",children:o.jsx("div",{className:"bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8",children:o.jsx("p",{className:"text-white/70",children:"Loading festival admin analytics..."})})});const g=(i==null?void 0:i.stats)||{},m=(i==null?void 0:i.ticketStatus)||{},w=(f==null?void 0:f.ticketsByType)||{};return o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6",children:o.jsx("div",{children:o.jsx(of,{title:"Admin Command Center",subtitle:"Real-time festival ticket velocity, user data, revenue analytics & approvals"})})}),r&&o.jsx(Fi,{type:r.type,message:r.message,onClose:()=>s(null)}),o.jsx("div",{className:"flex items-center gap-3 mb-8",children:o.jsxs(G,{to:"/admin/tickets",className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#cf5704] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform",children:["Review Pending Ticket Approvals (",m.payment_submitted||0,") →"]})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Total Users"}),o.jsx("p",{className:"text-3xl font-black text-white",children:g.totalUsers||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Total Tickets"}),o.jsx("p",{className:"text-3xl font-black text-[#ffbd59]",children:g.totalTickets||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Active Events"}),o.jsx("p",{className:"text-3xl font-black text-[#EC4899]",children:g.totalEvents||0})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",children:[o.jsx("p",{className:"text-xs font-bold text-white/50 uppercase tracking-wider mb-1",children:"Revenue Estimate"}),o.jsxs("p",{className:"text-2xl font-black text-green-400",children:["PKR ",Number(g.totalRevenueEstimate||0).toLocaleString()]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Pass Status Breakdown"}),o.jsx("div",{className:"space-y-3",children:[["Pending",m.pending||0,"text-yellow-400"],["Payment Submitted",m.payment_submitted||0,"text-blue-400"],["Approved & Issued",m.approved||0,"text-green-400"],["Rejected",m.rejected||0,"text-red-400"],["Cancelled",m.cancelled||0,"text-gray-400"]].map(([b,h,x])=>o.jsxs("div",{className:"flex justify-between items-center bg-white/5 p-3 rounded-xl",children:[o.jsx("span",{className:"text-sm font-semibold text-white/80",children:b}),o.jsx("span",{className:`text-base font-black ${x}`,children:h})]},b))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Passes by Category"}),o.jsx("div",{className:"space-y-3",children:[["General Access Pass",w.regular||0],["VIP All-Access Pass",w.vip||0],["Gold Sponsor Pass",w.premium||0]].map(([b,h])=>o.jsxs("div",{className:"flex justify-between items-center bg-white/5 p-3 rounded-xl",children:[o.jsx("span",{className:"text-sm font-semibold text-white/80",children:b}),o.jsx("span",{className:"text-base font-black text-[#ffbd59]",children:h})]},b))})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Recent Users"}),l.length===0?o.jsx("p",{className:"text-white/50 text-sm py-4",children:"No users registered yet."}):o.jsx("div",{className:"space-y-2",children:l.slice(0,6).map(b=>o.jsxs("div",{className:"p-3 bg-white/5 rounded-xl flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-bold text-white text-sm",children:b.name||`${b.firstName||""} ${b.lastName||""}`.trim()||"Guest"}),o.jsx("p",{className:"text-xs text-white/50",children:b.email})]}),o.jsx("span",{className:"text-xs font-bold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70",children:b.role||"user"})]},b.id))})]}),o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white mb-4 pb-2 border-b border-white/10",children:"Latest Transactions"}),u.length===0?o.jsx("p",{className:"text-white/50 text-sm py-4",children:"No payment activity recorded."}):o.jsx("div",{className:"space-y-2",children:u.slice(0,6).map(b=>o.jsxs("div",{className:"p-3 bg-white/5 rounded-xl flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"font-bold text-white text-sm",children:["PKR ",Number(b.amount||0).toLocaleString()]}),o.jsxs("p",{className:"text-xs text-white/50",children:[b.ticketId||b.id," · ",b.status]})]}),o.jsx("span",{className:"text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-green-500/20 text-green-400",children:b.status})]},b.id))})]})]})]})}function cT(){const{isAdmin:e}=Dt(),[t,n]=k.useState([]),[r,s]=k.useState(!0),[i,a]=k.useState(null),[l,c]=k.useState(null),u=async()=>{var f,p;s(!0);try{const g=await yt.getPendingTicketsAdmin();n(g)}catch(g){c({type:"error",message:((p=(f=g.response)==null?void 0:f.data)==null?void 0:p.message)||"Failed to load pending tickets."})}finally{s(!1)}};k.useEffect(()=>{e?u():s(!1)},[e]);const d=async(f,p)=>{var g,m;a(f);try{await yt.decideTicketAdmin(f,p),c({type:"success",message:`Ticket ${p} successfully.`}),await u()}catch(w){c({type:"error",message:((m=(g=w.response)==null?void 0:g.data)==null?void 0:m.message)||"Failed to update ticket."})}finally{a(null)}};return e?o.jsxs("div",{className:"max-w-6xl mx-auto py-4",children:[o.jsx("div",{className:"flex items-center justify-between gap-4 mb-2",children:o.jsx(G,{to:"/admin/dashboard",className:"text-sm font-bold text-[#ffbd59] hover:underline",children:"← Back to Admin Dashboard"})}),o.jsx(of,{title:"Ticket Payment Approvals",subtitle:"Review manual and card payment submissions for official festival pass issuance"}),l&&o.jsx(Fi,{type:l.type,message:l.message,onClose:()=>c(null)}),r?o.jsx("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center",children:o.jsx("p",{className:"text-white/70",children:"Loading pending payment verification queues..."})}):t.length===0?o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center",children:[o.jsx("p",{className:"text-2xl mb-2",children:"🎉"}),o.jsx("p",{className:"text-lg font-bold text-white mb-1",children:"Queue is Clear!"}),o.jsx("p",{className:"text-sm text-white/60",children:"No pending ticket payment proofs requiring admin review right now."})]}):o.jsx("div",{className:"space-y-6",children:t.map(f=>o.jsxs("div",{className:"bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10 mb-6",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-black uppercase tracking-wider text-[#ffbd59] bg-[#ffbd59]/10 px-2.5 py-1 rounded-full",children:f.status}),o.jsx("h3",{className:"text-xl font-extrabold text-white mt-2",children:f.eventName})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs text-white/50 block",children:"Ticket Reference"}),o.jsx("code",{className:"text-sm font-bold text-[#EC4899]",children:f.uniqueTicketId||f.ticketId||f.id})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6",children:[o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Attendee Name"}),o.jsx("p",{className:"text-sm font-bold text-white mt-1",children:f.fullName||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Email"}),o.jsx("p",{className:"text-sm font-bold text-white truncate mt-1",children:f.email||"-"})]}),o.jsxs("div",{className:"bg-white/5 p-3.5 rounded-xl border border-white/5",children:[o.jsx("p",{className:"text-xs text-white/50 uppercase font-semibold",children:"Phone"}),o.jsx("p",{className:"text-sm font-bold text-white mt-1",children:f.phone||"-"})]})]}),f.paymentProofPath&&o.jsxs("div",{className:"mb-6 bg-white/5 p-4 rounded-xl border border-white/10",children:[o.jsx("p",{className:"text-xs font-bold text-white/70 uppercase tracking-wide mb-2",children:"Attached Payment Proof"}),o.jsx("a",{href:`${"http://localhost:5000/api".replace("/api","")||"http://localhost:5000"}/${f.paymentProofPath}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm font-bold text-[#ffbd59] hover:underline",children:"🔍 View Full Resolution Proof Document →"})]}),o.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-white/10",children:[o.jsx("button",{type:"button",disabled:i===f.id,onClick:()=>d(f.id,"reject"),className:"px-6 py-2.5 rounded-full border border-red-500/40 text-red-400 hover:bg-red-500/20 font-bold text-sm transition-all",children:"Reject"}),o.jsx("button",{type:"button",disabled:i===f.id,onClick:()=>d(f.id,"approve"),className:"px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg",children:i===f.id?"Approving...":"Approve & Issue QR Pass"})]})]},f.id))})]}):o.jsx("div",{className:"max-w-4xl mx-auto py-12",children:o.jsxs("div",{className:"bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center",children:[o.jsx("h1",{className:"text-2xl font-black text-red-400 mb-2",children:"Admin Access Required"}),o.jsx("p",{className:"text-white/70",children:"Only authenticated admins can review ticket payment submissions."})]})})}const uT=[{id:"privacy-introduction",number:"01",icon:"PV",title:"Introduction",text:"This Privacy Policy explains how Ozilla Festival handles visitor, account, ticket, and support information with transparency and care."},{id:"information-collection",number:"02",icon:"ID",title:"Information We Collect",text:"We may collect details such as name, email address, phone number, account information, ticket requests, and support messages."},{id:"data-use",number:"03",icon:"DU",title:"How We Use Data",text:"Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations."},{id:"cookies",number:"04",icon:"CK",title:"Cookies",text:"Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience."},{id:"third-party-services",number:"05",icon:"TP",title:"Third-Party Services",text:"Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required."},{id:"data-security",number:"06",icon:"SC",title:"Data Security",text:"We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe."},{id:"user-rights",number:"07",icon:"RT",title:"User Rights",text:"Visitors can contact Ozilla Festival to request support, corrections, clarification, or help with account and privacy-related questions."},{id:"children-privacy",number:"08",icon:"FM",title:"Children's Privacy",text:"Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules."},{id:"policy-updates",number:"09",icon:"UP",title:"Policy Updates",text:"This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services."},{id:"privacy-contact",number:"10",icon:"CT",title:"Contact Information",text:"For privacy questions, account support, or clarification, visitors can contact the Ozilla Festival support team through the Contact page."}],dT=[{id:"introduction",number:"01",icon:"TR",title:"Introduction",text:"These Terms & Conditions explain the policies that help Ozilla Festival maintain a safe, organized, and enjoyable festival experience for every visitor."},{id:"ticket-policy",number:"02",icon:"TK",title:"Ticket Policy",text:"Tickets are issued for the selected Ozilla Festival access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure."},{id:"payments",number:"03",icon:"PM",title:"Payments",text:"Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval."},{id:"refund-policy",number:"04",icon:"RF",title:"Refund Policy",text:"Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow."},{id:"festival-rules",number:"05",icon:"RL",title:"Festival Rules",text:"Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry."},{id:"privacy",number:"06",icon:"PR",title:"Privacy",text:"Personal information is used for event operations, communication, ticketing, and support. Ozilla Festival does not sell visitor information."},{id:"liability",number:"07",icon:"LB",title:"Liability",text:"Ozilla Festival may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance."},{id:"user-responsibilities",number:"08",icon:"UR",title:"User Responsibilities",text:"Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams."},{id:"contact-information",number:"09",icon:"CT",title:"Contact Information",text:"For clarification about these Terms & Conditions, contact the Ozilla Festival support team through the official contact page."}],fT=[["Important Policy Update","Official event instructions, entry rules, and safety notices may be updated before the festival."],["Key Information","Keep your ticket details secure and contact support if anything needs clarification."]],pT=[["Privacy First","Your account, ticket, and support information is handled with transparency and careful access control."],["Security Guaranteed","Ozilla Festival uses secure workflows to protect authentication, ticket requests, and payment-related support."]],hT=[["Notice","Important Notice","Under 16 attendees are allowed with their family according to the current event notice."],["Entry","Restricted Items","Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points."],["Update","Policy Updates","Operational updates may be shared before or during the festival through official Ozilla Festival channels."]],mT=[["Promise","Privacy Promise","We never misuse your information and keep data usage limited to festival, account, ticket, and support needs."],["Rights","Your Rights","Visitors can contact the team for privacy questions, account support, corrections, or clarification."],["Cookies","Cookie Usage","Cookies are used only to support functionality, sessions, performance, and a smoother website experience."]],gT=[["Secure Ticket Purchase","Ticket and booking policies are structured to keep visitor access clear and verifiable."],["Refund Protection","Refund requests follow the official support process so every case is reviewed consistently."],["Privacy Commitment","Visitor information is used only for festival operations, ticketing, communication, and support."],["Safe Payments","Payment details are reviewed through trusted workflows for booking confirmation and assistance."],["Festival Rules","Clear rules help protect guests, families, artists, partners, and the event experience."],["Professional Support","The Ozilla Festival team is available for policy questions and event guidance."]],xT=[["Secure Authentication","Protected account access for ticket and user workflows."],["Encrypted Data","Sensitive flows are handled through secured application processes."],["Protected Payments","Payment-related support is managed through trusted verification steps."],["Secure Database","Visitor data is handled with careful operational access controls."],["Privacy First","Information is used for clear festival purposes only."],["Safe Browsing","The website experience is designed around trust, clarity, and secure usage."]],yT=[{target:100,suffix:"%",label:"Secure Authentication"},{target:256,suffix:"-bit",label:"Data Encryption"},{value:"Protected",label:"User Accounts"},{value:"Secure",label:"Payment Processing"}],vT=["We never misuse your information.","Your data remains protected.","Secure ticket purchases.","Safe payment processing.","Transparent privacy practices."],wT=[["Email","ozillafestival@gmail.com"],["Phone","+92 322 6622221"],["Support Hours","Monday to Saturday, 10:00 AM - 7:00 PM"]];function fm({type:e}){const t=e==="terms",[n,r]=k.useState(0),[s,i]=k.useState(""),[a,l]=k.useState(0),c=k.useMemo(()=>t?dT:uT,[t]),u=t?fT:pT,d=t?hT:mT,f=t?gT:xT;k.useEffect(()=>{const m=()=>{const w=window.scrollY||document.documentElement.scrollTop,b=document.documentElement.scrollHeight-window.innerHeight;r(b>0?Math.min(100,Math.max(0,w/b*100)):0)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),k.useEffect(()=>{const m=new IntersectionObserver(w=>{var h;const b=w.filter(x=>x.isIntersecting).sort((x,y)=>y.intersectionRatio-x.intersectionRatio)[0];(h=b==null?void 0:b.target)!=null&&h.id&&i(b.target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[.15,.35,.55]});return c.forEach(w=>{const b=document.getElementById(w.id);b&&m.observe(b)}),()=>m.disconnect()},[c]),k.useEffect(()=>{const m=Array.from(document.querySelectorAll(".legal-reveal"));if(!m.length)return;const w=new IntersectionObserver(b=>{b.forEach(h=>{h.target.classList.toggle("is-visible",h.isIntersecting)})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return m.forEach(b=>w.observe(b)),()=>w.disconnect()},[t]),k.useEffect(()=>{if(t)return;const m=document.querySelector(".legal-stat-grid");if(!m)return;let w;const b=()=>{const x=performance.now(),y=900,v=S=>{const E=Math.min(1,(S-x)/y);l(E),E<1&&(w=requestAnimationFrame(v))};cancelAnimationFrame(w),l(0),w=requestAnimationFrame(v)},h=new IntersectionObserver(x=>{x.forEach(y=>{y.isIntersecting&&b()})},{threshold:.28});return h.observe(m),()=>{cancelAnimationFrame(w),h.disconnect()}},[t]);const p=t?"Terms & Conditions":"Privacy Policy",g=t?"Please review our policies carefully to ensure a safe and enjoyable Ozilla Festival experience.":"Your privacy matters. We are committed to protecting your personal information and providing complete transparency.";return o.jsxs("main",{className:`legal-premium-page ${t?"legal-terms-page":"legal-privacy-page"}`,children:[o.jsx("div",{className:"legal-scroll-progress","aria-hidden":"true",children:o.jsx("span",{style:{width:`${n}%`}})}),o.jsxs("section",{className:"legal-hero",children:[o.jsx("div",{className:"legal-hero-orb legal-hero-orb-one"}),o.jsx("div",{className:"legal-hero-orb legal-hero-orb-two"}),o.jsxs("div",{className:"legal-particles","aria-hidden":"true",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),o.jsxs("div",{className:"legal-hero-content legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:"Ozilla Festival 2026"}),o.jsx("h1",{children:p}),o.jsx("p",{children:g}),!t&&o.jsxs("div",{className:"privacy-hero-trust","aria-label":"Privacy trust highlights",children:[o.jsx("span",{children:"Privacy First"}),o.jsx("span",{children:"Secure Ticketing"}),o.jsx("span",{children:"Transparent Data Use"})]})]})]}),o.jsxs("section",{className:"legal-shell",children:[o.jsxs("aside",{className:"legal-sidebar","aria-label":`${p} quick navigation`,children:[o.jsx("p",{children:t?"Quick Navigation":"Privacy Center"}),o.jsx("nav",{children:c.map(m=>o.jsxs("a",{href:`#${m.id}`,className:s===m.id?"is-active":"",children:[o.jsx("span",{children:m.number}),m.title]},m.id))})]}),o.jsxs("div",{className:"legal-document",children:[o.jsxs("div",{className:"legal-document-top legal-reveal",children:[o.jsxs("div",{children:[o.jsx("p",{className:"legal-kicker",children:t?"Premium Legal Portal":"Executive Privacy Center"}),o.jsx("h2",{children:t?"Clear Policies For A Better Festival":"Your Information, Handled With Care"})]}),o.jsx("span",{className:"legal-updated",children:"Updated for 2026"})]}),o.jsx("div",{className:"legal-policy-banners legal-reveal",children:u.map(([m,w])=>o.jsxs("article",{children:[o.jsx("strong",{children:m}),o.jsx("span",{children:w})]},m))}),!t&&o.jsx("div",{className:"legal-stat-grid legal-reveal",children:yT.map((m,w)=>o.jsxs("article",{style:{"--delay":`${w*70}ms`},children:[o.jsx("strong",{className:"legal-stat-value",children:m.value||`${Math.round(m.target*a)}${m.suffix}`}),o.jsx("span",{children:m.label})]},m.label))}),o.jsx("div",{className:"legal-highlight-grid",children:d.map(([m,w,b],h)=>o.jsxs("article",{className:"legal-highlight-card legal-reveal",style:{"--delay":`${h*80}ms`},children:[o.jsx("span",{children:m}),o.jsx("h3",{children:w}),o.jsx("p",{children:b})]},w))}),o.jsx("div",{className:"legal-benefit-grid",children:f.map(([m,w],b)=>o.jsxs("article",{className:"legal-benefit-card legal-reveal",style:{"--delay":`${b*55}ms`},children:[o.jsx("span",{children:String(b+1).padStart(2,"0")}),o.jsxs("div",{children:[o.jsx("h3",{children:m}),o.jsx("p",{children:w})]})]},m))}),o.jsx("div",{className:"legal-section-list",children:c.map((m,w)=>o.jsxs("article",{id:m.id,className:"legal-section-card legal-reveal",style:{"--delay":`${w*45}ms`},children:[o.jsx("div",{className:"legal-section-icon","aria-hidden":"true",children:m.icon}),o.jsxs("div",{children:[o.jsx("span",{className:"legal-section-number",children:m.number}),o.jsx("h3",{children:m.title}),o.jsx("p",{children:m.text})]})]},m.id))}),t?o.jsxs("article",{className:"legal-acceptance-card legal-reveal",children:[o.jsx("span",{"aria-hidden":"true",children:"OK"}),o.jsxs("div",{children:[o.jsx("h3",{children:"By continuing to use Ozilla Festival, you acknowledge and agree to these Terms & Conditions."}),o.jsx("p",{children:"Please read each section carefully before purchasing tickets, creating an account, or attending the event."})]})]}):o.jsxs("article",{className:"legal-promise-card legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:"Our Privacy Promise"}),o.jsx("h3",{children:"Transparent, secure, and respectful data practices."}),o.jsx("div",{children:vT.map(m=>o.jsx("span",{children:m},m))})]}),o.jsxs("section",{className:"legal-support-cta legal-reveal",children:[o.jsx("p",{className:"legal-kicker",children:t?"We Believe In Complete Transparency":"Questions About Your Privacy?"}),o.jsx("h2",{children:t?"Need help understanding our policies?":"Our team is always available to assist you."}),o.jsx("p",{className:"legal-support-copy",children:t?"Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.":"If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime."}),o.jsx("div",{className:"legal-support-grid",children:wT.map(([m,w])=>o.jsxs("article",{children:[o.jsx("span",{children:m}),o.jsx("strong",{children:w})]},m))}),o.jsx(G,{to:"/contact",className:"legal-support-button",children:"Contact Support"})]})]})]})]})}function bT(){return o.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50",children:[o.jsx("h1",{className:"text-9xl font-bold text-purple-600 mb-4",children:"404"}),o.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Page Not Found"}),o.jsx("p",{className:"text-gray-600 mb-8 text-center max-w-md",children:"The page you're looking for doesn't exist or has been moved."}),o.jsx(G,{to:"/",className:"bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:"Go to Homepage"})]})}function kT(){return o.jsxs(Ob,{children:[o.jsxs(Q,{element:o.jsx(Z5,{}),children:[o.jsx(Q,{path:"/login",element:o.jsx(Ml,{children:o.jsx(dP,{})})}),o.jsx(Q,{path:"/register",element:o.jsx(Ml,{children:o.jsx(mP,{})})}),o.jsx(Q,{path:"/auth/google/callback",element:o.jsx(Ml,{children:o.jsx(gP,{})})})]}),o.jsx(Q,{path:"/",element:o.jsx(Gn,{children:o.jsx(PP,{})})}),o.jsx(Q,{path:"/dashboard",element:o.jsx(Pe,{to:"/",replace:!0})}),o.jsx(Q,{path:"/about",element:o.jsx(Pe,{to:"/#about",replace:!0})}),o.jsx(Q,{path:"/collaboration",element:o.jsx(Pe,{to:"/#sponsorship",replace:!0})}),o.jsx(Q,{path:"/prismfest",element:o.jsx(Pe,{to:"/#home",replace:!0})}),o.jsx(Q,{path:"/prismfest/celebrities",element:o.jsx(Pe,{to:"/#celebrities",replace:!0})}),o.jsx(Q,{path:"/prismfest/events",element:o.jsx(Pe,{to:"/#events",replace:!0})}),o.jsx(Q,{path:"/prismfest/future",element:o.jsx(Pe,{to:"/#future-events",replace:!0})}),o.jsx(Q,{path:"/history",element:o.jsx(Pe,{to:"/#history",replace:!0})}),o.jsx(Q,{path:"/events",element:o.jsx(Pe,{to:"/#events",replace:!0})}),o.jsx(Q,{path:"/sponsorship",element:o.jsx(Pe,{to:"/#sponsorship",replace:!0})}),o.jsx(Q,{path:"/contact",element:o.jsx(Pe,{to:"/#contact",replace:!0})}),o.jsx(Q,{path:"/facilities",element:o.jsx(Pe,{to:"/#facilities",replace:!0})}),o.jsx(Q,{path:"/hotels",element:o.jsx(Pe,{to:"/#hotels",replace:!0})}),o.jsx(Q,{path:"/restaurants",element:o.jsx(Pe,{to:"/#restaurants",replace:!0})}),o.jsx(Q,{path:"/discounts",element:o.jsx(Pe,{to:"/#discounts",replace:!0})}),o.jsx(Q,{path:"/partner",element:o.jsx(Pe,{to:"/#about",replace:!0})}),o.jsx(Q,{path:"/privacy",element:o.jsx(Gn,{children:o.jsx(fm,{type:"privacy"})})}),o.jsx(Q,{path:"/terms",element:o.jsx(Gn,{children:o.jsx(fm,{type:"terms"})})}),o.jsx(Q,{path:"/verification/:ticketId",element:o.jsx(Gn,{children:o.jsx(oT,{})})}),o.jsx(Q,{path:"/tickets",element:o.jsx(Zl,{children:o.jsx(HP,{})})}),o.jsxs(Q,{element:o.jsx(Q5,{}),children:[o.jsx(Q,{path:"/account",element:o.jsx(Gn,{children:o.jsx(AP,{})})}),o.jsx(Q,{path:"/admin/dashboard",element:o.jsx(Gn,{children:o.jsx(lT,{})})}),o.jsx(Q,{path:"/tickets/my-tickets",element:o.jsx(Zl,{children:o.jsx(sT,{})})}),o.jsx(Q,{path:"/tickets/view/:ticketId",element:o.jsx(Zl,{children:o.jsx(aT,{})})}),o.jsx(Q,{path:"/admin/tickets",element:o.jsx(Gn,{children:o.jsx(cT,{})})})]}),o.jsx(Q,{path:"*",element:o.jsx(bT,{})})]})}function ST(){const e="/ozillafest/".replace(/\/$/,"");return o.jsx(Bb,{basename:e||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:o.jsx(X5,{children:o.jsx(kT,{})})})}class jT extends k.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("Application render failed:",t,n)}render(){return this.state.error?o.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[o.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),o.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),o.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}tc.createRoot(document.getElementById("root")).render(o.jsx(ke.StrictMode,{children:o.jsx(jT,{children:o.jsx(ST,{})})}));
