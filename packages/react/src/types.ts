export interface Config {
  attributify?: boolean | {
    prefix?: string;
  };
}

export type SilvSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';
export type SilvVariant = 'solid' | 'outline' | 'soft' | 'ghost';
export type SilvColor =
  | 'amber'
  | 'blue'
  | 'bronze'
  | 'brown'
  | 'crimson'
  | 'cyan'
  | 'gold'
  | 'grass'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'lime'
  | 'mauve'
  | 'mint'
  | 'olive'
  | 'orange'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'red'
  | 'sage'
  | 'sand'
  | 'sky'
  | 'slate'
  | 'teal'
  | 'tomato'
  | 'violet'
  | 'yellow'
  | 'jade'
  | 'iris'
  | 'ruby'
  | 'black'
  | 'white';
