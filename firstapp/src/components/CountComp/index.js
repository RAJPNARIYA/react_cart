import { useState,useEffect } from "react";

const CountNum=({children})=>{
  const[count,setCount]= useState(0)
 
    return(
        <div>
            <h1>The Count number is: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Multiple with 2</button>
            {children}
        </div>
    )
}

export default CountNum