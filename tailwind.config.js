const colors = require('tailwindcss/colors')

const {
  white,
  black,
  gray,
  neutral,
  blue,
  red,
  green,
  yellow,
} = colors

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'u-',
  content: ['./lib/**/*.vue'],
  theme: {
    colors: {
      white,
      black,
      gray,
      neutral,
      primary: {
        lt2: blue[200],
        lt1: blue[300],
        base: blue[500],
        dk1: blue[700],
        dk2: blue[800],
      },
      red: {
        lt2: red[200],
        lt1: red[300],
        base: red[500],
        dk1: red[700],
        dk2: red[800],
      },
      yellow: {
        lt2: yellow[50],
        lt1: yellow[100],
        base: yellow[300],
        dk1: yellow[400],
        dk2: yellow[600],
      },
      green: {
        lt2: green[200],
        lt1: green[300],
        base: green[400],
        dk1: green[500],
        dk2: green[600],
      },
    },
  },
  plugins: [],
}
