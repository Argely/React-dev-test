/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens : {
        'full-screen': '1920px',
      },
      colors: {
        'main-background' : '#fafafa'
      }
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
