import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ContextTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function themeHandler() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const GetThemeValues = () => useContext(ThemeContext);
