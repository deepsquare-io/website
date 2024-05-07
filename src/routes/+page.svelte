<script lang="ts">
	const title = 'DeepSquare';

	import Background from '$lib/assets/media/Group-180-min.jpg';

	import DPS from '$lib/assets/media/dps.png';

	import YData from '$lib/assets/media/YData.svg';
	import Openfabric from '$lib/assets/media/openfabric-logo-black-1.png';
	import SquareFactory from '$lib/assets/media/squarefactory-logo-neg.svg';

	import BIRDIncubator from '$lib/assets/media/BIRDIncubator.svg';
	import HealthTechLisboa from '$lib/assets/media/HealthTechLisboa.svg';
	import LookAIVentures from '$lib/assets/media/LAIV_Logo_Blue.png';
	import AICenterLipik from '$lib/assets/media/Lipik_Logo.png';

	import Submer from '$lib/assets/media/Submer.svg';

	import Applications from '$components/Applications.svelte';
	import BlockchainGameAlliance from '$lib/assets/media/BGA.png';
	import CryptoValleyAssociation from '$lib/assets/media/CVA.png';
	import EcoCloud from '$lib/assets/media/EcoCloud.png';
	import HubFranceIA from '$lib/assets/media/HubFranceAI.png';

	import AnimatedInView from '$components/AnimatedInView.svelte';
	import Parallax from '$components/Parallax.svelte';
	import ContainerIcon from '$lib/assets/media/container-registry-svgrepo-com.svg';
	import HandshakeIcon from '$lib/assets/media/handshake-regular.svg';
	import YAMLIcon from '$lib/assets/media/yaml-file-icon.svg';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let hasSubmitted = false;

	const jobs = [
		{
			type: 'tgi',
			name: 'Text Generation Inference',
			introduction:
				'Instantly launch the Mistral Large Language Model (LLM), and feel the seamless deployment on DeepSquare.',
			description:
				'<a href="https://github.com/deepsquare-io/workflow-catalog/blob/main/text-generation-inference/text-generation-inference.yaml">This LLM workflow</a> showcases the ease of developing Software-as-a-Service (SaaS) solutions on DeepSquare, utilizing decentralized HPC resources billed by the minute.'
		},
		{
			type: 'jupyter',
			name: 'JupyterLab',
			introduction:
				'Instantly launch Jupyter Notebook, and feel the seamless deployment on DeepSquare.',
			description:
				'<a href="https://github.com/deepsquare-io/workflow-catalog/blob/main/jupyterlab/jupyterlab.yaml">This JupyterLab workflow</a> showcases the ease of developing Software-as-a-Service (SaaS) solutions on DeepSquare, utilizing decentralized HPC resources billed by the minute.'
		},
		{
			type: 'comfy',
			name: 'Stable Diffusion ComfyUI',
			introduction:
				'Instantly launch Stable Diffusion with ComfyUI, and feel the seamless deployment on DeepSquare.',
			description:
				'<a href="https://github.com/deepsquare-io/workflow-catalog/blob/main/stable-diffusion-webui/stable-diffusion-comfyui.yaml">This Stable Diffusion ComfyUI workflow</a> showcases the ease of developing Software-as-a-Service (SaaS) solutions on DeepSquare, utilizing decentralized HPC resources billed by the minute.'
		},
		{
			type: 'stable-diffusion',
			name: 'Stable Diffusion WebUI',
			introduction:
				'Instantly launch  Stable Diffusion with WebUI, and feel the seamless deployment on DeepSquare.',
			description:
				'<a href="https://github.com/deepsquare-io/workflow-catalog/blob/main/stable-diffusion-webui/stable-diffusion-webui.yaml">This Stable Diffusion WebUI workflow</a> showcases the ease of developing Software-as-a-Service (SaaS) solutions on DeepSquare, utilizing decentralized HPC resources billed by the minute.'
		}
	];
	let job = jobs[0];

	onMount(() => {
		if ($page.url.searchParams.has('job') && job.type !== $page.url.searchParams.get('job')) {
			job = jobs.find((j) => j.type === $page.url.searchParams.get('job')) || jobs[0];
		}
	});

	const builders = [
		{
			name: 'SquareFactory',
			img: SquareFactory,
			description: 'The Swiss AI-as-a-Service champion.',
			href: 'https://squarefactory.io'
		},
		{
			name: 'YData',
			img: YData,
			description: 'The first development platform for data quality.',
			href: 'https://ydata.ai'
		},
		{
			name: 'Openfabric',
			img: Openfabric,
			description: 'A platform for building and connecting AI applications.',
			href: 'https://openfabric.ai'
		}
	];

	const incubatorsAndAccelerators = [
		{
			name: 'HealthTech Lisboa',
			img: HealthTechLisboa,
			description: 'Venture Builder, specialized in healthtech industry based in Lisbon, Portugal.',
			href: 'https://www.healthtechlisboa.com'
		},
		{
			name: 'BIRD Incubator',
			img: BIRDIncubator,
			description:
				'Incubator for all software ideas related to data analytics, artificial intelligence and machine learning.',
			href: 'https://bird-incubator.com'
		},
		{
			name: 'AI Center Lipik',
			img: AICenterLipik,
			description: 'AI Education Center and Startup Incubator & Accelerator.',
			href: 'https://www.lipik.ai'
		},
		{
			name: 'Look AI Ventures',
			img: LookAIVentures,
			description: 'An investment fund focused exclusively on AI startups.',
			href: 'https://lookai.vc'
		}
	];

	const technologyPartners = [
		{
			name: 'Submer',
			img: Submer,
			description: 'Datacenters that make sense.',
			href: 'https://submer.com'
		}
	];

	const organizationsAndAssociations = [
		{
			name: 'EcoCloud',
			img: EcoCloud,
			description:
				'EcoCloud is one and only academic center of its kind enabling eco-friendly smart data through resilient, efficient, secure and trustworthy data platforms.',
			href: 'https://ecocloud.epfl.ch/'
		},
		{
			name: 'Hub France IA',
			img: HubFranceIA,
			description:
				'The Hub France IA acts for an applied and sovereign AI at the service of operational projects',
			href: 'https://www.hub-franceia.fr/'
		},
		{
			name: 'Crypto Valley Association',
			img: CryptoValleyAssociation,
			description:
				'Crypto Valley Association  the largest blockchain and distributed ledger ecosystem worldwide, based out Switzerland, with presence in entire Europe and beyond.',
			href: 'https://cryptovalley.swiss'
		},
		{
			name: 'Blockchain Game Alliance',
			img: BlockchainGameAlliance,
			description:
				'The Blockchain Game Alliance is an organization committed to promoting blockchain within the game industry.',
			href: 'https://www.blockchaingamealliance.org/'
		}
	];
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="DeepSquare is a pioneering technology company dedicated to build the Decentralized Cloud Ecosystem and to High-Performance Computing (HPC)
	accessible to everyone."
	/>
