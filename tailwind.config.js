module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('/src/assets/fill_form2.svg')",
        
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")],
};
