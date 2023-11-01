import "./SearchForm.css";
// import React, { useState } from "react";

import React, { useEffect, useState } from "react";

function SearchForm({ onSubmit, getMovies, searchQuery }) {
  const [query, setQuery] = useState(searchQuery);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    onSubmit(query);
  };

  useEffect(() => {
    setQuery(searchQuery)
  }, [searchQuery]);

  return (
    <section className="search-section">
      <form className="search-section__form" onSubmit={handleSubmit}>
        <input
          className="search-section__input"
          type="text"
          name="search-field"
          placeholder="Фильм"
          required
          value={query}
          onChange={handleInputChange}
        ></input>
        <button
          className="search-section__submit-button"
          type="submit"
          // disabled={!query.trim()}
        >
        </button>
      </form>
      <span className="search-section__input-error"></span>
    </section>
  );
}

export default SearchForm;