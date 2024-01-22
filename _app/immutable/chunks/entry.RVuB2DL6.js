import{n as ie,s as at,t as ot,o as st}from"./scheduler.b7N0PYL7.js";new URL("sveltekit-internal://");function it(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function ct(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ce({href:e}){return e.split("#")[0]}const ft=["href","pathname","search","toString","toJSON"];function ut(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,s){if(s==="get"||s==="getAll"||s==="has")return o=>(n(o),a[s](o));t();const i=Reflect.get(a,s);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ft)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const dt="/__data.json",ht=".html__data.json";function pt(e){return e.endsWith(".html")?e.replace(/\.html$/,ht):e.replace(/\/$/,"")+dt}function gt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const Ne=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&C.delete(pe(e)),Ne(e,t));const C=new Map;function _t(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}function mt(e,t){const n=pe(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&C.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=_t(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function yt(e,t,n){if(C.size>0){const r=pe(e,n),a=C.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);C.delete(r)}}return window.fetch(t,n)}function pe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${gt(...a)}"]`}return r}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=wt.exec(c),[,g,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!g,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:t}}function bt(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(bt)}function kt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],g=a[o+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:g,params:u}=vt(o),f={id:o,exec:h=>{const p=g.exec(h);if(p)return kt(p,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Oe(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Re(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const T=[];function ge(e,t=ie){let n;const r=new Set;function a(o){if(at(e,o)&&(e=o,n)){const c=!T.length;for(const l of r)l[1](),T.push(l,e);if(c){for(let l=0;l<T.length;l+=2)T[l][0](T[l+1]);T.length=0}}}function s(o){a(o(e))}function i(o,c=ie){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||ie),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}const A=globalThis.__sveltekit_1gt76z7?.base??"/website",At=globalThis.__sveltekit_1gt76z7?.assets??A,Rt="1705943363926",je="sveltekit:snapshot",$e="sveltekit:scroll",De="sveltekit:states",It="sveltekit:pageurl",N="sveltekit:history",F="sveltekit:navigation",K={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Ce(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function _e(){return{x:pageXOffset,y:pageYOffset}}function U(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ie={...K,"":K.hover};function Ve(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Fe(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ve(e)}}function ue(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||te(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),s=n?.origin===z&&e.hasAttribute("download");return{url:n,external:a,target:r,download:s}}function Y(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=U(o,"preload-code")),a===null&&(a=U(o,"preload-data")),t===null&&(t=U(o,"keepfocus")),n===null&&(n=U(o,"noscroll")),s===null&&(s=U(o,"reload")),i===null&&(i=U(o,"replacestate")),o=Ve(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ie[r??"off"],preload_data:Ie[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Le(e){const t=ge(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}function Lt(){const{set:e,subscribe:t}=ge(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${At}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Rt;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function te(e,t){return e.origin!==z||!e.pathname.startsWith(t)}const Pt=-1,xt=-2,Tt=-3,Ut=-4,Nt=-5,Ot=-6;function jt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Pt)return;if(s===Tt)return NaN;if(s===Ut)return 1/0;if(s===Nt)return-1/0;if(s===Ot)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const g=new Map;r[s]=g;for(let f=1;f<o.length;f+=2)g.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=a(o[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==xt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const qe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...qe];const $t=new Set([...qe]);[...$t];function Dt(e){return e.filter(t=>t!=null)}class ne{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(t,n){this.status=t,this.location=n}}class me extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Ct="x-sveltekit-invalidated",Vt="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof me?e.status:500}function Ft(e){return e instanceof me?e.text:"Internal Error"}const x=Oe($e)??{},q=Oe(je)??{},qt=history.pushState,ye=history.replaceState,L={url:Le({}),page:Le({}),navigating:ge(null),updated:Lt()};function we(e){x[e]=_e()}function Mt(e,t){let n=e+1;for(;x[n];)delete x[n],n+=1;for(n=t+1;q[n];)delete q[n],n+=1}function j(e){return location.href=e.href,new Promise(()=>{})}function Pe(){}let re,de,W,I,he,$;const Ge=[],X=[];let O=null;const ze=[],He=[];let V=[],y={branch:[],error:null,url:null},ve=!1,Z=!1,xe=!0,M=!1,D=!1,Be=!1,be=!1,Ee,w,k,S,Q;async function Qt(e,t,n){document.URL!==location.href&&(location.href=location.href),$=e,re=St(e),I=document.documentElement,he=t,de=e.nodes[0],W=e.nodes[1],de(),W(),w=history.state?.[N],k=history.state?.[F],w||(w=k=Date.now(),ye.call(history,{...history.state,[N]:w,[F]:k},""));const r=x[w];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Wt(he,n):Yt(location.href,{replaceState:!0}),Jt()}function Ke(e){X.some(t=>t?.snapshot)&&(q[e]=X.map(t=>t?.snapshot?.capture()))}function Ye(e){q[e]?.forEach((t,n)=>{X[n]?.snapshot?.restore(t)})}function Te(){we(w),Re($e,x),Ke(k),Re(je,q)}async function Je(e,t,n,r){return B({type:"goto",url:Ce(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(be=!0)}})}async function Gt(e){return O={id:e.id,promise:Xe(e).then(t=>(t.type==="loaded"&&t.state.error&&(O=null),t))},O.promise}async function fe(e){const t=re.find(n=>n.exec(Ze(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function We(e,t){y=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),S=e.props.page,Ee=new $.root({target:t,props:{...e.props,stores:L,components:X},hydrate:!0}),Ye(k);const r={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};V.forEach(a=>a(r)),Z=!0}async function ee({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(A&&(e.pathname===A||e.pathname===A+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=it(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Dt(n).map(f=>f.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},d=!S,g=0;for(let f=0;f<Math.max(n.length,y.branch.length);f+=1){const h=n[f],p=y.branch[f];h?.data!==p?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:S.data}),c}async function ke({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const g={route:new Proxy(a,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:ut(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const p=new URL(h,n);return o&&d(p.href),p.origin===n.origin&&(h=p.href.slice(n.origin.length)),Z?yt(h,p.href,f):mt(h,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function Ue(e,t,n,r,a,s){if(be)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Ge.some(o=>o(new URL(i))))return!0;return!1}function Se(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function zt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}async function Xe({id:e,invalidating:t,url:n,params:r,route:a}){if(O?.id===e)return O.promise;const{errors:s,layouts:i,leaf:o}=a,c=[...i,o];s.forEach(_=>_?.().catch(()=>{})),c.forEach(_=>_?.[1]().catch(()=>{}));let l=null;const d=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,u=zt(y.url,n);let f=!1;const h=c.map((_,m)=>{const v=y.branch[m],b=!!_?.[0]&&(v?.loader!==_[1]||Ue(f,g,d,u,v.server?.uses,r));return b&&(f=!0),b});if(h.some(Boolean)){try{l=await tt(n,h)}catch(_){return ae({status:J(_),error:await G(_,{url:n,params:r,route:{id:a.id}}),url:n,route:a})}if(l.type==="redirect")return l}const p=l?.nodes;let R=!1;const E=c.map(async(_,m)=>{if(!_)return;const v=y.branch[m],b=p?.[m];if((!b||b.type==="skip")&&_[1]===v?.loader&&!Ue(R,g,d,u,v.universal?.uses,r))return v;if(R=!0,b?.type==="error")throw b;return ke({loader:_[1],url:n,params:r,route:a,parent:async()=>{const oe={};for(let se=0;se<m;se+=1)Object.assign(oe,(await E[se])?.data);return oe},server_data_node:Se(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?v?.server:void 0)})});for(const _ of E)_.catch(()=>{});const P=[];for(let _=0;_<c.length;_+=1)if(c[_])try{P.push(await E[_])}catch(m){if(m instanceof Me)return{type:"redirect",location:m.location};let v=J(m),b;if(p?.includes(m))v=m.status??v,b=m.error;else if(m instanceof ne)b=m.body;else{if(await L.updated.check())return await j(n);b=await G(m,{params:r,url:n,route:{id:a.id}})}const H=await Ht(_,P,s);return H?await ee({url:n,params:r,branch:P.slice(0,H.idx).concat(H.node),status:v,error:b,route:a}):await et(n,{id:a.id},b,v)}else P.push(void 0);return await ee({url:n,params:r,branch:P,status:200,error:null,route:a,form:t?void 0:null})}async function Ht(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:t,url:n,route:r}){const a={};let s=null;if($.server_loads[0]===0)try{const l=await tt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==z||n.pathname!==location.pathname||ve)&&await j(n)}const o=await ke({loader:de,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Se(s)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await ee({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Ae(e,t){if(!e||te(e,A))return;let n;try{n=$.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=Ze(n);for(const a of re){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:t,route:a,params:lt(s),url:e}}}function Ze(e){return ct(e.slice(A.length)||"/")}function Qe({url:e,type:t,intent:n,delta:r}){let a=!1;const s=rt(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return M||ze.forEach(o=>o(i)),a?null:s}async function B({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Pe,block:d=Pe}){const g=Ae(t,!1),u=Qe({url:t,type:e,delta:n?.delta,intent:g});if(!u){d();return}const f=w,h=k;l(),M=!0,Z&&L.navigating.set(u.navigation),Q=c;let p=g&&await Xe(g);if(!p){if(te(t,A))return await j(t);p=await et(t,{id:null},await G(new me(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,Q!==c)return u.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await ae({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Je(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await L.updated.check()&&await j(t);if(Ge.length=0,be=!1,we(f),Ke(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const _=s?0:1,m={[N]:w+=_,[F]:k+=_,[De]:i};(s?ye:qt).call(history,m,"",t),s||Mt(w,k)}if(O=null,p.props.page.state=i,Z){y=p.state,p.props.page&&(p.props.page.url=t);const _=(await Promise.all(He.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){V=V.filter(v=>!_.includes(v))};_.push(m),callbacks.after_navigate.push(..._)}Ee.$set(p.props),Be=!0}else We(p,he);const{activeElement:R}=document;await ot();const E=n?n.scroll:a?_e():null;if(xe){const _=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):_?_.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==R&&document.activeElement!==document.body;!r&&!P&&Xt(),xe=!0,p.props.page&&(S=p.props.page),M=!1,e==="popstate"&&Ye(k),u.fulfil(void 0),V.forEach(_=>_(u.navigation)),L.navigating.set(null)}async function et(e,t,n,r){return e.origin===z&&e.pathname===location.pathname&&!ve?await ae({status:r,error:n,url:e,route:t}):await j(e)}function Bt(){let e;I.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){r(s.composedPath()[0],1)}I.addEventListener("mousedown",t),I.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(fe(i.target.href),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Fe(s,I);if(!o)return;const{url:c,external:l,download:d}=ue(o,A);if(l||d)return;const g=Y(o);if(!g.reload)if(i<=g.preload_data){const u=Ae(c,!1);u&&Gt(u)}else i<=g.preload_code&&fe(c.pathname)}function a(){n.disconnect();for(const s of I.querySelectorAll("a")){const{url:i,external:o,download:c}=ue(s,A);if(o||c)continue;const l=Y(s);l.reload||(l.preload_code===K.viewport&&n.observe(s),l.preload_code===K.eager&&fe(i.pathname))}}V.push(a),a()}function G(e,t){if(e instanceof ne)return e.body;const n=J(e),r=Ft(e);return $.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Kt(e,t){st(()=>(e.push(t),()=>{const n=e.indexOf(t);e.splice(n,1)}))}function en(e){Kt(He,e)}function Yt(e,t={}){return e=Ce(e),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):Je(e,t,0)}function Jt(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Te(),!M){const r=rt(y,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};ze.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Te()}),navigator.connection?.saveData||Bt(),I.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Fe(t.composedPath()[0],I);if(!n)return;const{url:r,external:a,target:s,download:i}=ue(n,A);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=Y(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(a||o.reload){Qe({url:r,type:"link"})?M=!0:t.preventDefault();return}const[l,d]=r.href.split("#");if(d!==void 0&&l===ce(location)){const[,g]=y.url.href.split("#");if(g===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if(D=!0,we(w),e(r),!o.replace_state)return;D=!1}t.preventDefault(),B({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),I.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formMethod||n.method)!=="get")return;const s=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(te(s,A))return;const i=t.target,o=Y(i);if(o.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=r?.getAttribute("name");l&&c.append(l,r?.getAttribute("value")??""),s.search=new URLSearchParams(c).toString(),B({type:"form",url:s,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[N]){const n=t.state[N];if(Q={},n===w)return;const r=x[n],a=t.state[De]??{},s=new URL(t.state[It]??location.href),i=t.state[F],o=ce(location)===ce(y.url);if(i===k&&(Be||o)){e(s),x[w]=_e(),r&&scrollTo(r.x,r.y),a!==S.state&&(S={...S,state:a},Ee.$set({page:S})),w=n;return}const l=n-w;await B({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{w=n,k=i},block:()=>{history.go(-l)},nav_token:Q})}else if(!D){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{D&&(D=!1,ye.call(history,{...history.state,[N]:++w,[F]:k},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){y.url=t,L.page.set({...S,url:t}),L.page.notify()}}async function Wt(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){ve=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ae(c,!1)||{});let l;try{const d=r.map(async(f,h)=>{const p=i[h];return p?.uses&&(p.uses=nt(p.uses)),ke({loader:$.nodes[f],url:c,params:a,route:s,parent:async()=>{const R={};for(let E=0;E<h;E+=1)Object.assign(R,(await d[E]).data);return R},server_data_node:Se(p)})}),g=await Promise.all(d),u=re.find(({id:f})=>f===s.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||g.splice(h,0,void 0)}l=await ee({url:c,params:a,branch:g,status:t,error:n,form:o,route:u??null})}catch(d){if(d instanceof Me){await j(new URL(d.location,location.href));return}l=await ae({status:J(d),error:await G(d,{url:c,params:a,route:s}),url:c,route:s})}l.props.page&&(l.props.page.state={}),We(l,e)}async function tt(e,t){const n=new URL(e);n.pathname=pt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Vt,"1"),n.searchParams.append(Ct,t.map(a=>a?"1":"0").join(""));const r=await Ne(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new ne(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return jt(d,{Promise:g=>new Promise((u,f)=>{s.set(g,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:o.decode(g,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=nt(h.uses),h.data=c(h.data))}),a(f);else if(f.type==="chunk"){const{id:h,data:p,error:R}=f,E=s.get(h);s.delete(h),R?E.reject(c(R)):E.fulfil(c(p))}}}})}function nt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Xt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function rt(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{Qt as a,A as b,en as o,L as s};
