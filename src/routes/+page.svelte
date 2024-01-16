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

	import BlockchainGameAlliance from '$lib/assets/media/BGA.png';
	import CryptoValleyAssociation from '$lib/assets/media/CVA.png';
	import EcoCloud from '$lib/assets/media/EcoCloud.png';
	import HubFranceIA from '$lib/assets/media/HubFranceAI.png';

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
	<title>{title}</title>
</svelte:head>

<section id="introduction">
	<main>
		<div class="grid md:grid-cols-2">
			<div>
				<h1 class="lg:text-5xl">Decentralized compute power in one click</h1>
				<p>
					The first and only <strong>sustainable</strong> <strong>professional</strong>
					decentralized
					<b>High Performance Computing</b> Ecosystem&nbsp;&nbsp;
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
					class="outline my-2">Join our Discord</a
				>
			</div>
		</div>
	</main>
</section>

<section id="presentation">
	<main>
		<center>
			<h1>DeepSquare in 2 minutes</h1>
		</center>
	</main>
</section>

<section id="applications">
	<main>
		<center>
			<h1>Ready to use applications: Your AI Hub</h1>
			<p>
				Our library already provides a good range of software applications that users can utilise to
				efficiently train their models, render and prototype their projects while remaining
				sustainable. Click on any of those to see them in action
			</p>
		</center>
	</main>
</section>

<section id="partners">
	<main>
		<center>
			<section id="builders">
				<h1>Builders</h1>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center">
					{#each builders as builder}
						<div style="max-width: 256px">
							<main>
								<div
									style="height: 128px; max-width: 128px;"
									class="flex justify-center items-center my-4"
								>
									<a href={builder.href}>
										<img height="128" width="128" src={builder.img} alt={builder.name} />
									</a>
								</div>
								<h4>{builder.name}</h4>
								<p>{builder.description}</p>
							</main>
						</div>
					{/each}
				</div>
			</section>
			<section id="incubators-accelerators">
				<h1>Incubators &amp; Accelerators</h1>
				<div class="grid sm:grid-cols-2 justify-items-center">
					{#each incubatorsAndAccelerators as incubator}
						<div style="max-width: 256px">
							<main>
								<div
									style="height: 128px; max-width: 128px;"
									class="flex justify-center items-center my-4"
								>
									<a href={incubator.href}>
										<img height="128" width="128" src={incubator.img} alt={incubator.name} />
									</a>
								</div>
								<h4>{incubator.name}</h4>
								<p>{incubator.description}</p>
							</main>
						</div>
					{/each}
				</div>
			</section>
			<section id="technology-partners">
				<h1>Technology Partners</h1>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center">
					{#each technologyPartners as partner}
						<div style="max-width: 256px">
							<main>
								<div
									style="height: 128px; max-width: 128px;"
									class="flex justify-center items-center my-4"
								>
									<a href={partner.href}>
										<img height="128" width="128" src={partner.img} alt={partner.name} />
									</a>
								</div>
								<h4>{partner.name}</h4>
								<p>{partner.description}</p>
							</main>
						</div>
					{/each}
				</div>
			</section>
			<section id="organisations-associations">
				<h1>Organizations and Associations</h1>
				<div class="grid sm:grid-cols-2 md:grid-cols-4 justify-items-center">
					{#each organizationsAndAssociations as organizationOrAssociation}
						<div style="max-width: 256px">
							<main>
								<div
									style="height: 128px; max-width: 128px;"
									class="flex justify-center items-center my-4"
								>
									<a href={organizationOrAssociation.href}>
										<img
											height="128"
											width="128"
											src={organizationOrAssociation.img}
											alt={organizationOrAssociation.name}
										/>
									</a>
								</div>
								<h4>{organizationOrAssociation.name}</h4>
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
</style>
