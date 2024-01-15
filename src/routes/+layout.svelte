<script lang="ts">
	import Whitepaper from '$lib/assets/media/DeepSquare_White-Paper-1.pdf';
	import Yellowpaper from '$lib/assets/media/Yellow-Paper_Tokenize_HPC.pdf';
	import logo from '$lib/assets/media/deepsquare-logo-h-neg-BIJELI-1.svg';
	import poweredby from '$lib/assets/media/poweredby.svg';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';

	const year = new Date().getFullYear();
</script>

<Nav />

<main>
	<slot />
</main>

<footer>
	<div class="grid md:grid-cols-4">
		<div class="md:col-span-2">
			<div class="box">
				<div class="py-4">
					<img src={logo} alt="DeepSquare Logo" />
				</div>
				<p>
					DeepSquare Association, Switzerland, is the founder and holds the initial governance of
					DeepSquare token. The Association’s purpose is to offer goods and services in the fields
					of information and communication technologies, software, hardware, and related consulting
					services.
				</p>
				<p>
					Copyright © {year} – <strong>The DeepSquare Association</strong> – CHE-130.663.967, Switzerland.
				</p>
			</div>
		</div>
		<div>
			<div>
				<div>
					<h5 class="py-4 m-0">Resources</h5>
				</div>
				<div>
					<aside>
						<nav>
							<ul>
								<li>
									<a href={Whitepaper}>Whitepaper</a>
								</li>
								<li>
									<a href={Yellowpaper}>Yellow Paper</a>
								</li>
								<li>
									<a href="https://docs.deepsquare.run/workflow/overview">Documentation</a>
								</li>
								<li>
									<a title="Terms and Conditions" href="/terms-and-conditions"
										>Terms and Conditions</a
									>
								</li>
								<li>
									<a title="Privacy Policy" rel="privacy-policy" href="/privacy-policy"
										>Privacy Policy</a
									>
								</li>
							</ul>
						</nav>
					</aside>
				</div>
			</div>
		</div>
		<div class="py-4">
			<img src={poweredby} alt="Powered by Avalanche" />
		</div>
	</div>
</footer>
