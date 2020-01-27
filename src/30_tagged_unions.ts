export default undefined;

// Idee:
//   Client fragt vom Server "Actions" ab und führt diese dann aus
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
