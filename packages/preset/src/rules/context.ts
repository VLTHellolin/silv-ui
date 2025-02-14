import type { Rules } from '../types';

export const context: Rules = [
  [/^cx-bg-(.*)$/, ([, name]) => ({ '--silv-bg': `var(--silv-${name}-bg)` })],
  [/^cx-fg-(.*)$/, ([, name]) => ({ '--silv-fg': `var(--silv-${name}-fg)` })],
];
