/** @type {import('tailwindcss').Config} */

export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      // Add any theme extensions here
    },
  },
  plugins: [
  ],
};
