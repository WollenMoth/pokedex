import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Search({ className }) {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const name = "search";
  const label = "Search";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${search.toLowerCase()}`);
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormControl
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name={name}
        type={name}
        aria-label={label}
        placeholder={label}
        className="me-2"
      />
      <Button variant="outline-light" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Search;
