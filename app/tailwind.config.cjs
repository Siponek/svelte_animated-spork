/** @type {import('tailwindcss').Config} */
// Prefix tw- for all tailwind classes
config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// prefix: 'tw-',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		// Here you can add your own colors, settings etc to tailwind theme
		extend: {
			container: {
				padding: '2rem'
			},
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			colors: {
				// blue: '#1fb6ff',
				// purple: '#7e5bef',
				// pink: '#ff49db',
				// orange: '#ff7849',
				// green: '#13ce66',
				// yellow: '#ffc82c',
				// 'gray-dark': '#273444',
				// gray: '#8492a6',
				// 'gray-light': '#d3dce6',
				'ets-blue': '#1fb6ff',
				'ets-grey': '#505050'
			}
		}
	}
	// plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = config;
