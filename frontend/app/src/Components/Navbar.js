import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'; // Import Navbar from react-bootstrap
import logo from './images/logo.png';
import { useAuth } from './AuthContext';

function BasicExample() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      <Navbar expand="lg" bg="body-tertiary" className="py-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FlavourFusion" width="60" height="60" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-centre">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Breakfast">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contact">
                  Contact Us
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <button className="btn btn-outline-danger mx-2" onClick={logout} to="/">
                      Logout
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/AddRecipe">
                      Add recipes
                    </Link>
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
            <form className="search" role="search">
              <input className="form-control " type="search" placeholder="Type here" aria-label="Search" />
              <button className="btn nbtn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default BasicExample;
