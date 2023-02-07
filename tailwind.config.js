/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter"],
        body: ["Prata"],
      },
    },
  },
  plugins: [],
};
