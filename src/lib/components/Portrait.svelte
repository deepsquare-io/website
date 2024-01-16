<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="relative" style="width: 256px; height: 271px;">
	<div class="absolute" style="text-align: left; z-index: 2; width: 100%; margin-top: 15px">
		<img style="max-width: 256px; max-height: 256px; width: 100%; height: 100%;" {src} {alt} />
	</div>
	<div
		class="absolute"
		style="max-width: 256px; max-height: 256px; width: 100%; height: 100%; left: 15px; top: 0; z-index: 1; background-image: linear-gradient(60deg, #6005D8 29%, #C247FF 100%); background-color: transparent;"
	></div>
</div>
