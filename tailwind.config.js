/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      padding: {
        240: "240px",
      },
    },
  },
  plugins: [],
};
