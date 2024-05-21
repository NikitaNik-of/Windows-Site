/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nns: ['var(--font-NNserif)'],
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        'w98-w': '6px 6px 2px -5px rgba(255, 255, 255, 1) inset',
        'w98-b': '-6px -6px 2px -5px rgba(0, 0, 0, 0.9) inset',
        'w98-w-sm': '3px 3px 2px -2px rgba(255, 255, 255, 1) inset',
        'w98-b-sm': '-3px -3px 2px -2px rgba(0, 0, 0, 0.9) inset',
        'w98-w-in': '-6px -6px 2px -5px rgba(255, 255, 255, 1) inset',
        'w98-g-in': '6px 6px 2px -5px rgba(135, 135, 135, 0.9) inset',
        'w98-b-in': '6px 6px 2px -5px rgba(0, 0, 0, 0.9) inset',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
