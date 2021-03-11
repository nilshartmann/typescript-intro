// hack: make sure this module is "private"
export default undefined;

type Person = {
  name: string;
  age: number;
};

function readPerson(): Promise<Person> {
  return fetchApi().then(candidate => {
    assertIsPerson(candidate);
    return candidate;
  });
}

function assertIsPerson(candidate: any): asserts candidate is Person {
  if (typeof candidate.name === "string" && typeof candidate.age === "number") {
    return;
  }

  throw new Error("This is not a Person");
}

function fetchApi(): Promise<unknown> {
  return fetch("/api")
    .then(res => res.json())
    .then(something => {
      return something;
    });
}

export function write(p: Person) {}
