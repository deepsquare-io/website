<script lang="ts">
	const title = 'Technology';

	import sustainability from '$lib/assets/media/Blog-1-min.jpg';
	import ClusterFactory from '$lib/assets/media/ClusterFactory-min-scaled.jpg';
	import DeepSquareCommunity from '$lib/assets/media/DeepSquareCommunity-min-scaled.jpg';
	import DeepSquareGrid from '$lib/assets/media/DeepSquareGrid-min-scaled.jpg';
</script>

<svelte:head>
	<title>{title} - DeepSquare</title>
</svelte:head>

<section
	data-theme="dark"
	id="technology-banner"
	style="background-color: var(--background-color);"
>
	<main>
		<h1 style="font-size: 64px;">Accelerate your Innovation</h1>

		<p>
			Build your projects with ease on <b>DeepSquare</b> – the platform built by builders for builders.
			Say goodbye to hardware optimization and infrastructure maintenance hassle.
		</p>
	</main>
</section>

<section id="technology">
	<header>
		<center><h1>The Foundation Pillars of DeepSquare</h1></center>
	</header>
	<main>
		<div id="stack" class="grid lg:grid-cols-3 gap-4 justify-items-center place-items-stretch">
			<div>
				<article>
					<header>
						<h4><center>DeepSquare Grid</center></h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareGrid} alt="DeepSquare Grid" />
						</div>

						<p class="lg:min-h-80 xl:min-h-60">
							A network of server clusters forming the pool of compute required to process users’
							workloads. Or, as we love to call it, the meta-cluster.
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								href="https://share-eu1.hsforms.com/186i4x9HOQAyEAboeeRaBCwev6gi"
								><span>Become a grid partner</span></a
							>
						</center>
					</footer>
				</article>
			</div>
			<div>
				<article>
					<header>
						<h4><center>DeepSquare ClusterFactory</center></h4>
					</header>

					<main>
						<div>
							<img src={ClusterFactory} alt="DeepSquare ClusterFactory" />
						</div>
						<p class="lg:min-h-80 xl:min-h-60">
							An open-source Kubernetes-based infrastructure orchestrator that automates the process
							of deploying, managing and monitoring compute-optimized clusters from bare metal
							servers to VMs and containers.
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								href="https://docs.deepsquare.run/deepsquare-grid/clusterfactory/overview"
								><span>Learn more</span></a
							>
						</center>
					</footer>
				</article>
			</div>
			<div>
				<article>
					<header>
						<h4><center>DeepSquare Community</center></h4>
					</header>

					<main>
						<div>
							<img src={DeepSquareCommunity} alt="DeepSquare Community" />
						</div>
						<p class="lg:min-h-80 xl:min-h-60">
							Builders, developers, AI engineers, artists, blockchain enthusiasts, disruptors,
							innovators and visionaries. Join us in our mission to democratize access to HPC!
						</p>
					</main>

					<footer class="mt-0 min-h-40">
						<center>
							<a
								role="button"
								class="outline"
								style="text-transform: uppercase;"
								href="https://t.me/DeepSquareProject"><span>Join us</span></a
							>
						</center>
					</footer>
				</article>
			</div>
		</div>
	</main>
</section>

<section id="sustainability" class="bg-section-a">
	<header>
		<center><h1>Sustainability</h1> </center>
	</header>

	<main>
		<div class="grid md:grid-cols-4 gap-4">
			<div>
				<img src={sustainability} alt="sustainability" />
			</div>
			<div class="md:col-span-3">
				<p>
					The sustainability approach taken by DeepSquare is to provide a ready to use sustainable
					configuration, reducing the impact of compute resources to its minimum. DeepSquare looks
					to bring the latest technologies together to decrease electrical consumption through
					renewable sources and deliver supercomputer-strength processing power within reach of
					small businesses, researchers, and academic institutions for the first time.
				</p>
				<p>
					We advocate <b>Immersion Cooling</b>, a practice of placing electronic equipment into a
					thermally conductive, and electronically resistive liquid that is 1,200 times more
					efficient than air at capturing heat. The heat captured through immersion cooling can be
					exchanged in a simple, but efficient liquid-to-liquid heat exchanger. The heat then can
					directly be reused for heating purposes or industrial processes.
				</p>
			</div>
		</div>
		<center>
			<a
				role="button"
				class="outline"
				style="text-transform: uppercase;"
				href="https://metaverseinsider.tech/2023/01/12/data-scientists-and-artist-heating-up-homes-in-basel/"
				><span>Learn more</span></a
			>
		</center>
	</main>
</section>

<style>
	#stack article,
	#stack article > header,
	#stack article > footer {
		margin-left: 0;
		margin-right: 0;
	}

	#stack article > header {
		margin-bottom: 0;
		height: 8em;
	}

	#stack article {
		padding-left: 0;
		padding-right: 0;
	}

	#stack article > main > p {
		padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
	}
</style>
