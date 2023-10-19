/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'blue-shade' : '#384D59',
        'neon-shade' : '#dac3e8',
        'hover-shade' : '#F25041',
        'light-shade' : '#F28444',
        'box-shade' : '#202E40'
      }
    },
	},
	plugins: [],
}
