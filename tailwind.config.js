/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./app/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			colors: {
				primary: '#FE5F00',
				grey: '#B1B1B1',
				success: '#1BB486',
				danger: '#FF544A',
				warning: '#917C12',
			},
			maxWidth: {
				base: '1440px',
			},
		},
	},
	plugins: [],
}
