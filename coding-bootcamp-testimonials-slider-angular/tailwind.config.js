/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // primary
      "c-dark-blue": "hsl(240, 38%, 20%)",
      "c-grayish-blue": "hsl(240, 18%, 77%)",
      // neutrals
      "c-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      300: "300",
      500: "500",
      700: "700",
    },
    extend: {},
  },
  plugins: [],
};
