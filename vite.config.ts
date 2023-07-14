import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [
    basicSsl()
  ]
})