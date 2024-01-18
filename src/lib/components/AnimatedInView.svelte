<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	export let options: Options = {};

	export let animation = 'none';
	export let animation_out = 'none; opacity: 0';
	export let once = false;

	let isInView = false;
</script>

<div
	use:inview={options}
	style={$$props.style}
	class={$$props.class}
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	on:inview_leave={(event) => {
		if (once) return;
		const { inView } = event.detail;
		isInView = inView;
	}}
>
	{#if isInView}
		<div style="animation: {animation};">
			<slot />
		</div>
	{:else}
		<div style="animation: {animation_out};">
			<slot />
		</div>
	{/if}
</div>
