(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ss={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},La=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],h=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},$s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|h>>4;let S=(h&15)<<2|m>>6,b=m&63;f||(b=64,u||(S=64)),i.push(e[I],e[w],e[S],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(js(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):La(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],h=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||h==null||m==null||w==null)throw new Fa;const S=o<<2|h>>4;if(i.push(S),m!==64){const b=h<<4&240|m>>2;if(i.push(b),w!==64){const D=m<<6&192|w;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ua=function(n){const t=js(n);return $s.encodeByteArray(t,!0)},Pn=function(n){return Ua(n).replace(/\./g,"")},Ba=function(n){try{return $s.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=()=>ja().__FIREBASE_DEFAULTS__,qa=()=>{if(typeof process>"u"||typeof ss>"u")return;const n=ss.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},za=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ba(n[1]);return t&&JSON.parse(t)},jr=()=>{try{return $a()||qa()||za()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ha=n=>{var t,e;return(e=(t=jr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ga=n=>{const t=Ha(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},qs=()=>{var n;return(n=jr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pn(JSON.stringify(e)),Pn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){var n;const t=(n=jr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ya(){return!Xa()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ja(){try{return typeof indexedDB=="object"}catch{return!1}}function Za(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="FirebaseError";class fe extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=tl,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?el(o,i):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new fe(s,h,i)}}function el(n,t){return n.replace(nl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const nl=/\{\$([^}]+)}/g;function Pr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(os(o)&&os(u)){if(!Pr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function os(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n){return n&&n._delegate?n._delegate:n}class Be{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Ka;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sl(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:il(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function il(n){return n===Ht?void 0:n}function sl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const al={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},ll=F.INFO,ul={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},cl=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=ul[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hs{constructor(t){this.name=t,this._logLevel=ll,this._logHandler=cl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?al[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const hl=(n,t)=>t.some(e=>n instanceof e);let as,ls;function fl(){return as||(as=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dl(){return ls||(ls=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gs=new WeakMap,Sr=new WeakMap,Ks=new WeakMap,Er=new WeakMap,$r=new WeakMap;function pl(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Mt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Gs.set(e,n)}).catch(()=>{}),$r.set(t,n),t}function gl(n){if(Sr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Sr.set(n,t)}let Cr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Sr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ks.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Mt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ml(n){Cr=n(Cr)}function _l(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(vr(this),t,...e);return Ks.set(i,t.sort?t.sort():[t]),Mt(i)}:dl().includes(n)?function(...t){return n.apply(vr(this),t),Mt(Gs.get(this))}:function(...t){return Mt(n.apply(vr(this),t))}}function yl(n){return typeof n=="function"?_l(n):(n instanceof IDBTransaction&&gl(n),hl(n,fl())?new Proxy(n,Cr):n)}function Mt(n){if(n instanceof IDBRequest)return pl(n);if(Er.has(n))return Er.get(n);const t=yl(n);return t!==n&&(Er.set(n,t),$r.set(t,n)),t}const vr=n=>$r.get(n);function El(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),h=Mt(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Mt(u.result),f.oldVersion,f.newVersion,Mt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const vl=["get","getKey","getAll","getAllKeys","count"],Tl=["put","add","delete","clear"],Tr=new Map;function us(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Tr.get(t))return Tr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Tl.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||vl.includes(e)))return;const o=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return i&&(m=m.index(h.shift())),(await Promise.all([m[e](...h),s&&f.done]))[0]};return Tr.set(t,o),o}ml(n=>({...n,get:(t,e,i)=>us(t,e)||n.get(t,e,i),has:(t,e)=>!!us(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Al(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Al(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const br="@firebase/app",cs="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Hs("@firebase/app"),wl="@firebase/app-compat",Rl="@firebase/analytics-compat",Pl="@firebase/analytics",Sl="@firebase/app-check-compat",Cl="@firebase/app-check",bl="@firebase/auth",Vl="@firebase/auth-compat",Dl="@firebase/database",Nl="@firebase/database-compat",kl="@firebase/functions",Ol="@firebase/functions-compat",Ml="@firebase/installations",xl="@firebase/installations-compat",Ll="@firebase/messaging",Fl="@firebase/messaging-compat",Ul="@firebase/performance",Bl="@firebase/performance-compat",jl="@firebase/remote-config",$l="@firebase/remote-config-compat",ql="@firebase/storage",zl="@firebase/storage-compat",Hl="@firebase/firestore",Gl="@firebase/vertexai-preview",Kl="@firebase/firestore-compat",Ql="firebase",Wl="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",Xl={[br]:"fire-core",[wl]:"fire-core-compat",[Pl]:"fire-analytics",[Rl]:"fire-analytics-compat",[Cl]:"fire-app-check",[Sl]:"fire-app-check-compat",[bl]:"fire-auth",[Vl]:"fire-auth-compat",[Dl]:"fire-rtdb",[Nl]:"fire-rtdb-compat",[kl]:"fire-fn",[Ol]:"fire-fn-compat",[Ml]:"fire-iid",[xl]:"fire-iid-compat",[Ll]:"fire-fcm",[Fl]:"fire-fcm-compat",[Ul]:"fire-perf",[Bl]:"fire-perf-compat",[jl]:"fire-rc",[$l]:"fire-rc-compat",[ql]:"fire-gcs",[zl]:"fire-gcs-compat",[Hl]:"fire-fst",[Kl]:"fire-fst-compat",[Gl]:"fire-vertex","fire-js":"fire-js",[Ql]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Map,Yl=new Map,Dr=new Map;function hs(n,t){try{n.container.addComponent(t)}catch(e){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function bn(n){const t=n.name;if(Dr.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;Dr.set(t,n);for(const e of Cn.values())hs(e,n);for(const e of Yl.values())hs(e,n);return!0}function Jl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new zs("app","Firebase",Zl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=Wl;function Qs(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(e||(e=qs()),!e)throw xt.create("no-options");const o=Cn.get(s);if(o){if(Pr(e,o.options)&&Pr(i,o.config))return o;throw xt.create("duplicate-app",{appName:s})}const u=new ol(s);for(const f of Dr.values())u.addComponent(f);const h=new tu(e,i,u);return Cn.set(s,h),h}function nu(n=Vr){const t=Cn.get(n);if(!t&&n===Vr&&qs())return Qs();if(!t)throw xt.create("no-app",{appName:n});return t}function se(n,t,e){var i;let s=(i=Xl[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(h.join(" "));return}bn(new Be(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="firebase-heartbeat-database",iu=1,je="firebase-heartbeat-store";let Ir=null;function Ws(){return Ir||(Ir=El(ru,iu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(je)}catch(e){console.warn(e)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Ir}async function su(n){try{const e=(await Ws()).transaction(je),i=await e.objectStore(je).get(Xs(n));return await e.done,i}catch(t){if(t instanceof fe)Wt.warn(t.message);else{const e=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(e.message)}}}async function fs(n,t){try{const i=(await Ws()).transaction(je,"readwrite");await i.objectStore(je).put(t,Xs(n)),await i.done}catch(e){if(e instanceof fe)Wt.warn(e.message);else{const i=xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(i.message)}}}function Xs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=1024,au=30*24*60*60*1e3;class lu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new cu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ds();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=au}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ds(),{heartbeatsToSend:i,unsentEntries:s}=uu(this._heartbeatsCache.heartbeats),o=Pn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ds(){return new Date().toISOString().substring(0,10)}function uu(n,t=ou){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),ps(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ps(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class cu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ja()?Za().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await su(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return fs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return fs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ps(n){return Pn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){bn(new Be("platform-logger",t=>new Il(t),"PRIVATE")),bn(new Be("heartbeat",t=>new lu(t),"PRIVATE")),se(br,cs,n),se(br,cs,"esm2017"),se("fire-js","")}hu("");var fu="firebase",du="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */se(fu,du,"app");const pu={apiKey:"AIzaSyCwK2qzKdlGpVS7_QpvgCv9ShsFdSnU9lM",authDomain:"color-recognizer-ce9cd.firebaseapp.com",projectId:"color-recognizer-ce9cd",storageBucket:"color-recognizer-ce9cd.appspot.com",messagingSenderId:"903967750673",appId:"1:903967750673:web:d58150a97bf94142658fb0"},gu=Qs(pu);var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ys;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)p[wt-2]=arguments[wt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function o(E,d){var g=h;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function u(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var h={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(m(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=m(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=m(Math.pow(d,T)),_=_.j(T).add(m(p))):(_=_.j(g),_=_.add(m(p)))}return _}var w=f(0),S=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(M(this))return-N(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var d=m(Math.pow(E,6)),g=this,_="";;){var y=st(g,d).g;g=G(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=G(this,E),M(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new u(g,~E.h).add(S)}n.abs=function(){return M(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}n.j=function(E){if(D(this)||D(E))return w;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(b)&&0>E.l(b))return m(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,wt=E.i(y)>>>16,ge=E.i(y)&65535;g[2*_+2*y]+=p*ge,z(g,2*_+2*y),g[2*_+2*y+1]+=T*ge,z(g,2*_+2*y+1),g[2*_+2*y+1]+=p*wt,z(g,2*_+2*y+1),g[2*_+2*y+2]+=T*wt,z(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function z(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function Q(E,d){this.g=E,this.h=d}function st(E,d){if(D(d))throw Error("division by zero");if(D(E))return new Q(w,w);if(M(E))return d=st(N(E),d),new Q(N(d.g),N(d.h));if(M(d))return d=st(E,N(d)),new Q(N(d.g),d.h);if(30<E.g.length){if(M(E)||M(d))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=d;0>=_.l(E);)g=Bt(g),_=Bt(_);var y=mt(g,1),T=mt(_,1);for(_=mt(_,2),g=mt(g,2);!D(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(g),T=p),_=mt(_,1),g=mt(g,1)}return d=G(E,y.j(d)),new Q(y,d)}for(y=w;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(g),p=T.j(d);M(p)||0<p.l(E);)g-=_,T=m(g),p=T.j(d);D(T)&&(T=S),y=y.add(T),E=G(E,p)}return new Q(y,E)}n.A=function(E){return st(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new u(g,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new u(g,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new u(g,this.h^E.h)};function Bt(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(g,E.h)}function mt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=I,Ys=u}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});var yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Js,Zs,Me,to,An,Nr,eo,no,ro;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof yn=="object"&&yn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var c=0;c<r.length-1;c++){var v=r[c];if(!(v in l))break t;l=l[v]}r=r[r.length-1],c=l[r],a=a(c),a!=c&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,c=!1,v={next:function(){if(!c&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function m(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function S(r,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function b(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),r.apply(this,c)}}function D(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(c,v,A){for(var C=Array(arguments.length-2),B=2;B<arguments.length;B++)C[B-2]=arguments[B];return a.prototype[v].apply(c,C)}}function M(r){const a=r.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=r[c];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(f(c)){const v=r.length||0,A=c.length||0;r.length=v+A;for(let C=0;C<A;C++)r[v+C]=c[C]}else r.push(c)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=h.navigator;return r&&(r=r.userAgent)?r:""}function st(r){return st[" "](r),r}st[" "]=function(){};var Bt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function mt(r,a,l){for(const c in r)a.call(l,r[c],c,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)r[l]=c[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(c,l)&&(r[l]=c[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){h.setTimeout(()=>{throw r},0)}function p(){var r=Wn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class wt{constructor(){this.h=this.g=null}add(a,l){const c=ge.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var ge=new G(()=>new na,r=>r.reset());class na{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let me,_e=!1,Wn=new wt,si=()=>{const r=h.Promise.resolve(void 0);me=()=>{r.then(ra)}};var ra=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=ge;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}_e=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ia=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return r}();function ye(r,a){if(ot.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Bt){t:{try{st(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:sa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ye.aa.h.call(this)}}D(ye,ot);var sa={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),oa=0;function aa(r,a,l,c,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++oa,this.da=this.fa=!1}function tn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function en(r){this.src=r,this.g={},this.h=0}en.prototype.add=function(r,a,l,c,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=Yn(r,a,c,v);return-1<C?(a=r[C],l||(a.fa=!1)):(a=new aa(a,this.src,A,!!c,v),a.fa=l,r.push(a)),a};function Xn(r,a){var l=a.type;if(l in r.g){var c=r.g[l],v=Array.prototype.indexOf.call(c,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(c,v,1),A&&(tn(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function Yn(r,a,l,c){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==c)return v}return-1}var Jn="closure_lm_"+(1e6*Math.random()|0),Zn={};function oi(r,a,l,c,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)oi(r,a[A],l,c,v);return null}return l=ui(l),r&&r[Ze]?r.K(a,l,m(c)?!!c.capture:!!c,v):la(r,a,l,!1,c,v)}function la(r,a,l,c,v,A){if(!a)throw Error("Invalid event type");var C=m(v)?!!v.capture:!!v,B=er(r);if(B||(r[Jn]=B=new en(r)),l=B.add(a,l,c,C,A),l.proxy)return l;if(c=ua(),l.proxy=c,c.src=r,c.listener=l,r.addEventListener)ia||(v=C),v===void 0&&(v=!1),r.addEventListener(a.toString(),c,v);else if(r.attachEvent)r.attachEvent(li(a.toString()),c);else if(r.addListener&&r.removeListener)r.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ua(){function r(l){return a.call(r.src,r.listener,l)}const a=ca;return r}function ai(r,a,l,c,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)ai(r,a[A],l,c,v);else c=m(c)?!!c.capture:!!c,l=ui(l),r&&r[Ze]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=Yn(A,l,c,v),-1<l&&(tn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=er(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Yn(a,l,c,v)),(l=-1<r?a[r]:null)&&tr(l))}function tr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[Ze])Xn(a.i,r);else{var l=r.type,c=r.proxy;a.removeEventListener?a.removeEventListener(l,c,r.capture):a.detachEvent?a.detachEvent(li(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=er(a))?(Xn(l,r),l.h==0&&(l.src=null,a[Jn]=null)):tn(r)}}}function li(r){return r in Zn?Zn[r]:Zn[r]="on"+r}function ca(r,a){if(r.da)r=!0;else{a=new ye(a,this);var l=r.listener,c=r.ha||r.src;r.fa&&tr(r),r=l.call(c,a)}return r}function er(r){return r=r[Jn],r instanceof en?r:null}var nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(r){return typeof r=="function"?r:(r[nr]||(r[nr]=function(a){return r.handleEvent(a)}),r[nr])}function at(){Vt.call(this),this.i=new en(this),this.M=this,this.F=null}D(at,Vt),at.prototype[Ze]=!0,at.prototype.removeEventListener=function(r,a,l,c){ai(this,r,a,l,c)};function pt(r,a){var l,c=r.F;if(c)for(l=[];c;c=c.F)l.push(c);if(r=r.M,c=a.type||a,typeof a=="string")a=new ot(a,r);else if(a instanceof ot)a.target=a.target||r;else{var v=a;a=new ot(c,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];v=nn(C,c,!0,a)&&v}if(C=a.g=r,v=nn(C,c,!0,a)&&v,v=nn(C,c,!1,a)&&v,l)for(A=0;A<l.length;A++)C=a.g=l[A],v=nn(C,c,!1,a)&&v}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],c=0;c<l.length;c++)tn(l[c]);delete r.g[a],r.h--}}this.F=null},at.prototype.K=function(r,a,l,c){return this.i.add(String(r),a,!1,l,c)},at.prototype.L=function(r,a,l,c){return this.i.add(String(r),a,!0,l,c)};function nn(r,a,l,c){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var B=C.listener,et=C.ha||C.src;C.fa&&Xn(r.i,C),v=B.call(et,c)!==!1&&v}}return v&&!c.defaultPrevented}function ci(r,a,l){if(typeof r=="function")l&&(r=S(r,l));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(r,a||0)}function hi(r){r.g=ci(()=>{r.g=null,r.i&&(r.i=!1,hi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class ha extends Vt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:hi(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(r){Vt.call(this),this.h=r,this.g={}}D(Ee,Vt);var fi=[];function di(r){mt(r.g,function(a,l){this.g.hasOwnProperty(l)&&tr(a)},r),r.g={}}Ee.prototype.N=function(){Ee.aa.N.call(this),di(this)},Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rr=h.JSON.stringify,fa=h.JSON.parse,da=class{stringify(r){return h.JSON.stringify(r,void 0)}parse(r){return h.JSON.parse(r,void 0)}};function ir(){}ir.prototype.h=null;function pi(r){return r.h||(r.h=r.i())}function gi(){}var ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){ot.call(this,"d")}D(sr,ot);function or(){ot.call(this,"c")}D(or,ot);var jt={},mi=null;function rn(){return mi=mi||new at}jt.La="serverreachability";function _i(r){ot.call(this,jt.La,r)}D(_i,ot);function Te(r){const a=rn();pt(a,new _i(a))}jt.STAT_EVENT="statevent";function yi(r,a){ot.call(this,jt.STAT_EVENT,r),this.stat=a}D(yi,ot);function gt(r){const a=rn();pt(a,new yi(a,r))}jt.Ma="timingevent";function Ei(r,a){ot.call(this,jt.Ma,r),this.size=a}D(Ei,ot);function Ie(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){r()},a)}function Ae(){this.g=!0}Ae.prototype.xa=function(){this.g=!1};function pa(r,a,l,c,v,A){r.info(function(){if(r.g)if(A)for(var C="",B=A.split("&"),et=0;et<B.length;et++){var U=B[et].split("=");if(1<U.length){var lt=U[0];U=U[1];var ut=lt.split("_");C=2<=ut.length&&ut[1]=="type"?C+(lt+"="+U+"&"):C+(lt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function ga(r,a,l,c,v,A,C){r.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+C})}function te(r,a,l,c){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+_a(r,l)+(c?" "+c:"")})}function ma(r,a){r.info(function(){return"TIMEOUT: "+a})}Ae.prototype.info=function(){};function _a(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var c=l[r];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return rr(l)}catch{return a}}var sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ar;function on(){}D(on,ir),on.prototype.g=function(){return new XMLHttpRequest},on.prototype.i=function(){return{}},ar=new on;function Dt(r,a,l,c){this.j=r,this.i=a,this.l=l,this.R=c||1,this.U=new Ee(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var Ii={},lr={};function ur(r,a,l){r.L=1,r.v=cn(Rt(a)),r.m=l,r.P=!0,Ai(r,null)}function Ai(r,a){r.F=Date.now(),an(r),r.A=Rt(r.v);var l=r.A,c=r.R;Array.isArray(c)||(c=[String(c)]),Li(l.i,"t",c),r.C=0,l=r.j.J,r.h=new Ti,r.g=es(r.j,l?a:null,!r.m),0<r.O&&(r.M=new ha(S(r.Y,r,r.g),r.O)),a=r.U,l=r.g,c=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(fi[0]=v.toString()),v=fi);for(var A=0;A<v.length;A++){var C=oi(l,v[A],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Te(),pa(r.i,r.u,r.A,r.l,r.R,r.m)}Dt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Pt(r)==3?a.j():this.Y(r)},Dt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=Pt(this.g);var a=this.g.Ba();const re=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||zi(this.g)))){this.J||ut!=4||a==7||(a==8||0>=re?Te(3):Te(2)),cr(this);var l=this.g.Z();this.X=l;e:if(wi(this)){var c=zi(this.g);r="";var v=c.length,A=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),we(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(c[a],{stream:!(A&&a==v-1)});c.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,ga(this.i,this.u,this.A,this.l,this.R,ut,l),this.o){if(this.T&&!this.K){e:{if(this.g){var B,et=this.g;if((B=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(B)){var U=B;break e}}U=null}if(l=U)te(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hr(this,l);else{this.o=!1,this.s=3,gt(12),$t(this),we(this);break t}}if(this.P){l=!0;let Et;for(;!this.J&&this.C<C.length;)if(Et=ya(this,C),Et==lr){ut==4&&(this.s=4,gt(14),l=!1),te(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Ii){this.s=4,gt(15),te(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else te(this.i,this.l,Et,null),hr(this,Et);if(wi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||C.length!=0||this.h.h||(this.s=1,gt(16),l=!1),this.o=this.o&&l,!l)te(this.i,this.l,C,"[Invalid Chunked Response]"),$t(this),we(this);else if(0<C.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),_r(lt),lt.M=!0,gt(11))}}else te(this.i,this.l,C,null),hr(this,C);ut==4&&$t(this),this.o&&!this.J&&(ut==4?Yi(this.j,this):(this.o=!1,an(this)))}else Ma(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),$t(this),we(this)}}}catch{}finally{}};function wi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ya(r,a){var l=r.C,c=a.indexOf(`
`,l);return c==-1?lr:(l=Number(a.substring(l,c)),isNaN(l)?Ii:(c+=1,c+l>a.length?lr:(a=a.slice(c,c+l),r.C=c+l,a)))}Dt.prototype.cancel=function(){this.J=!0,$t(this)};function an(r){r.S=Date.now()+r.I,Ri(r,r.I)}function Ri(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ie(S(r.ba,r),a)}function cr(r){r.B&&(h.clearTimeout(r.B),r.B=null)}Dt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(ma(this.i,this.A),this.L!=2&&(Te(),gt(17)),$t(this),this.s=2,we(this)):Ri(this,this.S-r)};function we(r){r.j.G==0||r.J||Yi(r.j,r)}function $t(r){cr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,di(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function hr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||fr(l.h,r))){if(!r.K&&fr(l.h,r)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)gn(l),dn(l);else break t;mr(l),gt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ie(S(l.Za,l),6e3));if(1>=Ci(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else zt(l,11)}else if((r.K||l.g==r)&&gn(l),!z(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let U=v[a];if(l.T=U[0],U=U[1],l.G==2)if(U[0]=="c"){l.K=U[1],l.ia=U[2];const lt=U[3];lt!=null&&(l.la=lt,l.j.info("VER="+l.la));const ut=U[4];ut!=null&&(l.Aa=ut,l.j.info("SVER="+l.Aa));const re=U[5];re!=null&&typeof re=="number"&&0<re&&(c=1.5*re,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const Et=r.g;if(Et){const _n=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_n){var A=c.h;A.g||_n.indexOf("spdy")==-1&&_n.indexOf("quic")==-1&&_n.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(dr(A,A.h),A.h=null))}if(c.D){const yr=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;yr&&(c.ya=yr,$(c.I,c.D,yr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=r;if(c.qa=ts(c,c.J?c.ia:null,c.W),C.K){bi(c.h,C);var B=C,et=c.L;et&&(B.I=et),B.B&&(cr(B),an(B)),c.g=C}else Wi(c);0<l.i.length&&pn(l)}else U[0]!="stop"&&U[0]!="close"||zt(l,7);else l.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?zt(l,7):gr(l):U[0]!="noop"&&l.l&&l.l.ta(U),l.v=0)}}Te(4)}catch{}}var Ea=class{constructor(r,a){this.g=r,this.map=a}};function Pi(r){this.l=r||10,h.PerformanceNavigationTiming?(r=h.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Si(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ci(r){return r.h?1:r.g?r.g.size:0}function fr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function dr(r,a){r.g?r.g.add(a):r.h=a}function bi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Pi.prototype.cancel=function(){if(this.i=Vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Vi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return M(r.i)}function va(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,c=0;c<l;c++)a.push(r[c]);return a}a=[],l=0;for(c in r)a[l++]=r[c];return a}function Ta(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const c in r)a[l++]=c;return a}}}function Di(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Ta(r),c=va(r),v=c.length,A=0;A<v;A++)a.call(void 0,c[A],l&&l[A],r)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ia(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var c=r[l].indexOf("="),v=null;if(0<=c){var A=r[l].substring(0,c);v=r[l].substring(c+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function qt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof qt){this.h=r.h,ln(this,r.j),this.o=r.o,this.g=r.g,un(this,r.s),this.l=r.l;var a=r.i,l=new Se;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ki(this,l),this.m=r.m}else r&&(a=String(r).match(Ni))?(this.h=!1,ln(this,a[1]||"",!0),this.o=Re(a[2]||""),this.g=Re(a[3]||"",!0),un(this,a[4]),this.l=Re(a[5]||"",!0),ki(this,a[6]||"",!0),this.m=Re(a[7]||"")):(this.h=!1,this.i=new Se(null,this.h))}qt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Pe(a,Oi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Pe(a,Oi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Pe(l,l.charAt(0)=="/"?Ra:wa,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Pe(l,Sa)),r.join("")};function Rt(r){return new qt(r)}function ln(r,a,l){r.j=l?Re(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function un(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function ki(r,a,l){a instanceof Se?(r.i=a,Ca(r.i,r.h)):(l||(a=Pe(a,Pa)),r.i=new Se(a,r.h))}function $(r,a,l){r.i.set(a,l)}function cn(r){return $(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Re(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pe(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Aa),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Aa(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Oi=/[#\/\?@]/g,wa=/[#\?:]/g,Ra=/[#\?]/g,Pa=/[#\?@]/g,Sa=/#/g;function Se(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Nt(r){r.g||(r.g=new Map,r.h=0,r.i&&Ia(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Se.prototype,n.add=function(r,a){Nt(this),this.i=null,r=ee(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Mi(r,a){Nt(r),a=ee(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function xi(r,a){return Nt(r),a=ee(r,a),r.g.has(a)}n.forEach=function(r,a){Nt(this),this.g.forEach(function(l,c){l.forEach(function(v){r.call(a,v,c,this)},this)},this)},n.na=function(){Nt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=r[c];for(let A=0;A<v.length;A++)l.push(a[c])}return l},n.V=function(r){Nt(this);let a=[];if(typeof r=="string")xi(this,r)&&(a=a.concat(this.g.get(ee(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Nt(this),this.i=null,r=ee(this,r),xi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Li(r,a,l){Mi(r,a),0<l.length&&(r.i=null,r.g.set(ee(r,a),M(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const A=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=A;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),r.push(v)}}return this.i=r.join("&")};function ee(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Ca(r,a){a&&!r.j&&(Nt(r),r.i=null,r.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(Mi(this,c),Li(this,v,l))},r)),r.j=a}function ba(r,a){const l=new Ae;if(h.Image){const c=new Image;c.onload=b(kt,l,"TestLoadImage: loaded",!0,a,c),c.onerror=b(kt,l,"TestLoadImage: error",!1,a,c),c.onabort=b(kt,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=b(kt,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=r}else a(!1)}function Va(r,a){const l=new Ae,c=new AbortController,v=setTimeout(()=>{c.abort(),kt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:c.signal}).then(A=>{clearTimeout(v),A.ok?kt(l,"TestPingServer: ok",!0,a):kt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),kt(l,"TestPingServer: error",!1,a)})}function kt(r,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function Da(){this.g=new da}function Na(r,a,l){const c=l||"";try{Di(r,function(v,A){let C=v;m(v)&&(C=rr(v)),a.push(c+A+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function Ce(r){this.l=r.Ub||null,this.j=r.eb||!1}D(Ce,ir),Ce.prototype.g=function(){return new hn(this.l,this.j)},Ce.prototype.i=function(r){return function(){return r}}({});function hn(r,a){at.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(hn,at),n=hn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Ve(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,be(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?be(this):Ve(this),this.readyState==3&&Fi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,be(this))},n.Qa=function(r){this.g&&(this.response=r,be(this))},n.ga=function(){this.g&&be(this)};function be(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ve(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Ve(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ui(r){let a="";return mt(r,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function pr(r,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=Ui(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):$(r,a,l))}function K(r){at.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(K,at);var ka=/^https?$/i,Oa=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ar.g(),this.v=this.o?pi(this.o):pi(ar),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Bi(this,A);return}if(r=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())l.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=h.FormData&&r instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Oa,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qi(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Bi(this,A)}};function Bi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,ji(r),fn(r)}function ji(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$i(this):this.bb())},n.bb=function(){$i(this)};function $i(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Pt(r)!=4||r.Z()!=2)){if(r.u&&Pt(r)==4)ci(r.Ea,0,r);else if(pt(r,"readystatechange"),Pt(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(r.D).match(Ni)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!ka.test(v?v.toLowerCase():"")}l=c}if(l)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<Pt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",ji(r)}}finally{fn(r)}}}}function fn(r,a){if(r.g){qi(r);const l=r.g,c=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{l.onreadystatechange=c}catch{}}}function qi(r){r.I&&(h.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Pt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),fa(a)}};function zi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ma(r){const a={};r=(r.g&&2<=Pt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<r.length;c++){if(z(r[c]))continue;var l=y(r[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(c){return c.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function De(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Hi(r){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=De("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=De("baseRetryDelayMs",5e3,r),this.cb=De("retryDelaySeedMs",1e4,r),this.Wa=De("forwardChannelMaxRetries",2,r),this.wa=De("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(r&&r.concurrentRequestLimit),this.Da=new Da,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hi.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,c){gt(0),this.W=r,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=ts(this,null,this.W),pn(this)};function gr(r){if(Gi(r),r.G==3){var a=r.U++,l=Rt(r.I);if($(l,"SID",r.K),$(l,"RID",a),$(l,"TYPE","terminate"),Ne(r,l),a=new Dt(r,r.j,a),a.L=2,a.v=cn(Rt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=es(a.j,null),a.g.ea(a.v)),a.F=Date.now(),an(a)}Zi(r)}function dn(r){r.g&&(_r(r),r.g.cancel(),r.g=null)}function Gi(r){dn(r),r.u&&(h.clearTimeout(r.u),r.u=null),gn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&h.clearTimeout(r.s),r.s=null)}function pn(r){if(!Si(r.h)&&!r.s){r.s=!0;var a=r.Ga;me||si(),_e||(me(),_e=!0),Wn.add(a,r),r.B=0}}function xa(r,a){return Ci(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ie(S(r.Ga,r,a),Ji(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Dt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Qi(this,v,a),l=Rt(this.I),$(l,"RID",r),$(l,"CVER",22),this.D&&$(l,"X-HTTP-Session-Id",this.D),Ne(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Ui(A)))+"&"+a:this.m&&pr(l,this.m,A)),dr(this.h,v),this.Ua&&$(l,"TYPE","init"),this.P?($(l,"$req",a),$(l,"SID","null"),v.T=!0,ur(v,l,null)):ur(v,l,a),this.G=2}}else this.G==3&&(r?Ki(this,r):this.i.length==0||Si(this.h)||Ki(this))};function Ki(r,a){var l;a?l=a.l:l=r.U++;const c=Rt(r.I);$(c,"SID",r.K),$(c,"RID",l),$(c,"AID",r.T),Ne(r,c),r.m&&r.o&&pr(c,r.m,r.o),l=new Dt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Qi(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),dr(r.h,l),ur(l,c,a)}function Ne(r,a){r.H&&mt(r.H,function(l,c){$(a,c,l)}),r.l&&Di({},function(l,c){$(a,c,l)})}function Qi(r,a,l){l=Math.min(r.i.length,l);var c=r.l?S(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let B=!0;for(let et=0;et<l;et++){let U=v[et].g;const lt=v[et].map;if(U-=A,0>U)A=Math.max(0,v[et].g-100),B=!1;else try{Na(lt,C,"req"+U+"_")}catch{c&&c(lt)}}if(B){c=C.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,c}function Wi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;me||si(),_e||(me(),_e=!0),Wn.add(a,r),r.v=0}}function mr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ie(S(r.Fa,r),Ji(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ie(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),dn(this),Xi(this))};function _r(r){r.A!=null&&(h.clearTimeout(r.A),r.A=null)}function Xi(r){r.g=new Dt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Rt(r.qa);$(a,"RID","rpc"),$(a,"SID",r.K),$(a,"AID",r.T),$(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&$(a,"TO",r.ja),$(a,"TYPE","xmlhttp"),Ne(r,a),r.m&&r.o&&pr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=cn(Rt(a)),l.m=null,l.P=!0,Ai(l,r)}n.Za=function(){this.C!=null&&(this.C=null,dn(this),mr(this),gt(19))};function gn(r){r.C!=null&&(h.clearTimeout(r.C),r.C=null)}function Yi(r,a){var l=null;if(r.g==a){gn(r),_r(r),r.g=null;var c=2}else if(fr(r.h,a))l=a.D,bi(r.h,a),c=1;else return;if(r.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;c=rn(),pt(c,new Ei(c,l)),pn(r)}else Wi(r);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&xa(r,a)||c==2&&mr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:zt(r,5);break;case 4:zt(r,10);break;case 3:zt(r,6);break;default:zt(r,2)}}}function Ji(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function zt(r,a){if(r.j.info("Error code "+a),a==2){var l=S(r.fb,r),c=r.Xa;const v=!c;c=new qt(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ln(c,"https"),cn(c),v?ba(c.toString(),l):Va(c.toString(),l)}else gt(2);r.G=0,r.l&&r.l.sa(a),Zi(r),Gi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Zi(r){if(r.G=0,r.ka=[],r.l){const a=Vi(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function ts(r,a,l){var c=l instanceof qt?Rt(l):new qt(l);if(c.g!="")a&&(c.g=a+"."+c.g),un(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new qt(null);c&&ln(A,c),a&&(A.g=a),v&&un(A,v),l&&(A.l=l),c=A}return l=r.D,a=r.ya,l&&a&&$(c,l,a),$(c,"VER",r.la),Ne(r,c),c}function es(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new Ce({eb:l})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ns(){}n=ns.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function mn(){}mn.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){at.call(this),this.g=new Hi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!z(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ne(this)}D(yt,at),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){gr(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=rr(r),r=l);a.i.push(new Ea(a.Ya++,r)),a.G==3&&pn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,gr(this.g),delete this.g,yt.aa.N.call(this)};function rs(r){sr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(rs,sr);function is(){or.call(this),this.status=1}D(is,or);function ne(r){this.g=r}D(ne,ns),ne.prototype.ua=function(){pt(this.g,"a")},ne.prototype.ta=function(r){pt(this.g,new rs(r))},ne.prototype.sa=function(r){pt(this.g,new is)},ne.prototype.ra=function(){pt(this.g,"b")},mn.prototype.createWebChannel=mn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,ro=function(){return new mn},no=function(){return rn()},eo=jt,Nr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sn.NO_ERROR=0,sn.TIMEOUT=8,sn.HTTP_ERROR=6,An=sn,vi.COMPLETE="complete",to=vi,gi.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",at.prototype.listen=at.prototype.K,Me=gi,Zs=Ce,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,Js=K}).apply(typeof yn<"u"?yn:typeof self<"u"?self:typeof window<"u"?window:{});const ms="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Hs("@firebase/firestore");function ke(){return Xt.logLevel}function V(n,...t){if(Xt.logLevel<=F.DEBUG){const e=t.map(qr);Xt.debug(`Firestore (${de}): ${n}`,...e)}}function Yt(n,...t){if(Xt.logLevel<=F.ERROR){const e=t.map(qr);Xt.error(`Firestore (${de}): ${n}`,...e)}}function Vn(n,...t){if(Xt.logLevel<=F.WARN){const e=t.map(qr);Xt.warn(`Firestore (${de}): ${n}`,...e)}}function qr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${de}) INTERNAL ASSERTION FAILED: `+n;throw Yt(t),new Error(t)}function tt(n,t){n||x()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class _u{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class yu{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new io(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new ht(t)}}class Eu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Eu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Tu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Au(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function ae(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Z(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new Z(0,0))}static max(){return new H(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends $e{construct(t,e,i){return new X(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const wu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends $e{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return wu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(i+=h,s++):(o(),s++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function Ru(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new Z(e+1,0):new Z(e,i));return new Lt(s,O.empty(),t)}function Pu(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Lt(H.min(),O.empty(),-1)}static max(){return new Lt(H.max(),O.empty(),-1)}}function Su(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Cu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let h=0;for(let f=0;f<o;f++){const m=f;e(t[m]).next(I=>{u[m]=I,++h,h===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Vu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ao.oe=-1;function zr(n){return n==null}function Dn(n){return n===0&&1/n==-1/0}function Du(n){return typeof n=="number"&&Number.isInteger(n)&&!Dn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function We(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function lo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new En(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new En(this.root,t,this.comparator,!1)}getReverseIterator(){return new En(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new En(this.root,t,this.comparator,!0)}}class En{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ys(this.data.getIterator())}getIteratorFrom(t){return new ys(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class ys{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new It([])}unionWith(t){let e=new dt(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nu("Invalid base64 string: "+o):o}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const ku=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(tt(!!n),typeof n=="string"){let t=0;const e=ku.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qe(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function uo(n){const t=n.mapValue.fields.__previous_value__;return Hr(t)?uo(t):t}function Nn(n){const t=Jt(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,i,s,o,u,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m}}class kn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof kn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hr(n)?4:Mu(n)?9007199254740991:10:x()}function At(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Jt(s.timestampValue),h=Jt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return qe(s.bytesValue).isEqual(qe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=rt(s.doubleValue),h=rt(o.doubleValue);return u===h?Dn(u)===Dn(h):isNaN(u)&&isNaN(h)}return!1}(n,t);case 9:return ae(n.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(_s(u)!==_s(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!At(u[f],h[f])))return!1;return!0}(n,t);default:return x()}}function ze(n,t){return(n.values||[]).find(e=>At(e,t))!==void 0}function ue(n,t){if(n===t)return 0;const e=le(n),i=le(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const h=rt(o.integerValue||o.doubleValue),f=rt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return Es(n.timestampValue,t.timestampValue);case 4:return Es(Nn(n),Nn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const h=qe(o),f=qe(u);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),f=u.split("/");for(let m=0;m<h.length&&m<f.length;m++){const I=j(h[m],f[m]);if(I!==0)return I}return j(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const h=j(rt(o.latitude),rt(u.latitude));return h!==0?h:j(rt(o.longitude),rt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const h=o.values||[],f=u.values||[];for(let m=0;m<h.length&&m<f.length;++m){const I=ue(h[m],f[m]);if(I)return I}return j(h.length,f.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===vn.mapValue&&u===vn.mapValue)return 0;if(o===vn.mapValue)return 1;if(u===vn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),m=u.fields||{},I=Object.keys(m);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=j(f[w],I[w]);if(S!==0)return S;const b=ue(h[f[w]],m[I[w]]);if(b!==0)return b}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function Es(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Jt(n),i=Jt(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function ce(n){return kr(n)}function kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Jt(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return qe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${kr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function Or(n){return!!n&&"integerValue"in n}function Gr(n){return!!n&&"arrayValue"in n}function wn(n){return!!n&&"mapValue"in n}function xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return We(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=xe(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Mu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!wn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xe(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=h.popLast()}u?i[h.lastSegment()]=xe(u):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());wn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){We(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new Tt(xe(this.value))}}function co(n){const t=[];return We(n.fields,(e,i)=>{const s=new it([e]);if(wn(i)){const o=co(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,i,s,o,u,h){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,H.min(),H.min(),H.min(),Tt.empty(),0)}static newFoundDocument(t,e,i,s){return new vt(t,1,e,H.min(),i,s,0)}static newNoDocument(t,e){return new vt(t,2,e,H.min(),H.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,H.min(),H.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.position=t,this.inclusive=e}}function vs(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(u.referenceValue),e.key):i=ue(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ts(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!At(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e="asc"){this.field=t,this.dir=e}}function xu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{}class J extends ho{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Fu(t,e,i):e==="array-contains"?new ju(t,i):e==="in"?new $u(t,i):e==="not-in"?new qu(t,i):e==="array-contains-any"?new zu(t,i):new J(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Uu(t,i):new Bu(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ue(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends ho{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ft(t,e)}matches(t){return fo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fo(n){return n.op==="and"}function po(n){return Lu(n)&&fo(n)}function Lu(n){for(const t of n.filters)if(t instanceof Ft)return!1;return!0}function Mr(n){if(n instanceof J)return n.field.canonicalString()+n.op.toString()+ce(n.value);if(po(n))return n.filters.map(t=>Mr(t)).join(",");{const t=n.filters.map(e=>Mr(e)).join(",");return`${n.op}(${t})`}}function go(n,t){return n instanceof J?function(i,s){return s instanceof J&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(n,t):n instanceof Ft?function(i,s){return s instanceof Ft&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,h)=>o&&go(u,s.filters[h]),!0):!1}(n,t):void x()}function mo(n){return n instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${ce(e.value)}`}(n):n instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(mo).join(" ,")+"}"}(n):"Filter"}class Fu extends J{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Uu extends J{constructor(t,e){super(t,"in",e),this.keys=_o("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bu extends J{constructor(t,e){super(t,"not-in",e),this.keys=_o("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _o(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class ju extends J{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gr(e)&&ze(e.arrayValue,this.value)}}class $u extends J{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ze(this.value.arrayValue,e)}}class qu extends J{constructor(t,e){super(t,"not-in",e)}matches(t){if(ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ze(this.value.arrayValue,e)}}class zu extends J{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>ze(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e=null,i=[],s=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function Is(n,t=null,e=[],i=[],s=null,o=null,u=null){return new Hu(n,t,e,i,s,o,u)}function Kr(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Mr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ce(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ce(i)).join(",")),t.ue=e}return t.ue}function Qr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!xu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!go(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ts(n.startAt,t.startAt)&&Ts(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e=null,i=[],s=[],o=null,u="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gu(n,t,e,i,s,o,u,h){return new $n(n,t,e,i,s,o,u,h)}function Ku(n){return new $n(n)}function As(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qu(n){return n.collectionGroup!==null}function Le(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new dt(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Mn(o,i))}),e.has(it.keyField().canonicalString())||t.ce.push(new Mn(it.keyField(),i))}return t.ce}function Qt(n){const t=q(n);return t.le||(t.le=Wu(t,Le(n))),t.le}function Wu(n,t){if(n.limitType==="F")return Is(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Mn(s.field,o)});const e=n.endAt?new On(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new On(n.startAt.position,n.startAt.inclusive):null;return Is(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function xr(n,t,e){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function yo(n,t){return Qr(Qt(n),Qt(t))&&n.limitType===t.limitType}function Eo(n){return`${Kr(Qt(n))}|lt:${n.limitType}`}function Oe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>mo(s)).join(", ")}]`),zr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ce(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ce(s)).join(",")),`Target(${i})`}(Qt(n))}; limitType=${n.limitType})`}function Wr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Le(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,h,f){const m=vs(u,h,f);return u.inclusive?m<=0:m<0}(i.startAt,Le(i),s)||i.endAt&&!function(u,h,f){const m=vs(u,h,f);return u.inclusive?m>=0:m>0}(i.endAt,Le(i),s))}(n,t)}function Xu(n){return(t,e)=>{let i=!1;for(const s of Le(n)){const o=Yu(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Yu(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,h){const f=u.data.field(o),m=h.data.field(o);return f!==null&&m!==null?ue(f,m):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){We(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return lo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new _t(O.comparator);function xn(){return Ju}const vo=new _t(O.comparator);function Tn(...n){let t=vo;for(const e of n)t=t.insert(e.key,e);return t}function To(n){let t=vo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Gt(){return Fe()}function Io(){return Fe()}function Fe(){return new pe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Zu=new _t(O.comparator),tc=new dt(O.comparator);function ft(...n){let t=tc;for(const e of n)t=t.add(e);return t}const ec=new dt(j);function nc(){return ec}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dn(t)?"-0":t}}function wo(n){return{integerValue:""+n}}function rc(n,t){return Du(t)?wo(t):Ao(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this._=void 0}}function ic(n,t,e){return n instanceof Ln?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hr(o)&&(o=uo(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof He?Po(n,t):n instanceof Ge?So(n,t):function(s,o){const u=Ro(s,o),h=ws(u)+ws(s.Pe);return Or(u)&&Or(s.Pe)?wo(h):Ao(s.serializer,h)}(n,t)}function sc(n,t,e){return n instanceof He?Po(n,t):n instanceof Ge?So(n,t):e}function Ro(n,t){return n instanceof Fn?function(i){return Or(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Ln extends qn{}class He extends qn{constructor(t){super(),this.elements=t}}function Po(n,t){const e=Co(t);for(const i of n.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ge extends qn{constructor(t){super(),this.elements=t}}function So(n,t){let e=Co(t);for(const i of n.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class Fn extends qn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ws(n){return rt(n.integerValue||n.doubleValue)}function Co(n){return Gr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function oc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof He&&s instanceof He||i instanceof Ge&&s instanceof Ge?ae(i.elements,s.elements,At):i instanceof Fn&&s instanceof Fn?At(i.Pe,s.Pe):i instanceof Ln&&s instanceof Ln}(n.transform,t.transform)}class ac{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class zn{}function bo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Do(n.key,St.none()):new Xe(n.key,n.data,St.none());{const e=n.data,i=Tt.empty();let s=new dt(it.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new Zt(n.key,i,new It(s.toArray()),St.none())}}function lc(n,t,e){n instanceof Xe?function(s,o,u){const h=s.value.clone(),f=Ps(s.fieldTransforms,o,u.transformResults);h.setAll(f),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):n instanceof Zt?function(s,o,u){if(!Rn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Ps(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Vo(s)),f.setAll(h),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ue(n,t,e,i){return n instanceof Xe?function(o,u,h,f){if(!Rn(o.precondition,u))return h;const m=o.value.clone(),I=Ss(o.fieldTransforms,f,u);return m.setAll(I),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,t,e,i):n instanceof Zt?function(o,u,h,f){if(!Rn(o.precondition,u))return h;const m=Ss(o.fieldTransforms,f,u),I=u.data;return I.setAll(Vo(o)),I.setAll(m),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,h){return Rn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,t,e)}function uc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Ro(i.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(i.field,o))}return e||null}function Rs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ae(i,s,(o,u)=>oc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Xe extends zn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zt extends zn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ps(n,t,e){const i=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,h=t.data.field(o.field);i.set(o.field,sc(u,h,e[s]))}return i}function Ss(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,ic(o,u,t))}return i}class Do extends zn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cc extends zn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&lc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ue(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ue(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Io();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(s.key)?null:h;const f=bo(u,h);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(e,i)=>Rs(e,i))&&ae(this.baseMutations,t.baseMutations,(e,i)=>Rs(e,i))}}class Xr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){tt(t.mutations.length===i.length);let s=function(){return Zu}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new Xr(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,L;function dc(n){switch(n){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function pc(n){if(n===void 0)return Yt("GRPC error has no .code"),P.UNKNOWN;switch(n){case W.OK:return P.OK;case W.CANCELLED:return P.CANCELLED;case W.UNKNOWN:return P.UNKNOWN;case W.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case W.INTERNAL:return P.INTERNAL;case W.UNAVAILABLE:return P.UNAVAILABLE;case W.UNAUTHENTICATED:return P.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case W.NOT_FOUND:return P.NOT_FOUND;case W.ALREADY_EXISTS:return P.ALREADY_EXISTS;case W.PERMISSION_DENIED:return P.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case W.ABORTED:return P.ABORTED;case W.OUT_OF_RANGE:return P.OUT_OF_RANGE;case W.UNIMPLEMENTED:return P.UNIMPLEMENTED;case W.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(L=W||(W={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ys([4294967295,4294967295],0);class gc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function _c(n,t){return Lr(n,t.toTimestamp())}function oe(n){return tt(!!n),H.fromTimestamp(function(e){const i=Jt(e);return new Z(i.seconds,i.nanos)}(n))}function No(n,t){return Fr(n,t).canonicalString()}function Fr(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yc(n){const t=X.fromString(n);return tt(Pc(t)),t}function Ur(n,t){return No(n.databaseId,t.path)}function Ec(n){const t=yc(n);return t.length===4?X.emptyPath():Tc(t)}function vc(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tc(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cs(n,t,e){return{name:Ur(n,t),fields:e.value.mapValue.fields}}function Ic(n,t){let e;if(t instanceof Xe)e={update:Cs(n,t.key,t.value)};else if(t instanceof Do)e={delete:Ur(n,t.key)};else if(t instanceof Zt)e={update:Cs(n,t.key,t.data),updateMask:Rc(t.fieldMask)};else{if(!(t instanceof cc))return x();e={verify:Ur(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const h=u.transform;if(h instanceof Ln)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof He)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Ge)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Fn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:_c(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Ac(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?oe(s.updateTime):oe(o);return u.isEqual(H.min())&&(u=oe(o)),new ac(u,s.transformResults||[])}(e,t))):[]}function wc(n){let t=Ec(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){tt(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const S=ko(w);return S instanceof Ft&&po(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(S=>function(D){return new Mn(ie(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let h=null;e.limit&&(h=function(w){let S;return S=typeof w=="object"?w.value:w,zr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,b=w.values||[];return new On(b,S)}(e.startAt));let m=null;return e.endAt&&(m=function(w){const S=!w.before,b=w.values||[];return new On(b,S)}(e.endAt)),Gu(t,s,u,o,h,"F",f,m)}function ko(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ie(e.unaryFilter.field);return J.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ie(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ie(e.unaryFilter.field);return J.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ie(e.unaryFilter.field);return J.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return J.create(ie(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(i=>ko(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function ie(n){return it.fromServerFormat(n.fieldPath)}function Rc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.ct=t}}function Cc(n){const t=wc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this._n=new Vc}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Lt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Vc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new dt(X.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new dt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new he(0)}static Ln(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.changes=new pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ue(i.mutation,s,It.empty(),Z.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Gt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Tn();return o.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Gt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,i,s){let o=xn();const u=Fe(),h=function(){return Fe()}();return e.forEach((f,m)=>{const I=i.get(m.key);s.has(m.key)&&(I===void 0||I.mutation instanceof Zt)?o=o.insert(m.key,m):I!==void 0?(u.set(m.key,I.mutation.getFieldMask()),Ue(I.mutation,m,I.mutation.getFieldMask(),Z.now())):u.set(m.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((m,I)=>u.set(m,I)),e.forEach((m,I)=>{var w;return h.set(m,new Nc(I,(w=u.get(m))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const i=Fe();let s=new _t((u,h)=>u-h),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(f=>{const m=e.get(f);if(m===null)return;let I=i.get(f)||It.empty();I=h.applyToLocalView(m,I),i.set(f,I);const w=(s.get(h.batchId)||ft()).add(f);s=s.insert(h.batchId,w)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,I=f.value,w=Io();I.forEach(S=>{if(!o.has(S)){const b=bo(e.get(S),i.get(S));b!==null&&w.set(S,b),o=o.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,m,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Gt());let h=-1,f=o;return u.next(m=>R.forEach(m,(I,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,f,m,ft())).next(I=>({batchId:h,changes:To(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Tn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Tn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const m=function(w,S){return new $n(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,i,s).next(I=>{I.forEach((w,S)=>{u=u.insert(w,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,m)=>{const I=m.getKey();u.get(I)===null&&(u=u.insert(I,vt.newInvalidDocument(I)))});let h=Tn();return u.forEach((f,m)=>{const I=o.get(f);I!==void 0&&Ue(I.mutation,m,It.empty(),Z.now()),Wr(e,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:oe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Cc(s.bundledQuery),readTime:oe(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.overlays=new _t(O.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Gt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Gt(),o=e.length+1,u=new O(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((m,I)=>m-I);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>i){let I=o.get(m.largestBatchId);I===null&&(I=Gt(),o=o.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const h=Gt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,I)=>h.set(m,I)),!(h.size()>=s)););return R.resolve(h)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new fc(e,i));let o=this.hr.get(e);o===void 0&&(o=ft(),this.hr.set(e,o)),this.hr.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Pr=new dt(Y.Ir),this.Tr=new dt(Y.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new Y(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new Y(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new O(new X([])),i=new Y(e,t),s=new Y(e,t+1),o=[];return this.Tr.forEachInRange([i,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new X([])),i=new Y(e,t),s=new Y(e,t+1);let o=ft();return this.Tr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new Y(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Y{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||j(t.pr,e.pr)}static Er(t,e){return j(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new dt(Y.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new hc(o,e,i,s);this.mutationQueue.push(u);for(const h of s)this.wr=this.wr.add(new Y(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Y(e,0),s=new Y(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([i,s],u=>{const h=this.Sr(u.pr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new dt(j);return e.forEach(s=>{const o=new Y(s,0),u=new Y(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],h=>{i=i.add(h.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const u=new Y(new O(o),0);let h=new dt(j);return this.wr.forEachWhile(f=>{const m=f.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(h=h.add(f.pr)),!0)},u),R.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const o=new Y(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new Y(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.vr=t,this.docs=function(){return new _t(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let i=xn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=xn();const u=e.path,h=new O(u.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:I}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Su(Pu(I),i)<=0||(s.has(I.key)||Wr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Fc(this)}getSize(t){return R.resolve(this.size)}}class Fc extends Dc{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this.persistence=t,this.Mr=new pe(e=>Kr(e),Qr),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yr,this.targetCount=0,this.Lr=he.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new he(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Mr.forEach((u,h)=>{h.sequenceNumber<=e&&i.get(h.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e){this.Br={},this.overlays={},this.kr=new ao(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Uc(this),this.indexManager=new bc,this.remoteDocumentCache=function(s){return new Lc(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new Sc(e),this.$r=new Oc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new xc(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){V("MemoryPersistence","Starting transaction:",t);const s=new jc(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class jc extends bu{constructor(t){super(),this.currentSequenceNumber=t}}class Jr{constructor(t){this.persistence=t,this.zr=new Yr,this.jr=null}static Hr(t){return new Jr(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=O.fromPath(i);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Zr(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ya()?8:Vu(Wa())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new $c;return this.Ji(t,e,u).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,u,h.size)})}).next(()=>o.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(ke()<=F.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(ke()<=F.DEBUG&&V("QueryEngine","Query:",Oe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(ke()<=F.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qt(e))):R.resolve())}ji(t,e){if(As(e))return R.resolve(null);let i=Qt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=xr(e,null,"F"),i=Qt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=ft(...o);return this.zi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,i).next(f=>{const m=this.Zi(e,h);return this.Xi(e,m,u,f.readTime)?this.ji(t,xr(e,null,"F")):this.es(t,m,e,f)}))})))}Hi(t,e,i,s){return As(e)||s.isEqual(H.min())?R.resolve(null):this.zi.getDocuments(t,i).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,i,s)?R.resolve(null):(ke()<=F.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oe(e)),this.es(t,u,e,Ru(s,-1)).next(h=>h))})}Zi(t,e){let i=new dt(Xu(t));return e.forEach((s,o)=>{Wr(t,o)&&(i=i.add(o))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,i){return ke()<=F.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Oe(e)),this.zi.getDocumentsMatchingQuery(t,e,Lt.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new _t(j),this.rs=new pe(o=>Kr(o),Qr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Hc(n,t,e,i){return new zc(n,t,e,i)}async function Oo(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],h=[];let f=ft();for(const m of s){u.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}for(const m of o){h.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(m=>({us:m,removedBatchIds:u,addedBatchIds:h}))})})}function Gc(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(h,f,m,I){const w=m.batch,S=w.keys();let b=R.resolve();return S.forEach(D=>{b=b.next(()=>I.getEntry(f,D)).next(M=>{const N=m.docVersions.get(D);tt(N!==null),M.version.compareTo(N)<0&&(w.applyToRemoteDocument(M,m),M.isValidDocument()&&(M.setReadTime(m.commitVersion),I.addEntry(M)))})}),b.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let f=ft();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Kc(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Qc(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class bs{constructor(){this.activeTargetIds=nc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wc{constructor(){this.no=new bs,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new bs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In=null;function Ar(){return In===null?In=function(){return 268435456+Math.round(2147483648*Math.random())}():In++,"0x"+In.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class Zc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,i,s,o,u){const h=Ar(),f=this.vo(e,i.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${h}:`,f,s);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,o,u),this.Mo(e,f,m,s).then(I=>(V("RestConnection",`Received RPC '${e}' ${h}: `,I),I),I=>{throw Vn("RestConnection",`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I})}xo(e,i,s,o,u,h){return this.Co(e,i,s,o,u)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+de}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,i){const s=Yc[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const o=Ar();return new Promise((u,h)=>{const f=new Js;f.setWithCredentials(!0),f.listenOnce(to.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case An.NO_ERROR:const I=f.getResponseJson();V(ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case An.TIMEOUT:V(ct,`RPC '${t}' ${o} timed out`),h(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case An.HTTP_ERROR:const w=f.getStatus();if(V(ct,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S==null?void 0:S.error;if(b&&b.status&&b.message){const D=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(b.status);h(new k(D,b.message))}else h(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{V(ct,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);V(ct,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",m,i,15)})}Oo(t,e,i){const s=Ar(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ro(),h=no(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.xmlHttpFactory=new Zs({})),this.Fo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ct,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let S=!1,b=!1;const D=new Jc({lo:N=>{b?V(ct,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(V(ct,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),V(ct,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},ho:()=>w.close()}),M=(N,G,z)=>{N.listen(G,Q=>{try{z(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return M(w,Me.EventType.OPEN,()=>{b||(V(ct,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),M(w,Me.EventType.CLOSE,()=>{b||(b=!0,V(ct,`RPC '${t}' stream ${s} transport closed`),D.po())}),M(w,Me.EventType.ERROR,N=>{b||(b=!0,Vn(ct,`RPC '${t}' stream ${s} transport errored:`,N),D.po(new k(P.UNAVAILABLE,"The operation could not be completed")))}),M(w,Me.EventType.MESSAGE,N=>{var G;if(!b){const z=N.data[0];tt(!!z);const Q=z,st=Q.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(st){V(ct,`RPC '${t}' stream ${s} received error:`,st);const Bt=st.status;let mt=function(g){const _=W[g];if(_!==void 0)return pc(_)}(Bt),E=st.message;mt===void 0&&(mt=P.INTERNAL,E="Unknown error status: "+Bt+" with message "+st.message),b=!0,D.po(new k(mt,E)),w.close()}else V(ct,`RPC '${t}' stream ${s} received:`,z),D.yo(z)}}),M(h,eo.STAT_EVENT,N=>{N.stat===Nr.PROXY?V(ct,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Nr.NOPROXY&&V(ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function wr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){return new gc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,i,s,o,u,h,f){this.oi=t,this.Go=i,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Mo(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Yt(e.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eh extends th{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Ac(t.writeResults,t.commitTime),i=oe(t.commitTime);return this.listener.A_(i,e)}return tt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=vc(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Ic(this.serializer,i))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,Fr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}xo(t,e,i,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.xo(t,Fr(e,i),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class rh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Yt(e),this.y_=!1):V("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{i.enqueueAndForget(async()=>{Je(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=q(f);m.M_.add(4),await Ye(m),m.N_.set("Unknown"),m.M_.delete(4),await Gn(m)}(this))})}),this.N_=new rh(i,s)}}async function Gn(n){if(Je(n))for(const t of n.x_)await t(!0)}async function Ye(n){for(const t of n.x_)await t(!1)}function Je(n){return q(n).M_.size===0}async function xo(n,t,e){if(!jn(t))throw t;n.M_.add(1),await Ye(n),n.N_.set("Offline"),e||(e=()=>Kc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Gn(n)})}function Lo(n,t){return t().catch(e=>xo(n,e,t))}async function Kn(n){const t=q(n),e=Ut(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;sh(t);)try{const s=await Qc(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,oh(t,s)}catch(s){await xo(t,s)}Fo(t)&&Uo(t)}function sh(n){return Je(n)&&n.v_.length<10}function oh(n,t){n.v_.push(t);const e=Ut(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Fo(n){return Je(n)&&!Ut(n).Zo()&&n.v_.length>0}function Uo(n){Ut(n).start()}async function ah(n){Ut(n).V_()}async function lh(n){const t=Ut(n);for(const e of n.v_)t.d_(e.mutations)}async function uh(n,t,e){const i=n.v_.shift(),s=Xr.from(i,t,e);await Lo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Kn(n)}async function ch(n,t){t&&Ut(n).E_&&await async function(i,s){if(function(u){return dc(u)&&u!==P.ABORTED}(s.code)){const o=i.v_.shift();Ut(i).t_(),await Lo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Kn(i)}}(n,t),Fo(n)&&Uo(n)}async function Ds(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const i=Je(e);e.M_.add(3),await Ye(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Gn(e)}async function hh(n,t){const e=q(n);t?(e.M_.delete(2),await Gn(e)):t||(e.M_.add(2),await Ye(e),e.N_.set("Unknown"))}function Ut(n){return n.k_||(n.k_=function(e,i,s){const o=q(e);return o.f_(),new eh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:ah.bind(null,n),Ao:ch.bind(null,n),R_:lh.bind(null,n),A_:uh.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Kn(n)):(await n.k_.stop(),n.v_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,h=new ti(t,e,u,s,o);return h.start(i),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bo(n,t){if(Yt("AsyncQueue",`${t}: ${n}`),jn(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class fh{constructor(){this.queries=new pe(t=>Eo(t),yo),this.onlineState="Unknown",this.z_=new Set}}function dh(n){n.z_.forEach(t=>{t.next()})}var Ns,ks;(ks=Ns||(Ns={})).J_="default",ks.Cache="cache";class ph{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new pe(h=>Eo(h),yo),this.Da=new Map,this.Ca=new Set,this.va=new _t(O.comparator),this.Fa=new Map,this.Ma=new Yr,this.xa={},this.Oa=new Map,this.Na=he.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function gh(n,t,e){const i=Eh(n);try{const s=await function(u,h){const f=q(u),m=Z.now(),I=h.reduce((b,D)=>b.add(D.key),ft());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=xn(),M=ft();return f.os.getEntries(b,I).next(N=>{D=N,D.forEach((G,z)=>{z.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,D)).next(N=>{w=N;const G=[];for(const z of h){const Q=uc(z,w.get(z.key).overlayedDocument);Q!=null&&G.push(new Zt(z.key,Q,co(Q.value.mapValue),St.exists(!0)))}return f.mutationQueue.addMutationBatch(b,m,G,h)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,M);return f.documentOverlayCache.saveOverlays(b,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:To(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,h,f){let m=u.xa[u.currentUser.toKey()];m||(m=new _t(j)),m=m.insert(h,f),u.xa[u.currentUser.toKey()]=m}(i,s.batchId,e),await Qn(i,s.changes),await Kn(i.remoteStore)}catch(s){const o=Bo(s,"Failed to persist write");e.reject(o)}}function Os(n,t,e){const i=q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((o,u)=>{const h=u.view.j_(t);h.snapshot&&s.push(h.snapshot)}),function(u,h){const f=q(u);f.onlineState=h;let m=!1;f.queries.forEach((I,w)=>{for(const S of w.U_)S.j_(h)&&(m=!0)}),m&&dh(f)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function mh(n,t){const e=q(n),i=t.batch.batchId;try{const s=await Gc(e.localStore,t);$o(e,i,null),jo(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Qn(e,s)}catch(s){await oo(s)}}async function _h(n,t,e){const i=q(n);try{const s=await function(u,h){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let I;return f.mutationQueue.lookupMutationBatch(m,h).next(w=>(tt(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(m,w))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,I,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I)).next(()=>f.localDocuments.getDocuments(m,I))})}(i.localStore,t);$o(i,t,e),jo(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Qn(i,s)}catch(s){await oo(s)}}function jo(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function $o(n,t,e){const i=q(n);let s=i.xa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function Qn(n,t,e){const i=q(n),s=[],o=[],u=[];i.ba.isEmpty()||(i.ba.forEach((h,f)=>{u.push(i.Ba(f,t,e).then(m=>{if((m||e)&&i.isPrimaryClient){const I=m&&!m.fromCache;i.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(m){s.push(m);const I=Zr.Ki(f.targetId,m);o.push(I)}}))}),await Promise.all(u),i.Sa.h_(s),await async function(f,m){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(m,S=>R.forEach(S.qi,b=>I.persistence.referenceDelegate.addReference(w,S.targetId,b)).next(()=>R.forEach(S.Qi,b=>I.persistence.referenceDelegate.removeReference(w,S.targetId,b)))))}catch(w){if(!jn(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of m){const S=w.targetId;if(!w.fromCache){const b=I.ns.get(S),D=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(D);I.ns=I.ns.insert(S,M)}}}(i.localStore,o))}async function yh(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const i=await Oo(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(h=>{h.forEach(f=>{f.reject(new k(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Qn(e,i.us)}}function Eh(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_h.bind(null,t),t}class Ms{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Hc(this.persistence,new qc,t.initialUser,this.serializer)}createPersistence(t){return new Bc(Jr.Hr,this.serializer)}createSharedClientState(t){return new Wc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Os(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yh.bind(null,this.syncEngine),await hh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fh}()}createDatastore(t){const e=Hn(t.databaseInfo.databaseId),i=function(o){return new Zc(o)}(t.databaseInfo);return function(o,u,h,f){return new nh(o,u,h,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,h){return new ih(i,s,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Os(this.syncEngine,e,0),function(){return Vs.D()?new Vs:new Xc}())}createSyncEngine(t,e){return function(s,o,u,h,f,m,I){const w=new ph(s,o,u,h,f,m);return I&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=q(i);V("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ye(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=so.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Bo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Rr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Oo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ah(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ds(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ds(t.remoteStore,s)),n._onlineComponents=t}function Ih(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ah(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ih(e))throw e;Vn("Error using user provided cache. Falling back to memory cache: "+e),await Rr(n,new Ms)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Rr(n,new Ms);return n._offlineComponents}async function wh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await xs(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await xs(n,new vh))),n._onlineComponents}function Rh(n){return wh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sh(n,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fs(n){if(!O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ei(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function Br(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ei(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qo((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ni{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Us({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Us(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new mu;switch(i.type){case"firstParty":return new vu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Ls.get(e);i&&(V("ComponentProvider","Removing Datastore"),Ls.delete(e),i.terminate())}(this),Promise.resolve()}}function Ch(n,t,e,i={}){var s;const o=(n=Br(n,ni))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let h,f;if(typeof i.mockUserToken=="string")h=i.mockUserToken,f=ht.MOCK_USER;else{h=Qa(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(m)}n._authCredentials=new _u(new io(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ri(this.firestore,t,this._query)}}class Ct{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class Ke extends ri{constructor(t,e,i){super(t,e,Ku(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new O(t))}withConverter(t){return new Ke(this.firestore,t,this._path)}}function bh(n,t,...e){if(n=Sn(n),arguments.length===1&&(t=so.newId()),Ph("doc","path",t),n instanceof ni){const i=X.fromString(t,...e);return Fs(i),new Ct(n,null,new O(i))}{if(!(n instanceof Ct||n instanceof Ke))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(t,...e));return Fs(i),new Ct(n.firestore,n instanceof Ke?n.converter:null,new O(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Mo(this,"async_queue_retry"),this.hu=()=>{const e=wr();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=wr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Kt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!jn(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(i);throw Yt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=ti.createAndSchedule(this,t,e,i,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class zo extends ni{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Vh}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ho(this),this._firestoreClient.terminate()}}function Dh(n,t){const e=typeof n=="object"?n:nu(),i=typeof n=="string"?n:"(default)",s=Jl(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Ga("firestore");o&&Ch(s,...o)}return s}function Nh(n){return n._firestoreClient||Ho(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ho(n){var t,e,i;const s=n._freezeSettings(),o=function(h,f,m,I){return new Ou(h,f,m,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,qo(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Th(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(bt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qe(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=/^__.*__$/;class Oh{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new Xe(t,this.data,e,this.fieldTransforms)}}function Wo(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ii{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Un(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Wo(this.fu)&&kh.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Mh{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Hn(t)}Fu(t,e,i,s=!1){return new ii({fu:t,methodName:e,vu:i,path:it.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xh(n){const t=n._freezeSettings(),e=Hn(n._databaseId);return new Mh(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Lh(n,t,e,i,s,o={}){const u=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Zo("Data must be an object, but it was:",u,i);const h=Yo(i,u);let f,m;if(o.merge)f=new It(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const S=Fh(t,w,e);if(!u.contains(S))throw new k(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);jh(I,S)||I.push(S)}f=new It(I),m=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=u.fieldTransforms;return new Oh(new Tt(h),f,m)}function Xo(n,t){if(Jo(n=Sn(n)))return Zo("Unsupported field value:",t,n),Yo(n,t);if(n instanceof Ko)return function(i,s){if(!Wo(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const h of i){let f=Xo(h,s.bu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Sn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return rc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=Z.fromDate(i);return{timestampValue:Lr(s.serializer,o)}}if(i instanceof Z){const o=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,o)}}if(i instanceof Qo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Qe)return{bytesValue:mc(s.serializer,i._byteString)};if(i instanceof Ct){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:No(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${ei(i)}`)}(n,t)}function Yo(n,t){const e={};return lo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):We(n,(i,s)=>{const o=Xo(s,t.pu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Jo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof Qo||n instanceof Qe||n instanceof Ct||n instanceof Ko)}function Zo(n,t,e){if(!Jo(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=ei(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function Fh(n,t,e){if((t=Sn(t))instanceof Go)return t._internalPath;if(typeof t=="string")return Bh(n,t);throw Un("Field path arguments must be of type string or ",n,!1,void 0,e)}const Uh=new RegExp("[~\\*/\\[\\]]");function Bh(n,t,e){if(t.search(Uh)>=0)throw Un(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Go(...t.split("."))._internalPath}catch{throw Un(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Un(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new k(P.INVALID_ARGUMENT,h+n+f)}function jh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function qh(n,t,e){n=Br(n,Ct);const i=Br(n.firestore,zo),s=$h(n.converter,t);return zh(i,[Lh(xh(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,St.none())])}function zh(n,t){return function(i,s){const o=new Kt;return i.asyncQueue.enqueueAndForget(async()=>gh(await Rh(i),s,o)),o.promise}(Nh(n),t)}(function(t,e=!0){(function(s){de=s})(eu),bn(new Be("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),h=new zo(new yu(i.getProvider("auth-internal")),new Iu(i.getProvider("app-check-internal")),function(m,I){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(m.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),se(ms,"4.6.3",t),se(ms,"4.6.3","esm2017")})();const Bn=document.createElement("canvas");Bn.width=64;Bn.height=64;const Hh=document.getElementById("buttons"),Gh=["blue","red","green","yellow","orange","purple","pink","brown","black","white","gray"];function Kh(){const n=Math.floor(Math.random()*16777215).toString(16);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)}}function ta(){return Math.random().toString(36).substr(2,9)}function Qh(n){document.querySelectorAll('link[rel="shortcut icon"]').forEach(s=>s.remove());const e=Bn.getContext("2d");e.fillStyle=n,e.beginPath(),e.arc(32,32,32,0,2*Math.PI),e.fill();const i=document.createElement("link");i.type="image/x-icon",i.rel="shortcut icon",i.href=Bn.toDataURL(),document.head.appendChild(i)}function ea(){Ot=Kh(),document.body.style.backgroundColor=`rgb(${Ot.r}, ${Ot.g}, ${Ot.b})`,Qh(`rgb(${Ot.r}, ${Ot.g}, ${Ot.b})`)}function Bs(n=!0){document.body.classList.toggle("lock",n)}const Wh=ta();let Ot=null;Gh.forEach(n=>{const t=document.createElement("button");t.textContent=n,t.style.backgroundColor=n,n==="black"&&(t.style.color="white"),Hh.appendChild(t)});ea();document.body.addEventListener("click",async n=>{if(n.target.tagName==="BUTTON")try{Bs(!0);const t=Dh(gu);await qh(bh(t,"colors",ta()),{...Ot,session:Wh,name:n.target.textContent}),ea(),Bs(!1)}catch(t){console.error("Error adding document: ",t)}});
