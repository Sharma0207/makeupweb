/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        background: "#FFFFFF",
        primary: "#000000",
        secondary: "#999999",
        accent: "#000000",
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.1em',
        wider: '.2em',
        widest: '.35em',
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
