/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0074B7',
        orange: '#f13a01',
      },
      fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
