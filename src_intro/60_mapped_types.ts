export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
};

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

function enterNewPersonForm(): Person {
  // Keine Id hier!
  // @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
  return {
    name: "Klaus",
    age: 32
  };
}

// -----------------------------------------------------------------------------------------
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

function validate<O>(object: O): O {
  return null;
}

const person = {
  lastname: "Mueller",
  city: "Hamburg"
};
const result = validate(person);

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validLastname: boolean = result.lastname;

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validCity: boolean = result.city;

// https://www.typescriptlang.org/docs/handbook/utility-types.html
