import {React, useState, createContext, useContext} from "react";

import GetContex from "./GetContex";

export const Acontext = createContext();

export default function Contex()
{

    const[user, setuser]= useState("Hello Contex")
    return(
        <>
        <h1> Contex Example</h1>

        <Acontext.Provider value={{ status: user }}>



         <h1> {user}</h1>

         <GetContex />

        </Acontext.Provider>



       
        
        </>
    )
}