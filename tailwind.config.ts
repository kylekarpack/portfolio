import type { Config } from "tailwindcss";

const config: Config = {
  content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
  theme: {
    extend: {
			colors: {
        "color-background-light": "#fff",
        "color-background": "#f5f8fa",
        "color-background-dark": "#24292e",

        "color-border-light": "#f5f8fa",
        "color-border": "#cfd7dd",
        "color-border-dark": "#57606a",

        "color-copy-light": "#57606a",
        "color-copy": "#24292e",
        "color-copy-dark": "#57606a",

        "color-primary": "#43a9d1",
      },

      fontFamily: {
        "font-monospace": `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`,
        "font-sans-serif": `-apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans","Helvetica Neue", sans-serif`,
        "font-serif": `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
      },

      screens: {
        xs: "320px",
      },
		},
  },
  plugins: [],
};
export default config;
