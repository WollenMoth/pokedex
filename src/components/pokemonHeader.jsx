import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import PokemonContext from "../context/pokemonContext";
import { capitalize } from "../utils/capitalize";

function PokemonHeader(props) {
  const pokemon = useContext(PokemonContext);

  return (
    <div className="page-header">
      <h1>{capitalize(pokemon.name)}</h1>
      <h2 className="ms-auto">
        <Badge bg="danger">#{pokemon.id}</Badge>
      </h2>
    </div>
  );
}

export default PokemonHeader;
