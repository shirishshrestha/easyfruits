/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#FE7316",
      textColor: "#3e4b5f",
      darkGreen: "#62a403",
    },
    extend: {
      boxShadow: {
        "3xl": "5px 5px 30px 10px rgb(248 248 248)",
      },
    },
  },
  plugins: [],
};
