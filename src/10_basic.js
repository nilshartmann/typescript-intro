export default undefined;

let person = "Klaus";

person = 32;

person = true;

person = function sayHello() {
  return "Hello";
};

person();

person = null;

// Übung: 
// 1. Such dir eine Experimentierumgebung, 
//  - z.B. dieses Repo mit Visual Studio Code https://github.com/nilshartmann/typescript-intro
// - oder https://www.typescriptlang.org/play
// 2. Bring den obigen Code nach TypeScript und entferne alle Fehler