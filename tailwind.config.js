/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': 'url("/bg2.jpg")'
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}