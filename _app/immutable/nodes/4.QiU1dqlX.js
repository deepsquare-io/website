import{s as Dt,n as I,B as Se,a as Tt,r as It,j as xt}from"../chunks/scheduler.dZvbc_YU.js";import{S as St,i as kt,e as c,s as $,x as w,k as Ht,c as m,d as i,f as g,a as v,y as b,m as o,u as S,h as f,g as h,z as _,r as C,p as E,A as x,l as T,n as yt}from"../chunks/index.c0bQrraE.js";import{P as Jt,A as L,i as Mt}from"../chunks/Parallax.-nRWRHZK.js";const At=""+new URL("../assets/fv-min.y4n5ILMp.jpg",import.meta.url).href,qt=""+new URL("../assets/ClusterFactory-min-scaled.IGhB-iM2.jpg",import.meta.url).href,Nt=""+new URL("../assets/DeepSquareCommunity-min-scaled.xV_IDBN9.jpg",import.meta.url).href,Rt=""+new URL("../assets/DeepSquareGrid-min-scaled.NC03wpgc.jpg",import.meta.url).href,zt=""+new URL("../assets/metascheduler.drawio.MUp2ETrz.svg",import.meta.url).href,jt=""+new URL("../assets/compiled-job.z1iEtyGa.svg",import.meta.url).href,Gt=""+new URL("../assets/job.u_4NiX1N.svg",import.meta.url).href,Pt=""+new URL("../assets/stablediffusion.drawio.75fnz_1u.svg",import.meta.url).href,Zt=""+new URL("../assets/jupyter-code.w7Jtdst6.svg",import.meta.url).href,Ot=""+new URL("../assets/jupyter-term.8l1wVkZ3.mp4",import.meta.url).href,Wt=""+new URL("../assets/jupyter-window.SbVaNfor.mp4",import.meta.url).href,Ut="data:image/png;base64,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",Yt=""+new URL("../assets/price-part-2.hV-gmWHL.png",import.meta.url).href,Bt=""+new URL("../assets/grc-cold-wars-part-2-single-phase-immersion-cooling-process-graphic.WtRbY2LD.png",import.meta.url).href;function Vt(u){let e,a="Accelerate your Innovation";return{c(){e=c("h1"),e.textContent=a,this.h()},l(t){e=m(t,"H1",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-1h1zzqx"&&(e.textContent=a),this.h()},h(){o(e,"class","text-4xl md:text-6xl")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function Kt(u){let e,a=`Speed up your projects with ease on <b>DeepSquare</b> – the platform crafted by builders,
						for builders.`;return{c(){e=c("p"),e.innerHTML=a,this.h()},l(t){e=m(t,"P",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-1ycqqnk"&&(e.innerHTML=a),this.h()},h(){o(e,"class","text-xl")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function Xt(u){let e,a="<h1>The Foundation Pillars of DeepSquare</h1>";return{c(){e=c("center"),e.innerHTML=a},l(t){e=m(t,"CENTER",{"data-svelte-h":!0}),T(e)!=="svelte-1yu8hbm"&&(e.innerHTML=a)},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function Qt(u){let e,a=`<header class="svelte-b3fm4c"><h4><center>DeepSquare Grid</center></h4></header> <main class="svelte-b3fm4c"><div><img src="${Rt}" alt="DeepSquare Grid"/></div> <p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50 svelte-b3fm4c">The <b>network of HPC clusters</b> forming the pool of compute required to process users’
							workloads. The DeepSquare Grid is composed of clusters from various providers.</p></main> <footer class="mt-0 min-h-40 svelte-b3fm4c"><center><a role="button" class="outline" style="text-transform: uppercase;" target="_blank" rel="noopener" href="https://share-eu1.hsforms.com/186i4x9HOQAyEAboeeRaBCwev6gi"><span>Become a grid partner</span></a></center></footer>`;return{c(){e=c("article"),e.innerHTML=a,this.h()},l(t){e=m(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-scczfw"&&(e.innerHTML=a),this.h()},h(){o(e,"class","aura svelte-b3fm4c")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function Ft(u){let e,a=`<header class="svelte-b3fm4c"><h4><center>DeepSquare ClusterFactory</center></h4></header> <main class="svelte-b3fm4c"><div><img src="${qt}" alt="DeepSquare ClusterFactory"/></div> <p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50 svelte-b3fm4c">The <b>open-source Kubernetes-based infrastructure orchestrator</b> that automates the
							process of deploying, managing and monitoring compute-optimized clusters from bare metal
							servers to VMs and containers.</p></main> <footer class="mt-0 min-h-40 svelte-b3fm4c"><center><a role="button" class="outline" style="text-transform: uppercase;" target="_blank" rel="noopener" href="https://docs.deepsquare.run/deepsquare-grid/clusterfactory/overview"><span>Learn more</span></a></center></footer>`;return{c(){e=c("article"),e.innerHTML=a,this.h()},l(t){e=m(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-1ic5b2d"&&(e.innerHTML=a),this.h()},h(){o(e,"class","aura svelte-b3fm4c")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function es(u){let e,a=`<header class="svelte-b3fm4c"><h4><center>DeepSquare Community</center></h4></header> <main class="svelte-b3fm4c"><div><img src="${Nt}" alt="DeepSquare Community"/></div> <p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50 svelte-b3fm4c">The <b>builders, developers, AI engineers, artists, blockchain enthusiasts, disruptors,
								innovators and visionaries</b>. Join us in our mission to democratize access to HPC!</p></main> <footer class="mt-0 min-h-40 svelte-b3fm4c"><center><a role="button" class="outline" style="text-transform: uppercase;" target="_blank" rel="noopener" href="https://t.me/DeepSquareProject"><span>Join us</span></a></center></footer>`;return{c(){e=c("article"),e.innerHTML=a,this.h()},l(t){e=m(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-16o7k9l"&&(e.innerHTML=a),this.h()},h(){o(e,"class","aura svelte-b3fm4c")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function ts(u){let e,a='<small>Features</small> <h1 class="text-5xl">The decentralized platform that step up your workflow.</h1>';return{c(){e=c("center"),e.innerHTML=a},l(t){e=m(t,"CENTER",{"data-svelte-h":!0}),T(e)!=="svelte-dxjjbg"&&(e.innerHTML=a)},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function ss(u){let e,a="Fully featured, safe and simplified.",t,s,d=`DeepSquare uses YAML for defining a job&#39;s workflow.

					<br/><br/>

					DeepSquare is able to compile and validate the YAML workflow into a sophisticated script
					compatible with job schedulers. This approach facilitates the creation of intricate
					Directed Acyclic Graphs (DAGs) and workflows in a straightforward and comprehensible
					manner, ensuring not only simplicity and clarity but also promoting repeatability and
					safety within a consistent framework.

					<br/><br/>

					Moreover, with the YAML language server, users can benefit from the auto-completion for a
					better IDE experience.`;return{c(){e=c("h2"),e.textContent=a,t=$(),s=c("p"),s.innerHTML=d,this.h()},l(r){e=m(r,"H2",{"data-svelte-h":!0}),T(e)!=="svelte-ocygaw"&&(e.textContent=a),t=g(r),s=m(r,"P",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-w8svpv"&&(s.innerHTML=d),this.h()},h(){o(s,"class","mr-16")},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function ns(u){let e,a,t,s,d="<span>Before with SLURM</span>";return{c(){e=c("img"),t=$(),s=c("div"),s.innerHTML=d,this.h()},l(r){e=m(r,"IMG",{class:!0,src:!0,alt:!0}),t=g(r),s=m(r,"DIV",{"data-svelte-h":!0}),T(s)!=="svelte-boafev"&&(s.innerHTML=d),this.h()},h(){o(e,"class","drop-shadow-a rounded-lg"),Se(e.src,a=jt)||o(e,"src",a),o(e,"alt","Compiled Job")},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function as(u){let e,a,t,s,d="<span>After with DeepSquare</span>";return{c(){e=c("img"),t=$(),s=c("div"),s.innerHTML=d,this.h()},l(r){e=m(r,"IMG",{class:!0,style:!0,src:!0,alt:!0}),t=g(r),s=m(r,"DIV",{"data-svelte-h":!0}),T(s)!=="svelte-e74sb6"&&(s.innerHTML=d),this.h()},h(){o(e,"class","drop-shadow-a rounded-lg"),S(e,"max-width","25vh"),Se(e.src,a=Gt)||o(e,"src",a),o(e,"alt","Job")},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function rs(u){let e,a="Get your fair share of compute.",t,s,d=`DeepSquare deploys its Meta-Scheduler on the Blockchain for transparency, and employs
					scheduling algorithms that consider in various factors to optimize compute allocation for
					equitable distribution and fairness.`;return{c(){e=c("h2"),e.textContent=a,t=$(),s=c("p"),s.textContent=d},l(r){e=m(r,"H2",{"data-svelte-h":!0}),T(e)!=="svelte-1lwhu10"&&(e.textContent=a),t=g(r),s=m(r,"P",{"data-svelte-h":!0}),T(s)!=="svelte-14iye0i"&&(s.textContent=d)},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function is(u){let e,a;return{c(){e=c("img"),this.h()},l(t){e=m(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","drop-shadow-a rounded-lg"),Se(e.src,a=zt)||o(e,"src",a),o(e,"alt","MetaScheduler")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function os(u){let e,a="Mix HPC techniques with the stability of containers.",t,s,d=`DeepSquare is able to run any OCI containers with seamless support parallization
					technologies (MPI, NCCL, ...), and hardware accelerators such as GPUs, Infiniband, and
					more.`;return{c(){e=c("h2"),e.textContent=a,t=$(),s=c("p"),s.textContent=d},l(r){e=m(r,"H2",{"data-svelte-h":!0}),T(e)!=="svelte-6lq8or"&&(e.textContent=a),t=g(r),s=m(r,"P",{"data-svelte-h":!0}),T(s)!=="svelte-zxhlot"&&(s.textContent=d)},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function ls(u){let e,a;return{c(){e=c("img"),this.h()},l(t){e=m(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","drop-shadow-a rounded-lg"),Se(e.src,a=Pt)||o(e,"src",a),o(e,"alt","Stable Diffusion")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function cs(u){let e,a="Compatible with interactive Workflows.",t,s,d=`DeepSquare jobs have external network access, enabling users to execute interactive tasks
					without compromising infrastructure provider security, thanks to the implementation of a
					zero-trust infrastructure and strict firewall requirements.`;return{c(){e=c("h2"),e.textContent=a,t=$(),s=c("p"),s.textContent=d},l(r){e=m(r,"H2",{"data-svelte-h":!0}),T(e)!=="svelte-1kv877w"&&(e.textContent=a),t=g(r),s=m(r,"P",{"data-svelte-h":!0}),T(s)!=="svelte-stxvl1"&&(s.textContent=d)},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function ms(u){let e,a;return{c(){e=c("img"),this.h()},l(t){e=m(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","drop-shadow-a rounded-lg"),Se(e.src,a=Zt)||o(e,"src",a),o(e,"alt","Interative mode")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function us(u){let e,a=`<source src="${Ot}" type="video/mp4; codes=avc1"/>`,t,s;return{c(){e=c("video"),e.innerHTML=a,this.h()},l(d){e=m(d,"VIDEO",{class:!0,style:!0,width:!0,height:!0,"data-svelte-h":!0}),T(e)!=="svelte-12xyzik"&&(e.innerHTML=a),this.h()},h(){e.autoplay=!0,e.playsInline=!0,e.muted=!0,o(e,"class","max-w-[50vh] sm:max-w-[70vh] drop-shadow-a rounded-lg"),S(e,"max-height","50vh"),S(e,"width","auto"),S(e,"height","auto"),o(e,"width",1920/4),o(e,"height",1080/4)},m(d,r){h(d,e,r),u[2](e),t||(s=[Tt(Mt.call(null,e,{})),yt(e,"inview_enter",u[3])],t=!0)},p:I,d(d){d&&i(e),u[2](null),t=!1,It(s)}}}function fs(u){let e,a=`<source src="${Wt}" type="video/mp4; codes=avc1"/>`,t,s;return{c(){e=c("video"),e.innerHTML=a,this.h()},l(d){e=m(d,"VIDEO",{class:!0,style:!0,width:!0,height:!0,"data-svelte-h":!0}),T(e)!=="svelte-ezmi9m"&&(e.innerHTML=a),this.h()},h(){e.autoplay=!0,e.playsInline=!0,e.muted=!0,o(e,"class","max-w-[50vh] sm:max-w-[70vh] drop-shadow-a rounded-lg"),S(e,"max-height","50vh"),S(e,"width","auto"),S(e,"height","auto"),o(e,"width",1920/4),o(e,"height",1080/4)},m(d,r){h(d,e,r),u[4](e),t||(s=[Tt(Mt.call(null,e,{})),yt(e,"inview_enter",u[5])],t=!0)},p:I,d(d){d&&i(e),u[4](null),t=!1,It(s)}}}function hs(u){let e,a="Billed per use.",t,s,d=`DeepSquare charges users based on the actual usage of compute resources down to the
					minute, and not periodically. This allows users to save on costs and only pay for what
					they use.`;return{c(){e=c("h2"),e.textContent=a,t=$(),s=c("p"),s.textContent=d},l(r){e=m(r,"H2",{"data-svelte-h":!0}),T(e)!=="svelte-1nr8a64"&&(e.textContent=a),t=g(r),s=m(r,"P",{"data-svelte-h":!0}),T(s)!=="svelte-1bqjjzp"&&(s.textContent=d)},m(r,p){h(r,e,p),h(r,t,p),h(r,s,p)},p:I,d(r){r&&(i(e),i(t),i(s))}}}function ds(u){let e,a;return{c(){e=c("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){Se(e.src,a=Ut)||o(e,"src",a),o(e,"class","absolute drop-shadow-a top-0 right-0 left-0 rounded-lg"),o(e,"alt","Price duration")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function ps(u){let e,a;return{c(){e=c("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){Se(e.src,a=Yt)||o(e,"src",a),o(e,"class","absolute drop-shadow-a top-[112px] left-[0px] sm:left-[122px] rounded-lg"),o(e,"alt","Price computation")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function $s(u){let e,a="<h1>Sustainable Infrastructure</h1>";return{c(){e=c("center"),e.innerHTML=a},l(t){e=m(t,"CENTER",{"data-svelte-h":!0}),T(e)!=="svelte-1q66icr"&&(e.innerHTML=a)},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function gs(u){let e,a=`<div class="md:col-span-3"><p>DeepSquare&#39;s sustainability strategy revolves around <b>providing a readily deployable, eco-friendly configuration</b> that minimizes the environmental footprint of compute resources. By integrating cutting-edge
						technologies and prioritizing renewable energy sources, DeepSquare aims to reduce electrical
						consumption while making high-performance processing accessible to small businesses, researchers,
						and academic institutions.</p> <p>We advocate <b>Immersion Cooling</b>, a practice of placing electronic equipment into a
						thermally conductive, and electronically resistive liquid that is 1,200 times more
						efficient than air at capturing heat. The heat captured through immersion cooling can be
						exchanged in a simple, but efficient liquid-to-liquid heat exchanger. The heat then can
						directly be reused for heating purposes or industrial processes.</p></div> <div><img src="${Bt}" alt="Immersion Cooling"/></div>`;return{c(){e=c("div"),e.innerHTML=a,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-lz6i8o"&&(e.innerHTML=a),this.h()},h(){o(e,"class","grid md:grid-cols-4 gap-4 justify-items-center content-center")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function vs(u){let e,a="<span>Learn more</span>";return{c(){e=c("a"),e.innerHTML=a,this.h()},l(t){e=m(t,"A",{role:!0,class:!0,style:!0,target:!0,rel:!0,href:!0,"data-svelte-h":!0}),T(e)!=="svelte-170qwjq"&&(e.innerHTML=a),this.h()},h(){o(e,"role","button"),o(e,"class","outline mt-4"),S(e,"text-transform","uppercase"),o(e,"target","_blank"),o(e,"rel","noopener noreferrer"),o(e,"href","https://metaverseinsider.tech/2023/01/12/data-scientists-and-artist-heating-up-homes-in-basel/")},m(t,s){h(t,e,s)},p:I,d(t){t&&i(e)}}}function ws(u){let e,a,t,s,d,r,p,Xe,y,J,P,Z,st,O,Qe,N,He,W,nt,Je,k,U,at,Y,rt,B,Fe,A,Ae,V,it,M,K,X,ot,qe,Q,F,lt,ee,ct,te,se,mt,Ne,ke,ne,ut,ae,re,ft,Re,ie,ht,oe,le,dt,H,ce,pt,me,$t,ue,gt,fe,he,vt,q,de,wt,pe,et,R,ze,$e,bt,we,ge,_t,je,ve,Ge;return document.title=e=Lt+" - DeepSquare",d=new Jt({props:{factor:-.75,class:"absolute inset-x-0 -z-10",style:'background-image: url("'+At+'"); background-size: cover; background-position: center;'}}),Z=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[Vt]},$$scope:{ctx:u}}}),O=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out 0.5s both",$$slots:{default:[Kt]},$$scope:{ctx:u}}}),W=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[Xt]},$$scope:{ctx:u}}}),U=new L({props:{once:!0,animation:"from-bottom 1s ease-out both",$$slots:{default:[Qt]},$$scope:{ctx:u}}}),Y=new L({props:{once:!0,animation:"from-bottom 1s ease-out 0.1s both",$$slots:{default:[Ft]},$$scope:{ctx:u}}}),B=new L({props:{once:!0,animation:"from-bottom 1s ease-out 0.2s both",$$slots:{default:[es]},$$scope:{ctx:u}}}),V=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[ts]},$$scope:{ctx:u}}}),X=new L({props:{once:!0,animation:"from-left-slow 0.5s ease-out both",$$slots:{default:[ss]},$$scope:{ctx:u}}}),F=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[ns]},$$scope:{ctx:u}}}),ee=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[as]},$$scope:{ctx:u}}}),se=new L({props:{once:!0,animation:"from-left-slow 0.5s ease-out both",$$slots:{default:[rs]},$$scope:{ctx:u}}}),ne=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[is]},$$scope:{ctx:u}}}),re=new L({props:{once:!0,animation:"from-left-slow 0.5s ease-out both",$$slots:{default:[os]},$$scope:{ctx:u}}}),ie=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[ls]},$$scope:{ctx:u}}}),le=new L({props:{once:!0,animation:"from-left-slow 0.5s ease-out both",$$slots:{default:[cs]},$$scope:{ctx:u}}}),ce=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[ms]},$$scope:{ctx:u}}}),me=new L({props:{class:"absolute top-4 left-4 z-10",animation:"from-right-slow 0.5s ease-out 2s both",$$slots:{default:[us]},$$scope:{ctx:u}}}),ue=new L({props:{class:"absolute top-8 left-8 z-20",animation:"from-right-slow 0.5s ease-out 6s both",$$slots:{default:[fs]},$$scope:{ctx:u}}}),he=new L({props:{once:!0,animation:"from-left-slow 0.5s ease-out both",$$slots:{default:[hs]},$$scope:{ctx:u}}}),de=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out both",$$slots:{default:[ds]},$$scope:{ctx:u}}}),pe=new L({props:{once:!0,animation:"from-right-slow 0.5s ease-out 1s both",$$slots:{default:[ps]},$$scope:{ctx:u}}}),$e=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[$s]},$$scope:{ctx:u}}}),ge=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[gs]},$$scope:{ctx:u}}}),ve=new L({props:{once:!0,animation:"from-bottom-slow 0.5s ease-out both",$$slots:{default:[vs]},$$scope:{ctx:u}}}),{c(){a=c("meta"),t=$(),s=c("section"),w(d.$$.fragment),r=$(),p=c("div"),Xe=$(),y=c("main"),J=c("div"),P=c("div"),w(Z.$$.fragment),st=$(),w(O.$$.fragment),Qe=$(),N=c("section"),He=c("header"),w(W.$$.fragment),nt=$(),Je=c("main"),k=c("div"),w(U.$$.fragment),at=$(),w(Y.$$.fragment),rt=$(),w(B.$$.fragment),Fe=$(),A=c("section"),Ae=c("header"),w(V.$$.fragment),it=$(),M=c("main"),K=c("section"),w(X.$$.fragment),ot=$(),qe=c("center"),Q=c("div"),w(F.$$.fragment),lt=$(),w(ee.$$.fragment),ct=$(),te=c("section"),w(se.$$.fragment),mt=$(),Ne=c("center"),ke=c("div"),w(ne.$$.fragment),ut=$(),ae=c("section"),w(re.$$.fragment),ft=$(),Re=c("center"),w(ie.$$.fragment),ht=$(),oe=c("section"),w(le.$$.fragment),dt=$(),H=c("div"),w(ce.$$.fragment),pt=$(),w(me.$$.fragment),$t=$(),w(ue.$$.fragment),gt=$(),fe=c("section"),w(he.$$.fragment),vt=$(),q=c("div"),w(de.$$.fragment),wt=$(),w(pe.$$.fragment),et=$(),R=c("section"),ze=c("header"),w($e.$$.fragment),bt=$(),we=c("main"),w(ge.$$.fragment),_t=$(),je=c("center"),w(ve.$$.fragment),this.h()},l(n){const l=Ht("svelte-x3vwry",document.head);a=m(l,"META",{name:!0,content:!0}),l.forEach(i),t=g(n),s=m(n,"SECTION",{"data-theme":!0,id:!0,class:!0});var z=v(s);b(d.$$.fragment,z),r=g(z),p=m(z,"DIV",{class:!0,style:!0}),v(p).forEach(i),Xe=g(z),y=m(z,"MAIN",{});var Pe=v(y);J=m(Pe,"DIV",{class:!0});var Ze=v(J);P=m(Ze,"DIV",{class:!0});var be=v(P);b(Z.$$.fragment,be),st=g(be),b(O.$$.fragment,be),be.forEach(i),Ze.forEach(i),Pe.forEach(i),z.forEach(i),Qe=g(n),N=m(n,"SECTION",{id:!0});var _e=v(N);He=m(_e,"HEADER",{});var Oe=v(He);b(W.$$.fragment,Oe),Oe.forEach(i),nt=g(_e),Je=m(_e,"MAIN",{});var We=v(Je);k=m(We,"DIV",{id:!0,class:!0});var j=v(k);b(U.$$.fragment,j),at=g(j),b(Y.$$.fragment,j),rt=g(j),b(B.$$.fragment,j),j.forEach(i),We.forEach(i),_e.forEach(i),Fe=g(n),A=m(n,"SECTION",{id:!0,class:!0});var Ce=v(A);Ae=m(Ce,"HEADER",{});var Ue=v(Ae);b(V.$$.fragment,Ue),Ue.forEach(i),it=g(Ce),M=m(Ce,"MAIN",{});var D=v(M);K=m(D,"SECTION",{class:!0});var Ee=v(K);b(X.$$.fragment,Ee),ot=g(Ee),qe=m(Ee,"CENTER",{});var Ye=v(qe);Q=m(Ye,"DIV",{class:!0});var xe=v(Q);b(F.$$.fragment,xe),lt=g(xe),b(ee.$$.fragment,xe),xe.forEach(i),Ye.forEach(i),Ee.forEach(i),ct=g(D),te=m(D,"SECTION",{class:!0});var Le=v(te);b(se.$$.fragment,Le),mt=g(Le),Ne=m(Le,"CENTER",{});var Be=v(Ne);ke=m(Be,"DIV",{class:!0});var Ve=v(ke);b(ne.$$.fragment,Ve),Ve.forEach(i),Be.forEach(i),Le.forEach(i),ut=g(D),ae=m(D,"SECTION",{class:!0});var Te=v(ae);b(re.$$.fragment,Te),ft=g(Te),Re=m(Te,"CENTER",{});var Ke=v(Re);b(ie.$$.fragment,Ke),Ke.forEach(i),Te.forEach(i),ht=g(D),oe=m(D,"SECTION",{class:!0});var Ie=v(oe);b(le.$$.fragment,Ie),dt=g(Ie),H=m(Ie,"DIV",{class:!0,style:!0});var G=v(H);b(ce.$$.fragment,G),pt=g(G),b(me.$$.fragment,G),$t=g(G),b(ue.$$.fragment,G),G.forEach(i),Ie.forEach(i),gt=g(D),fe=m(D,"SECTION",{class:!0});var ye=v(fe);b(he.$$.fragment,ye),vt=g(ye),q=m(ye,"DIV",{class:!0,style:!0});var Me=v(q);b(de.$$.fragment,Me),wt=g(Me),b(pe.$$.fragment,Me),Me.forEach(i),ye.forEach(i),D.forEach(i),Ce.forEach(i),et=g(n),R=m(n,"SECTION",{id:!0});var De=v(R);ze=m(De,"HEADER",{});var Ct=v(ze);b($e.$$.fragment,Ct),Ct.forEach(i),bt=g(De),we=m(De,"MAIN",{});var tt=v(we);b(ge.$$.fragment,tt),_t=g(tt),je=m(tt,"CENTER",{});var Et=v(je);b(ve.$$.fragment,Et),Et.forEach(i),tt.forEach(i),De.forEach(i),this.h()},h(){o(a,"name","description"),o(a,"content",`Speed up your projects with ease on DeepSquare – the platform crafted by builders, for
	builders.`),o(p,"class","absolute inset-0 -z-10"),S(p,"backdrop-filter","blur(12px)"),S(p,"background","rgba(32,14,81, 0.2)"),o(P,"class","lg:col-span-2"),o(J,"class","grid lg:grid-cols-3"),o(s,"data-theme","dark"),o(s,"id","technology-banner"),o(s,"class","relative"),o(k,"id","stack"),o(k,"class","grid lg:grid-cols-3 gap-4 justify-items-center place-items-stretch svelte-b3fm4c"),o(N,"id","technology"),o(Q,"class","flex space-x-4 items-center content-center"),o(K,"class","grid lg:grid-cols-2 gap-4 justify-items-center content-center"),o(ke,"class","flex items-center content-center"),o(te,"class","grid lg:grid-cols-2 gap-4 justify-items-center content-center"),o(ae,"class","grid lg:grid-cols-2 gap-4"),o(H,"class","relative"),S(H,"height","50vh"),o(oe,"class","grid lg:grid-cols-2 gap-4"),o(q,"class","relative"),S(q,"height","226px"),S(q,"overflow","hidden"),o(fe,"class","grid lg:grid-cols-2 gap-4"),o(A,"id","features"),o(A,"class","bg-section-a"),o(R,"id","sustainability")},m(n,l){f(document.head,a),h(n,t,l),h(n,s,l),_(d,s,null),f(s,r),f(s,p),f(s,Xe),f(s,y),f(y,J),f(J,P),_(Z,P,null),f(P,st),_(O,P,null),h(n,Qe,l),h(n,N,l),f(N,He),_(W,He,null),f(N,nt),f(N,Je),f(Je,k),_(U,k,null),f(k,at),_(Y,k,null),f(k,rt),_(B,k,null),h(n,Fe,l),h(n,A,l),f(A,Ae),_(V,Ae,null),f(A,it),f(A,M),f(M,K),_(X,K,null),f(K,ot),f(K,qe),f(qe,Q),_(F,Q,null),f(Q,lt),_(ee,Q,null),f(M,ct),f(M,te),_(se,te,null),f(te,mt),f(te,Ne),f(Ne,ke),_(ne,ke,null),f(M,ut),f(M,ae),_(re,ae,null),f(ae,ft),f(ae,Re),_(ie,Re,null),f(M,ht),f(M,oe),_(le,oe,null),f(oe,dt),f(oe,H),_(ce,H,null),f(H,pt),_(me,H,null),f(H,$t),_(ue,H,null),f(M,gt),f(M,fe),_(he,fe,null),f(fe,vt),f(fe,q),_(de,q,null),f(q,wt),_(pe,q,null),h(n,et,l),h(n,R,l),f(R,ze),_($e,ze,null),f(R,bt),f(R,we),_(ge,we,null),f(we,_t),f(we,je),_(ve,je,null),Ge=!0},p(n,[l]){(!Ge||l&0)&&e!==(e=Lt+" - DeepSquare")&&(document.title=e);const z={};l&64&&(z.$$scope={dirty:l,ctx:n}),Z.$set(z);const Pe={};l&64&&(Pe.$$scope={dirty:l,ctx:n}),O.$set(Pe);const Ze={};l&64&&(Ze.$$scope={dirty:l,ctx:n}),W.$set(Ze);const be={};l&64&&(be.$$scope={dirty:l,ctx:n}),U.$set(be);const _e={};l&64&&(_e.$$scope={dirty:l,ctx:n}),Y.$set(_e);const Oe={};l&64&&(Oe.$$scope={dirty:l,ctx:n}),B.$set(Oe);const We={};l&64&&(We.$$scope={dirty:l,ctx:n}),V.$set(We);const j={};l&64&&(j.$$scope={dirty:l,ctx:n}),X.$set(j);const Ce={};l&64&&(Ce.$$scope={dirty:l,ctx:n}),F.$set(Ce);const Ue={};l&64&&(Ue.$$scope={dirty:l,ctx:n}),ee.$set(Ue);const D={};l&64&&(D.$$scope={dirty:l,ctx:n}),se.$set(D);const Ee={};l&64&&(Ee.$$scope={dirty:l,ctx:n}),ne.$set(Ee);const Ye={};l&64&&(Ye.$$scope={dirty:l,ctx:n}),re.$set(Ye);const xe={};l&64&&(xe.$$scope={dirty:l,ctx:n}),ie.$set(xe);const Le={};l&64&&(Le.$$scope={dirty:l,ctx:n}),le.$set(Le);const Be={};l&64&&(Be.$$scope={dirty:l,ctx:n}),ce.$set(Be);const Ve={};l&66&&(Ve.$$scope={dirty:l,ctx:n}),me.$set(Ve);const Te={};l&65&&(Te.$$scope={dirty:l,ctx:n}),ue.$set(Te);const Ke={};l&64&&(Ke.$$scope={dirty:l,ctx:n}),he.$set(Ke);const Ie={};l&64&&(Ie.$$scope={dirty:l,ctx:n}),de.$set(Ie);const G={};l&64&&(G.$$scope={dirty:l,ctx:n}),pe.$set(G);const ye={};l&64&&(ye.$$scope={dirty:l,ctx:n}),$e.$set(ye);const Me={};l&64&&(Me.$$scope={dirty:l,ctx:n}),ge.$set(Me);const De={};l&64&&(De.$$scope={dirty:l,ctx:n}),ve.$set(De)},i(n){Ge||(C(d.$$.fragment,n),C(Z.$$.fragment,n),C(O.$$.fragment,n),C(W.$$.fragment,n),C(U.$$.fragment,n),C(Y.$$.fragment,n),C(B.$$.fragment,n),C(V.$$.fragment,n),C(X.$$.fragment,n),C(F.$$.fragment,n),C(ee.$$.fragment,n),C(se.$$.fragment,n),C(ne.$$.fragment,n),C(re.$$.fragment,n),C(ie.$$.fragment,n),C(le.$$.fragment,n),C(ce.$$.fragment,n),C(me.$$.fragment,n),C(ue.$$.fragment,n),C(he.$$.fragment,n),C(de.$$.fragment,n),C(pe.$$.fragment,n),C($e.$$.fragment,n),C(ge.$$.fragment,n),C(ve.$$.fragment,n),Ge=!0)},o(n){E(d.$$.fragment,n),E(Z.$$.fragment,n),E(O.$$.fragment,n),E(W.$$.fragment,n),E(U.$$.fragment,n),E(Y.$$.fragment,n),E(B.$$.fragment,n),E(V.$$.fragment,n),E(X.$$.fragment,n),E(F.$$.fragment,n),E(ee.$$.fragment,n),E(se.$$.fragment,n),E(ne.$$.fragment,n),E(re.$$.fragment,n),E(ie.$$.fragment,n),E(le.$$.fragment,n),E(ce.$$.fragment,n),E(me.$$.fragment,n),E(ue.$$.fragment,n),E(he.$$.fragment,n),E(de.$$.fragment,n),E(pe.$$.fragment,n),E($e.$$.fragment,n),E(ge.$$.fragment,n),E(ve.$$.fragment,n),Ge=!1},d(n){n&&(i(t),i(s),i(Qe),i(N),i(Fe),i(A),i(et),i(R)),i(a),x(d),x(Z),x(O),x(W),x(U),x(Y),x(B),x(V),x(X),x(F),x(ee),x(se),x(ne),x(re),x(ie),x(le),x(ce),x(me),x(ue),x(he),x(de),x(pe),x($e),x(ge),x(ve)}}}const Lt="Solutions";function bs(u,e,a){let t,s;function d(y){xt[y?"unshift":"push"](()=>{s=y,a(1,s)})}const r=y=>{const{inView:J}=y.detail;J&&setTimeout(()=>{s.load(),s.play()},2e3)};function p(y){xt[y?"unshift":"push"](()=>{t=y,a(0,t)})}return[t,s,d,r,p,y=>{const{inView:J}=y.detail;J&&setTimeout(()=>{t.load(),t.play()},6e3)}]}class xs extends St{constructor(e){super(),kt(this,e,bs,ws,Dt,{})}}export{xs as component};
