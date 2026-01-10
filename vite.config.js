import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nitin_shukla.github.io/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
