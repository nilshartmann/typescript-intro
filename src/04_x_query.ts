export default undefined;

interface DeleteQuery {
  queryType: "DELETE";
  primaryKey: number;
}

interface InsertQuery {
  queryType: "INSERT";
  values: { [key: string]: string };
}

interface SelectQuery {
  queryType: "SELECT";
  condition: string;
}

// interface UpdateQuery {
//   queryType: "UPDATE";
// }

type Query = DeleteQuery | InsertQuery | SelectQuery;

function failOnUnknownQueryType(query: never) {
  throw new Error("fasdfasdf");
}

function executeQuery(query: Query) {
  switch (query.queryType) {
    case "DELETE":
      query.primaryKey;
      return;
    case "INSERT":
      query.values;
      return;
    case "SELECT":
      query.condition;
      return;
  }

  failOnUnknownQueryType(query);
}
