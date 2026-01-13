/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs"
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-top': 'slideInTop 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-bottom': 'slideInBottom 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-out-left': 'slideOutLeft 0.4s ease-in forwards',
        'slide-out-right': 'slideOutRight 0.4s ease-in forwards',
      },
    },
  },
  plugins: [],
}

