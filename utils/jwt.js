const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dev-secret'
/*const { NODE_ENV, JWT_SECRET = 'dev-secret' } = process.env;*/

const getJwtToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });

module.exports = {
  getJwtToken,
  JWT_SECRET,
};
