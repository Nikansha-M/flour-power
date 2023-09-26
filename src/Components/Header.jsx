import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Header() {
    return (

        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="/">Flour Power Bakery & Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavDropdown title=<CgProfile color="black"/> id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                            <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
                            {/* Sign out should only show if user is logged in */}
                            <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/cart"><BsCart3 color="black"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
}

export default Header;
