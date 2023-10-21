import Header from '../../components/Header/Header';
import './SavedMoviesPage.css';
import Footer from '../../components/Footer/Footer';
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
            <Footer/>
          </div>
    );
  }
  
  export default SavedMoviesPage;