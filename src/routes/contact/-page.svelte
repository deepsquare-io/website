<script lang="ts">
	import { base } from '$app/paths';

	const title = 'Contact';

	import logo from '$lib/assets/media/deepsquare-logo-h-neg.svg';
	import ContactBg from '$lib/assets/media/fv-min.jpg';
	import Glos from '$lib/assets/media/glos4-tamniji-4-min.png';
	import { onMount } from 'svelte';

	onMount(async () => {
		await hbspt.forms.create({
			region: 'eu1',
			portalId: '24969330',
			formId: 'b8ab032a-b961-4671-a4dd-4794133ec32e',
			target: '#contact-form'
		});

		await hbspt.forms.create({
			region: 'eu1',
			portalId: '24969330',
			formId: 'f00e3666-1e87-43af-b1f7-d303e09f24c8',
			target: '#newsletter-form'
		});

		const contactIFrame: HTMLElement = document
			.getElementById('contact-form')!
			.querySelector('iframe')!;
		contactIFrame.style.backgroundColor = 'transparent';

		const newsletterIFrame: any = document
			.getElementById('newsletter-form')!
			.querySelector('iframe')!;
		newsletterIFrame.style.backgroundColor = 'transparent';
	});
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
	<meta
		name="description"
		content="Contact DeepSquare for more information about our products and services."
	/>
	<script
		charset="utf-8"
		type="text/javascript"
		src="//js-eu1.hsforms.net/forms/embed/v2.js"
	></script>
</svelte:head>

<section
	data-theme="dark"
	id="contact"
	style="background-image: url(&quot;{ContactBg}&quot;); background-size: cover; background-repeat: no-repeat;"
>
	<header><h1>{title}</h1></header>

	<main>
		<div>
			<h3 style="font-weight: 400;">DeepSquare</h3>
			<p>Gotthardstrasse 26<br />6300 Zug<br />Switzerland</p>
		</div>
		<div id="contact-form"></div>
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

<section id="newsletter" class="relative py-20">
	<!-- Overlays -->
	<div
		class="absolute inset-0 -z-10"
		style="background-image: url(&quot;{Glos}&quot;); background-position: 76% center; background-repeat: no-repeat; background-size: contain;"
	></div>

	<!-- Content -->
	<header>
		<h2>Sign up for our Newsletter</h2>
		<small>
			Stay current with a recap of the latest DeepSquare news and updates! The decentralised
			sustainable infrastructure focus on High-Performance Computing using blockchain technology to
			provide world-class performance and transparency.
		</small>
	</header>

	<main><div id="newsletter-form"></div></main>
</section>
