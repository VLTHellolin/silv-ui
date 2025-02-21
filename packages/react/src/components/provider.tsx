import type React from 'react';
import type { Config } from '../types';
import { Direction } from 'radix-ui';
import { ConfigContext } from '../utils/config';

export interface SilvUIProviderProps {
  children?: React.ReactNode;
  config?: Config;
  dir?: 'ltr' | 'rtl';
}

export function SilvUIProvider({
  children,
  config,
  dir,
}: SilvUIProviderProps) {
  return (
    <ConfigContext value={config ?? {}}>
      {/* eslint-disable-next-line react/no-context-provider */}
      <Direction.Provider dir={dir ?? 'ltr'}>
        {children}
      </Direction.Provider>
    </ConfigContext>
  );
}

