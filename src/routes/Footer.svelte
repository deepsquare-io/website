<script lang="ts">
	import { base } from '$app/paths';
	import Whitepaper from '$lib/assets/media/DeepSquare_White-Paper-1.pdf';
	import Yellowpaper from '$lib/assets/media/Yellow-Paper_Tokenize_HPC.pdf';
	import logo from '$lib/assets/media/deepsquare-logo-h-neg-BIJELI-1.svg';
	import poweredby from '$lib/assets/media/poweredby.svg';

	const year = new Date().getFullYear();
</script>

<footer class="pt-4">
	<div class="grid md:grid-cols-4 justify-around content-start place-items-center">
		<div class="md:col-span-2">
			<div>
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
					Copyright © {year} – <b>The DeepSquare Association</b> – CHE-130.663.967, Switzerland.
				</p>
				<img src={poweredby} alt="Powered by Avalanche" />
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
									<a style="text-decoration: underline; color: #FFF;" href={Whitepaper}
										>Whitepaper</a
									>
								</li>
								<li>
									<a style="text-decoration: underline; color: #FFF;" href={Yellowpaper}
										>Yellow Paper</a
									>
								</li>
								<li>
									<a
										style="text-decoration: underline; color: #FFF;"
										target="_blank"
										rel="noopener"
										href="https://docs.deepsquare.run/workflow/overview">Documentation</a
									>
								</li>
								<li>
									<a
										style="text-decoration: underline; color: #FFF;"
										title="Terms and Conditions"
										href="{base}/terms-and-conditions">Terms and Conditions</a
									>
								</li>
								<li>
									<a
										style="text-decoration: underline; color: #FFF;"
										title="Privacy Policy"
										rel="privacy-policy"
										href="{base}/privacy-policy">Privacy Policy</a
									>
								</li>
							</ul>
						</nav>
					</aside>
				</div>
			</div>
		</div>
		<div>
			<h5 class="py-4 m-0">Contact Us</h5>

			<p>
				<a
					style="color: #FFF;"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.google.com/maps/place/Gotthardstrasse+26,+6300+Zug,+Switzerland"
					><span class="material-symbols-outlined"> location_on </span> DeepSquare Association, Gotthardstrasse
					26, 6300 Zug, Switzerland</a
				>
			</p>

			<p>
				<a
					target="_blank"
					rel="noopener"
					style="color: #FFF;"
					href="https://share-eu1.hsforms.com/1uKsDKrlhRnGk3UeUEz7DLgev6gi"
					><span class="material-symbols-outlined"> contact_page </span> External Contact Form
					<span class="material-symbols-outlined"> arrow_outward </span></a
				>
			</p>
		</div>
	</div>
</footer>
