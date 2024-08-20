const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let rows = data.split('\n');

        // delete the first line (it's a field descriptor) and empty rows
        delete rows[0];
        rows = rows.filter((row) => row);

        // log number of students
        console.log(`Number of students: ${rows.length}`);

        // find first names of each field
        const cs = rows.filter((row) => row.split(',')[3] === 'CS').map(
          (row) => row.split(',')[0],
        );
        const swe = rows.filter((row) => row.split(',')[3] === 'SWE').map(
          (row) => row.split(',')[0],
        );

        // Log mesaage
        console.log(`Number of students in CS: ${
          cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students in SWE: ${
          swe.length}. List: ${swe.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
