const router = require('express').Router();
const userRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require('./auth');
const { checkAuth } = require('../middlewares/auth');
const { logoutUser } = require("../controllers/users");

router.use('/', authRouter);
router.use(checkAuth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);

module.exports = router;
