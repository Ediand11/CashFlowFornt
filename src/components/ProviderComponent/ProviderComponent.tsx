"use client";

import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd4d4",
      dark: "#f1a69d",
      light: "#ffeeef",
    },
    secondary: {
      main: "#ff9292",
      dark: "#f66768",
      light: "#ffc9cf",
    },
  },
});

const ProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderComponent;
