<script lang="ts">
	const title = 'Technology';

	import sustainability from '$lib/assets/media/Blog-1-min.jpg';
	import ClusterFactory from '$lib/assets/media/ClusterFactory-min-scaled.jpg';
	import DeepSquareCommunity from '$lib/assets/media/DeepSquareCommunity-min-scaled.jpg';
	import DeepSquareGrid from '$lib/assets/media/DeepSquareGrid-min-scaled.jpg';
	import Applications from '$lib/components/Applications.svelte';
</script>

<svelte:head>
	<title>{title}</title>

	<style>
		#stack article,
		#stack article > header,
		#stack article > footer {
			margin-left: 0;
			margin-right: 0;
		}

		#stack article > header {
			margin-bottom: 0;
			height: 200px;
		}

		#stack article {
			padding-left: 0;
			padding-right: 0;
		}

		#stack article > main > p {
			padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
		}
	</style>
</svelte:head>

<section id="technology-banner">
	<main>
		<h1>Accelerate your Innovation</h1>

		<p>
			Build your projects with ease on <strong>DeepSquare</strong> – the platform built by builders for
			builders. Say goodbye to hardware optimization and maintenance hassle.
		</p>
	</main>
</section>

<section id="technology">
	<main>
		<div id="stack" class="grid md:grid-cols-3 gap-4">
			<div>
				<article>
					<header>
						<h4>DeepSquare Grid</h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareGrid} alt="DeepSquare Grid" />
						</div>
						<p>
							A network of server clusters forming the pool of compute required to process users’
							workloads. Or, as we love to call it, the meta-cluster.
						</p>
					</main>

					<footer>
						<a
							role="button"
							class="outline"
							style="text-transform: uppercase;"
							href="https://share-eu1.hsforms.com/186i4x9HOQAyEAboeeRaBCwev6gi"
							>Become a grid partner</a
						>
					</footer>
				</article>
			</div>
			<div>
				<article>
					<header>
						<h4>DeepSquare ClusterFactory</h4>
					</header>

					<main>
						<div>
							<img src={ClusterFactory} alt="DeepSquare ClusterFactory" />
						</div>
						<p>
							An open-source Kubernetes-based infrastructure orchestrator that automates the process
							of deploying, managing and monitoring compute-optimized clusters from bare metal
							servers to VMs and containers.
						</p>
					</main>

					<footer>
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								href="https://docs.deepsquare.run/deepsquare-grid/clusterfactory/overview"
								>Learn more</a
							>
						</center>
					</footer>
				</article>
			</div>
			<div>
				<article>
					<header>
						<h4>DeepSquare Community</h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareCommunity} alt="DeepSquare Community" />
						</div>
						<p>
							Builders, developers, AI engineers, artists, blockchain enthusiasts, disruptors,
							innovators, and visionaries. Join us!
						</p>
					</main>

					<footer>
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								href="https://t.me/DeepSquareProject">Join us</a
							>
						</center>
					</footer>
				</article>
			</div>
		</div>
	</main>
</section>

<section id="applications">
	<main>
		<center>
			<h2>Ready to use Applications</h2>
			<small>Current Applications. More Available Soon!</small>

			<Applications />

			<a
				role="button"
				class="outline"
				style="text-transform: uppercase;"
				href="https://app.deepsquare.run">Build on DeepSquare</a
			>
		</center>
	</main>
</section>

<section id="sustainability">
	<main>
		<div class="grid md:grid-cols-4 gap-4">
			<div>
				<img src={sustainability} alt="sustainability" />
			</div>
			<div class="md:col-span-3">
				<p>
					<span style="font-weight: 400;"
						>The sustainability approach taken by Deep<strong>Square</strong> is to provide a ready to
						use sustainable configuration,</span
					><span style="font-weight: 400;"> reducing</span><span style="font-weight: 400;">
						the impact of compute resources to its minimum. Deep<strong>Square</strong> looks to bring
						the latest technologies together to decrease electrical consumption through renewable sources
						and deliver supercomputer-strength processing power within reach of small businesses, researchers,
						and academic institutions for the first time.</span
					>
				</p>
				<p>
					<br /><span style="font-weight: 400;">We advocate Immersion </span><span
						style="font-weight: 400;">Cooling</span
					><span style="font-weight: 400;">, a </span><span style="font-weight: 400;">practice</span
					><span style="font-weight: 400;">
						of placing electronic equipment into a thermally conductive, and electronically
						resistive liquid that is 1,200 times more efficient than air at capturing heat. The heat
						captured through immersion cooling can be exchanged in a simple, but efficient
						liquid-to-liquid heat exchanger. The heat then can directly be reused for heating
						purposes or industrial processes</span
					>
				</p>
			</div>
		</div>
		<center>
			<a
				role="button"
				class="outline"
				style="text-transform: uppercase;"
				href="https://metaverseinsider.tech/2023/01/12/data-scientists-and-artist-heating-up-homes-in-basel/"
				>Learn more</a
			>
		</center>
	</main>
</section>
