import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const result: any = {};
  for (const key in obj) {
    if (!keys.includes(key as unknown as K)) {
      result[key] = obj[key];
    }
  }
  return result;
}