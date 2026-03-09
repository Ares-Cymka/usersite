import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#212933",
          light: "#343a40",
          dark: "#1a1f26",
        },
        ocean: {
          50: "#e6f4f8",
          100: "#b3dfe8",
          200: "#80cad8",
          300: "#4db5c8",
          400: "#26a0b8",
          500: "#0d7a8c",
          600: "#0a5f6e",
          700: "#074550",
          800: "#042a32",
          900: "#02151a",
        },
        serenity: {
          deep: "#0c1929",
          mid: "#1a365d",
          light: "#2c5282",
          accent: "#63b3ed",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "monospace"],
      },
      animation: {
        "wave": "wave 8s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.02)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
