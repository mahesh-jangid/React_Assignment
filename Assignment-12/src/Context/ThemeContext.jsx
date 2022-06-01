import React, { createContext, useState, useEffect } from "react";
import { themes } from "../Theme";

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  //   useEffect(() => {
  //     const isDark = localStorage.getItem("dark") === "true";
  //     console.log(isDark);
  //     setDark(isDark);
  //   }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    // localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
