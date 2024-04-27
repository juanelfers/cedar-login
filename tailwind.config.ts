import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#3667E9",
        "dark-blue": "#012D67",
        "grayish-blue": "#65657B",
        "gray": "#6D7088",
        "red": "#C34648",
      },
    },
  },
  plugins: [],
};

export default config;
