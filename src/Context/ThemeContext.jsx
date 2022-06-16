import { createContext,useState } from "react"


export const ThemeContext=createContext()

export const ThemeProvider=({children})=>
{
    const [Theme, setTheme] = useState("light")
   const Toggle=()=>{
    if(Theme==="light")
    {
        setTheme("dark")
    }
    else
    {
        setTheme("light")
    }
   }

    return <ThemeContext.Provider value={{Theme,isLight:Theme=="light",Toggle}}>{children}</ThemeContext.Provider>
}