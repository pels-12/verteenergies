import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // 5173 is already used by another local service on this machine, which
    // responds with a blank/404 page instead of this app.
    port: 5174,
    host: '127.0.0.1',
    strictPort: true
  },
  root: '.',
  publicDir: 'public'
})
