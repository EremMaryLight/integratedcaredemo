/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A6FB",
        secondary: "#002549",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
