// @unocss-include
import type { Shortcuts } from '../types';

export const button: Shortcuts = [
  ['button', `
    inline-flex items-center justify-center gap-2 children:shrink-0
    relative box-border cursor-pointer
    text-sm font-medium whitespace-nowrap overflow-hidden
    rounded-md transition-colors motion-reduce:transition-none
    disabled:(cursor-not-allowed pointer-events-none opacity-70 shadow-none)
    hue-primary button-md button-solid
  `],
  ['button-xs', 'px-2 py-1 text-xs'],
  ['button-sm', 'px-2.5 py-1.5 text-sm'],
  ['button-md', 'px-3 py-2 text-sm'],
  ['button-lg', 'px-3.5 py-2.5 text-base rounded-lg'],
  ['button-xl', 'px-4.5 py-3 text-lg rounded-lg'],
  ['button-icon', 'h-8 w-8'],
  ['button-solid', 'text-hue-fg bg-hue9 hover:bg-hue10'],
  ['button-outline', 'text-hue11 bg-transparent ring-(1 inset hue7) hover:(ring-hue8 bg-hue4)'],
  ['button-soft', 'text-hue11 bg-hue3 hover:bg-hue4'],
  ['button-ghost', 'text-hue11 bg-transparent hover:(text-hue-fg bg-hue4)'],
];
