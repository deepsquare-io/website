<script lang="ts">
	import Lightbulb from '$lib/assets/media/lightbulb-regular.svg';
	import type { Engine, IOptions, RecursivePartial } from '@tsparticles/engine';
	import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
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
					value: ['#C945FF', '#bb6cda']
				},
				links: {
					color: 'random',
					distance: 50,
					enable: true,
					opacity: 1,
					width: 1
				},
				size: {
					value: 1
				},
				move: {
					enable: true,
					speed: 0.2,
					outModes: 'bounce'
				},
				number: {
					value: (window.innerHeight * window.innerWidth) / 10000
				},
				effect: {
					close: true,
					fill: true,
					options: {}
				},
				opacity: {
					animation: {
						enable: true,
						speed: 2,
						sync: false
					},
					value: {
						min: 0.05,
						max: 0.4
					}
				}
			},
			fpsLimit: 24,
			polygon: {
				draw: {
					enable: false,
					stroke: {
						color: '#fff',
						width: 1,
						opacity: 0.2
					}
				},
				enable: true,
				move: {
					radius: 10
				},
				position: {
					x: 65,
					y: 25
				},
				inline: {
					arrangement: 'equidistant'
				},
				scale: 1,
				type: 'inline',
				url: Lightbulb
			}
		};
	});

	void particlesInit(async (engine: Engine) => {
		await loadSlim(engine);
		await loadPolygonMaskPlugin(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id={`tsparticles-${Math.random()}`}
	class={$$props.class}
	options={particlesConfig}
/>
