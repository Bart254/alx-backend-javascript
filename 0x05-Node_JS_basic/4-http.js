#!/usr/bin/env node
// simple nodejs server
const { createServer } = require('node:http');

const app = createServer((req, resp) => {
  resp.end('Hello Holberton School!');
});
app.listen(1245, 'localhost', null);

module.exports = app;
