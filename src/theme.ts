"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
}

let theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
    disableCssColorScheme: true,
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: grey["900"],
          light: grey["800"],
          lighter: grey["700"],
        },
        background: {
          default: "rgb(238 245 252)",
        },
        tonalOffset: 0.5,
      },
    },
    dark: {
      palette: {
        primary: {
          main: grey["50"],
          light: grey["300"],
          lighter: grey["400"],
        },
        background: {
          default: "#000",
        },
        tonalOffset: 0.5,
      },
    },
  },
  typography: {
    fontFamily: "var(--font-quicksand)",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
