/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern-bg.jpg')",
      })
    },
  },
  plugins: [],
}
