const colors = require('tailwindcss/colors')
const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);
const extendedColors = defaultColors;
module.exports = {
 purge: {
    enabled: false,
    content: [
      './dist/**/*.html',
      './dist/*.html',
      './src/**/*.js',
   ],
 },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '13xl': '11rem',
      '14xl': '12rem',
      '15xl': '13rem',
      '16xl': '14rem',
      '17xl': '15rem',
      '18xl': '16rem',
      '19xl': '17rem',
      '20xl': '18rem',
    },

      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,

      blue: colors.blue,
       
      },

      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tailwindcss-textshadow')

  ],
}
