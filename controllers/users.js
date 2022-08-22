const User = require('../models/user');

const getUserInfo = (request, response, next) => {
  const currentUserId = request.user.id;

  User.findById(currentUserId)
    .then((user) => {
      response.send(user);
    })
    .catch(next);
}

module.exports = {
  getUserInfo,
}