const next = require('next');
const express = require('express');
const authRoutes = require("./server/routes/auth");
const db = require('./server/db');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // Ось тут ініціалізуємо лише один раз
const handle = app.getRequestHandler();
const PORT = parseInt(process.env.PORT, 10) || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(cors());
  server.use(limiter);
  
  server.use(morgan('dev'));
  
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use('/auth', authRoutes);

  server.all('*', (req, res) => {
    handle(req, res);
  });

  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: dev ? err.message : undefined
    });
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${PORT}`);
  });

}).catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
});
