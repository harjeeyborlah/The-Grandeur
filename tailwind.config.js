/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html","about.html","reservation.html","private-dining.html","press.html","cookbook.html"],
  theme: {
    extend: {
      fontFamily:{
        display:['Cinzel Decorative', 'cursive']
      }
    },
  },
  plugins: [],
}

