import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1"> Form Demo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">Form Demo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">form demo 3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">form demo 4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">form demo 5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">form demo 6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">form demo 7</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login Page</Link>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar
