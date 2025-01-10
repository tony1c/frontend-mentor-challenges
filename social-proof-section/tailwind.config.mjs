/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      leagueSpartan: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      400: "400",
      500: "500",
      700: "700",
    },
    extend: {
      colors: {
        // primary
        "c-veryDarkMagenta": "hsl(300, 43%, 22%)",
        "c-softPink": " hsl(333, 80%, 67%)",

        // neutral
        "c-darkGrayishMagenta": "hsl(303, 10%, 53%)",
        "c-lightGrayishMagenta": "hsl(300, 24%, 96%)",
        "c-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
