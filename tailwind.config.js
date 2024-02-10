/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FAFF00',
        header: '#5E5E5E',
        white: '#fff',
        black: '#383838'
      },
      screens: {
        df: ''
      },
    },
  },
  plugins: [],
}