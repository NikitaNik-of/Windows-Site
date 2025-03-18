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
        inter: ['var(--font-InterFont)'],
        nns: ['var(--font-NNserif)'],
        wr: ['var(--font-whiterabbit)']
      },
      boxShadow: {
        'w98-w': '1px 1px 0px 0px rgba(255, 255, 255, 1) inset',
        'w98-b': '-1px -1px 0px 0px rgba(0, 0, 0, 0.9) inset',
        'w98-w-sm': '1px 1px 0px 0px rgba(255, 255, 255, 1) inset',
        'w98-b-sm': '-1px -1px 0px 0px rgba(0, 0, 0, 0.9) inset',
        'w98-w-in': '-1px -1px 0px 0px rgba(255, 255, 255, 1) inset',
        'w98-g-in': '1px 1px 0px 0px rgba(135, 135, 135, 0.9) inset',
        'w98-b-in': '1px 1px 0px 0px rgba(0, 0, 0, 0.9) inset',
        'w98-def' : ['-1px -1px 0px 0px #404040 inset',
                     '1px 1px 0px 0px #ffffff inset',
                     '-2px -2px 0px 0px #808080 inset',
                     '2px 2px 0px 0px #eceae7 inset'],
        'w98-pressed' : ['-1px -1px 0px 0px #ffffff inset',
                         '1px 1px 0px 0px #404040 inset',
                         '-2px -2px 0px 0px #eceae7 inset',
                         '2px 2px 0px 0px #808080 inset']
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


// box-shadow: inset -1px -1px 0px 0px #404040, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #eceae7 !important