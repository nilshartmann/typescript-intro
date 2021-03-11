export default undefined;

// Das hier kommt aus 3rd-Party-Bibliothek:
type Employee = {
  name: string;
  salary: number;

  department: string;
};

const susi: Employee = {
  name: "Susi",
  salary: 75000,
  department: "Software Development"
};

// welcher Typ ist Department?
// 😱🙋‍♀️🙋‍♂️
type Department = Employee["department"];

function printDepartment(department: Department) {
  console.log(department.toUpperCase());
}

printDepartment(susi.department);
