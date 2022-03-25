import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpritesCarousel from "./spritesCarousel";
import PokemonInfo from "./pokemonInfo";

function PokemonBody(props) {
  return (
    <Row>
      <Col md={6}>
        <SpritesCarousel />
      </Col>
      <Col md={6}>
        <PokemonInfo />
      </Col>
    </Row>
  );
}

export default PokemonBody;
