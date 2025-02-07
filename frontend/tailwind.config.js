/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#003285',    // Deep Blue
        mediumBlue: '#2A629A',  // Medium Blue
        orange: '#FF7F3E',      // Orange
        yellow: '#FFDA78',      // Yellow
      },
    },
  },
  plugins: [],
}
