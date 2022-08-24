const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { URL_MESSAGE_ERROR } = require('../utils/constants');

const validateUrl = (value, messageError) => {
  if (validator.isURL(value)) {
    return value;
  }

  return messageError.message(URL_MESSAGE_ERROR);
};

const validatePassword = (value, messageError) => {
  const options = {
    minLength: 6,
    minUppercase: 0,
    minSymbols: 0,
  };
  if (validator.isStrongPassword(value, options)) {
    return value;
  }

  return messageError.message('Пароль не соответствует требованиям безопасности.');
};

const createUserValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(validatePassword),
    name: Joi.string().min(2).max(30),
  }),
});

const loginUserValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const updateUserValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().min(2).max(30),
  }),
});

const createMovieValid = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validateUrl),
    trailerLink: Joi.string().required().custom(validateUrl),
    thumbnail: Joi.string().required().custom(validateUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValid = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex(),
  }),
});

module.exports = {
  createUserValid,
  loginUserValid,
  updateUserValid,
  createMovieValid,
  deleteMovieValid,
};
