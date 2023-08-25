import { useEffect } from 'react';
import useFormValidation from '../../hooks/useFormValidator.js';
import { EMPTY_FIELD } from '../../utils/constants.js'

function SearchForm({ isLoad, savedMoviesType, onSubmit, savedSearch, toggleShortMovie, onToggleShortMovie, isRequired = true, isEmptyField }) {

  const {
          values,
          setValues,
          handleChange,
        } = useFormValidation();

  useEffect(() => {

    const name = 'search-movies'

    setValues({ [name]: savedSearch });
  }, [setValues, savedSearch]);

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(values['search-movies']);
  };

  const handleChecked = () => {
    onToggleShortMovie(!toggleShortMovie);
  };

  return(
    <section className="search-form">
      <form className="search-form__form"
      onSubmit={handleSubmit}>
      <label className="search-form__cover">
        <input
          type="text"
          name="search-movies"
          placeholder="Фильм"
          className="search-form__input"
          onChange={handleChange}
          value={values["search-movies"] || ""}
          />
        <button
          type="submit"
          className="search-form__submit"
          disabled={isLoad ? true : false}>
          Найти
        </button>
      </label>

      <span className='search-form__error'>
        {
          isEmptyField ? EMPTY_FIELD : ''
        }
      </span>

      <label className="search-form__wrapper_short-film">
        <p className="filter__text">
          Короткометражки
        </p>
        <input
          type="checkbox"
          name="short-film-toggle"
          id="short-film-toggle"
          className="search-form__checkbox"
          checked={!!toggleShortMovie}
          onChange={handleChecked}/>
        <label
          className="search-form__checkbox-label"
          htmlFor="short-film-toggle"/>
      </label>
    </form>

    </section>

  );
};

export default SearchForm;
