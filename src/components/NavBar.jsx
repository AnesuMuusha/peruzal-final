import React from 'react'
import image from '../images/logo-peruzal.png';
function NavBar() {
  return (    
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
  <a className="navbar-brand" href="/">
      <img src={image} width="30" height="30" className="d-inline-block align-top" alt="Peruzal Logo"/>
  </a>  
  <h5 className="my-0 mr-md-auto font-weight-normal">Peruzal</h5>
  <nav className="my-2 my-md-0 mr-md-3">
  <a className="p-2 text-dark" href="https://training.peruzal.com" target="_blank" rel="noopener noreferrer">Training</a>
<a className="p-2 text-dark" href="https://www.peruzal.com" target="_blank" rel="noopener noreferrer">Website</a>
<a className="p-2 text-dark" href="https://github.com/peruzal" target="_blank" rel="noopener noreferrer">Github</a>
</nav>
</div> 
  )
}

export default NavBar;