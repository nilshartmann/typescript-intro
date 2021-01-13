export default undefined;

type Employee = {
  name: string;
  salary: number;
  age: number;

  department: string;
};

// type ValidatedEmployee = {
//   [k in keyof Employee]?: boolean
// }

type ValidationResult<TYPE> = {
  [k in keyof TYPE]: boolean;
};

type OptionalType<TYPE> = {
  [k in keyof TYPE]?: TYPE[k];
};

type ValidatedEmployee = OptionalType<ValidationResult<Employee>>;

const susi: Employee = {
  name: "Susi",
  age: 32,
  salary: 75000,
  department: "Software Development"
};

function validateEmployee(emp: Employee): ValidatedEmployee {
  console.log(emp);

  // ===> what happens if we add "city: 'Hamburg'" to the returned object?
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
