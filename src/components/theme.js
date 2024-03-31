import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif", // Use "Poppins" as the primary font.
  },
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#34C94B",
      dark: "#121212",
      contrastText: "#fff",
    },
  },
});

export default theme;
