import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <NavLink className="navbar-brand" to='/'>Redux-exo</NavLink>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className="nav-link" to='reducer'>reducer</NavLink>
          <NavLink className="nav-link" to='multiple-reducer'>mulitple reducer</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;