const { parse } = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require("./server/routes/auth");
const db = require('./server/db'); // Підключення до бази даних

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 5000; // Визначення порту

app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(bodyParser.json());

  // Підключення маршрутів
  server.use('/auth', authRoutes);

  // Обробка всіх інших запитів (для Next.js сторінок)
  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Запуск сервера
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error starting server:', err);
});
