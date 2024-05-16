/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c',
        'dark-card': '#2d3748',
        'dark-text': '#e2e8f0',
        'dark-secondary-text': '#a0aec0',
        'dark-button': '#2b6cb0',
        'dark-button-hover': '#2c5282',
      }
    },
  },
  plugins: [],
};

export default tailwindConfig;