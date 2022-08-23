const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler')

const app = express();

mongoose.connect('mongodb://localhost:27017/movies-explorer-db', {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((request, respnse, next) => {
  request.user = {
    _id: '630514319ddc93daec89fb10' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен. Порт: ${PORT}`);
})
