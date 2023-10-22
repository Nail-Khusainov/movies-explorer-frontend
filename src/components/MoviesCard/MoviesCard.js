// import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import image from '../../images/image1.png';
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard()


//     { 
//     link,
//     name, 
//     likes,
//     owner,
//     id, 
//     onCardClick,
//     onCardLike,
//     onCardDelete,
// }) 

{
    // const currentUser = React.useContext(CurrentUserContext);
    // const isOwn = owner._id === currentUser._id;
    // const isLiked = likes.some(i => i._id === currentUser._id);

    // const cardLikeButtonClassName = ( 
    //     `button elements__like-button ${isLiked && 'elements__like-button_active'}` 
    // );

    // function handleCardClick() {
    //     onCardClick( {link, name} );
    // };

    // function handleLikeClick() {
    //     onCardLike( {likes, id} )
    // }

    // function handleDeleteClick() {
    //     onCardDelete ( {id} )
    // }
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    return (
        <li className="movie-card">
            <img className="movie-card__image" src={image} alt="постер фильма" />
            {/* {isOwn && (<button className="button elements__delete-button" type="button" onClick={handleDeleteClick}></button>)} */}
            <div className="movie-card__info">
                <h2 className="movie-card__title">33 слова о дизайне</h2>
                <div className="movie-card__save-section">
                    <button
                        className={`movie-card__save-button ${isSavedMoviesPage ? 'movie-card__delete-button' : ''}`}
                        type="button">
                    </button>
                </div>
                <p className="movie-card__movie-length">1ч42м</p>
            </div>
        </li>
    )
}

export default MoviesCard;