<script lang="ts">
	import Lightbulb from '$lib/assets/media/lightbulb-regular.png';
	import type { Engine, IOptions, IRgba, RecursivePartial } from '@tsparticles/engine';
	import { loadCanvasMaskPlugin } from '@tsparticles/plugin-canvas-mask';
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
					distance: 60,
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
					distance: 10
				},
				number: {
					value: 200
				},
				effect: {
					close: false,
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
			canvasMask: {
				enable: true,
				scale: 6,
				pixels: {
					filter: (pixel: IRgba) => pixel.a > 0
				},
				image: {
					src: Lightbulb
				},
				position: {
					x: 75,
					y: 52
				}
			}
		};
	});

	void particlesInit(async (engine: Engine) => {
		await loadSlim(engine);
		await loadCanvasMaskPlugin(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id={`tsparticles-${Math.random()}`}
	class={$$props.class}
	options={particlesConfig}
/>
