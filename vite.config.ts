import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/hrnet-react/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-datepicker')) {
            return 'datepicker';
          }
          if (id.includes('react-select')) {
            return 'select'
          }
        }
      }
    }
  }
})
