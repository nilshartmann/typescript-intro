export default undefined;

type Employee = {
  name: string;
  salary: number;
  age: number;

  department: string;
};

type ValidatedEmployee = {
  [k in keyof Employee]?: boolean;
};

const susi: Employee = {
  name: "Susi",
  age: 32,
  salary: 75000,
  department: "Software Development"
};

function validateEmployee(emp: Employee): ValidatedEmployee {
  console.log(emp);

  return {
    name: emp.name.length > 3,
    salary: emp.salary > 70000,
    department: emp.name.length > 10
  };
}

const validationResult = validateEmployee(susi);

showValidationResult(validationResult);

function showValidationResult(validationResult: ValidatedEmployee) {
  //
}
