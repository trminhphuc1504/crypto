/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      fontSize: {
        "20": "20px"
      }
    },
  },
  plugins: [],
}