/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde:'#525c2e',
        verdeclaro:'#a3c261',
        marrom:'#8b5742',
        marromclaro:'#d3a27f'
        },
    },
    
  },
  plugins: [],
}

