import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Dataform()
{

    const[value , setvalue] = useState([]);
    const[name , setname] = useState([]);
    const[email , setemail] = useState([]);

    const adddata = (e) =>
        {
            
            e.preventDefault();

            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "create",
                    name:name,
                    email:email
                }})
                .then( (res) =>
                    {
                        alert("added");
                        getdata();
                        setname("");
                        setemail("");
                    }
                     
            
            )
                .catch((e) =>  {console.log(e , "Gettig error");})
            }
        

    useEffect(  () =>

        {
            getdata();
        },[])

        const getdata = () =>
            {


                axios.get('https://mytravels.store/api.php')
                .then( (res) =>
                {
                   console.log(res.status , "show data");

                   setvalue(res.data)
                })
                .catch((error)=>
                {
                    console.log(error , "Gettig error");
                })

            }

            const deletedata = (did)  =>
                {
                    axios.get('https://mytravels.store/api.php', {
                        params : 
                        {
                            action: "delete",
                            id:did
                        }})
                        .then( (res) =>
                            {
                                alert("deleted");
                                getdata();
                               
                            }
                             
                    
                    )
                        .catch((e) =>  {console.log(e , "Gettig error");})
                    }
               
            

    return(


        <div className="contaier p-3">

        <form onSubmit={adddata}>
           Name : <input type="text" onChange={(e) => setname(e.target.value)} />
           <br /> {name}
           Email : <input type="text" onChange={(e) => setemail(e.target.value)} />

           <br />
           <input type="submit" value="Submit"/>

        </form>
       <h1> Show All Users</h1>

        <table className="table table-bordered m-3">

            <tr>
                <th>slno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created</th>
                <th> Action</th>
            </tr>
   {value.map( (d,i) =>
   (
    <tr key={i}>
    <td>{d.id}</td>
    <td>{d.name}</td>
    <td>{d.email}</td>
    <td>{d.created_at}</td>
    <td><button>Edit</button> <button onClick={() => deletedata(d.id)}>Delete</button></td>
        </tr>


   ))}
           
        </table>
        
        
        </div>
    )
}