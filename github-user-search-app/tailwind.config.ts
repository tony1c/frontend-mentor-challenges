import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      '0079FF': '#0079FF',
      // light mode colors
      '697C9A': '#697C9A',
      '4B6A9B': '#4B6A9B',
      '2B3442': '#2B3442',
      F6F8FF: '#F6F8FF',
      FEFEFE: '#FEFEFE',
      // dark mode colors
      '141D2F': '#141D2F',
      '1E2A47': '#1E2A47',
    },
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'preset-h1': [
          '26px',
          {
            lineHeight: '38px',
            fontWeight: 700,
          },
        ],
        'preset-h2': [
          '22px',
          {
            lineHeight: '33px',
            fontWeight: 700,
          },
        ],
        'preset-h3': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 400,
          },
        ],
        'preset-h4': [
          '13px',
          {
            lineHeight: '20px',
            fontWeight: 400,
          },
        ],
        'preset-p': [
          '15px',
          {
            lineHeight: '25px',
            fontWeight: 400,
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
