module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        skills: "repeat(auto-fit, minmax(100px, 1fr))",
      },
      translate: {
        "fp-nav": "calc(-50% - 42rem)",
      },
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
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
