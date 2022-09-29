require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const { PORT, DB_HOST } = require('./utils/config');
const limiter = require('./utils/limiter');
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://myfilms.nomoredomains.icu',
    'https://myfilms.nomoredomains.icu',
  ],
  allowedHeaders: ['Content-Type', 'origin'],
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  preflightContinue: false,
};

app.use(cors(options));
app.use(cookieParser());
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен. Порт: ${PORT}`);
});
