/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'background': '#faf6f4',
				'title': '#212121',
			}
		},
	},
	plugins: [],
}
