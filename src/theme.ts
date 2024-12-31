"use client";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
}

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: grey["900"],
          light: grey["800"],
          lighter: grey["700"],
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
        tonalOffset: 0.5,
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
