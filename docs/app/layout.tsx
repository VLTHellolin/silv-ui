import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist } from 'next/font/google';

import './global.css';

const geist = Geist({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={geist.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
