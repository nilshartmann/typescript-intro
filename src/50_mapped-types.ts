export default undefined;
// [P in keyof OBJECT]?: OBJECT[P];
// type P1 = keyof Person; // name | age
// type X = Person[name] // string

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

// -----------------------------------------------------------------------------------------

// welcher Typ ist hobby?
type Hobby = any;

function printHobby(hobby: Hobby) {
  console.log(hobby.toUpperCase());
}

const susi = {
  id: "fasdfasdf",
  name: "Susi",
  age: 32,
  hobby: "JavaScript"
};

// 😮😮😮
printHobby(susi);

// -----------------------------------------------------------------------------------------
async function patchPerson(p: Person) {
  // send this to our REST API...
  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  hobby: "TypeScript!"
};

// Welchen Typ nehmen wir hier ???
patchPerson(klaus); //

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
