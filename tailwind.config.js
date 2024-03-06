const twColors = require('tailwindcss/colors')

const colors = {
  transparent:twColors.transparent,
  black:twColors.black,
  white:'#3B404A',
  secondary:'#161D25',
  primary:'#FF9900',
  'bg-colors':'#F2F2F5',
  aqua:'#1A7F91'
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      fontSize:{
        xs:'0.82 rem',
        sm:'0.98 rem',
        base:'1.15 rem',
        lg:'1.22 rem',
        xl:'1.36 rem',
        '1.5xl':'1.5rem',
        '2xl':'1.725rem',
        '3xl':'2.155rem',
        '4xl':'2.58rem',
        '5xl':'3.45rem',
        '6xl':'4.3rem',
        '7xl':'5.17rem',
        '8xl':'6.9rem',
        '9xl':'9.2rem',
      },
      keyframes:{
        animationOpacity:{
          from:{opacity:0.2},
          to:{opacity: 1}
        },
        scaleIn:{
          '0%':{
            opacity:0,
            transform:'scale(0.9)'
          },
          '50%':{
            opacity:0.3,
          },
          '100%':{
            opacity:1,
            transform:'scale(1)'
          }
        },
        animation:{
          opacity:'animationOpacity .5s ease-in-out',
          scaleIn:'scaleIn .35s ease-in-out'
        }
      }
    },
  },
  plugins: [],
}