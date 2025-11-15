/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These will work with your CSS custom properties
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'custom-background': 'var(--custom-background)',
        'custom-background-dark': 'var(--custom-background-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}