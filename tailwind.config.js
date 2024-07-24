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

      animation:{
        "loop-scroll":"loop-scroll 10s linear infinite",
      },
      keyframes:{"loop-scroll":{
        from: {transform:"translateX(0)"},
        to :{transform: "translateX(-100%)"},
      },
    }, 
    },
  },
  plugins: [],
}

