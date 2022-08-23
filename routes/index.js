const router = require('express').Router();
const userRouter =require('./users');
const moviesRouter =require('./movies');
const authRouter = require('./auth');

router.use('/', authRouter);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);

module.exports = router;
