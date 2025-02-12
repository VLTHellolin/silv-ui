import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';

import './global.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
