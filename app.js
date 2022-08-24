require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { PORT, DB_HOST } = require('./utils/config');

const router = require('./routes');
const errorHandler = require('./middlewares/error-handler')

const app = express();

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен. Порт: ${PORT}`);
})
