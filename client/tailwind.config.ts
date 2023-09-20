import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        "vazir":"vazir",
        "vazir-lig":"vazir-lig",
        "vazir-med":"vazir-med",
        "vazir-bold":"vazir-bold",
      },
      colors:{
        "blue-primary":"#1c9dea",
        "black-primary":"#223645",
        "gray-primary":"#647589",
        "bg-main":"#eff7fe",
        "input-border":"rgba(0,0,0,.1)",
        "silver-primary":"#eff1f2",
        "green-primary":"#3fcc35",
        "black-dark":"#191b1f",
        "icon-dark":"#25262c"
      },
      boxShadow:{
        "img-dark-shadow":"0 0 0 0.5rem #25262c",
        "img-light-shadow":"0 0 0 0.5rem #eff7fe",
      }
    },
  },
  plugins: [],
}
export default config
