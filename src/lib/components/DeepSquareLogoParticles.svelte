<script lang="ts">
	import { base } from '$app/paths';
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
				links: {
					color: 'random',
					distance: 100,
					enable: true,
					opacity: 1,
					width: 1
				},
				size: {
					value: {
						min: 1,
						max: 4
					}
				},
				move: {
					enable: true,
					speed: 0.1,
					distance: 10
				},
				number: {
					value: 200
				},
				effect: {
					close: false,
					fill: true,
					options: {}
				}
			},
			fpsLimit: 12,
			canvasMask: {
				enable: true,
				scale: 2,
				pixels: {
					filter: (pixel: IRgba) => pixel.a > 0
				},
				image: {
					src: base + `/favicon.png`
				},
				position: {
					x: 65,
					y: 50
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
