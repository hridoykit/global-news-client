import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const {user, userSignOut} = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(res => {
        //Sign-out successful.
      })
      .catch(err => console.error(err));
  };

  return (
    <Navbar bg="light" className="d-block" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link as={Link} to="/">
            Global News
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="#action/3.4" className="d-block d-lg-none">
              <LeftSideNav />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">

          {/* display name by toggle */}

          {
            user?.uid ?
            <>
              <Navbar.Text>
                Signed in as: <a href="#login"> {user?.displayName} </a>
              </Navbar.Text>
              <Button onClick={handleSignOut} className="me-3" variant="outline-danger" size="sm">Sign Out</Button>
            </>
            :
            <>
              <Link className="me-3 text-decoration-none" to='/signin'>Sign in</Link>
              <Link className="me-3 text-decoration-none" to='/signup'>Sign up</Link>
            </>
          }

          {/* --display profile photo-- */}

          {
            user?.photoURL ?
            <Image className="ms-2" roundedCircle height={30} width={30} src={user.photoURL} />
            :
            <FaUserAlt className="ms-2" />
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
