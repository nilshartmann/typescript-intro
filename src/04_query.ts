// TODO:
//  Define 3 Query Delete, Insert, Select
//  Add executeQuery-Stub
//  Invoke executeQuery
//  Implement executeQuery
//  Implement failOnUnknownQueryType
//  Add 4th Query

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

export default function executeQuery() {}
