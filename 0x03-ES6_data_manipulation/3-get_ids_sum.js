export default function getStudentIdSum(listOfStudents) {
  return listOfStudents.reduce((accumulator, student) => accumulator + student.id, 0);
}
