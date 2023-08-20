import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__cover">
          <input
            className="search-form__input"
            placeholder="Фильм"
            name="search-input"
            type="text"
            required="required"
            minLength="2"
          />
          <button
            className="search-form__submit"
            type="submit"
            aria-label="Начать поиск"
            action="#">Найти
          </button>

        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
