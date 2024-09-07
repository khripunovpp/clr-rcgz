var rs={};/**
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
 */const Ls=function(r){const t=[];let e=0;for(let i=0;i<r.length;i++){let s=r.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Na=function(r){const t=[];let e=0,i=0;for(;e<r.length;){const s=r[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=r[e++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=r[e++],u=r[e++],c=r[e++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const a=r[e++],u=r[e++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<r.length;s+=3){const a=r[s],u=s+1<r.length,c=u?r[s+1]:0,f=s+2<r.length,m=f?r[s+2]:0,I=a>>2,w=(a&3)<<4|c>>4;let S=(c&15)<<2|m>>6,b=m&63;f||(b=64,u||(S=64)),i.push(e[I],e[w],e[S],e[b])}return i.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ls(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Na(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<r.length;){const a=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const m=s<r.length?e[r.charAt(s)]:64;++s;const w=s<r.length?e[r.charAt(s)]:64;if(++s,a==null||c==null||m==null||w==null)throw new ka;const S=a<<2|c>>4;if(i.push(S),m!==64){const b=c<<4&240|m>>2;if(i.push(b),w!==64){const D=m<<6&192|w;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ka extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oa=function(r){const t=Ls(r);return Us.encodeByteArray(t,!0)},Rn=function(r){return Oa(r).replace(/\./g,"")},Ma=function(r){try{return Us.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fa=()=>xa().__FIREBASE_DEFAULTS__,La=()=>{if(typeof process>"u"||typeof rs>"u")return;const r=rs.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ua=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Ma(r[1]);return t&&JSON.parse(t)},Ur=()=>{try{return Fa()||La()||Ua()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ba=r=>{var t,e;return(e=(t=Ur())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},ja=r=>{const t=Ba(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Bs=()=>{var r;return(r=Ur())===null||r===void 0?void 0:r.config};/**
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
 */class $a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function qa(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Rn(JSON.stringify(e)),Rn(JSON.stringify(u)),""].join(".")}/**
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
 */function za(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ha(){var r;const t=(r=Ur())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ga(){return!Ha()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Qa(){return new Promise((r,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(e){t(e)}})}/**
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
 */const Wa="FirebaseError";class ce extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Wa,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?Xa(a,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ce(s,c,i)}}function Xa(r,t){return r.replace(Ya,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Ya=/\{\$([^}]+)}/g;function wr(r,t){if(r===t)return!0;const e=Object.keys(r),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const a=r[s],u=t[s];if(is(a)&&is(u)){if(!wr(a,u))return!1}else if(a!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function is(r){return r!==null&&typeof r=="object"}/**
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
 */function Pn(r){return r&&r._delegate?r._delegate:r}class Ue{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zt="[DEFAULT]";/**
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
 */class Ja{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new $a;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tl(t))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(t=zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zt){return this.instances.has(t)}getOptions(t=zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[a,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(t),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&t(u,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Za(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=zt){return this.component?this.component.multipleInstances?t:zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Za(r){return r===zt?void 0:r}function tl(r){return r.instantiationMode==="EAGER"}/**
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
 */class el{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ja(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(L||(L={}));const nl={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},rl=L.INFO,il={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},sl=(r,t,...e)=>{if(t<r.logLevel)return;const i=new Date().toISOString(),s=il[t];if(s)console[s](`[${i}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $s{constructor(t){this.name=t,this._logLevel=rl,this._logHandler=sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const ol=(r,t)=>t.some(e=>r instanceof e);let ss,os;function al(){return ss||(ss=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ll(){return os||(os=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qs=new WeakMap,Rr=new WeakMap,zs=new WeakMap,_r=new WeakMap,Br=new WeakMap;function ul(r){const t=new Promise((e,i)=>{const s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",u)},a=()=>{e(Ot(r.result)),s()},u=()=>{i(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&qs.set(e,r)}).catch(()=>{}),Br.set(t,r),t}function hl(r){if(Rr.has(r))return;const t=new Promise((e,i)=>{const s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",u),r.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{i(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",u),r.addEventListener("abort",u)});Rr.set(r,t)}let Pr={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Rr.get(r);if(t==="objectStoreNames")return r.objectStoreNames||zs.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ot(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function cl(r){Pr=r(Pr)}function fl(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=r.call(yr(this),t,...e);return zs.set(i,t.sort?t.sort():[t]),Ot(i)}:ll().includes(r)?function(...t){return r.apply(yr(this),t),Ot(qs.get(this))}:function(...t){return Ot(r.apply(yr(this),t))}}function dl(r){return typeof r=="function"?fl(r):(r instanceof IDBTransaction&&hl(r),ol(r,al())?new Proxy(r,Pr):r)}function Ot(r){if(r instanceof IDBRequest)return ul(r);if(_r.has(r))return _r.get(r);const t=dl(r);return t!==r&&(_r.set(r,t),Br.set(t,r)),t}const yr=r=>Br.get(r);function pl(r,t,{blocked:e,upgrade:i,blocking:s,terminated:a}={}){const u=indexedDB.open(r,t),c=Ot(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Ot(u.result),f.oldVersion,f.newVersion,Ot(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const gl=["get","getKey","getAll","getAllKeys","count"],ml=["put","add","delete","clear"],Er=new Map;function as(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Er.get(t))return Er.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=ml.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||gl.includes(e)))return;const a=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return i&&(m=m.index(c.shift())),(await Promise.all([m[e](...c),s&&f.done]))[0]};return Er.set(t,a),a}cl(r=>({...r,get:(t,e,i)=>as(t,e)||r.get(t,e,i),has:(t,e)=>!!as(t,e)||r.has(t,e)}));/**
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
 */class _l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(yl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function yl(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sr="@firebase/app",ls="0.10.5";/**
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
 */const Qt=new $s("@firebase/app"),El="@firebase/app-compat",vl="@firebase/analytics-compat",Tl="@firebase/analytics",Il="@firebase/app-check-compat",Al="@firebase/app-check",wl="@firebase/auth",Rl="@firebase/auth-compat",Pl="@firebase/database",Sl="@firebase/database-compat",Cl="@firebase/functions",bl="@firebase/functions-compat",Vl="@firebase/installations",Dl="@firebase/installations-compat",Nl="@firebase/messaging",kl="@firebase/messaging-compat",Ol="@firebase/performance",Ml="@firebase/performance-compat",xl="@firebase/remote-config",Fl="@firebase/remote-config-compat",Ll="@firebase/storage",Ul="@firebase/storage-compat",Bl="@firebase/firestore",jl="@firebase/vertexai-preview",$l="@firebase/firestore-compat",ql="firebase",zl="10.12.2";/**
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
 */const Cr="[DEFAULT]",Hl={[Sr]:"fire-core",[El]:"fire-core-compat",[Tl]:"fire-analytics",[vl]:"fire-analytics-compat",[Al]:"fire-app-check",[Il]:"fire-app-check-compat",[wl]:"fire-auth",[Rl]:"fire-auth-compat",[Pl]:"fire-rtdb",[Sl]:"fire-rtdb-compat",[Cl]:"fire-fn",[bl]:"fire-fn-compat",[Vl]:"fire-iid",[Dl]:"fire-iid-compat",[Nl]:"fire-fcm",[kl]:"fire-fcm-compat",[Ol]:"fire-perf",[Ml]:"fire-perf-compat",[xl]:"fire-rc",[Fl]:"fire-rc-compat",[Ll]:"fire-gcs",[Ul]:"fire-gcs-compat",[Bl]:"fire-fst",[$l]:"fire-fst-compat",[jl]:"fire-vertex","fire-js":"fire-js",[ql]:"fire-js-all"};/**
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
 */const Sn=new Map,Gl=new Map,br=new Map;function us(r,t){try{r.container.addComponent(t)}catch(e){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Cn(r){const t=r.name;if(br.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;br.set(t,r);for(const e of Sn.values())us(e,r);for(const e of Gl.values())us(e,r);return!0}function Kl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
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
 */const Ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new js("app","Firebase",Ql);/**
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
 */class Wl{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Xl=zl;function Hs(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(e||(e=Bs()),!e)throw Mt.create("no-options");const a=Sn.get(s);if(a){if(wr(e,a.options)&&wr(i,a.config))return a;throw Mt.create("duplicate-app",{appName:s})}const u=new el(s);for(const f of br.values())u.addComponent(f);const c=new Wl(e,i,u);return Sn.set(s,c),c}function Yl(r=Cr){const t=Sn.get(r);if(!t&&r===Cr&&Bs())return Hs();if(!t)throw Mt.create("no-app",{appName:r});return t}function ie(r,t,e){var i;let s=(i=Hl[r])!==null&&i!==void 0?i:r;e&&(s+=`-${e}`);const a=s.match(/\s|\//),u=t.match(/\s|\//);if(a||u){const c=[`Unable to register library "${s}" with version "${t}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(c.join(" "));return}Cn(new Ue(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Jl="firebase-heartbeat-database",Zl=1,Be="firebase-heartbeat-store";let vr=null;function Gs(){return vr||(vr=pl(Jl,Zl,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Be)}catch(e){console.warn(e)}}}}).catch(r=>{throw Mt.create("idb-open",{originalErrorMessage:r.message})})),vr}async function tu(r){try{const e=(await Gs()).transaction(Be),i=await e.objectStore(Be).get(Ks(r));return await e.done,i}catch(t){if(t instanceof ce)Qt.warn(t.message);else{const e=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(e.message)}}}async function hs(r,t){try{const i=(await Gs()).transaction(Be,"readwrite");await i.objectStore(Be).put(t,Ks(r)),await i.done}catch(e){if(e instanceof ce)Qt.warn(e.message);else{const i=Mt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(i.message)}}}function Ks(r){return`${r.name}!${r.options.appId}`}/**
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
 */const eu=1024,nu=30*24*60*60*1e3;class ru{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new su(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=cs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=nu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cs(),{heartbeatsToSend:i,unsentEntries:s}=iu(this._heartbeatsCache.heartbeats),a=Rn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function cs(){return new Date().toISOString().substring(0,10)}function iu(r,t=eu){const e=[];let i=r.slice();for(const s of r){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),fs(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),fs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class su{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ka()?Qa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await tu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fs(r){return Rn(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function ou(r){Cn(new Ue("platform-logger",t=>new _l(t),"PRIVATE")),Cn(new Ue("heartbeat",t=>new ru(t),"PRIVATE")),ie(Sr,ls,r),ie(Sr,ls,"esm2017"),ie("fire-js","")}ou("");var au="firebase",lu="10.12.2";/**
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
 */ie(au,lu,"app");var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)p[wt-2]=arguments[wt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function a(E,d){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function u(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?a(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(m(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=m(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=m(Math.pow(d,T)),_=_.j(T).add(m(p))):(_=_.j(g),_=_.add(m(p)))}return _}var w=f(0),S=f(1),b=f(16777216);r=u.prototype,r.m=function(){if(M(this))return-N(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var d=m(Math.pow(E,6)),g=this,_="";;){var y=st(g,d).g;g=G(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function M(E){return E.h==-1}r.l=function(E){return E=G(this,E),M(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new u(g,~E.h).add(S)}r.abs=function(){return M(this)?N(this):this},r.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}r.j=function(E){if(D(this)||D(E))return w;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(b)&&0>E.l(b))return m(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,wt=E.i(y)>>>16,pe=E.i(y)&65535;g[2*_+2*y]+=p*pe,z(g,2*_+2*y),g[2*_+2*y+1]+=T*pe,z(g,2*_+2*y+1),g[2*_+2*y+1]+=p*wt,z(g,2*_+2*y+1),g[2*_+2*y+2]+=T*wt,z(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function z(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function Q(E,d){this.g=E,this.h=d}function st(E,d){if(D(d))throw Error("division by zero");if(D(E))return new Q(w,w);if(M(E))return d=st(N(E),d),new Q(N(d.g),N(d.h));if(M(d))return d=st(E,N(d)),new Q(N(d.g),d.h);if(30<E.g.length){if(M(E)||M(d))throw Error("slowDivide_ only works with positive integers.");for(var g=S,_=d;0>=_.l(E);)g=Ut(g),_=Ut(_);var y=mt(g,1),T=mt(_,1);for(_=mt(_,2),g=mt(g,2);!D(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(g),T=p),_=mt(_,1),g=mt(g,1)}return d=G(E,y.j(d)),new Q(y,d)}for(y=w;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(g),p=T.j(d);M(p)||0<p.l(E);)g-=_,T=m(g),p=T.j(d);D(T)&&(T=S),y=y.add(T),E=G(E,p)}return new Q(y,E)}r.A=function(E){return st(this,E).h},r.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new u(g,this.h&E.h)},r.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new u(g,this.h|E.h)},r.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new u(g,this.h^E.h)};function Ut(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(g,E.h)}function mt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=I,Qs=u}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});var _n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,Xs,Oe,Ys,In,Vr,Js,Zs,to;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,l){return n==Array.prototype||n==Object.prototype||(n[o]=l.value),n};function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof _n=="object"&&_n];for(var o=0;o<n.length;++o){var l=n[o];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(n,o){if(o)t:{var l=i;n=n.split(".");for(var h=0;h<n.length-1;h++){var v=n[h];if(!(v in l))break t;l=l[v]}n=n[n.length-1],h=l[n],o=o(h),o!=h&&o!=null&&t(l,n,{configurable:!0,writable:!0,value:o})}}function a(n,o){n instanceof String&&(n+="");var l=0,h=!1,v={next:function(){if(!h&&l<n.length){var A=l++;return{value:o(A,n[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return a(this,function(o,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function m(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function I(n,o,l){return n.call.apply(n.bind,arguments)}function w(n,o,l){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function S(n,o,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function b(n,o){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function D(n,o){function l(){}l.prototype=o.prototype,n.aa=o.prototype,n.prototype=new l,n.prototype.constructor=n,n.Qb=function(h,v,A){for(var C=Array(arguments.length-2),B=2;B<arguments.length;B++)C[B-2]=arguments[B];return o.prototype[v].apply(h,C)}}function M(n){const o=n.length;if(0<o){const l=Array(o);for(let h=0;h<o;h++)l[h]=n[h];return l}return[]}function N(n,o){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=n.length||0,A=h.length||0;n.length=v+A;for(let C=0;C<A;C++)n[v+C]=h[C]}else n.push(h)}}class G{constructor(o,l){this.i=o,this.j=l,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function z(n){return/^[\s\xa0]*$/.test(n)}function Q(){var n=c.navigator;return n&&(n=n.userAgent)?n:""}function st(n){return st[" "](n),n}st[" "]=function(){};var Ut=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function mt(n,o,l){for(const h in n)o.call(l,n[h],h,n)}function E(n,o){for(const l in n)o.call(void 0,n[l],l,n)}function d(n){const o={};for(const l in n)o[l]=n[l];return o}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(n,o){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)n[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(n[l]=h[l])}}function y(n){var o=1;n=n.split(":");const l=[];for(;0<o&&n.length;)l.push(n.shift()),o--;return n.length&&l.push(n.join(":")),l}function T(n){c.setTimeout(()=>{throw n},0)}function p(){var n=Kn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class wt{constructor(){this.h=this.g=null}add(o,l){const h=pe.get();h.set(o,l),this.h?this.h.next=h:this.g=h,this.h=h}}var pe=new G(()=>new Yo,n=>n.reset());class Yo{constructor(){this.next=this.g=this.h=null}set(o,l){this.h=o,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,me=!1,Kn=new wt,ri=()=>{const n=c.Promise.resolve(void 0);ge=()=>{n.then(Jo)}};var Jo=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(l){T(l)}var o=pe;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}me=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Zo=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const l=()=>{};c.addEventListener("test",l,o),c.removeEventListener("test",l,o)}catch{}return n}();function _e(n,o){if(ot.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var l=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(Ut){t:{try{st(o.nodeName);var v=!0;break t}catch{}v=!1}v||(o=null)}}else l=="mouseover"?o=n.fromElement:l=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ta[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&_e.aa.h.call(this)}}D(_e,ot);var ta={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),ea=0;function na(n,o,l,h,v){this.listener=n,this.proxy=null,this.src=o,this.type=l,this.capture=!!h,this.ha=v,this.key=++ea,this.da=this.fa=!1}function Ze(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function tn(n){this.src=n,this.g={},this.h=0}tn.prototype.add=function(n,o,l,h,v){var A=n.toString();n=this.g[A],n||(n=this.g[A]=[],this.h++);var C=Wn(n,o,h,v);return-1<C?(o=n[C],l||(o.fa=!1)):(o=new na(o,this.src,A,!!h,v),o.fa=l,n.push(o)),o};function Qn(n,o){var l=o.type;if(l in n.g){var h=n.g[l],v=Array.prototype.indexOf.call(h,o,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(Ze(o),n.g[l].length==0&&(delete n.g[l],n.h--))}}function Wn(n,o,l,h){for(var v=0;v<n.length;++v){var A=n[v];if(!A.da&&A.listener==o&&A.capture==!!l&&A.ha==h)return v}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),Yn={};function ii(n,o,l,h,v){if(Array.isArray(o)){for(var A=0;A<o.length;A++)ii(n,o[A],l,h,v);return null}return l=ai(l),n&&n[Je]?n.K(o,l,m(h)?!!h.capture:!!h,v):ra(n,o,l,!1,h,v)}function ra(n,o,l,h,v,A){if(!o)throw Error("Invalid event type");var C=m(v)?!!v.capture:!!v,B=Zn(n);if(B||(n[Xn]=B=new tn(n)),l=B.add(o,l,h,C,A),l.proxy)return l;if(h=ia(),l.proxy=h,h.src=n,h.listener=l,n.addEventListener)Zo||(v=C),v===void 0&&(v=!1),n.addEventListener(o.toString(),h,v);else if(n.attachEvent)n.attachEvent(oi(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ia(){function n(l){return o.call(n.src,n.listener,l)}const o=sa;return n}function si(n,o,l,h,v){if(Array.isArray(o))for(var A=0;A<o.length;A++)si(n,o[A],l,h,v);else h=m(h)?!!h.capture:!!h,l=ai(l),n&&n[Je]?(n=n.i,o=String(o).toString(),o in n.g&&(A=n.g[o],l=Wn(A,l,h,v),-1<l&&(Ze(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete n.g[o],n.h--)))):n&&(n=Zn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Wn(o,l,h,v)),(l=-1<n?o[n]:null)&&Jn(l))}function Jn(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Je])Qn(o.i,n);else{var l=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(l,h,n.capture):o.detachEvent?o.detachEvent(oi(l),h):o.addListener&&o.removeListener&&o.removeListener(h),(l=Zn(o))?(Qn(l,n),l.h==0&&(l.src=null,o[Xn]=null)):Ze(n)}}}function oi(n){return n in Yn?Yn[n]:Yn[n]="on"+n}function sa(n,o){if(n.da)n=!0;else{o=new _e(o,this);var l=n.listener,h=n.ha||n.src;n.fa&&Jn(n),n=l.call(h,o)}return n}function Zn(n){return n=n[Xn],n instanceof tn?n:null}var tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ai(n){return typeof n=="function"?n:(n[tr]||(n[tr]=function(o){return n.handleEvent(o)}),n[tr])}function at(){Vt.call(this),this.i=new tn(this),this.M=this,this.F=null}D(at,Vt),at.prototype[Je]=!0,at.prototype.removeEventListener=function(n,o,l,h){si(this,n,o,l,h)};function pt(n,o){var l,h=n.F;if(h)for(l=[];h;h=h.F)l.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new ot(o,n);else if(o instanceof ot)o.target=o.target||n;else{var v=o;o=new ot(h,n),_(o,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var C=o.g=l[A];v=en(C,h,!0,o)&&v}if(C=o.g=n,v=en(C,h,!0,o)&&v,v=en(C,h,!1,o)&&v,l)for(A=0;A<l.length;A++)C=o.g=l[A],v=en(C,h,!1,o)&&v}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var l=n.g[o],h=0;h<l.length;h++)Ze(l[h]);delete n.g[o],n.h--}}this.F=null},at.prototype.K=function(n,o,l,h){return this.i.add(String(n),o,!1,l,h)},at.prototype.L=function(n,o,l,h){return this.i.add(String(n),o,!0,l,h)};function en(n,o,l,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,A=0;A<o.length;++A){var C=o[A];if(C&&!C.da&&C.capture==l){var B=C.listener,et=C.ha||C.src;C.fa&&Qn(n.i,C),v=B.call(et,h)!==!1&&v}}return v&&!h.defaultPrevented}function li(n,o,l){if(typeof n=="function")l&&(n=S(n,l));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:c.setTimeout(n,o||0)}function ui(n){n.g=li(()=>{n.g=null,n.i&&(n.i=!1,ui(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class oa extends Vt{constructor(o,l){super(),this.m=o,this.l=l,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:ui(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ye(n){Vt.call(this),this.h=n,this.g={}}D(ye,Vt);var hi=[];function ci(n){mt(n.g,function(o,l){this.g.hasOwnProperty(l)&&Jn(o)},n),n.g={}}ye.prototype.N=function(){ye.aa.N.call(this),ci(this)},ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=c.JSON.stringify,aa=c.JSON.parse,la=class{stringify(n){return c.JSON.stringify(n,void 0)}parse(n){return c.JSON.parse(n,void 0)}};function nr(){}nr.prototype.h=null;function fi(n){return n.h||(n.h=n.i())}function di(){}var Ee={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rr(){ot.call(this,"d")}D(rr,ot);function ir(){ot.call(this,"c")}D(ir,ot);var Bt={},pi=null;function nn(){return pi=pi||new at}Bt.La="serverreachability";function gi(n){ot.call(this,Bt.La,n)}D(gi,ot);function ve(n){const o=nn();pt(o,new gi(o))}Bt.STAT_EVENT="statevent";function mi(n,o){ot.call(this,Bt.STAT_EVENT,n),this.stat=o}D(mi,ot);function gt(n){const o=nn();pt(o,new mi(o,n))}Bt.Ma="timingevent";function _i(n,o){ot.call(this,Bt.Ma,n),this.size=o}D(_i,ot);function Te(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){n()},o)}function Ie(){this.g=!0}Ie.prototype.xa=function(){this.g=!1};function ua(n,o,l,h,v,A){n.info(function(){if(n.g)if(A)for(var C="",B=A.split("&"),et=0;et<B.length;et++){var U=B[et].split("=");if(1<U.length){var lt=U[0];U=U[1];var ut=lt.split("_");C=2<=ut.length&&ut[1]=="type"?C+(lt+"="+U+"&"):C+(lt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+o+`
`+l+`
`+C})}function ha(n,o,l,h,v,A,C){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+o+`
`+l+`
`+A+" "+C})}function Zt(n,o,l,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+fa(n,l)+(h?" "+h:"")})}function ca(n,o){n.info(function(){return"TIMEOUT: "+o})}Ie.prototype.info=function(){};function fa(n,o){if(!n.g)return o;if(!o)return null;try{var l=JSON.parse(o);if(l){for(n=0;n<l.length;n++)if(Array.isArray(l[n])){var h=l[n];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return er(l)}catch{return o}}var rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sr;function sn(){}D(sn,nr),sn.prototype.g=function(){return new XMLHttpRequest},sn.prototype.i=function(){return{}},sr=new sn;function Dt(n,o,l,h){this.j=n,this.i=o,this.l=l,this.R=h||1,this.U=new ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ei}function Ei(){this.i=null,this.g="",this.h=!1}var vi={},or={};function ar(n,o,l){n.L=1,n.v=un(Rt(o)),n.m=l,n.P=!0,Ti(n,null)}function Ti(n,o){n.F=Date.now(),on(n),n.A=Rt(n.v);var l=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),Mi(l.i,"t",h),n.C=0,l=n.j.J,n.h=new Ei,n.g=Zi(n.j,l?o:null,!n.m),0<n.O&&(n.M=new oa(S(n.Y,n,n.g),n.O)),o=n.U,l=n.g,h=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(hi[0]=v.toString()),v=hi);for(var A=0;A<v.length;A++){var C=ii(l,v[A],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),ve(),ua(n.i,n.u,n.A,n.l,n.R,n.m)}Dt.prototype.ca=function(n){n=n.target;const o=this.M;o&&Pt(n)==3?o.j():this.Y(n)},Dt.prototype.Y=function(n){try{if(n==this.g)t:{const ut=Pt(this.g);var o=this.g.Ba();const ne=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||$i(this.g)))){this.J||ut!=4||o==7||(o==8||0>=ne?ve(3):ve(2)),lr(this);var l=this.g.Z();this.X=l;e:if(Ii(this)){var h=$i(this.g);n="";var v=h.length,A=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Ae(this);var C="";break e}this.h.i=new c.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(A&&o==v-1)});h.length=0,this.h.g+=n,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,ha(this.i,this.u,this.A,this.l,this.R,ut,l),this.o){if(this.T&&!this.K){e:{if(this.g){var B,et=this.g;if((B=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(B)){var U=B;break e}}U=null}if(l=U)Zt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ur(this,l);else{this.o=!1,this.s=3,gt(12),jt(this),Ae(this);break t}}if(this.P){l=!0;let Et;for(;!this.J&&this.C<C.length;)if(Et=da(this,C),Et==or){ut==4&&(this.s=4,gt(14),l=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==vi){this.s=4,gt(15),Zt(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Zt(this.i,this.l,Et,null),ur(this,Et);if(Ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||C.length!=0||this.h.h||(this.s=1,gt(16),l=!1),this.o=this.o&&l,!l)Zt(this.i,this.l,C,"[Invalid Chunked Response]"),jt(this),Ae(this);else if(0<C.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),gr(lt),lt.M=!0,gt(11))}}else Zt(this.i,this.l,C,null),ur(this,C);ut==4&&jt(this),this.o&&!this.J&&(ut==4?Wi(this.j,this):(this.o=!1,on(this)))}else Va(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),jt(this),Ae(this)}}}catch{}finally{}};function Ii(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function da(n,o){var l=n.C,h=o.indexOf(`
`,l);return h==-1?or:(l=Number(o.substring(l,h)),isNaN(l)?vi:(h+=1,h+l>o.length?or:(o=o.slice(h,h+l),n.C=h+l,o)))}Dt.prototype.cancel=function(){this.J=!0,jt(this)};function on(n){n.S=Date.now()+n.I,Ai(n,n.I)}function Ai(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Te(S(n.ba,n),o)}function lr(n){n.B&&(c.clearTimeout(n.B),n.B=null)}Dt.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(ca(this.i,this.A),this.L!=2&&(ve(),gt(17)),jt(this),this.s=2,Ae(this)):Ai(this,this.S-n)};function Ae(n){n.j.G==0||n.J||Wi(n.j,n)}function jt(n){lr(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,ci(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function ur(n,o){try{var l=n.j;if(l.G!=0&&(l.g==n||hr(l.h,n))){if(!n.K&&hr(l.h,n)&&l.G==3){try{var h=l.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<n.F)pn(l),fn(l);else break t;pr(l),gt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Te(S(l.Za,l),6e3));if(1>=Pi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else qt(l,11)}else if((n.K||l.g==n)&&pn(l),!z(o))for(v=l.Da.g.parse(o),o=0;o<v.length;o++){let U=v[o];if(l.T=U[0],U=U[1],l.G==2)if(U[0]=="c"){l.K=U[1],l.ia=U[2];const lt=U[3];lt!=null&&(l.la=lt,l.j.info("VER="+l.la));const ut=U[4];ut!=null&&(l.Aa=ut,l.j.info("SVER="+l.Aa));const ne=U[5];ne!=null&&typeof ne=="number"&&0<ne&&(h=1.5*ne,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Et=n.g;if(Et){const mn=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mn){var A=h.h;A.g||mn.indexOf("spdy")==-1&&mn.indexOf("quic")==-1&&mn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(cr(A,A.h),A.h=null))}if(h.D){const mr=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;mr&&(h.ya=mr,$(h.I,h.D,mr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-n.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=n;if(h.qa=Ji(h,h.J?h.ia:null,h.W),C.K){Si(h.h,C);var B=C,et=h.L;et&&(B.I=et),B.B&&(lr(B),on(B)),h.g=C}else Ki(h);0<l.i.length&&dn(l)}else U[0]!="stop"&&U[0]!="close"||qt(l,7);else l.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?qt(l,7):dr(l):U[0]!="noop"&&l.l&&l.l.ta(U),l.v=0)}}ve(4)}catch{}}var pa=class{constructor(n,o){this.g=n,this.map=o}};function wi(n){this.l=n||10,c.PerformanceNavigationTiming?(n=c.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ri(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Pi(n){return n.h?1:n.g?n.g.size:0}function hr(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function cr(n,o){n.g?n.g.add(o):n.h=o}function Si(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}wi.prototype.cancel=function(){if(this.i=Ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ci(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const l of n.g.values())o=o.concat(l.D);return o}return M(n.i)}function ga(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(f(n)){for(var o=[],l=n.length,h=0;h<l;h++)o.push(n[h]);return o}o=[],l=0;for(h in n)o[l++]=n[h];return o}function ma(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(f(n)||typeof n=="string"){var o=[];n=n.length;for(var l=0;l<n;l++)o.push(l);return o}o=[],l=0;for(const h in n)o[l++]=h;return o}}}function bi(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(f(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var l=ma(n),h=ga(n),v=h.length,A=0;A<v;A++)o.call(void 0,h[A],l&&l[A],n)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _a(n,o){if(n){n=n.split("&");for(var l=0;l<n.length;l++){var h=n[l].indexOf("="),v=null;if(0<=h){var A=n[l].substring(0,h);v=n[l].substring(h+1)}else A=n[l];o(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function $t(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof $t){this.h=n.h,an(this,n.j),this.o=n.o,this.g=n.g,ln(this,n.s),this.l=n.l;var o=n.i,l=new Pe;l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),Di(this,l),this.m=n.m}else n&&(o=String(n).match(Vi))?(this.h=!1,an(this,o[1]||"",!0),this.o=we(o[2]||""),this.g=we(o[3]||"",!0),ln(this,o[4]),this.l=we(o[5]||"",!0),Di(this,o[6]||"",!0),this.m=we(o[7]||"")):(this.h=!1,this.i=new Pe(null,this.h))}$t.prototype.toString=function(){var n=[],o=this.j;o&&n.push(Re(o,Ni,!0),":");var l=this.g;return(l||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Re(o,Ni,!0),"@"),n.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&n.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&n.push("/"),n.push(Re(l,l.charAt(0)=="/"?va:Ea,!0))),(l=this.i.toString())&&n.push("?",l),(l=this.m)&&n.push("#",Re(l,Ia)),n.join("")};function Rt(n){return new $t(n)}function an(n,o,l){n.j=l?we(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function ln(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Di(n,o,l){o instanceof Pe?(n.i=o,Aa(n.i,n.h)):(l||(o=Re(o,Ta)),n.i=new Pe(o,n.h))}function $(n,o,l){n.i.set(o,l)}function un(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function we(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Re(n,o,l){return typeof n=="string"?(n=encodeURI(n).replace(o,ya),l&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ya(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ni=/[#\/\?@]/g,Ea=/[#\?:]/g,va=/[#\?]/g,Ta=/[#\?@]/g,Ia=/#/g;function Pe(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Nt(n){n.g||(n.g=new Map,n.h=0,n.i&&_a(n.i,function(o,l){n.add(decodeURIComponent(o.replace(/\+/g," ")),l)}))}r=Pe.prototype,r.add=function(n,o){Nt(this),this.i=null,n=te(this,n);var l=this.g.get(n);return l||this.g.set(n,l=[]),l.push(o),this.h+=1,this};function ki(n,o){Nt(n),o=te(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Oi(n,o){return Nt(n),o=te(n,o),n.g.has(o)}r.forEach=function(n,o){Nt(this),this.g.forEach(function(l,h){l.forEach(function(v){n.call(o,v,h,this)},this)},this)},r.na=function(){Nt(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),l=[];for(let h=0;h<o.length;h++){const v=n[h];for(let A=0;A<v.length;A++)l.push(o[h])}return l},r.V=function(n){Nt(this);let o=[];if(typeof n=="string")Oi(this,n)&&(o=o.concat(this.g.get(te(this,n))));else{n=Array.from(this.g.values());for(let l=0;l<n.length;l++)o=o.concat(n[l])}return o},r.set=function(n,o){return Nt(this),this.i=null,n=te(this,n),Oi(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},r.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function Mi(n,o,l){ki(n,o),0<l.length&&(n.i=null,n.g.set(te(n,o),M(l)),n.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var l=0;l<o.length;l++){var h=o[l];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=A;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),n.push(v)}}return this.i=n.join("&")};function te(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Aa(n,o){o&&!n.j&&(Nt(n),n.i=null,n.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(ki(this,h),Mi(this,v,l))},n)),n.j=o}function wa(n,o){const l=new Ie;if(c.Image){const h=new Image;h.onload=b(kt,l,"TestLoadImage: loaded",!0,o,h),h.onerror=b(kt,l,"TestLoadImage: error",!1,o,h),h.onabort=b(kt,l,"TestLoadImage: abort",!1,o,h),h.ontimeout=b(kt,l,"TestLoadImage: timeout",!1,o,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Ra(n,o){const l=new Ie,h=new AbortController,v=setTimeout(()=>{h.abort(),kt(l,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?kt(l,"TestPingServer: ok",!0,o):kt(l,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),kt(l,"TestPingServer: error",!1,o)})}function kt(n,o,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Pa(){this.g=new la}function Sa(n,o,l){const h=l||"";try{bi(n,function(v,A){let C=v;m(v)&&(C=er(v)),o.push(h+A+"="+encodeURIComponent(C))})}catch(v){throw o.push(h+"type="+encodeURIComponent("_badmap")),v}}function Se(n){this.l=n.Ub||null,this.j=n.eb||!1}D(Se,nr),Se.prototype.g=function(){return new hn(this.l,this.j)},Se.prototype.i=function(n){return function(){return n}}({});function hn(n,o){at.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(hn,at),r=hn.prototype,r.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,be(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||c).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ce(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xi(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function xi(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Ce(this):be(this),this.readyState==3&&xi(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,Ce(this))},r.Qa=function(n){this.g&&(this.response=n,Ce(this))},r.ga=function(){this.g&&Ce(this)};function Ce(n){n.readyState=4,n.l=null,n.j=null,n.v=null,be(n)}r.setRequestHeader=function(n,o){this.u.append(n,o)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var l=o.next();!l.done;)l=l.value,n.push(l[0]+": "+l[1]),l=o.next();return n.join(`\r
`)};function be(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Fi(n){let o="";return mt(n,function(l,h){o+=h,o+=":",o+=l,o+=`\r
`}),o}function fr(n,o,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Fi(l),typeof n=="string"?l!=null&&encodeURIComponent(String(l)):$(n,o,l))}function K(n){at.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(K,at);var Ca=/^https?$/i,ba=["POST","PUT"];r=K.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,o,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sr.g(),this.v=this.o?fi(this.o):fi(sr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(A){Li(this,A);return}if(n=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&n instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ba,o,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ji(this),this.u=!0,this.g.send(n),this.u=!1}catch(A){Li(this,A)}};function Li(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Ui(n),cn(n)}function Ui(n){n.A||(n.A=!0,pt(n,"complete"),pt(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,pt(this,"complete"),pt(this,"abort"),cn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),K.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Bi(this):this.bb())},r.bb=function(){Bi(this)};function Bi(n){if(n.h&&typeof u<"u"&&(!n.v[1]||Pt(n)!=4||n.Z()!=2)){if(n.u&&Pt(n)==4)li(n.Ea,0,n);else if(pt(n,"readystatechange"),Pt(n)==4){n.h=!1;try{const C=n.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var l;if(!(l=o)){var h;if(h=C===0){var v=String(n.D).match(Vi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Ca.test(v?v.toLowerCase():"")}l=h}if(l)pt(n,"complete"),pt(n,"success");else{n.m=6;try{var A=2<Pt(n)?n.g.statusText:""}catch{A=""}n.l=A+" ["+n.Z()+"]",Ui(n)}}finally{cn(n)}}}}function cn(n,o){if(n.g){ji(n);const l=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||pt(n,"ready");try{l.onreadystatechange=h}catch{}}}function ji(n){n.I&&(c.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function Pt(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),aa(o)}};function $i(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Va(n){const o={};n=(n.g&&2<=Pt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(z(n[h]))continue;var l=y(n[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=o[v]||[];o[v]=A,A.push(l)}E(o,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ve(n,o,l){return l&&l.internalChannelParams&&l.internalChannelParams[n]||o}function qi(n){this.Aa=0,this.i=[],this.j=new Ie,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ve("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ve("baseRetryDelayMs",5e3,n),this.cb=Ve("retryDelaySeedMs",1e4,n),this.Wa=Ve("forwardChannelMaxRetries",2,n),this.wa=Ve("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(n&&n.concurrentRequestLimit),this.Da=new Pa,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=qi.prototype,r.la=8,r.G=1,r.connect=function(n,o,l,h){gt(0),this.W=n,this.H=o||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Ji(this,null,this.W),dn(this)};function dr(n){if(zi(n),n.G==3){var o=n.U++,l=Rt(n.I);if($(l,"SID",n.K),$(l,"RID",o),$(l,"TYPE","terminate"),De(n,l),o=new Dt(n,n.j,o),o.L=2,o.v=un(Rt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(o.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=o.v,l=!0),l||(o.g=Zi(o.j,null),o.g.ea(o.v)),o.F=Date.now(),on(o)}Yi(n)}function fn(n){n.g&&(gr(n),n.g.cancel(),n.g=null)}function zi(n){fn(n),n.u&&(c.clearTimeout(n.u),n.u=null),pn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&c.clearTimeout(n.s),n.s=null)}function dn(n){if(!Ri(n.h)&&!n.s){n.s=!0;var o=n.Ga;ge||ri(),me||(ge(),me=!0),Kn.add(o,n),n.B=0}}function Da(n,o){return Pi(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=Te(S(n.Ga,n,o),Xi(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new Dt(this,this.j,n);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var o=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=l;break t}if(o===4096||l===this.i.length-1){o=l+1;break t}}o=1e3}else o=1e3;o=Gi(this,v,o),l=Rt(this.I),$(l,"RID",n),$(l,"CVER",22),this.D&&$(l,"X-HTTP-Session-Id",this.D),De(this,l),A&&(this.O?o="headers="+encodeURIComponent(String(Fi(A)))+"&"+o:this.m&&fr(l,this.m,A)),cr(this.h,v),this.Ua&&$(l,"TYPE","init"),this.P?($(l,"$req",o),$(l,"SID","null"),v.T=!0,ar(v,l,null)):ar(v,l,o),this.G=2}}else this.G==3&&(n?Hi(this,n):this.i.length==0||Ri(this.h)||Hi(this))};function Hi(n,o){var l;o?l=o.l:l=n.U++;const h=Rt(n.I);$(h,"SID",n.K),$(h,"RID",l),$(h,"AID",n.T),De(n,h),n.m&&n.o&&fr(h,n.m,n.o),l=new Dt(n,n.j,l,n.B+1),n.m===null&&(l.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Gi(n,l,1e3),l.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),cr(n.h,l),ar(l,h,o)}function De(n,o){n.H&&mt(n.H,function(l,h){$(o,h,l)}),n.l&&bi({},function(l,h){$(o,h,l)})}function Gi(n,o,l){l=Math.min(n.i.length,l);var h=n.l?S(n.l.Na,n.l,n):null;t:{var v=n.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let B=!0;for(let et=0;et<l;et++){let U=v[et].g;const lt=v[et].map;if(U-=A,0>U)A=Math.max(0,v[et].g-100),B=!1;else try{Sa(lt,C,"req"+U+"_")}catch{h&&h(lt)}}if(B){h=C.join("&");break t}}}return n=n.i.splice(0,l),o.D=n,h}function Ki(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;ge||ri(),me||(ge(),me=!0),Kn.add(o,n),n.v=0}}function pr(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=Te(S(n.Fa,n),Xi(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,Qi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=Te(S(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),fn(this),Qi(this))};function gr(n){n.A!=null&&(c.clearTimeout(n.A),n.A=null)}function Qi(n){n.g=new Dt(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=Rt(n.qa);$(o,"RID","rpc"),$(o,"SID",n.K),$(o,"AID",n.T),$(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&$(o,"TO",n.ja),$(o,"TYPE","xmlhttp"),De(n,o),n.m&&n.o&&fr(o,n.m,n.o),n.L&&(n.g.I=n.L);var l=n.g;n=n.ia,l.L=1,l.v=un(Rt(o)),l.m=null,l.P=!0,Ti(l,n)}r.Za=function(){this.C!=null&&(this.C=null,fn(this),pr(this),gt(19))};function pn(n){n.C!=null&&(c.clearTimeout(n.C),n.C=null)}function Wi(n,o){var l=null;if(n.g==o){pn(n),gr(n),n.g=null;var h=2}else if(hr(n.h,o))l=o.D,Si(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){l=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;h=nn(),pt(h,new _i(h,l)),dn(n)}else Ki(n);else if(v=o.s,v==3||v==0&&0<o.X||!(h==1&&Da(n,o)||h==2&&pr(n)))switch(l&&0<l.length&&(o=n.h,o.i=o.i.concat(l)),v){case 1:qt(n,5);break;case 4:qt(n,10);break;case 3:qt(n,6);break;default:qt(n,2)}}}function Xi(n,o){let l=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(l*=2),l*o}function qt(n,o){if(n.j.info("Error code "+o),o==2){var l=S(n.fb,n),h=n.Xa;const v=!h;h=new $t(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||an(h,"https"),un(h),v?wa(h.toString(),l):Ra(h.toString(),l)}else gt(2);n.G=0,n.l&&n.l.sa(o),Yi(n),zi(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Yi(n){if(n.G=0,n.ka=[],n.l){const o=Ci(n.h);(o.length!=0||n.i.length!=0)&&(N(n.ka,o),N(n.ka,n.i),n.h.i.length=0,M(n.i),n.i.length=0),n.l.ra()}}function Ji(n,o,l){var h=l instanceof $t?Rt(l):new $t(l);if(h.g!="")o&&(h.g=o+"."+h.g),ln(h,h.s);else{var v=c.location;h=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var A=new $t(null);h&&an(A,h),o&&(A.g=o),v&&ln(A,v),l&&(A.l=l),h=A}return l=n.D,o=n.ya,l&&o&&$(h,l,o),$(h,"VER",n.la),De(n,h),h}function Zi(n,o,l){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new K(new Se({eb:l})):new K(n.pa),o.Ha(n.J),o}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ts(){}r=ts.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function gn(){}gn.prototype.g=function(n,o){return new yt(n,o)};function yt(n,o){at.call(this),this.g=new qi(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!z(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!z(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new ee(this)}D(yt,at),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){dr(this.g)},yt.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var l={};l.__data__=n,n=l}else this.u&&(l={},l.__data__=er(n),n=l);o.i.push(new pa(o.Ya++,n)),o.G==3&&dn(o)},yt.prototype.N=function(){this.g.l=null,delete this.j,dr(this.g),delete this.g,yt.aa.N.call(this)};function es(n){rr.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const l in o){n=l;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}D(es,rr);function ns(){ir.call(this),this.status=1}D(ns,ir);function ee(n){this.g=n}D(ee,ts),ee.prototype.ua=function(){pt(this.g,"a")},ee.prototype.ta=function(n){pt(this.g,new es(n))},ee.prototype.sa=function(n){pt(this.g,new ns)},ee.prototype.ra=function(){pt(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,to=function(){return new gn},Zs=function(){return nn()},Js=Bt,Vr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rn.NO_ERROR=0,rn.TIMEOUT=8,rn.HTTP_ERROR=6,In=rn,yi.COMPLETE="complete",Ys=yi,di.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",at.prototype.listen=at.prototype.K,Oe=di,Xs=Se,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,Ws=K}).apply(typeof _n<"u"?_n:typeof self<"u"?self:typeof window<"u"?window:{});const ps="@firebase/firestore";/**
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
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let fe="10.12.1";/**
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
 */const Wt=new $s("@firebase/firestore");function Ne(){return Wt.logLevel}function V(r,...t){if(Wt.logLevel<=L.DEBUG){const e=t.map(jr);Wt.debug(`Firestore (${fe}): ${r}`,...e)}}function Xt(r,...t){if(Wt.logLevel<=L.ERROR){const e=t.map(jr);Wt.error(`Firestore (${fe}): ${r}`,...e)}}function bn(r,...t){if(Wt.logLevel<=L.WARN){const e=t.map(jr);Wt.warn(`Firestore (${fe}): ${r}`,...e)}}function jr(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function x(r="Unexpected state"){const t=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: `+r;throw Xt(t),new Error(t)}function tt(r,t){r||x()}function q(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ce{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class eo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class hu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cu{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let a=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new eo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new ct(t)}}class fu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class du{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new fu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=a=>{a.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new pu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<r;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class no{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=mu(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<e&&(i+=t.charAt(s[a]%t.length))}return i}}function j(r,t){return r<t?-1:r>t?1:0}function oe(r,t,e){return r.length===t.length&&r.every((i,s)=>e(i,t[s]))}/**
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
 */class je{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof je?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const a=t.get(s),u=e.get(s);if(a<u)return-1;if(a>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends je{construct(t,e,i){return new X(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const _u=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends je{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return _u.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const a=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(a(),s++)}if(a(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function yu(r,t){const e=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(i===1e9?new Z(e+1,0):new Z(e,i));return new xt(s,O.empty(),t)}function Eu(r){return new xt(r.readTime,r.key,-1)}class xt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new xt(H.min(),O.empty(),-1)}static max(){return new xt(H.max(),O.empty(),-1)}}function vu(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
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
 */const Tu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Iu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ro(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Tu)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,a=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++a,u&&a===s&&e()},f=>i(f))}),u=!0,a===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,a)=>{i.push(e.call(this,s,a))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const a=t.length,u=new Array(a);let c=0;for(let f=0;f<a;f++){const m=f;e(t[m]).next(I=>{u[m]=I,++c,c===a&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):i()};a()})}}function Au(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Un(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class io{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}io.oe=-1;function $r(r){return r==null}function Vn(r){return r===0&&1/r==-1/0}function wu(r){return typeof r=="number"&&Number.isInteger(r)&&!Vn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function gs(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Qe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function so(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yn(this.root,t,this.comparator,!0)}}class yn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?i(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,a){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=a??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,a){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,i),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,a){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ms(this.data.getIterator())}getIteratorFrom(t){return new ms(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class ms{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new It([])}unionWith(t){let e=new dt(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return oe(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Ru extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Ru("Invalid base64 string: "+a):a}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Pu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(r){if(tt(!!r),typeof r=="string"){let t=0;const e=Pu.exec(r);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $e(r){return typeof r=="string"?bt.fromBase64String(r):bt.fromUint8Array(r)}/**
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
 */function qr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function oo(r){const t=r.mapValue.fields.__previous_value__;return qr(t)?oo(t):t}function Dn(r){const t=Yt(r.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class Su{constructor(t,e,i,s,a,u,c,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=m}}class Nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?qr(r)?4:Cu(r)?9007199254740991:10:x()}function At(r,t){if(r===t)return!0;const e=ae(r);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Dn(r).isEqual(Dn(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Yt(s.timestampValue),c=Yt(a.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,a){return $e(s.bytesValue).isEqual($e(a.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,a){return rt(s.geoPointValue.latitude)===rt(a.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(a.geoPointValue.longitude)}(r,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return rt(s.integerValue)===rt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=rt(s.doubleValue),c=rt(a.doubleValue);return u===c?Vn(u)===Vn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return oe(r.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,a){const u=s.mapValue.fields||{},c=a.mapValue.fields||{};if(gs(u)!==gs(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!At(u[f],c[f])))return!1;return!0}(r,t);default:return x()}}function qe(r,t){return(r.values||[]).find(e=>At(e,t))!==void 0}function le(r,t){if(r===t)return 0;const e=ae(r),i=ae(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(a,u){const c=rt(a.integerValue||a.doubleValue),f=rt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return _s(r.timestampValue,t.timestampValue);case 4:return _s(Dn(r),Dn(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(a,u){const c=$e(a),f=$e(u);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(a,u){const c=a.split("/"),f=u.split("/");for(let m=0;m<c.length&&m<f.length;m++){const I=j(c[m],f[m]);if(I!==0)return I}return j(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(a,u){const c=j(rt(a.latitude),rt(u.latitude));return c!==0?c:j(rt(a.longitude),rt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(a,u){const c=a.values||[],f=u.values||[];for(let m=0;m<c.length&&m<f.length;++m){const I=le(c[m],f[m]);if(I)return I}return j(c.length,f.length)}(r.arrayValue,t.arrayValue);case 10:return function(a,u){if(a===En.mapValue&&u===En.mapValue)return 0;if(a===En.mapValue)return 1;if(u===En.mapValue)return-1;const c=a.fields||{},f=Object.keys(c),m=u.fields||{},I=Object.keys(m);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=j(f[w],I[w]);if(S!==0)return S;const b=le(c[f[w]],m[I[w]]);if(b!==0)return b}return j(f.length,I.length)}(r.mapValue,t.mapValue);default:throw x()}}function _s(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=Yt(r),i=Yt(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function ue(r){return Dr(r)}function Dr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const i=Yt(e);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return $e(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let i="[",s=!0;for(const a of e.values||[])s?s=!1:i+=",",i+=Dr(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${Dr(e.fields[u])}`;return s+"}"}(r.mapValue):x()}function Nr(r){return!!r&&"integerValue"in r}function zr(r){return!!r&&"arrayValue"in r}function An(r){return!!r&&"mapValue"in r}function Me(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Qe(r.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Me(i)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Me(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Cu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!An(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Me(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Me(u):s.push(c.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,i,s)}delete(t){const e=this.field(t.popLast());An(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];An(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Qe(e,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new Tt(Me(this.value))}}function ao(r){const t=[];return Qe(r.fields,(e,i)=>{const s=new it([e]);if(An(i)){const a=ao(i.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new It(t)}/**
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
 */class vt{constructor(t,e,i,s,a,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=c}static newInvalidDocument(t){return new vt(t,0,H.min(),H.min(),H.min(),Tt.empty(),0)}static newFoundDocument(t,e,i,s){return new vt(t,1,e,H.min(),i,s,0)}static newNoDocument(t,e){return new vt(t,2,e,H.min(),H.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,H.min(),H.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kn{constructor(t,e){this.position=t,this.inclusive=e}}function ys(r,t,e){let i=0;for(let s=0;s<r.position.length;s++){const a=t[s],u=r.position[s];if(a.field.isKeyField()?i=O.comparator(O.fromName(u.referenceValue),e.key):i=le(u,e.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Es(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!At(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class On{constructor(t,e="asc"){this.field=t,this.dir=e}}function bu(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class lo{}class J extends lo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Du(t,e,i):e==="array-contains"?new Ou(t,i):e==="in"?new Mu(t,i):e==="not-in"?new xu(t,i):e==="array-contains-any"?new Fu(t,i):new J(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Nu(t,i):new ku(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(le(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends lo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ft(t,e)}matches(t){return uo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uo(r){return r.op==="and"}function ho(r){return Vu(r)&&uo(r)}function Vu(r){for(const t of r.filters)if(t instanceof Ft)return!1;return!0}function kr(r){if(r instanceof J)return r.field.canonicalString()+r.op.toString()+ue(r.value);if(ho(r))return r.filters.map(t=>kr(t)).join(",");{const t=r.filters.map(e=>kr(e)).join(",");return`${r.op}(${t})`}}function co(r,t){return r instanceof J?function(i,s){return s instanceof J&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(r,t):r instanceof Ft?function(i,s){return s instanceof Ft&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,c)=>a&&co(u,s.filters[c]),!0):!1}(r,t):void x()}function fo(r){return r instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${ue(e.value)}`}(r):r instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(fo).join(" ,")+"}"}(r):"Filter"}class Du extends J{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Nu extends J{constructor(t,e){super(t,"in",e),this.keys=po("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ku extends J{constructor(t,e){super(t,"not-in",e),this.keys=po("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function po(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class Ou extends J{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zr(e)&&qe(e.arrayValue,this.value)}}class Mu extends J{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qe(this.value.arrayValue,e)}}class xu extends J{constructor(t,e){super(t,"not-in",e)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!qe(this.value.arrayValue,e)}}class Fu extends J{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>qe(this.value.arrayValue,i))}}/**
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
 */class Lu{constructor(t,e=null,i=[],s=[],a=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=c,this.ue=null}}function vs(r,t=null,e=[],i=[],s=null,a=null,u=null){return new Lu(r,t,e,i,s,a,u)}function Hr(r){const t=q(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>kr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),$r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ue(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ue(i)).join(",")),t.ue=e}return t.ue}function Gr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!bu(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!co(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Es(r.startAt,t.startAt)&&Es(r.endAt,t.endAt)}/**
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
 */class Bn{constructor(t,e=null,i=[],s=[],a=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Uu(r,t,e,i,s,a,u,c){return new Bn(r,t,e,i,s,a,u,c)}function Bu(r){return new Bn(r)}function Ts(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ju(r){return r.collectionGroup!==null}function xe(r){const t=q(r);if(t.ce===null){t.ce=[];const e=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new dt(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.ce.push(new On(a,i))}),e.has(it.keyField().canonicalString())||t.ce.push(new On(it.keyField(),i))}return t.ce}function Kt(r){const t=q(r);return t.le||(t.le=$u(t,xe(r))),t.le}function $u(r,t){if(r.limitType==="F")return vs(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new On(s.field,a)});const e=r.endAt?new kn(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new kn(r.startAt.position,r.startAt.inclusive):null;return vs(r.path,r.collectionGroup,t,r.filters,r.limit,e,i)}}function Or(r,t,e){return new Bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function go(r,t){return Gr(Kt(r),Kt(t))&&r.limitType===t.limitType}function mo(r){return`${Hr(Kt(r))}|lt:${r.limitType}`}function ke(r){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>fo(s)).join(", ")}]`),$r(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ue(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ue(s)).join(",")),`Target(${i})`}(Kt(r))}; limitType=${r.limitType})`}function Kr(r,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):O.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,t)&&function(i,s){for(const a of xe(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(r,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const m=ys(u,c,f);return u.inclusive?m<=0:m<0}(i.startAt,xe(i),s)||i.endAt&&!function(u,c,f){const m=ys(u,c,f);return u.inclusive?m>=0:m>0}(i.endAt,xe(i),s))}(r,t)}function qu(r){return(t,e)=>{let i=!1;for(const s of xe(r)){const a=zu(s,t,e);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function zu(r,t,e){const i=r.field.isKeyField()?O.comparator(t.key,e.key):function(a,u,c){const f=u.data.field(a),m=c.data.field(a);return f!==null&&m!==null?le(f,m):x()}(r.field,t,e);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
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
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Qe(this.inner,(e,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return so(this.inner)}size(){return this.innerSize}}/**
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
 */const Hu=new _t(O.comparator);function Mn(){return Hu}const _o=new _t(O.comparator);function vn(...r){let t=_o;for(const e of r)t=t.insert(e.key,e);return t}function yo(r){let t=_o;return r.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Ht(){return Fe()}function Eo(){return Fe()}function Fe(){return new de(r=>r.toString(),(r,t)=>r.isEqual(t))}const Gu=new _t(O.comparator),Ku=new dt(O.comparator);function ft(...r){let t=Ku;for(const e of r)t=t.add(e);return t}const Qu=new dt(j);function Wu(){return Qu}/**
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
 */function vo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function To(r){return{integerValue:""+r}}function Xu(r,t){return wu(t)?To(t):vo(r,t)}/**
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
 */class jn{constructor(){this._=void 0}}function Yu(r,t,e){return r instanceof xn?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&qr(a)&&(a=oo(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(e,t):r instanceof ze?Ao(r,t):r instanceof He?wo(r,t):function(s,a){const u=Io(s,a),c=Is(u)+Is(s.Pe);return Nr(u)&&Nr(s.Pe)?To(c):vo(s.serializer,c)}(r,t)}function Ju(r,t,e){return r instanceof ze?Ao(r,t):r instanceof He?wo(r,t):e}function Io(r,t){return r instanceof Fn?function(i){return Nr(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class xn extends jn{}class ze extends jn{constructor(t){super(),this.elements=t}}function Ao(r,t){const e=Ro(t);for(const i of r.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class He extends jn{constructor(t){super(),this.elements=t}}function wo(r,t){let e=Ro(t);for(const i of r.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class Fn extends jn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Is(r){return rt(r.integerValue||r.doubleValue)}function Ro(r){return zr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Zu(r,t){return r.field.isEqual(t.field)&&function(i,s){return i instanceof ze&&s instanceof ze||i instanceof He&&s instanceof He?oe(i.elements,s.elements,At):i instanceof Fn&&s instanceof Fn?At(i.Pe,s.Pe):i instanceof xn&&s instanceof xn}(r.transform,t.transform)}class th{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class $n{}function Po(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Co(r.key,St.none()):new We(r.key,r.data,St.none());{const e=r.data,i=Tt.empty();let s=new dt(it.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new Jt(r.key,i,new It(s.toArray()),St.none())}}function eh(r,t,e){r instanceof We?function(s,a,u){const c=s.value.clone(),f=ws(s.fieldTransforms,a,u.transformResults);c.setAll(f),a.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Jt?function(s,a,u){if(!wn(s.precondition,a))return void a.convertToUnknownDocument(u.version);const c=ws(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(So(s)),f.setAll(c),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Le(r,t,e,i){return r instanceof We?function(a,u,c,f){if(!wn(a.precondition,u))return c;const m=a.value.clone(),I=Rs(a.fieldTransforms,f,u);return m.setAll(I),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(r,t,e,i):r instanceof Jt?function(a,u,c,f){if(!wn(a.precondition,u))return c;const m=Rs(a.fieldTransforms,f,u),I=u.data;return I.setAll(So(a)),I.setAll(m),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(r,t,e,i):function(a,u,c){return wn(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function nh(r,t){let e=null;for(const i of r.fieldTransforms){const s=t.data.field(i.field),a=Io(i.transform,s||null);a!=null&&(e===null&&(e=Tt.empty()),e.set(i.field,a))}return e||null}function As(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&oe(i,s,(a,u)=>Zu(a,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class We extends $n{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jt extends $n{constructor(t,e,i,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function So(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=r.data.field(e);t.set(e,i)}}),t}function ws(r,t,e){const i=new Map;tt(r.length===e.length);for(let s=0;s<e.length;s++){const a=r[s],u=a.transform,c=t.data.field(a.field);i.set(a.field,Ju(u,c,e[s]))}return i}function Rs(r,t,e){const i=new Map;for(const s of r){const a=s.transform,u=e.data.field(s.field);i.set(s.field,Yu(a,u,t))}return i}class Co extends $n{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rh extends $n{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ih{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&eh(a,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Le(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Le(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Eo();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let c=this.applyToLocalView(u,a.mutatedFields);c=e.has(s.key)?null:c;const f=Po(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&oe(this.mutations,t.mutations,(e,i)=>As(e,i))&&oe(this.baseMutations,t.baseMutations,(e,i)=>As(e,i))}}class Qr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){tt(t.mutations.length===i.length);let s=function(){return Gu}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new Qr(t,e,i,s)}}/**
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
 */class sh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var W,F;function oh(r){switch(r){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function ah(r){if(r===void 0)return Xt("GRPC error has no .code"),P.UNKNOWN;switch(r){case W.OK:return P.OK;case W.CANCELLED:return P.CANCELLED;case W.UNKNOWN:return P.UNKNOWN;case W.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case W.INTERNAL:return P.INTERNAL;case W.UNAVAILABLE:return P.UNAVAILABLE;case W.UNAUTHENTICATED:return P.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case W.NOT_FOUND:return P.NOT_FOUND;case W.ALREADY_EXISTS:return P.ALREADY_EXISTS;case W.PERMISSION_DENIED:return P.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case W.ABORTED:return P.ABORTED;case W.OUT_OF_RANGE:return P.OUT_OF_RANGE;case W.UNIMPLEMENTED:return P.UNIMPLEMENTED;case W.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(F=W||(W={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Qs([4294967295,4294967295],0);class lh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function hh(r,t){return Mr(r,t.toTimestamp())}function se(r){return tt(!!r),H.fromTimestamp(function(e){const i=Yt(e);return new Z(i.seconds,i.nanos)}(r))}function bo(r,t){return xr(r,t).canonicalString()}function xr(r,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ch(r){const t=X.fromString(r);return tt(Eh(t)),t}function Fr(r,t){return bo(r.databaseId,t.path)}function fh(r){const t=ch(r);return t.length===4?X.emptyPath():ph(t)}function dh(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ph(r){return tt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ps(r,t,e){return{name:Fr(r,t),fields:e.value.mapValue.fields}}function gh(r,t){let e;if(t instanceof We)e={update:Ps(r,t.key,t.value)};else if(t instanceof Co)e={delete:Fr(r,t.key)};else if(t instanceof Jt)e={update:Ps(r,t.key,t.data),updateMask:yh(t.fieldMask)};else{if(!(t instanceof rh))return x();e={verify:Fr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(a,u){const c=u.transform;if(c instanceof xn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ze)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof He)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:hh(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:x()}(r,t.precondition)),e}function mh(r,t){return r&&r.length>0?(tt(t!==void 0),r.map(e=>function(s,a){let u=s.updateTime?se(s.updateTime):se(a);return u.isEqual(H.min())&&(u=se(a)),new th(u,s.transformResults||[])}(e,t))):[]}function _h(r){let t=fh(r.parent);const e=r.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){tt(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let a=[];e.where&&(a=function(w){const S=Vo(w);return S instanceof Ft&&ho(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(S=>function(D){return new On(re(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,$r(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,b=w.values||[];return new kn(b,S)}(e.startAt));let m=null;return e.endAt&&(m=function(w){const S=!w.before,b=w.values||[];return new kn(b,S)}(e.endAt)),Uu(t,s,u,a,c,"F",f,m)}function Vo(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=re(e.unaryFilter.field);return J.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=re(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=re(e.unaryFilter.field);return J.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=re(e.unaryFilter.field);return J.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(r):r.fieldFilter!==void 0?function(e){return J.create(re(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(i=>Vo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(r):x()}function re(r){return it.fromServerFormat(r.fieldPath)}function yh(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Eh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class vh{constructor(t){this.ct=t}}function Th(r){const t=_h({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Or(t,t.limit,"L"):t}/**
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
 */class Ih{constructor(){this._n=new Ah}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(xt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Ah{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new dt(X.comparator),a=!s.has(i);return this.index[e]=s.add(i),a}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new dt(X.comparator)).toArray()}}/**
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
 */class wh{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Rh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ph{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Le(i.mutation,s,It.empty(),Z.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(a=>{let u=vn();return a.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Ht();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let a=Mn();const u=Fe(),c=function(){return Fe()}();return e.forEach((f,m)=>{const I=i.get(m.key);s.has(m.key)&&(I===void 0||I.mutation instanceof Jt)?a=a.insert(m.key,m):I!==void 0?(u.set(m.key,I.mutation.getFieldMask()),Le(I.mutation,m,I.mutation.getFieldMask(),Z.now())):u.set(m.key,It.empty())}),this.recalculateAndSaveOverlays(t,a).next(f=>(f.forEach((m,I)=>u.set(m,I)),e.forEach((m,I)=>{var w;return c.set(m,new Rh(I,(w=u.get(m))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=Fe();let s=new _t((u,c)=>u-c),a=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const m=e.get(f);if(m===null)return;let I=i.get(f)||It.empty();I=c.applyToLocalView(m,I),i.set(f,I);const w=(s.get(c.batchId)||ft()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),m=f.key,I=f.value,w=Eo();I.forEach(S=>{if(!a.has(S)){const b=Po(e.get(S),i.get(S));b!==null&&w.set(S,b),a=a.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,m,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ju(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-a.size):R.resolve(Ht());let c=-1,f=a;return u.next(m=>R.forEach(m,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),a.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,m,a)).next(()=>this.computeViews(t,f,m,ft())).next(I=>({batchId:c,changes:yo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=vn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const a=e.collectionGroup;let u=vn();return this.indexManager.getCollectionParents(t,a).next(c=>R.forEach(c,f=>{const m=function(w,S){return new Bn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(a));return this.getDocumentsMatchingCollectionQuery(t,m,i,s).next(I=>{I.forEach((w,S)=>{u=u.insert(w,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,a,s))).next(u=>{a.forEach((f,m)=>{const I=m.getKey();u.get(I)===null&&(u=u.insert(I,vt.newInvalidDocument(I)))});let c=vn();return u.forEach((f,m)=>{const I=a.get(f);I!==void 0&&Le(I.mutation,m,It.empty(),Z.now()),Kr(e,m)&&(c=c.insert(f,m))}),c})}}/**
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
 */class Sh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:se(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Th(s.bundledQuery),readTime:se(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Ch{constructor(){this.overlays=new _t(O.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Ht();return R.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,a)=>{this.ht(t,e,a)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Ht(),a=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,m=f.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let a=new _t((m,I)=>m-I);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>i){let I=a.get(m.largestBatchId);I===null&&(I=Ht(),a=a.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const c=Ht(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,I)=>c.set(m,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new sh(e,i));let a=this.hr.get(e);a===void 0&&(a=ft(),this.hr.set(e,a)),this.hr.set(e,a.add(i.key))}}/**
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
 */class Wr{constructor(){this.Pr=new dt(Y.Ir),this.Tr=new dt(Y.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new Y(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new Y(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new O(new X([])),i=new Y(e,t),s=new Y(e,t+1),a=[];return this.Tr.forEachInRange([i,s],u=>{this.Ar(u),a.push(u.key)}),a}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new X([])),i=new Y(e,t),s=new Y(e,t+1);let a=ft();return this.Tr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Y(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Y{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||j(t.pr,e.pr)}static Er(t,e){return j(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
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
 */class bh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new dt(Y.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const a=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ih(a,e,i,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new Y(c.key,a)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),a=s<0?0:s;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Y(e,0),s=new Y(e,Number.POSITIVE_INFINITY),a=[];return this.wr.forEachInRange([i,s],u=>{const c=this.Sr(u.pr);a.push(c)}),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new dt(j);return e.forEach(s=>{const a=new Y(s,0),u=new Y(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([a,u],c=>{i=i.add(c.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let a=i;O.isDocumentKey(a)||(a=a.child(""));const u=new Y(new O(a),0);let c=new dt(j);return this.wr.forEachWhile(f=>{const m=f.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(c=c.add(f.pr)),!0)},u),R.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const a=new Y(s.key,e.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new Y(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Vh{constructor(t){this.vr=t,this.docs=function(){return new _t(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),a=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let i=Mn();return e.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():vt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let a=Mn();const u=e.path,c=new O(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:m,value:{document:I}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||vu(Eu(I),i)<=0||(s.has(I.key)||Kr(e,I))&&(a=a.insert(I.key,I.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,i,s){x()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Dh(this)}getSize(t){return R.resolve(this.size)}}class Dh extends wh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Nh{constructor(t){this.persistence=t,this.Mr=new de(e=>Hr(e),Gr),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wr,this.targetCount=0,this.Lr=he.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new he(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const a=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Mr.delete(u),a.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(a).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
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
 */class kh{constructor(t,e){this.Br={},this.overlays={},this.kr=new io(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Nh(this),this.indexManager=new Ih,this.remoteDocumentCache=function(s){return new Vh(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new vh(e),this.$r=new Sh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ch,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new bh(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){V("MemoryPersistence","Starting transaction:",t);const s=new Oh(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(a=>this.referenceDelegate.Wr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class Oh extends Iu{constructor(t){super(),this.currentSequenceNumber=t}}class Xr{constructor(t){this.persistence=t,this.zr=new Wr,this.jr=null}static Hr(t){return new Xr(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.Jr.add(a.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=O.fromPath(i);return this.Yr(t,s).next(a=>{a||e.removeEntry(s,H.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Yr{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ft(),s=ft();for(const a of e.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Yr(t,e.fromCache,i,s)}}/**
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
 */class Mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ga()?8:Au(za())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const a={result:null};return this.ji(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Hi(t,e,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Mh;return this.Ji(t,e,u).next(c=>{if(a.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>a.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(Ne()<=L.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Ne()<=L.DEBUG&&V("QueryEngine","Query:",ke(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Ne()<=L.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):R.resolve())}ji(t,e){if(Ts(e))return R.resolve(null);let i=Kt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Or(e,null,"F"),i=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const u=ft(...a);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const m=this.Zi(e,c);return this.Xi(e,m,u,f.readTime)?this.ji(t,Or(e,null,"F")):this.es(t,m,e,f)}))})))}Hi(t,e,i,s){return Ts(e)||s.isEqual(H.min())?R.resolve(null):this.zi.getDocuments(t,i).next(a=>{const u=this.Zi(e,a);return this.Xi(e,u,i,s)?R.resolve(null):(Ne()<=L.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ke(e)),this.es(t,u,e,yu(s,-1)).next(c=>c))})}Zi(t,e){let i=new dt(qu(t));return e.forEach((s,a)=>{Kr(t,a)&&(i=i.add(a))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ji(t,e,i){return Ne()<=L.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ke(e)),this.zi.getDocumentsMatchingQuery(t,e,xt.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class Fh{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new _t(j),this.rs=new de(a=>Hr(a),Gr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ph(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Lh(r,t,e,i){return new Fh(r,t,e,i)}async function Do(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],c=[];let f=ft();for(const m of s){u.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}for(const m of a){c.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(m=>({us:m,removedBatchIds:u,addedBatchIds:c}))})})}function Uh(r,t){const e=q(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=e.os.newChangeBuffer({trackRemovals:!0});return function(c,f,m,I){const w=m.batch,S=w.keys();let b=R.resolve();return S.forEach(D=>{b=b.next(()=>I.getEntry(f,D)).next(M=>{const N=m.docVersions.get(D);tt(N!==null),M.version.compareTo(N)<0&&(w.applyToRemoteDocument(M,m),M.isValidDocument()&&(M.setReadTime(m.commitVersion),I.addEntry(M)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,a).next(()=>a.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ft();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(f=f.add(c.batch.mutations[m].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Bh(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function jh(r,t){const e=q(r);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ss{constructor(){this.activeTargetIds=Wu()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $h{constructor(){this.no=new Ss,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ss,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class qh{io(t){}shutdown(){}}/**
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
 */class Cs{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tn=null;function Tr(){return Tn===null?Tn=function(){return 268435456+Math.round(2147483648*Math.random())}():Tn++,"0x"+Tn.toString(16)}/**
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
 */const zh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Hh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const ht="WebChannelConnection";class Gh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${a}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Do(){return!1}Co(e,i,s,a,u){const c=Tr(),f=this.vo(e,i.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,a,u),this.Mo(e,f,m,s).then(I=>(V("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw bn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}xo(e,i,s,a,u,c){return this.Co(e,i,s,a,u)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>e[u]=a),s&&s.headers.forEach((a,u)=>e[u]=a)}vo(e,i){const s=zh[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const a=Tr();return new Promise((u,c)=>{const f=new Ws;f.setWithCredentials(!0),f.listenOnce(Ys.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case In.NO_ERROR:const I=f.getResponseJson();V(ht,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),u(I);break;case In.TIMEOUT:V(ht,`RPC '${t}' ${a} timed out`),c(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case In.HTTP_ERROR:const w=f.getStatus();if(V(ht,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S==null?void 0:S.error;if(b&&b.status&&b.message){const D=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(b.status);c(new k(D,b.message))}else c(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new k(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{V(ht,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);V(ht,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,i,15)})}Oo(t,e,i){const s=Tr(),a=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=to(),c=Zs(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.xmlHttpFactory=new Xs({})),this.Fo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=a.join("");V(ht,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let S=!1,b=!1;const D=new Hh({lo:N=>{b?V(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(V(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),V(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},ho:()=>w.close()}),M=(N,G,z)=>{N.listen(G,Q=>{try{z(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return M(w,Oe.EventType.OPEN,()=>{b||(V(ht,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),M(w,Oe.EventType.CLOSE,()=>{b||(b=!0,V(ht,`RPC '${t}' stream ${s} transport closed`),D.po())}),M(w,Oe.EventType.ERROR,N=>{b||(b=!0,bn(ht,`RPC '${t}' stream ${s} transport errored:`,N),D.po(new k(P.UNAVAILABLE,"The operation could not be completed")))}),M(w,Oe.EventType.MESSAGE,N=>{var G;if(!b){const z=N.data[0];tt(!!z);const Q=z,st=Q.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(st){V(ht,`RPC '${t}' stream ${s} received error:`,st);const Ut=st.status;let mt=function(g){const _=W[g];if(_!==void 0)return ah(_)}(Ut),E=st.message;mt===void 0&&(mt=P.INTERNAL,E="Unknown error status: "+Ut+" with message "+st.message),b=!0,D.po(new k(mt,E)),w.close()}else V(ht,`RPC '${t}' stream ${s} received:`,z),D.yo(z)}}),M(c,Js.STAT_EVENT,N=>{N.stat===Vr.PROXY?V(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Vr.NOPROXY&&V(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function Ir(){return typeof document<"u"?document:null}/**
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
 */function qn(r){return new lh(r,!0)}/**
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
 */class No{constructor(t,e,i=1e3,s=1.5,a=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=a,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Kh{constructor(t,e,i,s,a,u,c,f){this.oi=t,this.Go=i,this.zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new No(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Xt(e.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qh extends Kh{constructor(t,e,i,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=a,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=mh(t.writeResults,t.commitTime),i=se(t.commitTime);return this.listener.A_(i,e)}return tt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=dh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>gh(this.serializer,i))};this.i_(e)}}/**
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
 */class Wh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,xr(e,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(P.UNKNOWN,a.toString())})}xo(t,e,i,s,a){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,xr(e,i),s,u,c,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Xh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xt(e),this.y_=!1):V("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Yh{constructor(t,e,i,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=a,this.O_.io(u=>{i.enqueueAndForget(async()=>{Ye(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=q(f);m.M_.add(4),await Xe(m),m.N_.set("Unknown"),m.M_.delete(4),await zn(m)}(this))})}),this.N_=new Xh(i,s)}}async function zn(r){if(Ye(r))for(const t of r.x_)await t(!0)}async function Xe(r){for(const t of r.x_)await t(!1)}function Ye(r){return q(r).M_.size===0}async function ko(r,t,e){if(!Un(t))throw t;r.M_.add(1),await Xe(r),r.N_.set("Offline"),e||(e=()=>Bh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await zn(r)})}function Oo(r,t){return t().catch(e=>ko(r,e,t))}async function Hn(r){const t=q(r),e=Lt(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Jh(t);)try{const s=await jh(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,Zh(t,s)}catch(s){await ko(t,s)}Mo(t)&&xo(t)}function Jh(r){return Ye(r)&&r.v_.length<10}function Zh(r,t){r.v_.push(t);const e=Lt(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function Mo(r){return Ye(r)&&!Lt(r).Zo()&&r.v_.length>0}function xo(r){Lt(r).start()}async function tc(r){Lt(r).V_()}async function ec(r){const t=Lt(r);for(const e of r.v_)t.d_(e.mutations)}async function nc(r,t,e){const i=r.v_.shift(),s=Qr.from(i,t,e);await Oo(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Hn(r)}async function rc(r,t){t&&Lt(r).E_&&await async function(i,s){if(function(u){return oh(u)&&u!==P.ABORTED}(s.code)){const a=i.v_.shift();Lt(i).t_(),await Oo(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Hn(i)}}(r,t),Mo(r)&&xo(r)}async function bs(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const i=Ye(e);e.M_.add(3),await Xe(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await zn(e)}async function ic(r,t){const e=q(r);t?(e.M_.delete(2),await zn(e)):t||(e.M_.add(2),await Xe(e),e.N_.set("Unknown"))}function Lt(r){return r.k_||(r.k_=function(e,i,s){const a=q(e);return a.f_(),new Qh(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:tc.bind(null,r),Ao:rc.bind(null,r),R_:ec.bind(null,r),A_:nc.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await Hn(r)):(await r.k_.stop(),r.v_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class Jr{constructor(t,e,i,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,a){const u=Date.now()+i,c=new Jr(t,e,u,s,a);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(r,t){if(Xt("AsyncQueue",`${t}: ${r}`),Un(r))return new k(P.UNAVAILABLE,`${t}: ${r}`);throw r}class sc{constructor(){this.queries=new de(t=>mo(t),go),this.onlineState="Unknown",this.z_=new Set}}function oc(r){r.z_.forEach(t=>{t.next()})}var Vs,Ds;(Ds=Vs||(Vs={})).J_="default",Ds.Cache="cache";class ac{constructor(t,e,i,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new de(c=>mo(c),go),this.Da=new Map,this.Ca=new Set,this.va=new _t(O.comparator),this.Fa=new Map,this.Ma=new Wr,this.xa={},this.Oa=new Map,this.Na=he.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function lc(r,t,e){const i=fc(r);try{const s=await function(u,c){const f=q(u),m=Z.now(),I=c.reduce((b,D)=>b.add(D.key),ft());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=Mn(),M=ft();return f.os.getEntries(b,I).next(N=>{D=N,D.forEach((G,z)=>{z.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,D)).next(N=>{w=N;const G=[];for(const z of c){const Q=nh(z,w.get(z.key).overlayedDocument);Q!=null&&G.push(new Jt(z.key,Q,ao(Q.value.mapValue),St.exists(!0)))}return f.mutationQueue.addMutationBatch(b,m,G,c)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,M);return f.documentOverlayCache.saveOverlays(b,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:yo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let m=u.xa[u.currentUser.toKey()];m||(m=new _t(j)),m=m.insert(c,f),u.xa[u.currentUser.toKey()]=m}(i,s.batchId,e),await Gn(i,s.changes),await Hn(i.remoteStore)}catch(s){const a=Fo(s,"Failed to persist write");e.reject(a)}}function Ns(r,t,e){const i=q(r);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((a,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=q(u);f.onlineState=c;let m=!1;f.queries.forEach((I,w)=>{for(const S of w.U_)S.j_(c)&&(m=!0)}),m&&oc(f)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function uc(r,t){const e=q(r),i=t.batch.batchId;try{const s=await Uh(e.localStore,t);Uo(e,i,null),Lo(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Gn(e,s)}catch(s){await ro(s)}}async function hc(r,t,e){const i=q(r);try{const s=await function(u,c){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let I;return f.mutationQueue.lookupMutationBatch(m,c).next(w=>(tt(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(m,w))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I)).next(()=>f.localDocuments.getDocuments(m,I))})}(i.localStore,t);Uo(i,t,e),Lo(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Gn(i,s)}catch(s){await ro(s)}}function Lo(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function Uo(r,t,e){const i=q(r);let s=i.xa[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function Gn(r,t,e){const i=q(r),s=[],a=[],u=[];i.ba.isEmpty()||(i.ba.forEach((c,f)=>{u.push(i.Ba(f,t,e).then(m=>{if((m||e)&&i.isPrimaryClient){const I=m&&!m.fromCache;i.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(m){s.push(m);const I=Yr.Ki(f.targetId,m);a.push(I)}}))}),await Promise.all(u),i.Sa.h_(s),await async function(f,m){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(m,S=>R.forEach(S.qi,b=>I.persistence.referenceDelegate.addReference(w,S.targetId,b)).next(()=>R.forEach(S.Qi,b=>I.persistence.referenceDelegate.removeReference(w,S.targetId,b)))))}catch(w){if(!Un(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of m){const S=w.targetId;if(!w.fromCache){const b=I.ns.get(S),D=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(D);I.ns=I.ns.insert(S,M)}}}(i.localStore,a))}async function cc(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const i=await Do(e.localStore,t);e.currentUser=t,function(a,u){a.Oa.forEach(c=>{c.forEach(f=>{f.reject(new k(P.CANCELLED,u))})}),a.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Gn(e,i.us)}}function fc(r){const t=q(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hc.bind(null,t),t}class ks{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Lh(this.persistence,new xh,t.initialUser,this.serializer)}createPersistence(t){return new kh(Xr.Hr,this.serializer)}createSharedClientState(t){return new $h}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ns(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cc.bind(null,this.syncEngine),await ic(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sc}()}createDatastore(t){const e=qn(t.databaseInfo.databaseId),i=function(a){return new Gh(a)}(t.databaseInfo);return function(a,u,c,f){return new Wh(a,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,a,u,c){return new Yh(i,s,a,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ns(this.syncEngine,e,0),function(){return Cs.D()?new Cs:new qh}())}createSyncEngine(t,e){return function(s,a,u,c,f,m,I){const w=new ac(s,a,u,c,f,m);return I&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=q(i);V("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Xe(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class pc{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=no.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Fo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ar(r,t){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let i=e.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Do(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Os(r,t){r.asyncQueue.verifyOperationInProgress();const e=await mc(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(i=>bs(t.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>bs(t.remoteStore,s)),r._onlineComponents=t}function gc(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function mc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ar(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!gc(e))throw e;bn("Error using user provided cache. Falling back to memory cache: "+e),await Ar(r,new ks)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Ar(r,new ks);return r._offlineComponents}async function _c(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Os(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Os(r,new dc))),r._onlineComponents}function yc(r){return _c(r).then(t=>t.syncEngine)}/**
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
 */function Bo(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Ms=new Map;/**
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
 */function Ec(r,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function vc(r,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function xs(r){if(!O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Zr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":x()}function Lr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zr(r);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class Fs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bo((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ti{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new uu;switch(i.type){case"firstParty":return new du(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Ms.get(e);i&&(V("ComponentProvider","Removing Datastore"),Ms.delete(e),i.terminate())}(this),Promise.resolve()}}function Tc(r,t,e,i={}){var s;const a=(r=Lr(r,ti))._getSettings(),u=`${t}:${e}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ct.MOCK_USER;else{c=qa(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(m)}r._authCredentials=new hu(new eo(c,f))}}/**
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
 */class ei{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ei(this.firestore,t,this._query)}}class Ct{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class Ge extends ei{constructor(t,e,i){super(t,e,Bu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new O(t))}withConverter(t){return new Ge(this.firestore,t,this._path)}}function Uc(r,t,...e){if(r=Pn(r),arguments.length===1&&(t=no.newId()),Ec("doc","path",t),r instanceof ti){const i=X.fromString(t,...e);return xs(i),new Ct(r,null,new O(i))}{if(!(r instanceof Ct||r instanceof Ge))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(X.fromString(t,...e));return xs(i),new Ct(r.firestore,r instanceof Ge?r.converter:null,new O(i))}}/**
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
 */class Ic{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new No(this,"async_queue_retry"),this.hu=()=>{const e=Ir();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Ir();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Ir();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Gt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Un(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw Xt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Jr.createAndSchedule(this,t,e,i,a=>this.Eu(a));return this._u.push(s),s}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class jo extends ti{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Ic}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$o(this),this._firestoreClient.terminate()}}function Bc(r,t){const e=typeof r=="object"?r:Yl(),i=typeof r=="string"?r:"(default)",s=Kl(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=ja("firestore");a&&Tc(s,...a)}return s}function Ac(r){return r._firestoreClient||$o(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function $o(r){var t,e,i;const s=r._freezeSettings(),a=function(c,f,m,I){return new Su(c,f,m,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Bo(I.experimentalLongPollingOptions),I.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new pc(r._authCredentials,r._appCheckCredentials,r._queue,a),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ke(bt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ke(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class qo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zo{constructor(t){this._methodName=t}}/**
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
 */class Ho{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */const wc=/^__.*__$/;class Rc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new We(t,this.data,e,this.fieldTransforms)}}function Go(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ni{constructor(t,e,i,s,a,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.mu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ln(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Go(this.fu)&&wc.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Pc{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||qn(t)}Fu(t,e,i,s=!1){return new ni({fu:t,methodName:e,vu:i,path:it.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sc(r){const t=r._freezeSettings(),e=qn(r._databaseId);return new Pc(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Cc(r,t,e,i,s,a={}){const u=r.Fu(a.merge||a.mergeFields?2:0,t,e,s);Xo("Data must be an object, but it was:",u,i);const c=Qo(i,u);let f,m;if(a.merge)f=new It(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const I=[];for(const w of a.mergeFields){const S=bc(t,w,e);if(!u.contains(S))throw new k(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Nc(I,S)||I.push(S)}f=new It(I),m=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=u.fieldTransforms;return new Rc(new Tt(c),f,m)}function Ko(r,t){if(Wo(r=Pn(r)))return Xo("Unsupported field value:",t,r),Qo(r,t);if(r instanceof zo)return function(i,s){if(!Go(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const c of i){let f=Ko(c,s.bu(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(r,t)}return function(i,s){if((i=Pn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Xu(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Z.fromDate(i);return{timestampValue:Mr(s.serializer,a)}}if(i instanceof Z){const a=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Mr(s.serializer,a)}}if(i instanceof Ho)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ke)return{bytesValue:uh(s.serializer,i._byteString)};if(i instanceof Ct){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:bo(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Zr(i)}`)}(r,t)}function Qo(r,t){const e={};return so(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qe(r,(i,s)=>{const a=Ko(s,t.pu(i));a!=null&&(e[i]=a)}),{mapValue:{fields:e}}}function Wo(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof Ho||r instanceof Ke||r instanceof Ct||r instanceof zo)}function Xo(r,t,e){if(!Wo(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Zr(e);throw i==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+i)}}function bc(r,t,e){if((t=Pn(t))instanceof qo)return t._internalPath;if(typeof t=="string")return Dc(r,t);throw Ln("Field path arguments must be of type string or ",r,!1,void 0,e)}const Vc=new RegExp("[~\\*/\\[\\]]");function Dc(r,t,e){if(t.search(Vc)>=0)throw Ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new qo(...t.split("."))._internalPath}catch{throw Ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ln(r,t,e,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new k(P.INVALID_ARGUMENT,c+r+f)}function Nc(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */function kc(r,t,e){let i;return i=r?r.toFirestore(t):t,i}function jc(r,t,e){r=Lr(r,Ct);const i=Lr(r.firestore,jo),s=kc(r.converter,t);return Oc(i,[Cc(Sc(i),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,St.none())])}function Oc(r,t){return function(i,s){const a=new Gt;return i.asyncQueue.enqueueAndForget(async()=>lc(await yc(i),s,a)),a.promise}(Ac(r),t)}(function(t,e=!0){(function(s){fe=s})(Xl),Cn(new Ue("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),c=new jo(new cu(i.getProvider("auth-internal")),new gu(i.getProvider("app-check-internal")),function(m,I){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(m.options.projectId,I)}(u,s),u);return a=Object.assign({useFetchStreams:e},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),ie(ps,"4.6.3",t),ie(ps,"4.6.3","esm2017")})();const Mc={apiKey:"AIzaSyCwK2qzKdlGpVS7_QpvgCv9ShsFdSnU9lM",authDomain:"color-recognizer-ce9cd.firebaseapp.com",projectId:"color-recognizer-ce9cd",storageBucket:"color-recognizer-ce9cd.appspot.com",messagingSenderId:"903967750673",appId:"1:903967750673:web:d58150a97bf94142658fb0"},$c=Hs(Mc);export{$c as a,Uc as d,Bc as g,jc as s};
