/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Add DM Sans to the sans font family
      },
      colors: {
        "custom-purple": {
          100: "hsl(254, 88%, 90%)",
          500: "hsl(256, 67%, 59%)",
        },
        "custom-yellow": {
          100: "hsl(31, 66%, 93%)",
          500: "hsl(39, 100%, 71%)",
        },
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-black": "hsl(0, 0%, 7%)",
        "custom-gray": "#F5F5F5",
      },
      fontWeight: {
        400: "400",
        500: "500",
      },
    },
    plugins: [],
  },
};
