/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        grayCe: '#404040',
        bluesky: '#0B83C6',
        slate: '#F2F7FB',
        blacked: 'rgba(0, 0, 0, 0.48)',
        dark: '#0A0A0A'
      },
      borderColor:{
        glass: '1px solid rgba(255, 255, 255, 0.20)',
      },
      backgroundImage: ({
        theme
      }) => ({
        'image-gradient-258deg': 'linear-gradient(258deg, #0B83C6 0%, #2F86B6 51.01%, #275671 100%)',
      }),
    },
  },
  plugins: [],
}