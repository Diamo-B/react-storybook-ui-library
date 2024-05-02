import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors:{
        primary: colors.blue
      }
    },
  },
  plugins: [],
}

