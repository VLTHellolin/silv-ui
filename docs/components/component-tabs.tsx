import type React from 'react';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

export function ComponentTabs(props: Omit<React.ComponentProps<typeof Tabs>, 'items'>) {
  return <Tabs items={['Preview', 'Code']} {...props} />;
}

export function PreviewTab(props: Omit<React.ComponentProps<typeof Tab>, 'value'>) {
  return <Tab value='Preview' {...props} />;
}

export function CodeTab(props: Omit<React.ComponentProps<typeof Tab>, 'value'>) {
  return <Tab value='Code' {...props} />;
}
