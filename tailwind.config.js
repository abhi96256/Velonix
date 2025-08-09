module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
        melanie: {
          yellow: "#f1e811",
          lightyellow: "#ffea00",
          darkyellow: "#ddd406",
          black: "#000000",
          darkgray: "#121212",
          green: "#4caf4f",
          teal: "#4e9883",
          text: {
            muted: "#9b9744",
            secondary: "#4c4a2b"
          }
        }
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"]
      },
      boxShadow: {
        'yellow-glow': '0px 0px 30px #f1e811',
      }
    },
  },
  plugins: [],
};