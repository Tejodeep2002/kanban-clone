/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        blubShadow: "0 33px 33px rgba(252, 214, 74, 0.7)",
      },
    },
  },
  plugins: [],
};
