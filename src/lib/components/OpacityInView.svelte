<script lang="ts">
	import { inview, type Options } from 'svelte-inview';

	export let in_opacity = '1';
	export let out_opacity = '0.3';
	export let transition_duration = '0.5s';

	export let options: Options = {
		threshold: 0.7
	};

	function inView(e: CustomEvent<ObserverEventDetails>) {
		const { inView, node } = e.detail;
		if (inView && node) {
			node.style.opacity = in_opacity;
		} else {
			node.style.opacity = out_opacity;
		}
	}
</script>

<div
	use:inview={options}
	on:inview_change={inView}
	style="transition: opacity {transition_duration} ease-in-out; {$$props.style}"
	class={$$props.class}
>
	<slot />
</div>
