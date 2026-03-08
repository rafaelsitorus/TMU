/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./product.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#f59e0b',
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}

