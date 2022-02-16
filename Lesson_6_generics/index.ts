//basic example
type ApiErrors = string[];

type ApiResponse<T> =
    | {
          success: true;
          data: T;
      }
    | { success: false; errors: ApiErrors };

type UserApiResponse = ApiResponse<{
    id: number;
    login: string;
    fullName: string;
}>;

function incorrectMerge<T, U>(obj: T, obj2: U) {
    return {
        ...obj,
        ...obj2,
    };
}

function correctMerge<T extends object, U extends object>(obj: T, obj2: U) {
    return {
        ...obj,
        ...obj2,
    };
}

const merge1 = incorrectMerge({ a: 1, b: 2 }, { c: 3, d: 4 });
const merge2 = incorrectMerge({ a: 1, b: 2 }, 5);

const merge3 = correctMerge({ a: 1, b: 2 }, 5);

function get(obj: object, key: keyof typeof obj) {
    return obj[key];
} // return type never something wrong

const obj = { a: 2, b: '3' };

type  FOO = keyof typeof obj;

function get1<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const result = get1({ a: 2, b: '3' }, 'a');
