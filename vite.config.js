import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://to-do-backend-3of0.onrender.com/'
    }
  },
  plugins: [react()],
})
