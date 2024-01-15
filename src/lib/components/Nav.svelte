<script lang="ts">
	import { navigating } from '$app/stores';
	import { quintInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	let open = false;

	function toggle() {
		open = !open;
	}

	$: if ($navigating) open = false;

	const inDuration = 200;
	const outDuration = 200;
</script>

<nav class="px-2">
	<ul>
		<li><a href="/"><strong>DeepSquare</strong></a></li>
	</ul>
	<ul class="hidden md:flex">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/investors">Investors</a>
		</li>
		<li>
			<a href="/technology">Technology</a>
		</li>
		<li>
			<a href="/deeplabs">DeepLabs</a>
		</li>
		<li>
			<a href="/deepsquare-blog">Blog</a>
		</li>
		<li>
			<a href="/faqs">FAQ</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>

	<ul class="md:hidden">
		<li>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" on:click={toggle}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</a>
		</li>
	</ul>
</nav>

{#if open}
	<div
		in:fade={{ duration: inDuration }}
		out:fade={{ delay: outDuration, duration: outDuration }}
		class="md:hidden fixed inset-0 z-50 relative"
	>
		<!-- Fading screen -->
		<div class="fixed bg-black inset-0 opacity-75 h-screen w-screen"></div>
		<!-- Pane -->
		<div class="fixed inset-0 flex flex-row-reverse h-screen">
			<div
				in:slide={{
					delay: inDuration,
					duration: inDuration,
					easing: quintInOut,
					axis: 'x'
				}}
				out:slide={{
					duration: outDuration,
					easing: quintInOut,
					axis: 'x'
				}}
				class="w-full grid sm:grid-cols-2"
			>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="hidden sm:block" on:click={toggle}></div>
				<article class="m-0">
					<aside>
						<nav>
							<ul>
								<li class="flex justify-end">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#" on:click={toggle}
										><svg
											class="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											></path>
										</svg></a
									>
								</li>
								<li class="flex justify-end">
									<a href="/about">About</a>
								</li>
								<li class="flex justify-end">
									<a href="/investors">Investors</a>
								</li>
								<li class="flex justify-end">
									<a href="/technology">Technology</a>
								</li>
								<li class="flex justify-end">
									<a href="/deeplabs">DeepLabs</a>
								</li>
								<li class="flex justify-end">
									<a href="/deepsquare-blog">Blog</a>
								</li>
								<li class="flex justify-end">
									<a href="/faqs">FAQ</a>
								</li>
								<li class="flex justify-end">
									<a href="/contact">Contact</a>
								</li>
							</ul>
						</nav>
					</aside>
				</article>
			</div>
		</div>
	</div>
{/if}
