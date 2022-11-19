
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountNum from './components/CountComp';
import Multiply from './components/MultiplyComp';

function App() {

  // const[count,setCount]= useState(0)
  // const[multiplyAns, setMutiply] = useState(0);

  //   useEffect(() => {
  //       setMutiply(count * 2);
  //     },[count])


 

 
  
  return (
    <div className="App">
     {/* <h1>Count is {count}</h1>
     <button onClick={()=>setCount((c)=>c+1)}>Multiple with 2</button>
     <h2>Multiple {multiplyAns}</h2> */}
     {/* <ParentComp>
      <ChildComp name='Gopi' age={15} height={5} />
      <ChildComp name='Khushi'  age={63} height={6} />
     </ParentComp> */}

     <CountNum >
      {/* <h1>{count}</h1>
      <button onClick={()=>setCount((c)=>c+1)}>Multiple with 2</button> */}
        <Multiply/>
         
     </CountNum>



    </div>
  );
}

export default App;
