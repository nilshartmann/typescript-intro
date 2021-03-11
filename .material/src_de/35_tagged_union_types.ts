export default undefined;

// IDEE: Wir haben Factory-Funktionen für unsere Actions

type VerifyIbanAction = {
  actionType: "VERIFY_IBAN";
  iban: string;
};

type VerifyAgeAction = {
  actionType: "VERIFY_AGE_ACTION";
  age: number;
};

function createVerifyIbanAction(iban: string) {
  return {
    actionType: "VERIFY_IBAN",
    iban
  };
}

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
