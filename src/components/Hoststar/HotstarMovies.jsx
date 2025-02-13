import React from 'react'
import { Link } from 'react-router-dom'



const HotstarMovies = () => {
  return (
    <div style={{textAlign:"center" , backgroundColor:"violet"}}>
      <h1>Hotstar Movies</h1>
      <ul>
        <li><Link to="/play/moneyheist">Money Heist</Link></li>
        <li><Link to="/play/100090">India-ENG ODI</Link></li>
        <li><Link to="/play/">ok</Link></li>
        </ul>
    </div>
  )
}

export default HotstarMovies
