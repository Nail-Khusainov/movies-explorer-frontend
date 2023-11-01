import "./SearchForm.css";
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
      <form className="search-section__form" onSubmit={handleSubmit} noValidate>
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
        >
        </button>
      </form>
      <span className="search-section__input-error">{query ? "" : "Введите название фильма"}</span>
    </section>
  );
}

export default SearchForm;
