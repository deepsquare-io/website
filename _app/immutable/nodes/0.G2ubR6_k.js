import{N as Ae,s as ce,e as m,a as F,t as Z,c as v,b as g,m as B,g as D,d as J,f as p,o as b,I as Me,i as I,h,n as R,L as K,r as X,k as xe,Z as re,C as he,v as He,_ as N,$ as W,p as Ue,y as qe,z as Pe,A as ze,B as Ve}from"../chunks/scheduler.1ooxUEY4.js";import{S as fe,i as ue,a as j,g as _e,t as Y,c as pe,f as me,h as se,j as oe,b as ve,d as ge,m as we,e as ye}from"../chunks/index.3eSB2vnV.js";import{o as je}from"../chunks/entry.Ere_qGYB.js";import{b as G}from"../chunks/paths.77ARpAW_.js";import{e as O}from"../chunks/each.-oqiv04n.js";import{n as Be}from"../chunks/stores.2b6DJS5h.js";import{l as be}from"../chunks/deepsquare-logo-h-neg.rMQ-dGK2.js";const Re=!0,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Re},Symbol.toStringTag,{value:"Module"}));function Oe(a){const e=a-1;return e*e*e+1}function ee(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}function te(a,{delay:e=0,duration:l=400,easing:f=Ae}={}){const n=+getComputedStyle(a).opacity;return{delay:e,duration:l,easing:f,css:t=>`opacity: ${t*n}`}}function le(a,{delay:e=0,duration:l=400,easing:f=Oe,axis:n="y"}={}){const t=getComputedStyle(a),i=+t.opacity,u=n==="y"?"height":"width",o=parseFloat(t[u]),s=n==="y"?["top","bottom"]:["left","right"],c=s.map($=>`${$[0].toUpperCase()}${$.slice(1)}`),r=parseFloat(t[`padding${c[0]}`]),d=parseFloat(t[`padding${c[1]}`]),k=parseFloat(t[`margin${c[0]}`]),T=parseFloat(t[`margin${c[1]}`]),M=parseFloat(t[`border${c[0]}Width`]),H=parseFloat(t[`border${c[1]}Width`]);return{delay:e,duration:l,easing:f,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*i};${u}: ${$*o}px;padding-${s[0]}: ${$*r}px;padding-${s[1]}: ${$*d}px;margin-${s[0]}: ${$*k}px;margin-${s[1]}: ${$*T}px;border-${s[0]}-width: ${$*M}px;border-${s[1]}-width: ${$*H}px;`}}const Ye=""+new URL("../assets/DeepSquare_White-Paper-1.i4ERyjoA.pdf",import.meta.url).href,Ge=""+new URL("../assets/Yellow-Paper_Tokenize_HPC.O1Nl-coI.pdf",import.meta.url).href,Ne=""+new URL("../assets/deepsquare-logo-h-neg-BIJELI-1.spLi5QPF.svg",import.meta.url).href,We=""+new URL("../assets/poweredby.mS7sYQ_a.svg",import.meta.url).href;function Qe(a){let e,l,f,n,t,i=`<img src="${Ne}" alt="DeepSquare Logo"/>`,u,o,s=`DeepSquare Association, Switzerland, is the founder and holds the initial governance of
					DeepSquare token. The Association’s purpose is to offer goods and services in the fields
					of information and communication technologies, software, hardware, and related consulting
					services.`,c,r,d,k,T,M,H="The DeepSquare Association",$,x,S,q,U,L,y=`<div><div><h5 class="py-4 m-0">Resources</h5></div> <div><aside><nav><ul><li><a style="text-decoration: underline; color: #FFF;" href="${Ye}">Whitepaper</a></li> <li><a style="text-decoration: underline; color: #FFF;" href="${Ge}">Yellow Paper</a></li> <li><a style="text-decoration: underline; color: #FFF;" href="https://docs.deepsquare.run/workflow/overview">Documentation</a></li> <li><a style="text-decoration: underline; color: #FFF;" title="Terms and Conditions" href="${G}/terms-and-conditions">Terms and Conditions</a></li> <li><a style="text-decoration: underline; color: #FFF;" title="Privacy Policy" rel="privacy-policy" href="${G}/privacy-policy">Privacy Policy</a></li></ul></nav></aside></div></div>`,w,_,C=`<h5 class="py-4 m-0">Contact Us</h5> <p><a style="color: #FFF;" href="https://www.google.com/maps/place/Gotthardstrasse+26,+6300+Zug,+Switzerland"><span class="material-symbols-outlined">location_on</span> DeepSquare Association, Gotthardstrasse
					26, 6300 Zug, Switzerland</a></p> <p><a style="color: #FFF;" href="https://share-eu1.hsforms.com/1uKsDKrlhRnGk3UeUEz7DLgev6gi"><span class="material-symbols-outlined">contact_page</span> External Contact Form
					<span class="material-symbols-outlined">arrow_outward</span></a></p>`;return{c(){e=m("footer"),l=m("div"),f=m("div"),n=m("div"),t=m("div"),t.innerHTML=i,u=F(),o=m("p"),o.textContent=s,c=F(),r=m("p"),d=Z("Copyright © "),k=Z(a[0]),T=Z(" – "),M=m("b"),M.textContent=H,$=Z(" – CHE-130.663.967, Switzerland."),x=F(),S=m("img"),U=F(),L=m("div"),L.innerHTML=y,w=F(),_=m("div"),_.innerHTML=C,this.h()},l(E){e=v(E,"FOOTER",{class:!0});var A=g(e);l=v(A,"DIV",{class:!0});var V=g(l);f=v(V,"DIV",{class:!0});var Q=g(f);n=v(Q,"DIV",{});var P=g(n);t=v(P,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-18l923s"&&(t.innerHTML=i),u=D(P),o=v(P,"P",{"data-svelte-h":!0}),B(o)!=="svelte-3filym"&&(o.textContent=s),c=D(P),r=v(P,"P",{});var z=g(r);d=J(z,"Copyright © "),k=J(z,a[0]),T=J(z," – "),M=v(z,"B",{"data-svelte-h":!0}),B(M)!=="svelte-ydanjl"&&(M.textContent=H),$=J(z," – CHE-130.663.967, Switzerland."),z.forEach(p),x=D(P),S=v(P,"IMG",{src:!0,alt:!0}),P.forEach(p),Q.forEach(p),U=D(V),L=v(V,"DIV",{"data-svelte-h":!0}),B(L)!=="svelte-1wkhhaa"&&(L.innerHTML=y),w=D(V),_=v(V,"DIV",{"data-svelte-h":!0}),B(_)!=="svelte-7dzdxt"&&(_.innerHTML=C),V.forEach(p),A.forEach(p),this.h()},h(){b(t,"class","py-4"),Me(S.src,q=We)||b(S,"src",q),b(S,"alt","Powered by Avalanche"),b(f,"class","md:col-span-2"),b(l,"class","grid md:grid-cols-4 justify-around content-start place-items-center"),b(e,"class","pt-4")},m(E,A){I(E,e,A),h(e,l),h(l,f),h(f,n),h(n,t),h(n,u),h(n,o),h(n,c),h(n,r),h(r,d),h(r,k),h(r,T),h(r,M),h(r,$),h(n,x),h(n,S),h(l,U),h(l,L),h(l,w),h(l,_)},p:R,i:R,o:R,d(E){E&&p(e)}}}function Ze(a){return[new Date().getFullYear()]}class Je extends fe{constructor(e){super(),ue(this,e,Ze,Qe,ce,{})}}function ke(a,e,l){const f=a.slice();return f[9]=e[l],f}function $e(a,e,l){const f=a.slice();return f[12]=e[l],f}function Ee(a,e,l){const f=a.slice();return f[9]=e[l],f}function Le(a,e,l){const f=a.slice();return f[12]=e[l],f}function Te(a){let e,l,f=`<li class="lg:hidden"><a href="${G+"/"}"><img height="100" width="200" src="${be}" alt="DeepSquare Logo"/></a></li>`,n,t,i,u=`<a href="${G+"/"}"><img height="100" width="200" src="${be}" alt="DeepSquare Logo"/></a>`,o,s,c,r,d,k,T,M='<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>',H,$,x,S,q,U=O(a[5]),L=[];for(let y=0;y<U.length;y+=1)L[y]=De(Ee(a,U,y));return{c(){e=m("nav"),l=m("ul"),l.innerHTML=f,n=F(),t=m("ul"),i=m("li"),i.innerHTML=u,o=F();for(let y=0;y<L.length;y+=1)L[y].c();s=F(),c=m("ul"),r=F(),d=m("ul"),k=m("li"),T=m("a"),T.innerHTML=M,this.h()},l(y){e=v(y,"NAV",{"data-theme":!0,class:!0});var w=g(e);l=v(w,"UL",{"data-svelte-h":!0}),B(l)!=="svelte-1gc33at"&&(l.innerHTML=f),n=D(w),t=v(w,"UL",{class:!0});var _=g(t);i=v(_,"LI",{"data-svelte-h":!0}),B(i)!=="svelte-1c1a2p5"&&(i.innerHTML=u),o=D(_);for(let A=0;A<L.length;A+=1)L[A].l(_);_.forEach(p),s=D(w),c=v(w,"UL",{}),g(c).forEach(p),r=D(w),d=v(w,"UL",{class:!0});var C=g(d);k=v(C,"LI",{});var E=g(k);T=v(E,"A",{href:!0,"data-svelte-h":!0}),B(T)!=="svelte-ls097y"&&(T.innerHTML=M),E.forEach(p),C.forEach(p),w.forEach(p),this.h()},h(){b(t,"class","hidden lg:flex"),b(T,"href","#"),b(d,"class","lg:hidden"),b(e,"data-theme","dark"),b(e,"class",H="fixed inset-x-0 top-0 z-50 px-8 "+(a[3]?"bg-nav-top":"bg-nav-scrolled shadow-lg"))},m(y,w){I(y,e,w),h(e,l),h(e,n),h(e,t),h(t,i),h(t,o);for(let _=0;_<L.length;_+=1)L[_]&&L[_].m(t,null);h(e,s),h(e,c),h(e,r),h(e,d),h(d,k),h(k,T),x=!0,S||(q=X(T,"click",a[4]),S=!0)},p(y,w){if(w&32){U=O(y[5]);let _;for(_=0;_<U.length;_+=1){const C=Ee(y,U,_);L[_]?L[_].p(C,w):(L[_]=De(C),L[_].c(),L[_].m(t,null))}for(;_<L.length;_+=1)L[_].d(1);L.length=U.length}(!x||w&8&&H!==(H="fixed inset-x-0 top-0 z-50 px-8 "+(y[3]?"bg-nav-top":"bg-nav-scrolled shadow-lg")))&&b(e,"class",H)},i(y){x||(y&&K(()=>{x&&($||($=me(e,le,{duration:200,easing:ee,axis:"y"},!0)),$.run(1))}),x=!0)},o(y){y&&($||($=me(e,le,{duration:200,easing:ee,axis:"y"},!1)),$.run(0)),x=!1},d(y){y&&p(e),re(L,y),y&&$&&$.end(),S=!1,q()}}}function Ke(a){let e,l,f,n=a[9].name+"",t,i,u,o=O(a[9].children),s=[];for(let c=0;c<o.length;c+=1)s[c]=Fe(Le(a,o,c));return{c(){e=m("li"),l=m("a"),f=new N(!1),t=F(),i=m("ul");for(let c=0;c<s.length;c+=1)s[c].c();u=F(),this.h()},l(c){e=v(c,"LI",{role:!0,dir:!0});var r=g(e);l=v(r,"A",{});var d=g(l);f=W(d,!1),d.forEach(p),t=D(r),i=v(r,"UL",{role:!0});var k=g(i);for(let T=0;T<s.length;T+=1)s[T].l(k);k.forEach(p),u=D(r),r.forEach(p),this.h()},h(){f.a=null,b(i,"role","listbox"),b(e,"role","list"),b(e,"dir","rtl")},m(c,r){I(c,e,r),h(e,l),f.m(n,l),h(e,t),h(e,i);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(i,null);h(e,u)},p(c,r){if(r&32){o=O(c[9].children);let d;for(d=0;d<o.length;d+=1){const k=Le(c,o,d);s[d]?s[d].p(k,r):(s[d]=Fe(k),s[d].c(),s[d].m(i,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=o.length}},d(c){c&&p(e),re(s,c)}}}function Xe(a){let e,l;function f(i,u){return i[9].icon?tt:et}let t=f(a)(a);return{c(){e=m("li"),t.c(),l=F()},l(i){e=v(i,"LI",{});var u=g(e);t.l(u),l=D(u),u.forEach(p)},m(i,u){I(i,e,u),t.m(e,null),h(e,l)},p(i,u){t.p(i,u)},d(i){i&&p(e),t.d()}}}function Fe(a){let e,l,f,n=a[12].name+"";return{c(){e=m("li"),l=m("a"),f=new N(!1),this.h()},l(t){e=v(t,"LI",{});var i=g(e);l=v(i,"A",{href:!0});var u=g(l);f=W(u,!1),u.forEach(p),i.forEach(p),this.h()},h(){f.a=null,b(l,"href",a[12].href)},m(t,i){I(t,e,i),h(e,l),f.m(n,l)},p:R,d(t){t&&p(e)}}}function et(a){let e,l,f=a[9].name+"";return{c(){e=m("a"),l=new N(!1),this.h()},l(n){e=v(n,"A",{role:!0,href:!0});var t=g(e);l=W(t,!1),t.forEach(p),this.h()},h(){l.a=null,b(e,"role",a[9].isButton?"button":void 0),b(e,"href",a[9].href)},m(n,t){I(n,e,t),l.m(f,e)},p:R,d(n){n&&p(e)}}}function tt(a){let e,l,f=a[9].icon+"";return{c(){e=m("a"),l=new N(!1),this.h()},l(n){e=v(n,"A",{href:!0});var t=g(e);l=W(t,!1),t.forEach(p),this.h()},h(){l.a=null,b(e,"href",a[9].href)},m(n,t){I(n,e,t),l.m(f,e)},p:R,d(n){n&&p(e)}}}function De(a){let e;function l(t,i){if(t[9].href)return Xe;if(t[9].children)return Ke}let f=l(a),n=f&&f(a);return{c(){n&&n.c(),e=he()},l(t){n&&n.l(t),e=he()},m(t,i){n&&n.m(t,i),I(t,e,i)},p(t,i){n&&n.p(t,i)},d(t){t&&p(e),n&&n.d(t)}}}function Ce(a){let e,l,f,n,t,i,u,o,s,c,r,d,k,T='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',M,H,$,x,S,q,U,L,y=O(a[5]),w=[];for(let _=0;_<y.length;_+=1)w[_]=Se(ke(a,y,_));return{c(){e=m("div"),l=m("div"),f=F(),n=m("div"),t=m("div"),i=m("div"),u=F(),o=m("article"),s=m("aside"),c=m("nav"),r=m("ul"),d=m("li"),k=m("a"),k.innerHTML=T,M=F();for(let _=0;_<w.length;_+=1)w[_].c();this.h()},l(_){e=v(_,"DIV",{class:!0});var C=g(e);l=v(C,"DIV",{class:!0}),g(l).forEach(p),f=D(C),n=v(C,"DIV",{class:!0});var E=g(n);t=v(E,"DIV",{class:!0});var A=g(t);i=v(A,"DIV",{class:!0}),g(i).forEach(p),u=D(A),o=v(A,"ARTICLE",{class:!0});var V=g(o);s=v(V,"ASIDE",{});var Q=g(s);c=v(Q,"NAV",{"data-theme":!0});var P=g(c);r=v(P,"UL",{});var z=g(r);d=v(z,"LI",{class:!0});var de=g(d);k=v(de,"A",{href:!0,"data-svelte-h":!0}),B(k)!=="svelte-5ma53d"&&(k.innerHTML=T),de.forEach(p),M=D(z);for(let ae=0;ae<w.length;ae+=1)w[ae].l(z);z.forEach(p),P.forEach(p),Q.forEach(p),V.forEach(p),A.forEach(p),E.forEach(p),C.forEach(p),this.h()},h(){b(l,"class","fixed bg-black inset-0 opacity-75 h-screen w-screen"),b(i,"class","hidden sm:block"),b(k,"href","#"),b(d,"class","flex justify-end"),b(c,"data-theme","dark"),b(o,"class","m-0 bg-nav-floating"),b(t,"class","w-full grid sm:grid-cols-2"),b(n,"class","fixed inset-0 flex flex-row-reverse h-screen"),b(e,"class","lg:hidden fixed inset-0 z-50 relative")},m(_,C){I(_,e,C),h(e,l),h(e,f),h(e,n),h(n,t),h(t,i),h(t,u),h(t,o),h(o,s),h(s,c),h(c,r),h(r,d),h(d,k),h(r,M);for(let E=0;E<w.length;E+=1)w[E]&&w[E].m(r,null);q=!0,U||(L=[X(i,"click",a[4]),X(k,"click",a[4])],U=!0)},p(_,C){if(a=_,C&32){y=O(a[5]);let E;for(E=0;E<y.length;E+=1){const A=ke(a,y,E);w[E]?w[E].p(A,C):(w[E]=Se(A),w[E].c(),w[E].m(r,null))}for(;E<w.length;E+=1)w[E].d(1);w.length=y.length}},i(_){q||(_&&K(()=>{q&&($&&$.end(1),H=se(t,le,{delay:ne,duration:ne,easing:ee,axis:"x"}),H.start())}),_&&K(()=>{q&&(S&&S.end(1),x=se(e,te,{duration:ne}),x.start())}),q=!0)},o(_){H&&H.invalidate(),_&&($=oe(t,le,{duration:ie,easing:ee,axis:"x"})),x&&x.invalidate(),_&&(S=oe(e,te,{delay:ie,duration:ie})),q=!1},d(_){_&&p(e),re(w,_),_&&$&&$.end(),_&&S&&S.end(),U=!1,He(L)}}}function lt(a){let e,l,f=a[9].name+"",n,t,i,u=O(a[9].children),o=[];for(let s=0;s<u.length;s+=1)o[s]=Ie($e(a,u,s));return{c(){e=m("details"),l=m("summary"),n=Z(f),t=F(),i=m("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=v(s,"DETAILS",{});var c=g(e);l=v(c,"SUMMARY",{});var r=g(l);n=J(r,f),r.forEach(p),t=D(c),i=v(c,"UL",{style:!0});var d=g(i);for(let k=0;k<o.length;k+=1)o[k].l(d);d.forEach(p),c.forEach(p),this.h()},h(){Ue(i,"text-align","end")},m(s,c){I(s,e,c),h(e,l),h(l,n),h(e,t),h(e,i);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(i,null)},p(s,c){if(c&32){u=O(s[9].children);let r;for(r=0;r<u.length;r+=1){const d=$e(s,u,r);o[r]?o[r].p(d,c):(o[r]=Ie(d),o[r].c(),o[r].m(i,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=u.length}},d(s){s&&p(e),re(o,s)}}}function rt(a){let e,l,f=a[9].name+"",n,t,i=(a[9].icon??"")+"";return{c(){e=m("a"),l=new N(!1),n=F(),t=new N(!1),this.h()},l(u){e=v(u,"A",{role:!0,href:!0});var o=g(e);l=W(o,!1),n=D(o),t=W(o,!1),o.forEach(p),this.h()},h(){l.a=n,t.a=null,b(e,"role",a[9].isButton?"button":void 0),b(e,"href",a[9].href)},m(u,o){I(u,e,o),l.m(f,e),h(e,n),t.m(i,e)},p:R,d(u){u&&p(e)}}}function Ie(a){let e,l,f,n=a[12].name+"";return{c(){e=m("li"),l=m("a"),f=new N(!1),this.h()},l(t){e=v(t,"LI",{});var i=g(e);l=v(i,"A",{href:!0});var u=g(l);f=W(u,!1),u.forEach(p),i.forEach(p),this.h()},h(){f.a=null,b(l,"href",a[12].href)},m(t,i){I(t,e,i),h(e,l),f.m(n,l)},p:R,d(t){t&&p(e)}}}function Se(a){let e,l;function f(i,u){if(i[9].href)return rt;if(i[9].children)return lt}let n=f(a),t=n&&n(a);return{c(){e=m("li"),t&&t.c(),l=F(),this.h()},l(i){e=v(i,"LI",{class:!0});var u=g(e);t&&t.l(u),l=D(u),u.forEach(p),this.h()},h(){b(e,"class","flex justify-end")},m(i,u){I(i,e,u),t&&t.m(e,null),h(e,l)},p(i,u){t&&t.p(i,u)},d(i){i&&p(e),t&&t.d()}}}function at(a){let e=!1,l=()=>{e=!1},f,n,t,i,u;K(a[8]);let o=a[2]&&Te(a),s=a[1]&&Ce(a);return{c(){n=m("header"),o&&o.c(),t=F(),s&&s.c(),this.h()},l(c){n=v(c,"HEADER",{class:!0});var r=g(n);o&&o.l(r),t=D(r),s&&s.l(r),r.forEach(p),this.h()},h(){b(n,"class","svelte-ipzaj3")},m(c,r){I(c,n,r),o&&o.m(n,null),h(n,t),s&&s.m(n,null),i||(u=X(window,"scroll",()=>{e=!0,clearTimeout(f),f=setTimeout(l,100),a[8]()}),i=!0)},p(c,[r]){r&1&&!e&&(e=!0,clearTimeout(f),scrollTo(window.pageXOffset,c[0]),f=setTimeout(l,100)),c[2]?o?(o.p(c,r),r&4&&j(o,1)):(o=Te(c),o.c(),j(o,1),o.m(n,t)):o&&(_e(),Y(o,1,1,()=>{o=null}),pe()),c[1]?s?(s.p(c,r),r&2&&j(s,1)):(s=Ce(c),s.c(),j(s,1),s.m(n,null)):s&&(_e(),Y(s,1,1,()=>{s=null}),pe())},i(c){j(o),j(s)},o(c){Y(o),Y(s)},d(c){c&&p(n),o&&o.d(),s&&s.d(),i=!1,u()}}}const ne=200,ie=200;function nt(a,e,l){let f;xe(a,Be,d=>l(7,f=d));let n=!1;function t(){l(1,n=!n)}let i=0,u=0,o=!0,s=!0;const c=[{name:"Home",href:G+"/"},{name:"Solutions",href:G+"/solutions"},{name:"About Us",href:G+"/story"},{name:'Blog <span class="material-symbols-outlined">arrow_outward</span>',href:"https://medium.com/@DeepSquare.io"},{name:'Get Started <span class="material-symbols-outlined">arrow_outward</span>',href:"https://docs.deepsquare.run/workflow/overview"},{name:"GitHub",icon:'<i class="fa-brands fa-github"></i>',href:"https://github.com/deepsquare-io/grid"},{name:"Telegram",icon:'<i class="fa-brands fa-telegram"></i>',href:"https://t.me/DeepSquareProject"},{name:"Discord",icon:'<i class="fa-brands fa-discord"></i>',href:"https://discord.com/invite/3PQkJGvUGB"}];function r(){l(0,u=window.pageYOffset)}return a.$$.update=()=>{a.$$.dirty&65&&(l(3,s=u<=100),l(2,o=i>u||u<100),l(6,i=u)),a.$$.dirty&128&&f&&l(1,n=!1)},[u,n,o,s,t,c,i,f,r]}class it extends fe{constructor(e){super(),ue(this,e,nt,at,ce,{})}}function st(a){let e,l,f,n,t,i,u,o;e=new it({});const s=a[1].default,c=qe(s,a,a[0],null);return u=new Je({}),{c(){ve(e.$$.fragment),l=F(),f=m("main"),c&&c.c(),i=F(),ve(u.$$.fragment)},l(r){ge(e.$$.fragment,r),l=D(r),f=v(r,"MAIN",{});var d=g(f);c&&c.l(d),d.forEach(p),i=D(r),ge(u.$$.fragment,r)},m(r,d){we(e,r,d),I(r,l,d),I(r,f,d),c&&c.m(f,null),I(r,i,d),we(u,r,d),o=!0},p(r,[d]){c&&c.p&&(!o||d&1)&&Pe(c,s,r,r[0],o?Ve(s,r[0],d,null):ze(r[0]),null)},i(r){o||(j(e.$$.fragment,r),j(c,r),r&&K(()=>{o&&(t&&t.end(1),n=se(f,te,{duration:50,delay:50}),n.start())}),j(u.$$.fragment,r),o=!0)},o(r){Y(e.$$.fragment,r),Y(c,r),n&&n.invalidate(),r&&(t=oe(f,te,{duration:50})),Y(u.$$.fragment,r),o=!1},d(r){r&&(p(l),p(f),p(i)),ye(e,r),c&&c.d(r),r&&t&&t.end(),ye(u,r)}}}function ot(a,e,l){let{$$slots:f={},$$scope:n}=e;return je(t=>{if(document.startViewTransition)return new Promise(i=>{document.startViewTransition(async()=>{i(),await t.complete})})}),a.$$set=t=>{"$$scope"in t&&l(0,n=t.$$scope)},[n,f]}class vt extends fe{constructor(e){super(),ue(this,e,ot,st,ce,{})}}export{vt as component,mt as universal};
