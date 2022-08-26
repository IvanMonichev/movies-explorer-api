const URL_MESSAGE_ERROR = 'Передана ссылка некорректного формата.';
const USER_UPDATE_NOT_FOUND = 'Пользователь по заданному ID отсутствует в базе данных.';
const USER_UPDATE_INCORRECT_DATA = 'Пользователь по заданному ID отсутствует в базе данных.';
const EMAIL_ALREADY_EXISTS = 'Пользователь с таким Email уже существует.';
const USER_CREATE_INCORRECT_DATA = 'Заданы некорректные данные, либо заданы не в полном формате при создании пользователя.';
const MOVIE_CREATE_INCORRECT_DATA = 'Заданы некорректные данные, либо заданы не в полном формате при создании фильма.';
const MOVIE_NOT_FOUND = 'Фильм по заданному ID отсутствует в базе данных.';
const MOVIE_ACCESS_DENIED = 'Текущий пользователь не является владельцем этого фильма.';
const MOVIE_DELETE_INCORRECT_DATA = 'Заданы некорректные данные при удалении фильма.';
const INCORRECT_AUTH_DATA = 'Email или пароль некорректны.';
const TOKEN_NOT_FOUND = 'Доступ запрещён, необходима авторизация.';
const PATCH_NOT_FOUND = 'Путь не найден';

module.exports = {
  URL_MESSAGE_ERROR,
  USER_UPDATE_NOT_FOUND,
  USER_UPDATE_INCORRECT_DATA,
  EMAIL_ALREADY_EXISTS,
  USER_CREATE_INCORRECT_DATA,
  MOVIE_CREATE_INCORRECT_DATA,
  MOVIE_NOT_FOUND,
  MOVIE_ACCESS_DENIED,
  MOVIE_DELETE_INCORRECT_DATA,
  INCORRECT_AUTH_DATA,
  TOKEN_NOT_FOUND,
  PATCH_NOT_FOUND,
};
