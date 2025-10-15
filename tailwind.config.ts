import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      fontStretch: {
        "semi-expanded": "semi-expanded",
      },
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        100: "#E6F0FB",
        200: "#B3D1F5",
        300: "#80B2EF",
        400: "#4D93E9",
        500: "#1A74E3",
        600: "#165FC2",
        700: "#124AA1",
        800: "#0E357F",
        900: "#1444D5", // Updated to requested color
      },
      secondary: {
        100: "#FDF5E8",
        200: "#F9E4C2",
        300: "#F6D39C",
        400: "#F2C276",
        500: "#EEB150",
        600: "#D99D46",
        700: "#C3893C",
        800: "#AE7632",
        900: "#ECA639", // Updated to requested color
      },
      ...colors,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  // plugins: [require("tailwindcss-textshadow")],
} satisfies Config;
