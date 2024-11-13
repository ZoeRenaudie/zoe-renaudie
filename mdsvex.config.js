import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.md'],
  layout: {
    _: './src/lib/components/MarkdownLayout.svelte'
  }
});

export default config;