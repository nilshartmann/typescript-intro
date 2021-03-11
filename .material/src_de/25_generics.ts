export default undefined;

// unsere Daten sind ein Array von Strings
// ...wie können wir sicherstellen, dass dieses Array
//    nur strings enthalten kann??
// 😱🙋‍♀️🙋‍♂️
let data = [];
data.push('a')
data.push(10)

// und wie übernehmen wir die Idee in unsere Response? 
// 😱🙋‍♀️🙋‍♂️
let response = {
    // data: ["a", "b", "c"]
    data: ["a", "b", "c", true]
}

// Nicht jedes Response gibt ein Array von Strings zurück, wie können wir das verallgemeinern? 
// 😱🙋‍♀️🙋‍♂️

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function isSuccessResponse(candidate: Response): candidate is SuccessResponse {
    return "data" in candidate;
  }
  
// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// https://github.com/inversify/InversifyJS/issues/208
