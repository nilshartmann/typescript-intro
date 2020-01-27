(function() {
  let pkCounter = 0;

  function newPrimaryKey() {
    const p = ++pkCounter;
    return p;
  }

  class Person {
    primaryKey: number;
    constructor(private name: string, private age: number) {
      this.primaryKey = newPrimaryKey();
    }

    sayHello() {
      const greet = `Hello, ${this.name}`;
      return greet;
    }
  }

  const p = new Person("Klaus", 34);
  const hello = p.sayHello();
  console.log(hello);
})();
