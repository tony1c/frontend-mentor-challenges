module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",

        // Accent
        brightBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",

        // Neutral
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
      backgroundImage: {
        mobile: "url('../images/bg-curve-mobile.svg')",
        desktop: "url('../images/bg-curve-desktop.svg')",
      },
    },
  },
  plugins: [],
};
