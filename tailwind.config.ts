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
      colors: {
        fresh: {
          50: "#f4faf5",
          100: "#e6f4ea",
          200: "#c8e6d0",
          300: "#9dd4ac",
          400: "#6bb87f",
          500: "#4a9d62",
          600: "#3a7f4e",
          700: "#306640",
          800: "#295235",
          900: "#23442d",
        },
        olive: {
          50: "#f7f8f3",
          100: "#eceee3",
          200: "#d8dcc8",
          300: "#bcc4a3",
          400: "#9da87d",
          500: "#828d62",
          600: "#66704d",
          700: "#515840",
          800: "#434836",
          900: "#3a3d30",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf7f0",
          200: "#f3ede0",
          300: "#e8dfc9",
          400: "#d9cba8",
          500: "#c9b68c",
        },
        wheat: {
          100: "#f5ecd8",
          400: "#d4a853",
          500: "#c4923a",
          600: "#a67830",
        },
        earth: {
          400: "#a08060",
          500: "#8b6914",
          600: "#6b4423",
          700: "#5c3a1e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(58, 127, 78, 0.08)",
        card: "0 8px 32px -8px rgba(58, 127, 78, 0.12)",
        elevated: "0 16px 48px -12px rgba(58, 127, 78, 0.15)",
      },
      backgroundImage: {
        "grain-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a9d62' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "molecule-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%234a9d62' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Cline x1='40' y1='40' x2='20' y2='20'/%3E%3Cline x1='40' y1='40' x2='60' y2='20'/%3E%3Cline x1='40' y1='40' x2='20' y2='60'/%3E%3Cline x1='40' y1='40' x2='60' y2='60'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
