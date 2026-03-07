import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 shadow-sm border-bottom border-secondary">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <span className="fs-3" style={{ fontFamily: 'Cinzel', fontWeight: 700, letterSpacing: '2px', color: '#fff' }}>
                        <span style={{ color: '#f70303' }}>P</span>INNACLE <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>DEVELOPERS</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', letterSpacing: '2px' }}>
                        <Nav.Link as={Link} to="/" className="px-3 text-uppercase text-white custom-footer-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="px-3 text-uppercase text-white custom-footer-link">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="px-3 text-uppercase text-white custom-footer-link">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="px-3 text-uppercase text-white custom-footer-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
