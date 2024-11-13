import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.md'],
      preprocess: [mdsvex(mdsvexConfig)]
    })
  ]
});