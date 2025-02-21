import clsx from 'clsx';
import { config } from './config';

export function getStyleAttributes(src: Record<string, string[] | true>, className?: string) {
  if (!config.attributify) {
    const result = [];
    for (const key in src) {
      if (src[key] === true) {
        result.push(key);
        continue;
      }
      for (const style of src[key]) {
        if (style === '~')
          result.push(key);
        if (style)
          result.push(`${key}-${style}`);
      }
    }
    return {
      className: clsx(result, className),
    };
  }

  const prefix = (typeof config.attributify === 'object' && config.attributify.prefix) || '';
  const result: Record<string, string> = {};
  for (const key in src) {
    if (src[key] === true) {
      result[prefix + key] = '';
      continue;
    }
    const resultValue = clsx(src[key]);
    if (resultValue)
      result[prefix + key] = resultValue;
  }

  return {
    ...result,
    className,
  };
}
