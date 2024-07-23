// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'dark-green':'#22c55e',
      'lime-green':'#a3e635'
      ,
      'white':"#f8fafc"
    },
    fontFamily: {
      sans: ['Larken Regular', 'Larken Extra-bold'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      
      
    },
  },
  plugins: [],
};