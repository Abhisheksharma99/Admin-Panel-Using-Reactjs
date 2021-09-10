import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export default function Sidebar() {
  return (
    <div>
      <div className="sidenav bg-dark sidenavspace">
        <a href="#Logo"></a>
       
          <h3 className="text-light">Admin Panel</h3>
      
        <Link to='/home'>Home</Link>
        <Link to ='/products'>Products</Link>
        <Link to="/users" >Users</Link>
        
      </div>
    </div>
  );
}
