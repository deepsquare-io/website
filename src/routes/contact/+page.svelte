<script lang="ts">
	const title = 'Contact';

	import logo from '$lib/assets/media/deepsquare-logo-h-neg.svg';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section id="contact">
	<header><h1>{title}</h1></header>

	<main>
		<div>
			<h3 style="font-weight: 400;">Deep<strong>Square</strong></h3>
			<p>Gotthardstrasse 26<br />6300 Zug<br />Switzerland</p>
		</div>
		[TODO: Hubspot Form]
	</main>

	<footer>
		<div>
			<p>
				<span style="font-weight: 400;"
					>Deep<strong>Square</strong> is disrupting the cloud supply chain, business and delivery models:
					owned, served and grown by the expanding community of actors in its inclusive ecosystem.&nbsp;</span
				><span style="font-weight: 400;"
					>A completely novel model that frees companies and individuals of the need to manage the
					underlying infrastructure, security and updates, DeepSquare helps innovators reach their
					desired outcomes faster, saving time &amp; money.</span
				>
			</p>
			<p>
				<span style="font-weight: 400;"
					>Deep<strong>Square</strong>, the tokenised, decentralised cloud.</span
				>
			</p>
		</div>
		<center>
			<a href="/"><img height="45" width="216" src={logo} alt="DeepSquare Logo" /></a>
		</center>
	</footer>
</section>

<section id="newsletter">
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
