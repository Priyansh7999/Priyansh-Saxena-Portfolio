import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5645-2401-4900-7cea-2e76-ddd6-5dab-f084-a01f.ngrok-free.app']
  }
})
