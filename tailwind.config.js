/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue' : '#5847eb',
      'work' : '#ff9166',
      'play' : '#56c2e6',
      'study': '#ff5c7c',
      'exercise' : '#4acf81',
      'social' : '#7536d3',
      'self-care' : '#f1c65b',
      'very-dark-blue' : '#0f1424',
      'dark-blue' : '#1c1f4a',
      'Desaturated-blue' : '#6f76c8',
      'pale-blue' : '#bdc1ff',
    },
    screens: {
      'sm' : '375px',
      'lg' : '1024px',
    },
    extend: {
      fontFamily:{
        'josefin' : ["Josefin Sans", "sans-serif"],
        'rubik' : ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
