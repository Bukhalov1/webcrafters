// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 80;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static('static'));


// Обработка формы
app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('Получена заявка:');
  console.log(`Имя: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Телефон: ${phone}`);
  console.log(`Сообщение: ${message}`);

  res.send('Заявка успешно отправлена!');
});

// Статическая папка (если HTML-файл хранится в public)
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
