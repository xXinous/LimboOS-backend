import{r as x,_ as q,C as $,i as B,E as we,j as Je,F as ye,k as V,L as Qe,l as Ie,m as Ae,n as ve,v as Te,p as be,t as Xe,u as re,x as Ce,c as T,h as A,y as Ze,z as et,A as tt,B as at,D as nt,G as st,H as rt,s as h,d,f as v,g as N,q as Ee,I as it,w as Z,o as ot,a as ct,J as ut,K as lt,M as dt,N as ft,O as pt,e as mt,P as Se,Q as ht,R as gt}from"./firebase-SV3h4e5g.js";const Re="@firebase/installations",ee="0.6.21";/**
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
 */const ke=1e4,De=`w:${ee}`,Pe="FIS_v2",wt="https://firebaseinstallations.googleapis.com/v1",yt=3600*1e3,It="installations",At="Installations";/**
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
 */const vt={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},E=new we(It,At,vt);function Le(e){return e instanceof ye&&e.code.includes("request-failed")}/**
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
 */function Me({projectId:e}){return`${wt}/projects/${e}/installations`}function Oe(e){return{token:e.token,requestStatus:2,expiresIn:bt(e.expiresIn),creationTime:Date.now()}}async function Ne(e,t){const n=(await t.json()).error;return E.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ue({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tt(e,{refreshToken:t}){const a=Ue(e);return a.append("Authorization",Ct(t)),a}async function _e(e){const t=await e();return t.status>=500&&t.status<600?e():t}function bt(e){return Number(e.replace("s","000"))}function Ct(e){return`${Pe} ${e}`}/**
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
 */async function Et({appConfig:e,heartbeatServiceProvider:t},{fid:a}){const n=Me(e),s=Ue(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:a,authVersion:Pe,appId:e.appId,sdkVersion:De},i={method:"POST",headers:s,body:JSON.stringify(o)},u=await _e(()=>fetch(n,i));if(u.ok){const l=await u.json();return{fid:l.fid||a,registrationStatus:2,refreshToken:l.refreshToken,authToken:Oe(l.authToken)}}else throw await Ne("Create Installation",u)}/**
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
 */function Fe(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function St(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Rt=/^[cdef][\w-]{21}$/,X="";function kt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=Dt(e);return Rt.test(a)?a:X}catch{return X}}function Dt(e){return St(e).substr(0,22)}/**
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
 */function j(e){return`${e.appName}!${e.appId}`}/**
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
 */const xe=new Map;function qe(e,t){const a=j(e);$e(a,t),Pt(a,t)}function $e(e,t){const a=xe.get(e);if(a)for(const n of a)n(t)}function Pt(e,t){const a=Lt();a&&a.postMessage({key:e,fid:t}),Mt()}let b=null;function Lt(){return!b&&"BroadcastChannel"in self&&(b=new BroadcastChannel("[Firebase] FID Change"),b.onmessage=e=>{$e(e.data.key,e.data.fid)}),b}function Mt(){xe.size===0&&b&&(b.close(),b=null)}/**
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
 */const Ot="firebase-installations-database",Nt=1,S="firebase-installations-store";let Y=null;function te(){return Y||(Y=Je(Ot,Nt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(S)}}})),Y}async function H(e,t){const a=j(e),s=(await te()).transaction(S,"readwrite"),r=s.objectStore(S),o=await r.get(a);return await r.put(t,a),await s.done,(!o||o.fid!==t.fid)&&qe(e,t.fid),t}async function He(e){const t=j(e),n=(await te()).transaction(S,"readwrite");await n.objectStore(S).delete(t),await n.done}async function G(e,t){const a=j(e),s=(await te()).transaction(S,"readwrite"),r=s.objectStore(S),o=await r.get(a),i=t(o);return i===void 0?await r.delete(a):await r.put(i,a),await s.done,i&&(!o||o.fid!==i.fid)&&qe(e,i.fid),i}/**
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
 */async function ae(e){let t;const a=await G(e.appConfig,n=>{const s=Ut(n),r=_t(e,s);return t=r.registrationPromise,r.installationEntry});return a.fid===X?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}function Ut(e){const t=e||{fid:kt(),registrationStatus:0};return ze(t)}function _t(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(E.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=Ft(e,a);return{installationEntry:a,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xt(e)}:{installationEntry:t}}async function Ft(e,t){try{const a=await Et(e,t);return H(e.appConfig,a)}catch(a){throw Le(a)&&a.customData.serverCode===409?await He(e.appConfig):await H(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function xt(e){let t=await ie(e.appConfig);for(;t.registrationStatus===1;)await Fe(100),t=await ie(e.appConfig);if(t.registrationStatus===0){const{installationEntry:a,registrationPromise:n}=await ae(e);return n||a}return t}function ie(e){return G(e,t=>{if(!t)throw E.create("installation-not-found");return ze(t)})}function ze(e){return qt(e)?{fid:e.fid,registrationStatus:0}:e}function qt(e){return e.registrationStatus===1&&e.registrationTime+ke<Date.now()}/**
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
 */async function $t({appConfig:e,heartbeatServiceProvider:t},a){const n=Ht(e,a),s=Tt(e,a),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:De,appId:e.appId}},i={method:"POST",headers:s,body:JSON.stringify(o)},u=await _e(()=>fetch(n,i));if(u.ok){const l=await u.json();return Oe(l)}else throw await Ne("Generate Auth Token",u)}function Ht(e,{fid:t}){return`${Me(e)}/${t}/authTokens:generate`}/**
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
 */async function ne(e,t=!1){let a;const n=await G(e.appConfig,r=>{if(!Be(r))throw E.create("not-registered");const o=r.authToken;if(!t&&Vt(o))return r;if(o.requestStatus===1)return a=zt(e,t),r;{if(!navigator.onLine)throw E.create("app-offline");const i=Gt(r);return a=Bt(e,i),i}});return a?await a:n.authToken}async function zt(e,t){let a=await oe(e.appConfig);for(;a.authToken.requestStatus===1;)await Fe(100),a=await oe(e.appConfig);const n=a.authToken;return n.requestStatus===0?ne(e,t):n}function oe(e){return G(e,t=>{if(!Be(t))throw E.create("not-registered");const a=t.authToken;return Kt(a)?{...t,authToken:{requestStatus:0}}:t})}async function Bt(e,t){try{const a=await $t(e,t),n={...t,authToken:a};return await H(e.appConfig,n),a}catch(a){if(Le(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await He(e.appConfig);else{const n={...t,authToken:{requestStatus:0}};await H(e.appConfig,n)}throw a}}function Be(e){return e!==void 0&&e.registrationStatus===2}function Vt(e){return e.requestStatus===2&&!jt(e)}function jt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yt}function Gt(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Kt(e){return e.requestStatus===1&&e.requestTime+ke<Date.now()}/**
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
 */async function Wt(e){const t=e,{installationEntry:a,registrationPromise:n}=await ae(t);return n?n.catch(console.error):ne(t).catch(console.error),a.fid}/**
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
 */async function Yt(e,t=!1){const a=e;return await Jt(a),(await ne(a,t)).token}async function Jt(e){const{registrationPromise:t}=await ae(e);t&&await t}/**
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
 */function Qt(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");const t=["projectId","apiKey","appId"];for(const a of t)if(!e.options[a])throw J(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function J(e){return E.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ve="installations",Xt="installations-internal",Zt=e=>{const t=e.getProvider("app").getImmediate(),a=Qt(t),n=B(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},ea=e=>{const t=e.getProvider("app").getImmediate(),a=B(t,Ve).getImmediate();return{getId:()=>Wt(a),getToken:s=>Yt(a,s)}};function ta(){q(new $(Ve,Zt,"PUBLIC")),q(new $(Xt,ea,"PRIVATE"))}ta();x(Re,ee);x(Re,ee,"esm2020");/**
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
 */const z="analytics",aa="firebase_id",na="origin",sa=60*1e3,ra="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",se="https://www.googletagmanager.com/gtag/js";/**
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
 */const g=new Qe("@firebase/analytics");/**
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
 */const ia={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},w=new we("analytics","Analytics",ia);/**
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
 */function oa(e){if(!e.startsWith(se)){const t=w.create("invalid-gtag-resource",{gtagURL:e});return g.warn(t.message),""}return e}function je(e){return Promise.all(e.map(t=>t.catch(a=>a)))}function ca(e,t){let a;return window.trustedTypes&&(a=window.trustedTypes.createPolicy(e,t)),a}function ua(e,t){const a=ca("firebase-js-sdk-policy",{createScriptURL:oa}),n=document.createElement("script"),s=`${se}?l=${e}&id=${t}`;n.src=a?a?.createScriptURL(s):s,n.async=!0,document.head.appendChild(n)}function la(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function da(e,t,a,n,s,r){const o=n[s];try{if(o)await t[o];else{const u=(await je(a)).find(l=>l.measurementId===s);u&&await t[u.appId]}}catch(i){g.error(i)}e("config",s,r)}async function fa(e,t,a,n,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const i=await je(a);for(const u of o){const l=i.find(y=>y.measurementId===u),m=l&&t[l.appId];if(m)r.push(m);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",n,s||{})}catch(r){g.error(r)}}function pa(e,t,a,n){async function s(r,...o){try{if(r==="event"){const[i,u]=o;await fa(e,t,a,i,u)}else if(r==="config"){const[i,u]=o;await da(e,t,a,n,i,u)}else if(r==="consent"){const[i,u]=o;e("consent",i,u)}else if(r==="get"){const[i,u,l]=o;e("get",i,u,l)}else if(r==="set"){const[i]=o;e("set",i)}else e(r,...o)}catch(i){g.error(i)}}return s}function ma(e,t,a,n,s){let r=function(...o){window[n].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=pa(r,e,t,a),{gtagCore:r,wrappedGtag:window[s]}}function ha(e){const t=window.document.getElementsByTagName("script");for(const a of Object.values(t))if(a.src&&a.src.includes(se)&&a.src.includes(e))return a;return null}/**
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
 */const ga=30,wa=1e3;class ya{constructor(t={},a=wa){this.throttleMetadata=t,this.intervalMillis=a}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,a){this.throttleMetadata[t]=a}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ge=new ya;function Ia(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Aa(e){const{appId:t,apiKey:a}=e,n={method:"GET",headers:Ia(a)},s=ra.replace("{app-id}",t),r=await fetch(s,n);if(r.status!==200&&r.status!==304){let o="";try{const i=await r.json();i.error?.message&&(o=i.error.message)}catch{}throw w.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function va(e,t=Ge,a){const{appId:n,apiKey:s,measurementId:r}=e.options;if(!n)throw w.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:n};throw w.create("no-api-key")}const o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Ca;return setTimeout(async()=>{i.abort()},sa),Ke({appId:n,apiKey:s,measurementId:r},o,i,t)}async function Ke(e,{throttleEndTimeMillis:t,backoffCount:a},n,s=Ge){const{appId:r,measurementId:o}=e;try{await Ta(n,t)}catch(i){if(o)return g.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${i?.message}]`),{appId:r,measurementId:o};throw i}try{const i=await Aa(e);return s.deleteThrottleMetadata(r),i}catch(i){const u=i;if(!ba(u)){if(s.deleteThrottleMetadata(r),o)return g.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:r,measurementId:o};throw i}const l=Number(u?.customData?.httpStatus)===503?re(a,s.intervalMillis,ga):re(a,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+l,backoffCount:a+1};return s.setThrottleMetadata(r,m),g.debug(`Calling attemptFetch again in ${l} millis`),Ke(e,m,n,s)}}function Ta(e,t){return new Promise((a,n)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(a,s);e.addEventListener(()=>{clearTimeout(r),n(w.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ba(e){if(!(e instanceof ye)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ca{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ea(e,t,a,n,s){if(s&&s.global){e("event",a,n);return}else{const r=await t,o={...n,send_to:r};e("event",a,o)}}async function Sa(e,t,a,n){{const s=await t;e("config",s,{update:!0,user_id:a})}}async function Ra(e,t,a,n){if(n&&n.global){const s={};for(const r of Object.keys(a))s[`user_properties.${r}`]=a[r];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:a})}}/**
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
 */async function ka(){if(ve())try{await Te()}catch(e){return g.warn(w.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return g.warn(w.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Da(e,t,a,n,s,r,o){const i=va(e);i.then(I=>{a[I.measurementId]=I.appId,e.options.measurementId&&I.measurementId!==e.options.measurementId&&g.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>g.error(I)),t.push(i);const u=ka().then(I=>{if(I)return n.getId()}),[l,m]=await Promise.all([i,u]);ha(r)||ua(r,l.measurementId),s("js",new Date);const y=o?.config??{};return y[na]="firebase",y.update=!0,m!=null&&(y[aa]=m),s("config",l.measurementId,y),l.measurementId}/**
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
 */class Pa{constructor(t){this.app=t}_delete(){return delete C[this.app.options.appId],Promise.resolve()}}let C={},ce=[];const ue={};let Q="dataLayer",La="gtag",le,K,de=!1;function Ma(){const e=[];if(Ie()&&e.push("This is a browser extension environment."),Ae()||e.push("Cookies are not available."),e.length>0){const t=e.map((n,s)=>`(${s+1}) ${n}`).join(" "),a=w.create("invalid-analytics-context",{errorInfo:t});g.warn(a.message)}}function Oa(e,t,a){Ma();const n=e.options.appId;if(!n)throw w.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)g.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw w.create("no-api-key");if(C[n]!=null)throw w.create("already-exists",{id:n});if(!de){la(Q);const{wrappedGtag:r,gtagCore:o}=ma(C,ce,ue,Q,La);K=r,le=o,de=!0}return C[n]=Da(e,ce,ue,t,le,Q,a),new Pa(e)}function Na(e=be()){e=V(e);const t=B(e,z);return t.isInitialized()?t.getImmediate():Ua(e)}function Ua(e,t={}){const a=B(e,z);if(a.isInitialized()){const s=a.getImmediate();if(Xe(t,a.getOptions()))return s;throw w.create("already-initialized")}return a.initialize({options:t})}async function _a(){if(Ie()||!Ae()||!ve())return!1;try{return await Te()}catch{return!1}}function Ja(e,t,a){e=V(e),Sa(K,C[e.app.options.appId],t).catch(n=>g.error(n))}function Fa(e,t,a){e=V(e),Ra(K,C[e.app.options.appId],t,a).catch(n=>g.error(n))}function xa(e,t,a,n){e=V(e),Ea(K,C[e.app.options.appId],t,a,n).catch(s=>g.error(s))}const fe="@firebase/analytics",pe="0.10.21";function qa(){q(new $(z,(t,{options:a})=>{const n=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Oa(n,s,a)},"PUBLIC")),q(new $("analytics-internal",e,"PRIVATE")),x(fe,pe),x(fe,pe,"esm2020");function e(t){try{const a=t.getProvider(z).getImmediate();return{logEvent:(n,s,r)=>xa(a,n,s,r),setUserProperties:(n,s)=>Fa(a,n,s)}}catch(a){throw w.create("interop-component-reg-failed",{reason:a})}}}qa();class D{constructor(){this.lastNavTimestamp=0,this.NAV_THROTTLE_MS=2e3,this.currentUid=null,this.currentCharacterId=null,this.currentUsername=null}static getInstance(){return D.instance||(D.instance=new D),D.instance}setUser(t,a,n){this.currentUid=t,this.currentUsername=a,this.currentCharacterId=n||null}clearUser(){this.currentUid=null,this.currentUsername=null,this.currentCharacterId=null}sanitizeData(t){if(t===void 0)return;if(t===null)return null;if(typeof t=="function")return;if(typeof t!="object")return t;if(Array.isArray(t))return t.map(n=>this.sanitizeData(n)).filter(n=>n!==void 0);const a={};for(const[n,s]of Object.entries(t)){if(s===void 0)continue;const r=this.sanitizeData(s);r!==void 0&&(a[n]=r)}return a}humanize(t,a){if(!t||typeof t!="string")return String(t||"");if(a==="navigation"&&t.includes("→")){const s={player:"Walkman MK-III",profile:"Perfil Usuário",bios:"Terminal BIOS",limbo:"Limbo (Firewall)",diskRepair:"Reparador de Disco",macos:"System 7.5",windows95:"Windows 95",login:"Acesso",campaignSelection:"Seleção de Instância"},[r,o]=t.split("→").map(i=>i.trim());return`Navegação: ${s[r]||r} → ${s[o]||o}`}if(t.includes("WebChannelConnection"))return"SINC_DB: Oscilação na conexão em tempo real";if(t.includes("Failed to fetch"))return"REDE: Falha ao carregar recurso externo";const n={"Iniciado Play":"▶️ Reprodução iniciada",Pausado:"⏸️ Reprodução pausada","Retroceder fita":"⏪ Retrocedendo fita","Interação tátil (parafuso)":"🛠️ Interação com hardware (Parafuso)","Reprodução finalizada":"⏹️ Fita chegou ao fim"};for(const[s,r]of Object.entries(n))if(t.includes(s))return r;return t}normalizeArgs(t,a){let n="general",s="",r={};return a==="navigation"?(n="navigation",s=t[0]||"",r=t[1]||{}):(n=t[0]||"general",s=t[1]||"",r=t[2]||{}),{uid:this.currentUid||"unknown",characterId:this.currentCharacterId||void 0,username:this.currentUsername||"System",category:n,message:typeof s=="string"?s:JSON.stringify(s),metadata:r}}async write(t,a,n){const{uid:s,characterId:r,username:o,category:i,message:u,metadata:l}=this.normalizeArgs(n,t);try{const m=this.humanize(u,t),y={...l||{},original_message:u},I=this.sanitizeData({type:t,category:i,uid:s,characterId:r,username:o,message:m,metadata:y,source:a});await Ce(T(c,"activityLog"),{...I,timestamp:A()})}catch(m){console.warn("[ActivityLogger] write failed:",m)}}logNavigation(t,a,n){const s=Date.now();s-this.lastNavTimestamp<this.NAV_THROTTLE_MS||(this.lastNavTimestamp=s,this.write("navigation","player",[`${t} → ${a}`,n]))}logAction(...t){this.write("action","player",t)}logSystem(...t){this.write("system","player",t)}logError(...t){this.write("error","player",t)}logAuth(...t){this.write("auth","player",t)}logTrace(...t){this.write("trace","player",t)}logAdmin(t,a,n,s){this.setUser("admin",t),this.write("admin","admin",[a,n,s])}}const me=D.getInstance(),$a={apiKey:"AIzaSyBJwoSbFc_CM9s5DE8viqtp-0QhvgkjW88",authDomain:"hub-rpg-5f3e2.firebaseapp.com",projectId:"hub-rpg-5f3e2",storageBucket:"hub-rpg-5f3e2.firebasestorage.app",messagingSenderId:"950673729343",appId:"1:950673729343:web:97cfb6180d7effa304d58a",measurementId:"G-0T3PDY35GG"},W=at().length?be():nt($a),L=tt(W),c=Ze(W,{localCache:et({tabManager:rt()})}),Ha=st(W);let U=null;async function Qa(){if(U)return U;try{await _a()&&(U=Na(W))}catch{}return U}let M=!1;function We(e,t,a,n,s){const r=L?.currentUser;let i=t.split(`
`)[0]||"Unknown Error";i.length>150&&(i=i.slice(0,147)+"...");const u=`[${e}] ${i}`,l={fullMessage:t};if(a!==void 0&&(l.stack=a),n!==void 0&&(l.code=n),s!==void 0&&(l.extraArgs=s),!r)return;const m=r.displayName||r.email||"unknown_player";r.uid==="5TZK6YHmOOTe5padFPqCbXuavPu1"?me.logAdmin(m,e.toLowerCase(),u,l):me.logError(r.uid,m,u,a,l)}function Ye(e){return e instanceof Error?{message:e.message,stack:e.stack,code:e.code}:{message:String(e)}}window.addEventListener("error",e=>{const{message:t,stack:a,code:n}=Ye(e.error??e.message);if(!M){M=!0;try{We("GLOBAL_ERROR",t,a,n,{filename:e.filename,lineno:e.lineno,colno:e.colno})}finally{M=!1}}});window.addEventListener("unhandledrejection",e=>{const{message:t,stack:a,code:n}=Ye(e.reason);if(!(t.includes("[ActivityLogger]")||t.includes("Missing or insufficient permissions")||t.includes("permission-denied")||t.includes("access control checks"))&&!M){M=!0;try{We("PROMISE_ERROR",t,a,n)}finally{M=!1}}});const he={totalListenTime:0,screwClicks:0,fidgetClicks:0,ejectWithoutPlay:0,maxVolumeTime:0,zeroVolumeTime:0};async function ge(e){const t=await v(d(c,"users",e));if(!t.exists())throw new Error("Account not found");const a=t.data();return{uid:e,email:a?.email||"",masterName:a?.masterName||a?.displayName||"Agente",role:a?.role||"player",createdAt:a?.createdAt||null,...a}}async function za(e,t,a){await h(d(c,"users",e),{uid:e,email:t,masterName:a,role:"player",createdAt:A(),lastLogin:A()})}async function Ba(e){await h(d(c,"users",e),{lastLogin:A()},{merge:!0})}async function Xa(e){return e?(await N(Ee(T(c,"users",e,"characters"),it("createdAt","desc")))).docs.map(a=>({id:a.id,...a.data()})):[]}async function Za(e,t){if(!e)throw new Error("Cannot create character without UID");const a=`${Date.now()}_${Math.random().toString(36).slice(2,5)}`,n={codinome:t,agentStatus:"vivo",dangerLevel:1,createdAt:A()};return await h(d(c,"users",e,"characters",a),n),{id:a,...n}}async function en(e,t){if(!e||!t)throw new Error("LoadPlayerData failed: Missing identifiers");const[a,n,s,r,o]=await Promise.all([v(d(c,"users",e)),v(d(c,"users",e,"characters",t)),v(d(c,"users",e,"characters",t,"stats","main")),N(T(c,"users",e,"characters",t,"achievements")),N(T(c,"users",e,"characters",t,"intel"))]);if(!a.exists()||!n.exists())throw new Error("Data integrity failure: Account or Character missing");const i=a.data(),u={uid:e,email:i?.email||"",masterName:i?.masterName||i?.displayName||"Agente",role:i?.role||"player",createdAt:i?.createdAt||null,...i},l={id:t,...n.data()},m=s.exists()?{...he,...s.data()}:he;return{...u,activeCharacterId:t,character:l,achievementIds:r.docs.map(y=>y.id),stats:m,unlockedIntelIds:o.docs.map(y=>y.id).sort()}}async function tn(e,t,a,n){const s={intelId:a,unlockedAt:A(),campaignId:n||null,type:"AUDIO"};await h(d(c,"users",e,"characters",t,"intel",a),s,{merge:!0})}async function an(e,t,a){const n=Z(c);a.forEach(s=>{n.set(d(c,"users",e,"characters",t,"achievements",s),{achievementId:s,unlockedAt:A()})}),await n.commit()}async function nn(e,t,a){await h(d(c,"users",e,"characters",t,"stats","main"),a,{merge:!0})}async function sn(e,t,a){await h(d(c,"users",e,"characters",t),{spotifyPlaylistUrl:a},{merge:!0})}async function rn(e,t,a){await h(d(c,"users",e,"characters",t),{phoneNumber:a},{merge:!0})}async function on(e,t,a){await h(d(c,"users",e,"characters",t),{campaignId:a},{merge:!0})}async function cn(e,t,a){const n=a.trim();n&&await h(d(c,"users",e,"characters",t),{codinome:n},{merge:!0})}async function un(e,t,a){const n=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,s=dt(Ha,`profilePhotos/${e}/${t}/${n}`);await ft(s,a);const r=await pt(s);return await h(d(c,"users",e,"characters",t),{profilePhotoUrl:r},{merge:!0}),{url:r}}async function ln(e,t,a){const n=Z(c);e.forEach(s=>{n.set(d(c,"users",s),{forceTerminalOpen:t,hasTerminalAccess:a},{merge:!0})}),await n.commit()}async function dn(e,t,a){const n=Z(c);e.forEach(s=>{n.set(d(c,"users",s),{forceMacOpen:t,hasMacAccess:a},{merge:!0})}),await n.commit()}async function fn(e){await h(d(c,"users",e),{forceTerminalOpen:!1},{merge:!0})}async function pn(e){await h(d(c,"users",e),{forceMacOpen:!1},{merge:!0})}async function mn(e){await h(d(c,"system","limboState"),{seized:e,seizedAt:e?A():null},{merge:!0})}async function hn(){const e=await v(d(c,"system","limboState"));return e.exists()?e.data():{seized:!1}}async function gn(e){const t=d(c,"system","limboState");await ut(c,async a=>{const n=await a.get(t),r=(n.exists()?n.data():{readThreadIds:[]}).readThreadIds||[];r.includes(e)||a.set(t,{readThreadIds:[...r,e]},{merge:!0})})}async function wn(e,t,a){return(await Ce(T(c,"playEvents"),{uid:e,characterId:t,tapeId:a,playedAt:A(),completed:!1})).id}async function yn(e){await h(d(c,"playEvents",e),{completed:!0},{merge:!0})}async function In(e,t){const a=d(c,"users",e,"characters",t),n=await v(a);if(n.exists()&&n.data().agentId)return n.data().agentId;const s=Array.from(crypto.getRandomValues(new Uint8Array(3))).map(r=>r.toString(16).padStart(2,"0")).join("").toUpperCase();return await h(a,{agentId:s},{merge:!0}),s}async function An(e){const t=await v(d(c,"mediaAssets",e));return t.exists()?{id:t.id,...t.data()}:null}async function vn(e){if(e.length===0)return[];const t=[];for(let a=0;a<e.length;a+=30){const n=e.slice(a,a+30),s=Ee(T(c,"mediaAssets"),ct("__name__","in",n));(await N(s)).docs.forEach(o=>{t.push({id:o.id,...o.data()})})}return t}async function Tn(){return(await N(T(c,"mediaAssets"))).docs.map(t=>({id:t.id,...t.data()}))}async function bn(e){const t=d(c,"mediaAssets",e.id);let a="other";if(e.type==="AUDIO")a="audio";else if(e.type==="VISUAL"){const r=e.mediaUrl?.split("?")[0].split(".").pop()?.toLowerCase();r&&["mp4","webm","mov"].includes(r)?a="video":a="image"}else e.type==="TEXT"?a="text":e.type==="META"&&(a="meta");const n={level:e.level,title:e.title,description:e.description};e.metadata&&(e.metadata.npc!==void 0&&(n.npc=e.metadata.npc),e.metadata.artist!==void 0&&(n.artist=e.metadata.artist),e.metadata.chapter!==void 0&&(n.chapter=e.metadata.chapter),e.metadata.duration!==void 0&&(n.duration=e.metadata.duration),e.metadata.isSecret!==void 0&&(n.isSecret=e.metadata.isSecret),e.metadata.visualCategory!==void 0&&(n.category=e.metadata.visualCategory),e.metadata.imageUrl!==void 0&&(n.imageUrl=e.metadata.imageUrl),e.metadata.icon!==void 0&&(n.icon=e.metadata.icon),e.metadata.hint!==void 0&&(n.hint=e.metadata.hint),e.metadata.unlockCondition!==void 0&&(n.unlockCondition=e.metadata.unlockCondition),e.metadata.achievementRuleId!==void 0&&(n.achievementRuleId=e.metadata.achievementRuleId));const s={type:a,campaignId:e.campaignId||null,metadata:n};e.mediaUrl&&(s.url=e.mediaUrl),e.textContent&&(s.textContent=e.textContent),await h(t,s,{merge:!0})}async function Cn(e){const t=await v(d(c,"qrRedirects",e));return t.exists()&&t.data().targetId||null}function En(e){const t=T(c,"qrRedirects");return ot(t,a=>{const n=a.docs.map(s=>({sourceId:s.id,...s.data()}));e(n)},a=>console.warn("[Firestore] subscribeToQrRedirects error:",a))}async function Sn(e,t,a){await h(d(c,"qrRedirects",e),{targetId:t,reason:a||"",updatedAt:A()})}async function Rn(e){await lt(d(c,"qrRedirects",e))}class R{}class _ extends R{constructor(t){super(),this.targetCount=t}evaluate(t){return t.profile.unlockedIntelIds.length>=this.targetCount}}class F extends R{constructor(t){super(),this.targetSeconds=t}evaluate(t){return t.profile.stats.totalListenTime>=this.targetSeconds}}class Va extends R{evaluate(t){return t.unlockedIntel.some(a=>a.metadata?.isSecret)}}class ja extends R{constructor(t){super(),this.keyword=t}evaluate(t){const a=this.keyword.toLowerCase();return t.unlockedIntel.some(n=>(n.metadata?.artist||"").toLowerCase().includes(a)||(n.metadata?.chapter||"").toLowerCase().includes(a)||n.title.toLowerCase().includes(a))}}class Ga extends R{constructor(t){super(),this.targetCount=t}evaluate(t){return t.rapidScanCount>=this.targetCount}}class O extends R{constructor(t,a){super(),this.statKey=t,this.targetValue=a}evaluate(t){return t.profile.stats[this.statKey]>=this.targetValue}}class k extends R{evaluate(){return!1}}class p{constructor(t,a,n,s,r,o,i="Nenhuma condição detalhada fornecida.",u=!0){this.id=t,this.title=a,this.description=n,this.icon=s,this.hint=r,this.rule=o,this.unlockCondition=i,this.isSecret=u}canUnlock(t){return t.profile.achievementIds.includes(this.id)?!1:this.rule.evaluate(t)}}class P{constructor(){this.achievements=new Map}static getInstance(){return P.instance||(P.instance=new P),P.instance}register(t){this.achievements.set(t.id,t)}getAchievement(t){return this.achievements.get(t)}getAll(){return Array.from(this.achievements.values())}evaluateNewAchievements(t){const a=[];for(const n of this.achievements.values())n.canUnlock(t)&&a.push(n);return a}}const f=P.getInstance(),Ka=()=>{f.register(new p("ACH-FIRST","Primeiro Contato","Deu o primeiro passo neste abismo.","📼","???",new _(1),"Encontrar e escanear 1 fita pela primeira vez.")),f.register(new p("ACH-THREE","Colecionador","Uma pequena amostra do que está por vir.","🗂️","???",new _(3),"Encontrar e escanear um total de 3 fitas diferentes.")),f.register(new p("ACH-FIVE","Arquivista","A busca pelo conhecimento nunca termina.","🏛️","???",new _(4),"Encontrar e escanear um total de 4 fitas diferentes.")),f.register(new p("ACH-ALL","Biblioteca Completa","Nada mais escapa da sua percepção.","👑","???",new _(5),"Encontrar e escanear todas as 5 fitas normais da primeira temporada.")),f.register(new p("ACH-LISTENER","Agente Ativo","Apenas escutando os recados.","🎧","???",new F(120),"Ouvir a qualquer áudio por pelo menos 2 minutos totais.")),f.register(new p("ACH-TIME-1","Ouvinte Assíduo","Sons começam a fazer parte do silêncio.","⏱️","???",new F(3600),"Acumular o tempo total de escuta de 1 hora.")),f.register(new p("ACH-TIME-10","Audiófilo","Vozes ecos pela cabeça.","📻","???",new F(36e3),"Acumular o tempo total de escuta de 10 horas.")),f.register(new p("ACH-TIME-50","Fita Gasta","Você já esqueceu como era a vida antes.","🫠","???",new F(18e4),"Acumular o tempo insano de 50 horas de reprodução.")),f.register(new p("ACH-SECRET","Você Não Deveria Estar Aqui","Algumas coisas devem permanecer ocultas.","☠️","???",new Va,'Encontrar e escanear qualquer fita marcada como "Secreta" no banco de dados.')),f.register(new p("ACH-LORE-ANALOG","Leviatã Analógico","A entidade na fita magnetizada.","🎸","???",new ja("analog leviathan"),'Desbloquear uma fita do artista ou capítulo que mencione "Analog Leviathan".')),f.register(new p("ACH-FAST-SCAN","Data Miner","Rápido demais para o sistema.","⚡","???",new Ga(3),"Escanear pelo menos 3 fitas muito rápido, em curto período de tempo de uma única vez.")),f.register(new p("ACH-MECH-SCREW","Mecânico","Curiosidade desmontada.","🪛","???",new O("screwClicks",15),"Clicar compulsivamente na textura de parafusos do walkman (min 15 cliques).")),f.register(new p("ACH-MECH-MARRETA","Eu vou pegar a minha marreeeeeta","Como os botões podem ser fidget toys.","🔨","???",new O("fidgetClicks",1e3),"Clicar intensamente em botões, scroll e parafusos até 1000 vezes.")),f.register(new p("ACH-MECH-INDECISIVE","Indeciso","A ilusão da escolha.","🤔","???",new O("ejectWithoutPlay",10),"Ejetar a fita seguidamente pelo menos 10 vezes sem dar o play.")),f.register(new p("ACH-VOL-MAX","Tímpanos de Aço","Gritos abafados pelo ruído.","🤘","???",new O("maxVolumeTime",300),"Manter o áudio no volume em 100% (máximo) por mais de 5 minutos cumulativos.")),f.register(new p("ACH-VOL-ZERO","Silêncio Tático","Apenas o silêncio.","🤫","???",new O("zeroVolumeTime",180),"Manter o áudio com volume no mudo (zero absoluto) tocando por mais de 3 minutos.")),f.register(new p("ACH-VETERAN","Veterano da Agência","Uma honra concedida apenas pelo Alto Escalão.","🏅","???",new k,"Entregue diretamente e manualmente pelo Administrador através do painel.")),f.register(new p("ACH-LIMBO-FOUND","Despertar","Onde nós realmente estamos?","👁️","???",new k,"Burlar os sistemas do Walkman para descobrir o acesso ao BBS secreto (Limbo_01).")),f.register(new p("ACH-LIMBO-READ","O Ponto Zero","Agora você não pode mais fechar os olhos.","🌀","???",new k,"Ler todas as threads secretas no arquivo do BBS até acionar o protocolo de bloqueio militar.")),f.register(new p("ACH-REPAIR-APP","Engenheiro de Software","Interfaces visuais em um mundo CLI.","🖥️","???",new k,"Encontrar e iniciar o aplicativo de reparo de discos no terminal.")),f.register(new p("ACH-REPAIR-FAIL","Setor Defeituoso","A agulha não consegue ler o caos de primeira.","🛑","???",new k,"Inserir o disquete corrompido no computador para diagnóstico.")),f.register(new p("ACH-REPAIR-SUCCESS","A Verdade no Zero","O conteúdo da fenda foi restaurado.","💾","???",new k,"Reparar com sucesso o disquete magnético e descobrir a mensagem oculta."))};Ka();const kn=f.getAll();function Dn(e,t,a=0){const n={profile:e,unlockedIntel:t,rapidScanCount:a};return f.evaluateNewAchievements(n)}function Wa(e){return`${e.trim().toLowerCase().replace(/[^a-z0-9._-]/g,"_")}@limboos.local`}async function Pn(e,t){const n=e.includes("@")&&e.includes(".")?e.trim():Wa(e);try{const{user:s}=await ht(L,n,t);await Ba(s.uid);const r=await ge(s.uid);return r.suspended&&r.role!=="admin"?(await Se(L),{ok:!1,error:"unknown",message:"CONTA SUSPENSA: Contate o administrador."}):{ok:!0,account:r}}catch(s){const r=s.code??"";if(r==="auth/user-not-found"||r==="auth/invalid-credential")try{const{user:o}=await gt(L,n,t);return await za(o.uid,n,e),{ok:!0,account:await ge(o.uid)}}catch(o){const i=o.code??"";return i==="auth/weak-password"?{ok:!1,error:"wrong_password",message:"Senha muito fraca (mínimo 6 caracteres)."}:i==="auth/email-already-in-use"?{ok:!1,error:"wrong_password",message:"FALHA NA AUTENTICAÇÃO: SENHA INCORRETA"}:{ok:!1,error:"unknown",message:"Erro ao criar perfil."}}return r==="auth/wrong-password"?{ok:!1,error:"wrong_password",message:"FALHA NA AUTENTICAÇÃO: CREDENCIAIS INVÁLIDAS"}:r.startsWith("auth/network")?{ok:!1,error:"network",message:"SEM CONEXÃO: verifique a rede."}:{ok:!1,error:"unknown",message:`Erro inesperado (${r})`}}}async function Ln(){await Se(L)}function Mn(e){return mt(L,e)}export{kn as A,Rn as B,Ha as C,Tn as D,bn as E,Cn as F,An as G,vn as H,Qa as I,Ja as J,Fa as K,xa as L,wn as M,yn as N,nn as O,Dn as P,In as Q,me as a,sn as b,on as c,c as d,en as e,rn as f,ge as g,L as h,Pn as i,Xa as j,Za as k,Ln as l,fn as m,an as n,Mn as o,gn as p,pn as q,tn as r,cn as s,hn as t,un as u,ln as v,dn as w,mn as x,En as y,Sn as z};
