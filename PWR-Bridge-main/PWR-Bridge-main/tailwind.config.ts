import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-2": 'calc(100vh - (theme("spacing.header")))',
      },
      minHeight: {
        "screen-2": 'calc(100vh - (theme("spacing.header")))',
      },
      spacing: {
        header: "80px",
      },
      colors: {
        ablue: {
          50: "#EDE7FF",
          100: "#D0C4FE",
          200: "#AE9CFE",
          300: "#8973FF",
          400: "#6653FF",
          500: "#112FF8",
          600: "#112FF8",
          700: "#0028F0",
          800: "#0022EB",
          900: "#0016E6",
        },
        agrey: {
          50: "#F9F8FF",
          100: "#F3F3FF",
          200: "#ECEBFF",
          300: "#DEDDF6",
          400: "#BBBAD2",
          500: "#9C9BB3",
          600: "#737289",
          700: "#5F5F74",
          800: "#3F4054",
          900: "#1E1F31",
        },
        ared: {
          50: "#FFEBEF",
          100: "#FFCDD3",
          200: "#F39B9B",
          300: "#EB7375",
          400: "#F65251",
          500: "#FC4137",
          600: "#ED3636",
          700: "#DB2C30",
          800: "#CE2429",
          900: "#BF151C",
        },
        ghostly_grey: {
          50: "#F2F3F7",
          100: "#DEE2EA",
          200: "#C9CFDB",
          300: "#B2BACB",
          400: "#A0A9BD",
          500: "#8E99B0",
          600: "#7E899E",
          700: "#6B7485",
          800: "#5A616E",
          900: "#464B55",
        },
        abrandc: {
          dark: {
            black: "#000000",
            blackish: "#0C0D21",
            grey: "#1E1F31",
            blue: "#3333FF",
            red: "#F65251",
            green: "#00F696",
          },
          light: {
            grey: "#F9F8FF",
            blue: "#3333FF",
            red: "#FC4137",
            green: "#009545",
            dark_grey: "#1E1F31",
          },
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        space_grotesk: ["var(--font-grotesk)"],
      },
      boxShadow: {
        "3xl": "8px 8px 56px 0px rgba(174, 174, 192, 0.16)", // Custom boxShadow
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      const newContainer = {
        ".container-2": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",

          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "704px",
          },
          "@screen lg": /* 1024px */ {
            maxWidth: "928px",
          },
          "@screen xl": /* 1280px */ {
            maxWidth: "1100px",
          },

          "@screen 2xl": /* 1536px */ {
            maxWidth: "1356px",
          },
        },

        // 'h-screen-2': 'calc(100vh - (theme('spacing.header') + theme('spacing.lay_top_offset')))'
      };

      addComponents(newContainer);
    },
  ],
};
export default config;
