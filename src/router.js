const handlers = require('./handlers');

// Will need to insert more handlers for getting news and cypto currency.

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    handlers.handleHomeRoute(req, res);
  } else if (endpoint.includes('/public')) {
    handlers.handlePublicRoute(req, res, endpoint);
  } else {
    handlers.handleErrorRoute(req, res);
  }
};

module.exports = router;
