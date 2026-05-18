import{_ as D,M as y,N as I,l as _,O as v,P as R,Q as L,R as U,S as x,U as E,V as F}from"./firebase-dF5LRoaP.js";/**
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
 */const $="type.googleapis.com/google.protobuf.Int64Value",M="type.googleapis.com/google.protobuf.UInt64Value";function O(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function k(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>k(t));if(typeof e=="function"||typeof e=="object")return O(e,t=>k(t));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case $:case M:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>m(t)):typeof e=="function"||typeof e=="object"?O(e,t=>m(t)):e}/**
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
 */const w="functions";/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends L{constructor(t,n,r){super(`${w}/${t}`,n||""),this.details=r,Object.setPrototypeOf(this,f.prototype)}}function G(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function T(e,t){let n=G(e),r=n,i;try{const o=t&&t.error;if(o){const a=o.status;if(typeof a=="string"){if(!N[a])return new f("internal","internal");n=N[a],r=a}const s=o.message;typeof s=="string"&&(r=s),i=o.details,i!==void 0&&(i=m(i))}}catch{}return n==="ok"?null:new f(n,r,i)}/**
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
 */class H{constructor(t,n,r,i){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,F(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||i?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(t);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const A="us-central1",J=/^data: (.*?)(?:\n|$)/;function j(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new f("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class q{constructor(t,n,r,i,o=A,a=(...s)=>fetch(...s)){this.app=t,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new H(t,n,r,i),this.cancelAllRequests=new Promise(s=>{this.deleteService=()=>Promise.resolve(s())});try{const s=new URL(o);this.customDomain=s.origin+(s.pathname==="/"?"":s.pathname),this.region=A}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function V(e,t,n){const r=v(t);e.emulatorOrigin=`http${r?"s":""}://${t}:${n}`,r&&R(e.emulatorOrigin+"/backends")}function B(e,t,n){const r=i=>Y(e,t,i,n||{});return r.stream=(i,o)=>W(e,t,i,o),r}function S(e){return e.emulatorOrigin&&v(e.emulatorOrigin)?"include":void 0}async function X(e,t,n,r,i){n["Content-Type"]="application/json";let o;try{o=await r(e,{method:"POST",body:JSON.stringify(t),headers:n,credentials:S(i)})}catch{return{status:0,json:null}}let a=null;try{a=await o.json()}catch{}return{status:o.status,json:a}}async function P(e,t){const n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function Y(e,t,n,r){const i=e._url(t);return K(e,i,n,r)}async function K(e,t,n,r){n=k(n);const i={data:n},o=await P(e,r),a=r.timeout||7e4,s=j(a),u=await Promise.race([X(t,i,o,e.fetchImpl,e),s.promise,e.cancelAllRequests]);if(s.cancel(),!u)throw new f("cancelled","Firebase Functions instance was deleted.");const d=T(u.status,u.json);if(d)throw d;if(!u.json)throw new f("internal","Response is not valid JSON object.");let c=u.json.data;if(typeof c>"u"&&(c=u.json.result),typeof c>"u")throw new f("internal","Response is missing data field.");return{data:m(c)}}function W(e,t,n,r){const i=e._url(t);return z(e,i,n,r||{})}async function z(e,t,n,r){n=k(n);const i={data:n},o=await P(e,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let a;try{a=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(i),headers:o,signal:r?.signal,credentials:S(e)})}catch(l){if(l instanceof Error&&l.name==="AbortError"){const g=new f("cancelled","Request was cancelled.");return{data:Promise.reject(g),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(g)}}}}}}const h=T(0,null);return{data:Promise.reject(h),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(h)}}}}}}let s,u;const d=new Promise((l,h)=>{s=l,u=h});r?.signal?.addEventListener("abort",()=>{const l=new f("cancelled","Request was cancelled.");u(l)});const c=a.body.getReader(),p=Q(c,s,u,r?.signal);return{stream:{[Symbol.asyncIterator](){const l=p.getReader();return{async next(){const{value:h,done:g}=await l.read();return{value:h,done:g}},async return(){return await l.cancel(),{done:!0,value:void 0}}}}},data:d}}function Q(e,t,n,r){const i=(a,s)=>{const u=a.match(J);if(!u)return;const d=u[1];try{const c=JSON.parse(d);if("result"in c){t(m(c.result));return}if("message"in c){s.enqueue(m(c.message));return}if("error"in c){const p=T(0,c);s.error(p),n(p);return}}catch(c){if(c instanceof f){s.error(c),n(c);return}}},o=new TextDecoder;return new ReadableStream({start(a){let s="";return u();async function u(){if(r?.aborted){const d=new f("cancelled","Request was cancelled");return a.error(d),n(d),Promise.resolve()}try{const{value:d,done:c}=await e.read();if(c){s.trim()&&i(s.trim(),a),a.close();return}if(r?.aborted){const l=new f("cancelled","Request was cancelled");a.error(l),n(l),await e.cancel();return}s+=o.decode(d,{stream:!0});const p=s.split(`
`);s=p.pop()||"";for(const l of p)l.trim()&&i(l.trim(),a);return u()}catch(d){const c=d instanceof f?d:T(0,null);a.error(c),n(c)}}},cancel(){return e.cancel()}})}const C="@firebase/functions",b="0.13.3";/**
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
 */const Z="auth-internal",ee="app-check-internal",te="messaging-internal";function ne(e){const t=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),o=n.getProvider(Z),a=n.getProvider(te),s=n.getProvider(ee);return new q(i,o,a,s,r)};U(new x(w,t,"PUBLIC").setMultipleInstances(!0)),E(C,b,e),E(C,b,"esm2020")}/**
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
 */function se(e=_(),t=A){const r=D(y(e),w).getImmediate({identifier:t}),i=I("functions");return i&&re(r,...i),r}function re(e,t,n){V(y(e),t,n)}function oe(e,t,n){return B(y(e),t,n)}ne();export{f as FunctionsError,re as connectFunctionsEmulator,se as getFunctions,oe as httpsCallable};
