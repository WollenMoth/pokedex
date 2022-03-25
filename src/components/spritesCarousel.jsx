import React, { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PokemonContext from "../context/pokemonContext";

function SpritesCarousel() {
  const [index, setIndex] = useState(2);
  const { sprites } = useContext(PokemonContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {Object.entries(sprites)
        .filter((sprite) => typeof sprite[1] === "string")
        .map((sprite) => (
          <Carousel.Item key={sprite[0]}>
            <img className="d-block w-100" src={sprite[1]} alt={sprite[0]} />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default SpritesCarousel;
