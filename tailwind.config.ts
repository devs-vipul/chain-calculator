import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          orange: "#E29A2D",
          green: "#4CAF79",
          muted: "#A5A5A5",
          gray: "#D3D3D3",
          dark: "#252525",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
