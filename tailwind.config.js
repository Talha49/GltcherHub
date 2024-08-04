/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-600': '#3498db',
        'red-600': '#e74c3c',
        'green-600': '#2ecc71',
        'purple-600': '#9b59b6',
        'orange-600': '#e67e73',
        'indigo-600': '#3498db',
      },
    },
  },
  plugins: [],
};
