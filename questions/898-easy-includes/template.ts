export type Includes<T extends readonly any[], U> = T extends [...infer Rest, U] | [U, ...infer Rest] ? true : false;
