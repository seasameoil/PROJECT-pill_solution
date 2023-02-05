import React from "react";
import { Navbar, NavDropdown } from 'react-bootstrap'
const Navbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">

          <img src="/assets/logo1.png" width="190" height="90">
          </img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="상황" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">

                두통</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">복통</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#home">지도</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navbar