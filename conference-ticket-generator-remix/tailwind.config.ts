import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-neutral': {
          900: '#0D082D',
          700: '#4B4869',
          500: '#8784A5',
          300: '#D1D0D5',
          0: '#fff',
        },
        'c-orange': {
          700: '#E1604F',
          500: '#F57463',
        },
      },
      backgroundImage: {
        'c-gradient-01': 'linear-gradient(90deg, #F37362 0%, #FFF 100%);',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
