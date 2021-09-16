import React from 'react';
import "./index.css"
import { Navbar, Container, Nav } from "react-bootstrap";

function index() {
    return (
        <div className="Nav">


            <Navbar  variant="light">
                <Nav.Link href="/" >Form</Nav.Link>
                <Nav.Link href="/table">Table</Nav.Link>
            </Navbar>

        </div>
    )
}

export default index
