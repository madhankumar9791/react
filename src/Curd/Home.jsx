import { Tune } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl'




export default function Home()
{
    const abc  = localStorage.getItem('sname');

    const navi = useNavigate();

   useEffect( () =>
    {
       
    
        if(!abc)
            {
                navi('/')
            }
    });

        
    const[value , setvalue] = useState([]);
    const[name , setname] = useState([]);
    const[email , setemail] = useState([]);
    const[edit , setedit] = useState(false);
    const[id , setid] = useState([]);

    const adddata = (e) =>
        {
            
            e.preventDefault();

            if(edit == false)

                {


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
            else
            {
                axios.get('https://mytravels.store/api.php', {
                    params : 
                    {
                        action: "update",
                        id:id,
                        name:name,
                        email:email
                    }})
                    .then( (res) =>
                        {
                            alert("updated");
                            getdata();
                            
                        }
                         
                
                )
                    .catch((e) =>  {console.log(e , "Gettig error");})
                }
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
               
            
                    const updatedata = (uid)  =>
                        {

                            const alldata = value.find((e) => e.id == uid)

                            setname(alldata.name)
                            setemail(alldata.email)
                            setid(alldata.id)
                            setedit(true)
                            
                        }
                           
                    

                        const logout = () =>
                            {
                                localStorage.removeItem('sname');
                                navi('/')
                            }
        

    return(


        <div className="container text-center">


        <form onSubmit={adddata} className="w-25 ">
          <input value={id} type="hidden" onChange={(e) => setid(e.target.value)} />
        <br /> 
           Name : <input plaintext className="m-1" value={name}  as="textarea" onChange={(e) => setname(e.target.value)} />
           <br /> 
           Email : <input className="m-1" value={email} type="text" onChange={(e) => setemail(e.target.value)} />

           <br />
           
           {(edit ? <input type="submit" className="btn btn-success ms-3" value="Update"/> : <input className="btn btn-success ms-3" type="submit" value="Add"/> )} 

        </form>

        <button className="btn btn-danger  " onClick={logout}>Logout</button>
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
    <td><button onClick={() => updatedata(d.id)}>Edit</button> <button onClick={() => deletedata(d.id)}>Delete</button></td>
        </tr>


   ))}
           
        </table>
        
        
        </div>
    )
}