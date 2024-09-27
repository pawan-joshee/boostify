import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all .js, .ts, .jsx, and .tsx files in the src folder
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
