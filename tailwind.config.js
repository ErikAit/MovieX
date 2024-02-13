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
        mx: '1900px',

        df: '1700px',

        xl: '1680px',

        md: '1220px',

        ml: '1352px',

        mb: '766px',

        cd: '1880px',
      },
    },
  },
  plugins: [],
}