export default undefined;


// AUFGABE 🤔:
// Bewege dich in die andere Richtung und baue deine Typen vom Grund auf, anstatt sie zu reduzieren. 
// Beginne mit der gegebenen Funktion und nutze sie, um am Ende wieder den ursprünglichen Typen von Person zu haben. 
// Folgende Links könnten nützlich sein
// - ReturnType: https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
// - Wie erweitere ich einen Typ Alias: 
//  - https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
//  - https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types

function enterNewPersonForm() {
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}

type Person = {
  id: string;
}

const klaus: Person = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};


// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/play?q=414#example/mapped-types
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases