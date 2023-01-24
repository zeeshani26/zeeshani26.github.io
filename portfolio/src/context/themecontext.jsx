import { useState, createContext } from "react";

export const ThemeContext=createContext()

function ThemeContextProvider({children}){
    const [theme,settheme]=useState(false)
    const value={theme,settheme}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider