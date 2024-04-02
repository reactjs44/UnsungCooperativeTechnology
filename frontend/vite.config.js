import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server:{
    proxy:{
       '/api':'https://1bcc9c26-68b2-4475-baec-ff7e09f58ebc-00-1fgquky9tcg14.pike.replit.dev/'
    },
  },
  plugins: [react()],
})
