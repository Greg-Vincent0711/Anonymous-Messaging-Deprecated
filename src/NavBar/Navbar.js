import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navText ms-1 pe-5 me-5">
            <em>Anonymous</em>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navText" id="basic-navbar-nav collapse">
          <Nav className="ps-5 flex-grow-1">
            <LinkContainer to="/Eavesdrop">
              <Nav.Link className="navText" id="Gossip-Link">
                Talk
              </Nav.Link>
            </LinkContainer>
            {/*Link Containers are used for RRouter Bootstrap integration */}
            <LinkContainer to="/WhyPage">
              <Nav.Link className="navText" id="Why-Link">
                Why
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
