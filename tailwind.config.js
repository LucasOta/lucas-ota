/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#10100E',
        primary: '#DEDED9',
        secondary: '#606055',
        accent: '#3f5c47',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

