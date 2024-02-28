<script lang="ts">
	const title = 'Solutions';

	import { inview } from 'svelte-inview';

	import Parallax from '$components/Parallax.svelte';
	import Background from '$lib/assets/media/fv-min.jpg';
	import Spots2 from '$lib/assets/media/spots2.svg';

	import ClusterFactory from '$lib/assets/media/ClusterFactory-min-scaled.jpg';
	import DeepSquareCommunity from '$lib/assets/media/DeepSquareCommunity-min-scaled.jpg';
	import DeepSquareGrid from '$lib/assets/media/DeepSquareGrid-min-scaled.jpg';
	import AnimatedInView from '$lib/components/AnimatedInView.svelte';

	import MetaScheduler from '$lib/assets/media/metascheduler.drawio.svg';

	import CompiledJob from '$lib/assets/media/compiled-job.svg';
	import Job from '$lib/assets/media/job.svg';

	import StableDiffusion from '$lib/assets/media/stablediffusion.drawio.svg';

	import JupyterCode from '$lib/assets/media/jupyter-code.svg';
	import JupyterVideo from '$lib/assets/media/jupyter-term.webm';
	import JupyterWindow from '$lib/assets/media/jupyter-window.webm';

	import Price1 from '$lib/assets/media/price-part-1.png';
	import Price2 from '$lib/assets/media/price-part-2.png';

	import ImmersionCooling from '$lib/assets/media/grc-cold-wars-part-2-single-phase-immersion-cooling-process-graphic.png';

	let jupyterWindowVideo: HTMLVideoElement;
	let jupyterCodeVideo: HTMLVideoElement;
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="Speed up your projects with ease on DeepSquare – the platform crafted by builders, for
	builders."
	/>
</svelte:head>

