import React from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";

function index() {
    return (
       


            <Navbar className="link" variant="light">
             
                <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >Form</NavLink>


<NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/table"
    >
      Table
    </NavLink>
            </Navbar>

       
    )
}

export default index
