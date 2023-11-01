import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import FilterCheckbox from "../../components/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import NoResultsMessage from "../../components/NoResultsMessage/NoResultsMessage";

function MoviesPage({ movieCards, onSaveMovie, onDeleteMovie, savedMovies, getMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);


  useEffect(() => {
    // Проверяем, есть ли результаты поиска в локальном хранилище
    const storedSearchQuery = JSON.parse(localStorage.getItem('searchQuery'));
    const storedSearchShortFilm = JSON.parse(localStorage.getItem('searchShortFilm'));

    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }
    if (storedSearchShortFilm) {
      setIsShortFilm(storedSearchShortFilm);
    }
  }, []);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    localStorage.setItem('searchQuery', JSON.stringify(query));
    setSearchPerformed(true);
  };

  const handleCheckBox = (isShortFilm) => {
    setIsShortFilm(isShortFilm);
    localStorage.setItem('searchShortFilm', JSON.stringify(isShortFilm));
  };

  useEffect(() => {
    // Фильтрация фильмов по длительности (короткометражки)
    const filterMoviesByDuration = () => {
      if (isShortFilm) {
        return movieCards.filter((movie) => movie.duration <= 40);
      } else {
        return movieCards;
      }
    };

    // Фильтрация фильмов по названию
    const filterMoviesByName = () => {
      if (searchQuery) {
        return filterMoviesByDuration().filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        return filterMoviesByDuration();
      }
    };

    // Устанавливаем отфильтрованные фильмы
    setFilteredMovies(filterMoviesByName());
    
  }, [searchQuery, isShortFilm, movieCards]);

  // const areMoviesNotFound = () => {
  //   const filteredMovies = filterMoviesByName(); // Предположим, что у вас есть функция filterMoviesByName
  //   return filteredMovies.length === 0;
  // };


  

  return (
    <section className="movies-page">
      <SearchForm
        onSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getMovies={getMovies}
        // areMoviesNotFound={areMoviesNotFound}
      />
      <FilterCheckbox
        initChecked={isShortFilm}
        onShortFilmToggle={handleCheckBox}
      />
      {searchPerformed && filteredMovies.length === 0 ? ( // Проверяем, был ли выполнен поиск
        <NoResultsMessage />
      ) : (
        <MoviesCardList
          movieCards={filteredMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          searchQuery={searchQuery}
          savedMovies={savedMovies}
        />
      )}
    </section>
  );
}

export default MoviesPage;