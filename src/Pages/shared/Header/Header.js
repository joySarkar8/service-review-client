import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from './../../../assets/logo.png';




const Header = () => {
    const color = '#03031824';

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Successfully Log Out complete!')
            })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='shadow' style={{ minHeight: '4rem' }} collapseOnSelect expand="lg" bg={color} variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className='align-items-center'>
                        <NavLink to="/home" className='text-decoration-none me-4 text-white'>Home</NavLink>

                        {
                            user?.uid &&
                            
                            <NavLink to="/addservice" className='text-decoration-none me-4 text-white'>Add Service</NavLink>
                        }

                        {
                            user?.uid &&
                            
                            <NavLink to="/faq" className='text-decoration-none text-white me-4'>My reviews</NavLink>
                        }

                        <NavLink to="/blog" className='text-decoration-none me-4 text-white'>Blog</NavLink>
                        {
                            user?.uid ?
                                <NavLink onClick={handleLogOut} to="/login" className='text-decoration-none text-white btn btn-success'>LOGOUT</NavLink>
                                :
                                <NavLink to="/login" className='text-decoration-none text-white btn btn-success'>LOGIN</NavLink>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;