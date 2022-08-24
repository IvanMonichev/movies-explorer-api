const config = require('jsonwebtoken');
const JWT_SECRET = 'dev-secret'
/*const { NODE_ENV, JWT_SECRET = 'dev-secret' } = process.env;*/

module.exports = {
  JWT_SECRET,
};
