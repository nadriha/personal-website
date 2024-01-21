/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Bohemian Soul', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  // Other Tailwind configuration settings
};