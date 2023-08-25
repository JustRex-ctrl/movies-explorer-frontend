import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidator.js';
import { INPUT_ERROR_NAME } from '../../utils/constants.js';

function Form({ isLoad, setting, handleSubmit, requestError }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    currentInputName,
  } = useFormValidation();


  const handleSubmitForm = (e) => {
    e.preventDefault();

    handleSubmit(values);
  };

  return (
    <section className="form">
      <Link to="/" className="form__logo-link" />
      <h2
        className="form__header">
        {setting.title}
      </h2>
      <form
        id="form"
        className="form__form"
        onSubmit={handleSubmitForm}>
        { setting.type === "register"
          &&
          <div
            className="form__input-row">
            <label
              className="form__input-label">
              Имя
            </label>
            <input
              type="text"
              name="name"
              className={`form__input ${errors.name ? "form__input_error" : ""}`}
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              required />
              <span className="form__span-error">{errors.name}</span>
          </div>
        }

        <div
          className="form__input-row">
          <label
            className="form__input-label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            className={`form__input ${errors.email ? "form__input_error" : ""}`}
            onChange={handleChange}
            required />
          <span className="form__span-error">{errors.email}</span>
        </div>

        <div
          className="form__input-row">
          <label
            className="form__input-label">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className={`form__input ${errors.password ? "form__input_error" : ""}`}
            minLength={8}
            onChange={handleChange}
            required />
            <span className="form__span-error">{errors.password}</span>
        </div>

      </form>

      <div className="form__wrapper">
        <button
          type="submit"
          form="form"
          className="form__button"
          disabled={(isLoad || !isValid) ? true : false}>
          {setting.btnSubmitText}
        </button>
        <div className="form__transition">
          <p className="form__transition-text">
            {setting.transitionText}
          </p>
          <Link
            to={setting.transitionPath}
            className="form__link">
            {setting.transitionLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Form;
