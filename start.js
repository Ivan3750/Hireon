const express = require('express');
const next = require('next');
const authRoutes = require("./server/routes/auth");
const jobRoute = require("./server/routes/jobs");
const dataUser = require("./server/routes/data");
const search = require("./server/routes/search");
const applyRoute = require("./server/routes/apply");
const workertRoute = require("./server/routes/worker");
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(cors());
  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  
  server.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
  });

  server.use('/api', jobRoute);
  server.use('/api', dataUser);
  server.use('/api/auth', authRoutes);
  server.use('/api', workertRoute);
  server.use('/api', search);
  server.use('/api', applyRoute);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

}).catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
});
