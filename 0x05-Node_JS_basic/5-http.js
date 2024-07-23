#!/usr/bin/env node
// complex http server
const { createServer } = require('node:http');
const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) reject(new Error('Cannot load the database'));
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));

      // remove first line and empty lines
      let rows = data.split('\n');
      delete rows[0];
      rows = rows.filter((row) => row);

      const numberStudents = rows.length;
      const messA = `Number of students: ${numberStudents}`;

      // find first names of each field
      const cs = rows.filter((row) => row.split(',')[3] === 'CS').map(
        (row) => row.split(',')[0],
      );
      const csNum = cs.length;
      const csLst = cs.join(', ');
      const messCS = `Number of students in CS: ${csNum}. List: ${csLst}`;

      const swe = rows.filter((row) => row.split(',')[3] === 'SWE').map(
        (row) => row.split(',')[0],
      );
      const sweNum = swe.length;
      const sweLst = swe.join(', ');
      const messSWE = `Number of students in SWE: ${sweNum}. List: ${sweLst}`;

      const fullMessage = `${messA}\n${messCS}\n${messSWE}`;

      // call resolve with full message
      resolve(fullMessage);
    });
  });
}

const app = createServer((req, resp) => {
  const path = process.argv[2];
  const rootMess = 'This is the list of our students\n';
  switch (req.url) {
    case '/':
      resp.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(path).then((mess) => {
        resp.end(rootMess + mess);
      }).catch((err) => {
        resp.end(rootMess + err);
      });
      break;
    default:
      break;
  }
});

app.listen(1245, 'localhost', () => {
  console.log('...');
});

module.exports = app;
