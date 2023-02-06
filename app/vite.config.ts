import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const OUTER_PORT = process.env.OUTER_PORT_FRONTEND
const INNER_PORT = process.env.INNER_PORT_FRONTEND
// const OUTER_PORT = process.env.OUTER_PORT_FRONTEND
// const INNER_PORT = process.env.INNER_PORT_FRONTEND
// const OUTER_PORT = import.meta.env.VITE_OUTER_PORT_FRONTEND
// const INNER_PORT = import.meta.env.VITE_INNER_PORT_FRONTEND
console.log("Port for client browser_> OUTER_PORT", OUTER_PORT)
console.log("Port exposed in Vite_> INNER_PORT", INNER_PORT)
console.log(`You propably want to connect via http://localhost:${OUTER_PORT}/`)
const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: "0.0.0.0",
		hmr: {
		  clientPort: OUTER_PORT,
		},
		port: INNER_PORT, 
		watch: {
		  usePolling: true,
		},
	},
};

export default config;
