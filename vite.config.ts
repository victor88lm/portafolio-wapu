import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Resolve the extensionless page before Vite's main-page fallback.
const linksPage: Plugin = {
  name: 'links-page-route',
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (request.url?.split('?')[0] === '/links') {
        request.url = request.url.replace('/links', '/links/index.html')
      }
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (request.url?.split('?')[0] === '/links') {
        request.url = request.url.replace('/links', '/links/index.html')
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [linksPage, react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        links: fileURLToPath(new URL('./links/index.html', import.meta.url)),
      },
    },
  },
  // Respeta el puerto asignado por el entorno (preview); 5173 por defecto
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
