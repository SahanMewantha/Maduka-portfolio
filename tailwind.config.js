/** @type {import('tailwindcss').Config} */

const { Cinzel } = require('next/font/google')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-mont)'],
        cinzel:['var(--font-cinzel)'],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
}

