/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/bg-hero.jpg')"
      },
      blur: { xs: '0.5px' }
    }
  },
  plugins: []
}
