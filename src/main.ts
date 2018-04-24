export default class Hello {
  constructor(public name: string) {}

  sayHello(g: string) {
    return `${g}, ${this.name}`;
  }
}

const hello = new Hello("Nils");
const greet = hello.sayHello("Hello");
console.log(greet);
