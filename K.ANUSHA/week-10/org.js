// server.js
const http = require('http');

const hostname = '127.0.0.1';  // you can use '0.0.0.0' or omit for all interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');  // or 'text/html' if sending HTML
  res.end('Hello, world!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
