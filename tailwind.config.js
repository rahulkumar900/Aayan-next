/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#72286E",
        brown: "#C29A6B",
        text:"#8D4D9E"
      },
   
      keyframes: {
        nv: {
          "0%": { height: "0px" },
          "50%": { height: "14px" },
          "100%": { height: "0px" },

          "100%": { height: "14px" },
        },
        mv: {
          "0%": { height: "0px" },
          "50%": { height: "14px" },
          "100%": { height: "0px" },

          "100%": { height: "14px" },
        },
      },
      animation: {
        mv: "mv 3s linear ",

        nv: "nv 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}