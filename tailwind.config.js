/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        t_blue: "#256FF1",
        t_paragraph: "#7F7E83",
        t_black: "#1F1F36",
        t_pink: "#C11574",
        t_green: "#027A48",
      },
      fontFamily: {
        t_figtree: ["Figtree", "sans-serif"],
        t_Jaka: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
