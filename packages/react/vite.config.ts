import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { globbySync } from 'globby';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

function removeExtension(file: string) {
  const ext = file.lastIndexOf('.');
  return file.slice(0, ext);
}

export default defineConfig({
  plugins: [
    react(),
    preserveDirectives(),
    dts({
      tsconfigPath: './tsconfig.json',
      include: 'src/**/*.ts?(x)',
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: Object.fromEntries(
        globbySync('src/**/*.ts?(x)').map(file => [
          path.relative('src', removeExtension(file)),
          path.resolve(import.meta.dirname, file),
        ]),
      ),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'radix-ui',
      ],
    },
  },
});
