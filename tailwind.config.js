/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        limeGreen: "hsl(150, 100%, 66%)",
        darkblue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
