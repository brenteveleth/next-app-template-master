import { mergeThemeOverrides } from '@mantine/core'; // Mantine function to merge themes
import { theme } from './theme'; // Imports from theme.ts
import { UVCThemeOverride, VPThemeOverride } from './theme-variants'; // Imports from theme-variants.ts

// 1. The Main Theme is just the base
export const VelloTheme = theme;

// 2. The Alternates are the Base + Override merged
export const VPTheme = mergeThemeOverrides(theme, VPThemeOverride);
export const UVCTheme = mergeThemeOverrides(theme, UVCThemeOverride);
