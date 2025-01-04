import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      "0": "0px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "10": "10px",
      "12": "12px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
      full: "999px",
    },
    spacing: {
      "0": "0px",
      "025": "2px",
      "050": "4px",
      "075": "6px",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "250": "20px",
      "300": "24px",
      "400": "32px",
      "500": "40px",
      "600": "48px",
      "800": "64px",
      "1000": "80px",
    },
    fontSize: {
      // preset-1
      "preset-1": [
        "60px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 800,
        },
      ],
      "preset-1-mobile": [
        "30px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 800,
        },
      ],
      // preset-2
      "preset-2": [
        "40px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 700,
        },
      ],
      "preset-2-mobile": [
        "24px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 700,
        },
      ],

      // preset-3
      "preset-3": [
        "30px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 700,
        },
      ],
      "preset-3-mobile": [
        "22px",
        {
          letterSpacing: "-1px",
          lineHeight: "110%",
          fontWeight: 700,
        },
      ],

      // preset-4
      "preset-4": [
        "24px",
        {
          letterSpacing: "-0.5px",
          lineHeight: "120%",
          fontWeight: 500,
        },
      ],
      "preset-4-mobile": [
        "20px",
        {
          letterSpacing: "-0.5px",
          lineHeight: "120%",
          fontWeight: 500,
        },
      ],

      // preset-5
      "preset-5": [
        "20px",
        {
          letterSpacing: "-0.5px",
          lineHeight: "120%",
          fontWeight: 500,
        },
      ],
      "preset-5-extrabold": [
        "20px",
        {
          letterSpacing: "-0.3px",
          lineHeight: "110%",
          fontWeight: 800,
        },
      ],
      "preset-5-medium": [
        "20px",
        {
          letterSpacing: "-0.5px",
          lineHeight: "110%",
          fontWeight: 500,
        },
      ],

      // preset-6
      "preset-6": [
        "18px",
        {
          letterSpacing: "0",
          lineHeight: "120%",
          fontWeight: 500,
        },
      ],
      "preset-6-mobile": [
        "14px",
        {
          letterSpacing: "0",
          lineHeight: "120%",
          fontWeight: 500,
        },
      ],

      // preset-7
      "preset-7": [
        "12px",
        {
          letterSpacing: "-0.2px",
          lineHeight: "120%",
          fontWeight: 400,
        },
      ],
    },
    colors: {
      "c-neutral": {
        900: "#0D082D",
        700: "#4B4869",
        500: "#8784A5",
        300: "#D1D0D5",
        0: "#fff",
      },
      "c-orange": {
        700: "#E1604F",
        500: "#F57463",
      },
    },
    backgroundImage: {
      "c-gradient-01": "linear-gradient(90deg, #F37362 0%, #FFF 100%);",
    },
    extend: {
      boxShadow: {
        "custom-dropshadow": "0 4px 0 #F57463",
        "dropshadow-icon": "0 2px 4px #040128",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "sans-serif"],
        "fira-code": ["Fira Code", "sans-serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
