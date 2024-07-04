/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        krub: ["Krub", "sans-serif"],
      },
      plugins: [],
    }
  }
}

