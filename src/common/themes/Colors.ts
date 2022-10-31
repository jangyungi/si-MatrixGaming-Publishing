import { PaletteOptions } from "@mui/material";

export enum Color {
  Background = "#333333;",
  Primary = "#777777",
  TextMain = "#EEEEEE",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
  secondary: {
    main: Color.TextMain,
  },
  text: {
    primary: Color.TextMain,
  },
  background: { default: Color.Background },
};
