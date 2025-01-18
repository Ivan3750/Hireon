const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log('> Ready on http://localhost:3000');
  });
});
