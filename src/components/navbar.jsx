import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import BNavbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Search from "./search";
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
          <Search className="d-flex ms-auto mt-2 mt-md-0" />
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
