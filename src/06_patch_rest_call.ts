export default undefined;
// [P in keyof OBJECT]
// type P1 = keyof Person; // name | age
// type X = Person[name] // string

interface Person {
  name: string;
  age: number;
  hobby: string;
}

async function patchPerson(p: Person) {
  // send this to our REST API...
  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  name: "Klaus",
  age: 7,
  hobby: "TypeScript!"
};

patchPerson(klaus); // OK
