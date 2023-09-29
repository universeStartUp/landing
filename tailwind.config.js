/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)'],
        'raleway': ['var(--font-raleway)'],
      },
      colors:{
        'uni-blue' : '#2968E5',
      }
    },
    
  },
  plugins: [],
}
