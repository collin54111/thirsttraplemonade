/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8E71C', // lemonade yellow
        secondary: '#E75480', // pink accent
        dark: '#08253F', // deep navy
      },
      fontFamily: {
        script: ['Pacifico', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};