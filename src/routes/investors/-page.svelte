<script lang="ts">
	const title = 'For Investors';

	import InvestorsBg from '$lib/assets/media/coins-dark07-1-min.png';
	import Glos from '$lib/assets/media/glos4-tamniji-4-min.png';
	import Telegram from '$lib/assets/media/telegram.svg';
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="Invest in DeepSquare and join the future of cloud computing. Flash Sale is open on the TOZEX Platform since December 27, 2023!"
	/>
</svelte:head>

<section
	data-theme="dark"
	id="investors-banner"
	class="relative -z-10"
	style="background-image: radial-gradient(at center center, #000 0%, #120641 100%);"
>
	<!-- Overlay image -->
	<div
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{InvestorsBg}&quot;); background-position: bottom center; background-repeat: no-repeat; background-size: contain;"
	></div>

	<!-- Content -->
	<header>
		<h1 class="text-4xl md:text-6xl">Flash Sale</h1>

		<h1 class="text-3xl">TOZEX Platform</h1>

		<h2 class="text-3xl">December 27, 2023</h2>
	</header>
</section>

<section id="investors">
	<main>
		<p>
			<span
				>As we gear up for our TGE and the big launch on the Avalanche-Mainnet in April 2024,
				DeepSquare is thrilled to announce an exclusive end-of-year Flash Sale. Don’t miss out on
				DeepSquare’s pre-launch excitement with our end-of-year Flash Sale.&nbsp;</span
			>
		</p>

		<div class="grid md:grid-cols-3">
			<center>
				<h1>Price</h1>
				<p>$0.75 per DPS</p>
			</center>
			<center>
				<h1>Vesting</h1>
				<p>No vesting. Immediate liquidity after the TGE.</p>
			</center>
			<center>
				<h1>TGE</h1>
				<p>April 2024</p>
			</center>
		</div>

		<p>
			<span
				>To access more information and participate in the sale, simply click the button below and
				complete the form. This will grant you exclusive details and entry into the sale.</span
			>
		</p>

		<center class="my-4">
			<a
				target="_blank"
				rel="noopener"
				role="button"
				href="https://share-eu1.hsforms.com/1qf0dlM_XSwe8s_1c6cvrqgev6gi"
				>Secure Your Spot in the Flash Sale</a
			>
		</center>
	</main>

	<footer class="relative py-20">
		<!-- Overlays -->
		<div
			class="absolute inset-0"
			style="background-image: url(&quot;{Glos}&quot;); background-position: center center; background-repeat: no-repeat; background-size: contain;"
		></div>

		<!-- Content -->
		<center>
			<h4>Join our Community</h4>
			<div>
				<a href="https://t.me/DeepSquareProject" target="_blank">
					<img
						style="filter: var(--mono-img-filter);"
						id="telegram"
						src={Telegram}
						alt="Telegram"
					/>
				</a>
			</div>
		</center>
	</footer>
</section>
