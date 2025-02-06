import React from 'react'

const Header = () => {
  return (
    <div style={{
        position:'sticky',
        top:0,
        width:'100%',
        backgroundColor:'yellow',
        padding:'20px 0',
    }}>
         <div style={{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',

         }}>
            <h1>LOGO</h1>
            <ul style={{
                listStyle:'none',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:"10px",
                fontSize:'25px',
                cursor:'pointer'

            }}>
                <li>Home</li>
                <li>About US</li>
                <li>Contact</li>
            </ul>
            <input 
            type="text"placeholder='search' 
            style={{
                outline:'none',
                border:'12px solid blue',
                width:'15%',
                borderRadius:'10px',
                padding:'10px',
                fontSize:'20px'
            }}
            />
        </div>
    </div>
  )
}

export default Header
