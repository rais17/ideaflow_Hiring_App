/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        xxs: '0px',
        xs: '464px',
        at480: '480px',
        at930: '930px',
        at1080: '1080px',
        at1109: '1109px',
      },

      backgroundImage: {
        "hero-bg": "url('../src/Assets/hero_bg.jpg')",
        "gradientManual": "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
      },
      fontFamily: {
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
      }
    },
  },
  plugins: [],
};
