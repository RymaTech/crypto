const fs = require('fs');
const path = require('path');

const serverError = res => {
  res.writeHead(500, { 'content-type': 'text/html' });
  res.end('<h1>Server cannot fulfill your request.</h1>');
};

const handleHomeRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'index.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(file);
      }
    }
  );
};

const handlePublicRoute = (req, res, endpoint) => {
  const extensionType = endpoint.split('.')[1];
  const extensionSelector = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    otf: 'font/otf',
    ttf: 'font/ttf'
  };

  fs.readFile(path.join(__dirname, '..', endpoint), (err, file) => {
    if (err) {
      serverError(res);
    } else {
      res.writeHead(200, { 'content-type': extensionSelector[extensionType] });
      res.end(file);
    }
  });
};

const handleErrorRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'error.html'),
    (err, file) => {
      if (err) {
        serverError(res);
      } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end(file);
      }
    }
  );
};

module.exports = {
  handleHomeRoute,
  handlePublicRoute,
  handleErrorRoute
};
