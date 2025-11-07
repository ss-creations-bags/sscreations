/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B1F3D',
        secondary: '#B8860B', 
        background: '#FFFEF9',
        accent: '#E5D4C1',
      },
    },
  },
  plugins: [],
}