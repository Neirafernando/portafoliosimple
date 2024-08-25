import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/prototipologo 1.png'; // Subir dos directorios desde `Common` para llegar a `assets`

const CustomNavbar = () => {
    return (
        <div >
            <Navbar expand="xl" style={{ backgroundColor: '#C7253E', height: '80px' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            alt="Fluxtech Logo"
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/proyects">Proyects</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default CustomNavbar;
