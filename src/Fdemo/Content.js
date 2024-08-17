import {React,useEffect,useState} from 'react';


export default function Content()
{
     

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);


    useEffect( () =>
    {

        settime()

    },[calculation]);
 
      const settime = () =>
        {
            setTimeout( ()=>
                
                {
                    setCount((count) => count +1)
                },1000
            )
        }

    return(
       
        <div className='content'>
        <h1> Welcome to UseEFFECT {count}</h1>

        <button onClick={settime}> Tick Tick Tick</button>

        <p>Calculation: {calculation}</p>

        <button onClick={()=> {setCalculation("100")}}> Calculate</button>


        </div>
        
    )
}