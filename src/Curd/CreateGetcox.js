import {React,useContext} from "react";

import {nameCox} from "./CreateCox";

export default function CreateGetcox()
{
    const abc = useContext(nameCox);


    return(
        <>
        {abc.data}
        </>
    )
}