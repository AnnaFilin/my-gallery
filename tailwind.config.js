/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E0E0E0",
          100: "#D9D0D6",
          200: "#B3A0AD",
          300: "#A08998",
          400: "#401231",
          500: "#3A102C",
          600: "#330E27",
          700: "#2D0D22",
          800: "#200919",
          900: "#16081D",
          950: "#0D040A",
        },
        accent: {
          100: "#FEF5E6",
          200: "#FBE0B3",
          300: "#F9CB81",
          400: "#F6B64E",
          500: "#F5AB35",
          600: "#F3A11B",
          700: "#F29602",
          800: "#DA8702",
          900: "#C27802",
        },
        grey: {
          50: "#FCFCFC",
          100: "#F0F0F0",
          200: "#E6E6E6",
          300: "#E0E0E0",
          400: "#CACACA",
          500: "#B0B0B0",
          600: "#7E7E7E",
          600: "#4C4C4C",
          800: "#323232",
          900: "#191919",
        },
      },
    },
  },
  // corePlugins: {
  //   ringWidth: false, // Отключение 'ring' для фокуса
  //   outline: false, // Отключение обводки (outline)
  //   border: false,
  // },
  plugins: [],
};
