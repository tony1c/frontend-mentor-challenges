import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'space-mono': ["'Space Mono'", 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: 'hsl(0,0%,100%)',
      blue: 'hsl(212,100%,50%)',
      // light mode colors
      'light-mode': {
        'light-gray': 'hsl(227°, 100%, 98%)',
        gray: 'hsl(217,20%,51%)',
        'dark-gray': 'hsl(217,35%,45%)',
        'dark-blue': 'hsl(217,21%,21%)',
      },
      // dark mode colors
      'dark-mode': {
        'dark-blue': 'hsl(220,40%,13%)',
        'dark-gray': 'hsl(222,41%,20%)',
      },
    },
    extend: {
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
