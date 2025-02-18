import type { DynamicRule, DynamicShortcut, StaticRule, StaticShortcut } from 'unocss';
import type { RadixColors } from 'unocss-preset-radix';
import type { Theme } from 'unocss/preset-mini';

export type Rule = StaticRule | DynamicRule<Theme>;
export type Rules = Rule[];

export type Shortcut = StaticShortcut | DynamicShortcut<Theme>;
export type Shortcuts = Shortcut[];

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SizeTable = Record<Size, string>;

export interface PresetSilvOptions {
  palette?: readonly RadixColors[];
  primary?: RadixColors;
}
