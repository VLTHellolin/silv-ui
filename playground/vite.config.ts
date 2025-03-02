import react from '@vitejs/plugin-react-swc';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    unocss(),
  ],
});
