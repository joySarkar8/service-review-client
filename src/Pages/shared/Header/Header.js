import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.png';





const Header = () => {
    return (
        <Navbar className='shadow mb-5' style={{ minHeight: '4rem' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className='align-items-center'>
                        <NavLink to="/" className='text-decoration-none me-4 text-white'>Home</NavLink>
                        <NavLink to="/courses" className='text-decoration-none me-4 text-white'>Add Service</NavLink>
                        <NavLink to="/blog" className='text-decoration-none me-4 text-white'>Blog</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;