import React from "react";
import Newstyle from "./style.module.css"

import "./normal.css"
export default function Styling()
{

    const abc = 
    {
        color:"green",
        backgroundColor :"pink",
        textAlign:"center",
        padding:"40px"
    }
    return(
        <>
        <h1 style={{color:"red",backgroundColor:"yellow", textAlign:"center", padding:"40px"}}> Inline Css</h1>
      

        <h1 style={abc}>Object CSS </h1>

        <h1> Module Css</h1>

        <h1 className={Newstyle.good}> Class type

        </h1>
        <h1 className="normal"> Normal Css</h1>

        <div className="container text-center">
                <div className="row">
                    <div className="col-4 bg-primary p-5">
                        <h3>Block 1</h3>
                    </div>  

                    <div className="col-4 bg-secondary p-5">
                        <h3>Block 2</h3>
                    </div>  

                    <div className="col-4 bg-primary p-5">
                        <h3>Block 3</h3>
                    </div>  

                </div>

        </div>

        </>
    )
}