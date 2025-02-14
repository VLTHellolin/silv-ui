import type { Theme } from 'unocss/preset-mini';
import type { PresetSilvOptions } from './types';
import { definePreset } from 'unocss';
import { rules } from './rules';

export const presetSilv = definePreset<PresetSilvOptions, Theme>(options => {
  return {
    name: '@silv-ui/preset',
    options,
    rules,
  };
});
