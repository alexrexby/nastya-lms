import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Фирменный зелёный Насти Повышевой (#1b6b38)
        brandGreen: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#22c55e",
          600: "#237a3b",
          700: "#1b6b38",
          800: "#15572d",
          900: "#0f4222",
        },
        // Фирменная тёплая охра / горчично-золотой (#c88a2b)
        brandOchre: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          500: "#f59e0b",
          600: "#d97706",
          700: "#c88a2b",
          800: "#b45309",
          900: "#78350f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
