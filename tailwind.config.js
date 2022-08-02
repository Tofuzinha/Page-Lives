/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/bg.jpg)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
  
        pink: {
          300: '#fca8ce',
          500: '#FF489A',
          600: '#FF79DA',
          700: '#9b2e5f',
          800: '#84005F',

        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#F2F2F2',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#333333',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
