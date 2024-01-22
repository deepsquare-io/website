<script lang="ts">
	export let factor: number = 0.1;
	export let offset: number = 100;

	let scrollY: number = 0;

	let element: HTMLElement;
</script>

<svelte:window bind:scrollY />

<div
	bind:this={element}
	style="top: {-scrollY * factor - offset}px; bottom: {scrollY * factor -
		offset}px; {$$props.style}"
	class={$$props.class}
>
	<slot />
</div>
