export default undefined;

function loadDataFromApi(url: string) {
  //
  return {} as unknown;
}

function fetch() {
  return {} as any;
}

function unkownFetch(): unknown {
  return fetch() as unknown;
}

type SuccessResponse = { data: any };
type ErrorResponse = { error: string };
type Response = SuccessResponse | ErrorResponse;

function loadData() {
  const result = unkownFetch();

  isValidResponse(result);

  return result;
}

const data = loadData();

if (isSuccess(data)) {
  data.data;
} else {
  data.error;
}

function isSuccess(candidate: Response): candidate is SuccessResponse {
  return "data" in candidate;
}

function isValidResponse(candidate: any): asserts candidate is Response {
  if ("data" in candidate || "error" in candidate) {
    return;
  }

  throw new Error("fasdfasdf");
}
