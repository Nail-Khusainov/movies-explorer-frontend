// import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard({ data, onSaveMovie, onDeleteMovie, savedMovies }) {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    const baseURL = "https://api.nomoreparties.co";
    const imageLink = data.image.url ? baseURL + data.image.url : data.image;

    const handleSaveClick = () => {
        onSaveMovie(data);
    }

    const handleDeleteClick = () => {
        onDeleteMovie(data);
    }

    const isSaved = savedMovies.some(movie => movie.movieId === data.id);

    function calcDuration(min) {
        return `${Math.floor(min / 60)}ч ${min % 60}м`;
    }

    const movieDuration = calcDuration(data.duration);




    // console.log(isSaved)

    const saveButtonClassName = `${isSavedMoviesPage
        ? "movie-card__delete-button"
        : isSaved
            ? "movie-card__save-button_active"
            : "movie-card__save-button"
        }`;

    return (
        <li className="movie-card">
            <div className="movie-card__image-container">
                <img className="movie-card__image" src={imageLink} alt={`Постер фильма ${data.nameRU}`} />
            </div>
            <div className="movie-card__info">
                <h2 className="movie-card__title">{data.nameRU}</h2>
                <div className="movie-card__save-section">
                    <button
                        // className={`movie-card__save-button ${isSavedMoviesPage ? 'movie-card__delete-button' : ''}`}
                        // type="button"
                        // onClick={isSavedMoviesPage ? handleDeleteClick : handleSaveClick}
                        className={saveButtonClassName}
                        type="button"
                        onClick={isSavedMoviesPage ? handleDeleteClick : isSaved ? handleDeleteClick : handleSaveClick}
                    >
                    </button>
                </div>
                <p className="movie-card__movie-length">{movieDuration}</p>
            </div>
        </li>
    );
}

export default MoviesCard;
