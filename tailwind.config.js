module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('/src/assets/Wavy_Gen-01_Single-07.jpg')",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require('tailwind-scrollbar-hide')
  ],
};
