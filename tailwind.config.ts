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
        primary: "#000000",
        secondary: "#F5F5F7",
        accent: "#0071E3",
        muted: "#86868B",
        "primary-transparent": "rgba(0, 0, 0, 0.8)",
        "secondary-transparent": "rgba(245, 245, 247, 0.8)",
      },
      fontSize: {
        hero: "3.5rem",
        subtitle: "1.5rem",
        body: "1rem",
      },
      spacing: {
        navbar: "4rem",
        footer: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