</svelte:head>

<section data-theme="dark" id="introduction" class="relative">
	<!-- Overlays -->
	<Parallax
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Background}&quot;); background-position: center; background-repeat: no-repeat; background-size: cover;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0);"
	></div>

	<!-- Content -->
	<main>
		<div class="grid lg:grid-cols-3">
			<div class="lg:col-span-2">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<h1 class="text-4xl md:text-6xl">
						Decentralized compute power in one click.
					</h1>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.5s both`}>
					<p class="text-xl">
						The first and only <b>sustainable</b> <b>professional</b> decentralized
						<b>High Performance Computing</b> Ecosystem.
					</p>
				</AnimatedInView>

				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 1s both`}>
					<a
						role="button"
						href="https://docs.deepsquare.run/workflow/overview"
						target="_blank"
						rel="noopener"
						style="text-transform: uppercase"
						class="my-2">Get started</a
					>
					<a
						role="button"
						href="https://t.me/DeepSquareProject"
						target="_blank"
						rel="noopener"
						style="text-transform: uppercase"
						class="my-2 outline"><span>Join our Telegram</span></a
					>
				</AnimatedInView>
			</div>
		</div>
	</main>
</section>

<section id="presentation" class="min-h-screen">
	<header>
		<center>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
				<h2>Accelerate Your Projects and Scale on HPC with Ease and Trust</h2>
			</AnimatedInView>
		</center>
	</header>

	<main>
		<div class="grid justify-items-center gap-4 md:grid-cols-3">
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
				<div class="mb-2">
					<img
						height="64"
						width="64"
						style="max-height: 64px; max-width: 64px;"
						src={YAMLIcon}
						alt="YAML Icon"
					/>
				</div>
				<h3>Easy to Use and Deploy</h3>
				<p>
					DeepSquare simplifies job submission by abstracting runtimes from specifications,
					presenting a user-friendly standard — encapsulated within a concise, straightforward YAML
					format instead of a busy shell script.
				</p>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out 0.2s both`}>
				<div class="mb-2">
					<img
						style="max-height: 64px; max-width: 64px;"
						height="64"
						width="64"
						src={ContainerIcon}
						alt="Container Icon"
					/>
				</div>
				<h3>Containers on HPC</h3>
				<p>
					DeepSquare provides comprehensive HPC and containerization functionalities, granting
					widespread accessibility to low-level optimization, parallelization, precise resource
					scheduling, and hardware accelerators within a decentralized infrastructure.
				</p>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out 0.4s both`}>
				<div class="mb-2">
					<img
						style="max-height: 64px; max-width: 64px;"
						height="64"
						width="64"
						src={HandshakeIcon}
						alt="Handshake Icon"
					/>
				</div>
				<h3>Transparent, Fair, Accessible to everyone</h3>
				<p>
					Through its advanced scheduling system deployed on Blockchain, DeepSquare ensures
					transparent, fair and equitable access for all users, irrespective of their status or
					skills, guaranteeing that every demand is met on the decentralized infrastructure.
				</p>
			</AnimatedInView>
		</div>
	</main>
