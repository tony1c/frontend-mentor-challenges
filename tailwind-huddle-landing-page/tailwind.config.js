module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    fontWeight: {
      400: "400",
      600: "600",
    },
  },
  plugins: [],
};
