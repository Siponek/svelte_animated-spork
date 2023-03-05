/** @type {import('tailwindcss').Config} */
// Prefix tw- for all tailwind classes
config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	prefix: 'tw-',
	theme: {
		extend: {}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = config;
