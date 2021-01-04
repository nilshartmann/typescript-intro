export default undefined;

let data: Array<string> = [];
data.push('a')
// data.push(10)


// type SuccessResponse = { data: string };
// type SuccessResponse = { data: string[] };
// type SuccessResponse = { data: Array<string> };

// let response: SuccessResponse = {
//     data: ["a", "b", "c"]
//     // data: ["a", "b", "c", true]
// }

type ErrorResponse = { error: string };
type SuccessResponse<T> = { data: T };
type Response<T> = ErrorResponse | SuccessResponse<T>;

// let myResponse: Response<string>;
// let myResponse: Response<string[]>;
let myResponse: Response<Array<string>>;

// https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#generics
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
// https://github.com/inversify/InversifyJS/issues/208
