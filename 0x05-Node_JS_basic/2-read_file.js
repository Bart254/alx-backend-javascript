const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
