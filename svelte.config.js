import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import analyze from 'rollup-plugin-analyzer';
import { resolve } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#app',
		vite: {
			build: {
				rollupOptions: {
					plugins: [analyze()]
				}
			},
			resolve: {
				alias: [
					{ find: '$lib', replacement: resolve('src/lib') },
					{ find: '$assets', replacement: resolve('/src/assets') },
					{ find: '$components', replacement: resolve('/src/components') }
				]
			}
		}
	}
};

export default config;
