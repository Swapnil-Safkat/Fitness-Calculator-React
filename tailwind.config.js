module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ "pastel",
      "night",
    ],
  },
  plugins: [require("daisyui")],
}