import React from 'react';
import { Link } from "react-router-dom";
import { Nav,Dropdown } from 'react-bootstrap';
const Navbar = () =>{
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} id="recipes-dropdown" className="nav-link">
                  Recipes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Breakfast">Breakfast</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Lunch">Lunch</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Dinner">Dinner</Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
                </li>
                <Link className="btn btn-outline-warning mx-3" type="submit" to="/Login">Sign-up/Login</Link>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar