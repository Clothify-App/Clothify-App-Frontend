module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    logo: ["cursive"],
    extend: {
      backgroundImage: {
        "login-pattern":
          "url('/src/assets/rsz_1rsz_wavy_gen-01_single-07.jpg')",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar-hide"),
  ],
};
