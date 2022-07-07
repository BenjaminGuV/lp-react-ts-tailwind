/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'accounting': "url('../public/img/background/main-accounting.jpg')"
      })
    },
  },
  plugins: [],
}
