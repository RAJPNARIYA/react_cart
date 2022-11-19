import { useState,useEffect } from "react";

const Multiply = () =>{

    const[multiplyAns, setMutiply] = useState(0);
    useEffect(() => {
        setMutiply(multiplyAns*2);
      },[count])
    return(
        <div>
            <h2>Multiply of count with 2 is :{multiplyAns}</h2>
        </div>
    )
}

export default Multiply