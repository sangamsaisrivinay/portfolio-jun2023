import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
const mystyle={
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
    backdropFilter:"blur(10px)",
    webkitBackdropFilter:"blur(10px)",
    // position:'sticky',
}


const navbar = () => {
  return (
    <div style={mystyle}>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top p-2 ">
        <div className="container-fluid">
        <Link to='/' className='nav-link text-light'>
        <img src={Logo} alt="brand here" className="rounded navbar-brand"/>
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav">
            
            
            <Link to='/about' className='nav-link text-dark'>About Me</Link>
            <Link to='/works' className='nav-link text-dark'>Works</Link>
            <Link to='/schools' className='nav-link text-dark'>Study</Link>
            <Link to='/trainings' className='nav-link text-dark'>Trainings</Link>
            <Link to='/social' className='nav-link text-dark'>Social</Link>
              
            </div>
          </div>
        </div>
        </nav>
    </div>
  )
}

export default navbar