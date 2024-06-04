/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
