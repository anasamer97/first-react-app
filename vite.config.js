import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/first-react-app/",
})
