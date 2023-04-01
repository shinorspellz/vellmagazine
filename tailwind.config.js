module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 10px 10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'sans': ['PT Serif'],
        'serif': ['adobe-devanagari']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
]};