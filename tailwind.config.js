/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e3a8a', // Deep Navy Blue from logo
          red: '#dc2626',  // Vivid Red from logo shapes
          white: '#FFFFFF',
          dark: '#0f172a', // Darker blue for contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
