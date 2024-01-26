<script lang="ts">
	const title = 'Our Story';

	import Background from '$lib/assets/media/b5-min.png';
	import Spots1 from '$lib/assets/media/spots1.svg';

	import Arnaud from '$lib/assets/media/Arnaud_DLC-1.jpg';
	import Charly from '$lib/assets/media/Charly_Mancel.jpg';
	import Diarmuid from '$lib/assets/media/D.jpg';
	import Florin from '$lib/assets/media/Florin.jpg';
	import Christophe from '$lib/assets/media/LilloC.jpg';
	import Maja from '$lib/assets/media/MajaTeamBuilding_11ratioDPS.jpg';
	import Mario from '$lib/assets/media/Mario.jpg';
	import Philippe from '$lib/assets/media/Phillip.jpg';

	import Berat from '$lib/assets/media/Berat.jpg';
	import Carolina from '$lib/assets/media/Carolina-Marcalo.png';
	import Loic from '$lib/assets/media/Dr-Loic-Leray.png';
	import Fernando from '$lib/assets/media/Fernando-Gutierrez.png';
	import Florent from '$lib/assets/media/Florent-Rouxelin.png';
	import Pamela from '$lib/assets/media/Pamela-Delgado.png';
	import Tuomo from '$lib/assets/media/Tuomo-Pyykkonen.png';

	import AnimatedInView from '$components/AnimatedInView.svelte';
	import Parallax from '$components/Parallax.svelte';
	import OpacityInView from '$lib/components/OpacityInView.svelte';
	import Portrait from '$lib/components/Portrait.svelte';

	import Blockchain from '$lib/assets/media/blockchain-icon.svg';
	import Change from '$lib/assets/media/change-svgrepo-com.svg';
	import DPS2D from '$lib/assets/media/dps_2d.svg';
	import MachineLearning from '$lib/assets/media/machine-learning-03-svgrepo-com.svg';
	import People from '$lib/assets/media/people-group-svgrepo-com.svg';
	import ServerRack from '$lib/assets/media/server-rack-svgrepo-com.svg';

	const story = [
		{
			id: 'origin',
			title: 'Our Origins: From Mining to Meaning',
			content: `<p>In 2020, we ran a powerful 70MW crypto mining farm in Sweden with many GPUs.<p/>
<p>However, we realized that focusing solely on Ethereum mining contradicted our core principles. This led us to <b>shift towards impactful endeavors with genuine meaning</b>.</p>`,
			illustration: `<img class="max-h-[35vh] lg:max-h-full" height="512" width="512" src=${Change}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		},
		{
			id: 'shift-hpc',
			title: 'The Shift to High-Performance Computing',
			content:
				'<p>The question was evident: "How could we redirect our hardware for a more meaningful purpose?"</p><p>This prompted us to delve into <b>High-Performance Computing (HPC)</b>, a field brimming with potential and in harmony with our mission.</p>',
			illustration: `<img class="max-h-[35vh] lg:max-h-full" class="max-h-[35vh]" height="386" width="386" src=${ServerRack}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		},
		{
			id: 'rise-ai',
			title: 'Embracing the Rise of AI',
			content:
				'<p>Anticipating the rapid ascent of AI but also the absence of decentralized infrastructure, our team identified our true mission.</p><p>With a team of experts in AI, cloud infrastructure, and blockchain technology, we possessed the knowledge required for a new venture – <b>the creation of DeepSquare and its decentralized High-Performance Computing (HPC)</b>.</p>',
			illustration: `<img class="max-h-[35vh] lg:max-h-full" height="512" width="512" src=${MachineLearning}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		},
		{
			id: 'challenging-status-quo',
			title: 'Our Vision: Challenging the Status Quo',
			content:
				'<p>DeepSquare emerged from the aspiration to provide a <b>fair</b> and <b>transparent</b> alternative to the dominant cloud providers such as AWS and GCP.</p><p>We advocate for a <b>community-owned approach</b>, <b>prioritizing sustainability</b> in every aspect of our operations.</p>',
			illustration: `<img class="max-h-[35vh] lg:max-h-full" height="512" width="512" src=${Blockchain}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		},
		{
			id: 'tokenization',
			title: 'Innovation through Tokenization',
			content:
				"<p>We're transforming computing power with Web3 tokenization. Our ecosystem is crafted to distribute computing power <b>fairly, efficiently, and transparently</b>. At the core of this vision is the DPS token, evolving in tandem with our infrastructure.</p>",
			illustration: `<img class="max-h-[35vh] lg:max-h-full" height="512" width="512" src=${DPS2D}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		},
		{
			id: 'collaborative-future',
			title: 'Fostering a Collaborative Future',
			content:
				"<p>DeepSquare is more than just a platform; it's a <b>thriving community</b>. We actively support and provide grants to diverse projects within our ecosystem, fostering a <b>collaborative</b> and <b>innovative future</b> in high-performance computing.</p>",
			illustration: `<img class="max-h-[35vh] lg:max-h-full" height="512" width="512" src=${People}>`,
			animation: 'fade 0.5s ease-in-out 0.4s both'
		}
	];

	const coreTeam = [
		{
			name: 'Arnaud de La Chapelle',
			role: 'CEO',
			description: 'International Business and Sales Leader',
			avatar: Arnaud
		},
		{
			name: 'Philippe Thiault',
			role: 'CFO',
			description:
				'Experienced Chief Financial / Operations Officer with a demonstrated track record in High-Tech industry.',
			avatar: Philippe
		},
		{
			name: 'Dr Florin Dzeladini',
			role: 'Head of Product & Blockchain',
			description:
				'Data Scientist, Blockchain Expert, Entrepreneur with focus on AI, Robotics and Distributed systems',
			avatar: Florin
		},
		{
			name: 'Christophe Lillo',
			role: 'Head of Infrastructure',
			description: 'HPC Hardware Expert, Linux Guru, Crypto Expert',
			avatar: Christophe
		},
		{
			name: 'Charly Mancel',
			role: 'Head of Platform Development',
			description: 'Engineer, Blockchain Expert and Crypto Enthusiast',
			avatar: Charly
		},
		{
			name: 'Diarmuid Daltún',
			role: 'Head of Community',
			description:
				'Global Leader Sales & Marketing, Software & Cloud, Sustainability Advocate, Entrepreneur',
			avatar: Diarmuid
		},
		{
			name: 'Maja Kehic',
			role: 'Head of Marketing',
			description: 'Tech-savvy marketing professional',
			avatar: Maja
		},
		{
			name: 'Mario Vasconcelos',
			role: 'Community Manager',
			description: 'Digital designer developing and managing communities',
			avatar: Mario
		}
	];

	const advisorTeam = [
		{
			name: 'Dr Pamela Delgado',
			description:
				'Assistant Professor at the University of Applied Sciences of Valais in Switzerland (HES-SO Valais-Wallis) and a lecturer at EPFL',
			avatar: Pamela
		},
		{
			name: 'Dr Berat Denizdurduran',
			description: 'Technology Expert',
			avatar: Berat
		},
		{
			name: 'Fernando Gutierrez',
			description: 'Investor in Alternative Assets, Former Board Member of Dash Core Team',
			avatar: Fernando
		},
		{
			name: 'Carolina Marçalo',
			description:
				'Blockchain enthusiast, digital platforms and marketplaces lead Former Member of AppCoins Core Team',
			avatar: Carolina
		},
		{
			name: 'Dr Florent Rouxelin',
			description:
				'Assistant Professor of Finance in the Department of Finance, College of Business at Florida International University',
			avatar: Florent
		},
		{
			name: 'Tuomo Pyykkonen',
			description: 'Expert in International Services Sales and Delivery and Business Development',
			avatar: Tuomo
		},
		{
			name: 'Dr Loic Leray',
			description: 'Sustainability Advisor',
			avatar: Loic
		}
	];

	let innerWidth = 0;
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="The story of DeepSquare. Learn our story and how we are building the future of cloud computing."
	/>
</svelte:head>

<section data-theme="dark" id="presentation" class="relative">
	<Parallax
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Background}&quot;); background-position: center 20%; background-repeat: no-repeat; background-size: cover;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0);"
	></div>
	<main>
		<div class="grid md:grid-cols-3">
			<div class="md:col-span-2">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<p class="text-2xl md:text-4xl">Empowering</p>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.4s both`}>
					<h1 class="text-4xl md:text-6xl">
						Sustainable and Democratized High-Performance Computing
					</h1>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.8s both`}>
					<p class="text-2xl md:text-4xl">with <b>DeepSquare</b></p>
				</AnimatedInView>
			</div>
		</div>
	</main>
</section>

<section id="summary">
	<main>
		<center>
			<AnimatedInView
				once={true}
				animation={`from-bottom-slow 0.4s ease-out both`}
				class="max-w-5xl"
			>
				<p>
					<b>DeepSquare</b> is dedicated to making high-performance computing accessible to all,
					focusing on three core values: <b>democratization</b>, <b>sustainability</b>, and
					<b>collaboration</b>. Our aim is to challenge the dominance of major cloud providers by
					offering a <b>fair</b> and <b>transparent</b> alternative. We believe in a
					<b>community-owned</b>
					approach, ensuring that computing power is distributed equitably through innovative web3 tokenization.
					DeepSquare fosters a <b>collaborative future</b> by supporting projects within its
					ecosystem, promoting <b>inclusivity</b>, and striving for
					<b>sustainability in every step of its operations.</b>
				</p>
			</AnimatedInView>
		</center>
	</main>
</section>

<section id="story" class="relative" style="background-color: transparent;">
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(10px); background-color: var(--background-color);"
	></div>
	<Parallax
		factor={0.2}
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Spots1}&quot;); background-position: center center; background-size: cover;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(0px); background-color: rgba(0, 0, 0, 0);"
	></div>
	<main>
		{#each story as chapter, index}
			<OpacityInView
				class="grid min-h-[70vh] max-w-5xl place-items-center justify-around gap-8 lg:grid-cols-3"
			>
				{#if index % 2 != 0 || innerWidth < 1024}
					<div class="col-span-2 grid grid-cols-subgrid place-items-center">
						<AnimatedInView
							once={true}
							animation={chapter.animation}
							class={index % 2 == 0 ? 'text-end' : 'text-start'}
						>
							{@html chapter.illustration}
						</AnimatedInView>
					</div>
				{/if}
				<section id={chapter.id} class="m-0">
					<header>
						<AnimatedInView
							once={true}
							animation={`from-${index % 2 == 0 ? 'left' : 'right'}-slow 0.4s ease-out both`}
							class={index % 2 == 0 ? 'text-start' : 'text-end'}
						>
							<h1>{chapter.title}</h1>
						</AnimatedInView>
					</header>
					<main>
						<AnimatedInView
							once={true}
							animation={`from-${index % 2 == 0 ? 'left' : 'right'}-slow 0.4s ease-out both`}
							class={index % 2 == 0 ? 'text-start' : 'text-end'}
						>
							{@html chapter.content}
						</AnimatedInView>
					</main>
				</section>
				{#if index % 2 == 0}
					<div class="col-span-2 hidden grid-cols-subgrid place-items-center lg:grid">
						<AnimatedInView once={true} animation={chapter.animation} class="col-start-2 text-end">
							{@html chapter.illustration}
						</AnimatedInView>
					</div>
				{/if}
			</OpacityInView>
		{/each}
	</main>
</section>

<section id="teams">
	<header>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
			<h1 class="text-5xl">Faces behind DeepSquare</h1>
		</AnimatedInView>
	</header>
	<main>
		<section id="core-team">
			<header>
				<center>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
						<small>Team</small>
						<h1>Core Team</h1>
					</AnimatedInView>
				</center>
			</header>

			<main>
				<div
					class="grid place-content-around justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4"
				>
					{#each coreTeam as { name, role, description, avatar }, index}
						<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out 0.5s both`}>
							<div class="m-0 p-0" style="max-width: 256px">
								<Portrait src={avatar} alt={name} />

								<div class="mx-2 my-4">
									<div style="height: 4em;"><h4>{name}</h4></div>

									<div style="height: 3em;"><p>{role}</p></div>

									<p>{description}</p>
								</div>
							</div>
						</AnimatedInView>
					{/each}
				</div>
			</main>
		</section>
		<section id="advisors">
			<header>
				<center>
					<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
						<small>Team</small>
						<h1>Advisors</h1>
					</AnimatedInView>
				</center>
			</header>

			<main>
				<div
					class="grid place-content-around justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4"
				>
					{#each advisorTeam as { name, description, avatar }}
						<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out 0.5s both`}>
							<div class="m-0 p-0" style="max-width: 256px">
								<Portrait src={avatar} alt={name} />

								<div class="mx-2 my-4">
									<div style="height: 4em;"><h4>{name}</h4></div>

									<p>{description}</p>
								</div>
							</div>
						</AnimatedInView>
					{/each}
				</div>
			</main>
		</section>
	</main>
</section>

<svelte:window bind:innerWidth />

<style>
	@keyframes -global-circle-top {
		from {
			clip-path: circle(0% at 50% 0%);
		}
		to {
			clip-path: circle(200% at 50% 0%);
		}
	}

	@keyframes -global-rect-top {
		from {
			clip-path: xywh(0% 0% 100% 0%);
		}
		to {
			clip-path: xywh(0% 0% 100% 100%);
		}
	}

	@keyframes -global-fade {
		from {
			opacity: 0%;
		}
		to {
			opacity: 100%;
		}
	}

	@keyframes -global-focus {
		from {
			opacity: 80%;
		}
		to {
			opacity: 100%;
		}
	}
</style>
