/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        primary: '#f97316',
        secondary: '#64748b',
        dark: '#9a3412',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

