import React from 'react'

const ArrayDemo2 = () => {

    var students =[
        {name: 'John', age: 20,marks: 23},
        {name: 'Jane', age: 21,marks:22},
        {name: 'Jim', age: 19,marks:21}
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'blue'}}>Array Demo 2</h1>
        {
          students.map((stu) => {
            return <div>
              <h2 style={{color:'red'}}>{stu.name}</h2>
              <p>Age: {stu.age}</p>
              <p>Age: {stu.marks}</p>
              
            </div>
        })
      }
      
    </div>
  )
}

export default ArrayDemo2
