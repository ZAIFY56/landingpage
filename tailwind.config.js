/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B9795",
        p: "letter-spacing:-4%",
        p: "color: #1B1B1B",
      },
    },
  },
  plugins: [],
};
