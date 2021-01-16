import { isThrowStatement } from "typescript";

export default undefined;

// TASKS 🤔:
// 1. Create a type that allows only a certain set of valid cat names. For example, "Brutus" would not be valid.
// 2. Create a new subtype of Cat adding topSpeed without using extends 

class Cat {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    meow(): void {
        console.log('meow')
    }
}


new Cat('Purry'); // cool
new Cat('Brutus'); // not cool

// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types