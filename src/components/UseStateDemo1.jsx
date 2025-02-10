import React, { useState } from 'react'

const UseStateDemo1 = () => {

    const[count,setCount]=useState(0);

    const INC=()=>{
        setCount(count+1);
        }

        const DEC=()=>{
            setCount(count-1);

        }


  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo</h1>
        <button onClick={INC}>Increment</button>
        <h2>Count: {count}</h2>
        <button onClick={DEC}> Decrement</button>
      
    </div>
  )
}

export default UseStateDemo1