</section>

<section id="applications">
	<header>
		<center>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
				<h2>For AI, Rendering, Simulations...</h2>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
				<p>
					DeepSquare supports a wide range of computing needs. From GPU-intensive applications to
					parallelized workflows, DeepSquare is perfect to speed up your projects. We provide
					examples that you can test and deploy in one click.
				</p>
			</AnimatedInView>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
				<p>Try them out!</p>
			</AnimatedInView>
		</center>
	</header>

	<main>
		<center><Applications /></center>
	</main>
</section>

<section id="dps">
	<header>
		<center>
			<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
				<small>Powered by</small>
				<h2>The DPS Token</h2>
			</AnimatedInView>
		</center>
	</header>

	<main>
		<center>
			<div class="max-w-2xl">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<center><img height="386" width="386" class="aura" src={DPS} alt="DPS token" /></center>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<p>
						The DeepSquare ecosystem is powered by the <a
							href="https://snowtrace.io/token/0xf192caE2e7Cd4048Bea307368015E3647c49338e"
							>DPS token</a
						>
						on the <a href="https://www.avax.network">Avalanche Network</a>, which is used to reward
						infrastructure providers and consume compute resources on DeepSquare.
					</p>
				</AnimatedInView>
			</div>
		</center>
	</main>
</section>

<section id="partners" class="m-0">
	<main>
		<center>
			<section id="builders">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
					<h2>Builders</h2>
				</AnimatedInView>
				<div class="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
					{#each builders as builder, index}
						<AnimatedInView
							once={true}
							animation={`from-bottom-slow 0.4s ease-out ${index / 4}s both`}
						>
							<main>
								<div
									style="max-width: 256px; min-height: 172px; max-height: 100px;"
									class="aura my-4 flex items-center justify-center"
								>
									<a href={builder.href} target="_blank" rel="noopener noreferrer">
										<img
											style="max-height: 100px;"
											height="172"
											width="172"
											src={builder.img}
											alt={builder.name}
										/>
									</a>
								</div>
								<!-- <h4>{builder.name}</h4> -->
								<p>{builder.description}</p>
							</main>
						</AnimatedInView>
					{/each}
				</div>
			</section>
			<section id="incubators-accelerators">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
					<h2>Incubators &amp; Accelerators</h2>
				</AnimatedInView>
				<div class="grid content-stretch justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{#each incubatorsAndAccelerators as incubator, index}
						<AnimatedInView
							once={true}
							animation={`from-bottom-slow 0.4s ease-out ${index / 4}s both`}
						>
							<main>
								<div
									style="max-width: 256px; min-height: 172px; max-height: 100px;"
									class="aura my-4 flex items-center justify-center"
								>
									<a href={incubator.href} target="_blank" rel="noopener noreferrer">
										<img style="max-height: 100px;" src={incubator.img} alt={incubator.name} />
									</a>
								</div>
								<!-- <h4>{incubator.name}</h4> -->
								<p>{incubator.description}</p>
							</main>
						</AnimatedInView>
					{/each}
				</div>
			</section>
			<section id="technology-partners">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
					<h2>Technology Partners</h2>
				</AnimatedInView>
				<div class="grid content-stretch justify-items-center gap-4">
					{#each technologyPartners as partner, index}
						<AnimatedInView
							once={true}
							animation={`from-bottom-slow 0.4s ease-out ${index / 4}s both`}
						>
							<main>
								<div
									style="max-width: 256px; min-height: 172px; max-height: 100px;"
									class="aura my-4 flex items-center justify-center"
								>
									<a href={partner.href} target="_blank" rel="noopener noreferrer">
										<img style="max-height: 100px;" src={partner.img} alt={partner.name} />
									</a>
								</div>
								<!-- <h4>{partner.name}</h4> -->
								<p>{partner.description}</p>
							</main>
						</AnimatedInView>
					{/each}
				</div>
			</section>
			<section id="organisations-associations">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
					<h2>Organizations and Associations</h2>
				</AnimatedInView>
				<div class="grid content-stretch justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{#each organizationsAndAssociations as organizationOrAssociation, index}
						<AnimatedInView
							once={true}
							animation={`from-bottom-slow 0.4s ease-out ${index / 4}s both`}
						>
							<main>
								<div
									style="max-width: 256px; min-height: 172px; max-height: 100px;"
									class="aura my-4 flex items-center justify-center"
								>
									<a
										href={organizationOrAssociation.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											style="max-height: 100px;"
											src={organizationOrAssociation.img}
											alt={organizationOrAssociation.name}
										/>
									</a>
								</div>
								<!-- <h4>{organizationOrAssociation.name}</h4> -->
								<p>{organizationOrAssociation.description}</p>
							</main>
						</AnimatedInView>
					{/each}
				</div>
			</section>
		</center>
	</main>
</section>

<style>
	#partners img {
		filter: var(--mono-img-filter);
	}

	section h2 {
		font-size: 2.5rem;
	}

	section h3 {
		font-size: 1.75rem;
	}
</style>
