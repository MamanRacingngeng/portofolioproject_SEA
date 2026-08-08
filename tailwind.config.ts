import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        ink: "#0e0e0e",
        paper: "#f5f0e8",
        v26yellow: "#ffd400",
        v26sky: "#5b9eff",
        v26coral: "#ff6b4a",
        v26mint: "#7dffb2",
        fresh: {
          50: "#f4faf5",
          100: "#e6f4ea",
          600: "#3a7f4e",
          700: "#306640",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf7f0",
          200: "#f3ede0",
        },
        earth: {
          600: "#6b4423",
          700: "#5c3a1e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans-primary)", "system-ui", "sans-serif"],
        display: ["var(--font-display-primary)", "system-ui", "sans-serif"],
        label: ["var(--font-label-primary)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
