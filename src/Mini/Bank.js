import React, { useState } from "react";

import "./bank.css"
export default function Bank()
{

    const [name , setname] = useState("Madhan");
    const [balance , setbalance] = useState("10000");
    const[trans, settrans] =useState([]);

    const updatebalace = (amount) =>
        {

            const newbal = (balance - amount) ;

            setbalance(newbal);
            const newtrans = {
                name:name,
                wamount : amount,
                date : new Date().toLocaleDateString(),
                bal:newbal
            }
            settrans([...trans , newtrans])

        }
 
 
    return(

        <>
        <div className="container-fluid bg-primary text-center txtcolor p-5"> 

        <h1>Bank Widthdraw App</h1>


        </div>

        <div className="container bg-light ">

            <h3 className="text-end m-3">Welcome {name}</h3>
            <div className="card">
            <h3 className="card-title p-3"> Widthdraw Balance : <span className="text-secondary">{balance} </span></h3>
            </div>

            <div className="container">

                <div className="row m-3 p-3">

                    <div className="col-3 p-3 ">

                    <button className="btn btn-primary w-100" onClick={()=> updatebalace(50)}> 50</button>
 
                    </div>

                    <div className="col-3 p-3 ">

                             <button className="btn btn-secondary w-100" onClick={() => setbalance(balance - 100)}> 100</button>

                            </div>

                    <div className="col-3 p-3">

                         
                 <button className="btn btn-warning w-100" onClick={() => setbalance(balance - 200)}> 200</button>

                        </div>


                    <div className="col-3 p-3">

                         
                     <button className="btn btn-info w-100" onClick={() => setbalance(balance - 500)}> 500</button>

                            </div>

                </div>

             

            </div>

            <table className="table">
        <tr>
            <th>S.NO</th>
            <th>WITHDRAW AMOUNT</th>
            <th>DATE</th>
            <th>Name</th>
            <th>BALANCE</th>
        </tr>

        {trans.map( (data, index) =>
            ( <tr>
              <td>{index+1}</td>
              <td>{data.wamount}</td>
              <td>{data.date}</td>
              <td>{data.name}</td>
              <td>{data.bal}</td>
            </tr>

       ) )}

    </table>
            

        </div>
        
        </>
        
    )
}