/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9f7ff",
          100: "#ceecff",
          200: "#a8dfff",
          300: "#6dceff",
          400: "#28b0ff",
          500: "#0086ff",
          600: "#005cff",
          700: "#0042ff",
          800: "#0036e3",
          900: "#0035b1",
          950: "#012169",
        },
      },
    },
  },
  plugins: [],
};
