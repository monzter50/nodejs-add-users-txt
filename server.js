const http = require('http');
const routes = require('./routes/routes.js');
const server = http.createServer(routes.handler);

server.listen(3000);