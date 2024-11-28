/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gradient-blue': '#2203FF',
        'gradient-pink': '#C40D60',
      },
      fontFamily: {
        hand: ['"Just Another Hand"', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.text-gradient': {
        background: 'linear-gradient(94.49deg, #2203FF 33.29%, #C40D60 67.01%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    })
  },],
}


