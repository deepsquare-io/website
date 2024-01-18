<script lang="ts">
	import { base } from '$app/paths';

	const title = 'Contact';

	import logo from '$lib/assets/media/deepsquare-logo-h-neg.svg';
	import ContactBg from '$lib/assets/media/fv-min.jpg';
	import Glos from '$lib/assets/media/glos4-tamniji-4-min.png';
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
</svelte:head>

<section
	data-theme="dark"
	id="contact"
	style="background-image: url({ContactBg}); background-size: cover; background-repeat: no-repeat;"
>
	<header><h1>{title}</h1></header>

	<main>
		<div>
			<h3 style="font-weight: 400;">DeepSquare</h3>
			<p>Gotthardstrasse 26<br />6300 Zug<br />Switzerland</p>
		</div>
		[TODO: Hubspot Form]
	</main>

	<footer>
		<div>
			<p>
				<span style="font-weight: 400;"
					>DeepSquare is disrupting the cloud supply chain, business and delivery models: owned,
					served and grown by the expanding community of actors in its inclusive ecosystem.&nbsp;</span
				><span style="font-weight: 400;"
					>A completely novel model that frees companies and individuals of the need to manage the
					underlying infrastructure, security and updates, DeepSquare helps innovators reach their
					desired outcomes faster, saving time &amp; money.</span
				>
			</p>
			<p>
				<span style="font-weight: 400;">DeepSquare, the tokenised, decentralised cloud.</span>
			</p>
		</div>
		<center>
			<a href={base + '/'}><img height="45" width="216" src={logo} alt="DeepSquare Logo" /></a>
		</center>
	</footer>
</section>

<section id="newsletter" class="py-20 relative">
	<div
		class="absolute inset-0"
		style="background-image: url({Glos}); background-position: 76% center; background-repeat: no-repeat; background-size: contain;"
	></div>
	<header>
		<h2>Sign up for our Newsletter</h2>
		<small>
			Stay current with a recap of the latest DeepSquare news and updates! The decentralised
			sustainable infrastructure focus on High-Performance Computing using blockchain technology to
			provide world-class performance and transparency.
		</small>
	</header>

	<main>[TODO: Hubspot Form]</main>
</section>
