import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ListItem({ label, value }) {
  return (
    <ListGroup.Item className="d-flex">
      <strong>{label}</strong>
      <span className="ms-auto">{value}</span>
    </ListGroup.Item>
  );
}

export default ListItem;
