// reads the database asynchronously
const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err);
      try {
        let rows = data.split('\n');
        delete rows[0];
        rows = rows.filter((row) => row);

        // find firstname of all cs students
        const csFn = rows.filter((row) => row.split(',')[3] === 'CS').map(
          (row) => row.split(',')[0],
        );
        // find firstname of all swe students
        const sweFn = rows.filter((row) => row.split(',')[3] === 'SWE').map(
          (row) => row.split(',')[0],
        );

        const fieldStudents = {
          CS: csFn,
          SWE: sweFn,
        };
        resolve(fieldStudents);
      } catch (err) {
        reject(err);
      }
    });
  });
}
