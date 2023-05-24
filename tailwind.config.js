/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Italic:'Italic'
      },
      fontFamily:{
       Light :'Light'
      },
      fontFamily:{
        Semilight :'Semilight'
       },
       fontFamily:{
        Thin :'Thin'
       },
       fontFamily:{
        Thintrial:'ThinTrial'
       },
       fontFamily:{
        UltraLight:'UltraLight'
       }
    },
    
  },
  plugins: [
    require("@tailwindcss/forms"),
    //require("tailwind-scrollbar-hide")
  ],
  
 
};
