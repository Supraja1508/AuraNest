import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AuraNest/' // ⚠️ Must match the GitHub repo name exactly
});
