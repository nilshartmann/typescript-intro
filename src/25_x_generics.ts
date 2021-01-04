export default undefined;

// ...wie können wir sicherstellen, dass dieses Array
//    nur strings enthalten kann??
// 😱🙋‍♀️🙋‍♂️
let data: Array<string> = [];
data.push('a')

// data.push(10)


// und wie übernehmen wir die Idee in unsere Response? 
// 😱🙋‍♀️🙋‍♂️

// type SuccessResponse = { data: string };
// type SuccessResponse = { data: string[] };
// type SuccessResponse = { data: Array<string> };

// let response: SuccessResponse = {
//     data: ["a", "b", "c"]
//     // data: ["a", "b", "c", true]
// }

// Wir können einen eigenen generischen Typ bauen
type ErrorResponse = { error: string };
type SuccessResponse<T> = { data: T };
type Response<T> = ErrorResponse | SuccessResponse<T>;

// let myResponse: Response<string>;
// let myResponse: Response<string[]>;
declare let myResponse: Response<Array<string>>;
if (isSuccessResponse(myResponse)) {
    let data = myResponse.data;

}

// Ebenso gehen generische Funktionen
function isSuccessResponse<T>(candidate: Response<T>): candidate is SuccessResponse<T> {
    return "data" in candidate;
}

// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// https://github.com/inversify/InversifyJS/issues/208
