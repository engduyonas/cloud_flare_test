import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
        card: "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05)",
        "card-hover":
          "0 0 0 1px rgba(0,0,0,.03), 0 8px 20px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
export default config;
