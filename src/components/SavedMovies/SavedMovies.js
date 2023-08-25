import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm.js';
import findMovies from '../../utils/findMovies.js';
import getFilterMovie from '../../utils/getFilterMovie.js';
import selectShortMovies from '../../utils/selectShortMovies';

function SavedMovies({
  isLoad,
  setIsLoad,
  saveMovies,
  handleDeleteSaveMovie,
  toggleShortSavedMovie,
  onToggleShortSavedMovie,
  error,
  setError,
}) {
  const [ filterList, setFilterList ] = useState([]),
        [ searchQuery, setSearchQuery ] = useState(null);

  const [isEmptyField, setIsEmptyField] = useState(false);

  useEffect(() => {
    setIsLoad(true);

    if (searchQuery) {
      const findSearchMovies = findMovies(saveMovies, searchQuery);

      setFilterList(getFilterMovie(findSearchMovies, false, toggleShortSavedMovie, setError));
    } else {
      setFilterList(getFilterMovie(saveMovies, false, toggleShortSavedMovie, setError));
    }

    setIsLoad(false);
  }, [saveMovies]);

  useEffect(() => {
    setIsLoad(true);
    setError(false);

    if (searchQuery) {
      const findSearchMovies = findMovies(saveMovies, searchQuery);

      setFilterList(toggleShortSavedMovie
        ? selectShortMovies(getFilterMovie(findSearchMovies, false, toggleShortSavedMovie, setError))
        : getFilterMovie(findSearchMovies, false, toggleShortSavedMovie, setError));
    } else {
      setFilterList(getFilterMovie(saveMovies, false, toggleShortSavedMovie, setError));
    }

    setIsLoad(false);
  }, [searchQuery, toggleShortSavedMovie]);

  const handleFormSubmit = (search)=> {

    if(!search){
      setIsEmptyField(true);
      return;
    }
    setIsEmptyField(false);
    setSearchQuery(search);
  }

  return (
    <div className="layout">
      <Header
        theme={{ default: false }}/>
      <SearchForm
        isLoad={isLoad}
        savedMoviesType={true}
        onSubmit={handleFormSubmit}
        toggleShortMovie={toggleShortSavedMovie}
        onToggleShortMovie={onToggleShortSavedMovie}
        isEmptyField={isEmptyField}
      />
      <MoviesCardList
        isLoad={isLoad}
        moviesList={filterList}
        error={error}
        savedMovieBtn={true}
        handleActionBtn={handleDeleteSaveMovie}
      />
      <Footer/>
    </div>
  );
};

export default SavedMovies;
