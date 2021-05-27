import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };

  const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  return (
    <Navbar
      collapseOnSelect='true'
      expand='lg'
      bg='primary'
      fixed='top'
      variant='dark'
    >
      <Container>
        <h1
          className='bg-light shadow'
          style={{ margin: 0, fontSize: '1rem', borderRadius: 20 }}
        >
          <Navbar.Brand as={Link} to='#' className='text-dark'>
            CDM
          </Navbar.Brand>
        </h1>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={handleClick}
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              as={NavLink}
              to='/home'
              eventKey={getRandom(1, 4)}
              activeClassName='active'
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/patients'
              eventKey={getRandom(4, 7)}
              activeClassName='active'
            >
              Patients
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/reports'
              eventKey={getRandom(7, 10)}
              activeClassName='active'
            >
              Reports
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
