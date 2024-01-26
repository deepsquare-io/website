<script lang="ts">
	import { onMount } from 'svelte';

	export let factor: number = 0.5;
	export let offset: number = 0;

	let scrollY: number = 0;

	let element: HTMLElement;
	let positionY: number;

	function getCoords(elem: HTMLElement) {
		// crossbrowser version
		var box = elem.getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = docEl.scrollTop || body.scrollTop;
		var scrollLeft = docEl.scrollLeft || body.scrollLeft;

		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		var top = box.top + scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;

		return { top: Math.round(top), left: Math.round(left) };
	}

	onMount(() => {
		const rect = getCoords(element);
		positionY = rect.top;
	});
</script>

<svelte:window bind:scrollY />

<div
	bind:this={element}
	style="clip: rect(0, auto, auto, 0); transform: translateY({(scrollY - positionY) * factor +
		offset}px); {$$props.style}"
	class={$$props.class}
>
	<slot />
</div>
