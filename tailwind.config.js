/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'xs': { 'max': '428px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'tomorrow': ['Tomorrow']
      },
      colors: {
        'mainbg': '#14172b',
        'cardbg': '#1b1e33',
        'textcolor': "#737BAE",
        'textcolor2': "#ECF0FF",

      }
    },
  },
  plugins: [],
}
