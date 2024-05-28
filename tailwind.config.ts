import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    extend: {
      keyframes: {
        slide: {
          'from': { transform: 'translate(0)' },
          'to': { transform: 'translate(-100%)' }
        }
      },
      animation: {
        slide: 'slide 20s infinite linear'
      },
      fontSize: {
        '4xl': 'clamp(20px, 2.1vw, 36px) !important'
      }
    },
  },
  plugins: [],
};
export default config;
