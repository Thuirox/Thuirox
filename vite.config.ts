import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 7000
  },
  plugins: [
    basicSsl()
  ],
  base: '/justabayet/'
})
