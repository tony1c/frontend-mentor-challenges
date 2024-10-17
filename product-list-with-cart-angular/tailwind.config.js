/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      "red-hat-text": ['"Red Hat Text"', "sans-serif"],
    },
    fontWeight: {
      400: 400,
      600: 600,
      700: 700,
    },
    extend: {
      colors: {
        "c-red": "hsl(14, 86%, 42%)",
        "c-green": "hsl(159, 69%, 38%)",
        "c-rose": {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
    },
  },
  plugins: [],
};
