/** @type {import('tailwindcss').Config} */
const defaultTheme= require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/Components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      serif:["Playfair Display",...defaultTheme.fontFamily.sans],
      sans:["Poppins",...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}