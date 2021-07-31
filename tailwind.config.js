module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#337ab7",
        },
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ["rounded"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
