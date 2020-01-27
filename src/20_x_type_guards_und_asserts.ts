export default undefined;

// Beispiel: fetch-Funktion
// Beispiel:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

function fetch(): any {
  return {};
}

fetch().toUpperCase();

function betterFetch(): unknown {
  return fetch() as unknown;
}

const r = betterFetch();
if (typeof r === "string") {
  r.toUpperCase();
}

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function apiFetch(): Response {
  const r = betterFetch();
  ensureValidResponse(r);
  return r;
}

function fetchUser() {
  const res = apiFetch();

  if (isSuccessResponse(res)) {
    res.data.toUpperCase();
  } else {
    res.error.toLowerCase();
  }
}

function isSuccessResponse(candidate: Response): candidate is SuccessResponse {
  return "success" in candidate;
}

function ensureValidResponse(candidate: any): asserts candidate is Response {
  if ("error" in candidate || "response" in candidate) {
    return;
  }

  throw new Error("Candidate is invalid");
}
