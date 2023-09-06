import React from 'react';
import { Link } from "react-router-dom";
import Headroom from 'react-headroom';
import logo from './images/logo.png'
// import { Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext'; // Import useAuth hook

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div>
      <Headroom>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
          <div className="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="FlavourFusion" width="60" height="60" />
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
                {isLoggedIn ? (
                  <>
                  <li>
                    <button className="btn btn-outline-danger mx-2" onClick={logout} to='/'>
                      Logout
                    </button>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/AddRecipe">Add recipes</Link>
                </li>
                  </>
                ) : (
                  <li>
                    <Link className="btn btn-outline-danger mx-2" onClick={login} to="/Login">
                      Login
                    </Link>
                  </li>
                )}
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