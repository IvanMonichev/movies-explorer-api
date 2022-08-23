const router = require('express').Router();
const { getMovies, createMovie } = require('../controllers/movies');

// Возвращает все сохранённые пользователем фильмы.
router.get('/', getMovies);
router.post('/', createMovie);

module.exports = router;

