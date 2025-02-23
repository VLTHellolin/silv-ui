// @unocss-include
import type { Shortcut } from '../types';

export const badge: Shortcut[] = [
  ['badge', `
    inline-flex items-center justify-center children:shrink-0
    relative font-medium whitespace-nowrap overflow-hidden
    rounded-md transition-colors motion-reduce:transition-none
    hue-primary
  `],
  ['badge-solid', 'text-hue-fg bg-hue9 hover:bg-hue10'],
  ['badge-outline', 'text-hue11 bg-transparent ring-(1 inset hue7) hover:(ring-hue8 bg-hue4)'],
  ['badge-soft', 'text-hue11 bg-hue3 hover:bg-hue4'],
];
