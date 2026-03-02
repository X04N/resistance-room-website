/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bricolage Grotesque', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-green': {
          500: '#22c55e',
          600: '#16a34a',
        }
      },
      backdropBlur: {
        'glass': '20px',
      }
    },
  },
  plugins: [],
}
