/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "475px", max: "640px" },
        smDesktop: { max: "1024px" }, // small desktop
        smDesk: { max: "917px" }, // small desktop
        tabletAir: { max: "820px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
    },
  },
  plugins: [],
};
