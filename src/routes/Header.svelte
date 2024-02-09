<script lang="ts">
	import { base } from '$app/paths';
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

	type Route = {
		name: string;
		href?: string;
		children?: Route[];
		icon?: string;
		isExternal?: boolean;
		isButton?: boolean;
	};

	const routes: Route[] = [
		{
			name: 'Home',
			href: base + '/'
		},
		{
			name: 'Solutions',
			href: base + '/solutions'
		},
		{
			name: 'Our Story',
			href: base + '/story'
		},
		// {
		// 	name: 'Contact',
		// 	href: 'https://share-eu1.hsforms.com/1uKsDKrlhRnGk3UeUEz7DLgev6gi'
		// },
		// {
		// 	name: 'FAQ',
		// 	href: base + '/faqs'
		// },
		{
			name: 'Blog <span class="material-symbols-outlined">arrow_outward</span>',
			href: 'https://medium.com/@DeepSquare.io',
			isExternal: true
		},

		{
			name: 'Invest <span class="material-symbols-outlined">arrow_outward</span>',
			href: 'https://app.deepsquare.io',
			isExternal: true
		},
		{
			name: 'Get Started <span class="material-symbols-outlined">arrow_outward</span>',
			href: 'https://docs.deepsquare.run/workflow/overview',
			isExternal: true
		},
		{
			name: 'GitHub',
			icon: '<i class="si si-github"></i>',
			href: 'https://github.com/deepsquare-io/grid',
			isExternal: true
		},
		{
			name: 'Telegram',
			icon: '<i class="si si-telegram"></i>',
			href: 'https://t.me/DeepSquareProject',
			isExternal: true
		},
		{
			name: 'Discord',
			icon: '<i class="si si-discord"></i>',
			href: 'https://discord.gg/KYWh28BkUE',
			isExternal: true
		}
	];
</script>

<!-- This div add margin on top of documents. -->
<header>
	{#if showTopBar}
		<nav
			data-theme="dark"
			transition:slide={{ duration: 200, easing: quintInOut, axis: 'y' }}
			class="fixed inset-x-0 top-0 z-50 px-8 {showTopBarBackground
				? 'bg-nav-top'
				: 'bg-nav-scrolled shadow-lg'}"
		>
			<ul>
				<li class="lg:hidden">
					<a href={base + '/'}
						><img height="100" width="200" src={DeepSquareLogo} alt="DeepSquare Logo" /></a
					>
				</li>
			</ul>
			<ul class="hidden lg:flex">
				<li>
					<a href={base + '/'}
						><img height="100" width="200" src={DeepSquareLogo} alt="DeepSquare Logo" /></a
					>
				</li>
				{#each routes as route}
					{#if route.href}
						<li>
							{#if route.icon}
								<a
									href={route.href}
									target={route.isExternal ? '_blank' : undefined}
									rel={route.isExternal ? 'noopener noreferrer' : undefined}>{@html route.icon}</a
								>
							{:else}
								<a
									role={route.isButton ? 'button' : undefined}
									href={route.href}
									target={route.isExternal ? '_blank' : undefined}
									rel={route.isExternal ? 'noopener noreferrer' : undefined}>{@html route.name}</a
								>
							{/if}
						</li>
					{:else if route.children}
						<li role="list" dir="rtl">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a>{@html route.name}</a>
							<ul role="listbox">
								{#each route.children as child}
									<li>
										<a
											href={child.href}
											target={child.isExternal ? '_blank' : undefined}
											rel={child.isExternal ? 'noopener noreferrer' : undefined}
											>{@html child.name}</a
										>
									</li>
								{/each}
							</ul>
						</li>
					{/if}
				{/each}
				<!-- <li class="flex justify-end">
					<DarkThemeButton />
				</li> -->
			</ul>
			<ul></ul>

			<ul class="lg:hidden">
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" on:click={toggle}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
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

	<!-- Narbar for mobile -->
	{#if open}
		<div
			in:fade={{ duration: inDuration }}
			out:fade={{ delay: outDuration, duration: outDuration }}
			class="fixed relative inset-0 z-50 lg:hidden"
		>
			<!-- Fading screen -->
			<div class="fixed inset-0 h-screen w-screen bg-black opacity-75"></div>
			<!-- Pane -->
			<div class="fixed inset-0 flex h-screen flex-row-reverse">
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
					class="grid w-full sm:grid-cols-2"
				>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="hidden sm:block" on:click={toggle}></div>
					<article class="bg-nav-floating m-0">
						<aside>
							<nav data-theme="dark">
								<ul>
									<li class="flex justify-end">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#" on:click={toggle}
											><svg
												class="h-6 w-6"
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
											{#if route.href}
												<a
													role={route.isButton ? 'button' : undefined}
													target={route.isExternal ? '_blank' : undefined}
													rel={route.isExternal ? 'noopener noreferrer' : undefined}
													href={route.href}>{@html route.name} {@html route.icon ?? ''}</a
												>
											{:else if route.children}
												<details>
													<summary>{route.name}</summary>
													<ul style="text-align: end;">
														{#each route.children as child}
															<li>
																<a
																	href={child.href}
																	target={child.isExternal ? '_blank' : undefined}
																	rel={child.isExternal ? 'noopener noreferrer' : undefined}
																	>{@html child.name}</a
																>
															</li>
														{/each}
													</ul>
												</details>
											{/if}
										</li>
									{/each}

									<!-- <li class="flex justify-end">
										<DarkThemeButton />
									</li> -->
								</ul>
							</nav>
						</aside>
					</article>
				</div>
			</div>
		</div>
	{/if}
</header>

<svelte:window bind:scrollY />

<style>
	header {
		z-index: 50;
	}
</style>
