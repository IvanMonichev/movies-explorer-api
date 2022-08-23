const router = require('express').Router();
const { createUser, loginUser, logoutUser } = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', loginUser);
router.post('/signout', logoutUser);

module.exports = router;
