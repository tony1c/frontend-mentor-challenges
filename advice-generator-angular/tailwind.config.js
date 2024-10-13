/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // primary
      "c-light-cyan": "hsl(193, 38%, 86%)",
      "c-neon-green": "hsl(150, 100%, 66%)",
      // neutrals
      "c-grayish-blue": "hsl(217, 19%, 38%)",
      "c-dark-grayish-blue": "hsl(217, 19%, 24%)",
      "c-dark-blue": "hsl(218, 23%, 16%)",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontWeight: {
      800: "800",
    },
    extend: {},
  },
  plugins: [],
};
// ### Body Copy

// - Font size (quote): 28px

// ### Font

// - Family: [Manrope](https://fonts.google.com/specimen/Manrope)
// - Weights: 800
