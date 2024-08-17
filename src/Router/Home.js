import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Home()
{

    const[data, setData] = useState("Hello React")

    const navi = useNavigate();

    const blogpage = () =>
        {
            
            navi('/blog',
                 {
                     state:
                      { passdata: "Welcome back Madhan Kumar" } 
                });

        }
    return(
        <>
        <h1>Home</h1>
        <h3 onClick={blogpage}> Go to blog</h3>
        
       <Link to='/blog' state={{passdata:"fita Academy"}}> Link Blog Page</Link>
        </>
    )
}