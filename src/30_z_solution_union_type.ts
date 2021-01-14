import { isThrowStatement } from "typescript";

export default undefined;

// TASKS 🤔:
// 1. Create a type that allows only a certain set of valid cat names. For example, "Brutus" would not be valid.

type ValidCatNames = 'Puffy' | 'Purry' | 'Molly';

class Cat {
    name: ValidCatNames;

    constructor(name: ValidCatNames) {
      this.name = name;
    }

    meow(): void {
        console.log('meow')
    }
}

new Cat('Purry'); // cool
// new Cat('Brutus'); // not cool

// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types