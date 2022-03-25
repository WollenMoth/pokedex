import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonHeader from "./pokemonHeader";
import PokemonBody from "./pokemonBody";
import PokemonContext from "../context/pokemonContext";
import http from "../services/http";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon(id) {
      try {
        const response = await http.get(`pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404)
          navigate("/not-found");
      }
    }

    getPokemon(id);
  }, [id, navigate]);

  if (!pokemon.id) return null;

  return (
    <PokemonContext.Provider value={pokemon}>
      <PokemonHeader />
      <PokemonBody />
    </PokemonContext.Provider>
  );
}

export default Pokemon;
