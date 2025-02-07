import React from 'react'

const ArrayDemo1 = () => {

    var users=["ram","shyam","jay","keval"]
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{textAlign:'center',color:'red'}}>Array Demo 1</h1>
        {
            users.map((user)=>{
                return <li>{user}</li>
            })
        }
      
    </div>
  )
}

export default ArrayDemo1
