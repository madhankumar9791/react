import React, { useState } from "react";



export default function Forms()

{

    const[name ,setname] = useState("");
    const[phone ,setphone] = useState("");
    const[err ,seterr] = useState("");


    const submitdata = (e) =>
        {
            e.preventDefault();

            if((name =="") && (phone ==""))
                {
                    seterr("Please enter all the data")
                }
               
            
        }

    return(
        <>


        <form className="container p-5 bg-primary"> 


        <h1> Form Example</h1>

            <label> Name : </label>
            <input className="p-2 "  value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="enter your namme"/> 
            <br /> <br />

            <label>Phone : </label>
            <input value={phone}  onChange={(e) => setphone(e.target.value)} type="number" placeholder="Enter your Number"/>
            <br /> <br />

            <button className="btn btn-info m-4" onClick={submitdata}> Submit</button>
            <p>{err}</p>

            <br /> <br />

           
 
        </form>
        </>
    )
}