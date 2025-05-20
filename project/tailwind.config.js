/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#A259FF', // Purple neon
          light: '#BF8DFF',
          dark: '#8A3DF9',
        },
        secondary: {
          DEFAULT: '#4BE1EC', // Turquoise blue
          light: '#7EEEF5',
          dark: '#28D0DB',
        },
        dark: '#333333', // Dark text
        light: '#777777', // Light gray text
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};