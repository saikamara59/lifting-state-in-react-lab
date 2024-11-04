// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      borderRadius: {
        custom: 'var(--border-radius)',
      },
    },
  },
  plugins: [],
};

