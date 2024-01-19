<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '../app.scss';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	const year = new Date().getFullYear();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />

<main in:fade={{ duration: 100, delay: 200 }} out:fade={{ duration: 100 }}>
	<slot />
</main>

<Footer />

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	@keyframes -global-from-bottom {
		0% {
			transform: translateY(100vh);
			opacity: 0;
		}
		50% {
			opacity: 0;
			transform: translateY(20vh);
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-from-bottom-slow {
		0% {
			opacity: 0;
			transform: translateY(10vh);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-from-left-slow {
		0% {
			opacity: 0;
			transform: translateX(-10vw);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-from-right-slow {
		0% {
			opacity: 0;
			transform: translateX(10vw);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
