import { movies } from '../../utils/constants';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={movies} />
    </main>
  );
}

export default Movies;
