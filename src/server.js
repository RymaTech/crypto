const http = require('http');
const port = process.env.PORT || 4000;
const router = require('./router');
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`We are listening on port: ${port}`);
});
