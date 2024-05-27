export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: { ...employeesList },
    getNumberofDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return myObject;
}
