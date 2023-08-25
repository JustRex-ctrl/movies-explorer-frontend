import { MOVIES_API_SETTING } from '../../utils/constants';

function MoviesCard({ movie, handleActionBtn, savedMovieBtn }) {

  const {
          duration,
          image,
          trailerLink,
          nameRU,
          isLiked
        } = movie,
        btnClassName = `card__btn ${
          !savedMovieBtn
            ? 'movie__delete-button'
            : isLiked
              ? 'movie__saved-button'
              : ' movie__save-button'
        }`

  const durationInHours = duration > 60 ? `${parseInt(duration / 60, 10)}ч${duration % 60}м` : `${duration}м`;

  const handleAction = () => {
    handleActionBtn(movie);
  }

  return (
    <li className="movie">
      <a
        className='movie__image'
        href={trailerLink}
        target="_blank"
        rel="noreferrer">
        <img
          src={image.url
            ? `${MOVIES_API_SETTING.baseUrl}${image.url}`
            : image
          }
          alt={nameRU}
          className="card__img"
          />
      </a>
      <div className="movie__card-bottom">
      <div className='movie__top'>
      <div className="movie__title">
        <h2 className="card__title">
          {nameRU}
        </h2>
      </div>
      <button
        onClick={handleAction}
        className={btnClassName}>
        {!savedMovieBtn ? "" : isLiked ? "" : " "}
      </button>
      </div>

      <p className="card__duration">{durationInHours}</p>
      </div>

    </li>
  )
}

export default MoviesCard;
