import type { Theme } from 'unocss/preset-mini';
import type { PresetSilvOptions } from './types';
import { definePreset } from 'unocss';

export const presetSilv = definePreset<PresetSilvOptions, Theme>(options => {
  return {
    name: '@silv-ui/preset',
    options,
  };
});
