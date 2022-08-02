import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

const theme = createTheme({});

export default theme;
