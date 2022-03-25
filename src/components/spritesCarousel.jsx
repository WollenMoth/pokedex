import React, { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PokemonContext from "../context/pokemonContext";

function SpritesCarousel() {
  const pokemon = useContext(PokemonContext);
  const sprites = Object.entries(pokemon.sprites).filter(
    (sprite) => typeof sprite[1] === "string"
  );
  const [index, setIndex] = useState(
    sprites.findIndex((sprite) => sprite[0] === "front_default")
  );

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {sprites.map((sprite) => (
        <Carousel.Item key={sprite[0]}>
          <img className="d-block w-100" src={sprite[1]} alt={sprite[0]} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SpritesCarousel;
