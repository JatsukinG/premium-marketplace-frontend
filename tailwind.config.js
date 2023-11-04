/** @type {import('tailwindcss').Config} */
import preLine from 'preline/plugin.js'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': 'url("/bg2.jpg")'
      }
    },
  },
  plugins: [
    preLine
  ],
}