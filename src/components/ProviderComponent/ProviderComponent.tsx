"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
};

export default ProviderComponent;
