import{au as Q,ai as he,av as me}from"./index-4a162d3a.js";var $e=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))($e||{});const Z=e=>{const t=Q(e)?e:[e],n=[];return t.forEach(r=>{var s;Q(r)?n.push(...Z(r)):he(r)&&Q(r.children)?n.push(...Z(r.children)):(n.push(r),he(r)&&((s=r.component)!=null&&s.subTree)&&n.push(...Z(r.component.subTree)))}),n};var Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ge(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ye}=Object.prototype,{getPrototypeOf:ue}=Object,W=(e=>t=>{const n=Ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>W(t)===e),$=e=>t=>typeof t===e,{isArray:k}=Array,j=$("undefined");function Xe(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xe=x("ArrayBuffer");function Qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&xe(e.buffer),t}const Ze=$("string"),A=$("function"),Pe=$("number"),K=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,H=e=>{if(W(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=x("Date"),nt=x("File"),rt=x("Blob"),st=x("FileList"),ot=e=>K(e)&&A(e.pipe),it=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=W(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},at=x("URLSearchParams"),ut=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let f;for(r=0;r<i;r++)f=o[r],t.call(null,e[f],f,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _e=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!j(e)&&e!==_e;function se(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;H(t[o])&&H(r)?t[o]=se(t[o],r):H(r)?t[o]=se({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const ct=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&A(s)?e[o]=Ce(s,n):e[o]=s},{allOwnKeys:r}),e),lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ft=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dt=(e,t,n,r)=>{let s,o,i;const f={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!f[i]&&(t[i]=e[i],f[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ht=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),yt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Et=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=x("HTMLFormElement"),St=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wt=x("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Rt=e=>{Be(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ot=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Tt=()=>{},At=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",Ue={DIGIT:Ee,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Ee},gt=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return M(r,(i,f)=>{const p=n(i,s+1);!j(p)&&(o[f]=p)}),t[s]=void 0,o}}return r};return n(e,0)},xt=x("AsyncFunction"),Pt=e=>e&&(K(e)||A(e))&&A(e.then)&&A(e.catch),u={isArray:k,isArrayBuffer:xe,isBuffer:Xe,isFormData:it,isArrayBufferView:Qe,isString:Ze,isNumber:Pe,isBoolean:et,isObject:K,isPlainObject:H,isUndefined:j,isDate:tt,isFile:nt,isBlob:rt,isRegExp:wt,isFunction:A,isStream:ot,isURLSearchParams:at,isTypedArray:mt,isFileList:st,forEach:M,merge:se,extend:ct,trim:ut,stripBOM:lt,inherits:ft,toFlatObject:dt,kindOf:W,kindOfTest:x,endsWith:pt,toArray:ht,forEachEntry:yt,matchAll:Et,isHTMLForm:bt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:Be,freezeMethods:Rt,toObjectSet:Ot,toCamelCase:St,noop:Tt,toFiniteNumber:At,findKey:Le,global:_e,isContextDefined:De,ALPHABET:Ue,generateString:gt,isSpecCompliantForm:Nt,toJSONObject:Ct,isAsyncFn:xt,isThenable:Pt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}u.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=y.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(y,Fe);Object.defineProperty(ke,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(ke);return u.toFlatObject(e,i,function(p){return p!==Error.prototype},f=>f!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Lt=null;function oe(e){return u.isPlainObject(e)||u.isArray(e)}function je(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function _t(e){return u.isArray(e)&&!e.some(oe)}const Dt=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(l,h){return!u.isUndefined(h[l])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function c(a){if(a===null)return"";if(u.isDate(a))return a.toISOString();if(!p&&u.isBlob(a))throw new y("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(a)||u.isTypedArray(a)?p&&typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function d(a,l,h){let E=a;if(a&&!h&&typeof a=="object"){if(u.endsWith(l,"{}"))l=r?l:l.slice(0,-2),a=JSON.stringify(a);else if(u.isArray(a)&&_t(a)||(u.isFileList(a)||u.endsWith(l,"[]"))&&(E=u.toArray(a)))return l=je(l),E.forEach(function(T,S){!(u.isUndefined(T)||T===null)&&t.append(i===!0?be([l],S,o):i===null?l:l+"[]",c(T))}),!1}return oe(a)?!0:(t.append(be(h,l,o),c(a)),!1)}const m=[],w=Object.assign(Dt,{defaultVisitor:d,convertValue:c,isVisitable:oe});function b(a,l){if(!u.isUndefined(a)){if(m.indexOf(a)!==-1)throw Error("Circular reference detected in "+l.join("."));m.push(a),u.forEach(a,function(E,O){(!(u.isUndefined(E)||E===null)&&s.call(t,E,u.isString(O)?O.trim():O,l,w))===!0&&b(E,l?l.concat(O):[O])}),m.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&G(e,this,t)}const ve=ce.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Bt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Bt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=u.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ut{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=Ut,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=typeof URLSearchParams<"u"?URLSearchParams:ce,Ft=typeof FormData<"u"?FormData:null,jt=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:kt,FormData:Ft,Blob:jt},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:Mt,protocols:["http","https","file","blob","url","data"]};function It(e,t){return G(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ht(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];const f=Number.isFinite(+i),p=o>=n.length;return i=!i&&u.isArray(s)?s.length:i,p?(u.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!f):((!s[i]||!u.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&u.isArray(s[i])&&(s[i]=qt(s[i])),!f)}if(u.isFormData(e)&&u.isFunction(e.entries)){const n={};return u.forEachEntry(e,(r,s)=>{t(Ht(r),s,n,0)}),n}return null}const zt={"Content-Type":void 0};function Jt(e,t,n){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=u.isObject(t);if(o&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let f;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((f=u.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return G(f?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&u.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(f){if(i)throw f.name==="SyntaxError"?y.from(f,y.ERR_BAD_RESPONSE,this,null,this.response):f}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};u.forEach(["delete","get","head"],function(t){Y.headers[t]={}});u.forEach(["post","put","patch"],function(t){Y.headers[t]=u.merge(zt)});const le=Y,Vt=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Re=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:u.isArray(e)?e.map(q):String(e)}function $t(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Kt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(u.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!u.isString(t)){if(u.isString(r))return t.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(t)}}function Gt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Yt(e,t){const n=u.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(f,p,c){const d=F(p);if(!d)throw new Error("header name must be a non-empty string");const m=u.findKey(s,d);(!m||s[m]===void 0||c===!0||c===void 0&&s[m]!==!1)&&(s[m||p]=q(f))}const i=(f,p)=>u.forEach(f,(c,d)=>o(c,d,p));return u.isPlainObject(t)||t instanceof this.constructor?i(t,n):u.isString(t)&&(t=t.trim())&&!Kt(t)?i(Wt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=u.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return $t(s);if(u.isFunction(n))return n.call(this,s,r);if(u.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=u.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const f=u.findKey(r,i);f&&(!n||te(r,r[f],f,n))&&(delete r[f],s=!0)}}return u.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return u.forEach(this,(s,o)=>{const i=u.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const f=t?Gt(o):String(o).trim();f!==o&&delete n[o],n[f]=q(s),r[f]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return u.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const f=F(i);r[f]||(Yt(s,i),r[f]=!0)}return u.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.freezeMethods(X.prototype);u.freezeMethods(X);const P=X;function ne(e,t){const n=this||le,r=t||n,s=P.from(r.headers);let o=r.data;return u.forEach(e,function(f){o=f.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function qe(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}u.inherits(I,y,{__CANCEL__:!0});function Xt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Qt=C.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,f){const p=[];p.push(n+"="+encodeURIComponent(r)),u.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),u.isString(o)&&p.push("path="+o),u.isString(i)&&p.push("domain="+i),f===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function en(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!Zt(t)?en(e,t):t}const tn=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const f=u.isString(i)?s(i):i;return f.protocol===r.protocol&&f.host===r.host}}():function(){return function(){return!0}}();function nn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function rn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),d=r[o];i||(i=c),n[s]=p,r[s]=c;let m=o,w=0;for(;m!==s;)w+=n[m++],m=m%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const b=d&&c-d;return b?Math.round(w*1e3/b):void 0}}function Oe(e,t){let n=0;const r=rn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,f=o-n,p=r(f),c=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:f,rate:p||void 0,estimated:p&&i&&c?(i-o)/p:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const sn=typeof XMLHttpRequest<"u",on=sn&&function(e){return new Promise(function(n,r){let s=e.data;const o=P.from(e.headers).normalize(),i=e.responseType;let f;function p(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}u.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+a))}const d=ze(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const b=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),l={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:b,config:e,request:c};Xt(function(E){n(E),p()},function(E){r(E),p()},l),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let a=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const l=e.transitional||Ie;e.timeoutErrorMessage&&(a=e.timeoutErrorMessage),r(new y(a,l.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},C.isStandardBrowserEnv){const b=(e.withCredentials||tn(d))&&e.xsrfCookieName&&Qt.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&u.forEach(o.toJSON(),function(a,l){c.setRequestHeader(l,a)}),u.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(f=b=>{c&&(r(!b||b.type?new I(null,e,c):b),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f)));const w=nn(d);if(w&&C.protocols.indexOf(w)===-1){r(new y("Unsupported protocol "+w+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Lt,xhr:on};u.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const an={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=u.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(u.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!u.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function Te(e){return re(e),e.headers=P.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),an.getAdapter(e.adapter||le.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return qe(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Ae=e=>e instanceof P?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,d,m){return u.isPlainObject(c)&&u.isPlainObject(d)?u.merge.call({caseless:m},c,d):u.isPlainObject(d)?u.merge({},d):u.isArray(d)?d.slice():d}function s(c,d,m){if(u.isUndefined(d)){if(!u.isUndefined(c))return r(void 0,c,m)}else return r(c,d,m)}function o(c,d){if(!u.isUndefined(d))return r(void 0,d)}function i(c,d){if(u.isUndefined(d)){if(!u.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function f(c,d,m){if(m in t)return r(c,d);if(m in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:f,headers:(c,d)=>s(Ae(c),Ae(d),!0)};return u.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=p[d]||s,w=m(e[d],t[d],d);u.isUndefined(w)&&m!==f||(n[d]=w)}),n}const Je="1.4.0",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,f)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,f):!0}};function un(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const f=e[o],p=f===void 0||i(f,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ie={assertOptions:un,validators:fe},L=ie.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(u.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&u.merge(o.common,o[n.method]),i&&u.forEach(["delete","get","head","post","put","patch","common"],a=>{delete o[a]}),n.headers=P.concat(i,o);const f=[];let p=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(n)===!1||(p=p&&l.synchronous,f.unshift(l.fulfilled,l.rejected))});const c=[];this.interceptors.response.forEach(function(l){c.push(l.fulfilled,l.rejected)});let d,m=0,w;if(!p){const a=[Te.bind(this),void 0];for(a.unshift.apply(a,f),a.push.apply(a,c),w=a.length,d=Promise.resolve(n);m<w;)d=d.then(a[m++],a[m++]);return d}w=f.length;let b=n;for(m=0;m<w;){const a=f[m++],l=f[m++];try{b=a(b)}catch(h){l.call(this,h);break}}try{d=Te.call(this,b)}catch(a){return Promise.reject(a)}for(m=0,w=c.length;m<w;)d=d.then(c[m++],c[m++]);return d}getUri(t){t=B(this.defaults,t);const n=ze(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,f){return this.request(B(f||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(f=>{r.subscribe(f),o=f}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,f){r.reason||(r.reason=new I(o,i,f),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const cn=de;function ln(e){return function(n){return e.apply(null,n)}}function fn(e){return u.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const dn=ae;function Ve(e){const t=new J(e),n=Ce(J.prototype.request,t);return u.extend(n,J.prototype,t,{allOwnKeys:!0}),u.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ve(B(e,s))},n}const R=Ve(le);R.Axios=J;R.CanceledError=I;R.CancelToken=cn;R.isCancel=qe;R.VERSION=Je;R.toFormData=G;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=ln;R.isAxiosError=fn;R.mergeConfig=B;R.AxiosHeaders=P;R.formToJSON=e=>He(u.isHTMLForm(e)?new FormData(e):e);R.HttpStatusCode=dn;R.default=R;const pn=R;var We={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(Ke,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(a){var l,h;for(l in a)h=a[l],h!==void 0&&a.hasOwnProperty(l)&&(r[l]=h);return this},n.status=null,n.set=function(a){var l=n.isStarted();a=s(a,r.minimum,1),n.status=a===1?null:a;var h=n.render(!l),E=h.querySelector(r.barSelector),O=r.speed,T=r.easing;return h.offsetWidth,f(function(S){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),p(E,i(a,O,T)),a===1?(p(h,{transition:"none",opacity:1}),h.offsetWidth,setTimeout(function(){p(h,{transition:"all "+O+"ms linear",opacity:0}),setTimeout(function(){n.remove(),S()},O)},O)):setTimeout(S,O)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var a=function(){setTimeout(function(){n.status&&(n.trickle(),a())},r.trickleSpeed)};return r.trickle&&a(),this},n.done=function(a){return!a&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(a){var l=n.status;return l?(typeof a!="number"&&(a=(1-l)*s(Math.random()*l,.1,.95)),l=s(l+a,0,.994),n.set(l)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var a=0,l=0;n.promise=function(h){return!h||h.state()==="resolved"?this:(l===0&&n.start(),a++,l++,h.always(function(){l--,l===0?(a=0,n.done()):n.set((a-l)/a)}),this)}}(),n.render=function(a){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var l=document.createElement("div");l.id="nprogress",l.innerHTML=r.template;var h=l.querySelector(r.barSelector),E=a?"-100":o(n.status||0),O=document.querySelector(r.parent),T;return p(h,{transition:"all 0 linear",transform:"translate3d("+E+"%,0,0)"}),r.showSpinner||(T=l.querySelector(r.spinnerSelector),T&&b(T)),O!=document.body&&d(O,"nprogress-custom-parent"),O.appendChild(l),l},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&b(a)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var a=document.body.style,l="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return l+"Perspective"in a?"translate3d":l+"Transform"in a?"translate":"margin"};function s(a,l,h){return a<l?l:a>h?h:a}function o(a){return(-1+a)*100}function i(a,l,h){var E;return r.positionUsing==="translate3d"?E={transform:"translate3d("+o(a)+"%,0,0)"}:r.positionUsing==="translate"?E={transform:"translate("+o(a)+"%,0)"}:E={"margin-left":o(a)+"%"},E.transition="all "+l+"ms "+h,E}var f=function(){var a=[];function l(){var h=a.shift();h&&h(l)}return function(h){a.push(h),a.length==1&&l()}}(),p=function(){var a=["Webkit","O","Moz","ms"],l={};function h(S){return S.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(g,N){return N.toUpperCase()})}function E(S){var g=document.body.style;if(S in g)return S;for(var N=a.length,D=S.charAt(0).toUpperCase()+S.slice(1),_;N--;)if(_=a[N]+D,_ in g)return _;return S}function O(S){return S=h(S),l[S]||(l[S]=E(S))}function T(S,g,N){g=O(g),S.style[g]=N}return function(S,g){var N=arguments,D,_;if(N.length==2)for(D in g)_=g[D],_!==void 0&&g.hasOwnProperty(D)&&T(S,D,_);else T(S,N[1],N[2])}}();function c(a,l){var h=typeof a=="string"?a:w(a);return h.indexOf(" "+l+" ")>=0}function d(a,l){var h=w(a),E=h+l;c(h,l)||(a.className=E.substring(1))}function m(a,l){var h=w(a),E;c(a,l)&&(E=h.replace(" "+l+" "," "),a.className=E.substring(1,E.length-1))}function w(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function b(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return n})})(We);var hn=We.exports;const v=Ge(hn);v.configure({showSpinner:!1});const Ne={400:"参数错误",404:"访问资源不存在"},pe=pn.create({baseURL:"https://api.trtst.com/",timeout:3e4});pe.interceptors.request.use(e=>(v.start(),e),e=>(v.done(),Promise.reject(e)));pe.interceptors.response.use(e=>{var r;v.done();const t=(r=e==null?void 0:e.data)==null?void 0:r.code,n=Ne[t];return t!==200&&me({showClose:!0,message:n,type:"error"}),e.data},e=>{var r,s;v.done();const t=(s=(r=e.response)==null?void 0:r.data)==null?void 0:s.code,n=Ne[t];return t&&me({showClose:!0,message:n,type:"error"}),Promise.reject(e)});function U(e){return e.method=e.method||"get",e.method.toLowerCase()==="get"&&(e.params=e.data),pe(e)}["get","post","put","delete","patch"].forEach(e=>{U[e]=(t,n,r)=>U({method:e,url:t,data:n,...r})});const yn=()=>U({method:"get",url:"/login/qr/key"}),En=e=>U({method:"get",url:"/login/qr/create",data:e}),bn=e=>U({method:"get",url:"/login/qr/check",data:e}),Sn=e=>U({method:"get",url:"/banner",data:e});export{$e as P,En as a,bn as b,Z as f,Sn as g,yn as l};
