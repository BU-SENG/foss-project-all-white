import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const SUPABASE_API_URL = 'https://ligypmgemlmlkqjmlozs.supabase.co';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When the browser requests /supabase, forward it to the real Supabase URL
      '/supabase': {
        target: SUPABASE_API_URL,
        changeOrigin: true,
        secure: true, // IMPORTANT: Target is HTTPS
        rewrite: (path) => path.replace('/supabase', ''), // Remove /supabase path prefix
      },
    },
  },
});