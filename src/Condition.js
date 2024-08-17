import React from "react";


export default function Condition()
{

    let a= 7;
    return(
        <>
         <b>{a >5 ? <h1>hello</h1> : <h1>world</h1>}</b>
         <b>{a > 5 &&  <h1>And </h1>}</b>


        </>
    )
}