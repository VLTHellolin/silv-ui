'use client';

import type React from 'react';
import type { SilvColor, SilvSize, SilvVariant } from '../types';
import { useStyleAttributes } from '../utils/style';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  size?: SilvSize;
  variant?: SilvVariant;
  color?: SilvColor;
}

export function Button({
  children,
  className,
  size,
  variant,
  color,
  ...props
}: ButtonProps) {
  const attributes = useStyleAttributes(
    {
      button: ['~', size, variant],
      hue: [color],
    },
    className,
  );

  return (
    <button
      type='button'
      {...attributes}
      {...props}
    >
      {children}
    </button>
  );
}
