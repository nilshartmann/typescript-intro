export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
  hobby: string;
};

async function patchPerson(p: Person) {
  // ...wie können wir sicherstellen, dass in dieser Funktion
  //    das übergebene Person-Objekt nicht verändert wird?
  // 😱🙋‍♀️🙋‍♂️

  await fetch("/api/person", {
    method: "PATCH",
    body: JSON.stringify(p)
  });
}

const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!"
};

patchPerson(klaus); // OK

// ... aber wie verwenden wir einen "Teil" der Person?
//     z.B., um nur die Id und das Alter zu "patchen"?
// 😱🙋‍♀️🙋‍♂️
const susi = {
  id: "123",
  age: 34
};
patchPerson(susi); // ???

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id
// 😱🙋‍♀️🙋‍♂️
type NewPerson = Person; // ... aber ohne Id-Feld ?!?!?!

function enterNewPersonForm(): NewPerson {
  // Keine Id hier!
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript"
  };
}
