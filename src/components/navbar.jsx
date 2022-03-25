import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
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
      <Container fluid className="justify-content-center justify-content-md-start">
        <LinkContainer to="/">
          <BNavbar.Brand>
            <Image src={logo} alt="logo" />
            Pokédex
          </BNavbar.Brand>
        </LinkContainer>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
