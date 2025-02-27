'use client';

import type { Config } from '../types';
import { createContext, use } from 'react';

export const ConfigContext = createContext<Config>({});

export function useConfig() {
  return use(ConfigContext);
}
