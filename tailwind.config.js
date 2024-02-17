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

        md: '1250px',

        ml: '1352px',

        mb: '766px',

        cd: '1880px',

        cd2: '1094px',

        pg: '647px',

        sr: '600px',

        mn: '500px',

        ct: '450px',

        im: '1075px',
      },
    },
  },
  plugins: [],
}