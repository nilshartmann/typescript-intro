export default undefined;

// Idee:
//   Client fragt vom Server "Actions" ab und führt diese dann aus
//     Wir erzeugen die Action-Objekte nicht, sondern bekommen sie schon fertig
//     haben also keinen Einfluss, wie diese Aussehen

type VerifyIbanAction = {
  iban: string;
};

type VerifyAgeAction = {
  age: number;
};

type Action = VerifyAgeAction | VerifyIbanAction;

function handleAction(action: Action) {
  // wie unterscheiden wir die Actions hier ???
  // 😱🙋‍♀️🙋‍♂️
}

// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
