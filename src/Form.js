import React, { useState } from "react";

import img from './Fdemo/log.png'


export default function Form()
{

    const[name ,setname] = useState();
    const[phone ,setphone] = useState();
    const[show ,setshow] = useState(false);

    let a =5;

     const changedata = (event) =>
        {
            event.preventDefault();
          
            setshow(true)
         }

    return(
        <>

        <img src={'./Fdemo/log.png'}/>
        <h1> Form example</h1>

        <form>
            <label> Name : </label>
            <input  onChange={(e) => setname(e.target.placeholder)} type="text" placeholder="enter your namme"/> 
            <br /> <br />

            <label>Phone : </label>
            <input onChange={(e) => setphone(e.target.value)} type="number" placeholder="Enter your Number"/>
            <br /> <br />

            <button onClick={changedata}> Submit</button>


            <br /> <br />

           
 
        </form>
 
      
      
     {show ? <> <h1> Show Data</h1>
  <p>Your name is {name}</p>
  <p>Your number is {phone}</p></> : 
  null
}

</>
)
    
 
    
    
}
