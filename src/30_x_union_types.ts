export default undefined;

//
type VerifyIbanAction = {
  actionType: "VERIFY_IBAN";
  iban: string;
};

type VerifyAgeAction = {
  actionType: "VERIFY_AGE_ACTION";
  age: number;
};

// What happens if we add a third action to Action Union Type?
// type VerifyEmailAction = {
//   actionType: "VERIFY_EMAIL_ACTION";
//   email: string;
// };

 type Action = VerifyAgeAction | VerifyIbanAction;

function handleAction(action: Action) {
  switch (action.actionType) {
    case "VERIFY_AGE_ACTION":
      return action.age > 18;
    case "VERIFY_IBAN":
      return action.iban.toUpperCase();
  }

  handleInvalidAction(action);
}

function handleInvalidAction(action: never) {
  throw new Error("Invalid Action!!!!");
}

// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
