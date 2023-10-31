import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b7ef86",

          secondary: "#e00f04",

          accent: "#dec2fc",

          neutral: "#221e24",

          "base-100": "#ededed",

          info: "#6691f4",

          success: "#1bda6a",

          warning: "#f09c14",

          error: "#f62d23",
        },
        screens: {
          'sm': '500px',
        }
      },
    ],
  },
  plugins: [require("daisyui"), require('autoprefixer')],
};
export default config;
