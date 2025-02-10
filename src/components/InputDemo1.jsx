import React,{useState} from 'react'

const InputDemo1 = () => {
    
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const nameHandler=(event)=>{
    setName(event.target.value)
  }
  return (

    <div>
      <h1> Input Demo</h1>
      <input type="text" placeholder='ENter Name'
      onChange={(e)=>{nameHandler(e)}} />
      {name}
      <br/>
      <input type="email" placeholder='Enter Email'
      onChange={(e)=>{setEmail(e.target.value)}} />
      {email}
    </div>
  )
}

export default InputDemo1
