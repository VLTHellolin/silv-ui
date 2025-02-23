import type { Shortcut } from '../types';
import { avatar } from './avatar';
import { badge } from './badge';
import { button } from './button';

export const shortcuts: Shortcut[] = [
  ...avatar,
  ...badge,
  ...button,
];
