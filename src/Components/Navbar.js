import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

function NavBar() {
  return (
   
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link1" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link2" to="/student">Student</Link>
        <Link className="nav-link3" to="/contact">Contact</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar