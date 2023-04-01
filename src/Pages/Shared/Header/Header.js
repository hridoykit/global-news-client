import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  return (
    <Navbar bg="light" className='d-block' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Global News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
            <Nav.Link href="#action/3.4" className='d-block d-lg-none'>
              <LeftSideNav />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
