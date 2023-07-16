import basicSsl from '@vitejs/plugin-basic-ssl'
// @ts-expect-error vite-plugin-vsharp has no type declaration
import vsharp from 'vite-plugin-vsharp'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 7000
  },
  plugins: [
    basicSsl(),
    vsharp()
  ],
  base: '/justabayet/'
})
