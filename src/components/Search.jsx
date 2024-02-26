import React, { useState } from "react";

export const Search = (props) => {
  const { handleSearch } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter" && search) {
      handleSearch(search, type);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (event) => {
    setType(event.target.value);
    handleSearch(search, type);
  };

  return (
    <div className="row">
      <input
        placeholder="search"
        type="search"
        className="validate"
        value={search}
        onChange={handleInput}
        onKeyDown={handleKey}
      />
      <button className="btn" onClick={() => handleSearch(search, type)}>
        Search
      </button>
      <div className="radio-filter">
        <label>
          <input
            className="with-gap"
            name="movieType"
            type="radio"
            value="all"
            onChange={handleChange}
            checked={type === "all"}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="movieType"
            type="radio"
            value="movie"
            onChange={handleChange}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="movieType"
            type="radio"
            value="series"
            onChange={handleChange}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
};
