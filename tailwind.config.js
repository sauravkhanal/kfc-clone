/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/*.{js, jsx}",
    "./src/components/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        kfc: "#E5002B"
      }
    }
  },
  plugins: []
};
