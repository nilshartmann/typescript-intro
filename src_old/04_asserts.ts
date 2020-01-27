export default undefined;

type GraphQLResult = {
  error?: string;
  loading?: boolean;

  // Data ist IMMER gesetzt, wenn error == null und loading == false ist
  data?: string;
};

function handleResult(result: GraphQLResult) {
  if (result.error) {
    return "error";
  }

  if (result.loading) {
    return "loading...";
  }

  // ???
  handleData(result.data);
}

function handleData(data: string) {
  // ...
}
