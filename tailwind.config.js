/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
    backgroundImage: {
      homeBanner: "url('/src/assets/homeBanner.jpg')",
      navbarBG: "url('/src/assets/navbarBG.jpeg')",
    },
  },
  plugins: [require("daisyui")],
};
