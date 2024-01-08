/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0047ff'
      },
      width: {
        '22': '91px',
        '100': '420px',
        'w-4/1': '45%',
      },
      height: {
        '18': '4.5rem',
        '22': '91px'
      },
      fontSize: {
        '1xl': '22px'
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(270deg,#000,transparent)'
      },
      spacing: {
        '18': '4.3rem'
      }
    },
  },
  plugins: [],
}

