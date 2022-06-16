import { React,createContext,useState} from 'react';


export const CardContext=createContext();

export const CardProvider=({children})=>{
    const [count, setCount] = useState(0)
    return <CardContext.Provider value={{count,setCount}}>{children}</CardContext.Provider>
}