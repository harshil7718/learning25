import React, { useState } from 'react'

const UseStateDemo2 = () => {

    const[isLoading,setisLoading]=useState(true);
     
    const loading=()=>{
        setisLoading(false);
    }
  return (
    <div>
      <h1> Demo 2</h1>
      {isLoading==true?'loading..':' '}
      <button onClick={loading}>Click me</button>
    </div>
  )
}

export default UseStateDemo2
