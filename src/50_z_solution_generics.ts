export default undefined;

// TASKS 🤔:
// 1. use the given taxonomy of animals and create an array that can contain all of them and only them.

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

// 2. Create an array that should contain only cats. Can you find a way to sneak in a dog?

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
