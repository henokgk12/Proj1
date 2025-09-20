/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        neutralLight: "#f5f5f5",
        neutralDark: "#242424",
      },
      fontFamily: {
        body: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
