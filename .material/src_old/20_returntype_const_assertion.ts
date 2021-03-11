export default undefined;

function createDeleteQuery(primaryKey: number) {
  return {
    queryType: "DELETE",
    primaryKey
  };
}

function createInsertQuery(values: { [key: string]: string }) {
  return {
    queryType: "INSERT",
    values
  };
}

function createSelectQuery(condition: string) {
  return {
    queryType: "SELECT",
    condition
  };
}

// Wo kommen die Types her????
// type DeleteQuery = any;
// type InsertQuery = any;
// type SelectQuery = any;
// type Query = DeleteQuery | InsertQuery | SelectQuery;

type Query = any;

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
