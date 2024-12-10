/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     // require("@tailwindcss/forms"),
//     // require("@tailwindcss/typography"),
//     // require("@tailwindcss/aspect-ratio"),
//   ],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          // "0%": { transform: "translateX(-100%)", opacity: "0" },
          // "100%": { transform: "translateX(0)", opacity: "1" },
          "0%": { transform: "translateX(-40%)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rightToLeft: {
          // "0%": { transform: "translateX(100%)", opacity: "0" },
          // "100%": { transform: "translateX(0)", opacity: "1" },
          "0%": { transform: "translateX(40%)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      // "animation-infinite": {
      //   "left-to-right": "leftToRight 20s linear infinite",
      //   "right-to-left": "rightToLeft 15s linear infinite",
      // },
      animation: {
        "left-to-right-infinite": "leftToRight 20s linear infinite",
        "right-to-left-infinite": "rightToLeft 15s linear infinite",
        "left-to-right": "leftToRight 3s ease-out",
        "right-to-left": "rightToLeft 4s ease-out",
      },
    },
  },
  plugins: [],
};
