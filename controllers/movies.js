const Movies = require('../models/movie');

const getMovies = (request, response, next) => {
  Movies.find({})
    .then((movies) => response.send(movies))
    .catch(next)
}

module.exports = {
  getMovies,
}