import type { DynamicShortcut, StaticShortcut } from 'unocss';
import type { Theme } from 'unocss/preset-mini';

export type Shortcut = StaticShortcut | DynamicShortcut<Theme>;
export type Shortcuts = Shortcut[];

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SizeTable = Record<Size, string>;

export interface PresetSilvOptions {
  theme?: string;
}
