/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c41e3a',
          50: '#fdeaed',
          100: '#f9d5db',
          200: '#f2abc5',
          300: '#e880ae',
          400: '#dc5598',
          500: '#c41e3a',
          600: '#9f1830',
          700: '#7b1225',
          800: '#570c1a',
          900: '#33060f',
        },
        secondary: {
          DEFAULT: '#1e4d2b',
          50: '#e8f2eb',
          100: '#d1e5d7',
          200: '#a3cbaf',
          300: '#75b187',
          400: '#47975f',
          500: '#1e4d2b',
          600: '#183e23',
          700: '#122f1a',
          800: '#0c2012',
          900: '#061009',
        },
        accent: {
          DEFAULT: '#f59e0b',
          50: '#fef3e2',
          100: '#fde6c4',
          200: '#fccea5',
          300: '#fab686',
          400: '#f99e67',
          500: '#f59e0b',
          600: '#c47d09',
          700: '#935e07',
          800: '#623e04',
          900: '#311f02',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
