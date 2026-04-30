import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon({ iconDir: 'src/icons' })],
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.mp4'],
  },
});
