export function closeOnNavigation(node: HTMLElement) {
	const handle = () => {
		node.removeAttribute('open');
	};

	document.addEventListener('popstate', handle, true);

	return {
		destroy() {
			document.removeEventListener('popstate', handle, true);
		}
	};
}
