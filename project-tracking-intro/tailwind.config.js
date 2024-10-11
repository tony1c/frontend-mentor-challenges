/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // primary
      red: "hsl(0, 100%, 68%)",
      // neutral
      white: "hsl(0, 0%, 100%)",
      "very-dark-blue": "hsl(230, 29%, 20%)",
      "dark-grayish-blue": "hsl(230, 11%, 40%)",
      "grayish-blue": "hsl(231, 7%, 65%)",
      "light-grayish-blue": "hsl(207, 33%, 95%)",
      transparent: "transparent",
    },
    fontWeight: {
      400: "400",
      700: "700",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
