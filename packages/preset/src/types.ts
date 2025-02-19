import type { DynamicShortcut, StaticShortcut } from 'unocss';
import type { RadixColors } from 'unocss-preset-radix';
import type { Theme } from 'unocss/preset-mini';

export type Shortcut = StaticShortcut | DynamicShortcut<Theme>;

export interface PresetSilvOptions {
  palette?: readonly RadixColors[];
  primary?: RadixColors;
}
