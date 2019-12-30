export default undefined;
// Example: Discriminated (Tagged) Unions

// TODO:
//  Define 3 Query Delete, Insert, Select
//  Add executeQuery-Stub
//  Invoke executeQuery
//  Implement executeQuery
//  Implement failOnUnknownQueryType
//  Add 4th Query

//  Factory-Functions for Queries

type DeleteQuery = {
  primaryKey: number;
};

type InsertQuery = {
  values: { [key: string]: string };
};

type SelectQuery = {
  condition: string;
};

function executeQuery() {}
