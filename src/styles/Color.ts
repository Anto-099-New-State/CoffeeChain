// @ts-ignore
import { theme } from '../../tailwind.config';

const themeColors = theme.extend.colors as unknown as Record<string, string>;

export const Color = {
  black: themeColors.black,
  white: '#221D39',
  gray: themeColors.gray,
  primary: themeColors.primary,
  accent: '#B4785B',
  red: themeColors.red,
} as const;
