import { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, settheme] = useState(false);
  
  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ theme, settheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;