import React, { Fragment } from "react";
import PokemonData from "./pokemonData";
import PokemonStats from "./pokemonStats";

function PokemonInfo(props) {
  return (
    <Fragment>
      <PokemonData className="my-3" />
      <PokemonStats className="my-3" />
    </Fragment>
  );
}

export default PokemonInfo;
