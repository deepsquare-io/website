<script lang="ts">
	import IdeaParticles from '$components/IdeaParticles.svelte';

	const title = 'Solutions';

	import ClusterFactory from '$lib/assets/media/ClusterFactory-min-scaled.jpg';
	import DeepSquareCommunity from '$lib/assets/media/DeepSquareCommunity-min-scaled.jpg';
	import DeepSquareGrid from '$lib/assets/media/DeepSquareGrid-min-scaled.jpg';
	import AnimatedInView from '$lib/components/AnimatedInView.svelte';

	import MetaScheduler from '$lib/assets/media/metascheduler.drawio.svg';

	import CompiledJob from '$lib/assets/media/compiled-job.svg';
	import Job from '$lib/assets/media/job.svg';

	import StableDiffusion from '$lib/assets/media/stablediffusion.drawio.svg';

	import CS2LoginVideo from '$lib/assets/media/cs2_login.mp4';
	import CS2Login from '$lib/assets/media/cs2_login.svg';

	import BrowserWindow from '$components/BrowserWindow.svelte';
	import Price1 from '$lib/assets/media/price-part-1.png';
	import Price2 from '$lib/assets/media/price-part-2.png';

	import ImmersionCooling from '$lib/assets/media/grc-cold-wars-part-2-single-phase-immersion-cooling-process-graphic.png';
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
	<div
		class="absolute inset-0 -z-10"
		style="background: rgb(32,14,81); background: linear-gradient(135deg, rgba(32,14,81,1) 0%, rgba(63,7,96,1) 31%, rgba(63,7,96,1) 67%, rgba(187,50,169,1) 100%);"
	></div>
	<IdeaParticles class="absolute inset-0 -z-10" />
	<main>
		<div class="grid lg:grid-cols-3">
			<div class="lg:col-span-2">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<h1 class="text-4xl md:text-6xl">Accelerate your Innovation</h1>
				</AnimatedInView>

				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.5s both`}>
					<p>
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
		<div id="stack" class="grid lg:grid-cols-3 gap-4 justify-items-center place-items-stretch">
			<AnimatedInView once={true} animation={`from-bottom 1s ease-out both`}>
				<article class="aura">
					<header>
						<h4><center>DeepSquare Grid</center></h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareGrid} alt="DeepSquare Grid" />
						</div>

						<p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50">
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
						<p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50">
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
						<p class="lg:min-h-80 xl:min-h-60 2xl:min-h-50">
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
								href="https://t.me/DeepSquareProject"><span>Join us</span></a
							>
						</center>
					</footer>
				</article>
			</AnimatedInView>
		</div>
	</main>
</section>

<section id="features" class="bg-section-a">
	<header>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
			<center
				><small>Features</small>
				<h1 class="text-5xl">The decentralized platform that step up your workflow.</h1></center
			>
		</AnimatedInView>
	</header>

	<main>
		<section class="grid lg:grid-cols-2 gap-4 justify-items-center content-center">
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
				<div class="flex space-x-4 items-center content-center">
					<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
						<img class="drop-shadow-a rounded-lg" src={CompiledJob} alt="Compiled Job" />
						<div><span>Before with SLURM</span></div>
					</AnimatedInView>
					<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
						<img class="drop-shadow-a rounded-lg" style="max-width: 25vh;" src={Job} alt="Job" />
						<div><span>After with DeepSquare</span></div>
					</AnimatedInView>
				</div>
			</center>
		</section>
		<section class="grid lg:grid-cols-2 gap-4 justify-items-center content-center">
			<AnimatedInView once={true} animation={`from-left-slow 0.5s ease-out both`}>
				<h2>Get your fair share of compute.</h2>
				<p>
					DeepSquare deploys its Meta-Scheduler on the Blockchain for transparency, and employs
					scheduling algorithms that consider in various factors to optimize compute allocation for
					equitable distribution and fairness.
				</p>
			</AnimatedInView>
			<center>
				<div class="flex items-center content-center">
					<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out both`}>
						<img class="drop-shadow-a rounded-lg" src={MetaScheduler} alt="MetaScheduler" />
					</AnimatedInView>
				</div>
			</center>
		</section>
		<section class="grid lg:grid-cols-2 gap-4">
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
		<section class="grid lg:grid-cols-2 gap-4">
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
					<img
						class="absolute drop-shadow-a top-0 left-0 rounded-lg"
						src={CS2Login}
						alt="Interative mode"
					/>
				</AnimatedInView>
				<AnimatedInView animation={`from-right-slow 0.5s ease-out 2s both`}>
					<BrowserWindow
						class="absolute drop-shadow-a left-[0px] sm:left-[50px] top-[50px] rounded-lg"
						style="overflow: hidden;"
						url="https://068ac8.bore.deepsquare.run"
						><video
							autoplay
							playsinline
							muted
							class="max-w-[50vh] sm:max-w-[70vh]"
							style="max-height: 50vh; width: auto; height: auto;"
							width="692"
							height="322"><source src={CS2LoginVideo} type="video/mp4; codes=avc1" /></video
						></BrowserWindow
					>
				</AnimatedInView>
			</div>
		</section>
		<section class="grid lg:grid-cols-2 gap-4">
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
						class="absolute drop-shadow-a top-0 right-0 left-0 rounded-lg"
						alt="Price duration"
					/>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-right-slow 0.5s ease-out 1s both`}>
					<img
						src={Price2}
						class="absolute drop-shadow-a top-[112px] left-[0px] sm:left-[122px] rounded-lg"
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
			<div class="grid md:grid-cols-4 gap-4 justify-items-center content-center">
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
					class="outline mt-4"
					style="text-transform: uppercase;"
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
