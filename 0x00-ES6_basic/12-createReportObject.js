export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: { ...employeesList },
    getNumberofDepartments(employeesList) {
      let total = 0;
      for (const deparment in employeesList) {
        if (deparment) total += 1;
      }
      return total;
    },
  };
  return myObject;
}
