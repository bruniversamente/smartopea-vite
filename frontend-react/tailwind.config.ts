import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "border-light": "#f9f9f9",
      },
    },
  },
  plugins: [
    typography,
    require("@tailwindcss/line-clamp"),
  ],
};

export default config;
