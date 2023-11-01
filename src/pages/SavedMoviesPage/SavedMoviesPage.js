import './SavedMoviesPage.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
// import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useEffect, useState } from 'react';


function SavedMoviesPage({ movieCards, onDeleteMovie, savedMovies, getMovies }) {

  const [searchQuery, setSearchQuery] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);


  useEffect(() => {
    // Проверяем, есть ли результаты поиска в локальном хранилище
    const storedSearchQuery = JSON.parse(localStorage.getItem('searchQuerySaved'));
    const storedSearchShortFilm = JSON.parse(localStorage.getItem('searchShortFilmSaved'));

    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }
    if (storedSearchShortFilm) {
      setIsShortFilm(storedSearchShortFilm);
    }
  }, []);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    localStorage.setItem('searchQuerySaved', JSON.stringify(query));

  };

  const handleCheckBox = (isShortFilm) => {
    setIsShortFilm(isShortFilm);
    localStorage.setItem('searchShortFilmSaved', JSON.stringify(isShortFilm));
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

  return (
    <div className="movies-page">
      <SearchForm
        onSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getMovies={getMovies}
      />
      <FilterCheckbox
        initChecked={isShortFilm}
        onShortFilmToggle={handleCheckBox}
      />
      <MoviesCardList
        movieCards={filteredMovies}
        onDeleteMovie={onDeleteMovie}
        searchQuery={searchQuery}
        savedMovies={savedMovies}
      />
    </div>
  );
}

export default SavedMoviesPage;