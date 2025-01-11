/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    backgroundImage: {
      'text-gradient':
        'linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%);',
      gradient: 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
    },
    colors: {
      transparent: 'transparent',
      // neutrals
      neutral: {
        900: 'hsl(194.3,77.8%,10.6%)',
        700: 'hsl(194.5,22.8%,28.4%)',
        200: 'hsl(17.1,12.3%,88.8%)',
        100: 'hsl(17.1,41.2%,96.7%)',
      },
      'light-salmon': {
        500: 'hsl(21.8,98.6%,71.6%)',
        100: 'hsl(22.2,100%,91%)',
        50: 'hsl(22.5,100%,96.9%)',
      },
      white: 'hsl(0,0%,100%)',
    },

    extend: {},
  },
  plugins: [],
};
