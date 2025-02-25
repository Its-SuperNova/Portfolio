import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        ss: "600px",
        mg: "900px",
        lx: "1150px",
        lxx: "1290px",
        xxl: "1500px",
        xxxl: "1870px",
        xxll: "2300px",
        xlll: "2930px",
      },
      keyframes: {
        gradient: {
           '0%': { backgroundPosition: '0% 50%' },
           '50%': { backgroundPosition: '100% 50%' },
           '100%': { backgroundPosition: '0% 50%' },
         },
       },
       animation: {
         gradient: 'gradient 8s linear infinite'
       },
    },
  },
  plugins: [],
} satisfies Config;
