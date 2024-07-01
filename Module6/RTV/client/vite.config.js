import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// I had trouble with this. Had to get help with a TA
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      },
      '/user' : {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      }
    },
    port: 5173,
  },
});