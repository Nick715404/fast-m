import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1600px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '490px' },
    },
    colors: {
      yellow: '#FCC344',
      'gray-light': '#F7F7F7',
      black: '#000000',
      white: '#fff',
      'text-second': '#717171',
      green: '#0FAD1F',
      gray: '#8D8D8D',
    }
  },
  plugins: [],
};
export default config;
