<script lang="ts">
	const title = 'For Investors';

	import Telegram from '$lib/assets/media/telegram.svg';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section id="investors">
	<header>
		<h1 style="font-weight: 400;"><b>Flash Sale</b></h1>

		<h1 style="font-weight: 400;">TOZEX Platform</h1>

		<h2 style="font-weight: 400;"><b>December 27, 2023</b></h2>
	</header>

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
			<a role="button" href="https://share-eu1.hsforms.com/1qf0dlM_XSwe8s_1c6cvrqgev6gi"
				>Secure Your Spot in the Flash Sale</a
			>
		</center>
	</main>

	<footer>
		<center>
			<h4>Join our Community</h4>
			<div>
				<a href="https://t.me/DeepSquareProject" target="_blank">
					<img src={Telegram} alt="Telegram" />
				</a>
			</div>
		</center>
	</footer>
</section>
