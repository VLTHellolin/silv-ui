import type { Theme } from 'unocss/preset-mini';
import type { PresetSilvOptions } from './types';
import { definePreset, mergeDeep } from 'unocss';
import { defaultTheme } from './theme';

export const presetSilv = definePreset<PresetSilvOptions, Theme>(options => {
  return {
    name: '@silv-ui/preset',
    options,
    extendTheme(theme) {
      return mergeDeep(defaultTheme, theme);
    },
  };
});
