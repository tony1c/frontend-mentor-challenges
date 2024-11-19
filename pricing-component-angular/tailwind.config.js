/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      "c-base": "0.938rem",
    },
    fontWeight: {
      700: "700",
    },
    extend: {
      colors: {
        // neutral
        "c-veryLightGrayishBlue": "hsl(240, 78%, 98%)",
        "c-lightGrayishBlue": "hsl(234, 14%, 74%)",
        "c-grayishBlue": "hsl(233, 13%, 49%)",
        "c-darkGrayishBlue": "hsl(232, 13%, 33%)",
      },
      // primary gradient
      backgroundImage: {
        "c-linearGradient":
          "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
      },
    },
  },
  plugins: [],
};
