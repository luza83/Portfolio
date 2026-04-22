module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5e6d3',
        foreground: '#000000',
        border: '#00000033',
        primary: {
          DEFAULT: '#b91c1c',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#991b1b',
          foreground: '#ffffff',
        },
        accent: '#7f1d1d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};