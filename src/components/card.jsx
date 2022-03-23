import React from "react";
import BCard from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";

const capitalize = (s) => {
  return s.replace(/^./, (c) => c.toUpperCase());
};

function Card({ pokemon }) {
  const base_url = "/pokemon/";
  const url_name = base_url + pokemon.name;
  const url_id = base_url + pokemon.id;

  return (
    <BCard bg="danger" text="white">
      <BCard.Header>
        <LinkContainer to={url_name}>
          <h5>{capitalize(pokemon.name)}</h5>
        </LinkContainer>
        <LinkContainer to={url_id}>
          <span>#{pokemon.id}</span>
        </LinkContainer>
      </BCard.Header>
      <LinkContainer to={url_name}>
        <BCard.Img src={pokemon.sprites.front_default} />
      </LinkContainer>
      <BCard.Footer>
        {pokemon.types.map((element) => (
          <Badge bg={null} className={"type-" + element.type.name}>
            {capitalize(element.type.name)}
          </Badge>
        ))}
      </BCard.Footer>
    </BCard>
  );
}

export default Card;
