const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,njk,md,11ty,js}'],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F5DED8',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', ...defaultTheme.fontFamily.sans],
        body: ['"Jost"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
