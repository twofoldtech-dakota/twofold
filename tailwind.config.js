/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#111010",
        blue: "#0070f3",
        black: "#000100",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
