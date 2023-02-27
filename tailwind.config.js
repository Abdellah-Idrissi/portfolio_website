/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {

      container: {
        center: true,
      },

      colors: {
        'firstColor':'hsl(207, 65%, 65%)',
        'textLightColor': 'hsl(207, 4%, 56%)',

        'titleColor':'hsl(207, 4%, 16%)',
        'dk-titleColor': 'hsl(207, 4%, 95%)',

        'textColor': 'hsl(207, 4%, 28%)',
        'dk-textColor': 'hsl(207, 4%, 65%)',

        'bodyColor': 'hsl(207, 4%, 99%)',
        'dk-bodyColor': 'hsl(207, 4%, 10%)',

        'containerColor': 'hsl(207, 4%, 95%)',
        'dk-containerColor': 'hsl(207, 4%, 12%)',
      },

      backgroundImage: {
        'gradientColor': 'linear-gradient(180deg,hsla(207, 48%, 72%, 0), hsla(207, 65%, 65%, 1))'
      },

      fontSize: {
        'biggestSize': '1.5rem',
        'lg-biggestSize': '3rem',

        'h1Size': '1.25rem',
        'lg-h1Size': '2.25rem',

        'h2Size': '1.25rem',
        'lg-h2Size': '1.5rem',

        'h3Size': '1rem',
        'lg-h3Size': '1.25rem',

        'normalSize': '0.938rem',
        'lg-normalSize': '1rem',

        'smallSize': '0.75rem',
        'lg-smallSize': '0.875rem',

        'tinySize': '0.625rem',
        'lg-tinySize': '0.688rem'
      },

      fontFamily: {
        'bodyFont': "'Roboto', sans-serif",
        'titleFont': "'Lora', serif"
      },

      boxShadow: {
        'navShadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        'headerShadow': 'rgba(17, 17, 26, 0.1) 0px 0px 16px;',
      },

      gridTemplateColumns: {
        'threeGrid': 'repeat(3,1fr)',
        'twoGrid': 'repeat(2,1fr)',
      },

      keyframes: {
        bounceAnimate: {
          '0% , 100%': {transform: 'translateY(5px)'},
          '50%': {transform: 'translateY(0px)'}
        },

        rotateYAnimate: {
          '0% ': {transform: 'rotateY(90deg)'},
          '100%': {transform: 'rotateY(0deg)'}
        }
      },

      animation: {
        bounceAnimate: 'bounceAnimate 0.5s infinite alternate linear',
        rotateYAnimate: 'rotateYAnimate 0.5s linear'
      }

    },
  },
  plugins: [],
}
