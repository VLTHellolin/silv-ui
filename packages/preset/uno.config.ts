import { defineConfig, presetUno, transformerVariantGroup } from 'unocss';
import { defaultTheme } from './src/theme';

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: defaultTheme,
  transformers: [
    transformerVariantGroup(),
  ],
});
