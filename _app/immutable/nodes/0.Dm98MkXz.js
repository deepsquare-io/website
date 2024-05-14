import{l as Se,s as ue,n as O,h as ee,c as He,r as Me,d as Ae,u as qe,g as Ue,f as Ve}from"../chunks/scheduler.srpzDMQS.js";import{S as fe,i as de,e as m,s as T,t as J,c as v,a as y,l as P,f as x,b as Q,d as _,m as g,g as I,h as d,n as te,r as R,o as he,p as K,q as _e,B as pe,C as ae,v as me,D as se,E as ce,H as Z,F as X,u as ze,x as ve,y as ge,z as we,A as ye}from"../chunks/index.bKFwj_Nf.js";import{b as N,o as Pe}from"../chunks/entry.lHBsobiK.js";import{e as Y}from"../chunks/each.D6YF6ztN.js";import{n as Be}from"../chunks/stores.DZCfIZb-.js";const Re=!0,_t=Object.freeze(Object.defineProperty({__proto__:null,prerender:Re},Symbol.toStringTag,{value:"Module"}));function je(l){const e=l-1;return e*e*e+1}function le(l){return(l*=2)<1?.5*l*l*l*l*l:.5*((l-=2)*l*l*l*l+2)}function re(l,{delay:e=0,duration:r=400,easing:u=Se}={}){const a=+getComputedStyle(l).opacity;return{delay:e,duration:r,easing:u,css:t=>`opacity: ${t*a}`}}function ne(l,{delay:e=0,duration:r=400,easing:u=je,axis:a="y"}={}){const t=getComputedStyle(l),i=+t.opacity,f=a==="y"?"height":"width",o=parseFloat(t[f]),s=a==="y"?["top","bottom"]:["left","right"],c=s.map(E=>`${E[0].toUpperCase()}${E.slice(1)}`),n=parseFloat(t[`padding${c[0]}`]),h=parseFloat(t[`padding${c[1]}`]),k=parseFloat(t[`margin${c[0]}`]),C=parseFloat(t[`margin${c[1]}`]),U=parseFloat(t[`border${c[0]}Width`]),S=parseFloat(t[`border${c[1]}Width`]);return{delay:e,duration:r,easing:u,css:E=>`overflow: hidden;opacity: ${Math.min(E*20,1)*i};${f}: ${E*o}px;padding-${s[0]}: ${E*n}px;padding-${s[1]}: ${E*h}px;margin-${s[0]}: ${E*k}px;margin-${s[1]}: ${E*C}px;border-${s[0]}-width: ${E*U}px;border-${s[1]}-width: ${E*S}px;`}}const Oe="37c2cb3",Ye=""+new URL("../assets/DeepSquare_White-Paper-1.CLgRHKOg.pdf",import.meta.url).href,Ge=""+new URL("../assets/Yellow-Paper_Tokenize_HPC.7U2X5ygj.pdf",import.meta.url).href,We=""+new URL("../assets/deepsquare-logo-h-neg-BIJELI-1.CykuLlA8.svg",import.meta.url).href,Ke=""+new URL("../assets/poweredby.CZLuxhD9.svg",import.meta.url).href;function Ne(l){let e,r,u,a,t,i=`<img src="${We}" alt="DeepSquare Logo"/>`,f,o,s=`DeepSquare Association, Switzerland, is the founder and holds the initial governance of
					DeepSquare token. The Association’s purpose is to offer goods and services in the fields
					of information and communication technologies, software, hardware, and related consulting
					services.`,c,n,h=`Built on commit ${Oe} –`,k,C,U,S,E,H="The DeepSquare Association",A,q,F,L=`<img src="${Ke}" alt="Powered by Avalanche"/>`,b,w,p=`<div><div><h5 class="m-0 py-4">Resources</h5></div> <div><aside><nav><ul><li><a style="text-decoration: underline; color: #FFF;" href="${Ye}">Whitepaper</a></li> <li><a style="text-decoration: underline; color: #FFF;" href="${Ge}">Yellow Paper</a></li> <li><a style="text-decoration: underline; color: #FFF;" target="_blank" rel="noopener" href="https://docs.deepsquare.run/workflow/overview">Documentation</a></li> <li><a style="text-decoration: underline; color: #FFF;" title="Terms and Conditions" href="${N}/terms-and-conditions">Terms and Conditions</a></li> <li><a style="text-decoration: underline; color: #FFF;" title="Privacy Policy" rel="privacy-policy" href="${N}/privacy-policy">Privacy Policy</a></li></ul></nav></aside></div></div>`,D,$,M=`<h5 class="m-0 py-4">Contact Us</h5> <p><a style="color: #FFF;" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Gotthardstrasse+26,+6300+Zug,+Switzerland"><span class="material-symbols-outlined">location_on</span> DeepSquare Association, Gotthardstrasse
					26, 6300 Zug, Switzerland</a></p> <p><a target="_blank" rel="noopener" style="color: #FFF;" href="https://share-eu1.hsforms.com/1uKsDKrlhRnGk3UeUEz7DLgev6gi"><span class="material-symbols-outlined">contact_page</span> External Contact Form
					<span class="material-symbols-outlined">arrow_outward</span></a></p>`;return{c(){e=m("footer"),r=m("div"),u=m("div"),a=m("div"),t=m("div"),t.innerHTML=i,f=T(),o=m("p"),o.textContent=s,c=T(),n=m("p"),k=J(h),C=J(" Copyright © "),U=J(l[0]),S=J(` –
					`),E=m("b"),E.textContent=H,A=J(" – CHE-130.663.967, Switzerland."),q=T(),F=m("div"),F.innerHTML=L,b=T(),w=m("div"),w.innerHTML=p,D=T(),$=m("div"),$.innerHTML=M,this.h()},l(j){e=v(j,"FOOTER",{class:!0});var G=y(e);r=v(G,"DIV",{class:!0});var B=y(r);u=v(B,"DIV",{class:!0});var W=y(u);a=v(W,"DIV",{});var V=y(a);t=v(V,"DIV",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-18l923s"&&(t.innerHTML=i),f=x(V),o=v(V,"P",{"data-svelte-h":!0}),P(o)!=="svelte-3filym"&&(o.textContent=s),c=x(V),n=v(V,"P",{});var z=y(n);k=Q(z,h),C=Q(z," Copyright © "),U=Q(z,l[0]),S=Q(z,` –
					`),E=v(z,"B",{"data-svelte-h":!0}),P(E)!=="svelte-ydanjl"&&(E.textContent=H),A=Q(z," – CHE-130.663.967, Switzerland."),z.forEach(_),q=x(V),F=v(V,"DIV",{"data-svelte-h":!0}),P(F)!=="svelte-1jluxi5"&&(F.innerHTML=L),V.forEach(_),W.forEach(_),b=x(B),w=v(B,"DIV",{"data-svelte-h":!0}),P(w)!=="svelte-18sx9ev"&&(w.innerHTML=p),D=x(B),$=v(B,"DIV",{"data-svelte-h":!0}),P($)!=="svelte-12ca8kf"&&($.innerHTML=M),B.forEach(_),G.forEach(_),this.h()},h(){g(t,"class","py-4"),g(u,"class","md:col-span-2"),g(r,"class","grid place-items-center content-start justify-around md:grid-cols-4"),g(e,"class","pt-4")},m(j,G){I(j,e,G),d(e,r),d(r,u),d(u,a),d(a,t),d(a,f),d(a,o),d(a,c),d(a,n),d(n,k),d(n,C),d(n,U),d(n,S),d(n,E),d(n,A),d(a,q),d(a,F),d(r,b),d(r,w),d(r,D),d(r,$)},p:O,i:O,o:O,d(j){j&&_(e)}}}function Ze(l){return[new Date().getFullYear()]}class Xe extends fe{constructor(e){super(),de(this,e,Ze,Ne,ue,{})}}const be=""+new URL("../assets/deepsquare-logo-h-neg.oGKz7aM1.svg",import.meta.url).href;function Ee(l,e,r){const u=l.slice();return u[9]=e[r],u}function ke(l,e,r){const u=l.slice();return u[12]=e[r],u}function $e(l,e,r){const u=l.slice();return u[9]=e[r],u}function Le(l,e,r){const u=l.slice();return u[12]=e[r],u}function Te(l){let e,r,u=`<li class="lg:hidden"><a href="${N+"/"}"><img height="100" width="200" src="${be}" alt="DeepSquare Logo"/></a></li>`,a,t,i,f=`<a href="${N+"/"}"><img height="100" width="200" src="${be}" alt="DeepSquare Logo"/></a>`,o,s,c,n,h,k,C,U='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>',S,E,H,A,q,F=Y(l[5]),L=[];for(let b=0;b<F.length;b+=1)L[b]=Ce($e(l,F,b));return{c(){e=m("nav"),r=m("ul"),r.innerHTML=u,a=T(),t=m("ul"),i=m("li"),i.innerHTML=f,o=T();for(let b=0;b<L.length;b+=1)L[b].c();s=T(),c=m("ul"),n=T(),h=m("ul"),k=m("li"),C=m("a"),C.innerHTML=U,this.h()},l(b){e=v(b,"NAV",{"data-theme":!0,class:!0});var w=y(e);r=v(w,"UL",{"data-svelte-h":!0}),P(r)!=="svelte-1gc33at"&&(r.innerHTML=u),a=x(w),t=v(w,"UL",{class:!0});var p=y(t);i=v(p,"LI",{"data-svelte-h":!0}),P(i)!=="svelte-1c1a2p5"&&(i.innerHTML=f),o=x(p);for(let M=0;M<L.length;M+=1)L[M].l(p);p.forEach(_),s=x(w),c=v(w,"UL",{}),y(c).forEach(_),n=x(w),h=v(w,"UL",{class:!0});var D=y(h);k=v(D,"LI",{});var $=y(k);C=v($,"A",{href:!0,"data-svelte-h":!0}),P(C)!=="svelte-1outaza"&&(C.innerHTML=U),$.forEach(_),D.forEach(_),w.forEach(_),this.h()},h(){g(t,"class","hidden lg:flex"),g(C,"href","#"),g(h,"class","lg:hidden"),g(e,"data-theme","dark"),g(e,"class",S="fixed inset-x-0 top-0 z-50 px-8 "+(l[3]?"bg-nav-top":"bg-nav-scrolled shadow-lg"))},m(b,w){I(b,e,w),d(e,r),d(e,a),d(e,t),d(t,i),d(t,o);for(let p=0;p<L.length;p+=1)L[p]&&L[p].m(t,null);d(e,s),d(e,c),d(e,n),d(e,h),d(h,k),d(k,C),H=!0,A||(q=te(C,"click",l[4]),A=!0)},p(b,w){if(w&32){F=Y(b[5]);let p;for(p=0;p<F.length;p+=1){const D=$e(b,F,p);L[p]?L[p].p(D,w):(L[p]=Ce(D),L[p].c(),L[p].m(t,null))}for(;p<L.length;p+=1)L[p].d(1);L.length=F.length}(!H||w&8&&S!==(S="fixed inset-x-0 top-0 z-50 px-8 "+(b[3]?"bg-nav-top":"bg-nav-scrolled shadow-lg")))&&g(e,"class",S)},i(b){H||(b&&ee(()=>{H&&(E||(E=pe(e,ne,{duration:200,easing:le,axis:"y"},!0)),E.run(1))}),H=!0)},o(b){b&&(E||(E=pe(e,ne,{duration:200,easing:le,axis:"y"},!1)),E.run(0)),H=!1},d(b){b&&_(e),ae(L,b),b&&E&&E.end(),A=!1,q()}}}function Je(l){let e,r,u,a=l[9].name+"",t,i,f,o=Y(l[9].children),s=[];for(let c=0;c<o.length;c+=1)s[c]=xe(Le(l,o,c));return{c(){e=m("li"),r=m("a"),u=new Z(!1),t=T(),i=m("ul");for(let c=0;c<s.length;c+=1)s[c].c();f=T(),this.h()},l(c){e=v(c,"LI",{role:!0,dir:!0});var n=y(e);r=v(n,"A",{});var h=y(r);u=X(h,!1),h.forEach(_),t=x(n),i=v(n,"UL",{role:!0});var k=y(i);for(let C=0;C<s.length;C+=1)s[C].l(k);k.forEach(_),f=x(n),n.forEach(_),this.h()},h(){u.a=null,g(i,"role","listbox"),g(e,"role","list"),g(e,"dir","rtl")},m(c,n){I(c,e,n),d(e,r),u.m(a,r),d(e,t),d(e,i);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(i,null);d(e,f)},p(c,n){if(n&32){o=Y(c[9].children);let h;for(h=0;h<o.length;h+=1){const k=Le(c,o,h);s[h]?s[h].p(k,n):(s[h]=xe(k),s[h].c(),s[h].m(i,null))}for(;h<s.length;h+=1)s[h].d(1);s.length=o.length}},d(c){c&&_(e),ae(s,c)}}}function Qe(l){let e,r;function u(i,f){return i[9].icon?tt:et}let t=u(l)(l);return{c(){e=m("li"),t.c(),r=T()},l(i){e=v(i,"LI",{});var f=y(e);t.l(f),r=x(f),f.forEach(_)},m(i,f){I(i,e,f),t.m(e,null),d(e,r)},p(i,f){t.p(i,f)},d(i){i&&_(e),t.d()}}}function xe(l){let e,r,u,a=l[12].name+"",t;return{c(){e=m("li"),r=m("a"),u=new Z(!1),t=T(),this.h()},l(i){e=v(i,"LI",{});var f=y(e);r=v(f,"A",{href:!0,target:!0,rel:!0});var o=y(r);u=X(o,!1),o.forEach(_),t=x(f),f.forEach(_),this.h()},h(){u.a=null,g(r,"href",l[12].href),g(r,"target",l[12].isExternal?"_blank":void 0),g(r,"rel",l[12].isExternal?"noopener noreferrer":void 0)},m(i,f){I(i,e,f),d(e,r),u.m(a,r),d(e,t)},p:O,d(i){i&&_(e)}}}function et(l){let e,r,u=l[9].name+"";return{c(){e=m("a"),r=new Z(!1),this.h()},l(a){e=v(a,"A",{role:!0,href:!0,target:!0,rel:!0});var t=y(e);r=X(t,!1),t.forEach(_),this.h()},h(){r.a=null,g(e,"role",l[9].isButton?"button":void 0),g(e,"href",l[9].href),g(e,"target",l[9].isExternal?"_blank":void 0),g(e,"rel",l[9].isExternal?"noopener noreferrer":void 0)},m(a,t){I(a,e,t),r.m(u,e)},p:O,d(a){a&&_(e)}}}function tt(l){let e,r,u=l[9].icon+"";return{c(){e=m("a"),r=new Z(!1),this.h()},l(a){e=v(a,"A",{href:!0,target:!0,rel:!0});var t=y(e);r=X(t,!1),t.forEach(_),this.h()},h(){r.a=null,g(e,"href",l[9].href),g(e,"target",l[9].isExternal?"_blank":void 0),g(e,"rel",l[9].isExternal?"noopener noreferrer":void 0)},m(a,t){I(a,e,t),r.m(u,e)},p:O,d(a){a&&_(e)}}}function Ce(l){let e;function r(t,i){if(t[9].href)return Qe;if(t[9].children)return Je}let u=r(l),a=u&&u(l);return{c(){a&&a.c(),e=me()},l(t){a&&a.l(t),e=me()},m(t,i){a&&a.m(t,i),I(t,e,i)},p(t,i){a&&a.p(t,i)},d(t){t&&_(e),a&&a.d(t)}}}function De(l){let e,r,u,a,t,i,f,o,s,c,n,h,k,C='<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',U,S,E,H,A,q,F,L,b=Y(l[5]),w=[];for(let p=0;p<b.length;p+=1)w[p]=Ie(Ee(l,b,p));return{c(){e=m("div"),r=m("div"),u=T(),a=m("div"),t=m("div"),i=m("div"),f=T(),o=m("article"),s=m("aside"),c=m("nav"),n=m("ul"),h=m("li"),k=m("a"),k.innerHTML=C,U=T();for(let p=0;p<w.length;p+=1)w[p].c();this.h()},l(p){e=v(p,"DIV",{class:!0});var D=y(e);r=v(D,"DIV",{class:!0}),y(r).forEach(_),u=x(D),a=v(D,"DIV",{class:!0});var $=y(a);t=v($,"DIV",{class:!0});var M=y(t);i=v(M,"DIV",{class:!0}),y(i).forEach(_),f=x(M),o=v(M,"ARTICLE",{class:!0});var j=y(o);s=v(j,"ASIDE",{});var G=y(s);c=v(G,"NAV",{"data-theme":!0});var B=y(c);n=v(B,"UL",{});var W=y(n);h=v(W,"LI",{class:!0});var V=y(h);k=v(V,"A",{href:!0,"data-svelte-h":!0}),P(k)!=="svelte-fxnvux"&&(k.innerHTML=C),V.forEach(_),U=x(W);for(let z=0;z<w.length;z+=1)w[z].l(W);W.forEach(_),B.forEach(_),G.forEach(_),j.forEach(_),M.forEach(_),$.forEach(_),D.forEach(_),this.h()},h(){g(r,"class","fixed inset-0 h-screen w-screen bg-black opacity-75"),g(i,"class","hidden sm:block"),g(k,"href","#"),g(h,"class","flex justify-end"),g(c,"data-theme","dark"),g(o,"class","bg-nav-floating m-0"),g(t,"class","grid w-full sm:grid-cols-2"),g(a,"class","fixed inset-0 flex h-screen flex-row-reverse"),g(e,"class","fixed relative inset-0 z-50 lg:hidden")},m(p,D){I(p,e,D),d(e,r),d(e,u),d(e,a),d(a,t),d(t,i),d(t,f),d(t,o),d(o,s),d(s,c),d(c,n),d(n,h),d(h,k),d(n,U);for(let $=0;$<w.length;$+=1)w[$]&&w[$].m(n,null);q=!0,F||(L=[te(i,"click",l[4]),te(k,"click",l[4])],F=!0)},p(p,D){if(l=p,D&32){b=Y(l[5]);let $;for($=0;$<b.length;$+=1){const M=Ee(l,b,$);w[$]?w[$].p(M,D):(w[$]=Ie(M),w[$].c(),w[$].m(n,null))}for(;$<w.length;$+=1)w[$].d(1);w.length=b.length}},i(p){q||(p&&ee(()=>{q&&(E&&E.end(1),S=se(t,ne,{delay:ie,duration:ie,easing:le,axis:"x"}),S.start())}),p&&ee(()=>{q&&(A&&A.end(1),H=se(e,re,{duration:ie}),H.start())}),q=!0)},o(p){S&&S.invalidate(),p&&(E=ce(t,ne,{duration:oe,easing:le,axis:"x"})),H&&H.invalidate(),p&&(A=ce(e,re,{delay:oe,duration:oe})),q=!1},d(p){p&&_(e),ae(w,p),p&&E&&E.end(),p&&A&&A.end(),F=!1,Me(L)}}}function lt(l){let e,r,u=l[9].name+"",a,t,i,f=Y(l[9].children),o=[];for(let s=0;s<f.length;s+=1)o[s]=Fe(ke(l,f,s));return{c(){e=m("details"),r=m("summary"),a=J(u),t=T(),i=m("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=v(s,"DETAILS",{});var c=y(e);r=v(c,"SUMMARY",{});var n=y(r);a=Q(n,u),n.forEach(_),t=x(c),i=v(c,"UL",{style:!0});var h=y(i);for(let k=0;k<o.length;k+=1)o[k].l(h);h.forEach(_),c.forEach(_),this.h()},h(){ze(i,"text-align","end")},m(s,c){I(s,e,c),d(e,r),d(r,a),d(e,t),d(e,i);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(i,null)},p(s,c){if(c&32){f=Y(s[9].children);let n;for(n=0;n<f.length;n+=1){const h=ke(s,f,n);o[n]?o[n].p(h,c):(o[n]=Fe(h),o[n].c(),o[n].m(i,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=f.length}},d(s){s&&_(e),ae(o,s)}}}function rt(l){let e,r,u=l[9].name+"",a,t,i=(l[9].icon??"")+"";return{c(){e=m("a"),r=new Z(!1),a=T(),t=new Z(!1),this.h()},l(f){e=v(f,"A",{role:!0,target:!0,rel:!0,href:!0});var o=y(e);r=X(o,!1),a=x(o),t=X(o,!1),o.forEach(_),this.h()},h(){r.a=a,t.a=null,g(e,"role",l[9].isButton?"button":void 0),g(e,"target",l[9].isExternal?"_blank":void 0),g(e,"rel",l[9].isExternal?"noopener noreferrer":void 0),g(e,"href",l[9].href)},m(f,o){I(f,e,o),r.m(u,e),d(e,a),t.m(i,e)},p:O,d(f){f&&_(e)}}}function Fe(l){let e,r,u,a=l[12].name+"",t;return{c(){e=m("li"),r=m("a"),u=new Z(!1),t=T(),this.h()},l(i){e=v(i,"LI",{});var f=y(e);r=v(f,"A",{href:!0,target:!0,rel:!0});var o=y(r);u=X(o,!1),o.forEach(_),t=x(f),f.forEach(_),this.h()},h(){u.a=null,g(r,"href",l[12].href),g(r,"target",l[12].isExternal?"_blank":void 0),g(r,"rel",l[12].isExternal?"noopener noreferrer":void 0)},m(i,f){I(i,e,f),d(e,r),u.m(a,r),d(e,t)},p:O,d(i){i&&_(e)}}}function Ie(l){let e,r;function u(i,f){if(i[9].href)return rt;if(i[9].children)return lt}let a=u(l),t=a&&a(l);return{c(){e=m("li"),t&&t.c(),r=T(),this.h()},l(i){e=v(i,"LI",{class:!0});var f=y(e);t&&t.l(f),r=x(f),f.forEach(_),this.h()},h(){g(e,"class","flex justify-end")},m(i,f){I(i,e,f),t&&t.m(e,null),d(e,r)},p(i,f){t&&t.p(i,f)},d(i){i&&_(e),t&&t.d()}}}function nt(l){let e=!1,r=()=>{e=!1},u,a,t,i,f;ee(l[8]);let o=l[2]&&Te(l),s=l[1]&&De(l);return{c(){a=m("header"),o&&o.c(),t=T(),s&&s.c(),this.h()},l(c){a=v(c,"HEADER",{class:!0});var n=y(a);o&&o.l(n),t=x(n),s&&s.l(n),n.forEach(_),this.h()},h(){g(a,"class","svelte-ipzaj3")},m(c,n){I(c,a,n),o&&o.m(a,null),d(a,t),s&&s.m(a,null),i||(f=te(window,"scroll",()=>{e=!0,clearTimeout(u),u=setTimeout(r,100),l[8]()}),i=!0)},p(c,[n]){n&1&&!e&&(e=!0,clearTimeout(u),scrollTo(window.pageXOffset,c[0]),u=setTimeout(r,100)),c[2]?o?(o.p(c,n),n&4&&R(o,1)):(o=Te(c),o.c(),R(o,1),o.m(a,t)):o&&(he(),K(o,1,1,()=>{o=null}),_e()),c[1]?s?(s.p(c,n),n&2&&R(s,1)):(s=De(c),s.c(),R(s,1),s.m(a,null)):s&&(he(),K(s,1,1,()=>{s=null}),_e())},i(c){R(o),R(s)},o(c){K(o),K(s)},d(c){c&&_(a),o&&o.d(),s&&s.d(),i=!1,f()}}}const ie=200,oe=200;function at(l,e,r){let u;He(l,Be,h=>r(7,u=h));let a=!1;function t(){r(1,a=!a)}let i=0,f=0,o=!0,s=!0;const c=[{name:"Home",href:N+"/"},{name:"Solutions",href:N+"/solutions"},{name:"Our Story",href:N+"/story"},{name:'Blog <span class="material-symbols-outlined">arrow_outward</span>',href:"https://medium.com/@DeepSquare.io",isExternal:!0},{name:'Invest <span class="material-symbols-outlined">arrow_outward</span>',href:"https://app.deepsquare.io",isExternal:!0},{name:'Get Started <span class="material-symbols-outlined">arrow_outward</span>',href:"https://docs.deepsquare.run/workflow/overview",isExternal:!0},{name:"GitHub",icon:'<i class="si si-github"></i>',href:"https://github.com/deepsquare-io/grid",isExternal:!0},{name:"Telegram",icon:'<i class="si si-telegram"></i>',href:"https://t.me/DeepSquareProject",isExternal:!0},{name:"Discord",icon:'<i class="si si-discord"></i>',href:"https://discord.gg/KYWh28BkUE",isExternal:!0}];function n(){r(0,f=window.pageYOffset)}return l.$$.update=()=>{l.$$.dirty&65&&(r(3,s=f<=100),r(2,o=i>f||f<100),r(6,i=f)),l.$$.dirty&128&&u&&r(1,a=!1)},[f,a,o,s,t,c,i,u,n]}class it extends fe{constructor(e){super(),de(this,e,at,nt,ue,{})}}function ot(l){let e,r,u,a,t,i,f,o;e=new it({});const s=l[1].default,c=Ae(s,l,l[0],null);return f=new Xe({}),{c(){ve(e.$$.fragment),r=T(),u=m("main"),c&&c.c(),i=T(),ve(f.$$.fragment)},l(n){ge(e.$$.fragment,n),r=x(n),u=v(n,"MAIN",{});var h=y(u);c&&c.l(h),h.forEach(_),i=x(n),ge(f.$$.fragment,n)},m(n,h){we(e,n,h),I(n,r,h),I(n,u,h),c&&c.m(u,null),I(n,i,h),we(f,n,h),o=!0},p(n,[h]){c&&c.p&&(!o||h&1)&&qe(c,s,n,n[0],o?Ve(s,n[0],h,null):Ue(n[0]),null)},i(n){o||(R(e.$$.fragment,n),R(c,n),n&&ee(()=>{o&&(t&&t.end(1),a=se(u,re,{duration:50,delay:50}),a.start())}),R(f.$$.fragment,n),o=!0)},o(n){K(e.$$.fragment,n),K(c,n),a&&a.invalidate(),n&&(t=ce(u,re,{duration:50})),K(f.$$.fragment,n),o=!1},d(n){n&&(_(r),_(u),_(i)),ye(e,n),c&&c.d(n),n&&t&&t.end(),ye(f,n)}}}function st(l,e,r){let{$$slots:u={},$$scope:a}=e;return Pe(t=>{if(document.startViewTransition)return new Promise(i=>{document.startViewTransition(async()=>{i(),await t.complete})})}),l.$$set=t=>{"$$scope"in t&&r(0,a=t.$$scope)},[a,u]}class pt extends fe{constructor(e){super(),de(this,e,st,ot,ue,{})}}export{pt as component,_t as universal};
