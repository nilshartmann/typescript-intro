export default undefined;

// Data ist nur dann Pflicht, wenn error == null und loading == false ist
type GraphQLResult = {
  data?: string;
  error?: string;
  loading?: boolean;
};

function handleResult(result: GraphQLResult) {
  if (result.error) {
    return "error";
  }

  if (result.loading) {
    return "loading...";
  }

  assertData(result.data);
  handleData(result.data);
}

function handleData(data: string) {
  // ...
}

function assertData(candidate: any): asserts candidate is string {
  if (typeof candidate !== "string") {
    throw new Error("Candidate must be a string");
  }
}
