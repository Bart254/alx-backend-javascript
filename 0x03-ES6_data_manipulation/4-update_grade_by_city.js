/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filteredList = listOfStudents.filter((student) => student.location === city);

  return filteredList.map((student) => {
    const myGrade = newGrades.filter((obj) => obj.studentId === student.id);
    if (myGrade.length === 0) {
      student.grade = 'N/A';
    } else {
      student.grade = myGrade[0].grade;
    }
    return student;
  });
}
