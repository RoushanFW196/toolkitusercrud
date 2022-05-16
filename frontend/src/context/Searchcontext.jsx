import { createContext,useState } from "react";


export const SearchContext=createContext();


export const SearchContextProvider=({children})=>{
   const [query,setQuery]=useState("Robbin Sharma");
    const handlequery=(query)=>{
        setQuery(query);
    }
    return <SearchContext.Provider value={{query,handlequery}}>{children}</SearchContext.Provider>


};