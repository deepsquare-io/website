import{n as le,s as ut,t as dt,o as ht}from"./scheduler.srpzDMQS.js";import{v as pt}from"./environment.CZLhA_4V.js";new URL("sveltekit-internal://");function gt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function mt(e){return e.split("%25").map(decodeURI).join("%25")}function _t(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const yt=["href","pathname","search","toString","toJSON"];function wt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of yt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const vt="/__data.json",bt=".html__data.json";function At(e){return e.endsWith(".html")?e.replace(/\.html$/,bt):e.replace(/\/$/,"")+vt}function Et(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function St(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Fe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(me(e)),Fe(e,n));const q=new Map;function kt(e,n){const t=me(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=St(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Rt(e,n,t){if(q.size>0){const r=me(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function me(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Et(...a)}"]`}return r}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Pt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=It.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function Lt(e){return!/^\([^)]+\)$/.test(e)}function Pt(e){return e.slice(1).split("/").filter(Lt)}function Ut(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:g}=Tt(s),u={id:s,exec:m=>{const f=h.exec(m);if(f)return Ut(f,g,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Be(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Le(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const O=[];function _e(e,n=le){let t;const r=new Set;function a(s){if(ut(e,s)&&(e=s,t)){const c=!O.length;for(const l of r)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(e))}function i(s,c=le){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||le),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var $e;const L=(($e=globalThis.__sveltekit_scswlt                        )==null?void 0:$e.base)??"";var Ve;const Nt=((Ve=globalThis.__sveltekit_scswlt                        )==null?void 0:Ve.assets)??L,qe="sveltekit:snapshot",He="sveltekit:scroll",Ge="sveltekit:states",Ot="sveltekit:pageurl",D="sveltekit:history",G="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Ke(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function C(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Pe={...J,"":J.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ye(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function he(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===Y&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function W(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=C(s,"preload-code")),a===null&&(a=C(s,"preload-data")),n===null&&(n=C(s,"keepfocus")),t===null&&(t=C(s,"noscroll")),o===null&&(o=C(s,"reload")),i===null&&(i=C(s,"replacestate")),s=Me(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Pe[r??"off"],preload_data:Pe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ue(e){const n=_e(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ct(){const{set:e,subscribe:n}=_e(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==pt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==Y||!e.pathname.startsWith(n)}function xe(e){const n=Dt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const jt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Dt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=jt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const $t=-1,Vt=-2,Ft=-3,Bt=-4,qt=-5,Ht=-6;function Gt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===$t)return;if(o===Ft)return NaN;if(o===Bt)return 1/0;if(o===qt)return-1/0;if(o===Ht)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1;u<s.length;u+=2)g[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],m=s[1],f=xe(m),_=new u(f);r[o]=_;break}case"ArrayBuffer":{const u=s[1],m=xe(u);r[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Vt&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Kt=new Set([...ze]);[...Kt];function Mt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(n,t){this.status=n,this.location=t}}class we extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Yt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof we?e.status:500}function Jt(e){return e instanceof we?e.text:"Internal Error"}const N=Be(He)??{},K=Be(qe)??{},U={url:Ue({}),page:Ue({}),navigating:_e(null),updated:Ct()};function ve(e){N[e]=ye()}function Wt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function Ne(){}let oe,pe,Z,P,ge,F;const We=[],Q=[];let R=null;const Xe=[],Ze=[];let j=[],y={branch:[],error:null,url:null},be=!1,ee=!1,Oe=!0,M=!1,B=!1,Qe=!1,Ae=!1,Ee,S,T,I,te;const H=new Set;async function fn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,oe=xt(e),P=document.documentElement,ge=n,pe=e.nodes[0],Z=e.nodes[1],pe(),Z(),S=(a=history.state)==null?void 0:a[D],T=(o=history.state)==null?void 0:o[G],S||(S=T=Date.now(),history.replaceState({...history.state,[D]:S,[G]:T},""));const r=N[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await on(ge,t):rn(location.href,{replaceState:!0}),an()}function Xt(){We.length=0,Ae=!1}function et(e){Q.some(n=>n==null?void 0:n.snapshot)&&(K[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function tt(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ce(){ve(S),Le(He,N),et(T),Le(qe,K)}async function nt(e,n,t,r){return z({type:"goto",url:Ke(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ae=!0)}})}async function Zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};H.add(n),R={id:e.id,token:n,promise:at({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function de(e){const n=oe.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function rt(e,n,t){var o;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,Ee=new F.root({target:n,props:{...e.props,stores:U,components:Q},hydrate:t,sync:!1}),tt(T);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),ee=!0}function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=gt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Mt(t).map(u=>u.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(t.length,y.branch.length);u+=1){const m=t[u],f=y.branch[u];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function Se({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const _ of f){const{href:b}=new URL(_,t);c.dependencies.add(b)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:wt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const k=new URL(b,t);return s&&u(k.href),k.origin===t.origin&&(b=k.href.slice(t.origin.length)),ee?Rt(b,k.href,_):kt(b,_)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,r,a,o){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(We.some(s=>s(new URL(i))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Qt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function De({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function at({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return H.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,u=Qt(y.url,t);let m=!1;const f=l.map((p,v)=>{var x;const A=y.branch[v],E=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||je(m,g,h,u,(x=A.server)==null?void 0:x.uses,r));return E&&(m=!0),E});if(f.some(Boolean)){try{d=await ct(t,f)}catch(p){const v=await $(p,{url:t,params:r,route:{id:e}});return H.has(o)?De({error:v,url:t,params:r,route:a}):se({status:X(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const _=d==null?void 0:d.nodes;let b=!1;const k=l.map(async(p,v)=>{var ie;if(!p)return;const A=y.branch[v],E=_==null?void 0:_[v];if((!E||E.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!je(b,g,h,u,(ie=A.universal)==null?void 0:ie.uses,r))return A;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Se({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Te;const Ie={};for(let ce=0;ce<v;ce+=1)Object.assign(Ie,(Te=await k[ce])==null?void 0:Te.data);return Ie},server_data_node:ke(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of k)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await k[p])}catch(v){if(v instanceof Je)return{type:"redirect",location:v.location};if(H.has(o))return De({error:await $(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=X(v),E;if(_!=null&&_.includes(v))A=v.status??A,E=v.error;else if(v instanceof ae)E=v.body;else{if(await U.updated.check())return await V(t);E=await $(v,{params:r,url:t,route:{id:a.id}})}const x=await en(p,w,i);return x?ne({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:E,route:a}):await it(t,{id:a.id},E,A)}else w.push(void 0);return ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function en(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await ct(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==Y||t.pathname!==location.pathname||be)&&await V(t)}const s=await Se({loader:pe,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Re(e,n){if(!e||re(e,L))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:_t(o),url:e}}}function ot(e){return mt(e.slice(L.length)||"/")}function st({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Xe.forEach(s=>s(i)),a?null:o}async function z({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ne,block:d=Ne}){const h=Re(n,!1),g=st({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){d();return}const u=S,m=T;l(),M=!0,ee&&U.navigating.set(g.navigation),te=c;let f=h&&await at(h);if(!f){if(re(n,L))return await V(n);f=await it(n,{id:null},await $(new we(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await se({status:500,error:await $(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return nt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await V(n);if(Xt(),ve(u),et(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,p={[D]:S+=w,[G]:T+=w,[Ge]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Wt(S,T)}if(R=null,f.props.page.state=i,ee){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Ze.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}Ee.$set(f.props),Qe=!0}else rt(f,ge,!1);const{activeElement:_}=document;await dt();const b=t?t.scroll:a?ye():null;if(Oe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==_&&document.activeElement!==document.body;!r&&!k&&sn(),Oe=!0,f.props.page&&(I=f.props.page),M=!1,e==="popstate"&&tt(T),g.fulfil(void 0),j.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function it(e,n,t,r){return e.origin===Y&&e.pathname===location.pathname&&!be?await se({status:r,error:t,url:e,route:n}):await V(e)}function tn(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(de(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ye(o,P);if(!s)return;const{url:c,external:l,download:d}=he(s,L);if(l||d)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Re(c,!1);g&&Zt(g)}else i<=h.preload_code&&de(c.pathname)}function a(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=he(o,L);if(s||c)continue;const l=W(o);l.reload||(l.preload_code===J.viewport&&t.observe(o),l.preload_code===J.eager&&de(i.pathname))}}j.push(a),a()}function $(e,n){if(e instanceof ae)return e.body;const t=X(e),r=Jt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function nn(e,n){ht(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function un(e){nn(Ze,e)}function rn(e,n={}){return e=Ke(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):nt(e,n,0)}function an(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ce(),!M){const a=ft(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Xe.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||tn(),P.addEventListener("click",async t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ye(t.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:i,download:s}=he(r,L);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){st({url:a,type:"link"})?M=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===fe(location)){const[,u]=y.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(B=!0,ve(S),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(s,L))return;const c=t.target,l=W(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),z({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(te={},a===S)return;const o=N[a],i=t.state[Ge]??{},s=new URL(t.state[Ot]??location.href),c=t.state[G],l=fe(location)===fe(y.url);if(c===T&&(Qe||l)){e(s),N[S]=ye(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},Ee.$set({page:I})),S=a;return}const h=a-S;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,T=c},block:()=>{history.go(-h)},nav_token:te})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[D]:++S,[G]:T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&U.navigating.set(null)});function e(t){y.url=t,U.page.set({...I,url:t}),U.page.notify()}}async function on(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){be=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Re(c,!1)||{});let l;try{const d=r.map(async(u,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=lt(f.uses)),Se({loader:F.nodes[u],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<m;b+=1)Object.assign(_,(await d[b]).data);return _},server_data_node:ke(f)})}),h=await Promise.all(d),g=oe.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let m=0;m<u.length;m++)u[m]||h.splice(m,0,void 0)}l=ne({url:c,params:a,branch:h,status:n,error:t,form:s,route:g??null})}catch(d){if(d instanceof Je){await V(new URL(d.location,location.href));return}l=await se({status:X(d),error:await $(d,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),rt(l,e,!0)}async function ct(e,n){var a;const t=new URL(e);t.pathname=At(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(zt,"1"),t.searchParams.append(Yt,n.map(o=>o?"1":"0").join(""));const r=await Fe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Gt(g,{Promise:u=>new Promise((m,f)=>{i.set(u,{fulfil:m,reject:f})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const m=d.indexOf(`
`);if(m===-1)break;const f=JSON.parse(d.slice(0,m));if(d=d.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=lt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:k}=f,w=i.get(_);i.delete(_),k?w.reject(l(k)):w.fulfil(l(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function sn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{fn as a,L as b,un as o,U as s};
