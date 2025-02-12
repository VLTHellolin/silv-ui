import type { PresetSilvOptions } from './types';
import { definePreset } from 'unocss';

export const presetSilv = definePreset<PresetSilvOptions>(options => {
  return {
    name: '@silv-ui/preset',
    options,
  };
});
