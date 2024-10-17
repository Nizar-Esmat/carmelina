/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: '1rem', // Add padding, e.g., 16px (1rem)
      },
    },
  },
  plugins: [],
}
