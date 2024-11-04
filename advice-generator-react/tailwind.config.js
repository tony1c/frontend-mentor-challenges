/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // primary
      'c-light-cyan': 'hsl(193, 38%, 86%)',
      'c-neon-green': 'hsl(150, 100%, 66%)',
      // neutrals
      'c-grayish-blue': 'hsl(217, 19%, 38%)',
      'c-dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'c-dark-blue': 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      800: '800',
    },
    extend: {},
  },
  plugins: [],
};
