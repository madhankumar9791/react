import {React,createContext, useState} from "react";

  import CreateGetcox from "./CreateGetcox";

  import Kood from "../Kood";


  export const nameCox = createContext();


export default function CreateCox ()
{

    const[name , setname] = useState("Hello React");


    return(
        <nameCox.Provider value={{data: name}}>

            <Kood />

        </nameCox.Provider> 
    )
    
}