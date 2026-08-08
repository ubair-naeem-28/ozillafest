function wh(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},Gi={},ou={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),jh=Symbol.for("react.portal"),Nh=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Ch=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Rh=Symbol.for("react.memo"),Oh=Symbol.for("react.lazy"),pc=Symbol.iterator;function Lh(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,du={};function bn(e,t,r){this.props=e,this.context=t,this.refs=du,this.updater=r||lu}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uu(){}uu.prototype=bn.prototype;function il(e,t,r){this.props=e,this.context=t,this.refs=du,this.updater=r||lu}var sl=il.prototype=new uu;sl.constructor=il;cu(sl,bn.prototype);sl.isPureReactComponent=!0;var mc=Array.isArray,pu=Object.prototype.hasOwnProperty,ol={current:null},mu={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,r){var a,i={},s=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)pu.call(t,a)&&!mu.hasOwnProperty(a)&&(i[a]=t[a]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)i[a]===void 0&&(i[a]=c[a]);return{$$typeof:ba,type:e,key:s,ref:o,props:i,_owner:ol.current}}function Ah(e,t){return{$$typeof:ba,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===ba}function _h(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var hc=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_h(""+e.key):t.toString(36)}function ti(e,t,r,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ba:case jh:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+bs(o,0):a,mc(i)?(r="",e!=null&&(r=e.replace(hc,"$&/")+"/"),ti(i,t,r,"",function(d){return d})):i!=null&&(ll(i)&&(i=Ah(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",mc(e))for(var c=0;c<e.length;c++){s=e[c];var l=a+bs(s,c);o+=ti(s,t,r,l,i)}else if(l=Lh(e),typeof l=="function")for(e=l.call(e),c=0;!(s=e.next()).done;)s=s.value,l=a+bs(s,c++),o+=ti(s,t,r,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function za(e,t,r){if(e==null)return e;var a=[],i=0;return ti(e,a,"","",function(s){return t.call(r,s,i++)}),a}function Fh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ri={transition:null},Ih={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ri,ReactCurrentOwner:ol};function fu(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:za,forEach:function(e,t,r){za(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return za(e,function(){t++}),t},toArray:function(e){return za(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=bn;G.Fragment=Nh;G.Profiler=Eh;G.PureComponent=il;G.StrictMode=Sh;G.Suspense=Th;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih;G.act=fu;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=cu({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ol.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)pu.call(t,l)&&!mu.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}return{$$typeof:ba,type:e.type,key:i,ref:s,props:a,_owner:o}};G.createContext=function(e){return e={$$typeof:Ch,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ph,_context:e},e.Consumer=e};G.createElement=hu;G.createFactory=function(e){var t=hu.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:zh,render:e}};G.isValidElement=ll;G.lazy=function(e){return{$$typeof:Oh,_payload:{_status:-1,_result:e},_init:Fh}};G.memo=function(e,t){return{$$typeof:Rh,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=ri.transition;ri.transition={};try{e()}finally{ri.transition=t}};G.unstable_act=fu;G.useCallback=function(e,t){return Fe.current.useCallback(e,t)};G.useContext=function(e){return Fe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Fe.current.useEffect(e,t)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(e,t,r){return Fe.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Fe.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Fe.current.useReducer(e,t,r)};G.useRef=function(e){return Fe.current.useRef(e)};G.useState=function(e){return Fe.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Fe.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.3.1";ou.exports=G;var k=ou.exports;const we=kh(k),Mh=wh({__proto__:null,default:we},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=k,Uh=Symbol.for("react.element"),Bh=Symbol.for("react.fragment"),$h=Object.prototype.hasOwnProperty,Hh=Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vh={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,r){var a,i={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)$h.call(t,a)&&!Vh.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:Uh,type:e,key:s,ref:o,props:i,_owner:Hh.current}}Gi.Fragment=Bh;Gi.jsx=gu;Gi.jsxs=gu;su.exports=Gi;var n=su.exports,to={},xu={exports:{}},Xe={},bu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var M=z.length;z.push(F);e:for(;0<M;){var $=M-1>>>1,K=z[$];if(0<i(K,F))z[$]=F,z[M]=K,M=$;else break e}}function r(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var F=z[0],M=z.pop();if(M!==F){z[0]=M;e:for(var $=0,K=z.length,Le=K>>>1;$<Le;){var xe=2*($+1)-1,yt=z[xe],V=xe+1,he=z[V];if(0>i(yt,M))V<K&&0>i(he,yt)?(z[$]=he,z[V]=M,$=V):(z[$]=yt,z[xe]=M,$=xe);else if(V<K&&0>i(he,M))z[$]=he,z[V]=M,$=V;else break e}}return F}function i(z,F){var M=z.sortIndex-F.sortIndex;return M!==0?M:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var l=[],d=[],u=1,p=null,f=3,b=!1,x=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var F=r(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=z)a(d),F.sortIndex=F.expirationTime,t(l,F);else break;F=r(d)}}function y(z){if(w=!1,g(z),!x)if(r(l)!==null)x=!0,I(S);else{var F=r(d);F!==null&&H(y,F.startTime-z)}}function S(z,F){x=!1,w&&(w=!1,m(P),P=-1),b=!0;var M=f;try{for(g(F),p=r(l);p!==null&&(!(p.expirationTime>F)||z&&!D());){var $=p.callback;if(typeof $=="function"){p.callback=null,f=p.priorityLevel;var K=$(p.expirationTime<=F);F=e.unstable_now(),typeof K=="function"?p.callback=K:p===r(l)&&a(l),g(F)}else a(l);p=r(l)}if(p!==null)var Le=!0;else{var xe=r(d);xe!==null&&H(y,xe.startTime-F),Le=!1}return Le}finally{p=null,f=M,b=!1}}var N=!1,C=null,P=-1,U=5,R=-1;function D(){return!(e.unstable_now()-R<U)}function ee(){if(C!==null){var z=e.unstable_now();R=z;var F=!0;try{F=C(!0,z)}finally{F?E():(N=!1,C=null)}}else N=!1}var E;if(typeof h=="function")E=function(){h(ee)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,q=A.port2;A.port1.onmessage=ee,E=function(){q.postMessage(null)}}else E=function(){v(ee,0)};function I(z){C=z,N||(N=!0,E())}function H(z,F){P=v(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,I(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var M=f;f=F;try{return z()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=f;f=z;try{return F()}finally{f=M}},e.unstable_scheduleCallback=function(z,F,M){var $=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?$+M:$):M=$,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=M+K,z={id:u++,callback:F,priorityLevel:z,startTime:M,expirationTime:K,sortIndex:-1},M>$?(z.sortIndex=M,t(d,z),r(l)===null&&z===r(d)&&(w?(m(P),P=-1):w=!0,H(y,M-$))):(z.sortIndex=K,t(l,z),x||b||(x=!0,I(S))),z},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(z){var F=f;return function(){var M=f;f=F;try{return z.apply(this,arguments)}finally{f=M}}}})(yu);bu.exports=yu;var Yh=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh=k,Ge=Yh;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vu=new Set,Kn={};function _r(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Kn[e]=t,e=0;e<t.length;e++)vu.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=Object.prototype.hasOwnProperty,Wh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fc={},gc={};function Gh(e){return ro.call(gc,e)?!0:ro.call(fc,e)?!1:Wh.test(e)?gc[e]=!0:(fc[e]=!0,!1)}function Xh(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qh(e,t,r,a){if(t===null||typeof t>"u"||Xh(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,r,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cl,dl);Ne[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cl,dl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cl,dl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,r,a){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qh(t,r,i,a)&&(r=null),a||i===null?Gh(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var Ut=qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),no=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),ku=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),io=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),ju=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Pn(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ys;function Fn(e){if(ys===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var vs=!1;function ws(e,t){if(!e||vs)return"";vs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,c=s.length-1;1<=o&&0<=c&&i[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(i[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||i[o]!==s[c]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=c);break}}}finally{vs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Fn(e):""}function Kh(e){switch(e.tag){case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 2:case 15:return e=ws(e.type,!1),e;case 11:return e=ws(e.type.render,!1),e;case 1:return e=ws(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case $r:return"Portal";case no:return"Profiler";case pl:return"StrictMode";case ao:return"Suspense";case io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ku:return(e.displayName||"Context")+".Consumer";case wu:return(e._context.displayName||"Context")+".Provider";case ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function Jh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zh(e){var t=Nu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ra(e){e._valueTracker||(e._valueTracker=Zh(e))}function Su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Nu(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,t){var r=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function bc(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=cr(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eu(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function lo(e,t){Eu(e,t);var r=cr(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?co(e,t.type,r):t.hasOwnProperty("defaultValue")&&co(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function co(e,t,r){(t!=="number"||gi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var In=Array.isArray;function tn(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+cr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(In(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:cr(r)}}function Pu(e,t){var r=cr(t.value),a=cr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oa,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ef=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){ef.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Tu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Ru(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=Tu(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var tf=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,t){if(t){if(tf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var go=null,rn=null,nn=null;function kc(e){if(e=wa(e)){if(typeof go!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Zi(t),go(e.stateNode,e.type,t))}}function Ou(e){rn?nn?nn.push(e):nn=[e]:rn=e}function Lu(){if(rn){var e=rn,t=nn;if(nn=rn=null,kc(e),t)for(e=0;e<t.length;e++)kc(t[e])}}function Au(e,t){return e(t)}function _u(){}var ks=!1;function Fu(e,t,r){if(ks)return e(t,r);ks=!0;try{return Au(e,t,r)}finally{ks=!1,(rn!==null||nn!==null)&&(_u(),Lu())}}function Zn(e,t){var r=e.stateNode;if(r===null)return null;var a=Zi(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var xo=!1;if(Ft)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{xo=!1}function rf(e,t,r,a,i,s,o,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var Hn=!1,xi=null,bi=!1,bo=null,nf={onError:function(e){Hn=!0,xi=e}};function af(e,t,r,a,i,s,o,c,l){Hn=!1,xi=null,rf.apply(nf,arguments)}function sf(e,t,r,a,i,s,o,c,l){if(af.apply(this,arguments),Hn){if(Hn){var d=xi;Hn=!1,xi=null}else throw Error(T(198));bi||(bi=!0,bo=d)}}function Fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jc(e){if(Fr(e)!==e)throw Error(T(188))}function of(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return jc(i),e;if(s===a)return jc(i),t;s=s.sibling}throw Error(T(188))}if(r.return!==a.return)r=i,a=s;else{for(var o=!1,c=i.child;c;){if(c===r){o=!0,r=i,a=s;break}if(c===a){o=!0,a=i,r=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===r){o=!0,r=s,a=i;break}if(c===a){o=!0,a=s,r=i;break}c=c.sibling}if(!o)throw Error(T(189))}}if(r.alternate!==a)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function Mu(e){return e=of(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Du(e);if(t!==null)return t;e=e.sibling}return null}var Uu=Ge.unstable_scheduleCallback,Nc=Ge.unstable_cancelCallback,lf=Ge.unstable_shouldYield,cf=Ge.unstable_requestPaint,ue=Ge.unstable_now,df=Ge.unstable_getCurrentPriorityLevel,gl=Ge.unstable_ImmediatePriority,Bu=Ge.unstable_UserBlockingPriority,yi=Ge.unstable_NormalPriority,uf=Ge.unstable_LowPriority,$u=Ge.unstable_IdlePriority,Xi=null,St=null;function pf(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:ff,mf=Math.log,hf=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(mf(e)/hf|0)|0}var La=64,Aa=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var c=o&~i;c!==0?a=Mn(c):(s&=o,s!==0&&(a=Mn(s)))}else o=r&~i,o!==0?a=Mn(o):s!==0&&(a=Mn(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-mt(t),i=1<<r,a|=e[r],t&=~i;return a}function gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-mt(s),c=1<<o,l=i[o];l===-1?(!(c&r)||c&a)&&(i[o]=gf(c,t)):l<=t&&(e.expiredLanes|=c),s&=~c}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=La;return La<<=1,!(La&4194240)&&(La=64),e}function js(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ya(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function bf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-mt(r),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~s}}function xl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-mt(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var Z=0;function Vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,bl,qu,Wu,Gu,vo=!1,_a=[],er=null,tr=null,rr=null,ea=new Map,ta=new Map,Xt=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function zn(e,t,r,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=wa(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vf(e,t,r,a,i){switch(t){case"focusin":return er=zn(er,e,t,r,a,i),!0;case"dragenter":return tr=zn(tr,e,t,r,a,i),!0;case"mouseover":return rr=zn(rr,e,t,r,a,i),!0;case"pointerover":var s=i.pointerId;return ea.set(s,zn(ea.get(s)||null,e,t,r,a,i)),!0;case"gotpointercapture":return s=i.pointerId,ta.set(s,zn(ta.get(s)||null,e,t,r,a,i)),!0}return!1}function Xu(e){var t=vr(e.target);if(t!==null){var r=Fr(t);if(r!==null){if(t=r.tag,t===13){if(t=Iu(r),t!==null){e.blockedOn=t,Gu(e.priority,function(){qu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);fo=a,r.target.dispatchEvent(a),fo=null}else return t=wa(r),t!==null&&bl(t),e.blockedOn=r,!1;t.shift()}return!0}function Ec(e,t,r){ni(e)&&r.delete(t)}function wf(){vo=!1,er!==null&&ni(er)&&(er=null),tr!==null&&ni(tr)&&(tr=null),rr!==null&&ni(rr)&&(rr=null),ea.forEach(Ec),ta.forEach(Ec)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,wf)))}function ra(e){function t(i){return Tn(i,e)}if(0<_a.length){Tn(_a[0],e);for(var r=1;r<_a.length;r++){var a=_a[r];a.blockedOn===e&&(a.blockedOn=null)}}for(er!==null&&Tn(er,e),tr!==null&&Tn(tr,e),rr!==null&&Tn(rr,e),ea.forEach(t),ta.forEach(t),r=0;r<Xt.length;r++)a=Xt[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)Xu(r),r.blockedOn===null&&Xt.shift()}var an=Ut.ReactCurrentBatchConfig,wi=!0;function kf(e,t,r,a){var i=Z,s=an.transition;an.transition=null;try{Z=1,yl(e,t,r,a)}finally{Z=i,an.transition=s}}function jf(e,t,r,a){var i=Z,s=an.transition;an.transition=null;try{Z=4,yl(e,t,r,a)}finally{Z=i,an.transition=s}}function yl(e,t,r,a){if(wi){var i=wo(e,t,r,a);if(i===null)Ls(e,t,a,ki,r),Sc(e,a);else if(vf(i,e,t,r,a))a.stopPropagation();else if(Sc(e,a),t&4&&-1<yf.indexOf(e)){for(;i!==null;){var s=wa(i);if(s!==null&&Yu(s),s=wo(e,t,r,a),s===null&&Ls(e,t,a,ki,r),s===i)break;i=s}i!==null&&a.stopPropagation()}else Ls(e,t,a,null,r)}}var ki=null;function wo(e,t,r,a){if(ki=null,e=fl(a),e=vr(e),e!==null)if(t=Fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Iu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ki=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(df()){case gl:return 1;case Bu:return 4;case yi:case uf:return 16;case $u:return 536870912;default:return 16}default:return 16}}var Kt=null,vl=null,ai=null;function Ku(){if(ai)return ai;var e,t=vl,r=t.length,a,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(a=1;a<=o&&t[r-a]===i[s-a];a++);return ai=i.slice(e,1<a?1-a:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function Pc(){return!1}function Qe(e){function t(r,a,i,s,o){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:Pc,this.isPropagationStopped=Pc,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Qe(yn),va=ce({},yn,{view:0,detail:0}),Nf=Qe(va),Ns,Ss,Rn,Qi=ce({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Ns=e.screenX-Rn.screenX,Ss=e.screenY-Rn.screenY):Ss=Ns=0,Rn=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),Cc=Qe(Qi),Sf=ce({},Qi,{dataTransfer:0}),Ef=Qe(Sf),Pf=ce({},va,{relatedTarget:0}),Es=Qe(Pf),Cf=ce({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Qe(Cf),Tf=ce({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=Qe(Tf),Of=ce({},yn,{data:0}),zc=Qe(Of),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_f[e])?!!t[e]:!1}function kl(){return Ff}var If=ce({},va,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mf=Qe(If),Df=ce({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=Qe(Df),Uf=ce({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),Bf=Qe(Uf),$f=ce({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hf=Qe($f),Vf=ce({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yf=Qe(Vf),qf=[9,13,27,32],jl=Ft&&"CompositionEvent"in window,Vn=null;Ft&&"documentMode"in document&&(Vn=document.documentMode);var Wf=Ft&&"TextEvent"in window&&!Vn,Ju=Ft&&(!jl||Vn&&8<Vn&&11>=Vn),Rc=" ",Oc=!1;function Zu(e,t){switch(e){case"keyup":return qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Gf(e,t){switch(e){case"compositionend":return ep(t);case"keypress":return t.which!==32?null:(Oc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Oc?null:e;default:return null}}function Xf(e,t){if(Vr)return e==="compositionend"||!jl&&Zu(e,t)?(e=Ku(),ai=vl=Kt=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qf[e.type]:t==="textarea"}function tp(e,t,r,a){Ou(a),t=ji(t,"onChange"),0<t.length&&(r=new wl("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Yn=null,na=null;function Kf(e){pp(e,0)}function Ki(e){var t=Wr(e);if(Su(t))return e}function Jf(e,t){if(e==="change")return t}var rp=!1;if(Ft){var Ps;if(Ft){var Cs="oninput"in document;if(!Cs){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),Cs=typeof Ac.oninput=="function"}Ps=Cs}else Ps=!1;rp=Ps&&(!document.documentMode||9<document.documentMode)}function _c(){Yn&&(Yn.detachEvent("onpropertychange",np),na=Yn=null)}function np(e){if(e.propertyName==="value"&&Ki(na)){var t=[];tp(t,na,e,fl(e)),Fu(Kf,t)}}function Zf(e,t,r){e==="focusin"?(_c(),Yn=t,na=r,Yn.attachEvent("onpropertychange",np)):e==="focusout"&&_c()}function eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(na)}function tg(e,t){if(e==="click")return Ki(t)}function rg(e,t){if(e==="input"||e==="change")return Ki(t)}function ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:ng;function aa(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!ro.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var r=Fc(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fc(r)}}function ap(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ap(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ip(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=gi(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ag(e){var t=ip(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ap(r.ownerDocument.documentElement,r)){if(a!==null&&Nl(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=Ic(r,s);var o=Ic(r,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ig=Ft&&"documentMode"in document&&11>=document.documentMode,Yr=null,ko=null,qn=null,jo=!1;function Mc(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jo||Yr==null||Yr!==gi(a)||(a=Yr,"selectionStart"in a&&Nl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qn&&aa(qn,a)||(qn=a,a=ji(ko,"onSelect"),0<a.length&&(t=new wl("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Yr)))}function Ia(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},zs={},sp={};Ft&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function Ji(e){if(zs[e])return zs[e];if(!qr[e])return e;var t=qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sp)return zs[e]=t[r];return e}var op=Ji("animationend"),lp=Ji("animationiteration"),cp=Ji("animationstart"),dp=Ji("transitionend"),up=new Map,Dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){up.set(e,t),_r(t,[e])}for(var Ts=0;Ts<Dc.length;Ts++){var Rs=Dc[Ts],sg=Rs.toLowerCase(),og=Rs[0].toUpperCase()+Rs.slice(1);ur(sg,"on"+og)}ur(op,"onAnimationEnd");ur(lp,"onAnimationIteration");ur(cp,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(dp,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Uc(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,sf(a,t,void 0,e),e.currentTarget=null}function pp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var c=a[o],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==s&&i.isPropagationStopped())break e;Uc(i,c,d),s=l}else for(o=0;o<a.length;o++){if(c=a[o],l=c.instance,d=c.currentTarget,c=c.listener,l!==s&&i.isPropagationStopped())break e;Uc(i,c,d),s=l}}}if(bi)throw e=bo,bi=!1,bo=null,e}function ne(e,t){var r=t[Co];r===void 0&&(r=t[Co]=new Set);var a=e+"__bubble";r.has(a)||(mp(t,e,2,!1),r.add(a))}function Os(e,t,r){var a=0;t&&(a|=4),mp(r,e,a,t)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[Ma]){e[Ma]=!0,vu.forEach(function(r){r!=="selectionchange"&&(lg.has(r)||Os(r,!1,e),Os(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ma]||(t[Ma]=!0,Os("selectionchange",!1,t))}}function mp(e,t,r,a){switch(Qu(t)){case 1:var i=kf;break;case 4:i=jf;break;default:i=yl}r=i.bind(null,t,r,e),i=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ls(e,t,r,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;c!==null;){if(o=vr(c),o===null)return;if(l=o.tag,l===5||l===6){a=s=o;continue e}c=c.parentNode}}a=a.return}Fu(function(){var d=s,u=fl(r),p=[];e:{var f=up.get(e);if(f!==void 0){var b=wl,x=e;switch(e){case"keypress":if(ii(r)===0)break e;case"keydown":case"keyup":b=Mf;break;case"focusin":x="focus",b=Es;break;case"focusout":x="blur",b=Es;break;case"beforeblur":case"afterblur":b=Es;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Bf;break;case op:case lp:case cp:b=zf;break;case dp:b=Hf;break;case"scroll":b=Nf;break;case"wheel":b=Yf;break;case"copy":case"cut":case"paste":b=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Tc}var w=(t&4)!==0,v=!w&&e==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var h=d,g;h!==null;){g=h;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=Zn(h,m),y!=null&&w.push(sa(h,y,g)))),v)break;h=h.return}0<w.length&&(f=new b(f,x,null,r,u),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&r!==fo&&(x=r.relatedTarget||r.fromElement)&&(vr(x)||x[It]))break e;if((b||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,b?(x=r.relatedTarget||r.toElement,b=d,x=x?vr(x):null,x!==null&&(v=Fr(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=d),b!==x)){if(w=Cc,y="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Tc,y="onPointerLeave",m="onPointerEnter",h="pointer"),v=b==null?f:Wr(b),g=x==null?f:Wr(x),f=new w(y,h+"leave",b,r,u),f.target=v,f.relatedTarget=g,y=null,vr(u)===d&&(w=new w(m,h+"enter",x,r,u),w.target=g,w.relatedTarget=v,y=w),v=y,b&&x)t:{for(w=b,m=x,h=0,g=w;g;g=Mr(g))h++;for(g=0,y=m;y;y=Mr(y))g++;for(;0<h-g;)w=Mr(w),h--;for(;0<g-h;)m=Mr(m),g--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Mr(w),m=Mr(m)}w=null}else w=null;b!==null&&Bc(p,f,b,w,!1),x!==null&&v!==null&&Bc(p,v,x,w,!0)}}e:{if(f=d?Wr(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var S=Jf;else if(Lc(f))if(rp)S=rg;else{S=eg;var N=Zf}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=tg);if(S&&(S=S(e,d))){tp(p,S,r,u);break e}N&&N(e,f,d),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&co(f,"number",f.value)}switch(N=d?Wr(d):window,e){case"focusin":(Lc(N)||N.contentEditable==="true")&&(Yr=N,ko=d,qn=null);break;case"focusout":qn=ko=Yr=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,Mc(p,r,u);break;case"selectionchange":if(ig)break;case"keydown":case"keyup":Mc(p,r,u)}var C;if(jl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vr?Zu(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Ju&&r.locale!=="ko"&&(Vr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vr&&(C=Ku()):(Kt=u,vl="value"in Kt?Kt.value:Kt.textContent,Vr=!0)),N=ji(d,P),0<N.length&&(P=new zc(P,e,null,r,u),p.push({event:P,listeners:N}),C?P.data=C:(C=ep(r),C!==null&&(P.data=C)))),(C=Wf?Gf(e,r):Xf(e,r))&&(d=ji(d,"onBeforeInput"),0<d.length&&(u=new zc("onBeforeInput","beforeinput",null,r,u),p.push({event:u,listeners:d}),u.data=C))}pp(p,t)})}function sa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ji(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zn(e,r),s!=null&&a.unshift(sa(e,s,i)),s=Zn(e,t),s!=null&&a.push(sa(e,s,i))),e=e.return}return a}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,t,r,a,i){for(var s=t._reactName,o=[];r!==null&&r!==a;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===a)break;c.tag===5&&d!==null&&(c=d,i?(l=Zn(r,s),l!=null&&o.unshift(sa(r,l,c))):i||(l=Zn(r,s),l!=null&&o.push(sa(r,l,c)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function $c(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(dg,"")}function Da(e,t,r){if(t=$c(t),$c(e)!==t&&r)throw Error(T(425))}function Ni(){}var No=null,So=null;function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Po=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(mg)}:Po;function mg(e){setTimeout(function(){throw e})}function As(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),ra(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);ra(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),jt="__reactFiber$"+vn,oa="__reactProps$"+vn,It="__reactContainer$"+vn,Co="__reactEvents$"+vn,hg="__reactListeners$"+vn,fg="__reactHandles$"+vn;function vr(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[It]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Vc(e);e!==null;){if(r=e[jt])return r;e=Vc(e)}return t}e=r,r=e.parentNode}return null}function wa(e){return e=e[jt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Zi(e){return e[oa]||null}var zo=[],Gr=-1;function pr(e){return{current:e}}function ae(e){0>Gr||(e.current=zo[Gr],zo[Gr]=null,Gr--)}function re(e,t){Gr++,zo[Gr]=e.current,e.current=t}var dr={},Oe=pr(dr),Ue=pr(!1),Pr=dr;function cn(e,t){var r=e.type.contextTypes;if(!r)return dr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function Si(){ae(Ue),ae(Oe)}function Yc(e,t,r){if(Oe.current!==dr)throw Error(T(168));re(Oe,t),re(Ue,r)}function hp(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(T(108,Jh(e)||"Unknown",i));return ce({},r,a)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Pr=Oe.current,re(Oe,e),re(Ue,Ue.current),!0}function qc(e,t,r){var a=e.stateNode;if(!a)throw Error(T(169));r?(e=hp(e,t,Pr),a.__reactInternalMemoizedMergedChildContext=e,ae(Ue),ae(Oe),re(Oe,e)):ae(Ue),re(Ue,r)}var Ot=null,es=!1,_s=!1;function fp(e){Ot===null?Ot=[e]:Ot.push(e)}function gg(e){es=!0,fp(e)}function mr(){if(!_s&&Ot!==null){_s=!0;var e=0,t=Z;try{var r=Ot;for(Z=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Ot=null,es=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),Uu(gl,mr),i}finally{Z=t,_s=!1}}return null}var Xr=[],Qr=0,Pi=null,Ci=0,Ze=[],et=0,Cr=null,Lt=1,At="";function xr(e,t){Xr[Qr++]=Ci,Xr[Qr++]=Pi,Pi=e,Ci=t}function gp(e,t,r){Ze[et++]=Lt,Ze[et++]=At,Ze[et++]=Cr,Cr=e;var a=Lt;e=At;var i=32-mt(a)-1;a&=~(1<<i),r+=1;var s=32-mt(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Lt=1<<32-mt(t)+i|r<<i|a,At=s+e}else Lt=1<<s|r<<i|a,At=e}function Sl(e){e.return!==null&&(xr(e,1),gp(e,1,0))}function El(e){for(;e===Pi;)Pi=Xr[--Qr],Xr[Qr]=null,Ci=Xr[--Qr],Xr[Qr]=null;for(;e===Cr;)Cr=Ze[--et],Ze[et]=null,At=Ze[--et],Ze[et]=null,Lt=Ze[--et],Ze[et]=null}var We=null,qe=null,ie=!1,ut=null;function xp(e,t){var r=tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Wc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,qe=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Cr!==null?{id:Lt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,We=e,qe=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(ie){var t=qe;if(t){var r=t;if(!Wc(e,t)){if(To(e))throw Error(T(418));t=nr(r.nextSibling);var a=We;t&&Wc(e,t)?xp(a,r):(e.flags=e.flags&-4097|2,ie=!1,We=e)}}else{if(To(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,We=e}}}function Gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Ua(e){if(e!==We)return!1;if(!ie)return Gc(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eo(e.type,e.memoizedProps)),t&&(t=qe)){if(To(e))throw bp(),Error(T(418));for(;t;)xp(e,t),t=nr(t.nextSibling)}if(Gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){qe=nr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=We?nr(e.stateNode.nextSibling):null;return!0}function bp(){for(var e=qe;e;)e=nr(e.nextSibling)}function dn(){qe=We=null,ie=!1}function Pl(e){ut===null?ut=[e]:ut.push(e)}var xg=Ut.ReactCurrentBatchConfig;function On(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var a=r.stateNode}if(!a)throw Error(T(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var c=i.refs;o===null?delete c[s]:c[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xc(e){var t=e._init;return t(e._payload)}function yp(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function r(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function a(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=or(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,h,g,y){return h===null||h.tag!==6?(h=$s(g,m.mode,y),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,y){var S=g.type;return S===Hr?u(m,h,g.props.children,y,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&Xc(S)===h.type)?(y=i(h,g.props),y.ref=On(m,h,g),y.return=m,y):(y=pi(g.type,g.key,g.props,null,m.mode,y),y.ref=On(m,h,g),y.return=m,y)}function d(m,h,g,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Hs(g,m.mode,y),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,y,S){return h===null||h.tag!==7?(h=Sr(g,m.mode,y,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function p(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$s(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ta:return g=pi(h.type,h.key,h.props,null,m.mode,g),g.ref=On(m,null,h),g.return=m,g;case $r:return h=Hs(h,m.mode,g),h.return=m,h;case Wt:var y=h._init;return p(m,y(h._payload),g)}if(In(h)||Pn(h))return h=Sr(h,m.mode,g,null),h.return=m,h;Ba(m,h)}return null}function f(m,h,g,y){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:c(m,h,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return g.key===S?l(m,h,g,y):null;case $r:return g.key===S?d(m,h,g,y):null;case Wt:return S=g._init,f(m,h,S(g._payload),y)}if(In(g)||Pn(g))return S!==null?null:u(m,h,g,y,null);Ba(m,g)}return null}function b(m,h,g,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,c(h,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ta:return m=m.get(y.key===null?g:y.key)||null,l(h,m,y,S);case $r:return m=m.get(y.key===null?g:y.key)||null,d(h,m,y,S);case Wt:var N=y._init;return b(m,h,g,N(y._payload),S)}if(In(y)||Pn(y))return m=m.get(g)||null,u(h,m,y,S,null);Ba(h,y)}return null}function x(m,h,g,y){for(var S=null,N=null,C=h,P=h=0,U=null;C!==null&&P<g.length;P++){C.index>P?(U=C,C=null):U=C.sibling;var R=f(m,C,g[P],y);if(R===null){C===null&&(C=U);break}e&&C&&R.alternate===null&&t(m,C),h=s(R,h,P),N===null?S=R:N.sibling=R,N=R,C=U}if(P===g.length)return r(m,C),ie&&xr(m,P),S;if(C===null){for(;P<g.length;P++)C=p(m,g[P],y),C!==null&&(h=s(C,h,P),N===null?S=C:N.sibling=C,N=C);return ie&&xr(m,P),S}for(C=a(m,C);P<g.length;P++)U=b(C,m,P,g[P],y),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?P:U.key),h=s(U,h,P),N===null?S=U:N.sibling=U,N=U);return e&&C.forEach(function(D){return t(m,D)}),ie&&xr(m,P),S}function w(m,h,g,y){var S=Pn(g);if(typeof S!="function")throw Error(T(150));if(g=S.call(g),g==null)throw Error(T(151));for(var N=S=null,C=h,P=h=0,U=null,R=g.next();C!==null&&!R.done;P++,R=g.next()){C.index>P?(U=C,C=null):U=C.sibling;var D=f(m,C,R.value,y);if(D===null){C===null&&(C=U);break}e&&C&&D.alternate===null&&t(m,C),h=s(D,h,P),N===null?S=D:N.sibling=D,N=D,C=U}if(R.done)return r(m,C),ie&&xr(m,P),S;if(C===null){for(;!R.done;P++,R=g.next())R=p(m,R.value,y),R!==null&&(h=s(R,h,P),N===null?S=R:N.sibling=R,N=R);return ie&&xr(m,P),S}for(C=a(m,C);!R.done;P++,R=g.next())R=b(C,m,P,R.value,y),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?P:R.key),h=s(R,h,P),N===null?S=R:N.sibling=R,N=R);return e&&C.forEach(function(ee){return t(m,ee)}),ie&&xr(m,P),S}function v(m,h,g,y){if(typeof g=="object"&&g!==null&&g.type===Hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:e:{for(var S=g.key,N=h;N!==null;){if(N.key===S){if(S=g.type,S===Hr){if(N.tag===7){r(m,N.sibling),h=i(N,g.props.children),h.return=m,m=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wt&&Xc(S)===N.type){r(m,N.sibling),h=i(N,g.props),h.ref=On(m,N,g),h.return=m,m=h;break e}r(m,N);break}else t(m,N);N=N.sibling}g.type===Hr?(h=Sr(g.props.children,m.mode,y,g.key),h.return=m,m=h):(y=pi(g.type,g.key,g.props,null,m.mode,y),y.ref=On(m,h,g),y.return=m,m=y)}return o(m);case $r:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{r(m,h);break}else t(m,h);h=h.sibling}h=Hs(g,m.mode,y),h.return=m,m=h}return o(m);case Wt:return N=g._init,v(m,h,N(g._payload),y)}if(In(g))return x(m,h,g,y);if(Pn(g))return w(m,h,g,y);Ba(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(m,h.sibling),h=i(h,g),h.return=m,m=h):(r(m,h),h=$s(g,m.mode,y),h.return=m,m=h),o(m)):r(m,h)}return v}var un=yp(!0),vp=yp(!1),zi=pr(null),Ti=null,Kr=null,Cl=null;function zl(){Cl=Kr=Ti=null}function Tl(e){var t=zi.current;ae(zi),e._currentValue=t}function Oo(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function sn(e,t){Ti=e,Cl=Kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Cl!==e)if(e={context:e,memoizedValue:t,next:null},Kr===null){if(Ti===null)throw Error(T(308));Kr=e,Ti.dependencies={lanes:0,firstContext:e}}else Kr=Kr.next=e;return t}var wr=null;function Rl(e){wr===null?wr=[e]:wr.push(e)}function wp(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,Rl(t)):(r.next=i.next,i.next=r),t.interleaved=r,Mt(e,a)}function Mt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Gt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Q&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Mt(e,r)}return i=a.interleaved,i===null?(t.next=t,Rl(a)):(t.next=i.next,i.next=t),a.interleaved=t,Mt(e,r)}function si(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,xl(e,r)}}function Qc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ri(e,t,r,a){var i=e.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,d=l.next;l.next=null,o===null?s=d:o.next=d,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==o&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,u=d=l=null,c=s;do{var f=c.lane,b=c.eventTime;if((a&f)===f){u!==null&&(u=u.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,w=c;switch(f=t,b=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(b,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,f=typeof x=="function"?x.call(b,p,f):x,f==null)break e;p=ce({},p,f);break e;case 2:Gt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[c]:f.push(c))}else b={eventTime:b,lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=b,l=p):u=u.next=b,o|=f;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;f=c,c=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=p),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Tr|=o,e.lanes=o,e.memoizedState=p}}function Kc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(T(191,i));i.call(a)}}}var ka={},Et=pr(ka),la=pr(ka),ca=pr(ka);function kr(e){if(e===ka)throw Error(T(174));return e}function Ll(e,t){switch(re(ca,t),re(la,e),re(Et,ka),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=po(t,e)}ae(Et),re(Et,t)}function pn(){ae(Et),ae(la),ae(ca)}function jp(e){kr(ca.current);var t=kr(Et.current),r=po(t,e.type);t!==r&&(re(la,e),re(Et,r))}function Al(e){la.current===e&&(ae(Et),ae(la))}var se=pr(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=[];function _l(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var oi=Ut.ReactCurrentDispatcher,Is=Ut.ReactCurrentBatchConfig,zr=0,oe=null,fe=null,be=null,Li=!1,Wn=!1,da=0,bg=0;function Ee(){throw Error(T(321))}function Fl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gt(e[r],t[r]))return!1;return!0}function Il(e,t,r,a,i,s){if(zr=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?kg:jg,e=r(a,i),Wn){s=0;do{if(Wn=!1,da=0,25<=s)throw Error(T(301));s+=1,be=fe=null,t.updateQueue=null,oi.current=Ng,e=r(a,i)}while(Wn)}if(oi.current=Ai,t=fe!==null&&fe.next!==null,zr=0,be=fe=oe=null,Li=!1,t)throw Error(T(300));return e}function Ml(){var e=da!==0;return da=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?oe.memoizedState=be=e:be=be.next=e,be}function at(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=be===null?oe.memoizedState:be.next;if(t!==null)be=t,fe=e;else{if(e===null)throw Error(T(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},be===null?oe.memoizedState=be=e:be=be.next=e}return be}function ua(e,t){return typeof t=="function"?t(e):t}function Ms(e){var t=at(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var a=fe,i=a.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,a=a.baseState;var c=o=null,l=null,d=s;do{var u=d.lane;if((zr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=p,o=a):l=l.next=p,oe.lanes|=u,Tr|=u}d=d.next}while(d!==null&&d!==s);l===null?o=a:l.next=c,gt(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=l,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,Tr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ds(e){var t=at(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);gt(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,a]}function Np(){}function Sp(e,t){var r=oe,a=at(),i=t(),s=!gt(a.memoizedState,i);if(s&&(a.memoizedState=i,De=!0),a=a.queue,Dl(Cp.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,pa(9,Pp.bind(null,r,a,i,t),void 0,null),ye===null)throw Error(T(349));zr&30||Ep(r,t,i)}return i}function Ep(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pp(e,t,r,a){t.value=r,t.getSnapshot=a,zp(t)&&Tp(e)}function Cp(e,t,r){return r(function(){zp(t)&&Tp(e)})}function zp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gt(e,r)}catch{return!0}}function Tp(e){var t=Mt(e,1);t!==null&&ht(t,e,1,-1)}function Jc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=wg.bind(null,oe,e),[t.memoizedState,e]}function pa(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Rp(){return at().memoizedState}function li(e,t,r,a){var i=kt();oe.flags|=e,i.memoizedState=pa(1|t,r,void 0,a===void 0?null:a)}function ts(e,t,r,a){var i=at();a=a===void 0?null:a;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,a!==null&&Fl(a,o.deps)){i.memoizedState=pa(t,r,s,a);return}}oe.flags|=e,i.memoizedState=pa(1|t,r,s,a)}function Zc(e,t){return li(8390656,8,e,t)}function Dl(e,t){return ts(2048,8,e,t)}function Op(e,t){return ts(4,2,e,t)}function Lp(e,t){return ts(4,4,e,t)}function Ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,r){return r=r!=null?r.concat([e]):null,ts(4,4,Ap.bind(null,t,e),r)}function Ul(){}function Fp(e,t){var r=at();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Fl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Ip(e,t){var r=at();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Fl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Mp(e,t,r){return zr&21?(gt(r,t)||(r=Hu(),oe.lanes|=r,Tr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=r)}function yg(e,t){var r=Z;Z=r!==0&&4>r?r:4,e(!0);var a=Is.transition;Is.transition={};try{e(!1),t()}finally{Z=r,Is.transition=a}}function Dp(){return at().memoizedState}function vg(e,t,r){var a=sr(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Up(e))Bp(t,r);else if(r=wp(e,t,r,a),r!==null){var i=_e();ht(r,e,a,i),$p(r,t,a)}}function wg(e,t,r){var a=sr(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Up(e))Bp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,c=s(o,r);if(i.hasEagerState=!0,i.eagerState=c,gt(c,o)){var l=t.interleaved;l===null?(i.next=i,Rl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=wp(e,t,i,a),r!==null&&(i=_e(),ht(r,e,a,i),$p(r,t,a))}}function Up(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Bp(e,t){Wn=Li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function $p(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,xl(e,r)}}var Ai={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},kg={readContext:nt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Zc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,li(4194308,4,Ap.bind(null,t,e),r)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var r=kt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=kt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=vg.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:Ul,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=yg.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=oe,i=kt();if(ie){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),ye===null)throw Error(T(349));zr&30||Ep(a,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Zc(Cp.bind(null,a,s,e),[e]),a.flags|=2048,pa(9,Pp.bind(null,a,s,r,t),void 0,null),r},useId:function(){var e=kt(),t=ye.identifierPrefix;if(ie){var r=At,a=Lt;r=(a&~(1<<32-mt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=da++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jg={readContext:nt,useCallback:Fp,useContext:nt,useEffect:Dl,useImperativeHandle:_p,useInsertionEffect:Op,useLayoutEffect:Lp,useMemo:Ip,useReducer:Ms,useRef:Rp,useState:function(){return Ms(ua)},useDebugValue:Ul,useDeferredValue:function(e){var t=at();return Mp(t,fe.memoizedState,e)},useTransition:function(){var e=Ms(ua)[0],t=at().memoizedState;return[e,t]},useMutableSource:Np,useSyncExternalStore:Sp,useId:Dp,unstable_isNewReconciler:!1},Ng={readContext:nt,useCallback:Fp,useContext:nt,useEffect:Dl,useImperativeHandle:_p,useInsertionEffect:Op,useLayoutEffect:Lp,useMemo:Ip,useReducer:Ds,useRef:Rp,useState:function(){return Ds(ua)},useDebugValue:Ul,useDeferredValue:function(e){var t=at();return fe===null?t.memoizedState=e:Mp(t,fe.memoizedState,e)},useTransition:function(){var e=Ds(ua)[0],t=at().memoizedState;return[e,t]},useMutableSource:Np,useSyncExternalStore:Sp,useId:Dp,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Lo(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var rs={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=_e(),i=sr(e),s=_t(a,i);s.payload=t,r!=null&&(s.callback=r),t=ar(e,s,i),t!==null&&(ht(t,e,i,a),si(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=_e(),i=sr(e),s=_t(a,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=ar(e,s,i),t!==null&&(ht(t,e,i,a),si(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=_e(),a=sr(e),i=_t(r,a);i.tag=2,t!=null&&(i.callback=t),t=ar(e,i,a),t!==null&&(ht(t,e,a,r),si(t,e,a))}};function ed(e,t,r,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!aa(r,a)||!aa(i,s):!0}function Hp(e,t,r){var a=!1,i=dr,s=t.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=Be(t)?Pr:Oe.current,a=t.contextTypes,s=(a=a!=null)?cn(e,i):dr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rs,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function td(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function Ao(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ol(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=Be(t)?Pr:Oe.current,i.context=cn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Lo(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rs.enqueueReplaceState(i,i.state,null),Ri(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var r="",a=t;do r+=Kh(a),a=a.return;while(a);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Us(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function _o(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sg=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,t,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Fi||(Fi=!0,Yo=a),_o(e,t)},r}function Yp(e,t,r){r=_t(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){_o(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){_o(e,t),typeof a!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function rd(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Sg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=Dg.bind(null,e,t,r),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_t(-1,1),t.tag=2,ar(r,t,1))),r.lanes|=1),e)}var Eg=Ut.ReactCurrentOwner,De=!1;function Ae(e,t,r,a){t.child=e===null?vp(t,null,r,a):un(t,e.child,r,a)}function id(e,t,r,a,i){r=r.render;var s=t.ref;return sn(t,i),a=Il(e,t,r,a,s,i),r=Ml(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ie&&r&&Sl(t),t.flags|=1,Ae(e,t,a,i),t.child)}function sd(e,t,r,a,i){if(e===null){var s=r.type;return typeof s=="function"&&!Gl(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,qp(e,t,s,a,i)):(e=pi(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:aa,r(o,a)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=or(s,a),e.ref=t.ref,e.return=t,t.child=e}function qp(e,t,r,a,i){if(e!==null){var s=e.memoizedProps;if(aa(s,a)&&e.ref===t.ref)if(De=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Fo(e,t,r,a,i)}function Wp(e,t,r){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Zr,Ye),Ye|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Zr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:r,re(Zr,Ye),Ye|=a}else s!==null?(a=s.baseLanes|r,t.memoizedState=null):a=r,re(Zr,Ye),Ye|=a;return Ae(e,t,i,r),t.child}function Gp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,r,a,i){var s=Be(r)?Pr:Oe.current;return s=cn(t,s),sn(t,i),r=Il(e,t,r,a,s,i),a=Ml(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ie&&a&&Sl(t),t.flags|=1,Ae(e,t,r,i),t.child)}function od(e,t,r,a,i){if(Be(r)){var s=!0;Ei(t)}else s=!1;if(sn(t,i),t.stateNode===null)ci(e,t),Hp(t,r,a),Ao(t,r,a,i),a=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var l=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=nt(d):(d=Be(r)?Pr:Oe.current,d=cn(t,d));var u=r.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||l!==d)&&td(t,o,a,d),Gt=!1;var f=t.memoizedState;o.state=f,Ri(t,a,o,i),l=t.memoizedState,c!==a||f!==l||Ue.current||Gt?(typeof u=="function"&&(Lo(t,r,u,a),l=t.memoizedState),(c=Gt||ed(t,r,c,a,f,l,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),o.props=a,o.state=l,o.context=d,a=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,kp(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:ct(t.type,c),o.props=d,p=t.pendingProps,f=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Be(r)?Pr:Oe.current,l=cn(t,l));var b=r.getDerivedStateFromProps;(u=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==p||f!==l)&&td(t,o,a,l),Gt=!1,f=t.memoizedState,o.state=f,Ri(t,a,o,i);var x=t.memoizedState;c!==p||f!==x||Ue.current||Gt?(typeof b=="function"&&(Lo(t,r,b,a),x=t.memoizedState),(d=Gt||ed(t,r,d,a,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=x),o.props=a,o.state=x,o.context=l,a=d):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return Io(e,t,r,a,s,i)}function Io(e,t,r,a,i,s){Gp(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&qc(t,r,!1),Dt(e,t,s);a=t.stateNode,Eg.current=t;var c=o&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,s),t.child=un(t,null,c,s)):Ae(e,t,c,s),t.memoizedState=a.state,i&&qc(t,r,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Yc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yc(e,t.context,!1),Ll(e,t.containerInfo)}function ld(e,t,r,a,i){return dn(),Pl(i),t.flags|=256,Ae(e,t,r,a),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qp(e,t,r){var a=t.pendingProps,i=se.current,s=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(se,i&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=is(o,a,0,null),e=Sr(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Do(r),t.memoizedState=Mo,e):Bl(t,o));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Pg(e,t,o,a,c,i,r);if(s){s=a.fallback,o=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=or(i,l),a.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=or(c,s):(s=Sr(s,o,r,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?Do(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Mo,a}return s=e.child,e=s.sibling,a=or(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Bl(e,t){return t=is({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $a(e,t,r,a){return a!==null&&Pl(a),un(t,e.child,null,r),e=Bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pg(e,t,r,a,i,s,o){if(r)return t.flags&256?(t.flags&=-257,a=Us(Error(T(422))),$a(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=is({mode:"visible",children:a.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Do(o),t.memoizedState=Mo,s);if(!(t.mode&1))return $a(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var c=a.dgst;return a=c,s=Error(T(419)),a=Us(s,a,void 0),$a(e,t,o,a)}if(c=(o&e.childLanes)!==0,De||c){if(a=ye,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(e,i),ht(a,e,i,-1))}return Wl(),a=Us(Error(T(421))),$a(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ug.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qe=nr(i.nextSibling),We=t,ie=!0,ut=null,e!==null&&(Ze[et++]=Lt,Ze[et++]=At,Ze[et++]=Cr,Lt=e.id,At=e.overflow,Cr=t),t=Bl(t,a.children),t.flags|=4096,t)}function cd(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Oo(e.return,t,r)}function Bs(e,t,r,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=r,s.tailMode=i)}function Kp(e,t,r){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(Ae(e,t,a.children,r),a=se.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,r,t);else if(e.tag===19)cd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(re(se,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Oi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Bs(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Bs(t,!0,r,null,s);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=or(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=or(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Cg(e,t,r){switch(t.tag){case 3:Xp(t),dn();break;case 5:jp(t);break;case 1:Be(t.type)&&Ei(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;re(zi,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(re(se,se.current&1),t.flags|=128,null):r&t.child.childLanes?Qp(e,t,r):(re(se,se.current&1),e=Dt(e,t,r),e!==null?e.sibling:null);re(se,se.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return Kp(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(se,se.current),a)break;return null;case 22:case 23:return t.lanes=0,Wp(e,t,r)}return Dt(e,t,r)}var Jp,Uo,Zp,em;Jp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Uo=function(){};Zp=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,kr(Et.current);var s=null;switch(r){case"input":i=oo(e,i),a=oo(e,a),s=[];break;case"select":i=ce({},i,{value:void 0}),a=ce({},a,{value:void 0}),s=[];break;case"textarea":i=uo(e,i),a=uo(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ni)}mo(r,a);var o;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(o in c)c.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in a){var l=a[d];if(c=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(s||(s=[]),s.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(s=s||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ne("scroll",e),s||c===l||(s=[])):(s=s||[]).push(d,l))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};em=function(e,t,r,a){r!==a&&(t.flags|=4)};function Ln(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function zg(e,t,r){var a=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Be(t.type)&&Si(),Pe(t),null;case 3:return a=t.stateNode,pn(),ae(Ue),ae(Oe),_l(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Go(ut),ut=null))),Uo(e,t),Pe(t),null;case 5:Al(t);var i=kr(ca.current);if(r=t.type,e!==null&&t.stateNode!=null)Zp(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(T(166));return Pe(t),null}if(e=kr(Et.current),Ua(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[jt]=t,a[oa]=s,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",a),ne("close",a);break;case"iframe":case"object":case"embed":ne("load",a);break;case"video":case"audio":for(i=0;i<Dn.length;i++)ne(Dn[i],a);break;case"source":ne("error",a);break;case"img":case"image":case"link":ne("error",a),ne("load",a);break;case"details":ne("toggle",a);break;case"input":bc(a,s),ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},ne("invalid",a);break;case"textarea":vc(a,s),ne("invalid",a)}mo(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?a.textContent!==c&&(s.suppressHydrationWarning!==!0&&Da(a.textContent,c,e),i=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Da(a.textContent,c,e),i=["children",""+c]):Kn.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ne("scroll",a)}switch(r){case"input":Ra(a),yc(a,s,!0);break;case"textarea":Ra(a),wc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Ni)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(r,{is:a.is}):(e=o.createElement(r),r==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,r),e[jt]=t,e[oa]=a,Jp(e,t,!1,!1),t.stateNode=e;e:{switch(o=ho(r,a),r){case"dialog":ne("cancel",e),ne("close",e),i=a;break;case"iframe":case"object":case"embed":ne("load",e),i=a;break;case"video":case"audio":for(i=0;i<Dn.length;i++)ne(Dn[i],e);i=a;break;case"source":ne("error",e),i=a;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=a;break;case"details":ne("toggle",e),i=a;break;case"input":bc(e,a),i=oo(e,a),ne("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ce({},a,{value:void 0}),ne("invalid",e);break;case"textarea":vc(e,a),i=uo(e,a),ne("invalid",e);break;default:i=a}mo(r,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var l=c[s];s==="style"?Ru(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zu(e,l)):s==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Jn(e,l):typeof l=="number"&&Jn(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Kn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",e):l!=null&&ul(e,s,l,o))}switch(r){case"input":Ra(e),yc(e,a,!1);break;case"textarea":Ra(e),wc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+cr(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?tn(e,!!a.multiple,s,!1):a.defaultValue!=null&&tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ni)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)em(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(r=kr(ca.current),kr(Et.current),Ua(t)){if(a=t.stateNode,r=t.memoizedProps,a[jt]=t,(s=a.nodeValue!==r)&&(e=We,e!==null))switch(e.tag){case 3:Da(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Da(a.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[jt]=t,t.stateNode=a}return Pe(t),null;case 13:if(ae(se),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&qe!==null&&t.mode&1&&!(t.flags&128))bp(),dn(),t.flags|=98560,s=!1;else if(s=Ua(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(T(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[jt]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else ut!==null&&(Go(ut),ut=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):Wl())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return pn(),Uo(e,t),e===null&&ia(t.stateNode.containerInfo),Pe(t),null;case 10:return Tl(t.type._context),Pe(t),null;case 17:return Be(t.type)&&Si(),Pe(t),null;case 19:if(ae(se),s=t.memoizedState,s===null)return Pe(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)Ln(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Oi(e),o!==null){for(t.flags|=128,Ln(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)s=r,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>hn&&(t.flags|=128,a=!0,Ln(s,!1),t.lanes=4194304)}else{if(!a)if(e=Oi(o),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ln(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Pe(t),null}else 2*ue()-s.renderingStartTime>hn&&r!==1073741824&&(t.flags|=128,a=!0,Ln(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,r=se.current,re(se,a?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return ql(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Ye&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Tg(e,t){switch(El(t),t.tag){case 1:return Be(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),ae(Ue),ae(Oe),_l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(ae(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(se),null;case 4:return pn(),null;case 10:return Tl(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var Ha=!1,ze=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,_=null;function Jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){de(e,t,a)}else r.current=null}function Bo(e,t,r){try{r()}catch(a){de(e,t,a)}}var dd=!1;function Og(e,t){if(No=wi,e=ip(),Nl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,c=-1,l=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var b;p!==r||i!==0&&p.nodeType!==3||(c=o+i),p!==s||a!==0&&p.nodeType!==3||(l=o+a),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===r&&++d===i&&(c=o),f===s&&++u===a&&(l=o),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(So={focusedElem:e,selectionRange:r},wi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,v=x.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:ct(t.type,w),v);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(y){de(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=dd,dd=!1,x}function Gn(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bo(t,r,s)}i=i.next}while(i!==a)}}function ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function $o(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function tm(e){var t=e.alternate;t!==null&&(e.alternate=null,tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[oa],delete t[Co],delete t[hg],delete t[fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ni));else if(a!==4&&(e=e.child,e!==null))for(Ho(e,t,r),e=e.sibling;e!==null;)Ho(e,t,r),e=e.sibling}function Vo(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Vo(e,t,r),e=e.sibling;e!==null;)Vo(e,t,r),e=e.sibling}var ve=null,dt=!1;function Vt(e,t,r){for(r=r.child;r!==null;)nm(e,t,r),r=r.sibling}function nm(e,t,r){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Xi,r)}catch{}switch(r.tag){case 5:ze||Jr(r,t);case 6:var a=ve,i=dt;ve=null,Vt(e,t,r),ve=a,dt=i,ve!==null&&(dt?(e=ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ve.removeChild(r.stateNode));break;case 18:ve!==null&&(dt?(e=ve,r=r.stateNode,e.nodeType===8?As(e.parentNode,r):e.nodeType===1&&As(e,r),ra(e)):As(ve,r.stateNode));break;case 4:a=ve,i=dt,ve=r.stateNode.containerInfo,dt=!0,Vt(e,t,r),ve=a,dt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bo(r,t,o),i=i.next}while(i!==a)}Vt(e,t,r);break;case 1:if(!ze&&(Jr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(c){de(r,t,c)}Vt(e,t,r);break;case 21:Vt(e,t,r);break;case 22:r.mode&1?(ze=(a=ze)||r.memoizedState!==null,Vt(e,t,r),ze=a):Vt(e,t,r);break;default:Vt(e,t,r)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Rg),t.forEach(function(a){var i=Bg.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function st(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var s=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ve=c.stateNode,dt=!1;break e;case 3:ve=c.stateNode.containerInfo,dt=!0;break e;case 4:ve=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(ve===null)throw Error(T(160));nm(s,o,i),ve=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){de(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)am(t,e),t=t.sibling}function am(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),wt(e),a&4){try{Gn(3,e,e.return),ns(3,e)}catch(w){de(e,e.return,w)}try{Gn(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:st(t,e),wt(e),a&512&&r!==null&&Jr(r,r.return);break;case 5:if(st(t,e),wt(e),a&512&&r!==null&&Jr(r,r.return),e.flags&32){var i=e.stateNode;try{Jn(i,"")}catch(w){de(e,e.return,w)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Eu(i,s),ho(c,o);var d=ho(c,s);for(o=0;o<l.length;o+=2){var u=l[o],p=l[o+1];u==="style"?Ru(i,p):u==="dangerouslySetInnerHTML"?zu(i,p):u==="children"?Jn(i,p):ul(i,u,p,d)}switch(c){case"input":lo(i,s);break;case"textarea":Pu(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?tn(i,!!s.multiple,b,!1):f!==!!s.multiple&&(s.defaultValue!=null?tn(i,!!s.multiple,s.defaultValue,!0):tn(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(w){de(e,e.return,w)}}break;case 6:if(st(t,e),wt(e),a&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){de(e,e.return,w)}}break;case 3:if(st(t,e),wt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{ra(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:st(t,e),wt(e);break;case 13:st(t,e),wt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vl=ue())),a&4&&pd(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(d=ze)||u,st(t,e),ze=d):st(t,e),wt(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(_=e,u=e.child;u!==null;){for(p=_=u;_!==null;){switch(f=_,b=f.child,f.tag){case 0:case 11:case 14:case 15:Gn(4,f,f.return);break;case 1:Jr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){a=f,r=f.return;try{t=a,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){de(a,r,w)}}break;case 5:Jr(f,f.return);break;case 22:if(f.memoizedState!==null){hd(p);continue}}b!==null?(b.return=f,_=b):hd(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Tu("display",o))}catch(w){de(e,e.return,w)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){de(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:st(t,e),wt(e),a&4&&pd(e);break;case 21:break;default:st(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(rm(r)){var a=r;break e}r=r.return}throw Error(T(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Jn(i,""),a.flags&=-33);var s=ud(e);Vo(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,c=ud(e);Ho(e,c,o);break;default:throw Error(T(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lg(e,t,r){_=e,im(e)}function im(e,t,r){for(var a=(e.mode&1)!==0;_!==null;){var i=_,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Ha;if(!o){var c=i.alternate,l=c!==null&&c.memoizedState!==null||ze;c=Ha;var d=ze;if(Ha=o,(ze=l)&&!d)for(_=i;_!==null;)o=_,l=o.child,o.tag===22&&o.memoizedState!==null?fd(i):l!==null?(l.return=o,_=l):fd(i);for(;s!==null;)_=s,im(s),s=s.sibling;_=i,Ha=c,ze=d}md(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,_=s):md(e)}}function md(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||ns(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!ze)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:ct(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Kc(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Kc(t,o,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ze||t.flags&512&&$o(t)}catch(f){de(t,t.return,f)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function hd(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function fd(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(l){de(t,r,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(l){de(t,i,l)}}var s=t.return;try{$o(t)}catch(l){de(t,s,l)}break;case 5:var o=t.return;try{$o(t)}catch(l){de(t,o,l)}}}catch(l){de(t,t.return,l)}if(t===e){_=null;break}var c=t.sibling;if(c!==null){c.return=t.return,_=c;break}_=t.return}}var Ag=Math.ceil,_i=Ut.ReactCurrentDispatcher,$l=Ut.ReactCurrentOwner,rt=Ut.ReactCurrentBatchConfig,Q=0,ye=null,me=null,je=0,Ye=0,Zr=pr(0),ge=0,ma=null,Tr=0,as=0,Hl=0,Xn=null,Me=null,Vl=0,hn=1/0,Rt=null,Fi=!1,Yo=null,ir=null,Va=!1,Jt=null,Ii=0,Qn=0,qo=null,di=-1,ui=0;function _e(){return Q&6?ue():di!==-1?di:di=ue()}function sr(e){return e.mode&1?Q&2&&je!==0?je&-je:xg.transition!==null?(ui===0&&(ui=Hu()),ui):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function ht(e,t,r,a){if(50<Qn)throw Qn=0,qo=null,Error(T(185));ya(e,r,a),(!(Q&2)||e!==ye)&&(e===ye&&(!(Q&2)&&(as|=r),ge===4&&Qt(e,je)),$e(e,a),r===1&&Q===0&&!(t.mode&1)&&(hn=ue()+500,es&&mr()))}function $e(e,t){var r=e.callbackNode;xf(e,t);var a=vi(e,e===ye?je:0);if(a===0)r!==null&&Nc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Nc(r),t===1)e.tag===0?gg(gd.bind(null,e)):fp(gd.bind(null,e)),pg(function(){!(Q&6)&&mr()}),r=null;else{switch(Vu(a)){case 1:r=gl;break;case 4:r=Bu;break;case 16:r=yi;break;case 536870912:r=$u;break;default:r=yi}r=mm(r,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function sm(e,t){if(di=-1,ui=0,Q&6)throw Error(T(327));var r=e.callbackNode;if(on()&&e.callbackNode!==r)return null;var a=vi(e,e===ye?je:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Mi(e,a);else{t=a;var i=Q;Q|=2;var s=lm();(ye!==e||je!==t)&&(Rt=null,hn=ue()+500,Nr(e,t));do try{Ig();break}catch(c){om(e,c)}while(!0);zl(),_i.current=s,Q=i,me!==null?t=0:(ye=null,je=0,t=ge)}if(t!==0){if(t===2&&(i=yo(e),i!==0&&(a=i,t=Wo(e,i))),t===1)throw r=ma,Nr(e,0),Qt(e,a),$e(e,ue()),r;if(t===6)Qt(e,a);else{if(i=e.current.alternate,!(a&30)&&!_g(i)&&(t=Mi(e,a),t===2&&(s=yo(e),s!==0&&(a=s,t=Wo(e,s))),t===1))throw r=ma,Nr(e,0),Qt(e,a),$e(e,ue()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(T(345));case 2:br(e,Me,Rt);break;case 3:if(Qt(e,a),(a&130023424)===a&&(t=Vl+500-ue(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Po(br.bind(null,e,Me,Rt),t);break}br(e,Me,Rt);break;case 4:if(Qt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-mt(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=ue()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Ag(a/1960))-a,10<a){e.timeoutHandle=Po(br.bind(null,e,Me,Rt),a);break}br(e,Me,Rt);break;case 5:br(e,Me,Rt);break;default:throw Error(T(329))}}}return $e(e,ue()),e.callbackNode===r?sm.bind(null,e):null}function Wo(e,t){var r=Xn;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=Me,Me=r,t!==null&&Go(t)),e}function Go(e){Me===null?Me=e:Me.push.apply(Me,e)}function _g(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Hl,t&=~as,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),a=1<<r;e[r]=-1,t&=~a}}function gd(e){if(Q&6)throw Error(T(327));on();var t=vi(e,0);if(!(t&1))return $e(e,ue()),null;var r=Mi(e,t);if(e.tag!==0&&r===2){var a=yo(e);a!==0&&(t=a,r=Wo(e,a))}if(r===1)throw r=ma,Nr(e,0),Qt(e,t),$e(e,ue()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,br(e,Me,Rt),$e(e,ue()),null}function Yl(e,t){var r=Q;Q|=1;try{return e(t)}finally{Q=r,Q===0&&(hn=ue()+500,es&&mr())}}function Rr(e){Jt!==null&&Jt.tag===0&&!(Q&6)&&on();var t=Q;Q|=1;var r=rt.transition,a=Z;try{if(rt.transition=null,Z=1,e)return e()}finally{Z=a,rt.transition=r,Q=t,!(Q&6)&&mr()}}function ql(){Ye=Zr.current,ae(Zr)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ug(r)),me!==null)for(r=me.return;r!==null;){var a=r;switch(El(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Si();break;case 3:pn(),ae(Ue),ae(Oe),_l();break;case 5:Al(a);break;case 4:pn();break;case 13:ae(se);break;case 19:ae(se);break;case 10:Tl(a.type._context);break;case 22:case 23:ql()}r=r.return}if(ye=e,me=e=or(e.current,null),je=Ye=t,ge=0,ma=null,Hl=as=Tr=0,Me=Xn=null,wr!==null){for(t=0;t<wr.length;t++)if(r=wr[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}r.pending=a}wr=null}return e}function om(e,t){do{var r=me;try{if(zl(),oi.current=Ai,Li){for(var a=oe.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Li=!1}if(zr=0,be=fe=oe=null,Wn=!1,da=0,$l.current=null,r===null||r.return===null){ge=1,ma=t,me=null;break}e:{var s=e,o=r.return,c=r,l=t;if(t=je,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=c,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=nd(o);if(b!==null){b.flags&=-257,ad(b,o,c,s,t),b.mode&1&&rd(s,d,t),t=b,l=d;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if(!(t&1)){rd(s,d,t),Wl();break e}l=Error(T(426))}}else if(ie&&c.mode&1){var v=nd(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),ad(v,o,c,s,t),Pl(mn(l,c));break e}}s=l=mn(l,c),ge!==4&&(ge=2),Xn===null?Xn=[s]:Xn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Vp(s,l,t);Qc(s,m);break e;case 1:c=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Yp(s,c,t);Qc(s,y);break e}}s=s.return}while(s!==null)}dm(r)}catch(S){t=S,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function lm(){var e=_i.current;return _i.current=Ai,e===null?Ai:e}function Wl(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!(Tr&268435455)&&!(as&268435455)||Qt(ye,je)}function Mi(e,t){var r=Q;Q|=2;var a=lm();(ye!==e||je!==t)&&(Rt=null,Nr(e,t));do try{Fg();break}catch(i){om(e,i)}while(!0);if(zl(),Q=r,_i.current=a,me!==null)throw Error(T(261));return ye=null,je=0,ge}function Fg(){for(;me!==null;)cm(me)}function Ig(){for(;me!==null&&!lf();)cm(me)}function cm(e){var t=pm(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?dm(e):me=t,$l.current=null}function dm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Tg(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}else if(r=zg(r,t,Ye),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function br(e,t,r){var a=Z,i=rt.transition;try{rt.transition=null,Z=1,Mg(e,t,r,a)}finally{rt.transition=i,Z=a}return null}function Mg(e,t,r,a){do on();while(Jt!==null);if(Q&6)throw Error(T(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(bf(e,s),e===ye&&(me=ye=null,je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Va||(Va=!0,mm(yi,function(){return on(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=Z;Z=1;var c=Q;Q|=4,$l.current=null,Og(e,r),am(r,e),ag(So),wi=!!No,So=No=null,e.current=r,Lg(r),cf(),Q=c,Z=o,rt.transition=s}else e.current=r;if(Va&&(Va=!1,Jt=e,Ii=i),s=e.pendingLanes,s===0&&(ir=null),pf(r.stateNode),$e(e,ue()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Fi)throw Fi=!1,e=Yo,Yo=null,e;return Ii&1&&e.tag!==0&&on(),s=e.pendingLanes,s&1?e===qo?Qn++:(Qn=0,qo=e):Qn=0,mr(),null}function on(){if(Jt!==null){var e=Vu(Ii),t=rt.transition,r=Z;try{if(rt.transition=null,Z=16>e?16:e,Jt===null)var a=!1;else{if(e=Jt,Jt=null,Ii=0,Q&6)throw Error(T(331));var i=Q;for(Q|=4,_=e.current;_!==null;){var s=_,o=s.child;if(_.flags&16){var c=s.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(_=d;_!==null;){var u=_;switch(u.tag){case 0:case 11:case 15:Gn(8,u,s)}var p=u.child;if(p!==null)p.return=u,_=p;else for(;_!==null;){u=_;var f=u.sibling,b=u.return;if(tm(u),u===d){_=null;break}if(f!==null){f.return=b,_=f;break}_=b}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}_=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_=o;else e:for(;_!==null;){if(s=_,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gn(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,_=m;break e}_=s.return}}var h=e.current;for(_=h;_!==null;){o=_;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,_=g;else e:for(o=h;_!==null;){if(c=_,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ns(9,c)}}catch(S){de(c,c.return,S)}if(c===o){_=null;break e}var y=c.sibling;if(y!==null){y.return=c.return,_=y;break e}_=c.return}}if(Q=i,mr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Xi,e)}catch{}a=!0}return a}finally{Z=r,rt.transition=t}}return!1}function xd(e,t,r){t=mn(r,t),t=Vp(e,t,1),e=ar(e,t,1),t=_e(),e!==null&&(ya(e,1,t),$e(e,t))}function de(e,t,r){if(e.tag===3)xd(e,e,r);else for(;t!==null;){if(t.tag===3){xd(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ir===null||!ir.has(a))){e=mn(r,e),e=Yp(t,e,1),t=ar(t,e,1),e=_e(),t!==null&&(ya(t,1,e),$e(t,e));break}}t=t.return}}function Dg(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&r,ye===e&&(je&r)===r&&(ge===4||ge===3&&(je&130023424)===je&&500>ue()-Vl?Nr(e,0):Hl|=r),$e(e,t)}function um(e,t){t===0&&(e.mode&1?(t=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):t=1);var r=_e();e=Mt(e,t),e!==null&&(ya(e,t,r),$e(e,r))}function Ug(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),um(e,r)}function Bg(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(T(314))}a!==null&&a.delete(t),um(e,r)}var pm;pm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)De=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return De=!1,Cg(e,t,r);De=!!(e.flags&131072)}else De=!1,ie&&t.flags&1048576&&gp(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ci(e,t),e=t.pendingProps;var i=cn(t,Oe.current);sn(t,r),i=Il(null,t,a,e,i,r);var s=Ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(a)?(s=!0,Ei(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ol(t),i.updater=rs,t.stateNode=i,i._reactInternals=t,Ao(t,a,e,r),t=Io(null,t,a,!0,s,r)):(t.tag=0,ie&&s&&Sl(t),Ae(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=Hg(a),e=ct(a,e),i){case 0:t=Fo(null,t,a,e,r);break e;case 1:t=od(null,t,a,e,r);break e;case 11:t=id(null,t,a,e,r);break e;case 14:t=sd(null,t,a,ct(a.type,e),r);break e}throw Error(T(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ct(a,i),Fo(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ct(a,i),od(e,t,a,i,r);case 3:e:{if(Xp(t),e===null)throw Error(T(387));a=t.pendingProps,s=t.memoizedState,i=s.element,kp(e,t),Ri(t,a,null,r);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=mn(Error(T(423)),t),t=ld(e,t,a,r,i);break e}else if(a!==i){i=mn(Error(T(424)),t),t=ld(e,t,a,r,i);break e}else for(qe=nr(t.stateNode.containerInfo.firstChild),We=t,ie=!0,ut=null,r=vp(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dn(),a===i){t=Dt(e,t,r);break e}Ae(e,t,a,r)}t=t.child}return t;case 5:return jp(t),e===null&&Ro(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Eo(a,i)?o=null:s!==null&&Eo(a,s)&&(t.flags|=32),Gp(e,t),Ae(e,t,o,r),t.child;case 6:return e===null&&Ro(t),null;case 13:return Qp(e,t,r);case 4:return Ll(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=un(t,null,a,r):Ae(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ct(a,i),id(e,t,a,i,r);case 7:return Ae(e,t,t.pendingProps,r),t.child;case 8:return Ae(e,t,t.pendingProps.children,r),t.child;case 12:return Ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,re(zi,a._currentValue),a._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Ue.current){t=Dt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var l=c.firstContext;l!==null;){if(l.context===a){if(s.tag===1){l=_t(-1,r&-r),l.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Oo(s.return,r,t),c.lanes|=r;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Oo(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,sn(t,r),i=nt(i),a=a(i),t.flags|=1,Ae(e,t,a,r),t.child;case 14:return a=t.type,i=ct(a,t.pendingProps),i=ct(a.type,i),sd(e,t,a,i,r);case 15:return qp(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ct(a,i),ci(e,t),t.tag=1,Be(a)?(e=!0,Ei(t)):e=!1,sn(t,r),Hp(t,a,i),Ao(t,a,i,r),Io(null,t,a,!0,e,r);case 19:return Kp(e,t,r);case 22:return Wp(e,t,r)}throw Error(T(156,t.tag))};function mm(e,t){return Uu(e,t)}function $g(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,r,a){return new $g(e,t,r,a)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hg(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===hl)return 14}return 2}function or(e,t){var r=e.alternate;return r===null?(r=tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function pi(e,t,r,a,i,s){var o=2;if(a=e,typeof e=="function")Gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hr:return Sr(r.children,i,s,t);case pl:o=8,i|=8;break;case no:return e=tt(12,r,t,i|2),e.elementType=no,e.lanes=s,e;case ao:return e=tt(13,r,t,i),e.elementType=ao,e.lanes=s,e;case io:return e=tt(19,r,t,i),e.elementType=io,e.lanes=s,e;case ju:return is(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wu:o=10;break e;case ku:o=9;break e;case ml:o=11;break e;case hl:o=14;break e;case Wt:o=16,a=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=tt(o,r,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Sr(e,t,r,a){return e=tt(7,e,a,t),e.lanes=r,e}function is(e,t,r,a){return e=tt(22,e,a,t),e.elementType=ju,e.lanes=r,e.stateNode={isHidden:!1},e}function $s(e,t,r){return e=tt(6,e,null,t),e.lanes=r,e}function Hs(e,t,r){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vg(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xl(e,t,r,a,i,s,o,c,l){return e=new Vg(e,t,r,c,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(s),e}function Yg(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function hm(e){if(!e)return dr;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(Be(r))return hp(e,r,t)}return t}function fm(e,t,r,a,i,s,o,c,l){return e=Xl(r,a,!0,e,i,s,o,c,l),e.context=hm(null),r=e.current,a=_e(),i=sr(r),s=_t(a,i),s.callback=t??null,ar(r,s,i),e.current.lanes=i,ya(e,i,a),$e(e,a),e}function ss(e,t,r,a){var i=t.current,s=_e(),o=sr(i);return r=hm(r),t.context===null?t.context=r:t.pendingContext=r,t=_t(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ar(i,t,o),e!==null&&(ht(e,i,o,s),si(e,i,o)),o}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ql(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function qg(){return null}var gm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kl(e){this._internalRoot=e}os.prototype.render=Kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ss(e,t,null,null)};os.prototype.unmount=Kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){ss(null,e,null,null)}),t[It]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xt.length&&t!==0&&t<Xt[r].priority;r++);Xt.splice(r,0,e),r===0&&Xu(e)}};function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function Wg(e,t,r,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var d=Di(o);s.call(d)}}var o=fm(t,a,e,0,null,!1,!1,"",yd);return e._reactRootContainer=o,e[It]=o.current,ia(e.nodeType===8?e.parentNode:e),Rr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var c=a;a=function(){var d=Di(l);c.call(d)}}var l=Xl(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=l,e[It]=l.current,ia(e.nodeType===8?e.parentNode:e),Rr(function(){ss(t,l,r,a)}),l}function cs(e,t,r,a,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var c=i;i=function(){var l=Di(o);c.call(l)}}ss(t,o,e,i)}else o=Wg(r,t,e,i,a);return Di(o)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mn(t.pendingLanes);r!==0&&(xl(t,r|1),$e(t,ue()),!(Q&6)&&(hn=ue()+500,mr()))}break;case 13:Rr(function(){var a=Mt(e,1);if(a!==null){var i=_e();ht(a,e,1,i)}}),Ql(e,1)}};bl=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var r=_e();ht(t,e,134217728,r)}Ql(e,134217728)}};qu=function(e){if(e.tag===13){var t=sr(e),r=Mt(e,t);if(r!==null){var a=_e();ht(r,e,t,a)}Ql(e,t)}};Wu=function(){return Z};Gu=function(e,t){var r=Z;try{return Z=e,t()}finally{Z=r}};go=function(e,t,r){switch(t){case"input":if(lo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=Zi(a);if(!i)throw Error(T(90));Su(a),lo(a,i)}}}break;case"textarea":Pu(e,r);break;case"select":t=r.value,t!=null&&tn(e,!!r.multiple,t,!1)}};Au=Yl;_u=Rr;var Gg={usingClientEntryPoint:!1,Events:[wa,Wr,Zi,Ou,Lu,Yl]},An={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xg={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Xi=Ya.inject(Xg),St=Ya}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gg;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(t))throw Error(T(200));return Yg(e,t,null,r)};Xe.createRoot=function(e,t){if(!Jl(e))throw Error(T(299));var r=!1,a="",i=gm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xl(e,1,!1,null,null,r,!1,a,i),e[It]=t.current,ia(e.nodeType===8?e.parentNode:e),new Kl(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Rr(e)};Xe.hydrate=function(e,t,r){if(!ls(t))throw Error(T(200));return cs(null,e,t,!0,r)};Xe.hydrateRoot=function(e,t,r){if(!Jl(e))throw Error(T(405));var a=r!=null&&r.hydratedSources||null,i=!1,s="",o=gm;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=fm(t,null,e,1,r??null,i,!1,s,o),e[It]=t.current,ia(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new os(t)};Xe.render=function(e,t,r){if(!ls(t))throw Error(T(200));return cs(null,e,t,!1,r)};Xe.unmountComponentAtNode=function(e){if(!ls(e))throw Error(T(40));return e._reactRootContainer?(Rr(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Xe.unstable_batchedUpdates=Yl;Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!ls(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return cs(e,t,r,!1,a)};Xe.version="18.3.1-next-f1338f8080-20240426";function xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm)}catch(e){console.error(e)}}xm(),xu.exports=Xe;var Qg=xu.exports,vd=Qg;to.createRoot=vd.createRoot,to.hydrateRoot=vd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ha.apply(null,arguments)}var Zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zt||(Zt={}));const wd="popstate";function Kg(e){e===void 0&&(e={});function t(a,i){let{pathname:s,search:o,hash:c}=a.location;return Xo("",{pathname:s,search:o,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:Ui(i)}return Zg(t,r,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jg(){return Math.random().toString(36).substr(2,8)}function kd(e,t){return{usr:e.state,key:e.key,idx:t}}function Xo(e,t,r,a){return r===void 0&&(r=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wn(t):t,{state:r,key:t&&t.key||a||Jg()})}function Ui(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function wn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Zg(e,t,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,c=Zt.Pop,l=null,d=u();d==null&&(d=0,o.replaceState(ha({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){c=Zt.Pop;let v=u(),m=v==null?null:v-d;d=v,l&&l({action:c,location:w.location,delta:m})}function f(v,m){c=Zt.Push;let h=Xo(w.location,v,m);d=u()+1;let g=kd(h,d),y=w.createHref(h);try{o.pushState(g,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}s&&l&&l({action:c,location:w.location,delta:1})}function b(v,m){c=Zt.Replace;let h=Xo(w.location,v,m);d=u();let g=kd(h,d),y=w.createHref(h);o.replaceState(g,"",y),s&&l&&l({action:c,location:w.location,delta:0})}function x(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof v=="string"?v:Ui(v);return h=h.replace(/ $/,"%20"),le(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return c},get location(){return e(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(wd,p),l=v,()=>{i.removeEventListener(wd,p),l=null}},createHref(v){return t(i,v)},createURL:x,encodeLocation(v){let m=x(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:b,go(v){return o.go(v)}};return w}var jd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jd||(jd={}));function e0(e,t,r){return r===void 0&&(r="/"),t0(e,t,r)}function t0(e,t,r,a){let i=typeof t=="string"?wn(t):t,s=fn(i.pathname||"/",r);if(s==null)return null;let o=bm(e);r0(o);let c=null,l=m0(s);for(let d=0;c==null&&d<o.length;++d)c=u0(o[d],l);return c}function bm(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(s,o,c)=>{let l={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let d=lr([a,l.relativePath]),u=r.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),bm(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:c0(d,s.index),routesMeta:u})};return e.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,o);else for(let l of ym(s.path))i(s,o,l)}),t}function ym(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=ym(a.join("/")),c=[];return c.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&c.push(...o),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function r0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:d0(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const n0=/^:[\w-]+$/,a0=3,i0=2,s0=1,o0=10,l0=-2,Nd=e=>e==="*";function c0(e,t){let r=e.split("/"),a=r.length;return r.some(Nd)&&(a+=l0),t&&(a+=i0),r.filter(i=>!Nd(i)).reduce((i,s)=>i+(n0.test(s)?a0:s===""?s0:o0),a)}function d0(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function u0(e,t,r){let{routesMeta:a}=e,i={},s="/",o=[];for(let c=0;c<a.length;++c){let l=a[c],d=c===a.length-1,u=s==="/"?t:t.slice(s.length)||"/",p=Qo({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},u),f=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:lr([s,p.pathname]),pathnameBase:b0(lr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=lr([s,p.pathnameBase]))}return o}function Qo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=p0(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:a.reduce((d,u,p)=>{let{paramName:f,isOptional:b}=u;if(f==="*"){let w=c[p]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=c[p];return b&&!x?d[f]=void 0:d[f]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function p0(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Zl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(a.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function m0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}const h0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f0=e=>h0.test(e);function g0(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?wn(e):e,s;if(r)if(f0(r))s=r;else{if(r.includes("//")){let o=r;r=vm(r),Zl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?s=Sd(r.substring(1),"/"):s=Sd(r,t)}else s=t;return{pathname:s,search:y0(a),hash:v0(i)}}function Sd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Vs(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ec(e,t){let r=x0(e);return t?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function tc(e,t,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=wn(e):(i=ha({},e),le(!i.pathname||!i.pathname.includes("?"),Vs("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Vs("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Vs("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,c;if(o==null)c=r;else{let p=t.length-1;if(!a&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}c=p>=0?t[p]:"/"}let l=g0(i,c),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||u)&&(l.pathname+="/"),l}const vm=e=>e.replace(/\/\/+/g,"/"),lr=e=>vm(e.join("/")),b0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),y0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,v0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wm=["post","put","patch","delete"];new Set(wm);const k0=["get",...wm];new Set(k0);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},fa.apply(null,arguments)}const ds=k.createContext(null),km=k.createContext(null),Bt=k.createContext(null),us=k.createContext(null),Pt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),jm=k.createContext(null);function j0(e,t){let{relative:r}=t===void 0?{}:t;kn()||le(!1);let{basename:a,navigator:i}=k.useContext(Bt),{hash:s,pathname:o,search:c}=ps(e,{relative:r}),l=o;return a!=="/"&&(l=o==="/"?a:lr([a,o])),i.createHref({pathname:l,search:c,hash:s})}function kn(){return k.useContext(us)!=null}function Ke(){return kn()||le(!1),k.useContext(us).location}function Nm(e){k.useContext(Bt).static||k.useLayoutEffect(e)}function hr(){let{isDataRoute:e}=k.useContext(Pt);return e?M0():N0()}function N0(){kn()||le(!1);let e=k.useContext(ds),{basename:t,future:r,navigator:a}=k.useContext(Bt),{matches:i}=k.useContext(Pt),{pathname:s}=Ke(),o=JSON.stringify(ec(i,r.v7_relativeSplatPath)),c=k.useRef(!1);return Nm(()=>{c.current=!0}),k.useCallback(function(d,u){if(u===void 0&&(u={}),!c.current)return;if(typeof d=="number"){a.go(d);return}let p=tc(d,JSON.parse(o),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:lr([t,p.pathname])),(u.replace?a.replace:a.push)(p,u.state,u)},[t,a,o,s,e])}const S0=k.createContext(null);function E0(e){let t=k.useContext(Pt).outlet;return t&&k.createElement(S0.Provider,{value:e},t)}function Sm(){let{matches:e}=k.useContext(Pt),t=e[e.length-1];return t?t.params:{}}function ps(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=k.useContext(Bt),{matches:i}=k.useContext(Pt),{pathname:s}=Ke(),o=JSON.stringify(ec(i,a.v7_relativeSplatPath));return k.useMemo(()=>tc(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function P0(e,t){return C0(e,t)}function C0(e,t,r,a){kn()||le(!1);let{navigator:i}=k.useContext(Bt),{matches:s}=k.useContext(Pt),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Ke(),u;if(t){var p;let v=typeof t=="string"?wn(t):t;l==="/"||(p=v.pathname)!=null&&p.startsWith(l)||le(!1),u=v}else u=d;let f=u.pathname||"/",b=f;if(l!=="/"){let v=l.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let x=e0(e,{pathname:b}),w=L0(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},c,v.params),pathname:lr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:lr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,r,a);return t&&w?k.createElement(us.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Zt.Pop}},w):w}function z0(){let e=I0(),t=w0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:i},r):null,null)}const T0=k.createElement(z0,null);class R0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?k.createElement(Pt.Provider,{value:this.props.routeContext},k.createElement(jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O0(e){let{routeContext:t,match:r,children:a}=e,i=k.useContext(ds);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(Pt.Provider,{value:t},a)}function L0(e,t,r,a){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,c=(i=r)==null?void 0:i.errors;if(c!=null){let u=o.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);u>=0||le(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:b}=r,x=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||x){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,f)=>{let b,x=!1,w=null,v=null;r&&(b=c&&p.route.id?c[p.route.id]:void 0,w=p.route.errorElement||T0,l&&(d<0&&f===0?(D0("route-fallback"),x=!0,v=null):d===f&&(x=!0,v=p.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,f+1)),h=()=>{let g;return b?g=w:x?g=v:p.route.Component?g=k.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=u,k.createElement(O0,{match:p,routeContext:{outlet:u,matches:m,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(R0,{location:r.location,revalidation:r.revalidation,component:w,error:b,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Em=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Em||{}),Pm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pm||{});function A0(e){let t=k.useContext(ds);return t||le(!1),t}function _0(e){let t=k.useContext(km);return t||le(!1),t}function F0(e){let t=k.useContext(Pt);return t||le(!1),t}function Cm(e){let t=F0(),r=t.matches[t.matches.length-1];return r.route.id||le(!1),r.route.id}function I0(){var e;let t=k.useContext(jm),r=_0(),a=Cm();return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function M0(){let{router:e}=A0(Em.UseNavigateStable),t=Cm(Pm.UseNavigateStable),r=k.useRef(!1);return Nm(()=>{r.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fa({fromRouteId:t},s)))},[e,t])}const Ed={};function D0(e,t,r){Ed[e]||(Ed[e]=!0)}function U0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zm(e){let{to:t,replace:r,state:a,relative:i}=e;kn()||le(!1);let{future:s,static:o}=k.useContext(Bt),{matches:c}=k.useContext(Pt),{pathname:l}=Ke(),d=hr(),u=tc(t,ec(c,s.v7_relativeSplatPath),l,i==="path"),p=JSON.stringify(u);return k.useEffect(()=>d(JSON.parse(p),{replace:r,state:a,relative:i}),[d,p,i,r,a]),null}function ja(e){return E0(e.context)}function X(e){le(!1)}function B0(e){let{basename:t="/",children:r=null,location:a,navigationType:i=Zt.Pop,navigator:s,static:o=!1,future:c}=e;kn()&&le(!1);let l=t.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:l,navigator:s,static:o,future:fa({v7_relativeSplatPath:!1},c)}),[l,c,s,o]);typeof a=="string"&&(a=wn(a));let{pathname:u="/",search:p="",hash:f="",state:b=null,key:x="default"}=a,w=k.useMemo(()=>{let v=fn(u,l);return v==null?null:{location:{pathname:v,search:p,hash:f,state:b,key:x},navigationType:i}},[l,u,p,f,b,x,i]);return w==null?null:k.createElement(Bt.Provider,{value:d},k.createElement(us.Provider,{children:r,value:w}))}function $0(e){let{children:t,location:r}=e;return P0(Ko(t),r)}new Promise(()=>{});function Ko(e,t){t===void 0&&(t=[]);let r=[];return k.Children.forEach(e,(a,i)=>{if(!k.isValidElement(a))return;let s=[...t,i];if(a.type===k.Fragment){r.push.apply(r,Ko(a.props.children,s));return}a.type!==X&&le(!1),!a.props.index||!a.props.children||le(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Ko(a.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Bi.apply(null,arguments)}function Tm(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function H0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function V0(e,t){return e.button===0&&(!t||t==="_self")&&!H0(e)}function Jo(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let a=e[r];return t.concat(Array.isArray(a)?a.map(i=>[r,i]):[[r,a]])},[]))}function Y0(e,t){let r=Jo(e);return t&&t.forEach((a,i)=>{r.has(i)||t.getAll(i).forEach(s=>{r.append(i,s)})}),r}const q0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],W0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],G0="6";try{window.__reactRouterVersion=G0}catch{}const X0=k.createContext({isTransitioning:!1}),Q0="startTransition",Pd=Mh[Q0];function K0(e){let{basename:t,children:r,future:a,window:i}=e,s=k.useRef();s.current==null&&(s.current=Kg({window:i,v5Compat:!0}));let o=s.current,[c,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:d}=a||{},u=k.useCallback(p=>{d&&Pd?Pd(()=>l(p)):l(p)},[l,d]);return k.useLayoutEffect(()=>o.listen(u),[o,u]),k.useEffect(()=>U0(a),[a]),k.createElement(B0,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:o,future:a})}const J0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B=k.forwardRef(function(t,r){let{onClick:a,relative:i,reloadDocument:s,replace:o,state:c,target:l,to:d,preventScrollReset:u,viewTransition:p}=t,f=Tm(t,q0),{basename:b}=k.useContext(Bt),x,w=!1;if(typeof d=="string"&&Z0.test(d)&&(x=d,J0))try{let g=new URL(window.location.href),y=d.startsWith("//")?new URL(g.protocol+d):new URL(d),S=fn(y.pathname,b);y.origin===g.origin&&S!=null?d=S+y.search+y.hash:w=!0}catch{}let v=j0(d,{relative:i}),m=t1(d,{replace:o,state:c,target:l,preventScrollReset:u,relative:i,viewTransition:p});function h(g){a&&a(g),g.defaultPrevented||m(g)}return k.createElement("a",Bi({},f,{href:x||v,onClick:w||s?a:h,ref:r,target:l}))}),qa=k.forwardRef(function(t,r){let{"aria-current":a="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:l,viewTransition:d,children:u}=t,p=Tm(t,W0),f=ps(l,{relative:p.relative}),b=Ke(),x=k.useContext(km),{navigator:w,basename:v}=k.useContext(Bt),m=x!=null&&n1(f)&&d===!0,h=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,g=b.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(g=g.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase()),y&&v&&(y=fn(y,v)||y);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let N=g===h||!o&&g.startsWith(h)&&g.charAt(S)==="/",C=y!=null&&(y===h||!o&&y.startsWith(h)&&y.charAt(h.length)==="/"),P={isActive:N,isPending:C,isTransitioning:m},U=N?a:void 0,R;typeof s=="function"?R=s(P):R=[s,N?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(P):c;return k.createElement(B,Bi({},p,{"aria-current":U,className:R,ref:r,style:D,to:l,viewTransition:d}),typeof u=="function"?u(P):u)});var Zo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zo||(Zo={}));var Cd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cd||(Cd={}));function e1(e){let t=k.useContext(ds);return t||le(!1),t}function t1(e,t){let{target:r,replace:a,state:i,preventScrollReset:s,relative:o,viewTransition:c}=t===void 0?{}:t,l=hr(),d=Ke(),u=ps(e,{relative:o});return k.useCallback(p=>{if(V0(p,r)){p.preventDefault();let f=a!==void 0?a:Ui(d)===Ui(u);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:c})}},[d,l,u,a,i,r,e,s,o,c])}function r1(e){let t=k.useRef(Jo(e)),r=k.useRef(!1),a=Ke(),i=k.useMemo(()=>Y0(a.search,r.current?null:t.current),[a.search]),s=hr(),o=k.useCallback((c,l)=>{const d=Jo(typeof c=="function"?c(i):c);r.current=!0,s("?"+d,l)},[s,i]);return[i,o]}function n1(e,t){t===void 0&&(t={});let r=k.useContext(X0);r==null&&le(!1);let{basename:a}=e1(Zo.useViewTransitionState),i=ps(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=fn(r.currentLocation.pathname,a)||r.currentLocation.pathname,o=fn(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Qo(i.pathname,o)!=null||Qo(i.pathname,s)!=null}function Rm(e,t){return function(){return e.apply(t,arguments)}}const{toString:a1}=Object.prototype,{getPrototypeOf:gn}=Object,{iterator:Na,toStringTag:Om}=Symbol,$i=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ga=(e,t)=>{let r=e;const a=[];for(;r!=null&&r!==Object.prototype;){if(a.indexOf(r)!==-1)return!1;if(a.push(r),$i(r,t))return!0;r=gn(r)}return!1},i1=(e,t)=>e!=null&&ga(e,t)?e[t]:void 0,rc=(e=>t=>{const r=a1.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),xt=e=>(e=e.toLowerCase(),t=>rc(t)===e),ms=e=>t=>typeof t===e,{isArray:Or}=Array,xn=ms("undefined");function jn(e){return e!==null&&!xn(e)&&e.constructor!==null&&!xn(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Lm=xt("ArrayBuffer");function s1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Lm(e.buffer),t}const o1=ms("string"),He=ms("function"),Am=ms("number"),Nn=e=>e!==null&&typeof e=="object",l1=e=>e===!0||e===!1,mi=e=>{if(!Nn(e))return!1;const t=gn(e);return(t===null||t===Object.prototype||gn(t)===null)&&!ga(e,Om)&&!ga(e,Na)},c1=e=>{if(!Nn(e)||jn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},d1=xt("Date"),u1=xt("File"),p1=e=>!!(e&&typeof e.uri<"u"),m1=e=>e&&typeof e.getParts<"u",h1=xt("Blob"),f1=xt("FileList"),g1=e=>Nn(e)&&He(e.pipe);function x1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const zd=x1(),Td=typeof zd.FormData<"u"?zd.FormData:void 0,b1=e=>{if(!e)return!1;if(Td&&e instanceof Td)return!0;const t=gn(e);if(!t||t===Object.prototype||!He(e.append))return!1;const r=rc(e);return r==="formdata"||r==="object"&&He(e.toString)&&e.toString()==="[object FormData]"},y1=xt("URLSearchParams"),[v1,w1,k1,j1]=["ReadableStream","Request","Response","Headers"].map(xt),N1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Or(e))for(a=0,i=e.length;a<i;a++)t.call(null,e[a],a,e);else{if(jn(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let c;for(a=0;a<o;a++)c=s[a],t.call(null,e[c],c,e)}}function _m(e,t){if(jn(e))return null;t=t.toLowerCase();const r=Object.keys(e);let a=r.length,i;for(;a-- >0;)if(i=r[a],t===i.toLowerCase())return i;return null}const jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fm=e=>!xn(e)&&e!==jr;function el(...e){const{caseless:t,skipUndefined:r}=Fm(this)&&this||{},a={},i=(s,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=t&&typeof o=="string"&&_m(a,o)||o,l=$i(a,c)?a[c]:void 0;mi(l)&&mi(s)?a[c]=el(l,s):mi(s)?a[c]=el({},s):Or(s)?a[c]=s.slice():(!r||!xn(s))&&(a[c]=s)};for(let s=0,o=e.length;s<o;s++){const c=e[s];if(!c||jn(c)||(Sa(c,i),typeof c!="object"||Or(c)))continue;const l=Object.getOwnPropertySymbols(c);for(let d=0;d<l.length;d++){const u=l[d];F1.call(c,u)&&i(c[u],u)}}return a}const S1=(e,t,r,{allOwnKeys:a}={})=>(Sa(t,(i,s)=>{r&&He(i)?Object.defineProperty(e,s,{__proto__:null,value:Rm(i,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,s,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:a}),e),E1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),P1=(e,t,r,a)=>{e.prototype=Object.create(t.prototype,a),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},C1=(e,t,r,a)=>{let i,s,o;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!a||a(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=r!==!1&&gn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},z1=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const a=e.indexOf(t,r);return a!==-1&&a===r},T1=e=>{if(!e)return null;if(Or(e))return e;let t=e.length;if(!Am(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},R1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&gn(Uint8Array)),O1=(e,t)=>{const a=(e&&e[Na]).call(e);let i;for(;(i=a.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},L1=(e,t)=>{let r;const a=[];for(;(r=e.exec(t))!==null;)a.push(r);return a},A1=xt("HTMLFormElement"),_1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,i){return a.toUpperCase()+i}),{propertyIsEnumerable:F1}=Object.prototype,I1=xt("RegExp"),Im=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),a={};Sa(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(a[s]=o||i)}),Object.defineProperties(e,a)},M1=e=>{Im(e,(t,r)=>{if(He(e)&&["arguments","caller","callee"].includes(r))return!1;const a=e[r];if(He(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},D1=(e,t)=>{const r={},a=i=>{i.forEach(s=>{r[s]=!0})};return Or(e)?a(e):a(String(e).split(t)),r},U1=()=>{},B1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function $1(e){return!!(e&&He(e.append)&&e[Om]==="FormData"&&e[Na])}const H1=e=>{const t=new WeakSet,r=a=>{if(Nn(a)){if(t.has(a))return;if(jn(a))return a;if(!("toJSON"in a)){t.add(a);const i=Or(a)?[]:{};return Sa(a,(s,o)=>{const c=r(s);!xn(c)&&(i[o]=c)}),t.delete(a),i}}return a};return r(e)},V1=xt("AsyncFunction"),Y1=e=>e&&(Nn(e)||He(e))&&He(e.then)&&He(e.catch),Mm=((e,t)=>e?setImmediate:t?((r,a)=>(jr.addEventListener("message",({source:i,data:s})=>{i===jr&&s===r&&a.length&&a.shift()()},!1),i=>{a.push(i),jr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",He(jr.postMessage)),q1=typeof queueMicrotask<"u"?queueMicrotask.bind(jr):typeof process<"u"&&process.nextTick||Mm,Dm=e=>e!=null&&He(e[Na]),W1=e=>e!=null&&ga(e,Na)&&Dm(e),j={isArray:Or,isArrayBuffer:Lm,isBuffer:jn,isFormData:b1,isArrayBufferView:s1,isString:o1,isNumber:Am,isBoolean:l1,isObject:Nn,isPlainObject:mi,isEmptyObject:c1,isReadableStream:v1,isRequest:w1,isResponse:k1,isHeaders:j1,isUndefined:xn,isDate:d1,isFile:u1,isReactNativeBlob:p1,isReactNative:m1,isBlob:h1,isRegExp:I1,isFunction:He,isStream:g1,isURLSearchParams:y1,isTypedArray:R1,isFileList:f1,forEach:Sa,merge:el,extend:S1,trim:N1,stripBOM:E1,inherits:P1,toFlatObject:C1,kindOf:rc,kindOfTest:xt,endsWith:z1,toArray:T1,forEachEntry:O1,matchAll:L1,isHTMLForm:A1,hasOwnProperty:$i,hasOwnProp:$i,hasOwnInPrototypeChain:ga,getSafeProp:i1,reduceDescriptors:Im,freezeMethods:M1,toObjectSet:D1,toCamelCase:_1,noop:U1,toFiniteNumber:B1,findKey:_m,global:jr,isContextDefined:Fm,isSpecCompliantForm:$1,toJSONObject:H1,isAsyncFn:V1,isThenable:Y1,setImmediate:Mm,asap:q1,isIterable:Dm,isSafeIterable:W1},G1=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),X1=e=>{const t={};let r,a,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),a=o.substring(i+1).trim(),!(!r||t[r]&&G1[r])&&(r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t};function Q1(e){let t=0,r=e.length;for(;t<r;){const a=e.charCodeAt(t);if(a!==9&&a!==32)break;t+=1}for(;r>t;){const a=e.charCodeAt(r-1);if(a!==9&&a!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const K1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),J1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function nc(e,t){return j.isArray(e)?e.map(r=>nc(r,t)):Q1(String(e).replace(t,""))}const Z1=e=>nc(e,K1),ex=e=>nc(e,J1);function Um(e){const t=Object.create(null);return j.forEach(e.toJSON(),(r,a)=>{t[a]=ex(r)}),t}const Rd=Symbol("internals");function _n(e){return e&&String(e).trim().toLowerCase()}function hi(e){return e===!1||e==null?e:j.isArray(e)?e.map(hi):Z1(String(e))}function tx(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)t[a[1]]=a[2];return t}const rx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ys(e,t,r,a,i){if(j.isFunction(a))return a.call(this,t,r);if(i&&(t=r),!!j.isString(t)){if(j.isString(a))return t.indexOf(a)!==-1;if(j.isRegExp(a))return a.test(t)}}function nx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,a)=>r.toUpperCase()+a)}function ax(e,t){const r=j.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{__proto__:null,value:function(i,s,o){return this[a].call(this,t,i,s,o)},configurable:!0})})}let Re=class{constructor(t){t&&this.set(t)}set(t,r,a){const i=this;function s(c,l,d){const u=_n(l);if(!u)return;const p=j.findKey(i,u);(!p||i[p]===void 0||d===!0||d===void 0&&i[p]!==!1)&&(i[p||l]=hi(c))}const o=(c,l)=>j.forEach(c,(d,u)=>s(d,u,l));if(j.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(j.isString(t)&&(t=t.trim())&&!rx(t))o(X1(t),r);else if(j.isObject(t)&&j.isSafeIterable(t)){let c=Object.create(null),l,d;for(const u of t){if(!j.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],j.hasOwnProp(c,d)?(l=c[d],c[d]=j.isArray(l)?[...l,u[1]]:[l,u[1]]):c[d]=u[1]}o(c,r)}else t!=null&&s(r,t,a);return this}get(t,r){if(t=_n(t),t){const a=j.findKey(this,t);if(a){const i=this[a];if(!r)return i;if(r===!0)return tx(i);if(j.isFunction(r))return r.call(this,i,a);if(j.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=_n(t),t){const a=j.findKey(this,t);return!!(a&&this[a]!==void 0&&(!r||Ys(this,this[a],a,r)))}return!1}delete(t,r){const a=this;let i=!1;function s(o){if(o=_n(o),o){const c=j.findKey(a,o);c&&(!r||Ys(a,a[c],c,r))&&(delete a[c],i=!0)}}return j.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let a=r.length,i=!1;for(;a--;){const s=r[a];(!t||Ys(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,a={};return j.forEach(this,(i,s)=>{const o=j.findKey(a,s);if(o){r[o]=hi(i),delete r[s];return}const c=t?nx(s):String(s).trim();c!==s&&delete r[s],r[c]=hi(i),a[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return j.forEach(this,(a,i)=>{a!=null&&a!==!1&&(r[i]=t&&j.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const a=new this(t);return r.forEach(i=>a.set(i)),a}static accessor(t){const a=(this[Rd]=this[Rd]={accessors:{}}).accessors,i=this.prototype;function s(o){const c=_n(o);a[c]||(ax(i,o),a[c]=!0)}return j.isArray(t)?t.forEach(s):s(t),this}};Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(Re.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[r]=a}}});j.freezeMethods(Re);const ix="[REDACTED ****]";function sx(e){if(j.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(j.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function ox(e,t){const r=new Set(t.map(s=>String(s).toLowerCase())),a=[],i=s=>{if(s===null||typeof s!="object"||j.isBuffer(s))return s;if(a.indexOf(s)!==-1)return;s instanceof Re&&(s=s.toJSON()),a.push(s);let o;if(j.isArray(s))o=[],s.forEach((c,l)=>{const d=i(c);j.isUndefined(d)||(o[l]=d)});else{if(!j.isPlainObject(s)&&sx(s))return a.pop(),s;o=Object.create(null);for(const[c,l]of Object.entries(s)){const d=r.has(c.toLowerCase())?ix:i(l);j.isUndefined(d)||(o[c]=d)}}return a.pop(),o};return i(e)}let O=class Bm extends Error{static from(t,r,a,i,s,o){const c=new Bm(t.message,r||t.code,a,i,s);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(t,r,a,i,s){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),a&&(this.config=a),i&&(this.request=i),s&&(this.response=s,this.status=s.status)}toJSON(){const t=this.config,r=t&&j.hasOwnProp(t,"redact")?t.redact:void 0,a=j.isArray(r)&&r.length>0?ox(t,r):j.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a,code:this.code,status:this.status}}};O.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";O.ERR_BAD_OPTION="ERR_BAD_OPTION";O.ECONNABORTED="ECONNABORTED";O.ETIMEDOUT="ETIMEDOUT";O.ECONNREFUSED="ECONNREFUSED";O.ERR_NETWORK="ERR_NETWORK";O.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";O.ERR_DEPRECATED="ERR_DEPRECATED";O.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";O.ERR_BAD_REQUEST="ERR_BAD_REQUEST";O.ERR_CANCELED="ERR_CANCELED";O.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";O.ERR_INVALID_URL="ERR_INVALID_URL";O.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const lx=null,$m=100;function tl(e){return j.isPlainObject(e)||j.isArray(e)}function Hm(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function qs(e,t,r){return e?e.concat(t).map(function(i,s){return i=Hm(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function cx(e){return j.isArray(e)&&!e.some(tl)}const dx=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function hs(e,t,r){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=j.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!j.isUndefined(g[h])});const a=r.metaTokens,i=r.visitor||x,s=r.dots,o=r.indexes,c=r.Blob||typeof Blob<"u"&&Blob,l=r.maxDepth===void 0?$m:r.maxDepth,d=c&&j.isSpecCompliantForm(t),u=[];if(!j.isFunction(i))throw new TypeError("visitor must be a function");function p(m){if(m===null)return"";if(j.isDate(m))return m.toISOString();if(j.isBoolean(m))return m.toString();if(!d&&j.isBlob(m))throw new O("Blob is not supported. Use a Buffer instead.");if(j.isArrayBuffer(m)||j.isTypedArray(m)){if(d&&typeof c=="function")return new c([m]);if(typeof Buffer<"u")return Buffer.from(m);throw new O("Blob is not supported. Use a Buffer instead.",O.ERR_NOT_SUPPORT)}return m}function f(m){if(m>l)throw new O("Object is too deeply nested ("+m+" levels). Max depth: "+l,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function b(m,h){if(l===1/0)return JSON.stringify(m);const g=[];return JSON.stringify(m,function(S,N){if(!j.isObject(N))return N;for(;g.length&&g[g.length-1]!==this;)g.pop();return g.push(N),f(h+g.length-1),N})}function x(m,h,g){let y=m;if(j.isReactNative(t)&&j.isReactNativeBlob(m))return t.append(qs(g,h,s),p(m)),!1;if(m&&!g&&typeof m=="object"){if(j.endsWith(h,"{}"))h=a?h:h.slice(0,-2),m=b(m,1);else if(j.isArray(m)&&cx(m)||(j.isFileList(m)||j.endsWith(h,"[]"))&&(y=j.toArray(m)))return h=Hm(h),y.forEach(function(N,C){!(j.isUndefined(N)||N===null)&&t.append(o===!0?qs([h],C,s):o===null?h:h+"[]",p(N))}),!1}return tl(m)?!0:(t.append(qs(g,h,s),p(m)),!1)}const w=Object.assign(dx,{defaultVisitor:x,convertValue:p,isVisitable:tl});function v(m,h,g=0){if(!j.isUndefined(m)){if(f(g),u.indexOf(m)!==-1)throw new Error("Circular reference detected in "+h.join("."));u.push(m),j.forEach(m,function(S,N){(!(j.isUndefined(S)||S===null)&&i.call(t,S,j.isString(N)?N.trim():N,h,w))===!0&&v(S,h?h.concat(N):[N],g+1)}),u.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Od(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(a){return t[a]})}function ac(e,t){this._pairs=[],e&&hs(e,this,t)}const Vm=ac.prototype;Vm.append=function(t,r){this._pairs.push([t,r])};Vm.toString=function(t){const r=t?a=>t.call(this,a,Od):Od;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function ux(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ym(e,t,r){if(!t)return e;e=e||"";const a=j.isFunction(r)?{serialize:r}:r,i=j.getSafeProp(a,"encode")||ux,s=j.getSafeProp(a,"serialize");let o;if(s?o=s(t,a):o=j.isURLSearchParams(t)?t.toString():new ac(t,a).toString(i),o){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ld{constructor(){this.handlers=[]}use(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(a){a!==null&&t(a)})}}const ic={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},px=typeof URLSearchParams<"u"?URLSearchParams:ac,mx=typeof FormData<"u"?FormData:null,hx=typeof Blob<"u"?Blob:null,fx={isBrowser:!0,classes:{URLSearchParams:px,FormData:mx,Blob:hx},protocols:["http","https","file","blob","url","data"]},sc=typeof window<"u"&&typeof document<"u",rl=typeof navigator=="object"&&navigator||void 0,gx=sc&&(!rl||["ReactNative","NativeScript","NS"].indexOf(rl.product)<0),xx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bx=sc&&window.location.href||"http://localhost",yx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sc,hasStandardBrowserEnv:gx,hasStandardBrowserWebWorkerEnv:xx,navigator:rl,origin:bx},Symbol.toStringTag,{value:"Module"})),ke={...yx,...fx};function vx(e,t){return hs(e,new ke.classes.URLSearchParams,{visitor:function(r,a,i,s){return ke.isNode&&j.isBuffer(r)?(this.append(a,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}const Ad=$m;function qm(e){if(e>Ad)throw new O("FormData field is too deeply nested ("+e+" levels). Max depth: "+Ad,O.ERR_FORM_DATA_DEPTH_EXCEEDED)}function wx(e){const t=[],r=/\w+|\[(\w*)]/g;let a;for(;(a=r.exec(e))!==null;)qm(t.length),t.push(a[0]==="[]"?"":a[1]||a[0]);return t}function kx(e){const t={},r=Object.keys(e);let a;const i=r.length;let s;for(a=0;a<i;a++)s=r[a],t[s]=e[s];return t}function Wm(e){function t(r,a,i,s){qm(s);let o=r[s++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=s>=r.length;return o=!o&&j.isArray(i)?i.length:o,l?(j.hasOwnProp(i,o)?i[o]=j.isArray(i[o])?i[o].concat(a):[i[o],a]:i[o]=a,!c):((!j.hasOwnProp(i,o)||!j.isObject(i[o]))&&(i[o]=[]),t(r,a,i[o],s)&&j.isArray(i[o])&&(i[o]=kx(i[o])),!c)}if(j.isFormData(e)&&j.isFunction(e.entries)){const r={};return j.forEachEntry(e,(a,i)=>{t(wx(a),i,r,0)}),r}return null}const Dr=(e,t)=>e!=null&&j.hasOwnProp(e,t)?e[t]:void 0;function jx(e,t,r){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const Ea={transitional:ic,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const a=r.getContentType()||"",i=a.indexOf("application/json")>-1,s=j.isObject(t);if(s&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i?JSON.stringify(Wm(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t)||j.isReadableStream(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){const l=Dr(this,"formSerializer");if(a.indexOf("application/x-www-form-urlencoded")>-1)return vx(t,l).toString();if((c=j.isFileList(t))||a.indexOf("multipart/form-data")>-1){const d=Dr(this,"env"),u=d&&d.FormData;return hs(c?{"files[]":t}:t,u&&new u,l)}}return s||i?(r.setContentType("application/json",!1),jx(t)):t}],transformResponse:[function(t){const r=Dr(this,"transitional")||Ea.transitional,a=r&&r.forcedJSONParsing,i=Dr(this,"responseType"),s=i==="json";if(j.isResponse(t)||j.isReadableStream(t))return t;if(t&&j.isString(t)&&(a&&!i||s)){const c=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t,Dr(this,"parseReviver"))}catch(l){if(c)throw l.name==="SyntaxError"?O.from(l,O.ERR_BAD_RESPONSE,this,null,Dr(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ke.classes.FormData,Blob:ke.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch","query"],e=>{Ea.headers[e]={}});function Ws(e,t){const r=this||Ea,a=t||r,i=Re.from(a.headers);let s=a.data;return j.forEach(e,function(c){s=c.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Gm(e){return!!(e&&e.__CANCEL__)}let Pa=class extends O{constructor(t,r,a){super(t??"canceled",O.ERR_CANCELED,r,a),this.name="CanceledError",this.__CANCEL__=!0}};function Xm(e,t,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):t(new O("Request failed with status code "+r.status,r.status>=400&&r.status<500?O.ERR_BAD_REQUEST:O.ERR_BAD_RESPONSE,r.config,r.request,r))}function Nx(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Sx(e,t){e=e||10;const r=new Array(e),a=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),u=a[s];o||(o=d),r[i]=l,a[i]=d;let p=s,f=0;for(;p!==i;)f+=r[p++],p=p%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),d-o<t)return;const b=u&&d-u;return b?Math.round(f*1e3/b):void 0}}function Ex(e,t){let r=0,a=1e3/t,i,s;const o=(d,u=Date.now())=>{r=u,i=null,s&&(clearTimeout(s),s=null),e(...d)};return[(...d)=>{const u=Date.now(),p=u-r;p>=a?o(d,u):(i=d,s||(s=setTimeout(()=>{s=null,o(i)},a-p)))},()=>i&&o(i)]}const Hi=(e,t,r=3)=>{let a=0;const i=Sx(50,250);return Ex(s=>{if(!s||typeof s.loaded!="number")return;const o=s.loaded,c=s.lengthComputable?s.total:void 0,l=c!=null?Math.min(o,c):o,d=Math.max(0,l-a),u=i(d);a=Math.max(a,l);const p={loaded:l,total:c,progress:c?l/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c?(c-l)/u:void 0,event:s,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(p)},r)},_d=(e,t)=>{const r=e!=null;return[a=>t[0]({lengthComputable:r,total:e,loaded:a}),t[1]]},Fd=e=>(...t)=>j.asap(()=>e(...t)),Px=ke.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ke.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ke.origin),ke.navigator&&/(msie|trident)/i.test(ke.navigator.userAgent)):()=>!0,Cx=ke.hasStandardBrowserEnv?{write(e,t,r,a,i,s,o){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(t)}`];j.isNumber(r)&&c.push(`expires=${new Date(r).toUTCString()}`),j.isString(a)&&c.push(`path=${a}`),j.isString(i)&&c.push(`domain=${i}`),s===!0&&c.push("secure"),j.isString(o)&&c.push(`SameSite=${o}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const a=t[r].replace(/^\s+/,""),i=a.indexOf("=");if(i!==-1&&a.slice(0,i)===e)try{return decodeURIComponent(a.slice(i+1))}catch{return a.slice(i+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zx(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Tx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}const Rx=/^https?:(?!\/\/)/i,Ox=/[\t\n\r]/g;function Lx(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Ax(e){return Lx(e).replace(Ox,"")}function Id(e,t){if(typeof e=="string"&&Rx.test(Ax(e)))throw new O('Invalid URL: missing "//" after protocol',O.ERR_INVALID_URL,t)}function Qm(e,t,r,a){Id(t,a);let i=!zx(t);return e&&(i||r===!1)?(Id(e,a),Tx(e,t)):t}const Md=e=>e instanceof Re?{...e}:e;function Lr(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function a(u,p,f,b){return j.isPlainObject(u)&&j.isPlainObject(p)?j.merge.call({caseless:b},u,p):j.isPlainObject(p)?j.merge({},p):j.isArray(p)?p.slice():p}function i(u,p,f,b){if(j.isUndefined(p)){if(!j.isUndefined(u))return a(void 0,u,f,b)}else return a(u,p,f,b)}function s(u,p){if(!j.isUndefined(p))return a(void 0,p)}function o(u,p){if(j.isUndefined(p)){if(!j.isUndefined(u))return a(void 0,u)}else return a(void 0,p)}function c(u){const p=j.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!j.isUndefined(p))if(j.isPlainObject(p)){if(j.hasOwnProp(p,u))return p[u]}else return;const f=j.hasOwnProp(e,"transitional")?e.transitional:void 0;if(j.isPlainObject(f)&&j.hasOwnProp(f,u))return f[u]}function l(u,p,f){if(j.hasOwnProp(t,f))return a(u,p);if(j.hasOwnProp(e,f))return a(void 0,u)}const d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,p,f)=>i(Md(u),Md(p),f,!0)};return j.forEach(Object.keys({...e,...t}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const f=j.hasOwnProp(d,p)?d[p]:i,b=j.hasOwnProp(e,p)?e[p]:void 0,x=j.hasOwnProp(t,p)?t[p]:void 0,w=f(b,x,p);j.isUndefined(w)&&f!==l||(r[p]=w)}),j.hasOwnProp(t,"validateStatus")&&j.isUndefined(t.validateStatus)&&c("validateStatusUndefinedResolves")===!1&&(j.hasOwnProp(e,"validateStatus")?r.validateStatus=a(void 0,e.validateStatus):delete r.validateStatus),r}const _x=["content-type","content-length"];function Fx(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([a,i])=>{_x.includes(a.toLowerCase())&&e.set(a,i)})}const Ix=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function Km(e){const t=Lr({},e),r=f=>j.hasOwnProp(t,f)?t[f]:void 0,a=r("data");let i=r("withXSRFToken");const s=r("xsrfHeaderName"),o=r("xsrfCookieName");let c=r("headers");const l=r("auth"),d=r("baseURL"),u=r("allowAbsoluteUrls"),p=r("url");if(t.headers=c=Re.from(c),t.url=Ym(Qm(d,p,u,t),r("params"),r("paramsSerializer")),l){const f=j.getSafeProp(l,"username")||"",b=j.getSafeProp(l,"password")||"";try{c.set("Authorization","Basic "+btoa(f+":"+(b?Ix(b):"")))}catch(x){throw O.from(x,O.ERR_BAD_OPTION_VALUE,e)}}if(j.isFormData(a)&&(ke.hasStandardBrowserEnv||ke.hasStandardBrowserWebWorkerEnv||j.isReactNative(a)?c.setContentType(void 0):j.isFunction(a.getHeaders)&&Fx(c,a.getHeaders(),r("formDataHeaderPolicy"))),ke.hasStandardBrowserEnv&&(j.isFunction(i)&&(i=i(t)),i===!0||i==null&&Px(t.url))){const b=s&&o&&Cx.read(o);b&&c.set(s,b)}return t}const Mx=typeof XMLHttpRequest<"u",Dx=Mx&&function(e){return new Promise(function(r,a){const i=Km(e);let s=i.data;const o=Re.from(i.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:d}=i,u,p,f,b,x;function w(){b&&b(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let v=new XMLHttpRequest;v.open(i.method.toUpperCase(),i.url,!0),v.timeout=i.timeout;function m(){if(!v)return;const g=Re.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),S={data:!c||c==="text"||c==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:g,config:e,request:v};Xm(function(C){r(C),w()},function(C){a(C),w()},S),v=null}"onloadend"in v?v.onloadend=m:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.startsWith("file:"))||setTimeout(m)},v.onabort=function(){v&&(a(new O("Request aborted",O.ECONNABORTED,e,v)),w(),v=null)},v.onerror=function(y){const S=y&&y.message?y.message:"Network Error",N=new O(S,O.ERR_NETWORK,e,v);N.event=y||null,a(N),w(),v=null},v.ontimeout=function(){let y=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||ic;i.timeoutErrorMessage&&(y=i.timeoutErrorMessage),a(new O(y,S.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,v)),w(),v=null},s===void 0&&o.setContentType(null),"setRequestHeader"in v&&j.forEach(Um(o),function(y,S){v.setRequestHeader(S,y)}),j.isUndefined(i.withCredentials)||(v.withCredentials=!!i.withCredentials),c&&c!=="json"&&(v.responseType=i.responseType),d&&([f,x]=Hi(d,!0),v.addEventListener("progress",f)),l&&v.upload&&([p,b]=Hi(l),v.upload.addEventListener("progress",p),v.upload.addEventListener("loadend",b)),(i.cancelToken||i.signal)&&(u=g=>{v&&(a(!g||g.type?new Pa(null,e,v):g),v.abort(),w(),v=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const h=Nx(i.url);if(h&&!ke.protocols.includes(h)){a(new O("Unsupported protocol "+h+":",O.ERR_BAD_REQUEST,e)),w();return}v.send(s||null)})},Ux=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let a=!1;const i=function(l){if(!a){a=!0,o();const d=l instanceof Error?l:this.reason;r.abort(d instanceof O?d:new Pa(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new O(`timeout of ${t}ms exceeded`,O.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i,{once:!0}));const{signal:c}=r;return c.unsubscribe=()=>j.asap(o),c},Bx=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let a=0,i;for(;a<r;)i=a+t,yield e.slice(a,i),a=i},$x=async function*(e,t){for await(const r of Hx(e))yield*Bx(r,t)},Hx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:a}=await t.read();if(r)break;yield a}}finally{await t.cancel()}},Dd=(e,t,r,a)=>{const i=$x(e,t);let s=0,o,c=l=>{o||(o=!0,a&&a(l))};return new ReadableStream({async pull(l){try{const{done:d,value:u}=await i.next();if(d){c(),l.close();return}let p=u.byteLength;if(r){let f=s+=p;r(f)}l.enqueue(new Uint8Array(u))}catch(d){throw c(d),d}},cancel(l){return c(l),i.return()}},{highWaterMark:2})},Vi=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Vx=(e,t,r)=>t+2<r&&Vi(e.charCodeAt(t+1))&&Vi(e.charCodeAt(t+2));function Yx(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const r=e.slice(5,t),a=e.slice(t+1);if(/;base64/i.test(r)){let o=a.length;const c=a.length;for(let b=0;b<c;b++)if(a.charCodeAt(b)===37&&b+2<c){const x=a.charCodeAt(b+1),w=a.charCodeAt(b+2);Vi(x)&&Vi(w)&&(o-=2,b+=2)}let l=0,d=c-1;const u=b=>b>=2&&a.charCodeAt(b-2)===37&&a.charCodeAt(b-1)===51&&(a.charCodeAt(b)===68||a.charCodeAt(b)===100);d>=0&&(a.charCodeAt(d)===61?(l++,d--):u(d)&&(l++,d-=3)),l===1&&d>=0&&(a.charCodeAt(d)===61||u(d))&&l++;const f=Math.floor(o/4)*3-(l||0);return f>0?f:0}let s=0;for(let o=0,c=a.length;o<c;o++){const l=a.charCodeAt(o);if(l===37&&Vx(a,o,c))s+=1,o+=2;else if(l<128)s+=1;else if(l<2048)s+=2;else if(l>=55296&&l<=56319&&o+1<c){const d=a.charCodeAt(o+1);d>=56320&&d<=57343?(s+=4,o++):s+=3}else s+=3}return s}const oc="1.18.1",Ud=64*1024,{isFunction:Wa}=j,qx=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),Bd=e=>{if(!j.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},$d=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Wx=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},Gx=e=>{const t=j.global!==void 0&&j.global!==null?j.global:globalThis,{ReadableStream:r,TextEncoder:a}=t;e=j.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:i,Request:s,Response:o}=e,c=i?Wa(i):typeof fetch=="function",l=Wa(s),d=Wa(o);if(!c)return!1;const u=c&&Wa(r),p=c&&(typeof a=="function"?(m=>h=>m.encode(h))(new a):async m=>new Uint8Array(await new s(m).arrayBuffer())),f=l&&u&&$d(()=>{let m=!1;const h=new s(ke.origin,{body:new r,method:"POST",get duplex(){return m=!0,"half"}}),g=h.headers.has("Content-Type");return h.body!=null&&h.body.cancel(),m&&!g}),b=d&&u&&$d(()=>j.isReadableStream(new o("").body)),x={stream:b&&(m=>m.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!x[m]&&(x[m]=(h,g)=>{let y=h&&h[m];if(y)return y.call(h);throw new O(`Response type '${m}' is not supported`,O.ERR_NOT_SUPPORT,g)})});const w=async m=>{if(m==null)return 0;if(j.isBlob(m))return m.size;if(j.isSpecCompliantForm(m))return(await new s(ke.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(j.isArrayBufferView(m)||j.isArrayBuffer(m))return m.byteLength;if(j.isURLSearchParams(m)&&(m=m+""),j.isString(m))return(await p(m)).byteLength},v=async(m,h)=>{const g=j.toFiniteNumber(m.getContentLength());return g??w(h)};return async m=>{let{url:h,method:g,data:y,signal:S,cancelToken:N,timeout:C,onDownloadProgress:P,onUploadProgress:U,responseType:R,headers:D,withCredentials:ee="same-origin",fetchOptions:E,maxContentLength:A,maxBodyLength:q}=Km(m);const I=j.isNumber(A)&&A>-1,H=j.isNumber(q)&&q>-1,z=V=>j.hasOwnProp(m,V)?m[V]:void 0;let F=i||fetch;R=R?(R+"").toLowerCase():"text";let M=Ux([S,N&&N.toAbortSignal()],C),$=null;const K=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let Le,xe=null;const yt=()=>new O("Request body larger than maxBodyLength limit",O.ERR_BAD_REQUEST,m,$);try{let V;const he=z("auth");if(he){const L=j.getSafeProp(he,"username")||"",W=j.getSafeProp(he,"password")||"";V={username:L,password:W}}if(Wx(h)){const L=new URL(h,ke.origin);if(!V&&(L.username||L.password)){const W=Bd(L.username),Y=Bd(L.password);V={username:W,password:Y}}(L.username||L.password)&&(L.username="",L.password="",h=L.href)}if(V&&(D.delete("authorization"),D.set("Authorization","Basic "+btoa(qx((V.username||"")+":"+(V.password||""))))),I&&typeof h=="string"&&h.startsWith("data:")&&Yx(h)>A)throw new O("maxContentLength size of "+A+" exceeded",O.ERR_BAD_RESPONSE,m,$);if(H&&g!=="get"&&g!=="head"){const L=await w(y);if(typeof L=="number"&&isFinite(L)&&(Le=L,L>q))throw yt()}const Ir=H&&(j.isReadableStream(y)||j.isStream(y)),vt=(L,W,Y)=>Dd(L,Ud,Se=>{if(H&&Se>q)throw xe=yt();W&&W(Se)},Y);if(f&&g!=="get"&&g!=="head"&&(U||Ir)){if(Le=Le??await v(D,y),Le!==0||Ir){let L=new s(h,{method:"POST",body:y,duplex:"half"}),W;if(j.isFormData(y)&&(W=L.headers.get("content-type"))&&D.setContentType(W),L.body){const[Y,Se]=U&&_d(Le,Hi(Fd(U)))||[];y=vt(L.body,Y,Se)}}}else if(Ir&&!l&&u&&g!=="get"&&g!=="head")y=vt(y);else if(Ir&&l&&!f&&g!=="get"&&g!=="head")throw new O("Stream request bodies are not supported by the current fetch implementation",O.ERR_NOT_SUPPORT,m,$);j.isString(ee)||(ee=ee?"include":"omit");const $t=l&&"credentials"in s.prototype;if(j.isFormData(y)){const L=D.getContentType();L&&/^multipart\/form-data/i.test(L)&&!/boundary=/i.test(L)&&D.delete("content-type")}D.set("User-Agent","axios/"+oc,!1);const fr={...E,signal:M,method:g.toUpperCase(),headers:Um(D.normalize()),body:y,duplex:"half",credentials:$t?ee:void 0};$=l&&new s(h,fr);let Je=await(l?F($,E):F(h,fr));const Sn=Re.from(Je.headers);if(I){const L=j.toFiniteNumber(Sn.getContentLength());if(L!=null&&L>A)throw new O("maxContentLength size of "+A+" exceeded",O.ERR_BAD_RESPONSE,m,$)}const En=b&&(R==="stream"||R==="response");if(b&&Je.body&&(P||I||En&&K)){const L={};["status","statusText","headers"].forEach(Ht=>{L[Ht]=Je[Ht]});const W=j.toFiniteNumber(Sn.getContentLength()),[Y,Se]=P&&_d(W,Hi(Fd(P),!0))||[];let Ve=0;const xs=Ht=>{if(I&&(Ve=Ht,Ve>A))throw new O("maxContentLength size of "+A+" exceeded",O.ERR_BAD_RESPONSE,m,$);Y&&Y(Ht)};Je=new o(Dd(Je.body,Ud,xs,()=>{Se&&Se(),K&&K()}),L)}R=R||"text";let it=await x[j.findKey(x,R)||"text"](Je,m);if(I&&!b&&!En){let L;if(it!=null&&(typeof it.byteLength=="number"?L=it.byteLength:typeof it.size=="number"?L=it.size:typeof it=="string"&&(L=typeof a=="function"?new a().encode(it).byteLength:it.length)),typeof L=="number"&&L>A)throw new O("maxContentLength size of "+A+" exceeded",O.ERR_BAD_RESPONSE,m,$)}return!En&&K&&K(),await new Promise((L,W)=>{Xm(L,W,{data:it,headers:Re.from(Je.headers),status:Je.status,statusText:Je.statusText,config:m,request:$})})}catch(V){if(K&&K(),M&&M.aborted&&M.reason instanceof O){const he=M.reason;throw he.config=m,$&&(he.request=$),V!==he&&Object.defineProperty(he,"cause",{__proto__:null,value:V,writable:!0,enumerable:!1,configurable:!0}),he}if(xe)throw $&&!xe.request&&(xe.request=$),xe;if(V instanceof O)throw $&&!V.request&&(V.request=$),V;if(V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)){const he=new O("Network Error",O.ERR_NETWORK,m,$,V&&V.response);throw Object.defineProperty(he,"cause",{__proto__:null,value:V.cause||V,writable:!0,enumerable:!1,configurable:!0}),he}throw O.from(V,V&&V.code,m,$,V&&V.response)}}},Xx=new Map,Jm=e=>{let t=e&&e.env||{};const{fetch:r,Request:a,Response:i}=t,s=[a,i,r];let o=s.length,c=o,l,d,u=Xx;for(;c--;)l=s[c],d=u.get(l),d===void 0&&u.set(l,d=c?new Map:Gx(t)),u=d;return d};Jm();const lc={http:lx,xhr:Dx,fetch:{get:Jm}};j.forEach(lc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Hd=e=>`- ${e}`,Qx=e=>j.isFunction(e)||e===null||e===!1;function Kx(e,t){e=j.isArray(e)?e:[e];const{length:r}=e;let a,i;const s={};for(let o=0;o<r;o++){a=e[o];let c;if(i=a,!Qx(a)&&(i=lc[(c=String(a)).toLowerCase()],i===void 0))throw new O(`Unknown adapter '${c}'`);if(i&&(j.isFunction(i)||(i=i.get(t))))break;s[c||"#"+o]=i}if(!i){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=r?o.length>1?`since :
`+o.map(Hd).join(`
`):" "+Hd(o[0]):"as no adapter specified";throw new O("There is no suitable adapter to dispatch the request "+c,O.ERR_NOT_SUPPORT)}return i}const Zm={getAdapter:Kx,adapters:lc};function Gs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pa(null,e)}function Vd(e){return Gs(e),e.headers=Re.from(e.headers),e.data=Ws.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zm.getAdapter(e.adapter||Ea.adapter,e)(e).then(function(a){Gs(e),e.response=a;try{a.data=Ws.call(e,e.transformResponse,a)}finally{delete e.response}return a.headers=Re.from(a.headers),a},function(a){if(!Gm(a)&&(Gs(e),a&&a.response)){e.response=a.response;try{a.response.data=Ws.call(e,e.transformResponse,a.response)}finally{delete e.response}a.response.headers=Re.from(a.response.headers)}return Promise.reject(a)})}const fs={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fs[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const Yd={};fs.transitional=function(t,r,a){function i(s,o){return"[Axios v"+oc+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return(s,o,c)=>{if(t===!1)throw new O(i(o," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!Yd[o]&&(Yd[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,c):!0}};fs.spelling=function(t){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function Jx(e,t,r){if(typeof e!="object"||e===null)throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const s=a[i],o=Object.prototype.hasOwnProperty.call(t,s)?t[s]:void 0;if(o){const c=e[s],l=c===void 0||o(c,s,e);if(l!==!0)throw new O("option "+s+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}const fi={assertOptions:Jx,validators:fs},Ce=fi.validators;let Er=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ld,response:new Ld}}async request(t,r){try{return await this._request(t,r)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=(()=>{if(!i.stack)return"";const o=i.stack.indexOf(`
`);return o===-1?"":i.stack.slice(o+1)})();try{if(!a.stack)a.stack=s;else if(s){const o=s.indexOf(`
`),c=o===-1?-1:s.indexOf(`
`,o+1),l=c===-1?"":s.slice(c+1);String(a.stack).endsWith(l)||(a.stack+=`
`+s)}}catch{}}throw a}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Lr(this.defaults,r);const{transitional:a,paramsSerializer:i,headers:s}=r;a!==void 0&&fi.assertOptions(a,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean),legacyInterceptorReqResOrdering:Ce.transitional(Ce.boolean),advertiseZstdAcceptEncoding:Ce.transitional(Ce.boolean),validateStatusUndefinedResolves:Ce.transitional(Ce.boolean)},!1),i!=null&&(j.isFunction(i)?r.paramsSerializer={serialize:i}:fi.assertOptions(i,{encode:Ce.function,serialize:Ce.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),fi.assertOptions(r,{baseUrl:Ce.spelling("baseURL"),withXsrfToken:Ce.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[r.method]);s&&j.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete s[x]}),r.headers=Re.concat(o,s);const c=[];let l=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(r)===!1)return;l=l&&w.synchronous;const v=r.transitional||ic;v&&v.legacyInterceptorReqResOrdering?c.unshift(w.fulfilled,w.rejected):c.push(w.fulfilled,w.rejected)});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let u,p=0,f;if(!l){const x=[Vd.bind(this),void 0];for(x.unshift(...c),x.push(...d),f=x.length,u=Promise.resolve(r);p<f;)u=u.then(x[p++],x[p++]);return u}f=c.length;let b=r;for(;p<f;){const x=c[p++],w=c[p++];try{b=x(b)}catch(v){w.call(this,v);break}}try{u=Vd.call(this,b)}catch(x){return Promise.reject(x)}for(p=0,f=d.length;p<f;)u=u.then(d[p++],d[p++]);return u}getUri(t){t=Lr(this.defaults,t);const r=Qm(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Ym(r,t.params,t.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(t){Er.prototype[t]=function(r,a){return this.request(Lr(a||{},{method:t,url:r,data:a&&j.hasOwnProp(a,"data")?a.data:void 0}))}});j.forEach(["post","put","patch","query"],function(t){function r(a){return function(s,o,c){return this.request(Lr(c||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Er.prototype[t]=r(),t!=="query"&&(Er.prototype[t+"Form"]=r(!0))});let Zx=class eh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const a=this;this.promise.then(i=>{if(!a._listeners)return;let s=a._listeners.length;for(;s-- >0;)a._listeners[s](i);a._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{a.subscribe(c),s=c}).then(i);return o.cancel=function(){a.unsubscribe(s)},o},t(function(s,o,c){a.reason||(a.reason=new Pa(s,o,c),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=a=>{t.abort(a)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new eh(function(i){t=i}),cancel:t}}};function e2(e){return function(r){return e.apply(null,r)}}function t2(e){return j.isObject(e)&&e.isAxiosError===!0}const nl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(nl).forEach(([e,t])=>{nl[t]=e});function th(e){const t=new Er(e),r=Rm(Er.prototype.request,t);return j.extend(r,Er.prototype,t,{allOwnKeys:!0}),j.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return th(Lr(e,i))},r}const pe=th(Ea);pe.Axios=Er;pe.CanceledError=Pa;pe.CancelToken=Zx;pe.isCancel=Gm;pe.VERSION=oc;pe.toFormData=hs;pe.AxiosError=O;pe.Cancel=pe.CanceledError;pe.all=function(t){return Promise.all(t)};pe.spread=e2;pe.isAxiosError=t2;pe.mergeConfig=Lr;pe.AxiosHeaders=Re;pe.formToJSON=e=>Wm(j.isHTMLForm(e)?new FormData(e):e);pe.getAdapter=Zm.getAdapter;pe.HttpStatusCode=nl;pe.default=pe;const{Axios:x5,AxiosError:b5,CanceledError:y5,isCancel:v5,CancelToken:w5,VERSION:k5,all:j5,Cancel:N5,isAxiosError:S5,spread:E5,toFormData:P5,AxiosHeaders:C5,HttpStatusCode:z5,formToJSON:T5,getAdapter:R5,mergeConfig:O5,create:L5}=pe,Xs="prism_token",Te={getToken(){return localStorage.getItem(Xs)},setToken(e){localStorage.setItem(Xs,e)},removeToken(){localStorage.removeItem(Xs)}},r2="http://localhost:5000/api",J=pe.create({baseURL:r2,headers:{"Content-Type":"application/json"}});J.interceptors.request.use(e=>{const t=Te.getToken();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));J.interceptors.response.use(e=>e,e=>{var t;if(((t=e.response)==null?void 0:t.status)===401){Te.removeToken();const r=`${window.location.pathname}${window.location.search}`,a=new URLSearchParams({returnTo:r}).toString();window.location.href=`/login?${a}`}return Promise.reject(e)});const ot={AUTH:{LOGIN:"/auth/login",REGISTER:"/auth/register",LOGOUT:"/auth/logout",RESEND_OTP:"/auth/resend-otp",VERIFY_OTP:"/auth/verify-otp",FORGOT_PASSWORD:"/auth/forgot-password",RESET_PASSWORD:"/auth/reset-password",GOOGLE_CODE_LOGIN:"/auth/google/code-login",GOOGLE_TOKEN_LOGIN:"/auth/google/token-login",ME:"/auth/me",PROFILE:"/auth/profile"},TICKETS:{MY_TICKETS:"/tickets/my-tickets",REQUEST:"/tickets/request",BY_ID:"/tickets/:id",PAYMENT_PROOF:"/tickets/:id/payment-proof",VERIFY:"/tickets/:id/verify"},CONTENT:{EVENTS:"/content/events",EVENT_BY_ID:"/content/events/:id",SPONSORS:"/content/sponsors",FACILITIES:"/content/facilities",CONTACT:"/content/contact"}},rh="ozilla_local_users";let zt=!1;function Un(e){return String(e||"").toLowerCase().trim()}function al(e){return String(e||"").trim()}function Yt(){try{const e=localStorage.getItem(rh),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Ga(e){localStorage.setItem(rh,JSON.stringify(e))}function n2(e){const t={sub:e.id,email:e.email,mode:"local-fallback"};return`local.${btoa(JSON.stringify(t))}`}function Xa(e){const t=String(e||""),r=t.startsWith("local.")?t.slice(6):t;try{return JSON.parse(atob(r))}catch{return null}}function Bn(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName,name:e.name||`${e.firstName||""} ${e.lastName||""}`.trim(),email:e.email,phone:e.phone,role:e.role||"user"}}function qd(e={}){const t=String(e.firstName||"Local").trim()||"Local",r=String(e.lastName||"User").trim()||"User",a=Un(e.email||"local@ozillafestival.com"),i=al(e.phone||"+923000000000");return{id:e.id||`local-user-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,firstName:t,lastName:r,name:`${t} ${r}`.trim(),email:a,phone:i,password:String(e.password||""),role:"user"}}function a2(e){var t,r;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((r=e==null?void 0:e.message)==null?void 0:r.includes("ECONNREFUSED")))}function gr(e){return a2(e)?(zt=!0,!0):!1}function Qa(e){const t=Bn(e);return{token:n2(t),user:t,mode:"local-fallback"}}const Nt={async login(e){if(zt){const t=Un(e==null?void 0:e.email),r=String((e==null?void 0:e.password)||""),a=Yt().find(i=>i.email===t&&i.password===r);if(!a){const i=new Error("Invalid credentials");throw i.response={status:401,data:{message:"Invalid credentials"}},i}return Qa(a)}try{return(await J.post(ot.AUTH.LOGIN,e)).data}catch(t){if(gr(t)){const r=Un(e==null?void 0:e.email),a=String((e==null?void 0:e.password)||""),i=Yt().find(s=>s.email===r&&s.password===a);if(!i){const s=new Error("Invalid credentials");throw s.response={status:401,data:{message:"Invalid credentials"}},s}return Qa(i)}throw t}},async register(e){if(zt){const t=Un(e==null?void 0:e.email),r=al(e==null?void 0:e.phone),a=Yt();if(a.some(c=>c.email===t)){const c=new Error("Account already exists with this email");throw c.response={status:409,data:{message:"Account already exists with this email"}},c}if(a.some(c=>c.phone===r)){const c=new Error("Account already exists with this phone number");throw c.response={status:409,data:{message:"Account already exists with this phone number"}},c}const o=qd(e);return Ga([o,...a]),Qa(o)}try{return(await J.post(ot.AUTH.REGISTER,e)).data}catch(t){if(gr(t)){const r=Un(e==null?void 0:e.email),a=al(e==null?void 0:e.phone),i=Yt();if(i.some(l=>l.email===r)){const l=new Error("Account already exists with this email");throw l.response={status:409,data:{message:"Account already exists with this email"}},l}if(i.some(l=>l.phone===a)){const l=new Error("Account already exists with this phone number");throw l.response={status:409,data:{message:"Account already exists with this phone number"}},l}const c=qd(e);return Ga([c,...i]),Qa(c)}throw t}},async resendOtp(e){if(zt)return{message:"Development OTP generated successfully.",otpForDevelopment:"123456",mode:"local-fallback"};try{return(await J.post(ot.AUTH.RESEND_OTP,{email:e})).data}catch(t){if(gr(t))return{message:"Development OTP generated successfully.",otpForDevelopment:"123456",mode:"local-fallback"};throw t}},async verifyOtp(e){if(zt){if(String((e==null?void 0:e.otp)||"").trim()!=="123456"){const t=new Error("OTP verification failed");throw t.response={status:400,data:{message:"OTP verification failed"}},t}return{message:"Email verified successfully",mode:"local-fallback"}}try{return(await J.post(ot.AUTH.VERIFY_OTP,e)).data}catch(t){if(gr(t)){if(String((e==null?void 0:e.otp)||"").trim()!=="123456"){const r=new Error("OTP verification failed");throw r.response={status:400,data:{message:"OTP verification failed"}},r}return{message:"Email verified successfully",mode:"local-fallback"}}throw t}},async getCurrentUser(){const e=Te.getToken(),t=Xa(e);if((t==null?void 0:t.mode)==="local-fallback"||String(e||"").startsWith("local.")){const r=Yt(),a=r.find(i=>i.id===(t==null?void 0:t.sub))||r.find(i=>i.email===(t==null?void 0:t.email));if(!a){const i=new Error("Unauthorized");throw i.response={status:401,data:{message:"Unauthorized"}},i}return zt=!0,Bn(a)}if(zt){const r=new Error("Unauthorized");throw r.response={status:401,data:{message:"Unauthorized"}},r}try{return(await J.get(ot.AUTH.ME)).data}catch(r){if(gr(r)){const a=Xa(e);if(!(a!=null&&a.sub)&&!(a!=null&&a.email)){const o=new Error("Unauthorized");throw o.response={status:401,data:{message:"Unauthorized"}},o}const i=Yt(),s=i.find(o=>o.id===a.sub)||i.find(o=>o.email===a.email);if(!s){const o=new Error("Unauthorized");throw o.response={status:401,data:{message:"Unauthorized"}},o}return Bn(s)}throw r}},async logout(){if(zt)return{message:"Logged out successfully"};try{return(await J.post(ot.AUTH.LOGOUT)).data}catch(e){if(gr(e))return{message:"Logged out successfully"};throw e}},async forgotPassword(e){return(await J.post(ot.AUTH.FORGOT_PASSWORD,{email:e})).data},async resetPassword(e){return(await J.post(ot.AUTH.RESET_PASSWORD,e)).data},async googleCodeLogin(e,t="postmessage"){return(await J.post(ot.AUTH.GOOGLE_CODE_LOGIN,{code:e,redirectUri:t})).data},async googleTokenLogin(e){return(await J.post(ot.AUTH.GOOGLE_TOKEN_LOGIN,{credential:e})).data},async updateProfile(e){if(zt){const t=Te.getToken(),r=Xa(t),a=Yt(),i=a.findIndex(c=>c.id===(r==null?void 0:r.sub)||c.email===(r==null?void 0:r.email));if(i===-1){const c=new Error("Unauthorized");throw c.response={status:401,data:{message:"Unauthorized"}},c}const s=a[i],o={...s,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():s.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():s.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():s.phone};return o.name=`${o.firstName||""} ${o.lastName||""}`.trim()||s.name,a[i]=o,Ga(a),{message:"Profile updated successfully",user:Bn(o)}}try{return(await J.put(ot.AUTH.PROFILE,e)).data}catch(t){if(gr(t)){const r=Te.getToken(),a=Xa(r),i=Yt(),s=i.findIndex(l=>l.id===(a==null?void 0:a.sub)||l.email===(a==null?void 0:a.email));if(s===-1){const l=new Error("Unauthorized");throw l.response={status:401,data:{message:"Unauthorized"}},l}const o=i[s],c={...o,firstName:typeof(e==null?void 0:e.firstName)=="string"?e.firstName.trim():o.firstName,lastName:typeof(e==null?void 0:e.lastName)=="string"?e.lastName.trim():o.lastName,phone:typeof(e==null?void 0:e.phone)=="string"?e.phone.trim():o.phone};return c.name=`${c.firstName||""} ${c.lastName||""}`.trim()||o.name,i[s]=c,Ga(i),{message:"Profile updated successfully",user:Bn(c)}}throw t}}},nh=k.createContext(null);function i2({children:e}){const[t,r]=k.useState(null),[a,i]=k.useState(!0);k.useEffect(()=>{s()},[]);const s=async()=>{try{if(Te.getToken()){const p=await Nt.getCurrentUser();r(p)}}catch{Te.removeToken()}finally{i(!1)}},o=async u=>{const p=await Nt.login(u);return Te.setToken(p.token),r(p.user),p},c=async u=>{const p=await Nt.register(u);return Te.setToken(p.token),r(p.user),p},l=()=>{Nt.logout().catch(()=>{}),Te.removeToken(),r(null)},d={user:t,isAdmin:(t==null?void 0:t.role)==="admin",loading:a,login:o,register:c,logout:l,checkAuth:s};return n.jsx(nh.Provider,{value:d,children:e})}function bt(){const e=k.useContext(nh);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}function s2({children:e}){const{user:t,loading:r}=bt(),a=Ke();if(r)return n.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(!t){const i=`${a.pathname}${a.search}`,s=new URLSearchParams({returnTo:i}).toString();return n.jsx(zm,{to:`/login?${s}`,replace:!0})}return e||n.jsx(ja,{})}function o2({children:e}){const{user:t,loading:r}=bt(),a=Ke();if(r)return n.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."});if(t){const s=new URLSearchParams(a.search).get("returnTo"),o=s&&s.startsWith("/")?s:"/dashboard";return n.jsx(zm,{to:o,replace:!0})}return e||n.jsx(ja,{})}function Qs({children:e}){const t=Ke(),r=t.pathname==="/login",a=t.pathname==="/register";return n.jsx("div",{className:`auth-page ${r?"auth-page-login":""} ${a?"auth-page-register":""}`,children:n.jsxs("div",{className:"auth-shell",children:[n.jsx("aside",{className:"auth-side-panel",children:n.jsxs("div",{className:"auth-side-copy",children:[n.jsx("div",{className:"auth-side-logo-wrap",children:n.jsx("img",{src:"/assets/company-logo.jpeg",alt:"Ozilla Festival",className:"auth-side-logo"})}),n.jsx("h1",{className:"auth-side-title",children:"Premium Concert & Event"}),n.jsx("p",{className:"auth-side-text",children:"Continue with your account to purchase tickets and manage festival access."})]})}),n.jsx("section",{className:"auth-card",children:e||n.jsx(ja,{})})]})})}const l2=[{label:"Home",to:"/dashboard"},{label:"Events",items:[{label:"Celebrity Singers",to:"/prismfest/celebrities"},{label:"Future Events",to:"/prismfest/future"}]},{label:"History",to:"/history"},{label:"Hotels",to:"/hotels"},{label:"Restaurants",to:"/restaurants"},{label:"Discounts",to:"/discounts"},{label:"Facilities",to:"/facilities"},{label:"Sponsorship",to:"/sponsorship"},{label:"My Tickets",to:"/tickets/my-tickets"},{label:"Contact",to:"/contact"},{label:"Ticket Portal",to:"/tickets",cta:!0}];function Wd(e){return(e==null?void 0:e.firstName)||(e==null?void 0:e.name)||(e==null?void 0:e.email)||"Account"}function ah(){const{user:e,isAdmin:t,logout:r}=bt(),a=hr(),i=Ke(),[s,o]=k.useState(!1),[c,l]=k.useState(!1),[d,u]=k.useState(!1),[p,f]=k.useState(!1),[b,x]=k.useState(0),[w,v]=k.useState(null),m=k.useRef(0),h=k.useRef(null),g=k.useRef(null),y=k.useMemo(()=>{const E=[...l2];return t&&E.push({label:"Admin",to:"/admin/dashboard"}),E},[t]),S=6,N=Math.max(y.length-S,0),C=y.slice(b,b+S);k.useEffect(()=>{const E=()=>{h.current||(h.current=window.requestAnimationFrame(()=>{const A=window.scrollY,q=A-m.current;o(A>12),!d&&Math.abs(q)>6&&l(A>130&&q>0),A<=16&&l(!1),m.current=A,h.current=null}))};return E(),window.addEventListener("scroll",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),h.current&&window.cancelAnimationFrame(h.current)}},[d]),k.useEffect(()=>{u(!1),f(!1),v(null)},[i.pathname]),k.useEffect(()=>{x(E=>Math.min(E,N))},[N]),k.useEffect(()=>()=>{g.current&&window.clearTimeout(g.current)},[]);const P=()=>{r(),a("/")},U=E=>{g.current&&(window.clearTimeout(g.current),g.current=null),v(E)},R=()=>{g.current&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{v(null),g.current=null},220)},D=({isActive:E})=>`site-nav-rail-item ${E?"active":""}`,ee=E=>{var A;return(A=E.items)==null?void 0:A.some(q=>i.pathname===q.to||i.pathname.startsWith(`${q.to}/`))};return n.jsxs("nav",{className:`site-nav booking-nav navbar-fixed ${s?"scrolled":""} ${c?"nav-hidden":""}`,"aria-label":"Main navigation",children:[n.jsxs("div",{className:"site-nav-main-shell navbar-repair-shell",children:[n.jsxs(B,{to:"/",className:"site-brand-cluster navbar-repair-brand","aria-label":"Ozilla Festival home",children:[n.jsx("span",{className:"site-brand-logo-shell",children:n.jsx("img",{src:"/assets/ozilla/logo.png",alt:"",className:"site-brand-logo-img"})}),n.jsx("span",{className:"site-brand-title",children:"Ozilla Festival"})]}),n.jsxs("div",{className:"navbar-repair-links",children:[n.jsx("button",{type:"button",className:`navbar-nav-arrow ${b===0?"disabled":""}`,onClick:()=>x(E=>Math.max(0,E-1)),disabled:b===0,"aria-label":"Show previous navigation links",children:"‹"}),C.map(E=>E.items?n.jsxs("div",{className:`navbar-more navbar-nav-group ${w===E.label?"open":""}`,onMouseEnter:()=>U(E.label),onMouseLeave:R,onFocus:()=>U(E.label),onBlur:A=>{A.currentTarget.contains(A.relatedTarget)||R()},children:[n.jsxs("button",{type:"button",className:`site-nav-rail-item navbar-more-button ${ee(E)?"active":""} ${E.cta?"site-nav-ticket-link":""}`,onClick:()=>{w===E.label?R():U(E.label)},"aria-expanded":w===E.label,children:[E.label,n.jsx("span",{"aria-hidden":"true",children:"v"})]}),n.jsx("div",{className:"navbar-more-menu",children:E.items.map(A=>n.jsx(qa,{to:A.to,className:D,children:A.label},A.to))})]},E.label):n.jsx(qa,{to:E.to,className:({isActive:A})=>`${D({isActive:A})} ${E.cta?"site-nav-ticket-link":""}`,children:E.label},E.to)),n.jsx("button",{type:"button",className:`navbar-nav-arrow ${b>=N?"disabled":""}`,onClick:()=>x(E=>Math.min(N,E+1)),disabled:b>=N,"aria-label":"Show next navigation links",children:"›"})]}),n.jsxs("div",{className:"navbar-repair-actions",children:[e?n.jsxs("div",{className:`navbar-account ${p?"open":""}`,children:[n.jsxs("button",{type:"button",className:"navbar-account-button",onClick:()=>f(E=>!E),"aria-expanded":p,children:[n.jsx("span",{children:String(Wd(e)).slice(0,1).toUpperCase()}),n.jsx("strong",{children:Wd(e)})]}),n.jsxs("div",{className:"navbar-account-menu",children:[n.jsx(B,{to:"/account",children:"Account"}),n.jsx(B,{to:"/tickets/my-tickets",children:"My Tickets"}),t&&n.jsx(B,{to:"/admin/dashboard",children:"Admin"}),n.jsx("button",{type:"button",onClick:P,children:"Logout"})]})]}):n.jsxs("div",{className:"site-nav-auth-pills",children:[n.jsx(B,{to:"/login",className:"site-nav-login-pill",children:"Login"}),n.jsx(B,{to:"/register",className:"site-nav-register-pill",children:"Sign Up"})]}),n.jsxs("button",{type:"button",className:`site-mobile-icon-btn site-mobile-menu-trigger ${d?"open":""}`,"aria-label":d?"Close menu":"Open menu","aria-expanded":d,onClick:()=>u(E=>!E),children:[n.jsx("span",{className:"site-burger-line"}),n.jsx("span",{className:"site-burger-line"}),n.jsx("span",{className:"site-burger-line"})]})]})]}),n.jsx("div",{className:`site-mobile-menu-overlay navbar-mobile-overlay ${d?"open":""}`,onClick:()=>u(!1),children:n.jsxs("div",{className:`site-mobile-menu-drawer navbar-mobile-panel ${d?"open":""}`,onClick:E=>E.stopPropagation(),children:[n.jsxs("div",{className:"site-mobile-menu-header",children:[n.jsxs("div",{children:[n.jsx("p",{className:"site-mobile-menu-kicker",children:"Ozilla Festival"}),n.jsx("h2",{className:"site-mobile-menu-title",children:"Menu"})]}),n.jsx("button",{type:"button",className:"site-mobile-menu-close",onClick:()=>u(!1),"aria-label":"Close menu",children:"x"})]}),n.jsx("div",{className:"site-mobile-menu-links",children:y.map(E=>E.items?n.jsxs("div",{className:"site-mobile-menu-group",children:[n.jsx("p",{children:E.label}),E.items.map(A=>n.jsx(qa,{to:A.to,onClick:()=>u(!1),children:A.label},A.to))]},E.label):n.jsx(qa,{to:E.to,onClick:()=>u(!1),children:E.label},E.to))}),n.jsx("div",{className:"site-mobile-menu-auth",children:e?n.jsx("button",{type:"button",onClick:()=>{P(),u(!1)},children:"Logout"}):n.jsxs(n.Fragment,{children:[n.jsx(B,{to:"/login",onClick:()=>u(!1),children:"Login"}),n.jsx(B,{to:"/register",onClick:()=>u(!1),children:"Sign Up"})]})})]})})]})}const c2=[["Home","/dashboard"],["Artists","/prismfest/celebrities"],["Future Events","/prismfest/future"],["Hotels","/hotels"],["Restaurants","/restaurants"],["Discounts","/discounts"],["Sponsors","/sponsorship"]],d2=[["Contact","/contact"],["FAQs","/contact"],["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["Ticket Portal","/tickets"],["My Tickets","/tickets/my-tickets"]],u2=[["Facebook","https://www.facebook.com/ozillafestival","FB"],["Instagram","https://www.instagram.com/ozillafestival","IG"],["TikTok","https://www.tiktok.com","TT"],["YouTube","https://www.youtube.com","YT"],["LinkedIn","https://www.linkedin.com","IN"]];function ih(){return n.jsxs("footer",{className:"festival-footer",children:[n.jsxs("div",{className:"festival-footer-ambient","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("section",{className:"festival-footer-cta","aria-label":"Festival call to action",children:[n.jsxs("div",{children:[n.jsx("p",{children:"Ozilla Festival 2026"}),n.jsx("h2",{children:"Ready to experience Ozilla Festival 2026?"}),n.jsx("span",{children:"Join thousands of music lovers, creators, food enthusiasts, and artists for an unforgettable experience in Lahore."})]}),n.jsxs("div",{className:"festival-footer-cta-actions",children:[n.jsx(B,{to:"/tickets",className:"festival-footer-primary-action",children:"Buy Tickets"}),n.jsx(B,{to:"/prismfest/future",className:"festival-footer-secondary-action",children:"Explore Events"})]})]}),n.jsxs("div",{className:"festival-footer-shell",children:[n.jsxs("div",{className:"festival-footer-grid",children:[n.jsxs("section",{className:"festival-footer-brand-panel",children:[n.jsxs(B,{to:"/",className:"festival-footer-logo","aria-label":"Ozilla Festival home",children:[n.jsx("span",{children:n.jsx("img",{src:"/assets/ozilla/logo.png",alt:"",loading:"lazy"})}),n.jsx("strong",{children:"Ozilla Festival"})]}),n.jsx("p",{children:"Creating unforgettable experiences through music, art, culture and entertainment."}),n.jsx("div",{className:"festival-footer-socials","aria-label":"Social media links",children:u2.map(([e,t,r])=>n.jsx("a",{href:t,target:"_blank",rel:"noreferrer","aria-label":e,children:r},e))})]}),n.jsxs("nav",{className:"festival-footer-links","aria-label":"Explore links",children:[n.jsx("h3",{children:"Explore"}),c2.map(([e,t])=>n.jsx(B,{to:t,children:e},e))]}),n.jsxs("nav",{className:"festival-footer-links","aria-label":"Support links",children:[n.jsx("h3",{children:"Support"}),d2.map(([e,t])=>n.jsx(B,{to:t,children:e},e))]}),n.jsxs("section",{className:"festival-footer-contact",children:[n.jsx("h3",{children:"Contact"}),n.jsxs("p",{children:[n.jsx("span",{children:"LOC"}),"Lahore, Pakistan"]}),n.jsxs("p",{children:[n.jsx("span",{children:"EM"}),"ozillafestival@gmail.com"]}),n.jsxs("p",{children:[n.jsx("span",{children:"PH"}),"+92 322 6622221"]}),n.jsxs("p",{children:[n.jsx("span",{children:"HR"}),"Mon - Sat, 10:00 AM - 8:00 PM"]})]})]}),n.jsxs("section",{className:"festival-footer-newsletter","aria-label":"Newsletter subscription",children:[n.jsxs("div",{children:[n.jsx("p",{children:"Stay Updated"}),n.jsx("h3",{children:"Get exclusive event updates, artist announcements and special offers."})]}),n.jsxs("form",{onSubmit:e=>e.preventDefault(),children:[n.jsx("input",{type:"email",placeholder:"Enter your email address","aria-label":"Email address"}),n.jsx("button",{type:"submit",children:"Subscribe"})]})]}),n.jsxs("div",{className:"festival-footer-bottom",children:[n.jsx("p",{children:"© 2026 Ozilla Festival. All Rights Reserved."}),n.jsx("p",{children:"Designed with love for unforgettable festival experiences."}),n.jsxs("div",{children:[n.jsx(B,{to:"/privacy",children:"Privacy Policy"}),n.jsx(B,{to:"/terms",children:"Terms"}),n.jsx(B,{to:"/privacy",children:"Cookies"})]})]})]})]})}function te({children:e}){return n.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50 app-shell",children:[n.jsx(ah,{}),n.jsx("div",{className:"flex flex-1 app-layout-body",children:n.jsx("main",{className:"flex-1 p-6 app-main app-content",children:n.jsx("div",{className:"app-page-frame",children:e||n.jsx(ja,{})})})}),n.jsx(ih,{})]})}function Ks({children:e}){return n.jsxs("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50",children:[n.jsx(ah,{}),n.jsx("main",{className:"flex-1 p-6 app-main app-content",children:n.jsx("div",{className:"app-page-frame",children:e||n.jsx(ja,{})})}),n.jsx(ih,{})]})}async function sh({clientId:e,onCode:t}){throw new Error("Google client is not configured")}const p2='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>';function m2(){const e=hr(),t=Ke(),{login:r,checkAuth:a}=bt(),i="",s=new URLSearchParams(t.search).get("returnTo"),o=s&&s.startsWith("/")?s:"/dashboard",[c,l]=k.useState(!1),[d,u]=k.useState({email:"",password:""}),[p,f]=k.useState(!0),[b,x]=k.useState(""),[w,v]=k.useState(""),[m,h]=k.useState(!1),[g,y]=k.useState(!1),S=P=>{v(""),u({...d,[P.target.name]:P.target.value})},N=async P=>{var U,R;P.preventDefault(),x(""),v(""),h(!0);try{await r(d),v("Login successful. Preparing your festival workspace..."),await new Promise(D=>setTimeout(D,450)),e(o)}catch(D){x(((R=(U=D.response)==null?void 0:U.data)==null?void 0:R.message)||"Login failed")}finally{h(!1)}},C=async()=>{var P,U;x(""),v(""),y(!0);try{if(!i){const R=await Nt.googleCodeLogin("local-dev-google-login","postmessage");Te.setToken(R.token),await a(),v("Google sign-in successful. Preparing your festival workspace..."),await new Promise(D=>setTimeout(D,450)),e(o);return}await sh({clientId:i,onCode:async R=>{const D=await Nt.googleCodeLogin(R,"postmessage");Te.setToken(D.token),await a(),v("Google sign-in successful. Preparing your festival workspace..."),await new Promise(ee=>setTimeout(ee,450)),e(o)}})}catch(R){const D=((U=(P=R.response)==null?void 0:P.data)==null?void 0:U.message)||R.message||"Google sign-in failed";x(D)}finally{y(!1)}};return n.jsxs("form",{onSubmit:N,className:"auth-form login-form-premium",children:[b&&n.jsx("div",{className:"auth-alert auth-alert-error",children:b}),w&&n.jsx("div",{className:"auth-alert auth-alert-success login-success-alert",children:w}),n.jsx("div",{className:"auth-social-wrap",children:n.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google",onClick:C,disabled:g||m,children:[n.jsx("img",{src:p2,alt:"Google logo",className:"auth-google-logo"}),n.jsx("span",{children:g?"Opening Google...":"Sign in with Google"})]})}),n.jsx("div",{className:"auth-divider",children:n.jsx("span",{children:"Or sign in with email"})}),n.jsxs("div",{className:"auth-field login-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"login-email",children:"Email"}),n.jsx("input",{id:"login-email",type:"email",name:"email",value:d.email,onChange:S,className:"auth-input",placeholder:"you@example.com",autoComplete:"email",required:!0})]}),n.jsxs("div",{className:"auth-field login-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"login-password",children:"Password"}),n.jsxs("div",{className:"auth-input-wrap",children:[n.jsx("input",{id:"login-password",type:c?"text":"password",name:"password",value:d.password,onChange:S,className:"auth-input auth-input-with-icon",placeholder:"Enter your password",autoComplete:"current-password",required:!0}),n.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>l(P=>!P),"aria-label":c?"Hide password":"Show password",children:c?"🙈":"👁"})]})]}),n.jsxs("div",{className:"login-form-row",children:[n.jsxs("label",{className:"login-remember",children:[n.jsx("input",{type:"checkbox",checked:p,onChange:P=>f(P.target.checked)}),n.jsx("span",{children:"Remember me"})]}),n.jsx("button",{type:"button",className:"auth-link login-forgot-link",children:"Forgot Password?"})]}),n.jsx("button",{type:"submit",disabled:m||g,className:"auth-btn auth-btn-primary",children:m?n.jsxs("span",{className:"login-loading-wrap",children:[n.jsx("span",{className:"login-loading-dot"}),"Signing In..."]}):n.jsx("span",{children:"Sign In"})}),n.jsxs("div",{className:"login-register-line",children:[n.jsx("span",{children:"Don't have an account?"}),n.jsx(B,{to:`/register?${new URLSearchParams({returnTo:o}).toString()}`,children:"Create New Account"})]}),n.jsxs("div",{className:"login-trust-grid","aria-label":"Login trust indicators",children:[n.jsx("span",{children:"Secure Login"}),n.jsx("span",{children:"Fast Authentication"}),n.jsx("span",{children:"Protected Account"}),n.jsx("span",{children:"Google Verified"})]})]})}function h2(){return n.jsxs("div",{className:"login-premium-panel",children:[n.jsxs("div",{className:"login-brand-lockup",children:[n.jsx("img",{src:"/assets/logo.jpeg",alt:"Ozilla Festival",className:"login-brand-logo"}),n.jsxs("div",{children:[n.jsx("p",{className:"auth-brand",children:"Ozilla Festival 2026"}),n.jsx("h2",{className:"auth-title",children:"Welcome Back"}),n.jsx("p",{className:"auth-subtitle",children:"Continue your Ozilla Festival journey."})]})]}),n.jsx(m2,{}),n.jsxs("div",{className:"login-auth-footer",children:[n.jsx(B,{to:"/privacy",children:"Privacy Policy"}),n.jsx(B,{to:"/terms",children:"Terms & Conditions"}),n.jsx(B,{to:"/contact",children:"Need Help?"}),n.jsx(B,{to:"/contact",children:"Contact Support"})]})]})}const f2='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23EA4335" d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.8-6-6.2s2.7-6.2 6-6.2c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 6.9 1.5 2.8 6 2.8 11.5S6.9 21.5 12 21.5c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.8-.1-1.2H12z"/><path fill="%2334A853" d="M3.9 7.4l3.2 2.4C7.9 7.8 9.8 6.3 12 6.3c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.5 14.6 1.5 12 1.5 8.1 1.5 4.8 3.8 3.9 7.4z"/><path fill="%23FBBC05" d="M12 21.5c2.6 0 4.8-.9 6.4-2.6l-3-2.5c-.8.6-1.9 1.1-3.4 1.1-3 0-5.5-2-6.4-4.8l-3.3 2.6c1 3.7 4.3 6.2 9.3 6.2z"/><path fill="%234285F4" d="M21.2 14.1c.1-.4.1-.8.1-1.2s0-.8-.1-1.2H12v3.9h5.5c-.3 1.4-1.1 2.5-2.1 3.2l3 2.5c1.7-1.6 2.8-4 2.8-7.2z"/></svg>',Js=()=>new Promise(e=>setTimeout(e,450));function g2(){const e=hr(),t=Ke(),{register:r,checkAuth:a}=bt(),i="",s=new URLSearchParams(t.search).get("returnTo"),o=s&&s.startsWith("/")?s:"/dashboard",[c,l]=k.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[d,u]=k.useState(""),[p,f]=k.useState(!1),[b,x]=k.useState(!1),[w,v]=k.useState(!1),[m,h]=k.useState(!1),[g,y]=k.useState(0),[S,N]=k.useState(""),[C,P]=k.useState(""),[U,R]=k.useState(!1),[D,ee]=k.useState(!1),[E,A]=k.useState(!1),[q,I]=k.useState(!1),[H,z]=k.useState({email:!1,phone:!1,password:!1,confirmPassword:!1}),F=/^\S+@\S+\.\S+$/.test(c.email),M=/^(\+?\d{1,3})?[\s-]?\d{10,12}$/.test(c.phone.replace(/\s+/g,"")),$={upper:/[A-Z]/.test(c.password),lower:/[a-z]/.test(c.password),number:/\d/.test(c.password),special:/[^A-Za-z0-9]/.test(c.password),length:c.password.length>=8},K=Object.values($).filter(Boolean).length,Le=K===5,xe=c.confirmPassword.length>0&&c.password===c.confirmPassword,yt=c.password.length>0,V=k.useMemo(()=>yt?K<=2?{label:"Weak",className:"weak",percent:28}:K===3?{label:"Medium",className:"medium",percent:52}:K===4?{label:"Strong",className:"strong",percent:78}:{label:"Excellent",className:"excellent",percent:100}:{label:"Start typing",className:"empty",percent:8},[yt,K]),he=[{key:"upper",text:"Uppercase letter",met:$.upper},{key:"lower",text:"Lowercase letter",met:$.lower},{key:"number",text:"Number",met:$.number},{key:"special",text:"Special character",met:$.special},{key:"length",text:"8+ characters",met:$.length}],Ir=c.firstName.trim()&&c.lastName.trim()&&F&&M&&Le&&xe&&b&&!U&&!D;k.useEffect(()=>{if(g<=0)return;const L=window.setInterval(()=>{y(W=>Math.max(0,W-1))},1e3);return()=>window.clearInterval(L)},[g]);const vt=()=>{N(""),P("")},$t=L=>{const{name:W,value:Y}=L.target;vt(),l(Se=>({...Se,[W]:Y})),W==="email"&&(u(""),f(!1),x(!1),y(0)),W in H&&Y.length>0&&z(Se=>({...Se,[W]:!0}))},fr=L=>{const{name:W}=L.target;W in H&&z(Y=>({...Y,[W]:!0}))},Je=async()=>{var L,W;if(vt(),!F){z(Y=>({...Y,email:!0})),N("Please enter a valid email address before sending OTP.");return}v(!0);try{const Y=await Nt.resendOtp(c.email);f(!0),x(!1),y(60),Y.otpForDevelopment?(u(Y.otpForDevelopment),P(`${Y.message} Development OTP: ${Y.otpForDevelopment}`)):P(Y.message||"OTP sent to your email address.")}catch(Y){N(((W=(L=Y.response)==null?void 0:L.data)==null?void 0:W.message)||Y.message||"Unable to send OTP.")}finally{v(!1)}},Sn=async()=>{var L,W;if(vt(),!F||d.trim().length<4){N("Enter the OTP sent to your email.");return}h(!0);try{const Y=await Nt.verifyOtp({email:c.email,otp:d});x(!0),P(Y.message||"Email verified successfully.")}catch(Y){x(!1),N(((W=(L=Y.response)==null?void 0:L.data)==null?void 0:W.message)||Y.message||"OTP verification failed.")}finally{h(!1)}},En=async L=>{var W,Y,Se;if(L.preventDefault(),vt(),!F){z(Ve=>({...Ve,email:!0})),N("Please enter a valid email address.");return}if(!b){N("Please verify your email OTP before creating your account.");return}if(!M){z(Ve=>({...Ve,phone:!0})),N("Please enter a valid mobile number.");return}if(!Le){z(Ve=>({...Ve,password:!0})),N("Please satisfy all password requirements.");return}if(!xe){z(Ve=>({...Ve,confirmPassword:!0})),N("Passwords do not match.");return}R(!0);try{await r({firstName:c.firstName,lastName:c.lastName,name:`${c.firstName} ${c.lastName}`.trim(),email:c.email,phone:c.phone,password:c.password}),P("Account created successfully. Preparing your festival workspace..."),await Js(),e(o)}catch(Ve){const xs=(W=Ve.response)==null?void 0:W.status,Ht=((Se=(Y=Ve.response)==null?void 0:Y.data)==null?void 0:Se.message)||"Registration failed",uc=Ht.toLowerCase();xs===409||uc.includes("already")||uc.includes("exists")?N("Account already exists with this email or phone number"):N(Ht)}finally{R(!1)}},it=async()=>{var L,W;vt(),ee(!0);try{if(!i){const Y=await Nt.googleCodeLogin("local-dev-google-login","postmessage");Te.setToken(Y.token),await a(),P("Google sign-up successful. Preparing your festival workspace..."),await Js(),e(o);return}await sh({clientId:i,onCode:async Y=>{const Se=await Nt.googleCodeLogin(Y,"postmessage");Te.setToken(Se.token),await a(),P("Google sign-up successful. Preparing your festival workspace..."),await Js(),e(o)}})}catch(Y){N(((W=(L=Y.response)==null?void 0:L.data)==null?void 0:W.message)||Y.message||"Google sign-up failed")}finally{ee(!1)}};return n.jsxs("form",{onSubmit:En,className:"auth-form register-form-premium",children:[S&&n.jsx("div",{className:"auth-alert auth-alert-error register-alert",children:S}),C&&n.jsx("div",{className:"auth-alert auth-alert-success register-alert",children:C}),n.jsx("div",{className:"auth-social-wrap",children:n.jsxs("button",{type:"button",className:"auth-btn auth-btn-outline auth-btn-google register-google-btn",onClick:it,disabled:D||U,children:[n.jsx("img",{src:f2,alt:"Google logo",className:"auth-google-logo"}),n.jsx("span",{children:D?"Opening Google...":"Sign up with Google"})]})}),n.jsx("div",{className:"auth-divider",children:n.jsx("span",{children:"Or create with email"})}),n.jsxs("div",{className:"auth-row register-name-row",children:[n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-first-name",children:"First Name"}),n.jsx("input",{id:"register-first-name",type:"text",name:"firstName",value:c.firstName,onChange:$t,className:"auth-input",autoComplete:"given-name",required:!0})]}),n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-last-name",children:"Last Name"}),n.jsx("input",{id:"register-last-name",type:"text",name:"lastName",value:c.lastName,onChange:$t,className:"auth-input",autoComplete:"family-name",required:!0})]})]}),n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-email",children:"Email Address"}),n.jsx("input",{id:"register-email",type:"email",name:"email",value:c.email,onChange:$t,onBlur:fr,className:`auth-input ${H.email&&!F?"auth-input-invalid":""}`,placeholder:"you@example.com",autoComplete:"email",required:!0})]}),H.email&&!F&&n.jsx("p",{className:"auth-field-error",children:"Please enter a valid email address."}),n.jsxs("div",{className:`register-otp-card register-otp-card-desktop ${b?"register-otp-verified":""}`,children:[n.jsxs("div",{children:[n.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),n.jsx("strong",{children:b?"Email verified":p?"Enter your OTP":"Verify before signup"}),n.jsx("span",{className:"register-otp-status",children:b?"Verified with premium security":g>0?`Resend available in ${g}s`:"One-time code expires in 10 minutes"})]}),n.jsxs("div",{className:"register-otp-controls",children:[n.jsx("button",{type:"button",className:"register-mini-btn",onClick:Je,disabled:w||!F||b||g>0,children:w?"Sending...":p?"Resend OTP":"Send OTP"}),n.jsx("input",{type:"text",value:d,onChange:L=>{vt(),u(L.target.value.replace(/\D/g,"").slice(0,6)),x(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code",disabled:!p||b}),n.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:Sn,disabled:!p||b||m,children:m?"Verifying...":b?"Verified":"Verify"})]}),b&&n.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-phone",children:"Phone Number"}),n.jsx("input",{id:"register-phone",type:"tel",name:"phone",value:c.phone,onChange:$t,onBlur:fr,className:`auth-input ${H.phone&&!M?"auth-input-invalid":""}`,placeholder:"+92 3XX XXXXXXX",autoComplete:"tel",required:!0})]}),H.phone&&!M&&n.jsx("p",{className:"auth-field-error",children:"Please enter a valid mobile number."}),n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-password",children:"Password"}),n.jsxs("div",{className:"auth-input-wrap",children:[n.jsx("input",{id:"register-password",type:E?"text":"password",name:"password",value:c.password,onChange:$t,onBlur:fr,className:`auth-input auth-input-with-icon ${H.password&&!Le?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),n.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>A(L=>!L),"aria-label":E?"Hide password":"Show password",children:E?"🙈":"👁"})]})]}),n.jsxs("div",{className:`register-strength register-strength-${V.className}`,children:[n.jsxs("div",{className:"register-strength-top",children:[n.jsx("span",{children:"Password Strength"}),n.jsx("strong",{children:V.label})]}),n.jsx("div",{className:"register-strength-track",children:n.jsx("span",{style:{width:`${V.percent}%`}})})]}),n.jsx("ul",{className:"auth-password-rules register-password-rules",children:he.map(L=>{const W=L.met?"auth-rule-met":yt?"auth-rule-unmet":"auth-rule-neutral";return n.jsxs("li",{className:`auth-password-rule-item ${W}`,children:[n.jsx("span",{className:"auth-rule-icon","aria-hidden":"true",children:L.met?"✓":"✗"}),n.jsx("span",{children:L.text})]},L.key)})}),n.jsxs("div",{className:"auth-field register-field-shell",children:[n.jsx("label",{className:"auth-label",htmlFor:"register-confirm-password",children:"Confirm Password"}),n.jsxs("div",{className:"auth-input-wrap",children:[n.jsx("input",{id:"register-confirm-password",type:q?"text":"password",name:"confirmPassword",value:c.confirmPassword,onChange:$t,onBlur:fr,className:`auth-input auth-input-with-icon ${H.confirmPassword&&!xe?"auth-input-invalid":""}`,autoComplete:"new-password",required:!0}),n.jsx("button",{type:"button",className:"auth-input-icon-btn",onClick:()=>I(L=>!L),"aria-label":q?"Hide confirm password":"Show confirm password",children:q?"🙈":"👁"})]})]}),H.confirmPassword&&!xe&&n.jsx("p",{className:"auth-field-error",children:"Passwords do not match."}),n.jsxs("div",{className:`register-otp-card register-otp-card-mobile ${b?"register-otp-verified":""}`,children:[n.jsxs("div",{children:[n.jsx("p",{className:"register-otp-kicker",children:"Email Verification"}),n.jsx("strong",{children:b?"Email verified":p?"Enter your OTP":"Verify before signup"}),n.jsx("span",{className:"register-otp-status",children:b?"Verified with premium security":g>0?`Resend available in ${g}s`:"One-time code expires in 10 minutes"})]}),n.jsxs("div",{className:"register-otp-controls",children:[n.jsx("button",{type:"button",className:"register-mini-btn",onClick:Je,disabled:w||!F||b||g>0,children:w?"Sending...":p?"Resend OTP":"Send OTP"}),n.jsx("input",{type:"text",value:d,onChange:L=>{vt(),u(L.target.value.replace(/\D/g,"").slice(0,6)),x(!1)},className:"register-otp-input",placeholder:"6-digit OTP",inputMode:"numeric",autoComplete:"one-time-code","aria-label":"Email OTP code",disabled:!p||b}),n.jsx("button",{type:"button",className:"register-mini-btn register-mini-btn-dark",onClick:Sn,disabled:!p||b||m,children:m?"Verifying...":b?"Verified":"Verify"})]}),b&&n.jsx("span",{className:"register-success-check","aria-hidden":"true",children:"✓"})]}),n.jsx("button",{type:"submit",disabled:!Ir,className:"auth-btn auth-btn-primary register-create-btn",children:U?n.jsxs("span",{className:"login-loading-wrap",children:[n.jsx("span",{className:"login-loading-dot"}),"Preparing Your Experience..."]}):n.jsx("span",{children:"Create Account"})}),n.jsxs("div",{className:"register-login-line",children:[n.jsx("span",{children:"Already have an account?"}),n.jsx(B,{to:`/login?${new URLSearchParams({returnTo:o}).toString()}`,children:"Sign In"})]}),n.jsxs("div",{className:"register-trust-grid","aria-label":"Registration trust indicators",children:[n.jsx("span",{children:"Secure Registration"}),n.jsx("span",{children:"Instant Verification"}),n.jsx("span",{children:"Protected Account"}),n.jsx("span",{children:"Google Verified"})]})]})}function x2(){return n.jsxs("div",{className:"register-premium-panel",children:[n.jsxs("div",{className:"register-brand-lockup",children:[n.jsx("img",{src:"/assets/logo.jpeg",alt:"Ozilla Festival",className:"register-brand-logo"}),n.jsxs("div",{children:[n.jsx("p",{className:"auth-brand",children:"Ozilla Festival 2026"}),n.jsx("h2",{className:"auth-title",children:"Join Ozilla Festival"}),n.jsx("p",{className:"auth-subtitle",children:"Become part of an unforgettable experience."})]})]}),n.jsx(g2,{}),n.jsxs("div",{className:"register-auth-footer",children:[n.jsx(B,{to:"/privacy",children:"Privacy Policy"}),n.jsx(B,{to:"/terms",children:"Terms & Conditions"}),n.jsx(B,{to:"/contact",children:"Need Help?"}),n.jsx(B,{to:"/contact",children:"Contact Support"})]})]})}function b2(){const[e]=r1(),t=hr(),{checkAuth:r}=bt(),[a,i]=k.useState("Signing you in with Google...");return k.useEffect(()=>{(async()=>{const o=e.get("token"),c=e.get("error"),l=e.get("returnTo"),d=l&&l.startsWith("/")?l:"/dashboard";if(c){i(c==="google_not_configured"?"Google sign-in is not configured on server yet. Please add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in server/.env.":"Google sign-in failed. Please try again.");const u=new URLSearchParams({returnTo:d}).toString();setTimeout(()=>t(`/login?${u}`,{replace:!0}),1200);return}if(!o){i("Google sign-in token not found. Please try again.");const u=new URLSearchParams({returnTo:d}).toString();setTimeout(()=>t(`/login?${u}`,{replace:!0}),1200);return}Te.setToken(o),await r(),t(d,{replace:!0})})()},[r,t,e]),n.jsx("div",{className:"auth-page",children:n.jsxs("div",{className:"auth-card",children:[n.jsx("h1",{className:"auth-title",children:"Google Sign-In"}),n.jsx("p",{className:"auth-subtitle",children:a})]})})}const ft={objective:"To build a premium experience platform where users can explore OZilla Festival, discover partner restaurants and hotels, claim discounts, and connect with event experiences.",about:"OZilla Festival is a youth-focused entertainment experience combining music, food, culture, creators, brands and communities into one powerful lifestyle platform.",journey:["Discover OZilla","Explore Partners","Select Discount","Use Promo Code","Enjoy Experience"],partnerBenefits:["Digital Visibility","Customer Reach","Influencer Promotion","Event Audience Access","Brand Awareness"],callToActions:["Explore Festival","Claim Discount","Become A Partner","Book Your Stay"],restaurants:[{name:"Street Grill Co.",cuisine:"BBQ and Fast Casual",location:"Karachi",discount:"15% OFF",offer:"Festival combo meal with priority queue access.",code:"OZILLA15"},{name:"Spice District",cuisine:"Pakistani Fusion",location:"Lahore",discount:"20% OFF",offer:"Family platter offer for OZilla audience.",code:"SPICE20"},{name:"Urban Brew",cuisine:"Cafe and Desserts",location:"Islamabad",discount:"Buy 1 Get 1",offer:"Coffee and dessert pair for creators and attendees.",code:"BREWBOGO"}],hotels:[{name:"Pearl Continental Hotel (PC)",location:"Lahore, Punjab, Pakistan",rates:"Premium city-center business and leisure rates",offer:"Flexible booking options with conference and dining access.",website:"https://www.expedia.com/Lahore-Hotels-Pearl-Continental-Lahore.h6062.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538185568&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&neighborhoodId=553248633981712959&selected=6062&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=124&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11315017303776210.g1kwd-82189323842618%3Aloc-144.e1c.m18d15bbf2af6c1d752fa9d1bc0e925b82.r1dbbc4399e805d7a471af9bb50c0eca6a53815556874c850795d8066b3e568804.c1.j1142691.k1152882.d182188878595064.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314006270&selectedRatePlan=380046345&categorySearch=any_option&searchId=60a6b42e-b43b-44af-a668-54a0fbd95022",image:"/assets/hotels/Pearl-Continental-Lahore.jpg",showImage:!0,description:"A flagship five-star property known for premium hospitality, executive facilities, and large event spaces.",facilities:["Luxury Rooms & Suites","Restaurants & Coffee Lounge","Swimming Pool","Fitness Center"],contact:"Reservations: +92 42 111 505 505",rating:"4.5/5"},{name:"Ramada by Wyndham Lahore",location:"Lahore, Punjab, Pakistan",rates:"Business-friendly international chain pricing",offer:"Comfort-focused stay packages with central access.",website:"https://www.guestreservations.com/ramada-by-wyndham-lahore-gulberg-ii/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=2639f60cc7641752938d9c426507dbb5&ctTriggered=true",image:"/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg",showImage:!0,description:"An international-branded stay option designed for business travelers and families seeking modern comfort.",facilities:["Comfort Rooms","All-Day Dining","Meeting Facilities","Wi-Fi Access"],contact:"Reservations: +92 42 111 111 211",rating:"4.3/5"},{name:"Hotel Indigo Lahore",location:"Lahore, Punjab, Pakistan",rates:"Boutique premium rates for curated city stays",offer:"Lifestyle stay experience with modern interiors and city vibe.",website:"https://indigoheights.com/",image:"/assets/hotels/Hotel-Indigo.jpg",showImage:!0,description:"A contemporary boutique-style hotel brand experience offering design-led rooms and premium hospitality.",facilities:["Designer Rooms","Signature Dining","Fitness Facilities","Business Services"],contact:"Reservations: +92 42 111 111 111",rating:"4.4/5"},{name:"Hotel One Gulberg Lahore",location:"Lahore, Punjab, Pakistan",rates:"Upper-midscale corporate and family packages",offer:"Value-focused business stays in a prime Lahore district.",website:"https://www.guestreservations.com/hotel-one-gulberg-lahore/booking?utm_source=microsoft&utm_medium=cpc&utm_campaign=318380766&msclkid=3d22881e8b211d72a380e25028093b5b",image:"/assets/hotels/Hotel-One-Gulberg-Lahore.jpg",showImage:!0,description:"A trusted local hospitality brand known for practical comfort, business convenience, and central location.",facilities:["Business-Friendly Rooms","Breakfast Service","Meeting Room","24/7 Front Desk"],contact:"Reservations: +92 42 111 111 563",rating:"4.2/5"},{name:"Luxus Grand Hotel (LC)",location:"Lahore, Punjab, Pakistan",rates:"Executive and leisure stay rates",offer:"City-center premium rooms with event-friendly access.",website:"https://www.expedia.com/Lahore-Hotels-Luxus-Grand-Hotel.h16225098.Hotel-Information?chkin=2026-07-23&chkout=2026-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1783538679588&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2068&destination=Lahore%2C+Punjab%2C+Pakistan&destType=MARKET&selected=16225098&latLong=31.554606%2C74.357155&sort=RECOMMENDED&top_dp=50&top_cur=USD&semcid=US.UB.BING.PT-c-EN.HOTEL&semdtl=a1429012176.b11317216326895908.g1kwd-82326765629610%3Aloc-144.e1c.m1f413ae58b13f11ee7d78c41612f456b3.r17441980d01bf266109c2845e02c5e619d691d9360faf76d1fb0b3ff083f73b12.c1.j1142691.k1152882.d182326298507125.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=201690559&selectedRatePlan=208425873&categorySearch=any_option&searchId=b938991e-d9ee-47cd-a5b9-bfbbe22962a7",image:"/assets/hotels/Luxus-Grand-Hotel.jpg",showImage:!0,description:"A modern luxury hotel in Lahore offering upscale rooms, contemporary dining, and premium guest services.",facilities:["Premium Rooms","Restaurant & Cafe","Concierge Support","Airport Transfer Assistance"],contact:"Reservations: +92 42 111 589 879",rating:"4.4/5"},{name:"Nishat Hotel Lahore",location:"Lahore, Punjab, Pakistan",rates:"Premium luxury rates with lifestyle amenities",offer:"High-end accommodation with shopping and dining proximity.",website:"https://www.booking.com/hotel/pk/the-nishat.en-gb.html?aid=2276380&label=msn-G%2AualcbtRsY8_D6yMU0tng-80333218529225%3Atikwd-80333372562144%3Aloc-144%3Aneo%3Amte%3Alp142691%3Adec%3Acid578349423%3Aagid1285329581450391%3Aclkid91bc1c0fd2ae13842aa77641760a897b&sid=d2e80396e6c920f70a72e21ba196f068&all_sr_blocks=112449101_204759422_0_2_0_670390&checkin=2026-07-14&checkout=2026-07-15&dest_id=-2767043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=112449101_204759422_0_2_0_670390&hpos=1&matching_block_id=112449101_204759422_0_2_0_670390&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=112449101_204759422_0_2_0_670390_3300000&srepoch=1783539000&srpvid=7c17890e04e000e0&type=total&ucfs=1&",image:"/assets/hotels/Nishat.jpg",showImage:!0,description:"A luxury Lahore hospitality brand recognized for refined interiors, premium service standards, and prime locations.",facilities:["Luxury Suites","Fine Dining","Spa & Wellness","Event and Meeting Spaces"],contact:"Reservations: +92 42 111 647 428",rating:"4.6/5"}]},y2="/assets/logo.jpeg",v2=[{icon:"LM",title:"Live Music",description:"High-energy stage nights with immersive sound, lights, and crowd moments."},{icon:"CS",title:"Celebrity Singers",description:"A curated lineup of crowd-favorite artists for a premium festival experience."},{icon:"EN",title:"Entertainment",description:"Brand zones, creators, food streets, games, activations, and social experiences."},{icon:"LH",title:"Luxury Hotels",description:"Recommended Lahore stays for visitors, partners, performers, and teams."},{icon:"TB",title:"Easy Ticket Booking",description:"A simple ticket portal with user details, payment proof, QR tickets, and history."},{icon:"BP",title:"Brand Partners",description:"High-visibility sponsorship and collaboration opportunities for premium brands."}],w2=[{value:5e3,suffix:"+",label:"Visitors"},{value:50,suffix:"+",label:"Artists"},{value:100,suffix:"+",label:"Partners"},{value:2,suffix:"",label:"Festival Days"}],k2=["Amazing Performances","International Stage Energy","Food Festival Culture","Safe Family Environment","Premium Guest Experience","Exclusive Partner Discounts"],j2=[{title:"Ozilla Festival 2026",date:"2026",description:"A premium Lahore festival experience built around music, food, creators, and partners."},{title:"Future Events",date:"Coming Soon",description:"Upcoming brand activations, entertainment nights, and community experiences."},{title:"Celebrity Night",date:"Live Stage",description:"A powerful stage experience featuring celebrity performers and crowd moments."}],N2=[{name:"Talwinder",image:"/assets/ozilla/talwinder.jpg"},{name:"Bohemia",image:"/assets/ozilla/Bohemia.jpg"},{name:"Hassan Raheem",image:"/assets/ozilla/hassan-raheem.jpg"},{name:"Imran Khan",image:"/assets/ozilla/Imran-Khan.jpg"}],Gd=["Restaurants","Hotels","Creators","Sponsors","Media","Brands","Food Partners","Venue Partners"];function S2({value:e,suffix:t}){const[r,a]=k.useState(0),i=k.useRef(null);return k.useEffect(()=>{const s=i.current;if(!s)return;let o=0;const c=new IntersectionObserver(([l])=>{if(!l.isIntersecting)return;const d=1200,u=performance.now(),p=f=>{const b=Math.min((f-u)/d,1),x=1-Math.pow(1-b,3);a(Math.round(e*x)),b<1&&(o=requestAnimationFrame(p))};o=requestAnimationFrame(p),c.disconnect()},{threshold:.35});return c.observe(s),()=>{c.disconnect(),cancelAnimationFrame(o)}},[e]),n.jsxs("span",{ref:i,children:[r,t]})}function Xd(){return n.jsxs("main",{className:"home-premium",children:[n.jsxs("section",{className:"home-hero","aria-label":"Ozilla Festival 2026",children:[n.jsx("img",{className:"home-hero-media",src:y2,alt:"Ozilla Festival stage"}),n.jsx("div",{className:"home-hero-overlay"}),n.jsxs("div",{className:"home-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"home-hero-content",children:[n.jsx("p",{className:"home-kicker",children:"LAHORE PUNJAB"}),n.jsx("h1",{children:"OZILLA FESTIVAL 2026"}),n.jsx("p",{className:"home-hero-copy",children:"Experience music, entertainment, culture and unforgettable moments."}),n.jsxs("div",{className:"home-hero-actions",children:[n.jsx(B,{className:"home-btn home-btn-primary",to:"/events",children:"Explore Events"}),n.jsx(B,{className:"home-btn home-btn-secondary",to:"/tickets",children:"Purchase Tickets"})]}),n.jsxs("div",{className:"home-hero-badges","aria-label":"Festival highlights",children:[n.jsx("span",{children:"2026 Lahore"}),n.jsx("span",{children:"Live Music"}),n.jsx("span",{children:"Family Experience"})]})]}),n.jsxs("div",{className:"home-scroll-indicator","aria-hidden":"true",children:[n.jsx("span",{}),"Scroll"]})]}),n.jsx("div",{className:"home-hero-divider","aria-hidden":"true"}),n.jsx("section",{className:"home-section home-intro-section",children:n.jsxs("div",{className:"home-section-heading home-center-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Festival Details"}),n.jsxs("h2",{children:["Future of ",n.jsx("span",{children:"Entertainment"})]}),n.jsx("p",{children:ft.objective})]})}),n.jsxs("section",{className:"home-section",children:[n.jsxs("div",{className:"home-section-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Highlights"}),n.jsx("h2",{children:"Everything visitors expect from a premium festival."})]}),n.jsx("div",{className:"home-highlight-grid",children:v2.map(e=>n.jsxs("article",{className:"home-highlight-card",children:[n.jsx("div",{className:"home-card-icon",children:e.icon}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.description})]},e.title))})]}),n.jsx("section",{className:"home-stats-section",children:n.jsx("div",{className:"home-stats-grid",children:w2.map(e=>n.jsxs("div",{className:"home-stat-card",children:[n.jsx("strong",{children:n.jsx(S2,{value:e.value,suffix:e.suffix})}),n.jsx("span",{children:e.label})]},e.label))})}),n.jsxs("section",{className:"home-section home-split-section",children:[n.jsxs("div",{className:"home-section-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Why Choose Ozilla"}),n.jsx("h2",{children:"Designed for music lovers, families, creators and brands."}),n.jsx("p",{children:"A safe, premium and highly shareable event experience with live performances, food culture, partner discounts and powerful brand moments."})]}),n.jsx("div",{className:"home-reason-grid",children:k2.map(e=>n.jsxs("div",{className:"home-reason-card",children:[n.jsx("span",{children:"Explore"}),e]},e))})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("div",{className:"home-section-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Upcoming Events"}),n.jsx("h2",{children:"Festival moments coming next."})]}),n.jsx("div",{className:"home-event-grid",children:j2.map(e=>n.jsx("article",{className:"home-event-card",children:n.jsxs("div",{children:[n.jsx("span",{children:e.date}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.description}),n.jsx(B,{to:"/events",children:"View Details"})]})},e.title))})]}),n.jsxs("section",{className:"home-section",children:[n.jsxs("div",{className:"home-section-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Celebrity Preview"}),n.jsx("h2",{children:"Featured voices for the Ozilla stage."})]}),n.jsx("div",{className:"home-celebrity-grid",children:N2.map(e=>n.jsxs("article",{className:"home-celebrity-card",children:[n.jsx("img",{src:e.image,alt:e.name,loading:"lazy"}),n.jsx("div",{className:"home-celebrity-overlay",children:n.jsx("h3",{children:e.name})})]},e.name))})]}),n.jsxs("section",{className:"home-partner-section",children:[n.jsxs("div",{className:"home-section-heading home-center-heading",children:[n.jsx("p",{className:"home-eyebrow",children:"Partners"}),n.jsx("h2",{children:"Built for brands that want real audience attention."})]}),n.jsx("div",{className:"home-partner-marquee",children:n.jsx("div",{className:"home-partner-track",children:[...Gd,...Gd].map((e,t)=>n.jsx("span",{children:e},`${e}-${t}`))})})]}),n.jsx("style",{children:`
        .home-premium {
          --home-deep: #041719;
          --home-ink: #101819;
          --home-muted: #55706f;
          --home-card: rgba(255, 250, 242, 0.86);
          --home-gold: #ffb000;
          --home-wine: #39132f;
          color: var(--home-ink);
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 18%, rgba(255, 176, 0, 0.08), transparent 22rem),
            radial-gradient(circle at 90% 42%, rgba(7, 51, 50, 0.12), transparent 24rem),
            linear-gradient(180deg, #fffaf4 0%, #f7eee8 48%, #fffaf4 100%);
        }

        .home-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(13rem, 20vw, 16rem) 1.25rem 5rem;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 40%, rgba(255, 176, 0, 0.2), transparent 18rem),
            radial-gradient(circle at 18% 78%, rgba(255, 77, 46, 0.18), transparent 18rem),
            radial-gradient(circle at 82% 18%, rgba(11, 79, 76, 0.72), transparent 24rem),
            linear-gradient(135deg, #020b0d, #041719 48%, #39132f);
        }

        .home-hero::before,
        .home-hero::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .home-hero::before {
          inset: 9%;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255, 176, 0, 0.28), transparent 48%),
            radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 60%);
          filter: blur(46px);
          animation: homeAuraDrift 10s ease-in-out infinite;
        }

        .home-hero::after {
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.1) 42%, transparent 57%),
            radial-gradient(ellipse at center, transparent 34%, rgba(0, 0, 0, 0.78) 100%);
          mix-blend-mode: screen;
          opacity: 0.32;
          animation: homeLightSweep 9s ease-in-out infinite;
        }

        .home-hero-media {
          position: absolute;
          left: 50%;
          top: 48%;
          width: min(78vw, 860px);
          height: min(70vh, 680px);
          object-fit: contain;
          opacity: 0.54;
          filter: saturate(1.2) contrast(1.08) drop-shadow(0 0 42px rgba(255, 176, 0, 0.22));
          transform: translate(-50%, -50%) scale(1);
          animation: homeLogoKenBurns 16s ease-in-out infinite alternate;
          z-index: -3;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 38%, rgba(255, 176, 0, 0.08), transparent 20rem),
            linear-gradient(90deg, rgba(2, 12, 12, 0.94), rgba(2, 12, 12, 0.44), rgba(2, 12, 12, 0.88)),
            linear-gradient(180deg, rgba(2, 12, 12, 0.26), rgba(2, 12, 12, 0.9));
          z-index: -2;
        }

        .home-particles span {
          position: absolute;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.86);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.82);
          animation: homeFloat 8s ease-in-out infinite;
          z-index: -1;
        }

        .home-particles span:nth-child(1) { left: 12%; top: 24%; }
        .home-particles span:nth-child(2) { right: 18%; top: 20%; animation-delay: 1.5s; }
        .home-particles span:nth-child(3) { left: 24%; bottom: 22%; animation-delay: 3s; }
        .home-particles span:nth-child(4) { right: 14%; bottom: 18%; animation-delay: 4.5s; }

        .home-hero-content {
          width: min(1120px, 100%);
          color: #fff;
          position: relative;
          z-index: 2;
          animation: homeRise 900ms ease both;
        }

        .home-hero-content::before {
          content: '';
          position: absolute;
          left: -4%;
          top: 11%;
          width: min(54vw, 680px);
          height: 52%;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(255, 176, 0, 0.18), transparent 62%),
            radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 55%);
          filter: blur(42px);
          pointer-events: none;
          z-index: -1;
        }

        .home-kicker,
        .home-eyebrow {
          color: var(--home-gold);
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .home-hero h1 {
          max-width: 920px;
          margin: 0.7rem 0 1rem;
          font-size: clamp(3.4rem, 10vw, 9rem);
          line-height: 0.88;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
          text-shadow:
            0 1px 0 rgba(255, 255, 255, 0.1),
            0 28px 80px rgba(0, 0, 0, 0.42);
        }

        .home-hero-copy {
          max-width: 620px;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1.08rem, 2vw, 1.45rem);
          line-height: 1.65;
        }

        .home-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .home-hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1.25rem;
        }

        .home-hero-badges span {
          display: inline-flex;
          align-items: center;
          min-height: 2.2rem;
          padding: 0 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(16px);
        }

        .home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          font-weight: 900;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .home-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.34) 45%, transparent 72%);
          transform: translateX(-120%);
          transition: transform 520ms ease;
          z-index: -1;
        }

        .home-btn:hover {
          transform: translateY(-3px);
        }

        .home-btn:hover::before {
          transform: translateX(120%);
        }

        .home-btn-primary {
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          color: #111;
          box-shadow: 0 18px 35px rgba(255, 126, 0, 0.25);
        }

        .home-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .home-scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 1.4rem;
          transform: translateX(-50%);
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .home-scroll-indicator span {
          width: 1px;
          height: 2.8rem;
          background: linear-gradient(180deg, transparent, #ffb000, transparent);
          animation: homePulse 1.7s ease-in-out infinite;
        }

        .home-hero-divider {
          width: min(1180px, calc(100% - 2rem));
          height: 1px;
          margin: -1px auto 0;
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.55), rgba(11, 79, 76, 0.32), transparent);
          position: relative;
          z-index: 3;
        }

        .home-hero-divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(62vw, 680px);
          height: 5.5rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 68%);
          filter: blur(22px);
          transform: translate(-50%, -50%);
        }

        .home-section,
        .home-stats-section,
        .home-partner-section,
        .home-cta-section {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 7rem) 0;
          position: relative;
          isolation: isolate;
        }

        .home-section::before,
        .home-partner-section::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: min(70vw, 820px);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(11, 79, 76, 0.18), rgba(255, 176, 0, 0.28), transparent);
        }

        .home-section::after {
          content: '';
          position: absolute;
          inset: 12% auto auto 50%;
          width: min(72vw, 860px);
          height: 18rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.055), transparent 68%);
          filter: blur(28px);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: -1;
        }

        .home-intro-section {
          padding-bottom: 2rem;
        }

        .home-section-heading {
          max-width: 760px;
          margin-bottom: 2rem;
        }

        .home-center-heading {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .home-section-heading h2,
        .home-cta-section h2 {
          margin-top: 0.45rem;
          color: var(--home-ink);
          font-size: clamp(2.2rem, 5.5vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .home-section-heading h2 span {
          color: #ff6b1a;
        }

        .home-section-heading p:not(.home-eyebrow) {
          margin-top: 1rem;
          color: var(--home-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .home-highlight-grid,
        .home-reason-grid,
        .home-event-grid,
        .home-celebrity-grid {
          display: grid;
          gap: 1rem;
        }

        .home-highlight-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .home-highlight-card {
          grid-column: span 1;
          min-height: 240px;
          padding: 1.25rem;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 250, 245, 0.92), rgba(246, 238, 232, 0.74));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .home-highlight-card::before,
        .home-event-card::before,
        .home-reason-card::before,
        .home-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 176, 0, 0.44), transparent 34%, rgba(11, 79, 76, 0.2));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          pointer-events: none;
          opacity: 0;
          transition: opacity 220ms ease;
          z-index: 2;
        }

        .home-highlight-card::after {
          content: '';
          position: absolute;
          inset: -40% -20% auto;
          height: 7rem;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.48), transparent);
          transform: translateX(-120%) rotate(8deg);
          transition: transform 620ms ease;
          pointer-events: none;
        }

        .home-highlight-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.55);
          box-shadow: 0 28px 65px rgba(18, 34, 34, 0.14);
        }

        .home-highlight-card:hover::before,
        .home-event-card:hover::before,
        .home-reason-card:hover::before,
        .home-stat-card:hover::before {
          opacity: 1;
        }

        .home-highlight-card:hover::after {
          transform: translateX(130%) rotate(8deg);
        }

        .home-card-icon {
          width: 3.25rem;
          height: 3.25rem;
          display: grid;
          place-items: center;
          margin-bottom: 1.6rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          color: #ffd36a;
          font-weight: 900;
        }

        .home-highlight-card h3,
        .home-event-card h3 {
          color: var(--home-ink);
          font-size: 1.35rem;
          margin-bottom: 0.65rem;
        }

        .home-highlight-card p,
        .home-event-card p {
          color: var(--home-muted);
          line-height: 1.65;
        }

        .home-stats-section {
          padding-top: 1rem;
          padding-bottom: 2rem;
        }

        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          padding: 1rem;
          border-radius: 30px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 24px 70px rgba(2, 11, 13, 0.22);
          position: relative;
          overflow: hidden;
        }

        .home-stats-grid::before {
          content: '';
          position: absolute;
          inset: -55% auto auto -12%;
          width: 45%;
          height: 140%;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.12), transparent);
          transform: rotate(16deg);
          animation: homeStatsShine 8s ease-in-out infinite;
        }

        .home-stat-card {
          min-height: 150px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, background 220ms ease;
        }

        .home-stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.12);
        }

        .home-stat-card strong {
          display: block;
          color: #ffd36a;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 1;
        }

        .home-stat-card span {
          color: rgba(255, 255, 255, 0.75);
          font-weight: 700;
        }

        .home-split-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
        }

        .home-reason-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .home-reason-card {
          min-height: 120px;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1.2rem;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 45px rgba(18, 34, 34, 0.08);
          font-weight: 900;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .home-reason-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 24px 58px rgba(18, 34, 34, 0.13);
        }

        .home-reason-card span {
          min-width: 5.7rem;
          height: 2.45rem;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb000, #ff6b1a);
          color: #111;
          font-size: 0.76rem;
          box-shadow: 0 12px 26px rgba(255, 176, 0, 0.22);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .home-reason-card:hover span {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(255, 176, 0, 0.34);
        }

        .home-event-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .home-event-card {
          overflow: hidden;
          border-radius: 28px;
          background: #fffaf5;
          box-shadow: 0 22px 58px rgba(18, 34, 34, 0.1);
          position: relative;
          isolation: isolate;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .home-event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 72px rgba(18, 34, 34, 0.16);
        }

        .home-event-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
          transition: transform 520ms ease, filter 520ms ease;
        }

        .home-event-card:hover img {
          transform: scale(1.06);
          filter: saturate(1.12) contrast(1.06);
        }

        .home-event-card div {
          padding: 1.25rem;
        }

        .home-event-card span {
          display: inline-flex;
          margin-bottom: 0.75rem;
          color: #9a3b0b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.76rem;
        }

        .home-event-card a {
          display: inline-flex;
          margin-top: 1.1rem;
          color: #39132f;
          font-weight: 900;
          position: relative;
        }

        .home-event-card a::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffb000, #ff6b1a);
          transform: scaleX(0.3);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .home-event-card a:hover::after {
          transform: scaleX(1);
        }

        .home-celebrity-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .home-celebrity-card {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          border-radius: 26px;
          background: #111;
          box-shadow: 0 25px 60px rgba(18, 34, 34, 0.16);
          isolation: isolate;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .home-celebrity-card::after,
        .home-gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 42%);
          opacity: 0;
          transition: opacity 260ms ease;
          pointer-events: none;
          z-index: 2;
        }

        .home-celebrity-card img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 420ms ease;
        }

        .home-celebrity-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 1.25rem;
          background: linear-gradient(180deg, transparent 36%, rgba(2, 10, 10, 0.92));
          opacity: 0;
          transition: opacity 260ms ease;
        }

        .home-celebrity-overlay h3 {
          color: #fff;
          font-size: 1.45rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .home-celebrity-card:hover img {
          transform: scale(1.08);
        }

        .home-celebrity-card:hover .home-celebrity-overlay {
          opacity: 1;
        }

        .home-celebrity-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 34px 78px rgba(18, 34, 34, 0.22);
        }

        .home-celebrity-card:hover::after,
        .home-gallery-item:hover::after {
          opacity: 1;
        }

        .home-gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 170px;
          gap: 1rem;
        }

        .home-gallery-item {
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.1);
          position: relative;
          isolation: isolate;
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .home-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 420ms ease, filter 420ms ease;
        }

        .home-gallery-item:hover img {
          transform: scale(1.08);
          filter: saturate(1.12) contrast(1.08);
        }

        .home-gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 70px rgba(18, 34, 34, 0.16);
        }

        .home-gallery-item-1,
        .home-gallery-item-4 {
          grid-column: span 3;
          grid-row: span 2;
        }

        .home-gallery-item-2,
        .home-gallery-item-3,
        .home-gallery-item-5,
        .home-gallery-item-6 {
          grid-column: span 3;
        }

        .home-partner-section {
          overflow: hidden;
        }

        .home-partner-marquee {
          overflow: hidden;
          padding: 1rem;
          border-radius: 28px;
          background: linear-gradient(135deg, #041719, #073332 58%, #39132f);
          box-shadow: 0 24px 65px rgba(2, 11, 13, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-partner-track {
          display: inline-flex;
          min-width: max-content;
          gap: 1rem;
          animation: homePartnerMove 24s linear infinite;
        }

        .home-partner-track span {
          min-width: 170px;
          padding: 1rem 1.25rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-align: center;
          font-weight: 900;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-cta-section {
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          min-height: 520px;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          border-radius: 36px;
          text-align: center;
          color: #fff;
          background: #051615;
          box-shadow: 0 30px 80px rgba(18, 34, 34, 0.18);
          isolation: isolate;
        }

        .home-cta-section img {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(82%, 760px);
          height: 82%;
          object-fit: contain;
          opacity: 0.34;
          filter: saturate(1.24) contrast(1.08) blur(0.2px) drop-shadow(0 0 48px rgba(255, 176, 0, 0.2));
          transform: translate(-50%, -50%);
          animation: homeCtaLogoFloat 14s ease-in-out infinite alternate;
          z-index: -2;
        }

        .home-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 44%, rgba(255, 176, 0, 0.18), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.92), rgba(7, 51, 50, 0.78), rgba(57, 19, 47, 0.84)),
            radial-gradient(ellipse at center, transparent 36%, rgba(0, 0, 0, 0.72));
          z-index: -1;
        }

        .home-cta-section::after {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(110deg, transparent 34%, rgba(255, 255, 255, 0.1) 48%, transparent 62%);
          transform: translateX(-24%);
          animation: homeLightSweep 11s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        .home-cta-section h2 {
          color: #fff;
          max-width: 860px;
        }

        .home-cta-section .home-btn-secondary {
          border-color: rgba(255, 255, 255, 0.5);
        }

        @keyframes homeRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-22px) scale(1.25);
            opacity: 1;
          }
        }

        @keyframes homePulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.75); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @keyframes homePartnerMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes homeLogoKenBurns {
          from {
            transform: translate(-50%, -50%) scale(0.98) rotate(-0.8deg);
          }
          to {
            transform: translate(-50%, -50%) scale(1.08) rotate(0.8deg);
          }
        }

        @keyframes homeAuraDrift {
          0%, 100% {
            transform: translate3d(-2%, 0, 0) scale(0.94);
            opacity: 0.76;
          }
          50% {
            transform: translate3d(3%, -2%, 0) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes homeLightSweep {
          0%, 100% {
            opacity: 0.18;
            transform: translateX(-18%) rotate(0.001deg);
          }
          50% {
            opacity: 0.44;
            transform: translateX(18%) rotate(0.001deg);
          }
        }

        @keyframes homeCtaLogoFloat {
          from {
            transform: translate(-50%, -50%) scale(0.98);
          }
          to {
            transform: translate(-50%, -52%) scale(1.05);
          }
        }

        @keyframes homeStatsShine {
          0%, 100% {
            transform: translateX(-55%) rotate(16deg);
            opacity: 0;
          }
          35%, 58% {
            opacity: 0.9;
          }
          70% {
            transform: translateX(290%) rotate(16deg);
            opacity: 0;
          }
        }

        @supports (animation-timeline: view()) {
          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            animation: homeViewRise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 4% cover 26%;
          }

          .home-highlight-card,
          .home-reason-card,
          .home-event-card,
          .home-celebrity-card,
          .home-gallery-item {
            animation: homeViewScale 640ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 22%;
          }
        }

        @keyframes homeViewRise {
          from {
            opacity: 0.55;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeViewScale {
          from {
            opacity: 0.5;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1024px) {
          .home-highlight-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-stats-grid,
          .home-split-section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .home-hero {
            min-height: 92vh;
            justify-content: flex-start;
            padding-top: 12rem;
          }

          .home-hero-media {
            width: min(94vw, 520px);
            height: min(54vh, 460px);
            top: 34%;
            opacity: 0.46;
          }

          .home-hero-actions {
            flex-direction: column;
          }

          .home-btn {
            width: 100%;
          }

          .home-hero-badges {
            gap: 0.5rem;
          }

          .home-hero-badges span {
            min-height: 2rem;
            font-size: 0.7rem;
            padding: 0 0.75rem;
          }

          .home-highlight-grid,
          .home-stats-grid,
          .home-split-section,
          .home-reason-grid,
          .home-event-grid,
          .home-celebrity-grid {
            grid-template-columns: 1fr;
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(100% - 1rem, 1180px);
          }

          .home-celebrity-card {
            min-height: 340px;
          }

          .home-gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 230px;
          }

          .home-gallery-item-1,
          .home-gallery-item-2,
          .home-gallery-item-3,
          .home-gallery-item-4,
          .home-gallery-item-5,
          .home-gallery-item-6 {
            grid-column: span 1;
            grid-row: span 1;
          }

          .home-cta-section {
            border-radius: 26px;
            min-height: 430px;
            padding: 2rem 1rem;
          }

          .home-cta-section img {
            width: 94%;
            height: 72%;
            opacity: 0.28;
          }
        }

        @media (min-width: 1440px) {
          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(1280px, calc(100% - 4rem));
          }

          .home-hero-content {
            width: min(1240px, calc(100% - 4rem));
          }

          .home-highlight-card {
            min-height: 260px;
          }
        }

        @media (max-width: 1366px) {
          .home-hero h1 {
            font-size: clamp(3.2rem, 9vw, 7.8rem);
          }

          .home-hero-media {
            width: min(76vw, 780px);
          }
        }

        @media (max-width: 1024px) {
          .home-hero {
            min-height: 100svh;
            padding: clamp(11rem, 17vw, 13rem) 1.15rem 4.5rem;
          }

          .home-hero-content {
            width: min(920px, 100%);
          }

          .home-hero h1 {
            max-width: 760px;
            font-size: clamp(3rem, 10vw, 6.4rem);
          }

          .home-hero-copy {
            max-width: 560px;
            font-size: clamp(1rem, 2.4vw, 1.25rem);
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            padding: clamp(3.5rem, 7vw, 5.25rem) 0;
          }

          .home-section-heading {
            max-width: 680px;
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(2rem, 6vw, 4rem);
          }

          .home-highlight-card,
          .home-event-card,
          .home-reason-card {
            border-radius: 22px;
          }

          .home-event-card img {
            height: clamp(210px, 28vw, 260px);
          }

          .home-celebrity-card {
            min-height: clamp(320px, 46vw, 420px);
          }
        }

        @media (max-width: 767px) {
          .home-hero {
            min-height: 100svh;
            align-items: center;
            justify-content: center;
            padding: clamp(9rem, 30vw, 11.25rem) 1rem 3.75rem;
          }

          .home-hero-content {
            text-align: left;
          }

          .home-hero-content::before {
            left: 50%;
            top: 16%;
            width: 92vw;
            height: 46%;
            transform: translateX(-50%);
          }

          .home-hero h1 {
            max-width: 100%;
            font-size: clamp(3rem, 17vw, 5.4rem);
            line-height: 0.88;
            letter-spacing: -0.065em;
          }

          .home-hero-copy {
            max-width: 36rem;
            font-size: clamp(0.98rem, 4vw, 1.12rem);
            line-height: 1.58;
          }

          .home-hero-media {
            width: min(108vw, 560px);
            height: min(52vh, 430px);
            top: 38%;
          }

          .home-scroll-indicator {
            bottom: 0.9rem;
          }

          .home-section-heading {
            margin-bottom: 1.45rem;
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(2.15rem, 12vw, 3.6rem);
            line-height: 0.96;
          }

          .home-section-heading p:not(.home-eyebrow) {
            font-size: 0.98rem;
            line-height: 1.65;
          }

          .home-highlight-card {
            min-height: 210px;
            padding: 1.1rem;
          }

          .home-card-icon {
            width: 3rem;
            height: 3rem;
            margin-bottom: 1.25rem;
          }

          .home-stats-grid {
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 24px;
          }

          .home-stat-card {
            min-height: 132px;
            border-radius: 18px;
          }

          .home-reason-card {
            min-height: 104px;
            padding: 1rem;
          }

          .home-event-card img {
            height: clamp(210px, 58vw, 280px);
          }

          .home-celebrity-card {
            min-height: clamp(330px, 92vw, 430px);
            border-radius: 22px;
          }

          .home-gallery-grid {
            gap: 0.75rem;
          }

          .home-partner-marquee {
            border-radius: 22px;
            padding: 0.75rem;
          }

          .home-partner-track span {
            min-width: 145px;
            padding: 0.85rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .home-hero {
            padding-left: 0.85rem;
            padding-right: 0.85rem;
          }

          .home-hero h1 {
            font-size: clamp(2.7rem, 16.5vw, 4.5rem);
          }

          .home-hero-actions {
            gap: 0.7rem;
            margin-top: 1.5rem;
          }

          .home-btn {
            min-height: 3rem;
            padding: 0 1.05rem;
            font-size: 0.95rem;
          }

          .home-hero-badges {
            display: grid;
            grid-template-columns: 1fr;
            width: min(100%, 18rem);
          }

          .home-hero-badges span {
            justify-content: center;
          }

          .home-section,
          .home-stats-section,
          .home-partner-section,
          .home-cta-section {
            width: min(100% - 0.75rem, 1180px);
            padding: 3rem 0;
          }

          .home-highlight-card h3,
          .home-event-card h3 {
            font-size: 1.2rem;
          }

          .home-highlight-card p,
          .home-event-card p {
            font-size: 0.94rem;
          }

          .home-stat-card strong {
            font-size: clamp(2.1rem, 14vw, 3.2rem);
          }

          .home-reason-card {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.75rem;
          }

          .home-reason-card span {
            min-width: 0;
            width: fit-content;
            padding: 0 0.95rem;
          }

          .home-cta-section {
            min-height: 390px;
          }
        }

        @media (max-width: 360px) {
          .home-hero {
            padding-top: 8.6rem;
          }

          .home-hero h1 {
            font-size: clamp(2.45rem, 16vw, 3.55rem);
          }

          .home-section-heading h2,
          .home-cta-section h2 {
            font-size: clamp(1.9rem, 11.5vw, 2.8rem);
          }

          .home-stat-card {
            min-height: 118px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-particles span,
          .home-scroll-indicator span,
          .home-partner-track,
          .home-hero-media,
          .home-hero::before,
          .home-hero::after,
          .home-cta-section img,
          .home-cta-section::after {
            animation: none;
          }
        }
      `})]})}function Ct({title:e,subtitle:t}){return n.jsxs("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-6 rounded-lg mb-8 page-header",children:[n.jsx("p",{className:"uppercase tracking-wide mb-2 page-header-brand",style:{color:"#f7ecf1"},children:"Ozilla Festival"}),n.jsx("h1",{className:"text-4xl font-bold mb-2",children:e}),t&&n.jsx("p",{className:"text-xl text-purple-100",style:{maxWidth:"760px"},children:t})]})}function E2(){return n.jsxs("div",{children:[n.jsx(Ct,{title:"About Us",subtitle:"Event Organizer Information"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Organization Details"}),n.jsx("p",{className:"text-gray-600 mb-4",children:ft.about}),n.jsx("p",{className:"text-gray-600",children:"The platform is designed around discovery, experiences, hospitality partnerships, discount access, and long-term brand collaborations."})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"User Journey"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3",children:ft.journey.map((e,t)=>n.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[n.jsxs("p",{className:"text-sm text-gray-500 mb-1",children:["Step ",t+1]}),n.jsx("p",{className:"font-semibold text-gray-800",children:e})]},e))})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Partner Benefits"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4",children:ft.partnerBenefits.map(e=>n.jsx("div",{className:"border border-gray-200 rounded-lg p-4 text-center",children:n.jsx("p",{className:"font-semibold text-gray-800",children:e})},e))})]})]})}function P2(){const e=[{title:"Audience Reach",detail:"Projected 100-200M Meta audience and 20-40M Instagram reach."},{title:"Influencer Ecosystem",detail:"1,000+ targeted influencers and 100+ campus ambassadors."},{title:"On-Ground Activation",detail:"Branded zones, product sampling, and photo/content booths."},{title:"Brand Recall",detail:"Connected visibility across entrance, stage, screens, and media wall."}];return n.jsxs("div",{children:[n.jsx(Ct,{title:"Brand Collaboration",subtitle:"Partnership Opportunities for Ozilla Festival 2026"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Why Collaborate"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"Ozilla Festival provides end-to-end brand integration across venue touchpoints, audience journey, digital campaigns, and creator-led amplification."}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.map(t=>n.jsxs("div",{className:"border-l-4 border-purple-600 pl-4",children:[n.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:t.title}),n.jsx("p",{className:"text-gray-600",children:t.detail})]},t.title))})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Collaboration Formats"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"font-semibold text-gray-800",children:"Stage + Screen Visibility"}),n.jsx("p",{className:"text-gray-600",children:"Brand placement on event screens, stage mentions, and reveal assets."})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-semibold text-gray-800",children:"Activation Booths"}),n.jsx("p",{className:"text-gray-600",children:"Dedicated on-ground spaces for product trials, contests, and engagement."})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-semibold text-gray-800",children:"Creator and Social Content"}),n.jsx("p",{className:"text-gray-600",children:"Collab posts, branded reels, and influencer-driven campaign coverage."})]})]})]}),n.jsxs("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-8 text-white",children:[n.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Build Your Collaboration Plan"}),n.jsx("p",{className:"mb-6",children:"Contact the team to design a package based on your campaign goals."}),n.jsx("a",{href:"/contact",className:"inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold",children:"Contact Collaboration Team"})]})]})}function C2(){return n.jsxs("div",{children:[n.jsx(Ct,{title:"Ozilla Festival",subtitle:"Campaign Modules and Performance Highlights"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Festival Modules"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[n.jsxs(B,{to:"/prismfest/2023",className:"bg-purple-50 rounded-lg p-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Pre-Campaign Footprint"}),n.jsx("p",{className:"text-gray-600",children:"Base-year insights focused on youth audience behavior and activation planning."})]}),n.jsxs(B,{to:"/prismfest/2024",className:"bg-blue-50 rounded-lg p-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"2025 Scale Metrics"}),n.jsx("p",{className:"text-gray-600",children:"25+ events delivered and large influencer/campus ecosystem growth."})]}),n.jsxs(B,{to:"/prismfest/2025",className:"bg-green-50 rounded-lg p-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Ozilla Festival 2026"}),n.jsx("p",{className:"text-gray-600",children:"Flagship edition with 40,000+ attendance target and multi-channel sponsor visibility."})]})]})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Additional Sections"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx(B,{to:"/prismfest/celebrities",className:"bg-purple-50 rounded-lg p-4 text-center font-semibold text-purple-700",children:"Celebrity Singers"}),n.jsx(B,{to:"/prismfest/events",className:"bg-blue-50 rounded-lg p-4 text-center font-semibold text-blue-700",children:"Past Events"}),n.jsx(B,{to:"/prismfest/future",className:"bg-green-50 rounded-lg p-4 text-center font-semibold text-green-700",children:"Future Events"})]})]})]})}function z2(){const e=["Audience journey model structured from Discover to Remember","Activation-first approach defined for brand interaction","Content-led visibility strategy designed for social amplification","Sponsor touchpoint map finalized for venue integration"];return n.jsxs("div",{children:[n.jsx(Ct,{title:"Module 2023",subtitle:"Pre-Campaign Strategy Overview"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Edition Summary"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"This module captures foundational strategy themes that shaped the full Ozilla sponsorship journey, including activation architecture and audience behavior planning."}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map(t=>n.jsx("div",{className:"bg-purple-50 rounded-lg p-4 text-gray-700",children:t},t))})]})]})}function T2(){const e=[{label:"Events Delivered",value:"25+"},{label:"Instagram Reach",value:"20-40M"},{label:"Meta Audience",value:"100-200M"},{label:"Campus Ambassadors",value:"100+"}];return n.jsxs("div",{children:[n.jsx(Ct,{title:"Module 2024-25",subtitle:"Scale and Reach Overview"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Edition Summary"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"This module reflects growth-stage outcomes and projected reach patterns, creating the benchmark for the full Ozilla Festival 2026 campaign rollout."}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:e.map(t=>n.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:t.label}),n.jsx("p",{className:"text-2xl font-bold text-blue-700",children:t.value})]},t.label))})]})]})}function R2(){const e=[{label:"Projected Attendance",value:"40,000+"},{label:"Influencers",value:"1,000+"},{label:"Meta Audience",value:"100-200M"},{label:"Campaign Goal",value:"Dominant sponsor visibility + audience engagement"}];return n.jsxs("div",{children:[n.jsx(Ct,{title:"Ozilla Festival 2026",subtitle:"Upcoming Headline Edition"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Edition Summary"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"Ozilla Festival 2026 is structured as the flagship sponsorship and entertainment edition, combining immersive brand activations with large-scale digital and on-ground audience impact."}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:e.map(t=>n.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:t.label}),n.jsx("p",{className:"text-xl font-bold text-purple-700",children:t.value})]},t.label))})]})]})}const O2=[{name:"TALWINDER",isHeadliner:!0,genre:"Indie Pop / Punjabi Fusion",image:"/assets/ozilla/talwinder.jpg"},{name:"IMRAN KHAN",genre:"Punjabi Pop / Urban",image:"/assets/ozilla/Imran-Khan.jpg"},{name:"BOHEMIA",genre:"Punjabi Rap",image:"/assets/ozilla/Bohemia.jpg"},{name:"HASSAN RAHEEM",genre:"Pop / R&B",image:"/assets/ozilla/hassan-raheem.jpg"}];function Qd(){const e=new Date("2026-11-01T18:00:00+05:00").getTime(),t=Date.now(),r=Math.max(e-t,0);return{days:Math.floor(r/(1e3*60*60*24)),hours:Math.floor(r/(1e3*60*60)%24),minutes:Math.floor(r/(1e3*60)%60),seconds:Math.floor(r/1e3%60)}}function L2(){const e=k.useRef(null),[t,r]=k.useState(Qd);k.useEffect(()=>{const o=window.setInterval(()=>{r(Qd())},1e3);return()=>window.clearInterval(o)},[]);const a=o=>{!e.current||!window.matchMedia("(pointer: fine)").matches||(e.current.style.setProperty("--cursor-x",`${o.clientX}px`),e.current.style.setProperty("--cursor-y",`${o.clientY}px`))},i=o=>{if(!window.matchMedia("(pointer: fine)").matches)return;const c=o.currentTarget,l=c.getBoundingClientRect(),d=o.clientX-l.left,u=o.clientY-l.top,p=l.width/2,f=l.height/2;c.style.setProperty("--mx",`${d}px`),c.style.setProperty("--my",`${u}px`),c.style.setProperty("--rx",`${(f-u)/f*5}deg`),c.style.setProperty("--ry",`${(d-p)/p*5}deg`)},s=o=>{const c=o.currentTarget;c.style.setProperty("--rx","0deg"),c.style.setProperty("--ry","0deg")};return n.jsxs("main",{ref:e,className:"celebrity-page",onMouseMove:a,children:[n.jsx("div",{className:"celebrity-cursor-glow","aria-hidden":"true"}),n.jsxs("div",{className:"celebrity-ambient-notes","aria-hidden":"true",children:[n.jsx("span",{children:"♪"}),n.jsx("span",{children:"♫"}),n.jsx("span",{children:"♬"}),n.jsx("span",{children:"♪"})]}),n.jsxs("section",{className:"celebrity-hero","aria-label":"Celebrity Singers",children:[n.jsx("div",{className:"celebrity-crowd","aria-hidden":"true"}),n.jsxs("div",{className:"celebrity-hero-lights","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"celebrity-lasers","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"celebrity-soundwave","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"celebrity-hero-content",children:[n.jsx("p",{className:"celebrity-eyebrow",children:"Ozilla Festival 2026"}),n.jsx("h1",{children:"CELEBRITY SINGERS"}),n.jsx("p",{className:"celebrity-hero-copy",children:"Experience the Biggest Music Icons Live at Ozilla Festival 2026"})]}),n.jsx("div",{className:"celebrity-scroll-cue","aria-hidden":"true",children:n.jsx("span",{})})]}),n.jsx("div",{className:"celebrity-glass-divider","aria-hidden":"true"}),n.jsxs("section",{className:"celebrity-artists-section","aria-label":"Featured Artists",children:[n.jsxs("div",{className:"celebrity-section-heading",children:[n.jsxs("div",{className:"celebrity-stars","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("p",{className:"celebrity-eyebrow",children:"Featured Artists"}),n.jsx("h2",{children:"LIVE ON THE OZILLA STAGE"}),n.jsx("p",{children:"Four high-impact performers, one premium Lahore festival atmosphere, and a stage built for unforgettable crowd moments."})]}),n.jsx("div",{className:"celebrity-grid",children:O2.map((o,c)=>n.jsxs("article",{className:`celebrity-card ${o.isHeadliner?"celebrity-card-headliner":""}`,tabIndex:0,style:{"--artist-delay":`${c*90}ms`},onMouseMove:i,onMouseLeave:s,onBlur:s,children:[n.jsxs("div",{className:"celebrity-card-frame",children:[n.jsx("img",{src:o.image,alt:o.name,className:"celebrity-card-image",loading:"lazy",onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src="/assets/prism-auth-visual.jpg"}}),n.jsxs("div",{className:"celebrity-card-overlay",children:[o.isHeadliner&&n.jsx("span",{className:"celebrity-badge",children:"MAIN ARTIST"}),n.jsxs("div",{className:"celebrity-live-icon","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("p",{className:"celebrity-card-name",children:o.name}),n.jsx("p",{className:"celebrity-card-genre",children:o.genre})]})]}),n.jsxs("div",{className:"celebrity-card-caption",children:[n.jsx("p",{className:"celebrity-card-name",children:o.name}),n.jsx("p",{className:"celebrity-card-genre",children:o.genre})]})]},o.name))})]}),n.jsx("div",{className:"celebrity-wave-divider","aria-hidden":"true"}),n.jsxs("section",{className:"celebrity-stage-section",children:[n.jsxs("div",{className:"celebrity-stage-copy",children:[n.jsx("p",{className:"celebrity-eyebrow",children:"Live Stage"}),n.jsx("h2",{children:"THE STAGE IS READY"}),n.jsx("p",{children:"Concert lights, pulsing sound, premium crowd energy, and a two-day lineup built for Lahore."})]}),n.jsx("div",{className:"celebrity-countdown","aria-label":"Countdown to Ozilla Festival 2026",children:[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]].map(([o,c])=>n.jsxs("div",{className:"celebrity-countdown-card",children:[n.jsx("strong",{children:String(c).padStart(2,"0")}),n.jsx("span",{children:o})]},o))}),n.jsxs("div",{className:"celebrity-stage-equalizer","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsxs("section",{className:"celebrity-cta-section",children:[n.jsx("div",{className:"celebrity-cta-orbit","aria-hidden":"true"}),n.jsx("p",{className:"celebrity-eyebrow",children:"Ozilla Festival 2026"}),n.jsx("h2",{children:"DON'T MISS THE BIGGEST MUSIC FESTIVAL OF 2026"}),n.jsxs("div",{className:"celebrity-cta-actions",children:[n.jsx(B,{className:"celebrity-btn celebrity-btn-primary",to:"/tickets",children:"Purchase Ticket"}),n.jsx(B,{className:"celebrity-btn celebrity-btn-secondary",to:"/events",children:"View Events"})]})]}),n.jsx("style",{children:`
        .celebrity-page {
          --celebrity-deep: #020b0d;
          --celebrity-ink: #081b1c;
          --celebrity-teal: #0b4f4c;
          --celebrity-gold: #ffb000;
          --celebrity-orange: #ff6b1a;
          --celebrity-wine: #39132f;
          --celebrity-muted: #55706f;
          position: relative;
          overflow: hidden;
          color: var(--celebrity-ink);
          background:
            radial-gradient(circle at 14% 18%, rgba(255, 176, 0, 0.13), transparent 21rem),
            radial-gradient(circle at 86% 28%, rgba(11, 79, 76, 0.18), transparent 23rem),
            radial-gradient(circle at 52% 82%, rgba(57, 19, 47, 0.12), transparent 24rem),
            linear-gradient(180deg, #fffaf4 0%, #f6eee8 52%, #fffaf4 100%);
          --cursor-x: 50vw;
          --cursor-y: 40vh;
        }

        .celebrity-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.28), transparent 18rem),
            linear-gradient(115deg, transparent 0%, rgba(255, 176, 0, 0.035) 45%, transparent 62%);
          z-index: 0;
          animation: celebrityAurora 14s ease-in-out infinite alternate;
        }

        .celebrity-page::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle, rgba(255, 176, 0, 0.18) 0 1px, transparent 1.4px),
            radial-gradient(circle, rgba(11, 79, 76, 0.12) 0 1px, transparent 1.4px);
          background-size: 110px 110px, 160px 160px;
          background-position: 0 0, 42px 34px;
          opacity: 0.32;
          z-index: 0;
        }

        .celebrity-cursor-glow {
          position: fixed;
          left: var(--cursor-x);
          top: var(--cursor-y);
          width: 24rem;
          height: 24rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.13), rgba(255, 107, 26, 0.06) 36%, transparent 68%);
          filter: blur(12px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: multiply;
          transition: left 80ms linear, top 80ms linear;
        }

        .celebrity-ambient-notes {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .celebrity-ambient-notes span {
          position: absolute;
          color: rgba(255, 176, 0, 0.2);
          font-size: clamp(1.6rem, 3vw, 3.8rem);
          filter: blur(0.2px);
          animation: celebrityNoteFloat 16s ease-in-out infinite;
        }

        .celebrity-ambient-notes span:nth-child(1) { left: 8%; top: 28%; }
        .celebrity-ambient-notes span:nth-child(2) { right: 12%; top: 34%; animation-delay: 3s; }
        .celebrity-ambient-notes span:nth-child(3) { left: 18%; bottom: 18%; animation-delay: 6s; }
        .celebrity-ambient-notes span:nth-child(4) { right: 18%; bottom: 12%; animation-delay: 9s; }

        .celebrity-hero,
        .celebrity-artists-section,
        .celebrity-stage-section,
        .celebrity-cta-section {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .celebrity-hero {
          min-height: clamp(520px, 74vh, 760px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(8rem, 15vw, 12rem) clamp(1.1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          isolation: isolate;
          background:
            radial-gradient(circle at 25% 18%, rgba(255, 176, 0, 0.22), transparent 18rem),
            radial-gradient(circle at 76% 28%, rgba(255, 107, 26, 0.18), transparent 20rem),
            linear-gradient(180deg, transparent 62%, rgba(0, 0, 0, 0.78) 100%),
            linear-gradient(130deg, rgba(2, 11, 13, 0.98), rgba(4, 23, 25, 0.94) 48%, rgba(57, 19, 47, 0.94));
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.24);
        }

        .celebrity-glass-divider,
        .celebrity-wave-divider {
          width: min(1180px, calc(100% - 2rem));
          height: 1px;
          margin: clamp(1rem, 3vw, 2rem) auto 0;
          position: relative;
          z-index: 2;
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.5), rgba(19, 160, 151, 0.28), transparent);
        }

        .celebrity-glass-divider::before,
        .celebrity-wave-divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(64vw, 720px);
          height: 6rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.15), transparent 70%);
          filter: blur(24px);
          transform: translate(-50%, -50%);
        }

        .celebrity-wave-divider {
          margin-top: 0;
          margin-bottom: clamp(2rem, 5vw, 3rem);
        }

        .celebrity-hero::before,
        .celebrity-hero::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: -1;
        }

        .celebrity-hero::before {
          inset: -18% -8% auto;
          height: 58%;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 176, 0, 0.44), transparent 22rem),
            radial-gradient(circle at 78% 12%, rgba(255, 255, 255, 0.16), transparent 18rem);
          filter: blur(34px);
          animation: celebritySmoke 10s ease-in-out infinite alternate;
        }

        .celebrity-hero::after {
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.62), transparent 48%, rgba(0, 0, 0, 0.66)),
            radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.74) 100%);
        }

        .celebrity-crowd {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 26%;
          background:
            radial-gradient(circle at 8% 86%, #020b0d 0 0.8rem, transparent 0.85rem),
            radial-gradient(circle at 16% 78%, #020b0d 0 1rem, transparent 1.05rem),
            radial-gradient(circle at 25% 84%, #020b0d 0 0.7rem, transparent 0.75rem),
            radial-gradient(circle at 37% 76%, #020b0d 0 1.05rem, transparent 1.1rem),
            radial-gradient(circle at 49% 82%, #020b0d 0 0.85rem, transparent 0.9rem),
            radial-gradient(circle at 61% 78%, #020b0d 0 1.1rem, transparent 1.15rem),
            radial-gradient(circle at 74% 85%, #020b0d 0 0.75rem, transparent 0.8rem),
            radial-gradient(circle at 86% 78%, #020b0d 0 1rem, transparent 1.05rem),
            linear-gradient(180deg, transparent, rgba(2, 11, 13, 0.96) 42%, #020b0d 100%);
          opacity: 0.78;
          z-index: 2;
          pointer-events: none;
        }

        .celebrity-hero-lights span {
          position: absolute;
          top: -16%;
          width: clamp(80px, 10vw, 160px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.34), transparent 72%);
          filter: blur(18px);
          opacity: 0.58;
          transform-origin: top center;
          animation: celebritySpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .celebrity-hero-lights span:nth-child(1) { left: 8%; transform: rotate(17deg); }
        .celebrity-hero-lights span:nth-child(2) { left: 32%; animation-delay: 1.2s; transform: rotate(-8deg); }
        .celebrity-hero-lights span:nth-child(3) { right: 26%; animation-delay: 2.1s; transform: rotate(10deg); }
        .celebrity-hero-lights span:nth-child(4) { right: 6%; animation-delay: 3.2s; transform: rotate(-18deg); }

        .celebrity-lasers span {
          position: absolute;
          left: 50%;
          top: 14%;
          width: 1px;
          height: 78%;
          transform-origin: top center;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.65), transparent 72%);
          box-shadow: 0 0 26px rgba(255, 176, 0, 0.46);
          opacity: 0.52;
          animation: celebrityLaserSweep 7.5s ease-in-out infinite;
          z-index: 1;
        }

        .celebrity-lasers span:nth-child(1) { transform: rotate(-52deg); }
        .celebrity-lasers span:nth-child(2) {
          animation-delay: 1.4s;
          transform: rotate(0deg);
          background: linear-gradient(180deg, rgba(19, 160, 151, 0.58), transparent 74%);
        }
        .celebrity-lasers span:nth-child(3) { animation-delay: 2.6s; transform: rotate(52deg); }

        .celebrity-soundwave {
          position: absolute;
          left: 50%;
          bottom: clamp(1.2rem, 3vw, 2rem);
          transform: translateX(-50%);
          display: flex;
          align-items: end;
          gap: 0.42rem;
          height: 3.8rem;
          opacity: 0.62;
          z-index: 2;
        }

        .celebrity-soundwave span {
          width: 0.32rem;
          height: 1rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 20px rgba(255, 176, 0, 0.42);
          animation: celebrityEqualizer 1.2s ease-in-out infinite;
        }

        .celebrity-soundwave span:nth-child(2n) { animation-delay: 140ms; }
        .celebrity-soundwave span:nth-child(3n) { animation-delay: 280ms; }

        .celebrity-hero-content {
          position: relative;
          z-index: 3;
          max-width: 980px;
          text-align: center;
          color: #fff;
          animation: celebrityHeroRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .celebrity-eyebrow {
          margin: 0;
          color: var(--celebrity-gold);
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .celebrity-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3.1rem, 9vw, 8.4rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 34px 90px rgba(0, 0, 0, 0.52);
          text-wrap: balance;
        }

        .celebrity-hero-copy {
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1.05rem, 2vw, 1.5rem);
          line-height: 1.65;
        }

        .celebrity-scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 1rem;
          width: 2.8rem;
          height: 2.8rem;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          transform: translateX(-50%);
          z-index: 4;
          animation: celebrityScrollBounce 1.7s ease-in-out infinite;
        }

        .celebrity-scroll-cue span {
          width: 0.65rem;
          height: 0.65rem;
          border-right: 2px solid #ffb000;
          border-bottom: 2px solid #ffb000;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .celebrity-artists-section {
          padding: clamp(4rem, 8vw, 7rem) 0;
        }

        .celebrity-section-heading {
          max-width: 780px;
          margin: 0 auto clamp(2rem, 5vw, 3.5rem);
          text-align: center;
        }

        .celebrity-stars {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.9rem;
        }

        .celebrity-stars span {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 22px rgba(255, 176, 0, 0.44);
          animation: celebrityStarPulse 1.8s ease-in-out infinite;
        }

        .celebrity-stars span:nth-child(2) { animation-delay: 120ms; }
        .celebrity-stars span:nth-child(3) { animation-delay: 240ms; }
        .celebrity-stars span:nth-child(4) { animation-delay: 360ms; }
        .celebrity-stars span:nth-child(5) { animation-delay: 480ms; }

        .celebrity-section-heading h2,
        .celebrity-cta-section h2 {
          margin: 0.6rem 0 0;
          color: var(--celebrity-ink);
          font-size: clamp(2.35rem, 6vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .celebrity-section-heading p:not(.celebrity-eyebrow) {
          margin: 1rem auto 0;
          max-width: 660px;
          color: var(--celebrity-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .celebrity-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.9rem, 2vw, 1.25rem);
          align-items: stretch;
        }

        .celebrity-card {
          position: relative;
          min-width: 0;
          border-radius: 26px;
          padding: 1px;
          background:
            linear-gradient(145deg, rgba(255, 176, 0, 0.66), rgba(255, 255, 255, 0.16) 34%, rgba(11, 79, 76, 0.42)),
            rgba(255, 255, 255, 0.12);
          box-shadow: 0 26px 70px rgba(2, 11, 13, 0.16);
          outline: none;
          isolation: isolate;
          animation: celebrityCardIn 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--artist-delay);
          transition: transform 300ms ease, box-shadow 300ms ease, filter 300ms ease;
          transform-style: preserve-3d;
        }

        .celebrity-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.32), transparent 58%);
          opacity: 0;
          filter: blur(10px);
          transition: opacity 300ms ease;
          z-index: -1;
        }

        .celebrity-card::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 25px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.16), transparent 42%),
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.13), transparent 48%);
          opacity: 0.75;
          pointer-events: none;
          z-index: 1;
        }

        .celebrity-card-headliner {
          grid-column: span 1;
          background:
            linear-gradient(145deg, rgba(255, 211, 106, 0.98), rgba(255, 107, 26, 0.52) 42%, rgba(11, 79, 76, 0.4)),
            rgba(255, 176, 0, 0.22);
          box-shadow:
            0 34px 95px rgba(2, 11, 13, 0.22),
            0 0 54px rgba(255, 176, 0, 0.2);
        }

        .celebrity-card-headliner .celebrity-card-frame {
          aspect-ratio: 4 / 5;
        }

        .celebrity-card-frame {
          position: relative;
          overflow: hidden;
          height: auto;
          aspect-ratio: 4 / 5;
          min-height: 0;
          border-radius: 25px;
          background: #071313;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.12),
            inset 0 0 34px rgba(255, 176, 0, 0.08),
            0 22px 52px rgba(2, 11, 13, 0.18);
          transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 260ms ease;
        }

        .celebrity-card-frame::before {
          content: '';
          position: absolute;
          left: var(--mx, 50%);
          top: var(--my, 40%);
          width: 13rem;
          height: 13rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.28), transparent 68%);
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 260ms ease;
          pointer-events: none;
          z-index: 3;
        }

        .celebrity-card-frame::after {
          content: '';
          position: absolute;
          inset: -45% -30% auto;
          height: 42%;
          background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.24), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 780ms ease;
          pointer-events: none;
          z-index: 5;
        }

        .celebrity-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(1.04) contrast(1.04);
          transition: transform 520ms ease, filter 520ms ease;
        }

        .celebrity-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.25rem;
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.16), transparent 12rem),
            linear-gradient(180deg, transparent 24%, rgba(2, 11, 13, 0.48) 54%, rgba(2, 11, 13, 0.96));
          opacity: 0;
          transition: opacity 320ms ease;
          z-index: 4;
        }

        .celebrity-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: inline-flex;
          align-items: center;
          min-height: 2rem;
          padding: 0 0.8rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff6b1a);
          box-shadow:
            0 12px 28px rgba(255, 176, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.36);
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .celebrity-live-icon {
          display: inline-flex;
          align-items: end;
          gap: 0.18rem;
          width: fit-content;
          height: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .celebrity-live-icon span {
          width: 0.22rem;
          height: 0.5rem;
          border-radius: 999px;
          background: #ffb000;
          animation: celebrityEqualizer 820ms ease-in-out infinite;
        }

        .celebrity-live-icon span:nth-child(2) { animation-delay: 110ms; }
        .celebrity-live-icon span:nth-child(3) { animation-delay: 220ms; }

        .celebrity-card-name {
          margin: 0;
          color: #fff;
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }

        .celebrity-card-genre {
          margin: 0.42rem 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .celebrity-card-caption {
          display: none;
          padding: 0.95rem 0.85rem 0.2rem;
        }

        .celebrity-card-caption .celebrity-card-name {
          color: var(--celebrity-ink);
        }

        .celebrity-card-caption .celebrity-card-genre {
          color: var(--celebrity-muted);
        }

        .celebrity-card:hover,
        .celebrity-card:focus-visible {
          transform: translateY(-10px) scale(1.01);
          box-shadow:
            0 42px 105px rgba(2, 11, 13, 0.26),
            0 0 46px rgba(255, 176, 0, 0.17);
        }

        .celebrity-card:hover::before,
        .celebrity-card:focus-visible::before {
          opacity: 1;
        }

        .celebrity-card:hover .celebrity-card-frame,
        .celebrity-card:focus-visible .celebrity-card-frame {
          transition-duration: 120ms;
        }

        .celebrity-card:hover .celebrity-card-frame::before,
        .celebrity-card:focus-visible .celebrity-card-frame::before {
          opacity: 1;
        }

        .celebrity-card:hover .celebrity-card-frame::after,
        .celebrity-card:focus-visible .celebrity-card-frame::after {
          transform: translateX(135%) rotate(10deg);
        }

        .celebrity-card:hover .celebrity-card-image,
        .celebrity-card:focus-visible .celebrity-card-image {
          transform: scale(1.08);
          filter: saturate(1.18) contrast(1.1) brightness(0.86);
        }

        .celebrity-card:hover .celebrity-card-overlay,
        .celebrity-card:focus-visible .celebrity-card-overlay {
          opacity: 1;
        }

        .celebrity-stage-section {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
          overflow: hidden;
          min-height: 360px;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2rem, 5vw, 4rem);
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 176, 0, 0.18), transparent 18rem),
            radial-gradient(circle at 82% 60%, rgba(19, 160, 151, 0.16), transparent 20rem),
            linear-gradient(135deg, #020b0d, #073332 54%, #39132f);
          box-shadow: 0 30px 80px rgba(2, 11, 13, 0.18);
          isolation: isolate;
        }

        .celebrity-stage-section::before {
          content: '';
          position: absolute;
          inset: -20% auto auto 48%;
          width: 48rem;
          height: 48rem;
          border-radius: 999px;
          background:
            repeating-radial-gradient(circle, rgba(255, 176, 0, 0.16) 0 1px, transparent 1px 24px),
            radial-gradient(circle, rgba(255, 176, 0, 0.12), transparent 68%);
          transform: translateX(-50%);
          opacity: 0.52;
          animation: celebrityOrbit 22s linear infinite;
          z-index: -1;
        }

        .celebrity-stage-copy h2 {
          margin: 0.65rem 0 1rem;
          color: #fff;
          font-size: clamp(2.4rem, 5.8vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .celebrity-stage-copy p:not(.celebrity-eyebrow) {
          max-width: 34rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
        }

        .celebrity-countdown {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .celebrity-countdown-card {
          min-height: 9rem;
          display: grid;
          place-items: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .celebrity-countdown-card strong {
          color: #ffd36a;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 1;
        }

        .celebrity-countdown-card span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .celebrity-stage-equalizer {
          grid-column: 1 / -1;
          height: 4.4rem;
          display: flex;
          align-items: end;
          justify-content: center;
          gap: 0.42rem;
          margin-top: 1.5rem;
        }

        .celebrity-stage-equalizer span {
          width: min(4vw, 1.15rem);
          height: 1rem;
          border-radius: 999px 999px 0 0;
          background: linear-gradient(180deg, #ffb000, #ff6b1a);
          box-shadow: 0 0 24px rgba(255, 176, 0, 0.34);
          animation: celebrityEqualizerTall 1.35s ease-in-out infinite;
        }

        .celebrity-stage-equalizer span:nth-child(2n) { animation-delay: 120ms; }
        .celebrity-stage-equalizer span:nth-child(3n) { animation-delay: 240ms; }
        .celebrity-stage-equalizer span:nth-child(4n) { animation-delay: 360ms; }

        .celebrity-cta-section {
          min-height: 420px;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2.2rem, 5vw, 4.5rem) 1rem;
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.2), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .celebrity-cta-section .celebrity-eyebrow,
        .celebrity-cta-section h2,
        .celebrity-cta-actions {
          position: relative;
          z-index: 2;
        }

        .celebrity-cta-section h2 {
          max-width: 920px;
          color: #fff;
        }

        .celebrity-cta-orbit {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          box-shadow:
            inset 0 0 60px rgba(255, 176, 0, 0.1),
            0 0 80px rgba(255, 176, 0, 0.08);
          animation: celebrityOrbit 18s linear infinite;
          z-index: 1;
        }

        .celebrity-cta-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .celebrity-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          font-weight: 950;
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .celebrity-btn:hover {
          transform: translateY(-3px);
        }

        .celebrity-btn-primary {
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
        }

        .celebrity-btn-secondary {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        @keyframes celebrityHeroRise {
          from { opacity: 0; transform: translateY(34px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes celebrityAurora {
          from {
            transform: translate3d(-1.5%, 0, 0) scale(1);
            opacity: 0.72;
          }
          to {
            transform: translate3d(1.5%, -1%, 0) scale(1.04);
            opacity: 1;
          }
        }

        @keyframes celebrityNoteFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-8deg);
            opacity: 0.08;
          }
          45% {
            transform: translate3d(0.8rem, -2.4rem, 0) rotate(10deg);
            opacity: 0.28;
          }
        }

        @keyframes celebritySmoke {
          from { transform: translate3d(-2%, 0, 0) scale(0.98); opacity: 0.68; }
          to { transform: translate3d(3%, -2%, 0) scale(1.08); opacity: 1; }
        }

        @keyframes celebritySpotlight {
          0%, 100% { opacity: 0.34; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes celebrityLaserSweep {
          0%, 100% { opacity: 0.2; height: 66%; }
          50% { opacity: 0.72; height: 86%; }
        }

        @keyframes celebrityScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }

        @keyframes celebrityEqualizer {
          0%, 100% { height: 0.55rem; }
          50% { height: 2.8rem; }
        }

        @keyframes celebrityEqualizerTall {
          0%, 100% { height: 0.9rem; opacity: 0.58; }
          50% { height: 4.2rem; opacity: 1; }
        }

        @keyframes celebrityStarPulse {
          0%, 100% { transform: scale(0.8); opacity: 0.58; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes celebrityCardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes celebrityOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @supports (animation-timeline: view()) {
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section {
            animation: celebrityViewRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 5% cover 26%;
          }

          .celebrity-card {
            animation: celebrityViewScale 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 24%;
          }
        }

        @keyframes celebrityViewRise {
          from { opacity: 0.5; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes celebrityViewScale {
          from { opacity: 0.5; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (min-width: 1440px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section,
          .celebrity-glass-divider,
          .celebrity-wave-divider {
            width: min(1280px, calc(100% - 4rem));
          }
        }

        @media (min-width: 1920px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section,
          .celebrity-glass-divider,
          .celebrity-wave-divider {
            width: min(1440px, calc(100% - 6rem));
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5.15;
          }
        }

        @media (max-width: 1366px) {
          .celebrity-hero {
            min-height: clamp(500px, 72vh, 700px);
            padding-top: clamp(7rem, 13vw, 10rem);
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 8.4vw, 7.2rem);
          }

          .celebrity-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 1180px) {
          .celebrity-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }
        }

        @media (max-width: 1024px) {
          .celebrity-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }

          .celebrity-hero {
            min-height: clamp(500px, 78svh, 680px);
            padding: clamp(7rem, 15vw, 10rem) clamp(1rem, 3vw, 2rem) clamp(4rem, 7vw, 5rem);
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 10vw, 6.2rem);
          }

          .celebrity-hero-copy {
            font-size: clamp(1rem, 2.4vw, 1.25rem);
          }

          .celebrity-section-heading h2,
          .celebrity-cta-section h2 {
            font-size: clamp(2.2rem, 7vw, 4.4rem);
          }

          .celebrity-stage-section {
            grid-template-columns: 1fr;
          }

          .celebrity-countdown {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .celebrity-hero,
          .celebrity-artists-section,
          .celebrity-stage-section,
          .celebrity-cta-section {
            width: min(100% - 1rem, 1180px);
          }

          .celebrity-hero {
            min-height: 86svh;
            padding: clamp(7rem, 27vw, 10rem) 1rem 4rem;
          }

          .celebrity-hero h1 {
            font-size: clamp(3rem, 17vw, 5.4rem);
          }

          .celebrity-grid {
            grid-template-columns: 1fr;
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card {
            border-radius: 22px;
          }

          .celebrity-card-frame {
            border-radius: 21px;
          }

          .celebrity-card-name {
            font-size: clamp(1.25rem, 6vw, 1.65rem);
          }

          .celebrity-card-genre {
            font-size: 0.72rem;
            letter-spacing: 0.08em;
          }

          .celebrity-badge {
            top: 0.85rem;
            left: 0.85rem;
            min-height: 1.85rem;
            padding: 0 0.7rem;
            font-size: 0.62rem;
          }

          .celebrity-live-icon {
            display: none;
          }

          .celebrity-card-headliner {
            grid-column: span 1;
          }

          .celebrity-card-headliner .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-card-overlay {
            opacity: 1;
          }

          .celebrity-stage-section {
            grid-template-columns: 1fr;
            padding: 1.25rem;
          }

          .celebrity-countdown {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .celebrity-countdown-card {
            min-height: 7.5rem;
          }

          .celebrity-card-caption {
            display: none;
          }

          .celebrity-cta-actions {
            flex-direction: column;
          }

          .celebrity-btn {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .celebrity-hero h1 {
            font-size: clamp(2.6rem, 16vw, 4rem);
          }

          .celebrity-section-heading h2,
          .celebrity-cta-section h2 {
            font-size: clamp(2rem, 12vw, 3.2rem);
          }

          .celebrity-card-frame {
            aspect-ratio: 4 / 5;
          }

          .celebrity-hero {
            border-radius: 24px;
          }

          .celebrity-card-overlay {
            padding: 1rem;
          }

          .celebrity-countdown {
            gap: 0.55rem;
          }

          .celebrity-countdown-card {
            border-radius: 18px;
          }

          .celebrity-ambient-notes span {
            opacity: 0.18;
          }
        }

        @media (max-width: 360px) {
          .celebrity-hero {
            min-height: 78svh;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          .celebrity-hero h1 {
            font-size: clamp(2.35rem, 15vw, 3.45rem);
          }

          .celebrity-hero-copy {
            font-size: 0.94rem;
            line-height: 1.55;
          }

          .celebrity-section-heading h2,
          .celebrity-stage-copy h2,
          .celebrity-cta-section h2 {
            font-size: clamp(1.85rem, 11vw, 2.65rem);
          }

          .celebrity-card-overlay {
            padding: 0.9rem;
          }

          .celebrity-card-name {
            font-size: 1.12rem;
          }

          .celebrity-card-genre {
            font-size: 0.66rem;
          }
        }

        @media (hover: none) {
          .celebrity-card-overlay {
            opacity: 1;
          }

          .celebrity-card-frame {
            transform: none;
          }

          .celebrity-card:hover,
          .celebrity-card:focus-visible {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .celebrity-page::before,
          .celebrity-ambient-notes span,
          .celebrity-hero::before,
          .celebrity-hero-lights span,
          .celebrity-lasers span,
          .celebrity-soundwave span,
          .celebrity-scroll-cue,
          .celebrity-stars span,
          .celebrity-live-icon span,
          .celebrity-card,
          .celebrity-stage-equalizer span,
          .celebrity-cta-orbit {
            animation: none;
          }

          .celebrity-card-frame {
            transform: none;
          }
        }
      `})]})}function Kd(){const e=[{name:"Ozilla Strategy Module",status:"Completed",detail:"Audience journey and activation playbook finalized."},{name:"Ozilla Scale Module",status:"Completed",detail:"Multi-channel visibility model and sponsor packages benchmarked."}];return n.jsxs("div",{children:[n.jsx(Ct,{title:"Past Events",subtitle:"Completed Ozilla Campaign Modules"}),n.jsx("div",{className:"space-y-6",children:e.map(t=>n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[n.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-2",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:t.name}),n.jsx("span",{className:"bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold",children:t.status})]}),n.jsx("p",{className:"text-gray-600",children:t.detail})]},t.name))})]})}const A2=[{name:"Ozilla Festival 2026",date:"November 1, 2026",location:"Lahore, Pakistan",status:"FEATURED EVENT",description:"The flagship Ozilla experience with live music, food culture, partner activations, and premium crowd moments."},{name:"Celebrity Night",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIVE EVENT",description:"A high-energy night built around headline artists, stage lights, social moments, and unforgettable performances."},{name:"Brand Experience Zone",date:"Coming Soon",location:"Lahore, Pakistan",status:"LIMITED SEATS",description:"Immersive sponsor zones, creator content, giveaways, product trials, and interactive festival experiences."}],_2=["Ozilla Festival 2026 execution and sponsor delivery","Audience journey execution from discovery to post-event recall","Expanded creator content and multi-platform amplification"];function F2(){return k.useEffect(()=>{const e=Array.from(document.querySelectorAll(".future-reveal")),t=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting?(a.target.classList.remove("future-in-view"),a.target.offsetWidth,a.target.classList.add("future-in-view")):a.target.classList.remove("future-in-view")})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return e.forEach(r=>t.observe(r)),()=>t.disconnect()},[]),n.jsxs("main",{className:"future-events-page",children:[n.jsxs("div",{className:"future-ambient","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("section",{className:"future-hero future-reveal","aria-label":"Upcoming Events",children:[n.jsx("img",{className:"future-hero-image",src:"/assets/ozilla/logo.png",alt:"",loading:"eager"}),n.jsxs("div",{className:"future-hero-lights","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"future-hero-content",children:[n.jsx("p",{className:"future-eyebrow",children:"Ozilla Festival 2026"}),n.jsx("h1",{children:"UPCOMING EVENTS"}),n.jsx("p",{children:"Discover the unforgettable experiences waiting for you at Ozilla Festival 2026."})]}),n.jsx("div",{className:"future-scroll-cue","aria-hidden":"true",children:n.jsx("span",{})})]}),n.jsx("div",{className:"future-divider","aria-hidden":"true"}),n.jsxs("section",{className:"future-section future-reveal",children:[n.jsxs("div",{className:"future-section-heading",children:[n.jsx("p",{className:"future-eyebrow",children:"Event Invitations"}),n.jsx("h2",{children:"Moments worth waiting for."}),n.jsx("p",{children:"A premium roadmap of upcoming music, culture, creator, and brand experiences designed for Lahore."})]}),n.jsx("div",{className:"future-event-grid",children:A2.map((e,t)=>n.jsx("article",{className:"future-event-card future-reveal",style:{"--future-delay":`${t*100}ms`},children:n.jsxs("div",{className:"future-event-content",children:[n.jsxs("div",{className:"future-event-meta",children:[n.jsx("span",{className:"future-event-badge",children:e.status}),n.jsx("p",{className:"future-event-date",children:e.date})]}),n.jsx("h3",{children:e.name}),n.jsx("p",{children:e.description}),n.jsx("div",{className:"future-event-location",children:e.location})]})},e.name))})]}),n.jsxs("section",{className:"future-roadmap-section future-reveal",children:[n.jsxs("div",{className:"future-section-heading",children:[n.jsx("p",{className:"future-eyebrow",children:"Forward Plan"}),n.jsx("h2",{children:"Built for deeper impact."}),n.jsx("p",{children:"The future roadmap centers on deeper on-ground interaction, higher digital impact, and custom sponsorship outcomes aligned with brand objectives."})]}),n.jsx("div",{className:"future-roadmap-grid",children:_2.map((e,t)=>n.jsxs("div",{className:"future-roadmap-card future-reveal",style:{"--future-delay":`${t*120}ms`},children:[n.jsx("span",{children:String(t+1).padStart(2,"0")}),n.jsx("p",{children:e})]},e))})]}),n.jsxs("section",{className:"future-cta-section future-reveal",children:[n.jsx("div",{className:"future-cta-glow","aria-hidden":"true"}),n.jsx("p",{className:"future-eyebrow",children:"Join the experience"}),n.jsx("h2",{children:"READY TO EXPERIENCE OZILLA FESTIVAL 2026?"}),n.jsx("p",{children:"Secure your place for the upcoming celebration of music, entertainment, creators, food, and premium festival culture."}),n.jsx(B,{className:"future-btn",to:"/tickets",children:"Purchase Ticket"})]}),n.jsx("style",{children:`
        .future-events-page {
          --future-deep: #020b0d;
          --future-ink: #091819;
          --future-muted: #55706f;
          --future-gold: #ffb000;
          --future-orange: #ff6b1a;
          --future-teal: #0b4f4c;
          --future-wine: #631017;
          position: relative;
          overflow: hidden;
          overflow-x: clip;
          color: var(--future-ink);
          background:
            radial-gradient(circle at 10% 14%, rgba(255, 176, 0, 0.2), transparent 24rem),
            radial-gradient(circle at 88% 32%, rgba(99, 16, 23, 0.18), transparent 28rem),
            radial-gradient(circle at 40% 80%, rgba(11, 79, 76, 0.16), transparent 30rem),
            linear-gradient(180deg, #fffaf4 0%, #f3e8df 48%, #fff7ef 100%);
        }

        .future-events-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent, rgba(255, 176, 0, 0.04) 45%, transparent 62%),
            radial-gradient(circle at 50% 8%, rgba(255, 255, 255, 0.22), transparent 18rem);
          animation: futureAurora 14s ease-in-out infinite alternate;
          z-index: 0;
        }

        .future-ambient span {
          position: fixed;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.75);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.54);
          pointer-events: none;
          z-index: 1;
          animation: futureFloat 9s ease-in-out infinite;
        }

        .future-ambient span:nth-child(1) { left: 9%; top: 28%; }
        .future-ambient span:nth-child(2) { right: 13%; top: 24%; animation-delay: 1.6s; }
        .future-ambient span:nth-child(3) { left: 22%; bottom: 20%; animation-delay: 3.2s; }
        .future-ambient span:nth-child(4) { right: 20%; bottom: 16%; animation-delay: 4.8s; }

        .future-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.985);
          transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .future-reveal.future-in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .future-hero,
        .future-section,
        .future-roadmap-section,
        .future-cta-section,
        .future-divider {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - clamp(1rem, 4vw, 2rem)));
          margin: 0 auto;
        }

        .future-hero {
          min-height: clamp(520px, 76svh, 780px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(7.5rem, 13vw, 12rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          color: #fff;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.16), transparent 20rem),
            linear-gradient(135deg, #020b0d, #063e3b 45%, #631017);
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.28), 0 0 90px rgba(255, 176, 0, 0.12);
          isolation: isolate;
        }

        .future-hero-image {
          position: absolute;
          inset: 50% auto auto 50%;
          width: 100%;
          height: 100%;
          max-width: min(760px, 82vw);
          max-height: min(420px, 58vh);
          object-fit: contain;
          opacity: 0.2;
          filter: saturate(1.22) contrast(1.1) drop-shadow(0 0 42px rgba(255, 145, 21, 0.5));
          transform: translate(-50%, -50%) scale(1.02);
          animation: futureHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .future-hero::before,
        .future-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .future-hero::before {
          background:
            radial-gradient(circle at 28% 18%, rgba(255, 176, 0, 0.26), transparent 18rem),
            radial-gradient(circle at 72% 22%, rgba(255, 107, 26, 0.18), transparent 18rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.94), rgba(2, 11, 13, 0.42), rgba(2, 11, 13, 0.9));
          z-index: -2;
        }

        .future-hero::after {
          background: radial-gradient(ellipse at center, transparent 32%, rgba(0, 0, 0, 0.76) 100%);
          z-index: -1;
        }

        .future-hero-lights span {
          position: absolute;
          top: -16%;
          width: clamp(90px, 12vw, 180px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.34), transparent 72%);
          filter: blur(20px);
          opacity: 0.5;
          transform-origin: top center;
          animation: futureSpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .future-hero-lights span:nth-child(1) { left: 12%; transform: rotate(18deg); }
        .future-hero-lights span:nth-child(2) { left: 48%; animation-delay: 1.4s; transform: rotate(-6deg); }
        .future-hero-lights span:nth-child(3) { right: 12%; animation-delay: 2.8s; transform: rotate(-18deg); }

        .future-hero-content {
          width: min(980px, 100%);
          animation: futureRise 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .future-eyebrow {
          margin: 0;
          color: var(--future-gold);
          font-size: clamp(0.68rem, 1vw, 0.82rem);
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .future-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3rem, 8.5vw, 8.4rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 28px 90px rgba(0, 0, 0, 0.66), 0 0 34px rgba(255, 176, 0, 0.13);
          text-wrap: balance;
        }

        .future-hero p:not(.future-eyebrow) {
          max-width: 760px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 1.8vw, 1.5rem);
          line-height: 1.65;
        }

        .future-scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 1rem;
          width: 2.8rem;
          height: 2.8rem;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          transform: translateX(-50%);
          animation: futureScrollBounce 1.7s ease-in-out infinite;
        }

        .future-scroll-cue span {
          width: 0.65rem;
          height: 0.65rem;
          border-right: 2px solid #ffb000;
          border-bottom: 2px solid #ffb000;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .future-divider {
          height: 1px;
          margin-top: clamp(1rem, 3vw, 2rem);
          background: linear-gradient(90deg, transparent, rgba(255, 176, 0, 0.52), rgba(19, 160, 151, 0.28), transparent);
        }

        .future-divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(64vw, 720px);
          height: 6rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.15), transparent 70%);
          filter: blur(24px);
          transform: translate(-50%, -50%);
        }

        .future-section,
        .future-roadmap-section {
          padding: clamp(3.2rem, 7vw, 7rem) 0;
        }

        .future-section-heading {
          max-width: 780px;
          margin: 0 auto clamp(2rem, 5vw, 3.5rem);
          text-align: center;
        }

        .future-section-heading h2,
        .future-cta-section h2 {
          margin: 0.6rem 0 0;
          color: var(--future-ink);
          font-size: clamp(2.35rem, 6vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .future-section-heading p:not(.future-eyebrow) {
          margin: 1rem auto 0;
          max-width: 660px;
          color: var(--future-muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .future-event-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: clamp(1rem, 2vw, 1.35rem);
          align-items: stretch;
        }

        .future-event-card {
          position: relative;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          border-radius: 30px;
          padding: 1px;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background:
            linear-gradient(145deg, rgba(255, 176, 0, 0.66), rgba(255, 255, 255, 0.2) 38%, rgba(11, 79, 76, 0.55)),
            rgba(255, 250, 242, 0.62);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          animation-delay: var(--future-delay);
          transition: transform 320ms ease, box-shadow 320ms ease, border-color 320ms ease;
        }

        .future-event-card::after {
          content: '';
          position: absolute;
          inset: -30% -40% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.44), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 760ms ease;
          pointer-events: none;
        }

        .future-event-card:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: rgba(255, 176, 0, 0.68);
          box-shadow: 0 44px 112px rgba(2, 11, 13, 0.24), 0 0 52px rgba(255, 176, 0, 0.2);
        }

        .future-event-card:hover::after {
          transform: translateX(135%) rotate(10deg);
        }

        .future-event-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.2rem;
        }

        .future-event-badge {
          min-height: 2rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.85rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff6b1a);
          box-shadow: 0 12px 28px rgba(255, 176, 0, 0.3);
          font-size: 0.66rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .future-event-content {
          min-height: clamp(310px, 26vw, 350px);
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: clamp(1.35rem, 2.6vw, 2rem);
          border-radius: 27px;
          background:
            radial-gradient(circle at 100% 0%, rgba(255, 176, 0, 0.12), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(255, 247, 235, 0.82)),
            rgba(255, 255, 255, 0.42);
          backdrop-filter: blur(16px);
        }

        .future-event-date {
          margin: 0;
          color: #9a3b0b;
          font-size: clamp(0.66rem, 0.9vw, 0.76rem);
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .future-event-content h3 {
          margin: 0 0 0.85rem;
          color: var(--future-ink);
          font-size: clamp(1.55rem, 2.6vw, 2.45rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
        }

        .future-event-content p:not(.future-event-date) {
          color: var(--future-muted);
          font-size: clamp(0.94rem, 1.2vw, 1rem);
          line-height: 1.7;
        }

        .future-event-location {
          margin-top: auto;
          padding-top: 1.4rem;
          color: var(--future-teal);
          font-weight: 950;
        }

        .future-roadmap-section {
          padding-top: 0;
        }

        .future-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .future-roadmap-card {
          min-height: 180px;
          padding: 1.25rem;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 250, 245, 0.9), rgba(246, 238, 232, 0.72));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          animation: futureCardIn 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--future-delay);
        }

        .future-roadmap-card span {
          display: inline-flex;
          width: 3rem;
          height: 3rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          color: #ffd36a;
          font-weight: 950;
        }

        .future-roadmap-card p {
          color: var(--future-ink);
          font-weight: 850;
          line-height: 1.55;
        }

        .future-cta-section {
          min-height: 430px;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2.2rem, 5vw, 4.5rem) 1rem;
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.2), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .future-cta-glow {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 66%);
          animation: futureOrbit 18s linear infinite;
          z-index: -1;
        }

        .future-cta-section h2 {
          max-width: 920px;
          color: #fff;
        }

        .future-cta-section p:not(.future-eyebrow) {
          max-width: 680px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        .future-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          margin-top: 2rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff6b1a 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .future-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 44px rgba(255, 126, 0, 0.32);
        }

        @supports (animation-timeline: view()) {
          .future-section,
          .future-roadmap-section,
          .future-cta-section {
            animation: futureViewRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 5% cover 26%;
          }

          .future-event-card,
          .future-roadmap-card {
            animation: futureViewScale 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
            animation-timeline: view();
            animation-range: entry 8% cover 24%;
          }
        }

        @keyframes futureRise {
          from { opacity: 0; transform: translateY(34px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes futureCardIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes futureAurora {
          from { transform: translate3d(-1.5%, 0, 0) scale(1); opacity: 0.72; }
          to { transform: translate3d(1.5%, -1%, 0) scale(1.04); opacity: 1; }
        }

        @keyframes futureFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.45; }
          50% { transform: translateY(-24px) scale(1.22); opacity: 1; }
        }

        @keyframes futureHeroZoom {
          from { transform: translate(-50%, -50%) scale(1.02); }
          to { transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes futureSpotlight {
          0%, 100% { opacity: 0.32; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes futureScrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }

        @keyframes futureOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @keyframes futureViewRise {
          from { opacity: 0.5; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes futureViewScale {
          from { opacity: 0.5; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (min-width: 1600px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1360px, calc(100% - 5rem));
          }

          .future-hero {
            min-height: clamp(660px, 72svh, 860px);
          }

          .future-event-content {
            min-height: 360px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1280px, calc(100% - 4rem));
          }
        }

        @media (max-width: 1279px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(1120px, calc(100% - 2rem));
          }

          .future-event-content {
            min-height: 330px;
          }
        }

        @media (max-width: 1024px) {
          .future-roadmap-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .future-hero {
            min-height: clamp(500px, 78svh, 680px);
          }

          .future-hero h1 {
            font-size: clamp(3rem, 10vw, 6.2rem);
          }

          .future-hero-image {
            max-width: min(660px, 82vw);
            max-height: min(360px, 52svh);
          }
        }

        @media (max-width: 820px) {
          .future-hero {
            min-height: clamp(500px, 72svh, 640px);
            padding: clamp(6.5rem, 14vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3.5rem, 7vw, 5rem);
          }

          .future-event-grid,
          .future-roadmap-grid {
            gap: 1rem;
          }

          .future-event-content {
            min-height: 320px;
            padding: clamp(1.15rem, 3vw, 1.55rem);
          }

          .future-section-heading {
            margin-bottom: clamp(1.8rem, 5vw, 2.5rem);
          }
        }

        @media (max-width: 900px) {
          .future-event-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(100% - 1rem, 1180px);
          }

          .future-hero {
            min-height: min(82svh, 620px);
            padding: clamp(6rem, 24vw, 8rem) clamp(0.9rem, 4vw, 1.2rem) 3.6rem;
            border-radius: clamp(24px, 8vw, 34px);
          }

          .future-hero h1 {
            font-size: clamp(2.8rem, 15vw, 5.2rem);
            letter-spacing: -0.055em;
          }

          .future-hero p:not(.future-eyebrow) {
            max-width: 34rem;
            font-size: clamp(0.98rem, 4vw, 1.18rem);
            line-height: 1.55;
          }

          .future-hero-image {
            max-width: 86vw;
            max-height: 34svh;
            opacity: 0.18;
          }

          .future-hero-lights span {
            width: clamp(70px, 22vw, 120px);
            filter: blur(18px);
          }

          .future-roadmap-grid {
            grid-template-columns: 1fr;
          }

          .future-event-grid {
            grid-template-columns: 1fr;
          }

          .future-event-content {
            min-height: 0;
            border-radius: 24px;
          }

          .future-event-card {
            border-radius: 26px;
          }

          .future-event-card:hover {
            transform: translateY(-6px) scale(1.005);
          }

          .future-btn {
            width: 100%;
          }

          .future-cta-section {
            min-height: 360px;
            padding: clamp(2rem, 9vw, 3rem) 1rem;
          }
        }

        @media (max-width: 480px) {
          .future-ambient span {
            width: 8px;
            height: 8px;
          }

          .future-event-meta {
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .future-event-badge {
            min-height: 1.8rem;
            padding: 0 0.72rem;
            font-size: 0.58rem;
            letter-spacing: 0.08em;
          }

          .future-event-date {
            font-size: 0.62rem;
            letter-spacing: 0.08em;
          }

          .future-event-location {
            padding-top: 1rem;
          }
        }

        @media (max-width: 420px) {
          .future-hero {
            border-radius: 24px;
          }

          .future-hero h1,
          .future-section-heading h2,
          .future-cta-section h2 {
            font-size: clamp(2.25rem, 14vw, 3.6rem);
          }

          .future-event-content,
          .future-roadmap-card {
            padding: 1rem;
          }
        }

        @media (max-width: 360px) {
          .future-hero,
          .future-section,
          .future-roadmap-section,
          .future-cta-section,
          .future-divider {
            width: min(100% - 0.65rem, 1180px);
          }

          .future-hero h1 {
            font-size: clamp(2.35rem, 15vw, 3.1rem);
          }

          .future-section-heading h2,
          .future-cta-section h2 {
            font-size: clamp(2rem, 13vw, 3rem);
          }

          .future-event-content h3 {
            font-size: clamp(1.35rem, 10vw, 1.8rem);
          }

          .future-event-meta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (hover: none) {
          .future-event-card:active,
          .future-btn:active {
            transform: translateY(-4px) scale(0.995);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .future-events-page::before,
          .future-ambient span,
          .future-hero-image,
          .future-hero-lights span,
          .future-scroll-cue,
          .future-event-card,
          .future-roadmap-card,
          .future-cta-glow {
            animation: none;
          }
        }
      `})]})}const Zs=[{name:"Ozilla Strategy Module",year:"2023",icon:"M",description:"Campaign strategy foundation focused on brand positioning, audience mapping, and activation planning.",highlights:["Brand Positioning","Audience Research","Partner Onboarding"],venue:"Lahore Expo Center",date:"December 12, 2023"},{name:"Ozilla Scale Module",year:"2024",icon:"G",description:"Scale phase with creator collaborations, sponsor visibility lanes, and larger audience engagement programs.",highlights:["Creator Collaborations","Sponsor Visibility","Live Entertainment Blocks"],venue:"DHA Sports Club, Lahore",date:"November 9, 2024"},{name:"Ozilla Festival Website Brief 2026 (Pre-Campaign)",year:"2025",icon:"A",description:"Pre-launch phase covering website content, ticketing workflow, and full experience readiness for the main festival.",highlights:["Ticketing Workflow","Experience Mapping","Marketing Readiness"],venue:"Gulberg Event District, Lahore",date:"October 18, 2025"},{name:"Ozilla Basand Festival",year:"2026",icon:"F",description:"Seasonal cultural festival featuring live entertainment, color-themed experiences, and partner activations.",highlights:["Cultural Performances","Live Music","Brand Activation Zones"],venue:"Lahore, Punjab",date:"March 07, 2026"},{name:"Ozilla Festival 2027 Season 2",year:"2027",icon:"C",description:"Second season expansion with larger audience engagement, celebrity performances, and upgraded event production.",highlights:["Celebrity Performances","Expanded Audience Program","Premium Experience Zones"],venue:"Lahore, Punjab",date:"November 14, 2027"}],I2=[{value:3,suffix:"",label:"Festival Editions",mark:"ED"},{value:20,suffix:"+",label:"Artists Performed",mark:"AR"},{value:1e4,suffix:"+",label:"Visitors",mark:"VI"},{value:12,suffix:"+",label:"Sponsors",mark:"SP"},{value:5,suffix:"+",label:"Successful Events",mark:"EV"}],M2=["A growing community built around music, culture, and premium festival experiences.","From strategy to full-scale event execution, Ozilla keeps building bigger moments.","Every edition adds stronger audience energy, better partner value, and unforgettable memories."];function D2({value:e,suffix:t,label:r,mark:a}){const[i,s]=k.useState(0);return k.useEffect(()=>{const c=performance.now();let l;const d=u=>{const p=Math.min((u-c)/900,1),f=1-Math.pow(1-p,3);s(Math.round(e*f)),p<1&&(l=window.requestAnimationFrame(d))};return l=window.requestAnimationFrame(d),()=>window.cancelAnimationFrame(l)},[e]),n.jsxs("div",{className:`history-stat-card history-reveal${e>=1e3?" history-stat-wide":""}`,children:[n.jsx("em",{children:a}),n.jsxs("strong",{children:[i.toLocaleString(),t]}),n.jsx("span",{children:r})]})}function U2(){const e=k.useMemo(()=>{var t;return(t=Zs[Zs.length-1])==null?void 0:t.year},[]);return k.useEffect(()=>{const t=Array.from(document.querySelectorAll(".history-reveal")),r=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting?(i.target.classList.remove("history-in-view"),i.target.offsetWidth,i.target.classList.add("history-in-view")):i.target.classList.remove("history-in-view")})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});return t.forEach(a=>r.observe(a)),()=>r.disconnect()},[]),n.jsxs("main",{className:"history-page",children:[n.jsxs("div",{className:"history-atmosphere","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("section",{className:"history-hero history-reveal","aria-label":"Ozilla Festival history",children:[n.jsx("img",{className:"history-hero-logo",src:"/assets/ozilla/logo.png",alt:"",loading:"eager"}),n.jsxs("div",{className:"history-hero-rays","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"history-hero-content",children:[n.jsx("p",{className:"history-eyebrow",children:"Ozilla Festival Legacy"}),n.jsx("h1",{children:"OUR JOURNEY"}),n.jsx("p",{children:"Relive the unforgettable moments that shaped the Ozilla Festival."})]})]}),n.jsx("section",{className:"history-story history-reveal",children:n.jsxs("div",{className:"history-section-heading",children:[n.jsx("p",{className:"history-eyebrow",children:"From idea to movement"}),n.jsx("h2",{children:"A festival story written in moments."}),n.jsx("p",{children:"Each chapter marks a new step in the Ozilla journey: sharper strategy, bigger experiences, stronger communities, and a growing culture of celebration in Lahore."})]})}),n.jsxs("section",{className:"history-legacy history-reveal","aria-label":"Ozilla Festival achievements",children:[n.jsxs("div",{className:"history-section-heading",children:[n.jsx("p",{className:"history-eyebrow",children:"Our Legacy"}),n.jsx("h2",{children:"Built on energy, people, and unforgettable nights."}),n.jsx("p",{children:"The Ozilla journey is measured in more than years. It is measured in artists, visitors, partners, successful events, and the memories created together."})]}),n.jsx("div",{className:"history-stats",children:I2.map(t=>n.jsx(D2,{...t},t.label))})]}),n.jsxs("section",{className:"history-timeline","aria-label":"Ozilla Festival timeline",children:[n.jsx("div",{className:"history-timeline-line","aria-hidden":"true"}),Zs.map((t,r)=>n.jsxs("article",{className:"history-timeline-item history-reveal",style:{"--history-delay":`${r*110}ms`},children:[n.jsxs("div",{className:"history-year-node",children:[n.jsx("span",{children:t.icon}),n.jsx("strong",{children:t.year})]}),n.jsxs("div",{className:"history-card",children:[n.jsxs("div",{className:"history-card-top",children:[n.jsxs("p",{className:"history-card-kicker",children:["Chapter ",String(r+1).padStart(2,"0")]}),n.jsx("span",{children:t.year})]}),n.jsx("h3",{children:t.name}),n.jsx("p",{children:t.description}),n.jsxs("div",{className:"history-detail-grid",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Venue"}),n.jsx("strong",{children:t.venue})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Date"}),n.jsx("strong",{children:t.date})]})]}),n.jsx("div",{className:"history-highlights",children:t.highlights.map(a=>n.jsx("span",{children:a},a))})]})]},`${t.name}-${t.year}`))]}),n.jsxs("section",{className:"history-memory-wall history-reveal",children:[n.jsxs("div",{className:"history-section-heading",children:[n.jsx("p",{className:"history-eyebrow",children:"Hall of memories"}),n.jsx("h2",{children:"Milestones that stayed with us."})]}),n.jsx("div",{className:"history-memory-grid",children:M2.map((t,r)=>n.jsxs("blockquote",{className:"history-memory-card history-reveal",style:{"--history-delay":`${r*120}ms`},children:[n.jsx("span",{children:["M","L","G"][r]}),n.jsx("p",{children:t})]},t))})]}),n.jsx("section",{className:"history-quote history-reveal","aria-label":"Ozilla Festival quote",children:n.jsxs("div",{className:"history-quote-card",children:[n.jsx("span",{children:"OZILLA"}),n.jsx("blockquote",{children:"“Every festival creates memories, but Ozilla Festival creates unforgettable stories.”"})]})}),n.jsxs("section",{className:"history-cta history-reveal",children:[n.jsx("div",{className:"history-cta-glow","aria-hidden":"true"}),n.jsxs("p",{className:"history-eyebrow",children:["Next chapter: ",e]}),n.jsx("h2",{children:"THE NEXT CHAPTER BEGINS WITH YOU"}),n.jsx("p",{children:"Join us in creating the next unforgettable memories."}),n.jsx(B,{className:"history-cta-button",to:"/tickets",children:"Join Ozilla Festival"})]}),n.jsx("style",{children:`
        .history-page {
          --history-deep: #020b0d;
          --history-ink: #071819;
          --history-muted: #5f7774;
          --history-teal: #073f3b;
          --history-gold: #ffb000;
          --history-orange: #ff7a18;
          --history-wine: #641018;
          position: relative;
          overflow: hidden;
          overflow-x: clip;
          color: var(--history-ink);
          background:
            radial-gradient(circle at 10% 12%, rgba(255, 176, 0, 0.18), transparent 24rem),
            radial-gradient(circle at 88% 32%, rgba(100, 16, 24, 0.18), transparent 28rem),
            radial-gradient(circle at 45% 78%, rgba(7, 63, 59, 0.18), transparent 30rem),
            linear-gradient(180deg, #fffaf4 0%, #f4e9df 48%, #fff7ee 100%);
        }

        .history-page *,
        .history-page *::before,
        .history-page *::after {
          box-sizing: border-box;
        }

        .history-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent, rgba(255, 176, 0, 0.045) 46%, transparent 64%),
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.24), transparent 20rem);
          animation: historyAurora 14s ease-in-out infinite alternate;
          z-index: 0;
        }

        .history-atmosphere span {
          position: fixed;
          width: clamp(8px, 1vw, 14px);
          height: clamp(8px, 1vw, 14px);
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.72);
          box-shadow: 0 0 32px rgba(255, 176, 0, 0.52);
          pointer-events: none;
          z-index: 1;
          animation: historyFloat 9s ease-in-out infinite;
        }

        .history-atmosphere span:nth-child(1) { left: 8%; top: 24%; }
        .history-atmosphere span:nth-child(2) { right: 12%; top: 20%; animation-delay: 1.7s; }
        .history-atmosphere span:nth-child(3) { left: 22%; bottom: 20%; animation-delay: 3.1s; }
        .history-atmosphere span:nth-child(4) { right: 22%; bottom: 15%; animation-delay: 4.5s; }

        .history-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.985);
          transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--history-delay, 0ms);
          will-change: opacity, transform;
        }

        .history-reveal.history-in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .history-hero,
        .history-story,
        .history-legacy,
        .history-stats,
        .history-timeline,
        .history-memory-wall,
        .history-quote,
        .history-cta {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - clamp(1rem, 4vw, 2rem)));
          margin: 0 auto;
        }

        .history-hero {
          min-height: clamp(520px, 74svh, 760px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: clamp(28px, 4vw, 48px);
          padding: clamp(7rem, 13vw, 11rem) clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem);
          color: #fff;
          text-align: center;
          background:
            radial-gradient(circle at 48% 18%, rgba(255, 176, 0, 0.18), transparent 20rem),
            linear-gradient(135deg, #020b0d, #063f3b 48%, #641018);
          box-shadow: 0 34px 95px rgba(2, 11, 13, 0.28), 0 0 90px rgba(255, 176, 0, 0.12);
          isolation: isolate;
        }

        .history-hero-logo {
          position: absolute;
          inset: 50% auto auto 50%;
          width: min(760px, 82vw);
          height: min(420px, 58vh);
          object-fit: contain;
          opacity: 0.16;
          filter: saturate(1.22) contrast(1.1) drop-shadow(0 0 42px rgba(255, 145, 21, 0.46));
          transform: translate(-50%, -50%) scale(1.02);
          animation: historyHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .history-hero::before,
        .history-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .history-hero::before {
          background:
            radial-gradient(circle at 24% 18%, rgba(255, 176, 0, 0.24), transparent 18rem),
            radial-gradient(circle at 76% 22%, rgba(255, 122, 24, 0.18), transparent 18rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.94), rgba(2, 11, 13, 0.42), rgba(2, 11, 13, 0.88));
          z-index: -2;
        }

        .history-hero::after {
          background: radial-gradient(ellipse at center, transparent 32%, rgba(0, 0, 0, 0.76) 100%);
          z-index: -1;
        }

        .history-hero-rays span {
          position: absolute;
          top: -16%;
          width: clamp(90px, 12vw, 180px);
          height: 118%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 176, 0, 0.3), transparent 72%);
          filter: blur(20px);
          opacity: 0.5;
          transform-origin: top center;
          animation: historySpotlight 7s ease-in-out infinite;
          z-index: -1;
        }

        .history-hero-rays span:nth-child(1) { left: 12%; transform: rotate(18deg); }
        .history-hero-rays span:nth-child(2) { left: 48%; animation-delay: 1.4s; transform: rotate(-6deg); }
        .history-hero-rays span:nth-child(3) { right: 12%; animation-delay: 2.8s; transform: rotate(-18deg); }

        .history-hero-content {
          width: min(980px, 100%);
          min-width: 0;
        }

        .history-eyebrow {
          margin: 0;
          color: var(--history-gold);
          font-size: clamp(0.68rem, 1vw, 0.82rem);
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .history-hero h1 {
          margin: 0.8rem 0 1rem;
          color: #fff;
          font-size: clamp(3rem, 8.5vw, 8.2rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-shadow: 0 28px 90px rgba(0, 0, 0, 0.66), 0 0 34px rgba(255, 176, 0, 0.13);
          text-wrap: balance;
        }

        .history-hero p:not(.history-eyebrow) {
          max-width: 760px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 1.8vw, 1.5rem);
          line-height: 1.65;
        }

        .history-story {
          padding: clamp(3.4rem, 7vw, 6rem) 0 clamp(2rem, 5vw, 3rem);
        }

        .history-legacy {
          padding-bottom: clamp(2rem, 5vw, 4rem);
        }

        .history-legacy .history-section-heading {
          margin-bottom: clamp(1.8rem, 5vw, 3rem);
        }

        .history-section-heading {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          min-width: 0;
        }

        .history-section-heading h2,
        .history-cta h2 {
          margin: 0.6rem 0 0;
          color: var(--history-ink);
          font-size: clamp(2.35rem, 6vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .history-section-heading p:not(.history-eyebrow) {
          max-width: 690px;
          margin: 1rem auto 0;
          color: var(--history-muted);
          font-size: clamp(0.98rem, 1.3vw, 1.08rem);
          line-height: 1.75;
        }

        .history-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
          gap: clamp(0.85rem, 2vw, 1.2rem);
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 34px;
          background:
            radial-gradient(circle at 14% 0%, rgba(255, 176, 0, 0.16), transparent 20rem),
            radial-gradient(circle at 86% 100%, rgba(255, 122, 24, 0.14), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.97), rgba(7, 63, 59, 0.93));
          box-shadow: 0 32px 85px rgba(2, 11, 13, 0.18), 0 0 70px rgba(255, 176, 0, 0.08);
        }

        .history-stat-card {
          position: relative;
          min-height: 164px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          text-align: center;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.13), transparent 66%),
            rgba(255, 255, 255, 0.07);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .history-stat-card::before {
          content: '';
          position: absolute;
          inset: -40% auto auto -25%;
          width: 70%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.14), transparent 70%);
          pointer-events: none;
        }

        .history-stat-card em {
          position: relative;
          width: 2.8rem;
          height: 2.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #ffd36a;
          background: rgba(255, 255, 255, 0.08);
          font-size: 0.74rem;
          font-style: normal;
          font-weight: 950;
          letter-spacing: 0.08em;
        }

        .history-stat-card strong {
          max-width: 100%;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(2.5rem, 4.25vw, 4.35rem);
          line-height: 0.86;
          letter-spacing: -0.07em;
          text-shadow: 0 0 24px rgba(255, 176, 0, 0.14);
          white-space: nowrap;
          transform: scale(var(--history-stat-scale, 1));
          transform-origin: center;
        }

        .history-stat-wide strong {
          --history-stat-scale: 0.82;
        }

        .history-stat-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: clamp(0.82rem, 1.1vw, 1rem);
          font-weight: 900;
          line-height: 1.2;
        }

        .history-timeline {
          padding: clamp(4rem, 8vw, 7rem) 0;
        }

        .history-timeline-line {
          position: absolute;
          left: 50%;
          top: clamp(5rem, 8vw, 7rem);
          bottom: clamp(4rem, 7vw, 5rem);
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(255, 176, 0, 0.78), rgba(255, 122, 24, 0.46), rgba(7, 63, 59, 0.42), transparent);
          box-shadow: 0 0 24px rgba(255, 176, 0, 0.24);
          transform: translateX(-50%);
        }

        .history-timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 112px minmax(0, 1fr);
          align-items: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          margin-bottom: clamp(1.8rem, 4vw, 3rem);
        }

        .history-timeline-item:nth-of-type(even) .history-card {
          grid-column: 3;
        }

        .history-timeline-item:nth-of-type(even) .history-year-node {
          grid-column: 2;
        }

        .history-year-node {
          grid-column: 2;
          width: 112px;
          height: 112px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 176, 0, 0.42);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.24), transparent 60%),
            linear-gradient(145deg, rgba(2, 11, 13, 0.96), rgba(7, 63, 59, 0.9));
          box-shadow: 0 18px 52px rgba(2, 11, 13, 0.22), 0 0 28px rgba(255, 176, 0, 0.14);
          z-index: 2;
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .history-timeline-item:hover .history-year-node {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 24px 62px rgba(2, 11, 13, 0.28), 0 0 42px rgba(255, 176, 0, 0.22);
        }

        .history-year-node span {
          font-size: 1.45rem;
          animation: historyIconFloat 2.8s ease-in-out infinite;
        }

        .history-year-node strong {
          color: #ffd36a;
          font-size: 1.15rem;
          font-weight: 950;
        }

        .history-card {
          grid-column: 1;
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: clamp(1.3rem, 2.8vw, 2rem);
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 28px;
          background:
            radial-gradient(circle at 100% 0%, rgba(255, 176, 0, 0.12), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(255, 247, 235, 0.82));
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(18px);
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }

        .history-card::after {
          content: '';
          position: absolute;
          inset: -30% -40% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transform: translateX(-120%) rotate(10deg);
          transition: transform 760ms ease;
          pointer-events: none;
        }

        .history-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.62);
          box-shadow: 0 40px 100px rgba(2, 11, 13, 0.22), 0 0 45px rgba(255, 176, 0, 0.13);
        }

        .history-card:hover::after {
          transform: translateX(135%) rotate(10deg);
        }

        .history-card-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          margin-bottom: 1rem;
        }

        .history-card-kicker,
        .history-card-top span {
          margin: 0;
          color: #9a3b0b;
          font-size: 0.74rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .history-card-top span {
          min-height: 2rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.85rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffe08a, #ffb000 48%, #ff7a18);
          box-shadow: 0 12px 28px rgba(255, 176, 0, 0.26);
        }

        .history-card h3 {
          margin: 0 0 0.85rem;
          color: var(--history-ink);
          font-size: clamp(1.55rem, 2.8vw, 2.35rem);
          line-height: 1;
          letter-spacing: -0.045em;
          overflow-wrap: anywhere;
        }

        .history-card > p {
          color: var(--history-muted);
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .history-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.8rem;
          margin-top: 1.3rem;
        }

        .history-detail-grid div {
          min-width: 0;
          padding: 0.9rem;
          border: 1px solid rgba(7, 63, 59, 0.12);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.42);
        }

        .history-detail-grid span {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--history-muted);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .history-detail-grid strong {
          color: var(--history-teal);
          font-size: 0.92rem;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .history-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.2rem;
        }

        .history-highlights span {
          max-width: 100%;
          padding: 0.58rem 0.72rem;
          border-radius: 999px;
          color: var(--history-teal);
          background: rgba(7, 63, 59, 0.08);
          font-size: 0.78rem;
          font-weight: 850;
          overflow-wrap: anywhere;
        }

        .history-memory-wall {
          padding-bottom: clamp(3rem, 7vw, 5rem);
        }

        .history-memory-wall .history-section-heading {
          margin-bottom: clamp(1.8rem, 5vw, 3rem);
        }

        .history-memory-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .history-memory-card {
          min-height: 210px;
          min-width: 0;
          margin: 0;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.26);
          border-radius: 26px;
          background:
            radial-gradient(circle at 0% 0%, rgba(255, 176, 0, 0.14), transparent 12rem),
            linear-gradient(145deg, rgba(255, 250, 242, 0.9), rgba(246, 238, 232, 0.72));
          box-shadow: 0 20px 55px rgba(18, 34, 34, 0.08);
          transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
        }

        .history-memory-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 176, 0, 0.44);
          box-shadow: 0 34px 80px rgba(18, 34, 34, 0.15), 0 0 34px rgba(255, 176, 0, 0.12);
        }

        .history-memory-card span {
          display: inline-flex;
          width: 3rem;
          height: 3rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border-radius: 18px;
          background: linear-gradient(135deg, #041719, #0b4f4c);
          font-size: 1.15rem;
        }

        .history-memory-card p {
          color: var(--history-ink);
          font-weight: 820;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .history-quote {
          padding-bottom: clamp(3rem, 7vw, 5rem);
        }

        .history-quote-card {
          position: relative;
          overflow: hidden;
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(1.6rem, 4vw, 3.2rem);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: clamp(26px, 4vw, 38px);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.16), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.94), rgba(7, 63, 59, 0.9) 55%, rgba(100, 16, 24, 0.9));
          box-shadow: 0 30px 90px rgba(2, 11, 13, 0.18);
        }

        .history-quote-card::before {
          content: '';
          position: absolute;
          inset: -45% -30% auto;
          height: 42%;
          background: linear-gradient(112deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(10deg);
        }

        .history-quote-card span {
          color: var(--history-gold);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.22em;
        }

        .history-quote-card blockquote {
          position: relative;
          max-width: 800px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1.55rem, 4vw, 3.15rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.045em;
          text-wrap: balance;
          overflow-wrap: anywhere;
        }

        .history-page .history-quote-card {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.18), transparent 18rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.96), rgba(7, 63, 59, 0.92) 55%, rgba(100, 16, 24, 0.92)) !important;
        }

        .history-page .history-quote-card span {
          color: #ffbd59 !important;
        }

        .history-page .history-quote-card blockquote {
          color: #ffffff !important;
          text-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
        }

        .history-cta {
          min-height: 430px;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          margin-bottom: clamp(3rem, 7vw, 5rem);
          padding: clamp(2.2rem, 5vw, 4.5rem) 1rem;
          border-radius: clamp(28px, 4vw, 42px);
          color: #fff;
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.2), transparent 18rem),
            radial-gradient(circle at 12% 82%, rgba(255, 122, 24, 0.14), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.2);
          isolation: isolate;
        }

        .history-cta-glow {
          position: absolute;
          width: min(70vw, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 176, 0, 0.16), transparent 66%);
          animation: historyOrbit 18s linear infinite;
          z-index: -1;
        }

        .history-cta h2 {
          max-width: 920px;
          color: #fff;
        }

        .history-cta p:not(.history-eyebrow) {
          max-width: 680px;
          margin: 1rem auto 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        .history-page .history-cta {
          background:
            radial-gradient(circle at 50% 18%, rgba(255, 176, 0, 0.22), transparent 18rem),
            radial-gradient(circle at 12% 82%, rgba(255, 122, 24, 0.16), transparent 18rem),
            linear-gradient(135deg, #020b0d, #073332 52%, #39132f) !important;
        }

        .history-page .history-cta .history-eyebrow {
          color: #ffbd59 !important;
        }

        .history-page .history-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .history-page .history-cta p:not(.history-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .history-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          margin-top: 2rem;
          padding: 0 1.45rem;
          border-radius: 999px;
          color: #111;
          background: linear-gradient(135deg, #ffb000, #ff7a18 58%, #ff4d2e);
          box-shadow: 0 18px 36px rgba(255, 126, 0, 0.26);
          font-weight: 950;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .history-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 44px rgba(255, 126, 0, 0.32);
        }

        @keyframes historyAurora {
          from { transform: translate3d(-1.5%, 0, 0) scale(1); opacity: 0.72; }
          to { transform: translate3d(1.5%, -1%, 0) scale(1.04); opacity: 1; }
        }

        @keyframes historyFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.45; }
          50% { transform: translateY(-24px) scale(1.22); opacity: 1; }
        }

        @keyframes historyHeroZoom {
          from { transform: translate(-50%, -50%) scale(1.02); }
          to { transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes historySpotlight {
          0%, 100% { opacity: 0.32; filter: blur(24px); }
          50% { opacity: 0.72; filter: blur(16px); }
        }

        @keyframes historyIconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes historyOrbit {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.04); }
        }

        @media (min-width: 1600px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(1360px, calc(100% - 5rem));
          }
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(1240px, calc(100% - 4rem));
          }

          .history-stat-card strong {
            font-size: clamp(2.4rem, 3.8vw, 4rem);
          }
        }

        @media (max-width: 1180px) {
          .history-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 2rem, 980px);
          }

          .history-memory-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .history-stat-card strong {
            font-size: clamp(2.6rem, 8vw, 4.5rem);
          }

          .history-timeline-line {
            left: 54px;
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 108px minmax(0, 1fr);
          }

          .history-timeline-item .history-card,
          .history-timeline-item:nth-of-type(even) .history-card {
            grid-column: 2;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            grid-column: 1;
            width: 96px;
            height: 96px;
          }
        }

        @media (max-width: 820px) {
          .history-hero {
            min-height: clamp(500px, 72svh, 640px);
            padding: clamp(6.5rem, 14vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3.5rem, 7vw, 5rem);
          }

          .history-hero-logo {
            width: min(650px, 84vw);
            height: min(360px, 48svh);
          }

          .history-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .history-stat-card {
            min-height: 146px;
          }

          .history-memory-grid {
            gap: 1rem;
          }

          .history-card {
            padding: clamp(1.15rem, 3vw, 1.55rem);
          }
        }

        @media (max-width: 767px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 1rem, 1180px);
          }

          .history-hero {
            min-height: min(82svh, 620px);
            padding: clamp(6rem, 24vw, 8rem) 1rem 3.6rem;
            border-radius: clamp(24px, 8vw, 34px);
          }

          .history-hero h1 {
            font-size: clamp(2.8rem, 15vw, 5.2rem);
            letter-spacing: -0.055em;
          }

          .history-hero p:not(.history-eyebrow) {
            font-size: clamp(0.98rem, 4vw, 1.18rem);
            line-height: 1.55;
          }

          .history-hero-logo {
            width: 86vw;
            height: 34svh;
            opacity: 0.15;
          }

          .history-hero-rays span {
            width: clamp(70px, 22vw, 120px);
            filter: blur(18px);
          }

          .history-memory-grid {
            grid-template-columns: 1fr;
          }

          .history-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 0.75rem;
          }

          .history-stat-card {
            min-height: 128px;
          }

          .history-stat-card strong {
            font-size: clamp(3rem, 17vw, 4.4rem);
          }

          .history-timeline {
            padding-top: 3rem;
          }

          .history-timeline-line {
            left: 28px;
            top: 3rem;
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 58px minmax(0, 1fr);
            gap: 0.8rem;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            width: 58px;
            height: 58px;
          }

          .history-year-node span {
            font-size: 1rem;
          }

          .history-year-node strong {
            font-size: 0.78rem;
          }

          .history-detail-grid {
            grid-template-columns: 1fr;
          }

          .history-card-top {
            align-items: flex-start;
          }

          .history-card:hover,
          .history-memory-card:hover {
            transform: translateY(-5px);
          }

          .history-cta {
            min-height: 360px;
            padding: clamp(2rem, 9vw, 3rem) 1rem;
          }

          .history-cta-button {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .history-hero h1,
          .history-section-heading h2,
          .history-cta h2 {
            font-size: clamp(2.2rem, 14vw, 3.5rem);
          }

          .history-card,
          .history-memory-card {
            padding: 1rem;
          }

          .history-stat-card strong {
            font-size: clamp(2.8rem, 15vw, 3.9rem);
          }

          .history-stats {
            grid-template-columns: 1fr;
          }

          .history-quote-card blockquote {
            font-size: clamp(1.45rem, 10vw, 2.25rem);
          }
        }

        @media (max-width: 480px) {
          .history-atmosphere span {
            width: 8px;
            height: 8px;
          }

          .history-eyebrow {
            letter-spacing: 0.16em;
          }

          .history-card-top {
            gap: 0.55rem;
          }

          .history-card-kicker,
          .history-card-top span {
            font-size: 0.64rem;
            letter-spacing: 0.08em;
          }

          .history-card-top span {
            min-height: 1.85rem;
            padding: 0 0.72rem;
          }

          .history-highlights span {
            width: 100%;
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .history-hero,
          .history-story,
          .history-legacy,
          .history-stats,
          .history-timeline,
          .history-memory-wall,
          .history-quote,
          .history-cta {
            width: min(100% - 0.65rem, 1180px);
          }

          .history-hero h1 {
            font-size: clamp(2.3rem, 15vw, 3.15rem);
          }

          .history-section-heading h2,
          .history-cta h2 {
            font-size: clamp(2rem, 13vw, 3rem);
          }

          .history-timeline-item,
          .history-timeline-item:nth-of-type(even) {
            grid-template-columns: 50px minmax(0, 1fr);
            gap: 0.65rem;
          }

          .history-timeline-line {
            left: 25px;
          }

          .history-timeline-item .history-year-node,
          .history-timeline-item:nth-of-type(even) .history-year-node {
            width: 50px;
            height: 50px;
          }

          .history-year-node span {
            font-size: 0.86rem;
          }

          .history-year-node strong {
            font-size: 0.68rem;
          }

          .history-card h3 {
            font-size: clamp(1.28rem, 10vw, 1.75rem);
          }

          .history-card,
          .history-memory-card,
          .history-quote-card {
            padding: 0.9rem;
          }
        }

        @media (hover: none) {
          .history-card:active,
          .history-memory-card:active,
          .history-cta-button:active {
            transform: translateY(-4px) scale(0.995);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .history-page::before,
          .history-atmosphere span,
          .history-hero-logo,
          .history-hero-rays span,
          .history-year-node span,
          .history-cta-glow {
            animation: none;
          }
        }
      `})]})}const B2=[{tier:"Title Sponsor",amount:"PKR 40 Million",badge:"Executive Rights",recommended:!1,details:"Naming rights, main stage/SMD dominance, media wall title branding, host mentions, promo code rights, and 20% screen time.",benefits:["Naming Rights","Main Stage Branding","Media Wall Dominance","VIP Access","Host Mentions"]},{tier:"Platinum Sponsor",amount:"PKR 4.5 Million",badge:"Recommended",recommended:!0,details:"Premium multi-channel reach with entrance and stage branding, VIP access, digital ads, and featured engagement reporting.",benefits:["Stage Visibility","VIP Networking","Digital Ads","Featured Reporting","Premium Booth"]},{tier:"Gold Sponsor",amount:"PKR 3.5 Million",badge:"High Impact",recommended:!1,details:"Balanced visibility package with on-site sampling, live social shout-outs, influencer integrations, and free stall access.",benefits:["Sampling Access","Influencer Mentions","Social Shout-outs","Stall Access","Brand Placement"]},{tier:"Silver Sponsor",amount:"PKR 2.5 Million",badge:"Smart Entry",recommended:!1,details:"Focused reach package with app placement, music-zone branding, sponsored posts, promo video slot, and post-event shout-outs.",benefits:["Music Zone Branding","Sponsored Posts","Promo Video Slot","App Placement","Post-Event Shout-outs"]}],$2=[["Brand Visibility","Premium on-ground and digital visibility throughout Ozilla Festival."],["Social Media Exposure","Audience-first promotion across festival content and partner campaigns."],["VIP Networking","Access to guests, creators, businesses, and premium festival audiences."],["Media Coverage","High-value content moments designed for campaign amplification."],["Event Branding","Logo placement, activation zones, and memorable physical touchpoints."],["Thousands of Visitors","A festival audience built around youth, families, creators, and brands."]],H2=[["10,000+","Visitors"],["20+","Celebrity Artists"],["50+","Business Partners"],["100%","Brand Exposure"]],V2=["TECH","FOOD","HOTEL","MEDIA","STYLE","TRAVEL"],Y2=[["Partner Success","Brands become part of visible festival experiences instead of one-time ad placements."],["Brand Growth","On-ground activations convert attention into memorable audience recall."],["Event Reach","Digital content and creator moments extend campaign impact beyond the venue."]],q2=[["Submit Inquiry","Share your brand goals and preferred sponsorship direction."],["Consultation","Align audience, activation ideas, and business objectives."],["Select Package","Choose the visibility level that fits your growth plan."],["Partnership Agreement","Finalize deliverables, placements, and promotional rights."],["Brand Promotion","Launch your on-ground, digital, and content campaign."]],W2=[["Partnership Impact","Ozilla Festival gives brands a strong experiential platform where visibility turns into audience memory."],["Marketing Value","The blend of live audience, creators, content moments, and hospitality makes sponsorship feel measurable."]],G2=[["Proposal Cover","Main Ozilla Festival partnership proposal identity.","/assets/new-proposal/proposal-cover.jpg"],["About Ozilla","Festival background, vision, and corporate positioning.","/assets/new-proposal/about-us.jpg"],["Festival 2026","Flagship Lahore festival story and premium audience promise.","/assets/new-proposal/festival-2026.jpg"],["Partnership Value","Why sponsorship matters for relevant audience access.","/assets/new-proposal/partnership-matters.jpg"],["Opportunity Scale","Audience scale, platform reach, and growth potential.","/assets/new-proposal/opportunity-scale.jpg"],["Attendee Experience","Live concerts, food, DJ nights, activities, and safety.","/assets/new-proposal/attendee-experience.jpg"],["Audience Journey","Discovery to remembrance touchpoints across the festival.","/assets/new-proposal/audience-journey.jpg"],["Beyond Logo Placement","Activation ideas that move sponsorship beyond static branding.","/assets/new-proposal/beyond-logo-placement.jpg"],["Audience Fit","How festival audience behavior connects to sponsor opportunities.","/assets/new-proposal/audience-sponsor-fit.jpg"],["Brand Visibility","Where sponsor brands can appear across the venue.","/assets/new-proposal/brand-visibility.jpg"],["Venue Branding","Stage screens, media walls, entrance branding, and zones.","/assets/new-proposal/venue-branding.jpg"],["Package Overview","Premium sponsorship package structure and tiers.","/assets/new-proposal/sponsorship-packages-intro.jpg"],["Package Matrix","Side-by-side package comparison for executive decisions.","/assets/new-proposal/package-matrix.jpg"],["Package Comparison","Extended comparison of title, gold, silver, and platinum.","/assets/new-proposal/package-comparison.jpg"],["Title Package","Top-tier sponsor rights, pricing, and brand dominance.","/assets/new-proposal/title-package.jpg"],["Title Deliverables I","Naming rights, main branding, panel dominance, and media wall.","/assets/new-proposal/title-deliverables-one.jpg"],["Title Deliverables II","On-stage visibility, host mentions, social story, and red carpet.","/assets/new-proposal/title-deliverables-two.jpg"],["Title Deliverables III","Screen time, contest-led engagement, video recap, and merchandise.","/assets/new-proposal/title-deliverables-three.jpg"],["Platinum Package","Premium sponsorship tier benefits and visibility rights.","/assets/new-proposal/platinum-package.jpg"],["Platinum Visual","Platinum package visual asset area for sponsor presentation.","/assets/new-proposal/platinum-visual.jpg"],["Platinum Media Layout","Reserved media placement layout for premium sponsor visuals.","/assets/new-proposal/platinum-media-layout.jpg"],["Gold Package","Gold sponsorship tier structure and marketing benefits.","/assets/new-proposal/gold-package.jpg"],["Gold Deliverables","Targeted ads, stall space, social posts, and audience engagement.","/assets/new-proposal/gold-deliverables.jpg"],["Gold Activation Gallery","Creative examples for gold-package sponsor activations.","/assets/new-proposal/gold-activation-gallery.jpg"],["Silver Package","Accessible sponsor tier with focused brand exposure.","/assets/new-proposal/silver-package.jpg"],["Stalls & Benefits","Corporate and food stall dimensions, rates, and package benefits.","/assets/new-proposal/stalls-benefits.jpg"],["Brand Objective","Sponsor objective mapping for awareness, lead generation, and sales.","/assets/new-proposal/brand-objective.jpg"],["Partnership Steps","How sponsorship moves from confirmation to campaign reporting.","/assets/new-proposal/partnership-steps.jpg"],["Sponsor Receives","Attendance figures, digital reach, content links, and deliverables.","/assets/new-proposal/sponsors-receive.jpg"],["Contact & Thanks","Official contact details and festival closing proposal page.","/assets/new-proposal/thank-you-contact.jpg"]];function X2(){return n.jsxs("main",{className:"sponsor-premium",children:[n.jsxs("section",{className:"sponsor-hero","aria-label":"Become an Ozilla Festival partner",children:[n.jsx("div",{className:"sponsor-hero-bg"}),n.jsx("div",{className:"sponsor-orb sponsor-orb-one"}),n.jsx("div",{className:"sponsor-orb sponsor-orb-two"}),n.jsxs("div",{className:"sponsor-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"sponsor-hero-content",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Corporate Partnership Portal"}),n.jsx("h1",{children:"Grow Your Brand With Ozilla Festival"}),n.jsx("p",{children:"Partner with one of Pakistan's most exciting festivals and showcase your brand to thousands of visitors."})]})]}),n.jsx("section",{className:"sponsor-stats","aria-label":"Why sponsor Ozilla Festival",children:H2.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*80}ms`},children:[n.jsx("strong",{children:e}),n.jsx("span",{children:t})]},t))}),n.jsxs("section",{className:"sponsor-proposal-gallery","aria-label":"Official Ozilla Festival sponsorship proposal visuals",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Official Proposal Deck"}),n.jsx("h2",{children:"Every sponsorship asset organized into a premium visual partnership story."})]}),n.jsx("div",{className:"sponsor-proposal-grid",children:G2.map(([e,t,r],a)=>n.jsxs("article",{className:a===0?"sponsor-proposal-card featured":"sponsor-proposal-card",style:{"--delay":`${a*45}ms`},children:[n.jsx("div",{className:"sponsor-proposal-image",children:n.jsx("img",{src:r,alt:`${e} sponsorship visual`,loading:a===0?"eager":"lazy",decoding:"async"})}),n.jsxs("div",{className:"sponsor-proposal-copy",children:[n.jsx("span",{children:String(a+1).padStart(2,"0")}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]})]},e))})]}),n.jsxs("section",{className:"sponsor-metrics","aria-label":"Success metrics",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Success Metrics"}),n.jsx("h2",{children:"Built for reach, recall, and measurable brand value."})]}),n.jsx("div",{className:"sponsor-metric-grid",children:[["5M+","Social Media Reach"],["50+","Corporate Partners"],["20+","Celebrity Artists"],["10,000+","Festival Visitors"]].map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*80}ms`},children:[n.jsx("strong",{children:e}),n.jsx("span",{children:t})]},t))})]}),n.jsxs("section",{className:"sponsor-packages","aria-label":"Sponsorship packages",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Premium Sponsorship Packages"}),n.jsx("h2",{children:"Partnership levels designed like executive brand proposals."})]}),n.jsx("div",{className:"sponsor-package-grid",children:B2.map((e,t)=>n.jsxs("article",{className:`sponsor-package-card ${e.recommended?"recommended":""}`,style:{"--delay":`${t*90}ms`},children:[n.jsxs("div",{className:"sponsor-package-top",children:[n.jsx("span",{children:e.badge}),n.jsx("strong",{children:e.amount})]}),n.jsx("h3",{children:e.tier}),n.jsx("p",{children:e.details}),n.jsx("div",{className:"sponsor-benefit-chips",children:e.benefits.map(r=>n.jsx("span",{children:r},r))}),n.jsx(B,{to:"/contact",className:"sponsor-card-button",children:"Discuss Package"})]},e.tier))})]}),n.jsxs("section",{className:"sponsor-benefits","aria-label":"Sponsor benefits",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Sponsor Benefits"}),n.jsx("h2",{children:"Business value built around visibility, engagement, and trust."})]}),n.jsx("div",{className:"sponsor-benefit-grid",children:$2.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*75}ms`},children:[n.jsx("div",{children:String(r+1).padStart(2,"0")}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]},e))})]}),n.jsxs("section",{className:"sponsor-logos","aria-label":"Partner logo presentation",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Partner Ecosystem"}),n.jsx("h2",{children:"Presented with the polish expected from premium brands."})]}),n.jsx("div",{className:"sponsor-logo-grid",children:V2.map((e,t)=>n.jsx("div",{style:{"--delay":`${t*70}ms`},children:e},e))})]}),n.jsxs("section",{className:"sponsor-success","aria-label":"Sponsor success stories",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Success Stories"}),n.jsx("h2",{children:"Marketing impact beyond a logo placement."})]}),n.jsx("div",{className:"sponsor-success-grid",children:Y2.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*85}ms`},children:[n.jsx("span",{children:String(r+1).padStart(2,"0")}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]},e))})]}),n.jsxs("section",{className:"sponsor-process","aria-label":"Sponsorship process",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Sponsorship Process"}),n.jsx("h2",{children:"A clear executive path from inquiry to brand promotion."})]}),n.jsx("div",{className:"sponsor-process-grid",children:q2.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*75}ms`},children:[n.jsx("span",{children:String(r+1).padStart(2,"0")}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]},e))})]}),n.jsxs("section",{className:"sponsor-testimonials","aria-label":"Partner testimonials",children:[n.jsxs("div",{className:"sponsor-section-heading",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Partner Feedback"}),n.jsx("h2",{children:"What premium partners expect from a festival platform."})]}),n.jsx("div",{className:"sponsor-testimonial-grid",children:W2.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*85}ms`},children:[n.jsx("span",{children:'"'}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]},e))})]}),n.jsxs("section",{className:"sponsor-cta",children:[n.jsx("p",{className:"sponsor-eyebrow",children:"Ozilla Festival Partnerships"}),n.jsx("h2",{children:"Let's build something extraordinary together."}),n.jsx("p",{children:"Become an official Ozilla Festival partner and grow your brand with one of Pakistan's biggest festivals."}),n.jsx(B,{to:"/contact",className:"sponsor-action-button",children:"Become A Sponsor"})]}),n.jsx("style",{children:`
        .sponsor-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .sponsor-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .sponsor-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 6%, rgba(255, 189, 89, 0.2), transparent 24rem),
            radial-gradient(circle at 86% 14%, rgba(42, 126, 255, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 86%, rgba(11, 79, 76, 0.13), transparent 30rem),
            linear-gradient(180deg, rgba(247, 252, 249, 0.96), rgba(232, 236, 224, 0.9));
        }

        .sponsor-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.36;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(8, 42, 78, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .sponsor-hero {
          position: relative;
          min-height: clamp(430px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.26), transparent 20rem),
            linear-gradient(135deg, #041719, #082a4e 48%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .sponsor-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 25% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(42, 126, 255, 0.2), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(8, 42, 78, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: sponsorHeroGlow 16s ease-in-out infinite alternate;
        }

        .sponsor-hero::before,
        .sponsor-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .sponsor-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .sponsor-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .sponsor-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: sponsorFloat 9s ease-in-out infinite;
        }

        .sponsor-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.54);
        }

        .sponsor-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(42, 126, 255, 0.42);
          animation-delay: 1.2s;
        }

        .sponsor-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: sponsorParticle 6s ease-in-out infinite;
        }

        .sponsor-particles span:nth-child(1) { left: 14%; top: 24%; }
        .sponsor-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .sponsor-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .sponsor-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .sponsor-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .sponsor-hero-content {
          width: min(100%, 1030px);
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: sponsorRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .sponsor-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .sponsor-hero h1 {
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: normal;
          word-break: normal;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .sponsor-hero p:not(.sponsor-eyebrow) {
          max-width: 800px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .sponsor-action-button,
        .sponsor-card-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          margin-top: 1.5rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .sponsor-card-button {
          width: fit-content;
          margin-top: auto;
        }

        .sponsor-action-button::before,
        .sponsor-card-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .sponsor-action-button:hover,
        .sponsor-card-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .sponsor-action-button:hover::before,
        .sponsor-card-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .sponsor-stats,
        .sponsor-proposal-gallery,
        .sponsor-metrics,
        .sponsor-packages,
        .sponsor-benefits,
        .sponsor-logos,
        .sponsor-success,
        .sponsor-process,
        .sponsor-testimonials,
        .sponsor-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .sponsor-packages,
        .sponsor-proposal-gallery,
        .sponsor-metrics,
        .sponsor-benefits,
        .sponsor-logos,
        .sponsor-success,
        .sponsor-process,
        .sponsor-testimonials {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .sponsor-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          padding: clamp(0.9rem, 2vw, 1.25rem);
          background: linear-gradient(135deg, #041719, #073332);
        }

        .sponsor-stats article {
          display: grid;
          justify-items: center;
          gap: 0.35rem;
          padding: clamp(1rem, 2.2vw, 1.4rem);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .sponsor-stats strong {
          color: #f7f5ef;
          font-size: clamp(2rem, 5.6vw, 4.8rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .sponsor-stats span {
          color: rgba(255, 255, 255, 0.72);
          font-weight: 850;
        }

        .sponsor-proposal-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.85rem, 1.7vw, 1.2rem);
          align-items: stretch;
        }

        .sponsor-proposal-card {
          position: relative;
          display: grid;
          grid-template-rows: auto 1fr;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 242, 0.54)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 12rem);
          box-shadow: 0 22px 64px rgba(2, 11, 13, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.54);
          backdrop-filter: blur(18px);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .sponsor-proposal-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          z-index: 2;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.48), transparent 34%, rgba(255, 189, 89, 0.2));
          opacity: 0.75;
        }

        .sponsor-proposal-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 32px 90px rgba(2, 11, 13, 0.16), 0 0 34px rgba(255, 176, 0, 0.1);
        }

        .sponsor-proposal-card.featured {
          grid-column: span 2;
          grid-row: span 2;
          background:
            radial-gradient(circle at 18% 12%, rgba(255, 189, 89, 0.22), transparent 16rem),
            linear-gradient(145deg, rgba(255, 255, 255, 0.78), rgba(255, 250, 242, 0.56));
        }

        .sponsor-proposal-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1415 / 2000;
          margin: clamp(0.55rem, 1.2vw, 0.75rem);
          border-radius: 20px;
          background: #8b0000;
          box-shadow: 0 18px 44px rgba(2, 11, 13, 0.16);
        }

        .sponsor-proposal-image::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, transparent 58%, rgba(2, 11, 13, 0.18)),
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.13) 50%, transparent 58%);
          opacity: 0.85;
          transition: opacity 260ms ease;
        }

        .sponsor-proposal-card:hover .sponsor-proposal-image::after {
          opacity: 1;
        }

        .sponsor-proposal-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.001);
          transition: transform 520ms ease, filter 520ms ease;
        }

        .sponsor-proposal-card:hover .sponsor-proposal-image img {
          transform: scale(1.045);
          filter: saturate(1.08) contrast(1.03);
        }

        .sponsor-proposal-copy {
          position: relative;
          z-index: 3;
          display: grid;
          align-content: start;
          gap: 0.45rem;
          padding: 0 clamp(0.75rem, 1.8vw, 1rem) clamp(0.85rem, 1.8vw, 1.1rem);
        }

        .sponsor-proposal-copy span {
          width: fit-content;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.6rem;
          border-radius: 999px;
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          font-size: 0.72rem;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(255, 138, 0, 0.18);
        }

        .sponsor-proposal-copy h3 {
          margin: 0;
          color: #101819;
          font-size: clamp(1.05rem, 2.1vw, 1.45rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          overflow-wrap: anywhere;
        }

        .sponsor-proposal-card.featured .sponsor-proposal-copy h3 {
          font-size: clamp(1.45rem, 3vw, 2.35rem);
        }

        .sponsor-proposal-copy p {
          margin: 0;
          color: #55706f;
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .sponsor-metric-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .sponsor-metric-grid article {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 0.55rem;
          justify-items: center;
          padding: clamp(1rem, 2.5vw, 1.45rem);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52)),
            radial-gradient(circle at 50% 0%, rgba(255, 189, 89, 0.18), transparent 12rem);
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .sponsor-metric-grid article::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 34%, rgba(255, 189, 89, 0.18));
        }

        .sponsor-metric-grid strong,
        .sponsor-metric-grid span {
          position: relative;
          z-index: 1;
        }

        .sponsor-metric-grid strong {
          color: #041719;
          font-size: clamp(2.1rem, 5vw, 4.2rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
        }

        .sponsor-metric-grid span {
          color: #55706f;
          font-weight: 850;
          text-align: center;
        }

        .sponsor-section-heading {
          max-width: 860px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .sponsor-section-heading h2,
        .sponsor-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .sponsor-package-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.35rem);
          align-items: stretch;
        }

        .sponsor-package-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
          overflow: hidden;
          padding: clamp(1rem, 2.2vw, 1.35rem);
          border-radius: 30px;
          border: 1px solid rgba(11, 79, 76, 0.14);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(42, 126, 255, 0.1), transparent 18rem);
          box-shadow: 0 26px 82px rgba(2, 11, 13, 0.13);
          backdrop-filter: blur(18px);
          animation: sponsorRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .sponsor-package-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.24));
        }

        .sponsor-package-card.recommended {
          border-color: rgba(255, 176, 0, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        @media (min-width: 1281px) {
          .sponsor-package-card.recommended {
            grid-column: span 2;
          }

          .sponsor-package-card.recommended h3 {
            font-size: clamp(2.1rem, 3.7vw, 3.3rem);
          }

          .sponsor-package-card.recommended .sponsor-benefit-chips span {
            min-height: 38px;
          }
        }

        .sponsor-package-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .sponsor-package-card.recommended:hover {
          transform: translateY(-10px);
        }

        .sponsor-package-card > * {
          position: relative;
          z-index: 1;
        }

        .sponsor-package-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .sponsor-package-top span {
          padding: 0.48rem 0.7rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sponsor-package-top strong {
          color: #9a4f00;
          font-size: 0.92rem;
          text-align: right;
        }

        .sponsor-package-card h3 {
          color: #101819;
          font-size: clamp(1.55rem, 3vw, 2.45rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .sponsor-package-card p {
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
        }

        .sponsor-benefit-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .sponsor-benefit-chips span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.48rem 0.68rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.82rem;
          font-weight: 820;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
          text-align: center;
        }

        .sponsor-benefit-grid,
        .sponsor-success-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
        }

        .sponsor-benefit-grid article,
        .sponsor-success-grid article {
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-benefit-grid article:hover,
        .sponsor-success-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .sponsor-benefit-grid div,
        .sponsor-success-grid span {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .sponsor-benefit-grid h3,
        .sponsor-success-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .sponsor-benefit-grid p,
        .sponsor-success-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .sponsor-logo-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(120px, 1fr));
          gap: 0.85rem;
        }

        .sponsor-logo-grid div {
          min-height: 86px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          border: 1px solid rgba(11, 79, 76, 0.12);
          background: rgba(255, 255, 255, 0.62);
          color: #0b4f4c;
          font-weight: 950;
          letter-spacing: 0.12em;
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-logo-grid div:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.3);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12), 0 0 28px rgba(255, 189, 89, 0.12);
        }

        .sponsor-process-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(150px, 1fr));
          gap: 0.85rem;
        }

        .sponsor-process-grid::before {
          content: '';
          position: absolute;
          left: 6%;
          right: 6%;
          top: 36px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 189, 89, 0.72), transparent);
          opacity: 0.75;
        }

        .sponsor-process-grid article,
        .sponsor-testimonial-grid article {
          position: relative;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: sponsorRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .sponsor-process-grid article:hover,
        .sponsor-testimonial-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .sponsor-process-grid span,
        .sponsor-testimonial-grid span {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .sponsor-process-grid h3,
        .sponsor-testimonial-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .sponsor-process-grid p,
        .sponsor-testimonial-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .sponsor-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(0.9rem, 2vw, 1.2rem);
        }

        .sponsor-testimonial-grid article {
          min-height: 190px;
          background:
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 14rem),
            linear-gradient(145deg, rgba(255, 255, 255, 0.7), rgba(255, 250, 242, 0.54));
        }

        .sponsor-testimonial-grid span {
          font-size: 2rem;
          line-height: 1;
        }

        .sponsor-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(42, 126, 255, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #2f1025);
          color: #fff;
        }

        .sponsor-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: sponsorGlowSweep 8s ease-in-out infinite;
        }

        .sponsor-cta > * {
          position: relative;
          z-index: 1;
        }

        .sponsor-cta h2 {
          color: #fff;
        }

        .sponsor-cta > p:not(.sponsor-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        @keyframes sponsorRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes sponsorHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes sponsorFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes sponsorParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes sponsorGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (max-width: 1280px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-proposal-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-proposal-card.featured {
            grid-column: span 2;
          }

          .sponsor-process-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-process-grid::before {
            display: none;
          }
        }

        @media (min-width: 1500px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }

          .sponsor-premium {
            gap: 3rem;
          }
        }

        @media (min-width: 1281px) and (max-width: 1499px) {
          .sponsor-package-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sponsor-package-card.recommended {
            grid-column: span 1;
          }
        }

        @media (max-width: 1023px) {
          .sponsor-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-metric-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-benefit-grid,
          .sponsor-success-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-proposal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .sponsor-particles span {
            opacity: 0.72;
            transform: scale(0.92);
          }

          .sponsor-package-card.recommended {
            grid-column: auto;
          }
        }

        @media (min-width: 768px) and (max-width: 920px) {
          .sponsor-package-grid,
          .sponsor-benefit-grid,
          .sponsor-success-grid,
          .sponsor-process-grid,
          .sponsor-testimonial-grid {
            gap: 0.85rem;
          }

          .sponsor-package-card {
            padding: 1rem;
            border-radius: 26px;
          }

          .sponsor-benefit-chips span {
            flex: 1 1 auto;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .sponsor-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .sponsor-hero {
            min-height: clamp(440px, 108vw, 560px);
            border-radius: 26px;
          }

          .sponsor-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .sponsor-hero h1 {
            font-size: clamp(2.3rem, 13vw, 4.5rem);
            line-height: 0.94;
            letter-spacing: -0.06em;
          }

          .sponsor-hero p:not(.sponsor-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .sponsor-stats,
          .sponsor-proposal-gallery,
          .sponsor-metrics,
          .sponsor-packages,
          .sponsor-benefits,
          .sponsor-logos,
          .sponsor-success,
          .sponsor-process,
          .sponsor-testimonials,
          .sponsor-cta {
            border-radius: 24px;
          }

          .sponsor-packages,
          .sponsor-proposal-gallery,
          .sponsor-metrics,
          .sponsor-benefits,
          .sponsor-logos,
          .sponsor-success,
          .sponsor-process,
          .sponsor-testimonials {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .sponsor-stats,
          .sponsor-proposal-grid,
          .sponsor-metric-grid,
          .sponsor-package-grid,
          .sponsor-benefit-grid,
          .sponsor-success-grid,
          .sponsor-logo-grid,
          .sponsor-process-grid,
          .sponsor-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .sponsor-proposal-card.featured {
            grid-column: auto;
            grid-row: auto;
          }

          .sponsor-proposal-image {
            aspect-ratio: 4 / 3;
          }

          .sponsor-package-card.recommended {
            transform: none;
          }

          .sponsor-package-top {
            display: grid;
          }

          .sponsor-package-top strong {
            text-align: left;
          }

          .sponsor-card-button,
          .sponsor-action-button {
            width: 100%;
          }

          .sponsor-package-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
          }

          .sponsor-package-card h3 {
            font-size: clamp(1.45rem, 8vw, 2.25rem);
          }

          .sponsor-benefit-chips span {
            flex: 1 1 calc(50% - 0.5rem);
            justify-content: center;
          }

          .sponsor-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-logo-grid div {
            min-height: 72px;
          }

          .sponsor-particles span {
            width: 0.36rem;
            height: 0.36rem;
          }
        }

        @media (max-width: 420px) {
          .sponsor-hero {
            min-height: 430px;
          }

          .sponsor-hero h1 {
            font-size: clamp(2.05rem, 12vw, 3.35rem);
            letter-spacing: -0.05em;
          }

          .sponsor-hero p:not(.sponsor-eyebrow) {
            max-width: 31ch;
          }

          .sponsor-eyebrow {
            letter-spacing: 0.14em;
          }

          .sponsor-section-heading h2,
          .sponsor-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .sponsor-package-top {
            gap: 0.65rem;
          }

          .sponsor-stats strong,
          .sponsor-metric-grid strong {
            font-size: clamp(2rem, 15vw, 3.3rem);
          }
        }

        @media (max-width: 360px) {
          .sponsor-hero {
            min-height: 410px;
          }

          .sponsor-package-card {
            padding: 0.78rem;
          }

          .sponsor-benefit-chips span {
            flex-basis: 100%;
          }

          .sponsor-logo-grid {
            grid-template-columns: 1fr;
          }

          .sponsor-proposal-image {
            aspect-ratio: 1 / 1.08;
            margin: 0.5rem;
            border-radius: 16px;
          }
        }

        @media (hover: none) {
          .sponsor-package-card:hover,
          .sponsor-package-card.recommended:hover,
          .sponsor-proposal-card:hover,
          .sponsor-benefit-grid article:hover,
          .sponsor-success-grid article:hover,
          .sponsor-logo-grid div:hover,
          .sponsor-action-button:hover,
          .sponsor-card-button:hover {
            transform: none;
          }

          .sponsor-action-button:active,
          .sponsor-card-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-hero-bg,
          .sponsor-orb,
          .sponsor-particles span,
          .sponsor-hero-content,
          .sponsor-stats article,
          .sponsor-proposal-card,
          .sponsor-package-card,
          .sponsor-benefit-grid article,
          .sponsor-success-grid article,
          .sponsor-logo-grid div,
          .sponsor-cta::before {
            animation: none;
          }
        }
      `})]})}const Q2={async getEvents(){return(await J.get("/content/events")).data},async getEventById(e){return(await J.get(`/content/events/${e}`)).data},async getSponsors(){return(await J.get("/content/sponsors")).data},async getFacilities(){return(await J.get("/content/facilities")).data},async submitContactForm(e){return(await J.post("/content/contact",e)).data}},Jd={fullName:"",email:"",phone:"",subject:"",message:""},K2=[{icon:"EM",label:"Email",value:"ozillafestival@gmail.com",detail:"For festival support, tickets, partners, and general inquiries."},{icon:"PH",label:"Phone",value:"+92 322 6622221",detail:"Speak with the Ozilla Festival coordination team."},{icon:"LC",label:"Location",value:"Lahore, Punjab, Pakistan",detail:"Official visitor and event support location."},{icon:"HR",label:"Office Hours",value:"10:00 AM - 7:00 PM",detail:"Support availability during planning and event season."},{icon:"IG",label:"Instagram",value:"@ozillafestival",detail:"Follow event updates, announcements, and festival moments."},{icon:"WB",label:"Website",value:"Ozilla Festival Official",detail:"Explore events, hotels, tickets, restaurants, and partner offers."},{icon:"EV",label:"Event",value:"OZILLA FESTIVAL 2026",detail:"Music, entertainment, food, brands, and family experiences."}],J2=[["Ticket Support","Questions about ticket requests, QR codes, payments, and entry support."],["Sponsorship Inquiry","For brands interested in premium Ozilla Festival partnership packages."],["Media Inquiry","Press, creator coverage, announcements, and festival communication requests."],["Business Partnership","Hotels, restaurants, media teams, creators, and experience partners."],["General Support","Event timings, location guidance, facilities, and guest information."]],Z2=[["Fast Response","Clear support channels for visitors, partners, and guests."],["Professional Team","A polished team built around trust, hospitality, and clear communication."],["Festival Experts","A team that understands event operations and visitor needs."],["Secure Communication","Your inquiry is handled through official Ozilla Festival channels."],["Trusted Organization","A premium festival experience managed with care and consistency."],["Friendly Team","Helpful support designed around a premium guest experience."]],eb=[["Facebook","FB"],["Instagram","IG"],["TikTok","TT"],["YouTube","YT"],["LinkedIn","IN"]];function tb(){const[e,t]=k.useState(Jd),[r,a]=k.useState({type:"",message:""}),[i,s]=k.useState(!1),o=l=>{const{name:d,value:u}=l.target;t(p=>({...p,[d]:u}))},c=async l=>{if(l.preventDefault(),a({type:"",message:""}),!e.fullName.trim()||!e.email.trim()||!e.subject.trim()||!e.message.trim()){a({type:"error",message:"Please complete your name, email, subject, and message."});return}try{s(!0),await Q2.submitContactForm({...e,name:e.fullName}),t(Jd),a({type:"success",message:"Your message has been sent. Our team will contact you soon."})}catch{a({type:"error",message:"Message could not be sent right now. Please contact us at ozillafestival@gmail.com."})}finally{s(!1)}};return n.jsxs("main",{className:"contact-premium",children:[n.jsxs("section",{className:"contact-hero","aria-label":"Contact Ozilla Festival",children:[n.jsx("div",{className:"contact-hero-bg"}),n.jsx("div",{className:"contact-orb contact-orb-one"}),n.jsx("div",{className:"contact-orb contact-orb-two"}),n.jsxs("div",{className:"contact-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"contact-hero-content",children:[n.jsx("p",{className:"contact-eyebrow",children:"Official Customer Experience Center"}),n.jsx("h1",{children:"Let's Connect And Create Something Extraordinary"}),n.jsx("p",{children:"We're here to help you create an unforgettable Ozilla Festival experience."}),n.jsxs("div",{className:"contact-response-badge","aria-label":"Average response time",children:[n.jsx("span",{children:"Average Response Time"}),n.jsx("strong",{children:"Less Than 24 Hours"})]})]})]}),n.jsxs("section",{className:"contact-experience","aria-label":"Contact experience",children:[n.jsxs("div",{className:"contact-section-heading",children:[n.jsx("p",{className:"contact-eyebrow",children:"Premium Support"}),n.jsx("h2",{children:"Reach the right Ozilla Festival team with confidence."}),n.jsx("p",{children:"Whether you need ticket support, partnership guidance, sponsorship information, or visitor assistance, our official support channels are ready to help."})]}),n.jsxs("div",{className:"contact-main-grid",children:[n.jsxs("form",{id:"contact-form",className:"contact-form-card",onSubmit:c,children:[n.jsxs("div",{className:"contact-form-heading",children:[n.jsx("p",{className:"contact-eyebrow",children:"Send A Message"}),n.jsx("h3",{children:"Tell us how we can help."})]}),n.jsxs("div",{className:"contact-field-grid",children:[n.jsxs("label",{className:"contact-field-shell contact-field-name",children:[n.jsx("span",{children:"Full Name"}),n.jsx("input",{type:"text",name:"fullName",value:e.fullName,onChange:o,placeholder:"Your full name",required:!0})]}),n.jsxs("label",{className:"contact-field-shell contact-field-email",children:[n.jsx("span",{children:"Email Address"}),n.jsx("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:"your@email.com",required:!0})]}),n.jsxs("label",{className:"contact-field-shell contact-field-phone",children:[n.jsx("span",{children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:o,placeholder:"+92 300 0000000"})]}),n.jsxs("label",{className:"contact-field-shell contact-field-subject",children:[n.jsx("span",{children:"Subject"}),n.jsx("input",{type:"text",name:"subject",value:e.subject,onChange:o,placeholder:"Ticket, sponsor, partner, or support",required:!0})]})]}),n.jsxs("label",{className:"contact-message-field contact-field-shell",children:[n.jsx("span",{children:"Message"}),n.jsx("textarea",{name:"message",value:e.message,onChange:o,placeholder:"Write your message here...",rows:"6",required:!0})]}),r.message&&n.jsx("p",{className:`contact-status contact-status-${r.type}`,children:r.message}),n.jsx("button",{type:"submit",className:"contact-action-button",disabled:i,children:i?"Sending...":"Send Your Message"})]}),n.jsx("aside",{className:"contact-info-panel","aria-label":"Contact information",children:K2.map((l,d)=>n.jsxs("article",{className:"contact-info-card",style:{"--delay":`${d*65}ms`},children:[n.jsx("div",{className:"contact-info-icon",children:l.icon}),n.jsxs("div",{children:[n.jsx("span",{children:l.label}),n.jsx("strong",{children:l.value}),n.jsx("p",{children:l.detail})]})]},l.label))})]})]}),n.jsxs("section",{className:"contact-location","aria-label":"Ozilla Festival location",children:[n.jsxs("div",{className:"contact-section-heading",children:[n.jsx("p",{className:"contact-eyebrow",children:"Festival Location"}),n.jsx("h2",{children:"Lahore, Punjab, Pakistan"}),n.jsx("p",{children:"Official Ozilla Festival visitor support and event coordination location."})]}),n.jsx("div",{className:"contact-map-frame",children:n.jsx("iframe",{title:"Ozilla Festival Lahore Map",src:"https://www.google.com/maps?q=Lahore%2C%20Punjab%2C%20Pakistan&output=embed",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]}),n.jsxs("section",{className:"contact-support","aria-label":"Quick support",children:[n.jsxs("div",{className:"contact-section-heading",children:[n.jsx("p",{className:"contact-eyebrow",children:"Quick Support"}),n.jsx("h2",{children:"Choose the support path that fits your question."})]}),n.jsx("div",{className:"contact-support-grid",children:J2.map(([l,d],u)=>n.jsxs("article",{style:{"--delay":`${u*75}ms`},children:[n.jsx("div",{children:String(u+1).padStart(2,"0")}),n.jsx("h3",{children:l}),n.jsx("p",{children:d})]},l))})]}),n.jsxs("section",{className:"contact-trust","aria-label":"Why contact Ozilla Festival",children:[n.jsxs("div",{className:"contact-section-heading",children:[n.jsx("p",{className:"contact-eyebrow",children:"Why Contact Us"}),n.jsx("h2",{children:"Professional support for a premium festival experience."})]}),n.jsx("div",{className:"contact-trust-grid",children:Z2.map(([l,d],u)=>n.jsxs("article",{style:{"--delay":`${u*75}ms`},children:[n.jsx("span",{children:String(u+1).padStart(2,"0")}),n.jsx("h3",{children:l}),n.jsx("p",{children:d})]},l))})]}),n.jsxs("section",{className:"contact-social","aria-label":"Social media",children:[n.jsxs("div",{children:[n.jsx("p",{className:"contact-eyebrow",children:"Follow The Festival"}),n.jsx("h2",{children:"Stay close to every announcement, artist update, and festival moment."})]}),n.jsx("div",{className:"contact-social-grid",children:eb.map(([l,d],u)=>n.jsxs("a",{href:"#top",style:{"--delay":`${u*55}ms`},"aria-label":l,children:[n.jsx("span",{children:d}),l]},l))})]}),n.jsxs("section",{className:"contact-cta",children:[n.jsx("p",{className:"contact-eyebrow",children:"Ozilla Festival Support"}),n.jsx("h2",{children:"We'd love to hear from you."}),n.jsx("p",{children:"Whether you have a question, partnership inquiry, sponsorship proposal, or simply want to say hello, our team is always here to help."}),n.jsx("a",{href:"#contact-form",className:"contact-action-button",children:"Send Your Message"})]}),n.jsx("style",{children:`
        .contact-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.1vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .contact-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .contact-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 8%, rgba(255, 189, 89, 0.24), transparent 24rem),
            radial-gradient(circle at 88% 12%, rgba(20, 142, 126, 0.18), transparent 28rem),
            radial-gradient(circle at 52% 86%, rgba(255, 77, 46, 0.1), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(232, 236, 224, 0.92));
        }

        .contact-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.34;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .contact-hero {
          position: relative;
          min-height: clamp(410px, 54vw, 650px);
          display: grid;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 48% 35%, rgba(255, 189, 89, 0.3), transparent 19rem),
            linear-gradient(135deg, #041719, #073332 52%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
        }

        .contact-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 24% 28%, rgba(255, 189, 89, 0.28), transparent 17rem),
            radial-gradient(circle at 74% 28%, rgba(20, 142, 126, 0.24), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(7, 51, 50, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: contactHeroGlow 16s ease-in-out infinite alternate;
        }

        .contact-hero::before,
        .contact-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .contact-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 26%, rgba(0, 0, 0, 0.58) 100%);
        }

        .contact-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .contact-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: contactFloat 9s ease-in-out infinite;
        }

        .contact-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.56);
        }

        .contact-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.42);
          animation-delay: 1.2s;
        }

        .contact-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: contactParticle 6s ease-in-out infinite;
        }

        .contact-particles span:nth-child(1) { left: 14%; top: 24%; }
        .contact-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .contact-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .contact-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .contact-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .contact-hero-content {
          width: min(100%, 980px);
          position: relative;
          z-index: 2;
          padding: clamp(1.8rem, 5.6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: contactRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .contact-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          max-width: 13.5ch;
          margin-inline: auto;
          font-size: clamp(2.9rem, 7.6vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.068em;
          text-transform: uppercase;
          text-wrap: balance;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .contact-hero p:not(.contact-eyebrow) {
          max-width: 720px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .contact-response-badge {
          width: min(100%, 340px);
          margin: clamp(1.15rem, 3vw, 1.7rem) auto 0;
          padding: 0.82rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 189, 89, 0.38);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.26), transparent 8rem);
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24), 0 0 34px rgba(255, 189, 89, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(18px);
          animation: contactBadgePulse 4.8s ease-in-out infinite;
        }

        .contact-response-badge span,
        .contact-response-badge strong {
          display: block;
        }

        .contact-response-badge span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-response-badge strong {
          margin-top: 0.14rem;
          color: #ffbd59;
          font-size: clamp(0.98rem, 2vw, 1.16rem);
          line-height: 1.1;
        }

        .contact-experience,
        .contact-location,
        .contact-support,
        .contact-trust,
        .contact-social,
        .contact-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .contact-experience,
        .contact-location,
        .contact-support,
        .contact-trust,
        .contact-social {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .contact-section-heading {
          max-width: 900px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .contact-section-heading h2,
        .contact-social h2,
        .contact-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .contact-section-heading p:not(.contact-eyebrow),
        .contact-cta > p:not(.contact-eyebrow) {
          color: #55706f;
          font-size: clamp(0.98rem, 1.7vw, 1.14rem);
          line-height: 1.7;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(1rem, 3vw, 1.65rem);
          align-items: start;
        }

        .contact-form-card,
        .contact-info-card,
        .contact-support-grid article,
        .contact-trust-grid article,
        .contact-social-grid a {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 15rem),
            radial-gradient(circle at 100% 100%, rgba(20, 142, 126, 0.08), transparent 16rem);
          box-shadow: 0 26px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(18px);
        }

        .contact-form-card::before,
        .contact-info-card::before,
        .contact-support-grid article::before,
        .contact-trust-grid article::before,
        .contact-social-grid a::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.52), transparent 28%, transparent 72%, rgba(255, 189, 89, 0.2));
        }

        .contact-form-card {
          order: 2;
          display: grid;
          gap: clamp(0.95rem, 2vw, 1.15rem);
          padding: clamp(1rem, 3vw, 1.65rem);
          border-radius: 32px;
          border-color: rgba(255, 176, 0, 0.2);
          box-shadow: 0 32px 96px rgba(2, 11, 13, 0.15), 0 0 38px rgba(255, 176, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.72);
        }

        .contact-form-card > *,
        .contact-info-card > *,
        .contact-support-grid article > *,
        .contact-trust-grid article > *,
        .contact-social-grid a > * {
          position: relative;
          z-index: 1;
        }

        .contact-form-heading h3 {
          color: #101819;
          font-size: clamp(1.7rem, 4vw, 3.2rem);
          line-height: 1;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .contact-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .contact-form-card label {
          display: grid;
          gap: 0.42rem;
        }

        .contact-field-shell {
          position: relative;
        }

        .contact-field-shell::before {
          content: '';
          position: absolute;
          right: 0.9rem;
          top: 2.4rem;
          z-index: 2;
          width: 0.52rem;
          height: 0.52rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff4d2e);
          box-shadow: 0 0 18px rgba(255, 176, 0, 0.55);
          opacity: 0.78;
          transition: transform 200ms ease, opacity 200ms ease;
        }

        .contact-form-card label span {
          width: fit-content;
          position: relative;
          z-index: 2;
          margin-left: 0.6rem;
          margin-bottom: -0.78rem;
          padding: 0.22rem 0.55rem;
          border-radius: 999px;
          background: rgba(255, 250, 242, 0.86);
          color: #0b4f4c;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 6px 18px rgba(2, 11, 13, 0.06);
        }

        .contact-form-card input,
        .contact-form-card textarea {
          width: 100%;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 20px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 250, 242, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.12), transparent 12rem);
          color: #101819;
          outline: none;
          padding: 1.08rem 2rem 0.98rem 1rem;
          font: inherit;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 14px 34px rgba(2, 11, 13, 0.06);
          transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease, background 200ms ease;
        }

        .contact-form-card textarea {
          min-height: 150px;
          resize: vertical;
        }

        .contact-form-card input::placeholder,
        .contact-form-card textarea::placeholder {
          color: rgba(85, 112, 111, 0.76);
        }

        .contact-form-card input:focus,
        .contact-form-card textarea:focus {
          border-color: rgba(255, 176, 0, 0.62);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 0 0 4px rgba(255, 189, 89, 0.15), 0 18px 44px rgba(255, 176, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.75);
          transform: translateY(-1px);
        }

        .contact-field-shell:focus-within::before {
          opacity: 1;
          transform: scale(1.35);
        }

        .contact-field-shell:focus-within span {
          color: #a86400;
        }

        .contact-status {
          margin: 0;
          padding: 0.82rem 0.95rem;
          border-radius: 16px;
          font-weight: 800;
          line-height: 1.45;
        }

        .contact-status-success {
          color: #0b4f4c;
          background: rgba(20, 142, 126, 0.12);
          border: 1px solid rgba(20, 142, 126, 0.22);
        }

        .contact-status-error {
          color: #8d2b17;
          background: rgba(255, 77, 46, 0.1);
          border: 1px solid rgba(255, 77, 46, 0.18);
        }

        .contact-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          max-width: 100%;
          border: 0;
          cursor: pointer;
          margin-top: 0.25rem;
          padding: 0.88rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .contact-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .contact-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .contact-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .contact-action-button:disabled {
          cursor: not-allowed;
          opacity: 0.75;
          transform: none;
        }

        .contact-info-panel {
          order: 1;
          display: grid;
          gap: 0.82rem;
          align-items: stretch;
        }

        .contact-info-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.85rem;
          align-items: start;
          min-height: 138px;
          padding: clamp(0.85rem, 2vw, 1rem);
          border-radius: 24px;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.32);
          box-shadow: 0 32px 92px rgba(2, 11, 13, 0.16), 0 0 42px rgba(255, 176, 0, 0.13);
        }

        .contact-info-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2), 0 0 24px rgba(255, 189, 89, 0.16);
          animation: contactFloat 5.5s ease-in-out infinite;
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .contact-info-card:hover .contact-info-icon {
          transform: translateY(-3px) rotate(-3deg);
          box-shadow: 0 20px 48px rgba(2, 11, 13, 0.25), 0 0 30px rgba(255, 189, 89, 0.28);
        }

        .contact-info-card span {
          display: block;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .contact-info-card strong {
          display: block;
          margin: 0.16rem 0 0.28rem;
          color: #101819;
          font-size: clamp(1rem, 1.5vw, 1.12rem);
          overflow-wrap: anywhere;
          line-height: 1.18;
        }

        .contact-info-card p {
          color: #55706f;
          line-height: 1.5;
          font-size: 0.92rem;
        }

        .contact-map-frame {
          overflow: hidden;
          aspect-ratio: 16 / 7;
          min-height: clamp(320px, 44vw, 520px);
          border-radius: 30px;
          border: 1px solid rgba(255, 176, 0, 0.22);
          background:
            linear-gradient(145deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.82)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          box-shadow: 0 34px 96px rgba(2, 11, 13, 0.18), 0 0 42px rgba(255, 176, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          padding: clamp(0.55rem, 1.2vw, 0.8rem);
          animation: contactRise 680ms ease both;
        }

        .contact-map-frame iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
          border-radius: 24px;
          filter: saturate(0.95) contrast(1.02);
        }

        .contact-support-grid,
        .contact-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.82rem, 1.8vw, 1.1rem);
          align-items: stretch;
        }

        .contact-trust-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .contact-support-grid article,
        .contact-trust-grid article {
          display: grid;
          align-content: start;
          gap: 0.55rem;
          min-height: 178px;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-support-grid article:hover,
        .contact-trust-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 26px 68px rgba(2, 11, 13, 0.14), 0 0 34px rgba(255, 176, 0, 0.1);
        }

        .contact-support-grid div,
        .contact-trust-grid span {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
          box-shadow: 0 14px 32px rgba(2, 11, 13, 0.16), 0 0 22px rgba(255, 189, 89, 0.15);
        }

        .contact-support-grid h3,
        .contact-trust-grid h3 {
          color: #101819;
          font-size: clamp(1.05rem, 1.7vw, 1.28rem);
          line-height: 1.1;
          overflow-wrap: anywhere;
        }

        .contact-support-grid p,
        .contact-trust-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .contact-social {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
          gap: clamp(1rem, 3vw, 1.5rem);
          align-items: center;
        }

        .contact-social-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .contact-social-grid a {
          display: grid;
          justify-items: center;
          gap: 0.5rem;
          min-height: 112px;
          padding: 0.95rem 0.7rem;
          border-radius: 22px;
          color: #101819;
          font-weight: 900;
          text-align: center;
          overflow-wrap: anywhere;
          animation: contactRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .contact-social-grid a:hover {
          transform: translateY(-5px) rotate(-1deg);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 24px 62px rgba(2, 11, 13, 0.14), 0 0 30px rgba(255, 176, 0, 0.12);
        }

        .contact-social-grid span {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          box-shadow: 0 14px 32px rgba(2, 11, 13, 0.18);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .contact-social-grid a:hover span {
          transform: translateY(-2px) rotate(8deg) scale(1.06);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.22), 0 0 28px rgba(255, 189, 89, 0.24);
        }

        .contact-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(20, 142, 126, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #2f1025);
          color: #fff;
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: contactGlowSweep 8s ease-in-out infinite;
        }

        .contact-cta > * {
          position: relative;
          z-index: 1;
        }

        .contact-cta h2 {
          color: #fff;
        }

        .contact-cta > p:not(.contact-eyebrow) {
          max-width: 690px;
          margin: 0.85rem auto 1.2rem;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        @keyframes contactRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes contactHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes contactFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes contactParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes contactGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @keyframes contactBadgePulse {
          0%, 100% { transform: translateY(0); box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24), 0 0 34px rgba(255, 189, 89, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.18); }
          50% { transform: translateY(-4px); box-shadow: 0 24px 68px rgba(0, 0, 0, 0.28), 0 0 48px rgba(255, 189, 89, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.22); }
        }

        @media (max-width: 1279px) {
          .contact-support-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .contact-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .contact-social {
            grid-template-columns: 1fr;
          }

          .contact-main-grid {
            grid-template-columns: minmax(240px, 0.85fr) minmax(0, 1.15fr);
            align-items: stretch;
          }

          .contact-field-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-panel {
            grid-template-columns: 1fr;
          }

          .contact-info-card {
            min-height: auto;
          }

          .contact-support-grid,
          .contact-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .contact-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .contact-hero {
            min-height: clamp(400px, 104vw, 540px);
            border-radius: 26px;
          }

          .contact-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .contact-hero h1 {
            max-width: 11.5ch;
            font-size: clamp(2.15rem, 11.5vw, 4.25rem);
            line-height: 0.94;
            letter-spacing: -0.055em;
          }

          .contact-hero p:not(.contact-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .contact-experience,
          .contact-location,
          .contact-support,
          .contact-trust,
          .contact-social,
          .contact-cta {
            border-radius: 24px;
          }

          .contact-experience,
          .contact-location,
          .contact-support,
          .contact-trust,
          .contact-social {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .contact-field-grid,
          .contact-info-panel,
          .contact-main-grid,
          .contact-support-grid,
          .contact-trust-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-card,
          .contact-info-panel {
            order: initial;
          }

          .contact-info-panel {
            order: 1;
          }

          .contact-form-card {
            order: 2;
          }

          .contact-social-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-action-button {
            width: 100%;
          }

          .contact-map-frame {
            aspect-ratio: 4 / 3;
            min-height: 300px;
          }
        }

        @media (max-width: 420px) {
          .contact-hero {
            min-height: 390px;
          }

          .contact-hero h1 {
            font-size: clamp(1.82rem, 10.5vw, 3.2rem);
            letter-spacing: -0.046em;
          }

          .contact-eyebrow {
            font-size: 0.68rem;
            letter-spacing: 0.14em;
          }

          .contact-section-heading h2,
          .contact-social h2,
          .contact-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .contact-info-card {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .contact-info-icon {
            width: 50px;
            height: 50px;
          }

          .contact-response-badge {
            border-radius: 22px;
          }

          .contact-social-grid {
            gap: 0.62rem;
          }

          .contact-social-grid a {
            min-height: 104px;
            padding: 0.82rem 0.55rem;
          }
        }

        @media (max-width: 360px) {
          .contact-hero-content {
            padding-inline: 0.95rem;
          }

          .contact-hero h1 {
            font-size: clamp(1.62rem, 10vw, 2.75rem);
          }

          .contact-form-card,
          .contact-support-grid article,
          .contact-trust-grid article {
            padding: 0.85rem;
          }

          .contact-form-card input,
          .contact-form-card textarea {
            padding-right: 1.75rem;
          }

          .contact-map-frame {
            min-height: 280px;
            border-radius: 22px;
          }

          .contact-social-grid {
            grid-template-columns: 1fr;
          }

          .contact-map-frame iframe {
            border-radius: 18px;
          }
        }

        @media (hover: none) {
          .contact-info-card:hover,
          .contact-support-grid article:hover,
          .contact-trust-grid article:hover,
          .contact-social-grid a:hover,
          .contact-action-button:hover {
            transform: none;
          }

          .contact-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-hero-bg,
          .contact-orb,
          .contact-particles span,
          .contact-hero-content,
          .contact-response-badge,
          .contact-info-card,
          .contact-info-icon,
          .contact-support-grid article,
          .contact-trust-grid article,
          .contact-social-grid a,
          .contact-cta::before {
            animation: none;
          }
        }
      `})]})}const rb=[{icon:"P",name:"Secure Parking",detail:"Organized arrival support with safe parking guidance for festival guests.",availability:"Event Hours",benefit:"Convenient entry and exit flow",note:"Follow venue staff guidance for parking access."},{icon:"Wi",name:"High-Speed Wi-Fi",detail:"Connectivity support for creators, guests, and digital festival moments.",availability:"Selected Zones",benefit:"Easy sharing and communication",note:"Best coverage around creator and information zones."},{icon:"FC",name:"Premium Food Court",detail:"Curated food, cafe, and partner dining experiences across the venue.",availability:"All Day",benefit:"Family-friendly refreshment access",note:"Peak timings may have managed queues."},{icon:"MD",name:"Medical Assistance",detail:"Dedicated support points for quick first-aid and guest care needs.",availability:"On Site",benefit:"Safety-first festival operations",note:"Contact event staff immediately for assistance."},{icon:"SC",name:"Security Services",detail:"Trained security support across entrances, audience zones, and movement paths.",availability:"Full Event",benefit:"A safer festival environment",note:"Security checks apply at entry points."},{icon:"WR",name:"Clean Washrooms",detail:"Clean, accessible, and regularly maintained guest convenience areas.",availability:"All Zones",benefit:"Comfort throughout the event",note:"Maintenance teams rotate throughout event hours."},{icon:"AC",name:"Accessibility Support",detail:"Guest-focused support for inclusive and comfortable movement through the venue.",availability:"Information Desk",benefit:"Better access for every visitor",note:"Ask the information desk for route support."},{icon:"CH",name:"Charging Stations",detail:"Power support points for phones, creators, and essential event connectivity.",availability:"Selected Areas",benefit:"Stay connected longer",note:"Bring your own charging cable where possible."}],nb=[["Comfort","Thoughtful guest touchpoints for long festival hours."],["Safety","Operational support designed around crowd confidence."],["Convenience","Facilities positioned around the visitor journey."],["Accessibility","More inclusive access for families and guests."],["Hospitality","Premium experience standards across key zones."],["Family Friendly","Services that support a comfortable group visit."]],ab=[["20+","Festival Facilities"],["10,000+","Visitors Served"],["24/7","Medical Support"],["100%","Safety Commitment"]];function ib(){return n.jsxs("main",{className:"facilities-premium",children:[n.jsxs("section",{className:"facilities-hero","aria-label":"World-class festival facilities",children:[n.jsx("div",{className:"facilities-hero-bg"}),n.jsx("div",{className:"facilities-orb facilities-orb-one"}),n.jsx("div",{className:"facilities-orb facilities-orb-two"}),n.jsxs("div",{className:"facilities-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"facilities-hero-content",children:[n.jsx("p",{className:"facilities-eyebrow",children:"Ozilla Festival 2026"}),n.jsx("h1",{children:"Everything You Need For An Unforgettable Festival Experience"}),n.jsx("p",{children:"Premium comfort, safety, hospitality, and world-class visitor services at Ozilla Festival 2026."})]})]}),n.jsxs("section",{className:"facility-featured","aria-label":"Featured facility",children:[n.jsxs("div",{children:[n.jsx("p",{className:"facilities-eyebrow",children:"Featured Facility"}),n.jsx("h2",{children:"Premium Food Court"}),n.jsx("p",{children:"A curated hospitality zone with partner food experiences, family-friendly seating, refreshment access, and festival-ready service flow."})]}),n.jsxs("div",{className:"facility-featured-card",children:[n.jsx("span",{children:"VIP Experience"}),n.jsx("strong",{children:"Food, comfort, and social energy in one premium zone."})]})]}),n.jsx("section",{className:"facility-stats","aria-label":"Facility statistics",children:ab.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*80}ms`},children:[n.jsx("strong",{children:e}),n.jsx("span",{children:t})]},t))}),n.jsxs("section",{className:"facility-showcase","aria-label":"Facility showcase",children:[n.jsxs("div",{className:"facilities-section-heading",children:[n.jsx("p",{className:"facilities-eyebrow",children:"Premium Facility Showcase"}),n.jsx("h2",{children:"Every service designed around comfort, safety, and convenience."})]}),n.jsx("div",{className:"facility-grid",children:rb.map((e,t)=>n.jsxs("article",{className:"facility-card",style:{"--delay":`${t*70}ms`},children:[n.jsx("div",{className:"facility-icon",children:e.icon}),n.jsx("h3",{children:e.name}),n.jsx("p",{children:e.detail}),n.jsxs("div",{className:"facility-meta",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Availability"}),n.jsx("strong",{children:e.availability})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Benefit"}),n.jsx("strong",{children:e.benefit})]})]}),n.jsxs("div",{className:"facility-note",children:[n.jsx("span",{children:"Important Note"}),n.jsx("strong",{children:e.note})]})]},e.name))})]}),n.jsxs("section",{className:"facility-experience","aria-label":"Why our facilities are different",children:[n.jsxs("div",{className:"facilities-section-heading",children:[n.jsx("p",{className:"facilities-eyebrow",children:"Why Our Facilities Are Different"}),n.jsx("h2",{children:"A premium guest journey built for every visitor."})]}),n.jsx("div",{className:"facility-experience-grid",children:nb.map(([e,t],r)=>n.jsxs("article",{style:{"--delay":`${r*75}ms`},children:[n.jsx("div",{children:String(r+1).padStart(2,"0")}),n.jsx("h3",{children:e}),n.jsx("p",{children:t})]},e))})]}),n.jsxs("section",{className:"facility-cta",children:[n.jsx("p",{className:"facilities-eyebrow",children:"Ozilla Experience"}),n.jsx("h2",{children:"Ready to experience world-class facilities?"}),n.jsx("p",{children:"Discover every premium service designed to make your Ozilla Festival experience unforgettable."}),n.jsx(B,{to:"/events/future",className:"facility-action-button",children:"Explore Festival"})]}),n.jsx("style",{children:`
        .facilities-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .facilities-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .facilities-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 189, 89, 0.22), transparent 24rem),
            radial-gradient(circle at 86% 14%, rgba(20, 142, 126, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 84%, rgba(255, 77, 46, 0.11), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(232, 236, 224, 0.9));
        }

        .facilities-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.36;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .facilities-hero {
          position: relative;
          min-height: clamp(430px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.28), transparent 20rem),
            linear-gradient(135deg, #041719, #073332 48%, #2f1025);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .facilities-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 25% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(20, 142, 126, 0.22), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(7, 51, 50, 0.92) 56%, rgba(47, 16, 37, 0.92));
          animation: facilityHeroGlow 16s ease-in-out infinite alternate;
        }

        .facilities-hero::before,
        .facilities-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .facilities-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .facilities-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .facilities-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: facilityFloat 9s ease-in-out infinite;
        }

        .facilities-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.56);
        }

        .facilities-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(20, 142, 126, 0.42);
          animation-delay: 1.2s;
        }

        .facilities-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: facilityParticle 6s ease-in-out infinite;
        }

        .facilities-particles span:nth-child(1) { left: 14%; top: 24%; }
        .facilities-particles span:nth-child(2) { left: 32%; bottom: 18%; animation-delay: 1s; }
        .facilities-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .facilities-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .facilities-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .facilities-hero-content {
          width: min(100%, 1030px);
          position: relative;
          z-index: 2;
          padding: clamp(1.8rem, 5.6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: facilityRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .facilities-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .facilities-hero h1 {
          font-size: clamp(2.8rem, 7.2vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.068em;
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: normal;
          max-width: 11.5ch;
          margin-inline: auto;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
        }

        .facilities-hero p:not(.facilities-eyebrow) {
          max-width: 760px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .facility-featured,
        .facility-stats,
        .facility-showcase,
        .facility-experience,
        .facility-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .facility-featured,
        .facility-showcase,
        .facility-experience {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .facility-featured {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
          gap: clamp(1rem, 4vw, 2.5rem);
          align-items: center;
          overflow: hidden;
        }

        .facility-featured::before {
          content: '';
          position: absolute;
          inset: -30% -15%;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 20%, rgba(255, 189, 89, 0.2), transparent 14rem),
            linear-gradient(115deg, transparent 36%, rgba(255, 255, 255, 0.34), transparent 48%);
          opacity: 0.55;
          animation: facilityGlowSweep 9s ease-in-out infinite;
        }

        .facility-featured > * {
          position: relative;
          z-index: 1;
        }

        .facility-featured h2,
        .facilities-section-heading h2,
        .facility-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .facility-featured p:not(.facilities-eyebrow),
        .facility-cta > p:not(.facilities-eyebrow) {
          color: #55706f;
          font-size: clamp(0.98rem, 1.7vw, 1.14rem);
          line-height: 1.7;
        }

        .facility-featured-card {
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 0.8rem;
          padding: clamp(1.1rem, 3vw, 1.6rem);
          border-radius: 28px;
          border: 1px solid rgba(255, 189, 89, 0.34);
          background:
            linear-gradient(145deg, rgba(4, 23, 25, 0.94), rgba(7, 51, 50, 0.86)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          color: #fff;
          box-shadow: 0 28px 86px rgba(0, 0, 0, 0.24), 0 0 44px rgba(255, 176, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .facility-featured-card::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent 32%, transparent 72%, rgba(255, 189, 89, 0.18));
        }

        .facility-featured-card span {
          position: relative;
          z-index: 1;
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .facility-featured-card strong {
          position: relative;
          z-index: 1;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .facility-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          padding: clamp(0.9rem, 2vw, 1.25rem);
          background: linear-gradient(135deg, #041719, #073332);
        }

        .facility-stats article {
          display: grid;
          align-content: center;
          justify-items: center;
          gap: 0.35rem;
          min-height: clamp(132px, 12vw, 188px);
          padding: clamp(1rem, 2.2vw, 1.4rem);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          animation: facilityRise 620ms ease both;
          animation-delay: var(--delay);
        }

        .facility-stats strong {
          color: #f7f5ef;
          font-size: clamp(2rem, 5.6vw, 4.8rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .facility-stats span {
          color: rgba(255, 255, 255, 0.72);
          font-weight: 850;
          text-align: center;
          line-height: 1.2;
        }

        .facilities-section-heading {
          max-width: 860px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.25rem);
          align-items: stretch;
        }

        .facility-card {
          position: relative;
          display: grid;
          grid-template-rows: auto auto minmax(0, 1fr) auto auto;
          gap: 0.9rem;
          overflow: hidden;
          padding: clamp(1rem, 2.3vw, 1.35rem);
          border-radius: 32px;
          border: 1px solid rgba(11, 79, 76, 0.13);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(20, 142, 126, 0.1), transparent 18rem);
          box-shadow: 0 28px 86px rgba(2, 11, 13, 0.12), 0 1px 0 rgba(255, 255, 255, 0.7) inset;
          backdrop-filter: blur(18px);
          animation: facilityRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .facility-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.22));
        }

        .facility-card::after {
          content: '';
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: -18px;
          height: 30px;
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.2);
          filter: blur(18px);
          opacity: 0;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .facility-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 38px 116px rgba(2, 11, 13, 0.18), 0 0 40px rgba(255, 176, 0, 0.1);
        }

        .facility-card:hover::after {
          opacity: 1;
          transform: translateY(-5px);
        }

        .facility-card > * {
          position: relative;
          z-index: 1;
        }

        .facility-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          letter-spacing: 0.04em;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2), 0 0 26px rgba(255, 189, 89, 0.18);
          animation: facilityFloat 5.5s ease-in-out infinite;
        }

        .facility-card h3 {
          color: #101819;
          font-size: clamp(1.35rem, 2.5vw, 2.1rem);
          line-height: 1;
          letter-spacing: -0.05em;
          overflow-wrap: anywhere;
        }

        .facility-card p {
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
          font-size: clamp(0.92rem, 1.2vw, 1rem);
        }

        .facility-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
          margin-top: auto;
        }

        .facility-meta div {
          padding: 0.75rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
        }

        .facility-meta span {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .facility-meta strong {
          color: #101819;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .facility-note {
          padding: 0.82rem;
          border-radius: 18px;
          background:
            linear-gradient(145deg, rgba(255, 245, 224, 0.72), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.22), transparent 10rem);
          border: 1px solid rgba(255, 176, 0, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.62);
        }

        .facility-note span {
          display: block;
          margin-bottom: 0.24rem;
          color: #a86400;
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .facility-note strong {
          display: block;
          color: #0b4f4c;
          font-size: 0.9rem;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .facility-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
          align-items: stretch;
        }

        .facility-experience-grid article {
          display: grid;
          align-content: start;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: facilityRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .facility-experience-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .facility-experience-grid div {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .facility-experience-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .facility-experience-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .facility-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(20, 142, 126, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #2f1025);
          color: #fff;
        }

        .facility-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: facilityGlowSweep 8s ease-in-out infinite;
        }

        .facility-cta > * {
          position: relative;
          z-index: 1;
        }

        .facility-cta h2 {
          color: #fff;
        }

        .facility-cta > p:not(.facilities-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        .facility-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          max-width: 100%;
          margin-top: 1.5rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .facility-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .facility-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .facility-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        @keyframes facilityRise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes facilityHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes facilityFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes facilityParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes facilityGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (min-width: 1600px) {
          .facilities-premium {
            gap: 3.2rem;
          }

          .facility-grid {
            gap: 1.45rem;
          }
        }

        @media (max-width: 1279px) {
          .facility-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1200px) {
          .facility-experience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .facility-featured {
            grid-template-columns: 1fr;
          }

          .facility-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .facilities-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .facility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .facilities-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .facilities-hero {
            min-height: clamp(430px, 108vw, 560px);
            border-radius: 26px;
          }

          .facilities-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .facilities-hero h1 {
            font-size: clamp(2rem, 11.5vw, 4.2rem);
            line-height: 0.96;
            letter-spacing: -0.06em;
            max-width: 9.4ch;
          }

          .facilities-hero p:not(.facilities-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .facility-featured,
          .facility-stats,
          .facility-showcase,
          .facility-experience,
          .facility-cta {
            border-radius: 24px;
          }

          .facility-featured,
          .facility-showcase,
          .facility-experience {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .facility-grid,
          .facility-experience-grid {
            grid-template-columns: 1fr;
          }

          .facility-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.65rem;
          }

          .facility-stats article {
            min-height: 116px;
          }

          .facility-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
            gap: 0.82rem;
          }

          .facility-meta {
            grid-template-columns: 1fr;
          }

          .facility-note {
            padding: 0.75rem;
          }

          .facility-featured-card span {
            width: 100%;
            text-align: center;
          }

          .facility-featured-card {
            order: -1;
          }

          .facility-action-button {
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .facilities-hero {
            min-height: clamp(410px, 112vw, 520px);
          }

          .facility-stats {
            grid-template-columns: 1fr;
          }

          .facility-stats article {
            min-height: 104px;
          }

          .facility-stats strong {
            font-size: clamp(2.2rem, 16vw, 4rem);
          }
        }

        @media (max-width: 420px) {
          .facilities-hero {
            min-height: 420px;
          }

          .facilities-hero h1 {
            font-size: clamp(1.82rem, 11.4vw, 3.15rem);
            letter-spacing: -0.046em;
            max-width: 9.2ch;
          }

          .facilities-eyebrow {
            letter-spacing: 0.14em;
            font-size: 0.68rem;
          }

          .facility-featured h2,
          .facilities-section-heading h2,
          .facility-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .facility-icon {
            width: 52px;
            height: 52px;
            border-radius: 16px;
          }

          .facility-featured,
          .facility-showcase,
          .facility-experience,
          .facility-cta {
            padding-inline: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .facilities-hero-content {
            padding-inline: 0.95rem;
          }

          .facilities-hero h1 {
            font-size: clamp(1.68rem, 11vw, 2.7rem);
            max-width: 9ch;
          }

          .facility-featured h2,
          .facilities-section-heading h2,
          .facility-cta h2 {
            font-size: clamp(1.6rem, 9.5vw, 2.3rem);
          }

          .facility-card,
          .facility-experience-grid article {
            padding: 0.82rem;
          }

          .facility-meta div,
          .facility-note {
            padding: 0.68rem;
          }
        }

        @media (hover: none) {
          .facility-card:hover,
          .facility-experience-grid article:hover,
          .facility-action-button:hover {
            transform: none;
          }

          .facility-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .facilities-hero-bg,
          .facilities-orb,
          .facilities-particles span,
          .facilities-hero-content,
          .facility-stats article,
          .facility-card,
          .facility-icon,
          .facility-experience-grid article,
          .facility-cta::before {
            animation: none;
          }
        }
      `})]})}const Zd={"Pearl Continental Hotel (PC)":"/assets/hotels/Pearl-Continental-Lahore.jpg","Ramada by Wyndham Lahore":"/assets/hotels/Ramada-by-Wyndham-Lahore-Gulberg-II.jpg","Hotel Indigo Lahore":"/assets/hotels/Hotel-Indigo.jpg","Hotel One Gulberg Lahore":"/assets/hotels/Hotel-One-Gulberg-Lahore.jpg","Luxus Grand Hotel (LC)":"/assets/hotels/Luxus-Grand-Hotel.jpg","Nishat Hotel Lahore":"/assets/hotels/Nishat.jpg"},sb={"Pearl Continental Hotel (PC)":"Iconic five-star city hospitality","Ramada by Wyndham Lahore":"International comfort in Gulberg","Hotel Indigo Lahore":"Boutique lifestyle stay experience","Hotel One Gulberg Lahore":"Smart central festival access","Luxus Grand Hotel (LC)":"Executive luxury with city energy","Nishat Hotel Lahore":"Refined premium Lahore living"},eu=["Pool","Dining","Gym","WiFi","Parking","Service"],ob=[["Festival Partner Hotels","Curated stays selected for Ozilla guests, brand partners, and VIP visitors."],["Premium Hospitality","Polished service, comfortable rooms, and refined Lahore hospitality."],["Exclusive Discounts","Partner booking options connected to the festival experience."],["Best Location","Convenient Lahore access for concerts, food experiences, and festival moments."]];function lb(e){return eu[e%eu.length]}function cb(){const e=ft.hotels.map((t,r)=>({...t,description:t.description||"Hotel partners showcase rooms, location, facilities and Ozilla special rates.",contact:t.contact||"Contact via Ozilla partner desk",facilities:t.facilities||["Rooms and Suites","On-site Facilities","Event Access Support","Partner Booking Assistance"],booking:t.offer,image:t.image||Zd[t.name]||"/assets/prism-auth-visual.jpg",fallbackImage:Zd[t.name]||"/assets/prism-auth-visual.jpg",tagline:sb[t.name]||"Premium Ozilla partner hospitality",featured:r===0}));return k.useEffect(()=>{const t=document.querySelectorAll(".hotel-reveal"),r=new IntersectionObserver(a=>{a.forEach(i=>{i.target.classList.toggle("is-visible",i.isIntersecting)})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});return t.forEach(a=>r.observe(a)),()=>r.disconnect()},[]),n.jsxs("main",{className:"hotel-booking-page",children:[n.jsxs("section",{className:"hotel-booking-hero hotel-reveal",children:[n.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-a"}),n.jsx("div",{className:"hotel-hero-glow hotel-hero-glow-b"}),n.jsx("div",{className:"hotel-hero-sweep"}),n.jsxs("div",{className:"hotel-hero-content",children:[n.jsx("p",{className:"hotel-eyebrow",children:"OZILLA FESTIVAL 2026"}),n.jsx("h1",{children:"LUXURY HOTELS"}),n.jsx("p",{children:"Stay in the finest hotels and experience premium hospitality during Ozilla Festival 2026."}),n.jsxs("div",{className:"hotel-search-bar","aria-label":"Hotel page highlights",children:[n.jsx("span",{children:"Lahore, Pakistan"}),n.jsx("span",{children:"Festival Partner Hotels"}),n.jsx("span",{children:"Premium Stay Options"})]})]})]}),n.jsxs("section",{className:"hotel-booking-intro hotel-reveal",children:[n.jsxs("div",{children:[n.jsx("p",{className:"hotel-eyebrow",children:"Premium Stay Collection"}),n.jsx("h2",{children:"Browse Ozilla Festival Partner Hotels"})]}),n.jsx("p",{children:"A curated hotel listing experience for guests who want comfort, convenient access, trusted booking links, and premium Lahore hospitality."})]}),n.jsx("section",{className:"hotel-benefit-strip hotel-reveal",children:ob.map(([t,r],a)=>n.jsxs("article",{className:"hotel-benefit-pill",children:[n.jsx("span",{children:String(a+1).padStart(2,"0")}),n.jsxs("div",{children:[n.jsx("h3",{children:t}),n.jsx("p",{children:r})]})]},t))}),n.jsx("section",{className:"hotel-listings","aria-label":"Luxury hotel listings",children:e.map((t,r)=>n.jsxs("article",{className:`hotel-listing-card hotel-reveal ${t.featured?"hotel-listing-featured":""}`,style:{transitionDelay:`${Math.min(r*70,280)}ms`},children:[t.featured?n.jsx("span",{className:"hotel-featured-ribbon",children:"Featured Partner Hotel"}):null,n.jsx("a",{href:t.website||"#",target:t.website?"_blank":void 0,rel:t.website?"noreferrer":void 0,className:"hotel-listing-image-link","aria-label":`Open ${t.name} details`,children:n.jsxs("div",{className:"hotel-listing-image-wrap",children:[t.showImage?n.jsx("img",{src:t.image,alt:t.name,className:"hotel-listing-image",loading:"lazy",referrerPolicy:"no-referrer",onError:a=>{a.currentTarget.onerror=null,a.currentTarget.src=t.fallbackImage}}):n.jsx("div",{className:"hotel-image-placeholder",children:"Premium Hotel Preview"}),n.jsxs("div",{className:"hotel-image-overlay",children:[n.jsx("span",{children:"*****"}),n.jsx("b",{children:"Luxury Stay"}),n.jsx("em",{children:"Premium Partner"})]})]})}),n.jsxs("div",{className:"hotel-listing-info",children:[n.jsxs("div",{className:"hotel-listing-top",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"hotel-rating-line",children:["***** ",n.jsxs("span",{children:[t.rating||"4.8/5"," Exceptional"]})]}),t.website?n.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"hotel-listing-title",children:t.name}):n.jsx("h2",{className:"hotel-listing-title",children:t.name}),n.jsx("p",{className:"hotel-tagline",children:t.tagline})]}),n.jsxs("div",{className:"hotel-score-box","aria-label":`${t.name} rating`,children:[n.jsx("strong",{children:t.rating?t.rating.replace("/5",""):"4.8"}),n.jsx("span",{children:"Exceptional"})]})]}),n.jsx("p",{className:"hotel-location",children:"Lahore, Pakistan"}),n.jsx("p",{className:"hotel-description",children:t.description}),n.jsx("div",{className:"hotel-amenity-row","aria-label":`${t.name} amenities`,children:t.facilities.slice(0,6).map((a,i)=>n.jsxs("span",{className:"hotel-amenity-chip",children:[n.jsx("b",{children:lb(i)}),a]},a))}),n.jsxs("div",{className:"hotel-listing-footer",children:[n.jsxs("div",{className:"hotel-detail-stack",children:[n.jsx("span",{children:"Festival Partner Badge"}),n.jsx("strong",{children:t.booking}),n.jsx("small",{children:t.contact})]}),t.website?n.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"hotel-action-button",children:"View Details"}):null]})]})]},t.name))}),n.jsxs("section",{className:"hotel-booking-cta hotel-reveal",children:[n.jsx("p",{className:"hotel-eyebrow",children:"Premium Hospitality"}),n.jsx("h2",{children:"Your Perfect Stay Awaits"}),n.jsx("p",{children:"Stay in the finest hotels during Ozilla Festival 2026."}),n.jsx("a",{href:"#top",onClick:t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"Explore Partner Hotels"})]}),n.jsx("style",{children:`
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
            url('/assets/hotels/Nishat.jpg') center / cover;
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
      `})]})}const db={"Street Grill Co.":["BBQ Dining","Fast Casual","Family Dining","Festival Combos"],"Spice District":["Pakistani Fusion","Signature Platters","Traditional Taste","Group Dining"],"Urban Brew":["Cafe Lounge","Desserts","Coffee Bar","Creator Hangout"]},ub={"Street Grill Co.":["Free Wi-Fi","Valet Parking","Air Conditioning","Family Friendly"],"Spice District":["Family Seating","VIP Tables","Air Conditioning","Group Service"],"Urban Brew":["Free Wi-Fi","Cafe Lounge","Dessert Bar","Creator Friendly"]},pb={"Street Grill Co.":"12:00 PM - 1:00 AM","Spice District":"1:00 PM - 12:00 AM","Urban Brew":"10:00 AM - 11:30 PM"},mb={"Street Grill Co.":{score:"4.8",label:"Excellent"},"Spice District":{score:"4.9",label:"Exceptional"},"Urban Brew":{score:"4.7",label:"Loved by Creators"}},hb=[["Festival Partner Restaurants","Curated dining partners selected for Ozilla visitors and families."],["Exclusive Festival Discounts","Special promo codes and limited-time restaurant offers."],["Premium Dining","Comfortable spaces, polished service, and crowd-friendly menus."],["VIP Hospitality","Dining experiences designed around Lahore festival energy."]];function fb(){const e=ft.restaurants.map((t,r)=>({...t,rating:mb[t.name]||{score:"4.8",label:"Excellent"},cuisines:db[t.name]||[t.cuisine],facilities:ub[t.name]||["Free Wi-Fi","Family Friendly","Air Conditioned"],hours:pb[t.name]||"12:00 PM - 12:00 AM",featured:r===0}));return n.jsxs("main",{className:"restaurants-premium",children:[n.jsxs("section",{className:"restaurants-hero","aria-label":"Premium Dining Experience",children:[n.jsx("div",{className:"restaurants-hero-bg"}),n.jsx("div",{className:"restaurants-orb restaurants-orb-one"}),n.jsx("div",{className:"restaurants-orb restaurants-orb-two"}),n.jsxs("div",{className:"restaurants-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"restaurants-hero-content",children:[n.jsx("p",{className:"restaurants-eyebrow",children:"Ozilla Festival 2026"}),n.jsx("h1",{children:"Discover the Finest Dining Experience"}),n.jsx("p",{children:"Discover the finest restaurants and unforgettable culinary experiences during Ozilla Festival 2026."})]})]}),n.jsxs("section",{className:"restaurants-intro",children:[n.jsxs("div",{children:[n.jsx("p",{className:"restaurants-eyebrow",children:"Partner Restaurant Collection"}),n.jsx("h2",{children:"Curated dining for music, families, creators, and festival guests."})]}),n.jsx("p",{children:"Restaurants onboarded with Ozilla include dedicated partner profiles, cuisine details, festival discounts, promo codes, and dining offers shaped for a premium event audience."})]}),n.jsx("section",{id:"restaurant-listings",className:"restaurant-listings","aria-label":"Restaurant listings",children:e.map((t,r)=>n.jsx("article",{className:`restaurant-listing ${t.featured?"featured":""}`,style:{"--delay":`${r*90}ms`},children:n.jsxs("div",{className:"restaurant-info-panel",children:[t.featured&&n.jsx("span",{className:"restaurant-featured-badge restaurant-featured-inline",children:"Chef's Recommendation"}),n.jsxs("div",{className:"restaurant-title-row",children:[n.jsxs("div",{children:[n.jsx("p",{className:"restaurant-cuisine",children:t.cuisine}),n.jsx("h3",{children:t.name}),n.jsx("p",{className:"restaurant-location",children:"Lahore, Pakistan"})]}),n.jsxs("div",{className:"restaurant-rating-box","aria-label":`${t.rating.score} rating ${t.rating.label}`,children:[n.jsx("span",{children:"★★★★★"}),n.jsx("strong",{children:t.rating.score}),n.jsx("small",{children:t.rating.label}),n.jsx("em",{children:"Premium Partner"})]})]}),n.jsxs("p",{className:"restaurant-description",children:[t.offer," A refined festival dining stop with warm hospitality, polished service, and a menu experience crafted for Ozilla guests."]}),n.jsxs("div",{className:"restaurant-meta-grid",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Discount"}),n.jsx("strong",{children:t.discount})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Opening Hours"}),n.jsx("strong",{children:t.hours})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Promo Code"}),n.jsx("strong",{children:t.code})]})]}),n.jsxs("div",{className:"restaurant-chip-section",children:[n.jsx("p",{children:"Specialties"}),n.jsx("div",{className:"restaurant-chip-row",children:t.cuisines.map(a=>n.jsx("span",{children:a},a))})]}),n.jsxs("div",{className:"restaurant-chip-section",children:[n.jsx("p",{children:"Facilities"}),n.jsx("div",{className:"restaurant-chip-row",children:t.facilities.map(a=>n.jsx("span",{children:a},a))})]}),n.jsxs("div",{className:"restaurant-actions",children:[n.jsx(B,{to:"/discounts",className:"restaurant-action-button",children:"Claim Offer"}),n.jsx("span",{children:"Contact: Partner desk available during festival hours"})]})]})},t.name))}),n.jsxs("section",{className:"restaurants-benefits",children:[n.jsxs("div",{className:"restaurants-section-heading",children:[n.jsx("p",{className:"restaurants-eyebrow",children:"Why Dine With Our Partners"}),n.jsx("h2",{children:"Food experiences designed for the festival lifestyle."})]}),n.jsx("div",{className:"restaurants-benefit-grid",children:hb.map(([t,r],a)=>n.jsxs("article",{style:{"--delay":`${a*80}ms`},children:[n.jsx("div",{className:"restaurants-benefit-icon",children:String(a+1).padStart(2,"0")}),n.jsx("h3",{children:t}),n.jsx("p",{children:r})]},t))})]}),n.jsxs("section",{className:"restaurants-cta",children:[n.jsx("p",{className:"restaurants-eyebrow",children:"Ozilla Dining"}),n.jsx("h2",{children:"Your perfect dining experience awaits."}),n.jsx("p",{children:"Discover Lahore's finest restaurants during Ozilla Festival 2026."}),n.jsx(B,{to:"/discounts",className:"restaurants-hero-button",children:"Explore Restaurants"})]}),n.jsx("style",{children:`
        .restaurants-premium {
          position: relative;
          width: min(100%, 1680px);
          margin-inline: auto;
          display: grid;
          gap: clamp(1.6rem, 3.4vw, 3rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .restaurants-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background:
            radial-gradient(circle at 10% 4%, rgba(255, 189, 89, 0.25), transparent 25rem),
            radial-gradient(circle at 86% 12%, rgba(255, 77, 46, 0.16), transparent 28rem),
            radial-gradient(circle at 48% 82%, rgba(11, 79, 76, 0.12), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(238, 230, 215, 0.9));
        }

        .restaurants-premium::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          opacity: 0.42;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.2) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(11, 79, 76, 0.08) 0 1px, transparent 1px 100%);
          background-size: 88px 88px;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .restaurants-hero {
          position: relative;
          min-height: clamp(420px, 56vw, 680px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(57, 19, 47, 0.88)),
            radial-gradient(circle at 50% 45%, rgba(255, 176, 0, 0.3), transparent 25rem);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .restaurants-hero-bg {
          position: absolute;
          inset: -8%;
          background:
            radial-gradient(circle at 26% 28%, rgba(255, 189, 89, 0.24), transparent 18rem),
            radial-gradient(circle at 72% 34%, rgba(255, 77, 46, 0.16), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(47, 16, 37, 0.9) 58%, rgba(4, 23, 25, 0.98));
          opacity: 1;
          filter: saturate(1.16) contrast(1.08);
          animation: restaurantHeroZoom 18s ease-in-out infinite alternate;
          z-index: -3;
        }

        .restaurants-hero::before,
        .restaurants-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .restaurants-hero::before {
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.34), transparent 18rem),
            radial-gradient(circle at 25% 82%, rgba(255, 138, 0, 0.18), transparent 16rem),
            linear-gradient(90deg, rgba(2, 11, 13, 0.88), rgba(57, 19, 47, 0.18), rgba(2, 11, 13, 0.82));
          z-index: -2;
        }

        .restaurants-hero::after {
          background:
            linear-gradient(115deg, transparent 0 44%, rgba(255, 255, 255, 0.08) 47%, transparent 52%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.56) 100%);
          z-index: -1;
        }

        .restaurants-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(28px);
          opacity: 0.35;
          animation: restaurantFloat 9s ease-in-out infinite;
        }

        .restaurants-orb-one {
          left: 7%;
          top: 12%;
          background: rgba(255, 176, 0, 0.5);
        }

        .restaurants-orb-two {
          right: 8%;
          bottom: 6%;
          background: rgba(255, 77, 46, 0.42);
          animation-delay: 1.4s;
        }

        .restaurants-particles span {
          position: absolute;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #ffbd59;
          box-shadow: 0 0 24px rgba(255, 189, 89, 0.95);
          animation: restaurantParticle 6s ease-in-out infinite;
        }

        .restaurants-particles span:nth-child(1) { left: 16%; top: 24%; }
        .restaurants-particles span:nth-child(2) { left: 34%; bottom: 18%; animation-delay: 1s; }
        .restaurants-particles span:nth-child(3) { right: 24%; top: 20%; animation-delay: 1.8s; }
        .restaurants-particles span:nth-child(4) { right: 14%; bottom: 24%; animation-delay: 2.6s; }
        .restaurants-particles span:nth-child(5) { left: 54%; top: 12%; animation-delay: 3.2s; }

        .restaurants-hero-content {
          position: relative;
          width: min(100%, 980px);
          padding: clamp(2rem, 6vw, 4.5rem);
          text-align: center;
          color: #fff;
          animation: restaurantRise 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .restaurants-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .restaurants-hero h1 {
          font-size: clamp(3rem, 8.6vw, 7.1rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-shadow: 0 22px 60px rgba(0, 0, 0, 0.38), 0 0 42px rgba(255, 189, 89, 0.12);
          overflow-wrap: anywhere;
        }

        .restaurants-hero p:not(.restaurants-eyebrow) {
          max-width: 720px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.4vw, 1.45rem);
          line-height: 1.55;
        }

        .restaurants-hero-button,
        .restaurant-action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          margin-top: 1.5rem;
          padding: 0.85rem 1.35rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 900;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.34);
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .restaurants-hero-button::before,
        .restaurant-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .restaurants-hero-button:hover,
        .restaurant-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.42);
        }

        .restaurants-hero-button:hover::before,
        .restaurant-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .restaurants-intro,
        .restaurants-benefits,
        .restaurants-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.8), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .restaurants-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.85fr);
          gap: clamp(1rem, 4vw, 3rem);
          align-items: end;
          padding: clamp(1.2rem, 4vw, 2.4rem);
        }

        .restaurants-intro h2,
        .restaurants-section-heading h2,
        .restaurants-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .restaurants-intro > p,
        .restaurants-cta > p {
          color: #55706f;
          font-size: clamp(0.98rem, 1.8vw, 1.14rem);
          line-height: 1.75;
        }

        .restaurant-listings {
          display: grid;
          gap: clamp(1.45rem, 3vw, 2.35rem);
        }

        .restaurant-listing {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(1rem, 3vw, 2rem);
          align-items: stretch;
          overflow: hidden;
          padding: clamp(0.9rem, 2.2vw, 1.45rem);
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 36px;
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.7)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 20rem),
            radial-gradient(circle at 100% 100%, rgba(11, 79, 76, 0.1), transparent 20rem);
          box-shadow: 0 26px 80px rgba(2, 11, 13, 0.12);
          backdrop-filter: blur(18px);
          animation: restaurantRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .restaurant-listing::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background:
            linear-gradient(120deg, rgba(255, 255, 255, 0.5), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.22));
          opacity: 0.72;
        }

        .restaurant-listing::after {
          content: '';
          position: absolute;
          inset: auto 8% -34px 8%;
          height: 58px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.2);
          filter: blur(24px);
          opacity: 0.55;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .restaurant-listing.featured {
          border-color: rgba(255, 176, 0, 0.48);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        .restaurant-listing:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.38);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .restaurant-listing:hover::after {
          opacity: 0.85;
          transform: scaleX(1.04);
        }

        .restaurant-stars {
          color: #ffbd59;
          letter-spacing: 0.04em;
          font-size: 0.86rem;
        }

        .restaurant-featured-badge {
          display: inline-flex;
          width: fit-content;
          padding: 0.55rem 0.8rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 14px 32px rgba(255, 138, 0, 0.34), 0 0 28px rgba(255, 189, 89, 0.22);
        }

        .restaurant-featured-inline {
          margin-bottom: 0.2rem;
        }

        .restaurant-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(0.85rem, 1.7vw, 1.25rem);
          padding: clamp(0.45rem, 1.6vw, 1rem);
          position: relative;
          z-index: 1;
        }

        .restaurant-title-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(96px, auto);
          gap: clamp(0.9rem, 2vw, 1.35rem);
          align-items: start;
        }

        .restaurant-cuisine {
          color: #9a4f00;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .restaurant-title-row h3 {
          margin-top: 0.2rem;
          color: #101819;
          font-size: clamp(1.65rem, 3.2vw, 3.15rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .restaurant-location {
          margin-top: 0.5rem;
          color: #0b4f4c;
          font-weight: 850;
        }

        .restaurant-rating-box {
          min-width: 92px;
          display: grid;
          justify-items: center;
          gap: 0.1rem;
          padding: 0.7rem;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(4, 23, 25, 0.95), rgba(7, 51, 50, 0.9));
          color: #fff;
          border: 1px solid rgba(255, 189, 89, 0.18);
          box-shadow: 0 18px 42px rgba(2, 11, 13, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .restaurant-rating-box span {
          color: #ffbd59;
          font-size: 0.62rem;
          letter-spacing: -0.02em;
        }

        .restaurant-rating-box strong {
          font-size: 1.45rem;
          line-height: 1;
        }

        .restaurant-rating-box small {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.68rem;
          text-align: center;
        }

        .restaurant-rating-box em {
          color: #ffbd59;
          font-size: 0.58rem;
          font-style: normal;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
        }

        .restaurant-description {
          max-width: 720px;
          color: #55706f;
          font-size: clamp(0.98rem, 1.5vw, 1.08rem);
          line-height: 1.72;
          text-wrap: pretty;
        }

        .restaurant-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(150px, 1fr));
          gap: 0.75rem;
        }

        .restaurant-meta-grid div {
          padding: 0.85rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .restaurant-meta-grid span,
        .restaurant-chip-section p {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .restaurant-meta-grid strong {
          color: #101819;
          font-size: 0.95rem;
        }

        .restaurant-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .restaurant-chip-row span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0.48rem 0.72rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.83rem;
          font-weight: 800;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .restaurant-chip-row span:hover {
          transform: translateY(-2px);
          background: rgba(255, 176, 0, 0.18);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 12px 26px rgba(255, 138, 0, 0.14);
        }

        .restaurant-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.9rem;
        }

        .restaurant-actions span {
          color: #55706f;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .restaurants-benefits {
          padding: clamp(1.2rem, 4vw, 2.4rem);
        }

        .restaurants-section-heading {
          max-width: 760px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .restaurants-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(190px, 1fr));
          gap: 0.9rem;
        }

        .restaurants-benefit-grid article {
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: restaurantRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .restaurants-benefit-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.26);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .restaurants-benefit-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .restaurants-benefit-grid h3 {
          color: #101819;
          font-size: 1.08rem;
          margin-bottom: 0.35rem;
        }

        .restaurants-benefit-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.92rem;
        }

        .restaurants-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f);
          color: #fff;
        }

        .restaurants-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: restaurantGlowSweep 8s ease-in-out infinite;
        }

        .restaurants-cta > * {
          position: relative;
          z-index: 1;
        }

        .restaurants-cta h2 {
          color: #fff;
        }

        .restaurants-cta > p:not(.restaurants-eyebrow) {
          max-width: 580px;
          margin: 0.8rem auto 0;
          color: rgba(255, 255, 255, 0.78);
        }

        .restaurants-premium .restaurants-cta {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f) !important;
        }

        .restaurants-premium .restaurants-cta .restaurants-eyebrow {
          color: #ffbd59 !important;
        }

        .restaurants-premium .restaurants-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .restaurants-premium .restaurants-cta > p:not(.restaurants-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .restaurants-premium .restaurants-cta .restaurants-hero-button {
          color: #101819 !important;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e) !important;
        }

        @keyframes restaurantRise {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes restaurantHeroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); }
        }

        @keyframes restaurantFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes restaurantParticle {
          0%, 100% { opacity: 0.35; transform: translateY(0) scale(0.8); }
          50% { opacity: 0.9; transform: translateY(-18px) scale(1); }
        }

        @keyframes restaurantGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @media (min-width: 1440px) {
          .restaurant-listings {
            gap: 2.5rem;
          }

          .restaurant-listing {
            padding: 1.65rem;
          }

          .restaurant-info-panel {
            padding: 1.2rem;
          }
        }

        @media (max-width: 1200px) {
          .restaurants-premium {
            gap: clamp(1.35rem, 3vw, 2.4rem);
          }

          .restaurant-meta-grid {
            grid-template-columns: repeat(3, minmax(120px, 1fr));
          }

          .restaurants-benefit-grid {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .restaurants-intro {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .restaurants-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .restaurant-listing {
            border-radius: 30px;
          }

          .restaurant-title-row {
            grid-template-columns: minmax(0, 1fr) auto;
          }

          .restaurants-benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .restaurants-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .restaurants-hero {
            min-height: clamp(430px, 105vw, 540px);
            border-radius: 26px;
          }

          .restaurants-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .restaurants-hero h1 {
            font-size: clamp(2.45rem, 14.2vw, 4.55rem);
            line-height: 0.93;
            letter-spacing: -0.06em;
          }

          .restaurants-hero p:not(.restaurants-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .restaurants-intro,
          .restaurants-benefits,
          .restaurants-cta {
            border-radius: 24px;
          }

          .restaurants-intro,
          .restaurants-benefits {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .restaurant-listing {
            padding: 0.7rem;
            border-radius: 24px;
          }

          .restaurant-info-panel {
            gap: 0.9rem;
            padding: 0.45rem;
          }

          .restaurant-title-row {
            grid-template-columns: 1fr;
          }

          .restaurant-rating-box {
            width: 100%;
            grid-template-columns: auto auto 1fr;
            justify-items: start;
            align-items: center;
            gap: 0.45rem;
            padding: 0.75rem 0.85rem;
          }

          .restaurant-rating-box em {
            grid-column: 1 / -1;
          }

          .restaurant-meta-grid {
            grid-template-columns: 1fr;
          }

          .restaurants-benefit-grid {
            grid-template-columns: 1fr;
          }

          .restaurant-chip-row {
            gap: 0.45rem;
          }

          .restaurant-chip-row span {
            min-height: 36px;
            padding: 0.5rem 0.68rem;
          }

          .restaurant-action-button,
          .restaurants-hero-button {
            width: 100%;
          }

          .restaurant-actions span {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .restaurants-hero {
            min-height: 430px;
          }

          .restaurants-hero h1 {
            font-size: clamp(2.15rem, 13.4vw, 3.45rem);
            letter-spacing: -0.05em;
          }

          .restaurants-eyebrow {
            letter-spacing: 0.14em;
          }

          .restaurants-intro h2,
          .restaurants-section-heading h2,
          .restaurants-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .restaurant-title-row h3 {
            font-size: clamp(1.55rem, 9vw, 2.35rem);
          }

          .restaurant-meta-grid div {
            padding: 0.78rem;
          }
        }

        @media (max-width: 360px) {
          .restaurants-hero {
            min-height: 410px;
          }

          .restaurant-listing {
            padding: 0.55rem;
          }

          .restaurant-info-panel {
            padding: 0.35rem;
          }

          .restaurant-chip-row span {
            width: 100%;
            justify-content: center;
          }
        }

        @media (hover: none) {
          .restaurant-listing:hover,
          .restaurants-benefit-grid article:hover,
          .restaurants-hero-button:hover,
          .restaurant-action-button:hover,
          .restaurant-chip-row span:hover {
            transform: none;
          }

          .restaurant-action-button:active,
          .restaurants-hero-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .restaurants-hero-bg,
          .restaurants-orb,
          .restaurants-particles span,
          .restaurant-listing,
          .restaurants-benefit-grid article,
          .restaurants-hero-content {
            animation: none;
          }
        }
      `})]})}const tu=[["Hotels","Premium stays and partner accommodation benefits"],["Restaurants","Dining deals, family platters, and festival combos"],["Festival Merchandise","Exclusive Ozilla drops and limited collections"],["Transport","Festival-friendly travel and access support"],["Entertainment","Audience experiences and VIP-style benefits"],["Shopping","Partner offers for lifestyle and creator audiences"]],gb=[["Verified Festival Partners","Every offer is connected to the Ozilla Festival partner experience."],["Exclusive Discounts","Promo codes and limited-time benefits built for attendees."],["Premium Experience","Hotels, dining, and lifestyle offers designed around comfort and value."],["Trusted Brands","Partner profiles are presented with clear offer details and claim flow."]];function xb(){return ft.restaurants.map((e,t)=>({partner:e.name,category:"Restaurants",discount:e.discount,description:e.offer,code:e.code,validUntil:t===0?"Festival Weekend":"Limited Time",badge:t===0?"Best Offer":"Exclusive",featured:t===0}))}function bb(){return ft.hotels.slice(0,3).map((e,t)=>({partner:e.name,category:"Hotels",discount:t===0?"VIP Stay":"Partner Deal",description:e.offer,code:t===0?"OZILLA-STAY":"PARTNER",validUntil:"Ozilla 2026",badge:t===0?"VIP Deal":"Premium",featured:!1}))}function yb(){const e=[...xb(),...bb()];return n.jsxs("main",{id:"top",className:"discounts-premium",children:[n.jsxs("section",{className:"discounts-hero","aria-label":"Exclusive Festival Discounts",children:[n.jsx("div",{className:"discounts-hero-bg"}),n.jsx("div",{className:"discounts-orb discounts-orb-one"}),n.jsx("div",{className:"discounts-orb discounts-orb-two"}),n.jsxs("div",{className:"discounts-floating-badges","aria-hidden":"true",children:[n.jsx("span",{children:"50% OFF"}),n.jsx("span",{children:"VIP"}),n.jsx("span",{children:"DEALS"}),n.jsx("span",{children:"2026"})]}),n.jsxs("div",{className:"discounts-hero-content",children:[n.jsx("p",{className:"discounts-eyebrow",children:"Ozilla Festival Rewards"}),n.jsx("h1",{children:"Exclusive Member Benefits"}),n.jsx("p",{children:"Unlock premium deals, exclusive partner offers, and unforgettable savings during Ozilla Festival 2026."})]})]}),n.jsxs("section",{className:"discount-featured-offer","aria-label":"Offer of the month",children:[n.jsxs("div",{className:"discount-featured-copy",children:[n.jsx("p",{className:"discounts-eyebrow",children:"Offer Of The Month"}),n.jsx("h2",{children:"VIP festival savings made for premium guests."}),n.jsx("p",{children:"Get priority access to the best partner benefits, curated dining offers, and luxury stay deals during Ozilla Festival 2026."})]}),n.jsxs("div",{className:"discount-featured-voucher",children:[n.jsx("span",{children:"VIP OFFER"}),n.jsx("strong",{children:"UP TO 20% OFF"}),n.jsx("p",{children:"Selected partner restaurants and festival experiences."})]})]}),n.jsxs("section",{className:"discounts-categories","aria-label":"Offer categories",children:[n.jsxs("div",{className:"discounts-section-heading",children:[n.jsx("p",{className:"discounts-eyebrow",children:"VIP Benefit Categories"}),n.jsx("h2",{children:"Premium value across your complete festival journey."})]}),n.jsx("div",{className:"discount-chip-row","aria-label":"Category chips",children:tu.map(([t])=>n.jsx("span",{children:t},t))}),n.jsx("div",{className:"discount-category-grid",children:tu.map(([t,r],a)=>n.jsxs("article",{style:{"--delay":`${a*70}ms`},children:[n.jsx("span",{children:String(a+1).padStart(2,"0")}),n.jsx("h3",{children:t}),n.jsx("p",{children:r})]},t))})]}),n.jsxs("section",{className:"discount-offers-section","aria-label":"Exclusive offers",children:[n.jsxs("div",{className:"discounts-section-heading",children:[n.jsx("p",{className:"discounts-eyebrow",children:"Exclusive Partner Offers"}),n.jsx("h2",{children:"Luxury vouchers designed for Ozilla guests."})]}),n.jsx("div",{className:"discount-offer-grid",children:e.map((t,r)=>n.jsxs("article",{className:`discount-offer-card ${t.featured?"featured":""}`,style:{"--delay":`${r*80}ms`},children:[n.jsxs("div",{className:"discount-card-top",children:[n.jsx("div",{className:"discount-logo-mark","aria-hidden":"true",children:t.partner.split(" ").map(a=>a[0]).join("").slice(0,2)}),n.jsxs("div",{className:"discount-rating",children:[n.jsx("span",{children:"Exclusive"}),n.jsx("strong",{children:t.badge})]})]}),n.jsx("div",{className:"discount-badge",children:t.discount}),n.jsxs("div",{className:"discount-card-content",children:[n.jsx("p",{className:"discount-category",children:t.category}),n.jsx("h3",{children:t.partner}),n.jsx("p",{children:t.description})]}),n.jsxs("div",{className:"discount-detail-grid",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Valid Until"}),n.jsx("strong",{children:t.validUntil})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Promo Code"}),n.jsx("strong",{children:t.code})]})]}),n.jsxs("div",{className:"discount-card-actions",children:[n.jsx(B,{to:"/contact",className:"discount-action-button",children:"Claim Offer"}),n.jsx("small",{children:"Terms apply through festival partner desk."})]})]},`${t.partner}-${t.code}`))})]}),n.jsxs("section",{className:"discount-journey",children:[n.jsxs("div",{className:"discounts-section-heading",children:[n.jsx("p",{className:"discounts-eyebrow",children:"How It Works"}),n.jsx("h2",{children:"A simple claim flow for premium rewards."})]}),n.jsx("div",{className:"discount-journey-grid",children:ft.journey.map((t,r)=>n.jsxs("article",{style:{"--delay":`${r*70}ms`},children:[n.jsxs("span",{children:["Step ",r+1]}),n.jsx("strong",{children:t})]},t))})]}),n.jsxs("section",{className:"discount-benefits",children:[n.jsxs("div",{className:"discounts-section-heading",children:[n.jsx("p",{className:"discounts-eyebrow",children:"Why Choose Our Partners"}),n.jsx("h2",{children:"Trusted offers with premium festival value."})]}),n.jsx("div",{className:"discount-benefit-grid",children:gb.map(([t,r],a)=>n.jsxs("article",{style:{"--delay":`${a*75}ms`},children:[n.jsx("div",{children:String(a+1).padStart(2,"0")}),n.jsx("h3",{children:t}),n.jsx("p",{children:r})]},t))})]}),n.jsxs("section",{className:"discounts-cta",children:[n.jsx("p",{className:"discounts-eyebrow",children:"Ozilla VIP Offers"}),n.jsx("h2",{children:"Don't miss these exclusive offers."}),n.jsx("p",{children:"Take advantage of premium discounts available only during Ozilla Festival 2026."}),n.jsx("a",{href:"#top",className:"discount-action-button",children:"Explore All Offers"})]}),n.jsx("style",{children:`
        .discounts-premium {
          width: min(100%, 1680px);
          margin-inline: auto;
          position: relative;
          display: grid;
          gap: clamp(1.45rem, 3.2vw, 2.9rem);
          padding: clamp(0.35rem, 1vw, 0.75rem) clamp(0.2rem, 1vw, 0.55rem) clamp(1.4rem, 3vw, 2.4rem);
          color: #101819;
          overflow-x: clip;
        }

        .discounts-premium * {
          min-width: 0;
          box-sizing: border-box;
        }

        .discounts-premium::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 189, 89, 0.24), transparent 24rem),
            radial-gradient(circle at 88% 14%, rgba(255, 77, 46, 0.16), transparent 28rem),
            radial-gradient(circle at 52% 84%, rgba(11, 79, 76, 0.14), transparent 30rem),
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(235, 228, 216, 0.92));
        }

        .discounts-hero {
          position: relative;
          min-height: clamp(420px, 56vw, 660px);
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: clamp(24px, 4vw, 44px);
          background:
            radial-gradient(circle at 50% 34%, rgba(255, 189, 89, 0.32), transparent 20rem),
            linear-gradient(135deg, #041719, #2f1025 58%, #0b4f4c);
          box-shadow: 0 42px 120px rgba(2, 11, 13, 0.28);
          isolation: isolate;
        }

        .discounts-hero-bg {
          position: absolute;
          inset: -8%;
          z-index: -3;
          background:
            radial-gradient(circle at 26% 28%, rgba(255, 189, 89, 0.24), transparent 17rem),
            radial-gradient(circle at 72% 32%, rgba(255, 77, 46, 0.18), transparent 20rem),
            linear-gradient(135deg, rgba(2, 11, 13, 0.98), rgba(47, 16, 37, 0.9) 58%, rgba(4, 23, 25, 0.98));
          animation: discountHeroGlow 16s ease-in-out infinite alternate;
        }

        .discounts-hero::before,
        .discounts-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .discounts-hero::before {
          z-index: -2;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(255, 255, 255, 0.08) 47%, transparent 54%),
            radial-gradient(ellipse at center, transparent 28%, rgba(0, 0, 0, 0.58) 100%);
        }

        .discounts-hero::after {
          z-index: -1;
          background-image:
            linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 100%),
            linear-gradient(60deg, rgba(255, 189, 89, 0.08) 0 1px, transparent 1px 100%);
          background-size: 86px 86px;
          opacity: 0.34;
          mask-image: radial-gradient(circle at center, #000, transparent 78%);
        }

        .discounts-orb {
          position: absolute;
          width: clamp(150px, 22vw, 320px);
          aspect-ratio: 1;
          border-radius: 999px;
          filter: blur(30px);
          opacity: 0.34;
          animation: discountFloat 9s ease-in-out infinite;
        }

        .discounts-orb-one {
          left: 8%;
          top: 12%;
          background: rgba(255, 189, 89, 0.58);
        }

        .discounts-orb-two {
          right: 7%;
          bottom: 8%;
          background: rgba(255, 77, 46, 0.4);
          animation-delay: 1.2s;
        }

        .discounts-floating-badges span {
          position: absolute;
          z-index: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 68px;
          min-height: 34px;
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 189, 89, 0.28);
          color: #ffbd59;
          font-size: 0.75rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.18);
          animation: discountBadgeFloat 7s ease-in-out infinite;
        }

        .discounts-floating-badges span:nth-child(1) { left: 10%; top: 22%; }
        .discounts-floating-badges span:nth-child(2) { right: 13%; top: 21%; animation-delay: 1s; }
        .discounts-floating-badges span:nth-child(3) { left: 16%; bottom: 20%; animation-delay: 1.8s; }
        .discounts-floating-badges span:nth-child(4) { right: 18%; bottom: 18%; animation-delay: 2.4s; }

        .discounts-hero-content {
          width: min(100%, 1000px);
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 6vw, 4.5rem);
          color: #fff;
          text-align: center;
          animation: discountRise 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .discounts-eyebrow {
          margin-bottom: 0.75rem;
          color: #ffbd59;
          font-size: clamp(0.72rem, 1.2vw, 0.86rem);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .discounts-hero h1 {
          font-size: clamp(3rem, 8.2vw, 7.2rem);
          line-height: 0.88;
          letter-spacing: -0.075em;
          text-transform: uppercase;
          text-shadow: 0 22px 62px rgba(0, 0, 0, 0.4), 0 0 42px rgba(255, 189, 89, 0.12);
          overflow-wrap: normal;
          word-break: normal;
          text-wrap: balance;
        }

        .discounts-hero p:not(.discounts-eyebrow) {
          max-width: 760px;
          margin: 1.25rem auto 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: clamp(1rem, 2.3vw, 1.42rem);
          line-height: 1.55;
        }

        .discounts-categories,
        .discount-featured-offer,
        .discount-offers-section,
        .discount-journey,
        .discount-benefits,
        .discounts-cta {
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.82), rgba(255, 255, 255, 0.56)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.14), transparent 18rem);
          box-shadow: 0 24px 80px rgba(2, 11, 13, 0.1);
          backdrop-filter: blur(18px);
        }

        .discounts-categories,
        .discount-featured-offer,
        .discount-offers-section,
        .discount-journey,
        .discount-benefits {
          padding: clamp(1.1rem, 4vw, 2.4rem);
        }

        .discount-featured-offer {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
          gap: clamp(1rem, 4vw, 2.5rem);
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 18%, rgba(255, 189, 89, 0.32), transparent 18rem),
            radial-gradient(circle at 8% 80%, rgba(255, 77, 46, 0.16), transparent 18rem),
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(47, 16, 37, 0.9));
          color: #fff;
        }

        .discount-featured-offer::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, 0.1), transparent 58%);
          animation: discountGlowSweep 8s ease-in-out infinite;
        }

        .discount-featured-copy,
        .discount-featured-voucher {
          position: relative;
          z-index: 1;
        }

        .discount-featured-copy h2 {
          max-width: 820px;
          color: #fff;
          font-size: clamp(2.1rem, 5.6vw, 4.8rem);
          line-height: 0.95;
          letter-spacing: -0.065em;
          text-wrap: balance;
        }

        .discount-featured-copy p:not(.discounts-eyebrow) {
          max-width: 640px;
          margin-top: 0.9rem;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(0.98rem, 1.7vw, 1.15rem);
          line-height: 1.7;
        }

        .discount-featured-voucher {
          display: grid;
          gap: 0.85rem;
          padding: clamp(1.1rem, 3vw, 1.6rem);
          border-radius: 28px;
          border: 1px solid rgba(255, 189, 89, 0.34);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.07)),
            radial-gradient(circle at 20% 0%, rgba(255, 189, 89, 0.25), transparent 13rem);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .discount-featured-voucher span {
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00);
          color: #101819;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 12px 32px rgba(255, 138, 0, 0.32);
        }

        .discount-featured-voucher strong {
          color: #fff;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          overflow-wrap: anywhere;
        }

        .discount-featured-voucher p {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.55;
        }

        .discounts-section-heading {
          max-width: 820px;
          margin-bottom: clamp(1rem, 3vw, 1.8rem);
        }

        .discount-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: clamp(1rem, 2.4vw, 1.45rem);
        }

        .discount-chip-row span {
          display: inline-flex;
          align-items: center;
          min-height: 36px;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(11, 79, 76, 0.12);
          color: #294646;
          font-size: 0.84rem;
          font-weight: 850;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }

        .discount-chip-row span:hover {
          transform: translateY(-2px);
          background: rgba(255, 176, 0, 0.18);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 12px 26px rgba(255, 138, 0, 0.14);
        }

        .discounts-section-heading h2,
        .discounts-cta h2 {
          color: #101819;
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .discount-category-grid,
        .discount-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: clamp(0.8rem, 1.8vw, 1.1rem);
        }

        .discount-category-grid article,
        .discount-benefit-grid article,
        .discount-journey-grid article {
          position: relative;
          overflow: hidden;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.52));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: 0 16px 42px rgba(2, 11, 13, 0.08);
          animation: discountRise 620ms ease both;
          animation-delay: var(--delay);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .discount-category-grid article:hover,
        .discount-benefit-grid article:hover,
        .discount-journey-grid article:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 176, 0, 0.28);
          box-shadow: 0 22px 56px rgba(2, 11, 13, 0.12);
        }

        .discount-category-grid span,
        .discount-benefit-grid div {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 0.8rem;
          border-radius: 999px;
          background: #041719;
          color: #ffbd59;
          font-weight: 950;
        }

        .discount-category-grid h3,
        .discount-benefit-grid h3 {
          color: #101819;
          font-size: 1.12rem;
          margin-bottom: 0.35rem;
        }

        .discount-category-grid p,
        .discount-benefit-grid p {
          color: #55706f;
          line-height: 1.55;
          font-size: 0.93rem;
        }

        .discount-offer-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(250px, 1fr));
          gap: clamp(1rem, 2.4vw, 1.5rem);
        }

        .discount-offer-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 100%;
          overflow: hidden;
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border-radius: 32px;
          border: 1px solid rgba(11, 79, 76, 0.14);
          background:
            linear-gradient(145deg, rgba(255, 251, 245, 0.94), rgba(255, 255, 255, 0.68)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.18), transparent 17rem),
            radial-gradient(circle at 100% 100%, rgba(11, 79, 76, 0.1), transparent 18rem);
          box-shadow: 0 26px 82px rgba(2, 11, 13, 0.13);
          backdrop-filter: blur(18px);
          animation: discountRise 680ms ease both;
          animation-delay: var(--delay);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .discount-category-grid article,
        .discount-benefit-grid article,
        .discount-journey-grid article,
        .discount-offer-card {
          min-width: 0;
        }

        .discount-offer-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), transparent 25%, transparent 72%, rgba(255, 189, 89, 0.24));
        }

        .discount-offer-card .discount-badge {
          animation: discountBadgePulse 3.4s ease-in-out infinite;
        }

        .discount-offer-card::after {
          content: '';
          position: absolute;
          inset: auto 10% -34px 10%;
          height: 58px;
          border-radius: 999px;
          background: rgba(11, 79, 76, 0.2);
          filter: blur(24px);
          opacity: 0.55;
          transition: opacity 240ms ease, transform 240ms ease;
        }

        .discount-offer-card.featured {
          border-color: rgba(255, 176, 0, 0.5);
          box-shadow: 0 34px 100px rgba(2, 11, 13, 0.16), 0 0 0 1px rgba(255, 176, 0, 0.18);
        }

        .discount-offer-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 176, 0, 0.42);
          box-shadow: 0 36px 110px rgba(2, 11, 13, 0.18);
        }

        .discount-offer-card:hover::after {
          opacity: 0.9;
          transform: scaleX(1.05);
        }

        .discount-card-top,
        .discount-card-content,
        .discount-detail-grid,
        .discount-card-actions,
        .discount-badge {
          position: relative;
          z-index: 1;
        }

        .discount-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .discount-logo-mark {
          width: clamp(50px, 5vw, 58px);
          height: clamp(50px, 5vw, 58px);
          display: grid;
          place-items: center;
          border-radius: 18px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255, 189, 89, 0.55), transparent 58%),
            linear-gradient(145deg, #041719, #0b4f4c);
          color: #ffbd59;
          font-weight: 950;
          letter-spacing: 0.04em;
          box-shadow: 0 16px 38px rgba(2, 11, 13, 0.2);
        }

        .discount-rating {
          display: grid;
          justify-items: end;
          gap: 0.12rem;
          color: #55706f;
          font-size: 0.72rem;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .discount-rating strong {
          color: #9a4f00;
          font-size: 0.9rem;
          letter-spacing: 0;
        }

        .discount-badge {
          width: fit-content;
          padding: 0.65rem 0.95rem;
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent 34%),
            linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          max-width: 100%;
          text-align: center;
          box-shadow: 0 14px 36px rgba(255, 138, 0, 0.3), 0 0 32px rgba(255, 189, 89, 0.2);
        }

        .discount-category {
          color: #9a4f00;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .discount-card-content h3 {
          margin-top: 0.22rem;
          color: #101819;
          font-size: clamp(1.55rem, 3vw, 2.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
          overflow-wrap: anywhere;
        }

        .discount-card-content p {
          margin-top: 0.65rem;
          color: #55706f;
          line-height: 1.65;
          text-wrap: pretty;
        }

        .discount-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: auto;
        }

        .discount-detail-grid div {
          padding: 0.78rem;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.68), rgba(255, 250, 242, 0.5));
          border: 1px solid rgba(11, 79, 76, 0.12);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
        }

        .discount-detail-grid span {
          display: block;
          margin-bottom: 0.22rem;
          color: #748987;
          font-size: 0.7rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .discount-detail-grid strong {
          color: #101819;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .discount-card-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        .discount-card-actions small {
          color: #55706f;
          font-weight: 700;
          line-height: 1.45;
        }

        .discount-action-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0.8rem 1.15rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          color: #101819;
          font-weight: 950;
          box-shadow: 0 18px 46px rgba(255, 111, 26, 0.3);
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }

        .discount-action-button::before {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-115%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
          transition: transform 560ms ease;
        }

        .discount-action-button:hover {
          transform: translateY(-3px);
          filter: saturate(1.08);
          box-shadow: 0 24px 62px rgba(255, 111, 26, 0.4);
        }

        .discount-action-button:hover::before {
          transform: translateX(115%) skewX(-18deg);
        }

        .discount-journey-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .discount-journey-grid span {
          display: block;
          margin-bottom: 0.3rem;
          color: #9a4f00;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .discount-journey-grid strong {
          color: #101819;
          font-size: 1rem;
        }

        .discounts-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(1.5rem, 5vw, 3.2rem);
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f);
          color: #fff;
        }

        .discounts-cta::before {
          content: '';
          position: absolute;
          inset: -30%;
          background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.09), transparent 58%);
          animation: discountGlowSweep 8s ease-in-out infinite;
        }

        .discounts-cta > * {
          position: relative;
          z-index: 1;
        }

        .discounts-cta h2 {
          color: #fff;
        }

        .discounts-cta > p:not(.discounts-eyebrow) {
          max-width: 620px;
          margin: 0.85rem auto 0;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.65;
        }

        .discounts-premium .discounts-cta {
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 176, 0, 0.34), transparent 22rem),
            radial-gradient(circle at 90% 90%, rgba(255, 77, 46, 0.18), transparent 18rem),
            linear-gradient(135deg, #041719, #073332 58%, #39132f) !important;
        }

        .discounts-premium .discounts-cta .discounts-eyebrow {
          color: #ffbd59 !important;
        }

        .discounts-premium .discounts-cta h2 {
          color: #ffffff !important;
          text-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
        }

        .discounts-premium .discounts-cta > p:not(.discounts-eyebrow) {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .discounts-premium .discounts-cta .discount-action-button {
          color: #101819 !important;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e) !important;
        }

        @keyframes discountRise {
          from {
            opacity: 0;
            transform: translateY(26px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes discountHeroGlow {
          from { transform: scale(1); filter: hue-rotate(0deg); }
          to { transform: scale(1.08) translate3d(-1%, -1%, 0); filter: hue-rotate(-8deg); }
        }

        @keyframes discountFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes discountBadgeFloat {
          0%, 100% { opacity: 0.42; transform: translateY(0) rotate(-2deg); }
          50% { opacity: 1; transform: translateY(-16px) rotate(2deg); }
        }

        @keyframes discountGlowSweep {
          0%, 100% { transform: translateX(-18%) rotate(0deg); opacity: 0.55; }
          50% { transform: translateX(18%) rotate(4deg); opacity: 0.95; }
        }

        @keyframes discountBadgePulse {
          0%, 100% { box-shadow: 0 14px 36px rgba(255, 138, 0, 0.3), 0 0 32px rgba(255, 189, 89, 0.2); }
          50% { box-shadow: 0 18px 46px rgba(255, 138, 0, 0.42), 0 0 44px rgba(255, 189, 89, 0.32); }
        }

        @media (min-width: 1500px) {
          .discount-offer-grid {
            grid-template-columns: repeat(4, minmax(250px, 1fr));
          }

          .discount-category-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }

          .discount-benefit-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .discounts-premium {
            gap: 3rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1499px) {
          .discount-offer-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1200px) {
          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .discount-journey-grid {
            grid-template-columns: repeat(3, minmax(160px, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .discount-featured-offer {
            grid-template-columns: 1fr;
          }

          .discounts-hero {
            min-height: clamp(390px, 62vw, 560px);
          }

          .discounts-floating-badges span {
            opacity: 0.7;
            transform: scale(0.92);
          }

          .discounts-floating-badges span:nth-child(1) { left: 7%; top: 16%; }
          .discounts-floating-badges span:nth-child(2) { right: 8%; top: 16%; }
          .discounts-floating-badges span:nth-child(3) { left: 8%; bottom: 13%; }
          .discounts-floating-badges span:nth-child(4) { right: 10%; bottom: 13%; }
        }

        @media (min-width: 768px) and (max-width: 920px) {
          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid {
            gap: 0.85rem;
          }

          .discount-offer-card {
            padding: 1rem;
            border-radius: 26px;
          }

          .discount-card-top {
            gap: 0.75rem;
          }
        }

        @media (max-width: 767px) {
          .discounts-premium {
            gap: 1.15rem;
            padding-inline: 0;
          }

          .discounts-hero {
            min-height: clamp(430px, 105vw, 540px);
            border-radius: 26px;
          }

          .discounts-hero-content {
            padding: clamp(1.1rem, 5vw, 1.7rem);
          }

          .discounts-hero h1 {
            font-size: clamp(2.35rem, 13.6vw, 4.5rem);
            line-height: 0.93;
            letter-spacing: -0.06em;
          }

          .discounts-hero p:not(.discounts-eyebrow) {
            font-size: clamp(0.95rem, 4vw, 1.12rem);
          }

          .discounts-categories,
          .discount-featured-offer,
          .discount-offers-section,
          .discount-journey,
          .discount-benefits,
          .discounts-cta {
            border-radius: 24px;
          }

          .discounts-categories,
          .discount-featured-offer,
          .discount-offers-section,
          .discount-journey,
          .discount-benefits {
            padding: clamp(1rem, 5vw, 1.35rem);
          }

          .discount-featured-copy h2 {
            font-size: clamp(2rem, 10vw, 3.25rem);
            line-height: 0.98;
          }

          .discount-featured-voucher {
            border-radius: 22px;
          }

          .discount-offer-grid,
          .discount-category-grid,
          .discount-benefit-grid,
          .discount-journey-grid {
            grid-template-columns: 1fr;
          }

          .discount-offer-card {
            border-radius: 24px;
            padding: clamp(0.9rem, 5vw, 1.1rem);
          }

          .discount-card-top {
            align-items: flex-start;
          }

          .discount-card-content h3 {
            font-size: clamp(1.45rem, 8vw, 2.25rem);
          }

          .discount-detail-grid {
            grid-template-columns: 1fr;
          }

          .discount-action-button {
            width: 100%;
          }

          .discount-chip-row span {
            flex: 1 1 calc(50% - 0.55rem);
            justify-content: center;
          }

          .discounts-floating-badges span {
            min-width: 54px;
            min-height: 30px;
            padding: 0.34rem 0.55rem;
            font-size: 0.64rem;
          }

          .discount-card-actions small {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .discounts-hero {
            min-height: 430px;
          }

          .discounts-hero h1 {
            font-size: clamp(2.08rem, 12.8vw, 3.45rem);
            letter-spacing: -0.05em;
          }

          .discounts-hero p:not(.discounts-eyebrow) {
            max-width: 30ch;
          }

          .discounts-eyebrow {
            letter-spacing: 0.14em;
          }

          .discounts-section-heading h2,
          .discounts-cta h2 {
            font-size: clamp(1.8rem, 10vw, 2.65rem);
            line-height: 1;
          }

          .discount-card-top {
            gap: 0.65rem;
          }

          .discount-rating {
            font-size: 0.66rem;
          }
        }

        @media (max-width: 360px) {
          .discounts-hero {
            min-height: 410px;
          }

          .discount-offer-card {
            padding: 0.78rem;
          }

          .discount-card-top {
            display: grid;
          }

          .discount-rating {
            justify-items: start;
          }

          .discount-chip-row span {
            flex-basis: 100%;
          }

          .discount-badge,
          .discount-featured-voucher span {
            width: 100%;
            justify-content: center;
          }
        }

        @media (hover: none) {
          .discount-offer-card:hover,
          .discount-category-grid article:hover,
          .discount-benefit-grid article:hover,
          .discount-journey-grid article:hover,
          .discount-action-button:hover {
            transform: none;
          }

          .discount-action-button:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .discounts-hero-bg,
          .discounts-orb,
          .discounts-floating-badges span,
          .discounts-hero-content,
          .discount-offer-card,
          .discount-category-grid article,
          .discount-benefit-grid article,
          .discount-journey-grid article,
          .discounts-cta::before {
            animation: none;
          }
        }
      `})]})}function vb(){return n.jsxs("div",{children:[n.jsx(Ct,{title:"Become A Partner",subtitle:"Partner Benefits and Admin Scope"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Why Partner With OZilla"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",children:ft.partnerBenefits.map(e=>n.jsx("div",{className:"bg-purple-50 rounded-lg p-4 text-center",children:n.jsx("p",{className:"font-semibold text-gray-800",children:e})},e))})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 mb-6",children:[n.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Admin Panel Requirements"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Admin should manage restaurants, hotels, discounts, images, offers, partner details and website content through a simple operational dashboard."}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[n.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:"Restaurant Partner Management"}),n.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:"Hotel and Discount Management"}),n.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:"Offers, Media and Content Control"})]})]}),n.jsxs("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-8 text-white",children:[n.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Call To Action"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:ft.callToActions.map(e=>n.jsx("div",{className:"bg-white/20 rounded-lg p-4 font-semibold text-center",children:e},e))})]})]})}const oh="ozilla_local_tickets";let yr=!1;const lh={regular:1200,vip:1,premium:120},wb=["pending","payment_submitted","approved","confirmed"];function Yi(e){const t=String(e||"regular").toLowerCase().trim();return t==="general"?"regular":lh[t]?t:"regular"}function Ka(){const e=Object.entries(lh).reduce((a,[i,s])=>(a[i]={type:i,label:i==="regular"?"General":i==="vip"?"VIP":"Premium",capacity:s,sold:0,remaining:s,soldOut:!1},a),{});for(const a of lt()){if(!wb.includes(a.status))continue;const i=Yi(a.ticketType);e[i].sold+=Number(a.quantity)||1}let t=0,r=0;for(const a of Object.values(e))a.sold=Math.min(a.sold,a.capacity),a.remaining=Math.max(0,a.capacity-a.sold),a.soldOut=a.remaining<=0,t+=a.capacity,r+=a.sold;return{capacity:t,sold:r,remaining:Math.max(0,t-r),soldOut:Object.values(e).every(a=>a.soldOut),byType:e,mode:"local-fallback"}}function kb(e){var t,r;return!(e!=null&&e.response)&&((e==null?void 0:e.code)==="ERR_NETWORK"||((t=e==null?void 0:e.message)==null?void 0:t.includes("Network Error"))||((r=e==null?void 0:e.message)==null?void 0:r.includes("ECONNREFUSED")))}function Ur(e){return kb(e)?(yr=!0,!0):!1}function lt(){try{const e=localStorage.getItem(oh),t=e?JSON.parse(e):[];return Array.isArray(t)?t.map(r=>(r==null?void 0:r.status)==="payment_submitted"?{...r,status:"approved",generatedAt:r.generatedAt||r.updatedAt||new Date().toISOString(),verifiedAt:r.verifiedAt||null}:r):[]}catch{return[]}}function Br(e){localStorage.setItem(oh,JSON.stringify(e))}function jb(e){const t=String(e||""),r=t.startsWith("local.")?t.slice(6):t;try{return JSON.parse(atob(r))}catch{return null}}function Tt(){const e=jb(Te.getToken());return{userId:String((e==null?void 0:e.sub)||"").trim(),email:String((e==null?void 0:e.email)||"").toLowerCase().trim()}}function qt(e,t){if(!(t!=null&&t.email)&&!(t!=null&&t.userId))return!1;const r=String((e==null?void 0:e.ownerEmail)||"").toLowerCase().trim(),a=String((e==null?void 0:e.ownerId)||"").trim(),i=String((e==null?void 0:e.email)||"").toLowerCase().trim();return r&&t.email?r===t.email:a&&t.userId?a===t.userId:t.email?i===t.email:!1}function ru(e={}){const t=`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=((e==null?void 0:e.name)||`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`).trim()||"Demo User",a={id:"oz2026",name:"Ozilla Festival 2026",date:"2026-11-01",time:"08:00 PM",location:"Lahore"},i=new Date().toISOString(),s=Tt(),o=String((e==null?void 0:e.email)||(s==null?void 0:s.email)||"local@ozillafestival.com").toLowerCase().trim();return{id:t,ticketId:`OZILLA-${t.slice(-8).toUpperCase()}`,uniqueTicketId:`OZILLA-${t.slice(-8).toUpperCase()}`,ownerId:(s==null?void 0:s.userId)||"",ownerEmail:o,fullName:r,name:r,email:o,phone:String((e==null?void 0:e.phone)||"+923000000000").trim(),idCardNumber:String((e==null?void 0:e.idCardNumber)||"").trim(),festivalDay:(e==null?void 0:e.festivalDay)==="day2"?"day2":"day1",eventId:a.id,eventName:a.name,eventDate:a.date,eventTime:a.time,location:a.location,ticketType:Yi(e==null?void 0:e.ticketType),quantity:Number(e==null?void 0:e.quantity)||1,status:"pending",createdAt:i,updatedAt:i}}const pt={async getAvailability(){if(yr)return Ka();try{return(await J.get("/tickets/availability")).data}catch(e){if(Ur(e))return Ka();throw e}},async getMyTickets(){if(yr){const e=Tt();return lt().filter(t=>qt(t,e))}try{return(await J.get("/tickets/my-tickets")).data}catch(e){if(Ur(e)){const t=Tt();return lt().filter(r=>qt(r,t))}throw e}},async requestTicket(e){if(yr){const t=Ka(),r=Yi(e==null?void 0:e.ticketType),a=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),i=t.byType[r];if(t.soldOut||!i||i.remaining<=0){const c=new Error("Tickets are sold out. The ticket portal is currently locked.");throw c.response={status:409,data:{message:c.message,soldOut:!0,availability:t}},c}if(a>i.remaining){const c=new Error(`Only ${i.remaining} ${i.label} ticket${i.remaining===1?"":"s"} remaining.`);throw c.response={status:409,data:{message:c.message,soldOut:!1,availability:t}},c}const s=lt(),o=ru(e);return Br([o,...s]),{...o,ibanNumber:"PK00-OZIL-1234567890",mode:"local-fallback"}}try{return(await J.post("/tickets/request",e)).data}catch(t){if(Ur(t)){const r=Ka(),a=Yi(e==null?void 0:e.ticketType),i=Math.max(1,Math.min(10,Number(e==null?void 0:e.quantity)||1)),s=r.byType[a];if(r.soldOut||!s||s.remaining<=0){const l=new Error("Tickets are sold out. The ticket portal is currently locked.");throw l.response={status:409,data:{message:l.message,soldOut:!0,availability:r}},l}if(i>s.remaining){const l=new Error(`Only ${s.remaining} ${s.label} ticket${s.remaining===1?"":"s"} remaining.`);throw l.response={status:409,data:{message:l.message,soldOut:!1,availability:r}},l}const o=lt(),c=ru(e);return Br([c,...o]),{...c,ibanNumber:"PK00-OZIL-1234567890",mode:"local-fallback"}}throw t}},async getTicketById(e){if(yr){const t=Tt(),r=lt().find(a=>a.id===e&&qt(a,t));if(!r){const a=new Error("Ticket not found");throw a.response={data:{message:"Ticket not found"}},a}return r}try{return(await J.get(`/tickets/view/${e}`)).data}catch(t){if(Ur(t)){const r=Tt(),a=lt().find(i=>i.id===e&&qt(i,r));if(!a){const i=new Error("Ticket not found");throw i.response={data:{message:"Ticket not found"}},i}return a}throw t}},async uploadPaymentProof(e,t){if(yr){const r=lt(),a=Tt(),i=r.findIndex(o=>o.id===e&&qt(o,a));if(i===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const s={...r[i],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return r[i]=s,Br(r),{message:"Payment proof uploaded and ticket generated successfully",ticket:s,mode:"local-fallback"}}try{return(await J.post(`/tickets/${e}/payment-proof`,t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(r){if(Ur(r)){const a=lt(),i=Tt(),s=a.findIndex(c=>c.id===e&&qt(c,i));if(s===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const o={...a[s],status:"approved",generatedAt:new Date().toISOString(),verifiedAt:null,updatedAt:new Date().toISOString(),paymentProofPath:"local-fallback-proof"};return a[s]=o,Br(a),{message:"Payment proof uploaded and ticket generated successfully",ticket:o,mode:"local-fallback"}}throw r}},async verifyTicket(e,t){return(await J.post(`/tickets/${e}/verify`,{qrData:t})).data},async verifyTicketByQr(e){return(await J.post("/tickets/verify-qr",{qrData:e})).data},async getPendingTicketsAdmin(){return(await J.get("/tickets/admin/pending")).data},async decideTicketAdmin(e,t){return(await J.post(`/tickets/admin/${e}/decision`,{decision:t})).data},async cancelTicket(e){if(yr){const t=lt(),r=Tt(),a=t.findIndex(o=>o.id===e&&qt(o,r));if(a===-1){const o=new Error("Ticket not found");throw o.response={data:{message:"Ticket not found"}},o}const i=t[a];if(!["pending","payment_submitted"].includes(i.status)){const o=new Error(`Ticket cannot be cancelled from status ${i.status}`);throw o.response={data:{message:`Ticket cannot be cancelled from status ${i.status}`}},o}const s={...i,status:"cancelled",updatedAt:new Date().toISOString()};return t[a]=s,Br(t),{message:"Ticket cancelled successfully",ticket:s,mode:"local-fallback"}}try{return(await J.post(`/tickets/${e}/cancel`)).data}catch(t){if(Ur(t)){const r=lt(),a=Tt(),i=r.findIndex(c=>c.id===e&&qt(c,a));if(i===-1){const c=new Error("Ticket not found");throw c.response={data:{message:"Ticket not found"}},c}const s=r[i];if(!["pending","payment_submitted"].includes(s.status)){const c=new Error(`Ticket cannot be cancelled from status ${s.status}`);throw c.response={data:{message:`Ticket cannot be cancelled from status ${s.status}`}},c}const o={...s,status:"cancelled",updatedAt:new Date().toISOString()};return r[i]=o,Br(r),{message:"Ticket cancelled successfully",ticket:o,mode:"local-fallback"}}throw t}}};function gs(){const[e,t]=k.useState([]),[r,a]=k.useState(!1),[i,s]=k.useState(null),o=k.useCallback(async()=>{a(!0);try{const u=await pt.getMyTickets();t(u)}catch(u){s(u.message)}finally{a(!1)}},[]),c=k.useCallback(async u=>{a(!0);try{const p=await pt.requestTicket(u);return await o(),p}catch(p){throw s(p.message),p}finally{a(!1)}},[o]),l=k.useCallback(async u=>{a(!0);try{return await pt.getTicketById(u)}catch(p){throw s(p.message),p}finally{a(!1)}},[]),d=k.useCallback(async(u,p)=>{a(!0);try{const f=new FormData;f.append("paymentProof",p);const b=await pt.uploadPaymentProof(u,f);return await o(),b}catch(f){throw s(f.message),f}finally{a(!1)}},[o]);return{tickets:e,loading:r,error:i,fetchMyTickets:o,requestTicket:c,getTicketById:l,uploadPaymentProof:d}}function qi(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Nb(){const{user:e}=bt(),{tickets:t,loading:r,fetchMyTickets:a}=gs();k.useEffect(()=>{a()},[a]);const i=k.useMemo(()=>{const l={total:t.length,pending:0,payment_submitted:0,approved:0,rejected:0,cancelled:0};for(const d of t)l[d.status]!==void 0&&(l[d.status]+=1);return l},[t]),s=new Date,o=t.filter(l=>new Date(l.eventDate)>=s),c=t.filter(l=>new Date(l.eventDate)<s);return n.jsxs("div",{children:[n.jsx(Ct,{title:"My Account",subtitle:"Profile, ticket status, and event timeline"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-3",children:"Profile"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Name:"})," ",(e==null?void 0:e.name)||`${(e==null?void 0:e.firstName)||""} ${(e==null?void 0:e.lastName)||""}`.trim()||"-"]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Email:"})," ",(e==null?void 0:e.email)||"-"]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Phone:"})," ",(e==null?void 0:e.phone)||"-"]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Role:"})," ",(e==null?void 0:e.role)||"user"]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6",children:[n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Total"}),n.jsx("p",{className:"text-2xl font-bold",children:i.total})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Pending"}),n.jsx("p",{className:"text-2xl font-bold",children:i.pending})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Payment"}),n.jsx("p",{className:"text-2xl font-bold",children:i.payment_submitted})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Approved"}),n.jsx("p",{className:"text-2xl font-bold",children:i.approved})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Rejected"}),n.jsx("p",{className:"text-2xl font-bold",children:i.rejected})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4",children:[n.jsx("p",{className:"text-sm text-gray-600",children:"Cancelled"}),n.jsx("p",{className:"text-2xl font-bold",children:i.cancelled})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-3",children:"Upcoming Events"}),r?n.jsx("p",{className:"text-gray-600",children:"Loading..."}):o.length===0?n.jsx("p",{className:"text-gray-600",children:"No upcoming events."}):n.jsx("div",{className:"space-y-3",children:o.map(l=>n.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[n.jsx("p",{className:"font-semibold text-gray-800",children:l.eventName}),n.jsxs("p",{className:"text-sm text-gray-600",children:[qi(l.eventDate)," - ",l.eventTime]}),n.jsxs("p",{className:"text-sm text-gray-600",children:["Status: ",n.jsx("span",{className:"font-semibold",children:l.status})]})]},l.id))})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-3",children:"Past Events"}),r?n.jsx("p",{className:"text-gray-600",children:"Loading..."}):c.length===0?n.jsx("p",{className:"text-gray-600",children:"No past events."}):n.jsx("div",{className:"space-y-3",children:c.map(l=>n.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[n.jsx("p",{className:"font-semibold text-gray-800",children:l.eventName}),n.jsxs("p",{className:"text-sm text-gray-600",children:[qi(l.eventDate)," - ",l.eventTime]}),n.jsxs("p",{className:"text-sm text-gray-600",children:["Status: ",n.jsx("span",{className:"font-semibold",children:l.status})]})]},l.id))})]})]})]})}const eo={regular:{label:"General",value:"regular",price:5e3,seats:"1,200+",benefits:["Festival entry","Food court access","Partner discount offers"]},vip:{label:"VIP",value:"vip",price:15e3,seats:"320",benefits:["Priority entry","Premium seating","Celebrity performance zone"]},premium:{label:"Premium",value:"premium",price:25e3,seats:"120",benefits:["VIP lounge","Premium seating","Festival merchandise"]}};function Sb(e=""){const t=String(e).trim().split(/\s+/).filter(Boolean);return t.length===0?{firstName:"",lastName:""}:{firstName:t[0],lastName:t.slice(1).join(" ")}}function Eb({onSubmit:e,loading:t,profileDefaults:r,onBookingChange:a,availability:i,availabilityLoading:s}){const o=k.useMemo(()=>{const I=Sb(r==null?void 0:r.name);return{firstName:(r==null?void 0:r.firstName)||I.firstName||"",lastName:(r==null?void 0:r.lastName)||I.lastName||"",email:(r==null?void 0:r.email)||"",phone:(r==null?void 0:r.phone)||""}},[r]),[c,l]=k.useState(1),[d,u]=k.useState(""),[p,f]=k.useState({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:"",lastName:"",email:"",phone:""});k.useEffect(()=>{f(I=>({...I,firstName:o.firstName||I.firstName,lastName:o.lastName||I.lastName,email:o.email||I.email,phone:o.phone||I.phone}))},[o]);const b=I=>{var H;return(H=i==null?void 0:i.byType)==null?void 0:H[I]},x=I=>{var H;return!!((H=b(I))!=null&&H.soldOut)},w=eo[p.ticketType],v=b(p.ticketType),m=Number.isFinite(v==null?void 0:v.remaining)?v.remaining:null,h=x(p.ticketType),g=Math.max(1,Math.min(10,m||10)),y=Number(p.quantity)||1,S=w.price*y,N=Math.round(S*.03),C=p.ticketType==="premium"?2500:0,P=S+N-C,U=`${o.firstName} ${o.lastName}`.trim()||(r==null?void 0:r.email);k.useEffect(()=>{a==null||a({ticketType:w.label,day:p.festivalDay==="day1"?"Day 1":"Day 2",quantity:y,subtotal:S,serviceFee:N,discount:C,total:P,benefits:w.benefits})},[C,p.festivalDay,a,y,w,N,S,P]),k.useEffect(()=>{if(!(i!=null&&i.byType)||!h)return;const I=Object.values(eo).find(H=>!x(H.value));I&&f(H=>({...H,ticketType:I.value,quantity:1}))},[i,h]),k.useEffect(()=>{y>g&&f(I=>({...I,quantity:g}))},[g,y]);const R=I=>{f(H=>({...H,[I.target.name]:I.target.value})),I.target.name==="idCardNumber"&&u("")},D=()=>!!(p.firstName&&p.lastName&&p.email&&p.phone),ee=()=>{const I=String(p.idCardNumber||"").trim(),H=/^(?:\d{13}|\d{5}-\d{7}-\d{1})$/.test(I);return u(H?"":"Use 13 digits or format XXXXX-XXXXXXX-X."),H},E=()=>{c===1&&!D()||c===2&&(h||!ee())||l(I=>Math.min(3,I+1))},A=I=>{if(I.preventDefault(),h||!D()||!ee()){l(D()?2:1);return}e({...p,quantity:y,name:`${p.firstName} ${p.lastName}`.trim()})},q=()=>{l(1),u(""),f({idCardNumber:"",festivalDay:"day1",ticketType:"regular",quantity:1,firstName:o.firstName||"",lastName:o.lastName||"",email:o.email||"",phone:o.phone||""})};return n.jsxs("form",{onSubmit:A,className:"ticket-wizard-form",children:[n.jsx("div",{className:"ticket-form-stepper","aria-label":"Ticket form steps",children:["Personal Information","Ticket Information","Review & Confirm"].map((I,H)=>n.jsxs("button",{type:"button",className:c===H+1?"is-active":c>H+1?"is-complete":"",onClick:()=>l(H+1),children:[n.jsx("span",{children:H+1}),I]},I))}),U&&n.jsxs("div",{className:"ticket-login-chip",children:[n.jsx("span",{children:"OK"}),"Logged in as ",U]}),c===1&&n.jsxs("section",{className:"ticket-form-panel",children:[n.jsxs("div",{className:"ticket-panel-heading",children:[n.jsx("p",{children:"Step 1"}),n.jsx("h3",{children:"Personal Information"})]}),n.jsxs("div",{className:"ticket-input-grid",children:[n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"First Name"}),n.jsx("input",{type:"text",name:"firstName",value:p.firstName,onChange:R,required:!0})]}),n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"Last Name"}),n.jsx("input",{type:"text",name:"lastName",value:p.lastName,onChange:R,required:!0})]}),n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"Email Address"}),n.jsx("input",{type:"email",name:"email",value:p.email,onChange:R,required:!0})]}),n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",value:p.phone,onChange:R,required:!0})]})]})]}),c===2&&n.jsxs("section",{className:"ticket-form-panel",children:[n.jsxs("div",{className:"ticket-panel-heading",children:[n.jsx("p",{children:"Step 2"}),n.jsx("h3",{children:"Ticket Information"})]}),n.jsx("div",{className:"ticket-option-grid",role:"radiogroup","aria-label":"Ticket type",children:Object.values(eo).map(I=>{const H=b(I.value),z=!!(H!=null&&H.soldOut),F=s?"Checking availability...":H?z?"Sold out":`${H.remaining.toLocaleString()} seats available`:`${I.seats} seats available`;return n.jsxs("button",{type:"button",disabled:z,"aria-disabled":z,className:`ticket-option-card ${p.ticketType===I.value?"is-selected":""} ${z?"is-sold-out":""}`,onClick:()=>{z||f(M=>({...M,ticketType:I.value,quantity:1}))},children:[n.jsx("span",{children:I.label}),n.jsxs("strong",{children:["PKR ",I.price.toLocaleString()]}),n.jsx("small",{children:F})]},I.value)})}),n.jsxs("div",{className:"ticket-input-grid",children:[n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"Festival Day"}),n.jsxs("select",{name:"festivalDay",value:p.festivalDay,onChange:R,required:!0,children:[n.jsx("option",{value:"day1",children:"Day 1 - November 1, 2026"}),n.jsx("option",{value:"day2",children:"Day 2 - November 2, 2026"})]})]}),n.jsxs("label",{className:"ticket-input-wrap",children:[n.jsx("span",{children:"Quantity"}),n.jsx("input",{type:"number",name:"quantity",value:p.quantity,onChange:R,min:"1",max:g,disabled:h,required:!0})]}),n.jsxs("label",{className:"ticket-input-wrap ticket-input-wide",children:[n.jsx("span",{children:"ID Card Number (CNIC / National ID)"}),n.jsx("input",{type:"text",name:"idCardNumber",value:p.idCardNumber,onChange:R,placeholder:"35202-1234567-1",pattern:"(?:\\d{13}|\\d{5}-\\d{7}-\\d{1})",title:"Use 13 digits or format XXXXX-XXXXXXX-X",required:!0}),d&&n.jsx("em",{children:d})]})]})]}),c===3&&n.jsxs("section",{className:"ticket-form-panel",children:[n.jsxs("div",{className:"ticket-panel-heading",children:[n.jsx("p",{children:"Step 3"}),n.jsx("h3",{children:"Review & Confirm"})]}),n.jsxs("div",{className:"ticket-review-layout",children:[n.jsx("div",{className:"ticket-benefit-list",children:w.benefits.map(I=>n.jsx("span",{children:I},I))}),n.jsxs("aside",{className:"ticket-summary-card",children:[n.jsx("h4",{children:"Booking Summary"}),n.jsxs("div",{children:[n.jsx("span",{children:"Ticket Type"}),n.jsx("strong",{children:w.label})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Quantity"}),n.jsx("strong",{children:y})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Price"}),n.jsxs("strong",{children:["PKR ",S.toLocaleString()]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Service Fee"}),n.jsxs("strong",{children:["PKR ",N.toLocaleString()]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Discount"}),n.jsxs("strong",{children:["PKR ",C.toLocaleString()]})]}),n.jsxs("div",{className:"ticket-total",children:[n.jsx("span",{children:"Total"}),n.jsxs("strong",{children:["PKR ",P.toLocaleString()]})]})]})]})]}),n.jsxs("div",{className:"ticket-form-actions",children:[n.jsx("button",{type:"button",onClick:c===1?q:()=>l(I=>I-1),className:"ticket-secondary-button",children:c===1?"Reset":"Back"}),c<3?n.jsx("button",{type:"button",onClick:E,className:"ticket-primary-button",children:"Continue"}):n.jsx("button",{type:"submit",disabled:t,className:"ticket-primary-button ticket-shimmer-button",children:t?"Verifying Details...":"Complete Your Booking"})]})]})}function Pb(){const[e,t]=k.useState(""),r={bankName:"HBL",accountTitle:"Ozilla Festival",accountNumber:"1234-5678-9012-3456",iban:"PK36HABB0000123456789012345",branchCode:"1234"},a=async(i,s)=>{try{await navigator.clipboard.writeText(s),t(i),window.setTimeout(()=>t(""),1800)}catch{t("")}};return n.jsxs("div",{className:"ticket-bank-card",children:[n.jsxs("div",{className:"ticket-bank-header",children:[n.jsx("p",{children:"Payment Details"}),n.jsx("h3",{children:"Bank Transfer"}),n.jsx("span",{children:"Verified festival account"})]}),n.jsx("div",{className:"ticket-bank-grid",children:Object.entries(r).map(([i,s])=>{const o=i.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase());return n.jsxs("article",{children:[n.jsx("span",{children:o}),n.jsx("strong",{children:s}),(i==="iban"||i==="accountNumber")&&n.jsx("button",{type:"button",onClick:()=>a(o,s),children:e===o?"Copied":"Copy"})]},i)})}),n.jsxs("div",{className:"ticket-bank-note",children:[n.jsx("strong",{children:"Important"}),n.jsx("p",{children:"Please include your name and ticket reference in the payment description for easy verification."})]})]})}function Ca({type:e,message:t,onClose:r}){const a={success:"bg-green-100 border-green-500 text-green-700",error:"bg-red-100 border-red-500 text-red-700",warning:"bg-yellow-100 border-yellow-500 text-yellow-700",info:"bg-blue-100 border-blue-500 text-blue-700"}[e]||"bg-gray-100 border-gray-500 text-gray-700";return n.jsxs("div",{className:`${a} border-l-4 p-4 rounded mb-4 flex justify-between items-center`,children:[n.jsx("p",{children:t}),r&&n.jsx("button",{onClick:r,className:"ml-4 font-bold hover:opacity-75",children:"×"})]})}const Cb=["Personal Info","Ticket Details","Payment","Proof Upload","Confirmation"],zb=["Secure Payments","Protected Booking","QR Ticket","Official Festival Ticket"],Tb=[["Secure Booking","Protected ticket request and account-based access."],["Fast Confirmation","Admin verification workflow after payment proof upload."],["QR Ticket","Verified bookings generate scannable festival tickets."],["Premium Support","Support team available for booking and payment guidance."]],Rb=["VIP Access","Celebrity Performances","Food Court Access","Discount Offers","Festival Merchandise","Premium Seating"],Ob=["Booking","Verification","Approval","QR Ticket Generation","Ready To Attend"],Lb={ticketType:"General",day:"Day 1",quantity:1,subtotal:5e3,serviceFee:150,discount:0,total:5150,benefits:["Festival entry","Food court access","Partner discount offers"]};function Ab(){const e=hr(),{user:t}=bt(),{requestTicket:r,uploadPaymentProof:a,loading:i}=gs(),[s,o]=k.useState(null),[c,l]=k.useState(!1),[d,u]=k.useState(null),[p,f]=k.useState(null),[b,x]=k.useState(""),[w,v]=k.useState(Lb),[m,h]=k.useState(null),[g,y]=k.useState(!0),S=c?4:2,N=k.useMemo(()=>14,[]),C=`${(t==null?void 0:t.firstName)||""} ${(t==null?void 0:t.lastName)||""}`.trim()||(t==null?void 0:t.name)||(t==null?void 0:t.email)||"Festival Guest",P=!!(m!=null&&m.soldOut);k.useEffect(()=>{let E=!0;return(async()=>{y(!0);try{const q=await pt.getAvailability();if(!E)return;h(q),q!=null&&q.soldOut&&o({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."})}catch{E&&h(null)}finally{E&&y(!1)}})(),()=>{E=!1}},[]);const U=()=>{if(P){o({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}e(`/login?returnTo=${encodeURIComponent("/tickets")}`)},R=async E=>{var A,q,I,H;if(P){o({type:"error",message:"Tickets are sold out. The ticket portal is currently locked."});return}try{const z=await r(E);u(z),l(!0),o({type:"success",message:"Ticket request submitted. Please upload your payment proof."});const F=await pt.getAvailability().catch(()=>null);F&&h(F)}catch(z){const F=((q=(A=z==null?void 0:z.response)==null?void 0:A.data)==null?void 0:q.message)||(z==null?void 0:z.message)||"Failed to request ticket. Please try again.";(H=(I=z==null?void 0:z.response)==null?void 0:I.data)!=null&&H.availability&&h(z.response.data.availability),o({type:"error",message:F})}},D=E=>{if(f(E||null),x(""),!E)return;const A=new FileReader;A.onloadend=()=>x(String(A.result||"")),A.readAsDataURL(E)},ee=async()=>{var E,A;if(!(d!=null&&d.id)){o({type:"error",message:"Ticket request not found."});return}if(!p){o({type:"error",message:"Please select a payment screenshot/image."});return}try{await a(d.id,p),o({type:"success",message:"Payment proof uploaded successfully. Generating your ticket..."}),f(null),x(""),e(`/tickets/view/${d.id}`)}catch(q){const I=((A=(E=q==null?void 0:q.response)==null?void 0:E.data)==null?void 0:A.message)||(q==null?void 0:q.message)||"Failed to upload payment proof.";o({type:"error",message:I})}};return n.jsxs("main",{className:"ticket-portal-premium",children:[n.jsxs("section",{className:"ticket-portal-hero",children:[n.jsx("div",{className:"ticket-portal-orb ticket-portal-orb-one"}),n.jsx("div",{className:"ticket-portal-orb ticket-portal-orb-two"}),n.jsxs("div",{className:"ticket-portal-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"ticket-portal-hero-content",children:[n.jsx("p",{children:"Ozilla Festival 2026"}),n.jsx("h1",{children:"Book Your Ozilla Festival Experience"}),n.jsx("span",{children:"Reserve your place for one of Pakistan's biggest entertainment festivals and become part of an unforgettable celebration."}),n.jsx("div",{className:"ticket-trust-row",children:zb.map(E=>n.jsx("strong",{children:E},E))})]})]}),n.jsxs("section",{className:"ticket-portal-shell",children:[s&&n.jsx(Ca,{type:s.type,message:s.message,onClose:()=>o(null)}),n.jsx("div",{className:"ticket-progress-card",children:Cb.map((E,A)=>n.jsxs("article",{className:A+1<=S?"is-active":"",children:[n.jsx("span",{children:A+1}),n.jsx("strong",{children:E})]},E))}),P?n.jsxs("div",{className:"ticket-sold-out-lock",role:"alert",children:[n.jsx("div",{className:"ticket-sold-out-mark",children:"Sold Out"}),n.jsxs("div",{children:[n.jsx("p",{children:"Ticket Portal Locked"}),n.jsx("h2",{children:"Tickets are sold out."}),n.jsx("span",{children:"All available Ozilla Festival tickets have been reserved. Ticket purchases are currently closed."})]})]}):t?n.jsxs("div",{className:"ticket-booking-layout",children:[n.jsxs("section",{className:"ticket-booking-card",children:[n.jsxs("div",{className:"ticket-card-top",children:[n.jsxs("div",{children:[n.jsx("p",{children:c?"Payment Step":"Premium Booking Portal"}),n.jsx("h2",{children:c?"Complete Your Payment":"Reserve Your Festival Ticket"})]}),n.jsx("span",{children:c?`Reserved for ${N} minutes`:"Official festival ticket"})]}),c?n.jsxs("div",{className:"ticket-payment-flow",children:[n.jsx(Pb,{}),n.jsxs("section",{className:"ticket-upload-card",children:[n.jsxs("div",{className:"ticket-panel-heading",children:[n.jsx("p",{children:"Step 4"}),n.jsx("h3",{children:"Upload Payment Proof"})]}),n.jsxs("label",{className:"ticket-dropzone",onDragOver:E=>E.preventDefault(),onDrop:E=>{var A;E.preventDefault(),D((A=E.dataTransfer.files)==null?void 0:A[0])},children:[n.jsx("input",{type:"file",accept:"image/*",onChange:E=>{var A;return D((A=E.target.files)==null?void 0:A[0])}}),n.jsx("strong",{children:p?p.name:"Drag & drop payment screenshot here"}),n.jsx("span",{children:"or browse file from your device"})]}),b&&n.jsx("div",{className:"ticket-proof-preview",children:n.jsx("img",{src:b,alt:"Payment proof preview"})}),n.jsx("button",{className:"ticket-primary-button",onClick:ee,disabled:i,children:i?"Generating QR Ticket...":"Submit Payment Proof"})]})]}):n.jsx(Eb,{onSubmit:R,loading:i,profileDefaults:t,onBookingChange:v,availability:m,availabilityLoading:g})]}),n.jsxs("aside",{className:"ticket-side-panel",children:[n.jsxs("div",{className:"ticket-profile-card",children:[n.jsx("div",{className:"ticket-profile-avatar",children:String(C).slice(0,1).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{children:"Welcome Back"}),n.jsx("h3",{children:C}),n.jsx("span",{children:"Verified Account"}),n.jsx("span",{children:"Secure Booking"}),n.jsx("span",{children:"Returning Visitor"})]})]}),n.jsxs("div",{className:"ticket-live-summary",children:[n.jsx("p",{children:"Live Booking Summary"}),n.jsxs("h3",{children:[w.ticketType," Pass"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Festival Day"}),n.jsx("strong",{children:w.day})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Quantity"}),n.jsx("strong",{children:w.quantity})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Ticket Price"}),n.jsxs("strong",{children:["PKR ",w.subtotal.toLocaleString()]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Festival Fee"}),n.jsxs("strong",{children:["PKR ",w.serviceFee.toLocaleString()]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Discount"}),n.jsxs("strong",{children:["PKR ",w.discount.toLocaleString()]})]}),n.jsxs("div",{className:"ticket-live-total",children:[n.jsx("span",{children:"Grand Total"}),n.jsxs("strong",{children:["PKR ",w.total.toLocaleString()]})]}),n.jsx("small",{children:"Estimated confirmation: 24 hours"})]}),n.jsxs("div",{className:"ticket-pass-preview",children:[n.jsx("p",{children:"Festival Pass Preview"}),n.jsxs("h3",{children:[w.ticketType," Pass"]}),n.jsx("span",{children:"Ozilla Festival 2026"}),n.jsx("div",{className:"ticket-qr-placeholder",children:"QR"}),n.jsxs("strong",{children:[w.day," / Lahore, Pakistan"]})]}),n.jsxs("div",{className:"ticket-mini-card",children:[n.jsx("p",{children:"Ticket Benefits"}),n.jsx("div",{children:Rb.map(E=>n.jsx("span",{children:E},E))})]}),n.jsxs("div",{className:"ticket-mini-card",children:[n.jsx("p",{children:"Why Book With Us"}),Tb.map(([E,A])=>n.jsxs("article",{children:[n.jsx("strong",{children:E}),n.jsx("span",{children:A})]},E))]}),n.jsxs("div",{className:"ticket-mini-card ticket-timeline-card",children:[n.jsx("p",{children:"Booking Timeline"}),Ob.map((E,A)=>n.jsxs("article",{className:A<S?"is-active":"",children:[n.jsx("strong",{children:E}),n.jsx("span",{children:A<S?"In progress":"Upcoming"})]},E))]})]})]}):n.jsxs("div",{className:"ticket-auth-card",children:[n.jsxs("div",{children:[n.jsx("p",{children:"Premium Ticket Access"}),n.jsx("h2",{children:"Sign in to purchase your festival ticket."}),n.jsx("span",{children:"You can browse the website as a guest, but ticket purchases require secure account access."})]}),n.jsx("button",{type:"button",onClick:U,className:"ticket-primary-button",children:"Purchase Ticket"})]})]}),n.jsx("style",{children:`
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
      `})]})}var _b=Object.defineProperty,Wi=Object.getOwnPropertySymbols,ch=Object.prototype.hasOwnProperty,dh=Object.prototype.propertyIsEnumerable,nu=(e,t,r)=>t in e?_b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xa=(e,t)=>{for(var r in t||(t={}))ch.call(t,r)&&nu(e,r,t[r]);if(Wi)for(var r of Wi(t))dh.call(t,r)&&nu(e,r,t[r]);return e},cc=(e,t)=>{var r={};for(var a in e)ch.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&Wi)for(var a of Wi(e))t.indexOf(a)<0&&dh.call(e,a)&&(r[a]=e[a]);return r};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ar;(e=>{const t=class{constructor(l,d,u,p){if(this.version=l,this.errorCorrectionLevel=d,this.modules=[],this.isFunction=[],l<t.MIN_VERSION||l>t.MAX_VERSION)throw new RangeError("Version value out of range");if(p<-1||p>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let f=[];for(let x=0;x<this.size;x++)f.push(!1);for(let x=0;x<this.size;x++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();const b=this.addEccAndInterleave(u);if(this.drawCodewords(b),p==-1){let x=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const v=this.getPenaltyScore();v<x&&(p=w,x=v),this.applyMask(w)}}s(0<=p&&p<=7),this.mask=p,this.applyMask(p),this.drawFormatBits(p),this.isFunction=[]}static encodeText(l,d){const u=e.QrSegment.makeSegments(l);return t.encodeSegments(u,d)}static encodeBinary(l,d){const u=e.QrSegment.makeBytes(l);return t.encodeSegments([u],d)}static encodeSegments(l,d,u=1,p=40,f=-1,b=!0){if(!(t.MIN_VERSION<=u&&u<=p&&p<=t.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");let x,w;for(x=u;;x++){const g=t.getNumDataCodewords(x,d)*8,y=c.getTotalBits(l,x);if(y<=g){w=y;break}if(x>=p)throw new RangeError("Data too long")}for(const g of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])b&&w<=t.getNumDataCodewords(x,g)*8&&(d=g);let v=[];for(const g of l){a(g.mode.modeBits,4,v),a(g.numChars,g.mode.numCharCountBits(x),v);for(const y of g.getData())v.push(y)}s(v.length==w);const m=t.getNumDataCodewords(x,d)*8;s(v.length<=m),a(0,Math.min(4,m-v.length),v),a(0,(8-v.length%8)%8,v),s(v.length%8==0);for(let g=236;v.length<m;g^=253)a(g,8,v);let h=[];for(;h.length*8<v.length;)h.push(0);return v.forEach((g,y)=>h[y>>>3]|=g<<7-(y&7)),new t(x,d,h,f)}getModule(l,d){return 0<=l&&l<this.size&&0<=d&&d<this.size&&this.modules[d][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let u=0;u<this.size;u++)this.setFunctionModule(6,u,u%2==0),this.setFunctionModule(u,6,u%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),d=l.length;for(let u=0;u<d;u++)for(let p=0;p<d;p++)u==0&&p==0||u==0&&p==d-1||u==d-1&&p==0||this.drawAlignmentPattern(l[u],l[p]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const d=this.errorCorrectionLevel.formatBits<<3|l;let u=d;for(let f=0;f<10;f++)u=u<<1^(u>>>9)*1335;const p=(d<<10|u)^21522;s(p>>>15==0);for(let f=0;f<=5;f++)this.setFunctionModule(8,f,i(p,f));this.setFunctionModule(8,7,i(p,6)),this.setFunctionModule(8,8,i(p,7)),this.setFunctionModule(7,8,i(p,8));for(let f=9;f<15;f++)this.setFunctionModule(14-f,8,i(p,f));for(let f=0;f<8;f++)this.setFunctionModule(this.size-1-f,8,i(p,f));for(let f=8;f<15;f++)this.setFunctionModule(8,this.size-15+f,i(p,f));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let u=0;u<12;u++)l=l<<1^(l>>>11)*7973;const d=this.version<<12|l;s(d>>>18==0);for(let u=0;u<18;u++){const p=i(d,u),f=this.size-11+u%3,b=Math.floor(u/3);this.setFunctionModule(f,b,p),this.setFunctionModule(b,f,p)}}drawFinderPattern(l,d){for(let u=-4;u<=4;u++)for(let p=-4;p<=4;p++){const f=Math.max(Math.abs(p),Math.abs(u)),b=l+p,x=d+u;0<=b&&b<this.size&&0<=x&&x<this.size&&this.setFunctionModule(b,x,f!=2&&f!=4)}}drawAlignmentPattern(l,d){for(let u=-2;u<=2;u++)for(let p=-2;p<=2;p++)this.setFunctionModule(l+p,d+u,Math.max(Math.abs(p),Math.abs(u))!=1)}setFunctionModule(l,d,u){this.modules[d][l]=u,this.isFunction[d][l]=!0}addEccAndInterleave(l){const d=this.version,u=this.errorCorrectionLevel;if(l.length!=t.getNumDataCodewords(d,u))throw new RangeError("Invalid argument");const p=t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][d],f=t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][d],b=Math.floor(t.getNumRawDataModules(d)/8),x=p-b%p,w=Math.floor(b/p);let v=[];const m=t.reedSolomonComputeDivisor(f);for(let g=0,y=0;g<p;g++){let S=l.slice(y,y+w-f+(g<x?0:1));y+=S.length;const N=t.reedSolomonComputeRemainder(S,m);g<x&&S.push(0),v.push(S.concat(N))}let h=[];for(let g=0;g<v[0].length;g++)v.forEach((y,S)=>{(g!=w-f||S>=x)&&h.push(y[g])});return s(h.length==b),h}drawCodewords(l){if(l.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let d=0;for(let u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(let p=0;p<this.size;p++)for(let f=0;f<2;f++){const b=u-f,w=(u+1&2)==0?this.size-1-p:p;!this.isFunction[w][b]&&d<l.length*8&&(this.modules[w][b]=i(l[d>>>3],7-(d&7)),d++)}}s(d==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let d=0;d<this.size;d++)for(let u=0;u<this.size;u++){let p;switch(l){case 0:p=(u+d)%2==0;break;case 1:p=d%2==0;break;case 2:p=u%3==0;break;case 3:p=(u+d)%3==0;break;case 4:p=(Math.floor(u/3)+Math.floor(d/2))%2==0;break;case 5:p=u*d%2+u*d%3==0;break;case 6:p=(u*d%2+u*d%3)%2==0;break;case 7:p=((u+d)%2+u*d%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[d][u]&&p&&(this.modules[d][u]=!this.modules[d][u])}}getPenaltyScore(){let l=0;for(let f=0;f<this.size;f++){let b=!1,x=0,w=[0,0,0,0,0,0,0];for(let v=0;v<this.size;v++)this.modules[f][v]==b?(x++,x==5?l+=t.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,w),b||(l+=this.finderPenaltyCountPatterns(w)*t.PENALTY_N3),b=this.modules[f][v],x=1);l+=this.finderPenaltyTerminateAndCount(b,x,w)*t.PENALTY_N3}for(let f=0;f<this.size;f++){let b=!1,x=0,w=[0,0,0,0,0,0,0];for(let v=0;v<this.size;v++)this.modules[v][f]==b?(x++,x==5?l+=t.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,w),b||(l+=this.finderPenaltyCountPatterns(w)*t.PENALTY_N3),b=this.modules[v][f],x=1);l+=this.finderPenaltyTerminateAndCount(b,x,w)*t.PENALTY_N3}for(let f=0;f<this.size-1;f++)for(let b=0;b<this.size-1;b++){const x=this.modules[f][b];x==this.modules[f][b+1]&&x==this.modules[f+1][b]&&x==this.modules[f+1][b+1]&&(l+=t.PENALTY_N2)}let d=0;for(const f of this.modules)d=f.reduce((b,x)=>b+(x?1:0),d);const u=this.size*this.size,p=Math.ceil(Math.abs(d*20-u*10)/u)-1;return s(0<=p&&p<=9),l+=p*t.PENALTY_N4,s(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,d=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let u=[6];for(let p=this.size-7;u.length<l;p-=d)u.splice(1,0,p);return u}}static getNumRawDataModules(l){if(l<t.MIN_VERSION||l>t.MAX_VERSION)throw new RangeError("Version number out of range");let d=(16*l+128)*l+64;if(l>=2){const u=Math.floor(l/7)+2;d-=(25*u-10)*u-55,l>=7&&(d-=36)}return s(208<=d&&d<=29648),d}static getNumDataCodewords(l,d){return Math.floor(t.getNumRawDataModules(l)/8)-t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l]*t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let d=[];for(let p=0;p<l-1;p++)d.push(0);d.push(1);let u=1;for(let p=0;p<l;p++){for(let f=0;f<d.length;f++)d[f]=t.reedSolomonMultiply(d[f],u),f+1<d.length&&(d[f]^=d[f+1]);u=t.reedSolomonMultiply(u,2)}return d}static reedSolomonComputeRemainder(l,d){let u=d.map(p=>0);for(const p of l){const f=p^u.shift();u.push(0),d.forEach((b,x)=>u[x]^=t.reedSolomonMultiply(b,f))}return u}static reedSolomonMultiply(l,d){if(l>>>8||d>>>8)throw new RangeError("Byte out of range");let u=0;for(let p=7;p>=0;p--)u=u<<1^(u>>>7)*285,u^=(d>>>p&1)*l;return s(u>>>8==0),u}finderPenaltyCountPatterns(l){const d=l[1];s(d<=this.size*3);const u=d>0&&l[2]==d&&l[3]==d*3&&l[4]==d&&l[5]==d;return(u&&l[0]>=d*4&&l[6]>=d?1:0)+(u&&l[6]>=d*4&&l[0]>=d?1:0)}finderPenaltyTerminateAndCount(l,d,u){return l&&(this.finderPenaltyAddHistory(d,u),d=0),d+=this.size,this.finderPenaltyAddHistory(d,u),this.finderPenaltyCountPatterns(u)}finderPenaltyAddHistory(l,d){d[0]==0&&(l+=this.size),d.pop(),d.unshift(l)}};let r=t;r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=r;function a(l,d,u){if(d<0||d>31||l>>>d)throw new RangeError("Value out of range");for(let p=d-1;p>=0;p--)u.push(l>>>p&1)}function i(l,d){return(l>>>d&1)!=0}function s(l){if(!l)throw new Error("Assertion error")}const o=class{constructor(l,d,u){if(this.mode=l,this.numChars=d,this.bitData=u,d<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}static makeBytes(l){let d=[];for(const u of l)a(u,8,d);return new o(o.Mode.BYTE,l.length,d)}static makeNumeric(l){if(!o.isNumeric(l))throw new RangeError("String contains non-numeric characters");let d=[];for(let u=0;u<l.length;){const p=Math.min(l.length-u,3);a(parseInt(l.substr(u,p),10),p*3+1,d),u+=p}return new o(o.Mode.NUMERIC,l.length,d)}static makeAlphanumeric(l){if(!o.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let d=[],u;for(u=0;u+2<=l.length;u+=2){let p=o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u))*45;p+=o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u+1)),a(p,11,d)}return u<l.length&&a(o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)),6,d),new o(o.Mode.ALPHANUMERIC,l.length,d)}static makeSegments(l){return l==""?[]:o.isNumeric(l)?[o.makeNumeric(l)]:o.isAlphanumeric(l)?[o.makeAlphanumeric(l)]:[o.makeBytes(o.toUtf8ByteArray(l))]}static makeEci(l){let d=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)a(l,8,d);else if(l<16384)a(2,2,d),a(l,14,d);else if(l<1e6)a(6,3,d),a(l,21,d);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,d)}static isNumeric(l){return o.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return o.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,d){let u=0;for(const p of l){const f=p.mode.numCharCountBits(d);if(p.numChars>=1<<f)return 1/0;u+=4+f+p.bitData.length}return u}static toUtf8ByteArray(l){l=encodeURI(l);let d=[];for(let u=0;u<l.length;u++)l.charAt(u)!="%"?d.push(l.charCodeAt(u)):(d.push(parseInt(l.substr(u+1,2),16)),u+=2);return d}};let c=o;c.NUMERIC_REGEX=/^[0-9]*$/,c.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,c.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=c})(Ar||(Ar={}));(e=>{(t=>{const r=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};let a=r;a.LOW=new r(0,1),a.MEDIUM=new r(1,0),a.QUARTILE=new r(2,3),a.HIGH=new r(3,2),t.Ecc=a})(e.QrCode||(e.QrCode={}))})(Ar||(Ar={}));(e=>{(t=>{const r=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};let a=r;a.NUMERIC=new r(1,[10,12,14]),a.ALPHANUMERIC=new r(2,[9,11,13]),a.BYTE=new r(4,[8,16,16]),a.KANJI=new r(8,[8,10,12]),a.ECI=new r(7,[0,0,0]),t.Mode=a})(e.QrSegment||(e.QrSegment={}))})(Ar||(Ar={}));var en=Ar;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var uh={L:en.QrCode.Ecc.LOW,M:en.QrCode.Ecc.MEDIUM,Q:en.QrCode.Ecc.QUARTILE,H:en.QrCode.Ecc.HIGH},ph=128,mh="L",hh="#FFFFFF",fh="#000000",gh=!1,dc=4,Fb=.1;function xh(e,t=0){const r=[];return e.forEach(function(a,i){let s=null;a.forEach(function(o,c){if(!o&&s!==null){r.push(`M${s+t} ${i+t}h${c-s}v1H${s+t}z`),s=null;return}if(c===a.length-1){if(!o)return;s===null?r.push(`M${c+t},${i+t} h1v1H${c+t}z`):r.push(`M${s+t},${i+t} h${c+1-s}v1H${s+t}z`);return}o&&s===null&&(s=c)})}),r.join("")}function bh(e,t){return e.slice().map((r,a)=>a<t.y||a>=t.y+t.h?r:r.map((i,s)=>s<t.x||s>=t.x+t.w?i:!1))}function yh(e,t,r,a){if(a==null)return null;const i=r?dc:0,s=e.length+i*2,o=Math.floor(t*Fb),c=s/t,l=(a.width||o)*c,d=(a.height||o)*c,u=a.x==null?e.length/2-l/2:a.x*c,p=a.y==null?e.length/2-d/2:a.y*c;let f=null;if(a.excavate){let b=Math.floor(u),x=Math.floor(p),w=Math.ceil(l+u-b),v=Math.ceil(d+p-x);f={x:b,y:x,w,h:v}}return{x:u,y:p,h:d,w:l,excavation:f}}var Ib=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Mb(e){const t=e,{value:r,size:a=ph,level:i=mh,bgColor:s=hh,fgColor:o=fh,includeMargin:c=gh,style:l,imageSettings:d}=t,u=cc(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),p=d==null?void 0:d.src,f=we.useRef(null),b=we.useRef(null),[x,w]=we.useState(!1);we.useEffect(()=>{if(f.current!=null){const h=f.current,g=h.getContext("2d");if(!g)return;let y=en.QrCode.encodeText(r,uh[i]).getModules();const S=c?dc:0,N=y.length+S*2,C=yh(y,a,c,d),P=b.current,U=C!=null&&P!==null&&P.complete&&P.naturalHeight!==0&&P.naturalWidth!==0;U&&C.excavation!=null&&(y=bh(y,C.excavation));const R=window.devicePixelRatio||1;h.height=h.width=a*R;const D=a/N*R;g.scale(D,D),g.fillStyle=s,g.fillRect(0,0,N,N),g.fillStyle=o,Ib?g.fill(new Path2D(xh(y,S))):y.forEach(function(ee,E){ee.forEach(function(A,q){A&&g.fillRect(q+S,E+S,1,1)})}),U&&g.drawImage(P,C.x+S,C.y+S,C.w,C.h)}}),we.useEffect(()=>{w(!1)},[p]);const v=xa({height:a,width:a},l);let m=null;return p!=null&&(m=we.createElement("img",{src:p,key:p,style:{display:"none"},onLoad:()=>{w(!0)},ref:b})),we.createElement(we.Fragment,null,we.createElement("canvas",xa({style:v,height:a,width:a,ref:f},u)),m)}function Db(e){const t=e,{value:r,size:a=ph,level:i=mh,bgColor:s=hh,fgColor:o=fh,includeMargin:c=gh,imageSettings:l}=t,d=cc(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let u=en.QrCode.encodeText(r,uh[i]).getModules();const p=c?dc:0,f=u.length+p*2,b=yh(u,a,c,l);let x=null;l!=null&&b!=null&&(b.excavation!=null&&(u=bh(u,b.excavation)),x=we.createElement("image",{xlinkHref:l.src,height:b.h,width:b.w,x:b.x+p,y:b.y+p,preserveAspectRatio:"none"}));const w=xh(u,p);return we.createElement("svg",xa({height:a,width:a,viewBox:`0 0 ${f} ${f}`},d),we.createElement("path",{fill:s,d:`M0,0 h${f}v${f}H0z`,shapeRendering:"crispEdges"}),we.createElement("path",{fill:o,d:w,shapeRendering:"crispEdges"}),x)}var Ub=e=>{const t=e,{renderAs:r}=t,a=cc(t,["renderAs"]);return r==="svg"?we.createElement(Db,xa({},a)):we.createElement(Mb,xa({},a))};function Bb({ticket:e,size:t=200,showCaption:r=!0}){const a=JSON.stringify({ticketId:e.uniqueTicketId||e.ticketId||e.id,fullName:e.fullName||e.name,email:e.email,phone:e.phone,eventName:e.eventName,eventDate:e.eventDate,eventTime:e.eventTime});return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"bg-white p-4 rounded-lg shadow-md border-2 border-dashed border-gray-300",children:n.jsx(Ub,{value:a,size:t,level:"H",includeMargin:!0,renderAs:"canvas"})}),r?n.jsx("p",{className:"text-sm text-gray-600 mt-4 text-center",children:"Scan this QR code at the event entrance"}):null]})}function $b(e="pending"){return e==="approved"?{label:"Verified",className:"is-approved"}:e==="payment_submitted"?{label:"Payment Submitted",className:"is-submitted"}:e==="rejected"||e==="cancelled"?{label:e==="cancelled"?"Cancelled":"Rejected",className:"is-cancelled"}:{label:"Pending Verification",className:"is-pending"}}function Ja(e,t,r,a,i,s){const o=Math.min(s,a/2,i/2);e.beginPath(),e.moveTo(t+o,r),e.lineTo(t+a-o,r),e.quadraticCurveTo(t+a,r,t+a,r+o),e.lineTo(t+a,r+i-o),e.quadraticCurveTo(t+a,r+i,t+a-o,r+i),e.lineTo(t+o,r+i),e.quadraticCurveTo(t,r+i,t,r+i-o),e.lineTo(t,r+o),e.quadraticCurveTo(t,r,t+o,r),e.closePath()}function Za(e,t,r,a,i,s,o="left"){const c=String(t||"").split(/\s+/);let l="",d=a;const u=e.textAlign;e.textAlign=o,c.forEach((p,f)=>{const b=l?`${l} ${p}`:p;e.measureText(b).width>i&&l?(e.fillText(l,o==="right"?r+i:r,d),l=p,d+=s):l=b,f===c.length-1&&l&&e.fillText(l,o==="right"?r+i:r,d)}),e.textAlign=u}function vh({ticket:e,actionTo:t,actionLabel:r="View Ticket"}){const a=k.useRef(null),i=k.useRef(null),s=e.uniqueTicketId||e.ticketId||e.id,o=e.bookingId||e.requestId||e.id,c=$b(e.status),l=e.status==="approved",d=b=>{const x=document.createElement("a");x.href=b.toDataURL("image/png"),x.download=`ozilla-ticket-${s}.png`,x.click()},u=async()=>{var E;const b=i.current,x=(E=a.current)==null?void 0:E.querySelector("canvas");if(!b||!x)return;const w=b.getBoundingClientRect(),v=Math.min(2,window.devicePixelRatio||1.5),m=document.createElement("canvas"),h=Math.ceil(w.width),g=Math.ceil(w.height);m.width=Math.ceil(h*v),m.height=Math.ceil(g*v);const y=m.getContext("2d");if(!y)return;y.scale(v,v);const S=y.createLinearGradient(0,0,h,g);S.addColorStop(0,"#fffaf2"),S.addColorStop(.52,"#edf5f0"),S.addColorStop(1,"#f5e6dc"),y.fillStyle=S,y.fillRect(0,0,h,g);const N=y.createLinearGradient(18,18,h-18,g-18);N.addColorStop(0,"#ffffff"),N.addColorStop(1,"#f6efe4"),Ja(y,14,14,h-28,g-28,28),y.fillStyle=N,y.fill(),y.strokeStyle="#e8c879",y.lineWidth=2,y.stroke();const C=y.createLinearGradient(28,90,h-28,190);C.addColorStop(0,"#041719"),C.addColorStop(.6,"#073332"),C.addColorStop(1,"#39132f"),Ja(y,28,86,h-56,112,20),y.fillStyle=C,y.fill(),y.fillStyle="#ff8a00",y.font="700 11px Arial",y.fillText("OZILLA FESTIVAL 2026",28,40),y.fillStyle="#102525",y.font="800 22px Arial",y.fillText(e.eventName||"Ozilla Festival",28,68),y.fillStyle="#ffffff",y.font="700 12px Arial",y.fillText(`${e.ticketType||"Festival"} Pass`.toUpperCase(),44,118),y.font="800 24px Arial",Za(y,e.fullName||e.name||"Festival Guest",44,146,h-150,26),y.fillStyle="rgba(255,255,255,0.75)",y.font="700 11px Arial",Za(y,e.email||"-",44,180,h-150,16),y.fillStyle="#ffbd59",y.font="800 10px Arial",y.textAlign="right",y.fillText("TICKET ID",h-42,126),y.fillStyle="#ffffff",y.font="800 11px Arial",Za(y,String(s),h-120,148,82,14,"right"),y.textAlign="left";const P=[["Booking ID",o],["Date",e.eventDate?qi(e.eventDate):"-"],["Time",e.eventTime||"-"],["Day",e.festivalDay==="day2"?"Day 2":"Day 1"],["Location",e.location||"Lahore, Pakistan"],["Quantity",e.quantity||1]];let U=222;P.forEach(([A,q],I)=>{const H=I%2,z=Math.floor(I/2),F=(h-68)/2,M=28+H*(F+12),$=U+z*58;Ja(y,M,$,F,46,10),y.fillStyle="#ffffff",y.fill(),y.strokeStyle="#dce9e4",y.stroke(),y.fillStyle="#ff8a00",y.font="800 9px Arial",y.fillText(String(A).toUpperCase(),M+10,$+16),y.fillStyle="#102525",y.font="800 11px Arial",Za(y,String(q),M+10,$+33,F-20,12)});const R=Math.min(150,Math.max(112,h*.34)),D=(h-R)/2,ee=Math.min(g-R-76,410);Ja(y,D-12,ee-12,R+24,R+24,18),y.fillStyle="#ffffff",y.fill(),y.strokeStyle="#ffbd59",y.stroke(),y.drawImage(x,D,ee,R,R),y.fillStyle="#55706f",y.font="700 11px Arial",y.textAlign="center",y.fillText("Scan this QR code at the event entrance.",h/2,ee+R+34),y.textAlign="left",d(m)},p=()=>{u()},f=async()=>{if(navigator.share)try{await navigator.share({title:e.eventName||"Ozilla Festival Ticket",text:`Ozilla Festival ticket ${s}`})}catch{}};return n.jsxs("article",{className:"premium-ticket-card",ref:i,children:[n.jsx("div",{className:"premium-ticket-glow","aria-hidden":"true"}),n.jsxs("div",{className:"premium-ticket-header",children:[n.jsxs("div",{children:[n.jsx("p",{children:"Ozilla Festival VIP Pass"}),n.jsx("h3",{children:e.eventName||"Ozilla Festival"})]}),n.jsx("span",{className:`premium-ticket-status ${c.className}`,children:c.label})]}),n.jsxs("div",{className:"premium-ticket-pass",children:[n.jsxs("div",{className:"premium-ticket-pass-main",children:[n.jsxs("span",{className:"premium-ticket-type",children:[e.ticketType||"festival"," pass"]}),n.jsx("strong",{children:e.fullName||e.name||"Festival Guest"}),n.jsx("small",{children:e.email||"-"})]}),n.jsxs("div",{className:"premium-ticket-stub",children:[n.jsx("span",{children:"Ticket ID"}),n.jsx("strong",{children:s})]})]}),n.jsxs("div",{className:"premium-ticket-meta",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Booking ID"}),n.jsx("strong",{children:o})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Date"}),n.jsx("strong",{children:e.eventDate?qi(e.eventDate):"-"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Time"}),n.jsx("strong",{children:e.eventTime||"-"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Day"}),n.jsx("strong",{children:e.festivalDay==="day2"?"Day 2":"Day 1"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Location"}),n.jsx("strong",{children:e.location||"Lahore, Pakistan"})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Quantity"}),n.jsx("strong",{children:e.quantity||1})]})]}),n.jsxs("div",{className:"premium-ticket-details",children:[n.jsx("span",{children:"Entry Gate: Main Festival Gate"}),n.jsx("span",{children:"Parking: Partner parking zones"}),n.jsx("span",{children:"Organizer: Ozilla Festival"})]}),l?n.jsxs("div",{className:"premium-ticket-qr",ref:a,children:[n.jsx(Bb,{ticket:e,size:132,showCaption:!1}),n.jsx("p",{children:"Scan this QR code at the event entrance."}),n.jsxs("div",{className:"premium-ticket-qr-actions",children:[n.jsx("button",{type:"button",onClick:u,children:"Download"}),n.jsx("button",{type:"button",onClick:p,children:"Print"}),n.jsx("button",{type:"button",onClick:f,children:"Share"})]})]}):n.jsxs("div",{className:"premium-ticket-qr premium-ticket-qr-pending",children:[n.jsx("strong",{children:"QR Pending"}),n.jsx("p",{children:"Your QR ticket will appear after admin approval."})]}),n.jsxs("div",{className:"premium-ticket-actions",children:[n.jsx(B,{to:t||`/tickets/view/${e.id}`,children:r}),n.jsx("button",{type:"button",children:"Save to Wallet"}),n.jsx(B,{to:"/contact",children:"Contact Support"})]}),n.jsx("style",{children:`
        .premium-ticket-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          border: 1px solid rgba(11, 79, 76, 0.14);
          border-radius: 28px;
          padding: clamp(1rem, 2.4vw, 1.2rem);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 250, 242, 0.48)),
            radial-gradient(circle at 0% 0%, rgba(255, 189, 89, 0.16), transparent 14rem);
          box-shadow: 0 28px 78px rgba(2, 11, 13, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .premium-ticket-card,
        .premium-ticket-card * {
          box-sizing: border-box;
          min-width: 0;
        }

        .premium-ticket-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 176, 0, 0.34);
          box-shadow: 0 34px 90px rgba(2, 11, 13, 0.15), 0 0 34px rgba(255, 176, 0, 0.08);
        }

        .premium-ticket-glow {
          position: absolute;
          inset: -30% -20% auto auto;
          width: 42%;
          aspect-ratio: 1;
          border-radius: 999px;
          background: rgba(255, 189, 89, 0.22);
          filter: blur(34px);
          pointer-events: none;
        }

        .premium-ticket-header,
        .premium-ticket-pass,
        .premium-ticket-actions,
        .premium-ticket-qr-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
        }

        .premium-ticket-header {
          position: relative;
          z-index: 1;
        }

        .premium-ticket-header p,
        .premium-ticket-type,
        .premium-ticket-stub span,
        .premium-ticket-meta span {
          margin: 0;
          color: #ff8a00;
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .premium-ticket-header h3 {
          margin: 0.25rem 0 0;
          color: #102525;
          font-size: clamp(1.25rem, 2.5vw, 1.85rem);
          line-height: 1.04;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .premium-ticket-status {
          flex: 0 0 auto;
          border-radius: 999px;
          padding: 0.55rem 0.75rem;
          font-size: 0.74rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .premium-ticket-status.is-approved { color: #065f46; background: rgba(34, 197, 94, 0.14); box-shadow: 0 0 24px rgba(34, 197, 94, 0.14); }
        .premium-ticket-status.is-submitted { color: #075985; background: rgba(14, 165, 233, 0.14); box-shadow: 0 0 24px rgba(14, 165, 233, 0.14); }
        .premium-ticket-status.is-cancelled { color: #9f1239; background: rgba(244, 63, 94, 0.14); box-shadow: 0 0 24px rgba(244, 63, 94, 0.14); }
        .premium-ticket-status.is-pending { color: #92400e; background: rgba(255, 189, 89, 0.2); box-shadow: 0 0 24px rgba(255, 176, 0, 0.12); }

        .premium-ticket-pass {
          position: relative;
          overflow: hidden;
          margin: 1rem 0;
          border-radius: 24px;
          padding: 1rem;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(4, 23, 25, 0.96), rgba(7, 51, 50, 0.88), rgba(57, 19, 47, 0.84)),
            radial-gradient(circle at 18% 18%, rgba(255, 189, 89, 0.28), transparent 12rem);
        }

        .premium-ticket-pass::after {
          content: '';
          position: absolute;
          inset: 0 auto 0 68%;
          width: 1px;
          border-left: 1px dashed rgba(255, 255, 255, 0.28);
        }

        .premium-ticket-pass::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 -40%;
          width: 36%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);
          transform: skewX(-18deg);
          animation: ticketPassShine 4s ease-in-out infinite;
        }

        .premium-ticket-pass-main,
        .premium-ticket-stub {
          position: relative;
          z-index: 1;
        }

        .premium-ticket-pass-main strong {
          display: block;
          margin: 0.35rem 0;
          color: #fff;
          font-size: clamp(1.25rem, 3vw, 2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .premium-ticket-pass-main small,
        .premium-ticket-stub strong {
          color: rgba(255, 255, 255, 0.76);
          overflow-wrap: anywhere;
        }

        .premium-ticket-stub {
          width: 30%;
          display: grid;
          gap: 0.35rem;
          text-align: right;
        }

        .premium-ticket-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .premium-ticket-meta div,
        .premium-ticket-details span {
          border: 1px solid rgba(11, 79, 76, 0.1);
          border-radius: 16px;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.54);
          min-width: 0;
        }

        .premium-ticket-meta strong {
          display: block;
          margin-top: 0.25rem;
          color: #102525;
          overflow-wrap: anywhere;
        }

        .premium-ticket-details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.65rem;
          margin-top: 0.75rem;
          color: #315b59;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .premium-ticket-details span {
          overflow-wrap: anywhere;
        }

        .premium-ticket-qr {
          display: grid;
          justify-items: center;
          gap: 0.65rem;
          margin: 1rem 0;
          border: 1px solid rgba(255, 189, 89, 0.24);
          border-radius: 22px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
        }

        .premium-ticket-qr > div > div {
          max-width: 100%;
          border-color: rgba(255, 189, 89, 0.5) !important;
          box-shadow: 0 0 0 8px rgba(255, 189, 89, 0.08), 0 18px 42px rgba(255, 138, 0, 0.16) !important;
          animation: ticketQrPulse 2.6s ease-in-out infinite;
        }

        .premium-ticket-qr canvas {
          max-width: 100% !important;
          height: auto !important;
        }

        .premium-ticket-qr p {
          margin: 0;
          color: #55706f;
          text-align: center;
          line-height: 1.5;
        }

        .premium-ticket-qr-pending strong {
          display: grid;
          place-items: center;
          width: 120px;
          height: 120px;
          border-radius: 22px;
          color: #92400e;
          background: rgba(255, 189, 89, 0.18);
        }

        .premium-ticket-actions a,
        .premium-ticket-actions button,
        .premium-ticket-qr-actions button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 999px;
          padding: 0 0.9rem;
          font-weight: 950;
          cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease;
          text-align: center;
          white-space: normal;
        }

        .premium-ticket-actions a:focus-visible,
        .premium-ticket-actions button:focus-visible,
        .premium-ticket-qr-actions button:focus-visible {
          outline: 3px solid rgba(255, 189, 89, 0.72);
          outline-offset: 4px;
          box-shadow: 0 0 0 7px rgba(255, 189, 89, 0.16);
        }

        .premium-ticket-actions a:first-child {
          color: #101819;
          background: linear-gradient(135deg, #ffbd59, #ff8a00, #ff4d2e);
          box-shadow: 0 18px 44px rgba(255, 111, 26, 0.24);
        }

        .premium-ticket-actions a:last-child,
        .premium-ticket-actions button,
        .premium-ticket-qr-actions button {
          color: #0b4f4c;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: inset 0 0 0 1px rgba(11, 79, 76, 0.13);
        }

        .premium-ticket-actions a:hover,
        .premium-ticket-actions button:hover,
        .premium-ticket-qr-actions button:hover {
          transform: translateY(-2px);
        }

        @keyframes ticketPassShine {
          0%, 55% { transform: translateX(0) skewX(-18deg); opacity: 0; }
          68% { opacity: 1; }
          100% { transform: translateX(420%) skewX(-18deg); opacity: 0; }
        }

        @keyframes ticketQrPulse {
          0%, 100% { box-shadow: 0 0 0 8px rgba(255, 189, 89, 0.08), 0 18px 42px rgba(255, 138, 0, 0.16) !important; }
          50% { box-shadow: 0 0 0 13px rgba(255, 189, 89, 0.13), 0 24px 58px rgba(255, 138, 0, 0.22) !important; }
        }

        @media (max-width: 720px) {
          .premium-ticket-header,
          .premium-ticket-actions,
          .premium-ticket-pass {
            display: grid;
          }

          .premium-ticket-stub {
            width: 100%;
            text-align: left;
          }

          .premium-ticket-pass::after {
            display: none;
          }

          .premium-ticket-details,
          .premium-ticket-meta {
            grid-template-columns: 1fr;
          }

          .premium-ticket-actions a,
          .premium-ticket-actions button {
            width: 100%;
          }
        }

        @media (max-width: 540px) {
          .premium-ticket-card {
            border-radius: 24px;
            padding: 0.95rem;
          }

          .premium-ticket-header {
            align-items: start;
          }

          .premium-ticket-status {
            width: fit-content;
            max-width: 100%;
          }

          .premium-ticket-pass {
            border-radius: 20px;
            padding: 0.9rem;
          }

          .premium-ticket-meta div,
          .premium-ticket-details span,
          .premium-ticket-qr {
            padding: 0.72rem;
          }
        }

        @media (max-width: 420px) {
          .premium-ticket-card {
            border-radius: 22px;
            padding: 0.85rem;
          }

          .premium-ticket-qr-actions {
            display: grid;
            width: 100%;
          }

          .premium-ticket-qr-actions button {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .premium-ticket-card {
            border-radius: 18px;
            padding: 0.72rem;
          }

          .premium-ticket-header h3 {
            font-size: 1.12rem;
          }

          .premium-ticket-header p,
          .premium-ticket-type,
          .premium-ticket-stub span,
          .premium-ticket-meta span {
            font-size: 0.62rem;
            letter-spacing: 0.09em;
          }

          .premium-ticket-pass-main strong {
            font-size: 1.15rem;
          }

          .premium-ticket-actions a,
          .premium-ticket-actions button,
          .premium-ticket-qr-actions button {
            min-height: 42px;
            padding-inline: 0.72rem;
            font-size: 0.86rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-ticket-pass::before,
          .premium-ticket-qr > div > div {
            animation: none;
          }
        }
      `})]})}const Hb=["VIP Entry","Celebrity Concert","Partner Discounts","Food Court Access","Festival Merchandise","Priority Entry"],Vb=["Secure Ticket","Official Entry Pass","QR Verified","Instant Validation","Protected Account"],Yb=["Booking Created","Payment Verified","Ticket Approved","QR Generated","Ready To Attend"],qb=["Festival Member","Digital Pass Ready","Partner Offers Unlocked","VIP Wallet Active"];function au(){const e=new Date("2026-11-01T18:00:00+05:00").getTime(),t=Math.max(0,e-Date.now());return{days:Math.floor(t/(1e3*60*60*24)),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/(1e3*60)%60)}}function Wb(){const{tickets:e,loading:t,fetchMyTickets:r}=gs(),{user:a}=bt(),[i,s]=k.useState(au);k.useEffect(()=>{r()},[r]),k.useEffect(()=>{const l=window.setInterval(()=>s(au()),6e4);return()=>window.clearInterval(l)},[]);const o=`${(a==null?void 0:a.firstName)||""} ${(a==null?void 0:a.lastName)||""}`.trim()||(a==null?void 0:a.name)||(a==null?void 0:a.email)||"Festival Member",c=k.useMemo(()=>{const l=e.filter(u=>u.status==="approved").length,d=e.filter(u=>u.status!=="approved").length;return[[e.length,"Total Tickets"],[l,"QR Ready"],[d,"In Review"],[l*250+e.length*100,"Reward Points"],[l>1?"VIP":l===1?"Gold":"Member","Festival Level"]]},[e]);return n.jsxs("main",{className:"my-tickets-premium",children:[n.jsxs("section",{className:"my-tickets-hero",children:[n.jsx("div",{className:"my-tickets-orb my-tickets-orb-one"}),n.jsx("div",{className:"my-tickets-orb my-tickets-orb-two"}),n.jsxs("div",{className:"my-tickets-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"my-tickets-hero-content",children:[n.jsx("p",{children:"Digital Festival Wallet"}),n.jsx("h1",{children:"Your Ozilla Festival Passes"}),n.jsx("span",{children:"Access your tickets, download your QR codes, and get ready for the biggest entertainment festival."})]})]}),n.jsxs("section",{className:"my-tickets-shell",children:[n.jsxs("div",{className:"ticket-wallet-dashboard",children:[n.jsxs("article",{className:"ticket-wallet-profile",children:[n.jsx("div",{className:"ticket-wallet-avatar",children:String(o).slice(0,1).toUpperCase()}),n.jsxs("div",{children:[n.jsx("p",{children:"Welcome Back,"}),n.jsx("h2",{children:o}),n.jsx("span",{children:"Verified User"}),n.jsx("span",{children:"Official Ticket Holder"}),n.jsx("span",{children:"Festival Member"}),n.jsx("span",{children:e.length>2?"VIP Loyalty":e.length>0?"Gold Loyalty":"Member Since 2026"})]})]}),n.jsxs("article",{className:"ticket-wallet-countdown",children:[n.jsx("p",{children:"Festival Starts In"}),n.jsxs("div",{children:[n.jsx("strong",{children:i.days}),n.jsx("span",{children:"Days"}),n.jsx("strong",{children:i.hours}),n.jsx("span",{children:"Hours"}),n.jsx("strong",{children:i.minutes}),n.jsx("span",{children:"Minutes"})]})]})]}),n.jsx("div",{className:"ticket-wallet-stats",children:c.map(([l,d])=>n.jsxs("article",{children:[n.jsx("strong",{children:l}),n.jsx("span",{children:d})]},d))}),t?n.jsxs("div",{className:"ticket-wallet-loading",children:[n.jsx("div",{className:"ticket-wallet-spinner"}),n.jsx("h2",{children:"Loading Your Tickets..."}),n.jsx("p",{children:"Preparing your premium digital festival wallet."}),n.jsxs("div",{className:"ticket-skeleton-grid",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}):e.length===0?n.jsxs("div",{className:"ticket-wallet-empty",children:[n.jsx("div",{className:"ticket-empty-mark",children:"QR"}),n.jsx("h2",{children:"You haven't booked any tickets yet."}),n.jsx("p",{children:"Reserve your Ozilla Festival pass and unlock your personal digital ticket wallet."}),n.jsx(B,{to:"/tickets",children:"Purchase Ticket"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ticket-wallet-section-heading",children:[n.jsx("p",{children:"Your Official Passes"}),n.jsx("h2",{children:"Premium Festival Tickets"})]}),n.jsx("div",{className:"ticket-wallet-grid",children:e.map(l=>n.jsx(vh,{ticket:l,actionLabel:"Open Details"},l.id))})]}),n.jsxs("div",{className:"ticket-wallet-extras",children:[n.jsxs("article",{className:"ticket-wallet-card",children:[n.jsx("p",{children:"Ticket Benefits"}),n.jsx("div",{className:"ticket-wallet-benefits",children:Hb.map(l=>n.jsx("span",{children:l},l))})]}),n.jsxs("article",{className:"ticket-wallet-card",children:[n.jsx("p",{children:"Booking History"}),n.jsx("div",{className:"ticket-wallet-timeline",children:Yb.map((l,d)=>n.jsx("span",{className:d<3?"is-active":"",children:l},l))})]}),n.jsxs("article",{className:"ticket-wallet-card",children:[n.jsx("p",{children:"Festival Journey"}),n.jsx("div",{className:"ticket-wallet-journey",children:qb.map((l,d)=>n.jsx("span",{className:d<=Math.min(3,e.length)?"is-active":"",children:l},l))})]}),n.jsxs("article",{className:"ticket-wallet-card ticket-save-wallet-card",children:[n.jsx("p",{children:"Wallet Access"}),n.jsx("h3",{children:"Save your pass to your digital wallet."}),n.jsx("span",{children:"Apple Wallet / Google Wallet style access is prepared as a premium interface."}),n.jsx("button",{type:"button",children:"Save to Wallet"})]}),n.jsxs("article",{className:"ticket-wallet-card",children:[n.jsx("p",{children:"Trust & Security"}),n.jsx("div",{className:"ticket-wallet-trust",children:Vb.map(l=>n.jsx("span",{children:l},l))})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function Gb(){return n.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:n.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})})}function Xb(){const{ticketId:e}=Sm(),{getTicketById:t}=gs(),[r,a]=k.useState(null),[i,s]=k.useState(!0),[o,c]=k.useState(!1),[l,d]=k.useState(null),u=(r==null?void 0:r.status)==="approved",p=["pending","payment_submitted"].includes(r==null?void 0:r.status);if(k.useEffect(()=>{(async()=>{try{const w=await t(e);a(w)}catch{a(null)}finally{s(!1)}})()},[e,t]),i)return n.jsx(Gb,{});if(!r)return n.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:n.jsx("p",{className:"text-gray-600",children:"Ticket not found."})});const f=async()=>{var x,w;c(!0),d(null);try{const v=await pt.cancelTicket(r.id);a(v.ticket),d({type:"success",message:v.message||"Ticket cancelled successfully."})}catch(v){d({type:"error",message:((w=(x=v.response)==null?void 0:x.data)==null?void 0:w.message)||"Failed to cancel ticket."})}finally{c(!1)}},b=()=>{const x=document.querySelector("canvas"),w=x?x.toDataURL("image/png"):"",v=r.uniqueTicketId||r.ticketId||r.id,m=`${r.eventName||"Ozilla Festival Ticket"} - ${v}`,h=window.open("","_blank","noopener,noreferrer,width=900,height=700");h&&(h.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${m}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 24px; color: #111827; }
            .ticket { border: 2px solid #7b1118; border-radius: 10px; overflow: hidden; }
            .head { background: #7b1118; color: white; padding: 14px 18px; font-size: 24px; font-weight: 700; }
            .body { padding: 16px 18px; }
            .row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e5e7eb; }
            .row:last-child { border-bottom: none; }
            .label { color: #4b5563; }
            .value { font-weight: 700; }
            .qr-wrap { margin-top: 16px; display: flex; justify-content: center; }
            .qr-wrap img { width: 160px; height: 160px; border: 1px dashed #d1d5db; padding: 8px; border-radius: 8px; }
            .note { margin-top: 12px; color: #6b7280; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="ticket">
            <div class="head">${r.eventName||"Ozilla Festival"}</div>
            <div class="body">
              <div class="row"><span class="label">Ticket ID</span><span class="value">${v}</span></div>
              <div class="row"><span class="label">Name</span><span class="value">${r.fullName||r.name||"-"}</span></div>
              <div class="row"><span class="label">Email</span><span class="value">${r.email||"-"}</span></div>
              <div class="row"><span class="label">Phone</span><span class="value">${r.phone||"-"}</span></div>
              <div class="row"><span class="label">Date</span><span class="value">${r.eventDate||"-"}</span></div>
              <div class="row"><span class="label">Time</span><span class="value">${r.eventTime||"-"}</span></div>
              <div class="row"><span class="label">Day</span><span class="value">${r.festivalDay==="day2"?"Day 2":"Day 1"}</span></div>
              <div class="row"><span class="label">Location</span><span class="value">${r.location||"-"}</span></div>
              <div class="qr-wrap">${w?`<img src="${w}" alt="QR Code" />`:""}</div>
              <div class="note">Use Print dialog and choose "Save as PDF".</div>
            </div>
          </div>
          <script>window.onload = () => window.print();<\/script>
        </body>
      </html>
    `),h.document.close())};return n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between gap-3 mb-6",children:[n.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Ticket Details"}),u?n.jsx("button",{type:"button",onClick:b,className:"bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700",children:"Download PDF"}):null]}),l&&n.jsx(Ca,{type:l.type,message:l.message,onClose:()=>d(null)}),n.jsxs("div",{className:"grid grid-cols-1 gap-8",children:[n.jsx(vh,{ticket:r,actionTo:"/tickets/my-tickets",actionLabel:"View My Tickets"}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[p&&n.jsx("button",{type:"button",className:"mb-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700",onClick:f,disabled:o,children:o?"Cancelling...":"Cancel Ticket"}),u?n.jsxs("div",{className:"mt-2 p-4 bg-green-50 rounded-lg",children:[n.jsx("h2",{className:"text-xl font-bold text-green-800 mb-2",children:"Ticket Generated"}),n.jsx("p",{className:"text-green-700 text-sm",children:"QR code is shown above View Ticket button on your ticket card."})]}):n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Ticket Generation"}),n.jsxs("div",{className:"bg-yellow-50 rounded-lg p-4",children:[n.jsx("p",{className:"text-yellow-800 font-semibold mb-1",children:"Ticket is not generated yet."}),n.jsxs("p",{className:"text-yellow-700 text-sm",children:["Your ticket and QR code will be generated automatically after admin approval. Current status: ",n.jsx("span",{className:"font-semibold",children:r.status})]})]})]})]})]})]})}function Qb(){const{ticketId:e}=Sm(),[t,r]=k.useState(null),[a,i]=k.useState(""),[s,o]=k.useState(!0),[c,l]=k.useState(!1),[d,u]=k.useState(null),[p,f]=k.useState(""),b=v=>v==="approved"?"bg-green-100 text-green-800":v==="payment_submitted"?"bg-blue-100 text-blue-700":v==="rejected"||v==="cancelled"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-800",x=v=>{try{const m=JSON.parse(v),g=["ticketId","fullName","email","phone","eventName","eventDate","eventTime"].filter(y=>!m[y]);return g.length>0?{ok:!1,message:`Missing fields: ${g.join(", ")}`}:{ok:!0,parsed:m}}catch{return{ok:!1,message:"QR payload is not valid JSON."}}};k.useEffect(()=>{(async()=>{try{const m=await pt.getTicketById(e);r(m),i(JSON.stringify({ticketId:m.uniqueTicketId||m.ticketId||m.id,fullName:m.fullName||m.name,email:m.email,phone:m.phone,eventName:m.eventName,eventDate:m.eventDate,eventTime:m.eventTime},null,2))}catch{u({type:"error",message:"Ticket not found"})}finally{o(!1)}})()},[e]);const w=async()=>{var m,h,g,y,S;u(null),f("");const v=x(a);if(!v.ok){f(v.message);return}l(!0);try{const N=await pt.verifyTicketByQr(a);r(N.ticket||t),u({type:"success",message:N.message||`Ticket verified: ${N.status}`})}catch(N){const C=((h=(m=N.response)==null?void 0:m.data)==null?void 0:h.message)||"Verification failed",P=(S=(y=(g=N.response)==null?void 0:g.data)==null?void 0:y.mismatchedFields)!=null&&S.length?` Mismatched fields: ${N.response.data.mismatchedFields.join(", ")}.`:"";u({type:"error",message:`${C}${P}`})}finally{l(!1)}};return s?n.jsx("div",{className:"flex items-center justify-center min-h-screen",children:n.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"})}):n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[n.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"Ticket Verification"}),d&&n.jsx(Ca,{type:d.type,message:d.message,onClose:()=>u(null)}),t?n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:t.eventName}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-semibold",children:"Date:"})," ",t.eventDate]}),n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-semibold",children:"Location:"})," ",t.location]}),n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-semibold",children:"Ticket Type:"})," ",t.ticketType]}),n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-semibold",children:"Status:"}),n.jsx("span",{className:`ml-2 px-3 py-1 rounded-full text-sm ${b(t.status)}`,children:t.status})]})]})]}),n.jsx("div",{className:"text-center",children:n.jsx("div",{className:"bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 inline-block",children:n.jsx("div",{className:"w-48 h-48 bg-gray-100 flex items-center justify-center",children:n.jsx("span",{className:"text-gray-400",children:"Scan / Paste QR Data"})})})}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-gray-700 mb-2 font-semibold",children:"QR Payload"}),n.jsx("textarea",{className:"w-full px-4 py-2 border rounded-lg",rows:6,value:a,onChange:v=>i(v.target.value)}),p&&n.jsx("p",{className:"text-sm text-red-600 mt-2",children:p})]}),n.jsx("button",{onClick:w,disabled:c,className:"w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-semibold",children:c?"Verifying...":"Verify Ticket"})]}):n.jsx("div",{className:"text-center text-gray-600",children:n.jsx("p",{children:"Ticket not found or invalid."})})]})})}const ei={async getDashboard(){return(await J.get("/admin/dashboard")).data},async getUsers(){return(await J.get("/admin/users")).data},async getPayments(){return(await J.get("/admin/payments")).data},async getReports(){return(await J.get("/admin/reports")).data}};function Kb(){const{isAdmin:e}=bt(),[t,r]=k.useState(!0),[a,i]=k.useState(null),[s,o]=k.useState(null),[c,l]=k.useState([]),[d,u]=k.useState([]),[p,f]=k.useState(null);if(k.useEffect(()=>{(async()=>{var m,h;if(!e){r(!1);return}r(!0);try{const[g,y,S,N]=await Promise.all([ei.getDashboard(),ei.getUsers(),ei.getPayments(),ei.getReports()]);o(g),l(y),u(S),f(N)}catch(g){i({type:"error",message:((h=(m=g.response)==null?void 0:m.data)==null?void 0:h.message)||"Failed to load admin dashboard."})}finally{r(!1)}})()},[e]),!e)return n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[n.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Admin Access Required"}),n.jsx("p",{className:"text-gray-600",children:"Only admin accounts can access this dashboard."})]});if(t)return n.jsx("div",{className:"bg-white rounded-lg shadow-md p-8",children:n.jsx("p",{className:"text-gray-600",children:"Loading admin dashboard..."})});const b=(s==null?void 0:s.stats)||{},x=(s==null?void 0:s.ticketStatus)||{},w=(p==null?void 0:p.ticketsByType)||{};return n.jsxs("div",{children:[n.jsx(Ct,{title:"Admin Dashboard",subtitle:"Users, payments, ticket status, and reports"}),a&&n.jsx(Ca,{type:a.type,message:a.message,onClose:()=>i(null)}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Total Users"}),n.jsx("p",{className:"text-3xl font-bold text-gray-800",children:b.totalUsers||0})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Total Tickets"}),n.jsx("p",{className:"text-3xl font-bold text-gray-800",children:b.totalTickets||0})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Total Events"}),n.jsx("p",{className:"text-3xl font-bold text-gray-800",children:b.totalEvents||0})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Revenue Estimate"}),n.jsxs("p",{className:"text-2xl font-bold text-gray-800",children:["PKR ",Number(b.totalRevenueEstimate||0).toLocaleString()]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Ticket Status"}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("p",{className:"text-gray-700",children:["Pending: ",n.jsx("span",{className:"font-semibold",children:x.pending||0})]}),n.jsxs("p",{className:"text-gray-700",children:["Payment Submitted: ",n.jsx("span",{className:"font-semibold",children:x.payment_submitted||0})]}),n.jsxs("p",{className:"text-gray-700",children:["Approved: ",n.jsx("span",{className:"font-semibold",children:x.approved||0})]}),n.jsxs("p",{className:"text-gray-700",children:["Rejected: ",n.jsx("span",{className:"font-semibold",children:x.rejected||0})]}),n.jsxs("p",{className:"text-gray-700",children:["Cancelled: ",n.jsx("span",{className:"font-semibold",children:x.cancelled||0})]})]})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Tickets by Type"}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("p",{className:"text-gray-700",children:["Regular: ",n.jsx("span",{className:"font-semibold",children:w.regular||0})]}),n.jsxs("p",{className:"text-gray-700",children:["VIP: ",n.jsx("span",{className:"font-semibold",children:w.vip||0})]}),n.jsxs("p",{className:"text-gray-700",children:["Premium: ",n.jsx("span",{className:"font-semibold",children:w.premium||0})]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Recent Users"}),c.length===0?n.jsx("p",{className:"text-gray-600",children:"No users yet."}):n.jsx("div",{className:"space-y-2",children:c.slice(0,8).map(v=>n.jsxs("div",{className:"p-3 bg-gray-50 rounded-lg",children:[n.jsx("p",{className:"font-semibold text-gray-800",children:v.name||`${v.firstName||""} ${v.lastName||""}`.trim()||"User"}),n.jsx("p",{className:"text-sm text-gray-600",children:v.email})]},v.id))})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Recent Payment Cases"}),d.length===0?n.jsx("p",{className:"text-gray-600",children:"No payment records yet."}):n.jsx("div",{className:"space-y-2",children:d.slice(0,8).map(v=>n.jsxs("div",{className:"p-3 bg-gray-50 rounded-lg",children:[n.jsxs("p",{className:"font-semibold text-gray-800",children:[v.fullName," - ",v.eventName]}),n.jsx("p",{className:"text-sm text-gray-600",children:v.email}),n.jsxs("p",{className:"text-sm text-gray-600",children:["Status: ",n.jsx("span",{className:"font-semibold",children:v.status})]})]},v.id))})]})]})]})}function Jb(){const{isAdmin:e}=bt(),[t,r]=k.useState([]),[a,i]=k.useState(!0),[s,o]=k.useState(null),[c,l]=k.useState(null),d=async()=>{var p,f;i(!0);try{const b=await pt.getPendingTicketsAdmin();r(b)}catch(b){l({type:"error",message:((f=(p=b.response)==null?void 0:p.data)==null?void 0:f.message)||"Failed to load pending tickets."})}finally{i(!1)}};k.useEffect(()=>{e?d():i(!1)},[e]);const u=async(p,f)=>{var b,x;o(p);try{await pt.decideTicketAdmin(p,f),l({type:"success",message:`Ticket ${f} successfully.`}),await d()}catch(w){l({type:"error",message:((x=(b=w.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to update ticket."})}finally{o(null)}};return e?n.jsxs("div",{children:[n.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:"Admin Ticket Verification"}),c&&n.jsx(Ca,{type:c.type,message:c.message,onClose:()=>l(null)}),a?n.jsx("div",{className:"bg-white rounded-lg shadow-md p-8",children:n.jsx("p",{className:"text-gray-600",children:"Loading pending tickets..."})}):t.length===0?n.jsx("div",{className:"bg-white rounded-lg shadow-md p-8",children:n.jsx("p",{className:"text-gray-600",children:"No pending payment submissions found."})}):n.jsx("div",{className:"space-y-4",children:t.map(p=>n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Name:"})," ",p.fullName]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Email:"})," ",p.email]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Phone:"})," ",p.phone]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Ticket ID:"})," ",p.uniqueTicketId||p.ticketId||p.id]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Event:"})," ",p.eventName]}),n.jsxs("p",{className:"text-gray-700",children:[n.jsx("span",{className:"font-semibold",children:"Status:"})," ",p.status]})]}),p.paymentProofPath?n.jsx("a",{href:`http://localhost:5000/${p.paymentProofPath}`,target:"_blank",rel:"noreferrer",className:"inline-block text-purple-700 font-semibold mb-4",children:"View Payment Proof"}):n.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"No payment proof URL available."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{type:"button",className:"bg-blue-600 text-white px-4 py-2 rounded-lg",onClick:()=>u(p.id,"approved"),disabled:s===p.id,children:"Approve"}),n.jsx("button",{type:"button",className:"bg-red-600 text-white px-4 py-2 rounded-lg",onClick:()=>u(p.id,"rejected"),disabled:s===p.id,children:"Reject"})]})]},p.id))})]}):n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[n.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Admin Access Required"}),n.jsx("p",{className:"text-gray-600",children:"Only admin accounts can review payment proofs."})]})}const Zb=[{id:"privacy-introduction",number:"01",icon:"PV",title:"Introduction",text:"This Privacy Policy explains how Ozilla Festival handles visitor, account, ticket, and support information with transparency and care."},{id:"information-collection",number:"02",icon:"ID",title:"Information We Collect",text:"We may collect details such as name, email address, phone number, account information, ticket requests, and support messages."},{id:"data-use",number:"03",icon:"DU",title:"How We Use Data",text:"Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations."},{id:"cookies",number:"04",icon:"CK",title:"Cookies",text:"Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience."},{id:"third-party-services",number:"05",icon:"TP",title:"Third-Party Services",text:"Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required."},{id:"data-security",number:"06",icon:"SC",title:"Data Security",text:"We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe."},{id:"user-rights",number:"07",icon:"RT",title:"User Rights",text:"Visitors can contact Ozilla Festival to request support, corrections, clarification, or help with account and privacy-related questions."},{id:"children-privacy",number:"08",icon:"FM",title:"Children's Privacy",text:"Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules."},{id:"policy-updates",number:"09",icon:"UP",title:"Policy Updates",text:"This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services."},{id:"privacy-contact",number:"10",icon:"CT",title:"Contact Information",text:"For privacy questions, account support, or clarification, visitors can contact the Ozilla Festival support team through the Contact page."}],e5=[{id:"introduction",number:"01",icon:"TR",title:"Introduction",text:"These Terms & Conditions explain the policies that help Ozilla Festival maintain a safe, organized, and enjoyable festival experience for every visitor."},{id:"ticket-policy",number:"02",icon:"TK",title:"Ticket Policy",text:"Tickets are issued for the selected Ozilla Festival access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure."},{id:"payments",number:"03",icon:"PM",title:"Payments",text:"Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval."},{id:"refund-policy",number:"04",icon:"RF",title:"Refund Policy",text:"Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow."},{id:"festival-rules",number:"05",icon:"RL",title:"Festival Rules",text:"Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry."},{id:"privacy",number:"06",icon:"PR",title:"Privacy",text:"Personal information is used for event operations, communication, ticketing, and support. Ozilla Festival does not sell visitor information."},{id:"liability",number:"07",icon:"LB",title:"Liability",text:"Ozilla Festival may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance."},{id:"user-responsibilities",number:"08",icon:"UR",title:"User Responsibilities",text:"Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams."},{id:"contact-information",number:"09",icon:"CT",title:"Contact Information",text:"For clarification about these Terms & Conditions, contact the Ozilla Festival support team through the official contact page."}],t5=[["Important Policy Update","Official event instructions, entry rules, and safety notices may be updated before the festival."],["Key Information","Keep your ticket details secure and contact support if anything needs clarification."]],r5=[["Privacy First","Your account, ticket, and support information is handled with transparency and careful access control."],["Security Guaranteed","Ozilla Festival uses secure workflows to protect authentication, ticket requests, and payment-related support."]],n5=[["Notice","Important Notice","Under 16 attendees are allowed with their family according to the current event notice."],["Entry","Restricted Items","Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points."],["Update","Policy Updates","Operational updates may be shared before or during the festival through official Ozilla Festival channels."]],a5=[["Promise","Privacy Promise","We never misuse your information and keep data usage limited to festival, account, ticket, and support needs."],["Rights","Your Rights","Visitors can contact the team for privacy questions, account support, corrections, or clarification."],["Cookies","Cookie Usage","Cookies are used only to support functionality, sessions, performance, and a smoother website experience."]],i5=[["Secure Ticket Purchase","Ticket and booking policies are structured to keep visitor access clear and verifiable."],["Refund Protection","Refund requests follow the official support process so every case is reviewed consistently."],["Privacy Commitment","Visitor information is used only for festival operations, ticketing, communication, and support."],["Safe Payments","Payment details are reviewed through trusted workflows for booking confirmation and assistance."],["Festival Rules","Clear rules help protect guests, families, artists, partners, and the event experience."],["Professional Support","The Ozilla Festival team is available for policy questions and event guidance."]],s5=[["Secure Authentication","Protected account access for ticket and user workflows."],["Encrypted Data","Sensitive flows are handled through secured application processes."],["Protected Payments","Payment-related support is managed through trusted verification steps."],["Secure Database","Visitor data is handled with careful operational access controls."],["Privacy First","Information is used for clear festival purposes only."],["Safe Browsing","The website experience is designed around trust, clarity, and secure usage."]],o5=[{target:100,suffix:"%",label:"Secure Authentication"},{target:256,suffix:"-bit",label:"Data Encryption"},{value:"Protected",label:"User Accounts"},{value:"Secure",label:"Payment Processing"}],l5=["We never misuse your information.","Your data remains protected.","Secure ticket purchases.","Safe payment processing.","Transparent privacy practices."],c5=[["Email","ozillafestival@gmail.com"],["Phone","+92 322 6622221"],["Support Hours","Monday to Saturday, 10:00 AM - 7:00 PM"]];function iu({type:e}){const t=e==="terms",[r,a]=k.useState(0),[i,s]=k.useState(""),[o,c]=k.useState(0),l=k.useMemo(()=>t?e5:Zb,[t]),d=t?t5:r5,u=t?n5:a5,p=t?i5:s5;k.useEffect(()=>{const x=()=>{const w=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.scrollHeight-window.innerHeight;a(v>0?Math.min(100,Math.max(0,w/v*100)):0)};return x(),window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]),k.useEffect(()=>{const x=new IntersectionObserver(w=>{var m;const v=w.filter(h=>h.isIntersecting).sort((h,g)=>g.intersectionRatio-h.intersectionRatio)[0];(m=v==null?void 0:v.target)!=null&&m.id&&s(v.target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[.15,.35,.55]});return l.forEach(w=>{const v=document.getElementById(w.id);v&&x.observe(v)}),()=>x.disconnect()},[l]),k.useEffect(()=>{const x=Array.from(document.querySelectorAll(".legal-reveal"));if(!x.length)return;const w=new IntersectionObserver(v=>{v.forEach(m=>{m.target.classList.toggle("is-visible",m.isIntersecting)})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return x.forEach(v=>w.observe(v)),()=>w.disconnect()},[t]),k.useEffect(()=>{if(t)return;const x=document.querySelector(".legal-stat-grid");if(!x)return;let w;const v=()=>{const h=performance.now(),g=900,y=S=>{const N=Math.min(1,(S-h)/g);c(N),N<1&&(w=requestAnimationFrame(y))};cancelAnimationFrame(w),c(0),w=requestAnimationFrame(y)},m=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&v()})},{threshold:.28});return m.observe(x),()=>{cancelAnimationFrame(w),m.disconnect()}},[t]);const f=t?"Terms & Conditions":"Privacy Policy",b=t?"Please review our policies carefully to ensure a safe and enjoyable Ozilla Festival experience.":"Your privacy matters. We are committed to protecting your personal information and providing complete transparency.";return n.jsxs("main",{className:`legal-premium-page ${t?"legal-terms-page":"legal-privacy-page"}`,children:[n.jsx("div",{className:"legal-scroll-progress","aria-hidden":"true",children:n.jsx("span",{style:{width:`${r}%`}})}),n.jsxs("section",{className:"legal-hero",children:[n.jsx("div",{className:"legal-hero-orb legal-hero-orb-one"}),n.jsx("div",{className:"legal-hero-orb legal-hero-orb-two"}),n.jsxs("div",{className:"legal-particles","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("div",{className:"legal-hero-content legal-reveal",children:[n.jsx("p",{className:"legal-kicker",children:"Ozilla Festival 2026"}),n.jsx("h1",{children:f}),n.jsx("p",{children:b}),!t&&n.jsxs("div",{className:"privacy-hero-trust","aria-label":"Privacy trust highlights",children:[n.jsx("span",{children:"Privacy First"}),n.jsx("span",{children:"Secure Ticketing"}),n.jsx("span",{children:"Transparent Data Use"})]})]})]}),n.jsxs("section",{className:"legal-shell",children:[n.jsxs("aside",{className:"legal-sidebar","aria-label":`${f} quick navigation`,children:[n.jsx("p",{children:t?"Quick Navigation":"Privacy Center"}),n.jsx("nav",{children:l.map(x=>n.jsxs("a",{href:`#${x.id}`,className:i===x.id?"is-active":"",children:[n.jsx("span",{children:x.number}),x.title]},x.id))})]}),n.jsxs("div",{className:"legal-document",children:[n.jsxs("div",{className:"legal-document-top legal-reveal",children:[n.jsxs("div",{children:[n.jsx("p",{className:"legal-kicker",children:t?"Premium Legal Portal":"Executive Privacy Center"}),n.jsx("h2",{children:t?"Clear Policies For A Better Festival":"Your Information, Handled With Care"})]}),n.jsx("span",{className:"legal-updated",children:"Updated for 2026"})]}),n.jsx("div",{className:"legal-policy-banners legal-reveal",children:d.map(([x,w])=>n.jsxs("article",{children:[n.jsx("strong",{children:x}),n.jsx("span",{children:w})]},x))}),!t&&n.jsx("div",{className:"legal-stat-grid legal-reveal",children:o5.map((x,w)=>n.jsxs("article",{style:{"--delay":`${w*70}ms`},children:[n.jsx("strong",{className:"legal-stat-value",children:x.value||`${Math.round(x.target*o)}${x.suffix}`}),n.jsx("span",{children:x.label})]},x.label))}),n.jsx("div",{className:"legal-highlight-grid",children:u.map(([x,w,v],m)=>n.jsxs("article",{className:"legal-highlight-card legal-reveal",style:{"--delay":`${m*80}ms`},children:[n.jsx("span",{children:x}),n.jsx("h3",{children:w}),n.jsx("p",{children:v})]},w))}),n.jsx("div",{className:"legal-benefit-grid",children:p.map(([x,w],v)=>n.jsxs("article",{className:"legal-benefit-card legal-reveal",style:{"--delay":`${v*55}ms`},children:[n.jsx("span",{children:String(v+1).padStart(2,"0")}),n.jsxs("div",{children:[n.jsx("h3",{children:x}),n.jsx("p",{children:w})]})]},x))}),n.jsx("div",{className:"legal-section-list",children:l.map((x,w)=>n.jsxs("article",{id:x.id,className:"legal-section-card legal-reveal",style:{"--delay":`${w*45}ms`},children:[n.jsx("div",{className:"legal-section-icon","aria-hidden":"true",children:x.icon}),n.jsxs("div",{children:[n.jsx("span",{className:"legal-section-number",children:x.number}),n.jsx("h3",{children:x.title}),n.jsx("p",{children:x.text})]})]},x.id))}),t?n.jsxs("article",{className:"legal-acceptance-card legal-reveal",children:[n.jsx("span",{"aria-hidden":"true",children:"OK"}),n.jsxs("div",{children:[n.jsx("h3",{children:"By continuing to use Ozilla Festival, you acknowledge and agree to these Terms & Conditions."}),n.jsx("p",{children:"Please read each section carefully before purchasing tickets, creating an account, or attending the event."})]})]}):n.jsxs("article",{className:"legal-promise-card legal-reveal",children:[n.jsx("p",{className:"legal-kicker",children:"Our Privacy Promise"}),n.jsx("h3",{children:"Transparent, secure, and respectful data practices."}),n.jsx("div",{children:l5.map(x=>n.jsx("span",{children:x},x))})]}),n.jsxs("section",{className:"legal-support-cta legal-reveal",children:[n.jsx("p",{className:"legal-kicker",children:t?"We Believe In Complete Transparency":"Questions About Your Privacy?"}),n.jsx("h2",{children:t?"Need help understanding our policies?":"Our team is always available to assist you."}),n.jsx("p",{className:"legal-support-copy",children:t?"Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.":"If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime."}),n.jsx("div",{className:"legal-support-grid",children:c5.map(([x,w])=>n.jsxs("article",{children:[n.jsx("span",{children:x}),n.jsx("strong",{children:w})]},x))}),n.jsx(B,{to:"/contact",className:"legal-support-button",children:"Contact Support"})]})]})]})]})}function d5(){return n.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-50",children:[n.jsx("h1",{className:"text-9xl font-bold text-purple-600 mb-4",children:"404"}),n.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Page Not Found"}),n.jsx("p",{className:"text-gray-600 mb-8 text-center max-w-md",children:"The page you're looking for doesn't exist or has been moved."}),n.jsx(B,{to:"/",className:"bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors",children:"Go to Homepage"})]})}function u5(){return n.jsxs($0,{children:[n.jsxs(X,{element:n.jsx(o2,{}),children:[n.jsx(X,{path:"/login",element:n.jsx(Qs,{children:n.jsx(h2,{})})}),n.jsx(X,{path:"/register",element:n.jsx(Qs,{children:n.jsx(x2,{})})}),n.jsx(X,{path:"/auth/google/callback",element:n.jsx(Qs,{children:n.jsx(b2,{})})})]}),n.jsx(X,{path:"/",element:n.jsx(te,{children:n.jsx(Xd,{})})}),n.jsx(X,{path:"/dashboard",element:n.jsx(te,{children:n.jsx(Xd,{})})}),n.jsx(X,{path:"/about",element:n.jsx(te,{children:n.jsx(E2,{})})}),n.jsx(X,{path:"/collaboration",element:n.jsx(te,{children:n.jsx(P2,{})})}),n.jsx(X,{path:"/prismfest",element:n.jsx(te,{children:n.jsx(C2,{})})}),n.jsx(X,{path:"/prismfest/2023",element:n.jsx(te,{children:n.jsx(z2,{})})}),n.jsx(X,{path:"/prismfest/2024",element:n.jsx(te,{children:n.jsx(T2,{})})}),n.jsx(X,{path:"/prismfest/2025",element:n.jsx(te,{children:n.jsx(R2,{})})}),n.jsx(X,{path:"/prismfest/celebrities",element:n.jsx(te,{children:n.jsx(L2,{})})}),n.jsx(X,{path:"/prismfest/events",element:n.jsx(te,{children:n.jsx(Kd,{})})}),n.jsx(X,{path:"/prismfest/future",element:n.jsx(te,{children:n.jsx(F2,{})})}),n.jsx(X,{path:"/history",element:n.jsx(te,{children:n.jsx(U2,{})})}),n.jsx(X,{path:"/events",element:n.jsx(te,{children:n.jsx(Kd,{})})}),n.jsx(X,{path:"/sponsorship",element:n.jsx(te,{children:n.jsx(X2,{})})}),n.jsx(X,{path:"/contact",element:n.jsx(te,{children:n.jsx(tb,{})})}),n.jsx(X,{path:"/facilities",element:n.jsx(te,{children:n.jsx(ib,{})})}),n.jsx(X,{path:"/hotels",element:n.jsx(te,{children:n.jsx(cb,{})})}),n.jsx(X,{path:"/restaurants",element:n.jsx(te,{children:n.jsx(fb,{})})}),n.jsx(X,{path:"/discounts",element:n.jsx(te,{children:n.jsx(yb,{})})}),n.jsx(X,{path:"/partner",element:n.jsx(te,{children:n.jsx(vb,{})})}),n.jsx(X,{path:"/privacy",element:n.jsx(te,{children:n.jsx(iu,{type:"privacy"})})}),n.jsx(X,{path:"/terms",element:n.jsx(te,{children:n.jsx(iu,{type:"terms"})})}),n.jsx(X,{path:"/verification/:ticketId",element:n.jsx(te,{children:n.jsx(Qb,{})})}),n.jsx(X,{path:"/tickets",element:n.jsx(Ks,{children:n.jsx(Ab,{})})}),n.jsxs(X,{element:n.jsx(s2,{}),children:[n.jsx(X,{path:"/account",element:n.jsx(te,{children:n.jsx(Nb,{})})}),n.jsx(X,{path:"/admin/dashboard",element:n.jsx(te,{children:n.jsx(Kb,{})})}),n.jsx(X,{path:"/tickets/my-tickets",element:n.jsx(Ks,{children:n.jsx(Wb,{})})}),n.jsx(X,{path:"/tickets/view/:ticketId",element:n.jsx(Ks,{children:n.jsx(Xb,{})})}),n.jsx(X,{path:"/admin/tickets",element:n.jsx(te,{children:n.jsx(Jb,{})})})]}),n.jsx(X,{path:"*",element:n.jsx(d5,{})})]})}function p5(){const e="/ozillafest/".replace(/\/$/,"");return n.jsx(K0,{basename:e||void 0,future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:n.jsx(i2,{children:n.jsx(u5,{})})})}class m5 extends k.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("Application render failed:",t,r)}render(){return this.state.error?n.jsxs("main",{style:{padding:"32px",fontFamily:"Arial, sans-serif"},children:[n.jsx("h1",{style:{color:"#7c2d12",marginBottom:"12px"},children:"Ozilla Festival could not render"}),n.jsx("p",{style:{color:"#444",marginBottom:"16px"},children:"Check the browser console for the full error details."}),n.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#fff7ed",border:"1px solid #fed7aa",padding:"16px",borderRadius:"6px",color:"#7c2d12"},children:this.state.error.message})]}):this.props.children}}to.createRoot(document.getElementById("root")).render(n.jsx(we.StrictMode,{children:n.jsx(m5,{children:n.jsx(p5,{})})}));
