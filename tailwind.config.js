const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      bgMain: "rgb(31, 41, 55)",
      bgSidebar: "rgb(17, 24, 39)",
      primary: "rgb(229, 231, 235)",
      secondary: "rgb(191, 219, 254)",
      active: "rgb(31, 41, 55)",
      hover: "rgb(55, 65, 81)",
      border: "rgb(75, 85, 99)",
    },
    extend: {
      fontFamily: {
        sans: ["Ruddy", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
