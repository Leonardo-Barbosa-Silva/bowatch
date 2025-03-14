import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      include: ['**/*.{png,jpg,jpeg,svg,gif,webp,avif}'],
      exclude: ['node_modules/**/*'],
      png: { quality: 100 },
      jpeg: {
        quality: 90,
        progressive: true,
      },
      svg: {
        multipass: true,
        plugins: [{ removeViewBox: false }, { removeMetadata: true }],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
})
