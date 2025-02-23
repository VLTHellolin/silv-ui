import type React from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
