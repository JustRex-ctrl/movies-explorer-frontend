export
const MAIN_API_SETTING = {
  baseUrl: 'https://moviebackendsitevolkov.nomoredomains.xyz',
  // baseUrl: 'http://localhost:3003',
  headers: {
    authorization: 'a14cdd4b-59e2-4501-8c17-f66f4fd9c3d8',
    'Content-Type': 'application/json'
  }
}

export
const MOVIES_API_SETTING = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
}

export
const LOGIN_FORM_SETTING = {
  type: 'login',
  title: 'Рады видеть!',
  btnSubmitText: 'Войти',
  transitionText: 'Ещё не зарегистрированы?',
  transitionPath: '/signup',
  transitionLinkText: 'Регистрация',
}

export
const REGISTER_FORM_SETTING = {
  type: 'register',
  title: 'Добро пожаловать!',
  btnSubmitText: 'Зарегистрироваться',
  transitionText: 'Уже зарегистрированы?',
  transitionPath: '/signin',
  transitionLinkText: 'Войти',
}

export
const INPUT_ERROR_NAME = {
  name: 'Имя не должно быть короче 2 букв',
  email: 'Введите корректный email',
  password: 'Пароль должен быть не короче 8 символов',
  searchMovies: 'Нужно ввести ключевое слово',
}

export
const ERROR_MESSAGE = {
  notFound: 'Ничего не найдено',
  tryAgainLater: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  errorRequest: 'Неверный email или пароль',
  repeatedEmail: 'Пользователь с таким email уже зарегистрирован',
}

export
const STORAGE_DATA_NAME = {
  userId: 'uI',
  movies: 'movies',
  searchQuery: 'sQ',
  toggleShortMovie: 'toggleSM'
}

export
const DURATION_SHORTMOVIE = 40;
