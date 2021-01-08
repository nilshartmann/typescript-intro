export default undefined;

// AUFGABEN 🤔:
// 1. Nutze die gegebene Taxonomie von Tieren und ein Array, das alle diese Tiere und nur diese enthalten kann.

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

let animals: Array<Animal> = [];
animals.push(new Dog())
animals.push(new Cat())

// 2. Erzeuge eine Array, das nur Katzen enthalten sollte. Findest du einen Weg, einen Hund einzuschmuggeln?

let cats: Array<Cat> = [];
// cats.push(new Dog()) // nope
cats.push(new Cat())

// cats = animals; // nope

animals = cats; // cool, no?

// ouch
animals.push(new Dog())
cats.forEach(cat => console.log(cat))

// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
