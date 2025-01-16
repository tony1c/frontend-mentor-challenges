/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'martian-mono': ["'Martian Mono'", 'sans-serif'],
    },
    backgroundImage: {
      'text-gradient':
        'linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%);',
      gradient: 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
    },
    spacing: {
      0: '0px',
      '025': '2px',
      '050': '4px',
      '075': '6px',
      100: '8px',
      150: '12px',
      200: '16px',
      250: '20px',
      300: '24px',
      400: '32px',
      500: '40px',
      600: '48px',
      800: '64px',
      1000: '80px',
    },
    borderRadius: {
      0: '0px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      full: '999px',
    },
    fontSize: {
      'preset-1': [
        '62px',
        {
          lineHeight: '120%',
          letterSpacing: '-2px',
          fontWeight: '700',
        },
      ],
      'preset-1-mobile': [
        '38px',
        {
          lineHeight: '120%',
          letterSpacing: '-2px',
          fontWeight: '700',
        },
      ],
      'preset-2': [
        '50px',
        {
          lineHeight: '130%',
          letterSpacing: '-2px',
          fontWeight: '600',
        },
      ],
      'preset-2-mobile': [
        '34px',
        {
          lineHeight: '130%',
          letterSpacing: '-2px',
          fontWeight: '600',
        },
      ],
      'preset-3': [
        '34px',
        {
          lineHeight: '130%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      'preset-3-mobile': [
        '24px',
        {
          lineHeight: '110%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      'preset-4': [
        '24px',
        {
          lineHeight: '110%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      'preset-4-regular': [
        '24px',
        {
          lineHeight: '120%',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
      'preset-5': [
        '20px',
        {
          lineHeight: '140%',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        },
      ],
      'preset-5-semibold': [
        '20px',
        {
          lineHeight: '140%',
          letterSpacing: '-0.5px',
          fontWeight: '600',
        },
      ],
      'preset-6': [
        '18px',
        {
          lineHeight: '130%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      'preset-6-mobile': [
        '16px',
        {
          lineHeight: '130%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      'preset-7': [
        '14px',
        {
          lineHeight: '120%',
          letterSpacing: '-1px',
          fontWeight: '400',
        },
      ],
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
