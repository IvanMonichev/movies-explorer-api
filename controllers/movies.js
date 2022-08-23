const Movie = require('../models/movie');
const BadRequestError = require("../errors/bad-request-error");
const { MOVIE_CREATE_INCORRECT_DATA } = require("../utils/constants");

const getMovies = (request, response, next) => {
  Movie.find({})
    .then((movies) => response.send(movies))
    .catch(next)
}

// Создаёт фильм.
const createMovie = (request, response, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = request.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: request.user._id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => response.send(movie))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError(MOVIE_CREATE_INCORRECT_DATA));
      } else {
        next(error);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
}