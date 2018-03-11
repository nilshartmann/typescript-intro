// Example: Discriminated (Tagged) Unions

// TODO:
//  Define 3 Query Delete, Insert, Select
//  Add executeQuery-Stub
//  Invoke executeQuery
//  Implement executeQuery
//  Implement failOnUnknownQueryType
//  Add 4th Query

interface DeleteQuery {
  primaryKey: number;
}

interface InsertQuery {
  values: { [key: string]: string };
}

interface SelectQuery {
  condition: string;
}

export default function executeQuery() {}
