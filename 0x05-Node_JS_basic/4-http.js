const { createServer } = require('http');

const app = createServer((req, resp) => {
  resp.end('Hello Holberton School!');
});
app.listen(1245, 'localhost');

module.exports = app;
