import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(
    sessionStorage.getItem("colorMode") || "light"
  );
  let theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {
        main: "#dc143c",
      },

      secondary: teal,
      morcivert: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
