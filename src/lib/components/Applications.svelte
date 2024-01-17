<script lang="ts">
	import DevApp from '$lib/assets/media/Circle-icons-dev.svg';
	import Unity from '$lib/assets/media/U_Logo_Black_RGB.svg';
	import Blender from '$lib/assets/media/blender_logo.svg';
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
	<div class="grid md:grid-cols-2 gap-4 lg:grid-cols-3 justify-items-center place-content-around">
		{#each applications as application}
			<article class="m-0 p-1 min-h-80 flex justify-center items-center flex-col">
				<div class="flex justify-center items-center flex-col" style="height: 200px;">
					<a href={application.href}>
						<img
							class="aura"
							width={application.width ?? 128}
							height={application.height ?? 128}
							src={application.img}
							alt={application.name}
						/>
					</a>
				</div>
				<p>{@html application.description}</p>
			</article>
		{/each}
	</div>
</div>
