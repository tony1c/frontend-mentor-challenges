/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontWeight: {
      500: 500,
      700: 700,
    },
    fontFamily: {
      "plus-jakarta": "'Plus Jakarta Sans', sans-serif",
    },
    extend: {
      colors: {
        // primary
        "c-lime": "hsl(61, 70%, 52%)",
        "c-red": "hsl(4, 69%, 50%)",

        // neutrals
        "c-white": "hsl(0, 0%, 100%)",
        "c-slate": {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
