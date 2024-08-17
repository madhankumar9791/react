import React, { useState } from "react";



export default function Ver()
{

     const [name , setname]= useState("Hello world")

     const abc = ()  =>
        {
            setname("Google")
        }
 
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button onMouseEnter={abc}> click</button>



            <nav role="navigation">
  <ul>
    <li><a href="#">One</a>
      
      <ul class="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
      
      
      
    </li>
    <li><a href="#">Two</a>
      <ul class="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li><a href="#">Three</a></li>
  </ul>
</nav>
        </div>
    )
}