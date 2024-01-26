<script lang="ts">
	import AnimatedInView from '$components/AnimatedInView.svelte';
	import DevApp from '$lib/assets/media/Circle-icons-dev.svg';
	import Unity from '$lib/assets/media/U_Logo_White_RGB.svg';
	import Blender from '$lib/assets/media/blender_logo_no_socket_white.png';
	import TextToImage from '$lib/assets/media/texttoimage.svg';
	import Upscaling from '$lib/assets/media/upscale_icon.svg';
	import Community from '$lib/assets/media/users-solid.svg';

	const applications = [
		{
			name: 'TextToImage',
			description:
				'<b>Text to Image</b>: Create an image based on given textual descriptions or captions.',
			img: TextToImage,
			href: 'https://app.deepsquare.run/texttoimage'
		},
		{
			name: 'Upscaling',
			description: '<b>Upscaling</b>: Upscale your images with Real ESRGAN.',
			img: Upscaling,
			href: 'https://app.deepsquare.run/upscaling'
		},
		{
			name: 'Unity',
			description:
				'<b>Unity Render Streaming</b>: Render in real-time your Unity project in the cloud.',
			img: Unity,
			width: 378,
			height: 378,
			href: 'https://app.deepsquare.run/unity'
		},
		{
			name: 'Blender',
			description: '<b>Blender</b>: Render in your Blender project in the cloud.',
			img: Blender,
			width: 378,
			height: 378,
			href: 'https://app.deepsquare.run/blender'
		},
		{
			name: 'Dev',
			description: '<b>Develop:</b> Write and deploy your own applications.',
			img: DevApp,
			href: 'https://app.deepsquare.run/sandbox'
		},
		{
			name: 'And more...',
			img: Community,
			description: '<b>Community workflows</b>: Discover and run community workflows.',
			href: 'https://github.com/deepsquare-io/workflow-catalog'
		}
	];
</script>

<div>
	<div class="grid place-content-around justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each applications as application, index}
			<AnimatedInView once={true} animation={`from-bottom 1s ease-out ${index / 10}s both`}>
				<a href={application.href} target="_blank" rel="noopener noreferrer">
					<article class="aura m-0 flex min-h-80 flex-col items-center justify-center p-1 px-4">
						<div class="flex flex-col items-center justify-center" style="height: 200px;">
							<img
								width={application.width ?? 128}
								height={application.height ?? 128}
								src={application.img}
								alt={application.name}
							/>
						</div>
						<p style="color: var(--h1-color)">{@html application.description}</p>
					</article>
				</a>
			</AnimatedInView>
		{/each}
	</div>
</div>
