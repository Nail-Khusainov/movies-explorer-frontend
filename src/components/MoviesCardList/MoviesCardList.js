import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {

    return (
        <section className="movies-card">
                <ul className="movies-card__list">

                        <MoviesCard
                            // link={card.link}
                            // name={card.name}
                            // likes={card.likes}
                            // owner={card.owner}
                            // id={card._id}
                            // key={card._id}
                            // onCardClick={onCardClick}
                            // onCardLike={onCardLike}
                            // onCardDelete={onCardDelete}
                        />
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>
                        <MoviesCard/>

                </ul>
                    <button className="movies-card__more-button">
                        Ещё
                    </button>
        </section>
    );

}


export default MoviesCardList;