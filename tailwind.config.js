/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login_bg: "url('./src/assets/img/add product img.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
