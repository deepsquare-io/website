<script lang="ts">
	const title = 'About';

	import Governance from '$lib/assets/media/community_icon-1.svg';
	import Mission from '$lib/assets/media/Group-129.svg';
	import Vision from '$lib/assets/media/icon1.svg';

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

	import WhatIsDeepSquareBg from '$lib/assets/media/b5-min.png';
	import Glos1 from '$lib/assets/media/glos1-15-min.png';

	import Pozadina1 from '$lib/assets/media/pozadina01.svg';
	import Pozadina2 from '$lib/assets/media/pozadina02.svg';
	import Pozadina3 from '$lib/assets/media/pozadina03.svg';

	import AnimatedInView from '$components/AnimatedInView.svelte';
	import Parallax from '$components/Parallax.svelte';
	import Portrait from '$lib/components/Portrait.svelte';

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
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="The story of DeepSquare. Learn our story and how we are building the future of cloud computing."
	/>
</svelte:head>

<section data-theme="dark" id="what-is-deepsquare" class="relative">
	<Parallax
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{WhatIsDeepSquareBg}&quot;); background-position: center 20%; background-size: cover;"
	></Parallax>
	<div
		class="absolute inset-0 -z-10"
		style="backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0);"
	></div>
	<main>
		<div class="grid md:grid-cols-3">
			<div class="md:col-span-2">
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out both`}>
					<h1 class="text-4xl md:text-6xl">What is DeepSquare?</h1>
				</AnimatedInView>
				<AnimatedInView once={true} animation={`from-bottom-slow 0.5s ease-out 0.5s both`}>
					<p class="text-xl">
						A platform to seamlessly interconnect users with decentralized supercomputing resources.
					</p>
				</AnimatedInView>
			</div>
		</div>
	</main>
</section>

<section id="description">
	<main data-theme="dark" class="m-0">
		<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
			<article
				class="aura relative grid place-items-center justify-around md:grid-cols-4"
				style="background-image: url(&quot;{Pozadina3}&quot;); background-position: center right; background-size: cover;"
			>
				<div
					class="absolute inset-0"
					style="background-image: url(&quot;{Glos1}&quot;); background-position: bottom center; background-size: cover; opacity: 0.56;"
				></div>
				<div class="md:col-span-3">
					<h2>Governance</h2>
					<p>
						The DeepSquare project is a community led project, meaning that the community actively
						participates in streaming the decision making process with a system modelled on a
						community-owned smart contract protocol.
					</p>
				</div>
				<center>
					<img src={Governance} alt="Governance" />
				</center>
			</article>
		</AnimatedInView>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
			<article
				class="aura relative grid place-items-center justify-around md:grid-cols-4"
				style="background-image: url(&quot;{Pozadina1}&quot;); background-position: center right; background-size: cover;"
			>
				<div
					class="absolute inset-0"
					style="background-image: url(&quot;{Glos1}&quot;); background-position: bottom center; background-size: cover; opacity: 0.56;"
				></div>
				<div class="md:col-span-3">
					<h2>Our Mission</h2>
					<p>
						DeepSquare aims to support innovation in Europe and beyond and to offer a true
						alternative to the hyperscalers by providing world-class decentralised, responsible,
						sustainable, and managed High-Performance Computing (HPC) as an Ecosystem.
					</p>
				</div>
				<center>
					<img
						style="filter: saturate(0%) brightness(2) opacity(0.5);"
						src={Mission}
						alt="Mission"
					/>
				</center>
			</article>
		</AnimatedInView>
		<AnimatedInView once={true} animation={`from-bottom-slow 0.4s ease-out both`}>
			<article
				class="aura relative grid place-items-center justify-around md:grid-cols-4"
				style="background-image: url(&quot;{Pozadina2}&quot;); background-position: center right; background-size: cover;"
			>
				<div
					class="absolute inset-0"
					style="background-image: url(&quot;{Glos1}&quot;); background-position: bottom center; background-size: cover; opacity: 0.56;"
				></div>
				<div class="md:col-span-3">
					<h2>Vision</h2>
					<p>
						Empowering the professional cloud with the DeepSquare decentralised interoperable
						heterogeneous network in a sustainable and environmentally beneficial way.
					</p>
				</div>
				<center>
					<img src={Vision} alt="Vision" />
				</center>
			</article>
		</AnimatedInView>
	</main>
</section>

<section id="teams">
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
