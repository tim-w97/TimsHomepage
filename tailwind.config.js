/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // new colors
      "tim-blue": "#2196F3",
      "tim-dark-blue": "#181A1C",
      "tim-light-blue": "#D3F0FF",

      // old colors
      "tim-lightgray": "#D5D5D5",
      "tim-gray": "#656565",
      "tim-green": {
        DEFAULT: "#C0FF6B",
        leaf: "#7cd100",
        forest: "#4b8600"
      },
      "tim-black": "#000000"
    },

    extend: {},
  },
  plugins: [],
}
