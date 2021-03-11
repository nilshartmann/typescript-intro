export default undefined;

type Employee = {
  name: string;
  salary: number;

  department: {
    title: string;
    location: string;
  };
};
// welcher Typ ist Department?
type Department = any;

function printDepartment(department: Department) {
  console.log(department.location.toUpperCase());
}

const susi = {
  name: "Susi",
  salary: 75000,
  department: {
    title: "Software Development",
    location: "3rd floor"
  }
};

// 😮😮😮
printDepartment(susi);

// ---------------------------------------------------------------------------------------

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

async function patchPerson(p: Person) {
  // send this to our REST API...
  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

patchPerson(klaus); // OK

// ... aber wie verwenden wir einen "Teil" der Person?

// -----------------------------------------------------------------------------------------

type NewPerson = Person; // ... aber ohne Id-Feld ?!?!?!

function enterNewPersonForm(): NewPerson {
  // Keine Id hier!
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}
