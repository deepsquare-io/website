<script lang="ts">
	const title = 'DeepSquare';

	import YData from '$lib/assets/media/YData.svg';
	import Openfabric from '$lib/assets/media/openfabric-logo-black-1.png';
	import SquareFactory from '$lib/assets/media/squarefactory-logo-neg.svg';

	import BIRDIncubator from '$lib/assets/media/BIRDIncubator.svg';
	import HealthTechLisboa from '$lib/assets/media/HealthTechLisboa.svg';
	import LookAIVentures from '$lib/assets/media/LAIV_Logo_Blue.png';
	import AICenterLipik from '$lib/assets/media/Lipik_Logo.png';

	import Submer from '$lib/assets/media/Submer.svg';

	import Applications from '$components/Applications.svelte';
	import BackgroundParticles from '$components/BackgroundParticles.svelte';
	import DeepSquareLogoParticles from '$components/DeepSquareLogoParticles.svelte';
	import BlockchainGameAlliance from '$lib/assets/media/BGA.png';
	import CryptoValleyAssociation from '$lib/assets/media/CVA.png';
	import EcoCloud from '$lib/assets/media/EcoCloud.png';
	import HubFranceIA from '$lib/assets/media/HubFranceAI.png';

	import ContainerIcon from '$lib/assets/media/container-registry-svgrepo-com.svg';
	import HandshakeIcon from '$lib/assets/media/handshake-regular.svg';
	import YAMLIcon from '$lib/assets/media/yaml-file-icon.svg';

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
</svelte:head>

<section data-theme="dark" id="introduction" class="relative">
	<div
		class="absolute inset-0 -z-10"
		style="background: rgb(32,14,81); background: linear-gradient(135deg, rgba(32,14,81,1) 0%, rgba(187,50,169,1) 100%);"
	></div>
	<BackgroundParticles class="absolute inset-0 -z-10" />
	<DeepSquareLogoParticles class="absolute inset-0 -z-10" />
	<main>
		<div class="grid lg:grid-cols-3">
			<div class="lg:col-span-2">
				<h1 class="text-4xl md:text-6xl">Decentralized compute power in one click</h1>
				<p class="text-xl">
					The first and only <b>sustainable</b> <b>professional</b> decentralized
					<b>High Performance Computing</b> Ecosystem.
				</p>

				<a
					role="button"
					href="https://docs.deepsquare.run/workflow/overview"
					style="text-transform: uppercase"
					class="my-2">Get started</a
				>
				<a
					role="button"
					href="https://discord.com/invite/3PQkJGvUGB"
					style="text-transform: uppercase"
					class="outline my-2"><span>Join our Discord</span></a
				>
			</div>
		</div>
	</main>
</section>

<section id="presentation" class="min-h-screen bg-section-a">
	<header>
		<center>
			<h2>Accelerate Your Projects and Scale on HPC with Ease and Trust</h2>
		</center>
	</header>

	<main>
		<div class="grid md:grid-cols-3 gap-4 justify-items-center">
			<div>
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
			</div>
			<div>
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
			</div>
			<div>
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
					Through its advanced scheduling system, DeepSquare ensures transparent, fair and equitable
					access for all users, irrespective of their status or skills, guaranteeing that every
					demand is met on the decentralized infrastructure.
				</p>
			</div>
		</div>
	</main>
</section>

<section id="applications">
	<header>
		<center>
			<h2>For AI, Rendering, Simulations...</h2>
			<p>
				DeepSquare supports a wide range of computing needs. From GPU-intensive applications to
				parallelized workflows, DeepSquare is perfect to speed up your projects. We provide examples
				that you can test and deploy in one click.
			</p>
			<p>Try them out!</p>
		</center>
	</header>

	<main>
		<center><Applications /></center>
	</main>
</section>

<section id="partners" class="m-0 bg-section-a">
	<main>
		<center>
			<section id="builders">
				<h2>Builders</h2>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center">
					{#each builders as builder}
						<div style="max-width: 512px">
							<main>
								<div
									style="min-height: 172px; max-height: 100px;"
									class="flex justify-center items-center my-4"
								>
									<a href={builder.href}>
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
						</div>
					{/each}
				</div>
			</section>
			<section id="incubators-accelerators">
				<h2>Incubators &amp; Accelerators</h2>
				<div class="grid sm:grid-cols-2 justify-items-center content-stretch">
					{#each incubatorsAndAccelerators as incubator}
						<div style="max-width: 512px">
							<main>
								<div
									style="min-height: 172px; max-height: 100px;"
									class="flex justify-center items-center my-4"
								>
									<a href={incubator.href}>
										<img style="max-height: 100px;" src={incubator.img} alt={incubator.name} />
									</a>
								</div>
								<!-- <h4>{incubator.name}</h4> -->
								<p>{incubator.description}</p>
							</main>
						</div>
					{/each}
				</div>
			</section>
			<section id="technology-partners">
				<h2>Technology Partners</h2>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center content-stretch">
					{#each technologyPartners as partner}
						<div style="max-width: 512px">
							<main>
								<div
									style="min-height: 172px; max-height: 100px;"
									class="flex justify-center items-center my-4"
								>
									<a href={partner.href}>
										<img style="max-height: 100px;" src={partner.img} alt={partner.name} />
									</a>
								</div>
								<!-- <h4>{partner.name}</h4> -->
								<p>{partner.description}</p>
							</main>
						</div>
					{/each}
				</div>
			</section>
			<section id="organisations-associations">
				<h2>Organizations and Associations</h2>
				<div class="grid sm:grid-cols-2 justify-items-center content-stretch">
					{#each organizationsAndAssociations as organizationOrAssociation}
						<div style="max-width: 512px">
							<main>
								<div
									style="min-height: 172px; max-height: 100px;"
									class="flex justify-center items-center my-4"
								>
									<a href={organizationOrAssociation.href}>
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
						</div>
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
</style>
