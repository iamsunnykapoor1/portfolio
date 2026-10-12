/** @type {import('tailwindcss').Config} */
const mutedGold = {
  50: '#f7f2e8',
  100: '#eee4cf',
  200: '#dec797',
  300: '#d3b97e',
  400: '#c5a770',
  500: '#ad8d58',
  600: '#8e7144',
  700: '#705936',
  800: '#51412a',
  900: '#382d1f',
  950: '#211a11',
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0908',
          800: '#11100e',
          700: '#191815',
          600: '#25231f',
        },
        brand: {
          blue: '#c5a770',
          cyan: '#dec797',
          indigo: '#b99a65',
          purple: '#a98753',
          violet: '#b99a65',
          rose: '#c5a770',
          emerald: '#a6a080',
        },
        slate: {
          50: '#f4f0e7',
          100: '#e8e2d6',
          200: '#d4cec1',
          300: '#bcb6aa',
          400: '#9d988e',
          500: '#807b72',
          600: '#625e57',
          700: '#403e39',
          800: '#292824',
          900: '#191815',
          950: '#0d0c0b',
        },
        blue: mutedGold,
        sky: mutedGold,
        cyan: mutedGold,
        indigo: mutedGold,
        purple: mutedGold,
        violet: mutedGold,
        pink: mutedGold,
        teal: mutedGold,
        emerald: mutedGold,
        green: mutedGold,
        amber: mutedGold,
        orange: mutedGold,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(197, 167, 112, 0.12), transparent 70%)',
      },
    },
  },
  plugins: [],
}
