/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        dallas: ["Dallas", "sans-serif"],
        dallasBold: ["Dallas-Bold", "sans-serif"],
        articulat: ["Articulat", "sans-serif"],
        monument: ["Monument Regular", "sans-serif"],
        monumentBold: ["Monument Bold", "sans-serif"],
        codeBold: ["Code Bold", "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
