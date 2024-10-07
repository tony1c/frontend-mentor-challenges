/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // primary
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      // neutral
      white: "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    fontWeight: {
      400: "400",
      700: "700",
      800: "800",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
