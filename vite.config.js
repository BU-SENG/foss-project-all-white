import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// --- VERIFIED PROJECT URL ---
const SUPABASE_API_URL = 'https://ligypemgemlmilklqjmklozs.supabase.co';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/supabase': {
        target: SUPABASE_API_URL, 
        changeOrigin: true, 
        secure: true,       
        rewrite: (path) => path.replace('/supabase', ''), 
      },
    },
  },
});