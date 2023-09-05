import React from 'react';
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';
import Headroom from 'react-headroom';
import logo from './images/logo.png'
const Navbar = () => {
    const { loginWithRedirect, isAuthenticated , logout , user } = useAuth0();
  return (
    <div>
      <Headroom>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
        <div className="container-fluid">
        <Link class="navbar-brand" to="/">
      <img src={logo} alt="FlavourFusion" width="60" height="60"/>
    </Link>
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
              </li>
              
              
              {/* {isAuthenticated && (
                  <li><p className='name px-2 mx-2 py-2'> {user.name}</p></li>
                ) 
              }
              {isAuthenticated ? (
                   <li>
                   <div className='btn btn-outline-danger mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</div>
                   </li>
                   
              ):(
                <li>
                   <div className='btn btn-outline-danger mx-2' onClick={() => loginWithRedirect()}>Log In/Sign Up</div>
                 </li>
                
              )} 
              {isAuthenticated && (
                  
                ) 
              }     */}
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Type here" aria-label="Search" />
              <button class="btn nbtn btn-outline-danger " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </Headroom>
    </div>
  )
}

export default Navbar