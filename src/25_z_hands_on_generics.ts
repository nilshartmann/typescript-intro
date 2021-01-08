export default undefined;

// AUFGABEN 🤔:
// 1. Nutze die gegebene Taxonomie von Tieren und ein Array, das alle diese Tiere und nur diese enthalten kann.
// 2. Erzeuge eine Array, das nur Katzen enthalten sollte. Findest du einen Weg, einen Hund einzuschmuggeln?

abstract class Animal {
}

class Dog extends Animal {
    bark(): void {
        console.log('bark')
    }
}

class Cat extends Animal {
    meow(): void {
        console.log('meow')
    }
}


// https://www.typescriptlang.org/docs/handbook/generics.html