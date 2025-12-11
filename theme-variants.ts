import { createTheme, MantineThemeOverride } from '@mantine/core';

// Revisions for "Playful" theme
export const VPThemeOverride: MantineThemeOverride = createTheme({
  colors: {
    vpYellow: [
      '#fff8e1',
      '#fdeece',
      '#f7dca2',
      '#f1c971',
      '#ecb53f',
      '#eaae2d',
      '#e9a91c',
      '#cf930d',
      '#b88203',
      '#a07000',
    ],
    gray: [
      '#F2F2F1',
      '#DEDDDB',
      '#C6C4C0',
      '#AEABA6',
      '#8D8982',
      '#7D7870',
      '#746F67',
      '#6C675E',
      '#645E55',
      '#5c564c',
    ],
    dark: [
      '#95918B',
      '#8D8982',
      '#858079',
      '#7D7870',
      '#746F67',
      '#6C675E',
      '#645E55',
      '#504b44', // 7 (backgrounds usually use index 7 or 8)
      '#403C35', // 8
      '#2E2B26',
    ],
    specialDark: [
      '#504b44', // 0 Lightest
      '#504b44', // 1
      '#504b44', // 2
      '#504b44', // 3
      '#504b44', // 4
      '#504b44', // 5
      '#504b44', // 6
      '#504b44', // 7
      '#504b44', // 8
      '#504b44', // 9 Darkest
    ],
  },
  primaryColor: 'vpYellow',
  fontFamily: 'Gotham, sans-serif',
  headings: {
    fontFamily: 'Gotham, sans-serif',
    sizes: {
      h1: { fontWeight: '600' },
      h2: { fontWeight: '600' },
      h3: { fontWeight: '600' },
      h4: { fontWeight: '600' },
      h5: { fontWeight: '600' },
      h6: { fontWeight: '600' },
    },
  },
  radius: {
    xs: '0rem',
    sm: '0rem',
    md: '0rem',
    lg: '0rem',
    xl: '0rem',
  },
  components: {
    Card: {
      defaultProps: {
        bd: '8px solid white',
        shadow: 'sm',
      },
    },
    Text: {
      defaultProps: {
        c: 'dark.7',
      },
    },
    Title: {
      defaultProps: {
        c: 'dark.7',
      },
    },
  },
});

// Revisions for "Serious" theme
export const UVCThemeOverride: MantineThemeOverride = createTheme({
  colors: {
    uvcOrange: [
      '#fff6e0',
      '#ffebcb',
      '#fed79b',
      '#fbc167',
      '#faae3b',
      '#f9a11c',
      '#f99c0b',
      '#de8700',
      '#c67700',
      '#ac6600',
    ],
    gray: [
      '#F5F5F5',
      '#D8D9DA',
      '#CBCCCD',
      '#B0B2B4',
      '#A3A5A8',
      '#96999B',
      '#898C8F',
      '#7C7F82',
      '#696C6F',
      '#5D5F62',
    ],
    dark: [
      '#777777',
      '#6D6D6D',
      '#626262',
      '#585858',
      '#4D4D4D',
      '#434343',
      '#383838',
      '#2E2E2E', // 7 (backgrounds usually use index 7 or 8)
      '#202020', // 8
      '#1a1715',
    ],
    specialDark: [
      '#2061AE', // 0 Lightest
      '#2061AE', // 1
      '#2061AE', // 2
      '#2061AE', // 3
      '#2061AE', // 4
      '#2061AE', // 5
      '#2061AE', // 6
      '#2061AE', // 7
      '#2061AE', // 8
      '#2061AE', // 9 Darkest
    ],
  },
  primaryColor: 'uvcOrange',
  fontFamily: 'Karla, sans-serif',
  headings: {
    fontFamily: 'Rubik, sans-serif',
    sizes: {
      h1: { fontWeight: '600' },
      h2: { fontWeight: '600' },
      h3: { fontWeight: '600' },
      h4: { fontWeight: '600' },
      h5: { fontWeight: '600' },
      h6: { fontWeight: '600' },
    },
  },
  radius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.5rem',
    lg: '0.5rem',
    xl: '2rem',
  },
  components: {
    Card: {
      defaultProps: {
        bd: '1px solid white',
        shadow: 'lg',
      },
    },
    Text: {
      defaultProps: {
        c: 'dark.7',
      },
    },
    Title: {
      defaultProps: {
        c: 'gray.6',
      },
    },
  },
});
