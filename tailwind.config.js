/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto Regular', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
}
