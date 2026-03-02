/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        primary: "#000000",
        "primary-foreground": "#FFFFFF",
        secondary: "#999999",
        "secondary-foreground": "#333333",
        muted: "#F4F4F5",
        "muted-foreground": "#999999",
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
