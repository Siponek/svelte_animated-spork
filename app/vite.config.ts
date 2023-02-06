import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

let OUTER_PORT, INNER_PORT: string;

if (process.env.OUTER_PORT_FRONTEND) {
	OUTER_PORT = process.env.OUTER_PORT_FRONTEND;
} else {
	OUTER_PORT = '3000';
}
if (process.env.INNER_PORT_FRONTEND) {
	INNER_PORT = process.env.INNER_PORT_FRONTEND;
} else {
	INNER_PORT = '3000';
}
console.log('Port for client browser_> OUTER_PORT', OUTER_PORT);
console.log('Port exposed in Vite_> INNER_PORT', INNER_PORT);
console.log(`You propably want to connect via http://localhost:${OUTER_PORT}/`);
let config: UserConfig;
if (process.env.LOCAL_DEV) {
	console.log(
		'Using local dev config (no HMR, no polling, no host binding, no port binding, no port forwarding)'
	);
	config = {
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
		// server: {
		// 	host: '0.0.0.0',
		// 	port: +INNER_PORT
		// }
	};
} else {
	console.log('Using docker config');
	config = {
		plugins: [sveltekit()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		},
		server: {
			host: '0.0.0.0',
			hmr: {
				clientPort: +OUTER_PORT
			},
			port: +INNER_PORT,
			watch: {
				usePolling: true
			}
		}
	};
}

export default config;
