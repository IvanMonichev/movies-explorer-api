const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require("../errors/not-found-error");
const BadRequestError = require("../errors/bad-request-error");
const ConflictError = require("../errors/conflict-error");
const {
  USER_NOT_FOUND,
  USER_UPDATE_INCORRECT_DATA,
  EMAIL_ALREADY_EXISTS,
  USER_CREATE_INCORRECT_DATA,
} = require('../utils/constants.js');

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
          response.status(201).send({ email, name })
        })
        .catch((error) => {
          if (error.name === 'ValidationError') {
            next(new BadRequestError(USER_CREATE_INCORRECT_DATA));
          } else if (error.code === 11000) {
            next(new ConflictError(EMAIL_ALREADY_EXISTS));
          } else {
            next(error);
          }
        });
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
  const { email, name } = request.body;

  User.findByIdAndUpdate(request.user._id, { email, name }, { runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError(USER_NOT_FOUND);
      }
      response.send(user);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError(USER_UPDATE_INCORRECT_DATA));
      } else if (error.code === 11000) {
        next(new ConflictError(EMAIL_ALREADY_EXISTS))
      } else {
        next(error);
      }
    });
};

module.exports = {
  createUser,
  getUserInfo,
  updateUser,
};
