// const defaultTheme = require("tailwindcss/defaultTheme");
 
// const colors = require("tailwindcss/colors");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'sofia': ['Sofia', 'cursive'],
        'Sacramento': ["Sacramento", 'cursive'],
        'Oswald' :["Oswald",'sans-serif'],
        'Londrina':['Londrina Shadow', 'sans-serif'],
        'Nepali':['Noto Sans Devanagari', 'sans-serif']
      }
    },
  },
  plugins: [],
}
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }