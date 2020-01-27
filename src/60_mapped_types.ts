export default undefined;

// Welcher Typ ist Validated Employee?
// 1. Hard codierter Typ mit booleans
// 2. Hard codierter Typ mit optionals
// 3. Generischer typ mit booleans, die optional sind
// 4. Generischer Typ korrekt
// 5. Was passiert, wenn wir in validateEmployee einen Employee mit zusätzlichem Feld zurückgeben?

// IDEE: Wir haben eine Funktion, die ein Objekt validiert
//       Sie gibt ein Objekt zurück, das genauso aussieht, wie das Objekt, aber mit boolean als Typen

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

function validateEmployee(emp: Employee) {
  return {
    name: emp.name.length > 3,
    salary: emp.salary > 70000,
    department: emp.name.length > 10
  };
}

const validationResult = validateEmployee(susi);

showValidationResult(validationResult);

type ValidatedEmployee = any;

function showValidationResult(validationResult: ValidatedEmployee) {
  //
}
