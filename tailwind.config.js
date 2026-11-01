/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        handwritten: ["Caveat", "cursive"],
      },
      colors: {
        blush: "#FFF1F4",
        rose: "#F5A6B8",
        lavender: "#E9DDF8",
        cream: "#FFF9F2",
        midnight: "#25213D",
      },
    },
  },
  plugins: [],
};