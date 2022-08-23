const router = require('express').Router();
const userRouter =require('./users');
const authRouter = require('./auth');

router.use('/', authRouter);
router.use('/users', userRouter);


module.exports = router;
