export default undefined;
// [P in keyof OBJECT]
// type P1 = keyof Person; // name | age
// type X = Person[name] // string

interface Person {
  name: string;
  age: number;
  hobby: string;
}

function showHobby(hobby: Person["hobby"]) {
  // hobby is of type string!
  hobby.startsWith("");
}

type PatchObject<O> = { [KEY in keyof O]?: O[KEY] };

type ReadonlyObject<O> = { readonly [KEY in keyof O]: O[KEY] };

async function patchPerson(p: ReadonlyObject<PatchObject<Person>>) {
  // p.age = 99;

  // send this to our REST API...
  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const p = {
  name: "Klaus",
  age: 7,
  hobby: "TypeScript!"
};

patchPerson(p); // OK - all required props set

patchPerson({
  name: "Susi"
}); // OK: patchPerson expects partial type
