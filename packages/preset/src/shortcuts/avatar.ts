// @unocss-include
import type { Shortcut } from 'unocss';

export const avatar: Shortcut[] = [
  ['avatar', `
    inline-flex shrink-0 rounded-full
    relative overflow-hidden select-none
  `],
  ['avatar-image', 'w-full h-full aspect-1/1'],
  ['avatar-fallback', `
    w-full h-full flex items-center justify-center
    hue-primary bg-hue3 text-hue11
  `],
];
