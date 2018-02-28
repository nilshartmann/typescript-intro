class Hello {
  constructor(public name: string) {}

  sayHello(g: string) {
    return `${g}, ${this.name}`;
  }
}

const h = new Hello("Nils");
console.log(h.sayHello("Hello"));
