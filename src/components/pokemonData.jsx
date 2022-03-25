import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "./listItem";
import Badge from "react-bootstrap/Badge";
import PokemonContext from "../context/pokemonContext";
import { capitalize } from "../utils/capitalize";

function PokemonData({ className }) {
  const pokemon = useContext(PokemonContext);

  return (
    <ListGroup className={className}>
      <ListItem
        label={"Type"}
        value={pokemon.types.map((element) => {
          const type = element.type.name;
          return (
            <Badge key={type} bg={null} className={"type type-" + type}>
              {capitalize(type)}
            </Badge>
          );
        })}
      />
      <ListItem
        label={"Height"}
        value={`${(pokemon.height / 10).toFixed(1)} m`}
      />
      <ListItem
        label={"Weight"}
        value={`${(pokemon.weight / 10).toFixed(1)} kg`}
      />
      <ListItem
        label={"Abilities"}
        value={
          <ul>
            {pokemon.abilities.map((element) => (
              <li>{capitalize(element.ability.name)}</li>
            ))}
          </ul>
        }
      />
    </ListGroup>
  );
}

export default PokemonData;
