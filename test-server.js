const http = require('http');
const config = require('./config.js');
const nstatic = require('node-static');

const webServer = new nstatic.Server('./app');
const server = http.createServer((req, res) => {
  webServer.serve(req, res);
});

server.listen(config.webPort, config.IP, () => {
  console.log(`Server listening on ${config.IP}:${config.webPort}`);
});