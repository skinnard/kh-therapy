module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      title: 'Libre Baskerville, serif',
      body: 'Open Sans, sans-serif',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        blue: '#0F4C81',
        $cream: '#F9F6EC',
        $rust: '#DB6B5C',
        $grey: '#DBDBDB',
        $lightGrey: '#EFF4F3',
        $altGrey: '#F4F4F4',
        $offWhite: '#FEFEFE',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
}
