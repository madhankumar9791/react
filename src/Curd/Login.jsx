import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



export default function Login()
{
    const[name , setname] = useState("");
    const[email , setemail] = useState("");

    const navigate = useNavigate();

    const HandlesubmitLogin = (e) =>
        {
            e.preventDefault();
            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "login",
                    name:name,
                    email:email
                }})
                .then( (res) =>
                    {
                        

                        if(res.data =='User Found')
                            {
                                alert("Login Success");
                                navigate('/home');
                                localStorage.setItem('sname', name)
                            }
                            else
                            {
                                alert("Login Falied")
                            }
                         
                         
                    }
                     
            
            )
                .catch((e) =>  {console.log(e , "Gettig error");})
            }
        
        
    


    return(
        <div className="container text-center">

            <h1> Login Form</h1>
            <form onSubmit={HandlesubmitLogin}>
                <input  required onChange={(e) => setname(e.target.value)} className="w-25 m-3 p-1" type="text" placeholder="Enter Name" />
                <br />
                <input  required onChange={(e) => setemail(e.target.value)} className="w-25 m-3 p-1" type="text" placeholder="Enter Email" />
                <br />

                <Link className="btn btn-primary" to={'/register'}>Register </Link>
                <input type="submit" className="btn btn-success ms-3" value="Login" />

            </form>

        </div>
    )
}