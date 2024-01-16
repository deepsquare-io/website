<script lang="ts">
	import DevApp from '$lib/assets/media/DevApp0.png';
	import TextToImage from '$lib/assets/media/TextToImage.png';
	import Unity from '$lib/assets/media/U_Logo_Black_RGB.svg';
	import Upscaling from '$lib/assets/media/Upscaling.png';
	import Blender from '$lib/assets/media/blender_logo.svg';

	const applications = [
		{
			name: 'Dev',
			description: '<strong>Dev</strong>: Develop deploy your own applications.',
			img: DevApp
		},
		{
			name: 'TextToImage',
			description:
				'<strong>Text to Image</strong>: Create an image based on given textual descriptions or captions. Supported models: Stable Diffusion v2.1 and Waifu Diffusion v1.4.',
			img: TextToImage
		},
		{
			name: 'Upscaling',
			description: '<strong>Upscaling</strong>: Upscale your images with Real ESRGAN.',
			img: Upscaling
		},
		{
			name: 'Unity',
			description:
				'<strong>Unity Render Streaming</strong>: Render in real-time your Unity project in the cloud.',
			img: Unity,
			width: 300,
			height: 300
		},
		{
			name: 'Blender',
			description: '<strong>Blender</strong>: Render in your Blender project in the cloud.',
			img: Blender,
			width: 300,
			height: 300
		}
	];
</script>

<div>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center place-content-around">
		{#each applications as application}
			<div>
				<div class="py-4 flex justify-center items-center flex-col" style="height: 200px;">
					<img
						width={application.width ?? 100}
						height={application.height ?? 100}
						src={application.img}
						alt={application.name}
					/>
				</div>
				<p>{@html application.description}</p>
			</div>
		{/each}
	</div>
</div>
