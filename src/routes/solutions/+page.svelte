<script lang="ts">
	import IdeaParticles from '$components/IdeaParticles.svelte';

	const title = 'Solutions';

	import ClusterFactory from '$lib/assets/media/ClusterFactory-min-scaled.jpg';
	import DeepSquareCommunity from '$lib/assets/media/DeepSquareCommunity-min-scaled.jpg';
	import DeepSquareGrid from '$lib/assets/media/DeepSquareGrid-min-scaled.jpg';
	import AnimatedInView from '$lib/components/AnimatedInView.svelte';

	import FileSmartContract from '$lib/assets/media/file-smart-contract.svg';
	import JobDefinition from '$lib/assets/media/jobdefinition.svg';
	import MetaMask from '$lib/assets/media/metamask.png';

	import StableDiffusion from '$lib/assets/media/stablediffusion.drawio.svg';

	import CS2LoginVideo from '$lib/assets/media/cs2_login.mp4';
	import CS2Login from '$lib/assets/media/cs2_login.svg';

	import BrowserWindow from '$components/BrowserWindow.svelte';
	import Price1 from '$lib/assets/media/price-part-1.png';
	import Price2 from '$lib/assets/media/price-part-2.png';
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
				<h1 class="text-4xl md:text-6xl">Accelerate your Innovation</h1>

				<p>
					Speed up your projects with ease on <b>DeepSquare</b> – the platform crafted by builders, for
					builders.
				</p>
			</div>
		</div>
	</main>
</section>

<section id="technology">
	<header>
		<center><h1>The Foundation Pillars of DeepSquare</h1></center>
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

						<p class="lg:min-h-80 xl:min-h-60">
							The <b>network of HPC clusters</b> forming the pool of compute required to process
							users’ workloads. Or, as we love to call it, <b>The Grid</b>.
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
						<p class="lg:min-h-80 xl:min-h-60">
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
						<p class="lg:min-h-80 xl:min-h-60">
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
		<center
			><small>Features</small>
			<h1 class="text-5xl">The decentralized platform that step up your workflow.</h1></center
		>
	</header>

	<main>
		<section class="grid md:grid-cols-2 gap-4 justify-items-center content-center">
			<div>
				<h2>Get your fair share of compute.</h2>
				<p>
					DeepSquare deploys its Meta-Scheduler on the Blockchain for transparency, and employs
					scheduling algorithms that consider in various factors to optimize compute allocation for
					equitable distribution and fairness.
				</p>
			</div>
			<center>
				<div class="flex items-center content-center">
					<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
						<img
							style="width: 170px; height: auto;"
							class="drop-shadow-a rounded-lg"
							src={MetaMask}
							alt="MetaMask"
						/>
					</AnimatedInView>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 1s both`}>
						<span style="font-size: 64px" class="material-symbols-outlined"> arrow_right_alt </span>
					</AnimatedInView>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 1.5s both`}>
						<img
							style="width: 600px; height: auto;"
							class="drop-shadow-a"
							src={JobDefinition}
							alt="Job Definition"
						/>
					</AnimatedInView>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 2s both`}>
						<span style="font-size: 64px" class="material-symbols-outlined"> arrow_right_alt </span>
					</AnimatedInView>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 2.5s both`}>
						<img
							style="width: 64px; height: auto;"
							class="drop-shadow-a"
							src={FileSmartContract}
							alt="File Smart Contract"
						/>
					</AnimatedInView>
				</div>
			</center>
		</section>
		<section class="grid md:grid-cols-2 gap-4">
			<div>
				<h2>Mix HPC techniques with the stability of containers.</h2>
				<p>
					DeepSquare is able to run any OCI containers with seamless support parallization
					technologies and hardware accelerators such as GPUs, Infiniband, and more.
				</p>
			</div>
			<center>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<img class="drop-shadow-a rounded-lg" src={StableDiffusion} alt="Stable Diffusion" />
				</AnimatedInView>
			</center>
		</section>
		<section class="grid md:grid-cols-2 gap-4">
			<div>
				<h2>Compatible with interactive Workflows.</h2>
				<p>
					DeepSquare jobs have external network access, enabling users to execute interactive tasks
					without compromising infrastructure provider security, thanks to the implementation of a
					zero-trust infrastructure and strict firewall requirements.
				</p>
			</div>
			<div class="relative" style="height: 50vh;">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<img
						class="absolute drop-shadow-a top-0 left-0 rounded-lg"
						src={CS2Login}
						alt="Interative mode"
					/>
				</AnimatedInView>
				<AnimatedInView animation={`from-bottom-slow 0.5s ease-out 2s both`}>
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
		<section class="grid md:grid-cols-2 gap-4">
			<div>
				<h2>Billed per use.</h2>
				<p>
					DeepSquare charges users based on the actual usage of compute resources down to the
					minute, and not periodically. This allows users to save on costs and only pay for what
					they use.
				</p>
			</div>
			<div class="relative" style="height: 226px; overflow: hidden;">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<img
						src={Price1}
						class="absolute drop-shadow-a top-0 left-0 rounded-lg"
						alt="Price duration"
					/>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 1s both`}>
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
		<center><h1>Sustainable infrastructure</h1> </center>
	</header>

	<main>
		<div class="grid md:grid-cols-4 gap-4">
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
		</div>
		<center>
			<a
				role="button"
				class="outline"
				style="text-transform: uppercase;"
				href="https://metaverseinsider.tech/2023/01/12/data-scientists-and-artist-heating-up-homes-in-basel/"
				><span>Learn more</span></a
			>
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
		padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
	}

	@keyframes -global-from-bottom {
		0% {
			transform: translateY(100vh);
			opacity: 0;
		}
		50% {
			opacity: 0;
			transform: translateY(20vh);
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-from-bottom-slow {
		0% {
			opacity: 0;
			transform: translateY(1vh);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
