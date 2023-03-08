/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ['"Roboto Mono"', 'monospace'],
      splineSans: ['"Spline Sans Mono"', 'monospace'],
    }
  },
  plugins: [],
  darkMode: 'class'
}
