import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "./listItem";
import Badge from "react-bootstrap/Badge";
import PokemonContext from "../context/pokemonContext";
import { capitalize } from "../utils/capitalize";

function PokemonData({ className }) {
  const { stats } = useContext(PokemonContext);

  return (
    <ListGroup className={className}>
      {stats.map((element) => (
        <ListItem
          key={element.stat.name}
          label={capitalize(element.stat.name)}
          value={
            <Badge pill bg="danger">
              {element.base_stat}
            </Badge>
          }
        />
      ))}
    </ListGroup>
  );
}

export default PokemonData;
