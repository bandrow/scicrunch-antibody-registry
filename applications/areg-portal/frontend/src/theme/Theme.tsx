import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
}

const theme = createTheme({
  palette: {
    grey: {
      50: "#F9FAFB",
      100: "#F2F4F7",
      200: "#EAECF0",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1D2939",
      900: "#101828",
    },
    primary: {
      main: "#2173F2",
      light: "#DFEBF8",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'proxima-nova', 'sans-serif'",
    fontSize: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          borderRadius: "8px !important",
        },
      },
    },
  },
});

export default theme;
