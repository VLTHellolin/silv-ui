import { defineConfig, presetIcons, presetUno, transformerVariantGroup } from 'unocss';
import { presetRadix, radixColors } from 'unocss-preset-radix';

export default defineConfig({
  presets: [
    presetUno(),
    presetRadix({
      palette: radixColors,
      aliases: {
        primary: 'violet',
      },
      prefix: '--silv-',
      variantPrefix: 'silv-',
      darkSelector: '.dark, .dark-theme',
      lightSelector: ':root, .light, .light-theme',
    }),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(e => e.default),
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
});
