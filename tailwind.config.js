const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#402530",
        secondary: "#fdb71c",
        common: "#F5F5F5",
        darkPrimary: "#171719",
        mildPrimary: "#502D3C",
        lightPrimary: "#866674",
        primaryBg: "#f6f3f0",
        darkPrimaryBg: "#2f2f2f",
        rareColor: "#21968e",
      },
      fontFamily: {
        inter: `"Inter", sans-serif`,
      },
    },
  },
  plugins: [],
});
