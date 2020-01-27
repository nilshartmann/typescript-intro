export default undefined;

// IDEE: Wir haben Factory-Funktionen für unsere Actions
// WAS IST DARAN GUT ODER SCHLECHT?
//  🤔🙋‍♀️🙋‍♂️

type VerifyIbanAction = {
  actionType: "VERIFY_IBAN";
  iban: string;
};

function createVerifyIbanAction(iban: string): VerifyIbanAction {
  return {
    actionType: "VERIFY_IBAN",
    iban
  };
}

function createVerifyAgeAction(age: number) {
  return {
    actionType: "VERIFY_AGE_ACTION",
    age
  } as const;
}

type VerifyAgeAction = ReturnType<typeof createVerifyAgeAction>;

handleAction(createVerifyAgeAction(32));

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
