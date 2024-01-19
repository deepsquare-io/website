<script lang="ts">
	import type { Engine, IOptions, RecursivePartial } from '@tsparticles/engine';
	import { loadSlim } from '@tsparticles/slim';
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount, type ComponentType } from 'svelte';

	let ParticlesComponent: ComponentType;
	let particlesConfig: RecursivePartial<IOptions>;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;

		particlesConfig = {
			fullScreen: false,
			particles: {
				shape: {
					type: 'circle'
				},
				color: {
					value: ['#FFFFFF']
				},
				links: {
					color: '#C945FF',
					distance: 75,
					enable: true,
					opacity: 1,
					width: 1
				},
				size: {
					value: {
						min: 1,
						max: 2
					}
				},
				move: {
					enable: true,
					speed: 0.1
				},
				number: {
					value: 200
				},
				effect: {
					close: true,
					fill: true,
					options: {}
				}
			},
			fpsLimit: 12
		};
	});

	void particlesInit(async (engine: Engine) => {
		await loadSlim(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	class={$$props.class}
	id={`tsparticles-${Math.random()}`}
	options={particlesConfig}
/>
