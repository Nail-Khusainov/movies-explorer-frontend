import './SavedMoviesPage.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
// import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesCard from "../../components/MoviesCard/MoviesCard";



function SavedMoviesPage() {
    return (
          <div className="movies-page">
            <SearchForm/>
            <FilterCheckbox/>
            {/* <MoviesCardList/> */}
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
                </ul>
        </section>
          </div>
    );
  }
  
  export default SavedMoviesPage;