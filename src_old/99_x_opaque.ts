// https://codemix.com/opaque-types-in-javascript/
function saveBIC(bic: BIC) {}

type BIC = string & {
  __tag__: "BIC";
};

type USERNAME = string & {
  __tag__: "USERNAME";
};

function readBIC(): BIC {
  return "meine bic" as BIC;
}

function asBIC(candidate: string) {
  return candidate as BIC;
}

function readUsername(): USERNAME {
  return "mein user" as USERNAME;
}

function verifyUsername(u: string) {}

const bic = asBIC("123");
saveBIC(bic);

const username = readUsername();
saveBIC(username);
verifyUsername(bic);
