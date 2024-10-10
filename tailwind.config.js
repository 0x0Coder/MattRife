/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: '#e4cb86',
        secondary: {
          DEFAULT: '#424242'
        }
      }
    },
  },
  plugins: [],
})

