import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';  

export default function Header(){
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Animes</Nav.Link>
            <Nav.Link href="/mangas">Mangas</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}