import type { Theme } from 'unocss/preset-mini';
import type { PresetSilvOptions } from './types';
import { definePreset, transformerVariantGroup } from 'unocss';
import { presetRadix, radixColors } from 'unocss-preset-radix';
import { preflight } from './preflight';
import { shortcuts } from './shortcuts';

export const presetSilv = definePreset<PresetSilvOptions, Theme>(options => {
  return {
    name: '@silv-ui/preset',
    options,
    shortcuts,
    presets: [
      presetRadix({
        palette: options?.palette ?? radixColors,
        aliases: {
          primary: options?.primary ?? 'violet',
        },
        prefix: '--silv-',
        variantPrefix: 'silv-',
        darkSelector: '.dark, .dark-theme',
        lightSelector: ':root, .light, .light-theme',
      }),
    ],
    transformers: [
      transformerVariantGroup(),
    ],
    preflights: [
      { getCSS: () => preflight },
    ],
  };
});
