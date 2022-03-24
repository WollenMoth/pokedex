import React from "react";
import Badge from "react-bootstrap/Badge";

function HomeHeader({ count }) {
  return (
    <div className="page-header">
      <h1>Pokédex</h1>
      <p className="ms-auto mb-0">
        Showing{" "}
        <Badge pill bg="danger">
          {count}
        </Badge>{" "}
        pokémon
      </p>
    </div>
  );
}

export default HomeHeader;
