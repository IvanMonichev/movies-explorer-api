const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/jwt');
const { TOKEN_NOT_FOUND } = require('../utils/constants.js')
const UnauthorizedError = require('../errors/unauthorized-error');


const checkAuth = (request, response, next) => {
  const cookie = request.cookies.access_token;
  if (!cookie) {
    next(new UnauthorizedError(TOKEN_NOT_FOUND));
  }

  const token = cookie.replace('access_token', '');
  console.log(token);
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    next(new UnauthorizedError(TOKEN_NOT_FOUND));
  }

  request.user = payload;

  next();
};

module.exports = {
  checkAuth,
};