import React, { Fragment, useEffect, useState } from "react";
import HomeHeader from "./homeHeader";
import Card from "./card";
import Pagination from "./common/pagination";
import http from "../services/http";

function Home(props) {
  const [data, setData] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  async function getData(url) {
    const response = await http.get(url);
    setData(response.data);
  }

  async function getPokemons(urlList) {
    const pokemonList = [];

    for (const url of urlList) {
      const response = await http.get(url);
      pokemonList.push(response.data);
    }

    setPokemons(pokemonList);
  }

  useEffect(() => {
    const offset = (currentPage - 1) * pageSize;
    getData(`pokemon?offset=${offset}&limit=${pageSize}`);
  }, [currentPage]);

  useEffect(() => {
    if (data.results) {
      const urlList = data.results.map((pokemon) => pokemon.url);
      getPokemons(urlList);
    }
  }, [data]);

  return (
    <Fragment>
      <HomeHeader count={pokemons.length} />
      <div className="card-list">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {data.count && (
        <Pagination
          itemsCount={data.count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          className="mt-3"
        />
      )}
    </Fragment>
  );
}

export default Home;
