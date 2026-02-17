import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  proxy: {
      '/': {
        target: 'http://localhost:5173', // Sesuaikan dengan port Vite kamu
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      }
  },
  server: {
    allowedHosts: [
      'gaslit-deadra-unrequisitely.ngrok-free.dev' // Masukkan domain dari error tadi
    ]
  }
})
