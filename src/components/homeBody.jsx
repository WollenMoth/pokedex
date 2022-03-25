import React from "react";
import Card from "./card";

function HomeBody({ pokemons }) {
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default HomeBody;
