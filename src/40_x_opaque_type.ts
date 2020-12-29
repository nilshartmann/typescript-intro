export default undefined;
// "unique types": https://github.com/microsoft/TypeScript/pull/33038

type Opaque<T, NAME> = T & {
  __tag__: NAME;
};

type Iban = Opaque<string, "IBAN">;

// Compare with Action from previous step: (!)
type VerfiyIbanAction = Opaque<
  {
    iban: Iban;
  },
  "VERIFY_IBAN"
>;

function saveIban(iban: Iban, userId: string) {
  // ...
}

function loadIban(): Iban {
  return "fasdfasdf" as Iban;
}

function asIban(candidate: string): Iban {
  return candidate as Iban;
}

const iban = loadIban();

saveIban(iban, "susi");

// DOES NOT COMPILE! JIPPIE!
// saveIban("klaus", iban);
