export default function createEmployeeObject(departmentName, employees) {
  const myObject = {
    [`${departmentName}`]: employees,
  };
  return myObject;
}
