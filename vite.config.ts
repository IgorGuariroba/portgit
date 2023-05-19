import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portgit/',
  build: {
    outDir: 'docs',
    assetsDir: '.',
    sourcemap: true,
    emptyOutDir: true,
  },
})