<section data-theme="dark" id="technology-banner" class="relative">
	<!-- Overlays -->
	<Parallax
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Background}&quot;); background-size: cover; background-position: center;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(12px); background: rgba(32,14,81, 0.2);"
	></div>

	<!-- Content -->
	<main>
		<div class="grid lg:grid-cols-3">
			<div class="lg:col-span-2">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<h1 class="text-4xl md:text-6xl">Accelerate your Innovation</h1>
				</AnimatedInView>

				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.5s both`}>
					<p class="text-xl">
						Speed up your projects with ease on <b>DeepSquare</b> – the platform crafted by builders,
						for builders.
					</p>
				</AnimatedInView>
			</div>
		</div>
	</main>
</section>

<section id="technology">
	<header>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
			<center><h1>The Foundation Pillars of DeepSquare</h1></center>
		</AnimatedInView>
	</header>
	<main>
		<div id="stack" class="grid place-items-stretch justify-items-center gap-4 lg:grid-cols-3">
			<AnimatedInView once={true} animation={`from-bottom 1s ease-out both`}>
				<article class="aura">
					<header>
						<h4><center>DeepSquare Grid</center></h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareGrid} alt="DeepSquare Grid" />
						</div>

						<p class="2xl:min-h-50 lg:min-h-80 xl:min-h-60">
							The <b>network of HPC clusters</b> forming the pool of compute required to process users’
							workloads. The DeepSquare Grid is composed of clusters from various providers.
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								target="_blank"
								rel="noopener"
								href="https://share-eu1.hsforms.com/186i4x9HOQAyEAboeeRaBCwev6gi"
								><span>Become a grid partner</span></a
							>
						</center>
					</footer>
				</article>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom 1s ease-out 0.1s both`}>
				<article class="aura">
					<header>
						<h4><center>DeepSquare ClusterFactory</center></h4>
					</header>

					<main>
						<div>
							<img src={ClusterFactory} alt="DeepSquare ClusterFactory" />
						</div>
						<p class="2xl:min-h-50 lg:min-h-80 xl:min-h-60">
							The <b>open-source Kubernetes-based infrastructure orchestrator</b> that automates the
							process of deploying, managing and monitoring compute-optimized clusters from bare metal
							servers to VMs and containers.
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								target="_blank"
								rel="noopener"
								href="https://docs.deepsquare.run/deepsquare-grid/clusterfactory/overview"
								><span>Learn more</span></a
							>
						</center>
					</footer>
				</article>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom 1s ease-out 0.2s both`}>
				<article class="aura">
					<header>
						<h4><center>DeepSquare Community</center></h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareCommunity} alt="DeepSquare Community" />
						</div>
						<p class="2xl:min-h-50 lg:min-h-80 xl:min-h-60">
							The <b
								>builders, developers, AI engineers, artists, blockchain enthusiasts, disruptors,
								innovators and visionaries</b
							>. Join us in our mission to democratize access to HPC!
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								target="_blank"
								rel="noopener"
								href="https://t.me/DeepSquareProject"><span>Join us</span></a
							>
						</center>
					</footer>
				</article>
			</AnimatedInView>
		</div>
	</main>
</section>

<section id="features" class="relative" style="background-color: transparent;">
	<!-- Overlays -->
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(10px); background-color: var(--background-color);"
	></div>
	<Parallax
		factor={0.2}
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Spots2}&quot;); background-position: center center; background-size: cover;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(0px); background-color: rgba(0, 0, 0, 0);"
	></div>

	<!-- Content -->
	<header>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
			<center
				><small>Features</small>
				<h1 class="text-5xl">The decentralized platform that step up your workflow.</h1></center
			>
		</AnimatedInView>
	</header>

	<main>
		<section class="grid content-center justify-items-center gap-4 lg:grid-cols-2">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Fully featured, safe and simplified.</h2>
				<p class="mr-16">
					DeepSquare uses YAML for defining a job's workflow.

					<br /><br />

					DeepSquare is able to compile and validate the YAML workflow into a sophisticated script
					compatible with job schedulers. This approach facilitates the creation of intricate
					Directed Acyclic Graphs (DAGs) and workflows in a straightforward and comprehensible
					manner, ensuring not only simplicity and clarity but also promoting repeatability and
					safety within a consistent framework.

					<br /><br />

					Moreover, with the YAML language server, users can benefit from the auto-completion for a
					better IDE experience.
				</p>
			</AnimatedInView>
			<center>
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
					<div class="flex content-center items-center space-x-4 lg:max-w-[50vw]">
						<div>
							<img class="drop-shadow-a rounded-lg" src={CompiledJob} alt="Compiled Job" />
							<div><span>Before with SLURM</span></div>
						</div>
						<div>
							<span class="material-symbols-outlined" style="font-size: 3rem;">trending_flat</span>
						</div>
						<div>
							<img class="drop-shadow-a rounded-lg" src={Job} alt="Job" />
							<div><span>After with DeepSquare</span></div>
						</div>
					</div>
				</AnimatedInView>
			</center>
		</section>
		<section class="grid content-center justify-items-center gap-4 lg:grid-cols-2">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Get your fair share of compute.</h2>
				<p>
					DeepSquare deploys its Meta-Scheduler on the Blockchain for transparency, and employs
					scheduling algorithms that consider in various factors to optimize compute allocation for
					equitable distribution and fairness.
				</p>
			</AnimatedInView>
			<center>
				<div class="flex content-center items-center">
					<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
						<img class="drop-shadow-a rounded-lg" src={MetaScheduler} alt="MetaScheduler" />
					</AnimatedInView>
				</div>
			</center>
		</section>
		<section class="grid gap-4 lg:grid-cols-2">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Mix HPC techniques with the stability of containers.</h2>
				<p>
					DeepSquare is able to run any OCI containers with seamless support parallization
					technologies (MPI, NCCL, ...), and hardware accelerators such as GPUs, Infiniband, and
					more.
				</p>
			</AnimatedInView>
			<center>
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
					<img class="drop-shadow-a rounded-lg" src={StableDiffusion} alt="Stable Diffusion" />
				</AnimatedInView>
			</center>
		</section>
		<section class="grid gap-4 lg:grid-cols-2">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Compatible with interactive Workflows.</h2>
				<p>
					DeepSquare jobs have external network access, enabling users to execute interactive tasks
					without compromising infrastructure provider security, thanks to the implementation of a
					zero-trust infrastructure and strict firewall requirements.
				</p>
			</AnimatedInView>
			<div class="relative" style="height: 50vh;">
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
					<img class="drop-shadow-a rounded-lg" src={JupyterCode} alt="Interative mode" />
				</AnimatedInView>
				<AnimatedInView
					class="absolute left-4 top-4 z-10"
					animation={`from-right-slow 0.5s ease-out 2s both`}
				>
					<video
						use:inview={{}}
						bind:this={jupyterCodeVideo}
						autoplay
						playsinline
						muted
						on:inview_enter={(event) => {
							const { inView } = event.detail;
							if (inView) {
								setTimeout(() => {
									jupyterCodeVideo.load();
									jupyterCodeVideo.play();
								}, 2000);
							}
						}}
						class="drop-shadow-a max-w-[50vh] rounded-lg sm:max-w-[70vh]"
						style="max-height: 50vh; width: auto; height: auto;"
						width={1920 / 4}
						height={1080 / 4}><source src={JupyterVideo} type="video/webm;codecs=vp9,opus" /></video
					>
				</AnimatedInView>
				<AnimatedInView
					class="absolute left-8 top-8 z-20"
					animation={`from-right-slow 0.5s ease-out 6s both`}
				>
					<video
						use:inview={{}}
						bind:this={jupyterWindowVideo}
						autoplay
						playsinline
						muted
						on:inview_enter={(event) => {
							const { inView } = event.detail;
							if (inView) {
								setTimeout(() => {
									jupyterWindowVideo.load();
									jupyterWindowVideo.play();
								}, 6000);
							}
						}}
						class="drop-shadow-a max-w-[50vh] rounded-lg sm:max-w-[70vh]"
						style="max-height: 50vh; width: auto; height: auto;"
						width={1920 / 4}
						height={1080 / 4}
						><source src={JupyterWindow} type="video/webm;codecs=vp9,opus" /></video
					>
				</AnimatedInView>
			</div>
		</section>
		<section class="grid gap-4 lg:grid-cols-2">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Billed per use.</h2>
				<p>
					DeepSquare charges users based on the actual usage of compute resources down to the
					minute, and not periodically. This allows users to save on costs and only pay for what
					they use.
				</p>
			</AnimatedInView>
			<div class="relative" style="height: 226px; overflow: hidden;">
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
					<img
						src={Price1}
						class="drop-shadow-a absolute left-0 right-0 top-0 rounded-lg"
						alt="Price duration"
					/>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out 1s both`}>
					<img
						src={Price2}
						class="drop-shadow-a absolute left-[0px] top-[112px] rounded-lg sm:left-[122px]"
						alt="Price computation"
					/>
				</AnimatedInView>
			</div>
		</section>
	</main>
