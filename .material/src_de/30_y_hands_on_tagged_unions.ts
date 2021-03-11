import { isThrowStatement } from "typescript";

export default undefined;

// AUFGABEN 🤔:
// 1. Erzeuge einen Typen, der nur eine gewisse Menge von gültigen Katzennamen zulässt. "Brutus" wäre zum Beispiel nicht gültig.

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

// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types