export default undefined;

function createDeleteQuery(primaryKey: number) {
  return {
    queryType: "DELETE",
    primaryKey
  } as const;
}

function createInsertQuery(values: { [key: string]: string }) {
  return {
    queryType: "INSERT",
    values
  } as const;
}

function createSelectQuery(condition: string) {
  return {
    queryType: "SELECT",
    condition
  } as const;
}

type SelectQuery = ReturnType<typeof createSelectQuery>;
type InsertQuery = ReturnType<typeof createInsertQuery>;
type DeleteQuery = ReturnType<typeof createDeleteQuery>;

// Wo kommen die Types her?
// type Query = any;
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
