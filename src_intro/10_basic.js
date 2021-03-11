export default undefined;

let person = "Klaus";

person = 32;

person = true;

person = function sayHello() {
  return "Hello";
};

person();

person = null;

// Schritt 1: DatenTypen und Inference
// Schritt 2: Union Types & Type Narrowing
