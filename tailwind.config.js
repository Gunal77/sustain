/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotsek: ["Space Gortesk", "sans-serif"],
      }
    },
  },
  plugins: [],
}
