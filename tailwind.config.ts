import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        "border-light": "#f9f9f9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;