<script lang="ts">
	import { navigating } from '$app/stores';
	import DeepSquareLogo from '$lib/assets/media/deepsquare-logo-h-neg.svg';
	import { quintInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	let open = false;

	function toggle() {
		open = !open;
	}

	let oldScrollY = 0;
	let scrollY = 0;
	let showTopBar = true;
	let showTopBarBackground = true;

	$: {
		showTopBarBackground = scrollY <= 100;
		showTopBar = oldScrollY > scrollY || scrollY < 100;
		oldScrollY = scrollY;
	}

	$: if ($navigating) open = false;

	const inDuration = 200;
	const outDuration = 200;

	const routes = [
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Investors',
			href: '/investors'
		},
		{
			name: 'Technology',
			href: '/technology'
		},
		{
			name: 'DeepLabs',
			href: '/deeplabs'
		},
		{
			name: 'Blog',
			href: '/deepsquare-blog'
		},
		{
			name: 'FAQ',
			href: '/faqs'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<!-- This div add margin on top of documents. -->
<header>
	{#if showTopBar}
		<nav
			transition:slide={{ duration: 200, easing: quintInOut, axis: 'y' }}
			class="fixed inset-x-0 top-0 z-25 px-4 {showTopBarBackground
				? 'bg-nav-top'
				: 'bg-nav-scrolled'}"
		>
			<ul>
				<li>
					<a href="/"><img height="100" width="200" src={DeepSquareLogo} alt="DeepSquare Logo" /></a
					>
				</li>
			</ul>
			<ul class="hidden md:flex">
				{#each routes as route}
					<li>
						<a href={route.href}>{route.name}</a>
					</li>
				{/each}
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
	{/if}
</header>

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
								{#each routes as route}
									<li class="flex justify-end">
										<a href={route.href}>{route.name}</a>
									</li>
								{/each}
							</ul>
						</nav>
					</aside>
				</article>
			</div>
		</div>
	</div>
{/if}

<svelte:window bind:scrollY />

<style>
	.bg-nav-top {
		background-color: rgba(0, 0, 0, 0.61);
	}

	.bg-nav-scrolled {
		background-color: rgba(0, 0, 0, 0.61);
		backdrop-filter: blur(8px);
	}
</style>
