/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/component/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          'blue-munsell': '#1985A1',
          'blue-munsell-light': '#329cb8'
        },
        black: {
          'black-coral': '#4c5c68',
        },
        gray: {
          'davys-gray': '#46494c',
          'silver': '#c5c3c6',
          'gainsboro': '#dcdcdd'
        },
      }
    },
  },
  plugins: [
  ],
}
