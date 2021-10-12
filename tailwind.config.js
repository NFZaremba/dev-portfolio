module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      margin: {
        "-100": "-30rem",
      },
      backgroundImage: {
        gallery:
          "linear-gradient(hsl(0 0% 0% / 0),hsl(20 0% 0% / 0.3) 0%,hsl(0 0% 0% / .5))",
      },
      colors: {
        tab: "#f3f3f3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
