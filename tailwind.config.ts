import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#122023",
          accent: "#e1fcad",
          "accent-muted": "#c7ea92",
        },
        neutral: {
          100: "#e9e9e9",
          200: "#c9c9c9",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["PT Mono", "monospace"],
      },
      screens: {
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
