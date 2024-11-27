import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://work-mu-sandy.vercel.app"
    },
  },
  plugins: [react()],
})


// https://work-mu-sandy.vercel.app
