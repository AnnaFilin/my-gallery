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
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
        // velvet: {
        //   900: "#16081D",
        //   800: "#200919",
        //   700: "#2D0D22",
        //   600: "#330E27",
        //   500: "#3A102C",
        //   400: "#401231",
        // },
        // accent: {
        //   100: "#FEF5E6",
        //   200: "#FBE0B3",
        //   300: "#F9CB81",
        //   400: "#F6B64E",
        //   500: "#F5AB35",
        //   600: "#F3A11B",
        //   700: "#F29602",
        //   800: "#DA8702",
        //   900: "#C27802",
        // },
        // primary: {
        //   50: "#FCFCFC",
        //   100: "#F0F0F0",
        //   200: "#E6E6E6",
        //   300: "#E0E0E0",
        //   400: "#CACACA",
        //   500: "#B0B0B0",
        //   600: "#7E7E7E",
        //   600: "#4C4C4C",
        //   800: "#323232",
        //   900: "#191919",
        // },
      },
    },
  },
  corePlugins: {
    ringWidth: false, // Отключение 'ring' для фокуса
    outline: false, // Отключение обводки (outline)
    border: false,
  },
  plugins: [],
};
