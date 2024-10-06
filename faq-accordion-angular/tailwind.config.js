/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-pink": "#f9f0ff",
      purple: "#8B39B9",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
    },
    fontWeight: {
      400: "400",
      600: "600",
      700: "700",
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
