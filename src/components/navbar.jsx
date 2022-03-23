import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import BNav from "react-bootstrap/Nav";
import BNavbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";

function Navbar(props) {
  return (
    <BNavbar
      bg="danger"
      variant="dark"
      expand="lg"
      fixed="top"
      className="navbar-inverse"
    >
      <Container fluid>
        <LinkContainer to="/">
          <BNavbar.Brand>
            <Image src={logo} alt="logo" />
            Pokédex
          </BNavbar.Brand>
        </LinkContainer>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <BNav className="me-auto">
            <LinkContainer to="/">
              <BNav.Link>Home</BNav.Link>
            </LinkContainer>
          </BNav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
