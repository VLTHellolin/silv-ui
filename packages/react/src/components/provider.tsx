import type React from 'react';
import type { Config } from '../types';
import { ConfigContext } from '../utils/config';

export interface SilvUIProviderProps {
  children?: React.ReactNode;
  config?: Config;
}

export function SilvUIProvider({
  children,
  config,
}: SilvUIProviderProps) {
  return (
    <ConfigContext value={config ?? {}}>
      {children}
    </ConfigContext>
  );
}

