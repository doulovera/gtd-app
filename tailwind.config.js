/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          light: '#3c3c4f',
          dark: '#21212b',
          darker: '#181820',
        },
      },
    },
  },
  plugins: [],
};
