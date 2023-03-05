import preprocess from 'svelte-preprocess';
import node_adapter from '@sveltejs/adapter-node';
// import node from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-static';
// import auto_adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: node_adapter({
			out: 'node_build',
			precompress: false,
			envPrefix: ''
		})
		// adapter: static_adapter({
		// 	out: 'node_build',
		// 	precompress: false,
		// 	envPrefix: ''
		// })
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// 	precompress: false,
		// 	strict: true
		// })
	},
	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'meta-shift',
				holdMode: true,
				showToggleButton: 'always',
				toggleButtonPos: 'bottom-right'
			}
		}
	}
};

export default config;
