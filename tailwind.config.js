/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#002549",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
