/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.18)",
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      width: {
        "sidebar-main-md": "calc(100% - 5rem)",
        "sidebar-main-lg": "calc(100% - 18rem)",
      },
    },
  },
  plugins: [],
};
