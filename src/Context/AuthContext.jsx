import { createContext,useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [isAuth, setAuth] = useState(false)

    const login =(username,password)=>
    {
        if(username && password)
        {
            setAuth(true)
        }
    }

    const logout =()=>
    {
        
            setAuth(false)
        
    }

    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}