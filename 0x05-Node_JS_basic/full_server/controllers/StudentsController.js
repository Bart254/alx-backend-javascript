/* eslint-disable no-unused-vars */
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const filePath = process.argv[2];
    const firstLine = 'This is the list of our students';
    readDatabase(filePath).then((fieldStudents) => {
      response.status(200);
      const mess = [];
      const fields = Object.keys(fieldStudents).sort();
      for (const field of fields) {
        const students = fieldStudents[field];
        const n = students.length;
        const list = students.join(', ');
        mess.push(`Number of students in ${field}: ${n}. List: ${list}`);
      }
      response.end(`${firstLine}\n${mess.join('\n')}`);
    }).catch((err) => {
      response.status(500);
      response.send(`${firstLine}\nCannot load the database`);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.param('major');
    response.status(200);
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    } else {
      const filePath = process.argv[2];
      readDatabase(filePath).then((fieldStudents) => {
        let students = fieldStudents[major];
        students = students.join(', ');
        response.send(`List: ${students}`);
      }).catch((err) => {
        response.status(500);
        response.send('Cannot load the database');
      });
    }
  }
}
