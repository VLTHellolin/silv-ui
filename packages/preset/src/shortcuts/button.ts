// @unocss-include
import type { Shortcuts, Size, SizeTable } from '../types';

const sizes: SizeTable = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base rounded-lg',
  xl: 'px-4.5 py-3 text-lg rounded-lg',
};

export const button: Shortcuts = [
  ['button', `
    inline-flex items-center justify-center gap-2 children:shrink-0
    relative box-border cursor-pointer
    text-sm font-medium whitespace-nowrap overflow-hidden
    transition-colors rounded-md
    button-primary button-size-md
  `],
  ['button-primary', 'bg-primary text-primary-foreground hover:bg-primary/85'],
  ['button-secondary', 'bg-secondary text-secondary-foreground hover:bg-secondary/85'],
  ['button-outline', 'bg-transparent text-accent-foreground hover:bg-accent'],
  ['button-ghost', 'bg-transparent text-accent-foreground hover:(bg-primary text-primary-foreground)'],
  [/^button-size-(.+)$/, ([, size]) => {
    if (size in sizes)
      return sizes[size as Size];
    return sizes.md;
  }],
  ['button-icon', 'h-8 w-8'],
];
