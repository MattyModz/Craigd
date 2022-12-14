module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      padding: { "fluid-video": "56.25%" },
      backgroundImage: {
        bgrect: "url('../../public/bgrect.svg')",
        hero: "url('../../public/heroicons.svg')",
      },
      colors: {},
      fontfamily: {},

      screens: {
        xs: { max: "321px" },
        xsm: { max: "352px" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
