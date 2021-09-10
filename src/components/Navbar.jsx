import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    function handleSubmit(event){
      event.preventDefault();
    }
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark navpos">
        <div className="container-fluid me-1">
          <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon float-end"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-item" aria-current="page" href="#"></a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="d-flex">
              <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search Product" aria-label="Search" />
            </form>
            <button className="btn btn-outline-success me-2" type="search">Search</button>
            <Link to='/logout'><button className=" btn btn-danger float-end me-2">LogOut</button></Link>
            
          </div>
        </div>
      </nav>  
        </div>
    )
}
