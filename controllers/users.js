const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Создание пользователя.
const createUser = (request, response, next) => {
  const { email, password, name } = request.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        email,
        password: hash,
        name,
      })
        .then(() => {
          response.status(201).send({ email, password, name })
        })
        .catch(next)
    })
    .catch(next);
};

// Получение информации текущего пользователя.
const getUserInfo = (request, response, next) => {
  User.findById(request.user._id)
    .then((user) => {
      response.send(user);
    })
    .catch(next);
};

// Обновление информации о пользователе.
const updateUser = (request, response, next) => {
  const {email, name} = request.body;

  User.findByIdAndUpdate(request.user._id, {email, name}, {runValidators: true})
};

module.exports = {
  createUser,
  getUserInfo,
};
