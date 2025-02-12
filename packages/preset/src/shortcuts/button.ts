// @unocss-include
import type { Shortcuts } from '../types';

export const button: Shortcuts = [
  ['button', `
    inline-flex items-center justify-center gap-2 children:shrink-0
    relative box-border cursor-pointer
    text-sm font-medium whitespace-nowrap overflow-hidden
    transition-colors rounded-md
    button-primary button-md
  `],
  ['button-primary', 'bg-primary text-primary-foreground hover:bg-primary/85'],
  ['button-secondary', 'bg-secondary text-secondary-foreground hover:bg-secondary/85'],
  ['button-outline', 'bg-transparent text-accent-foreground hover:bg-accent'],
  ['button-ghost', 'bg-transparent text-accent-foreground hover:(bg-primary text-primary-foreground)'],
];
