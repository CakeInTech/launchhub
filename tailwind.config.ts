import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#E0F4F3",
          DEFAULT: "#39B6AB",
          "700": "#288E85",
        },
        secondary: "#FFD580",
        black: {
          "100": "#4D4D4D",
          "200": "#2A2A2A",
          "300": "#1A1A1A",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F5F9F9",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgba(0, 0, 0, 0.1)",
        200: "2px 2px 0px 2px rgba(0, 0, 0, 0.15)",
        300: "2px 2px 0px 2px rgba(57, 182, 171, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
