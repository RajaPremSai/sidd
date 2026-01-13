import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3C5D", // Deep Enterprise Blue
          light: "#145480",
        },
        secondary: {
          DEFAULT: "#0078D4", // Azure Blue
          dark: "#005a9e",
        },
        accent: {
          DEFAULT: "#1ABC9C", // Teal
          hover: "#169e83",
        },
        dark: "#1F2937",
        light: "#F3F4F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
