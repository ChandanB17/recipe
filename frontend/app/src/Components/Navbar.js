import React from 'react';
import { Link } from "react-router-dom";
import Headroom from 'react-headroom'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { loginWithRedirect, isAuthenticated , logout , user } = useAuth0();
  return (
    <div>
      <Headroom>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-centre">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Breakfast">Recipes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/AddRecipe">Add recipes</Link>
              </li>
              {isAuthenticated && (
                  <li><p> {user.name}</p></li>
                ) 
              }
              {isAuthenticated ? (
                   <li>
                   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                   </li>
              ):(
                <li>
                   <button onClick={() => loginWithRedirect()}>Log In</button>
                 </li>
                
              )}     
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Type here" aria-label="Search" />
              <button class="btn nbtn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </Headroom>
    </div>
  )
}

export default Navbar