import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpritesCarousel from "./spritesCarousel";
import PokemonInfo from "./pokemonInfo";

function PokemonBody(props) {
  return (
    <Row className="justify-content-md-center gap-5">
      <Col md={5}>
        <SpritesCarousel />
      </Col>
      <Col md={5}>
        <PokemonInfo />
      </Col>
    </Row>
  );
}

export default PokemonBody;
