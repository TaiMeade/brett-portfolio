/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf9f7',
          100: '#f0eeea',
          200: '#e0dbd4',
          300: '#c9c1b6',
          400: '#b0a494',
          500: '#9a8b78',
          600: '#8a7a69',
          700: '#736558',
          800: '#60544b',
          900: '#514741',
          950: '#2b2521',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
