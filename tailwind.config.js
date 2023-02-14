const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "hsl(246, 80%, 60%)",
        "light-orange": "hsl(15, 100%, 70%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "light-red": "hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        "violet": "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      screens: {
        "mobile": "375px",
        "desktop": "1440px",
      },
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
      backgroundImage: {
        "work": "url('../public/card-icons/icon-work.svg')",
        "study": "url('../public/card-icons/icon-study.svg')",
        "play": "url('../public/card-icons/icon-play.svg')",
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(pale-blue|desaturated-blue|dark-blue|very-dark-blue|blue|light-orange|soft-blue|light-red|lime-green|violet|soft-orange)/
  }],
}