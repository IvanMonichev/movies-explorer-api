const router = require('express').Router();
const { getMovies, createMovie, deleteCard } = require('../controllers/movies');

// Возвращает все сохранённые пользователем фильмы.
router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:movieId', deleteCard);

module.exports = router;

