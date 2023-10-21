import Header from '../../components/Header/Header';
import './MoviesPage.css';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';


function MoviesPage() {
    return (
          <section className="movies-page">
            <SearchForm/>
            <FilterCheckbox/>
            <MoviesCardList/>
            <Footer/>
          </section>
    );
  }
  
  export default MoviesPage;