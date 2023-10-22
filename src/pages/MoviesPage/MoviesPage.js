import './MoviesPage.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';


function MoviesPage() {
    return (
          <section className="movies-page">
            <SearchForm/>
            <FilterCheckbox/>
            <MoviesCardList/>
          </section>
    );
  }
  
  export default MoviesPage;