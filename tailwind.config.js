/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'header-gradient': 'linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,0) 100%)',
        }
      }
    },
    plugins: [],
  }