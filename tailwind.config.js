/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "475px", max: "640px" },
        // ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
