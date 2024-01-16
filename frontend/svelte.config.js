import adapter from '@sveltejs/adapter-auto';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: svelte({
    preprocess: preprocess(),
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;
