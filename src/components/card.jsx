import React from "react";
import BCard from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const capitalize = (s) => {
  return s.replace(/^./, (c) => c.toUpperCase());
};

function Card({ pokemon }) {
  return (
    <BCard bg="danger" text="white">
      <BCard.Header>
        <h5>{capitalize(pokemon.name)}</h5>
        <span>#{pokemon.id}</span>
      </BCard.Header>
      <BCard.Img src={pokemon.sprites.front_default} />
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
