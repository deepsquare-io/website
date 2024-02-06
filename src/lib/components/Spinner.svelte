<script lang="ts">
	const frames = ['⣾ ', '⣽ ', '⣻ ', '⢿ ', '⡿ ', '⣟ ', '⣯ ', '⣷ '];

	let frame = 0;
	setInterval(() => {
		frame = (frame + 1) % frames.length;
	}, 100);
</script>

<span style={$$props.style} class={$$props.class}>{` ${frames[frame]}`}</span>
