import {React, createContext, useContext} from "react";

import { Acontext } from "./Contex";
export default function GetContex()
{

    const abc = useContext(Acontext)
    return(
        <>
        <h1> this is gettig data {abc.status}</h1>
        </>
    )
}