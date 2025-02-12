export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SizeTable = Record<Size, string>;

export interface PresetSilvOptions {
  colors?: {
    primary?: string;
    secondary?: string;
  };
}