</section>

<section id="sustainability">
	<header>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
			<center><h1>Sustainable Infrastructure</h1> </center>
		</AnimatedInView>
	</header>

	<main>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
			<div class="grid content-center justify-items-center gap-4 md:grid-cols-4">
				<div class="md:col-span-3">
					<p>
						DeepSquare's sustainability strategy revolves around <b
							>providing a readily deployable, eco-friendly configuration</b
						> that minimizes the environmental footprint of compute resources. By integrating cutting-edge
						technologies and prioritizing renewable energy sources, DeepSquare aims to reduce electrical
						consumption while making high-performance processing accessible to small businesses, researchers,
						and academic institutions.
					</p>
					<p>
						We advocate <b>Immersion Cooling</b>, a practice of placing electronic equipment into a
						thermally conductive, and electronically resistive liquid that is 1,200 times more
						efficient than air at capturing heat. The heat captured through immersion cooling can be
						exchanged in a simple, but efficient liquid-to-liquid heat exchanger. The heat then can
						directly be reused for heating purposes or industrial processes.
					</p>
				</div>
				<div>
					<img src={ImmersionCooling} alt="Immersion Cooling" />
				</div>
			</div>
		</AnimatedInView>
		<center>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
				<a
					role="button"
					class="mt-4 outline"
					style="text-transform: uppercase;"
					target="_blank"
					rel="noopener noreferrer"
					href="https://metaverseinsider.tech/2023/01/12/data-scientists-and-artist-heating-up-homes-in-basel/"
					><span>Learn more</span></a
				>
			</AnimatedInView>
		</center>
	</main>
</section>

<style>
	#stack article,
	#stack article > header,
	#stack article > footer {
		margin-left: 0;
		margin-right: 0;
	}

	#stack article > header {
		margin-bottom: 0;
		height: 8em;
	}

	#stack article {
		padding-left: 0;
		padding-right: 0;
	}

	#stack article > main > p {
		padding-top: calc(var(--block-spacing-vertical) * 0.66);
		padding-bottom: calc(var(--block-spacing-vertical) * 0.11);
		padding-left: var(--block-spacing-horizontal);
		padding-right: var(--block-spacing-horizontal);
		margin-bottom: 0;
	}
</style>
