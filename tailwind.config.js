module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ "corporate",
      "night",
    ],
  },
  plugins: [require("daisyui")],
}