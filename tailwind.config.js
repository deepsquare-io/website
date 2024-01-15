/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	blocklist: ['list-item'],
	theme: {
		fontFamily: {
			sans: [
				'Montserrat',
				'Segoe UI',
				'Roboto',
				'Ubuntu',
				'Cantarell',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]
		},
		extend: {}
	},
	corePlugins: {
		preflight: false
	},
	plugins: []
};
