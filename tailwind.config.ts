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
      screens: { xs: "480px" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        fresh: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        citrus: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        berry: {
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
        wheat: {
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
        },
        cream: {
          50: "#fffdf7",
          100: "#fef9ee",
          200: "#fdf4e3",
        },
        leaf: {
          500: "#65a30d",
          600: "#4d7c0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34, 197, 94, 0.45)",
        "glow-citrus": "0 0 40px -8px rgba(249, 115, 22, 0.4)",
        soft: "0 8px 32px -8px rgba(0, 0, 0, 0.08)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "translate(0,0) scale(1)" },
          "33%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { borderRadius: "50% 60% 30% 60% / 30% 40% 70% 50%", transform: "translate(-15px,20px) scale(0.95)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
