<script lang="ts">
	import { onMount } from 'svelte';

	// --- Dark Theme
	let darkTheme: boolean | undefined;
	let thisDocument: Document;

	onMount(() => {
		darkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
		thisDocument = document;
	});

	$: if (darkTheme && thisDocument) {
		thisDocument.documentElement.setAttribute('data-theme', 'dark');
	} else if (thisDocument) {
		thisDocument.documentElement.setAttribute('data-theme', 'light');
	}

	function toggleDarkTheme() {
		darkTheme = !darkTheme;
	}
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a on:click={toggleDarkTheme} href="#">
	{#if darkTheme}
		<i class="fa-regular fa-moon"></i>
	{:else}
		<i class="fa-solid fa-sun"></i>
	{/if}
</a>
