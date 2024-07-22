/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray : 'rgba(46, 46, 46, .7)',
      },

      
    },
  },
  plugins: [],
}

