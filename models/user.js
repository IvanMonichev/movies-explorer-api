const mongoose = require('mongoose');
const validator = require('validator');

const userScheme = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: 'Переданный E-Mail неккоректного формата',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      minlength: [2, 'Содержит меньше 2-ух символов'],
      maxlength: [30, 'Содержит больше 30 символов'],
    },
  },
);

module.exports = mongoose.model('user', userScheme);
