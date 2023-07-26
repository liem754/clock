/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", ".public/index.html"],
  theme: {
    extend: {
      animation: {
        // spin-slow: 'spin 3s ',
        wiggle: "wiggle 1s linear infinite ",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primari: "#f5f5f5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
      maxWidth: {
        1100: "1100px",
      },
    },
  },
  plugins: [],
};
