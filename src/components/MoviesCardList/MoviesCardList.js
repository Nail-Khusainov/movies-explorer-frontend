import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movieCards, onSaveMovie, onDeleteMovie, searchQuery, savedMovies }) {
  const [cardsToShow, setCardsToShow] = useState();

  const handleShowMore = () => {
    setCardsToShow(prevCount => prevCount + calculateCardsToAdd());
  };
  
  const calculateCardsToAdd = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 4;
    } else if (screenWidth >= 990) {
      return 3;
    } else if (screenWidth >= 767) {
      return 2;
    } else {
      return 2;
    }
  };
  const calculateCardsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 16;
    } else if (screenWidth >= 990) {
      return 12;
    } else if (screenWidth >= 767) {
      return 8;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(calculateCardsPerRow());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {movieCards.slice(0, cardsToShow).map((movie, index) => {
          if (searchQuery && !movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
          }
          return (
            <MoviesCard
              key={index}
              data={movie}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          );
        })}
      </ul>
      {cardsToShow < movieCards.length && (
        <button className="movies-card__more-button" onClick={handleShowMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
